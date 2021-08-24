import { Component, Inject, ViewChild, OnInit } from '@angular/core';
import { Platform, NavController, IonRouterOutlet, AlertController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/models/constants.models';
import { Helper } from 'src/models/helper.models';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { User } from 'src/models/user.models';
import { Device } from '@ionic-native/device/ngx';
import * as firebase from 'firebase';
import { APP_CONFIG_ShopHour, ShopHourConfig } from '../shophour.config';
import { ApiService } from '../services/shoup-hour-services/network/api.service';
import { ECommerceService } from '../services/shoup-hour-services/common/ecommerce.service';
import { MyEventsService } from '../services/shoup-hour-services/events/my-events.service';

@Component({
  selector: 'app-shop-hour',
  templateUrl: './shop-hour.page.html',
  styleUrls: ['./shop-hour.page.scss'],
})
export class ShopHourPage implements OnInit {

  @ViewChild(IonRouterOutlet, { static: false }) routerOutlets: IonRouterOutlet;
  rtlSide = "ltr";
  rtlSideMenu = "start";
  userMe: User;
  appPagesToUse = [];
  showSideMenu = false;
  private appPagesLoggedIn = [{
    title: 'home',
    url: '/home',
    icon: 'zmdi zmdi-home'
  }, {
    title: 'my_account',
    url: '/my-profile',
    icon: 'zmdi zmdi-assignment-account'
  }, {
    title: 'my_orders',
    url: '/my-orders',
    icon: 'zmdi zmdi-shopping-cart'
  }, {
    title: 'offers',
    url: '/offers',
    icon: 'zmdi zmdi-label'
  }, {
    title: 'my_wishlist',
    url: '/wishlist',
    icon: 'zmdi zmdi-favorite'
  }, {
    title: 'about_us',
    url: '/about-us',
    icon: 'zmdi zmdi-assignment'
  }, {
    title: 'help_center',
    url: '/contact-us',
    icon: 'zmdi zmdi-comment-text'
  }, {
    title: 'languges',
    url: '/language',
    icon: 'zmdi zmdi-globe'
  }, {
    title: 'logout',
    url: '/sign-in',
    icon: 'zmdi zmdi-open-in-new'
  }];
  private appPagesLoggedOut = [{
    title: 'home',
    url: '/home',
    icon: 'zmdi zmdi-home'
  }, {
    title: 'my_account',
    url: '/my-profile',
    icon: 'zmdi zmdi-assignment-account'
  }, {
    title: 'about_us',
    url: '/about-us',
    icon: 'zmdi zmdi-assignment'
  }, {
    title: 'languges',
    url: '/language',
    icon: 'zmdi zmdi-globe'
  }, {
    title: 'login',
    url: '/sign-in',
    icon: 'zmdi zmdi-open-in-new'
  }];

  constructor(@Inject(APP_CONFIG_ShopHour) public config: ShopHourConfig, private alertCtrl: AlertController,
    private platform: Platform, private navCtrl: NavController, private device: Device,
    private splashScreen: SplashScreen, private apiService: ApiService, private menu: MenuController,
    private statusBar: StatusBar, private oneSignal: OneSignal, private eComService: ECommerceService,
    private translate: TranslateService, private myEvent: MyEventsService) {
    this.initializeApp();
    this.myEvent.getLanguageObservable().subscribe(value => {
      this.globalize(value);
      this.apiService.updateUser({ language: value }).subscribe(res => console.log('updateUser', res), err => console.log('updateUser', err));
      this.apiService.setupHeaders();
      this.onNavItemClick(this.appPagesToUse[0]);
    });
    this.myEvent.getUserMeObservable().subscribe(user => {
      this.eComService.clearCart();
      this.userMe = user;

      this.appPagesToUse = this.userMe ? this.appPagesLoggedIn : this.appPagesLoggedOut;
      this.onNavItemClick(this.appPagesToUse[0]);

      if (this.platform.is('cordova') && this.userMe) this.updatePlayerId();
    })

    //this.apiService.getURL("https://dashboard.vtlabs.dev/whatsapp.php?product_name=cookfu").subscribe(res => console.log("geturl", res), err => console.log("geturl", err));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();

      firebase.initializeApp({
        apiKey: this.config.firebaseConfig.apiKey,
        authDomain: this.config.firebaseConfig.authDomain,
        databaseURL: this.config.firebaseConfig.databaseURL,
        projectId: this.config.firebaseConfig.projectId,
        storageBucket: this.config.firebaseConfig.storageBucket,
        messagingSenderId: this.config.firebaseConfig.messagingSenderId
      });
      if (this.platform.is('cordova')) this.initOneSignal();

      this.apiService.setUuidAndPlatform(this.device.uuid, this.device.platform);
      this.refreshSettings();

      this.userMe = Helper.getLoggedInUser();
      this.appPagesToUse = this.userMe ? this.appPagesLoggedIn : this.appPagesLoggedOut;
      this.onNavItemClick(this.appPagesToUse[0]);
      setTimeout(() => {
        this.splashScreen.hide();
        if (this.platform.is('cordova') && this.userMe) this.updatePlayerId();
      }, 3000);

      this.globalize(Helper.getLanguageDefault());

      this.platform.backButton.subscribe(() => {
        if (this.routerOutlets && this.routerOutlets.canGoBack()) {
          this.routerOutlets.pop();
        } else {
          let currPathName = window.location.pathname;
          if (currPathName && currPathName.includes(this.appPagesToUse[0].url)) {
            navigator['app'].exitApp();
          } else {
            this.navCtrl.navigateRoot([this.appPagesToUse[0].url]);
          }
        }
      });
    });
  }

  globalize(languagePriority) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    Helper.setLocale(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    Helper.setLanguageDefault(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }

  setDirectionAccordingly(lang: string) {
    this.showSideMenu = false;
    switch (lang) {
      case 'iw':
      case 'ar':
        this.rtlSide = "rtl";
        this.rtlSideMenu = "end";
        break;
      default:
        this.rtlSide = "ltr";
        this.rtlSideMenu = "start";
        break;
    }
    setTimeout(() => this.showSideMenu = true, 100);
  }


  initOneSignal() {
    if (this.config.oneSignalAppId && this.config.oneSignalAppId.length && this.config.oneSignalGPSenderId && this.config.oneSignalGPSenderId.length) {
      this.oneSignal.startInit(this.config.oneSignalAppId, this.config.oneSignalGPSenderId);
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
      this.oneSignal.handleNotificationReceived().subscribe((data) => {
        console.log(data);
        Helper.saveNotification((data.payload.additionalData && data.payload.additionalData.title) ? data.payload.additionalData.title : data.payload.title,
          (data.payload.additionalData && data.payload.additionalData.body) ? data.payload.additionalData.body : data.payload.body,
          String(new Date().getTime()));
        let noti_ids_processed: Array<string> = JSON.parse(window.localStorage.getItem("noti_ids_processed"));
        if (!noti_ids_processed) noti_ids_processed = new Array<string>();
        noti_ids_processed.push(data.payload.notificationID);
        window.localStorage.setItem("noti_ids_processed", JSON.stringify(noti_ids_processed));
      });
      this.oneSignal.handleNotificationOpened().subscribe((data) => {
        let noti_ids_processed: Array<string> = JSON.parse(window.localStorage.getItem("noti_ids_processed"));
        if (!noti_ids_processed) noti_ids_processed = new Array<string>();
        let index = noti_ids_processed.indexOf(data.notification.payload.notificationID);
        if (index == -1) {
          Helper.saveNotification((data.notification.payload.additionalData && data.notification.payload.additionalData.title) ? data.notification.payload.additionalData.title : data.notification.payload.title,
            (data.notification.payload.additionalData && data.notification.payload.additionalData.body) ? data.notification.payload.additionalData.body : data.notification.payload.body,
            String(new Date().getTime()));
        } else {
          noti_ids_processed.splice(index, 1);
          window.localStorage.setItem("noti_ids_processed", JSON.stringify(noti_ids_processed));
        }
      });
      this.oneSignal.endInit();
    }
  }

  updatePlayerId() {
    this.oneSignal.getIds().then((id) => {
      if (id && id.userId) {
        let defaultLang = Helper.getLanguageDefault();

        this.apiService.updateUser({
          notification: "{\"" + Constants.ROLE_USER + "\":\"" + id.userId + "\"}",
          language: (defaultLang && defaultLang.length) ? defaultLang : this.config.availableLanguages[0].code
        }).subscribe(res => console.log('updateUser', res), err => console.log('updateUser', err));

        firebase.database().ref(Constants.REF_USERS_FCM_IDS).child((this.userMe.id + Constants.ROLE_USER)).set(id.userId);
      }
    });
  }

  refreshSettings() {
    this.apiService.getSettings().subscribe(res => { console.log('getSettings', res); Helper.setSettings(res); this.eComService.initialize(); this.apiService.reloadSetting();}, err => console.log('getSettings', err));
  }

  onNavItemClick(navItem: { title: string, url: string, icon: string }) {
    if (navItem.title == "logout") {
      this.translate.get(["logout_title", "logout_message", "no", "yes"]).subscribe(values => {
        this.alertCtrl.create({
          header: values["logout_title"],
          message: values["logout_message"],
          buttons: [{
            text: values["no"],
            handler: () => { }
          }, {
            text: values["yes"],
            handler: () => {
              this.eComService.clearCart();
              Helper.setLoggedInUserResponse(null);
              this.myEvent.setUserMeData(null);
              this.apiService.setupHeaders(null);

              try {
                (<any>window).FirebasePlugin.signOutUser(function () {
                  console.log("User signed out");
                }, function (error) {
                  console.error("Failed to sign out user: " + error);
                });
              } catch (e) { console.log("fireSignout", e); }

              try {
                firebase.auth().signOut().then(function () {
                  console.log('Signed Out');
                }, function (error) {
                  console.error('Sign Out Error', error);
                });
              } catch (e) { console.log("fireSignout", e); }

              this.navCtrl.navigateRoot(['./sign-in']);
            }
          }]
        }).then(alert => alert.present());
      });
    } else if (navItem.title == "my_account") {
      this.viewProfile();
    } else {
      let currPathName = window.location.pathname;
      if (!currPathName || !currPathName.includes(navItem.url)) {
        this.navCtrl.navigateRoot([navItem.url]);
      }
    }
  }

  viewProfile() {
    if (this.userMe != null) {
      this.navCtrl.navigateRoot(['./my-profile']);
    } else {
      this.navCtrl.navigateForward(['./sign-in']);
    }
  }

  ngOnInit() {
    // const path = window.location.pathname.split('folder/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
  }
}


