function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-tracking-order-tracking-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/order-tracking/order-tracking.page.html": function node_modulesRawLoaderDistCjsJsSrcAppOrderTrackingOrderTrackingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'order_track' | translate}} #{{delivery.order_id}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-color\" fullscreen>\r\n    <div #map id=\"map\" class=\"map\">\r\n        <!-- <ion-spinner></ion-spinner> -->\r\n    </div>\r\n    <div #pleaseConnect id=\"please-connect\">\r\n        <!-- <p>{{'loading' | translate}}</p> -->\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <div class=\"delivery_man_info d-flex\">\r\n        <div class=\"img_box center_img\">\r\n            <img [src]=\"delivery.delivery.user.image_url\" class=\"crop_img\">\r\n        </div>\r\n        <div class=\"text_box\">\r\n            <h2>{{delivery.delivery.user.name}}</h2>\r\n            <h3>{{'delivery_partner' | translate}}</h3>\r\n        </div>\r\n    </div>\r\n\r\n    <ion-row>\r\n        <ion-col size=\"6\">\r\n            <ion-button size=\"large\" shape=\"full\" fill=\"clear\" class=\"btn\" (click)=\"doCall()\">\r\n                <ion-icon class=\"zmdi zmdi-phone ion-text-start\"></ion-icon>\r\n                {{'call' | translate}}\r\n            </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n            <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"navChat()\">\r\n                <ion-icon class=\"zmdi zmdi-comment-alt-text ion-text-start\"></ion-icon>\r\n                {{'chat' | translate}}\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/order-tracking/order-tracking-routing.module.ts": function srcAppOrderTrackingOrderTrackingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderTrackingPageRoutingModule", function () {
      return OrderTrackingPageRoutingModule;
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


    var _order_tracking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-tracking.page */
    "./src/app/order-tracking/order-tracking.page.ts");

    var routes = [{
      path: '',
      component: _order_tracking_page__WEBPACK_IMPORTED_MODULE_3__["OrderTrackingPage"]
    }];

    var OrderTrackingPageRoutingModule = function OrderTrackingPageRoutingModule() {
      _classCallCheck(this, OrderTrackingPageRoutingModule);
    };

    OrderTrackingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderTrackingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/order-tracking/order-tracking.module.ts": function srcAppOrderTrackingOrderTrackingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderTrackingPageModule", function () {
      return OrderTrackingPageModule;
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


    var _order_tracking_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./order-tracking-routing.module */
    "./src/app/order-tracking/order-tracking-routing.module.ts");
    /* harmony import */


    var _order_tracking_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./order-tracking.page */
    "./src/app/order-tracking/order-tracking.page.ts");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/network/google-maps.service */
    "./src/app/services/network/google-maps.service.ts");

    var OrderTrackingPageModule = function OrderTrackingPageModule() {
      _classCallCheck(this, OrderTrackingPageModule);
    };

    OrderTrackingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _order_tracking_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrderTrackingPageRoutingModule"]],
      providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"], _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsService"]],
      declarations: [_order_tracking_page__WEBPACK_IMPORTED_MODULE_7__["OrderTrackingPage"]]
    })], OrderTrackingPageModule);
    /***/
  },

  /***/
  "./src/app/order-tracking/order-tracking.page.scss": function srcAppOrderTrackingOrderTrackingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.location_icon {\n  position: absolute;\n  z-index: 99;\n  position: absolute;\n  z-index: 99;\n  background: var(--secondary);\n  color: var(--white);\n  width: 43px;\n  height: 43px;\n  border-radius: 50%;\n  text-align: center;\n}\n\n.location_icon ion-icon {\n  width: 43px;\n  height: 43px;\n  line-height: 43px;\n  font-size: 1.43rem;\n}\n\n.delivery_man_location {\n  position: absolute;\n  z-index: 99;\n}\n\n.delivery_man_location img {\n  width: 20px;\n}\n\nion-footer {\n  background: var(--bg-color);\n}\n\nion-footer .delivery_man_info {\n  background: var(--white);\n  padding: 12px 14px;\n}\n\nion-footer .delivery_man_info .img_box {\n  min-width: 40px;\n  height: 40px;\n  border-radius: 5px;\n  margin-right: 16px;\n}\n\nion-footer .delivery_man_info .text_box {\n  width: 100%;\n}\n\nion-footer .delivery_man_info .text_box h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding: 0;\n  padding-bottom: 4px;\n  color: var(--text-dark);\n}\n\nion-footer .delivery_man_info .text_box h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.8rem;\n  overflow: hidden;\n}\n\nion-footer ion-row ion-col {\n  padding: 0;\n}\n\nion-footer ion-row ion-col .button.btn ion-icon {\n  position: relative;\n  left: -18px;\n  font-size: 1.3rem;\n}\n\nion-footer ion-row ion-col .button.btn.button-clear {\n  --background: none;\n  color: var(--primary);\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItdHJhY2tpbmcvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktY3VzdG9tZXIvc3JjXFxhcHBcXG9yZGVyLXRyYWNraW5nXFxvcmRlci10cmFja2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL29yZGVyLXRyYWNraW5nL29yZGVyLXRyYWNraW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURFSTtFQUNJLFdBQUE7QUNBUjs7QURJQTtFQUNJLDJCQUFBO0FDREo7O0FER0k7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0FDRFI7O0FER1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNEWjs7QURJUTtFQUNJLFdBQUE7QUNGWjs7QURJWTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNGaEI7O0FES1k7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSGhCOztBRFNRO0VBQ0ksVUFBQTtBQ1BaOztBRFVnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDUnBCOztBRFdnQjtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ1RwQiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLXRyYWNraW5nL29yZGVyLXRyYWNraW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubG9jYXRpb25faWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB3aWR0aDogNDNweDtcclxuICAgIGhlaWdodDogNDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40M3JlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmRlbGl2ZXJ5X21hbl9sb2NhdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcclxuXHJcbiAgICAuZGVsaXZlcnlfbWFuX2luZm8ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XHJcblxyXG4gICAgICAgIC5pbWdfYm94IHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHRfYm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tcm93IHtcclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgIC5idXR0b24uYnRuIHtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi5idXR0b24tY2xlYXIge1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5tYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvY2F0aW9uX2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICB3aWR0aDogNDNweDtcbiAgaGVpZ2h0OiA0M3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2NhdGlvbl9pY29uIGlvbi1pY29uIHtcbiAgd2lkdGg6IDQzcHg7XG4gIGhlaWdodDogNDNweDtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gIGZvbnQtc2l6ZTogMS40M3JlbTtcbn1cblxuLmRlbGl2ZXJ5X21hbl9sb2NhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG59XG4uZGVsaXZlcnlfbWFuX2xvY2F0aW9uIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xufVxuaW9uLWZvb3RlciAuZGVsaXZlcnlfbWFuX2luZm8ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbn1cbmlvbi1mb290ZXIgLmRlbGl2ZXJ5X21hbl9pbmZvIC5pbWdfYm94IHtcbiAgbWluLXdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuaW9uLWZvb3RlciAuZGVsaXZlcnlfbWFuX2luZm8gLnRleHRfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tZm9vdGVyIC5kZWxpdmVyeV9tYW5faW5mbyAudGV4dF9ib3ggaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG59XG5pb24tZm9vdGVyIC5kZWxpdmVyeV9tYW5faW5mbyAudGV4dF9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWNvbCAuYnV0dG9uLmJ0biBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTE4cHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1jb2wgLmJ1dHRvbi5idG4uYnV0dG9uLWNsZWFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/order-tracking/order-tracking.page.ts": function srcAppOrderTrackingOrderTrackingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderTrackingPage", function () {
      return OrderTrackingPage;
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


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/network/google-maps.service */
    "./src/app/services/network/google-maps.service.ts");
    /* harmony import */


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");
    /* harmony import */


    var src_models_chat_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/models/chat.models */
    "./src/models/chat.models.ts");
    /* harmony import */


    var _assets_scripts_html_map_marker_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../assets/scripts/html-map-marker.js */
    "./src/assets/scripts/html-map-marker.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_11__); //import { Chat2Page } from '../chat2/chat2.page';


    var OrderTrackingPage = /*#__PURE__*/function () {
      function OrderTrackingPage(router, navCtrl, modalController, maps, translate, uiElementService, callNumber) {
        _classCallCheck(this, OrderTrackingPage);

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

      _createClass(OrderTrackingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("getCurrentNavigation", this.router.getCurrentNavigation().extras.state);

          if (this.router.getCurrentNavigation().extras.state) {
            this.delivery = this.router.getCurrentNavigation().extras.state.delivery; // this.delivery.delivery.latitude = "28.6883748";
            // this.delivery.delivery.longitude = "77.2979777";

            this.address = this.router.getCurrentNavigation().extras.state.address;
            this.vendor = this.router.getCurrentNavigation().extras.state.vendor;
          }
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          if (!this.initialized) {
            var mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement, this.address).then(function () {
              _this.initialized = true;

              _this.plotMarkers();

              _this.registerUpdates();
            })["catch"](function (err) {
              console.log("maps.init", err);

              _this.close();
            });
            mapLoaded["catch"](function (err) {
              console.log("mapLoaded", err);

              _this.close();
            });
          }
        }
      }, {
        key: "plotMarkers",
        value: function plotMarkers() {
          var _this2 = this;

          var posMe = new google.maps.LatLng(Number(this.address.latitude), Number(this.address.longitude));
          var markerMe = new google.maps.Marker({
            position: posMe,
            map: this.maps.map //, icon: 'assets/images/marker_map_me.png'

          });
          markerMe.addListener('click', function (event) {
            return _this2.uiElementService.presentToast(_this2.address.formatted_address);
          });
          var posVendor = new google.maps.LatLng(Number(this.vendor.location.latitude), Number(this.vendor.location.longitude));
          var markerVendor = Object(_assets_scripts_html_map_marker_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
            latlng: posVendor,
            map: this.maps.map,
            html: '<div id="doctor_map"><img src="' + this.vendor.image + '"></div>'
          });
          markerVendor.addListener('click', function (event) {
            return _this2.uiElementService.presentToast(_this2.vendor.name);
          });
          var directionsService = new google.maps.DirectionsService();
          var directionsDisplay = new google.maps.DirectionsRenderer({
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
          var dirReq = {
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
            this.markerDeliveryGuy.addListener('click', function (event) {
              return _this2.uiElementService.presentToast(_this2.delivery.delivery.user.name);
            });
          }
        }
      }, {
        key: "onNewLocation",
        value: function onNewLocation(newPos) {
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
            } else {
              //this.markerDeliveryGuy.setPosition(this.posDeliveryGuy);
              this.moveMarker();
            }

            this.maps.map.panTo(this.posDeliveryGuy);
          }
        }
      }, {
        key: "moveMarker",
        value: function moveMarker() {
          var _this3 = this;

          this.lastToPos[0] = this.lastToPos[0] + this.deltaLat;
          this.lastToPos[1] = this.lastToPos[1] + this.deltaLng;
          var newToPos = new google.maps.LatLng(Number(this.lastToPos[0]), Number(this.lastToPos[1]));
          this.markerDeliveryGuy.setPosition(newToPos);
          this.posDeliveryGuy = newToPos;

          if (this.i != this.numDeltas) {
            this.i++;
            setTimeout(function () {
              _this3.moveMarker();
            }, this.delay);
          } //  else {
          //   this.requestDirection(this.lastTo);
          // }

        }
      }, {
        key: "registerUpdates",
        value: function registerUpdates() {
          var component = this;
          firebase_app__WEBPACK_IMPORTED_MODULE_11__["database"]().ref("deliveries").child(String(this.delivery.delivery.id)).child("location").on('child_changed', function (data) {
            var fireLocation = data.val();
            console.log(fireLocation);
            if (fireLocation.latitude != null && fireLocation.longitude != null) component.onNewLocation(new google.maps.LatLng(Number(fireLocation.latitude), Number(fireLocation.longitude)));
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.navCtrl.pop();
        }
      }, {
        key: "doCall",
        value: function doCall() {
          this.callNumber.callNumber(this.delivery.delivery.user.mobile_number, false).then(function (res) {
            return console.log('Launched dialer!', res);
          })["catch"](function (err) {
            return console.log('Error launching dialer', err);
          });
        }
      }, {
        key: "navChat",
        value: function navChat() {
          var chat = new src_models_chat_models__WEBPACK_IMPORTED_MODULE_9__["Chat"]();
          chat.chatId = this.delivery.delivery.user.id + src_models_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].ROLE_DELIVERY;
          chat.chatImage = this.delivery.delivery.user.image_url;
          chat.chatName = this.delivery.delivery.user.name;
          chat.chatStatus = this.translate.instant("delivery_partner");
          chat.myId = this.delivery.delivery.user.id + src_models_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].ROLE_USER;
          var navigationExtras = {
            state: {
              chat: chat,
              delivery_user: this.delivery.delivery.user
            }
          };
          this.navCtrl.navigateForward(['./chat2'], navigationExtras);
        }
      }]);

      return OrderTrackingPage;
    }();

    OrderTrackingPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_7__["GoogleMapsService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("pleaseConnect", {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], OrderTrackingPage.prototype, "pleaseConnect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map", {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], OrderTrackingPage.prototype, "mapElement", void 0);
    OrderTrackingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-tracking',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order-tracking.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/order-tracking/order-tracking.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./order-tracking.page.scss */
      "./src/app/order-tracking/order-tracking.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_7__["GoogleMapsService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"]])], OrderTrackingPage);
    /***/
  }
}]);
//# sourceMappingURL=order-tracking-order-tracking-module-es5.js.map