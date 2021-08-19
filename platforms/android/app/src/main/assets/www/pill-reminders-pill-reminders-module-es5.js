function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pill-reminders-pill-reminders-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pill-reminders/pill-reminders.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPillRemindersPillRemindersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'pill_reminders' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n\t<div class=\"empty-view\" *ngIf=\"!reminders || !reminders.length\">\r\n\t\t<div style=\"text-align:center\">\r\n\t\t\t<img src=\"assets/images/empty_orders.png\" alt=\"no offers\" />\r\n\t\t\t<span style=\"color:#9E9E9E; font-weight:bold; display: block;\">{{\"empty_reminders\" | translate}}</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<ion-list lines=\"none\">\r\n\t\t<ion-item *ngFor=\"let reminder of reminders\">\r\n\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t<div class=\"icon_box\">\r\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-notifications-active ion-text-center\">\r\n\t\t\t\t\t</ion-icon>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t<h2 class=\"d-flex\">\r\n\t\t\t\t\t\t{{reminder.title}}\r\n\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-delete end ion-text-end\" (click)=\"deleteReminder(reminder)\">\r\n\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t</h2>\r\n\t\t\t\t\t<h3>{{reminder.subTitle}}</h3>\r\n\t\t\t\t\t<h4>{{reminder.body}}</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t</ion-list>\r\n\r\n\t<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"navNewReminder()\">\r\n\t\t<ion-fab-button mode=\"md\">\r\n\t\t\t<ion-icon class=\"zmdi zmdi-plus\"></ion-icon>\r\n\t\t</ion-fab-button>\r\n\t</ion-fab>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pill-reminders/pill-reminders-routing.module.ts": function srcAppPillRemindersPillRemindersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PillRemindersPageRoutingModule", function () {
      return PillRemindersPageRoutingModule;
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


    var _pill_reminders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pill-reminders.page */
    "./src/app/pill-reminders/pill-reminders.page.ts");

    var routes = [{
      path: '',
      component: _pill_reminders_page__WEBPACK_IMPORTED_MODULE_3__["PillRemindersPage"]
    }];

    var PillRemindersPageRoutingModule = function PillRemindersPageRoutingModule() {
      _classCallCheck(this, PillRemindersPageRoutingModule);
    };

    PillRemindersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PillRemindersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pill-reminders/pill-reminders.module.ts": function srcAppPillRemindersPillRemindersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PillRemindersPageModule", function () {
      return PillRemindersPageModule;
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


    var _pill_reminders_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pill-reminders-routing.module */
    "./src/app/pill-reminders/pill-reminders-routing.module.ts");
    /* harmony import */


    var _pill_reminders_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pill-reminders.page */
    "./src/app/pill-reminders/pill-reminders.page.ts");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");

    var PillRemindersPageModule = function PillRemindersPageModule() {
      _classCallCheck(this, PillRemindersPageModule);
    };

    PillRemindersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _pill_reminders_routing_module__WEBPACK_IMPORTED_MODULE_6__["PillRemindersPageRoutingModule"]],
      providers: [_ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__["LocalNotifications"]],
      declarations: [_pill_reminders_page__WEBPACK_IMPORTED_MODULE_7__["PillRemindersPage"]]
    })], PillRemindersPageModule);
    /***/
  },

  /***/
  "./src/app/pill-reminders/pill-reminders.page.scss": function srcAppPillRemindersPillRemindersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 7px;\n}\nion-list ion-item {\n  padding: 15px;\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin-bottom: 7px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item .item_inner .icon_box {\n  min-width: 53px;\n  height: 53px;\n  position: relative;\n  border-radius: 53%;\n  margin-right: 20px;\n  background: var(--bg-color);\n}\nion-list ion-item .item_inner .icon_box ion-icon {\n  color: var(--primary);\n  width: 53px;\n  height: 53px;\n  line-height: 53px;\n  font-size: 1.35rem;\n}\nion-list ion-item .item_inner .text_box {\n  width: 100%;\n  overflow: hidden;\n}\nion-list ion-item .item_inner .text_box h2 {\n  color: var(--text-dark);\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 500;\n  padding-bottom: 5px;\n}\nion-list ion-item .item_inner .text_box h2 ion-icon {\n  color: var(--red_color);\n  font-size: 1.3rem;\n  min-width: 25px;\n}\nion-list ion-item .item_inner .text_box h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 0.7rem;\n}\nion-list ion-item .item_inner .text_box h4 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 500;\n}\nion-list ion-item.upload_prescription {\n  --min-height: unset !important;\n  padding: 16px 20px;\n}\nion-list ion-item.upload_prescription .item_inner .item_img {\n  min-width: 18px;\n}\nion-list ion-item.upload_prescription .item_inner h2 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n}\nion-list ion-item.upload_prescription .item_inner h2 .icon_box {\n  min-width: 57px;\n}\nion-list ion-item.upload_prescription .item_inner h2 .icon_box ion-icon {\n  color: var(--primary);\n  font-size: 1.35rem;\n  min-width: 28px;\n}\nion-fab {\n  right: 20px;\n  bottom: 20px;\n}\nion-fab ion-fab-button {\n  --background: var(--primary);\n  width: 55px;\n  height: 55px;\n  --box-shadow: none;\n}\nion-fab ion-fab-button ion-icon {\n  font-size: 1.5rem;\n  font-size: 2rem;\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGlsbC1yZW1pbmRlcnMvRjpcXGZpdmVyXFxCZXJuYXJkXFxEb2N0b3IgV29ybGRcXERvY3RvV29ybGRfQXBwQ29kZSAoVmlkZW8gQ2FsbCktMjAyMTA4MDlUMTAxNDA3Wi0wMDFcXERvY3RvV29ybGRfQXBwQ29kZSAoVmlkZW8gQ2FsbClcXGRvY3Rvd29ybGRfY3VzdG9tZXJcXGRvY3Rvd29ybGRfY3VzdG9tZXIvc3JjXFxhcHBcXHBpbGwtcmVtaW5kZXJzXFxwaWxsLXJlbWluZGVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BpbGwtcmVtaW5kZXJzL3BpbGwtcmVtaW5kZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGtCQUFBO0FDQ1I7QURDUTtFQUNJLFdBQUE7QUNDWjtBRENZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0NoQjtBRENnQjtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ3BCO0FER1k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNEaEI7QURHZ0I7RUFDSSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNEcEI7QURHb0I7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0R4QjtBREtnQjtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNIcEI7QURNZ0I7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSnBCO0FEU1E7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0FDUFo7QURVZ0I7RUFDSSxlQUFBO0FDUnBCO0FEV2dCO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1RwQjtBRFdvQjtFQUNJLGVBQUE7QUNUeEI7QURXd0I7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1Q1QjtBRGtCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDZko7QURpQkk7RUFDSSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNmUjtBRGlCUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ2ZaO0FEb0JBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDakJKO0FEbUJJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNqQlI7QURvQkk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNsQlI7QURxQkk7RUFDSSxnQkFBQTtBQ25CUjtBRHFCUTtFQUNJLHlCQUFBO0FDbkJaIiwiZmlsZSI6InNyYy9hcHAvcGlsbC1yZW1pbmRlcnMvcGlsbC1yZW1pbmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcblxyXG4gICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAuaWNvbl9ib3gge1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1M3B4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1M3B4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTMlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRleHRfYm94IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXJlZF9jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudXBsb2FkX3ByZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xyXG5cclxuICAgICAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICAgICAgLml0ZW1faW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmljb25fYm94IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1N3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZmFiIHtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIGlvbi1mYWItYnV0dG9uIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lbXB0eS12aWV3IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMTAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pY29uX2JveCB7XG4gIG1pbi13aWR0aDogNTNweDtcbiAgaGVpZ2h0OiA1M3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDUzJTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaWNvbl9ib3ggaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIHdpZHRoOiA1M3B4O1xuICBoZWlnaHQ6IDUzcHg7XG4gIGxpbmUtaGVpZ2h0OiA1M3B4O1xuICBmb250LXNpemU6IDEuMzVyZW07XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoMiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoMiBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1yZWRfY29sb3IpO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWluLXdpZHRoOiAyNXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoNCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtLnVwbG9hZF9wcmVzY3JpcHRpb24ge1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtLnVwbG9hZF9wcmVzY3JpcHRpb24gLml0ZW1faW5uZXIgLml0ZW1faW1nIHtcbiAgbWluLXdpZHRoOiAxOHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0udXBsb2FkX3ByZXNjcmlwdGlvbiAuaXRlbV9pbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0udXBsb2FkX3ByZXNjcmlwdGlvbiAuaXRlbV9pbm5lciBoMiAuaWNvbl9ib3gge1xuICBtaW4td2lkdGg6IDU3cHg7XG59XG5pb24tbGlzdCBpb24taXRlbS51cGxvYWRfcHJlc2NyaXB0aW9uIC5pdGVtX2lubmVyIGgyIC5pY29uX2JveCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xuICBtaW4td2lkdGg6IDI4cHg7XG59XG5cbmlvbi1mYWIge1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xufVxuaW9uLWZhYiBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbmlvbi1mYWIgaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZW1wdHktdmlldyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB0b3A6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAxMCU7XG59XG4uZW1wdHktdmlldyBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5lbXB0eS12aWV3IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5lbXB0eS12aWV3IGJ1dHRvbiBzcGFuIHtcbiAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pill-reminders/pill-reminders.page.ts": function srcAppPillRemindersPillRemindersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PillRemindersPage", function () {
      return PillRemindersPage;
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


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");

    var PillRemindersPage = /*#__PURE__*/function () {
      function PillRemindersPage(navCtlr, localNotifications) {
        _classCallCheck(this, PillRemindersPage);

        this.navCtlr = navCtlr;
        this.localNotifications = localNotifications;
        this.reminders = new Array();
      }

      _createClass(PillRemindersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.reminders = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__["Helper"].getReminders();
        }
      }, {
        key: "navNewReminder",
        value: function navNewReminder() {
          this.navCtlr.navigateForward(['./pill-reminder']);
        }
      }, {
        key: "deleteReminder",
        value: function deleteReminder(reminder) {
          console.log("notificationIds", reminder.notificationIds);
          if (reminder && reminder.notificationIds) this.localNotifications.cancel(reminder.notificationIds);
          this.reminders = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__["Helper"].removeReminder(reminder);
        }
      }]);

      return PillRemindersPage;
    }();

    PillRemindersPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"]
      }];
    };

    PillRemindersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pill-reminders',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pill-reminders.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pill-reminders/pill-reminders.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pill-reminders.page.scss */
      "./src/app/pill-reminders/pill-reminders.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"]])], PillRemindersPage);
    /***/
  }
}]);
//# sourceMappingURL=pill-reminders-pill-reminders-module-es5.js.map