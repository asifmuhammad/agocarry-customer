function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-of-doctors-list-of-doctors-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list-of-doctors/list-of-doctors.page.html": function node_modulesRawLoaderDistCjsJsSrcAppListOfDoctorsListOfDoctorsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <div class=\"title_inner d-flex\">\r\n                {{category?.title || 'doctors' | translate}}\r\n                <span class=\"end\">\r\n                    <!-- <ion-icon class=\"zmdi zmdi-sort-amount-desc ion-text-start\" (click)=\"filter()\"></ion-icon> -->\r\n                    <ion-icon class=\"zmdi zmdi-map ion-text-end\" (click)=\"navMapView()\"></ion-icon>\r\n                </span>\r\n            </div>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n    <!-- <div class=\"search_box d-flex\">\r\n\t\t<ion-icon class=\"zmdi zmdi-search ion-text-start\"></ion-icon>\r\n\t\t<ion-searchbar class=\"ion-no-padding\" searchIcon=\"hide\" placeholder=\"{{'search_experts_in_field' | translate}}\">\r\n\t\t</ion-searchbar>\r\n\t\t<ion-icon class=\"zmdi zmdi-sort-amount-desc ion-text-end\" (click)=\"filter()\"></ion-icon>\r\n\t</div> -->\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n    <div class=\"empty-view\" *ngIf=\"!isLoading && (!doctors || !doctors.length)\">\r\n        <div style=\"text-align:center\">\r\n            <img src=\"assets/images/empty_categories.png\" alt=\"no offers\" />\r\n            <span style=\"color:#9E9E9E; font-weight:bold;\">\r\n                {{'empty_results' | translate}}\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <ion-list lines=\"none\">\r\n        <ion-item *ngFor=\"let doctor of doctors\" (click)=\"navDocProfile(doctor)\">\r\n            <div class=\"item_inner d-flex\">\r\n                <div *ngIf=\"doctor.user && doctor.user.image_url\" class=\"img_box center_img\">\r\n                    <img [src]=\"doctor.user.image_url\" class=\"crop_img\">\r\n                </div>\r\n\r\n                <div *ngIf=\"!doctor.user || !doctor.user.image_url\" class=\"img_box center_img\">\r\n                    <img src=\"assets/images/empty_dp.png\" class=\"crop_img\">\r\n                </div>\r\n\r\n                <div class=\"text_box\">\r\n                    <h2>{{doctor.name}}</h2>\r\n                    <h3>{{doctor.specializations_text}}\r\n                        <!-- <span>{{'at' | translate}}</span> {{doctor.address}} -->\r\n                    </h3>\r\n                    <ion-row>\r\n                        <ion-col size=\"4\">\r\n                            <h2>\r\n                                {{'exp' | translate}}&nbsp;<strong>{{doctor.experience_years}}\r\n                                    {{'years' | translate}}</strong>\r\n                            </h2>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                            <h2>{{'fees' | translate}}&nbsp;<strong>{{currencyIcon}}{{doctor.consultancy_fee}}</strong>\r\n                            </h2>\r\n                        </ion-col>\r\n\r\n                        <ion-col size=\"5\" class=\"d-flex\">\r\n                            <h2 class=\"end\">\r\n                                <ion-icon [ngClass]=\"doctor.ratings>=1 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                </ion-icon>\r\n                                <ion-icon [ngClass]=\"doctor.ratings>=2 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                </ion-icon>\r\n                                <ion-icon [ngClass]=\"doctor.ratings>=3 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                </ion-icon>\r\n                                <ion-icon [ngClass]=\"doctor.ratings>=4 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                </ion-icon>\r\n                                <ion-icon [ngClass]=\"doctor.ratings>=5 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                </ion-icon>\r\n                                &nbsp;\r\n                                ({{doctor.ratings_count}})\r\n                            </h2>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </div>\r\n            </div>\r\n        </ion-item>\r\n    </ion-list>\r\n    <ion-infinite-scroll (ionInfinite)=\"doInfiniteDoctors($event)\">\r\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{'loading' | translate}}\">\r\n        </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/list-of-doctors/list-of-doctors-routing.module.ts": function srcAppListOfDoctorsListOfDoctorsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListOfDoctorsPageRoutingModule", function () {
      return ListOfDoctorsPageRoutingModule;
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


    var _list_of_doctors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-of-doctors.page */
    "./src/app/list-of-doctors/list-of-doctors.page.ts");

    var routes = [{
      path: '',
      component: _list_of_doctors_page__WEBPACK_IMPORTED_MODULE_3__["ListOfDoctorsPage"]
    }];

    var ListOfDoctorsPageRoutingModule = function ListOfDoctorsPageRoutingModule() {
      _classCallCheck(this, ListOfDoctorsPageRoutingModule);
    };

    ListOfDoctorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ListOfDoctorsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/list-of-doctors/list-of-doctors.module.ts": function srcAppListOfDoctorsListOfDoctorsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListOfDoctorsPageModule", function () {
      return ListOfDoctorsPageModule;
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


    var _list_of_doctors_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./list-of-doctors-routing.module */
    "./src/app/list-of-doctors/list-of-doctors-routing.module.ts");
    /* harmony import */


    var _list_of_doctors_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./list-of-doctors.page */
    "./src/app/list-of-doctors/list-of-doctors.page.ts");

    var ListOfDoctorsPageModule = function ListOfDoctorsPageModule() {
      _classCallCheck(this, ListOfDoctorsPageModule);
    };

    ListOfDoctorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _list_of_doctors_routing_module__WEBPACK_IMPORTED_MODULE_6__["ListOfDoctorsPageRoutingModule"]],
      declarations: [_list_of_doctors_page__WEBPACK_IMPORTED_MODULE_7__["ListOfDoctorsPage"]]
    })], ListOfDoctorsPageModule);
    /***/
  },

  /***/
  "./src/app/list-of-doctors/list-of-doctors.page.scss": function srcAppListOfDoctorsListOfDoctorsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title .title_inner {\n  padding-left: 30px;\n}\nion-header ion-toolbar ion-title .title_inner span {\n  position: relative;\n  z-index: 999;\n  top: 6px;\n}\nion-header ion-toolbar ion-title .title_inner span ion-icon {\n  position: relative;\n  font-size: 1.5rem;\n  color: var(--text-light2);\n  min-width: 29px;\n}\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 8px;\n}\nion-list ion-item {\n  padding: 16px 15px 20px 15px;\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin-bottom: 8px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n  align-items: flex-end;\n}\nion-list ion-item .item_inner .img_box {\n  min-width: 65px;\n  height: 65px;\n  margin-right: 15px;\n  border-radius: 6px;\n}\nion-list ion-item .item_inner .text_box {\n  width: 100%;\n  overflow: hidden;\n  padding-top: 6px;\n}\nion-list ion-item .item_inner .text_box h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding-bottom: 4px;\n  color: var(--text-dark);\n}\nion-list ion-item .item_inner .text_box h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.8rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  min-height: 30.4px;\n}\nion-list ion-item .item_inner .text_box h3 span {\n  font-size: 0.73rem;\n  font-weight: 400;\n  color: var(--text-light2);\n}\nion-list ion-item .item_inner .text_box ion-row {\n  margin: 0 -5px;\n}\nion-list ion-item .item_inner .text_box ion-row ion-col {\n  padding: 0 5px;\n}\nion-list ion-item .item_inner .text_box ion-row ion-col h2 {\n  margin: 0;\n  font-size: 0.73rem;\n  font-weight: 400;\n  color: var(--text-light2);\n  display: flex;\n  align-content: center;\n  padding: 0;\n  align-content: center;\n}\nion-list ion-item .item_inner .text_box ion-row ion-col h2 strong {\n  color: #000;\n  font-weight: 500;\n}\nion-list ion-item .item_inner .text_box ion-row ion-col h2 ion-icon {\n  color: #dddddd;\n  font-size: 0.8rem;\n}\nion-list ion-item .item_inner .text_box ion-row ion-col h2 ion-icon.active {\n  color: var(--yelow_color);\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1vZi1kb2N0b3JzL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxsaXN0LW9mLWRvY3RvcnNcXGxpc3Qtb2YtZG9jdG9ycy5wYWdlLnNjc3MiLCJzcmMvYXBwL2xpc3Qtb2YtZG9jdG9ycy9saXN0LW9mLWRvY3RvcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksa0JBQUE7QUNEWjtBREdZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQ0RoQjtBREdnQjtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNEcEI7QURRQTtFQUNJLHlDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0xKO0FET0k7RUFDSSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSxrQkFBQTtBQ0xSO0FET1E7RUFDSSxXQUFBO0VBQ0EscUJBQUE7QUNMWjtBRE9ZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTGhCO0FEUVk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ05oQjtBRFFnQjtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ05wQjtBRFNnQjtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ1BwQjtBRFNvQjtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ1B4QjtBRFdnQjtFQUNJLGNBQUE7QUNUcEI7QURXb0I7RUFDSSxjQUFBO0FDVHhCO0FEV3dCO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQ1Q1QjtBRFc0QjtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ1RoQztBRFk0QjtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ1ZoQztBRFlnQztFQUNJLHlCQUFBO0FDVnBDO0FEcUJBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDbEJKO0FEb0JJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNsQlI7QURxQkk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNuQlI7QURzQkk7RUFDSSxnQkFBQTtBQ3BCUjtBRHNCUTtFQUNJLHlCQUFBO0FDcEJaIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1vZi1kb2N0b3JzL2xpc3Qtb2YtZG9jdG9ycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcbiAgICAgICAgLnRpdGxlX2lubmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDZweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyOXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDE1cHggMjBweCAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAgICAgLmltZ19ib3gge1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA2NXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGV4dF9ib3gge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuXHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMC40cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkZGRkZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXllbG93X2NvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lbXB0eS12aWV3IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMTAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5OTtcbiAgdG9wOiA2cHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgc3BhbiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIG1pbi13aWR0aDogMjlweDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAxNnB4IDE1cHggMjBweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pbWdfYm94IHtcbiAgbWluLXdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiA2cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG1pbi1oZWlnaHQ6IDMwLjRweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoMyBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjczcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGlvbi1yb3cge1xuICBtYXJnaW46IDAgLTVweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBpb24tcm93IGlvbi1jb2wgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC43M3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaW9uLXJvdyBpb24tY29sIGgyIHN0cm9uZyB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGlvbi1yb3cgaW9uLWNvbCBoMiBpb24taWNvbiB7XG4gIGNvbG9yOiAjZGRkZGRkO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBpb24tcm93IGlvbi1jb2wgaDIgaW9uLWljb24uYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLXllbG93X2NvbG9yKTtcbn1cblxuLmVtcHR5LXZpZXcge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdG9wOiAxMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMTAlO1xufVxuLmVtcHR5LXZpZXcgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uZW1wdHktdmlldyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5lbXB0eS12aWV3IGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uZW1wdHktdmlldyBidXR0b24gc3BhbiB7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/list-of-doctors/list-of-doctors.page.ts": function srcAppListOfDoctorsListOfDoctorsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListOfDoctorsPage", function () {
      return ListOfDoctorsPage;
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


    var _filter_filter_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../filter/filter.page */
    "./src/app/filter/filter.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var src_models_doctor_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/models/doctor.models */
    "./src/models/doctor.models.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");

    var ListOfDoctorsPage = /*#__PURE__*/function () {
      function ListOfDoctorsPage(router, navCtrl, translate, modalController, uiElementService, apiService) {
        _classCallCheck(this, ListOfDoctorsPage);

        this.router = router;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.modalController = modalController;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.doneAll = false;
        this.pageNo = 1;
        this.isLoading = true;
        this.doctors = new Array();
      }

      _createClass(ListOfDoctorsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.currencyIcon = src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].getSetting("currency_icon");

          if (this.router.getCurrentNavigation().extras.state) {
            this.category = this.router.getCurrentNavigation().extras.state.category;
            this.scope = this.router.getCurrentNavigation().extras.state.scope;
          }

          this.selectedLocationNew = src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].getAddressSelected();
          this.translate.get("loading").subscribe(function (value) {
            _this.uiElementService.presentLoading(value);

            _this.loadDoctors();
          });
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
        key: "loadDoctors",
        value: function loadDoctors() {
          var _this2 = this;

          this.subscriptions.push(this.apiService.getDoctorsWithScopeId(this.category ? this.category.id : null, this.scope, this.selectedLocationNew, this.pageNo).subscribe(function (res) {
            _this2.doctors = _this2.doctors.concat(res.data);
            _this2.doneAll = !res.data || !res.data.length;
            if (_this2.infiniteScrollEvent) _this2.infiniteScrollEvent.target.complete();
            _this2.isLoading = false;

            _this2.uiElementService.dismissLoading();
          }, function (err) {
            console.log("getDoctorsWithCategoryId", err);

            _this2.uiElementService.dismissLoading();

            if (_this2.infiniteScrollEvent) _this2.infiniteScrollEvent.target.complete();
            _this2.isLoading = false;
          }));
        }
      }, {
        key: "doInfiniteDoctors",
        value: function doInfiniteDoctors(event) {
          if (this.doneAll) {
            event.target.complete();
          } else {
            this.infiniteScrollEvent = event;
            this.pageNo = this.pageNo + 1;
            this.loadDoctors();
          }
        }
      }, {
        key: "navMapView",
        value: function navMapView() {
          if (this.doctors && this.doctors.length) {
            var navigationExtras = {
              state: {
                doctors: this.doctors
              }
            };
            this.navCtrl.navigateForward(['./map-view'], navigationExtras);
          }
        }
      }, {
        key: "navDocProfile",
        value: function navDocProfile(doc) {
          window.localStorage.setItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_10__["Constants"].TEMP_DOCTOR, JSON.stringify(doc));
          this.navCtrl.navigateForward(['./doctor-profile']);
        }
      }, {
        key: "bookDoc",
        value: function bookDoc(doc) {
          if (src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].getLoggedInUser() != null) {
            var doctor = new src_models_doctor_models__WEBPACK_IMPORTED_MODULE_8__["Doctor"]();
            doctor.id = doc.id;
            doctor.name = doc.name;
            doctor.availability = doc.availability;
            doctor.image = doc.image;
            doctor.user = doc.user;
            doctor.user_id = doc.user_id;
            doctor.specializations_text = doc.specializations_text;
            doctor.consultancy_fee = doc.consultancy_fee;
            doctor.hospitalClosest = doc.hospitalClosest;
            var navigationExtras = {
              state: {
                doctor: doctor
              }
            };
            this.navCtrl.navigateForward(['./appointment-book'], navigationExtras);
          } else {
            this.alertLogin();
          }
        }
      }, {
        key: "alertLogin",
        value: function alertLogin() {
          var _this3 = this;

          this.translate.get("alert_login_short").subscribe(function (value) {
            return _this3.uiElementService.presentToast(value);
          });
          this.navCtrl.navigateForward(['./sign-in']);
        }
      }, {
        key: "filter",
        value: function filter() {
          this.modalController.create({
            component: _filter_filter_page__WEBPACK_IMPORTED_MODULE_4__["FilterPage"]
          }).then(function (modalElement) {
            modalElement.present();
          });
        }
      }]);

      return ListOfDoctorsPage;
    }();

    ListOfDoctorsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
      }];
    };

    ListOfDoctorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-of-doctors',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list-of-doctors.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list-of-doctors/list-of-doctors.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./list-of-doctors.page.scss */
      "./src/app/list-of-doctors/list-of-doctors.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]])], ListOfDoctorsPage);
    /***/
  }
}]);
//# sourceMappingURL=list-of-doctors-list-of-doctors-module-es5.js.map