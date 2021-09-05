import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/models/product.models';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from 'src/app/services/shoup-hour-services/common/ui-elements.service';
import { ApiService } from 'src/app/services/shoup-hour-services/network/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss']
})
export class WishlistPage implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  products = new Array<Product>();
  isLoading = true;

  constructor(private router: Router, private navCtrl: NavController, private translate: TranslateService,
    private uiElementService: UiElementsService, private apiService: ApiService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  ionViewDidEnter() {
    if (this.products && this.products.length) {
      this.loadProducts();
    } else {
      this.translate.get("loading").subscribe(value => {
        this.uiElementService.presentLoading(value);
        this.loadProducts();
      });
    }
  }

  loadProducts() {
    this.subscriptions.push(this.apiService.getProductsFavorite().subscribe(res => {
      this.products = res;
      this.isLoading = false;
      this.uiElementService.dismissLoading();
    }, err => {
      console.log("getProductsFavorite", err);
      this.uiElementService.dismissLoading();
      this.isLoading = false;
    }));
  }

  navProDetail(pro) {
    let navigationExtras: NavigationExtras = { queryParams: { product_id: pro.id } };
    this.navCtrl.navigateForward(['tabs/main-home/shop-hour/item-detail'], navigationExtras);
  }

  cart() {
    this.navCtrl.navigateForward(['tabs/main-home/shop-hour/cart']);
  }
  item_details() {
    this.navCtrl.navigateForward(['tabs/main-home/shop-hour/item-detail']);
  }
}
