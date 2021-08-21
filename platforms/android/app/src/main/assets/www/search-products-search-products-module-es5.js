function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-products-search-products-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search-products/search-products.page.html": function node_modulesRawLoaderDistCjsJsSrcAppSearchProductsSearchProductsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'find_medicine' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n\r\n    <div class=\"search_box d-flex\">\r\n        <ion-icon class=\"zmdi zmdi-search ion-text-start\"></ion-icon>\r\n        <ion-searchbar class=\"ion-no-padding\" searchIcon=\"hide\" debounce=\"1000\" (ionChange)=\"onSearchbarChange($event)\"\r\n            placeholder=\"{{'search_medicines' | translate}}\"></ion-searchbar>\r\n    </div>\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n    <ion-list *ngIf=\"searchHistory && searchHistory.length\" lines=\"none\">\r\n        <h2>{{'recent_search' | translate}}</h2>\r\n        <ion-item *ngFor=\"let sh of searchHistory\" (click)=\"doSearch(sh)\">\r\n            <h3>{{sh}}</h3>\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n    <div *ngIf=\"!products || !products.length\" class=\"placeholder_view ion-text-center\">\r\n        <div class=\"img_box\">\r\n            <img src=\"assets/images/placeholder_doctors.png\">\r\n        </div>\r\n        <h2>{{'search_medicines' | translate}}</h2>\r\n    </div>\r\n\r\n    <div *ngIf=\"products && products.length\" class=\"item_row\">\r\n        <ion-row>\r\n            <ion-col *ngFor=\"let product of products\" size=\"6\">\r\n                <div class=\"item ion-text-center\">\r\n                    <div class=\"item_content\" (click)=\"navProDetail(product)\">\r\n                        <div *ngIf=\"product.prescription_required\" class=\"prescription_required\">\r\n                            <img src=\"assets/images/px.png\">\r\n                        </div>\r\n                        <div class=\"img_box\">\r\n                            <img [src]=\"product.images[0]\">\r\n                        </div>\r\n                        <h2>{{product.title}}</h2>\r\n                    </div>\r\n                    <div class=\"item_footer d-flex\">\r\n                        <h3 class=\"ion-text-center\">{{product.priceToShow}}</h3>\r\n                        <!-- <h4 class=\"ion-text-center end\">\r\n                            <span (click)=\"addProCart(product)\">\r\n                                {{'add_to_cart' | translate}}\r\n                            </span>\r\n                        </h4> -->\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-infinite-scroll (ionInfinite)=\"doInfiniteProducts($event)\">\r\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{'loading' | translate}}\">\r\n            </ion-infinite-scroll-content>\r\n        </ion-infinite-scroll>\r\n    </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/search-products/search-products-routing.module.ts": function srcAppSearchProductsSearchProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchProductsPageRoutingModule", function () {
      return SearchProductsPageRoutingModule;
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


    var _search_products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search-products.page */
    "./src/app/search-products/search-products.page.ts");

    var routes = [{
      path: '',
      component: _search_products_page__WEBPACK_IMPORTED_MODULE_3__["SearchProductsPage"]
    }];

    var SearchProductsPageRoutingModule = function SearchProductsPageRoutingModule() {
      _classCallCheck(this, SearchProductsPageRoutingModule);
    };

    SearchProductsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SearchProductsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/search-products/search-products.module.ts": function srcAppSearchProductsSearchProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchProductsPageModule", function () {
      return SearchProductsPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _search_products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-products-routing.module */
    "./src/app/search-products/search-products-routing.module.ts");
    /* harmony import */


    var _search_products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search-products.page */
    "./src/app/search-products/search-products.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var SearchProductsPageModule = function SearchProductsPageModule() {
      _classCallCheck(this, SearchProductsPageModule);
    };

    SearchProductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _search_products_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchProductsPageRoutingModule"]],
      declarations: [_search_products_page__WEBPACK_IMPORTED_MODULE_6__["SearchProductsPage"]]
    })], SearchProductsPageModule);
    /***/
  },

  /***/
  "./src/app/search-products/search-products.page.scss": function srcAppSearchProductsSearchProductsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header .search_box {\n  background: var(--white);\n  width: calc(100% - 0px);\n  border-radius: 3px;\n  margin: 0 auto;\n  padding: 0 15px;\n  position: relative;\n  overflow: hidden;\n  min-height: 45px;\n  z-index: 99;\n}\nion-header .search_box ion-icon {\n  color: var(--text-light);\n  font-size: 1.4rem;\n  min-width: 35px;\n  height: 35px;\n  line-height: 35px;\n  z-index: 99;\n  opacity: 0.5;\n}\nion-header .search_box ion-icon.zmdi-tune {\n  font-size: 1.3rem;\n  left: unset;\n  right: 0;\n  z-index: 99;\n}\nion-header .search_box ion-searchbar {\n  --background: var(--transparent) !important;\n  --color: var(--text-light2);\n  --placeholder-opacity: 1;\n  --placeholder-font-weight: 400 !important;\n  --box-shadow: none !important;\n}\nion-list {\n  margin-top: 8px;\n  background: var(--white) !important;\n  padding: 0;\n  padding-bottom: 10px;\n  box-shadow: 0 10px 12px -9px rgba(0, 0, 0, 0.1);\n}\nion-list h2 {\n  color: var(--text-light2);\n  margin: 0;\n  font-size: 0.85rem;\n  font-weight: 400;\n  padding: 15px 20px 13px 20px;\n}\nion-list ion-item {\n  padding: 8px 0;\n  width: calc(100% - 42px);\n  margin: 0 auto;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n}\nion-list ion-item h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.9rem;\n}\n.item_row ion-row {\n  padding: 5.5px 5px;\n}\n.item_row ion-row ion-col {\n  padding: 5.5px 5px;\n}\n.item_row ion-row ion-col .item {\n  background: var(--white);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.item_row ion-row ion-col .item .item_content {\n  padding: 10px 0;\n  position: relative;\n}\n.item_row ion-row ion-col .item .item_content .img_box {\n  width: 115px;\n  height: 115px;\n  margin: 0 auto;\n  position: relative;\n  margin-bottom: 12px;\n}\n.item_row ion-row ion-col .item .item_content .img_box img {\n  width: 86px;\n  display: block;\n  margin: auto;\n  align-self: unsafe;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n.item_row ion-row ion-col .item .item_content h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.9rem;\n}\n.item_row ion-row ion-col .item .item_footer {\n  border-top: 1px solid rgba(204, 204, 204, 0.48);\n}\n.item_row ion-row ion-col .item .item_footer h3 {\n  margin: 0;\n  font-size: 0.9rem;\n  min-width: 100%;\n  max-height: 100%;\n  padding: 7px 10px;\n}\n.item_row ion-row ion-col .item .item_footer h4 {\n  min-width: 50%;\n  max-height: 50%;\n  color: var(--white);\n  background: var(--primary);\n  margin: 0;\n  font-size: 0.78rem;\n  height: 31px;\n  line-height: 31px;\n}\n.prescription_required {\n  position: absolute;\n  right: 12px;\n  z-index: 99;\n  top: 12px;\n  width: 18px;\n}\n.placeholder_view {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0%;\n  top: 28%;\n  margin: auto;\n  width: calc(100% - 50px);\n  padding: 0 20px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.placeholder_view .img_box {\n  width: 90px;\n  margin: 0 auto;\n  margin-bottom: 12px;\n}\n.placeholder_view h2 {\n  color: var(--text-light2);\n  margin: 0;\n  font-size: 0.95rem;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXByb2R1Y3RzL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxzZWFyY2gtcHJvZHVjdHNcXHNlYXJjaC1wcm9kdWN0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlYXJjaC1wcm9kdWN0cy9zZWFyY2gtcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQVI7QURFUTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBWjtBREVZO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNBaEI7QURJUTtFQUNJLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7QUNGWjtBRE9BO0VBQ0ksZUFBQTtFQUNBLG1DQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsK0NBQUE7QUNKSjtBRE1JO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDSlI7QURPSTtFQUNJLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDTFI7QURPUTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDTFo7QURXSTtFQUNJLGtCQUFBO0FDUlI7QURVUTtFQUNJLGtCQUFBO0FDUlo7QURVWTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1JoQjtBRFVnQjtFQUNJLGVBQUE7RUFFQSxrQkFBQTtBQ1RwQjtBRFdvQjtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNUeEI7QURXd0I7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtBQ1Q1QjtBRGFvQjtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDWHhCO0FEZWdCO0VBQ0ksK0NBQUE7QUNicEI7QURlb0I7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ2J4QjtBRGdCb0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNkeEI7QURzQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNuQko7QURzQkE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FDbkJKO0FEcUJJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ25CUjtBRHNCSTtFQUNJLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ3BCUiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1wcm9kdWN0cy9zZWFyY2gtcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICAuc2VhcmNoX2JveCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWluLWhlaWdodDogNDVweDtcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcblxyXG4gICAgICAgICAgICAmLnptZGktdHVuZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxMnB4IC05cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHggMTNweCAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDJweCk7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaXRlbV9yb3cge1xyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgICAgcGFkZGluZzogNS41cHggNXB4O1xyXG5cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNS41cHggNXB4O1xyXG5cclxuICAgICAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAuaXRlbV9jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmltZ19ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IHVuc2FmZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLml0ZW1fZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjQ4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHJlc2NyaXB0aW9uX3JlcXVpcmVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICB3aWR0aDogMThweDtcclxufVxyXG5cclxuLnBsYWNlaG9sZGVyX3ZpZXcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIHRvcDogMjglO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHJcbiAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxufVxyXG4iLCJpb24taGVhZGVyIC5zZWFyY2hfYm94IHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIHotaW5kZXg6IDk5O1xufVxuaW9uLWhlYWRlciAuc2VhcmNoX2JveCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG1pbi13aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgei1pbmRleDogOTk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbmlvbi1oZWFkZXIgLnNlYXJjaF9ib3ggaW9uLWljb24uem1kaS10dW5lIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGxlZnQ6IHVuc2V0O1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk7XG59XG5pb24taGVhZGVyIC5zZWFyY2hfYm94IGlvbi1zZWFyY2hiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMTJweCAtOXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbmlvbi1saXN0IGgyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDE1cHggMjBweCAxM3B4IDIwcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDhweCAwO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDJweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5pb24tbGlzdCBpb24taXRlbSBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uaXRlbV9yb3cgaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDUuNXB4IDVweDtcbn1cbi5pdGVtX3JvdyBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiA1LjVweCA1cHg7XG59XG4uaXRlbV9yb3cgaW9uLXJvdyBpb24tY29sIC5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaXRlbV9yb3cgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2NvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pdGVtX3JvdyBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fY29udGVudCAuaW1nX2JveCB7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5pdGVtX3JvdyBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fY29udGVudCAuaW1nX2JveCBpbWcge1xuICB3aWR0aDogODZweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgYWxpZ24tc2VsZjogdW5zYWZlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbn1cbi5pdGVtX3JvdyBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fY29udGVudCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLml0ZW1fcm93IGlvbi1yb3cgaW9uLWNvbCAuaXRlbSAuaXRlbV9mb290ZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjQ4KTtcbn1cbi5pdGVtX3JvdyBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fZm9vdGVyIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA3cHggMTBweDtcbn1cbi5pdGVtX3JvdyBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fZm9vdGVyIGg0IHtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBoZWlnaHQ6IDMxcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xufVxuXG4ucHJlc2NyaXB0aW9uX3JlcXVpcmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgei1pbmRleDogOTk7XG4gIHRvcDogMTJweDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5wbGFjZWhvbGRlcl92aWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwJTtcbiAgdG9wOiAyOCU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4ucGxhY2Vob2xkZXJfdmlldyAuaW1nX2JveCB7XG4gIHdpZHRoOiA5MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5wbGFjZWhvbGRlcl92aWV3IGgyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIG9wYWNpdHk6IDAuNTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/search-products/search-products.page.ts": function srcAppSearchProductsSearchProductsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchProductsPage", function () {
      return SearchProductsPage;
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


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
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

    var SearchProductsPage = /*#__PURE__*/function () {
      function SearchProductsPage(config, navCtrl, translate, uiElementService, apiService, eComService) {
        _classCallCheck(this, SearchProductsPage);

        this.config = config;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.eComService = eComService;
        this.subscriptions = new Array();
        this.searchHistory = new Array();
        this.products = new Array();
        this.isLoading = true;
        this.searchHistory = src_models_helper_models__WEBPACK_IMPORTED_MODULE_8__["Helper"].getSearchHistory("pro");
      }

      _createClass(SearchProductsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedLocationNew = src_models_helper_models__WEBPACK_IMPORTED_MODULE_8__["Helper"].getAddressSelected();
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
          src_models_helper_models__WEBPACK_IMPORTED_MODULE_8__["Helper"].setSearchHistory(this.searchHistory, "pro");
        }
      }, {
        key: "onSearchbarChange",
        value: function onSearchbarChange(event) {
          var query = "";
          if (event && event.detail && event.detail.value) query = event.detail.value.toLowerCase().trim();
          if (query.length) this.doSearch(query);
        }
      }, {
        key: "doSearch",
        value: function doSearch(queryIn) {
          var _this = this;

          this.isLoading = true;
          this.lastSearchString = queryIn;
          this.products = [];
          this.nextUrl = null;
          this.subscriptions.push(this.apiService.getProductsWithQuery(queryIn, 1, this.selectedLocationNew).subscribe(function (res) {
            return _this.productsRes(res);
          }, function (err) {
            return _this.productsErr(err);
          })); // if (!this.searchHistory.includes(this.lastSearchString)) this.searchHistory.unshift(this.lastSearchString);
          // if (this.searchHistory.length > 3) this.searchHistory.splice(3, 1);
          // Helper.setSearchHistory(this.searchHistory);
        }
      }, {
        key: "productsRes",
        value: function productsRes(res) {
          this.products = this.products.concat(res.data);
          this.nextUrl = res.links.next;
          if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
          this.isLoading = false;
          this.uiElementService.dismissLoading();
          if (res.data && res.data.length) if (!this.searchHistory.includes(this.lastSearchString)) this.searchHistory.unshift(this.lastSearchString);
          if (this.searchHistory.length > 3) this.searchHistory.splice(3, 1);
          src_models_helper_models__WEBPACK_IMPORTED_MODULE_8__["Helper"].setSearchHistory(this.searchHistory, "pro");
        }
      }, {
        key: "productsErr",
        value: function productsErr(err) {
          console.log("productsErr", err);
          this.uiElementService.dismissLoading();
          if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
          this.isLoading = false;
        }
      }, {
        key: "doInfiniteProducts",
        value: function doInfiniteProducts(event) {
          var _this2 = this;

          if (this.nextUrl == null) {
            event.target.complete();
          } else {
            this.infiniteScrollEvent = event;
            this.subscriptions.push(this.apiService.getURL(this.nextUrl).subscribe(function (res) {
              if (res && res.data && res.data.length) {
                var _iterator2 = _createForOfIteratorHelper(res.data),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var pro = _step2.value;

                    _this2.apiService.setupProduct(pro);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }

              _this2.productsRes(res);
            }, function (err) {
              return _this2.productsErr(err);
            }));
          }
        } // addProCart(pro: Product) {
        //   let added = this.eComService.addOrIncrementCartItem(this.eComService.getCartItemFromProduct(pro));
        //   if (added)
        //     this.cartCount = this.eComService.getCartItemsCount();
        //   else
        //     this.translate.get("incremented_cart").subscribe(value => this.uiElementService.presentToast(value));
        // }

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
      }]);

      return SearchProductsPage;
    }();

    SearchProductsPage.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"]]
        }]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_7__["ECommerceService"]
      }];
    };

    SearchProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-products',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./search-products.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search-products/search-products.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./search-products.page.scss */
      "./src/app/search-products/search-products.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_7__["ECommerceService"]])], SearchProductsPage);
    /***/
  }
}]);
//# sourceMappingURL=search-products-search-products-module-es5.js.map