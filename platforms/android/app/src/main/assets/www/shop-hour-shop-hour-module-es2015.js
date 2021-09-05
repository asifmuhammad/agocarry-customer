(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-hour-shop-hour-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/shop-hour.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/shop-hour.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app [dir]=\"rtlSide\">\n\t<ion-split-pane contentId=\"main-content\">\n\t\t<ion-menu *ngIf=\"showSideMenu\" [side]=\"rtlSideMenu\" contentId=\"main-content\" type=\"overlay\">\n\t\t\t<div class=\"profile_box\">\n\t\t\t\t<h2 *ngIf=\"userMe\">\n\t\t\t\t\t{{\"hey\" | translate}},\n\t\t\t\t\t<span class=\"first_name\">{{userMe.name}}</span>\n\t\t\t\t\t<!-- <span class=\"last_name\">Smith</span> -->\n\t\t\t\t</h2>\n\t\t\t\t<h2 *ngIf=\"!userMe\">\n\t\t\t\t\t<span class=\"first_name\">{{'hey_guest' | translate}}</span>\n\t\t\t\t\t<!-- <span class=\"last_name\" [innerHTML]=\"'alert_login_msg' | translate\"></span> -->\n\t\t\t\t</h2>\n\t\t\t</div>\n\t\t\t<ion-content fullscreen>\n\t\t\t\t<ion-list lines=\"none\">\n\t\t\t\t\t<ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPagesToUse\">\n\t\t\t\t\t\t<ion-item mode=\"ios\" detail=\"false\" (click)=\"onNavItemClick(p)\">\n\t\t\t\t\t\t\t<div class=\"item_inner d-flex\">\n\t\t\t\t\t\t\t\t<ion-icon slot=\"start\" [class]=\"p.icon\"></ion-icon>\n\t\t\t\t\t\t\t\t<h2>{{ p.title | translate}}</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-menu-toggle>\n\t\t\t\t</ion-list>\n\t\t\t</ion-content>\n\t\t</ion-menu>\n\t\t<ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\t</ion-split-pane>\n</ion-app>");

/***/ }),

/***/ "./src/app/services/shoup-hour-services/events/my-events.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/services/shoup-hour-services/events/my-events.service.ts ***!
  \**************************************************************************/
/*! exports provided: MyEventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEventsService", function() { return MyEventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


 // For rxjs 6
let MyEventsService = class MyEventsService {
    constructor() {
        this.selectedLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getLanguageObservable() {
        return this.selectedLanguage.asObservable();
    }
    setLanguageData(data) {
        this.selectedLanguage.next(data);
    }
    getUserMeObservable() {
        return this.currentUser.asObservable();
    }
    setUserMeData(data) {
        this.currentUser.next(data);
    }
};
MyEventsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MyEventsService);



/***/ }),

/***/ "./src/app/shop-hour/shop-hour-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shop-hour/shop-hour-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ShopHourPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopHourPageRoutingModule", function() { return ShopHourPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [
    {
        path: '',
        redirectTo: 'shop-hour/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469"), __webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/shop-hour/home/home.module.ts")).then(m => m.HomePageModule)
    }, {
        path: 'search',
        loadChildren: () => __webpack_require__.e(/*! import() | search-search-module */ "search-search-module").then(__webpack_require__.bind(null, /*! ./search/search.module */ "./src/app/shop-hour/search/search.module.ts")).then(m => m.SearchPageModule)
    }, {
        path: 'item',
        loadChildren: () => __webpack_require__.e(/*! import() | item-item-module */ "item-item-module").then(__webpack_require__.bind(null, /*! ./item/item.module */ "./src/app/shop-hour/item/item.module.ts")).then(m => m.ItemPageModule)
    }, {
        path: 'item-detail',
        loadChildren: () => __webpack_require__.e(/*! import() | item-detail-item-detail-module */ "item-detail-item-detail-module").then(__webpack_require__.bind(null, /*! ./item-detail/item-detail.module */ "./src/app/shop-hour/item-detail/item-detail.module.ts")).then(m => m.ItemDetailPageModule)
    }, {
        path: 'reviews',
        loadChildren: () => __webpack_require__.e(/*! import() | reviews-reviews-module */ "reviews-reviews-module").then(__webpack_require__.bind(null, /*! ./reviews/reviews.module */ "./src/app/shop-hour/reviews/reviews.module.ts")).then(m => m.ReviewsPageModule)
    }, {
        path: 'seller-info',
        loadChildren: () => __webpack_require__.e(/*! import() | seller-info-seller-info-module */ "seller-info-seller-info-module").then(__webpack_require__.bind(null, /*! ./seller-info/seller-info.module */ "./src/app/shop-hour/seller-info/seller-info.module.ts")).then(m => m.SellerInfoPageModule)
    }, {
        path: 'cart',
        loadChildren: () => __webpack_require__.e(/*! import() | cart-cart-module */ "cart-cart-module").then(__webpack_require__.bind(null, /*! ./cart/cart.module */ "./src/app/shop-hour/cart/cart.module.ts")).then(m => m.CartPageModule)
    }, {
        path: 'select-address',
        loadChildren: () => Promise.all(/*! import() | select-address-select-address-module */[__webpack_require__.e("default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469"), __webpack_require__.e("common"), __webpack_require__.e("select-address-select-address-module")]).then(__webpack_require__.bind(null, /*! ./select-address/select-address.module */ "./src/app/shop-hour/select-address/select-address.module.ts")).then(m => m.SelectAddressPageModule)
    }, {
        path: 'payment-mode',
        loadChildren: () => __webpack_require__.e(/*! import() | payment-mode-payment-mode-module */ "payment-mode-payment-mode-module").then(__webpack_require__.bind(null, /*! ./payment-mode/payment-mode.module */ "./src/app/shop-hour/payment-mode/payment-mode.module.ts")).then(m => m.PaymentModePageModule)
    }, {
        path: 'order-confirm',
        loadChildren: () => __webpack_require__.e(/*! import() | order-confirm-order-confirm-module */ "order-confirm-order-confirm-module").then(__webpack_require__.bind(null, /*! ./order-confirm/order-confirm.module */ "./src/app/shop-hour/order-confirm/order-confirm.module.ts")).then(m => m.OrderConfirmPageModule)
    }, {
        path: 'my-profile',
        loadChildren: () => Promise.all(/*! import() | my-profile-my-profile-module */[__webpack_require__.e("default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469"), __webpack_require__.e("common"), __webpack_require__.e("my-profile-my-profile-module")]).then(__webpack_require__.bind(null, /*! ./my-profile/my-profile.module */ "./src/app/shop-hour/my-profile/my-profile.module.ts")).then(m => m.MyProfilePageModule)
    }, {
        path: 'offers',
        loadChildren: () => Promise.all(/*! import() | offers-offers-module */[__webpack_require__.e("default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469"), __webpack_require__.e("offers-offers-module")]).then(__webpack_require__.bind(null, /*! ./offers/offers.module */ "./src/app/shop-hour/offers/offers.module.ts")).then(m => m.OffersPageModule)
    }, {
        path: 'add-address',
        loadChildren: () => Promise.all(/*! import() | add-address-add-address-module */[__webpack_require__.e("default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469"), __webpack_require__.e("default~add-address-add-address-module~tabs-tabs-module"), __webpack_require__.e("default~add-address-add-address-module~title-title-module"), __webpack_require__.e("common"), __webpack_require__.e("add-address-add-address-module")]).then(__webpack_require__.bind(null, /*! ./add-address/add-address.module */ "./src/app/shop-hour/add-address/add-address.module.ts")).then(m => m.AddAddressPageModule)
    }, {
        path: 'title',
        loadChildren: () => Promise.all(/*! import() | title-title-module */[__webpack_require__.e("default~add-address-add-address-module~title-title-module"), __webpack_require__.e("title-title-module")]).then(__webpack_require__.bind(null, /*! ./title/title.module */ "./src/app/shop-hour/title/title.module.ts")).then(m => m.TitlePageModule)
    }, {
        path: 'my-orders',
        loadChildren: () => Promise.all(/*! import() | my-orders-my-orders-module */[__webpack_require__.e("common"), __webpack_require__.e("my-orders-my-orders-module")]).then(__webpack_require__.bind(null, /*! ./my-orders/my-orders.module */ "./src/app/shop-hour/my-orders/my-orders.module.ts")).then(m => m.MyOrdersPageModule)
    }, {
        path: 'add-review',
        loadChildren: () => __webpack_require__.e(/*! import() | add-review-add-review-module */ "add-review-add-review-module").then(__webpack_require__.bind(null, /*! ./add-review/add-review.module */ "./src/app/shop-hour/add-review/add-review.module.ts")).then(m => m.AddReviewPageModule)
    }, {
        path: 'wishlist',
        loadChildren: () => __webpack_require__.e(/*! import() | wishlist-wishlist-module */ "wishlist-wishlist-module").then(__webpack_require__.bind(null, /*! ./wishlist/wishlist.module */ "./src/app/shop-hour/wishlist/wishlist.module.ts")).then(m => m.WishlistPageModule)
    }, {
        path: 'about-us',
        loadChildren: () => __webpack_require__.e(/*! import() | about-us-about-us-module */ "about-us-about-us-module").then(__webpack_require__.bind(null, /*! ./about-us/about-us.module */ "./src/app/shop-hour/about-us/about-us.module.ts")).then(m => m.AboutUsPageModule)
    }, {
        path: 'contact-us',
        loadChildren: () => Promise.all(/*! import() | contact-us-contact-us-module */[__webpack_require__.e("default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469"), __webpack_require__.e("contact-us-contact-us-module")]).then(__webpack_require__.bind(null, /*! ./contact-us/contact-us.module */ "./src/app/shop-hour/contact-us/contact-us.module.ts")).then(m => m.ContactUsPageModule)
    }, {
        path: 'language',
        loadChildren: () => __webpack_require__.e(/*! import() | language-language-module */ "language-language-module").then(__webpack_require__.bind(null, /*! ./language/language.module */ "./src/app/shop-hour/language/language.module.ts")).then(m => m.LanguagePageModule)
    }, {
        path: 'order-tracking',
        loadChildren: () => Promise.all(/*! import() | order-tracking-order-tracking-module */[__webpack_require__.e("common"), __webpack_require__.e("order-tracking-order-tracking-module")]).then(__webpack_require__.bind(null, /*! ./order-tracking/order-tracking.module */ "./src/app/shop-hour/order-tracking/order-tracking.module.ts")).then(m => m.OrderTrackingPageModule)
    }
];
let ShopHourPageRoutingModule = class ShopHourPageRoutingModule {
};
ShopHourPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShopHourPageRoutingModule);



/***/ }),

/***/ "./src/app/shop-hour/shop-hour.module.ts":
/*!***********************************************!*\
  !*** ./src/app/shop-hour/shop-hour.module.ts ***!
  \***********************************************/
/*! exports provided: HttpLoaderFactory, ShopHourPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopHourPageModule", function() { return ShopHourPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shop_hour_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop-hour-routing.module */ "./src/app/shop-hour/shop-hour-routing.module.ts");
/* harmony import */ var _shop_hour_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop-hour.page */ "./src/app/shop-hour/shop-hour.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");










function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
}
let ShopHourPageModule = class ShopHourPageModule {
};
ShopHourPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shop_hour_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopHourPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            })
        ],
        declarations: [_shop_hour_page__WEBPACK_IMPORTED_MODULE_6__["ShopHourPage"]]
    })
], ShopHourPageModule);



/***/ }),

/***/ "./src/app/shop-hour/shop-hour.page.scss":
/*!***********************************************!*\
  !*** ./src/app/shop-hour/shop-hour.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Italic.woff2') format(\"woff2\"), url('GoogleSans-Italic.woff') format(\"woff\");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Regular.woff2') format(\"woff2\"), url('GoogleSans-Regular.woff') format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-BoldItalic.woff2') format(\"woff2\"), url('GoogleSans-BoldItalic.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Bold.woff2') format(\"woff2\"), url('GoogleSans-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-MediumItalic.woff2') format(\"woff2\"), url('GoogleSans-MediumItalic.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Medium.woff2') format(\"woff2\"), url('GoogleSans-Medium.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n*,\nbody,\nhtml,\np,\nspan,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nstrong,\nli {\n  --ion-font-family: \"Google Sans\";\n  font-family: \"Google Sans\";\n}\n.zmdi {\n  font: normal normal normal 14px/1 \"Material-Design-Iconic-Font\";\n}\nion-menu {\n  --background: url('img_menu.png') 0 0/100% 100% no-repeat;\n  --width: calc(100% - 50px);\n}\nion-menu ion-content {\n  --background: rgba(0, 0, 0, 0) !important;\n}\nion-menu .profile_box {\n  padding: 65px 34px 48px 34px;\n}\nion-menu .profile_box h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 1.6rem;\n}\nion-menu .profile_box h2 span {\n  display: block;\n}\nion-menu ion-list {\n  background: var(--transparent) !important;\n  padding: 0;\n  width: calc(100% - 20px);\n  margin: 0 auto;\n  position: relative;\n  z-index: 999;\n}\nion-menu ion-list ion-item {\n  padding: 17px 27px;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  --min-height: unset;\n  --background: var(--transparent) !important;\n  --background-activated: var(--transparent) !important;\n  --background-activated-opacity: 1;\n  --background-hover: var(--transparent) !important;\n  --ripple-color: var(--transparent) !important;\n}\nion-menu ion-list ion-item ion-icon {\n  font-size: 1.4rem;\n  min-width: 47px;\n  color: var(--white);\n}\nion-menu ion-list ion-item h2 {\n  margin: 0;\n  color: var(--white);\n  font-weight: 500;\n  font-size: 1.1rem;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\nion-menu ion-list .buy_this_app {\n  background: var(--white);\n  position: relative;\n  bottom: 0px;\n  right: 0px;\n  border-radius: 50px;\n  height: 49px;\n  display: flex;\n  align-items: center;\n  min-width: 170px;\n  z-index: 99999;\n  margin: 16px 21px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nion-menu ion-list .buy_this_app h2 {\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 1.1rem;\n  font-weight: 500;\n  padding: 0;\n}\nion-menu ion-list .buy_this_app h2 ion-icon {\n  font-size: 1.3rem;\n  min-width: 29px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC1ob3VyL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxzaG9wLWhvdXJcXHNob3AtaG91ci5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3AtaG91ci9zaG9wLWhvdXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxpR0FBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdBO0VBQ0ksMEJBQUE7RUFDQSxtR0FBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNGSjtBREtBO0VBQ0ksMEJBQUE7RUFDQSx5R0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRE9BO0VBQ0ksMEJBQUE7RUFDQSw2RkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRFNBO0VBQ0ksMEJBQUE7RUFDQSw2R0FBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUNSSjtBRFdBO0VBQ0ksMEJBQUE7RUFDQSxpR0FBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUNWSjtBRGVBOzs7Ozs7Ozs7Ozs7O0VBYUksZ0NBQUE7RUFDQSwwQkFBQTtBQ2JKO0FEZ0JBO0VBQ0ksK0RBQUE7QUNiSjtBRGdCQTtFQUNJLHlEQUFBO0VBQ0EsMEJBQUE7QUNiSjtBRGVJO0VBQ0kseUNBQUE7QUNiUjtBRGlCSTtFQUNJLDRCQUFBO0FDZlI7QURpQlE7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ2ZaO0FEaUJZO0VBQ0ksY0FBQTtBQ2ZoQjtBRHFCSTtFQUNJLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ25CUjtBRHFCUTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxxREFBQTtFQUNBLGlDQUFBO0VBQ0EsaURBQUE7RUFDQSw2Q0FBQTtBQ25CWjtBRHFCWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDbkJoQjtBRHNCWTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDcEJoQjtBRHdCUTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDdEJaO0FEd0JZO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUN0QmhCO0FEd0JnQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ3RCcEIiLCJmaWxlIjoic3JjL2FwcC9zaG9wLWhvdXIvc2hvcC1ob3VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXHJcbiAgICAgICAgdXJsKCcuLi8uLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xyXG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgICB1cmwoJy4uLy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xyXG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZEl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgICB1cmwoJy4uLy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZEl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcclxuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXHJcbiAgICAgICAgdXJsKCcuLi8uLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1NZWRpdW1JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXHJcbiAgICAgICAgdXJsKCcuLi8uLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bUl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xyXG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgIHVybCgnLi4vLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1NZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuXHJcblxyXG4qLFxyXG5ib2R5LFxyXG5odG1sLFxyXG5wLFxyXG5zcGFuLFxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2LFxyXG5zdHJvbmcsXHJcbmxpIHtcclxuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XHJcbn1cclxuXHJcbi56bWRpIHtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSAnTWF0ZXJpYWwtRGVzaWduLUljb25pYy1Gb250JztcclxufVxyXG5cclxuaW9uLW1lbnUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWdfbWVudS5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgLS13aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XHJcblxyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZV9ib3gge1xyXG4gICAgICAgIHBhZGRpbmc6IDY1cHggMzRweCA0OHB4IDM0cHg7XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG5cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE3cHggMjdweDtcclxuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcbiAgICAgICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQ7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0N3B4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnV5X3RoaXNfYXBwIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ5cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTcwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMjFweDtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI5cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1JdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUJvbGRJdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZEl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bUl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1NZWRpdW1JdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1NZWRpdW0ud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4qLFxuYm9keSxcbmh0bWwsXG5wLFxuc3BhbixcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnN0cm9uZyxcbmxpIHtcbiAgLS1pb24tZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbn1cblxuLnptZGkge1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgXCJNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnRcIjtcbn1cblxuaW9uLW1lbnUge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ltZ19tZW51LnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIC0td2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xufVxuaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cbmlvbi1tZW51IC5wcm9maWxlX2JveCB7XG4gIHBhZGRpbmc6IDY1cHggMzRweCA0OHB4IDM0cHg7XG59XG5pb24tbWVudSAucHJvZmlsZV9ib3ggaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuaW9uLW1lbnUgLnByb2ZpbGVfYm94IGgyIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1tZW51IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk5O1xufVxuaW9uLW1lbnUgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAxN3B4IDI3cHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLXJpcHBsZS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG59XG5pb24tbWVudSBpb24tbGlzdCBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBtaW4td2lkdGg6IDQ3cHg7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5pb24tbWVudSBpb24tbGlzdCBpb24taXRlbSBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5pb24tbWVudSBpb24tbGlzdCAuYnV5X3RoaXNfYXBwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDQ5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMTcwcHg7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBtYXJnaW46IDE2cHggMjFweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuaW9uLW1lbnUgaW9uLWxpc3QgLmJ1eV90aGlzX2FwcCBoMiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLW1lbnUgaW9uLWxpc3QgLmJ1eV90aGlzX2FwcCBoMiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBtaW4td2lkdGg6IDI5cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/shop-hour/shop-hour.page.ts":
/*!*********************************************!*\
  !*** ./src/app/shop-hour/shop-hour.page.ts ***!
  \*********************************************/
/*! exports provided: ShopHourPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopHourPage", function() { return ShopHourPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/constants.models */ "./src/models/constants.models.ts");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shophour_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shophour.config */ "./src/app/shophour.config.ts");
/* harmony import */ var _services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/shoup-hour-services/network/api.service */ "./src/app/services/shoup-hour-services/network/api.service.ts");
/* harmony import */ var _services_shoup_hour_services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/shoup-hour-services/common/ecommerce.service */ "./src/app/services/shoup-hour-services/common/ecommerce.service.ts");
/* harmony import */ var _services_shoup_hour_services_events_my_events_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/shoup-hour-services/events/my-events.service */ "./src/app/services/shoup-hour-services/events/my-events.service.ts");















let ShopHourPage = class ShopHourPage {
    constructor(config, alertCtrl, platform, navCtrl, device, splashScreen, apiService, menu, statusBar, oneSignal, eComService, translate, myEvent) {
        this.config = config;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.device = device;
        this.splashScreen = splashScreen;
        this.apiService = apiService;
        this.menu = menu;
        this.statusBar = statusBar;
        this.oneSignal = oneSignal;
        this.eComService = eComService;
        this.translate = translate;
        this.myEvent = myEvent;
        this.rtlSide = "ltr";
        this.rtlSideMenu = "start";
        this.appPagesToUse = [];
        this.showSideMenu = false;
        this.appPagesLoggedIn = [{
                title: 'home',
                url: '/home',
                icon: 'zmdi zmdi-home'
            }, {
                title: 'my_account',
                url: '/my-profile',
                icon: 'zmdi zmdi-assignment-account'
            }, {
                title: 'my_orders',
                url: '/my-orders',
                icon: 'zmdi zmdi-shopping-cart'
            }, {
                title: 'offers',
                url: '/offers',
                icon: 'zmdi zmdi-label'
            }, {
                title: 'my_wishlist',
                url: '/wishlist',
                icon: 'zmdi zmdi-favorite'
            }, {
                title: 'about_us',
                url: '/about-us',
                icon: 'zmdi zmdi-assignment'
            }, {
                title: 'help_center',
                url: '/contact-us',
                icon: 'zmdi zmdi-comment-text'
            }, {
                title: 'languges',
                url: '/language',
                icon: 'zmdi zmdi-globe'
            }, {
                title: 'logout',
                url: '/sign-in',
                icon: 'zmdi zmdi-open-in-new'
            }];
        this.appPagesLoggedOut = [{
                title: 'home',
                url: '/home',
                icon: 'zmdi zmdi-home'
            }, {
                title: 'my_account',
                url: '/my-profile',
                icon: 'zmdi zmdi-assignment-account'
            }, {
                title: 'about_us',
                url: '/about-us',
                icon: 'zmdi zmdi-assignment'
            }, {
                title: 'languges',
                url: '/language',
                icon: 'zmdi zmdi-globe'
            }, {
                title: 'login',
                url: '/sign-in',
                icon: 'zmdi zmdi-open-in-new'
            }];
        this.initializeApp();
        this.myEvent.getLanguageObservable().subscribe(value => {
            this.globalize(value);
            this.apiService.updateUser({ language: value }).subscribe(res => console.log('updateUser', res), err => console.log('updateUser', err));
            this.apiService.setupHeaders();
            this.onNavItemClick(this.appPagesToUse[0]);
        });
        this.myEvent.getUserMeObservable().subscribe(user => {
            this.eComService.clearCart();
            this.userMe = user;
            this.appPagesToUse = this.userMe ? this.appPagesLoggedIn : this.appPagesLoggedOut;
            this.onNavItemClick(this.appPagesToUse[0]);
            if (this.platform.is('cordova') && this.userMe)
                this.updatePlayerId();
        });
        //this.apiService.getURL("https://dashboard.vtlabs.dev/whatsapp.php?product_name=cookfu").subscribe(res => console.log("geturl", res), err => console.log("geturl", err));
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.show();
            firebase__WEBPACK_IMPORTED_MODULE_10__["initializeApp"]({
                apiKey: this.config.firebaseConfig.apiKey,
                authDomain: this.config.firebaseConfig.authDomain,
                databaseURL: this.config.firebaseConfig.databaseURL,
                projectId: this.config.firebaseConfig.projectId,
                storageBucket: this.config.firebaseConfig.storageBucket,
                messagingSenderId: this.config.firebaseConfig.messagingSenderId
            });
            if (this.platform.is('cordova'))
                this.initOneSignal();
            this.apiService.setUuidAndPlatform(this.device.uuid, this.device.platform);
            this.refreshSettings();
            this.userMe = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].getLoggedInUser();
            this.appPagesToUse = this.userMe ? this.appPagesLoggedIn : this.appPagesLoggedOut;
            this.onNavItemClick(this.appPagesToUse[0]);
            setTimeout(() => {
                this.splashScreen.hide();
                if (this.platform.is('cordova') && this.userMe)
                    this.updatePlayerId();
            }, 3000);
            this.globalize(src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].getLanguageDefault());
            this.platform.backButton.subscribe(() => {
                if (this.routerOutlets && this.routerOutlets.canGoBack()) {
                    this.routerOutlets.pop();
                }
                else {
                    let currPathName = window.location.pathname;
                    if (currPathName && currPathName.includes(this.appPagesToUse[0].url)) {
                        navigator['app'].exitApp();
                    }
                    else {
                        this.navCtrl.navigateRoot([this.appPagesToUse[0].url]);
                    }
                }
            });
        });
    }
    globalize(languagePriority) {
        this.translate.setDefaultLang("en");
        let defaultLangCode = this.config.availableLanguages[0].code;
        this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
        this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
        src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].setLocale(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
        src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].setLanguageDefault(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    }
    setDirectionAccordingly(lang) {
        this.showSideMenu = false;
        switch (lang) {
            case 'iw':
            case 'ar':
                this.rtlSide = "rtl";
                this.rtlSideMenu = "end";
                break;
            default:
                this.rtlSide = "ltr";
                this.rtlSideMenu = "start";
                break;
        }
        setTimeout(() => this.showSideMenu = true, 100);
    }
    initOneSignal() {
        if (this.config.oneSignalAppId && this.config.oneSignalAppId.length && this.config.oneSignalGPSenderId && this.config.oneSignalGPSenderId.length) {
            this.oneSignal.startInit(this.config.oneSignalAppId, this.config.oneSignalGPSenderId);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationReceived().subscribe((data) => {
                console.log(data);
                src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].saveNotification((data.payload.additionalData && data.payload.additionalData.title) ? data.payload.additionalData.title : data.payload.title, (data.payload.additionalData && data.payload.additionalData.body) ? data.payload.additionalData.body : data.payload.body, String(new Date().getTime()));
                let noti_ids_processed = JSON.parse(window.localStorage.getItem("noti_ids_processed"));
                if (!noti_ids_processed)
                    noti_ids_processed = new Array();
                noti_ids_processed.push(data.payload.notificationID);
                window.localStorage.setItem("noti_ids_processed", JSON.stringify(noti_ids_processed));
            });
            this.oneSignal.handleNotificationOpened().subscribe((data) => {
                let noti_ids_processed = JSON.parse(window.localStorage.getItem("noti_ids_processed"));
                if (!noti_ids_processed)
                    noti_ids_processed = new Array();
                let index = noti_ids_processed.indexOf(data.notification.payload.notificationID);
                if (index == -1) {
                    src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].saveNotification((data.notification.payload.additionalData && data.notification.payload.additionalData.title) ? data.notification.payload.additionalData.title : data.notification.payload.title, (data.notification.payload.additionalData && data.notification.payload.additionalData.body) ? data.notification.payload.additionalData.body : data.notification.payload.body, String(new Date().getTime()));
                }
                else {
                    noti_ids_processed.splice(index, 1);
                    window.localStorage.setItem("noti_ids_processed", JSON.stringify(noti_ids_processed));
                }
            });
            this.oneSignal.endInit();
        }
    }
    updatePlayerId() {
        this.oneSignal.getIds().then((id) => {
            if (id && id.userId) {
                let defaultLang = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].getLanguageDefault();
                this.apiService.updateUser({
                    notification: "{\"" + src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROLE_USER + "\":\"" + id.userId + "\"}",
                    language: (defaultLang && defaultLang.length) ? defaultLang : this.config.availableLanguages[0].code
                }).subscribe(res => console.log('updateUser', res), err => console.log('updateUser', err));
                firebase__WEBPACK_IMPORTED_MODULE_10__["database"]().ref(src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].REF_USERS_FCM_IDS).child((this.userMe.id + src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROLE_USER)).set(id.userId);
            }
        });
    }
    refreshSettings() {
        this.apiService.getSettings().subscribe(res => { console.log('getSettings', res); src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].setSettings(res); this.eComService.initialize(); this.apiService.reloadSetting(); }, err => console.log('getSettings', err));
    }
    onNavItemClick(navItem) {
        if (navItem.title == "logout") {
            this.translate.get(["logout_title", "logout_message", "no", "yes"]).subscribe(values => {
                this.alertCtrl.create({
                    header: values["logout_title"],
                    message: values["logout_message"],
                    buttons: [{
                            text: values["no"],
                            handler: () => { }
                        }, {
                            text: values["yes"],
                            handler: () => {
                                this.eComService.clearCart();
                                src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].setLoggedInUserResponse(null);
                                this.myEvent.setUserMeData(null);
                                this.apiService.setupHeaders(null);
                                try {
                                    window.FirebasePlugin.signOutUser(function () {
                                        console.log("User signed out");
                                    }, function (error) {
                                        console.error("Failed to sign out user: " + error);
                                    });
                                }
                                catch (e) {
                                    console.log("fireSignout", e);
                                }
                                try {
                                    firebase__WEBPACK_IMPORTED_MODULE_10__["auth"]().signOut().then(function () {
                                        console.log('Signed Out');
                                    }, function (error) {
                                        console.error('Sign Out Error', error);
                                    });
                                }
                                catch (e) {
                                    console.log("fireSignout", e);
                                }
                                this.navCtrl.navigateRoot(['./sign-in']);
                            }
                        }]
                }).then(alert => alert.present());
            });
        }
        else if (navItem.title == "my_account") {
            this.viewProfile();
        }
        else {
            let currPathName = window.location.pathname;
            if (!currPathName || !currPathName.includes(navItem.url)) {
                this.navCtrl.navigateRoot([navItem.url]);
            }
        }
    }
    viewProfile() {
        if (this.userMe != null) {
            this.navCtrl.navigateRoot(['./my-profile']);
        }
        else {
            this.navCtrl.navigateForward(['./sign-in']);
        }
    }
    ngOnInit() {
        // const path = window.location.pathname.split('folder/')[1];
        // if (path !== undefined) {
        //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        // }
    }
};
ShopHourPage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_shophour_config__WEBPACK_IMPORTED_MODULE_11__["APP_CONFIG_ShopHour"],] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__["Device"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
    { type: _services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"] },
    { type: _services_shoup_hour_services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_13__["ECommerceService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _services_shoup_hour_services_events_my_events_service__WEBPACK_IMPORTED_MODULE_14__["MyEventsService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"], { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"])
], ShopHourPage.prototype, "routerOutlets", void 0);
ShopHourPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop-hour',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shop-hour.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/shop-hour.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shop-hour.page.scss */ "./src/app/shop-hour/shop-hour.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_shophour_config__WEBPACK_IMPORTED_MODULE_11__["APP_CONFIG_ShopHour"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__["Device"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"], _services_shoup_hour_services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_13__["ECommerceService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _services_shoup_hour_services_events_my_events_service__WEBPACK_IMPORTED_MODULE_14__["MyEventsService"]])
], ShopHourPage);



/***/ })

}]);
//# sourceMappingURL=shop-hour-shop-hour-module-es2015.js.map