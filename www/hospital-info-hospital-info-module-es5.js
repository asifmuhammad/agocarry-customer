function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hospital-info-hospital-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hospital-info/hospital-info.page.html": function node_modulesRawLoaderDistCjsJsSrcAppHospitalInfoHospitalInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"bg_transparent\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <div class=\"title_inner d-flex\">\r\n                <h3 class=\"end\">\r\n                    <span [ngClass]=\"hospital.is_favourite ? 'bookmark_icon active' : 'bookmark_icon'\"\r\n                        (click)=\"toggleFavorite()\">\r\n                        <ion-icon class=\"zmdi zmdi-bookmark-outline\"></ion-icon>\r\n                        <ion-icon class=\"zmdi zmdi-bookmark\"></ion-icon>\r\n                    </span>\r\n                </h3>\r\n            </div>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n\r\n    <div class=\"banner\">\r\n        <ion-slides pager=\"true\" loop=\"true\">\r\n            <ion-slide *ngFor=\"let image of hospital.images\">\r\n                <div class=\"img_box center_img\">\r\n                    <img [src]=\"image\" class=\"crop_img\">\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n\r\n        <div class=\"banner_details\">\r\n            <h2>{{hospital.name}}</h2>\r\n            <h3>{{hospital.tagline}}</h3>\r\n        </div>\r\n        <ion-segment mode=\"ios\" [(ngModel)]=\"tabHinfo\" lines=\"none\">\r\n            <ion-segment-button mode=\"ios\" value=\"about\">\r\n                <ion-label>\r\n                    {{'about' | translate}}\r\n                </ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button mode=\"ios\" value=\"doctors\">\r\n                <ion-label>\r\n                    {{'departments' | translate}}\r\n                </ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\" fullscreen>\r\n    <div class=\"tab_content\" [ngSwitch]=\"tabHinfo\">\r\n        <!--About section start> -->\r\n        <ion-list lines=\"none\" *ngSwitchCase=\"'about'\">\r\n            <ion-card class=\"departments\">\r\n                <h2>{{'services' | translate}}</h2>\r\n                <div class=\"text_box\" *ngFor=\"let service of hospital.services\">\r\n                    <h3> {{service.title}}</h3>\r\n                </div>\r\n                <!-- <h5>+ 5 {{'more' | translate}}</h5> -->\r\n            </ion-card>\r\n\r\n\r\n            <!--\r\n            <ion-card class=\"available_timings\">\r\n                <h2>{{'available_timings' | translate}}</h2>\r\n                <ion-row>\r\n                    <ion-col size=\"6\">\r\n                        <h3 class=\"d-flex\">\r\n                            <span>{{hospital.availability[0].days | translate}}</span>\r\n                            <div *ngIf=\"hospital.availability[0].selected\">\r\n                                {{hospital.availability[0].from}} {{'to' | translate}} {{hospital.availability[0].to}}\r\n                            </div>\r\n                            <div *ngIf=\"!hospital.availability[0].selected\">\r\n                                {{'closed' | translate}}\r\n                            </div>\r\n                        </h3>\r\n                        <h3 class=\"d-flex\">\r\n                            <span>{{hospital.availability[1].days | translate}}</span>\r\n                            <div *ngIf=\"hospital.availability[1].selected\">\r\n                                {{hospital.availability[1].from}} {{'to' | translate}} {{hospital.availability[1].to}}\r\n                            </div>\r\n                            <div *ngIf=\"!hospital.availability[1].selected\">\r\n                                {{'closed' | translate}}\r\n                            </div>\r\n                        </h3>\r\n                        <h3 class=\"d-flex\">\r\n                            <span>{{hospital.availability[2].days | translate}}</span>\r\n                            <div *ngIf=\"hospital.availability[2].selected\">\r\n                                {{hospital.availability[2].from}} {{'to' | translate}} {{hospital.availability[2].to}}\r\n                            </div>\r\n                            <div *ngIf=\"!hospital.availability[2].selected\">\r\n                                {{'closed' | translate}}\r\n                            </div>\r\n                        </h3>\r\n                        <h3 class=\"d-flex\">\r\n                            <span>{{hospital.availability[3].days | translate}}</span>\r\n                            <div *ngIf=\"hospital.availability[3].selected\">\r\n                                {{hospital.availability[3].from}} {{'to' | translate}} {{hospital.availability[3].to}}\r\n                            </div>\r\n                            <div *ngIf=\"!hospital.availability[3].selected\">\r\n                                {{'closed' | translate}}\r\n                            </div>\r\n                        </h3>\r\n                    </ion-col>\r\n                    <ion-col size=\"6\">\r\n                        <h3 class=\"d-flex\">\r\n                            <span>{{hospital.availability[4].days | translate}}</span>\r\n                            <div *ngIf=\"hospital.availability[4].selected\">\r\n                                {{hospital.availability[4].from}} {{'to' | translate}} {{hospital.availability[4].to}}\r\n                            </div>\r\n                            <div *ngIf=\"!hospital.availability[4].selected\">\r\n                                {{'closed' | translate}}\r\n                            </div>\r\n                        </h3>\r\n                        <h3 class=\"d-flex\">\r\n                            <span>{{hospital.availability[5].days | translate}}</span>\r\n                            <div *ngIf=\"hospital.availability[5].selected\">\r\n                                {{hospital.availability[5].from}} {{'to' | translate}} {{hospital.availability[5].to}}\r\n                            </div>\r\n                            <div *ngIf=\"!hospital.availability[5].selected\">\r\n                                {{'closed' | translate}}\r\n                            </div>\r\n                        </h3>\r\n\r\n                        <h3 class=\"d-flex\">\r\n                            <span>{{hospital.availability[6].days | translate}}</span>\r\n                            <div *ngIf=\"hospital.availability[6].selected\">\r\n                                {{hospital.availability[6].from}} {{'to' | translate}} {{hospital.availability[6].to}}\r\n                            </div>\r\n                            <div *ngIf=\"!hospital.availability[6].selected\">\r\n                                {{'closed' | translate}}\r\n                            </div>\r\n                        </h3>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-card>\r\n-->\r\n\r\n            <ion-card class=\"address_box\">\r\n                <div class=\"address d-flex\" (click)=\"navHospital()\">\r\n                    <div class=\"\">\r\n                        <h2>{{'address' | translate}}</h2>\r\n                        <h3 class=\"d-flex\">\r\n                            <ion-icon class=\"zmdi zmdi-pin\"></ion-icon>\r\n                            {{hospital.address}}\r\n                        </h3>\r\n                    </div>\r\n                    <h5 class=\"end\">\r\n                        <ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n                    </h5>\r\n                </div>\r\n\r\n                <div class=\"map_box\">\r\n                    <img [src]=\"hos_map\">\r\n                </div>\r\n            </ion-card>\r\n        </ion-list>\r\n        <!--About section end> -->\r\n\r\n\r\n        <!--Doctors section start> -->\r\n        <ion-list class=\"doctors_list\" lines=\"none\" *ngSwitchCase=\"'doctors'\">\r\n            <ion-card *ngFor=\"let sd of servicesDoctorsMap\"\r\n                [ngClass]=\"(currServiceId == sd.service_id) ? 'active' : '' \" (click)=\"showServiceDoctors(sd)\">\r\n                <div class=\"card_header\">\r\n                    <h2 class=\"d-flex\">\r\n                        <span class=\"card_title\">{{sd.service_title}} </span>\r\n                        <ion-icon class=\"zmdi zmdi-chevron-down ion-text-end end\"></ion-icon>\r\n                    </h2>\r\n                </div>\r\n                <div class=\"card_content\">\r\n                    <ion-item *ngFor=\"let doctor of sd.doctors\" (click)=\"navDocProfile(doctor)\">\r\n                        <div class=\"item_inner d-flex\">\r\n                            <div *ngIf=\"doctor.user && doctor.user.image_url\" class=\"img_box center_img\">\r\n                                <img [src]=\"doctor.user.image_url\" class=\"crop_img\">\r\n                            </div>\r\n\r\n                            <div *ngIf=\"!doctor.user || !doctor.user.image_url\" class=\"img_box center_img\">\r\n                                <img src=\"assets/images/empty_dp.png\" class=\"crop_img\">\r\n                            </div>\r\n\r\n\r\n                            <div class=\"text_box\">\r\n                                <h2>{{doctor.name}}</h2>\r\n                                <h3>{{doctor.specializations_text}}</h3>\r\n                                <ion-row>\r\n                                    <ion-col size=\"4\">\r\n                                        <h2>\r\n                                            {{'exp' | translate}}&nbsp;<strong>{{doctor.experience_years}}\r\n                                                {{'years' | translate}}</strong>\r\n                                        </h2>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\">\r\n                                        <h2>{{'fees' | translate}}&nbsp;<strong>{{currencyIcon}}{{doctor.consultancy_fee}}</strong>\r\n                                        </h2>\r\n                                    </ion-col>\r\n\r\n                                    <ion-col size=\"5\" class=\"d-flex\">\r\n                                        <h2 class=\"end\">\r\n                                            <ion-icon\r\n                                                [ngClass]=\"doctor.ratings>=1 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                            </ion-icon>\r\n                                            <ion-icon\r\n                                                [ngClass]=\"doctor.ratings>=2 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                            </ion-icon>\r\n                                            <ion-icon\r\n                                                [ngClass]=\"doctor.ratings>=3 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                            </ion-icon>\r\n                                            <ion-icon\r\n                                                [ngClass]=\"doctor.ratings>=4 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                            </ion-icon>\r\n                                            <ion-icon\r\n                                                [ngClass]=\"doctor.ratings>=5 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                            </ion-icon>\r\n                                            &nbsp;\r\n                                            ({{doctor.ratings_count}})\r\n                                        </h2>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </div>\r\n                        </div>\r\n                    </ion-item>\r\n                </div>\r\n            </ion-card>\r\n        </ion-list>\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-button *ngIf=\"tabHinfo == 'about'\" size=\"large\" shape=\"full\" class=\"btn\" (click)=\"dialHospital()\">\r\n        <ion-icon slot=\"start\" class=\"zmdi zmdi-phone\"></ion-icon>\r\n        {{'call_now' | translate}}\r\n    </ion-button>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/hospital-info/hospital-info-routing.module.ts": function srcAppHospitalInfoHospitalInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HospitalInfoPageRoutingModule", function () {
      return HospitalInfoPageRoutingModule;
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


    var _hospital_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./hospital-info.page */
    "./src/app/hospital-info/hospital-info.page.ts");

    var routes = [{
      path: '',
      component: _hospital_info_page__WEBPACK_IMPORTED_MODULE_3__["HospitalInfoPage"]
    }];

    var HospitalInfoPageRoutingModule = function HospitalInfoPageRoutingModule() {
      _classCallCheck(this, HospitalInfoPageRoutingModule);
    };

    HospitalInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HospitalInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/hospital-info/hospital-info.module.ts": function srcAppHospitalInfoHospitalInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HospitalInfoPageModule", function () {
      return HospitalInfoPageModule;
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


    var _hospital_info_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./hospital-info-routing.module */
    "./src/app/hospital-info/hospital-info-routing.module.ts");
    /* harmony import */


    var _hospital_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./hospital-info.page */
    "./src/app/hospital-info/hospital-info.page.ts");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var HospitalInfoPageModule = function HospitalInfoPageModule() {
      _classCallCheck(this, HospitalInfoPageModule);
    };

    HospitalInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _hospital_info_routing_module__WEBPACK_IMPORTED_MODULE_6__["HospitalInfoPageRoutingModule"]],
      providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"]],
      declarations: [_hospital_info_page__WEBPACK_IMPORTED_MODULE_7__["HospitalInfoPage"]]
    })], HospitalInfoPageModule);
    /***/
  },

  /***/
  "./src/app/hospital-info/hospital-info.page.scss": function srcAppHospitalInfoHospitalInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  background: var(--white);\n}\nion-header ion-toolbar {\n  position: absolute;\n  left: 0;\n  z-index: 999;\n  width: 100%;\n}\nion-header ion-toolbar ion-buttons ion-back-button {\n  color: var(--white) !important;\n}\nion-header ion-toolbar ion-title {\n  top: 0;\n}\nion-header ion-toolbar ion-title .title_inner {\n  min-height: 60px;\n}\nion-header ion-toolbar ion-title .title_inner h3 {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  color: var(--white);\n}\nion-header ion-toolbar ion-title .title_inner h3 span {\n  display: block;\n}\nion-header ion-toolbar ion-title .title_inner h3 span ion-icon {\n  font-size: 1.55rem !important;\n  min-width: 30px;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.bookmark_icon {\n  position: relative;\n  overflow: hidden;\n  min-width: 40px;\n  height: 34px;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.bookmark_icon ion-icon {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  min-width: unset;\n  text-align: center;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.bookmark_icon ion-icon.zmdi-bookmark {\n  display: none;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.bookmark_icon.active ion-icon.zmdi-bookmark {\n  display: inline;\n  color: var(--secondary);\n}\nion-header ion-toolbar ion-title .title_inner h3 span.bookmark_icon.active ion-icon.zmdi-bookmark-outline {\n  display: none;\n}\nion-header .banner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\nion-header .banner ion-slides ion-slide .img_box {\n  width: 100%;\n  height: 250px;\n}\nion-header .banner ion-slides .swiper-pagination {\n  text-align: left !important;\n  bottom: 27px;\n}\nion-header .banner .banner_details {\n  padding: 15px 19px 3px 19px;\n}\nion-header .banner .banner_details h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.45rem;\n  padding-bottom: 11px;\n  font-weight: 700;\n  letter-spacing: 0;\n}\nion-header .banner .banner_details h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n}\nion-header .banner ion-segment {\n  border: none !important;\n  background: none !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0;\n  padding: 0 20px;\n}\nion-header .banner ion-segment ion-segment-button {\n  background: none !important;\n  position: relative;\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--text-light) !important;\n  text-transform: unset !important;\n  letter-spacing: 0;\n  --color-checked: var(--primary) !important;\n  text-align: justify !important;\n  --background-checked: var(--transparent) !important;\n  --border-width: 0 !important;\n  --border-radius: 0 !important;\n  box-shadow: none !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  min-width: 100px;\n}\nion-header .banner ion-segment ion-segment-button ion-label {\n  opacity: 1;\n  width: 100%;\n  margin: 15px 0 8px 0;\n}\nion-header .banner ion-segment ion-segment-button.segment-button-checked ion-label {\n  color: var(--primary) !important;\n}\n.tab_content {\n  padding-top: 8px;\n}\n.tab_content ion-list {\n  padding: 0;\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n}\n.tab_content ion-list ion-card {\n  margin: 0;\n  width: 100%;\n  margin-bottom: 8px;\n  border-radius: 0;\n  padding: 18px;\n  box-shadow: none;\n}\n.tab_content ion-list ion-card h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  padding-bottom: 15px;\n}\n.tab_content ion-list ion-card h3 {\n  margin: 0;\n  color: var(--text-dark);\n}\n.tab_content ion-list ion-card h5 {\n  margin: 0;\n  color: var(--primary);\n  font-size: 0.95rem;\n  text-transform: lowercase;\n}\n.tab_content ion-list ion-card ion-row {\n  margin: 0 -5px;\n}\n.tab_content ion-list ion-card ion-row ion-col {\n  padding: 0 5px;\n  padding-bottom: 19px;\n}\n.tab_content ion-list ion-card.address_box {\n  padding: 0;\n}\n.tab_content ion-list ion-card.address_box .address {\n  padding: 17px 17px 13px 17px;\n  align-items: flex-end;\n}\n.tab_content ion-list ion-card.address_box .address h2 {\n  padding-bottom: 8px;\n}\n.tab_content ion-list ion-card.address_box .address h3 {\n  color: var(--text-light);\n  font-size: 0.9rem;\n  font-weight: 400;\n  display: block;\n  padding-top: 4px;\n}\n.tab_content ion-list ion-card.address_box .address h5 {\n  font-size: 1.4rem;\n}\n.tab_content ion-list ion-card.address_box .map_box {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.tab_content ion-list ion-card.address_box .map_box::after {\n  content: \"\";\n  position: absolute;\n  top: -4px;\n  left: 0;\n  width: 100%;\n  height: 56px;\n  background: linear-gradient(180deg, white 7%, rgba(252, 196, 27, 0) 78%);\n}\n.tab_content ion-list ion-card.address_box .map_box img {\n  display: block;\n}\n.tab_content ion-list ion-card.address_box .map_box ion-icon {\n  position: absolute;\n  z-index: 99;\n  color: var(--primary);\n  font-size: 2.3rem;\n}\n.tab_content ion-list ion-card.departments .text_box {\n  padding-bottom: 7px;\n}\n.tab_content ion-list ion-card.departments .text_box h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.95rem;\n  letter-spacing: 0;\n}\n.tab_content ion-list.doctors_list ion-card {\n  padding: 0;\n  margin-bottom: 5px;\n}\n.tab_content ion-list.doctors_list ion-card .card_header {\n  padding: 17px 17px 13px 17px;\n}\n.tab_content ion-list.doctors_list ion-card .card_header h2 {\n  color: var(--text-dark);\n  font-weight: 500;\n  font-size: 0.95rem;\n  padding: 0;\n}\n.tab_content ion-list.doctors_list ion-card .card_header h2 ion-icon {\n  color: var(--primary);\n  font-size: 1.65rem;\n}\n.tab_content ion-list.doctors_list ion-card .card_content {\n  height: 0px;\n  overflow: hidden;\n}\n.tab_content ion-list.doctors_list ion-card .card_content ion-item {\n  padding: 16px 15px 20px 15px;\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  border-bottom: 2px solid var(--bg-color) !important;\n}\n.tab_content ion-list.doctors_list ion-card .card_content ion-item:last-child {\n  border-bottom: none !important;\n}\n.tab_content ion-list.doctors_list ion-card .card_content ion-item .item_inner {\n  width: 100%;\n  align-items: flex-end;\n}\n.tab_content ion-list.doctors_list ion-card .card_content ion-item .item_inner .img_box {\n  min-width: 68px;\n  height: 77px;\n  margin-right: 15px;\n  border-radius: 6px;\n}\n.tab_content ion-list.doctors_list ion-card .card_content ion-item .item_inner .text_box {\n  width: 100%;\n  overflow: hidden;\n  padding-top: 6px;\n}\n.tab_content ion-list.doctors_list ion-card .card_content ion-item .item_inner .text_box h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding-bottom: 4px;\n  color: var(--text-dark);\n}\n.tab_content ion-list.doctors_list ion-card .card_content ion-item .item_inner .text_box h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.8rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  min-height: 30.4px;\n}\n.tab_content ion-list.doctors_list ion-card .card_content ion-item .item_inner .text_box h3 span {\n  font-size: 0.73rem;\n  font-weight: 400;\n  color: var(--text-light2);\n}\n.tab_content ion-list.doctors_list ion-card .card_content ion-item .item_inner .text_box ion-row {\n  margin: 0 -5px;\n}\n.tab_content ion-list.doctors_list ion-card .card_content ion-item .item_inner .text_box ion-row ion-col {\n  padding: 0 5px;\n}\n.tab_content ion-list.doctors_list ion-card .card_content ion-item .item_inner .text_box ion-row ion-col h2 {\n  margin: 0;\n  font-size: 0.73rem;\n  font-weight: 400;\n  color: var(--text-light2);\n  display: flex;\n  align-content: center;\n  padding: 0;\n  align-content: center;\n}\n.tab_content ion-list.doctors_list ion-card .card_content ion-item .item_inner .text_box ion-row ion-col h2 strong {\n  color: #000;\n  font-weight: 500;\n}\n.tab_content ion-list.doctors_list ion-card .card_content ion-item .item_inner .text_box ion-row ion-col h2 ion-icon {\n  color: #dddddd;\n  font-size: 0.8rem;\n}\n.tab_content ion-list.doctors_list ion-card .card_content ion-item .item_inner .text_box ion-row ion-col h2 ion-icon.active {\n  color: var(--yelow_color);\n}\n.tab_content ion-list.doctors_list ion-card.active .card_header h2 ion-icon {\n  transform: rotate(180deg);\n  text-align: left !important;\n}\n.tab_content ion-list.doctors_list ion-card.active .card_content {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zcGl0YWwtaW5mby9GOlxcZml2ZXJcXEJlcm5hcmRcXERvY3RvciBXb3JsZFxcRG9jdG9Xb3JsZF9BcHBDb2RlIChWaWRlbyBDYWxsKS0yMDIxMDgwOVQxMDE0MDdaLTAwMVxcRG9jdG9Xb3JsZF9BcHBDb2RlIChWaWRlbyBDYWxsKVxcZG9jdG93b3JsZF9jdXN0b21lclxcZG9jdG93b3JsZF9jdXN0b21lci9zcmNcXGFwcFxcaG9zcGl0YWwtaW5mb1xcaG9zcGl0YWwtaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvc3BpdGFsLWluZm8vaG9zcGl0YWwtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NSO0FEQ1E7RUFDSSw4QkFBQTtBQ0NaO0FERVE7RUFDSSxNQUFBO0FDQVo7QURFWTtFQUNJLGdCQUFBO0FDQWhCO0FERWdCO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQXBCO0FERW9CO0VBQ0ksY0FBQTtBQ0F4QjtBREV3QjtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtBQ0E1QjtBREl3QjtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0Y1QjtBREk0QjtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGaEM7QURJZ0M7RUFDSSxhQUFBO0FDRnBDO0FEUW9DO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0FDTnhDO0FEU29DO0VBQ0ksYUFBQTtBQ1B4QztBRGtCSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDaEJSO0FEb0JnQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDbEJwQjtBRHNCWTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtBQ3BCaEI7QUR3QlE7RUFDSSwyQkFBQTtBQ3RCWjtBRHdCWTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDdEJoQjtBRHlCWTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUN2QmhCO0FEMkJRO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDekJaO0FEMkJZO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EsOEJBQUE7RUFDQSxtREFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ3pCaEI7QUQyQmdCO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ3pCcEI7QUQ2Qm9CO0VBQ0ksZ0NBQUE7QUMzQnhCO0FEbUNBO0VBQ0ksZ0JBQUE7QUNoQ0o7QURrQ0k7RUFDSSxVQUFBO0VBQ0EseUNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2hDUjtBRGtDUTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ2hDWjtBRGtDWTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDaENoQjtBRG1DWTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtBQ2pDaEI7QURvQ1k7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDbENoQjtBRHFDWTtFQUNJLGNBQUE7QUNuQ2hCO0FEcUNnQjtFQUNJLGNBQUE7RUFDQSxvQkFBQTtBQ25DcEI7QUR1Q1k7RUFDSSxVQUFBO0FDckNoQjtBRHVDZ0I7RUFDSSw0QkFBQTtFQUNBLHFCQUFBO0FDckNwQjtBRHVDb0I7RUFDSSxtQkFBQTtBQ3JDeEI7QUR3Q29CO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDdEN4QjtBRHlDb0I7RUFDSSxpQkFBQTtBQ3ZDeEI7QUQyQ2dCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN6Q3BCO0FEMkNvQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3RUFBQTtBQ3pDeEI7QUQ0Q29CO0VBQ0ksY0FBQTtBQzFDeEI7QUQ2Q29CO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQzNDeEI7QURpRGdCO0VBQ0ksbUJBQUE7QUMvQ3BCO0FEaURvQjtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUMvQ3hCO0FEdURZO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDckRoQjtBRHVEZ0I7RUFDSSw0QkFBQTtBQ3JEcEI7QUR1RG9CO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ3JEeEI7QUR1RHdCO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ3JENUI7QUQwRGdCO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDeERwQjtBRDBEb0I7RUFDSSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSxtREFBQTtBQ3hEeEI7QUQwRHdCO0VBQ0ksOEJBQUE7QUN4RDVCO0FENER3QjtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQzFENUI7QUQ0RDRCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDMURoQztBRDZENEI7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQzNEaEM7QUQ2RGdDO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDM0RwQztBRDhEZ0M7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUM1RHBDO0FEOERvQztFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQzVEeEM7QURnRWdDO0VBQ0ksY0FBQTtBQzlEcEM7QURnRW9DO0VBQ0ksY0FBQTtBQzlEeEM7QURnRXdDO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQzlENUM7QURnRTRDO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDOURoRDtBRGlFNEM7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUMvRGhEO0FEaUVnRDtFQUNJLHlCQUFBO0FDL0RwRDtBRDZFNEI7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0FDM0VoQztBRGdGb0I7RUFDSSxZQUFBO0FDOUV4QiIsImZpbGUiOiJzcmMvYXBwL2hvc3BpdGFsLWluZm8vaG9zcGl0YWwtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICBpb24tYnV0dG9ucyBpb24tYmFjay1idXR0b24ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tdGl0bGUge1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAgICAgICAudGl0bGVfaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNTVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuYm9va21hcmtfaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuem1kaS1ib29rbWFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuem1kaS1ib29rbWFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJi56bWRpLWJvb2ttYXJrLW91dGxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYmFubmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgaW9uLXNsaWRlcyB7XHJcbiAgICAgICAgICAgIGlvbi1zbGlkZSB7XHJcbiAgICAgICAgICAgICAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMjdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhbm5lcl9kZXRhaWxzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAxOXB4IDNweCAxOXB4O1xyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNDVyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTFweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NHJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuXHJcbiAgICAgICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMCA4cHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRhYl9jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcblxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NHJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgLTVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTlweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5hZGRyZXNzX2JveCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIC5hZGRyZXNzIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxN3B4IDE3cHggMTNweCAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYXBfYm94IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSA3JSwgcmdiYSgyNTIsIDE5NiwgMjcsIDApIDc4JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZGVwYXJ0bWVudHMge1xyXG4gICAgICAgICAgICAgICAgLnRleHRfYm94IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmRvY3RvcnNfbGlzdCB7XHJcbiAgICAgICAgICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhcmRfaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxN3B4IDE3cHggMTNweCAxN3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhcmRfY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDE1cHggMjBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1iZy1jb2xvcikgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaXRlbV9pbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA2OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMC40cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43M3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tcm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIC01cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjczcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGRkZGRkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS15ZWxvd19jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX2hlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmRfY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICB0b3A6IDA7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIge1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIGgzIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBoMyBzcGFuIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjU1cmVtICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBoMyBzcGFuLmJvb2ttYXJrX2ljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi13aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIGgzIHNwYW4uYm9va21hcmtfaWNvbiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi13aWR0aDogdW5zZXQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBoMyBzcGFuLmJvb2ttYXJrX2ljb24gaW9uLWljb24uem1kaS1ib29rbWFyayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDMgc3Bhbi5ib29rbWFya19pY29uLmFjdGl2ZSBpb24taWNvbi56bWRpLWJvb2ttYXJrIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBoMyBzcGFuLmJvb2ttYXJrX2ljb24uYWN0aXZlIGlvbi1pY29uLnptZGktYm9va21hcmstb3V0bGluZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pb24taGVhZGVyIC5iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWhlYWRlciAuYmFubmVyIGlvbi1zbGlkZXMgaW9uLXNsaWRlIC5pbWdfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaW9uLXNsaWRlcyAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMjdweDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuYmFubmVyX2RldGFpbHMge1xuICBwYWRkaW5nOiAxNXB4IDE5cHggM3B4IDE5cHg7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgLmJhbm5lcl9kZXRhaWxzIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1zaXplOiAxLjQ1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgLmJhbm5lcl9kZXRhaWxzIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuOTRyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaW9uLXNlZ21lbnQge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDE1cHggMCA4cHggMDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCBpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cblxuLnRhYl9jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4udGFiX2NvbnRlbnQgaW9uLWxpc3QgaW9uLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4udGFiX2NvbnRlbnQgaW9uLWxpc3QgaW9uLWNhcmQgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtc2l6ZTogMC45NHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLnRhYl9jb250ZW50IGlvbi1saXN0IGlvbi1jYXJkIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdCBpb24tY2FyZCBoNSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG4udGFiX2NvbnRlbnQgaW9uLWxpc3QgaW9uLWNhcmQgaW9uLXJvdyB7XG4gIG1hcmdpbjogMCAtNXB4O1xufVxuLnRhYl9jb250ZW50IGlvbi1saXN0IGlvbi1jYXJkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTlweDtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdCBpb24tY2FyZC5hZGRyZXNzX2JveCB7XG4gIHBhZGRpbmc6IDA7XG59XG4udGFiX2NvbnRlbnQgaW9uLWxpc3QgaW9uLWNhcmQuYWRkcmVzc19ib3ggLmFkZHJlc3Mge1xuICBwYWRkaW5nOiAxN3B4IDE3cHggMTNweCAxN3B4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4udGFiX2NvbnRlbnQgaW9uLWxpc3QgaW9uLWNhcmQuYWRkcmVzc19ib3ggLmFkZHJlc3MgaDIge1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLnRhYl9jb250ZW50IGlvbi1saXN0IGlvbi1jYXJkLmFkZHJlc3NfYm94IC5hZGRyZXNzIGgzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG4udGFiX2NvbnRlbnQgaW9uLWxpc3QgaW9uLWNhcmQuYWRkcmVzc19ib3ggLmFkZHJlc3MgaDUge1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdCBpb24tY2FyZC5hZGRyZXNzX2JveCAubWFwX2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGFiX2NvbnRlbnQgaW9uLWxpc3QgaW9uLWNhcmQuYWRkcmVzc19ib3ggLm1hcF9ib3g6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHdoaXRlIDclLCByZ2JhKDI1MiwgMTk2LCAyNywgMCkgNzglKTtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdCBpb24tY2FyZC5hZGRyZXNzX2JveCAubWFwX2JveCBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi50YWJfY29udGVudCBpb24tbGlzdCBpb24tY2FyZC5hZGRyZXNzX2JveCAubWFwX2JveCBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAyLjNyZW07XG59XG4udGFiX2NvbnRlbnQgaW9uLWxpc3QgaW9uLWNhcmQuZGVwYXJ0bWVudHMgLnRleHRfYm94IHtcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdCBpb24tY2FyZC5kZXBhcnRtZW50cyAudGV4dF9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLnRhYl9jb250ZW50IGlvbi1saXN0LmRvY3RvcnNfbGlzdCBpb24tY2FyZCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdC5kb2N0b3JzX2xpc3QgaW9uLWNhcmQgLmNhcmRfaGVhZGVyIHtcbiAgcGFkZGluZzogMTdweCAxN3B4IDEzcHggMTdweDtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdC5kb2N0b3JzX2xpc3QgaW9uLWNhcmQgLmNhcmRfaGVhZGVyIGgyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgcGFkZGluZzogMDtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdC5kb2N0b3JzX2xpc3QgaW9uLWNhcmQgLmNhcmRfaGVhZGVyIGgyIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEuNjVyZW07XG59XG4udGFiX2NvbnRlbnQgaW9uLWxpc3QuZG9jdG9yc19saXN0IGlvbi1jYXJkIC5jYXJkX2NvbnRlbnQge1xuICBoZWlnaHQ6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdC5kb2N0b3JzX2xpc3QgaW9uLWNhcmQgLmNhcmRfY29udGVudCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDE2cHggMTVweCAyMHB4IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJnLWNvbG9yKSAhaW1wb3J0YW50O1xufVxuLnRhYl9jb250ZW50IGlvbi1saXN0LmRvY3RvcnNfbGlzdCBpb24tY2FyZCAuY2FyZF9jb250ZW50IGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG4udGFiX2NvbnRlbnQgaW9uLWxpc3QuZG9jdG9yc19saXN0IGlvbi1jYXJkIC5jYXJkX2NvbnRlbnQgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLnRhYl9jb250ZW50IGlvbi1saXN0LmRvY3RvcnNfbGlzdCBpb24tY2FyZCAuY2FyZF9jb250ZW50IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pbWdfYm94IHtcbiAgbWluLXdpZHRoOiA2OHB4O1xuICBoZWlnaHQ6IDc3cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLnRhYl9jb250ZW50IGlvbi1saXN0LmRvY3RvcnNfbGlzdCBpb24tY2FyZCAuY2FyZF9jb250ZW50IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuLnRhYl9jb250ZW50IGlvbi1saXN0LmRvY3RvcnNfbGlzdCBpb24tY2FyZCAuY2FyZF9jb250ZW50IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdC5kb2N0b3JzX2xpc3QgaW9uLWNhcmQgLmNhcmRfY29udGVudCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG1pbi1oZWlnaHQ6IDMwLjRweDtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdC5kb2N0b3JzX2xpc3QgaW9uLWNhcmQgLmNhcmRfY29udGVudCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaDMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC43M3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdC5kb2N0b3JzX2xpc3QgaW9uLWNhcmQgLmNhcmRfY29udGVudCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaW9uLXJvdyB7XG4gIG1hcmdpbjogMCAtNXB4O1xufVxuLnRhYl9jb250ZW50IGlvbi1saXN0LmRvY3RvcnNfbGlzdCBpb24tY2FyZCAuY2FyZF9jb250ZW50IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdC5kb2N0b3JzX2xpc3QgaW9uLWNhcmQgLmNhcmRfY29udGVudCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaW9uLXJvdyBpb24tY29sIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuNzNyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuLnRhYl9jb250ZW50IGlvbi1saXN0LmRvY3RvcnNfbGlzdCBpb24tY2FyZCAuY2FyZF9jb250ZW50IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBpb24tcm93IGlvbi1jb2wgaDIgc3Ryb25nIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4udGFiX2NvbnRlbnQgaW9uLWxpc3QuZG9jdG9yc19saXN0IGlvbi1jYXJkIC5jYXJkX2NvbnRlbnQgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGlvbi1yb3cgaW9uLWNvbCBoMiBpb24taWNvbiB7XG4gIGNvbG9yOiAjZGRkZGRkO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdC5kb2N0b3JzX2xpc3QgaW9uLWNhcmQgLmNhcmRfY29udGVudCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaW9uLXJvdyBpb24tY29sIGgyIGlvbi1pY29uLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS15ZWxvd19jb2xvcik7XG59XG4udGFiX2NvbnRlbnQgaW9uLWxpc3QuZG9jdG9yc19saXN0IGlvbi1jYXJkLmFjdGl2ZSAuY2FyZF9oZWFkZXIgaDIgaW9uLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG4udGFiX2NvbnRlbnQgaW9uLWxpc3QuZG9jdG9yc19saXN0IGlvbi1jYXJkLmFjdGl2ZSAuY2FyZF9jb250ZW50IHtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/hospital-info/hospital-info.page.ts": function srcAppHospitalInfoHospitalInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HospitalInfoPage", function () {
      return HospitalInfoPage;
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


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var src_models_doctor_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/models/doctor.models */
    "./src/models/doctor.models.ts");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var HospitalInfoPage = /*#__PURE__*/function () {
      function HospitalInfoPage(navCtrl, uiElementService, iab, config, translate, apiService, callNumber) {
        _classCallCheck(this, HospitalInfoPage);

        this.navCtrl = navCtrl;
        this.uiElementService = uiElementService;
        this.iab = iab;
        this.config = config;
        this.translate = translate;
        this.apiService = apiService;
        this.callNumber = callNumber; // @ViewChild("pleaseConnect", { static: false }) pleaseConnect: ElementRef;
        // @ViewChild("map", { static: false }) mapElement: ElementRef;

        this.subscriptions = new Array();
        this.isLoading = true;
        this.initialized = false;
        this.pageNo = 1;
        this.favorite_icon = false;
        this.tabHinfo = "about";
        this.doctors = new Array();
        this.servicesDoctorsMap = new Array();
        this.currServiceId = -1;
      }

      _createClass(HospitalInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.hospital = JSON.parse(window.localStorage.getItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_10__["Constants"].TEMP_HOSPITAL));
          console.log(this.hospital);
          this.currencyIcon = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getSetting("currency_icon");

          var _iterator = _createForOfIteratorHelper(this.hospital.availability),
              _step;

          try {
            var _loop = function _loop() {
              var avail = _step.value;

              if (avail.days == String(new Date().toLocaleString('en-us', {
                weekday: 'short'
              })).toLocaleLowerCase()) {
                _this.translate.get(avail.selected ? "to" : "closed_today").subscribe(function (value) {
                  return _this.availabilityToday = avail.selected ? avail.from + " " + value + " " + avail.to : value;
                });

                return "break";
              }
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _ret = _loop();

              if (_ret === "break") break;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var parameters = new URLSearchParams();
          parameters.append("size", "400x200");
          parameters.append("markers", "color:red|" + this.hospital.latitude + "," + this.hospital.longitude);
          parameters.append("zoom", "13");
          parameters.append("key", this.config.googleApiKey);
          this.hos_map = "https://maps.googleapis.com/maps/api/staticmap?" + parameters.toString();
          console.log("hosmap", this.hos_map);
          this.translate.get("loading").subscribe(function (value) {
            _this.uiElementService.presentLoading(value);

            _this.loadDoctorsAll();
          });
          window.localStorage.removeItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_10__["Constants"].TEMP_HOSPITAL);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _iterator2 = _createForOfIteratorHelper(this.subscriptions),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var sub = _step2.value;
              sub.unsubscribe();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          this.uiElementService.dismissLoading();
        }
      }, {
        key: "loadDoctorsAll",
        value: function loadDoctorsAll() {
          var _this2 = this;

          this.subscriptions.push(this.apiService.getDoctorsWithHospitalId(this.hospital.id, this.pageNo).subscribe(function (res) {
            _this2.doctors = _this2.doctors.concat(res.data);

            if (res.data && res.data.length > 0) {
              _this2.pageNo = _this2.pageNo + 1;

              _this2.loadDoctorsAll();
            } else {
              _this2.uiElementService.dismissLoading();

              _this2.setupDoctors();
            }
          }, function (err) {
            console.log("getDoctorsWithHospitalId", err);

            _this2.uiElementService.dismissLoading();
          }));
        }
      }, {
        key: "toggleFavorite",
        value: function toggleFavorite() {
          var _this3 = this;

          if (src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getLoggedInUser() != null) {
            this.translate.get("just_moment").subscribe(function (value) {
              _this3.uiElementService.presentLoading(value);

              _this3.subscriptions.push(_this3.apiService.toggleFavoriteHospital(_this3.hospital.id).subscribe(function (res) {
                _this3.hospital.is_favourite = !_this3.hospital.is_favourite;

                _this3.uiElementService.dismissLoading();
              }, function (err) {
                console.log("toggleProductFavorite", err);

                _this3.uiElementService.dismissLoading();
              }));
            });
          } else {
            this.alertLogin();
          }
        }
      }, {
        key: "navDocProfile",
        value: function navDocProfile(doc) {
          window.localStorage.setItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_10__["Constants"].TEMP_DOCTOR, JSON.stringify(doc));
          this.navCtrl.navigateForward(['./doctor-profile']);
        }
      }, {
        key: "navHospital",
        value: function navHospital() {
          this.iab.create("http://maps.google.com/maps?daddr=" + this.hospital.latitude + "," + this.hospital.longitude, "_system");
        }
      }, {
        key: "bookDoc",
        value: function bookDoc(doc) {
          if (src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getLoggedInUser() != null) {
            var doctor = new src_models_doctor_models__WEBPACK_IMPORTED_MODULE_7__["Doctor"]();
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
        key: "dialHospital",
        value: function dialHospital() {
          var _this4 = this;

          if (this.hospital.meta && this.hospital.meta.phone) {
            this.callNumber.callNumber(this.hospital.meta.phone, false).then(function (res) {
              return console.log('Launched dialer!', res);
            })["catch"](function (err) {
              return console.log('Error launching dialer', err);
            });
          } else {
            this.translate.get("phone_unavailable").subscribe(function (value) {
              return _this4.uiElementService.presentToast(value);
            });
          }
        }
      }, {
        key: "showServiceDoctors",
        value: function showServiceDoctors(sd) {
          this.currServiceId = this.currServiceId == sd.service_id ? -1 : sd.service_id;
        }
      }, {
        key: "setupDoctors",
        value: function setupDoctors() {
          var _iterator3 = _createForOfIteratorHelper(this.hospital.services),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var service = _step3.value;
              var sDocs = new Array();

              var _iterator4 = _createForOfIteratorHelper(this.doctors),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var doc = _step4.value;

                  var _iterator5 = _createForOfIteratorHelper(doc.services),
                      _step5;

                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var docService = _step5.value;

                      if (service.id == docService.id) {
                        sDocs.push(doc);
                        break;
                      }
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              if (sDocs.length > 0) this.servicesDoctorsMap.push({
                service_id: service.id,
                service_title: service.title,
                doctors: sDocs
              });
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
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

      return HospitalInfoPage;
    }();

    HospitalInfoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_3__["UiElementsService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_app_config__WEBPACK_IMPORTED_MODULE_9__["APP_CONFIG"]]
        }]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"]
      }];
    };

    HospitalInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hospital-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./hospital-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hospital-info/hospital-info.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./hospital-info.page.scss */
      "./src/app/hospital-info/hospital-info.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_9__["APP_CONFIG"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_3__["UiElementsService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"], Object, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"]])], HospitalInfoPage);
    /***/
  }
}]);
//# sourceMappingURL=hospital-info-hospital-info-module-es5.js.map