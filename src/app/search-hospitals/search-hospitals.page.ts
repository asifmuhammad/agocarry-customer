import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyAddress } from 'src/models/address.models';
import { APP_CONFIG, AppConfig } from '../app.config';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { Helper } from 'src/models/helper.models';
import { NavigationExtras } from '@angular/router';
import { Hospital } from 'src/models/hospital.models';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Constants } from 'src/models/constants.models';

@Component({
  selector: 'app-search-hospitals',
  templateUrl: './search-hospitals.page.html',
  styleUrls: ['./search-hospitals.page.scss']
})
export class SearchHospitalsPage implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  private infiniteScrollEvent;
  private selectedLocationNew: MyAddress;
  private nextUrl: string;
  lastSearchString: string;
  searchHistory = new Array<string>();
  hospitals = new Array<Hospital>();
  isLoading = true;

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private navCtrl: NavController, private translate: TranslateService,
    private uiElementService: UiElementsService, private apiService: ApiService, private callNumber: CallNumber, private iab: InAppBrowser) {}

  ngOnInit() {
    this.searchHistory = Helper.getSearchHistory("hos");
    this.selectedLocationNew = Helper.getAddressSelected();
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
    Helper.setSearchHistory(this.searchHistory, "hos");
  }

  onSearchbarChange(event) {
    let query = "";
    if (event && event.detail && event.detail.value) query = event.detail.value.toLowerCase().trim();
    if (query.length) this.doSearch(query);
  }

  doSearch(queryIn) {
    this.isLoading = true;
    this.lastSearchString = queryIn;
    this.hospitals = [];
    this.nextUrl = null;
    this.translate.get("loading").subscribe(value => {
      this.uiElementService.presentLoading(value);
      this.subscriptions.push(this.apiService.getHospitalsWithQuery(queryIn, 1, this.selectedLocationNew).subscribe(res => this.handleRes(res), err => this.handleErr(err)));
    });
  }

  handleRes(res: Array<Hospital>) {
    this.hospitals = this.hospitals.concat(res);
    //this.nextUrl = res.links.next;
    if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
    this.isLoading = false;
    this.uiElementService.dismissLoading();

    if (res && res.length) if (!this.searchHistory.includes(this.lastSearchString)) this.searchHistory.unshift(this.lastSearchString);
    if (this.searchHistory.length > 3) this.searchHistory.splice(3, 1);
    Helper.setSearchHistory(this.searchHistory, "hos");
  }

  handleErr(err) {
    console.log("handleErr", err);
    this.uiElementService.dismissLoading();
    if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
    this.isLoading = false;
  }

  doInfiniteHospitals(event) {
    if (this.nextUrl == null) {
      event.target.complete();
    } else {
      this.infiniteScrollEvent = event;
      this.subscriptions.push(this.apiService.getURL(this.nextUrl).subscribe(res => {
        if (res && res.data && res.data.length) for (let pro of res.data) this.apiService.setupHospital(pro);
        this.handleRes(res);
      }, err => this.handleErr(err)));
    }
  }

  navHospitalInfo(hos) {
    window.localStorage.setItem(Constants.TEMP_HOSPITAL, JSON.stringify(hos));
    this.navCtrl.navigateForward(['./hospital-info']);
  }

  dialHospital(hospital: Hospital) {
    if (hospital.meta && hospital.meta.phone) {
      this.callNumber.callNumber(hospital.meta.phone, false).then(res => console.log('Launched dialer!', res)).catch(err => console.log('Error launching dialer', err));
    } else {
      this.translate.get("phone_unavailable").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

  navHospital(hospital: Hospital) {
    this.iab.create((("http://maps.google.com/maps?daddr=" + hospital.latitude + "," + hospital.longitude)), "_system");
  }

}
