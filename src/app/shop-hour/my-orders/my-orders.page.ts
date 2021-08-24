import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Order } from 'src/models/order.models';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Product } from 'src/models/product.models';
import { Helper } from 'src/models/helper.models';
import * as firebase from 'firebase/app';
import { UiElementsService } from 'src/app/services/shoup-hour-services/common/ui-elements.service';
import { ApiService } from 'src/app/services/shoup-hour-services/network/api.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss']
})
export class MyOrdersPage implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  private refresher: any;
  orders = new Array<Order>();
  isLoading = true;
  expandedOrderId = -1;
  private pageNo = 1;
  private doneAll = false;
  private infiniteScrollEvent;
  private myOrdersRef: firebase.database.Reference;

  constructor(private navCtrl: NavController, private translate: TranslateService,
    private uiElementService: UiElementsService, private apiService: ApiService) {
    this.translate.get("loading").subscribe(value => {
      this.uiElementService.presentLoading(value);
      this.getOrders();
    });
  }

  ngOnInit() {
    let userMe = Helper.getLoggedInUser();
    this.myOrdersRef = firebase.database().ref("users").child(userMe.id).child("orders");
  }

  ngOnDestroy() {
    this.unRegisterUpdates();
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  doRefresh(refresher) {
    this.unRegisterUpdates();
    if (this.isLoading) refresher.target.complete();
    this.refresher = refresher;
    this.pageNo = 1;
    this.expandedOrderId = -1;
    this.isLoading = true;
    this.orders = [];
    this.getOrders();
  }

  getOrders() {
    this.apiService.getOrders(this.pageNo).subscribe(res => {
      if ((!this.orders || !this.orders.length) && res.data && res.data.length) this.registerUpdates();
      this.isLoading = false;
      for (let o of res.data) this.setupOrderProgress(o);
      this.orders = this.orders.concat(res.data);
      this.doneAll = (!res.data || !res.data.length);
      if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
      if (this.refresher) this.refresher.target.complete();
      this.uiElementService.dismissLoading();
    }, err => {
      console.log("getOrders", err);
      this.isLoading = false;
      if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
      if (this.refresher) this.refresher.target.complete();
      this.uiElementService.dismissLoading();
    });
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

  setupOrderProgress(order: Order) {
    switch (order.status) {
      case "cancelled":
      case "refund":
      case "hold":
      case "rejected":
      case "failed":
        order.orderProgress = 0;
        break;
      case "new":
      case "pending":
        order.orderProgress = 1;
        break;
      case "accepted":
      case "preparing":
      case "prepared":
        order.orderProgress = 2;
        break;
      case "dispatched":
        order.orderProgress = 3;
        break;
      case "intransit":
        order.orderProgress = 4;
        break;
      case "complete":
        order.orderProgress = 5;
        break;
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

      this.orders.unshift(this.orders.splice(index, 1)[0]);
      this.setupOrderProgress(this.orders[0]);
      this.expandedOrderId = this.orders[0].id;
    }
  }

  toggleOrderExpansion(order: Order) {
    this.expandedOrderId = Number((this.expandedOrderId == order.id) ? -1 : order.id);
  }

  navTrackOrder(order: Order) {
    if (this.canTrack(order)) {
      let navigationExtras: NavigationExtras = { state: { delivery: order.delivery, address: order.address, vendor: { name: order.vendor.name, image: order.vendor.image, location: { latitude: order.vendor.latitude, longitude: order.vendor.longitude } } } };
      this.navCtrl.navigateForward(['tabs/main-home/shop-hour/order-tracking'], navigationExtras);
    } else {
      this.translate.get("track_unavailable").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

  canTrack(order): boolean {
    //return order.delivery != null && order.delivery.delivery != null ;
    return order.status == "intransit" && order.delivery != null && order.delivery.delivery != null;
  }

  navReviewProduct(order: Order, product: Product) {
    let navigationExtras: NavigationExtras = { state: { product: product, order_id: order.id } };
    this.navCtrl.navigateForward(['tabs/main-home/shop-hour/add-review'], navigationExtras);
  }

  registerUpdates() {
    const component = this;
    if (this.myOrdersRef != null) {
      this.myOrdersRef.on('child_changed', function (data) {
        var fireOrder = data.val() as { data: Order };
        console.log(fireOrder);
        if (fireOrder.data != null) component.updateStatusOnId(fireOrder.data.id, fireOrder.data);
      });
    }
  }

  unRegisterUpdates() {
    if (this.myOrdersRef != null) {
      this.myOrdersRef.off();
    }
  }

}
