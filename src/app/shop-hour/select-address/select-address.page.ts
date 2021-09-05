import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { MyAddress } from 'src/models/address.models';
import { Subscription } from 'rxjs';
import { Helper } from 'src/models/helper.models';
import { ECommerceService } from 'src/app/services/shoup-hour-services/common/ecommerce.service';
import { UiElementsService } from 'src/app/services/shoup-hour-services/common/ui-elements.service';
import { ApiService } from 'src/app/services/shoup-hour-services/network/api.service';

@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.page.html',
  styleUrls: ['./select-address.page.scss']
})
export class SelectAddressPage implements OnInit {
  private subscriptions = new Array<Subscription>();
  addresses = new Array<MyAddress>();
  isLoading = true;
  fabAction = false;
  addressIdSelected = -1;
  currency_icon: string;

  constructor(private navCtrl: NavController, private translate: TranslateService, public eComService: ECommerceService,
    private uiElementService: UiElementsService, private apiService: ApiService) {
    this.currency_icon = Helper.getSetting("currency_icon");
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  ionViewDidEnter() {
    this.loadAddresses();
  }

  loadAddresses() {
    if (!this.addresses || !this.addresses.length) this.uiElementService.presentLoading(this.translate.instant("loading"));
    this.isLoading = true;
    this.subscriptions.push(this.apiService.getAddresses().subscribe(res => {
      this.uiElementService.dismissLoading();
      this.addresses = res;
      this.isLoading = false;
    }, err => {
      console.log("getAddresses", err);
      this.uiElementService.dismissLoading();
      this.isLoading = false;
    }));
  }

  onAddressSelected(event) {
    if (event.detail && event.detail.value) {
      this.addressIdSelected = event.detail.value;
    }
  }

  getSelectedAddress(): MyAddress {
    let toReturn = null;
    for (let ad of this.addresses) if (ad.id == this.addressIdSelected) { toReturn = ad; break; }
    return toReturn;
  }

  navAddressNew() {
    this.navCtrl.navigateForward(['tabs/main-home/shop-hour/add-address']);
  }

  navPaymentSelection() {
    let addressSelected = this.getSelectedAddress();
    if (addressSelected != null) {
      this.eComService.setupOrderRequestAddress(addressSelected);
      this.navCtrl.navigateForward(['tabs/main-home/shop-hour/payment-mode']);
    } else {
      this.translate.get("select_address").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

}
