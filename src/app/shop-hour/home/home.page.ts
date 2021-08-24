import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MyAddress } from 'src/models/address.models';
import { NavController } from '@ionic/angular';
import { Category } from 'src/models/category.models';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { NavigationExtras } from '@angular/router';
import { Constants } from 'src/models/models-shop-hour/constants.models';
import { Product } from 'src/models/models-shop-hour/product.models';
import { UiElementsService } from 'src/app/services/shoup-hour-services/common/ui-elements.service';
import { ApiService } from 'src/app/services/shoup-hour-services/network/api.service';
import { ECommerceService } from 'src/app/services/shoup-hour-services/common/ecommerce.service';
import { APP_CONFIG_ShopHour, ShopHourConfig } from 'src/app/shophour.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  productsArray = new Array<{ category: Category; products: Array<Product>; }>();
  selectedLocation: MyAddress;
  categories: Array<Category>;
  banners: Array<Category>;
  isLoading = true;
  cartCount: number;

  constructor(@Inject(APP_CONFIG_ShopHour) public config: ShopHourConfig, private navCtrl: NavController, private translate: TranslateService,
    private uiElementService: UiElementsService, private apiService: ApiService, private eComService: ECommerceService) { }

  ngOnInit() {
    this.translate.get("loading").subscribe(value => { this.uiElementService.presentToast(value); this.loadBanners(); this.loadCategories(); });
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  ionViewDidEnter() {
    // let selectedLocationNew = Helper.getAddressSelected();
    // let changed: boolean = !this.selectedLocation || !selectedLocationNew || (this.selectedLocation.latitude != selectedLocationNew.latitude || this.selectedLocation.longitude != selectedLocationNew.longitude);
    // this.selectedLocation = selectedLocationNew;

    // if (changed) {
    //   //this.refreshProviders();
    // }

    this.cartCount = this.eComService.getCartItemsCount();
  }

  navCatDetail(cat: Category) {
    let navigationExtras: NavigationExtras = { state: { category: cat } };
    this.navCtrl.navigateForward(['./item'], navigationExtras);
  }

  loadCategories() {
    this.subscriptions.push(this.apiService.getCategoriesParents(Constants.SCOPE_ECOMMERCE).subscribe(res => {
      this.categories = res;
      console.log('getCategoriesParents', res);
      //Helper.setCategoriesParent(this.categories);
      if (res && res.length) {
        this.productsArray = [];
        for (let cat of res) {
          this.isLoading = true;
          this.loadProductsByCatId(cat);
        }
      } else {
        this.uiElementService.dismissLoading();
        this.isLoading = false;
      }
    }, err => {
      console.log("getCategoriesParents", err);
      this.uiElementService.dismissLoading();
      this.isLoading = false;
    }));
  }

  loadBanners() {
    this.subscriptions.push(this.apiService.getBanners(Constants.SCOPE_ECOMMERCE).subscribe(res => {
      this.banners = res;
      console.log('getBanners', res);
      // Helper.setCategoriesParent(this.categories);
      // this.uiElementService.dismissLoading();
      // this.isLoading = false;
    }, err => {
      console.log("getBanners", err);
      // this.uiElementService.dismissLoading();
      // this.isLoading = false;
    }));
  }

  loadProductsByCatId(cat: Category) {
    this.subscriptions.push(this.apiService.getProductsWithCategoryId(Constants.SCOPE_ECOMMERCE, cat.id, null, 1).subscribe(res => {
      if (res.data && res.data.length) this.productsArray.push({ category: cat, products: res.data });
      this.uiElementService.dismissLoading();
      this.isLoading = false;
    }, err => {
      console.log("getProductsWithCategoryId", err);
      this.uiElementService.dismissLoading();
      this.isLoading = false;
    }));
  }

  haveNothingToShow(): boolean {
    let toReturn = true;
    if (this.productsArray) {
      for (let catPros of this.productsArray) {
        if (catPros && catPros.products.length) {
          toReturn = false;
          break;
        }
      }
    }
    return this.isLoading ? false : toReturn;
  }

  navProDetail(pro) {
    let navigationExtras: NavigationExtras = { queryParams: { product_id: pro.id } };
    this.navCtrl.navigateForward(['./item-detail'], navigationExtras);
  }
  item() {
    this.navCtrl.navigateForward(['./item']);
  }
  navSearch() {
    this.navCtrl.navigateForward(['./search']);
  }
  cart() {
    this.navCtrl.navigateForward(['./cart']);
  }
}
