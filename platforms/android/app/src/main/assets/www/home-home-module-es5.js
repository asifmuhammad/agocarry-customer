function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html": function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>\r\n            <div class=\"title_inner d-flex\">\r\n                <div class=\"location\" (click)=\"pickLocation()\">\r\n                    <h2 *ngIf=\"selectedLocation != null\" class=\"d-flex\">\r\n                        <ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n                        <p class=\"marquee\"> <span> {{selectedLocation.formatted_address}} </span> </p>\r\n                    </h2>\r\n                    <h2 *ngIf=\"selectedLocation == null\" class=\"d-flex\">\r\n                        <ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n                        <span>{{'select_location' | translate}}</span>\r\n                    </h2>\r\n                </div>\r\n                <span class=\"end cart_icon\" (click)=\"cart()\">\r\n                    <ion-icon class=\"zmdi zmdi-shopping-cart ion-text-start\"></ion-icon>\r\n                    <ion-badge>{{eComService.getCartItemsCount()}}</ion-badge>\r\n                </span>\r\n            </div>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n\r\n    <div class=\"banner\">\r\n        <div class=\"banner_text\">\r\n            <h3 *ngIf=\"apiService.getUserMe() != null\">{{'hello' | translate}}, {{apiService.getUserMe().name}}.</h3>\r\n            <h3 *ngIf=\"apiService.getUserMe() == null\">{{'hello' | translate}}.</h3>\r\n            <h2>{{'find_your_medicines' | translate}}</h2>\r\n        </div>\r\n        <div class=\"search_box d-flex\" (click)=\"navSearch()\">\r\n            <ion-icon name=\"search-outline\" class=\"ion-text-start\"></ion-icon>\r\n            <h2>{{'search_medicines' | translate}}</h2>\r\n        </div>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n    <div class=\"shop_by_category\" *ngIf=\"categories && categories.length\">\r\n        <h2 class=\"d-flex\" (click)=\"viewAllSubCategories()\">{{'shop_by_category' | translate}}<span\r\n                class=\"end\">{{'view_all' | translate}}</span></h2>\r\n        <div class=\"scroll-x\">\r\n            <div class=\"category\" *ngFor=\"let cat of categories\" (click)=\"subCategories(cat)\">\r\n                <div class=\"category_img center_img\">\r\n                    <img [src]=\"cat.image\" class=\"crop_img\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"empty-view\" *ngIf=\"haveNothingToShow()\">\r\n        <div style=\"text-align:center\" (click)=\"pickLocation()\">\r\n            <img src=\"assets/images/empty_categories.png\" alt=\"no offers\" />\r\n            <span *ngIf=\"selectedLocation\" style=\"color:#9E9E9E; font-weight:bold;\">\r\n                {{'empty_results' | translate}}\r\n            </span>\r\n            <span *ngIf=\"!selectedLocation\" style=\"color:#9E9E9E; font-weight:bold;\">\r\n                {{'Select_your_location_to_continue' | translate}}\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"banners && banners.length\" class=\"offres\">\r\n        <h2 class=\"d-flex\" (click)=\"offers()\">{{'offers' | translate}}\r\n            <span class=\"end\">{{'view_all' | translate}}</span>\r\n        </h2>\r\n        <div class=\"scroll-x\">\r\n            <div class=\"offer center_img\" *ngFor=\"let banner of banners\" (click)=\"offers()\">\r\n                <img [src]=\"banner.image\" class=\"crop_img\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ion-list *ngFor=\"let catPros of vendorsArray;\" lines=\"none\">\r\n        <h2 class=\"d-flex\">{{'seller_near_you' | translate}}</h2>\r\n        <div class=\"scroll_container\">\r\n            <div class=\"list_inner\" *ngFor=\"let vendors of catPros.vendors\" (click)=\"navVenDetail(vendors)\">\r\n                <ion-item>\r\n                    <div class=\"item_inner d-flex\">\r\n                        <div class=\"img_box center_img\">\r\n                            <img [src]=\"vendors.image\" class=\"crop_img\">\r\n                        </div>\r\n                        <div class=\"text_box\">\r\n                            <h3>{{vendors.name}}</h3>\r\n                            <h4 class=\"d-flex\">\r\n                                <ion-icon class=\"zmdi zmdi-pin\"></ion-icon>\r\n                                <span>{{vendors.distance_toshow}} | {{vendors.address}}</span>\r\n                            </h4>\r\n                        </div>\r\n                    </div>\r\n                </ion-item>\r\n            </div>\r\n        </div>\r\n    </ion-list>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts": function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts": function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss": function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  background: var(--white);\n}\nion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n}\nion-header ion-toolbar ion-title .title_inner {\n  height: 60px;\n}\nion-header ion-toolbar ion-title .title_inner .location {\n  overflow: hidden;\n  position: relative;\n  z-index: 999;\n}\nion-header ion-toolbar ion-title .title_inner .location ion-icon {\n  font-size: 1.3rem !important;\n  color: var(--primary);\n}\nion-header ion-toolbar ion-title .title_inner .location h2 {\n  margin: 0;\n  overflow: hidden;\n}\nion-header ion-toolbar ion-title .title_inner .location h2 span {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--text-black);\n  letter-spacing: 0;\n  display: block;\n  position: relative;\n  top: 2px;\n}\nion-header ion-toolbar ion-title .title_inner h3 {\n  margin: 0 auto;\n  text-align: center;\n  font-size: 1.1rem;\n  font-weight: 500;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\nion-header ion-toolbar ion-title .title_inner span.cart_icon {\n  position: relative;\n  min-width: 27px;\n}\nion-header ion-toolbar ion-title .title_inner span.cart_icon ion-badge {\n  background: var(--red_color);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  display: block;\n  position: absolute;\n  top: 12px;\n  right: 0;\n}\nion-header ion-toolbar ion-title .title_inner span.cart_icon ion-icon {\n  position: relative;\n  top: 5px;\n  font-size: 1.35rem;\n}\nion-header .banner {\n  position: relative;\n  padding: 15px;\n}\nion-header .banner .banner_text {\n  padding-bottom: 20px;\n}\nion-header .banner .banner_text h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  padding-bottom: 4px;\n}\nion-header .banner .banner_text h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-weight: 600;\n  font-size: 1.4rem;\n}\nion-header .banner .search_box {\n  background: var(--info_field_bg);\n  width: calc(100% - 0px);\n  border-radius: 6px;\n  padding: 5px 13px;\n  min-height: 50px;\n}\nion-header .banner .search_box ion-icon {\n  color: var(--text-light);\n  font-size: 1.2rem;\n  margin-right: 13px;\n  font-weight: 600;\n}\nion-header .banner .search_box h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.95rem;\n  font-weight: 300;\n  letter-spacing: 0.3px;\n}\n.shop_by_category {\n  padding-bottom: 15px;\n}\n.shop_by_category h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  padding-bottom: 4px;\n  padding: 15px;\n}\n.shop_by_category h2 span {\n  color: var(--primary);\n}\n.shop_by_category .scroll-x {\n  width: 100%;\n  white-space: nowrap;\n  overflow-x: auto;\n}\n.shop_by_category .scroll-x .category {\n  display: inline-block;\n  margin: 0 3.5px;\n}\n.shop_by_category .scroll-x .category .category_img {\n  width: 103px;\n  height: 103px;\n  border-radius: 5px;\n}\n.shop_by_category .scroll-x .category:first-child {\n  margin-left: 15px;\n}\n.shop_by_category .scroll-x .category:last-child {\n  margin-right: 15px;\n}\n.offres {\n  padding-bottom: 15px;\n}\n.offres h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  padding-bottom: 4px;\n  padding: 15px;\n}\n.offres h2 span {\n  color: var(--primary);\n}\n.offres .scroll-x {\n  width: 100%;\n  white-space: nowrap;\n  overflow-x: auto;\n}\n.offres .scroll-x .offer {\n  display: inline-block;\n  margin: 0 3.5px;\n  width: 250px;\n  height: 108px;\n  border-radius: 5px;\n}\n.offres .scroll-x .offer:first-child {\n  margin-left: 15px;\n}\n.offres .scroll-x .offer:last-child {\n  margin-right: 15px;\n}\nion-list {\n  margin: 0;\n  background: none;\n  padding: 4px 0 0px 0;\n}\nion-list h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  padding-bottom: 4px;\n  padding: 15px;\n}\nion-list .scroll_container {\n  width: 100%;\n  white-space: nowrap;\n  overflow-x: auto;\n  display: flex;\n  align-items: flex-start;\n}\nion-list .scroll_container .list_inner {\n  display: inline-block;\n  margin: 0 12px;\n  min-width: 250px;\n}\nion-list .scroll_container .list_inner:first-child {\n  margin-left: 15px;\n}\nion-list .scroll_container .list_inner:last-child {\n  margin-right: 15px;\n}\nion-list ion-item {\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --background: var(--transparent) !important;\n  background: var(--white);\n  margin-bottom: 20px;\n  max-width: 250px;\n}\nion-list ion-item .item_inner {\n  align-items: flex-start !important;\n}\nion-list ion-item .item_inner .img_box {\n  min-width: 57px;\n  height: 57px;\n  margin-right: 12px;\n  border-radius: 5px;\n}\nion-list ion-item .item_inner .text_box {\n  width: 100%;\n  white-space: normal;\n}\nion-list ion-item .item_inner .text_box h3 {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--text-dark);\n  padding-bottom: 8px;\n  padding-top: 3px;\n  font-weight: 600;\n}\nion-list ion-item .item_inner .text_box h4 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.7rem;\n  font-weight: 400;\n  margin-bottom: 9px;\n  letter-spacing: 0.3px;\n  overflow: hidden;\n  align-items: flex-start;\n}\nion-list ion-item .item_inner .text_box h4 span {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\nion-list ion-item .item_inner .text_box h4 ion-icon {\n  min-width: 12px;\n  padding: 0 2px;\n  font-size: 0.8rem;\n  position: relative;\n  top: -1px;\n}\n.category_row ion-row {\n  padding: 3.5px 3.5px;\n}\n.category_row ion-row ion-col {\n  padding: 4px 3.5px;\n}\n.category_row ion-row ion-col .item_box {\n  background: var(--white);\n  width: 100%;\n  border-radius: 7px;\n  padding: 25px 13px 10px 13px;\n  box-shadow: 0 3px 5px 1px rgba(0, 0, 0, 0.1);\n}\n.category_row ion-row ion-col .item_box .img_box {\n  width: 80px;\n  height: 72px;\n  margin: 0 auto;\n  margin-bottom: 22px;\n}\n.category_row ion-row ion-col .item_box .img_box img {\n  width: auto;\n  top: unset;\n}\n.category_row ion-row ion-col .item_box h2 {\n  margin: 0;\n  font-size: 0.75rem;\n  font-weight: 500;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  min-height: 28.8px;\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n.marquee {\n  width: 80px;\n  margin: 0 auto;\n  white-space: nowrap;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.marquee span {\n  display: inline-block;\n  padding-left: 100%;\n  will-change: transform;\n  -webkit-animation: marquee 10s linear infinite;\n          animation: marquee 10s linear infinite;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.marquee span:hover {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n@-webkit-keyframes marquee {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n@keyframes marquee {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1jdXN0b21lci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQ0NKO0FEQ0k7RUFDSSwwQkFBQTtBQ0NSO0FEQ1E7RUFDSSxZQUFBO0FDQ1o7QURDWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ2hCO0FEQ2dCO0VBQ0ksNEJBQUE7RUFFQSxxQkFBQTtBQ0FwQjtBRElnQjtFQUNJLFNBQUE7RUFDQSxnQkFBQTtBQ0ZwQjtBRElvQjtFQUNJLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNIeEI7QURRWTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDTmhCO0FEVWdCO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDUnBCO0FEVW9CO0VBQ0ksNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsY0FBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNWeEI7QURhb0I7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ1h4QjtBRGtCSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQ2hCUjtBRGtCUTtFQUNJLG9CQUFBO0FDaEJaO0FEa0JZO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ2hCaEI7QURtQlk7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDakJoQjtBRHFCUTtFQUNJLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNuQlo7QURxQlk7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ25CaEI7QURzQlk7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNwQmhCO0FEMEJBO0VBQ0ksb0JBQUE7QUN2Qko7QUR5Qkk7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ3ZCUjtBRHlCUTtFQUNJLHFCQUFBO0FDdkJaO0FEMkJJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUN6QlI7QUQyQlE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUN6Qlo7QUQyQlk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDekJoQjtBRDRCWTtFQUNJLGlCQUFBO0FDMUJoQjtBRDZCWTtFQUNJLGtCQUFBO0FDM0JoQjtBRGlDQTtFQUNJLG9CQUFBO0FDOUJKO0FEZ0NJO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUM5QlI7QURnQ1E7RUFDSSxxQkFBQTtBQzlCWjtBRGtDSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDaENSO0FEa0NRO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ2hDWjtBRGtDWTtFQUNJLGlCQUFBO0FDaENoQjtBRG1DWTtFQUNJLGtCQUFBO0FDakNoQjtBRHVDQTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDcENKO0FEc0NJO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNwQ1I7QUR1Q0k7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ3JDUjtBRHVDUTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDckNaO0FEdUNZO0VBQ0ksaUJBQUE7QUNyQ2hCO0FEd0NZO0VBQ0ksa0JBQUE7QUN0Q2hCO0FENENJO0VBQ0ksd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUMxQ1I7QUQ0Q1E7RUFDSSxrQ0FBQTtBQzFDWjtBRDRDWTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQzFDaEI7QUQ2Q1k7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUMzQ2hCO0FENkNnQjtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDM0NwQjtBRDhDZ0I7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUM1Q3BCO0FEOENvQjtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQzVDeEI7QUQrQ29CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQzdDeEI7QURzREk7RUFDSSxvQkFBQTtBQ25EUjtBRHFEUTtFQUNJLGtCQUFBO0FDbkRaO0FEcURZO0VBQ0ksd0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRDQUFBO0FDbkRoQjtBRHFEZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ25EcEI7QURxRG9CO0VBQ0ksV0FBQTtFQUVBLFVBQUE7QUNwRHhCO0FEd0RnQjtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ3REcEI7QUQ2REE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDMURKO0FENERJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUMxRFI7QUQ2REk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUMzRFI7QUQ4REk7RUFDSSxnQkFBQTtBQzVEUjtBRDhEUTtFQUNJLHlCQUFBO0FDNURaO0FEaUVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUM5REo7QURpRUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDOURKO0FEaUVBO0VBQ0ksb0NBQUE7VUFBQSw0QkFBQTtBQzlESjtBRGlFQTtFQUNJO0lBQ0ksMEJBQUE7RUM5RE47RURpRUU7SUFDSSw4QkFBQTtFQy9ETjtBQUNGO0FEd0RBO0VBQ0k7SUFDSSwwQkFBQTtFQzlETjtFRGlFRTtJQUNJLDhCQUFBO0VDL0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblxyXG4gICAgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgLnRpdGxlX2lubmVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG5cclxuICAgICAgICAgICAgLmxvY2F0aW9uIHtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9taW4td2lkdGg6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcGFkZGluZzogMCAxcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAmLmNhcnRfaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjdweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWJhZGdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcmVkX2NvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2ZvbnQtc2l6ZTogMC42NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJhbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gICAgICAgIC5iYW5uZXJfdGV4dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWFyY2hfYm94IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5mb19maWVsZF9iZyk7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxM3B4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNob3BfYnlfY2F0ZWdvcnkge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zY3JvbGwteCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG5cclxuICAgICAgICAuY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAzLjVweDtcclxuXHJcbiAgICAgICAgICAgIC5jYXRlZ29yeV9pbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwM3B4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDNweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm9mZnJlcyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNjcm9sbC14IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcblxyXG4gICAgICAgIC5vZmZlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDMuNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA0cHggMCAwcHggMDtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2Nyb2xsX2NvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgIC5saXN0X2lubmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTJweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcclxuXHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7XHJcblxyXG4gICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIC5pbWdfYm94IHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTdweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTdweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRleHRfYm94IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuXHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXRlZ29yeV9yb3cge1xyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgICAgcGFkZGluZzogMy41cHggMy41cHg7XHJcblxyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMy41cHg7XHJcblxyXG4gICAgICAgICAgICAuaXRlbV9ib3gge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDEzcHggMTBweCAxM3B4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLmltZ19ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9cdFx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyOC44cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lbXB0eS12aWV3IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXJxdWVlIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5tYXJxdWVlIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDAlO1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgIGFuaW1hdGlvbjogbWFycXVlZSAxMHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4ubWFycXVlZSBzcGFuOmhvdmVyIHtcclxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbWFycXVlZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDApO1xyXG4gICAgfVxyXG59IiwiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIge1xuICBoZWlnaHQ6IDYwcHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgLmxvY2F0aW9uIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgLmxvY2F0aW9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIC5sb2NhdGlvbiBoMiB7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciAubG9jYXRpb24gaDIgc3BhbiB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIGgzIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgc3Bhbi5jYXJ0X2ljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMjdweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBzcGFuLmNhcnRfaWNvbiBpb24tYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWRfY29sb3IpO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgLS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogMDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBzcGFuLmNhcnRfaWNvbiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTVweDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuYmFubmVyX3RleHQge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuYmFubmVyX3RleHQgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIC5iYW5uZXJfdGV4dCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuc2VhcmNoX2JveCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWluZm9fZmllbGRfYmcpO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA1cHggMTNweDtcbiAgbWluLWhlaWdodDogNTBweDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuc2VhcmNoX2JveCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuc2VhcmNoX2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG5cbi5zaG9wX2J5X2NhdGVnb3J5IHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uc2hvcF9ieV9jYXRlZ29yeSBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uc2hvcF9ieV9jYXRlZ29yeSBoMiBzcGFuIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuLnNob3BfYnlfY2F0ZWdvcnkgLnNjcm9sbC14IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4uc2hvcF9ieV9jYXRlZ29yeSAuc2Nyb2xsLXggLmNhdGVnb3J5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMy41cHg7XG59XG4uc2hvcF9ieV9jYXRlZ29yeSAuc2Nyb2xsLXggLmNhdGVnb3J5IC5jYXRlZ29yeV9pbWcge1xuICB3aWR0aDogMTAzcHg7XG4gIGhlaWdodDogMTAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5zaG9wX2J5X2NhdGVnb3J5IC5zY3JvbGwteCAuY2F0ZWdvcnk6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5zaG9wX2J5X2NhdGVnb3J5IC5zY3JvbGwteCAuY2F0ZWdvcnk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLm9mZnJlcyB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLm9mZnJlcyBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ub2ZmcmVzIGgyIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG4ub2ZmcmVzIC5zY3JvbGwteCB7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLm9mZnJlcyAuc2Nyb2xsLXggLm9mZmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMy41cHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAxMDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm9mZnJlcyAuc2Nyb2xsLXggLm9mZmVyOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4ub2ZmcmVzIC5zY3JvbGwteCAub2ZmZXI6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuaW9uLWxpc3Qge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDRweCAwIDBweCAwO1xufVxuaW9uLWxpc3QgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuaW9uLWxpc3QgLnNjcm9sbF9jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5pb24tbGlzdCAuc2Nyb2xsX2NvbnRhaW5lciAubGlzdF9pbm5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDEycHg7XG4gIG1pbi13aWR0aDogMjUwcHg7XG59XG5pb24tbGlzdCAuc2Nyb2xsX2NvbnRhaW5lciAubGlzdF9pbm5lcjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuaW9uLWxpc3QgLnNjcm9sbF9jb250YWluZXIgLmxpc3RfaW5uZXI6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLmltZ19ib3gge1xuICBtaW4td2lkdGg6IDU3cHg7XG4gIGhlaWdodDogNTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoNCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGg0IHNwYW4ge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGg0IGlvbi1pY29uIHtcbiAgbWluLXdpZHRoOiAxMnB4O1xuICBwYWRkaW5nOiAwIDJweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xufVxuXG4uY2F0ZWdvcnlfcm93IGlvbi1yb3cge1xuICBwYWRkaW5nOiAzLjVweCAzLjVweDtcbn1cbi5jYXRlZ29yeV9yb3cgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogNHB4IDMuNXB4O1xufVxuLmNhdGVnb3J5X3JvdyBpb24tcm93IGlvbi1jb2wgLml0ZW1fYm94IHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nOiAyNXB4IDEzcHggMTBweCAxM3B4O1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5jYXRlZ29yeV9yb3cgaW9uLXJvdyBpb24tY29sIC5pdGVtX2JveCAuaW1nX2JveCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDcycHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuLmNhdGVnb3J5X3JvdyBpb24tcm93IGlvbi1jb2wgLml0ZW1fYm94IC5pbWdfYm94IGltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICB0b3A6IHVuc2V0O1xufVxuLmNhdGVnb3J5X3JvdyBpb24tcm93IGlvbi1jb2wgLml0ZW1fYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG1pbi1oZWlnaHQ6IDI4LjhweDtcbn1cblxuLmVtcHR5LXZpZXcge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4uZW1wdHktdmlldyBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5lbXB0eS12aWV3IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5lbXB0eS12aWV3IGJ1dHRvbiBzcGFuIHtcbiAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLm1hcnF1ZWUge1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tYXJxdWVlIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMTAwJTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgYW5pbWF0aW9uOiBtYXJxdWVlIDEwcyBsaW5lYXIgaW5maW5pdGU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLm1hcnF1ZWUgc3Bhbjpob3ZlciB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG5cbkBrZXlmcmFtZXMgbWFycXVlZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCk7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts": function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/events/my-events.service */
    "./src/app/services/events/my-events.service.ts");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/common/ecommerce.service */
    "./src/app/services/common/ecommerce.service.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(navCtrl, translate, myEventsService, uiElementService, apiService, eComService) {
        _classCallCheck(this, HomePage);

        this.navCtrl = navCtrl;
        this.translate = translate;
        this.myEventsService = myEventsService;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.eComService = eComService;
        this.location = "home";
        this.subscriptions = new Array();
        this.vendorsArray = new Array();
        this.isLoading = true;
        this.loadedCount = 0;
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.selectedLocation = src_models_helper_models__WEBPACK_IMPORTED_MODULE_8__["Helper"].getAddressSelected();
          this.subscriptions.push(this.myEventsService.getAddressObservable().subscribe(function (selectedLocationNew) {
            var changed = !_this.selectedLocation || !selectedLocationNew || _this.selectedLocation.latitude != selectedLocationNew.latitude || _this.selectedLocation.longitude != selectedLocationNew.longitude;
            _this.selectedLocation = selectedLocationNew;

            if (changed) {
              _this.doRefresh();
            }
          }));
          this.doRefresh();
        }
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
        }
      }, {
        key: "doRefresh",
        value: function doRefresh() {
          var _this2 = this;

          this.pageNo = 1;
          this.vendorsArray = [];
          this.banners = [];
          this.loadedCount = 0;
          this.translate.get("loading").subscribe(function (value) {
            _this2.uiElementService.presentLoading(value);

            _this2.loadCategories();
          });
        }
      }, {
        key: "pickLocation",
        value: function pickLocation() {
          this.myEventsService.setCustomEventData("nav:pick_location");
        } // alertLogin() {
        //   this.translate.get("alert_login_short").subscribe(value => this.uiElementService.presentToast(value));
        //   this.navCtrl.navigateForward(['./phone-number']);
        // }

      }, {
        key: "loadCategories",
        value: function loadCategories() {
          var _this3 = this;

          this.subscriptions.push(this.apiService.getCategoriesParents(src_models_constants_models__WEBPACK_IMPORTED_MODULE_9__["Constants"].SCOPE_ECOMMERCE).subscribe(function (res) {
            _this3.categories = res; // this.loadedCount = 0;
            // if (res && res.length && this.selectedLocation) {
            //   for (let cat of res) this.loadProductsByCatId(cat);

            if (_this3.selectedLocation && _this3.selectedLocation.latitude && _this3.selectedLocation.longitude) {
              _this3.loadProductsByCatId();
            } else {
              _this3.isLoading = false;

              _this3.uiElementService.dismissLoading();
            }
          }, function (err) {
            console.log("getCategoriesParents", err);
            _this3.isLoading = false;

            _this3.uiElementService.dismissLoading();
          }));
        }
      }, {
        key: "loadProductsByCatId",
        value: function loadProductsByCatId() {
          var _this4 = this;

          this.isLoading = true;
          this.subscriptions.push(this.apiService.getCategoriesVendors(this.selectedLocation).subscribe(function (res) {
            if (res.data && res.data.length) _this4.vendorsArray.push({
              vendors: res.data
            });
            console.log(_this4.vendorsArray);
            _this4.isLoading = false;

            _this4.uiElementService.dismissLoading();

            _this4.checkAndLoadBanners();
          }, function (err) {
            console.log("getProductsWithCategoryId", err);
            _this4.isLoading = false;

            _this4.uiElementService.dismissLoading();

            _this4.checkAndLoadBanners();
          }));
        }
      }, {
        key: "checkAndLoadBanners",
        value: function checkAndLoadBanners() {
          var _this5 = this;

          // this.loadedCount += 1;
          if (!this.haveNothingToShow()) this.subscriptions.push(this.apiService.getBanners(src_models_constants_models__WEBPACK_IMPORTED_MODULE_9__["Constants"].SCOPE_ECOMMERCE).subscribe(function (res) {
            return _this5.banners = res;
          }, function (err) {
            return console.log("getBanners", err);
          }));
        }
      }, {
        key: "haveNothingToShow",
        value: function haveNothingToShow() {
          var toReturn = true;

          if (this.vendorsArray) {
            var _iterator2 = _createForOfIteratorHelper(this.vendorsArray),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var catPros = _step2.value;

                if (catPros && catPros.vendors.length) {
                  toReturn = false;
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          return this.isLoading ? false : toReturn;
        }
      }, {
        key: "subCategories",
        value: function subCategories(cat) {
          var _this6 = this;

          if (this.selectedLocation) {
            var navigationExtras = {
              state: {
                categories: this.categories,
                category_id: cat.id
              }
            };
            this.navCtrl.navigateForward(['./categories'], navigationExtras);
          } else {
            this.translate.get("select_location").subscribe(function (value) {
              return _this6.uiElementService.presentToast(value);
            });
          }
        }
      }, {
        key: "viewAllSubCategories",
        value: function viewAllSubCategories() {
          var _this7 = this;

          if (this.selectedLocation && this.selectedLocation.latitude && this.selectedLocation.longitude) {
            this.navCtrl.navigateForward(['./product-list']);
          } else {
            this.translate.get("select_location").subscribe(function (value) {
              return _this7.uiElementService.presentToast(value);
            });
          }
        }
      }, {
        key: "navVenDetail",
        value: function navVenDetail(vendor) {
          var _this8 = this;

          if (this.selectedLocation && this.selectedLocation.latitude && this.selectedLocation.longitude) {
            var navigationExtras = {
              queryParams: {
                vendor_id: vendor.id
              }
            };
            this.navCtrl.navigateForward(['./seller-profile'], navigationExtras);
          } else {
            this.translate.get("select_location").subscribe(function (value) {
              return _this8.uiElementService.presentToast(value);
            });
          }
        }
      }, {
        key: "offers",
        value: function offers() {
          var _this9 = this;

          if (this.selectedLocation && this.selectedLocation.latitude && this.selectedLocation.longitude) {
            this.navCtrl.navigateForward(['./offers']);
          } else {
            this.translate.get("select_location").subscribe(function (value) {
              return _this9.uiElementService.presentToast(value);
            });
          }
        }
      }, {
        key: "cart",
        value: function cart() {
          this.navCtrl.navigateForward(['./my-cart']); // if (this.selectedLocation && this.selectedLocation.latitude && this.selectedLocation.longitude) {
          //   this.navCtrl.navigateForward(['./my-cart']);
          // } else {
          //   this.translate.get("select_location").subscribe(value => this.uiElementService.presentToast(value));
          // }
        }
      }, {
        key: "navSearch",
        value: function navSearch() {
          var _this10 = this;

          if (this.selectedLocation && this.selectedLocation.latitude && this.selectedLocation.longitude) {
            this.navCtrl.navigateForward(['./search-products']);
          } else {
            this.translate.get("select_location").subscribe(function (value) {
              return _this10.uiElementService.presentToast(value);
            });
          }
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_4__["MyEventsService"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_7__["ECommerceService"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_4__["MyEventsService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_7__["ECommerceService"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map