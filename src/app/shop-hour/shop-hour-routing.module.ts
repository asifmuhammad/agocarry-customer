import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopHourPage } from './shop-hour.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shop-hour/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },{
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
  }, {
    path: 'item',
    loadChildren: () => import('./item/item.module').then(m => m.ItemPageModule)
  }, {
    path: 'item-detail',
    loadChildren: () => import('./item-detail/item-detail.module').then(m => m.ItemDetailPageModule)
  }, {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsPageModule)
  }, {
    path: 'seller-info',
    loadChildren: () => import('./seller-info/seller-info.module').then(m => m.SellerInfoPageModule)
  }, {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule)
  }, {
    path: 'select-address',
    loadChildren: () => import('./select-address/select-address.module').then(m => m.SelectAddressPageModule)
  }, {
    path: 'payment-mode',
    loadChildren: () => import('./payment-mode/payment-mode.module').then(m => m.PaymentModePageModule)
  }, {
    path: 'order-confirm',
    loadChildren: () => import('./order-confirm/order-confirm.module').then(m => m.OrderConfirmPageModule)
  }, {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfilePageModule)
  }, {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then(m => m.OffersPageModule)
  }, {
    path: 'add-address',
    loadChildren: () => import('./add-address/add-address.module').then(m => m.AddAddressPageModule)
  }, {
    path: 'title',
    loadChildren: () => import('./title/title.module').then(m => m.TitlePageModule)
  }, {
    path: 'my-orders',
    loadChildren: () => import('./my-orders/my-orders.module').then(m => m.MyOrdersPageModule)
  }, {
    path: 'add-review',
    loadChildren: () => import('./add-review/add-review.module').then(m => m.AddReviewPageModule)
  }, {
    path: 'wishlist',
    loadChildren: () => import('./wishlist/wishlist.module').then(m => m.WishlistPageModule)
  }, {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsPageModule)
  }, {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsPageModule)
  }, {
    path: 'language',
    loadChildren: () => import('./language/language.module').then(m => m.LanguagePageModule)
  }, {
    path: 'order-tracking',
    loadChildren: () => import('./order-tracking/order-tracking.module').then(m => m.OrderTrackingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopHourPageRoutingModule {}
