function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment-detail-appointment-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-detail/appointment-detail.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAppointmentDetailAppointmentDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <div class=\"title_inner d-flex\">\r\n                <span>{{'appointment_detail' | translate}}</span>\r\n                <!-- <ion-icon class=\"zmdi zmdi-more-vert end ion-text-end\"></ion-icon> -->\r\n            </div>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"doctor_info d-flex\">\r\n        <div *ngIf=\"ap.doctor.user && ap.doctor.user.image_url\" class=\"img_box center_img\">\r\n            <img [src]=\"ap.doctor.user.image_url\" class=\"crop_img\">\r\n        </div>\r\n        <div *ngIf=\"!ap.doctor.user || !ap.doctor.user.image_url\" class=\"img_box center_img\">\r\n            <img src=\"assets/images/empty_dp.png\" class=\"crop_img\">\r\n        </div>\r\n        <div class=\"text_box\">\r\n            <h2>{{ap.doctor.name}}</h2>\r\n            <h3>{{ap.doctor.specializations_text}}</h3>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form\">\r\n        <ion-list lines=\"none\">\r\n            <ion-item>\r\n                <div class=\"item_inner\">\r\n                    <h2 class=\"d-flex\">\r\n                        {{'appointment_on' | translate}}\r\n                        <span class=\"end\" (click)=\"rateDoc()\">{{'rate_doc' | translate}}</span>\r\n                    </h2>\r\n                    <h3>{{ap_date_formatted}}</h3>\r\n                </div>\r\n            </ion-item>\r\n\r\n            <ion-item *ngIf=\"ap.address && ap.address.length\">\r\n                <div class=\"item_inner\">\r\n                    <h2 class=\"d-flex\">{{'location' | translate}}</h2>\r\n                    <h3>{{ap.doctor.hospitalClosest.name}}</h3>\r\n                    <h4 class=\"d-flex\">\r\n                        {{ap.address}}\r\n                        <ion-icon class=\"zmdi zmdi-navigation end ion-text-end\" (click)=\"navAppointment()\"></ion-icon>\r\n                    </h4>\r\n                </div>\r\n            </ion-item>\r\n\r\n\r\n            <ion-item *ngIf=\"ap.meta && ap.meta.reason\">\r\n                <div class=\"item_inner\">\r\n                    <h2 class=\"d-flex\"> {{'appointment_booked_for' | translate}}</h2>\r\n                    <h3>{{ap.meta.reason}}</h3>\r\n                </div>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n                <div class=\"item_inner\">\r\n                    <h2 class=\"d-flex\"> {{'appointment_number' | translate}}</h2>\r\n                    <h3>{{ap.id}}</h3>\r\n                </div>\r\n            </ion-item>\r\n\r\n        </ion-list>\r\n    </div>\r\n</ion-content>\r\n<ion-footer *ngIf=\"!(ap.status == 'cancelled' || ap.status == 'rejected' || ap.status == 'complete')\"\r\n    class=\"ion-no-border\">\r\n    <ion-row>\r\n        <ion-col size=\"6\">\r\n            <ion-button size=\"large\" shape=\"full\" fill=\"clear\" class=\"btn\" (click)=\"dialAppointment()\">\r\n                <ion-icon class=\"zmdi zmdi-phone ion-text-start\"></ion-icon>\r\n                {{'call' | translate}}\r\n            </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n            <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"chatAppointment()\">\r\n                <ion-icon class=\"zmdi zmdi-comment-alt-text ion-text-start\"></ion-icon>\r\n                {{'chat' | translate}}\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/appointment-detail/appointment-detail-routing.module.ts": function srcAppAppointmentDetailAppointmentDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppointmentDetailPageRoutingModule", function () {
      return AppointmentDetailPageRoutingModule;
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


    var _appointment_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./appointment-detail.page */
    "./src/app/appointment-detail/appointment-detail.page.ts");

    var routes = [{
      path: '',
      component: _appointment_detail_page__WEBPACK_IMPORTED_MODULE_3__["AppointmentDetailPage"]
    }];

    var AppointmentDetailPageRoutingModule = function AppointmentDetailPageRoutingModule() {
      _classCallCheck(this, AppointmentDetailPageRoutingModule);
    };

    AppointmentDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppointmentDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/appointment-detail/appointment-detail.module.ts": function srcAppAppointmentDetailAppointmentDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppointmentDetailPageModule", function () {
      return AppointmentDetailPageModule;
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


    var _appointment_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./appointment-detail-routing.module */
    "./src/app/appointment-detail/appointment-detail-routing.module.ts");
    /* harmony import */


    var _appointment_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./appointment-detail.page */
    "./src/app/appointment-detail/appointment-detail.page.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var AppointmentDetailPageModule = function AppointmentDetailPageModule() {
      _classCallCheck(this, AppointmentDetailPageModule);
    };

    AppointmentDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _appointment_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppointmentDetailPageRoutingModule"]],
      providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]],
      declarations: [_appointment_detail_page__WEBPACK_IMPORTED_MODULE_7__["AppointmentDetailPage"]]
    })], AppointmentDetailPageModule);
    /***/
  },

  /***/
  "./src/app/appointment-detail/appointment-detail.page.scss": function srcAppAppointmentDetailAppointmentDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title .title_inner {\n  position: relative;\n  min-height: 60px;\n}\nion-header ion-toolbar ion-title span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nion-header ion-toolbar ion-title ion-icon {\n  color: var(--primary);\n  font-size: 1.4rem;\n  padding: 0 1px;\n  min-width: 20px;\n}\n.doctor_info {\n  padding: 18px;\n  align-items: flex-start;\n  padding-bottom: 36px;\n}\n.doctor_info .img_box {\n  width: 100%;\n  max-width: 150px;\n  height: 150px;\n  border-radius: 11px;\n  margin-right: 18px;\n}\n.doctor_info .text_box h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.53rem;\n  font-weight: 600;\n  line-height: 31px;\n  padding-bottom: 10px;\n}\n.doctor_info .text_box h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  padding-bottom: 7px;\n}\n.form {\n  width: 100%;\n}\n.form ion-list ion-item {\n  background: none;\n  border-radius: 0;\n  padding: 0 20px;\n  margin-bottom: 33px;\n}\n.form ion-list ion-item .item_inner {\n  width: 100%;\n}\n.form ion-list ion-item .item_inner h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  padding-bottom: 8px;\n}\n.form ion-list ion-item .item_inner h2 span {\n  color: var(--primary);\n}\n.form ion-list ion-item .item_inner h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.3rem;\n  font-weight: 500;\n}\n.form ion-list ion-item .item_inner h4 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 0.93rem;\n  padding-top: 6px;\n}\nion-footer {\n  background: var(--bg-color);\n}\nion-footer ion-row ion-col {\n  padding: 0;\n}\nion-footer ion-row ion-col .button.btn ion-icon {\n  position: relative;\n  left: -18px;\n  font-size: 1.3rem;\n}\nion-footer ion-row ion-col .button.btn.button-clear {\n  --background: none;\n  color: var(--primary);\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwb2ludG1lbnQtZGV0YWlsL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxhcHBvaW50bWVudC1kZXRhaWxcXGFwcG9pbnRtZW50LWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FwcG9pbnRtZW50LWRldGFpbC9hcHBvaW50bWVudC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0FSO0FER0k7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNEUjtBRElJO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRlI7QURNQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FDSEo7QURLSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSFI7QURPUTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDTFo7QURRUTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ05aO0FEV0E7RUFDSSxXQUFBO0FDUko7QURXUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNUWjtBRFdZO0VBQ0ksV0FBQTtBQ1RoQjtBRFdnQjtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDVHBCO0FEV29CO0VBQ0kscUJBQUE7QUNUeEI7QURhZ0I7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDWHBCO0FEY2dCO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDWnBCO0FEbUJBO0VBQ0ksMkJBQUE7QUNoQko7QURtQlE7RUFDSSxVQUFBO0FDakJaO0FEb0JnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDbEJwQjtBRHFCZ0I7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNuQnBCIiwiZmlsZSI6InNyYy9hcHAvYXBwb2ludG1lbnQtZGV0YWlsL2FwcG9pbnRtZW50LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcbiAgICAudGl0bGVfaW5uZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgcGFkZGluZzogMCAxcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZG9jdG9yX2luZm8ge1xyXG4gICAgcGFkZGluZzogMThweDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDM2cHg7XHJcblxyXG4gICAgLmltZ19ib3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMThweDtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dF9ib3gge1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjUzcmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjk0cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzM3B4O1xyXG5cclxuICAgICAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XHJcblxyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICAuYnV0dG9uLmJ0biB7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuYnV0dG9uLWNsZWFyIHtcclxuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHBhZGRpbmc6IDAgMXB4O1xuICBtaW4td2lkdGg6IDIwcHg7XG59XG5cbi5kb2N0b3JfaW5mbyB7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWJvdHRvbTogMzZweDtcbn1cbi5kb2N0b3JfaW5mbyAuaW1nX2JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG59XG4uZG9jdG9yX2luZm8gLnRleHRfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1zaXplOiAxLjUzcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMzFweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uZG9jdG9yX2luZm8gLnRleHRfYm94IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuOTRyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG59XG5cbi5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybSBpb24tbGlzdCBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzNweDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybSBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjk0cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGgyIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG4uZm9ybSBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDQge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC45M3JlbTtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMDtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tY29sIC5idXR0b24uYnRuIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMThweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWNvbCAuYnV0dG9uLmJ0bi5idXR0b24tY2xlYXIge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/appointment-detail/appointment-detail.page.ts": function srcAppAppointmentDetailAppointmentDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppointmentDetailPage", function () {
      return AppointmentDetailPage;
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


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");
    /* harmony import */


    var src_models_chat_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/models/chat.models */
    "./src/models/chat.models.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var AppointmentDetailPage = /*#__PURE__*/function () {
      function AppointmentDetailPage(navCtrl, iab) {
        _classCallCheck(this, AppointmentDetailPage);

        this.navCtrl = navCtrl;
        this.iab = iab;
      }

      _createClass(AppointmentDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.ap == null) this.ap = JSON.parse(window.localStorage.getItem("appointment"));
          window.localStorage.removeItem("appointment");
          this.ap_date_formatted = src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].formatTimestampDateTime(this.ap.date + " " + this.ap.time_from, src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getLocale());
        }
      }, {
        key: "chatAppointment",
        value: function chatAppointment() {
          var chat = new src_models_chat_models__WEBPACK_IMPORTED_MODULE_4__["Chat"]();
          chat.chatId = this.ap.doctor.user_id + src_models_constants_models__WEBPACK_IMPORTED_MODULE_3__["Constants"].ROLE_DOCTOR;
          chat.chatImage = this.ap.doctor.user.image_url;
          chat.chatName = this.ap.doctor.name;
          chat.chatStatus = src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].formatTimestampDateTime(this.ap.date + " " + this.ap.time_from, src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getLocale()) + " | " + (this.ap.meta && this.ap.meta.reason ? this.ap.meta.reason : this.ap.doctor.specializations_text);
          chat.myId = this.ap.user.id + src_models_constants_models__WEBPACK_IMPORTED_MODULE_3__["Constants"].ROLE_USER;
          var navigationExtras = {
            state: {
              chat: chat,
              doctor_user: this.ap.doctor.user
            }
          };
          this.navCtrl.navigateForward(['./chat'], navigationExtras);
        }
      }, {
        key: "dialAppointment",
        value: function dialAppointment() {
          this.iab.create("https://api.whatsapp.com/send?phone=" + this.ap.doctor.user.mobile_number, "_system");
        }
      }, {
        key: "navAppointment",
        value: function navAppointment() {
          this.iab.create("http://maps.google.com/maps?daddr=" + this.ap.latitude + "," + this.ap.longitude, "_system");
        }
      }, {
        key: "rateDoc",
        value: function rateDoc() {
          var navigationExtras = {
            state: {
              doctor: this.ap.doctor
            }
          };
          this.navCtrl.navigateForward(['./add-feedback'], navigationExtras);
        }
      }]);

      return AppointmentDetailPage;
    }();

    AppointmentDetailPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]
      }];
    };

    AppointmentDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-appointment-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./appointment-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-detail/appointment-detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./appointment-detail.page.scss */
      "./src/app/appointment-detail/appointment-detail.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]])], AppointmentDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=appointment-detail-appointment-detail-module-es5.js.map