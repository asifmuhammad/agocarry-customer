function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saved-items-saved-items-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/saved-items/saved-items.page.html": function node_modulesRawLoaderDistCjsJsSrcAppSavedItemsSavedItemsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'saved_items' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n    <ion-segment mode=\"md\" [(ngModel)]=\"tab\" lines=\"none\" (ionChange)=\"segmentChanged($event)\">\r\n        <ion-segment-button mode=\"md\" value=\"medicine\">\r\n            <ion-label>\r\n                {{'medicine' | translate}}\r\n            </ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button mode=\"md\" value=\"doctors\">\r\n            <ion-label>\r\n                {{'doctors' | translate}}\r\n            </ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button mode=\"md\" value=\"hospitals\">\r\n            <ion-label>\r\n                {{'hospitals' | translate}}\r\n            </ion-label>\r\n        </ion-segment-button>\r\n    </ion-segment>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n    <div class=\"empty-view\" *ngIf=\"!isLoading && (!toShow || !toShow.length)\">\r\n        <div style=\"text-align:center\">\r\n            <img src=\"assets/images/empty_categories.png\" alt=\"no offers\" />\r\n            <span style=\"color:#9E9E9E; font-weight:bold;\">\r\n                {{'empty_results' | translate}}\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"tab_container\" [ngSwitch]=\"tab\">\r\n\r\n        <!--\t\tMedicine section start-->\r\n        <div class=\"medicine\" *ngSwitchCase=\"'medicine'\">\r\n            <!--\r\n            <ion-row>\r\n                <ion-col size=\"6\" *ngFor=\"let product of products\">\r\n                    <div class=\"item ion-text-center\" (click)=\"navProDetail(product)\">\r\n                        <div class=\"item_content\">\r\n                            <div *ngIf=\"product.prescription_required\" class=\"prescription_required\">\r\n                                <img src=\"assets/images/px.png\">\r\n                            </div>\r\n                            <div class=\"img_box\">\r\n                                <img [src]=\"product.images[0]\">\r\n                            </div>\r\n                            <h2>{{product.title}}</h2>\r\n                        </div>\r\n                        <div class=\"item_footer d-flex\">\r\n                            <h3 class=\"ion-text-center\">{{product.priceToShow}}</h3>\r\n                             <h4 class=\"ion-text-center end\"><span> {{'add_to_cart' | translate}}</span></h4> \r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n-->\r\n            <ion-row>\r\n                <ion-col size=\"6\" *ngFor=\"let product of products\">\r\n                    <div class=\"item ion-text-center\">\r\n                        <div class=\"item_content\" (click)=\"navProDetail(product)\">\r\n                            <div *ngIf=\"product.prescription_required\" class=\"prescription_required\">\r\n                                <img src=\"assets/images/px.png\">\r\n                            </div>\r\n                            <div class=\"img_box\">\r\n                                <img [src]=\"product.images[0]\">\r\n                            </div>\r\n                            <h2>{{product.title}}</h2>\r\n                        </div>\r\n                        <div class=\"item_footer d-flex\">\r\n                            <h3 class=\"ion-text-center\">{{product.priceToShow}}</h3>\r\n                            <h4 class=\"ion-text-center end\">\r\n                                <span (click)=\"addProCart(product)\">\r\n                                    +\r\n                                </span>\r\n                            </h4>\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n\r\n        <!--\t\tMedicine section end-->\r\n\r\n\r\n        <!--\t\tDoctor section start-->\r\n\r\n        <div class=\"doctors_tab\" *ngSwitchCase=\"'doctors'\">\r\n            <ion-list lines=\"none\">\r\n                <ion-item *ngFor=\"let doctor of doctors\" (click)=\"navDocProfile(doctor)\">\r\n                    <div class=\"item_inner d-flex\">\r\n                        <div *ngIf=\"doctor.user && doctor.user.image_url\" class=\"img_box center_img\">\r\n                            <img [src]=\"doctor.user.image_url\" class=\"crop_img\">\r\n                        </div>\r\n\r\n                        <div *ngIf=\"!doctor.user || !doctor.user.image_url\" class=\"img_box center_img\">\r\n                            <img src=\"assets/images/empty_dp.png\" class=\"crop_img\">\r\n                        </div>\r\n\r\n                        <div class=\"text_box\">\r\n                            <h2>{{doctor.name}}</h2>\r\n                            <h3>{{doctor.specializations_text}}\r\n                                <!-- <span>{{'at' | translate}}</span> {{doctor.address}} -->\r\n                            </h3>\r\n                            <ion-row>\r\n                                <ion-col size=\"4\">\r\n                                    <h2>\r\n                                        {{'exp' | translate}}&nbsp;<strong>{{doctor.experience_years}}\r\n                                            {{'years' | translate}}</strong>\r\n                                    </h2>\r\n                                </ion-col>\r\n                                <ion-col size=\"3\">\r\n                                    <h2>{{'fees' | translate}}&nbsp;<strong>{{currencyIcon}}{{doctor.consultancy_fee}}</strong>\r\n                                    </h2>\r\n                                </ion-col>\r\n\r\n                                <ion-col size=\"5\" class=\"d-flex\">\r\n                                    <h2 class=\"end\">\r\n                                        <ion-icon\r\n                                            [ngClass]=\"doctor.ratings>=1 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                        </ion-icon>\r\n                                        <ion-icon\r\n                                            [ngClass]=\"doctor.ratings>=2 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                        </ion-icon>\r\n                                        <ion-icon\r\n                                            [ngClass]=\"doctor.ratings>=3 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                        </ion-icon>\r\n                                        <ion-icon\r\n                                            [ngClass]=\"doctor.ratings>=4 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                        </ion-icon>\r\n                                        <ion-icon\r\n                                            [ngClass]=\"doctor.ratings>=5 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                        </ion-icon>\r\n                                        &nbsp;\r\n                                        ({{doctor.ratings_count}})\r\n                                    </h2>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </div>\r\n                    </div>\r\n                </ion-item>\r\n            </ion-list>\r\n        </div>\r\n        <!--\t\tDoctor section end-->\r\n\r\n\r\n\r\n        <!--\t\tHospitals section start-->\r\n        <div class=\"hospitals_tab\" *ngSwitchCase=\"'hospitals'\">\r\n            <ion-list lines=\"none\">\r\n                <ion-item *ngFor=\"let hospital of hospitals\">\r\n                    <div class=\"item_inner\">\r\n                        <div class=\"item_header\">\r\n                            <ion-row (click)=\"navHospitalInfo(hospital)\">\r\n                                <ion-col size='6'>\r\n                                    <h2>{{hospital.name}}</h2>\r\n                                    <h3>{{hospital.tagline}}</h3>\r\n                                </ion-col>\r\n                                <ion-col size='6'>\r\n                                    <div class=\"hospital_images\" (click)=\"navHospitalInfo(hospital)\">\r\n                                        <div *ngFor=\"let image of hospital.images\" class=\"img_box center_img\">\r\n                                            <img [src]=\"image\" class=\"crop_img\">\r\n                                        </div>\r\n                                    </div>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </div>\r\n\r\n                        <div class=\"item_footer\">\r\n                            <h3 class=\"d-flex\">\r\n                                <span class=\"address\" (click)=\"navHospitalInfo(hospital)\">\r\n                                    <ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n                                    {{hospital.address}}\r\n                                </span>\r\n                                <span class=\"end\" (click)=\"dialHospital(hospital)\">\r\n                                    <ion-icon class=\"zmdi zmdi-phone ion-text-start\"></ion-icon>\r\n                                    {{'call_now' | translate}}\r\n                                </span>\r\n                            </h3>\r\n                        </div>\r\n                    </div>\r\n                </ion-item>\r\n            </ion-list>\r\n        </div>\r\n        <!--\t\tHospitals section end-->\r\n    </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/saved-items/saved-items-routing.module.ts": function srcAppSavedItemsSavedItemsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SavedItemsPageRoutingModule", function () {
      return SavedItemsPageRoutingModule;
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


    var _saved_items_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./saved-items.page */
    "./src/app/saved-items/saved-items.page.ts");

    var routes = [{
      path: '',
      component: _saved_items_page__WEBPACK_IMPORTED_MODULE_3__["SavedItemsPage"]
    }];

    var SavedItemsPageRoutingModule = function SavedItemsPageRoutingModule() {
      _classCallCheck(this, SavedItemsPageRoutingModule);
    };

    SavedItemsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SavedItemsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/saved-items/saved-items.module.ts": function srcAppSavedItemsSavedItemsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SavedItemsPageModule", function () {
      return SavedItemsPageModule;
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


    var _saved_items_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./saved-items-routing.module */
    "./src/app/saved-items/saved-items-routing.module.ts");
    /* harmony import */


    var _saved_items_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./saved-items.page */
    "./src/app/saved-items/saved-items.page.ts");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var SavedItemsPageModule = function SavedItemsPageModule() {
      _classCallCheck(this, SavedItemsPageModule);
    };

    SavedItemsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _saved_items_routing_module__WEBPACK_IMPORTED_MODULE_6__["SavedItemsPageRoutingModule"]],
      providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"]],
      declarations: [_saved_items_page__WEBPACK_IMPORTED_MODULE_7__["SavedItemsPage"]]
    })], SavedItemsPageModule);
    /***/
  },

  /***/
  "./src/app/saved-items/saved-items.page.scss": function srcAppSavedItemsSavedItemsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-segment {\n  border: none !important;\n  background: none !important;\n  margin: 0;\n}\nion-header ion-segment ion-segment-button {\n  background: none !important;\n  position: relative;\n  font-size: 1.1rem;\n  font-weight: 500;\n  color: var(--text-light2) !important;\n  text-transform: unset !important;\n  letter-spacing: 0;\n  --color-checked: var(--primary) !important;\n  text-align: justify !important;\n  --background-checked: var(--transparent) !important;\n  --border-width: 0 !important;\n  --border-radius: 0 !important;\n  box-shadow: none !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\nion-header ion-segment ion-segment-button ion-label {\n  opacity: 1;\n  margin: 15px 0 15px 0;\n}\nion-header ion-segment ion-segment-button.segment-button-checked ion-label {\n  color: var(--primary) !important;\n}\n.medicine .prescription_required {\n  position: absolute;\n  right: 12px;\n  z-index: 99;\n  top: 12px;\n  width: 18px;\n}\n.medicine ion-row {\n  padding: 6px 6px;\n}\n.medicine ion-row ion-col {\n  padding: 7px 8px;\n}\n.medicine ion-row ion-col .item {\n  background: var(--white);\n  border-radius: 10px;\n  overflow: hidden;\n  text-align: unset !important;\n}\n.medicine ion-row ion-col .item .item_content {\n  padding: 10px 13px;\n  position: relative;\n  padding-bottom: 5px;\n}\n.medicine ion-row ion-col .item .item_content .img_box {\n  width: 115px;\n  height: 115px;\n  margin: 0 auto;\n  position: relative;\n  margin-bottom: 12px;\n}\n.medicine ion-row ion-col .item .item_content .img_box img {\n  width: 98px;\n  display: block;\n  margin: auto;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n.medicine ion-row ion-col .item .item_content h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.9rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n.medicine ion-row ion-col .item .item_footer h3 {\n  margin: 0;\n  font-size: 1rem;\n  min-width: 50%;\n  text-align: justify !important;\n  padding-left: 13px;\n  font-weight: 600;\n}\n.medicine ion-row ion-col .item .item_footer h4 {\n  color: var(--white);\n  background: var(--primary);\n  margin: 0;\n  font-size: 1.8rem;\n  height: 34px;\n  line-height: 31px;\n  min-width: 35px;\n  border-radius: 10px 0;\n  font-weight: 500;\n}\n.doctors_tab ion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 8px;\n}\n.doctors_tab ion-list ion-item {\n  padding: 16px 15px 20px 15px;\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin-bottom: 8px;\n}\n.doctors_tab ion-list ion-item .item_inner {\n  width: 100%;\n  align-items: flex-end;\n}\n.doctors_tab ion-list ion-item .item_inner .img_box {\n  min-width: 68px;\n  height: 77px;\n  margin-right: 15px;\n  border-radius: 6px;\n}\n.doctors_tab ion-list ion-item .item_inner .text_box {\n  width: 100%;\n  overflow: hidden;\n  padding-top: 6px;\n}\n.doctors_tab ion-list ion-item .item_inner .text_box h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding-bottom: 4px;\n  color: var(--text-dark);\n}\n.doctors_tab ion-list ion-item .item_inner .text_box h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.8rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  min-height: 30.4px;\n}\n.doctors_tab ion-list ion-item .item_inner .text_box h3 span {\n  font-size: 0.73rem;\n  font-weight: 400;\n  color: var(--text-light2);\n}\n.doctors_tab ion-list ion-item .item_inner .text_box ion-row {\n  margin: 0 -5px;\n}\n.doctors_tab ion-list ion-item .item_inner .text_box ion-row ion-col {\n  padding: 0 5px;\n}\n.doctors_tab ion-list ion-item .item_inner .text_box ion-row ion-col h2 {\n  margin: 0;\n  font-size: 0.73rem;\n  font-weight: 400;\n  color: var(--text-light2);\n  display: flex;\n  align-content: center;\n  padding: 0;\n  align-content: center;\n}\n.doctors_tab ion-list ion-item .item_inner .text_box ion-row ion-col h2 strong {\n  color: #000;\n  font-weight: 500;\n}\n.doctors_tab ion-list ion-item .item_inner .text_box ion-row ion-col h2 ion-icon {\n  color: #dddddd;\n  font-size: 0.8rem;\n}\n.doctors_tab ion-list ion-item .item_inner .text_box ion-row ion-col h2 ion-icon.active {\n  color: var(--yelow_color);\n}\n.hospitals_tab ion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 8px;\n}\n.hospitals_tab ion-list ion-item {\n  padding: 12px 0;\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin-bottom: 8px;\n}\n.hospitals_tab ion-list ion-item .item_inner {\n  width: 100%;\n  overflow: hidden;\n}\n.hospitals_tab ion-list ion-item .item_inner .item_header {\n  padding-left: 16px;\n}\n.hospitals_tab ion-list ion-item .item_inner .item_header ion-row ion-col {\n  padding: 0;\n}\n.hospitals_tab ion-list ion-item .item_inner .item_header ion-row ion-col h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding-bottom: 4px;\n  color: var(--text-dark);\n}\n.hospitals_tab ion-list ion-item .item_inner .item_header ion-row ion-col h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.8rem;\n  overflow: hidden;\n}\n.hospitals_tab ion-list ion-item .item_inner .item_header ion-row ion-col .hospital_images {\n  width: 100%;\n  overflow-x: scroll;\n  white-space: nowrap;\n  height: auto;\n}\n.hospitals_tab ion-list ion-item .item_inner .item_header ion-row ion-col .hospital_images .img_box {\n  width: 72px;\n  height: 42px;\n  margin: 0px 2px;\n  display: inline-block;\n  border-radius: 5px;\n}\n.hospitals_tab ion-list ion-item .item_inner .item_header ion-row ion-col .hospital_images .img_box:first-child {\n  margin-left: 0px;\n}\n.hospitals_tab ion-list ion-item .item_inner .item_header ion-row ion-col .hospital_images .img_box:last-child {\n  margin-right: 16px;\n}\n.hospitals_tab ion-list ion-item .item_inner .item_footer {\n  padding: 10px 16px 0px 16px;\n}\n.hospitals_tab ion-list ion-item .item_inner .item_footer h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.7rem;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n}\n.hospitals_tab ion-list ion-item .item_inner .item_footer h3 span.address {\n  max-width: calc(100% - 100px);\n  display: flex;\n  align-items: center;\n}\n.hospitals_tab ion-list ion-item .item_inner .item_footer h3 span.address ion-icon {\n  min-width: 15px;\n}\n.hospitals_tab ion-list ion-item .item_inner .item_footer h3 span.end {\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: 400;\n}\n.hospitals_tab ion-list ion-item .item_inner .item_footer h3 span.end ion-icon {\n  min-width: 21px;\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2F2ZWQtaXRlbXMvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktY3VzdG9tZXIvc3JjXFxhcHBcXHNhdmVkLWl0ZW1zXFxzYXZlZC1pdGVtcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NhdmVkLWl0ZW1zL3NhdmVkLWl0ZW1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0FDQVI7QURFUTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSw4QkFBQTtFQUNBLG1EQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0FaO0FERVk7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUNBaEI7QURJZ0I7RUFDSSxnQ0FBQTtBQ0ZwQjtBRFVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDUFI7QURVSTtFQUNJLGdCQUFBO0FDUlI7QURVUTtFQUNJLGdCQUFBO0FDUlo7QURVWTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDUmhCO0FEVWdCO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDUnBCO0FEVW9CO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1J4QjtBRFV3QjtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtBQ1I1QjtBRGFvQjtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNYeEI7QURrQm9CO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDaEJ4QjtBRG1Cb0I7RUFDSSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNqQnhCO0FEMEJJO0VBQ0kseUNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDdkJSO0FEeUJRO0VBQ0ksNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0Esa0JBQUE7QUN2Qlo7QUR5Qlk7RUFDSSxXQUFBO0VBQ0EscUJBQUE7QUN2QmhCO0FEeUJnQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ3ZCcEI7QUQwQmdCO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUN4QnBCO0FEMEJvQjtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ3hCeEI7QUQyQm9CO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDekJ4QjtBRDJCd0I7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUN6QjVCO0FENkJvQjtFQUNJLGNBQUE7QUMzQnhCO0FENkJ3QjtFQUNJLGNBQUE7QUMzQjVCO0FENkI0QjtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUMzQmhDO0FENkJnQztFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQzNCcEM7QUQ4QmdDO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDNUJwQztBRDhCb0M7RUFDSSx5QkFBQTtBQzVCeEM7QUR5Q0k7RUFDSSx5Q0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUN0Q1I7QUR3Q1E7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGtCQUFBO0FDdENaO0FEd0NZO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDdENoQjtBRHdDZ0I7RUFDSSxrQkFBQTtBQ3RDcEI7QUR5Q3dCO0VBQ0ksVUFBQTtBQ3ZDNUI7QUR5QzRCO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDdkNoQztBRDBDNEI7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDeENoQztBRDJDNEI7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUN6Q2hDO0FEMkNnQztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUN6Q3BDO0FEMkNvQztFQUNJLGdCQUFBO0FDekN4QztBRDRDb0M7RUFDSSxrQkFBQTtBQzFDeEM7QURrRGdCO0VBQ0ksMkJBQUE7QUNoRHBCO0FEa0RvQjtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ2hEeEI7QURxRDRCO0VBQ0ksNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNuRGhDO0FEcURnQztFQUNJLGVBQUE7QUNuRHBDO0FEdUQ0QjtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ3JEaEM7QUR1RGdDO0VBQ0ksZUFBQTtBQ3JEcEM7QURnRUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUM3REo7QUQrREk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQzdEUjtBRGdFSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQzlEUjtBRGlFSTtFQUNJLGdCQUFBO0FDL0RSO0FEaUVRO0VBQ0kseUJBQUE7QUMvRFoiLCJmaWxlIjoic3JjL2FwcC9zYXZlZC1pdGVtcy9zYXZlZC1pdGVtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0MikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG5cclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMCAxNXB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWVkaWNpbmUge1xyXG4gICAgLnByZXNjcmlwdGlvbl9yZXF1aXJlZCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIHRvcDogMTJweDtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tcm93IHtcclxuICAgICAgICBwYWRkaW5nOiA2cHggNnB4O1xyXG5cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4IDhweDtcclxuXHJcbiAgICAgICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogdW5zZXQgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICAuaXRlbV9jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5pbWdfYm94IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMzLjZweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5pdGVtX2Zvb3RlciB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmRvY3RvcnNfdGFiIHtcclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG5cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMTVweCAyMHB4IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICAgICAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLmltZ19ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNjhweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudGV4dF9ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzAuNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43M3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RkZGRkZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teWVsb3dfY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaG9zcGl0YWxzX3RhYiB7XHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuXHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICAgICAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgICAgIC5pdGVtX2hlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24tcm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ob3NwaXRhbF9pbWFnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltZ19ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5pdGVtX2Zvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNnB4IDBweCAxNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYWRkcmVzcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5lbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmVtcHR5LXZpZXcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAxMCU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXNlZ21lbnQge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG59XG5pb24taGVhZGVyIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKSAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG59XG5pb24taGVhZGVyIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwge1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW46IDE1cHggMCAxNXB4IDA7XG59XG5pb24taGVhZGVyIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG4ubWVkaWNpbmUgLnByZXNjcmlwdGlvbl9yZXF1aXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEycHg7XG4gIHotaW5kZXg6IDk5O1xuICB0b3A6IDEycHg7XG4gIHdpZHRoOiAxOHB4O1xufVxuLm1lZGljaW5lIGlvbi1yb3cge1xuICBwYWRkaW5nOiA2cHggNnB4O1xufVxuLm1lZGljaW5lIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDdweCA4cHg7XG59XG4ubWVkaWNpbmUgaW9uLXJvdyBpb24tY29sIC5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiB1bnNldCAhaW1wb3J0YW50O1xufVxuLm1lZGljaW5lIGlvbi1yb3cgaW9uLWNvbCAuaXRlbSAuaXRlbV9jb250ZW50IHtcbiAgcGFkZGluZzogMTBweCAxM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4ubWVkaWNpbmUgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2NvbnRlbnQgLmltZ19ib3gge1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ubWVkaWNpbmUgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2NvbnRlbnQgLmltZ19ib3ggaW1nIHtcbiAgd2lkdGg6IDk4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiAwO1xufVxuLm1lZGljaW5lIGlvbi1yb3cgaW9uLWNvbCAuaXRlbSAuaXRlbV9jb250ZW50IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG4ubWVkaWNpbmUgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2Zvb3RlciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtaW4td2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWVkaWNpbmUgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2Zvb3RlciBoNCB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBoZWlnaHQ6IDM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmRvY3RvcnNfdGFiIGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5kb2N0b3JzX3RhYiBpb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDE2cHggMTVweCAyMHB4IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmRvY3RvcnNfdGFiIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5kb2N0b3JzX3RhYiBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaW1nX2JveCB7XG4gIG1pbi13aWR0aDogNjhweDtcbiAgaGVpZ2h0OiA3N3B4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5kb2N0b3JzX3RhYiBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cbi5kb2N0b3JzX3RhYiBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG59XG4uZG9jdG9yc190YWIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiAzMC40cHg7XG59XG4uZG9jdG9yc190YWIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGgzIHNwYW4ge1xuICBmb250LXNpemU6IDAuNzNyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG59XG4uZG9jdG9yc190YWIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGlvbi1yb3cge1xuICBtYXJnaW46IDAgLTVweDtcbn1cbi5kb2N0b3JzX3RhYiBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG4uZG9jdG9yc190YWIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGlvbi1yb3cgaW9uLWNvbCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjczcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kb2N0b3JzX3RhYiBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaW9uLXJvdyBpb24tY29sIGgyIHN0cm9uZyB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmRvY3RvcnNfdGFiIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBpb24tcm93IGlvbi1jb2wgaDIgaW9uLWljb24ge1xuICBjb2xvcjogI2RkZGRkZDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4uZG9jdG9yc190YWIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGlvbi1yb3cgaW9uLWNvbCBoMiBpb24taWNvbi5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0teWVsb3dfY29sb3IpO1xufVxuXG4uaG9zcGl0YWxzX3RhYiBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG4uaG9zcGl0YWxzX3RhYiBpb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDEycHggMDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uaG9zcGl0YWxzX3RhYiBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmhvc3BpdGFsc190YWIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1faGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmhvc3BpdGFsc190YWIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1faGVhZGVyIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uaG9zcGl0YWxzX3RhYiBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIgaW9uLXJvdyBpb24tY29sIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xufVxuLmhvc3BpdGFsc190YWIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1faGVhZGVyIGlvbi1yb3cgaW9uLWNvbCBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ob3NwaXRhbHNfdGFiIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2hlYWRlciBpb24tcm93IGlvbi1jb2wgLmhvc3BpdGFsX2ltYWdlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGhlaWdodDogYXV0bztcbn1cbi5ob3NwaXRhbHNfdGFiIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2hlYWRlciBpb24tcm93IGlvbi1jb2wgLmhvc3BpdGFsX2ltYWdlcyAuaW1nX2JveCB7XG4gIHdpZHRoOiA3MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIG1hcmdpbjogMHB4IDJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaG9zcGl0YWxzX3RhYiBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIgaW9uLXJvdyBpb24tY29sIC5ob3NwaXRhbF9pbWFnZXMgLmltZ19ib3g6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLmhvc3BpdGFsc190YWIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1faGVhZGVyIGlvbi1yb3cgaW9uLWNvbCAuaG9zcGl0YWxfaW1hZ2VzIC5pbWdfYm94Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4uaG9zcGl0YWxzX3RhYiBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9mb290ZXIge1xuICBwYWRkaW5nOiAxMHB4IDE2cHggMHB4IDE2cHg7XG59XG4uaG9zcGl0YWxzX3RhYiBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9mb290ZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn1cbi5ob3NwaXRhbHNfdGFiIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2Zvb3RlciBoMyBzcGFuLmFkZHJlc3Mge1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ob3NwaXRhbHNfdGFiIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2Zvb3RlciBoMyBzcGFuLmFkZHJlc3MgaW9uLWljb24ge1xuICBtaW4td2lkdGg6IDE1cHg7XG59XG4uaG9zcGl0YWxzX3RhYiBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9mb290ZXIgaDMgc3Bhbi5lbmQge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5ob3NwaXRhbHNfdGFiIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2Zvb3RlciBoMyBzcGFuLmVuZCBpb24taWNvbiB7XG4gIG1pbi13aWR0aDogMjFweDtcbn1cblxuLmVtcHR5LXZpZXcge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdG9wOiAxMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMTAlO1xufVxuLmVtcHR5LXZpZXcgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uZW1wdHktdmlldyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5lbXB0eS12aWV3IGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uZW1wdHktdmlldyBidXR0b24gc3BhbiB7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/saved-items/saved-items.page.ts": function srcAppSavedItemsSavedItemsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SavedItemsPage", function () {
      return SavedItemsPage;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var src_models_doctor_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/models/doctor.models */
    "./src/models/doctor.models.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");
    /* harmony import */


    var _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/common/ecommerce.service */
    "./src/app/services/common/ecommerce.service.ts");

    var SavedItemsPage = /*#__PURE__*/function () {
      function SavedItemsPage(translate, uiElementService, apiService, callNumber, iab, navCtrl, eComService) {
        var _this = this;

        _classCallCheck(this, SavedItemsPage);

        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.callNumber = callNumber;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.eComService = eComService;
        this.subscriptions = new Array();
        this.isLoading = true;
        this.products = new Array();
        this.doctors = new Array();
        this.hospitals = new Array();
        this.toShow = new Array();
        this.tab = "medicine";
        this.translate.get("loading").subscribe(function (value) {
          _this.uiElementService.presentLoading(value);

          _this.loadProductsSaved();

          _this.loadDoctorsSaved();

          _this.loadHospitalsSaved();
        });
      }

      _createClass(SavedItemsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currencyIcon = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getSetting("currency_icon");
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
        key: "segmentChanged",
        value: function segmentChanged(event) {
          switch (this.tab) {
            case "medicine":
              this.toShow = this.products;
              break;

            case "doctors":
              this.toShow = this.doctors;
              break;

            case "hospitals":
              this.toShow = this.hospitals;
              break;
          }
        }
      }, {
        key: "addProCart",
        value: function addProCart(pro) {
          var _this2 = this;

          var added = this.eComService.addOrIncrementCartItem(this.eComService.getCartItemFromProduct(pro));
          this.translate.get(added ? "added_cart" : "incremented_cart").subscribe(function (value) {
            return _this2.uiElementService.presentToast(value);
          });
        }
      }, {
        key: "loadProductsSaved",
        value: function loadProductsSaved() {
          var _this3 = this;

          this.subscriptions.push(this.apiService.getFavoriteProducts().subscribe(function (res) {
            _this3.products = res;
            _this3.toShow = _this3.products;

            _this3.uiElementService.dismissLoading();

            _this3.isLoading = false;
          }, function (err) {
            console.log("getFavoriteProducts", err);

            _this3.uiElementService.dismissLoading();

            _this3.isLoading = false;
          }));
        }
      }, {
        key: "loadDoctorsSaved",
        value: function loadDoctorsSaved() {
          var _this4 = this;

          this.subscriptions.push(this.apiService.getFavoriteDoctors().subscribe(function (res) {
            return _this4.doctors = res;
          }, function (err) {
            return console.log("getFavoriteDoctors", err);
          }));
        }
      }, {
        key: "loadHospitalsSaved",
        value: function loadHospitalsSaved() {
          var _this5 = this;

          this.subscriptions.push(this.apiService.getFavoriteHospitals().subscribe(function (res) {
            return _this5.hospitals = res;
          }, function (err) {
            return console.log("getFavoriteHospitals", err);
          }));
        }
      }, {
        key: "navProDetail",
        value: function navProDetail(pro) {
          var navigationExtras = {
            queryParams: {
              product_id: pro.id
            }
          };
          this.navCtrl.navigateForward(['./product-info'], navigationExtras);
        }
      }, {
        key: "navDocProfile",
        value: function navDocProfile(doc) {
          window.localStorage.setItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_10__["Constants"].TEMP_DOCTOR, JSON.stringify(doc));
          this.navCtrl.navigateForward(['./doctor-profile']);
        }
      }, {
        key: "dialHospital",
        value: function dialHospital(hospital) {
          var _this6 = this;

          if (hospital.meta && hospital.meta.phone) {
            this.callNumber.callNumber(hospital.meta.phone, false).then(function (res) {
              return console.log('Launched dialer!', res);
            })["catch"](function (err) {
              return console.log('Error launching dialer', err);
            });
          } else {
            this.translate.get("phone_unavailable").subscribe(function (value) {
              return _this6.uiElementService.presentToast(value);
            });
          }
        }
      }, {
        key: "navHospital",
        value: function navHospital(hospital) {
          this.iab.create("http://maps.google.com/maps?daddr=" + hospital.latitude + "," + hospital.longitude, "_system");
        }
      }, {
        key: "navHospitalInfo",
        value: function navHospitalInfo(hos) {
          window.localStorage.setItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_10__["Constants"].TEMP_HOSPITAL, JSON.stringify(hos));
          this.navCtrl.navigateForward(['./hospital-info']);
        }
      }, {
        key: "bookDoc",
        value: function bookDoc(doc) {
          if (src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getLoggedInUser() != null) {
            var doctor = new src_models_doctor_models__WEBPACK_IMPORTED_MODULE_5__["Doctor"]();
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
          var _this7 = this;

          this.translate.get("alert_login_short").subscribe(function (value) {
            return _this7.uiElementService.presentToast(value);
          });
          this.navCtrl.navigateForward(['./sign-in']);
        }
      }]);

      return SavedItemsPage;
    }();

    SavedItemsPage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_3__["UiElementsService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]
      }, {
        type: _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_11__["ECommerceService"]
      }];
    };

    SavedItemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-saved-items',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./saved-items.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/saved-items/saved-items.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./saved-items.page.scss */
      "./src/app/saved-items/saved-items.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_3__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"], _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_11__["ECommerceService"]])], SavedItemsPage);
    /***/
  }
}]);
//# sourceMappingURL=saved-items-saved-items-module-es5.js.map