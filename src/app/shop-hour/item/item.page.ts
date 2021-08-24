import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Category } from 'src/models/category.models';
import { Subscription } from 'rxjs';
import { Constants } from 'src/models/models-shop-hour/constants.models';
import { Product } from 'src/models/models-shop-hour/product.models';
import { UiElementsService } from 'src/app/services/shoup-hour-services/common/ui-elements.service';
import { ApiService } from 'src/app/services/shoup-hour-services/network/api.service';
import { ECommerceService } from 'src/app/services/shoup-hour-services/common/ecommerce.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss']
})
export class ItemPage implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  private doneAll = false;
  private infiniteScrollEvent;
  private pageNo = 1;
  category: Category;
  products = new Array<Product>();
  isLoading = true;
  filterForm = false;
  filterTypeFarmers = true;
  filterTypeTradors = true;
  private type: string = null;

  constructor(private router: Router, private navCtrl: NavController, private translate: TranslateService,
    private uiElementService: UiElementsService, private apiService: ApiService, private eComService: ECommerceService) {
    console.log("getCurrentNavigation", this.router.getCurrentNavigation().extras.state);
    if (this.router.getCurrentNavigation().extras.state) {
      this.category = this.router.getCurrentNavigation().extras.state.category;
      this.translate.get("loading").subscribe(value => {
        this.uiElementService.presentLoading(value);
        this.loadProducts();
      });
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  toggleFilterForm() {
    this.filterForm = !this.filterForm;
    if (!this.filterForm) this.filterTypeChange();
  }

  filterTypeChange() {
    this.type = null;
    if (this.filterTypeFarmers && !this.filterTypeTradors) {
      this.type = "farmer";
    } else if (this.filterTypeTradors && !this.filterTypeFarmers) {
      this.type = "trader";
    }

    this.pageNo = 1;
    this.products = [];
    this.isLoading = true;
    this.loadProducts();
  }

  loadProducts() {
    this.subscriptions.push(this.apiService.getProductsWithCategoryId(Constants.SCOPE_ECOMMERCE, this.category.id, this.type, this.pageNo).subscribe(res => {
      this.products = this.products.concat(res.data);
      this.doneAll = (!res.data || !res.data.length);
      if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
      this.isLoading = false;
      this.uiElementService.dismissLoading();
    }, err => {
      console.log("getProductsWithCategoryId", err);
      this.uiElementService.dismissLoading();
      if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
      this.isLoading = false;
    }));
  }

  doInfiniteProducts(event) {
    if (this.doneAll) {
      event.target.complete();
    } else {
      this.infiniteScrollEvent = event;
      this.pageNo = this.pageNo + 1;
      this.loadProducts();
    }
  }

  navProDetail(pro) {
    let navigationExtras: NavigationExtras = { queryParams: { product_id: pro.id } };
    this.navCtrl.navigateForward(['tabs/main-home/shop-hour/item-detail'], navigationExtras);
  }

  product_list() {
    this.navCtrl.navigateForward(['tabs/main-home/shop-hour/product-list']);
  }
  cart() {
    this.navCtrl.navigateForward(['tabs/main-home/shop-hour/cart']);
  }

  filter() {
    this.navCtrl.navigateForward(['tabs/main-home/shop-hour/filter']);
  }
}
