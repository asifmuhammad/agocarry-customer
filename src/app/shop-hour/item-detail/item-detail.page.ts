import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { Category } from 'src/models/category.models';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/models/product.models';
import { Constants } from 'src/models/constants.models';
import { BaseListResponse } from 'src/models/base-list.models';
import { Helper } from 'src/models/helper.models';
import { UiElementsService } from 'src/app/services/shoup-hour-services/common/ui-elements.service';
import { ApiService } from 'src/app/services/shoup-hour-services/network/api.service';
import { ECommerceService } from 'src/app/services/shoup-hour-services/common/ecommerce.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss']
})
export class ItemDetailPage implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  similarProducts = new Array<Product>();
  product = new Product();
  category = new Category();
  cartCount: number;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private translate: TranslateService,
    private uiElementService: UiElementsService, private apiService: ApiService, private eComService: ECommerceService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let product_id = params["product_id"];

      this.translate.get(["loading", "something_wrong"]).subscribe(values => {
        this.uiElementService.presentLoading(values["loading"]);
        this.subscriptions.push(this.apiService.getProductsWithId(product_id).subscribe(res => {
          this.product = res;
          this.category = this.product.categories[0];
          this.loadProductsSimilar();
        }, err => {
          console.log("getProductsWithId", err);
          this.uiElementService.dismissLoading();
          this.uiElementService.presentErrorAlert(values["something_wrong"]);
          this.navCtrl.pop();
        }));
      });
    });
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  ionViewDidEnter() {
    this.cartCount = this.eComService.getCartItemsCount();
  }

  loadProductsSimilar() {
    if (this.product && this.product.vendor_products && this.product.vendor_products.length == 1) {
      this.subscriptions.push(this.apiService.getProductsWithVendorId(this.product.vendor_products[0].vendor_id, 1).subscribe(res => this.similarsRes(res), err => this.similarsErr(err)));
    } else {
      this.subscriptions.push(this.apiService.getProductsWithCategoryId(Constants.SCOPE_ECOMMERCE, this.category.id, null, 1).subscribe(res => this.similarsRes(res), err => this.similarsErr(err)));
    }
  }

  similarsRes(prosRes: BaseListResponse) {
    let index = -1;
    for (let i = 0; i < prosRes.data.length; i++) {
      if (prosRes.data[i].id == this.product.id) {
        index = i;
        break;
      }
    }
    if (index != -1) prosRes.data.splice(index, 1);
    this.similarProducts = prosRes.data;
    // this.doneAll = (!res.data || !res.data.length);
    // if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
    // this.isLoding = false;
    this.uiElementService.dismissLoading();
  }

  similarsErr(proError) {
    console.log("similarsErr", proError);
    this.uiElementService.dismissLoading();
  }

  addProCart(pro: Product) {
    let added = this.eComService.addOrIncrementCartItem(this.eComService.getCartItemFromProduct(pro == null ? this.product : pro));
    if (added)
      this.cartCount = this.eComService.getCartItemsCount();
    else
      this.translate.get("incremented_cart").subscribe(value => this.uiElementService.presentToast(value));

    this.cart();
  }

  toggleFavorite() {
    if (Helper.getLoggedInUser() != null) {
      this.translate.get("just_moment").subscribe(value => {
        this.uiElementService.presentLoading(value);
        this.subscriptions.push(this.apiService.toggleProductFavorite(this.product.id).subscribe(res => {
          this.product.is_favourite = !this.product.is_favourite;
          this.uiElementService.dismissLoading();
        }, err => {
          console.log("toggleProductFavorite", err);
          this.uiElementService.dismissLoading();
        }));
      });
    } else {
      this.alertLogin();
    }
  }

  navProDetail(pro) {
    let navigationExtras: NavigationExtras = { queryParams: { product_id: pro.id } };
    this.navCtrl.navigateForward(['tabs/main-home/shop-hour/item-detail'], navigationExtras);
  }

  cart() {
    this.navCtrl.navigateForward(['tabs/main-home/shop-hour/cart']);
  }

  navReviews() {
    let navigationExtras: NavigationExtras = { state: { product: this.product } };
    this.navCtrl.navigateForward(['tabs/main-home/shop-hour/reviews'], navigationExtras);
  }

  navSimilarsAll() {
    let navigationExtras: NavigationExtras = { state: { category: this.product.categories[0], vendors: this.product.vendor_products } };
    this.navCtrl.navigateForward(['tabs/main-home/shop-hour/seller-info'], navigationExtras);
  }

  alertLogin() {
    this.translate.get("alert_login_short").subscribe(value => this.uiElementService.presentToast(value));
    this.navCtrl.navigateForward(['sign-in']);
  }
}
