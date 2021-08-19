import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyAddress } from 'src/models/address.models';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { NavigationExtras, Router } from '@angular/router';
import { Helper } from 'src/models/helper.models';
import { MyEventsService } from '../services/events/my-events.service';
import { ECommerceService } from '../services/common/ecommerce.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.page.html',
  styleUrls: ['./addresses.page.scss']
})
export class AddressesPage implements OnInit {
  private subscriptions = new Array<Subscription>();
  addresses = new Array<MyAddress>();
  isLoading = true;
  fabAction = false;
  addressIdSelected = -1;
  private pick_location: boolean;

  constructor(private navCtrl: NavController, private translate: TranslateService, private router: Router, private myEventService: MyEventsService,
    private uiElementService: UiElementsService, private apiService: ApiService, private eComService: ECommerceService) { }

  ngOnInit() {
    //this.uiElementService.presentLoading(this.translate.instant("loading"));
    if (this.router.getCurrentNavigation().extras.state) this.pick_location = this.router.getCurrentNavigation().extras.state.pick_location;
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  ionViewDidEnter() {
    this.loadAddresses();
  }

  loadAddresses() {
    if (!this.addresses || !this.addresses.length)
      this.uiElementService.presentLoading(this.translate.instant("loading"));
    this.isLoading = true;
    this.subscriptions.push(this.apiService.getAddresses().subscribe(res => {
      this.addresses = res.reverse();
      this.isLoading = false;
      this.uiElementService.dismissLoading();
    }, err => {
      console.log("getAddresses", err);
      this.uiElementService.dismissLoading();
      this.isLoading = false;
      this.uiElementService.dismissLoading();
    }));
  }

  onAddressSelected(event) {
    if (event.detail && event.detail.value) {
      this.addressIdSelected = event.detail.value;
      let addressSelected = this.getSelectedAddress();
      if (addressSelected != null) {
        if (this.pick_location) {
          this.eComService.clearCart();
          this.selectAddress(addressSelected);
          this.myEventService.setAddressData(addressSelected);
        } else {
          let navigationExtras: NavigationExtras = { state: { address: addressSelected, pick_location: false } };
          this.navCtrl.navigateForward(['./add-address'], navigationExtras);
        }
      }
    }
  }

  navAddressNew() {
    let navigationExtras: NavigationExtras = { state: { pick_location: false } };
    this.navCtrl.navigateForward(['./add-address'], navigationExtras);
  }

  getSelectedAddress(): MyAddress {
    let toReturn = null;
    for (let ad of this.addresses) if (ad.id == this.addressIdSelected) { toReturn = ad; break; }
    return toReturn;
  }

  selectAddress(address: MyAddress) {
    Helper.setAddressSelected(address);
    // this.eComService.setupOrderRequestAddress(address);
    this.navCtrl.pop()
  }
}
