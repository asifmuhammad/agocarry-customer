import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Category } from 'src/models/models-shop-hour/category.models';
import { Constants } from 'src/models/models-shop-hour/constants.models';
import { Helper } from 'src/models/models-shop-hour/helper.models';
import { Product } from 'src/models/models-shop-hour/product.models';
import { BaseListResponse } from 'src/models/models-shop-hour/base-list.models';
import { UiElementsService } from 'src/app/services/shoup-hour-services/common/ui-elements.service';
import { ApiService } from 'src/app/services/shoup-hour-services/network/api.service';
import { ECommerceService } from 'src/app/services/shoup-hour-services/common/ecommerce.service';
import { APP_CONFIG_ShopHour, ShopHourConfig } from 'src/app/shophour.config';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  private infiniteScrollEvent;
  private nextUrl: string;
  lastSearchString: string;
  categories = new Array<Category>();
  searchHistory = new Array<string>();
  products = new Array<Product>();
  isLoading = true;

  constructor(@Inject(APP_CONFIG_ShopHour) public config: ShopHourConfig, private navCtrl: NavController, private translate: TranslateService,
    private uiElementService: UiElementsService, private apiService: ApiService, private eComService: ECommerceService) {
    this.translate.get("loading").subscribe(value => { this.uiElementService.presentLoading(value); this.loadCategories(); });
    this.searchHistory = Helper.getSearchHistory();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
    Helper.setSearchHistory(this.searchHistory);
  }

  loadCategories() {
    this.subscriptions.push(this.apiService.getCategoriesParents(Constants.SCOPE_ECOMMERCE).subscribe(res => {
      this.categories = res;
      this.uiElementService.dismissLoading();
    }, err => {
      console.log("getCategoriesParents", err);
      this.uiElementService.dismissLoading();
    }));
  }

  onSearchbarChange(event) {
    let query = "";
    if (event && event.detail && event.detail.value) query = event.detail.value.toLowerCase().trim();
    if (query.length) this.doSearch(query);
  }

  doSearch(queryIn) {
    this.isLoading = true;
    this.lastSearchString = queryIn;
    this.products = [];
    this.nextUrl = null;
    this.subscriptions.push(this.apiService.getProductsWithQuery(queryIn, 1).subscribe(res => this.productsRes(res), err => this.productsErr(err)));

    // if (!this.searchHistory.includes(this.lastSearchString)) this.searchHistory.unshift(this.lastSearchString);
    // if (this.searchHistory.length > 3) this.searchHistory.splice(3, 1);
    // Helper.setSearchHistory(this.searchHistory);
  }

  productsRes(res: BaseListResponse) {
    this.products = this.products.concat(res.data);
    this.nextUrl = res.links.next;
    if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
    this.isLoading = false;
    this.uiElementService.dismissLoading();

    if (res.data && res.data.length) if (!this.searchHistory.includes(this.lastSearchString)) this.searchHistory.unshift(this.lastSearchString);
    if (this.searchHistory.length > 3) this.searchHistory.splice(3, 1);
    Helper.setSearchHistory(this.searchHistory);
  }

  productsErr(err) {
    console.log("productsErr", err);
    this.uiElementService.dismissLoading();
    if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
    this.isLoading = false;
  }

  doInfiniteProducts(event) {
    if (this.nextUrl == null) {
      event.target.complete();
    } else {
      this.infiniteScrollEvent = event;
      this.subscriptions.push(this.apiService.getURL(this.nextUrl).subscribe(res => {
        if (res && res.data && res.data.length) for (let pro of res.data) this.apiService.setupProduct(pro);
        this.productsRes(res);
      }, err => this.productsErr(err)));
    }
  }

  navCatDetail(cat: Category) {
    let navigationExtras: NavigationExtras = { state: { category: cat } };
    this.navCtrl.navigateForward(['tabs/main-home/shop-hour/item'], navigationExtras);
  }
  navProDetail(pro) {
    let navigationExtras: NavigationExtras = { queryParams: { product_id: pro.id } };
    this.navCtrl.navigateForward(['tabs/main-home/shop-hour/item-detail'], navigationExtras);
  }
}
