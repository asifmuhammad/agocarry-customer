import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Helper } from 'src/models/helper.models';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Coupon } from 'src/models/coupon.models';
import * as moment from 'moment';
import { ECommerceService } from 'src/app/services/shoup-hour-services/common/ecommerce.service';
import { UiElementsService } from 'src/app/services/shoup-hour-services/common/ui-elements.service';
import { ApiService } from 'src/app/services/shoup-hour-services/network/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss']
})
export class CartPage implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  fabAction = false;
  couponCode: string;
  currency_icon: string;
  couponRes: Coupon;

  constructor(private navCtrl: NavController, private modalController: ModalController, private translate: TranslateService,
    public eComService: ECommerceService, private uiElementService: UiElementsService, private apiService: ApiService) {
    this.currency_icon = Helper.getSetting("currency_icon");
    this.eComService.removeCoupon();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  verifyCoupon() {
    if (Helper.getLoggedInUser() != null) {
      if (this.couponCode && this.couponCode.length) {
        this.translate.get(["verifying", "invalid_coupon"]).subscribe(values => {
          this.uiElementService.presentLoading(values["verifying"]);
          this.subscriptions.push(this.apiService.checkCoupon(this.couponCode).subscribe(res => {
            this.uiElementService.dismissLoading();
            if (moment(res.expires_at).diff(moment()) > 0) {
              this.couponRes = res;
              this.applyCoupon();
            } else {
              this.couponRes = null;
              this.uiElementService.presentToast(values["invalid_coupon"]);
            }
          }, err => {
            this.couponCode = "";
            this.couponRes = null;
            this.uiElementService.presentToast(values["invalid_coupon"]);
            console.log("checkCoupon", err);
            this.uiElementService.dismissLoading();
          }));
        });
      } else {
        this.translate.get("err_field_coupon").subscribe(value => this.uiElementService.presentToast(value));
      }
    } else {
      this.alertLogin();
    }
  }

  applyCoupon() {
    this.eComService.applyCoupon(this.couponRes);
  }

  toggleFab() {
    this.fabAction = !this.fabAction;
  }

  navAddressSelection() {
    if (Helper.getLoggedInUser() != null) {
      this.navCtrl.navigateForward(['tabs/main-home/shop-hour/select-address']);
    } else {
      this.alertLogin();
    }
  }

  alertLogin() {
    this.translate.get("alert_login_short").subscribe(value => this.uiElementService.presentToast(value));
    this.navCtrl.navigateForward(['./sign-in']);
  }


}
