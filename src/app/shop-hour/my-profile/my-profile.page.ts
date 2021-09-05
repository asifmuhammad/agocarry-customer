import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { MyAddress } from 'src/models/address.models';
import { User } from 'src/models/user.models';
import { Helper } from 'src/models/helper.models';
import { NavigationExtras } from '@angular/router';
import { UiElementsService } from 'src/app/services/shoup-hour-services/common/ui-elements.service';
import { ApiService } from 'src/app/services/shoup-hour-services/network/api.service';
import { ECommerceService } from 'src/app/services/shoup-hour-services/common/ecommerce.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss']
})
export class MyProfilePage implements OnInit {
  private subscriptions = new Array<Subscription>();
  addresses = new Array<MyAddress>();
  isLoading = true;
  fabAction = false;
  addressIdSelected = -1;
  userMe: User;

  constructor(private navCtrl: NavController, private translate: TranslateService,
    private uiElementService: UiElementsService, private apiService: ApiService, public eComService: ECommerceService) {
    this.userMe = Helper.getLoggedInUser();
  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.userMe = Helper.getLoggedInUser();
    this.loadAddresses();
  }


  loadAddresses() {
    // if (!this.addresses || !this.addresses.length) 
    this.uiElementService.presentLoading(this.translate.instant("loading"));
    this.isLoading = true;
    this.subscriptions.push(this.apiService.getAddresses().subscribe(res => {
      this.uiElementService.dismissLoading();
      //this.addresses = res;
      this.isLoading = false;
    }, err => {
      console.log("getAddresses", err);
      this.uiElementService.dismissLoading();
      this.isLoading = false;
    }));
  }
  onAddressSelected(setected_id) {
    if (setected_id) {
      this.addressIdSelected = setected_id;
      let addressSelected = this.getSelectedAddress();
      if (addressSelected != null) {
        let navigationExtras: NavigationExtras = { state: { address: addressSelected } };
        this.navCtrl.navigateForward(['tabs/main-home/shop-hour/add-address'], navigationExtras);
      }
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
}
