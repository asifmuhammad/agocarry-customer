function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-info-product-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product-info/product-info.page.html": function node_modulesRawLoaderDistCjsJsSrcAppProductInfoProductInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <div class=\"title_inner d-flex\">\r\n                <h3 [ngClass]=\"product.is_favourite ? 'end active' : 'end'\" (click)=\"toggleFavorite()\">\r\n                    <ion-icon class=\"zmdi zmdi-bookmark-outline\"></ion-icon>\r\n                    <ion-icon class=\"zmdi zmdi-bookmark\"></ion-icon>\r\n                </h3>\r\n                <span class=\"cart_icon\" (click)=\"navCart()\">\r\n                    <ion-icon class=\"zmdi zmdi-shopping-cart ion-text-start\"></ion-icon>\r\n                    <ion-badge *ngIf=\"eComService.getCartItemsCount()\">{{eComService.getCartItemsCount()}}</ion-badge>\r\n                </span>\r\n            </div>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n    <div class=\"banner\">\r\n        <div *ngIf=\"product.prescription_required\" class=\"prescription_required\">\r\n            <img src=\"assets/images/px.png\">\r\n        </div>\r\n        <div *ngIf=\"product.images\" class=\"banner_img\">\r\n            <img [src]=\"product.images[0]\" (click)=\"bigImage(product.images[0])\">\r\n        </div>\r\n        <div class=\"banner_details\">\r\n            <h2 class=\"item_title d-flex\">\r\n                {{product.title}}\r\n                <span class=\"end\">\r\n                    <ion-icon class=\"zmdi zmdi-star ion-text-start\"></ion-icon>\r\n                    {{product.ratings}}\r\n                </span>\r\n            </h2>\r\n            <h3 class=\"d-flex\">\r\n                <span class=\"category\">{{category.title}}</span>\r\n                <span *ngIf=\"product.ratings_count > 0\" class=\"end\" (click)=\"navReviews()\">\r\n                    {{'read_all' | translate}} {{product.ratings_count}} {{'reviews' | translate}}\r\n                    <ion-icon class=\"zmdi zmdi-chevron-right ion-text-end\"></ion-icon>\r\n                </span>\r\n            </h3>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"tab_content\">\r\n        <!--About section start> -->\r\n        <div>\r\n            <div class=\"description\">\r\n                <div class=\"text_box\">\r\n                    <h2>{{'description' | translate}}</h2>\r\n                    <p>{{product.detail}}</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngFor=\"let vp of product.vendor_products\" class=\"seller_details\"\r\n                (click)=\"navVendorProfile(vp.vendor.id)\">\r\n                <h2>{{'sold_by' | translate}}</h2>\r\n                <div class=\"d-flex\" style=\"align-items: flex-start;\">\r\n                    <div class=\"img_box center_img\">\r\n                        <img [src]=\"vp.vendor.image\" class=\"crop_img\">\r\n                    </div>\r\n                    <div class=\"text_box\">\r\n                        <h3>{{vp.vendor.name}}</h3>\r\n                        <p class=\"d-flex\">\r\n                            <span class=\"address\">\r\n                                <ion-icon class=\"zmdi zmdi-pin ion-text-center\"></ion-icon>\r\n                                {{vp.vendor.address}}\r\n                            </span>\r\n                            <span class=\"end\">\r\n                                {{'view_profile' | translate}}\r\n                                <ion-icon class=\"zmdi zmdi-chevron-right ion-text-end\"></ion-icon>\r\n                            </span>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div *ngIf=\"similarProducts && similarProducts.length\" class=\"smilar_products\">\r\n                <h1> {{'smilar_products' | translate}}</h1>\r\n                <div class=\"item_row\">\r\n                    <ion-row>\r\n                        <ion-col *ngFor=\"let product of similarProducts\" size=\"6\">\r\n                            <div class=\"item ion-text-center\">\r\n                                <div class=\"item_content\" (click)=\"navProDetail(product)\">\r\n                                    <div class=\"img_box\">\r\n                                        <img [src]=\"product.images[0]\">\r\n                                    </div>\r\n                                    <h2>{{product.title}}</h2>\r\n                                </div>\r\n                                <div class=\"item_footer d-flex\">\r\n                                    <h3 class=\"ion-text-center\">{{product.priceToShow}}</h3>\r\n                                    <h4 class=\"ion-text-center end\">\r\n                                        <span (click)=\"addProCart(product)\">\r\n                                            +\r\n                                        </span>\r\n                                    </h4>\r\n                                </div>\r\n                            </div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--About section end> -->\r\n\r\n\r\n\r\n        <!--Reviews section Start> -->\r\n\r\n        <!--\r\n\t\t<div *ngSwitchCase=\"'reviews'\">\r\n\t\t\t<div class=\"empty-view\" *ngIf=\"!isLoading && (!reviews || !reviews.length)\">\r\n\t\t\t\t<div style=\"text-align:center; margin-top: 200px;\">\r\n\t\t\t\t\t<img src=\"assets/images/empty_orders.png\" alt=\"no offers\" />\r\n\t\t\t\t\t<span style=\"color:#9E9E9E; font-weight:bold;\">\r\n\t\t\t\t\t\t{{'empty_reviews' | translate}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<ion-list lines=\"none\">\r\n\t\t\t\t<ion-item *ngFor=\"let review of reviews\">\r\n\t\t\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t\t\t<div class=\"reviewer_details d-flex\">\r\n\t\t\t\t\t\t\t<div class=\"img_box center_img\">\r\n\t\t\t\t\t\t\t\t<img [src]=\"review.user.image_url\" class=\"crop_img\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t\t\t<h2 class=\"d-flex\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"reviewer_name\">{{review.user.name}}</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"end\">\r\n\t\t\t\t\t\t\t\t\t\t{{review.rating}}\r\n\t\t\t\t\t\t\t\t\t\t&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t<ion-icon\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"review.rating>=1 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t<ion-icon\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"review.rating>=2 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t<ion-icon\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"review.rating>=3 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t<ion-icon\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"review.rating>=4 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t<ion-icon\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"review.rating>=5 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</h2>\r\n\r\n\t\t\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t\t\t {{'for' | translate}}&nbsp;<strong>Cold Fever</strong> \r\n\t\t\t\t\t\t\t\t\t<span class=\"end\">{{review.created_at}}</span>\r\n\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p>{{review.review}}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-list>\r\n\t\t\t<ion-infinite-scroll (ionInfinite)=\"doInfiniteReviews($event)\">\r\n\t\t\t\t<ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{'loading' | translate}}\">\r\n\t\t\t\t</ion-infinite-scroll-content>\r\n\t\t\t</ion-infinite-scroll>\r\n\t\t</div>\r\n-->\r\n        <!--Reviews section end> -->\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-item lines=\"none\">\r\n        <div class=\"item_inner d-flex\">\r\n            <h2>{{product.priceToShow}}</h2>\r\n            <!-- <ion-select [(ngModel)]=\"gaming\" class=\"end\" interface=\"popover\" mode=\"ios\">\r\n                <ion-select-option value=\"1\">500gm Pack</ion-select-option>\r\n                <ion-select-option value=\"2\">200gm Pack</ion-select-option>\r\n                <ion-select-option value=\"3\">100gm Pack</ion-select-option>\r\n            </ion-select>\r\n            <ion-icon class=\"zmdi zmdi-chevron-down ion-text-end\"></ion-icon> -->\r\n        </div>\r\n    </ion-item>\r\n    <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"addProCart(null)\">\r\n        {{'add_to_cart' | translate}}\r\n    </ion-button>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/product-info/product-info-routing.module.ts": function srcAppProductInfoProductInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductInfoPageRoutingModule", function () {
      return ProductInfoPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _product_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-info.page */
    "./src/app/product-info/product-info.page.ts");

    var routes = [{
      path: '',
      component: _product_info_page__WEBPACK_IMPORTED_MODULE_3__["ProductInfoPage"]
    }];

    var ProductInfoPageRoutingModule = function ProductInfoPageRoutingModule() {
      _classCallCheck(this, ProductInfoPageRoutingModule);
    };

    ProductInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/product-info/product-info.module.ts": function srcAppProductInfoProductInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductInfoPageModule", function () {
      return ProductInfoPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _product_info_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-info-routing.module */
    "./src/app/product-info/product-info-routing.module.ts");
    /* harmony import */


    var _product_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./product-info.page */
    "./src/app/product-info/product-info.page.ts");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");

    var ProductInfoPageModule = function ProductInfoPageModule() {
      _classCallCheck(this, ProductInfoPageModule);
    };

    ProductInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _product_info_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductInfoPageRoutingModule"]],
      providers: [_ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["PhotoViewer"]],
      declarations: [_product_info_page__WEBPACK_IMPORTED_MODULE_7__["ProductInfoPage"]]
    })], ProductInfoPageModule);
    /***/
  },

  /***/
  "./src/app/product-info/product-info.page.scss": function srcAppProductInfoProductInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title .title_inner h3 {\n  margin: 0;\n  position: relative;\n  overflow: hidden;\n  min-width: 40px;\n  height: 34px;\n}\nion-header ion-toolbar ion-title .title_inner h3 ion-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  min-width: unset;\n  text-align: center;\n  font-size: 1.55rem !important;\n}\nion-header ion-toolbar ion-title .title_inner h3 ion-icon.zmdi-bookmark {\n  display: none;\n}\nion-header ion-toolbar ion-title .title_inner h3.active ion-icon.zmdi-bookmark {\n  display: inline;\n  color: var(--secondary);\n}\nion-header ion-toolbar ion-title .title_inner h3.active ion-icon.zmdi-bookmark-outline {\n  display: none;\n}\nion-header ion-toolbar ion-title .title_inner span.cart_icon {\n  position: relative;\n  min-width: 27px;\n  display: block;\n}\nion-header ion-toolbar ion-title .title_inner span.cart_icon ion-badge {\n  background: var(--red_color);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  line-height: 15px;\n  display: block;\n  font-size: 0.8rem !important;\n  position: absolute;\n  top: 12px;\n  right: 0;\n}\nion-header ion-toolbar ion-title .title_inner span.cart_icon ion-icon {\n  position: relative;\n  top: 3px;\n  font-size: 1.2rem;\n}\n.banner {\n  background: var(--white);\n  padding-top: 26px;\n  position: relative;\n  z-index: 99;\n}\n.banner .prescription_required {\n  position: absolute;\n  right: 19px;\n  z-index: 99;\n  top: 16px;\n  width: 20px;\n}\n.banner .banner_img {\n  display: block;\n  margin: 0 auto;\n  width: 245px;\n  margin-bottom: 31px;\n}\n.banner .banner_img img {\n  display: block;\n  margin: 0 auto;\n}\n.banner .banner_details {\n  padding: 0px 18px 10px 18px;\n}\n.banner .banner_details h2 {\n  color: var(--text-dark);\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 500;\n  padding-bottom: 4px;\n}\n.banner .banner_details h2 span {\n  display: flex;\n  align-items: center;\n  color: var(--yelow_color);\n  font-weight: 500;\n  font-size: 0.95rem;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.banner .banner_details h2 span ion-icon {\n  min-width: 20px;\n  font-size: 1.1rem;\n}\n.banner .banner_details h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n.banner .banner_details h3 span.end {\n  display: flex;\n  align-items: center;\n}\n.banner .banner_details h3 span.end ion-icon {\n  font-size: 1.5rem;\n  width: 15px;\n  min-width: 15px;\n}\n.banner ion-segment {\n  border: none !important;\n  background: none !important;\n  --background: var(--transparent) !important;\n}\n.banner ion-segment ion-segment-button {\n  background: none !important;\n  position: relative;\n  font-size: 0.95rem;\n  font-weight: 400;\n  color: var(--primary) !important;\n  text-transform: unset !important;\n  letter-spacing: 0;\n  --color-checked: var(--transparent) !important;\n  text-align: justify !important;\n  --background-checked: var(--transparent) !important;\n  --border-width: 0 !important;\n  --border-radius: 0 !important;\n  box-shadow: none !important;\n  --background: var(--transparent) !important;\n  --indicator-box-shadow: none !important;\n  --indicator-color: var(--transparent) !important;\n  --indicator-height: 0px !important;\n}\n.banner ion-segment ion-segment-button ion-label {\n  opacity: 1;\n}\n.banner ion-segment ion-segment-button::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  right: 0;\n  left: 0;\n  margin: 0 auto;\n  height: 2.5px;\n  transition: all 0.3s;\n  width: 0;\n  background: var(--primary);\n  border-radius: 0px;\n  z-index: 999;\n}\n.banner ion-segment ion-segment-button.segment-button-checked::before {\n  width: 100px;\n  transition: all 0.3s;\n}\n.banner ion-segment.ios {\n  min-height: 55px;\n}\n.banner ion-segment.ios .ion-segment-button {\n  margin: 0 10px;\n  background: none !important;\n  --indicator-color: var(--transparent) !important;\n  --indicator-height: 0px !important;\n}\n.tab_content {\n  margin-top: 8px;\n}\n.tab_content .description {\n  margin-bottom: 8px;\n}\n.tab_content .description .text_box {\n  background: var(--white);\n  padding: 18px 18px 0 18px;\n}\n.tab_content .description .text_box p {\n  margin: 0;\n  font-size: 0.9rem;\n  line-height: 22px;\n  padding-bottom: 18px;\n}\n.tab_content .description .text_box h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  padding-bottom: 7px;\n}\n.tab_content .seller_details {\n  background: var(--white);\n  padding: 15px 18px 15px 18px;\n  margin-bottom: 18px;\n}\n.tab_content .seller_details h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  padding-bottom: 15px;\n}\n.tab_content .seller_details .img_box {\n  min-width: 57px;\n  height: 57px;\n  margin-right: 12px;\n  border-radius: 5px;\n}\n.tab_content .seller_details .text_box {\n  width: 100%;\n  overflow: hidden;\n}\n.tab_content .seller_details .text_box h3 {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--text-dark);\n  padding-top: 3px;\n  font-weight: 600;\n}\n.tab_content .seller_details .text_box p {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.7rem;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n}\n.tab_content .seller_details .text_box p ion-icon {\n  min-width: 16px;\n  font-size: 0.8rem;\n}\n.tab_content .seller_details .text_box p span {\n  display: flex;\n  align-items: center;\n}\n.tab_content .seller_details .text_box p span.end {\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.tab_content .seller_details .text_box p span.address {\n  align-items: flex-start;\n}\n.tab_content .seller_details .text_box p span.end {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n.tab_content .seller_details .text_box p span.end ion-icon {\n  font-size: 1.5rem;\n  width: 15px;\n  min-width: 15px;\n}\n.tab_content .smilar_products h1 {\n  margin: 0;\n  padding: 0 18px 5px 18px;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n.tab_content .smilar_products .item_row ion-row {\n  padding: 6px 6px;\n}\n.tab_content .smilar_products .item_row ion-row ion-col {\n  padding: 7px 8px;\n}\n.tab_content .smilar_products .item_row ion-row ion-col .item {\n  background: var(--white);\n  border-radius: 10px;\n  overflow: hidden;\n  text-align: unset !important;\n}\n.tab_content .smilar_products .item_row ion-row ion-col .item .item_content {\n  padding: 10px 13px;\n  position: relative;\n  padding-bottom: 5px;\n}\n.tab_content .smilar_products .item_row ion-row ion-col .item .item_content .img_box {\n  width: 115px;\n  height: 115px;\n  margin: 0 auto;\n  position: relative;\n  margin-bottom: 12px;\n}\n.tab_content .smilar_products .item_row ion-row ion-col .item .item_content .img_box img {\n  width: 98px;\n  display: block;\n  margin: auto;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n.tab_content .smilar_products .item_row ion-row ion-col .item .item_content h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.9rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n.tab_content .smilar_products .item_row ion-row ion-col .item .item_footer h3 {\n  margin: 0;\n  font-size: 1rem;\n  min-width: 50%;\n  text-align: justify !important;\n  padding-left: 13px;\n  font-weight: 600;\n}\n.tab_content .smilar_products .item_row ion-row ion-col .item .item_footer h4 {\n  color: var(--white);\n  background: var(--primary);\n  margin: 0;\n  font-size: 1.8rem;\n  height: 34px;\n  line-height: 31px;\n  min-width: 35px;\n  border-radius: 10px 0;\n  font-weight: 500;\n}\nion-footer {\n  box-shadow: 0px -2px 22px 3px rgba(0, 0, 0, 0.1);\n}\nion-footer .item {\n  padding: 2px 16px;\n  min-height: unset !important;\n  box-shadow: none !important;\n  align-items: flex-start;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  box-shadow: none !important;\n}\nion-footer .item .item_inner {\n  height: 100%;\n}\nion-footer .item h2 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-black);\n}\nion-footer .item ion-select {\n  display: flex !important;\n  align-items: center;\n  --padding-bottom: 0;\n  --padding-top: 0;\n  color: var(--text-light2);\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  padding: 0;\n}\nion-footer .item ion-select::part(icon) {\n  display: none !important;\n}\nion-footer .item ion-icon {\n  font-size: 1.5rem;\n  width: 20px;\n  min-width: 20px;\n  color: var(--text-light2);\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1pbmZvL0Y6XFxmaXZlclxcQmVybmFyZFxcRG9jdG9yIFdvcmxkXFxEb2N0b1dvcmxkX0FwcENvZGUgKFZpZGVvIENhbGwpLTIwMjEwODA5VDEwMTQwN1otMDAxXFxEb2N0b1dvcmxkX0FwcENvZGUgKFZpZGVvIENhbGwpXFxkb2N0b3dvcmxkX2N1c3RvbWVyXFxkb2N0b3dvcmxkX2N1c3RvbWVyL3NyY1xcYXBwXFxwcm9kdWN0LWluZm9cXHByb2R1Y3QtaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QtaW5mby9wcm9kdWN0LWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdZO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ZoQjtBRElnQjtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUNGcEI7QURJb0I7RUFDSSxhQUFBO0FDRnhCO0FEUXdCO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0FDTjVCO0FEU3dCO0VBQ0ksYUFBQTtBQ1A1QjtBRGNnQjtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNacEI7QURjb0I7RUFDSSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNaeEI7QURlb0I7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQ2J4QjtBRHFCQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNsQko7QURv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Z0JBQUE7RUFDQSx3QkFBQTtBQzVFWjtBRCtFUTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDN0VaO0FEK0VZO0VBQ0ksd0JBQUE7QUM3RWhCO0FEaUZRO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDL0VaO0FEb0ZBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDakZKO0FEbUZJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNqRlI7QURvRkk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNsRlI7QURxRkk7RUFDSSxnQkFBQTtBQ25GUjtBRHFGUTtFQUNJLHlCQUFBO0FDbkZaIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1pbmZvL3Byb2R1Y3QtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcbiAgICAgICAgLnRpdGxlX2lubmVyIHtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjU1cmVtICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYuem1kaS1ib29rbWFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuem1kaS1ib29rbWFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi56bWRpLWJvb2ttYXJrLW91dGxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAmLmNhcnRfaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjdweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWJhZGdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcmVkX2NvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iYW5uZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgcGFkZGluZy10b3A6IDI2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuXHJcbiAgICAucHJlc2NyaXB0aW9uX3JlcXVpcmVkIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDE5cHg7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5iYW5uZXJfaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogMjQ1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzFweDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYmFubmVyX2RldGFpbHMge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxOHB4IDEwcHggMThweDtcclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXllbG93X2NvbG9yKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45NXJlbTtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgJi5lbmQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0taW5kaWNhdG9yLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMi41cHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5pb3Mge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1NXB4O1xyXG5cclxuICAgICAgICAgICAgLmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIC0taW5kaWNhdG9yLWhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWJfY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMThweCAxOHB4IDAgMThweDtcclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk0cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VsbGVyX2RldGFpbHMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDE4cHggMTVweCAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTRyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWdfYm94IHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA1N3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU3cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHRfYm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLmVuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLmFkZHJlc3Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYuZW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zbWlsYXJfcHJvZHVjdHMge1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE4cHggNXB4IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NHJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaXRlbV9yb3cge1xyXG4gICAgICAgICAgICBpb24tcm93IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCA2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4IDhweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaXRlbV9jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltZ19ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMy42cHg7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaXRlbV9mb290ZXIge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTJweCAyMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gICAgLml0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAuaXRlbV9pbm5lciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgICY6OnBhcnQoaWNvbikge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmVtcHR5LXZpZXcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAxMCU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMzRweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBoMyBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi13aWR0aDogdW5zZXQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjU1cmVtICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDMgaW9uLWljb24uem1kaS1ib29rbWFyayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDMuYWN0aXZlIGlvbi1pY29uLnptZGktYm9va21hcmsge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIGgzLmFjdGl2ZSBpb24taWNvbi56bWRpLWJvb2ttYXJrLW91dGxpbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIHNwYW4uY2FydF9pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDI3cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIHNwYW4uY2FydF9pY29uIGlvbi1iYWRnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZF9jb2xvcik7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogMDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBzcGFuLmNhcnRfaWNvbiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uYmFubmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nLXRvcDogMjZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbn1cbi5iYW5uZXIgLnByZXNjcmlwdGlvbl9yZXF1aXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE5cHg7XG4gIHotaW5kZXg6IDk5O1xuICB0b3A6IDE2cHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuLmJhbm5lciAuYmFubmVyX2ltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDI0NXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMXB4O1xufVxuLmJhbm5lciAuYmFubmVyX2ltZyBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uYmFubmVyIC5iYW5uZXJfZGV0YWlscyB7XG4gIHBhZGRpbmc6IDBweCAxOHB4IDEwcHggMThweDtcbn1cbi5iYW5uZXIgLmJhbm5lcl9kZXRhaWxzIGgyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuLmJhbm5lciAuYmFubmVyX2RldGFpbHMgaDIgc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS15ZWxvd19jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5iYW5uZXIgLmJhbm5lcl9kZXRhaWxzIGgyIHNwYW4gaW9uLWljb24ge1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLmJhbm5lciAuYmFubmVyX2RldGFpbHMgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5iYW5uZXIgLmJhbm5lcl9kZXRhaWxzIGgzIHNwYW4uZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5iYW5uZXIgLmJhbm5lcl9kZXRhaWxzIGgzIHNwYW4uZW5kIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHdpZHRoOiAxNXB4O1xuICBtaW4td2lkdGg6IDE1cHg7XG59XG4uYmFubmVyIGlvbi1zZWdtZW50IHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbn1cbi5iYW5uZXIgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1bnNldCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0taW5kaWNhdG9yLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1oZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuLmJhbm5lciBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5iYW5uZXIgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMi41cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB3aWR0aDogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgei1pbmRleDogOTk5O1xufVxuLmJhbm5lciBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZDo6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5iYW5uZXIgaW9uLXNlZ21lbnQuaW9zIHtcbiAgbWluLWhlaWdodDogNTVweDtcbn1cbi5iYW5uZXIgaW9uLXNlZ21lbnQuaW9zIC5pb24tc2VnbWVudC1idXR0b24ge1xuICBtYXJnaW46IDAgMTBweDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0taW5kaWNhdG9yLWhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50YWJfY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi50YWJfY29udGVudCAuZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4udGFiX2NvbnRlbnQgLmRlc2NyaXB0aW9uIC50ZXh0X2JveCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZzogMThweCAxOHB4IDAgMThweDtcbn1cbi50YWJfY29udGVudCAuZGVzY3JpcHRpb24gLnRleHRfYm94IHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XG59XG4udGFiX2NvbnRlbnQgLmRlc2NyaXB0aW9uIC50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjk0cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cbi50YWJfY29udGVudCAuc2VsbGVyX2RldGFpbHMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDE1cHggMThweCAxNXB4IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG4udGFiX2NvbnRlbnQgLnNlbGxlcl9kZXRhaWxzIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuOTRyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi50YWJfY29udGVudCAuc2VsbGVyX2RldGFpbHMgLmltZ19ib3gge1xuICBtaW4td2lkdGg6IDU3cHg7XG4gIGhlaWdodDogNTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4udGFiX2NvbnRlbnQgLnNlbGxlcl9kZXRhaWxzIC50ZXh0X2JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnRhYl9jb250ZW50IC5zZWxsZXJfZGV0YWlscyAudGV4dF9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udGFiX2NvbnRlbnQgLnNlbGxlcl9kZXRhaWxzIC50ZXh0X2JveCBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG4udGFiX2NvbnRlbnQgLnNlbGxlcl9kZXRhaWxzIC50ZXh0X2JveCBwIGlvbi1pY29uIHtcbiAgbWluLXdpZHRoOiAxNnB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi50YWJfY29udGVudCAuc2VsbGVyX2RldGFpbHMgLnRleHRfYm94IHAgc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFiX2NvbnRlbnQgLnNlbGxlcl9kZXRhaWxzIC50ZXh0X2JveCBwIHNwYW4uZW5kIHtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbn1cbi50YWJfY29udGVudCAuc2VsbGVyX2RldGFpbHMgLnRleHRfYm94IHAgc3Bhbi5hZGRyZXNzIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4udGFiX2NvbnRlbnQgLnNlbGxlcl9kZXRhaWxzIC50ZXh0X2JveCBwIHNwYW4uZW5kIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4udGFiX2NvbnRlbnQgLnNlbGxlcl9kZXRhaWxzIC50ZXh0X2JveCBwIHNwYW4uZW5kIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHdpZHRoOiAxNXB4O1xuICBtaW4td2lkdGg6IDE1cHg7XG59XG4udGFiX2NvbnRlbnQgLnNtaWxhcl9wcm9kdWN0cyBoMSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAxOHB4IDVweCAxOHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuOTRyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLnRhYl9jb250ZW50IC5zbWlsYXJfcHJvZHVjdHMgLml0ZW1fcm93IGlvbi1yb3cge1xuICBwYWRkaW5nOiA2cHggNnB4O1xufVxuLnRhYl9jb250ZW50IC5zbWlsYXJfcHJvZHVjdHMgLml0ZW1fcm93IGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDdweCA4cHg7XG59XG4udGFiX2NvbnRlbnQgLnNtaWxhcl9wcm9kdWN0cyAuaXRlbV9yb3cgaW9uLXJvdyBpb24tY29sIC5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiB1bnNldCAhaW1wb3J0YW50O1xufVxuLnRhYl9jb250ZW50IC5zbWlsYXJfcHJvZHVjdHMgLml0ZW1fcm93IGlvbi1yb3cgaW9uLWNvbCAuaXRlbSAuaXRlbV9jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAxM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4udGFiX2NvbnRlbnQgLnNtaWxhcl9wcm9kdWN0cyAuaXRlbV9yb3cgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2NvbnRlbnQgLmltZ19ib3gge1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4udGFiX2NvbnRlbnQgLnNtaWxhcl9wcm9kdWN0cyAuaXRlbV9yb3cgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2NvbnRlbnQgLmltZ19ib3ggaW1nIHtcbiAgd2lkdGg6IDk4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiAwO1xufVxuLnRhYl9jb250ZW50IC5zbWlsYXJfcHJvZHVjdHMgLml0ZW1fcm93IGlvbi1yb3cgaW9uLWNvbCAuaXRlbSAuaXRlbV9jb250ZW50IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG4udGFiX2NvbnRlbnQgLnNtaWxhcl9wcm9kdWN0cyAuaXRlbV9yb3cgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2Zvb3RlciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtaW4td2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udGFiX2NvbnRlbnQgLnNtaWxhcl9wcm9kdWN0cyAuaXRlbV9yb3cgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2Zvb3RlciBoNCB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBoZWlnaHQ6IDM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJveC1zaGFkb3c6IDBweCAtMnB4IDIycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbmlvbi1mb290ZXIgLml0ZW0ge1xuICBwYWRkaW5nOiAycHggMTZweDtcbiAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciAuaXRlbSAuaXRlbV9pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi1mb290ZXIgLml0ZW0gaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xufVxuaW9uLWZvb3RlciAuaXRlbSBpb24tc2VsZWN0IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tZm9vdGVyIC5pdGVtIGlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tZm9vdGVyIC5pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHdpZHRoOiAyMHB4O1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG59XG5cbi5lbXB0eS12aWV3IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMjAwcHg7XG4gIHRvcDogMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDEwJTtcbn1cbi5lbXB0eS12aWV3IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmVtcHR5LXZpZXcgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW1wdHktdmlldyBidXR0b24ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHNwYW4ge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/product-info/product-info.page.ts": function srcAppProductInfoProductInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductInfoPage", function () {
      return ProductInfoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_models_product_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/models/product.models */
    "./src/models/product.models.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/common/ecommerce.service */
    "./src/app/services/common/ecommerce.service.ts");
    /* harmony import */


    var src_models_category_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/models/category.models */
    "./src/models/category.models.ts");
    /* harmony import */


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");

    var ProductInfoPage = /*#__PURE__*/function () {
      function ProductInfoPage( //    private route: Router,
      route, navCtrl, translate, photoViewer, uiElementService, apiService, eComService) {
        var _this = this;

        _classCallCheck(this, ProductInfoPage);

        this.route = route;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.photoViewer = photoViewer;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.eComService = eComService;
        this.subscriptions = new Array();
        this.tabPinfo = "about";
        this.gaming = "1";
        this.similarProducts = new Array();
        this.product = new src_models_product_models__WEBPACK_IMPORTED_MODULE_3__["Product"]();
        this.category = new src_models_category_models__WEBPACK_IMPORTED_MODULE_9__["Category"]();
        this.reviews = new Array();
        this.isLoading = true;
        this.route.queryParams.subscribe(function (params) {
          var product_id = params["product_id"];

          _this.translate.get(["loading", "something_wrong"]).subscribe(function (values) {
            _this.uiElementService.presentLoading(values["loading"]);

            _this.subscriptions.push(_this.apiService.getProductsWithId(product_id).subscribe(function (res) {
              _this.product = res;
              console.log(res);
              _this.category = _this.product.categories[0];

              _this.loadProductsSimilar(); // this.subscriptions.push(this.apiService.getReviewsProduct(this.product.id, 1).subscribe(res => this.reviewsRes(res), err => this.reviewsErr(err)));

            }, function (err) {
              console.log("getProductsWithId", err);

              _this.uiElementService.dismissLoading();

              _this.uiElementService.presentErrorAlert(values["something_wrong"]);

              _this.navCtrl.pop();
            }));
          });
        });
      }

      _createClass(ProductInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _iterator = _createForOfIteratorHelper(this.subscriptions),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var sub = _step.value;
              sub.unsubscribe();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.uiElementService.dismissLoading();
        } // private reviewsRes(res: BaseListResponse) {
        //   this.reviews = this.reviews.concat(res.data);
        //   this.nextUrl = res.links.next;
        //   if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
        //   this.isLoading = false;
        //   this.uiElementService.dismissLoading();
        // }
        // private reviewsErr(err) {
        //   console.log("productsErr", err);
        //   this.uiElementService.dismissLoading();
        //   if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
        //   this.isLoading = false;
        // }
        // doInfiniteReviews(event) {
        //   if (this.nextUrl == null) {
        //     event.target.complete();
        //   } else {
        //     this.infiniteScrollEvent = event;
        //     this.subscriptions.push(this.apiService.getURL(this.nextUrl).subscribe(res => {
        //       let locale = Helper.getLocale();
        //       for (let review of res.data) review.created_at = Helper.formatTimestampDate(review.created_at, locale);
        //       this.reviewsRes(res);
        //     }, err => this.reviewsErr(err)));
        //   }
        // }

      }, {
        key: "toggleFavorite",
        value: function toggleFavorite() {
          var _this2 = this;

          if (src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].getLoggedInUser() != null) {
            this.translate.get("just_moment").subscribe(function (value) {
              _this2.uiElementService.presentLoading(value);

              _this2.subscriptions.push(_this2.apiService.toggleFavoriteProduct(_this2.product.id).subscribe(function (res) {
                _this2.product.is_favourite = !_this2.product.is_favourite;

                _this2.uiElementService.dismissLoading();
              }, function (err) {
                console.log("toggleProductFavorite", err);

                _this2.uiElementService.dismissLoading();
              }));
            });
          } else {
            this.alertLogin();
          }
        }
      }, {
        key: "loadProductsSimilar",
        value: function loadProductsSimilar() {
          var _this3 = this;

          this.subscriptions.push(this.apiService.getProductsWithCategoryId(src_models_constants_models__WEBPACK_IMPORTED_MODULE_10__["Constants"].SCOPE_ECOMMERCE, this.category.id, 1).subscribe(function (res) {
            var index = -1;

            for (var i = 0; i < res.data.length; i++) {
              if (res.data[i].id == _this3.product.id) {
                index = i;
                break;
              }
            }

            if (index != -1) res.data.splice(index, 1); // this.similarProducts = this.similarProducts.concat(res.data);

            _this3.similarProducts = res.data; // this.doneAll = (!res.data || !res.data.length);
            // if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
            // this.isLoading = false;

            _this3.uiElementService.dismissLoading();
          }, function (err) {
            console.log("getProductsWithCategoryId", err);

            _this3.uiElementService.dismissLoading(); // if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
            // this.isLoading = false;

          }));
        }
      }, {
        key: "addProCart",
        value: function addProCart(pro) {
          var _this4 = this;

          var added = this.eComService.addOrIncrementCartItem(this.eComService.getCartItemFromProduct(pro == null ? this.product : pro));
          this.translate.get(added ? "added_cart" : "incremented_cart").subscribe(function (value) {
            return _this4.uiElementService.presentToast(value);
          });
        }
      }, {
        key: "navCart",
        value: function navCart() {
          this.navCtrl.navigateForward(['./my-cart']);
        }
      }, {
        key: "navVendorProfile",
        value: function navVendorProfile(vendorProfileId) {
          var navigationExtras = {
            queryParams: {
              vendor_id: vendorProfileId
            }
          };
          this.navCtrl.navigateForward(['./seller-profile'], navigationExtras);
        }
      }, {
        key: "navProDetail",
        value: function navProDetail(pro) {
          var navigationExtras = {
            queryParams: {
              product_id: pro.id
            }
          };
          this.navCtrl.navigateForward(['./product-info'], navigationExtras);
        }
      }, {
        key: "alertLogin",
        value: function alertLogin() {
          var _this5 = this;

          this.translate.get("alert_login_short").subscribe(function (value) {
            return _this5.uiElementService.presentToast(value);
          });
          this.navCtrl.navigateForward(['./sign-in']);
        }
      }, {
        key: "bigImage",
        value: function bigImage(myImage) {
          this.photoViewer.show(myImage);
        } //  product_review() {
        //   this.navCtrl.navigateForward(['./product-reviews']);
        //  }    

      }, {
        key: "navReviews",
        value: function navReviews() {
          var navigationExtras = {
            state: {
              product: this.product
            }
          };
          this.navCtrl.navigateForward(['./product-reviews'], navigationExtras);
        }
      }]);

      return ProductInfoPage;
    }();

    ProductInfoPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_12__["PhotoViewer"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
      }, {
        type: _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_8__["ECommerceService"]
      }];
    };

    ProductInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product-info/product-info.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-info.page.scss */
      "./src/app/product-info/product-info.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_12__["PhotoViewer"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_8__["ECommerceService"]])], ProductInfoPage);
    /***/
  },

  /***/
  "./src/models/category.models.ts": function srcModelsCategoryModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Category", function () {
      return Category;
    });

    var Category = function Category() {
      _classCallCheck(this, Category);
    };
    /***/

  }
}]);
//# sourceMappingURL=product-info-product-info-module-es5.js.map