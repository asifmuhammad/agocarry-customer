import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Order } from 'src/models/order.models';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { User } from 'src/models/user.models';
import { Helper } from 'src/models/helper.models';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss']
})
export class OrdersPage implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  orders = new Array<Order>();
  isLoading = true;
  private pageNo = 1;
  private doneAll = false;
  private infiniteScrollEvent;
  private refresherEvent;
  private orderStatus = ['cancelled', 'rejected', 'refund', 'failed', 'complete'];
  pastOrderList = new Array<Order>();
  inProcessList = new Array<Order>();
  private myOrdersRef: firebase.database.Reference;
  userMe: User;

  constructor(private navCtrl: NavController, private translate: TranslateService,
    private uiElementService: UiElementsService, private apiService: ApiService) { }

  ngOnInit() {
    this.userMe = Helper.getLoggedInUser();
    if (this.userMe != null) {
      this.translate.get("loading").subscribe(value => {
        this.uiElementService.presentLoading(value);
        this.getOrders();
      });
    } else {
      this.isLoading = false;
      this.alertLogin();
    }
  }

  ngOnDestroy() {
    this.unRegisterUpdates();
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  doRefresh(event) {
    this.refresherEvent = event;
    this.pageNo = 1;
    this.orders = [];
    this.pastOrderList = [];
    this.inProcessList = [];
    this.isLoading = true;
    this.translate.get("loading").subscribe(value => {
      this.unRegisterUpdates();
      this.uiElementService.presentLoading(value);
      this.getOrders();
    });
  }

  getOrders() {
    this.apiService.getOrders(this.pageNo).subscribe(res => {
      if ((!this.orders || !this.orders.length) && res.data && res.data.length) this.registerUpdates();
      this.isLoading = false;
      this.orders = this.orders.concat(res.data);
      this.setupOrders();
      this.doneAll = (!res.data || !res.data.length);
      this.uiElementService.dismissLoading();
      if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
      if (this.refresherEvent) this.refresherEvent.target.complete();
    }, err => {
      console.log("getOrders", err);
      this.isLoading = false;
      if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
      if (this.refresherEvent) this.refresherEvent.target.complete();
      this.uiElementService.dismissLoading();
    });
  }

  setupOrders() {
    let inProcessList = [];
    let pastOrderList = [];
    for (let element of this.orders) {
      if (element.status.toLowerCase() === this.orderStatus[0] || element.status.toLowerCase() === this.orderStatus[1] || element.status.toLowerCase() == this.orderStatus[2] ||
        element.status.toLowerCase() === this.orderStatus[3] || element.status.toLowerCase() == this.orderStatus[4]) {
        pastOrderList.push(element);
      } else {
        inProcessList.push(element)
      }
    }
    this.inProcessList = inProcessList;
    this.pastOrderList = pastOrderList;
  }

  doInfinite(event) {
    if (this.doneAll) {
      event.target.complete();
    } else {
      this.infiniteScrollEvent = event;
      this.pageNo = this.pageNo + 1;
      this.getOrders();
    }
  }
  updateStatusOnId(oId: number, oNew: Order) {
    let index = -1;
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].id == oId) {
        index = i;
        break;
      }
    }
    if (index != -1) {
      this.orders[index].status = oNew.status;
      if (oNew.delivery != null) {
        oNew.delivery.delivery.user.image_url = "assets/images/empty_dp";
        if (!oNew.delivery.delivery.user.mediaurls || !oNew.delivery.delivery.user.mediaurls.images) oNew.delivery.delivery.user.mediaurls = { images: [] };
        for (let imgObj of oNew.delivery.delivery.user.mediaurls.images) if (imgObj["default"]) { oNew.delivery.delivery.user.image_url = imgObj["default"]; break; }
        this.orders[index].delivery = oNew.delivery;
      }
      this.setupOrders();
    }
  }

  registerUpdates() {
    const component = this;
    if (this.myOrdersRef == null) {
      this.myOrdersRef = firebase.database().ref("users").child(this.userMe.id).child("orders");
      this.myOrdersRef.on('child_changed', function (data) {
        var fireOrder = data.val() as { data: Order };
        if (fireOrder.data != null) component.updateStatusOnId(fireOrder.data.id, fireOrder.data);
      });
    }
  }

  unRegisterUpdates() {
    if (this.myOrdersRef != null) {
      this.myOrdersRef.off();
      this.myOrdersRef = null;
    }
  }

  alertLogin() {
    this.translate.get("alert_login_short").subscribe(value => this.uiElementService.presentToast(value));
    this.navCtrl.navigateForward(['./sign-in']);
  }

  navOrderDetail(order) {
    let navigationExtras: NavigationExtras = { state: { order: order } };
    this.navCtrl.navigateForward(['./orders-info'], navigationExtras);
  }

  navReviewProduct(order: Order) {
    let checkReviewsStatus = false;
    order.products.map((element) => {
      if (!element.vendor_product.product.reviewed) {
        checkReviewsStatus = true;
      }
    })
    if (checkReviewsStatus) {
      let navigationExtras: NavigationExtras = { state: { order: order } };
      this.navCtrl.navigateForward(['./item-review'], navigationExtras);
    } else {
      this.translate.get("empty_reviews").subscribe(value => this.uiElementService.presentToast(value));
    }

  }

}
