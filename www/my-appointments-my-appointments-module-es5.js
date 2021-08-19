function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-appointments-my-appointments-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-appointments/my-appointments.page.html": function node_modulesRawLoaderDistCjsJsSrcAppMyAppointmentsMyAppointmentsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>{{'my_appointments' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\" fullscreen>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"{{'pull_refresh' | translate}}\"\r\n            refreshingSpinner=\"circles\" refreshingText=\"{{'refreshing' | translate}}\">\r\n        </ion-refresher-content>\r\n    </ion-refresher>\r\n    <div class=\"empty-view\" *ngIf=\"!isLoading && (!appointmentsAll || !appointmentsAll.length)\">\r\n        <div style=\"text-align:center\">\r\n            <img src=\"assets/images/empty_appointments.png\" alt=\"no offers\" />\r\n            <span style=\"color:#9E9E9E; font-weight:bold; display: block;\">{{\"empty_appointments\" | translate}}</span>\r\n        </div>\r\n    </div>\r\n    <ion-list lines=\"none\">\r\n        <h2 *ngIf=\"appointmentsUpcoming && appointmentsUpcoming.length\">{{'upcoming_appointments' | translate}}</h2>\r\n        <ion-item *ngFor=\"let ap of appointmentsUpcoming\" [ngClass]=\"optionsAppointment == ap.id ? 'show_options' : ''\">\r\n            <div class=\"item_inner d-flex\">\r\n                <div *ngIf=\"ap.doctor.user && ap.doctor.user.image_url\" class=\"img_box center_img\"\r\n                    (click)=\"navAppointmentDetail(ap)\">\r\n                    <img [src]=\"ap.doctor.user.image_url\" class=\"crop_img\">\r\n                </div>\r\n\r\n                <div *ngIf=\"!ap.doctor.user || !ap.doctor.user.image_url\" class=\"img_box center_img\"\r\n                    (click)=\"navAppointmentDetail(ap)\">\r\n                    <img src=\"assets/images/empty_dp.png\" class=\"crop_img\">\r\n                </div>\r\n\r\n                <div class=\"text_box\">\r\n                    <h2 class=\"d-flex\">{{ap.doctor.name}}\r\n                        <ion-icon *ngIf=\"ap.status == 'pending' && optionsAppointment != ap.id\"\r\n                            class=\"zmdi zmdi-more-vert ion-text-end end\" (click)=\"showOptions(ap)\"></ion-icon>\r\n                        <ion-icon *ngIf=\"ap.status == 'pending' && optionsAppointment == ap.id\"\r\n                            class=\"zmdi zmdi-close ion-text-end end\" (click)=\"showOptions(ap)\"></ion-icon>\r\n                        <span *ngIf=\"ap.status == 'cancelled' || ap.status == 'rejected' || ap.status == 'complete'\"\r\n                            class=\"status end\">\r\n                            {{ ('appointment_status_'+ap.status) | translate}}\r\n                        </span>\r\n                    </h2>\r\n                    <h3 (click)=\"navAppointmentDetail(ap)\">{{ap.doctor.specializations_text}}</h3>\r\n\r\n                    <h4 class=\"d-flex\">\r\n                        <!-- {{ap.date_toshow}} {{ap.day_toshow | translate}} | {{ap.time_from_toshow}} -->\r\n                        {{ap.date_toshow}} | {{ap.time_from_toshow}}\r\n\r\n                        <span class=\"end\"\r\n                            *ngIf=\"!(ap.status == 'cancelled' || ap.status == 'rejected' || ap.status == 'complete')\">\r\n                            <ion-icon\r\n                                [ngClass]=\"config.agoraVideoConfig.enableAgoraVideo ? 'zmdi zmdi-videocam ion-text-start' : 'zmdi zmdi-phone ion-text-start' \"\r\n                                (click)=\"dialAppointment(ap)\"></ion-icon>\r\n                            <ion-icon class=\"zmdi zmdi-comment-alt-text ion-text-end\" (click)=\"chatAppointment(ap)\">\r\n                            </ion-icon>\r\n                        </span>\r\n                    </h4>\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n            <div class=\"option_container\">\r\n                <div class=\"option\" (click)=\"confirmCancel(ap)\">\r\n                    <h2 class=\"ion-text-end\">{{'cancel' | translate}}</h2>\r\n                </div>\r\n            </div>\r\n        </ion-item>\r\n\r\n        <h2 *ngIf=\"appointmentsPast && appointmentsPast.length\">{{'past_appointments' | translate}}</h2>\r\n\r\n        <ion-item *ngFor=\"let ap of appointmentsPast\" [ngClass]=\"optionsAppointment == ap.id ? 'show_options' : ''\">\r\n            <div class=\"item_inner d-flex\">\r\n                <div *ngIf=\"ap.doctor.user && ap.doctor.user.image_url\" class=\"img_box center_img\"\r\n                    (click)=\"navAppointmentDetail(ap)\">\r\n                    <img [src]=\"ap.doctor.user.image_url\" class=\"crop_img\">\r\n                </div>\r\n\r\n                <div *ngIf=\"!ap.doctor.user || !ap.doctor.user.image_url\" class=\"img_box center_img\"\r\n                    (click)=\"navAppointmentDetail(ap)\">\r\n                    <img src=\"assets/images/empty_dp.png\" class=\"crop_img\">\r\n                </div>\r\n\r\n                <div class=\"text_box\">\r\n                    <h2 class=\"d-flex\">\r\n                        {{ap.doctor.name}}\r\n                        <ion-icon\r\n                            *ngIf=\"!(ap.status == 'cancelled' || ap.status == 'rejected' || ap.status == 'complete') && optionsAppointment != ap.id\"\r\n                            class=\"zmdi zmdi-more-vert ion-text-end end\" (click)=\"showOptions(ap)\"></ion-icon>\r\n                        <ion-icon\r\n                            *ngIf=\"!(ap.status == 'cancelled' || ap.status == 'rejected' || ap.status == 'complete') && optionsAppointment == ap.id\"\r\n                            class=\"zmdi zmdi-close ion-text-end end\" (click)=\"showOptions(ap)\"></ion-icon>\r\n                        <span *ngIf=\"ap.status == 'cancelled' || ap.status == 'rejected' || ap.status == 'complete'\"\r\n                            class=\"status end\">\r\n                            {{ ('appointment_status_'+ap.status) | translate}}\r\n                        </span>\r\n                    </h2>\r\n                    <h3 (click)=\"navAppointmentDetail(ap)\">{{ap.doctor.specializations_text}}</h3>\r\n\r\n                    <h4 class=\"d-flex\">\r\n                        {{ap.date_toshow}} | {{ap.time_from_toshow}}\r\n\r\n                        <span class=\"end\"\r\n                            *ngIf=\"!(ap.status == 'cancelled' || ap.status == 'rejected' || ap.status == 'complete')\">\r\n                            <ion-icon\r\n                                [ngClass]=\"config.agoraVideoConfig.enableAgoraVideo ? 'zmdi zmdi-videocam ion-text-start' : 'zmdi zmdi-phone ion-text-start' \"\r\n                                (click)=\"dialAppointment(ap)\"></ion-icon>\r\n                            <ion-icon class=\"zmdi zmdi-comment-alt-text ion-text-end\" (click)=\"chatAppointment(ap)\">\r\n                            </ion-icon>\r\n                        </span>\r\n                    </h4>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"option_container\">\r\n                <div class=\"option\" (click)=\"confirmCancel(ap)\">\r\n                    <h2 class=\"ion-text-end\">{{'cancel' | translate}}</h2>\r\n                </div>\r\n            </div>\r\n        </ion-item>\r\n    </ion-list>\r\n    <ion-infinite-scroll (ionInfinite)=\"doInfiniteAppointments($event)\">\r\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{'loading' | translate}}\">\r\n        </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/my-appointments/my-appointments-routing.module.ts": function srcAppMyAppointmentsMyAppointmentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAppointmentsPageRoutingModule", function () {
      return MyAppointmentsPageRoutingModule;
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


    var _my_appointments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-appointments.page */
    "./src/app/my-appointments/my-appointments.page.ts");

    var routes = [{
      path: '',
      component: _my_appointments_page__WEBPACK_IMPORTED_MODULE_3__["MyAppointmentsPage"]
    }];

    var MyAppointmentsPageRoutingModule = function MyAppointmentsPageRoutingModule() {
      _classCallCheck(this, MyAppointmentsPageRoutingModule);
    };

    MyAppointmentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyAppointmentsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/my-appointments/my-appointments.module.ts": function srcAppMyAppointmentsMyAppointmentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAppointmentsPageModule", function () {
      return MyAppointmentsPageModule;
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


    var _my_appointments_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-appointments-routing.module */
    "./src/app/my-appointments/my-appointments-routing.module.ts");
    /* harmony import */


    var _my_appointments_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./my-appointments.page */
    "./src/app/my-appointments/my-appointments.page.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var MyAppointmentsPageModule = function MyAppointmentsPageModule() {
      _classCallCheck(this, MyAppointmentsPageModule);
    };

    MyAppointmentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _my_appointments_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyAppointmentsPageRoutingModule"]],
      providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]],
      declarations: [_my_appointments_page__WEBPACK_IMPORTED_MODULE_7__["MyAppointmentsPage"]]
    })], MyAppointmentsPageModule);
    /***/
  },

  /***/
  "./src/app/my-appointments/my-appointments.page.scss": function srcAppMyAppointmentsMyAppointmentsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  padding: 0 15px !important;\n}\n\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 8px;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 0.95rem;\n  padding: 13px 19px 13px 19px;\n}\n\nion-list ion-item {\n  padding: 16px 15px 20px 15px;\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin-bottom: 8px;\n  overflow: visible;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n  align-items: flex-end;\n  position: relative;\n}\n\nion-list ion-item .item_inner .img_box {\n  min-width: 68px;\n  height: 68px;\n  margin-right: 15px;\n  border-radius: 6px;\n}\n\nion-list ion-item .item_inner .text_box {\n  width: 100%;\n  overflow: hidden;\n  padding-top: 6px;\n}\n\nion-list ion-item .item_inner .text_box h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding: 0;\n  padding-bottom: 4px;\n  color: var(--text-dark);\n}\n\nion-list ion-item .item_inner .text_box h2 ion-icon {\n  color: var(--primary);\n  font-size: 1.1rem;\n  padding: 0 3px;\n  min-width: 22px;\n}\n\nion-list ion-item .item_inner .text_box h2 span.status {\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  text-transform: uppercase;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: var(--text-light2);\n}\n\nion-list ion-item .item_inner .text_box h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.8rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  min-height: 30.4px;\n}\n\nion-list ion-item .item_inner .text_box h3 span {\n  font-size: 0.73rem;\n  font-weight: 400;\n  color: var(--text-light2);\n}\n\nion-list ion-item .item_inner .text_box h4 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.95rem;\n  font-weight: 600;\n}\n\nion-list ion-item .item_inner .text_box h4 ion-icon {\n  color: var(--primary);\n  font-size: 1rem;\n  min-width: 26px;\n}\n\nion-list ion-item .option_container {\n  position: absolute;\n  background: var(--white);\n  top: 27px;\n  right: 7px;\n  border-radius: 3px;\n  box-shadow: 0 0px 11px 3px rgba(0, 0, 0, 0.1);\n  padding: 0;\n  width: 0;\n  height: 0;\n  transition: all 0.3s;\n  overflow: hidden;\n}\n\nion-list ion-item .option_container .option h2 {\n  padding: 0;\n  color: var(--text-black);\n  font-weight: 500;\n  padding: 7px 5px;\n}\n\nion-list ion-item.show_options .option_container {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 132px;\n  height: auto;\n  display: block;\n  padding: 6px 10px;\n}\n\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n\n.empty-view button {\n  margin-top: 50px;\n}\n\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktYXBwb2ludG1lbnRzL0Y6XFxmaXZlclxcQmVybmFyZFxcRG9jdG9yIFdvcmxkXFxEb2N0b1dvcmxkX0FwcENvZGUgKFZpZGVvIENhbGwpLTIwMjEwODA5VDEwMTQwN1otMDAxXFxEb2N0b1dvcmxkX0FwcENvZGUgKFZpZGVvIENhbGwpXFxkb2N0b3dvcmxkX2N1c3RvbWVyXFxkb2N0b3dvcmxkX2N1c3RvbWVyL3NyY1xcYXBwXFxteS1hcHBvaW50bWVudHNcXG15LWFwcG9pbnRtZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL215LWFwcG9pbnRtZW50cy9teS1hcHBvaW50bWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUNDUjs7QURFSTtFQUNJLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBUjs7QURFUTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDQVo7O0FERVk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNBaEI7O0FER1k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RoQjs7QURHZ0I7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRHBCOztBREdvQjtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0R4Qjs7QURLd0I7RUFDSSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0g1Qjs7QURRZ0I7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNOcEI7O0FEUW9CO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDTnhCOztBRFVnQjtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNScEI7O0FEVW9CO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1J4Qjs7QURjUTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDWlo7O0FEZ0JnQjtFQUNJLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNkcEI7O0FEb0JZO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDbEJoQjs7QUQyQkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUN4Qko7O0FEMEJJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUN4QlI7O0FEMkJJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDekJSOztBRDRCSTtFQUNJLGdCQUFBO0FDMUJSOztBRDRCUTtFQUNJLHlCQUFBO0FDMUJaIiwiZmlsZSI6InNyYy9hcHAvbXktYXBwb2ludG1lbnRzL215LWFwcG9pbnRtZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMTNweCAxOXB4IDEzcHggMTlweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAxNXB4IDIwcHggMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcblxyXG4gICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgLmltZ19ib3gge1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA2OHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGV4dF9ib3gge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuXHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuODVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwLjRweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43M3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm9wdGlvbl9jb250YWluZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgdG9wOiAyN3B4O1xyXG4gICAgICAgICAgICByaWdodDogN3B4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMHB4IDExcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcblxyXG4gICAgICAgICAgICAub3B0aW9uIHtcclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweCA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuc2hvd19vcHRpb25zIHtcclxuICAgICAgICAgICAgLm9wdGlvbl9jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMzJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi5lbXB0eS12aWV3IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMTAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbmlvbi1saXN0IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIHBhZGRpbmc6IDEzcHggMTlweCAxM3B4IDE5cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDE2cHggMTVweCAyMHB4IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLmltZ19ib3gge1xuICBtaW4td2lkdGg6IDY4cHg7XG4gIGhlaWdodDogNjhweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoMiBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHBhZGRpbmc6IDAgM3B4O1xuICBtaW4td2lkdGg6IDIycHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaDIgc3Bhbi5zdGF0dXMge1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG1pbi1oZWlnaHQ6IDMwLjRweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoMyBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjczcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGg0IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGg0IGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1pbi13aWR0aDogMjZweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5vcHRpb25fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHRvcDogMjdweDtcbiAgcmlnaHQ6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwIDBweCAxMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLm9wdGlvbl9jb250YWluZXIgLm9wdGlvbiBoMiB7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogN3B4IDVweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtLnNob3dfb3B0aW9ucyAub3B0aW9uX2NvbnRhaW5lciB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWluLXdpZHRoOiAxMzJweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNnB4IDEwcHg7XG59XG5cbi5lbXB0eS12aWV3IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMjAwcHg7XG4gIHRvcDogMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDEwJTtcbn1cbi5lbXB0eS12aWV3IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmVtcHR5LXZpZXcgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW1wdHktdmlldyBidXR0b24ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHNwYW4ge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/my-appointments/my-appointments.page.ts": function srcAppMyAppointmentsMyAppointmentsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAppointmentsPage", function () {
      return MyAppointmentsPage;
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


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_models_chat_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/models/chat.models */
    "./src/models/chat.models.ts");
    /* harmony import */


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);

    var MyAppointmentsPage = /*#__PURE__*/function () {
      function MyAppointmentsPage(config, navCtrl, translate, alertCtrl, uiElementService, apiService, iab, platform) {
        _classCallCheck(this, MyAppointmentsPage);

        this.config = config;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.iab = iab;
        this.platform = platform;
        this.subscriptions = new Array();
        this.appointmentsAll = new Array();
        this.appointmentsUpcoming = new Array();
        this.appointmentsPast = new Array();
        this.isLoading = true;
        this.pageNo = 1;
        this.doneAll = false;
        this.optionsAppointment = -1;
      }

      _createClass(MyAppointmentsPage, [{
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
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.refresherEvent = event;
          this.pageNo = 1;
          this.appointmentsAll = [];
          this.appointmentsPast = [];
          this.appointmentsUpcoming = [];
          this.isLoading = true;
          this.getAppointments();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          if (!this.appointmentsAll || !this.appointmentsAll.length) {
            if (src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getLoggedInUser() != null) {
              this.translate.get("loading").subscribe(function (value) {
                _this.uiElementService.presentLoading(value);

                _this.getAppointments();
              });
            } else {
              this.isLoading = false;
            }
          }
        }
      }, {
        key: "getAppointments",
        value: function getAppointments() {
          var _this2 = this;

          this.apiService.getAppointments(src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getLoggedInUser().id, this.pageNo).subscribe(function (res) {
            _this2.isLoading = false;
            var momentNow = moment__WEBPACK_IMPORTED_MODULE_11__();

            var _iterator2 = _createForOfIteratorHelper(res.data),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var ap = _step2.value;
                var momentAp = moment__WEBPACK_IMPORTED_MODULE_11__(ap.date + " " + ap.time_to);
                if (momentNow > momentAp) _this2.appointmentsPast.push(ap);else _this2.appointmentsUpcoming.push(ap); // if (momentNow > momentAp || ap.status == 'cancelled' || ap.status == 'rejected' || ap.status == 'complete') this.appointmentsPast.push(ap); else this.appointmentsUpcoming.push(ap);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            _this2.appointmentsAll = _this2.appointmentsAll.concat(res.data);
            _this2.doneAll = !res.data || !res.data.length;
            if (_this2.infiniteScrollEvent) _this2.infiniteScrollEvent.target.complete();
            if (_this2.refresherEvent) _this2.refresherEvent.target.complete();

            _this2.uiElementService.dismissLoading();
          }, function (err) {
            console.log("getAppointments", err);
            _this2.isLoading = false;
            if (_this2.infiniteScrollEvent) _this2.infiniteScrollEvent.target.complete();
            if (_this2.refresherEvent) _this2.refresherEvent.target.complete();

            _this2.uiElementService.dismissLoading();
          });
        }
      }, {
        key: "doInfiniteAppointments",
        value: function doInfiniteAppointments(event) {
          if (this.doneAll) {
            event.target.complete();
          } else {
            this.infiniteScrollEvent = event;
            this.pageNo = this.pageNo + 1;
            this.getAppointments();
          }
        }
      }, {
        key: "confirmCancel",
        value: function confirmCancel(ap) {
          var _this3 = this;

          this.showOptions(ap.id);
          this.translate.get(["cancel_ap_title", "cancel_ap_message", "no", "yes"]).subscribe(function (values) {
            _this3.alertCtrl.create({
              header: values["cancel_ap_title"],
              message: values["cancel_ap_message"],
              buttons: [{
                text: values["no"],
                handler: function handler() {}
              }, {
                text: values["yes"],
                handler: function handler() {
                  _this3.updateAppointmentStatus(ap.id, 'cancelled');
                }
              }]
            }).then(function (alert) {
              return alert.present();
            });
          }); // this.translate.get("just_moment").subscribe(value => {
          //   this.uiElementService.presentToast(value);
          //   this.subscriptions.push(this.apiService.getAppointmentById(ap.id).subscribe(res => {
          //     this.uiElementService.dismissLoading();
          //     if (res && res.doctor && res.doctor.hospitals) {
          //       if (res.status != "cancelled" && res.status != "rejected") {
          //         this.translate.get(["cancel_ap_title", "cancel_ap_message", "no", "yes"]).subscribe(values => {
          //           this.alertCtrl.create({
          //             header: values["cancel_ap_title"],
          //             message: values["cancel_ap_message"],
          //             buttons: [{
          //               text: values["no"],
          //               handler: () => { }
          //             }, {
          //               text: values["yes"],
          //               handler: () => {
          //                 this.updateAppointmentStatus(ap.id, 'cancelled');
          //               }
          //             }]
          //           }).then(alert => alert.present());
          //         });
          //       } else {
          //         this.updateAppointmentInList(res, this.appointmentsAll);
          //         this.updateAppointmentInList(res, this.appointmentsUpcoming);
          //         this.updateAppointmentInList(res, this.appointmentsPast);
          //       }
          //     }
          //   }, err => {
          //     console.log("updateAppointment", err);
          //     this.uiElementService.dismissLoading();
          //   }));
          // });
        }
      }, {
        key: "navAppointmentDetail",
        value: function navAppointmentDetail(ap) {
          window.localStorage.setItem("appointment", JSON.stringify(ap));
          this.navCtrl.navigateForward(['./appointment-detail']);
        }
      }, {
        key: "dialAppointment",
        value: function dialAppointment(ap) {
          var component = this;

          if (this.platform.is("cordova") && this.config.agoraVideoConfig.enableAgoraVideo) {
            component.translate.get("just_moment").subscribe(function (value) {
              component.uiElementService.presentLoading(value);
              Agora.loginUser(null, ap.user.id, function (res) {
                console.log("Agora-loginUser", res);
                component.uiElementService.dismissLoading();
                component.callAgoraUser(ap);
              }, function (err) {
                console.log("Agora-loginUser", err);
                component.uiElementService.dismissLoading();

                if (err == "LOGIN_ERR_ALREADY_LOGGED_IN") {
                  component.callAgoraUser(ap);
                }
              });
            });
          } else {
            this.iab.create("https://api.whatsapp.com/send?phone=" + ap.doctor.user.mobile_number, "_system");
          }
        }
      }, {
        key: "callAgoraUser",
        value: function callAgoraUser(ap) {
          var component = this;
          var channelId = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getAgoraChannelId(ap.user.id, ap.doctor.user.id);
          Agora.callUser(ap.doctor.user.id, channelId, {
            image_caller: ap.user.image_url,
            image_callee: ap.doctor.user.image_url,
            name_caller: ap.user.name,
            name_callee: ap.doctor.name
          }, function (res) {
            console.log("Agora-callUser", res);
          }, function (err) {
            console.log("Agora-callUser", err);

            if (err == "peer_offline") {
              component.translate.get(["doc_offline_title", "doc_offline_message", "yes", "cancel", "doc_video_request_noti_message"]).subscribe(function (values) {
                component.alertCtrl.create({
                  header: values["doc_offline_title"],
                  message: values["doc_offline_message"],
                  buttons: [{
                    text: values["cancel"],
                    handler: function handler() {}
                  }, {
                    text: values["yes"],
                    handler: function handler() {
                      component.apiService.postNotificationContent(src_models_constants_models__WEBPACK_IMPORTED_MODULE_9__["Constants"].ROLE_DOCTOR, ap.doctor.user.id, ap.user.name, values['doc_video_request_noti_message']).subscribe(function (res) {
                        return console.log("notiS", res);
                      }, function (err) {
                        return console.log("notiF", err);
                      });
                    }
                  }]
                }).then(function (alert) {
                  return alert.present();
                });
              });
            } else {
              component.translate.get("something_wrong").subscribe(function (value) {
                return component.uiElementService.presentToast(value);
              });
            }
          });
        }
      }, {
        key: "chatAppointment",
        value: function chatAppointment(ap) {
          if (src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getLoggedInUser() != null) {
            var chat = new src_models_chat_models__WEBPACK_IMPORTED_MODULE_8__["Chat"]();
            chat.chatId = ap.doctor.user_id + src_models_constants_models__WEBPACK_IMPORTED_MODULE_9__["Constants"].ROLE_DOCTOR;
            chat.chatImage = ap.doctor.user.image_url;
            chat.chatName = ap.doctor.name;
            chat.chatStatus = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].formatTimestampDateTime(ap.date + " " + ap.time_from, src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getLocale()) + " | " + (ap.meta && ap.meta.reason ? ap.meta.reason : ap.doctor.specializations_text);
            chat.myId = ap.user.id + src_models_constants_models__WEBPACK_IMPORTED_MODULE_9__["Constants"].ROLE_USER;
            var navigationExtras = {
              state: {
                chat: chat,
                doctor_user: ap.doctor.user
              }
            };
            this.navCtrl.navigateForward(['./chat'], navigationExtras);
          } else {
            this.alertLogin();
          }
        }
      }, {
        key: "showOptions",
        value: function showOptions(ap) {
          this.optionsAppointment = this.optionsAppointment == ap.id ? -1 : ap.id;
        }
      }, {
        key: "updateAppointmentStatus",
        value: function updateAppointmentStatus(apId, statusToUpdate) {
          var _this4 = this;

          this.translate.get("just_moment").subscribe(function (value) {
            _this4.uiElementService.presentToast(value);

            _this4.subscriptions.push(_this4.apiService.updateAppointment(apId, {
              status: statusToUpdate
            }).subscribe(function (res) {
              _this4.uiElementService.dismissLoading();

              _this4.updateAppointmentInList(res, _this4.appointmentsAll);

              _this4.updateAppointmentInList(res, _this4.appointmentsUpcoming);

              _this4.updateAppointmentInList(res, _this4.appointmentsPast);
            }, function (err) {
              console.log("updateAppointment", err);

              _this4.uiElementService.dismissLoading();
            }));
          });
        }
      }, {
        key: "updateAppointmentInList",
        value: function updateAppointmentInList(ap, list) {
          var index = -1;

          for (var i = 0; i < list.length; i++) {
            if (list[i].id == ap.id) {
              index = i;
              break;
            }
          }

          if (index != -1) list[index] = ap;
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
      }]);

      return MyAppointmentsPage;
    }();

    MyAppointmentsPage.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_app_config__WEBPACK_IMPORTED_MODULE_10__["APP_CONFIG"]]
        }]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    MyAppointmentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-appointments',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-appointments.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-appointments/my-appointments.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-appointments.page.scss */
      "./src/app/my-appointments/my-appointments.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_10__["APP_CONFIG"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], MyAppointmentsPage);
    /***/
  }
}]);
//# sourceMappingURL=my-appointments-my-appointments-module-es5.js.map