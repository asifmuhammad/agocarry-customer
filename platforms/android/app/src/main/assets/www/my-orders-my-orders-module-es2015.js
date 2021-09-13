(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-orders-my-orders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/my-orders/my-orders.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/my-orders/my-orders.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t{{'my_orders' | translate}}\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\">\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t\t<ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"{{'pull_refresh' | translate}}\"\n\t\t\trefreshingSpinner=\"circles\" refreshingText=\"{{'refreshing' | translate}}\">\n\t\t</ion-refresher-content>\n\t</ion-refresher>\n\t<div class=\"empty-view\" *ngIf=\"!isLoading && (!orders || !orders.length)\">\n\t\t<div style=\"text-align:center\">\n\t\t\t<img src=\"assets/images/plc_no_transaction.png\" alt=\"no offers\" />\n\t\t\t<span style=\"color:#9E9E9E; font-weight:bold;\">\n\t\t\t\t{{'empty_orders' | translate}}\n\t\t\t</span>\n\t\t</div>\n\t</div>\n\t<ion-list lines=\"none\">\n\t\t<ion-item *ngFor=\"let order of orders\" [ngClass]=\"expandedOrderId == order.id ? 'active' : '' \">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<div class=\"item_info\">\n\t\t\t\t\t<div class=\"item_header d-flex\" (click)=\"toggleOrderExpansion(order)\">\n\t\t\t\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t\t\t\t<img [src]=\"order.vendor.image\" class=\"crop_img\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text_box\">\n\t\t\t\t\t\t\t<h2>{{order.vendor.name}}</h2>\n\t\t\t\t\t\t\t<h3>{{order.vendor.tagline}}</h3>\n\t\t\t\t\t\t\t<h4 class=\"d-flex\">\n\t\t\t\t\t\t\t\t{{'ordered_on' | translate}} {{order.created_at}}\n\t\t\t\t\t\t\t\t<span class=\"end\">\n\t\t\t\t\t\t\t\t\t{{'order_id' | translate}}{{order.id}}\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"detail d-flex\">\n\t\t\t\t\t\t<div class=\"text_box payment\" (click)=\"toggleOrderExpansion(order)\">\n\t\t\t\t\t\t\t<h2>{{'payment' | translate}}</h2>\n\t\t\t\t\t\t\t<h3>{{order.total_toshow}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text_box payment_mode\" (click)=\"toggleOrderExpansion(order)\">\n\t\t\t\t\t\t\t<h2>{{'payment_mode' | translate}}</h2>\n\t\t\t\t\t\t\t<h3 *ngIf=\"order.payment && order.payment.payment_method\">\n\t\t\t\t\t\t\t\t{{order.payment.payment_method.title}}\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<h3 *ngIf=\"!(order.payment && order.payment.payment_method)\">\n\t\t\t\t\t\t\t\tCOD\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text_box order_status end\">\n\t\t\t\t\t\t\t<h2>{{'order_status' | translate}}</h2>\n\t\t\t\t\t\t\t<h3>{{('order_status_'+order.status) | translate}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<ion-card>\n\t\t\t\t\t<div class=\"card_header\">\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col [ngClass]=\"order.orderProgress >= 1 ? 'active' : ''\">\n\t\t\t\t\t\t\t\t<div class=\"icon_box\">\n\t\t\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-check-all ion-text-center\"></ion-icon>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p class=\"ion-text-center\">{{'placed' | translate}}</p>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col [ngClass]=\"order.orderProgress >= 2 ? 'active' : ''\">\n\t\t\t\t\t\t\t\t<div class=\"icon_box\">\n\t\t\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-assignment-returned ion-text-center\"></ion-icon>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p class=\"ion-text-center\">{{'packing' | translate}}</p>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col [ngClass]=\"order.orderProgress >= 3 ? 'active' : ''\">\n\t\t\t\t\t\t\t\t<div class=\"icon_box\">\n\t\t\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-bike ion-text-center\"></ion-icon>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p class=\"ion-text-center\">\n\t\t\t\t\t\t\t\t\t{{ (order.status=='prepared'?'dispatching':'dispatched') | translate}}</p>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col [ngClass]=\"order.orderProgress >= 4 ? 'active' : ''\"\n\t\t\t\t\t\t\t\t(click)=\"navTrackOrder(order)\">\n\t\t\t\t\t\t\t\t<div class=\"icon_box\">\n\t\t\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-center\"></ion-icon>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p class=\"ion-text-center\">{{'track' | translate}}</p>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t<ion-col [ngClass]=\"order.orderProgress >= 5 ? 'active' : ''\">\n\t\t\t\t\t\t\t\t<div class=\"icon_box\">\n\t\t\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-home ion-text-center\"></ion-icon>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p class=\"ion-text-center\">{{'delivered' | translate}}</p>\n\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"ordered_items\">\n\t\t\t\t\t\t<h2>{{'ordered_items' | translate}}</h2>\n\t\t\t\t\t\t<div *ngFor=\"let product of order.products\">\n\t\t\t\t\t\t\t<h3 class=\"d-flex\">\n\t\t\t\t\t\t\t\t{{product.vendor_product.product.title}}\n\t\t\t\t\t\t\t\t<span class=\"d-flex end\">\n\t\t\t\t\t\t\t\t\t<!-- <small class=\"review\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"navReviewProduct(order, product.vendor_product.product)\">\n\t\t\t\t\t\t\t\t\t\t{{'review_this' | translate}}\n\t\t\t\t\t\t\t\t\t</small> -->\n\t\t\t\t\t\t\t\t\t<small\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"order.status == 'complete' &&  !product.vendor_product.product.reviewed\"\n\t\t\t\t\t\t\t\t\t\tclass=\"review\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"navReviewProduct(order, product.vendor_product.product)\">\n\t\t\t\t\t\t\t\t\t\t{{'review_this' | translate}}\n\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t<small class=\"end\"> {{product.vendor_product.product.priceToShow}}</small>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<h2>{{'qnt' | translate}}. {{product.quantity}}</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"payment_details\">\n\t\t\t\t\t\t<h3 class=\"d-flex\">\n\t\t\t\t\t\t\t{{'sub_total' | translate}}\n\t\t\t\t\t\t\t<span class=\"end\">{{order.subtotal_toshow}}</span>\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t<h3 *ngIf=\"order.taxes_toshow\" class=\"d-flex\">\n\t\t\t\t\t\t\t{{'tax_in_percent' | translate}}\n\t\t\t\t\t\t\t<span class=\"end\">{{order.taxes_toshow}}</span>\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t<h3 *ngIf=\"order.delivery_fee_toshow\" class=\"d-flex\">\n\t\t\t\t\t\t\t{{'delivery_fee' | translate}}\n\t\t\t\t\t\t\t<span class=\"end\">{{order.delivery_fee_toshow}}</span>\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t<h3 *ngIf=\"order.discount_toshow\" class=\"d-flex\">\n\t\t\t\t\t\t\t{{'discount' | translate}}\n\t\t\t\t\t\t\t<span class=\"end\">- {{order.discount_toshow}}</span>\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t<h2 class=\"d-flex\">\n\t\t\t\t\t\t\t{{'total' | translate}}\n\t\t\t\t\t\t\t<span class=\"end\">{{order.total_toshow}}</span>\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n\t<ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n\t\t<ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{'loading' | translate}}\">\n\t\t</ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "./src/app/services/shoup-hour-services/common/ui-elements.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/services/shoup-hour-services/common/ui-elements.service.ts ***!
  \****************************************************************************/
/*! exports provided: UiElementsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiElementsService", function() { return UiElementsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




let UiElementsService = class UiElementsService {
    constructor(toastController, loadingController, alertCtrl, translateService) {
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
    }
    presentToast(body, position, duration) {
        this.toastController.create({
            message: body,
            duration: (duration && duration > 0) ? duration : 1000,
            position: (position && (position == "top" || position == "middle")) ? position : "bottom"
        }).then(toast => toast.present());
    }
    presentErrorAlert(msg, headingText, actionText) {
        this.translateService.get(["error", "dismiss"]).subscribe(values => {
            this.alertCtrl.create({
                header: (headingText ? headingText : values["error"]),
                message: msg,
                buttons: [(actionText ? actionText : values["dismiss"])]
            }).then(alert => alert.present());
        });
    }
    presentLoading(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({ message: body }).then(overlay => {
                overlay.present().then(() => {
                    if (!this.isLoading) {
                        try {
                            overlay.dismiss().then(() => console.log('loading aborted'));
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }
                });
            });
        });
    }
    dismissLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            try {
                return yield this.loadingController.dismiss();
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
};
UiElementsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
UiElementsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
], UiElementsService);



/***/ }),

/***/ "./src/app/shop-hour/my-orders/my-orders-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shop-hour/my-orders/my-orders-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MyOrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersPageRoutingModule", function() { return MyOrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-orders.page */ "./src/app/shop-hour/my-orders/my-orders.page.ts");




const routes = [
    {
        path: '',
        component: _my_orders_page__WEBPACK_IMPORTED_MODULE_3__["MyOrdersPage"]
    }
];
let MyOrdersPageRoutingModule = class MyOrdersPageRoutingModule {
};
MyOrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyOrdersPageRoutingModule);



/***/ }),

/***/ "./src/app/shop-hour/my-orders/my-orders.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/shop-hour/my-orders/my-orders.module.ts ***!
  \*********************************************************/
/*! exports provided: MyOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersPageModule", function() { return MyOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-orders-routing.module */ "./src/app/shop-hour/my-orders/my-orders-routing.module.ts");
/* harmony import */ var _my_orders_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-orders.page */ "./src/app/shop-hour/my-orders/my-orders.page.ts");








let MyOrdersPageModule = class MyOrdersPageModule {
};
MyOrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyOrdersPageRoutingModule"]
        ],
        declarations: [_my_orders_page__WEBPACK_IMPORTED_MODULE_7__["MyOrdersPage"]]
    })
], MyOrdersPageModule);



/***/ }),

/***/ "./src/app/shop-hour/my-orders/my-orders.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/shop-hour/my-orders/my-orders.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  background: var(--transparent) !important;\n  padding: 0;\n  padding-top: 13px;\n  margin: 0;\n}\nion-list ion-item {\n  padding: 0;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  background: var(--white);\n  width: calc(100% - 25px);\n  margin: 0 auto;\n  border-radius: 10px;\n  margin-bottom: 13px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item .item_inner .item_info {\n  background: #f9f9f9;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 0 0 10px 10px;\n}\nion-list ion-item .item_inner .item_info .item_header {\n  padding: 10px;\n  background: var(--white);\n}\nion-list ion-item .item_inner .item_info .item_header .img_box {\n  min-width: 63px;\n  height: 63px;\n  border-radius: 10px;\n  margin-right: 10px;\n}\nion-list ion-item .item_inner .item_info .item_header .text_box {\n  width: 100%;\n  overflow: hidden;\n}\nion-list ion-item .item_inner .item_info .item_header .text_box h2 {\n  margin: auto;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  padding-bottom: 2px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\nion-list ion-item .item_inner .item_info .item_header .text_box h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 400;\n  font-size: 0.65rem;\n  letter-spacing: 0.5px;\n  padding-bottom: 13px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\nion-list ion-item .item_inner .item_info .item_header .text_box h4 {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 400;\n  font-size: 0.65rem;\n  letter-spacing: 0.5px;\n}\nion-list ion-item .item_inner .item_info .item_header .text_box h4 span {\n  min-width: 95px;\n}\nion-list ion-item .item_inner .item_info .detail {\n  padding: 13px 10px 15px 10px;\n  align-items: flex-start;\n  margin: 0 -5px;\n}\nion-list ion-item .item_inner .item_info .detail .text_box {\n  padding: 0 4px;\n}\nion-list ion-item .item_inner .item_info .detail .text_box h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 400;\n  font-size: 0.7rem;\n  letter-spacing: 0.5px;\n  padding-bottom: 7px;\n}\nion-list ion-item .item_inner .item_info .detail .text_box h3 {\n  margin: auto;\n  font-size: 0.9rem;\n  letter-spacing: 0.5px;\n  padding-bottom: 2px;\n}\nion-list ion-item .item_inner .item_info .detail .text_box.payment {\n  min-width: 63px;\n  margin-right: 10px;\n}\nion-list ion-item .item_inner .item_info .detail .text_box.order_status {\n  min-width: 95px;\n}\nion-list ion-item .item_inner .item_info .detail .text_box.order_status h3 {\n  color: var(--primary);\n  font-weight: 500;\n  letter-spacing: 0;\n}\nion-list ion-item .item_inner ion-card {\n  border-radius: 0;\n  background: none;\n  width: 100%;\n  border-radius: 0;\n  margin: 0;\n  box-shadow: none;\n  display: none;\n}\nion-list ion-item .item_inner ion-card .card_header {\n  padding: 10px 0;\n}\nion-list ion-item .item_inner ion-card .card_header ion-row {\n  margin: 0 -5px;\n}\nion-list ion-item .item_inner ion-card .card_header ion-row ion-col {\n  min-width: 20%;\n}\nion-list ion-item .item_inner ion-card .card_header ion-row ion-col .icon_box {\n  display: block;\n  width: 35px;\n  min-width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  background: #dadada;\n  margin: 0 auto;\n  margin-bottom: 8px;\n  position: relative;\n  z-index: 999;\n}\nion-list ion-item .item_inner ion-card .card_header ion-row ion-col .icon_box ion-icon {\n  color: var(--white);\n  width: 100%;\n  display: block;\n  line-height: 35px;\n  height: 35px;\n  font-size: 1.2rem;\n}\nion-list ion-item .item_inner ion-card .card_header ion-row ion-col p {\n  margin: 0;\n  color: var(--text-black);\n  font-weight: 500;\n  font-size: 0.65rem;\n}\nion-list ion-item .item_inner ion-card .card_header ion-row ion-col::after, ion-list ion-item .item_inner ion-card .card_header ion-row ion-col::before {\n  content: \"\";\n  position: absolute;\n  top: 23px;\n  left: 0;\n  width: 50%;\n  height: 1px;\n  border-top: 1px dashed #dadada;\n}\nion-list ion-item .item_inner ion-card .card_header ion-row ion-col::after {\n  left: unset;\n  right: 0;\n}\nion-list ion-item .item_inner ion-card .card_header ion-row ion-col:first-child::before {\n  display: none;\n}\nion-list ion-item .item_inner ion-card .card_header ion-row ion-col:last-child::after {\n  display: none;\n}\nion-list ion-item .item_inner ion-card .card_header ion-row ion-col.active .icon_box {\n  background: var(--primary);\n}\nion-list ion-item .item_inner ion-card .card_header ion-row ion-col.active::before, ion-list ion-item .item_inner ion-card .card_header ion-row ion-col.active::after {\n  border-color: var(--primary);\n}\nion-list ion-item .item_inner ion-card .ordered_items {\n  background: #f9f9f9;\n  padding: 10px;\n}\nion-list ion-item .item_inner ion-card .ordered_items h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 400;\n  font-size: 0.7rem;\n  letter-spacing: 0.5px;\n  padding-bottom: 9px;\n}\nion-list ion-item .item_inner ion-card .ordered_items h2:last-child {\n  padding-bottom: 0;\n}\nion-list ion-item .item_inner ion-card .ordered_items h3 {\n  margin: auto;\n  font-size: 0.9rem;\n  padding-bottom: 9px;\n  font-weight: 500;\n  color: var(--text-dark-secondary);\n}\nion-list ion-item .item_inner ion-card .ordered_items h3 span {\n  min-width: 50%;\n  max-width: 50%;\n}\nion-list ion-item .item_inner ion-card .ordered_items h3 span small {\n  font-size: 0.9rem;\n}\nion-list ion-item .item_inner ion-card .ordered_items h3 span small.review {\n  color: var(--primary);\n}\nion-list ion-item .item_inner ion-card .payment_details {\n  padding: 10px;\n}\nion-list ion-item .item_inner ion-card .payment_details h3 {\n  margin: auto;\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--text-dark-secondary);\n  padding: 6px 0;\n}\nion-list ion-item .item_inner ion-card .payment_details h3 span {\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\nion-list ion-item .item_inner ion-card .payment_details h2 {\n  margin: auto;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-dark-secondary);\n  padding-top: 6px;\n}\nion-list ion-item .item_inner ion-card .payment_details h2 span {\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\nion-list ion-item.active .item_inner ion-card {\n  display: block;\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 30%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC1ob3VyL215LW9yZGVycy9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1jdXN0b21lci9zcmNcXGFwcFxcc2hvcC1ob3VyXFxteS1vcmRlcnNcXG15LW9yZGVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3AtaG91ci9teS1vcmRlcnMvbXktb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ0NEO0FEQ0M7RUFDQyxVQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDQyxXQUFBO0FDQ0g7QURDRztFQUNDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNDSjtBRENJO0VBQ0MsYUFBQTtFQUNBLHdCQUFBO0FDQ0w7QURDSztFQUNDLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NOO0FERUs7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBREVNO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQVA7QURHTTtFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRFA7QURJTTtFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0ZQO0FESU87RUFDQyxlQUFBO0FDRlI7QURRSTtFQUNDLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDTkw7QURRSztFQUNDLGNBQUE7QUNOTjtBRFFNO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNOUDtBRFNNO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ1BQO0FEVU07RUFDQyxlQUFBO0VBQ0Esa0JBQUE7QUNSUDtBRFdNO0VBQ0MsZUFBQTtBQ1RQO0FEV087RUFDQyxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNUUjtBRGdCRztFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDZEo7QURnQkk7RUFDQyxlQUFBO0FDZEw7QURnQks7RUFDQyxjQUFBO0FDZE47QURnQk07RUFDQyxjQUFBO0FDZFA7QURnQk87RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ2RSO0FEZ0JRO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDZFQ7QURrQk87RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDaEJSO0FEbUJPO0VBRUMsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FDbEJSO0FEcUJPO0VBQ0MsV0FBQTtFQUNBLFFBQUE7QUNuQlI7QUR1QlE7RUFDQyxhQUFBO0FDckJUO0FEMEJRO0VBQ0MsYUFBQTtBQ3hCVDtBRDZCUTtFQUNDLDBCQUFBO0FDM0JUO0FEa0NRO0VBRUMsNEJBQUE7QUNqQ1Q7QUR3Q0k7RUFDQyxtQkFBQTtFQUNBLGFBQUE7QUN0Q0w7QUR3Q0s7RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ3RDTjtBRHdDTTtFQUNDLGlCQUFBO0FDdENQO0FEMENLO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FDeENOO0FEMENNO0VBQ0MsY0FBQTtFQUNBLGNBQUE7QUN4Q1A7QUR5Q087RUFDQyxpQkFBQTtBQ3ZDUjtBRHdDUTtFQUNDLHFCQUFBO0FDdENUO0FENkNJO0VBQ0MsYUFBQTtBQzNDTDtBRDZDSztFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FDM0NOO0FENkNNO0VBQ0MsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FDM0NQO0FEK0NLO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUM3Q047QUQrQ007RUFDQyw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUM3Q1A7QURxREc7RUFDQyxjQUFBO0FDbkRKO0FEeURBO0VBQ0MsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDdEREO0FEd0RDO0VBQ0MsWUFBQTtFQUNBLFlBQUE7QUN0REY7QUR5REM7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7QUN2REY7QUQwREM7RUFDQyxnQkFBQTtBQ3hERjtBRDBERTtFQUNDLHlCQUFBO0FDeERIIiwiZmlsZSI6InNyYy9hcHAvc2hvcC1ob3VyL215LW9yZGVycy9teS1vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcblx0cGFkZGluZzogMDtcblx0cGFkZGluZy10b3A6IDEzcHg7XG5cdG1hcmdpbjogMDtcblxuXHRpb24taXRlbSB7XG5cdFx0cGFkZGluZzogMDtcblx0XHRtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuXHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblx0XHQtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xuXHRcdC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDEzcHg7XG5cblx0XHQuaXRlbV9pbm5lciB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0Lml0ZW1faW5mbyB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmOWY5Zjk7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuXG5cdFx0XHRcdC5pdGVtX2hlYWRlciB7XG5cdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG5cblx0XHRcdFx0XHQuaW1nX2JveCB7XG5cdFx0XHRcdFx0XHRtaW4td2lkdGg6IDYzcHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDYzcHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC50ZXh0X2JveCB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cblx0XHRcdFx0XHRcdGgyIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDJweDtcblx0XHRcdFx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC42NXJlbTtcblx0XHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTNweDtcblx0XHRcdFx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGg0IHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC42NXJlbTtcblx0XHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXG5cdFx0XHRcdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogOTVweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5kZXRhaWwge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEzcHggMTBweCAxNXB4IDEwcHg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIC01cHg7XG5cblx0XHRcdFx0XHQudGV4dF9ib3gge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCA0cHg7XG5cblx0XHRcdFx0XHRcdGgyIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC43cmVtO1xuXHRcdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiA3cHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiBhdXRvO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOXJlbTtcblx0XHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMnB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLnBheW1lbnQge1xuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDYzcHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ji5vcmRlcl9zdGF0dXMge1xuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDk1cHg7XG5cblx0XHRcdFx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlvbi1jYXJkIHtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMDtcblx0XHRcdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDA7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0Ym94LXNoYWRvdzogbm9uZTtcblx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblxuXHRcdFx0XHQuY2FyZF9oZWFkZXIge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEwcHggMDtcblxuXHRcdFx0XHRcdGlvbi1yb3cge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIC01cHg7XG5cblx0XHRcdFx0XHRcdGlvbi1jb2wge1xuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDIwJTtcblxuXHRcdFx0XHRcdFx0XHQuaWNvbl9ib3gge1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAzNXB4O1xuXHRcdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogMzVweDtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDM1cHg7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNkYWRhZGE7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0XHR6LWluZGV4OiA5OTk7XG5cblx0XHRcdFx0XHRcdFx0XHRpb24taWNvbiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAzNXB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzNXB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJyZW07XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC42NXJlbTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdCY6OmFmdGVyLFxuXHRcdFx0XHRcdFx0XHQmOjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogMjNweDtcblx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxcHg7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXRvcDogMXB4IGRhc2hlZCAjZGFkYWRhO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Jjo6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHRcdGxlZnQ6IHVuc2V0O1xuXHRcdFx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0JjpmaXJzdC1jaGlsZCB7XG5cdFx0XHRcdFx0XHRcdFx0Jjo6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdFx0XHQmOjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdCYuYWN0aXZlIHtcblx0XHRcdFx0XHRcdFx0XHQuaWNvbl9ib3gge1xuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdFx0XHRcdFx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdCY6OmJlZm9yZSxcblx0XHRcdFx0XHRcdFx0XHQmOjphZnRlciB7XG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5vcmRlcmVkX2l0ZW1zIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cblx0XHRcdFx0XHRoMiB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjdyZW07XG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogOXB4O1xuXG5cdFx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOXJlbTtcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiA5cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtZGFyay1zZWNvbmRhcnkpO1xuXG5cdFx0XHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRcdFx0bWluLXdpZHRoOiA1MCU7XG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogNTAlO1xuXHRcdFx0XHRcdFx0XHRzbWFsbCB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjlyZW07XG5cdFx0XHRcdFx0XHRcdFx0Ji5yZXZpZXcge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wYXltZW50X2RldGFpbHMge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cblx0XHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOTVyZW07XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtZGFyay1zZWNvbmRhcnkpO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogNnB4IDA7XG5cblx0XHRcdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGgyIHtcblx0XHRcdFx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrLXNlY29uZGFyeSk7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogNnB4O1xuXG5cdFx0XHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRcdFx0bWluLXdpZHRoOiBmaXQtY29udGVudDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmFjdGl2ZSB7XG5cdFx0XHQuaXRlbV9pbm5lciBpb24tY2FyZCB7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4uZW1wdHktdmlldyB7XG5cdHdpZHRoOiAyMDBweDtcblx0bWFyZ2luOiBhdXRvO1xuXHRoZWlnaHQ6IDIwMHB4O1xuXHR0b3A6IDMwJTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAxMCU7XG5cblx0aW1nIHtcblx0XHR3aWR0aDogMTAwcHg7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHR9XG5cblx0c3BhbiB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0YnV0dG9uIHtcblx0XHRtYXJnaW4tdG9wOiA1MHB4O1xuXG5cdFx0c3BhbiB7XG5cdFx0XHRkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xuXHRcdH1cblx0fVxufVxuIiwiaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDEzcHg7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2luZm8ge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2luZm8gLml0ZW1faGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1faW5mbyAuaXRlbV9oZWFkZXIgLmltZ19ib3gge1xuICBtaW4td2lkdGg6IDYzcHg7XG4gIGhlaWdodDogNjNweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1faW5mbyAuaXRlbV9oZWFkZXIgLnRleHRfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9pbmZvIC5pdGVtX2hlYWRlciAudGV4dF9ib3ggaDIge1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2luZm8gLml0ZW1faGVhZGVyIC50ZXh0X2JveCBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuNjVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1faW5mbyAuaXRlbV9oZWFkZXIgLnRleHRfYm94IGg0IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1faW5mbyAuaXRlbV9oZWFkZXIgLnRleHRfYm94IGg0IHNwYW4ge1xuICBtaW4td2lkdGg6IDk1cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9pbmZvIC5kZXRhaWwge1xuICBwYWRkaW5nOiAxM3B4IDEwcHggMTVweCAxMHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAwIC01cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9pbmZvIC5kZXRhaWwgLnRleHRfYm94IHtcbiAgcGFkZGluZzogMCA0cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9pbmZvIC5kZXRhaWwgLnRleHRfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9pbmZvIC5kZXRhaWwgLnRleHRfYm94IGgzIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1faW5mbyAuZGV0YWlsIC50ZXh0X2JveC5wYXltZW50IHtcbiAgbWluLXdpZHRoOiA2M3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9pbmZvIC5kZXRhaWwgLnRleHRfYm94Lm9yZGVyX3N0YXR1cyB7XG4gIG1pbi13aWR0aDogOTVweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2luZm8gLmRldGFpbCAudGV4dF9ib3gub3JkZXJfc3RhdHVzIGgzIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGlvbi1jYXJkIC5jYXJkX2hlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGlvbi1jYXJkIC5jYXJkX2hlYWRlciBpb24tcm93IHtcbiAgbWFyZ2luOiAwIC01cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24tY2FyZCAuY2FyZF9oZWFkZXIgaW9uLXJvdyBpb24tY29sIHtcbiAgbWluLXdpZHRoOiAyMCU7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24tY2FyZCAuY2FyZF9oZWFkZXIgaW9uLXJvdyBpb24tY29sIC5pY29uX2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzVweDtcbiAgbWluLXdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2RhZGFkYTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTk7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24tY2FyZCAuY2FyZF9oZWFkZXIgaW9uLXJvdyBpb24tY29sIC5pY29uX2JveCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24tY2FyZCAuY2FyZF9oZWFkZXIgaW9uLXJvdyBpb24tY29sIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaW9uLWNhcmQgLmNhcmRfaGVhZGVyIGlvbi1yb3cgaW9uLWNvbDo6YWZ0ZXIsIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGlvbi1jYXJkIC5jYXJkX2hlYWRlciBpb24tcm93IGlvbi1jb2w6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyM3B4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjZGFkYWRhO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaW9uLWNhcmQgLmNhcmRfaGVhZGVyIGlvbi1yb3cgaW9uLWNvbDo6YWZ0ZXIge1xuICBsZWZ0OiB1bnNldDtcbiAgcmlnaHQ6IDA7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24tY2FyZCAuY2FyZF9oZWFkZXIgaW9uLXJvdyBpb24tY29sOmZpcnN0LWNoaWxkOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaW9uLWNhcmQgLmNhcmRfaGVhZGVyIGlvbi1yb3cgaW9uLWNvbDpsYXN0LWNoaWxkOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24tY2FyZCAuY2FyZF9oZWFkZXIgaW9uLXJvdyBpb24tY29sLmFjdGl2ZSAuaWNvbl9ib3gge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGlvbi1jYXJkIC5jYXJkX2hlYWRlciBpb24tcm93IGlvbi1jb2wuYWN0aXZlOjpiZWZvcmUsIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGlvbi1jYXJkIC5jYXJkX2hlYWRlciBpb24tcm93IGlvbi1jb2wuYWN0aXZlOjphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24tY2FyZCAub3JkZXJlZF9pdGVtcyB7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24tY2FyZCAub3JkZXJlZF9pdGVtcyBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaW9uLWNhcmQgLm9yZGVyZWRfaXRlbXMgaDI6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaW9uLWNhcmQgLm9yZGVyZWRfaXRlbXMgaDMge1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLXNlY29uZGFyeSk7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24tY2FyZCAub3JkZXJlZF9pdGVtcyBoMyBzcGFuIHtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNTAlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaW9uLWNhcmQgLm9yZGVyZWRfaXRlbXMgaDMgc3BhbiBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaW9uLWNhcmQgLm9yZGVyZWRfaXRlbXMgaDMgc3BhbiBzbWFsbC5yZXZpZXcge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24tY2FyZCAucGF5bWVudF9kZXRhaWxzIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGlvbi1jYXJkIC5wYXltZW50X2RldGFpbHMgaDMge1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyay1zZWNvbmRhcnkpO1xuICBwYWRkaW5nOiA2cHggMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGlvbi1jYXJkIC5wYXltZW50X2RldGFpbHMgaDMgc3BhbiB7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24tY2FyZCAucGF5bWVudF9kZXRhaWxzIGgyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstc2Vjb25kYXJ5KTtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGlvbi1jYXJkIC5wYXltZW50X2RldGFpbHMgaDIgc3BhbiB7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG59XG5pb24tbGlzdCBpb24taXRlbS5hY3RpdmUgLml0ZW1faW5uZXIgaW9uLWNhcmQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmVtcHR5LXZpZXcge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdG9wOiAzMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMTAlO1xufVxuLmVtcHR5LXZpZXcgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uZW1wdHktdmlldyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5lbXB0eS12aWV3IGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uZW1wdHktdmlldyBidXR0b24gc3BhbiB7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/shop-hour/my-orders/my-orders.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/shop-hour/my-orders/my-orders.page.ts ***!
  \*******************************************************/
/*! exports provided: MyOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersPage", function() { return MyOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shoup-hour-services/common/ui-elements.service */ "./src/app/services/shoup-hour-services/common/ui-elements.service.ts");
/* harmony import */ var src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/shoup-hour-services/network/api.service */ "./src/app/services/shoup-hour-services/network/api.service.ts");








let MyOrdersPage = class MyOrdersPage {
    constructor(navCtrl, translate, uiElementService, apiService) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.orders = new Array();
        this.isLoading = true;
        this.expandedOrderId = -1;
        this.pageNo = 1;
        this.doneAll = false;
        this.translate.get("loading").subscribe(value => {
            this.uiElementService.presentLoading(value);
            this.getOrders();
        });
    }
    ngOnInit() {
        let userMe = src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__["Helper"].getLoggedInUser();
        this.myOrdersRef = firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"]().ref("users").child(userMe.id).child("orders");
    }
    ngOnDestroy() {
        this.unRegisterUpdates();
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    doRefresh(refresher) {
        this.unRegisterUpdates();
        if (this.isLoading)
            refresher.target.complete();
        this.refresher = refresher;
        this.pageNo = 1;
        this.expandedOrderId = -1;
        this.isLoading = true;
        this.orders = [];
        this.getOrders();
    }
    getOrders() {
        this.apiService.getOrders(this.pageNo).subscribe(res => {
            if ((!this.orders || !this.orders.length) && res.data && res.data.length)
                this.registerUpdates();
            this.isLoading = false;
            for (let o of res.data)
                this.setupOrderProgress(o);
            this.orders = this.orders.concat(res.data);
            this.doneAll = (!res.data || !res.data.length);
            if (this.infiniteScrollEvent)
                this.infiniteScrollEvent.target.complete();
            if (this.refresher)
                this.refresher.target.complete();
            this.uiElementService.dismissLoading();
        }, err => {
            console.log("getOrders", err);
            this.isLoading = false;
            if (this.infiniteScrollEvent)
                this.infiniteScrollEvent.target.complete();
            if (this.refresher)
                this.refresher.target.complete();
            this.uiElementService.dismissLoading();
        });
    }
    doInfinite(event) {
        if (this.doneAll) {
            event.target.complete();
        }
        else {
            this.infiniteScrollEvent = event;
            this.pageNo = this.pageNo + 1;
            this.getOrders();
        }
    }
    setupOrderProgress(order) {
        switch (order.status) {
            case "cancelled":
            case "refund":
            case "hold":
            case "rejected":
            case "failed":
                order.orderProgress = 0;
                break;
            case "new":
            case "pending":
                order.orderProgress = 1;
                break;
            case "accepted":
            case "preparing":
            case "prepared":
                order.orderProgress = 2;
                break;
            case "dispatched":
                order.orderProgress = 3;
                break;
            case "intransit":
                order.orderProgress = 4;
                break;
            case "complete":
                order.orderProgress = 5;
                break;
        }
    }
    updateStatusOnId(oId, oNew) {
        let index = -1;
        for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].id == oId) {
                index = i;
                break;
            }
        }
        if (index != -1) {
            this.orders[index].status = oNew.status;
            if (oNew.delivery != null) {
                oNew.delivery.delivery.user.image_url = "assets/images/empty_dp";
                if (!oNew.delivery.delivery.user.mediaurls || !oNew.delivery.delivery.user.mediaurls.images)
                    oNew.delivery.delivery.user.mediaurls = { images: [] };
                for (let imgObj of oNew.delivery.delivery.user.mediaurls.images)
                    if (imgObj["default"]) {
                        oNew.delivery.delivery.user.image_url = imgObj["default"];
                        break;
                    }
                this.orders[index].delivery = oNew.delivery;
            }
            this.orders.unshift(this.orders.splice(index, 1)[0]);
            this.setupOrderProgress(this.orders[0]);
            this.expandedOrderId = this.orders[0].id;
        }
    }
    toggleOrderExpansion(order) {
        this.expandedOrderId = Number((this.expandedOrderId == order.id) ? -1 : order.id);
    }
    navTrackOrder(order) {
        if (this.canTrack(order)) {
            let navigationExtras = { state: { delivery: order.delivery, address: order.address, vendor: { name: order.vendor.name, image: order.vendor.image, location: { latitude: order.vendor.latitude, longitude: order.vendor.longitude } } } };
            this.navCtrl.navigateForward(['tabs/main-home/shop-hour/order-tracking'], navigationExtras);
        }
        else {
            this.translate.get("track_unavailable").subscribe(value => this.uiElementService.presentToast(value));
        }
    }
    canTrack(order) {
        //return order.delivery != null && order.delivery.delivery != null ;
        return order.status == "intransit" && order.delivery != null && order.delivery.delivery != null;
    }
    navReviewProduct(order, product) {
        let navigationExtras = { state: { product: product, order_id: order.id } };
        this.navCtrl.navigateForward(['tabs/main-home/shop-hour/add-review'], navigationExtras);
    }
    registerUpdates() {
        const component = this;
        if (this.myOrdersRef != null) {
            this.myOrdersRef.on('child_changed', function (data) {
                var fireOrder = data.val();
                console.log(fireOrder);
                if (fireOrder.data != null)
                    component.updateStatusOnId(fireOrder.data.id, fireOrder.data);
            });
        }
    }
    unRegisterUpdates() {
        if (this.myOrdersRef != null) {
            this.myOrdersRef.off();
        }
    }
};
MyOrdersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"] },
    { type: src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiServiceShopHour"] }
];
MyOrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-orders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/my-orders/my-orders.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-orders.page.scss */ "./src/app/shop-hour/my-orders/my-orders.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"], src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiServiceShopHour"]])
], MyOrdersPage);



/***/ })

}]);
//# sourceMappingURL=my-orders-my-orders-module-es2015.js.map