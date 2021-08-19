import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Appointment } from 'src/models/appointment.models';
import { Subscription } from 'rxjs';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { Helper } from 'src/models/helper.models';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Chat } from 'src/models/chat.models';
import { NavigationExtras } from '@angular/router';
import { Constants } from 'src/models/constants.models';
import { APP_CONFIG, AppConfig } from '../app.config';
import * as moment from 'moment';
declare var Agora;

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.page.html',
  styleUrls: ['./my-appointments.page.scss']
})
export class MyAppointmentsPage implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  appointmentsAll = new Array<Appointment>();
  appointmentsUpcoming = new Array<Appointment>();
  appointmentsPast = new Array<Appointment>();
  isLoading = true;
  private pageNo = 1;
  private doneAll = false;
  private infiniteScrollEvent;
  private refresherEvent;
  optionsAppointment = -1;

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private navCtrl: NavController, private translate: TranslateService, private alertCtrl: AlertController,
    private uiElementService: UiElementsService, private apiService: ApiService, private iab: InAppBrowser, private platform: Platform) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  doRefresh(event) {
    this.refresherEvent = event;
    this.pageNo = 1;
    this.appointmentsAll = [];
    this.appointmentsPast = [];
    this.appointmentsUpcoming = [];
    this.isLoading = true;
    this.getAppointments();
  }

  ionViewDidEnter() {
    if (!this.appointmentsAll || !this.appointmentsAll.length) {
      if (Helper.getLoggedInUser() != null) {
        this.translate.get("loading").subscribe(value => {
          this.uiElementService.presentLoading(value);
          this.getAppointments();
        });
      } else {
        this.isLoading = false;
      }
    }
  }

  getAppointments() {
    this.apiService.getAppointments(Helper.getLoggedInUser().id, this.pageNo).subscribe(res => {
      this.isLoading = false;
      let momentNow = moment();
      for (let ap of res.data) {
        let momentAp = moment(ap.date + " " + ap.time_to);
        if (momentNow > momentAp) this.appointmentsPast.push(ap); else this.appointmentsUpcoming.push(ap);
        // if (momentNow > momentAp || ap.status == 'cancelled' || ap.status == 'rejected' || ap.status == 'complete') this.appointmentsPast.push(ap); else this.appointmentsUpcoming.push(ap);
      }
      this.appointmentsAll = this.appointmentsAll.concat(res.data);
      this.doneAll = (!res.data || !res.data.length);
      if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
      if (this.refresherEvent) this.refresherEvent.target.complete();
      this.uiElementService.dismissLoading();
    }, err => {
      console.log("getAppointments", err);
      this.isLoading = false;
      if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
      if (this.refresherEvent) this.refresherEvent.target.complete();
      this.uiElementService.dismissLoading();
    });
  }

  doInfiniteAppointments(event) {
    if (this.doneAll) {
      event.target.complete();
    } else {
      this.infiniteScrollEvent = event;
      this.pageNo = this.pageNo + 1;
      this.getAppointments();
    }
  }

  confirmCancel(ap) {
    this.showOptions(ap.id);
    this.translate.get(["cancel_ap_title", "cancel_ap_message", "no", "yes"]).subscribe(values => {
      this.alertCtrl.create({
        header: values["cancel_ap_title"],
        message: values["cancel_ap_message"],
        buttons: [{
          text: values["no"],
          handler: () => { }
        }, {
          text: values["yes"],
          handler: () => {
            this.updateAppointmentStatus(ap.id, 'cancelled');
          }
        }]
      }).then(alert => alert.present());
    });

    // this.translate.get("just_moment").subscribe(value => {
    //   this.uiElementService.presentToast(value);
    //   this.subscriptions.push(this.apiService.getAppointmentById(ap.id).subscribe(res => {
    //     this.uiElementService.dismissLoading();
    //     if (res && res.doctor && res.doctor.hospitals) {
    //       if (res.status != "cancelled" && res.status != "rejected") {
    //         this.translate.get(["cancel_ap_title", "cancel_ap_message", "no", "yes"]).subscribe(values => {
    //           this.alertCtrl.create({
    //             header: values["cancel_ap_title"],
    //             message: values["cancel_ap_message"],
    //             buttons: [{
    //               text: values["no"],
    //               handler: () => { }
    //             }, {
    //               text: values["yes"],
    //               handler: () => {
    //                 this.updateAppointmentStatus(ap.id, 'cancelled');
    //               }
    //             }]
    //           }).then(alert => alert.present());
    //         });
    //       } else {
    //         this.updateAppointmentInList(res, this.appointmentsAll);
    //         this.updateAppointmentInList(res, this.appointmentsUpcoming);
    //         this.updateAppointmentInList(res, this.appointmentsPast);
    //       }
    //     }
    //   }, err => {
    //     console.log("updateAppointment", err);
    //     this.uiElementService.dismissLoading();
    //   }));
    // });

  }

  navAppointmentDetail(ap) {
    window.localStorage.setItem("appointment", JSON.stringify(ap));
    this.navCtrl.navigateForward(['./appointment-detail']);
  }

  dialAppointment(ap: Appointment) {
    const component = this;
    if (this.platform.is("cordova") && this.config.agoraVideoConfig.enableAgoraVideo) {

      component.translate.get("just_moment").subscribe(value => {
        component.uiElementService.presentLoading(value);
        Agora.loginUser(null, ap.user.id, (res) => {
          console.log("Agora-loginUser", res);
          component.uiElementService.dismissLoading();
          component.callAgoraUser(ap);
        }, (err) => {
          console.log("Agora-loginUser", err);
          component.uiElementService.dismissLoading();
          if (err == "LOGIN_ERR_ALREADY_LOGGED_IN") { component.callAgoraUser(ap); }
        });
      });

    } else {
      this.iab.create((("https://api.whatsapp.com/send?phone=" + ap.doctor.user.mobile_number)), "_system");
    }
  }

  callAgoraUser(ap: Appointment) {
    const component = this;
    let channelId = Helper.getAgoraChannelId(ap.user.id, ap.doctor.user.id);
    Agora.callUser(ap.doctor.user.id, channelId, {
      image_caller: ap.user.image_url,
      image_callee: ap.doctor.user.image_url,
      name_caller: ap.user.name,
      name_callee: ap.doctor.name
    }, (res) => {
      console.log("Agora-callUser", res);
    }, (err) => {
      console.log("Agora-callUser", err);
      if (err == "peer_offline") {
        component.translate.get(["doc_offline_title", "doc_offline_message", "yes", "cancel", "doc_video_request_noti_message"]).subscribe(values => {
          component.alertCtrl.create({
            header: values["doc_offline_title"],
            message: values["doc_offline_message"],
            buttons: [{
              text: values["cancel"],
              handler: () => { }
            }, {
              text: values["yes"],
              handler: () => {
                component.apiService.postNotificationContent(Constants.ROLE_DOCTOR, ap.doctor.user.id, ap.user.name, values['doc_video_request_noti_message']).subscribe(res => console.log("notiS", res), err => console.log("notiF", err));
              }
            }]
          }).then(alert => alert.present());
        });
      } else {
        component.translate.get("something_wrong").subscribe(value => component.uiElementService.presentToast(value));
      }
    });
  }


  chatAppointment(ap: Appointment) {
    if (Helper.getLoggedInUser() != null) {
      let chat = new Chat();
      chat.chatId = ap.doctor.user_id + Constants.ROLE_DOCTOR;
      chat.chatImage = ap.doctor.user.image_url;
      chat.chatName = ap.doctor.name;
      chat.chatStatus = Helper.formatTimestampDateTime((ap.date + " " + ap.time_from), Helper.getLocale()) + " | " + ((ap.meta && ap.meta.reason) ? ap.meta.reason : ap.doctor.specializations_text);
      chat.myId = ap.user.id + Constants.ROLE_USER;
      let navigationExtras: NavigationExtras = { state: { chat: chat, doctor_user: ap.doctor.user } };
      this.navCtrl.navigateForward(['./chat'], navigationExtras);
    } else {
      this.alertLogin();
    }
  }

  showOptions(ap: Appointment) {
    this.optionsAppointment = this.optionsAppointment == ap.id ? -1 : ap.id;
  }

  private updateAppointmentStatus(apId, statusToUpdate) {
    this.translate.get("just_moment").subscribe(value => {
      this.uiElementService.presentToast(value);
      this.subscriptions.push(this.apiService.updateAppointment(apId, { status: statusToUpdate }).subscribe(res => {
        this.uiElementService.dismissLoading();
        this.updateAppointmentInList(res, this.appointmentsAll);
        this.updateAppointmentInList(res, this.appointmentsUpcoming);
        this.updateAppointmentInList(res, this.appointmentsPast);
      }, err => {
        console.log("updateAppointment", err);
        this.uiElementService.dismissLoading();
      }));
    });
  }

  private updateAppointmentInList(ap: Appointment, list: Array<Appointment>) {
    let index = -1;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == ap.id) {
        index = i;
        break;
      }
    }
    if (index != -1) list[index] = ap;
  }

  private alertLogin() {
    this.translate.get("alert_login_short").subscribe(value => this.uiElementService.presentToast(value));
    this.navCtrl.navigateForward(['./sign-in']);
  }

}
