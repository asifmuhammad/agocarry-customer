function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html": function node_modulesRawLoaderDistCjsJsSrcAppAccountAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>{{'account' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n    <div class=\"profile d-flex\" (click)=\"viewProfile()\">\r\n        <div *ngIf=\"apiService.getUserMe() && apiService.getUserMe().image_url\" class=\"img_box center_img\">\r\n            <img [src]=\"apiService.getUserMe().image_url\" class=\"crop_img\">\r\n        </div>\r\n        <div *ngIf=\"!apiService.getUserMe() || !apiService.getUserMe().image_url\" class=\"img_box center_img\">\r\n            <img src=\"assets/images/empty_dp.png\" class=\"crop_img\">\r\n        </div>\r\n        <div *ngIf=\"apiService.getUserMe()\" class=\"text_box\">\r\n            <h2>{{apiService.getUserMe().name}}</h2>\r\n            <p>{{'view_profile' | translate}}</p>\r\n\r\n            <div *ngIf=\"config.demoMode\" (click)=\"buyAppAction()\" class=\"buy_this_app\">\r\n    <h2>\r\n        <ion-icon class=\"zmdi zmdi-shopping-cart\"></ion-icon>\r\n        {{\"buy_this_app\" | translate}}\r\n    </h2>\r\n</div>\r\n        </div>\r\n        <div *ngIf=\"!apiService.getUserMe()\" class=\"text_box\">\r\n            <h2>{{'hey_guest' | translate}}</h2>\r\n            <p [innerHTML]=\"'alert_login_msg' | translate\"></p>\r\n            <div *ngIf=\"config.demoMode\" (click)=\"buyAppAction()\" class=\"buy_this_app\">\r\n    <h2>\r\n        <ion-icon class=\"zmdi zmdi-shopping-cart\"></ion-icon>\r\n        {{\"buy_this_app\" | translate}}\r\n    </h2>\r\n</div>\r\n        </div>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content fullscreen class=\"bg_color\">\r\n    <ion-row>\r\n        <ion-col size=\"6\" (click)=\"wallet()\">\r\n            <div class=\"menu_box\">\r\n                <h2>{{'wallet' | translate}}</h2>\r\n                <h3 class=\"d-flex\" [innerHTML]=\"'quick_payments' | translate\"></h3>\r\n                <ion-icon class=\"zmdi zmdi-balance-wallet ion-text-end end\"></ion-icon>\r\n            </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" (click)=\"orders()\">\r\n            <div class=\"menu_box\">\r\n                <h2>{{'my_orders' | translate}}</h2>\r\n                <h3 class=\"d-flex\" [innerHTML]=\"'order_status' | translate\"> </h3>\r\n                <ion-icon class=\"zmdi zmdi-bike ion-text-end end\"></ion-icon>\r\n            </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" (click)=\"pillReminders()\">\r\n            <div class=\"menu_box\">\r\n                <h2>{{'pill_reminders' | translate}}</h2>\r\n                <h3 class=\"d-flex\" [innerHTML]=\"'take_pill_on_time' | translate\"> </h3>\r\n                <ion-icon class=\"zmdi zmdi-notifications-active ion-text-end end\"></ion-icon>\r\n            </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" (click)=\"myAddress()\">\r\n            <div class=\"menu_box\">\r\n                <h2>{{'my_address' | translate}}</h2>\r\n                <h3 class=\"d-flex\" [innerHTML]=\"'save_address' | translate\"></h3>\r\n                <ion-icon class=\"zmdi zmdi-pin ion-text-end end\"></ion-icon>\r\n            </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" (click)=\"savedItems()\">\r\n            <div class=\"menu_box\">\r\n                <h2>{{'saved_items' | translate}}</h2>\r\n                <h3 class=\"d-flex\" [innerHTML]=\"'mades_doctors' | translate\"> </h3>\r\n                <ion-icon class=\"zmdi zmdi-bookmark ion-text-end end\"></ion-icon>\r\n            </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" (click)=\"contactUs()\">\r\n            <div class=\"menu_box\">\r\n                <h2>{{'contact_us' | translate}}</h2>\r\n                <h3 class=\"d-flex\" [innerHTML]=\"'let_us_help_you' | translate\"></h3>\r\n                <ion-icon class=\"zmdi zmdi-email ion-text-end end\"></ion-icon>\r\n            </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" (click)=\"termsConditions()\">\r\n            <div class=\"menu_box\">\r\n                <h2>{{'terms_conditions' | translate}}</h2>\r\n                <h3 class=\"d-flex\" [innerHTML]=\"'company_policies' | translate\"></h3>\r\n                <ion-icon class=\"zmdi zmdi-assignment ion-text-end end\"></ion-icon>\r\n            </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" (click)=\"faqs()\">\r\n            <div class=\"menu_box\">\r\n                <h2>{{'faqs' | translate}}</h2>\r\n                <h3 class=\"d-flex\" [innerHTML]=\"'quick_answers' | translate\"> </h3>\r\n                <ion-icon class=\"zmdi zmdi-assignment-alert ion-text-end end\"></ion-icon>\r\n            </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" (click)=\"changeLanguage()\">\r\n            <div class=\"menu_box\">\r\n                <h2>{{'language' | translate}}</h2>\r\n                <h3 class=\"d-flex\" [innerHTML]=\"'change_language' | translate\"> </h3>\r\n                <ion-icon class=\"zmdi zmdi-globe ion-text-end end\"></ion-icon>\r\n            </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" *ngIf=\"apiService.getUserMe()\" (click)=\"logout()\">\r\n            <div class=\"menu_box\">\r\n                <h2>{{'logout' | translate}}</h2>\r\n                <h3 class=\"d-flex\" [innerHTML]=\"'see_again' | translate\"></h3>\r\n                <ion-icon class=\"zmdi zmdi-open-in-new ion-text-end end\"></ion-icon>\r\n            </div>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <div class=\"developed_by d-flex\" (click)=\"developed_by()\" *ngIf=\"config.demoMode\">\r\n        <h2>{{\"developed_by\" | translate}}</h2>\r\n        <div class=\"img_box\">\r\n            <img src=\"assets/images/VT_black_logo.png\" class=\"\">\r\n        </div>\r\n    </div>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/account/account-routing.module.ts": function srcAppAccountAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
      return AccountPageRoutingModule;
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


    var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./account.page */
    "./src/app/account/account.page.ts");

    var routes = [{
      path: '',
      component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }];

    var AccountPageRoutingModule = function AccountPageRoutingModule() {
      _classCallCheck(this, AccountPageRoutingModule);
    };

    AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AccountPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/account/account.module.ts": function srcAppAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPageModule", function () {
      return AccountPageModule;
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


    var _account_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./account-routing.module */
    "./src/app/account/account-routing.module.ts");
    /* harmony import */


    var _account_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./account.page */
    "./src/app/account/account.page.ts");

    var AccountPageModule = function AccountPageModule() {
      _classCallCheck(this, AccountPageModule);
    };

    AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_6__["AccountPageRoutingModule"]],
      declarations: [_account_page__WEBPACK_IMPORTED_MODULE_7__["AccountPage"]]
    })], AccountPageModule);
    /***/
  },

  /***/
  "./src/app/account/account.page.scss": function srcAppAccountAccountPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  background: var(--white);\n}\nion-header ion-toolbar ion-title {\n  padding: 0 22px !important;\n}\n.profile {\n  padding: 18px 11px;\n  align-items: flex-start;\n}\n.profile .img_box {\n  width: 100%;\n  max-width: 150px;\n  height: 150px;\n  border-radius: 11px;\n  margin-right: 18px;\n  min-width: 150px;\n}\n.profile .text_box h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.53rem;\n  font-weight: 600;\n  line-height: 31px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n.profile .text_box p {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  padding-bottom: 7px;\n}\nion-row {\n  padding: 7px 7px;\n}\nion-row ion-col {\n  padding: 7px 7px;\n}\nion-row ion-col .menu_box {\n  background: var(--white);\n  padding: 20px 15px;\n  border-radius: 4px;\n  position: relative;\n  width: 100%;\n  height: 100px;\n  overflow: hidden;\n}\nion-row ion-col .menu_box h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 1.1rem;\n  font-weight: 700;\n  padding-bottom: 7px;\n}\nion-row ion-col .menu_box h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 0.85rem;\n  white-space: nowrap;\n}\nion-row ion-col .menu_box ion-icon {\n  font-size: 2rem;\n  opacity: 0.2;\n  color: var(--text-light2);\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n}\n.buy_this_app {\n  background: var(--primary);\n  height: 45px;\n  display: flex;\n  align-items: center;\n  min-width: 143px;\n  padding: 0 13px;\n  z-index: 9999;\n  margin-top: 17px;\n  border-radius: 7px;\n}\n.buy_this_app h2 {\n  color: var(--white) !important;\n  font-size: 1.1rem !important;\n  font-weight: 500 !important;\n  margin: 0 auto !important;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0 !important;\n}\n.buy_this_app h2 ion-icon {\n  font-size: 1rem;\n  min-width: 23px;\n}\nion-footer {\n  background: var(--bg-color);\n  z-index: 999;\n  position: relative;\n}\nion-footer .developed_by {\n  padding: 2% 10% 2% 10%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n}\nion-footer .developed_by h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 1rem;\n  font-weight: 500;\n  min-width: 41%;\n  letter-spacing: 0;\n  padding: 0 5px;\n}\nion-footer .developed_by img {\n  max-width: 145px;\n}\nion-footer .developed_by img.dark-theme-logo {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9GOlxcZml2ZXJcXEJlcm5hcmRcXERvY3RvciBXb3JsZFxcRG9jdG9Xb3JsZF9BcHBDb2RlIChWaWRlbyBDYWxsKS0yMDIxMDgwOVQxMDE0MDdaLTAwMVxcRG9jdG9Xb3JsZF9BcHBDb2RlIChWaWRlbyBDYWxsKVxcZG9jdG93b3JsZF9jdXN0b21lclxcZG9jdG93b3JsZF9jdXN0b21lci9zcmNcXGFwcFxcYWNjb3VudFxcYWNjb3VudC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSx3QkFBQTtBQ0NBO0FEQUE7RUFDSSwwQkFBQTtBQ0VKO0FERUE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBREdRO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0RaO0FET1E7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNMWjtBRFVBO0VBQ0ksZ0JBQUE7QUNQSjtBRFNJO0VBQ0ksZ0JBQUE7QUNQUjtBRFNRO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDUFo7QURTWTtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1BoQjtBRFVZO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDUmhCO0FEV1k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ1RoQjtBRGVBO0VBQ1EsMEJBQUE7RUFDSixZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGNJO0VBQ0ksOEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQ1pSO0FEY1E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ1paO0FEaUJBO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNkSjtBRGdCSTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtBQ2RSO0FEZ0JRO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ2RaO0FEaUJRO0VBRUksZ0JBQUE7QUNoQlo7QURrQlk7RUFDSSxhQUFBO0FDaEJoQiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZzogMCAyMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxufVxyXG5cclxuLnByb2ZpbGUge1xyXG4gICAgcGFkZGluZzogMThweCAxMXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgLmltZ19ib3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMThweDtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNTNyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4vLyAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuLy8gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjk0cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLXJvdyB7XHJcbiAgICBwYWRkaW5nOiA3cHggN3B4O1xyXG5cclxuICAgIGlvbi1jb2wge1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCA3cHg7XHJcblxyXG4gICAgICAgIC5tZW51X2JveCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXlfdGhpc19hcHAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDE0M3B4O1xyXG4gICAgcGFkZGluZzogMCAxM3B4O1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmRldmVsb3BlZF9ieSB7XHJcbiAgICAgICAgcGFkZGluZzogMiUgMTAlIDIlIDEwJTtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA0MSU7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgbWF4LXdpZHRoOiAxODZweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDVweDtcclxuXHJcbiAgICAgICAgICAgICYuZGFyay10aGVtZS1sb2dvIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBwYWRkaW5nOiAwIDIycHggIWltcG9ydGFudDtcbn1cblxuLnByb2ZpbGUge1xuICBwYWRkaW5nOiAxOHB4IDExcHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnByb2ZpbGUgLmltZ19ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuLnByb2ZpbGUgLnRleHRfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1zaXplOiAxLjUzcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMzFweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm9maWxlIC50ZXh0X2JveCBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuOTRyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG59XG5cbmlvbi1yb3cge1xuICBwYWRkaW5nOiA3cHggN3B4O1xufVxuaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogN3B4IDdweDtcbn1cbmlvbi1yb3cgaW9uLWNvbCAubWVudV9ib3gge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLXJvdyBpb24tY29sIC5tZW51X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cbmlvbi1yb3cgaW9uLWNvbCAubWVudV9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbmlvbi1yb3cgaW9uLWNvbCAubWVudV9ib3ggaW9uLWljb24ge1xuICBmb250LXNpemU6IDJyZW07XG4gIG9wYWNpdHk6IDAuMjtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDVweDtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLmJ1eV90aGlzX2FwcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMTQzcHg7XG4gIHBhZGRpbmc6IDAgMTNweDtcbiAgei1pbmRleDogOTk5OTtcbiAgbWFyZ2luLXRvcDogMTdweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmJ1eV90aGlzX2FwcCBoMiB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMCAhaW1wb3J0YW50O1xufVxuLmJ1eV90aGlzX2FwcCBoMiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWluLXdpZHRoOiAyM3B4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1mb290ZXIgLmRldmVsb3BlZF9ieSB7XG4gIHBhZGRpbmc6IDIlIDEwJSAyJSAxMCU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5pb24tZm9vdGVyIC5kZXZlbG9wZWRfYnkgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtaW4td2lkdGg6IDQxJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuaW9uLWZvb3RlciAuZGV2ZWxvcGVkX2J5IGltZyB7XG4gIG1heC13aWR0aDogMTQ1cHg7XG59XG5pb24tZm9vdGVyIC5kZXZlbG9wZWRfYnkgaW1nLmRhcmstdGhlbWUtbG9nbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/account/account.page.ts": function srcAppAccountAccountPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
      return AccountPage;
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


    var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/events/my-events.service */
    "./src/app/services/events/my-events.service.ts");
    /* harmony import */


    var _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/common/ecommerce.service */
    "./src/app/services/common/ecommerce.service.ts");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var AccountPage = /*#__PURE__*/function () {
      function AccountPage(config, navCtrl, myEvent, apiService, uiElementService, translate, alertCtrl, eComService, inAppBrowser) {
        _classCallCheck(this, AccountPage);

        this.config = config;
        this.navCtrl = navCtrl;
        this.myEvent = myEvent;
        this.apiService = apiService;
        this.uiElementService = uiElementService;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.eComService = eComService;
        this.inAppBrowser = inAppBrowser;
      }

      _createClass(AccountPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "viewProfile",
        value: function viewProfile() {
          if (this.apiService.getUserMe() != null) {
            this.navCtrl.navigateForward(['./my-profile']);
          } else {
            this.alertLogin();
          }
        }
      }, {
        key: "orderTracking",
        value: function orderTracking() {
          if (this.apiService.getUserMe() != null) {
            this.navCtrl.navigateForward(['./order-tracking']);
          } else {
            this.alertLogin();
          }
        }
      }, {
        key: "myAddress",
        value: function myAddress() {
          if (this.apiService.getUserMe() != null) {
            this.navCtrl.navigateForward(['./addresses']);
          } else {
            this.alertLogin();
          }
        }
      }, {
        key: "pillReminders",
        value: function pillReminders() {
          if (this.apiService.getUserMe() != null) {
            this.navCtrl.navigateForward(['./pill-reminders']);
          } else {
            this.alertLogin();
          }
        }
      }, {
        key: "orders",
        value: function orders() {
          if (this.apiService.getUserMe() != null) {
            this.navCtrl.navigateForward(['./orders']);
          } else {
            this.alertLogin();
          }
        }
      }, {
        key: "contactUs",
        value: function contactUs() {
          if (this.apiService.getUserMe() != null) {
            this.navCtrl.navigateForward(['./contact-us']);
          } else {
            this.alertLogin();
          }
        }
      }, {
        key: "savedItems",
        value: function savedItems() {
          if (this.apiService.getUserMe() != null) {
            this.navCtrl.navigateForward(['./saved-items']);
          } else {
            this.alertLogin();
          }
        }
      }, {
        key: "termsConditions",
        value: function termsConditions() {
          this.navCtrl.navigateForward(['./tnc']);
        }
      }, {
        key: "faqs",
        value: function faqs() {
          this.navCtrl.navigateForward(['./faqs']);
        }
      }, {
        key: "wallet",
        value: function wallet() {
          this.navCtrl.navigateForward(['./wallet']);
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this = this;

          this.translate.get(["logout_title", "logout_message", "no", "yes"]).subscribe(function (values) {
            _this.alertCtrl.create({
              header: values["logout_title"],
              message: values["logout_message"],
              buttons: [{
                text: values["no"],
                handler: function handler() {}
              }, {
                text: values["yes"],
                handler: function handler() {
                  _this.eComService.clearCart();

                  src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__["Helper"].setLoggedInUserResponse(null);

                  _this.myEvent.setUserMeData(null);

                  _this.myEvent.setAddressData(null);
                }
              }]
            }).then(function (alert) {
              return alert.present();
            });
          });
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage() {
          this.navCtrl.navigateForward(['./change-language']);
        }
      }, {
        key: "alertLogin",
        value: function alertLogin() {
          var _this2 = this;

          this.translate.get("alert_login_short").subscribe(function (value) {
            return _this2.uiElementService.presentToast(value);
          });
          this.navCtrl.navigateForward(['./sign-in']);
        }
      }, {
        key: "buyAppAction",
        value: function buyAppAction() {
          var _this3 = this;

          this.translate.get("just_moment").subscribe(function (value) {
            _this3.uiElementService.presentLoading(value);

            _this3.apiService.getContactLink().subscribe(function (res) {
              _this3.uiElementService.dismissLoading();

              _this3.inAppBrowser.create(res.link ? res.link : "https://bit.ly/cc_DoctoWorld", "_system");
            }, function (err) {
              console.log("getContactLink", err);

              _this3.uiElementService.dismissLoading();

              _this3.inAppBrowser.create("https://bit.ly/cc_DoctoWorld", "_system");
            });
          });
        }
      }, {
        key: "developed_by",
        value: function developed_by() {
          this.inAppBrowser.create("https://verbosetechlabs.com/", "_system");
        }
      }]);

      return AccountPage;
    }();

    AccountPage.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"]]
        }]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_7__["MyEventsService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_8__["ECommerceService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"]
      }];
    };

    AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-account',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./account.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./account.page.scss */
      "./src/app/account/account.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_7__["MyEventsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_8__["ECommerceService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"]])], AccountPage);
    /***/
  }
}]);
//# sourceMappingURL=account-account-module-es5.js.map