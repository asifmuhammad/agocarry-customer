function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-info-orders-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/orders-info/orders-info.page.html": function node_modulesRawLoaderDistCjsJsSrcAppOrdersInfoOrdersInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <div class=\"title_inner d-flex\">\r\n                <span>{{'order_id' | translate}}{{order.id}}</span>\r\n                <!-- <ion-icon class=\"zmdi zmdi-more-vert end ion-text-end\"></ion-icon> -->\r\n            </div>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n    <div class=\"item_about d-flex\"\r\n        [ngClass]=\"{'in_transist': (order.status=='dispatched' || order.status=='intransit'), 'delivered':order.status=='complete', 'confirmed':order.status=='accepted' }\">\r\n        <div class=\"img_box center_img\">\r\n            <img [src]=\"order.vendor.image\" class=\"crop_img\">\r\n        </div>\r\n        <div class=\"text_box\">\r\n            <h3 class=\"d-flex\">{{order.vendor.name}} <span\r\n                    class=\"end order_status\">{{('order_status_'+order.status) | translate}}</span></h3>\r\n            <h4 class=\"d-flex\">{{order.created_at}} <span class=\"end\">{{order.total_toshow}} |\r\n                    {{order?.payment?.payment_method?.title || 'COD'}}</span></h4>\r\n        </div>\r\n    </div>\r\n</ion-header>\r\n\r\n\r\n<!--\r\n<ion-content class=\"bg_color\">\r\n\t<ion-list lines=\"none\">\r\n\t\t<ion-item\r\n\t\t\t[ngClass]=\"{'in_transist': (order.status=='dispatched' || order.status=='intransit'), 'delivered':order.status=='complete', 'confirmed':order.status=='accepted' }\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h2 class=\"d-flex\">\r\n\t\t\t\t\t{{'order_id' | translate}}{{order.id}}\r\n\t\t\t\t\t<span class=\"end order_status\">{{('order_status_'+order.status) | translate}}</span>\r\n\t\t\t\t</h2>\r\n\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t<h3>{{'ordered_on' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>{{order.created_at}}</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<h3>{{'amount' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>{{order.total_toshow}}</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<h3>{{'payment' | translate}}</h3>\r\n\t\t\t\t\t\t<h4 *ngIf=\"order.payment && order.payment.payment_method\">{{order.payment.payment_method.title}}\r\n\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t<h4 *ngIf=\"!(order.payment && order.payment.payment_method)\">COD</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"3\">\r\n\t\t\t\t\t\t<h3>{{'items' | translate}}</h3>\r\n\t\t\t\t\t\t<h4>{{order.products.length}} {{'items' | translate}}</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\r\n\t\t<div class=\"order_step ion-text-center\">\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"4\" [ngClass]=\"orderProgress>=1?'active':''\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/ic_confirm_non.png\">\r\n\t\t\t\t\t\t<img src=\"assets/images/ic_confirm.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h2>{{'confirmed' | translate}}</h2>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"4\" [ngClass]=\"orderProgress>=2?'active':''\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/ic_transist_non.png\">\r\n\t\t\t\t\t\t<img src=\"assets/images/ic_transist.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h2>{{'processing' | translate}}</h2>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"4\" [ngClass]=\"orderProgress>=3?'active':''\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/ic_delivered_non.png\">\r\n\t\t\t\t\t\t<img src=\"assets/images/ic_delivered.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h2>{{'completed' | translate}}</h2>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</div>\r\n\r\n\t\t<ion-item class=\"ordered_items\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h2 class=\"d-flex\"> {{'ordered_items' | translate}} </h2>\r\n\t\t\t\t<div class=\"item_container\">\r\n\t\t\t\t\t<div *ngFor=\"let product of order.products\" class=\"item\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">{{product.vendor_product.product.title}}\r\n\t\t\t\t\t\t\t<span *ngIf=\"product.vendor_product.product.prescription_required\"\r\n\t\t\t\t\t\t\t\tclass=\"prescription_required ion-text-end\">\r\n\t\t\t\t\t\t\t\t<img src=\"assets/images/px.png\">\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<h4 class=\"d-flex\">\r\n\t\t\t\t\t\t\t{{product.vendor_product.vendor.name}}\r\n\t\t\t\t\t\t\t<span class=\"end\">{{product.total_toshow}}</span>\r\n\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\r\n\t\t <ion-item class=\"upload_prescription\">\r\n\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t<div class=\"icon_box ion-text-start\">\r\n\t\t\t\t\t<img src=\"assets/images/px.png\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<h2 class=\"d-flex\">\r\n\t\t\t\t\t{{'presription_uploaded' | translate}}\r\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-eye ion-text-end end\"></ion-icon>\r\n\t\t\t\t</h2>\r\n\t\t\t</div>\r\n\t\t</ion-item> \r\n\t</ion-list>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n\t<div class=\"form\" [ngClass]=\"fabAction ? 'active' : ''\">\r\n\t\t<div class=\"payment_details\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<h2 class=\"d-flex\">\r\n\t\t\t\t\t{{'sub_total' | translate}}\r\n\t\t\t\t\t<span class=\"end\">{{order.subtotal_toshow}}</span>\r\n\t\t\t\t</h2>\r\n\t\t\t\t<h2 *ngIf=\"order.taxes_toshow\" class=\"d-flex\">\r\n\t\t\t\t\t{{'tax_in_percent' | translate}}\r\n\t\t\t\t\t<span class=\"end\">{{order.taxes_toshow}}</span>\r\n\t\t\t\t</h2>\r\n\t\t\t\t<h2 *ngIf=\"order.delivery_fee_toshow\" class=\"d-flex\">\r\n\t\t\t\t\t{{'delivery_fee' | translate}}\r\n\t\t\t\t\t<span class=\"end\">{{order.delivery_fee_toshow}}</span>\r\n\t\t\t\t</h2>\r\n\t\t\t\t<h2 *ngIf=\"order.discount_toshow\" class=\"d-flex\">\r\n\t\t\t\t\t{{'discount' | translate}}\r\n\t\t\t\t\t<span class=\"end\">- {{order.discount_toshow}}</span>\r\n\t\t\t\t</h2>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"amount_payable\" (click)=\"toggleFab()\">\r\n\t\t\t\t<h2 class=\"d-flex\">\r\n\t\t\t\t\t{{'total' | translate}}\r\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-alert-circle-o\"></ion-icon>\r\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-chevron-down\"></ion-icon>\r\n\t\t\t\t\t<span class=\"end\">{{order.total_toshow}}</span>\r\n\t\t\t\t</h2>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<ion-button size=\"large\" shape=\"full\" class=\"btn\" [disabled]=\"!canTrack()\" (click)=\"navTrackOrder()\">\r\n\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-start\"></ion-icon>\r\n\t\t{{'track_order' | translate}}\r\n\t</ion-button>\r\n</ion-footer>\r\n-->\r\n\r\n\r\n\r\n<ion-content class=\"bg_color\">\r\n    <ion-list lines=\"none\">\r\n        <div class=\"order_status\">\r\n            <ion-item class=\"\" [ngClass]=\"{'done':orderProgress>=2,'active':orderProgress==1}\">\r\n                <div class=\"item_inner d-flex\" style=\"height: 53px;\">\r\n                    <div class=\"icon_box\">\r\n                        <ion-icon class=\"zmdi zmdi-check-circle\"></ion-icon>\r\n                        <ion-icon class=\"zmdi zmdi-circle-o\"></ion-icon>\r\n                    </div>\r\n                    <div class=\"text_box\">\r\n                        <h2>{{'order_confirmed' | translate}}</h2>\r\n                        <!-- <h3>3:40 pm | 20 June 2020</h3> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"circle_icon\">\r\n                    <span></span>\r\n                    <span></span>\r\n                    <span></span>\r\n                </div>\r\n            </ion-item>\r\n\r\n            <ion-item [ngClass]=\"{'done':orderProgress>=3,'active':orderProgress==2}\">\r\n                <div class=\"item_inner d-flex\" style=\"height: 53px;\">\r\n                    <div class=\"icon_box\">\r\n                        <ion-icon class=\"zmdi zmdi-check-circle\"></ion-icon>\r\n                        <ion-icon class=\"zmdi zmdi-circle-o\"></ion-icon>\r\n                    </div>\r\n                    <div class=\"text_box\">\r\n                        <h2 class=\"d-flex\">{{'order_picked' | translate}}\r\n                            <span *ngIf=\"orderProgress == 2\" class=\"end\" (click)=\"navTrackOrder()\">\r\n                                <ion-icon class=\"zmdi zmdi-navigation\"></ion-icon>\r\n                                {{'track' | translate}}\r\n                            </span>\r\n                        </h2>\r\n                        <!-- <h3>4:32 pm | 20 June 2020</h3> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"circle_icon\">\r\n                    <span></span>\r\n                    <span></span>\r\n                    <span></span>\r\n                </div>\r\n            </ion-item>\r\n\r\n            <ion-item [ngClass]=\"{'done':orderProgress>=3,'active':orderProgress==3}\">\r\n                <div class=\"item_inner d-flex\" style=\"height: 53px;\">\r\n                    <div class=\"icon_box\">\r\n                        <ion-icon class=\"zmdi zmdi-check-circle\"></ion-icon>\r\n                        <ion-icon class=\"zmdi zmdi-circle-o\"></ion-icon>\r\n                    </div>\r\n                    <div class=\"text_box\">\r\n                        <h2>{{'order_delivered' | translate}}</h2>\r\n                        <!-- <h3>{{'yet_to_delivered' | translate}}</h3> -->\r\n                    </div>\r\n                </div>\r\n            </ion-item>\r\n        </div>\r\n\r\n        <div class=\"item_list\">\r\n            <h2>{{'ordered_items' | translate}}</h2>\r\n            <ion-item *ngFor=\"let product of order.products\">\r\n                <div class=\"item_inner\">\r\n                    <h3 class=\"d-flex\"> {{product?.vendor_product.product.title}}</h3>\r\n                    <h4 class=\"d-flex\">x {{product.quantity}} <span class=\"end\">{{product.total_toshow}}</span></h4>\r\n                </div>\r\n            </ion-item>\r\n        </div>\r\n\r\n        <ion-item *ngIf=\"prescriptionLink != null\" class=\"upload_prescription\">\r\n            <div class=\"item_inner d-flex\">\r\n                <div class=\"item_img\">\r\n                    <img src=\"assets/images/px.png\">\r\n                </div>\r\n                <h2 class=\"d-flex\">\r\n                    {{'prescription_uploaded' | translate}}\r\n                    <span class=\"icon_box end\" (click)=\"viewPresciption()\">\r\n                        <ion-icon class=\"zmdi zmdi-eye ion-text-end\"></ion-icon>\r\n                    </span>\r\n                </h2>\r\n            </div>\r\n        </ion-item>\r\n\r\n        <div class=\"payment_details\">\r\n            <ion-item>\r\n                <div class=\"item_inner\">\r\n                    <h3 class=\"d-flex\"> {{'sub_total' | translate}} <span class=\"end\">{{order.subtotal_toshow}}</span>\r\n                    </h3>\r\n                </div>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"order.taxes_toshow\">\r\n                <div class=\"item_inner\">\r\n                    <h3 class=\"d-flex\"> {{'tax_in_percent' | translate}} <span class=\"end\">{{order.taxes_toshow}}</span>\r\n                    </h3>\r\n                </div>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"order.discount_toshow\">\r\n                <div class=\"item_inner\">\r\n                    <h3 class=\"d-flex\"> {{'promo_code_applied' | translate}} <span\r\n                            class=\"end\">-{{order.discount_toshow}}</span></h3>\r\n                </div>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"order.delivery_fee_toshow\">\r\n                <div class=\"item_inner\">\r\n                    <h3 class=\"d-flex\"> {{'delivery_fee' | translate}} <span class=\"end\">\r\n                            {{order.delivery_fee_toshow}}</span></h3>\r\n                </div>\r\n            </ion-item>\r\n            <ion-item class=\"amount_payable\">\r\n                <div class=\"item_inner\">\r\n                    <h3 class=\"d-flex\"> {{'amount_via' | translate}}\r\n                        {{order?.payment?.payment_method?.slug || 'COD' | uppercase}} <span class=\"end\">\r\n                            {{order.total_toshow}}</span></h3>\r\n                </div>\r\n            </ion-item>\r\n        </div>\r\n    </ion-list>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/orders-info/orders-info-routing.module.ts": function srcAppOrdersInfoOrdersInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersInfoPageRoutingModule", function () {
      return OrdersInfoPageRoutingModule;
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


    var _orders_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./orders-info.page */
    "./src/app/orders-info/orders-info.page.ts");

    var routes = [{
      path: '',
      component: _orders_info_page__WEBPACK_IMPORTED_MODULE_3__["OrdersInfoPage"]
    }];

    var OrdersInfoPageRoutingModule = function OrdersInfoPageRoutingModule() {
      _classCallCheck(this, OrdersInfoPageRoutingModule);
    };

    OrdersInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrdersInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/orders-info/orders-info.module.ts": function srcAppOrdersInfoOrdersInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersInfoPageModule", function () {
      return OrdersInfoPageModule;
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


    var _orders_info_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./orders-info-routing.module */
    "./src/app/orders-info/orders-info-routing.module.ts");
    /* harmony import */


    var _orders_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./orders-info.page */
    "./src/app/orders-info/orders-info.page.ts");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");

    var OrdersInfoPageModule = function OrdersInfoPageModule() {
      _classCallCheck(this, OrdersInfoPageModule);
    };

    OrdersInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _orders_info_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrdersInfoPageRoutingModule"]],
      providers: [_ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["PhotoViewer"]],
      declarations: [_orders_info_page__WEBPACK_IMPORTED_MODULE_7__["OrdersInfoPage"]]
    })], OrdersInfoPageModule);
    /***/
  },

  /***/
  "./src/app/orders-info/orders-info.page.scss": function srcAppOrdersInfoOrdersInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  background: var(--white);\n}\nion-header ion-toolbar ion-title .title_inner {\n  position: relative;\n  min-height: 60px;\n}\nion-header ion-toolbar ion-title span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nion-header ion-toolbar ion-title ion-icon {\n  font-size: 1.4rem;\n  padding: 0 1px;\n  min-width: 20px;\n}\nion-header .item_about {\n  padding: 20px;\n  padding-top: 10px;\n}\nion-header .item_about .img_box {\n  min-width: 35px;\n  height: 35px;\n  margin-right: 15px;\n  border-radius: 4px;\n}\nion-header .item_about .text_box {\n  width: 100%;\n}\nion-header .item_about .text_box h3 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding-bottom: 6px;\n  color: var(--text-dark);\n}\nion-header .item_about .text_box h3 span.order_status {\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  font-size: 0.85rem;\n}\nion-header .item_about .text_box h4 {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: var(--text-light2);\n}\nion-header .item_about.in_transist .text_box h3 span.order_status {\n  color: var(--yelow_color);\n}\nion-header .item_about.confirmed .text_box h3 span.order_status {\n  color: var(--primary);\n}\nion-header .item_about.delivered .text_box h3 span.order_status {\n  color: var(--text-dark);\n  font-weight: 700;\n}\nion-list {\n  padding: 0;\n  background: none;\n  margin: 0;\n}\nion-list ion-item {\n  padding: 0 0;\n  background: var(--white);\n  --background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --min-height: unset;\n  padding: 20px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item.upload_prescription {\n  padding: 18px;\n  margin-bottom: 5px;\n}\nion-list ion-item.upload_prescription .item_inner .item_img {\n  min-width: 25px;\n  width: 25px;\n  margin-right: 20px;\n}\nion-list ion-item.upload_prescription .item_inner .item_img img {\n  display: block;\n}\nion-list ion-item.upload_prescription .item_inner h2 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-black);\n  padding: 0;\n}\nion-list ion-item.upload_prescription .item_inner h2 .icon_box ion-icon {\n  color: var(--primary);\n  font-size: 1.35rem;\n  min-width: 28px;\n}\nion-list .order_status {\n  padding: 8px 0;\n  position: relative;\n}\nion-list .order_status ion-item {\n  background: none;\n  padding: 7px 20px;\n  position: relative;\n  overflow: visible;\n}\nion-list .order_status ion-item .circle_icon {\n  display: block;\n  position: absolute;\n  top: 34px;\n  left: -7px;\n}\nion-list .order_status ion-item .circle_icon span {\n  position: relative;\n  min-width: 30px;\n  height: 12px;\n  display: block;\n}\nion-list .order_status ion-item .circle_icon span::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-radius: 50%;\n  height: 4px;\n  width: 4px;\n  background: var(--primary);\n  margin: auto;\n}\nion-list .order_status ion-item .item_inner {\n  align-items: flex-start;\n}\nion-list .order_status ion-item .item_inner .icon_box {\n  min-width: 23px;\n  position: relative;\n  top: 8px;\n}\nion-list .order_status ion-item .item_inner .icon_box ion-icon {\n  color: var(--primary);\n  font-size: 1.25rem;\n  display: none;\n}\nion-list .order_status ion-item .item_inner .icon_box ion-icon.zmdi-circle-o {\n  color: var(--text-light2);\n  display: block;\n}\nion-list .order_status ion-item .item_inner .text_box {\n  width: 100%;\n  padding: 10px 18px;\n  padding-left: 24px;\n  position: relative;\n}\nion-list .order_status ion-item .item_inner .text_box h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 0.4px;\n  padding-bottom: 5px;\n  position: relative;\n  z-index: 99;\n}\nion-list .order_status ion-item .item_inner .text_box h2 span {\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  font-size: 0.95rem;\n  font-weight: 400;\n}\nion-list .order_status ion-item .item_inner .text_box h2 span ion-icon {\n  font-size: 1.1rem;\n  min-width: 20px;\n}\nion-list .order_status ion-item .item_inner .text_box h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.75rem;\n  font-weight: 400;\n  position: relative;\n  z-index: 99;\n}\nion-list .order_status ion-item.done .item_inner .icon_box ion-icon.zmdi-circle-o {\n  display: none;\n}\nion-list .order_status ion-item.done .item_inner .icon_box ion-icon.zmdi-check-circle {\n  display: block;\n}\nion-list .order_status ion-item.done .item_inner .text_box h2 {\n  color: var(--text-black);\n  font-weight: 500;\n}\nion-list .order_status ion-item.active .item_inner .icon_box ion-icon.zmdi-circle-o {\n  display: none;\n}\nion-list .order_status ion-item.active .item_inner .icon_box ion-icon.zmdi-check-circle {\n  display: block;\n}\nion-list .order_status ion-item.active .item_inner .text_box::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  background: url('order_status_bg.png');\n  background-position: top;\n  background-size: cover;\n  background-repeat: round;\n}\nion-list .order_status ion-item.active .item_inner .text_box h2 {\n  color: var(--text-black);\n  font-weight: 500;\n}\nion-list .item_list {\n  margin-bottom: 5px;\n}\nion-list .item_list h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 0.95rem;\n  padding: 20px;\n  background: var(--white);\n}\nion-list .item_list ion-item {\n  margin-bottom: 0;\n  padding-top: 9px;\n  padding-bottom: 9px;\n}\nion-list .item_list ion-item .item_inner h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 1rem;\n  letter-spacing: 0;\n  font-weight: 500;\n  padding-bottom: 6px;\n}\nion-list .item_list ion-item .item_inner h3 img {\n  min-width: 20px;\n  width: 20px;\n  margin-left: 20px;\n  display: block;\n}\nion-list .item_list ion-item .item_inner h4 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.85rem;\n  font-weight: 400;\n}\nion-list .item_list ion-item .item_inner h4 span {\n  color: var(--text-black);\n  font-size: 0.98rem;\n  font-weight: 500;\n}\nion-list .item_list ion-item:first-child {\n  padding-top: 20px;\n}\nion-list .item_list ion-item:last-child {\n  padding-bottom: 20px;\n}\nion-list .payment_details {\n  margin-bottom: 4px;\n}\nion-list .payment_details ion-item {\n  margin-bottom: 0;\n  padding-top: 9px;\n  padding-bottom: 9px;\n}\nion-list .payment_details ion-item .item_inner h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.95rem;\n  letter-spacing: 0;\n  font-weight: 500;\n}\nion-list .payment_details ion-item .item_inner h3 span {\n  font-size: 1.1rem;\n  font-weight: 500;\n  color: var(--text-dark);\n}\nion-list .payment_details ion-item:first-child {\n  padding-top: 20px;\n}\nion-list .payment_details ion-item:last-child {\n  padding-bottom: 20px;\n}\nion-list .payment_details ion-item.amount_payable .item_inner h3 {\n  color: var(--text-black);\n  font-size: 1.1rem;\n  letter-spacing: 0;\n  font-weight: 600;\n}\nion-list .payment_details ion-item.amount_payable .item_inner h3 span {\n  color: var(--text-black);\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzLWluZm8vRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktY3VzdG9tZXIvc3JjXFxhcHBcXG9yZGVycy1pbmZvXFxvcmRlcnMtaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL29yZGVycy1pbmZvL29yZGVycy1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FDQ0o7QURFUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBWjtBREdRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDRFo7QURJUTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNGWjtBRE1JO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FDSlI7QURNUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0paO0FET1E7RUFDSSxXQUFBO0FDTFo7QURPWTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0xoQjtBRFFvQjtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGtCQUFBO0FDTnhCO0FEV1k7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDVGhCO0FEaUJ3QjtFQUNJLHlCQUFBO0FDZjVCO0FEMEJ3QjtFQUNJLHFCQUFBO0FDeEI1QjtBRG1Dd0I7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0FDakM1QjtBRDBDQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUN2Q0o7QUR5Q0k7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDdkNSO0FEeUNRO0VBQ0ksV0FBQTtBQ3ZDWjtBRDBDUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQ3hDWjtBRDJDZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDekNwQjtBRDJDb0I7RUFDSSxjQUFBO0FDekN4QjtBRDZDZ0I7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0FDM0NwQjtBRDhDd0I7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQzVDNUI7QURvREk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNsRFI7QURvRFE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2xEWjtBRG9EWTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDbERoQjtBRG9EZ0I7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ2xEcEI7QURvRG9CO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUNsRHhCO0FEdURZO0VBQ0ksdUJBQUE7QUNyRGhCO0FEdURnQjtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNyRHBCO0FEdURvQjtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDckR4QjtBRHVEd0I7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNyRDVCO0FEMERnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUN4RHBCO0FEMERvQjtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDeER4QjtBRDBEd0I7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUN4RDVCO0FEMEQ0QjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ3hEaEM7QUQ2RG9CO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQzNEeEI7QURvRTRCO0VBQ0ksYUFBQTtBQ2xFaEM7QURxRTRCO0VBQ0ksY0FBQTtBQ25FaEM7QUR5RXdCO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtBQ3ZFNUI7QURpRjRCO0VBQ0ksYUFBQTtBQy9FaEM7QURrRjRCO0VBQ0ksY0FBQTtBQ2hGaEM7QURzRndCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FDcEY1QjtBRHVGd0I7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0FDckY1QjtBRDZGSTtFQUNJLGtCQUFBO0FDM0ZSO0FENkZRO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQzNGWjtBRDhGUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQzVGWjtBRCtGZ0I7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDN0ZwQjtBRCtGb0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQzdGeEI7QURpR2dCO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQy9GcEI7QURpR29CO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDL0Z4QjtBRG9HWTtFQUNJLGlCQUFBO0FDbEdoQjtBRHFHWTtFQUNJLG9CQUFBO0FDbkdoQjtBRHdHSTtFQUNJLGtCQUFBO0FDdEdSO0FEd0dRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDdEdaO0FEeUdnQjtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ3ZHcEI7QUR5R29CO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDdkd4QjtBRDRHWTtFQUNJLGlCQUFBO0FDMUdoQjtBRDZHWTtFQUNJLG9CQUFBO0FDM0doQjtBRGdIb0I7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQzlHeEI7QURnSHdCO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtBQzlHNUIiLCJmaWxlIjoic3JjL2FwcC9vcmRlcnMtaW5mby9vcmRlcnMtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHJcbiAgICBpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG4gICAgICAgIC50aXRsZV9pbm5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxcHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW1fYWJvdXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgIC5pbWdfYm94IHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHRfYm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICYub3JkZXJfc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5pbl90cmFuc2lzdCB7XHJcbiAgICAgICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYub3JkZXJfc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS15ZWxvd19jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuY29uZmlybWVkIHtcclxuICAgICAgICAgICAgLnRleHRfYm94IHtcclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5vcmRlcl9zdGF0dXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmRlbGl2ZXJlZCB7XHJcbiAgICAgICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYub3JkZXJfc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnVwbG9hZF9wcmVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAuaXRlbV9pbm5lciB7XHJcbiAgICAgICAgICAgICAgICAuaXRlbV9pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaWNvbl9ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm9yZGVyX3N0YXR1cyB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCAyMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG5cclxuICAgICAgICAgICAgLmNpcmNsZV9pY29uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzNHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTdweDtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICAgICAgICAgIC5pY29uX2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDhweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuem1kaS1jaXJjbGUtbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRleHRfYm94IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5kb25lIHtcclxuICAgICAgICAgICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAuaWNvbl9ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnptZGktY2lyY2xlLW8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi56bWRpLWNoZWNrLWNpcmNsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAuaWNvbl9ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnptZGktY2lyY2xlLW8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi56bWRpLWNoZWNrLWNpcmNsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9vcmRlcl9zdGF0dXNfYmcucG5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW1fbGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA5cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XHJcblxyXG4gICAgICAgICAgICAuaXRlbV9pbm5lciB7XHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk4cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wYXltZW50X2RldGFpbHMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuXHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogOXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG5cclxuICAgICAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYW1vdW50X3BheWFibGUge1xyXG4gICAgICAgICAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNjBweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgcGFkZGluZzogMCAxcHg7XG4gIG1pbi13aWR0aDogMjBweDtcbn1cbmlvbi1oZWFkZXIgLml0ZW1fYWJvdXQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbmlvbi1oZWFkZXIgLml0ZW1fYWJvdXQgLmltZ19ib3gge1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5pb24taGVhZGVyIC5pdGVtX2Fib3V0IC50ZXh0X2JveCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWhlYWRlciAuaXRlbV9hYm91dCAudGV4dF9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG59XG5pb24taGVhZGVyIC5pdGVtX2Fib3V0IC50ZXh0X2JveCBoMyBzcGFuLm9yZGVyX3N0YXR1cyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cbmlvbi1oZWFkZXIgLml0ZW1fYWJvdXQgLnRleHRfYm94IGg0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbn1cbmlvbi1oZWFkZXIgLml0ZW1fYWJvdXQuaW5fdHJhbnNpc3QgLnRleHRfYm94IGgzIHNwYW4ub3JkZXJfc3RhdHVzIHtcbiAgY29sb3I6IHZhcigtLXllbG93X2NvbG9yKTtcbn1cbmlvbi1oZWFkZXIgLml0ZW1fYWJvdXQuY29uZmlybWVkIC50ZXh0X2JveCBoMyBzcGFuLm9yZGVyX3N0YXR1cyB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbmlvbi1oZWFkZXIgLml0ZW1fYWJvdXQuZGVsaXZlcmVkIC50ZXh0X2JveCBoMyBzcGFuLm9yZGVyX3N0YXR1cyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5pb24tbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMCAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtLnVwbG9hZF9wcmVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5pb24tbGlzdCBpb24taXRlbS51cGxvYWRfcHJlc2NyaXB0aW9uIC5pdGVtX2lubmVyIC5pdGVtX2ltZyB7XG4gIG1pbi13aWR0aDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtLnVwbG9hZF9wcmVzY3JpcHRpb24gLml0ZW1faW5uZXIgLml0ZW1faW1nIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0udXBsb2FkX3ByZXNjcmlwdGlvbiAuaXRlbV9pbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tbGlzdCBpb24taXRlbS51cGxvYWRfcHJlc2NyaXB0aW9uIC5pdGVtX2lubmVyIGgyIC5pY29uX2JveCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xuICBtaW4td2lkdGg6IDI4cHg7XG59XG5pb24tbGlzdCAub3JkZXJfc3RhdHVzIHtcbiAgcGFkZGluZzogOHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1saXN0IC5vcmRlcl9zdGF0dXMgaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiA3cHggMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbmlvbi1saXN0IC5vcmRlcl9zdGF0dXMgaW9uLWl0ZW0gLmNpcmNsZV9pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNHB4O1xuICBsZWZ0OiAtN3B4O1xufVxuaW9uLWxpc3QgLm9yZGVyX3N0YXR1cyBpb24taXRlbSAuY2lyY2xlX2ljb24gc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWxpc3QgLm9yZGVyX3N0YXR1cyBpb24taXRlbSAuY2lyY2xlX2ljb24gc3Bhbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDRweDtcbiAgd2lkdGg6IDRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIG1hcmdpbjogYXV0bztcbn1cbmlvbi1saXN0IC5vcmRlcl9zdGF0dXMgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbmlvbi1saXN0IC5vcmRlcl9zdGF0dXMgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLmljb25fYm94IHtcbiAgbWluLXdpZHRoOiAyM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOHB4O1xufVxuaW9uLWxpc3QgLm9yZGVyX3N0YXR1cyBpb24taXRlbSAuaXRlbV9pbm5lciAuaWNvbl9ib3ggaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmlvbi1saXN0IC5vcmRlcl9zdGF0dXMgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLmljb25fYm94IGlvbi1pY29uLnptZGktY2lyY2xlLW8ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1saXN0IC5vcmRlcl9zdGF0dXMgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMThweDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tbGlzdCAub3JkZXJfc3RhdHVzIGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbn1cbmlvbi1saXN0IC5vcmRlcl9zdGF0dXMgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGgyIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmlvbi1saXN0IC5vcmRlcl9zdGF0dXMgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGgyIHNwYW4gaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbWluLXdpZHRoOiAyMHB4O1xufVxuaW9uLWxpc3QgLm9yZGVyX3N0YXR1cyBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbn1cbmlvbi1saXN0IC5vcmRlcl9zdGF0dXMgaW9uLWl0ZW0uZG9uZSAuaXRlbV9pbm5lciAuaWNvbl9ib3ggaW9uLWljb24uem1kaS1jaXJjbGUtbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pb24tbGlzdCAub3JkZXJfc3RhdHVzIGlvbi1pdGVtLmRvbmUgLml0ZW1faW5uZXIgLmljb25fYm94IGlvbi1pY29uLnptZGktY2hlY2stY2lyY2xlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tbGlzdCAub3JkZXJfc3RhdHVzIGlvbi1pdGVtLmRvbmUgLml0ZW1faW5uZXIgLnRleHRfYm94IGgyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLWxpc3QgLm9yZGVyX3N0YXR1cyBpb24taXRlbS5hY3RpdmUgLml0ZW1faW5uZXIgLmljb25fYm94IGlvbi1pY29uLnptZGktY2lyY2xlLW8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuaW9uLWxpc3QgLm9yZGVyX3N0YXR1cyBpb24taXRlbS5hY3RpdmUgLml0ZW1faW5uZXIgLmljb25fYm94IGlvbi1pY29uLnptZGktY2hlY2stY2lyY2xlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tbGlzdCAub3JkZXJfc3RhdHVzIGlvbi1pdGVtLmFjdGl2ZSAuaXRlbV9pbm5lciAudGV4dF9ib3g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL29yZGVyX3N0YXR1c19iZy5wbmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcbn1cbmlvbi1saXN0IC5vcmRlcl9zdGF0dXMgaW9uLWl0ZW0uYWN0aXZlIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoMiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmlvbi1saXN0IC5pdGVtX2xpc3Qge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5pb24tbGlzdCAuaXRlbV9saXN0IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbmlvbi1saXN0IC5pdGVtX2xpc3QgaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xufVxuaW9uLWxpc3QgLml0ZW1fbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xufVxuaW9uLWxpc3QgLml0ZW1fbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMyBpbWcge1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tbGlzdCAuaXRlbV9saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGg0IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5pb24tbGlzdCAuaXRlbV9saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGg0IHNwYW4ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMC45OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmlvbi1saXN0IC5pdGVtX2xpc3QgaW9uLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbmlvbi1saXN0IC5pdGVtX2xpc3QgaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuaW9uLWxpc3QgLnBheW1lbnRfZGV0YWlscyB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbmlvbi1saXN0IC5wYXltZW50X2RldGFpbHMgaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xufVxuaW9uLWxpc3QgLnBheW1lbnRfZGV0YWlscyBpb24taXRlbSAuaXRlbV9pbm5lciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLWxpc3QgLnBheW1lbnRfZGV0YWlscyBpb24taXRlbSAuaXRlbV9pbm5lciBoMyBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xufVxuaW9uLWxpc3QgLnBheW1lbnRfZGV0YWlscyBpb24taXRlbTpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuaW9uLWxpc3QgLnBheW1lbnRfZGV0YWlscyBpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5pb24tbGlzdCAucGF5bWVudF9kZXRhaWxzIGlvbi1pdGVtLmFtb3VudF9wYXlhYmxlIC5pdGVtX2lubmVyIGgzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5pb24tbGlzdCAucGF5bWVudF9kZXRhaWxzIGlvbi1pdGVtLmFtb3VudF9wYXlhYmxlIC5pdGVtX2lubmVyIGgzIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/orders-info/orders-info.page.ts": function srcAppOrdersInfoOrdersInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersInfoPage", function () {
      return OrdersInfoPage;
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


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");

    var OrdersInfoPage = /*#__PURE__*/function () {
      function OrdersInfoPage(router, navCtrl, translate, uiElementService, photoViewer) {
        _classCallCheck(this, OrdersInfoPage);

        this.router = router;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.photoViewer = photoViewer;
        this.orderProgress = 0;
        this.fabAction = false;
      }

      _createClass(OrdersInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.router.getCurrentNavigation().extras.state) {
            this.order = this.router.getCurrentNavigation().extras.state.order;

            switch (this.order.status) {
              case "cancelled":
              case "refund":
              case "hold":
              case "rejected":
              case "failed":
              case "new":
              case "pending":
                this.orderProgress = 0;
                break;

              case "accepted":
                this.orderProgress = 1;
                break;

              case "preparing":
              case "prepared":
              case "dispatched":
              case "intransit":
                this.orderProgress = 2;
                break;

              case "complete":
                this.orderProgress = 3;
                break;
            }

            if (this.order.meta && this.order.meta[src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].KEY_PRESCRIPTION_URL]) this.prescriptionLink = this.order.meta[src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].KEY_PRESCRIPTION_URL];
          }
        }
      }, {
        key: "toggleFab",
        value: function toggleFab() {
          this.fabAction = !this.fabAction;
        }
      }, {
        key: "navTrackOrder",
        value: function navTrackOrder() {
          var _this = this;

          if (this.canTrack()) {
            // this.order.delivery = JSON.parse(JSON.stringify({
            //   "id": 53,
            //   "status": "complete",
            //   "order_id": 112,
            //   "delivery": {
            //     "id": 16,
            //     "meta": {
            //       "gender": "female",
            //       "document_url": "https:\/\/firebasestorage.googleapis.com\/v0\/b\/kabra-1cf22.appspot.com\/o\/1599731565366?alt=media&token=28aaaa30-ea03-44c6-a7cf-b96e9b7d551c"
            //     },
            //     "is_verified": 1,
            //     "is_online": 1,
            //     "assigned": 0,
            //     "longitude": 78.5185876,
            //     "latitude": 29.2988124,
            //     "user": {
            //       "id": 18,
            //       "name": "Prachi",
            //       "email": "prachi27@gmail.com",
            //       "mobile_number": "+917617668705",
            //       "mobile_verified": 1,
            //       "active": 1,
            //       "language": "en",
            //       "notification": {
            //         "delivery": "19c028f0-8c98-4d6e-80fa-6795460b5005"
            //       },
            //       "meta": null,
            //       "mediaurls": {
            //         "images": [
            //           {
            //             "default": "http:\/\/opuslabs.in:9502\/storage\/121\/1599731584768.jpeg"
            //           }
            //         ]
            //       },
            //       "balance": -198,
            //       "wallet": {
            //         "id": 13,
            //         "user_id": 18,
            //         "balance": -198,
            //         "created_at": "2020-08-24 09:52:57",
            //         "updated_at": "2020-09-10 13:06:29"
            //       }
            //     }
            //   }
            // }));
            // if (this.order.delivery) {
            //   if (this.order.delivery.delivery && this.order.delivery.delivery.user) {
            //     if (!this.order.delivery.delivery.user.image_url) this.order.delivery.delivery.user.image_url = "assets/images/empty_image.png";
            //   }
            // };
            // this.order.address = JSON.parse(JSON.stringify({
            //   "id": 112,
            //   "formatted_address": "Sherkot, Uttar Pradesh 246747, India",
            //   "longitude": 78.574602,
            //   "latitude": 29.3227736,
            //   "order_id": 112
            // }));
            var navigationExtras = {
              state: {
                delivery: this.order.delivery,
                address: this.order.address,
                vendor: {
                  name: this.order.vendor.name,
                  image: this.order.vendor.image,
                  location: {
                    latitude: this.order.vendor.latitude,
                    longitude: this.order.vendor.longitude
                  }
                }
              }
            };
            this.navCtrl.navigateForward(['./order-tracking'], navigationExtras);
          } else {
            this.translate.get("track_unavailable").subscribe(function (value) {
              return _this.uiElementService.presentToast(value);
            });
          }
        }
      }, {
        key: "canTrack",
        value: function canTrack() {
          return (this.order.status == "dispatched" || this.order.status == "intransit") && this.order.delivery != null;
        }
      }, {
        key: "viewPresciption",
        value: function viewPresciption() {
          this.photoViewer.show(this.prescriptionLink);
        }
      }]);

      return OrdersInfoPage;
    }();

    OrdersInfoPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"]
      }, {
        type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__["PhotoViewer"]
      }];
    };

    OrdersInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./orders-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/orders-info/orders-info.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./orders-info.page.scss */
      "./src/app/orders-info/orders-info.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__["PhotoViewer"]])], OrdersInfoPage);
    /***/
  }
}]);
//# sourceMappingURL=orders-info-orders-info-module-es5.js.map