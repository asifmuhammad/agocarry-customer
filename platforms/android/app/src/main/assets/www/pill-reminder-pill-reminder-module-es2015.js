(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pill-reminder-pill-reminder-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pill-reminder/pill-reminder.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pill-reminder/pill-reminder.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'create_pill_remibder' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n    <div class=\"form\">\r\n        <ion-list lines=\"none\">\r\n            <ion-card>\r\n                <h2>{{'pill_name' | translate}}</h2>\r\n                <ion-item lines=\"none\">\r\n                    <ion-input class=\"ion-text-start\" placeholder=\"{{'pill_name' | translate}}\" [(ngModel)]=\"pillTitle\">\r\n                    </ion-input>\r\n                </ion-item>\r\n            </ion-card>\r\n\r\n            <ion-card>\r\n                <h2>{{'select_days' | translate}}</h2>\r\n                <ion-item lines=\"none\">\r\n                    <div class=\"item_inner d-flex\">\r\n                        <ion-icon class=\"zmdi zmdi-calendar-alt ion-text-start\"></ion-icon>\r\n                        <ion-label mode=\"md\" position=\"fixed\">{{\"select_days\" | translate}}</ion-label>\r\n                        <ion-select mode=\"md\" placeholder=\"{{'select_days' | translate}}\" [(ngModel)]=\"pillDay\"\r\n                            multiple=\"false\" [okText]=\"'okay' | translate\" [cancelText]=\"'cancel' | translate\">\r\n                            <ion-select-option value=\"mon\">{{'mon' | translate}}</ion-select-option>\r\n                            <ion-select-option value=\"tue\">{{'tue' | translate}}</ion-select-option>\r\n                            <ion-select-option value=\"wed\">{{'wed' | translate}}</ion-select-option>\r\n                            <ion-select-option value=\"thu\">{{'thu' | translate}}</ion-select-option>\r\n                            <ion-select-option value=\"fri\">{{'fri' | translate}}</ion-select-option>\r\n                            <ion-select-option value=\"sat\">{{'sat' | translate}}</ion-select-option>\r\n                            <ion-select-option value=\"sun\">{{'sun' | translate}}</ion-select-option>\r\n                        </ion-select>\r\n                    </div>\r\n                </ion-item>\r\n            </ion-card>\r\n\r\n            <ion-card>\r\n                <h2>{{'select_time' | translate}}</h2>\r\n                <div class=\"item_box d-flex\" *ngFor=\"let pillTime of pillTimes;let i = index\" lines=\"none\">\r\n                    <ion-item>\r\n                        <div class=\"item_inner d-flex\">\r\n                            <ion-icon class=\"zmdi zmdi-notifications ion-text-start\"></ion-icon>\r\n                            <ion-datetime mode=\"ios\" displayFormat=\"HH:mm\" [value]=\"pillTime.dateValue\"\r\n                                [(ngModel)]=\"pillTime.dateIso\">\r\n                            </ion-datetime>\r\n                        </div>\r\n                    </ion-item>\r\n                    <div class=\"add_time_box end\" (click)=\"addRemoveTime(i)\">\r\n                        <span *ngIf=\"i == 0\">+</span>\r\n                        <span *ngIf=\"i != 0\">-</span>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"add_time_box end\" (click)=\"addTime()\">\r\n                        <span>+</span>\r\n                    </div> -->\r\n            </ion-card>\r\n        </ion-list>\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"confirmReminder()\">\r\n        {{'set_reminder' | translate}}\r\n    </ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/pill-reminder/pill-reminder-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pill-reminder/pill-reminder-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PillReminderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PillReminderPageRoutingModule", function() { return PillReminderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pill_reminder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pill-reminder.page */ "./src/app/pill-reminder/pill-reminder.page.ts");




const routes = [
    {
        path: '',
        component: _pill_reminder_page__WEBPACK_IMPORTED_MODULE_3__["PillReminderPage"]
    }
];
let PillReminderPageRoutingModule = class PillReminderPageRoutingModule {
};
PillReminderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PillReminderPageRoutingModule);



/***/ }),

/***/ "./src/app/pill-reminder/pill-reminder.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pill-reminder/pill-reminder.module.ts ***!
  \*******************************************************/
/*! exports provided: PillReminderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PillReminderPageModule", function() { return PillReminderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pill_reminder_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pill-reminder-routing.module */ "./src/app/pill-reminder/pill-reminder-routing.module.ts");
/* harmony import */ var _pill_reminder_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pill-reminder.page */ "./src/app/pill-reminder/pill-reminder.page.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");









let PillReminderPageModule = class PillReminderPageModule {
};
PillReminderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _pill_reminder_routing_module__WEBPACK_IMPORTED_MODULE_6__["PillReminderPageRoutingModule"]
        ],
        providers: [_ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__["LocalNotifications"]],
        declarations: [_pill_reminder_page__WEBPACK_IMPORTED_MODULE_7__["PillReminderPage"]]
    })
], PillReminderPageModule);



/***/ }),

/***/ "./src/app/pill-reminder/pill-reminder.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pill-reminder/pill-reminder.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  box-shadow: 0 -7px 10px 10px rgba(0, 0, 0, 0.1);\n}\n\n.form ion-list ion-card {\n  border-radius: 0;\n  box-shadow: none;\n  margin: 0;\n  width: 100%;\n  padding-top: 30px;\n}\n\n.form ion-list ion-card h2 {\n  margin: 0;\n  color: #000;\n  font-size: 1rem;\n  padding-bottom: 23px;\n  font-weight: 500;\n}\n\n.form ion-list ion-card ion-item {\n  margin-bottom: 8px;\n  border-radius: 4px;\n  --min-height: unset !important;\n}\n\n.form ion-list ion-card ion-item ion-input {\n  --padding-top: 10px !important;\n  --padding-bottom: 10px !important;\n  font-size: 1rem !important;\n}\n\n.form ion-list ion-card ion-item ion-label {\n  display: none;\n}\n\n.form ion-list ion-card ion-item .item_inner ion-icon {\n  color: var(--primary);\n  font-size: 1.3rem;\n  min-width: 30px;\n}\n\n.form ion-list ion-card ion-item.item-select ion-select {\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  font-size: 1rem !important;\n}\n\n.form ion-list ion-card ion-item.item-datetime ion-datetime {\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  font-size: 1rem !important;\n}\n\n.form ion-list ion-card .item_box {\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.form ion-list ion-card .item_box ion-item {\n  margin-bottom: 0;\n  margin-right: 10px;\n}\n\n.form ion-list ion-card .item_box .add_time_box {\n  min-width: 44px;\n  height: 44px;\n  border-radius: 4px;\n  text-align: center;\n  line-height: 44px;\n  position: relative;\n  overflow: hidden;\n  color: var(--primary);\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.form ion-list ion-card .item_box .add_time_box::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--primary);\n  opacity: 0.2;\n}\n\n.form ion-list ion-card .item_box .add_time_box span {\n  position: relative;\n  z-index: 99;\n  top: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGlsbC1yZW1pbmRlci9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1jdXN0b21lci9zcmNcXGFwcFxccGlsbC1yZW1pbmRlclxccGlsbC1yZW1pbmRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BpbGwtcmVtaW5kZXIvcGlsbC1yZW1pbmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBQTtBQ0NKOztBRElRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNEWjs7QURHWTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNEaEI7O0FESVk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNGaEI7O0FESWdCO0VBQ0ksOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0FDRnBCOztBREtnQjtFQUNJLGFBQUE7QUNIcEI7O0FET29CO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNMeEI7O0FEU2dCO0VBQ0ksNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0FDUHBCOztBRFVnQjtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtBQ1JwQjs7QURZWTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ1ZoQjs7QURZZ0I7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDVnBCOztBRGFnQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWHBCOztBRGFvQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUNYeEI7O0FEY29CO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ1p4QiIsImZpbGUiOiJzcmMvYXBwL3BpbGwtcmVtaW5kZXIvcGlsbC1yZW1pbmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTdweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgaW9uLWNhcmQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuXHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaXRlbV9pbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuaXRlbS1zZWxlY3QgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuaXRlbS1kYXRldGltZSBpb24tZGF0ZXRpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLml0ZW1fYm94IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFkZF90aW1lX2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpb24taGVhZGVyIHtcbiAgYm94LXNoYWRvdzogMCAtN3B4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5mb3JtIGlvbi1saXN0IGlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBpb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBpb24taXRlbSBpb24taW5wdXQge1xuICAtLXBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBtaW4td2lkdGg6IDMwcHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBpb24taXRlbS5pdGVtLXNlbGVjdCBpb24tc2VsZWN0IHtcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBpb24taXRlbS5pdGVtLWRhdGV0aW1lIGlvbi1kYXRldGltZSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgLml0ZW1fYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCAuaXRlbV9ib3ggaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCAuaXRlbV9ib3ggLmFkZF90aW1lX2JveCB7XG4gIG1pbi13aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCAuaXRlbV9ib3ggLmFkZF90aW1lX2JveDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBvcGFjaXR5OiAwLjI7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCAuaXRlbV9ib3ggLmFkZF90aW1lX2JveCBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbiAgdG9wOiAtM3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pill-reminder/pill-reminder.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pill-reminder/pill-reminder.page.ts ***!
  \*****************************************************/
/*! exports provided: PillReminderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PillReminderPage", function() { return PillReminderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");
/* harmony import */ var src_models_reminder_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/reminder.models */ "./src/models/reminder.models.ts");









let PillReminderPage = class PillReminderPage {
    constructor(navCtrl, translate, localNotifications, uiElementService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.localNotifications = localNotifications;
        this.uiElementService = uiElementService;
        this.alertCtrl = alertCtrl;
        this.pillTitle = "";
        //this.pillDays = new Array<string>();
        let momentStart = moment__WEBPACK_IMPORTED_MODULE_6__();
        this.pillTimes = [{ dateIso: momentStart.format(), dateValue: momentStart.format("HH:mm") }];
    }
    ngOnInit() {
        this.lastNotiID = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].getLastReminderID();
        if (this.lastNotiID == null)
            this.lastNotiID = 0;
    }
    ngOnDestroy() {
        // for (let sub of this.subscriptions) sub.unsubscribe();
        // this.uiElementService.dismissLoading();
    }
    addRemoveTime(index) {
        if (index == 0) {
            let momentNew = moment__WEBPACK_IMPORTED_MODULE_6__();
            this.pillTimes.push({ dateIso: momentNew.format(), dateValue: momentNew.format("HH:mm") });
        }
        else {
            this.pillTimes.splice(index, 1);
        }
    }
    confirmReminder() {
        if (!this.pillTitle || !this.pillTitle.length) {
            this.translate.get("err_field_pill_name").subscribe(value => this.uiElementService.presentToast(value));
        }
        else if (!this.pillDay || !this.pillDay.length) {
            this.translate.get("err_field_pill_days").subscribe(value => this.uiElementService.presentToast(value));
        }
        else {
            this.translate.get(["pill_reminder", "pill_reminder_confirm", "no", "yes"]).subscribe(values => {
                this.alertCtrl.create({
                    header: values["pill_reminder"],
                    message: values["pill_reminder_confirm"],
                    buttons: [{
                            text: values["no"],
                            handler: () => {
                                this.navCtrl.pop();
                            }
                        }, {
                            text: values["yes"],
                            handler: () => {
                                this.scheduleNotifications();
                            }
                        }]
                }).then(alert => alert.present());
            });
        }
    }
    scheduleNotifications() {
        let myReminder = new src_models_reminder_models__WEBPACK_IMPORTED_MODULE_8__["Reminder"]();
        myReminder.title = this.pillTitle;
        myReminder.body = "";
        myReminder.subTitle = "";
        let time_pill = this.translate.instant("time_pill");
        let times = new Array();
        for (let time of this.pillTimes)
            if (!times.includes(time.dateIso)) {
                times.push(time.dateIso);
                myReminder.body += (moment__WEBPACK_IMPORTED_MODULE_6__(time.dateIso).format("HH:mm") + ", ");
            }
        // for (let weekDay of this.pillDays) {
        //   let dayNum = 0; //0 = sunday
        //   switch (weekDay) {
        //     case "sun":
        //       myReminder.subTitle += "Sun, ";
        //       dayNum = 0;
        //       break;
        //     case "mon":
        //       myReminder.subTitle += "Mon, ";
        //       dayNum = 1;
        //       break;
        //     case "tue":
        //       myReminder.subTitle += "Tue, ";
        //       dayNum = 2;
        //       break;
        //     case "wed":
        //       myReminder.subTitle += "Wed, ";
        //       dayNum = 3;
        //       break;
        //     case "thu":
        //       myReminder.subTitle += "Thu, ";
        //       dayNum = 4;
        //       break;
        //     case "fri":
        //       myReminder.subTitle += "Fri, ";
        //       dayNum = 5;
        //       break;
        //     case "sat":
        //       myReminder.subTitle += "Sat, ";
        //       dayNum = 6;
        //       break;
        //   }
        //   let notifications = [];
        //   for (let time of times) {
        //     this.lastNotiID += 1;
        //     notifications.push({
        //       id: Number(0 + this.lastNotiID),
        //       title: this.pillTitle,
        //       text: time_pill,
        //       trigger: { every: { weekday: dayNum, hour: Number(moment(time).format("HH")), minute: Number(moment(time).format("mm")) } }
        //     });
        //     myReminder.notificationIds.push(Number(0 + this.lastNotiID));
        //   }
        //   this.localNotifications.schedule(notifications);
        // }
        let dayNum = 0; //0 = sunday
        switch (this.pillDay) {
            case "sun":
                myReminder.subTitle += "Sun, ";
                dayNum = 0;
                break;
            case "mon":
                myReminder.subTitle += "Mon, ";
                dayNum = 1;
                break;
            case "tue":
                myReminder.subTitle += "Tue, ";
                dayNum = 2;
                break;
            case "wed":
                myReminder.subTitle += "Wed, ";
                dayNum = 3;
                break;
            case "thu":
                myReminder.subTitle += "Thu, ";
                dayNum = 4;
                break;
            case "fri":
                myReminder.subTitle += "Fri, ";
                dayNum = 5;
                break;
            case "sat":
                myReminder.subTitle += "Sat, ";
                dayNum = 6;
                break;
        }
        for (let time of times) {
            this.lastNotiID += 1;
            this.localNotifications.schedule({
                id: Number(0 + this.lastNotiID),
                title: this.pillTitle,
                text: time_pill,
                trigger: {
                    every: { weekday: dayNum, hour: Number(moment__WEBPACK_IMPORTED_MODULE_6__(time).format("HH")), minute: Number(moment__WEBPACK_IMPORTED_MODULE_6__(time).format("mm")) },
                    count: 1
                }
            });
            myReminder.notificationIds.push(Number(0 + this.lastNotiID));
        }
        myReminder.subTitle = myReminder.subTitle.substring(0, myReminder.subTitle.length - 2);
        myReminder.body = myReminder.body.substring(0, myReminder.body.length - 2);
        src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].saveReminder(myReminder);
        src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].setLastReminderID(this.lastNotiID);
        this.translate.get("reminder_added").subscribe(value => this.uiElementService.presentToast(value));
        this.navCtrl.pop();
    }
};
PillReminderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
PillReminderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pill-reminder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pill-reminder.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pill-reminder/pill-reminder.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pill-reminder.page.scss */ "./src/app/pill-reminder/pill-reminder.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"],
        _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], PillReminderPage);



/***/ }),

/***/ "./src/models/reminder.models.ts":
/*!***************************************!*\
  !*** ./src/models/reminder.models.ts ***!
  \***************************************/
/*! exports provided: Reminder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reminder", function() { return Reminder; });
class Reminder {
    constructor() {
        this.notificationIds = new Array();
    }
}


/***/ })

}]);
//# sourceMappingURL=pill-reminder-pill-reminder-module-es2015.js.map