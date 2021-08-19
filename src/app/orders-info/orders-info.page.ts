import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Order } from 'src/models/order.models';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { Constants } from 'src/models/constants.models';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-orders-info',
  templateUrl: './orders-info.page.html',
  styleUrls: ['./orders-info.page.scss']
})
export class OrdersInfoPage implements OnInit {
  order: Order;
  orderProgress = 0;
  fabAction = false;
  prescriptionLink: string;

  constructor(private router: Router, private navCtrl: NavController, private translate: TranslateService,
    private uiElementService: UiElementsService, private photoViewer: PhotoViewer) { }

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.order = this.router.getCurrentNavigation().extras.state.order;
      switch (this.order.status) {
        case "cancelled":
        case "refund":
        case "hold":
        case "rejected":
        case "failed":
        case "new":
        case "pending":
          this.orderProgress = 0;
          break;
        case "accepted":
          this.orderProgress = 1;
          break;
        case "preparing":
        case "prepared":
        case "dispatched":
        case "intransit":
          this.orderProgress = 2;
          break;
        case "complete":
          this.orderProgress = 3;
          break;
      }
      if (this.order.meta && this.order.meta[Constants.KEY_PRESCRIPTION_URL]) this.prescriptionLink = this.order.meta[Constants.KEY_PRESCRIPTION_URL];
    }
  }

  toggleFab() {
    this.fabAction = !this.fabAction;
  }

  navTrackOrder() {
    if (this.canTrack()) {
      // this.order.delivery = JSON.parse(JSON.stringify({
      //   "id": 53,
      //   "status": "complete",
      //   "order_id": 112,
      //   "delivery": {
      //     "id": 16,
      //     "meta": {
      //       "gender": "female",
      //       "document_url": "https:\/\/firebasestorage.googleapis.com\/v0\/b\/kabra-1cf22.appspot.com\/o\/1599731565366?alt=media&token=28aaaa30-ea03-44c6-a7cf-b96e9b7d551c"
      //     },
      //     "is_verified": 1,
      //     "is_online": 1,
      //     "assigned": 0,
      //     "longitude": 78.5185876,
      //     "latitude": 29.2988124,
      //     "user": {
      //       "id": 18,
      //       "name": "Prachi",
      //       "email": "prachi27@gmail.com",
      //       "mobile_number": "+917617668705",
      //       "mobile_verified": 1,
      //       "active": 1,
      //       "language": "en",
      //       "notification": {
      //         "delivery": "19c028f0-8c98-4d6e-80fa-6795460b5005"
      //       },
      //       "meta": null,
      //       "mediaurls": {
      //         "images": [
      //           {
      //             "default": "http:\/\/opuslabs.in:9502\/storage\/121\/1599731584768.jpeg"
      //           }
      //         ]
      //       },
      //       "balance": -198,
      //       "wallet": {
      //         "id": 13,
      //         "user_id": 18,
      //         "balance": -198,
      //         "created_at": "2020-08-24 09:52:57",
      //         "updated_at": "2020-09-10 13:06:29"
      //       }
      //     }
      //   }
      // }));
      // if (this.order.delivery) {
      //   if (this.order.delivery.delivery && this.order.delivery.delivery.user) {
      //     if (!this.order.delivery.delivery.user.image_url) this.order.delivery.delivery.user.image_url = "assets/images/empty_image.png";
      //   }
      // };

      // this.order.address = JSON.parse(JSON.stringify({
      //   "id": 112,
      //   "formatted_address": "Sherkot, Uttar Pradesh 246747, India",
      //   "longitude": 78.574602,
      //   "latitude": 29.3227736,
      //   "order_id": 112
      // }));
      let navigationExtras: NavigationExtras = { state: { delivery: this.order.delivery, address: this.order.address, vendor: { name: this.order.vendor.name, image: this.order.vendor.image, location: { latitude: this.order.vendor.latitude, longitude: this.order.vendor.longitude } } } };
      this.navCtrl.navigateForward(['./order-tracking'], navigationExtras);
    } else {
      this.translate.get("track_unavailable").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

  canTrack(): boolean {
    return (this.order.status == "dispatched" || this.order.status == "intransit") && this.order.delivery != null;
  }

  viewPresciption() {
    this.photoViewer.show(this.prescriptionLink);
  }

}
