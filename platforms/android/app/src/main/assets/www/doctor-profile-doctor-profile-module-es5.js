function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-profile-doctor-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor-profile/doctor-profile.page.html": function node_modulesRawLoaderDistCjsJsSrcAppDoctorProfileDoctorProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <div class=\"title_inner d-flex\">\r\n                <h3 [ngClass]=\"doctor.is_favourite ? 'end active' : 'end'\" (click)=\"toggleFavorite()\">\r\n                    <ion-icon class=\"zmdi zmdi-bookmark-outline\"></ion-icon>\r\n                    <ion-icon class=\"zmdi zmdi-bookmark\"></ion-icon>\r\n                </h3>\r\n            </div>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\" fullscreen>\r\n    <div class=\"banner d-flex\">\r\n        <div class=\"doctor_details\">\r\n            <div *ngIf=\"doctor.user && doctor.user.image_url\" class=\"img_box center_img\">\r\n                <img [src]=\"doctor.user.image_url\" class=\"crop_img\">\r\n            </div>\r\n            <div *ngIf=\"!doctor.user || !doctor.user.image_url\" class=\"img_box center_img\">\r\n                <img src=\"assets/images/empty_dp.png\" class=\"crop_img\">\r\n            </div>\r\n            <h2>{{doctor.name}}</h2>\r\n            <h3>{{doctor.specializations_text}}</h3>\r\n            <p>{{doctor.degrees_text}}</p>\r\n        </div>\r\n        <div class=\"\" style=\"display: block; min-width:20px; height: 100%;\"></div>\r\n        <div class=\"other_details\">\r\n            <div class=\"text_box\">\r\n                <h3> {{'experience' | translate}}</h3>\r\n                <h4> {{doctor.experience_years}} {{'years' | translate}}</h4>\r\n            </div>\r\n\r\n            <div class=\"text_box\">\r\n                <h3> {{'consultancy_fees' | translate}}</h3>\r\n                <h4> {{currencyIcon}}{{doctor.consultancy_fee}}</h4>\r\n            </div>\r\n\r\n            <div class=\"text_box feedback\" (click)=\"navDocrorReviews()\">\r\n                <h3> {{'feedback' | translate}}</h3>\r\n                <h4 class=\"d-flex\">\r\n                    <span>\r\n                        <ion-icon class=\"zmdi zmdi-star ion-text-start\"></ion-icon>\r\n                        {{doctor.ratings}}\r\n                    </span>&nbsp;\r\n                    ({{doctor.ratings_count}})\r\n                    <ion-icon class=\"zmdi zmdi-chevron-right ion-text-end end\"></ion-icon>\r\n                    <!--\r\n                        <ion-icon [ngClass]=\"doctor.ratings>=1 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\r\n                        </ion-icon>\r\n                        <ion-icon [ngClass]=\"doctor.ratings>=2 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\r\n                        </ion-icon>\r\n                        <ion-icon [ngClass]=\"doctor.ratings>=3 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\r\n                        </ion-icon>\r\n                        <ion-icon [ngClass]=\"doctor.ratings>=4 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\r\n                        </ion-icon>\r\n                        <ion-icon [ngClass]=\"doctor.ratings>=5 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\r\n                        </ion-icon>\r\n-->\r\n                </h4>\r\n            </div>\r\n\r\n            <div class=\"text_box availability\">\r\n                <h3> {{'availability' | translate}}</h3>\r\n                <h4 class=\"d-flex\">{{availabilityToday}}\r\n                    <!-- <ion-icon class=\"zmdi zmdi-chevron-right ion-text-end end\"></ion-icon> -->\r\n                </h4>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"tab_content\">\r\n        <!--About section start> -->\r\n        <ion-list lines=\"none\">\r\n            <ion-card>\r\n                <h2>{{'services_at' | translate}}</h2>\r\n                <div class=\"text_box\" *ngFor=\"let hospital of doctor.hospitals\" (click)=\"navHospitalInfo(hospital)\">\r\n                    <h3> {{hospital.name}} </h3>\r\n                    <h4 class=\"d-flex\">{{hospital.address}}\r\n                        <ion-icon class=\"zmdi zmdi-chevron-right ion-text-end end\"></ion-icon>\r\n                    </h4>\r\n                </div>\r\n\r\n                <!-- <div class=\"map_box\">\r\n                    <img [src]=\"doc_map\">\r\n                </div> -->\r\n\r\n                <!-- <h5>+ 1 {{'more' | translate}}</h5> -->\r\n            </ion-card>\r\n            <ion-card class=\"services\">\r\n                <h2>{{'services' | translate}}</h2>\r\n                <div class=\"text_box\" *ngFor=\"let category of doctor.services\">\r\n                    <h3> {{category.title}} </h3>\r\n                </div>\r\n                <!-- <h5>+ 5 {{'more' | translate}}</h5> -->\r\n            </ion-card>\r\n\r\n            <ion-card class=\"services\">\r\n                <h2>{{'specialization' | translate}}</h2>\r\n                <div class=\"text_box\" *ngFor=\"let category of doctor.specializations\">\r\n                    <h3> {{category.title}}</h3>\r\n                </div>\r\n                <!-- <h5>+ 1 {{'more' | translate}}</h5> -->\r\n            </ion-card>\r\n        </ion-list>\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-button *ngIf=\"tabDprofile == 'about'\" size=\"large\" shape=\"full\" class=\"btn\" (click)=\"navBookNow()\">\r\n        <ion-icon slot=\"start\" class=\"zmdi zmdi-calendar-alt\"></ion-icon>\r\n        {{'book_appointment_now' | translate}}\r\n    </ion-button>\r\n\r\n    <!-- <ion-button *ngIf=\"tabDprofile == 'feedback'\" size=\"large\" shape=\"full\" class=\"btn\" (click)=\"navFeedback()\">\r\n\t\t<ion-icon slot=\"start\" class=\"zmdi zmdi-thumb-up-down\"></ion-icon>\r\n\t\t{{'give_feedback' | translate}}\r\n\t</ion-button> -->\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/doctor-profile/doctor-profile-routing.module.ts": function srcAppDoctorProfileDoctorProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorProfilePageRoutingModule", function () {
      return DoctorProfilePageRoutingModule;
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


    var _doctor_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./doctor-profile.page */
    "./src/app/doctor-profile/doctor-profile.page.ts");

    var routes = [{
      path: '',
      component: _doctor_profile_page__WEBPACK_IMPORTED_MODULE_3__["DoctorProfilePage"]
    }];

    var DoctorProfilePageRoutingModule = function DoctorProfilePageRoutingModule() {
      _classCallCheck(this, DoctorProfilePageRoutingModule);
    };

    DoctorProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DoctorProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/doctor-profile/doctor-profile.module.ts": function srcAppDoctorProfileDoctorProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorProfilePageModule", function () {
      return DoctorProfilePageModule;
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


    var _doctor_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./doctor-profile-routing.module */
    "./src/app/doctor-profile/doctor-profile-routing.module.ts");
    /* harmony import */


    var _doctor_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./doctor-profile.page */
    "./src/app/doctor-profile/doctor-profile.page.ts");

    var DoctorProfilePageModule = function DoctorProfilePageModule() {
      _classCallCheck(this, DoctorProfilePageModule);
    };

    DoctorProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _doctor_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["DoctorProfilePageRoutingModule"]],
      declarations: [_doctor_profile_page__WEBPACK_IMPORTED_MODULE_7__["DoctorProfilePage"]]
    })], DoctorProfilePageModule);
    /***/
  },

  /***/
  "./src/app/doctor-profile/doctor-profile.page.scss": function srcAppDoctorProfileDoctorProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title .title_inner {\n  display: flex !important;\n  align-items: center;\n  width: 100%;\n  line-height: 60px;\n  min-height: 60px;\n}\nion-header ion-toolbar ion-title .title_inner h3 {\n  margin: 0;\n  position: relative;\n  overflow: hidden;\n  min-width: 40px;\n  height: 34px;\n}\nion-header ion-toolbar ion-title .title_inner h3 ion-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  min-width: unset;\n  text-align: center;\n  font-size: 1.55rem !important;\n}\nion-header ion-toolbar ion-title .title_inner h3 ion-icon.zmdi-bookmark {\n  display: none;\n}\nion-header ion-toolbar ion-title .title_inner h3.active ion-icon.zmdi-bookmark {\n  display: inline;\n  color: var(--secondary);\n}\nion-header ion-toolbar ion-title .title_inner h3.active ion-icon.zmdi-bookmark-outline {\n  display: none;\n}\n.banner {\n  padding: 18px 18px 30px 18px;\n  background: var(--white);\n  align-items: flex-end;\n}\n.banner .doctor_details {\n  width: 100%;\n  max-width: calc(50% - 0px);\n}\n.banner .doctor_details .img_box {\n  width: 100%;\n  max-width: 150px;\n  height: 150px;\n  border-radius: 11px;\n  margin-bottom: 18px;\n}\n.banner .doctor_details h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.53rem;\n  font-weight: 600;\n  line-height: 31px;\n  padding-bottom: 10px;\n}\n.banner .doctor_details h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n}\n.banner .other_details {\n  width: 100%;\n}\n.banner .other_details .text_box {\n  padding-bottom: 40px;\n}\n.banner .other_details .text_box h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  padding-bottom: 7px;\n}\n.banner .other_details .text_box h4 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 0.95rem;\n  font-weight: 400;\n}\n.banner .other_details .text_box:last-child {\n  padding-bottom: 0;\n}\n.banner .other_details .text_box.feedback h4 {\n  color: var(--text-light2);\n}\n.banner .other_details .text_box.feedback h4 ion-icon {\n  font-size: 1.5rem;\n  width: 15px;\n  min-width: 15px;\n  color: var(--text-light2);\n}\n.banner .other_details .text_box.feedback h4 span {\n  display: flex;\n  align-items: center;\n  color: var(--yelow_color);\n  font-weight: 500;\n  font-size: 0.95rem;\n}\n.banner .other_details .text_box.feedback h4 span ion-icon {\n  min-width: 20px;\n  font-size: 1.1rem;\n  color: var(--yelow_color);\n}\n.banner .other_details .text_box.availability h4 ion-icon {\n  font-size: 1.5rem;\n  width: 15px;\n  min-width: 15px;\n  color: var(--text-light2);\n}\n.banner_details {\n  width: 100%;\n}\n.banner_details ion-segment {\n  border: none !important;\n  background: none !important;\n}\n.banner_details ion-segment ion-segment-button {\n  background: none !important;\n  position: relative;\n  font-size: 0.95rem;\n  font-weight: 400;\n  color: var(--primary) !important;\n  text-transform: unset !important;\n  letter-spacing: 0;\n  --color-checked: var(--transparent) !important;\n  text-align: justify !important;\n  --background-checked: var(--transparent) !important;\n  --border-width: 0 !important;\n  --border-radius: 0 !important;\n  box-shadow: none !important;\n}\n.banner_details ion-segment ion-segment-button ion-label {\n  opacity: 1;\n}\n.banner_details ion-segment ion-segment-button::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  right: 0;\n  left: 0;\n  margin: 0 auto;\n  height: 2.5px;\n  transition: all 0.3s;\n  width: 0;\n  background: var(--primary);\n  border-radius: 0px;\n}\n.banner_details ion-segment ion-segment-button.segment-button-checked::before {\n  width: 100px;\n  transition: all 0.3s;\n}\n.banner_details ion-segment.ios {\n  min-height: 55px;\n}\n.banner_details ion-segment.ios .ion-segment-button {\n  margin: 0 10px;\n  background: none !important;\n}\n.tab_content {\n  padding-top: 8px;\n}\n.tab_content ion-list {\n  padding: 0;\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n}\n.tab_content ion-list ion-card {\n  margin: 0;\n  width: 100%;\n  margin-bottom: 8px;\n  border-radius: 0;\n  padding: 18px;\n  box-shadow: none;\n}\n.tab_content ion-list ion-card h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  padding-bottom: 15px;\n}\n.tab_content ion-list ion-card h5 {\n  margin: 0;\n  color: var(--primary);\n  font-size: 0.95rem;\n  text-transform: lowercase;\n}\n.tab_content ion-list ion-card .text_box {\n  padding-bottom: 15px;\n}\n.tab_content ion-list ion-card .text_box h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1rem;\n  letter-spacing: 0;\n}\n.tab_content ion-list ion-card .text_box h4 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.92rem;\n}\n.tab_content ion-list ion-card .text_box h4 ion-icon {\n  font-size: 1.5rem;\n  width: 15px;\n  min-width: 15px;\n  color: var(--text-light2);\n}\n.tab_content ion-list ion-card.services .text_box {\n  padding-bottom: 7px;\n}\n.tab_content ion-list ion-card.services .text_box h3 {\n  font-size: 0.95rem;\n}\n.tab_content ion-list ion-card.services h5 {\n  padding-top: 8px;\n}\n.empty-view {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: relative;\n  padding: 0 20px;\n  padding-top: 33px;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9yLXByb2ZpbGUvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktY3VzdG9tZXIvc3JjXFxhcHBcXGRvY3Rvci1wcm9maWxlXFxkb2N0b3ItcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2RvY3Rvci1wcm9maWxlL2RvY3Rvci1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHWTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0ZoQjtBRElnQjtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNGcEI7QURJb0I7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDRnhCO0FESXdCO0VBQ0ksYUFBQTtBQ0Y1QjtBRFE0QjtFQUNJLGVBQUE7RUFDQSx1QkFBQTtBQ05oQztBRFM0QjtFQUNJLGFBQUE7QUNQaEM7QURpQkE7RUFDSSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUNkSjtBRGdCSTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtBQ2RSO0FEZ0JRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNkWjtBRGlCUTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDZlo7QURrQlE7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDaEJaO0FEb0JJO0VBQ0ksV0FBQTtBQ2xCUjtBRG9CUTtFQUNJLG9CQUFBO0FDbEJaO0FEb0JZO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNsQmhCO0FEcUJZO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ25CaEI7QURzQlk7RUFDSSxpQkFBQTtBQ3BCaEI7QUR3QmdCO0VBQ0kseUJBQUE7QUN0QnBCO0FEd0JvQjtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ3RCeEI7QUR5Qm9CO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDdkJ4QjtBRHlCd0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ3ZCNUI7QUQrQm9CO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDN0J4QjtBRHFDQTtFQUNJLFdBQUE7QUNsQ0o7QURvQ0k7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0FDbENSO0FEb0NRO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsbURBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUNsQ1o7QURvQ1k7RUFDSSxVQUFBO0FDbENoQjtBRHFDWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxRQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ25DaEI7QUR1Q2dCO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FDckNwQjtBRDBDUTtFQUNJLGdCQUFBO0FDeENaO0FEMENZO0VBQ0ksY0FBQTtFQUNBLDJCQUFBO0FDeENoQjtBRDhDQTtFQUNJLGdCQUFBO0FDM0NKO0FENkNJO0VBQ0ksVUFBQTtFQUNBLHlDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUMzQ1I7QUQ2Q1E7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUMzQ1o7QUQ2Q1k7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQzNDaEI7QUQ4Q1k7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDNUNoQjtBRCtDWTtFQUNJLG9CQUFBO0FDN0NoQjtBRCtDZ0I7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUM3Q3BCO0FEZ0RnQjtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FDOUNwQjtBRGdEb0I7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUM5Q3hCO0FEb0RnQjtFQUNJLG1CQUFBO0FDbERwQjtBRG9Eb0I7RUFDSSxrQkFBQTtBQ2xEeEI7QURzRGdCO0VBQ0ksZ0JBQUE7QUNwRHBCO0FEMkRBO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDeERKO0FEMERJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUN4RFI7QUQyREk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUN6RFI7QUQ0REk7RUFDSSxnQkFBQTtBQzFEUjtBRDREUTtFQUNJLHlCQUFBO0FDMURaIiwiZmlsZSI6InNyYy9hcHAvZG9jdG9yLXByb2ZpbGUvZG9jdG9yLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgLnRpdGxlX2lubmVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNTVyZW0gIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuem1kaS1ib29rbWFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuem1kaS1ib29rbWFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuem1kaS1ib29rbWFyay1vdXRsaW5lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYmFubmVyIHtcclxuICAgIHBhZGRpbmc6IDE4cHggMThweCAzMHB4IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgLmRvY3Rvcl9kZXRhaWxzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gMHB4KTtcclxuXHJcbiAgICAgICAgLmltZ19ib3gge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjUzcmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjk0cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAub3RoZXJfZGV0YWlscyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NHJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5mZWVkYmFjayB7XHJcbiAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teWVsb3dfY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS15ZWxvd19jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYXZhaWxhYmlsaXR5IHtcclxuICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJhbm5lcl9kZXRhaWxzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMi41cHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5pb3Mge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1NXB4O1xyXG5cclxuICAgICAgICAgICAgLmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRhYl9jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcblxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NHJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGV4dF9ib3gge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjkycmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5zZXJ2aWNlcyB7XHJcbiAgICAgICAgICAgICAgICAudGV4dF9ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmVtcHR5LXZpZXcge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzM3B4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLXdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDMgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IHVuc2V0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41NXJlbSAhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIGgzIGlvbi1pY29uLnptZGktYm9va21hcmsge1xuICBkaXNwbGF5OiBub25lO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIGgzLmFjdGl2ZSBpb24taWNvbi56bWRpLWJvb2ttYXJrIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBoMy5hY3RpdmUgaW9uLWljb24uem1kaS1ib29rbWFyay1vdXRsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJhbm5lciB7XG4gIHBhZGRpbmc6IDE4cHggMThweCAzMHB4IDE4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmJhbm5lciAuZG9jdG9yX2RldGFpbHMge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDBweCk7XG59XG4uYmFubmVyIC5kb2N0b3JfZGV0YWlscyAuaW1nX2JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuLmJhbm5lciAuZG9jdG9yX2RldGFpbHMgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXNpemU6IDEuNTNyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5iYW5uZXIgLmRvY3Rvcl9kZXRhaWxzIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuOTRyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYmFubmVyIC5vdGhlcl9kZXRhaWxzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYmFubmVyIC5vdGhlcl9kZXRhaWxzIC50ZXh0X2JveCB7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuLmJhbm5lciAub3RoZXJfZGV0YWlscyAudGV4dF9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtc2l6ZTogMC45NHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG59XG4uYmFubmVyIC5vdGhlcl9kZXRhaWxzIC50ZXh0X2JveCBoNCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYmFubmVyIC5vdGhlcl9kZXRhaWxzIC50ZXh0X2JveDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uYmFubmVyIC5vdGhlcl9kZXRhaWxzIC50ZXh0X2JveC5mZWVkYmFjayBoNCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG59XG4uYmFubmVyIC5vdGhlcl9kZXRhaWxzIC50ZXh0X2JveC5mZWVkYmFjayBoNCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB3aWR0aDogMTVweDtcbiAgbWluLXdpZHRoOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xufVxuLmJhbm5lciAub3RoZXJfZGV0YWlscyAudGV4dF9ib3guZmVlZGJhY2sgaDQgc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS15ZWxvd19jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbn1cbi5iYW5uZXIgLm90aGVyX2RldGFpbHMgLnRleHRfYm94LmZlZWRiYWNrIGg0IHNwYW4gaW9uLWljb24ge1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogdmFyKC0teWVsb3dfY29sb3IpO1xufVxuLmJhbm5lciAub3RoZXJfZGV0YWlscyAudGV4dF9ib3guYXZhaWxhYmlsaXR5IGg0IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHdpZHRoOiAxNXB4O1xuICBtaW4td2lkdGg6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG59XG5cbi5iYW5uZXJfZGV0YWlscyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJhbm5lcl9kZXRhaWxzIGlvbi1zZWdtZW50IHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5iYW5uZXJfZGV0YWlscyBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5iYW5uZXJfZGV0YWlscyBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5iYW5uZXJfZGV0YWlscyBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAyLjVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHdpZHRoOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLmJhbm5lcl9kZXRhaWxzIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkOjpiZWZvcmUge1xuICB3aWR0aDogMTAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmJhbm5lcl9kZXRhaWxzIGlvbi1zZWdtZW50LmlvcyB7XG4gIG1pbi1oZWlnaHQ6IDU1cHg7XG59XG4uYmFubmVyX2RldGFpbHMgaW9uLXNlZ21lbnQuaW9zIC5pb24tc2VnbWVudC1idXR0b24ge1xuICBtYXJnaW46IDAgMTBweDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udGFiX2NvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLnRhYl9jb250ZW50IGlvbi1saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdCBpb24tY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMThweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdCBpb24tY2FyZCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjk0cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4udGFiX2NvbnRlbnQgaW9uLWxpc3QgaW9uLWNhcmQgaDUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuLnRhYl9jb250ZW50IGlvbi1saXN0IGlvbi1jYXJkIC50ZXh0X2JveCB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLnRhYl9jb250ZW50IGlvbi1saXN0IGlvbi1jYXJkIC50ZXh0X2JveCBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4udGFiX2NvbnRlbnQgaW9uLWxpc3QgaW9uLWNhcmQgLnRleHRfYm94IGg0IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC45MnJlbTtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdCBpb24tY2FyZCAudGV4dF9ib3ggaDQgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgd2lkdGg6IDE1cHg7XG4gIG1pbi13aWR0aDogMTVweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdCBpb24tY2FyZC5zZXJ2aWNlcyAudGV4dF9ib3gge1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xufVxuLnRhYl9jb250ZW50IGlvbi1saXN0IGlvbi1jYXJkLnNlcnZpY2VzIC50ZXh0X2JveCBoMyB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbn1cbi50YWJfY29udGVudCBpb24tbGlzdCBpb24tY2FyZC5zZXJ2aWNlcyBoNSB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5lbXB0eS12aWV3IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBwYWRkaW5nLXRvcDogMzNweDtcbn1cbi5lbXB0eS12aWV3IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmVtcHR5LXZpZXcgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW1wdHktdmlldyBidXR0b24ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHNwYW4ge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/doctor-profile/doctor-profile.page.ts": function srcAppDoctorProfileDoctorProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorProfilePage", function () {
      return DoctorProfilePage;
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


    var src_models_doctor_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/models/doctor.models */
    "./src/models/doctor.models.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");

    var DoctorProfilePage = /*#__PURE__*/function () {
      function DoctorProfilePage(navCtrl, uiElementService, config, translate, apiService) {
        _classCallCheck(this, DoctorProfilePage);

        this.navCtrl = navCtrl;
        this.uiElementService = uiElementService;
        this.config = config;
        this.translate = translate;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.isLoading = true;
        this.initialized = false;
        this.favorite_icon = false;
        this.tabDprofile = "about";
        this.reviews = new Array();
      }

      _createClass(DoctorProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.doctor = JSON.parse(window.localStorage.getItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_9__["Constants"].TEMP_DOCTOR));
          var parameters = new URLSearchParams();
          parameters.append("size", "400x200");
          parameters.append("markers", "color:red|" + this.doctor.latitude + "," + this.doctor.longitude);
          parameters.append("zoom", "13");
          parameters.append("key", this.config.googleApiKey);
          this.doc_map = "https://maps.googleapis.com/maps/api/staticmap?" + parameters.toString();
          this.currencyIcon = src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getSetting("currency_icon");

          var _iterator = _createForOfIteratorHelper(this.doctor.availability),
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
            } // this.translate.get("loading").subscribe(value => {
            //   this.uiElementService.presentLoading(value);
            //   this.subscriptions.push(this.apiService.getReviewsDoctor(this.doctor.id, 1).subscribe(res => this.reviewsRes(res), err => this.reviewsErr(err)));
            // });

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          window.localStorage.removeItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_9__["Constants"].TEMP_DOCTOR);
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
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {// if (!this.initialized) {
          //   let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement, null).then(() => {
          //     this.initialized = true;
          //     this.plotMarkers();
          //   }).catch(err => { console.log("maps.init", err); });
          //   mapLoaded.catch(err => { console.log("mapLoaded", err); });
          // }
        }
      }, {
        key: "toggleFavorite",
        value: function toggleFavorite() {
          var _this2 = this;

          if (src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getLoggedInUser() != null) {
            this.translate.get("just_moment").subscribe(function (value) {
              _this2.uiElementService.presentLoading(value);

              _this2.subscriptions.push(_this2.apiService.toggleFavoriteDoctor(_this2.doctor.id).subscribe(function (res) {
                _this2.doctor.is_favourite = !_this2.doctor.is_favourite;

                _this2.uiElementService.dismissLoading();
              }, function (err) {
                console.log("toggleProductFavorite", err);

                _this2.uiElementService.dismissLoading();
              }));
            });
          } else {
            this.alertLogin();
          }
        }
      }, {
        key: "navBookNow",
        value: function navBookNow() {
          if (src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getLoggedInUser() != null) {
            var doctor = new src_models_doctor_models__WEBPACK_IMPORTED_MODULE_2__["Doctor"]();
            doctor.id = this.doctor.id;
            doctor.name = this.doctor.name;
            doctor.availability = this.doctor.availability;
            doctor.image = this.doctor.image;
            doctor.user = this.doctor.user;
            doctor.user_id = this.doctor.user_id;
            doctor.specializations_text = this.doctor.specializations_text;
            doctor.consultancy_fee = this.doctor.consultancy_fee;
            doctor.hospitalClosest = this.doctor.hospitalClosest;
            var navigationExtras = {
              state: {
                doctor: doctor
              }
            };
            this.navCtrl.navigateForward(['./appointment-book'], navigationExtras);
          } else {
            this.alertLogin();
          }
        } // navFeedback() {
        //   let doctor = new Doctor();
        //   doctor.id = this.doctor.id;
        //   doctor.name = this.doctor.name;
        //   doctor.image = this.doctor.image;
        //   doctor.user = this.doctor.user;
        //   doctor.user_id = this.doctor.user_id;
        //   doctor.specializations_text = this.doctor.specializations_text;
        //   let navigationExtras: NavigationExtras = { state: { doctor: doctor } };
        //   this.navCtrl.navigateForward(['./add-feedback'], navigationExtras);
        // }
        // doInfiniteReviews(event) {
        //   if (this.nextUrl == null) {
        //     event.target.complete();
        //   } else {
        //     this.infiniteScrollEvent = event;
        //     this.subscriptions.push(this.apiService.getURL(this.nextUrl).subscribe(res => {
        //       let locale = Helper.getLocale();
        //       for (let review of res.data) review.created_at = Helper.formatTimestampDate(review.created_at, locale);
        //       this.reviewsRes(res);
        //     }, err => this.reviewsErr(err)));
        //   }
        // }
        // private reviewsRes(res: BaseListResponse) {
        //   this.reviews = this.reviews.concat(res.data);
        //   this.nextUrl = res.links.next;
        //   if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
        //   this.isLoading = false;
        //   this.uiElementService.dismissLoading();
        // }
        // private reviewsErr(err) {
        //   console.log("productsErr", err);
        //   this.uiElementService.dismissLoading();
        //   if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
        //   this.isLoading = false;
        // }

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
        key: "navDocrorReviews",
        value: function navDocrorReviews() {
          var navigationExtras = {
            state: {
              doctor: this.doctor
            }
          };
          this.navCtrl.navigateForward(['./doctor-reviews'], navigationExtras);
        }
      }, {
        key: "navHospitalInfo",
        value: function navHospitalInfo(hos) {
          window.localStorage.setItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_9__["Constants"].TEMP_HOSPITAL, JSON.stringify(hos));
          this.navCtrl.navigateForward(['./hospital-info']);
        }
      }]);

      return DoctorProfilePage;
    }();

    DoctorProfilePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_app_config__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"]]
        }]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
      }];
    };

    DoctorProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-doctor-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./doctor-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor-profile/doctor-profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./doctor-profile.page.scss */
      "./src/app/doctor-profile/doctor-profile.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], Object, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]])], DoctorProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=doctor-profile-doctor-profile-module-es5.js.map