function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment-book-appointment-book-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-book/appointment-book.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAppointmentBookAppointmentBookPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'select_date_time' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n    <div class=\"doctor_info d-flex\">\r\n        <div class=\"img_box center_img\">\r\n            <img [src]=\"doctor.user.image_url\" class=\"crop_img\">\r\n        </div>\r\n        <div class=\"text_box\">\r\n            <h2>{{doctor.name}}</h2>\r\n            <h3>{{doctor.specializations_text}}</h3>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form\">\r\n        <ion-list lines=\"none\">\r\n            <ion-card>\r\n                <h2 class=\"d-flex\">{{'select_date' | translate}} <span class=\"end\">June 2020</span></h2>\r\n                <div class=\"date_container ion-text-center\">\r\n                    <div *ngFor=\"let d of dates\" [ngClass]=\"(dateSelected == d) ? 'date active' : 'date'\"\r\n                        (click)=\"markSelected(d)\">\r\n                        <h3>{{ weekDays[d.getDay()] | translate }}</h3>\r\n                        <h2>{{ d.getDate()}}</h2>\r\n                    </div>\r\n                </div>\r\n            </ion-card>\r\n\r\n            <ion-card>\r\n                <h2>{{'available_times' | translate}}</h2>\r\n                <h3 *ngIf=\"!(availabilityTimes && availabilityTimes.length)\">{{'unavailable_times' | translate}}</h3>\r\n                <ion-radio-group [(ngModel)]=\"timeSelected\">\r\n                    <ion-item *ngFor=\"let at of availabilityTimes\">\r\n                        <ion-label>{{at.timeValue}}</ion-label>\r\n                        <ion-radio slot=\"start\" [value]=\"at.time\"></ion-radio>\r\n                    </ion-item>\r\n                </ion-radio-group>\r\n            </ion-card>\r\n\r\n            <ion-card *ngIf=\"availabilityTimes && availabilityTimes.length\">\r\n                <h2>{{'appointment_for' | translate}}</h2>\r\n                <ion-item lines=\"none\">\r\n                    <ion-input class=\"ion-text-start\" type=\"text\" [(ngModel)]=\"appointmentReason\"\r\n                        placeholder=\"{{'problems_here' | translate}}\">\r\n                    </ion-input>\r\n                </ion-item>\r\n            </ion-card>\r\n        </ion-list>\r\n    </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-button size=\"large\" shape=\"full\" class=\"btn\" [disabled]=\"!(availabilityTimes && availabilityTimes.length)\"\r\n        (click)=\"createAppointment()\">\r\n        {{'confirm_appointment' | translate}}\r\n    </ion-button>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/appointment-book/appointment-book-routing.module.ts": function srcAppAppointmentBookAppointmentBookRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppointmentBookPageRoutingModule", function () {
      return AppointmentBookPageRoutingModule;
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


    var _appointment_book_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./appointment-book.page */
    "./src/app/appointment-book/appointment-book.page.ts");

    var routes = [{
      path: '',
      component: _appointment_book_page__WEBPACK_IMPORTED_MODULE_3__["AppointmentBookPage"]
    }];

    var AppointmentBookPageRoutingModule = function AppointmentBookPageRoutingModule() {
      _classCallCheck(this, AppointmentBookPageRoutingModule);
    };

    AppointmentBookPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppointmentBookPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/appointment-book/appointment-book.module.ts": function srcAppAppointmentBookAppointmentBookModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppointmentBookPageModule", function () {
      return AppointmentBookPageModule;
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


    var _appointment_book_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./appointment-book-routing.module */
    "./src/app/appointment-book/appointment-book-routing.module.ts");
    /* harmony import */


    var _appointment_book_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./appointment-book.page */
    "./src/app/appointment-book/appointment-book.page.ts");

    var AppointmentBookPageModule = function AppointmentBookPageModule() {
      _classCallCheck(this, AppointmentBookPageModule);
    };

    AppointmentBookPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _appointment_book_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppointmentBookPageRoutingModule"]],
      declarations: [_appointment_book_page__WEBPACK_IMPORTED_MODULE_7__["AppointmentBookPage"]]
    })], AppointmentBookPageModule);
    /***/
  },

  /***/
  "./src/app/appointment-book/appointment-book.page.scss": function srcAppAppointmentBookAppointmentBookPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".doctor_info {\n  padding: 18px;\n  align-items: flex-start;\n}\n.doctor_info .img_box {\n  width: 100%;\n  max-width: 150px;\n  height: 182px;\n  border-radius: 11px;\n  margin-right: 18px;\n}\n.doctor_info .text_box h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.53rem;\n  font-weight: 600;\n  line-height: 31px;\n  padding-bottom: 10px;\n}\n.doctor_info .text_box h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  padding-bottom: 7px;\n}\n.form {\n  width: 100%;\n}\n.form ion-list {\n  padding-top: 10px;\n}\n.form ion-list ion-card {\n  margin: 0;\n  width: 100%;\n  box-shadow: none;\n  border-radius: 0;\n  padding: 17px 0;\n}\n.form ion-list ion-card h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  padding: 0 18px 15px 18px;\n}\n.form ion-list ion-card h2 span {\n  color: var(--text-black);\n  font-weight: 500;\n}\n.form ion-list ion-card .date_container {\n  width: 100%;\n  overflow: hidden;\n  overflow-x: scroll;\n  white-space: nowrap;\n}\n.form ion-list ion-card .date_container .date {\n  display: inline-block;\n  min-width: 52px;\n  min-height: 52px;\n  margin: 0 3.5px;\n  position: relative;\n  overflow: hidden;\n  background: var(--bg-color);\n  border-radius: 3px;\n  padding: 5px;\n}\n.form ion-list ion-card .date_container .date h2 {\n  margin: 0;\n  font-size: 1.35rem;\n  padding: 0;\n  position: relative;\n  z-index: 9;\n  color: var(--text-black);\n  font-weight: 500;\n}\n.form ion-list ion-card .date_container .date h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 0.65rem;\n  position: relative;\n  z-index: 9;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  padding-bottom: 2px;\n}\n.form ion-list ion-card .date_container .date:first-child {\n  margin-left: 21px;\n}\n.form ion-list ion-card .date_container .date:last-child {\n  margin-right: 21px;\n}\n.form ion-list ion-card .date_container .date::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 0;\n  height: 0;\n  border-radius: 3px;\n  background: var(--primary);\n  transition: all 0.3s;\n}\n.form ion-list ion-card .date_container .date.active::before {\n  width: 100%;\n  height: 100%;\n}\n.form ion-list ion-card .date_container .date.active h3 {\n  color: var(--white);\n}\n.form ion-list ion-card .date_container .date.active h2 {\n  color: var(--white);\n}\n.form ion-list ion-card ion-radio-group {\n  width: 100%;\n  overflow: hidden;\n  overflow-x: scroll;\n  white-space: nowrap;\n  display: block;\n}\n.form ion-list ion-card ion-radio-group ion-item {\n  --min-height: 45px;\n  display: inline-block;\n  background: var(--bg-color);\n  border-radius: 3px;\n  position: relative;\n  margin: 0 3.5px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 111px;\n}\n.form ion-list ion-card ion-radio-group ion-item ion-radio {\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  --color: var(--transparent) !important;\n  --color-checked: var(--transparent) !important;\n}\n.form ion-list ion-card ion-radio-group ion-item ion-label {\n  width: 100% !important;\n  max-width: 100% !important;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  color: var(--text-black) !important;\n  font-weight: 500;\n  font-size: 1.3rem !important;\n  height: 100%;\n  line-height: 45px;\n}\n.form ion-list ion-card ion-radio-group ion-item::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 0;\n  height: 0;\n  transition: all 0.2s;\n  background: var(--primary);\n  border-radius: 3px;\n}\n.form ion-list ion-card ion-radio-group ion-item:first-child {\n  margin-left: 21px;\n}\n.form ion-list ion-card ion-radio-group ion-item:last-child {\n  margin-right: 21px;\n}\n.form ion-list ion-card ion-radio-group ion-item.item-radio-checked {\n  border-color: var(--primary) !important;\n}\n.form ion-list ion-card ion-radio-group ion-item.item-radio-checked::before {\n  width: 100%;\n  height: 100%;\n}\n.form ion-list ion-card ion-radio-group ion-item.item-radio-checked ion-label {\n  color: var(--white) !important;\n}\n.form ion-list ion-card ion-item.item-has-placeholder {\n  margin-bottom: 12px;\n  background: var(--bg-color) !important;\n  width: calc(100% - 39px);\n  border-radius: 3px;\n}\n.form ion-list ion-card ion-item.item-has-placeholder ion-input {\n  --placeholder-opacity: 0.6;\n  font-size: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwb2ludG1lbnQtYm9vay9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1jdXN0b21lci9zcmNcXGFwcFxcYXBwb2ludG1lbnQtYm9va1xcYXBwb2ludG1lbnQtYm9vay5wYWdlLnNjc3MiLCJzcmMvYXBwL2FwcG9pbnRtZW50LWJvb2svYXBwb2ludG1lbnQtYm9vay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNDSjtBRENJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDUjtBREdRO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNEWjtBRElRO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRlo7QURPQTtFQUNJLFdBQUE7QUNKSjtBRE1JO0VBQ0ksaUJBQUE7QUNKUjtBRE1RO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0paO0FETVk7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0poQjtBRE1nQjtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7QUNKcEI7QURRWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNOaEI7QURRZ0I7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNOcEI7QURRb0I7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ054QjtBRFNvQjtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNQeEI7QURVb0I7RUFDSSxpQkFBQTtBQ1J4QjtBRFdvQjtFQUNJLGtCQUFBO0FDVHhCO0FEWW9CO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQ1Z4QjtBRGN3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDWjVCO0FEZXdCO0VBQ0ksbUJBQUE7QUNiNUI7QURnQndCO0VBQ0ksbUJBQUE7QUNkNUI7QURvQlk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ2xCaEI7QURvQmdCO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxnQkFBQTtBQ2xCcEI7QURvQm9CO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtBQ2xCeEI7QURxQm9CO0VBQ0ksc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ25CeEI7QURzQm9CO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ3BCeEI7QUR1Qm9CO0VBQ0ksaUJBQUE7QUNyQnhCO0FEd0JvQjtFQUNJLGtCQUFBO0FDdEJ4QjtBRHlCb0I7RUFDSSx1Q0FBQTtBQ3ZCeEI7QUR5QndCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUN2QjVCO0FEMEJ3QjtFQUNJLDhCQUFBO0FDeEI1QjtBRCtCZ0I7RUFDSSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQzdCcEI7QUQrQm9CO0VBQ0ksMEJBQUE7RUFDQSwwQkFBQTtBQzdCeEIiLCJmaWxlIjoic3JjL2FwcC9hcHBvaW50bWVudC1ib29rL2FwcG9pbnRtZW50LWJvb2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3Rvcl9pbmZvIHtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE4MnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNTNyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTRyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTdweCAwO1xyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NHJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMThweCAxNXB4IDE4cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kYXRlX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgICAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDMuNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLXJhZGlvLWdyb3VwIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1taW4taGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMy41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTExcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1yYWRpbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLml0ZW0tcmFkaW8tY2hlY2tlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgJi5pdGVtLWhhcy1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzlweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5kb2N0b3JfaW5mbyB7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmRvY3Rvcl9pbmZvIC5pbWdfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTgycHg7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIG1hcmdpbi1yaWdodDogMThweDtcbn1cbi5kb2N0b3JfaW5mbyAudGV4dF9ib3ggaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXNpemU6IDEuNTNyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5kb2N0b3JfaW5mbyAudGV4dF9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtc2l6ZTogMC45NHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cblxuLmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtIGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDE3cHggMDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1jYXJkIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuOTRyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBwYWRkaW5nOiAwIDE4cHggMTVweCAxOHB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgaDIgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1jYXJkIC5kYXRlX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCAuZGF0ZV9jb250YWluZXIgLmRhdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogNTJweDtcbiAgbWluLWhlaWdodDogNTJweDtcbiAgbWFyZ2luOiAwIDMuNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCAuZGF0ZV9jb250YWluZXIgLmRhdGUgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5O1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCAuZGF0ZV9jb250YWluZXIgLmRhdGUgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCAuZGF0ZV9jb250YWluZXIgLmRhdGU6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMjFweDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1jYXJkIC5kYXRlX2NvbnRhaW5lciAuZGF0ZTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgLmRhdGVfY29udGFpbmVyIC5kYXRlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1jYXJkIC5kYXRlX2NvbnRhaW5lciAuZGF0ZS5hY3RpdmU6OmJlZm9yZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCAuZGF0ZV9jb250YWluZXIgLmRhdGUuYWN0aXZlIGgzIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1jYXJkIC5kYXRlX2NvbnRhaW5lciAuZGF0ZS5hY3RpdmUgaDIge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgaW9uLXJhZGlvLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBpb24tcmFkaW8tZ3JvdXAgaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDMuNXB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1pbi13aWR0aDogMTExcHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBpb24tcmFkaW8tZ3JvdXAgaW9uLWl0ZW0gaW9uLXJhZGlvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgLS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBpb24tcmFkaW8tZ3JvdXAgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgaW9uLXJhZGlvLWdyb3VwIGlvbi1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1jYXJkIGlvbi1yYWRpby1ncm91cCBpb24taXRlbTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAyMXB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgaW9uLXJhZGlvLWdyb3VwIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDIxcHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBpb24tcmFkaW8tZ3JvdXAgaW9uLWl0ZW0uaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgaW9uLXJhZGlvLWdyb3VwIGlvbi1pdGVtLml0ZW0tcmFkaW8tY2hlY2tlZDo6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1jYXJkIGlvbi1yYWRpby1ncm91cCBpb24taXRlbS5pdGVtLXJhZGlvLWNoZWNrZWQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgaW9uLWl0ZW0uaXRlbS1oYXMtcGxhY2Vob2xkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcikgIWltcG9ydGFudDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDM5cHgpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBpb24taXRlbS5pdGVtLWhhcy1wbGFjZWhvbGRlciBpb24taW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNjtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/appointment-book/appointment-book.page.ts": function srcAppAppointmentBookAppointmentBookPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppointmentBookPage", function () {
      return AppointmentBookPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

    var AppointmentBookPage = /*#__PURE__*/function () {
      function AppointmentBookPage(router, navCtrl, uiElementService, translate, apiService) {
        _classCallCheck(this, AppointmentBookPage);

        this.router = router;
        this.navCtrl = navCtrl;
        this.uiElementService = uiElementService;
        this.translate = translate;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.use24HourFormat = true;
        this.minutesApart = 30;
        this.weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        this.dates = [];
        this.availabilityTimes = new Array();
      }

      _createClass(AppointmentBookPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.router.getCurrentNavigation().extras.state) this.doctor = this.router.getCurrentNavigation().extras.state.doctor;

          for (var i = 0; i < 14; i++) {
            var d = new Date();
            d.setDate(d.getDate() + i);
            this.dates.push(d);
          }

          this.markSelected(this.dates[0]);
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
        key: "markSelected",
        value: function markSelected(date) {
          this.dateSelected = date;
          this.availabilityTimes = new Array();

          if (this.doctor.availability[date.getDay()].selected) {
            var fromSplit = this.doctor.availability[date.getDay()].from.split(":");
            var toSplit = this.doctor.availability[date.getDay()].to.split(":");
            var dateStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), Number(fromSplit[0]), Number(fromSplit[1]), 0);
            var dateEnd = new Date(date.getFullYear(), date.getMonth(), date.getDate(), Number(toSplit[0]), Number(toSplit[1]), 0);
            var time = dateStart.getTime();

            while (time <= dateEnd.getTime()) {
              var dateIn = new Date(time);
              this.availabilityTimes.push({
                time: moment__WEBPACK_IMPORTED_MODULE_7__(dateIn).format("HH:mm"),
                timeValue: moment__WEBPACK_IMPORTED_MODULE_7__(dateIn).format(this.use24HourFormat ? "HH:mm" : "hh:mm a")
              });
              time = time + this.minutesApart * 60000;
            }
          }
        }
      }, {
        key: "createAppointment",
        value: function createAppointment() {
          var _this = this;

          if (!this.dateSelected) {
            this.translate.get("err_field_date_select").subscribe(function (value) {
              return _this.uiElementService.presentToast(value);
            });
          } else if (!this.timeSelected) {
            this.translate.get("err_field_time_select").subscribe(function (value) {
              return _this.uiElementService.presentToast(value);
            });
          } else if (!this.appointmentReason || !this.appointmentReason.length) {
            this.translate.get("err_field_ap_reason").subscribe(function (value) {
              return _this.uiElementService.presentToast(value);
            });
          } else {
            var dateFormatted = moment__WEBPACK_IMPORTED_MODULE_7__(this.dateSelected).format("YYYY-MM-DD");
            var momentSelected = moment__WEBPACK_IMPORTED_MODULE_7__(dateFormatted + " " + this.timeSelected + ":00");

            if (momentSelected > moment__WEBPACK_IMPORTED_MODULE_7__()) {
              var apr = {
                amount: this.doctor.consultancy_fee,
                date: dateFormatted,
                time_from: this.timeSelected,
                time_to: momentSelected.add(30, "m").format("HH:mm"),
                address: this.doctor.hospitalClosest.address,
                latitude: this.doctor.hospitalClosest.latitude,
                longitude: this.doctor.hospitalClosest.longitude,
                meta: JSON.stringify({
                  reason: this.appointmentReason
                })
              };
              this.translate.get(["ap_create_ing", "ap_create_ed", "ap_create_same_time", "ap_create_fail"]).subscribe(function (values) {
                _this.uiElementService.presentLoading(values["ap_create_ing"]);

                _this.subscriptions.push(_this.apiService.createAppointment(_this.doctor.id, apr).subscribe(function (res) {
                  _this.uiElementService.presentToast(values["ap_create_ed"]);

                  _this.navCtrl.navigateRoot(['./appointment-booked']);
                }, function (err) {
                  console.log("createAppointment", err);

                  _this.uiElementService.dismissLoading();

                  if (err.status == 422) _this.uiElementService.presentToast(values["ap_create_same_time"]);else _this.uiElementService.presentToast(values["ap_create_fail"]);
                }));
              });
            } else {
              this.translate.get("err_field_timeslot_passed").subscribe(function (value) {
                return _this.uiElementService.presentToast(value);
              });
            }
          }
        }
      }]);

      return AppointmentBookPage;
    }();

    AppointmentBookPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }];
    };

    AppointmentBookPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-appointment-book',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./appointment-book.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-book/appointment-book.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./appointment-book.page.scss */
      "./src/app/appointment-book/appointment-book.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])], AppointmentBookPage);
    /***/
  }
}]);
//# sourceMappingURL=appointment-book-appointment-book-module-es5.js.map