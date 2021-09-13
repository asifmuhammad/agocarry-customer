function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-my-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html": function node_modulesRawLoaderDistCjsJsSrcAppMyProfileMyProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'my_profile' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"form\">\r\n\t\t<div class=\"img_container\">\r\n\t\t\t<div *ngIf=\"userMe && userMe.image_url\" class=\"img_box center_img\">\r\n\t\t\t\t<img [src]=\"userMe.image_url\" class=\"crop_img\">\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"!userMe || !userMe.image_url\" class=\"img_box center_img\">\r\n\t\t\t\t<img src=\"assets/images/empty_dp.png\" class=\"crop_img\">\r\n\t\t\t</div>\r\n\t\t\t<ion-icon class=\"zmdi zmdi-camera\" (click)=\"pickImage()\"></ion-icon>\r\n\t\t</div>\r\n\t\t<ion-list lines=\"none\">\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<ion-label position=\"fixed\">{{'user_name' | translate}}</ion-label>\r\n\t\t\t\t<ion-input class=\"ion-text-end\" [(ngModel)]=\"userMe.name\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<ion-label position=\"fixed\">{{'email_address' | translate}}</ion-label>\r\n\t\t\t\t<ion-input class=\"ion-text-end\" [(ngModel)]=\"userMe.email\" disabled readonly></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<ion-label position=\"fixed\">{{'phone_number' | translate}}</ion-label>\r\n\t\t\t\t<ion-input class=\"ion-text-end\" [(ngModel)]=\"userMe.mobile_number\" disabled readonly></ion-input>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"saveMe()\">\r\n\t\t\t\t{{'save' | translate}}\r\n\t\t\t</ion-button>\r\n\t\t</ion-list>\r\n\t</div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/my-profile/my-profile.page.html": function node_modulesRawLoaderDistCjsJsSrcAppShopHourMyProfileMyProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t{{'my_account' | translate}}\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\">\n\t<ion-card>\n\t\t<div class=\"form\">\n\t\t\t<h2>{{'my_profile' | translate}}</h2>\n\t\t\t<ion-list lines=\"none\">\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">{{\"full_name\" | translate}}</ion-label>\n\t\t\t\t\t<ion-input mode=\"md\" type=\"text\" [value]=\"userMe.name\" disabled readonly></ion-input>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">{{\"email_address\" | translate}}</ion-label>\n\t\t\t\t\t<ion-input mode=\"md\" type=\"email\" [value]=\"userMe.email\" disabled readonly></ion-input>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">{{\"phone_number\" | translate}}</ion-label>\n\t\t\t\t\t<ion-input mode=\"md\" type=\"text\" [value]=\"userMe.mobile_number\" disabled readonly></ion-input>\n\t\t\t\t</ion-item>\n\n\t\t\t</ion-list>\n\t\t</div>\n\t</ion-card>\n\t<div class=\"empty-view\" *ngIf=\"!isLoading && (!addresses || !addresses.length)\">\n\t\t<div style=\"text-align:center\">\n\t\t\t<img src=\"assets/images/plc_no_address.png\" alt=\"no offers\" />\n\t\t\t<span style=\"color:#9E9E9E; font-weight:bold;\">\n\t\t\t\t{{'empty_addresses' | translate}}\n\t\t\t</span>\n\t\t</div>\n\t</div>\n\t<ion-card *ngIf=\"addresses && addresses.length\" class=\"my_addresses\">\n\t\t<div class=\"form\">\n\t\t\t<h2>{{'my_addresses' | translate}}</h2>\n\t\t\t<ion-list lines=\"none\">\n\t\t\t\t<ion-item *ngFor=\"let address of addresses\">\n\t\t\t\t\t<div class=\"item_inner\">\n\t\t\t\t\t\t<div class=\"text_box\">\n\t\t\t\t\t\t\t<h3 class=\"d-flex\">{{address?.title}} <ion-icon (click)=\"onAddressSelected(address.id)\"\n\t\t\t\t\t\t\t\t\tclass=\"zmdi zmdi-edit ion-text-end end\"></ion-icon>\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t{{address?.formatted_address}}\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t</div>\n\t</ion-card>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n\t<ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"navAddressNew()\">\n\t\t{{'add_address' | translate}}\n\t</ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile-routing.module.ts": function srcAppMyProfileMyProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePageRoutingModule", function () {
      return MyProfilePageRoutingModule;
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


    var _my_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-profile.page */
    "./src/app/my-profile/my-profile.page.ts");

    var routes = [{
      path: '',
      component: _my_profile_page__WEBPACK_IMPORTED_MODULE_3__["MyProfilePage"]
    }];

    var MyProfilePageRoutingModule = function MyProfilePageRoutingModule() {
      _classCallCheck(this, MyProfilePageRoutingModule);
    };

    MyProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile.module.ts": function srcAppMyProfileMyProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function () {
      return MyProfilePageModule;
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


    var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-profile-routing.module */
    "./src/app/my-profile/my-profile-routing.module.ts");
    /* harmony import */


    var _my_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./my-profile.page */
    "./src/app/my-profile/my-profile.page.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");

    var MyProfilePageModule = function MyProfilePageModule() {
      _classCallCheck(this, MyProfilePageModule);
    };

    MyProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyProfilePageRoutingModule"]],
      providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__["Crop"]],
      declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_7__["MyProfilePage"]]
    })], MyProfilePageModule);
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile.page.scss": function srcAppMyProfileMyProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form {\n  padding-top: 40px;\n}\n.form .img_container {\n  position: relative;\n  width: 113px;\n  margin: 0 auto;\n  margin-bottom: 40px;\n}\n.form .img_container .img_box {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n}\n.form .img_container ion-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  font-size: 1.1rem;\n  text-align: center;\n  border-radius: 50%;\n  background: var(--primary);\n  color: var(--white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcHJvZmlsZS9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1jdXN0b21lci9zcmNcXGFwcFxcbXktcHJvZmlsZVxcbXktcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL215LXByb2ZpbGUvbXktcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxpQkFBQTtBQ0NEO0FEQ0M7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NIO0FERUU7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ0FIIiwiZmlsZSI6InNyYy9hcHAvbXktcHJvZmlsZS9teS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuXHRwYWRkaW5nLXRvcDogNDBweDtcclxuXHJcblx0LmltZ19jb250YWluZXIge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDExM3B4O1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuXHRcdC5pbWdfYm94IHtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHR3aWR0aDogMTAwcHg7XHJcblx0XHRcdGhlaWdodDogMTAwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0aW9uLWljb24ge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0bWFyZ2luOiBhdXRvIDA7XHJcblx0XHRcdHdpZHRoOiAyOHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDI4cHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5cdFx0XHRmb250LXNpemU6IDEuMXJlbTtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG5cdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsIi5mb3JtIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uZm9ybSAuaW1nX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDExM3B4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5mb3JtIC5pbWdfY29udGFpbmVyIC5pbWdfYm94IHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG4uZm9ybSAuaW1nX2NvbnRhaW5lciBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG8gMDtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile.page.ts": function srcAppMyProfileMyProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePage", function () {
      return MyProfilePage;
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


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _services_network_firebase_uploader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/network/firebase-uploader.service */
    "./src/app/services/network/firebase-uploader.service.ts");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/events/my-events.service */
    "./src/app/services/events/my-events.service.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");

    var MyProfilePage = /*#__PURE__*/function () {
      function MyProfilePage(uiElementService, fireUpService, apiService, platform, cropService, translate, alertCtrl, camera, myEvent) {
        _classCallCheck(this, MyProfilePage);

        this.uiElementService = uiElementService;
        this.fireUpService = fireUpService;
        this.apiService = apiService;
        this.platform = platform;
        this.cropService = cropService;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.myEvent = myEvent; // setTimeout(() => {
        //   this.saveMe({ image_url: "https://i.picsum.photos/id/829/200/200.jpg?hmac=UR6WfoHy282eoIXjFzEm86pUeBNLQsX71BUthF-sOvM" });
        // }, 5000);
      }

      _createClass(MyProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userMe = this.apiService.getUserMe();
        }
      }, {
        key: "pickImage",
        value: function pickImage() {
          var _this = this;

          this.translate.get(["image_pic_header", "image_pic_subheader", "image_pic_camera", "image_pic_gallery"]).subscribe(function (values) {
            _this.alertCtrl.create({
              header: values["image_pic_header"],
              message: values["image_pic_subheader"],
              buttons: [{
                text: values["image_pic_camera"],
                handler: function handler() {
                  _this.getImageCamera();
                }
              }, {
                text: values["image_pic_gallery"],
                handler: function handler() {
                  _this.getImageGallery();
                }
              }]
            }).then(function (alert) {
              return alert.present();
            });
          });
        }
      }, {
        key: "getImageGallery",
        value: function getImageGallery() {
          var _this2 = this;

          var component = this;
          this.platform.ready().then(function () {
            if (_this2.platform.is("android")) {
              //{ "mime": "application/pdf" }  // text/plain, image/png, image/jpeg, audio/wav etc
              //(<any>window).fileChooser.open({ "mime": component.uploadType == 1 ? "image/jpeg" : "application/*" }, (uri) => component.resolveUri(uri), (err) => console.log("fileChooser", err)); // with mime filter
              window.fileChooser.open({
                "mime": "image/*"
              }, function (uri) {
                return component.reduceImages(uri);
              }, function (err) {
                return console.log("fileChooser", err);
              }); // with mime filter
            } else {
              var gpr = {
                maximumImagesCount: 1,
                disable_popover: 1
              };
              window.imagePicker.getPictures(gpr).then(function (results) {
                if (results && results[0]) _this2.reduceImages(results[0]);
              }, function (err) {
                console.log("getPictures", JSON.stringify(err));
              });
            }
          });
        }
      }, {
        key: "reduceImages",
        value: function reduceImages(selected_pictures) {
          var _this3 = this;

          // return selected_pictures.reduce((promise: any, item: any) => {
          //   return promise.then((result) => {
          //     return this.cropService.crop(item, { quality: 100 }).then(cropped_image => this.uploadImage(cropped_image));
          //   });
          // }, Promise.resolve());
          this.cropService.crop(selected_pictures, {
            quality: 100
          }).then(function (cropped_image) {
            return _this3.uploadImage(cropped_image);
          });
        }
      }, {
        key: "getImageCamera",
        value: function getImageCamera() {
          var _this4 = this;

          var options = {
            quality: 75,
            destinationType: this.platform.is("android") ? this.camera.DestinationType.FILE_URI : this.camera.DestinationType.NATIVE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          this.camera.getPicture(options).then(function (imageData) {
            return _this4.reduceImages(imageData);
          }, function (err) {
            _this4.translate.get('camera_err').subscribe(function (value) {
              return _this4.uiElementService.presentToast(value, "top");
            });

            console.log("getPicture", JSON.stringify(err));
          });
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(imageUri) {
          var _this5 = this;

          this.translate.get(["uploading_image", "uploading_fail"]).subscribe(function (values) {
            _this5.uiElementService.presentLoading(values["uploading_image"]);

            _this5.fireUpService.resolveUriAndUpload(imageUri).then(function (res) {
              console.log("resolveUriAndUpload", res);

              _this5.uiElementService.dismissLoading();

              _this5.saveMe({
                image_url: String(res)
              });
            }, function (err) {
              console.log("resolveUriAndUpload", err);

              _this5.uiElementService.dismissLoading();

              _this5.uiElementService.presentErrorAlert(values["uploading_fail"]);
            });
          });
        }
      }, {
        key: "saveMe",
        value: function saveMe(updateRequestIn) {
          var _this6 = this;

          var uur = updateRequestIn != null ? updateRequestIn : {
            name: this.userMe.name
          };
          this.translate.get(["saving", "something_wrong"]).subscribe(function (values) {
            _this6.uiElementService.presentLoading(values["saving"]);

            _this6.apiService.updateUser(uur).subscribe(function (res) {
              _this6.uiElementService.dismissLoading();

              src_models_helper_models__WEBPACK_IMPORTED_MODULE_8__["Helper"].setLoggedInUser(res);

              _this6.myEvent.setUserMeData(res);
            }, function (err) {
              console.log("updateUser", err);

              _this6.uiElementService.dismissLoading();

              _this6.uiElementService.presentErrorAlert(values["something_wrong"]);
            });
          });
        }
      }]);

      return MyProfilePage;
    }();

    MyProfilePage.ctorParameters = function () {
      return [{
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_2__["UiElementsService"]
      }, {
        type: _services_network_firebase_uploader_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseUploaderService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__["Crop"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"]
      }, {
        type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_7__["MyEventsService"]
      }];
    };

    MyProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-profile.page.scss */
      "./src/app/my-profile/my-profile.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_2__["UiElementsService"], _services_network_firebase_uploader_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseUploaderService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__["Crop"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_7__["MyEventsService"]])], MyProfilePage);
    /***/
  },

  /***/
  "./src/app/services/shoup-hour-services/common/ui-elements.service.ts": function srcAppServicesShoupHourServicesCommonUiElementsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiElementsService", function () {
      return UiElementsService;
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

    var UiElementsService = /*#__PURE__*/function () {
      function UiElementsService(toastController, loadingController, alertCtrl, translateService) {
        _classCallCheck(this, UiElementsService);

        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
      }

      _createClass(UiElementsService, [{
        key: "presentToast",
        value: function presentToast(body, position, duration) {
          this.toastController.create({
            message: body,
            duration: duration && duration > 0 ? duration : 1000,
            position: position && (position == "top" || position == "middle") ? position : "bottom"
          }).then(function (toast) {
            return toast.present();
          });
        }
      }, {
        key: "presentErrorAlert",
        value: function presentErrorAlert(msg, headingText, actionText) {
          var _this7 = this;

          this.translateService.get(["error", "dismiss"]).subscribe(function (values) {
            _this7.alertCtrl.create({
              header: headingText ? headingText : values["error"],
              message: msg,
              buttons: [actionText ? actionText : values["dismiss"]]
            }).then(function (alert) {
              return alert.present();
            });
          });
        }
      }, {
        key: "presentLoading",
        value: function presentLoading(body) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this8 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.isLoading = true;
                    _context.next = 3;
                    return this.loadingController.create({
                      message: body
                    }).then(function (overlay) {
                      overlay.present().then(function () {
                        if (!_this8.isLoading) {
                          try {
                            overlay.dismiss().then(function () {
                              return console.log('loading aborted');
                            });
                          } catch (error) {
                            console.log(error);
                          }
                        }
                      });
                    });

                  case 3:
                    return _context.abrupt("return", _context.sent);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "dismissLoading",
        value: function dismissLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isLoading = false;
                    _context2.prev = 1;
                    _context2.next = 4;
                    return this.loadingController.dismiss();

                  case 4:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2["catch"](1);
                    console.log(_context2.t0);
                    return _context2.abrupt("return", null);

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[1, 7]]);
          }));
        }
      }]);

      return UiElementsService;
    }();

    UiElementsService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }];
    };

    UiElementsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])], UiElementsService);
    /***/
  },

  /***/
  "./src/app/shop-hour/my-profile/my-profile-routing.module.ts": function srcAppShopHourMyProfileMyProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePageRoutingModule", function () {
      return MyProfilePageRoutingModule;
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


    var _my_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-profile.page */
    "./src/app/shop-hour/my-profile/my-profile.page.ts");

    var routes = [{
      path: '',
      component: _my_profile_page__WEBPACK_IMPORTED_MODULE_3__["MyProfilePage"]
    }];

    var MyProfilePageRoutingModule = function MyProfilePageRoutingModule() {
      _classCallCheck(this, MyProfilePageRoutingModule);
    };

    MyProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/shop-hour/my-profile/my-profile.module.ts": function srcAppShopHourMyProfileMyProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function () {
      return MyProfilePageModule;
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


    var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-profile-routing.module */
    "./src/app/shop-hour/my-profile/my-profile-routing.module.ts");
    /* harmony import */


    var _my_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./my-profile.page */
    "./src/app/shop-hour/my-profile/my-profile.page.ts");

    var MyProfilePageModule = function MyProfilePageModule() {
      _classCallCheck(this, MyProfilePageModule);
    };

    MyProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyProfilePageRoutingModule"]],
      declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_7__["MyProfilePage"]]
    })], MyProfilePageModule);
    /***/
  },

  /***/
  "./src/app/shop-hour/my-profile/my-profile.page.scss": function srcAppShopHourMyProfileMyProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  box-shadow: none;\n  width: 100%;\n  border-radius: 0;\n  margin: 0;\n  background: var(--white);\n  margin-bottom: 10px;\n}\nion-card .form {\n  padding: 29px 0 20px 0px;\n}\nion-card .form h2 {\n  margin: 0;\n  color: var(--text-light);\n  text-transform: uppercase;\n  font-size: 1rem;\n  letter-spacing: 1px;\n  padding-bottom: 10px;\n}\nion-card .form ion-list ion-item {\n  margin-bottom: 16px;\n}\nion-card .form ion-list ion-item ion-label {\n  font-weight: 400;\n  font-size: 1.35rem !important;\n  margin-bottom: 16px !important;\n}\nion-card .form ion-list ion-item ion-input {\n  font-weight: 500 !important;\n  letter-spacing: 0;\n}\nion-card.my_addresses .form h2 {\n  padding-bottom: 22px !important;\n}\nion-card.my_addresses .form ion-list ion-item {\n  border-bottom: none !important;\n}\nion-card.my_addresses .form ion-list ion-item .item_inner {\n  width: 100%;\n}\nion-card.my_addresses .form ion-list ion-item .item_inner .text_box {\n  width: 100%;\n}\nion-card.my_addresses .form ion-list ion-item .item_inner .text_box h3 {\n  margin: 0;\n  font-weight: 600;\n  letter-spacing: 0;\n  font-size: 1.2rem;\n  color: var(--text-black);\n  padding-bottom: 10px;\n}\nion-card.my_addresses .form ion-list ion-item .item_inner .text_box h3 ion-icon {\n  color: var(--text-dark-primary);\n  height: 23px;\n  line-height: normal;\n  font-size: 1.25rem;\n}\nion-card.my_addresses .form ion-list ion-item .item_inner .text_box p {\n  margin: 0;\n  color: var(--text-black);\n  line-height: 23px;\n  letter-spacing: 0.5px;\n  font-size: 1rem;\n  width: calc(100% - 30px);\n}\nion-card:last-child {\n  margin-bottom: 0;\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC1ob3VyL215LXByb2ZpbGUvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktY3VzdG9tZXIvc3JjXFxhcHBcXHNob3AtaG91clxcbXktcHJvZmlsZVxcbXktcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3AtaG91ci9teS1wcm9maWxlL215LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQ0NEO0FEQ0M7RUFDQyx3QkFBQTtBQ0NGO0FEQ0U7RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0g7QURHRztFQUNDLG1CQUFBO0FDREo7QURHSTtFQUNDLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQ0RMO0FESUk7RUFDQywyQkFBQTtFQUNBLGlCQUFBO0FDRkw7QURVRztFQUNDLCtCQUFBO0FDUko7QURZSTtFQUNDLDhCQUFBO0FDVkw7QURZSztFQUNDLFdBQUE7QUNWTjtBRFlNO0VBQ0MsV0FBQTtBQ1ZQO0FEWU87RUFDQyxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtBQ1ZSO0FEWVE7RUFDQywrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDVlQ7QURjTztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUNaUjtBRHFCQztFQUNDLGdCQUFBO0FDbkJGO0FEdUJBO0VBQ0MsWUFBQTtFQUNBLFlBQUE7QUNwQkQ7QUQ0QkM7RUFDQyxZQUFBO0VBQ0EsWUFBQTtBQzFCRjtBRDZCQztFQUNDLGNBQUE7RUFDQSxrQkFBQTtBQzNCRjtBRDhCQztFQUNDLGdCQUFBO0FDNUJGO0FEOEJFO0VBQ0MseUJBQUE7QUM1QkgiLCJmaWxlIjoic3JjL2FwcC9zaG9wLWhvdXIvbXktcHJvZmlsZS9teS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG5cdG1hcmdpbjogMDtcblx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG5cdC5mb3JtIHtcblx0XHRwYWRkaW5nOiAyOXB4IDAgMjBweCAwcHg7XG5cblx0XHRoMiB7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0XHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHRcdH1cblxuXHRcdGlvbi1saXN0IHtcblx0XHRcdGlvbi1pdGVtIHtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblxuXHRcdFx0XHRpb24tbGFiZWwge1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjM1cmVtICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aW9uLWlucHV0IHtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQmLm15X2FkZHJlc3NlcyB7XG5cdFx0LmZvcm0ge1xuXHRcdFx0aDIge1xuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMjJweCAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHRpb24tbGlzdCB7XG5cdFx0XHRcdGlvbi1pdGVtIHtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG5cblx0XHRcdFx0XHQuaXRlbV9pbm5lciB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0XHRcdFx0LnRleHRfYm94IHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdFx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwO1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuXHRcdFx0XHRcdFx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDIzcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjI1cmVtO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHAge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG5cdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIzcHg7XG5cdFx0XHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQmOmxhc3QtY2hpbGQge1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cbn1cblxuLmVtcHR5LXZpZXcge1xuXHR3aWR0aDogMjAwcHg7XG5cdG1hcmdpbjogYXV0bztcblx0Ly8gaGVpZ2h0OiAyMDBweDtcblx0Ly8gdG9wOiAxMCU7XG5cdC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ly8gbGVmdDogMDtcblx0Ly8gcmlnaHQ6IDA7XG5cdC8vIGJvdHRvbTogMTAlO1xuXG5cdGltZyB7XG5cdFx0d2lkdGg6IDEwMHB4O1xuXHRcdG1hcmdpbjogYXV0bztcblx0fVxuXG5cdHNwYW4ge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdGJ1dHRvbiB7XG5cdFx0bWFyZ2luLXRvcDogNTBweDtcblxuXHRcdHNwYW4ge1xuXHRcdFx0ZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcblx0XHR9XG5cdH1cbn1cbiIsImlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWNhcmQgLmZvcm0ge1xuICBwYWRkaW5nOiAyOXB4IDAgMjBweCAwcHg7XG59XG5pb24tY2FyZCAuZm9ybSBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuaW9uLWNhcmQgLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuaW9uLWNhcmQgLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjM1cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbn1cbmlvbi1jYXJkIC5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5pb24tY2FyZC5teV9hZGRyZXNzZXMgLmZvcm0gaDIge1xuICBwYWRkaW5nLWJvdHRvbTogMjJweCAhaW1wb3J0YW50O1xufVxuaW9uLWNhcmQubXlfYWRkcmVzc2VzIC5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuaW9uLWNhcmQubXlfYWRkcmVzc2VzIC5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY2FyZC5teV9hZGRyZXNzZXMgLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY2FyZC5teV9hZGRyZXNzZXMgLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5pb24tY2FyZC5teV9hZGRyZXNzZXMgLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGgzIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyay1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAyM3B4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5pb24tY2FyZC5teV9hZGRyZXNzZXMgLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG59XG5pb24tY2FyZDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmVtcHR5LXZpZXcge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5lbXB0eS12aWV3IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmVtcHR5LXZpZXcgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW1wdHktdmlldyBidXR0b24ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHNwYW4ge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shop-hour/my-profile/my-profile.page.ts": function srcAppShopHourMyProfileMyProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePage", function () {
      return MyProfilePage;
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


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/shoup-hour-services/common/ui-elements.service */
    "./src/app/services/shoup-hour-services/common/ui-elements.service.ts");
    /* harmony import */


    var src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/shoup-hour-services/network/api.service */
    "./src/app/services/shoup-hour-services/network/api.service.ts");
    /* harmony import */


    var src_app_services_shoup_hour_services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/shoup-hour-services/common/ecommerce.service */
    "./src/app/services/shoup-hour-services/common/ecommerce.service.ts");

    var MyProfilePage = /*#__PURE__*/function () {
      function MyProfilePage(navCtrl, translate, uiElementService, apiService, eComService) {
        _classCallCheck(this, MyProfilePage);

        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.eComService = eComService;
        this.subscriptions = new Array();
        this.addresses = new Array();
        this.isLoading = true;
        this.fabAction = false;
        this.addressIdSelected = -1;
        this.userMe = src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__["Helper"].getLoggedInUser();
      }

      _createClass(MyProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.userMe = src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__["Helper"].getLoggedInUser();
          this.loadAddresses();
        }
      }, {
        key: "loadAddresses",
        value: function loadAddresses() {
          var _this9 = this;

          // if (!this.addresses || !this.addresses.length) 
          this.uiElementService.presentLoading(this.translate.instant("loading"));
          this.isLoading = true;
          this.subscriptions.push(this.apiService.getAddresses().subscribe(function (res) {
            _this9.uiElementService.dismissLoading(); //this.addresses = res;


            _this9.isLoading = false;
          }, function (err) {
            console.log("getAddresses", err);

            _this9.uiElementService.dismissLoading();

            _this9.isLoading = false;
          }));
        }
      }, {
        key: "onAddressSelected",
        value: function onAddressSelected(setected_id) {
          if (setected_id) {
            this.addressIdSelected = setected_id;
            var addressSelected = this.getSelectedAddress();

            if (addressSelected != null) {
              var navigationExtras = {
                state: {
                  address: addressSelected
                }
              };
              this.navCtrl.navigateForward(['tabs/main-home/shop-hour/add-address'], navigationExtras);
            }
          }
        }
      }, {
        key: "getSelectedAddress",
        value: function getSelectedAddress() {
          var toReturn = null;

          var _iterator = _createForOfIteratorHelper(this.addresses),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var ad = _step.value;

              if (ad.id == this.addressIdSelected) {
                toReturn = ad;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return toReturn;
        }
      }, {
        key: "navAddressNew",
        value: function navAddressNew() {
          this.navCtrl.navigateForward(['tabs/main-home/shop-hour/add-address']);
        }
      }]);

      return MyProfilePage;
    }();

    MyProfilePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"]
      }, {
        type: src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiServiceShopHour"]
      }, {
        type: src_app_services_shoup_hour_services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_7__["ECommerceService"]
      }];
    };

    MyProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/my-profile/my-profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-profile.page.scss */
      "./src/app/shop-hour/my-profile/my-profile.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiServiceShopHour"], src_app_services_shoup_hour_services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_7__["ECommerceService"]])], MyProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=my-profile-my-profile-module-es5.js.map