import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Helper } from 'src/models/helper.models';
import { MyAddress } from 'src/models/address.models';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { Subscription } from 'rxjs';
import { Category } from 'src/models/category.models';
import { Constants } from 'src/models/constants.models';
import { NavigationExtras } from '@angular/router';
import { MyEventsService } from '../services/events/my-events.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss']
})
export class DoctorsPage implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  selectedLocation: MyAddress;

  banners = new Array<Category>();
  specializations = new Array<Category>();
  doctorTypes = new Array<Category>();
  isLoading = true;

  constructor(private navCtrl: NavController, private translate: TranslateService, private myEventsService: MyEventsService,
    private uiElementService: UiElementsService, public apiService: ApiService) { }

  ngOnInit() {
    this.selectedLocation = Helper.getAddressSelected();
    this.subscriptions.push(this.myEventsService.getAddressObservable().subscribe(selectedLocationNew => {
      let changed: boolean = !this.selectedLocation || !selectedLocationNew || (this.selectedLocation.latitude != selectedLocationNew.latitude || this.selectedLocation.longitude != selectedLocationNew.longitude);
      this.selectedLocation = selectedLocationNew;
      if (changed) {
        this.doRefresh();
      }
    }));
    this.doRefresh();
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  doRefresh() {
    this.translate.get("loading").subscribe(value => {
      this.uiElementService.presentLoading(value);
      this.doctorTypes = [];
      this.specializations = [];
      this.banners = [];
      this.loadBanners();
      this.refreshSpecializations();
    });
  }

  refreshSpecializations() {
    this.subscriptions.push(this.apiService.getCategoriesWithScope(Constants.SCOPE_DOCTOR_TYPE).subscribe(res => this.doctorTypes = res, err => console.log("getCategoriesWithScope", err)));

    this.subscriptions.push(this.apiService.getCategoriesWithScope(Constants.SCOPE_SPECIALIZATION).subscribe(res => {
      this.specializations = res;
      this.uiElementService.dismissLoading();
      this.isLoading = false;
    }, err => {
      console.log("getCategoriesWithScope", err);
      this.uiElementService.dismissLoading();
      this.isLoading = false;
    }));
  }

  private loadBanners() {
    this.subscriptions.push(this.apiService.getBanners(Constants.SCOPE_DOCTOR).subscribe(res => this.banners = res, err => console.log("getBanners", err)));
  }

  pickLocation() {
    this.myEventsService.setCustomEventData("nav:pick_location");
  }

  navSearch() {
    if (this.selectedLocation && this.selectedLocation.latitude && this.selectedLocation.longitude) {
      this.navCtrl.navigateForward(['./specilities']);
    } else {
      this.translate.get("select_location").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

  navListDoctorsType(cat) {
    if (this.selectedLocation && this.selectedLocation.latitude && this.selectedLocation.longitude) {
      let navigationExtras: NavigationExtras = { state: { category: cat, scope: Constants.SCOPE_DOCTOR_TYPE } };
      this.navCtrl.navigateForward(['./list-of-doctors'], navigationExtras);
    } else {
      this.translate.get("select_location").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

  navListDoctors() {
    if (this.selectedLocation && this.selectedLocation.latitude && this.selectedLocation.longitude) {
      this.navCtrl.navigateForward(['./list-of-doctors']);
    } else {
      this.translate.get("select_location").subscribe(value => this.uiElementService.presentToast(value));
    }
  }
  navListDoctorsSpeciality(cat) {
    if (this.selectedLocation && this.selectedLocation.latitude && this.selectedLocation.longitude) {
      let navigationExtras: NavigationExtras = { state: { category: cat, scope: Constants.SCOPE_SPECIALIZATION } };
      this.navCtrl.navigateForward(['./list-of-doctors'], navigationExtras);
    } else {
      this.translate.get("select_location").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

}
