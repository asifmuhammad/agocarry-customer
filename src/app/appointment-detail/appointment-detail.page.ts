import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Appointment } from 'src/models/appointment.models';
import { NavController } from '@ionic/angular';
import { Constants } from 'src/models/constants.models';
import { Chat } from 'src/models/chat.models';
import { Helper } from 'src/models/helper.models';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.page.html',
  styleUrls: ['./appointment-detail.page.scss']
})
export class AppointmentDetailPage implements OnInit {
  ap: Appointment;
  ap_date_formatted: string;

  constructor(private navCtrl: NavController, private iab: InAppBrowser) {
  }

  ngOnInit() {
    if (this.ap == null) this.ap = JSON.parse(window.localStorage.getItem("appointment"));
    window.localStorage.removeItem("appointment");
    this.ap_date_formatted = Helper.formatTimestampDateTime((this.ap.date + " " + this.ap.time_from), Helper.getLocale());
  }

  chatAppointment() {
    let chat = new Chat();
    chat.chatId = this.ap.doctor.user_id + Constants.ROLE_DOCTOR;
    chat.chatImage = this.ap.doctor.user.image_url;
    chat.chatName = this.ap.doctor.name;
    chat.chatStatus = Helper.formatTimestampDateTime((this.ap.date + " " + this.ap.time_from), Helper.getLocale()) + " | " + ((this.ap.meta && this.ap.meta.reason) ? this.ap.meta.reason : this.ap.doctor.specializations_text);
    chat.myId = this.ap.user.id + Constants.ROLE_USER;
    let navigationExtras: NavigationExtras = { state: { chat: chat, doctor_user: this.ap.doctor.user } };
    this.navCtrl.navigateForward(['./chat'], navigationExtras);
  }

  dialAppointment() {
    this.iab.create((("https://api.whatsapp.com/send?phone=" + this.ap.doctor.user.mobile_number)), "_system");
  }

  navAppointment() {
    this.iab.create((("http://maps.google.com/maps?daddr=" + this.ap.latitude + "," + this.ap.longitude)), "_system");
  }

  rateDoc() {
    let navigationExtras: NavigationExtras = { state: { doctor: this.ap.doctor } };
    this.navCtrl.navigateForward(['./add-feedback'], navigationExtras);
  }

}
