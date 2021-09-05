(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-tracking-order-tracking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-tracking/order-tracking.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-tracking/order-tracking.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'order_track' | translate}} #{{delivery.order_id}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-color\" fullscreen>\r\n    <div #map id=\"map\" class=\"map\">\r\n        <!-- <ion-spinner></ion-spinner> -->\r\n    </div>\r\n    <div #pleaseConnect id=\"please-connect\">\r\n        <!-- <p>{{'loading' | translate}}</p> -->\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <div class=\"delivery_man_info d-flex\">\r\n        <div class=\"img_box center_img\">\r\n            <img [src]=\"delivery.delivery.user.image_url\" class=\"crop_img\">\r\n        </div>\r\n        <div class=\"text_box\">\r\n            <h2>{{delivery.delivery.user.name}}</h2>\r\n            <h3>{{'delivery_partner' | translate}}</h3>\r\n        </div>\r\n    </div>\r\n\r\n    <ion-row>\r\n        <ion-col size=\"6\">\r\n            <ion-button size=\"large\" shape=\"full\" fill=\"clear\" class=\"btn\" (click)=\"doCall()\">\r\n                <ion-icon class=\"zmdi zmdi-phone ion-text-start\"></ion-icon>\r\n                {{'call' | translate}}\r\n            </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n            <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"navChat()\">\r\n                <ion-icon class=\"zmdi zmdi-comment-alt-text ion-text-start\"></ion-icon>\r\n                {{'chat' | translate}}\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/order-tracking/order-tracking.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/order-tracking/order-tracking.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'order_track' | translate}} #{{delivery.order_id}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg-color\" fullscreen>\n\t<div #map id=\"map\" class=\"map\">\n\t\t<!-- <ion-spinner></ion-spinner> -->\n\t</div>\n\t<div #pleaseConnect id=\"please-connect\">\n\t\t<!-- <p>{{'loading' | translate}}</p> -->\n\t</div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n\t<div class=\"delivery_man_info d-flex\">\n\t\t<div class=\"img_box center_img\">\n\t\t\t<img [src]=\"delivery.delivery.user.image_url\" class=\"crop_img\">\n\t\t</div>\n\t\t<div class=\"text_box\">\n\t\t\t<h2>{{delivery.delivery.user.name}}</h2>\n\t\t\t<h3>{{'delivery_partner' | translate}}</h3>\n\t\t</div>\n\t</div>\n\n\t<ion-row>\n\t\t<ion-col size=\"12\">\n\t\t\t<ion-button size=\"large\" shape=\"full\" fill=\"clear\" class=\"btn\" (click)=\"doCall()\">\n\t\t\t\t<ion-icon class=\"zmdi zmdi-phone ion-text-start\"></ion-icon>\n\t\t\t\t{{'call' | translate}}\n\t\t\t</ion-button>\n\t\t</ion-col>\n\t\t<!-- <ion-col size=\"6\">\n\t\t\t<ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"doChat()\">\n\t\t\t\t<ion-icon class=\"zmdi zmdi-comment-alt-text ion-text-start\"></ion-icon>\n\t\t\t\t{{'chat' | translate}}\n\t\t\t</ion-button>\n\t\t</ion-col> -->\n\t</ion-row>\n</ion-footer>");

/***/ }),

/***/ "./src/app/order-tracking/order-tracking-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/order-tracking/order-tracking-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OrderTrackingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTrackingPageRoutingModule", function() { return OrderTrackingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_tracking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-tracking.page */ "./src/app/order-tracking/order-tracking.page.ts");




const routes = [
    {
        path: '',
        component: _order_tracking_page__WEBPACK_IMPORTED_MODULE_3__["OrderTrackingPage"]
    }
];
let OrderTrackingPageRoutingModule = class OrderTrackingPageRoutingModule {
};
OrderTrackingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderTrackingPageRoutingModule);



/***/ }),

/***/ "./src/app/order-tracking/order-tracking.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/order-tracking/order-tracking.module.ts ***!
  \*********************************************************/
/*! exports provided: OrderTrackingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTrackingPageModule", function() { return OrderTrackingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _order_tracking_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-tracking-routing.module */ "./src/app/order-tracking/order-tracking-routing.module.ts");
/* harmony import */ var _order_tracking_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-tracking.page */ "./src/app/order-tracking/order-tracking.page.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/network/google-maps.service */ "./src/app/services/network/google-maps.service.ts");










let OrderTrackingPageModule = class OrderTrackingPageModule {
};
OrderTrackingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _order_tracking_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrderTrackingPageRoutingModule"]
        ],
        providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"], _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsService"]],
        declarations: [_order_tracking_page__WEBPACK_IMPORTED_MODULE_7__["OrderTrackingPage"]]
    })
], OrderTrackingPageModule);



/***/ }),

/***/ "./src/app/order-tracking/order-tracking.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/order-tracking/order-tracking.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.location_icon {\n  position: absolute;\n  z-index: 99;\n  position: absolute;\n  z-index: 99;\n  background: var(--secondary);\n  color: var(--white);\n  width: 43px;\n  height: 43px;\n  border-radius: 50%;\n  text-align: center;\n}\n\n.location_icon ion-icon {\n  width: 43px;\n  height: 43px;\n  line-height: 43px;\n  font-size: 1.43rem;\n}\n\n.delivery_man_location {\n  position: absolute;\n  z-index: 99;\n}\n\n.delivery_man_location img {\n  width: 20px;\n}\n\nion-footer {\n  background: var(--bg-color);\n}\n\nion-footer .delivery_man_info {\n  background: var(--white);\n  padding: 12px 14px;\n}\n\nion-footer .delivery_man_info .img_box {\n  min-width: 40px;\n  height: 40px;\n  border-radius: 5px;\n  margin-right: 16px;\n}\n\nion-footer .delivery_man_info .text_box {\n  width: 100%;\n}\n\nion-footer .delivery_man_info .text_box h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding: 0;\n  padding-bottom: 4px;\n  color: var(--text-dark);\n}\n\nion-footer .delivery_man_info .text_box h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.8rem;\n  overflow: hidden;\n}\n\nion-footer ion-row ion-col {\n  padding: 0;\n}\n\nion-footer ion-row ion-col .button.btn ion-icon {\n  position: relative;\n  left: -18px;\n  font-size: 1.3rem;\n}\n\nion-footer ion-row ion-col .button.btn.button-clear {\n  --background: none;\n  color: var(--primary);\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItdHJhY2tpbmcvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktY3VzdG9tZXIvc3JjXFxhcHBcXG9yZGVyLXRyYWNraW5nXFxvcmRlci10cmFja2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL29yZGVyLXRyYWNraW5nL29yZGVyLXRyYWNraW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURFSTtFQUNJLFdBQUE7QUNBUjs7QURJQTtFQUNJLDJCQUFBO0FDREo7O0FER0k7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0FDRFI7O0FER1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNEWjs7QURJUTtFQUNJLFdBQUE7QUNGWjs7QURJWTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNGaEI7O0FES1k7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSGhCOztBRFNRO0VBQ0ksVUFBQTtBQ1BaOztBRFVnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDUnBCOztBRFdnQjtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ1RwQiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLXRyYWNraW5nL29yZGVyLXRyYWNraW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubG9jYXRpb25faWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB3aWR0aDogNDNweDtcclxuICAgIGhlaWdodDogNDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40M3JlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmRlbGl2ZXJ5X21hbl9sb2NhdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcclxuXHJcbiAgICAuZGVsaXZlcnlfbWFuX2luZm8ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XHJcblxyXG4gICAgICAgIC5pbWdfYm94IHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHRfYm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tcm93IHtcclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgIC5idXR0b24uYnRuIHtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi5idXR0b24tY2xlYXIge1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5tYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvY2F0aW9uX2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICB3aWR0aDogNDNweDtcbiAgaGVpZ2h0OiA0M3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2NhdGlvbl9pY29uIGlvbi1pY29uIHtcbiAgd2lkdGg6IDQzcHg7XG4gIGhlaWdodDogNDNweDtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gIGZvbnQtc2l6ZTogMS40M3JlbTtcbn1cblxuLmRlbGl2ZXJ5X21hbl9sb2NhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG59XG4uZGVsaXZlcnlfbWFuX2xvY2F0aW9uIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xufVxuaW9uLWZvb3RlciAuZGVsaXZlcnlfbWFuX2luZm8ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbn1cbmlvbi1mb290ZXIgLmRlbGl2ZXJ5X21hbl9pbmZvIC5pbWdfYm94IHtcbiAgbWluLXdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuaW9uLWZvb3RlciAuZGVsaXZlcnlfbWFuX2luZm8gLnRleHRfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tZm9vdGVyIC5kZWxpdmVyeV9tYW5faW5mbyAudGV4dF9ib3ggaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG59XG5pb24tZm9vdGVyIC5kZWxpdmVyeV9tYW5faW5mbyAudGV4dF9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWNvbCAuYnV0dG9uLmJ0biBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTE4cHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1jb2wgLmJ1dHRvbi5idG4uYnV0dG9uLWNsZWFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/order-tracking/order-tracking.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/order-tracking/order-tracking.page.ts ***!
  \*******************************************************/
/*! exports provided: OrderTrackingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTrackingPage", function() { return OrderTrackingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/network/google-maps.service */ "./src/app/services/network/google-maps.service.ts");
/* harmony import */ var src_models_constants_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/constants.models */ "./src/models/constants.models.ts");
/* harmony import */ var src_models_chat_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/models/chat.models */ "./src/models/chat.models.ts");
/* harmony import */ var _assets_scripts_html_map_marker_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/scripts/html-map-marker.js */ "./src/assets/scripts/html-map-marker.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_11__);


//import { Chat2Page } from '../chat2/chat2.page';










let OrderTrackingPage = class OrderTrackingPage {
    constructor(router, navCtrl, modalController, maps, translate, uiElementService, callNumber) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.maps = maps;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.callNumber = callNumber;
        this.initialized = false;
        this.numDeltas = 100;
        this.delay = 10; //milliseconds
        this.i = 0;
        this.lastToPos = [0, 0];
    }
    ngOnInit() {
        console.log("getCurrentNavigation", this.router.getCurrentNavigation().extras.state);
        if (this.router.getCurrentNavigation().extras.state) {
            this.delivery = this.router.getCurrentNavigation().extras.state.delivery;
            // this.delivery.delivery.latitude = "28.6883748";
            // this.delivery.delivery.longitude = "77.2979777";
            this.address = this.router.getCurrentNavigation().extras.state.address;
            this.vendor = this.router.getCurrentNavigation().extras.state.vendor;
        }
    }
    ionViewDidEnter() {
        if (!this.initialized) {
            let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement, this.address).then(() => {
                this.initialized = true;
                this.plotMarkers();
                this.registerUpdates();
            }).catch(err => { console.log("maps.init", err); this.close(); });
            mapLoaded.catch(err => { console.log("mapLoaded", err); this.close(); });
        }
    }
    plotMarkers() {
        let posMe = new google.maps.LatLng(Number(this.address.latitude), Number(this.address.longitude));
        let markerMe = new google.maps.Marker({
            position: posMe, map: this.maps.map
            //, icon: 'assets/images/marker_map_me.png'
        });
        markerMe.addListener('click', (event) => this.uiElementService.presentToast(this.address.formatted_address));
        let posVendor = new google.maps.LatLng(Number(this.vendor.location.latitude), Number(this.vendor.location.longitude));
        let markerVendor = Object(_assets_scripts_html_map_marker_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
            latlng: posVendor,
            map: this.maps.map,
            html: '<div id="doctor_map"><img src="' + this.vendor.image + '"></div>'
        });
        markerVendor.addListener('click', (event) => this.uiElementService.presentToast(this.vendor.name));
        let directionsService = new google.maps.DirectionsService();
        let directionsDisplay = new google.maps.DirectionsRenderer({
            map: this.maps.map,
            polylineOptions: {
                strokeColor: '#279411',
                strokeOpacity: 1.0,
                strokeWeight: 5
            },
            markerOptions: {
                opacity: 0,
                clickable: false,
                position: markerVendor
            }
        });
        let dirReq = {
            origin: posVendor,
            destination: posMe,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(dirReq, function (result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(result);
            }
        });
        if (this.delivery.delivery.latitude && this.delivery.delivery.longitude) {
            this.posDeliveryGuy = new google.maps.LatLng(Number(this.delivery.delivery.latitude), Number(this.delivery.delivery.longitude));
            this.markerDeliveryGuy = Object(_assets_scripts_html_map_marker_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
                latlng: this.posDeliveryGuy,
                map: this.maps.map,
                html: '<div id="doctor_map"><img src="' + this.delivery.delivery.user.image_url + '"></div>'
            });
            this.markerDeliveryGuy.addListener('click', (event) => this.uiElementService.presentToast(this.delivery.delivery.user.name));
        }
    }
    onNewLocation(newPos) {
        if (!this.posDeliveryGuy || !newPos.equals(this.posDeliveryGuy)) {
            if (this.posDeliveryGuy != null) {
                this.i = 0;
                this.lastToPos[0] = this.posDeliveryGuy.lat();
                this.lastToPos[1] = this.posDeliveryGuy.lng();
                this.deltaLat = (newPos.lat() - this.lastToPos[0]) / this.numDeltas;
                this.deltaLng = (newPos.lng() - this.lastToPos[1]) / this.numDeltas;
            }
            if (this.markerDeliveryGuy == null) {
                this.markerDeliveryGuy = Object(_assets_scripts_html_map_marker_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
                    latlng: this.posDeliveryGuy,
                    map: this.maps.map,
                    html: '<div id="doctor_map"><img src="' + this.delivery.delivery.user.image_url + '"></div>'
                });
            }
            else {
                //this.markerDeliveryGuy.setPosition(this.posDeliveryGuy);
                this.moveMarker();
            }
            this.maps.map.panTo(this.posDeliveryGuy);
        }
    }
    moveMarker() {
        this.lastToPos[0] = this.lastToPos[0] + this.deltaLat;
        this.lastToPos[1] = this.lastToPos[1] + this.deltaLng;
        let newToPos = new google.maps.LatLng(Number(this.lastToPos[0]), Number(this.lastToPos[1]));
        this.markerDeliveryGuy.setPosition(newToPos);
        this.posDeliveryGuy = newToPos;
        if (this.i != this.numDeltas) {
            this.i++;
            setTimeout(() => {
                this.moveMarker();
            }, this.delay);
        }
        //  else {
        //   this.requestDirection(this.lastTo);
        // }
    }
    registerUpdates() {
        const component = this;
        firebase_app__WEBPACK_IMPORTED_MODULE_11__["database"]().ref("deliveries").child(String(this.delivery.delivery.id)).child("location").on('child_changed', function (data) {
            var fireLocation = data.val();
            console.log(fireLocation);
            if (fireLocation.latitude != null && fireLocation.longitude != null)
                component.onNewLocation(new google.maps.LatLng(Number(fireLocation.latitude), Number(fireLocation.longitude)));
        });
    }
    close() {
        this.navCtrl.pop();
    }
    doCall() {
        this.callNumber.callNumber(this.delivery.delivery.user.mobile_number, false).then(res => console.log('Launched dialer!', res)).catch(err => console.log('Error launching dialer', err));
    }
    navChat() {
        let chat = new src_models_chat_models__WEBPACK_IMPORTED_MODULE_9__["Chat"]();
        chat.chatId = this.delivery.delivery.user.id + src_models_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].ROLE_DELIVERY;
        chat.chatImage = this.delivery.delivery.user.image_url;
        chat.chatName = this.delivery.delivery.user.name;
        chat.chatStatus = this.translate.instant("delivery_partner");
        chat.myId = this.delivery.delivery.user.id + src_models_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].ROLE_USER;
        let navigationExtras = { state: { chat: chat, delivery_user: this.delivery.delivery.user } };
        this.navCtrl.navigateForward(['./chat2'], navigationExtras);
    }
};
OrderTrackingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_7__["GoogleMapsService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("pleaseConnect", { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], OrderTrackingPage.prototype, "pleaseConnect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map", { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], OrderTrackingPage.prototype, "mapElement", void 0);
OrderTrackingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-tracking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-tracking.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-tracking/order-tracking.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-tracking.page.scss */ "./src/app/order-tracking/order-tracking.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_7__["GoogleMapsService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"]])
], OrderTrackingPage);



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

/***/ "./src/app/shop-hour/order-tracking/order-tracking-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shop-hour/order-tracking/order-tracking-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: OrderTrackingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTrackingPageRoutingModule", function() { return OrderTrackingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_tracking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-tracking.page */ "./src/app/shop-hour/order-tracking/order-tracking.page.ts");




const routes = [
    {
        path: '',
        component: _order_tracking_page__WEBPACK_IMPORTED_MODULE_3__["OrderTrackingPage"]
    }
];
let OrderTrackingPageRoutingModule = class OrderTrackingPageRoutingModule {
};
OrderTrackingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderTrackingPageRoutingModule);



/***/ }),

/***/ "./src/app/shop-hour/order-tracking/order-tracking.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shop-hour/order-tracking/order-tracking.module.ts ***!
  \*******************************************************************/
/*! exports provided: OrderTrackingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTrackingPageModule", function() { return OrderTrackingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _order_tracking_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-tracking-routing.module */ "./src/app/shop-hour/order-tracking/order-tracking-routing.module.ts");
/* harmony import */ var _order_tracking_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-tracking.page */ "./src/app/shop-hour/order-tracking/order-tracking.page.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/network/google-maps.service */ "./src/app/services/network/google-maps.service.ts");










let OrderTrackingPageModule = class OrderTrackingPageModule {
};
OrderTrackingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _order_tracking_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrderTrackingPageRoutingModule"]
        ],
        providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"], src_app_services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsService"]],
        declarations: [_order_tracking_page__WEBPACK_IMPORTED_MODULE_7__["OrderTrackingPage"]]
    })
], OrderTrackingPageModule);



/***/ }),

/***/ "./src/app/shop-hour/order-tracking/order-tracking.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shop-hour/order-tracking/order-tracking.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.location_icon {\n  position: absolute;\n  z-index: 99;\n  position: absolute;\n  z-index: 99;\n  background: var(--secondary);\n  color: var(--white);\n  width: 43px;\n  height: 43px;\n  border-radius: 50%;\n  text-align: center;\n}\n\n.location_icon ion-icon {\n  width: 43px;\n  height: 43px;\n  line-height: 43px;\n  font-size: 1.43rem;\n}\n\n.delivery_man_location {\n  position: absolute;\n  z-index: 99;\n}\n\n.delivery_man_location img {\n  width: 20px;\n}\n\nion-footer {\n  background: var(--bg-color);\n}\n\nion-footer .delivery_man_info {\n  background: var(--white);\n  padding: 12px 14px;\n}\n\nion-footer .delivery_man_info .img_box {\n  min-width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 16px;\n}\n\nion-footer .delivery_man_info .text_box {\n  color: black;\n  width: 100%;\n}\n\nion-footer .delivery_man_info .text_box h2 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  padding-bottom: 5px;\n}\n\nion-footer .delivery_man_info .text_box h3 {\n  margin: 0;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n\nion-footer ion-row ion-col {\n  padding: 0;\n}\n\nion-footer ion-row ion-col .button.btn ion-icon {\n  position: relative;\n  left: -18px;\n  font-size: 1.3rem;\n}\n\nion-footer ion-row ion-col .button.btn.button-clear {\n  --background: none;\n  color: var(--primary);\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC1ob3VyL29yZGVyLXRyYWNraW5nL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxzaG9wLWhvdXJcXG9yZGVyLXRyYWNraW5nXFxvcmRlci10cmFja2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3AtaG91ci9vcmRlci10cmFja2luZy9vcmRlci10cmFja2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURDQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0FDQUQ7O0FERUM7RUFDQyxXQUFBO0FDQUY7O0FESUE7RUFDQywyQkFBQTtBQ0REOztBREdDO0VBQ0Msd0JBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREdFO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREg7O0FESUU7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQ0ZIOztBRElHO0VBQ0MsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0c7RUFDQyxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRFNFO0VBQ0MsVUFBQTtBQ1BIOztBRFVJO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNSTDs7QURXSTtFQUNDLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ1RMIiwiZmlsZSI6InNyYy9hcHAvc2hvcC1ob3VyL29yZGVyLXRyYWNraW5nL29yZGVyLXRyYWNraW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcbn1cblxuLmxvY2F0aW9uX2ljb24ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IDk5O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IDk5O1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuXHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXHR3aWR0aDogNDNweDtcblx0aGVpZ2h0OiA0M3B4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRpb24taWNvbiB7XG5cdFx0d2lkdGg6IDQzcHg7XG5cdFx0aGVpZ2h0OiA0M3B4O1xuXHRcdGxpbmUtaGVpZ2h0OiA0M3B4O1xuXHRcdGZvbnQtc2l6ZTogMS40M3JlbTtcblx0fVxufVxuXG4uZGVsaXZlcnlfbWFuX2xvY2F0aW9uIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiA5OTtcblxuXHRpbWcge1xuXHRcdHdpZHRoOiAyMHB4O1xuXHR9XG59XG5cbmlvbi1mb290ZXIge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG5cblx0LmRlbGl2ZXJ5X21hbl9pbmZvIHtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG5cdFx0cGFkZGluZzogMTJweCAxNHB4O1xuXG5cdFx0LmltZ19ib3gge1xuXHRcdFx0bWluLXdpZHRoOiA1MHB4O1xuXHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAxNnB4O1xuXHRcdH1cblxuXHRcdC50ZXh0X2JveCB7XG5cdFx0XHRjb2xvcjogYmxhY2s7XG5cdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0aDIge1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDVweDtcblx0XHRcdH1cblxuXHRcdFx0aDMge1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMC43NXJlbTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpb24tcm93IHtcblx0XHRpb24tY29sIHtcblx0XHRcdHBhZGRpbmc6IDA7XG5cblx0XHRcdC5idXR0b24uYnRuIHtcblx0XHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRsZWZ0OiAtMThweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuM3JlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYuYnV0dG9uLWNsZWFyIHtcblx0XHRcdFx0XHQtLWJhY2tncm91bmQ6IG5vbmU7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsIi5tYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvY2F0aW9uX2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICB3aWR0aDogNDNweDtcbiAgaGVpZ2h0OiA0M3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2NhdGlvbl9pY29uIGlvbi1pY29uIHtcbiAgd2lkdGg6IDQzcHg7XG4gIGhlaWdodDogNDNweDtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gIGZvbnQtc2l6ZTogMS40M3JlbTtcbn1cblxuLmRlbGl2ZXJ5X21hbl9sb2NhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG59XG4uZGVsaXZlcnlfbWFuX2xvY2F0aW9uIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xufVxuaW9uLWZvb3RlciAuZGVsaXZlcnlfbWFuX2luZm8ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbn1cbmlvbi1mb290ZXIgLmRlbGl2ZXJ5X21hbl9pbmZvIC5pbWdfYm94IHtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuaW9uLWZvb3RlciAuZGVsaXZlcnlfbWFuX2luZm8gLnRleHRfYm94IHtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1mb290ZXIgLmRlbGl2ZXJ5X21hbl9pbmZvIC50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuaW9uLWZvb3RlciAuZGVsaXZlcnlfbWFuX2luZm8gLnRleHRfYm94IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWNvbCAuYnV0dG9uLmJ0biBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTE4cHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1jb2wgLmJ1dHRvbi5idG4uYnV0dG9uLWNsZWFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/shop-hour/order-tracking/order-tracking.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shop-hour/order-tracking/order-tracking.page.ts ***!
  \*****************************************************************/
/*! exports provided: OrderTrackingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTrackingPage", function() { return OrderTrackingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _assets_scripts_html_map_marker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/scripts/html-map-marker.js */ "./src/assets/scripts/html-map-marker.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/shoup-hour-services/common/ui-elements.service */ "./src/app/services/shoup-hour-services/common/ui-elements.service.ts");
/* harmony import */ var src_app_services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/network/google-maps.service */ "./src/app/services/network/google-maps.service.ts");










let OrderTrackingPage = class OrderTrackingPage {
    constructor(router, navCtrl, modalController, maps, translate, uiElementService, callNumber) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.maps = maps;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.callNumber = callNumber;
        this.initialized = false;
        this.numDeltas = 100;
        this.delay = 10; //milliseconds
        this.i = 0;
        this.lastToPos = [0, 0];
    }
    ngOnInit() {
        console.log("getCurrentNavigation", this.router.getCurrentNavigation().extras.state);
        if (this.router.getCurrentNavigation().extras.state) {
            this.delivery = this.router.getCurrentNavigation().extras.state.delivery;
            // this.delivery.delivery.latitude = "28.6883748";
            // this.delivery.delivery.longitude = "77.2979777";
            this.address = this.router.getCurrentNavigation().extras.state.address;
            this.vendor = this.router.getCurrentNavigation().extras.state.vendor;
        }
    }
    ionViewDidEnter() {
        if (!this.initialized) {
            let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement, this.address).then(() => {
                this.initialized = true;
                this.plotMarkers();
                this.registerUpdates();
            }).catch(err => { console.log("maps.init", err); this.close(); });
            mapLoaded.catch(err => { console.log("mapLoaded", err); this.close(); });
        }
    }
    plotMarkers() {
        let posMe = new google.maps.LatLng(Number(this.address.latitude), Number(this.address.longitude));
        let markerMe = new google.maps.Marker({
            position: posMe, map: this.maps.map
            //, icon: 'assets/images/marker_map_me.png'
        });
        markerMe.addListener('click', (event) => this.uiElementService.presentToast(this.address.formatted_address));
        let posVendor = new google.maps.LatLng(Number(this.vendor.location.latitude), Number(this.vendor.location.longitude));
        let markerVendor = Object(_assets_scripts_html_map_marker_js__WEBPACK_IMPORTED_MODULE_6__["default"])({
            latlng: posVendor,
            map: this.maps.map,
            html: '<div id="doctor_map"><img src="' + this.vendor.image + '"></div>'
        });
        markerVendor.addListener('click', (event) => this.uiElementService.presentToast(this.vendor.name));
        let directionsService = new google.maps.DirectionsService();
        let directionsDisplay = new google.maps.DirectionsRenderer({
            map: this.maps.map,
            polylineOptions: {
                strokeColor: '#7b49c3',
                strokeOpacity: 1.0,
                strokeWeight: 5
            },
            markerOptions: {
                opacity: 0,
                clickable: false,
                position: markerVendor
            }
        });
        let dirReq = {
            origin: posVendor,
            destination: posMe,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(dirReq, function (result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(result);
            }
        });
        if (this.delivery.delivery.latitude && this.delivery.delivery.longitude) {
            this.posDeliveryGuy = new google.maps.LatLng(Number(this.delivery.delivery.latitude), Number(this.delivery.delivery.longitude));
            this.markerDeliveryGuy = Object(_assets_scripts_html_map_marker_js__WEBPACK_IMPORTED_MODULE_6__["default"])({
                latlng: this.posDeliveryGuy,
                map: this.maps.map,
                html: '<div id="doctor_map"><img src="' + this.delivery.delivery.user.image_url + '"></div>'
            });
            this.markerDeliveryGuy.addListener('click', (event) => this.uiElementService.presentToast(this.delivery.delivery.user.name));
        }
    }
    onNewLocation(newPos) {
        if (!this.posDeliveryGuy || !newPos.equals(this.posDeliveryGuy)) {
            if (this.posDeliveryGuy != null) {
                this.i = 0;
                this.lastToPos[0] = this.posDeliveryGuy.lat();
                this.lastToPos[1] = this.posDeliveryGuy.lng();
                this.deltaLat = (newPos.lat() - this.lastToPos[0]) / this.numDeltas;
                this.deltaLng = (newPos.lng() - this.lastToPos[1]) / this.numDeltas;
            }
            if (this.markerDeliveryGuy == null) {
                this.markerDeliveryGuy = Object(_assets_scripts_html_map_marker_js__WEBPACK_IMPORTED_MODULE_6__["default"])({
                    latlng: this.posDeliveryGuy,
                    map: this.maps.map,
                    html: '<div id="doctor_map"><img src="' + this.delivery.delivery.user.image_url + '"></div>'
                });
            }
            else {
                //this.markerDeliveryGuy.setPosition(this.posDeliveryGuy);
                this.moveMarker();
            }
            this.maps.map.panTo(this.posDeliveryGuy);
        }
    }
    moveMarker() {
        this.lastToPos[0] = this.lastToPos[0] + this.deltaLat;
        this.lastToPos[1] = this.lastToPos[1] + this.deltaLng;
        let newToPos = new google.maps.LatLng(Number(this.lastToPos[0]), Number(this.lastToPos[1]));
        this.markerDeliveryGuy.setPosition(newToPos);
        this.posDeliveryGuy = newToPos;
        if (this.i != this.numDeltas) {
            this.i++;
            setTimeout(() => {
                this.moveMarker();
            }, this.delay);
        }
        //  else {
        //   this.requestDirection(this.lastTo);
        // }
    }
    registerUpdates() {
        const component = this;
        firebase_app__WEBPACK_IMPORTED_MODULE_7__["database"]().ref("deliveries").child(String(this.delivery.delivery.id)).child("location").on('child_changed', function (data) {
            var fireLocation = data.val();
            console.log(fireLocation);
            if (fireLocation.latitude != null && fireLocation.longitude != null)
                component.onNewLocation(new google.maps.LatLng(Number(fireLocation.latitude), Number(fireLocation.longitude)));
        });
    }
    close() {
        this.navCtrl.pop();
    }
    doCall() {
        this.callNumber.callNumber(this.delivery.delivery.user.mobile_number, false).then(res => console.log('Launched dialer!', res)).catch(err => console.log('Error launching dialer', err));
    }
};
OrderTrackingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_8__["UiElementsService"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("pleaseConnect", { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], OrderTrackingPage.prototype, "pleaseConnect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map", { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], OrderTrackingPage.prototype, "mapElement", void 0);
OrderTrackingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-tracking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-tracking.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/order-tracking/order-tracking.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-tracking.page.scss */ "./src/app/shop-hour/order-tracking/order-tracking.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_app_services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_8__["UiElementsService"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"]])
], OrderTrackingPage);



/***/ })

}]);
//# sourceMappingURL=order-tracking-order-tracking-module-es2015.js.map