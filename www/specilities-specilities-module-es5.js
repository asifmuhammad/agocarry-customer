function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["specilities-specilities-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/specilities/specilities.page.html": function node_modulesRawLoaderDistCjsJsSrcAppSpecilitiesSpecilitiesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <div class=\"toolbar_inner d-flex\">\r\n            <ion-buttons slot=\"start\">\r\n                <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n            </ion-buttons>\r\n            <div class=\"search_box d-flex\">\r\n                <ion-searchbar class=\"ion-no-padding\" searchIcon=\"hide\" debounce=\"1000\"\r\n                    (ionChange)=\"onSearchbarChange($event)\"\r\n                    placeholder=\"{{'doctor_specialities_clinic_hospital' | translate}}\"></ion-searchbar>\r\n                <ion-icon class=\"zmdi zmdi-search ion-text-start end\"></ion-icon>\r\n            </div>\r\n        </div>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n\r\n    <ion-list *ngIf=\"searchHistory && searchHistory.length\" lines=\"none\">\r\n        <h2>{{'recent_search' | translate}}</h2>\r\n        <ion-item *ngFor=\"let sh of searchHistory\" (click)=\"doSearch(sh)\">\r\n            <h3>{{sh}}</h3>\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n\r\n    <div *ngIf=\"!doctors || !doctors.length\" class=\"placeholder_view ion-text-center\">\r\n        <div class=\"img_box\">\r\n            <img src=\"assets/images/placeholder_doctors.png\">\r\n        </div>\r\n        <h2>{{'search_experts_in_field' | translate}}</h2>\r\n    </div>\r\n\r\n    <ion-list class=\"search_results\" *ngIf=\"doctors && doctors.length\" lines=\"none\">\r\n        <ion-item *ngFor=\"let doctor of doctors\" (click)=\"navDocProfile(doctor)\">\r\n            <div class=\"item_inner d-flex\">\r\n                <div *ngIf=\"doctor.user && doctor.user.image_url\" class=\"img_box center_img\">\r\n                    <img [src]=\"doctor.user.image_url\" class=\"crop_img\">\r\n                </div>\r\n\r\n                <div *ngIf=\"!doctor.user || !doctor.user.image_url\" class=\"img_box center_img\">\r\n                    <img src=\"assets/images/empty_dp.png\" class=\"crop_img\">\r\n                </div>\r\n\r\n                <div class=\"text_box\">\r\n                    <h2>{{doctor.name}}</h2>\r\n                    <h3>{{doctor.specializations_text}}\r\n                        <!-- <span>{{'at' | translate}}</span> {{doctor.address}} -->\r\n                    </h3>\r\n                    <ion-row>\r\n                        <ion-col size=\"4\">\r\n                            <h2>\r\n                                {{'exp' | translate}}&nbsp;<strong>{{doctor.experience_years}}\r\n                                    {{'years' | translate}}</strong>\r\n                            </h2>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\">\r\n                            <h2>{{'fees' | translate}}&nbsp;<strong>{{currency_icon}}{{doctor.consultancy_fee}}</strong>\r\n                            </h2>\r\n                        </ion-col>\r\n\r\n                        <ion-col size=\"5\" class=\"d-flex\">\r\n                            <h2 class=\"end\">\r\n                                <ion-icon [ngClass]=\"doctor.ratings>=1 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                </ion-icon>\r\n                                <ion-icon [ngClass]=\"doctor.ratings>=2 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                </ion-icon>\r\n                                <ion-icon [ngClass]=\"doctor.ratings>=3 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                </ion-icon>\r\n                                <ion-icon [ngClass]=\"doctor.ratings>=4 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                </ion-icon>\r\n                                <ion-icon [ngClass]=\"doctor.ratings>=5 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                </ion-icon>\r\n                                &nbsp;\r\n                                ({{doctor.ratings_count}})\r\n                            </h2>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </div>\r\n            </div>\r\n        </ion-item>\r\n    </ion-list>\r\n    <ion-infinite-scroll (ionInfinite)=\"doInfiniteDoctors($event)\">\r\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{'loading' | translate}}\">\r\n        </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/specilities/specilities-routing.module.ts": function srcAppSpecilitiesSpecilitiesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpecilitiesPageRoutingModule", function () {
      return SpecilitiesPageRoutingModule;
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


    var _specilities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./specilities.page */
    "./src/app/specilities/specilities.page.ts");

    var routes = [{
      path: '',
      component: _specilities_page__WEBPACK_IMPORTED_MODULE_3__["SpecilitiesPage"]
    }];

    var SpecilitiesPageRoutingModule = function SpecilitiesPageRoutingModule() {
      _classCallCheck(this, SpecilitiesPageRoutingModule);
    };

    SpecilitiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SpecilitiesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/specilities/specilities.module.ts": function srcAppSpecilitiesSpecilitiesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpecilitiesPageModule", function () {
      return SpecilitiesPageModule;
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


    var _specilities_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./specilities-routing.module */
    "./src/app/specilities/specilities-routing.module.ts");
    /* harmony import */


    var _specilities_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./specilities.page */
    "./src/app/specilities/specilities.page.ts");

    var SpecilitiesPageModule = function SpecilitiesPageModule() {
      _classCallCheck(this, SpecilitiesPageModule);
    };

    SpecilitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _specilities_routing_module__WEBPACK_IMPORTED_MODULE_6__["SpecilitiesPageRoutingModule"]],
      declarations: [_specilities_page__WEBPACK_IMPORTED_MODULE_7__["SpecilitiesPage"]]
    })], SpecilitiesPageModule);
    /***/
  },

  /***/
  "./src/app/specilities/specilities.page.scss": function srcAppSpecilitiesSpecilitiesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  padding: 21px 0 8px 0px;\n  background: var(--white);\n}\nion-header ion-toolbar .toolbar_inner {\n  background: var(--bg-color);\n  margin: 0 auto;\n  width: calc(100% - 30px);\n  border-radius: 7px;\n}\nion-header ion-toolbar .toolbar_inner ion-buttons ion-back-button {\n  color: var(--text-light2) !important;\n}\nion-header .search_box {\n  width: calc(100% - 0px);\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  min-height: 50px;\n  z-index: 99;\n}\nion-header .search_box ion-icon {\n  color: var(--text-light);\n  font-size: 1.4rem;\n  min-width: 35px;\n  height: 35px;\n  line-height: 35px;\n  z-index: 99;\n  position: relative;\n  top: 0px;\n  padding: 0 2px;\n}\nion-header .search_box ion-icon.zmdi-tune {\n  font-size: 1.3rem;\n  left: unset;\n  right: 0;\n  z-index: 99;\n}\nion-header .search_box ion-searchbar {\n  --background: var(--transparent) !important;\n  --color: var(--text-black);\n  font-weight: 500 !important;\n  --placeholder-opacity: 1;\n  --placeholder-color: var(--text-light2) !important;\n  --placeholder-font-weight: 400 !important;\n  --box-shadow: none !important;\n  padding: 0 !important;\n}\nion-list {\n  padding: 0;\n  background: none;\n  margin: 0;\n  padding-top: 27px;\n}\nion-list h2 {\n  font-size: 0.94rem;\n  font-weight: 400;\n  padding: 0px 18px 13px 18px;\n  margin: 0;\n  color: var(--text-light2);\n}\nion-list ion-item {\n  padding: 8px 0;\n  width: calc(100% - 42px);\n  margin: 0 auto;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  --background: none;\n}\nion-list ion-item h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.95rem;\n}\nion-list.search_results {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 8px;\n}\nion-list.search_results ion-item {\n  padding: 16px 15px 20px 15px;\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin-bottom: 8px;\n  width: 100%;\n}\nion-list.search_results ion-item .item_inner {\n  width: 100%;\n  align-items: flex-end;\n}\nion-list.search_results ion-item .item_inner .img_box {\n  min-width: 68px;\n  height: 77px;\n  margin-right: 15px;\n  border-radius: 6px;\n}\nion-list.search_results ion-item .item_inner .text_box {\n  width: 100%;\n  overflow: hidden;\n  padding-top: 6px;\n}\nion-list.search_results ion-item .item_inner .text_box h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding: 0;\n  padding-bottom: 4px;\n  color: var(--text-dark);\n}\nion-list.search_results ion-item .item_inner .text_box h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.8rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  min-height: 30.4px;\n}\nion-list.search_results ion-item .item_inner .text_box h3 span {\n  font-size: 0.73rem;\n  font-weight: 400;\n  color: var(--text-light2);\n}\nion-list.search_results ion-item .item_inner .text_box ion-row {\n  margin: 0 -5px;\n}\nion-list.search_results ion-item .item_inner .text_box ion-row ion-col {\n  padding: 0 5px;\n}\nion-list.search_results ion-item .item_inner .text_box ion-row ion-col h2 {\n  margin: 0;\n  font-size: 0.73rem;\n  font-weight: 400;\n  color: var(--text-light2);\n  display: flex;\n  align-content: center;\n  padding: 0;\n  align-content: center;\n}\nion-list.search_results ion-item .item_inner .text_box ion-row ion-col h2 strong {\n  color: #000;\n  font-weight: 500;\n}\nion-list.search_results ion-item .item_inner .text_box ion-row ion-col h2 ion-icon {\n  color: #dddddd;\n  font-size: 0.8rem;\n}\nion-list.search_results ion-item .item_inner .text_box ion-row ion-col h2 ion-icon.active {\n  color: var(--yelow_color);\n}\n.placeholder_view {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0%;\n  top: 28%;\n  margin: auto;\n  width: calc(100% - 50px);\n  padding: 0 20px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.placeholder_view .img_box {\n  width: 90px;\n  margin: 0 auto;\n  margin-bottom: 12px;\n}\n.placeholder_view h2 {\n  color: var(--text-light2);\n  margin: 0;\n  font-size: 0.95rem;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlY2lsaXRpZXMvRjpcXGZpdmVyXFxCZXJuYXJkXFxEb2N0b3IgV29ybGRcXERvY3RvV29ybGRfQXBwQ29kZSAoVmlkZW8gQ2FsbCktMjAyMTA4MDlUMTAxNDA3Wi0wMDFcXERvY3RvV29ybGRfQXBwQ29kZSAoVmlkZW8gQ2FsbClcXGRvY3Rvd29ybGRfY3VzdG9tZXJcXGRvY3Rvd29ybGRfY3VzdG9tZXIvc3JjXFxhcHBcXHNwZWNpbGl0aWVzXFxzcGVjaWxpdGllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NwZWNpbGl0aWVzL3NwZWNpbGl0aWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7QUNDSjtBREVRO0VBQ0ksMkJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQ0FaO0FER2dCO0VBQ0ksb0NBQUE7QUNEcEI7QURPSTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNMUjtBRE9RO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQ0xaO0FET1k7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0xoQjtBRFNRO0VBQ0ksMkNBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrREFBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQ1BaO0FEWUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNUSjtBRFdJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FDVFI7QURZSTtFQUNJLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNWUjtBRFlRO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNWWjtBRGNJO0VBQ0kseUNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDWlI7QURjUTtFQUNJLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1paO0FEY1k7RUFDSSxXQUFBO0VBQ0EscUJBQUE7QUNaaEI7QURjZ0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNacEI7QURlZ0I7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2JwQjtBRGVvQjtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNieEI7QURnQm9CO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDZHhCO0FEZ0J3QjtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ2Q1QjtBRGtCb0I7RUFDSSxjQUFBO0FDaEJ4QjtBRGtCd0I7RUFDSSxjQUFBO0FDaEI1QjtBRGtCNEI7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FDaEJoQztBRGtCZ0M7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNoQnBDO0FEbUJnQztFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ2pCcEM7QURtQm9DO0VBQ0kseUJBQUE7QUNqQnhDO0FENkJBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQzFCSjtBRDRCSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUMxQlI7QUQ2Qkk7RUFDSSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUMzQlIiLCJmaWxlIjoic3JjL2FwcC9zcGVjaWxpdGllcy9zcGVjaWxpdGllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDIxcHggMCA4cHggMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAudG9vbGJhcl9pbm5lciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG5cclxuICAgICAgICAgICAgaW9uLWJ1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgaW9uLWJhY2stYnV0dG9uIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2hfYm94IHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMnB4O1xyXG5cclxuICAgICAgICAgICAgJi56bWRpLXR1bmUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiB1bnNldDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDI3cHg7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NHJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxOHB4IDEzcHggMThweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQycHgpO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuc2VhcmNoX3Jlc3VsdHMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcblxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweCAxNXB4IDIwcHggMTVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLmltZ19ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNjhweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudGV4dF9ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzAuNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43M3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RkZGRkZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teWVsb3dfY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucGxhY2Vob2xkZXJfdmlldyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgdG9wOiAyOCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG5cclxuICAgIC5pbWdfYm94IHtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG59IiwiaW9uLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIxcHggMCA4cHggMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC50b29sYmFyX2lubmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC50b29sYmFyX2lubmVyIGlvbi1idXR0b25zIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0MikgIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgLnNlYXJjaF9ib3gge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgei1pbmRleDogOTk7XG59XG5pb24taGVhZGVyIC5zZWFyY2hfYm94IGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbWluLXdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB6LWluZGV4OiA5OTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgcGFkZGluZzogMCAycHg7XG59XG5pb24taGVhZGVyIC5zZWFyY2hfYm94IGlvbi1pY29uLnptZGktdHVuZSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBsZWZ0OiB1bnNldDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5O1xufVxuaW9uLWhlYWRlciAuc2VhcmNoX2JveCBpb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0MikgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMjdweDtcbn1cbmlvbi1saXN0IGgyIHtcbiAgZm9udC1zaXplOiAwLjk0cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAwcHggMThweCAxM3B4IDE4cHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogOHB4IDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MnB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG5pb24tbGlzdC5zZWFyY2hfcmVzdWx0cyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5pb24tbGlzdC5zZWFyY2hfcmVzdWx0cyBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDE2cHggMTVweCAyMHB4IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0LnNlYXJjaF9yZXN1bHRzIGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbmlvbi1saXN0LnNlYXJjaF9yZXN1bHRzIGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pbWdfYm94IHtcbiAgbWluLXdpZHRoOiA2OHB4O1xuICBoZWlnaHQ6IDc3cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuaW9uLWxpc3Quc2VhcmNoX3Jlc3VsdHMgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiA2cHg7XG59XG5pb24tbGlzdC5zZWFyY2hfcmVzdWx0cyBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG59XG5pb24tbGlzdC5zZWFyY2hfcmVzdWx0cyBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG1pbi1oZWlnaHQ6IDMwLjRweDtcbn1cbmlvbi1saXN0LnNlYXJjaF9yZXN1bHRzIGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoMyBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjczcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xufVxuaW9uLWxpc3Quc2VhcmNoX3Jlc3VsdHMgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGlvbi1yb3cge1xuICBtYXJnaW46IDAgLTVweDtcbn1cbmlvbi1saXN0LnNlYXJjaF9yZXN1bHRzIGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbmlvbi1saXN0LnNlYXJjaF9yZXN1bHRzIGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBpb24tcm93IGlvbi1jb2wgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC43M3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tbGlzdC5zZWFyY2hfcmVzdWx0cyBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaW9uLXJvdyBpb24tY29sIGgyIHN0cm9uZyB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLWxpc3Quc2VhcmNoX3Jlc3VsdHMgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGlvbi1yb3cgaW9uLWNvbCBoMiBpb24taWNvbiB7XG4gIGNvbG9yOiAjZGRkZGRkO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbmlvbi1saXN0LnNlYXJjaF9yZXN1bHRzIGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBpb24tcm93IGlvbi1jb2wgaDIgaW9uLWljb24uYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLXllbG93X2NvbG9yKTtcbn1cblxuLnBsYWNlaG9sZGVyX3ZpZXcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDAlO1xuICB0b3A6IDI4JTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5wbGFjZWhvbGRlcl92aWV3IC5pbWdfYm94IHtcbiAgd2lkdGg6IDkwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLnBsYWNlaG9sZGVyX3ZpZXcgaDIge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/specilities/specilities.page.ts": function srcAppSpecilitiesSpecilitiesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpecilitiesPage", function () {
      return SpecilitiesPage;
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


    var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
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


    var _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/common/ecommerce.service */
    "./src/app/services/common/ecommerce.service.ts");
    /* harmony import */


    var src_models_doctor_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/models/doctor.models */
    "./src/models/doctor.models.ts");
    /* harmony import */


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");

    var SpecilitiesPage = /*#__PURE__*/function () {
      function SpecilitiesPage(config, navCtrl, translate, uiElementService, apiService, eComService) {
        _classCallCheck(this, SpecilitiesPage);

        this.config = config;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.eComService = eComService;
        this.subscriptions = new Array();
        this.searchHistory = new Array();
        this.doctors = new Array();
        this.isLoading = true;
      }

      _createClass(SpecilitiesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.searchHistory = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__["Helper"].getSearchHistory("doc");
          this.currency_icon = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__["Helper"].getSetting("currency_icon");
          this.selectedLocationNew = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__["Helper"].getAddressSelected();
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
          src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__["Helper"].setSearchHistory(this.searchHistory, "doc");
        }
      }, {
        key: "onSearchbarChange",
        value: function onSearchbarChange(event) {
          var query = "";
          if (event && event.detail && event.detail.value) query = event.detail.value.toLowerCase().trim();
          if (query.length) this.doSearch(query);
        }
      }, {
        key: "doSearch",
        value: function doSearch(queryIn) {
          var _this = this;

          this.isLoading = true;
          this.lastSearchString = queryIn;
          this.doctors = [];
          this.nextUrl = null;
          this.translate.get("loading").subscribe(function (value) {
            _this.uiElementService.presentLoading(value);

            _this.subscriptions.push(_this.apiService.getDoctorsWithQuery(queryIn, 1, _this.selectedLocationNew).subscribe(function (res) {
              return _this.handleRes(res);
            }, function (err) {
              return _this.handleErr(err);
            }));
          });
        }
      }, {
        key: "handleRes",
        value: function handleRes(res) {
          this.doctors = this.doctors.concat(res.data);
          this.nextUrl = res.links.next;
          if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
          this.isLoading = false;
          this.uiElementService.dismissLoading();
          if (res.data && res.data.length) if (!this.searchHistory.includes(this.lastSearchString)) this.searchHistory.unshift(this.lastSearchString);
          if (this.searchHistory.length > 3) this.searchHistory.splice(3, 1);
          src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__["Helper"].setSearchHistory(this.searchHistory, "doc");
        }
      }, {
        key: "handleErr",
        value: function handleErr(err) {
          console.log("handleErr", err);
          this.uiElementService.dismissLoading();
          if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
          this.isLoading = false;
        }
      }, {
        key: "doInfiniteDoctors",
        value: function doInfiniteDoctors(event) {
          var _this2 = this;

          if (this.nextUrl == null) {
            event.target.complete();
          } else {
            this.infiniteScrollEvent = event;
            this.subscriptions.push(this.apiService.getURL(this.nextUrl).subscribe(function (res) {
              if (res && res.data && res.data.length) {
                var _iterator2 = _createForOfIteratorHelper(res.data),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var pro = _step2.value;

                    _this2.apiService.setupDoctor(pro);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }

              _this2.handleRes(res);
            }, function (err) {
              return _this2.handleErr(err);
            }));
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
          if (src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__["Helper"].getLoggedInUser() != null) {
            var doctor = new src_models_doctor_models__WEBPACK_IMPORTED_MODULE_9__["Doctor"]();
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
      }]);

      return SpecilitiesPage;
    }();

    SpecilitiesPage.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"]]
        }]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
      }, {
        type: _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_8__["ECommerceService"]
      }];
    };

    SpecilitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-specilities',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./specilities.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/specilities/specilities.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./specilities.page.scss */
      "./src/app/specilities/specilities.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_8__["ECommerceService"]])], SpecilitiesPage);
    /***/
  }
}]);
//# sourceMappingURL=specilities-specilities-module-es5.js.map