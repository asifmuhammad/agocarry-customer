import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ProductVendor } from 'src/models/vendor-product.models';
import { Category } from 'src/models/category.models';
import { Subscription } from 'rxjs';
import { Product } from 'src/models/product.models';
import { BaseListResponse } from 'src/models/base-list.models';
import { Constants } from 'src/models/constants.models';
import { UiElementsService } from 'src/app/services/shoup-hour-services/common/ui-elements.service';
import { ApiService } from 'src/app/services/shoup-hour-services/network/api.service';

@Component({
  selector: 'app-seller-info',
  templateUrl: './seller-info.page.html',
  styleUrls: ['./seller-info.page.scss']
})
export class SellerInfoPage implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  private infiniteScrollEvent;
  private nextUrl: string;
  vendorProfile: ProductVendor;
  products = new Array<Product>();
  isLoading = true;

  pageTitle: string;
  pageImage: string;

  constructor(private router: Router, private navCtrl: NavController, private translate: TranslateService,
    private uiElementService: UiElementsService, private apiService: ApiService) {
    console.log("getCurrentNavigation", this.router.getCurrentNavigation().extras.state);
    if (this.router.getCurrentNavigation().extras.state) {
      let category: Category = this.router.getCurrentNavigation().extras.state.category;
      let vendors: Array<ProductVendor> = this.router.getCurrentNavigation().extras.state.vendors;

      if (vendors && vendors.length == 1) {
        this.pageTitle = vendors[0].vendor.name;
        this.pageImage = vendors[0].vendor.image;
        this.translate.get("loading").subscribe(value => {
          this.uiElementService.presentLoading(value);
          this.subscriptions.push(this.apiService.getProductsWithVendorId(vendors[0].vendor_id, 1).subscribe(res => this.productsRes(res), err => this.productsErr(err)));
        });
      } else if (category != null) {
        this.pageTitle = category.title;
        this.pageImage = category.image;
        this.translate.get("loading").subscribe(value => {
          this.uiElementService.presentLoading(value);
          this.subscriptions.push(this.apiService.getProductsWithCategoryId(Constants.SCOPE_ECOMMERCE, category.id, null, 1).subscribe(res => this.productsRes(res), err => this.productsErr(err)));
        });
      } else {
        this.navCtrl.pop();
      }
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  productsRes(res: BaseListResponse) {
    this.products = this.products.concat(res.data);
    this.nextUrl = res.links.next;
    if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
    this.isLoading = false;
    this.uiElementService.dismissLoading();
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

  navProDetail(pro) {
    let navigationExtras: NavigationExtras = { queryParams: { product_id: pro.id } };
    this.navCtrl.navigateForward(['tabs/main-home/shop-hour/item-detail'], navigationExtras);
  }
}
