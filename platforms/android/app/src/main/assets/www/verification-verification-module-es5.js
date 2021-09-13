function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verification-verification-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html": function node_modulesRawLoaderDistCjsJsSrcAppVerificationVerificationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'phone_verification' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div id=\"recaptcha-container\"></div>\r\n\t<div class=\"form\">\r\n\t\t<p class=\"ion-text-center\">{{'verification_text' | translate}} {{phoneNumberFull}} </p>\r\n\r\n\t\t<ion-list lines=\"none\">\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<ion-input class=\"ion-text-center\" type=\"number\" [(ngModel)]=\"otp\"\r\n\t\t\t\t\tplaceholder=\"{{'enter_verification_code' | translate}}\">\r\n\t\t\t\t</ion-input>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"verify()\">\r\n\t\t\t\t{{'verify' | translate}}\r\n\t\t\t</ion-button>\r\n\t\t</ion-list>\r\n\t\t<!-- <h4 class=\"d-flex\">0:22 min left <span class=\"end\">{{'resend' | translate}}</span></h4> -->\r\n\t</div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/verification/verification-routing.module.ts": function srcAppVerificationVerificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationPageRoutingModule", function () {
      return VerificationPageRoutingModule;
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


    var _verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verification.page */
    "./src/app/verification/verification.page.ts");

    var routes = [{
      path: '',
      component: _verification_page__WEBPACK_IMPORTED_MODULE_3__["VerificationPage"]
    }];

    var VerificationPageRoutingModule = function VerificationPageRoutingModule() {
      _classCallCheck(this, VerificationPageRoutingModule);
    };

    VerificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerificationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/verification/verification.module.ts": function srcAppVerificationVerificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function () {
      return VerificationPageModule;
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


    var _verification_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./verification-routing.module */
    "./src/app/verification/verification-routing.module.ts");
    /* harmony import */


    var _verification_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./verification.page */
    "./src/app/verification/verification.page.ts");

    var VerificationPageModule = function VerificationPageModule() {
      _classCallCheck(this, VerificationPageModule);
    };

    VerificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _verification_routing_module__WEBPACK_IMPORTED_MODULE_6__["VerificationPageRoutingModule"]],
      declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_7__["VerificationPage"]]
    })], VerificationPageModule);
    /***/
  },

  /***/
  "./src/app/verification/verification.page.scss": function srcAppVerificationVerificationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  position: absolute !important;\n  left: 0;\n  top: 0;\n  width: 100%;\n  text-align: center;\n  padding: 0 15px !important;\n}\n\n.form {\n  padding-top: 50px;\n}\n\n.form p {\n  color: var(--text-light) !important;\n  margin: 0;\n  font-size: 1rem !important;\n  letter-spacing: 0;\n  font-weight: 500;\n  line-height: 19px;\n  margin-bottom: 50px;\n  opacity: 0.8;\n}\n\n.form .button.btn.button-block {\n  margin-top: 25px;\n}\n\n.form ion-list {\n  margin-bottom: 28px;\n}\n\n.form h4 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n\n.form h4 span {\n  text-transform: uppercase;\n  font-size: 0.95rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2F0aW9uL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFx2ZXJpZmljYXRpb25cXHZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsNkJBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDQ0Q7O0FERUE7RUFDQyxpQkFBQTtBQ0NEOztBRENDO0VBQ0MsbUNBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQztFQUNDLGdCQUFBO0FDQUY7O0FER0M7RUFDQyxtQkFBQTtBQ0RGOztBRElDO0VBQ0MsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURHUTtFQUNJLHlCQUFBO0VBQ1Isa0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG5cdGxlZnQ6IDA7XHJcblx0dG9wOiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0ge1xyXG5cdHBhZGRpbmctdG9wOiA1MHB4O1xyXG5cclxuXHRwIHtcclxuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Zm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcblx0XHRsZXR0ZXItc3BhY2luZzogMDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRsaW5lLWhlaWdodDogMTlweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblx0XHRvcGFjaXR5OiAuODtcclxuXHR9XHJcblxyXG5cdC5idXR0b24uYnRuLmJ1dHRvbi1ibG9jayB7XHJcblx0XHRtYXJnaW4tdG9wOiAyNXB4O1xyXG5cdH1cclxuXHJcblx0aW9uLWxpc3Qge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjhweDtcclxuXHR9XHJcblxyXG5cdGg0IHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGZvbnQtc2l6ZTogLjk1cmVtO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAuOTVyZW07IFxyXG4gICAgICAgIH1cclxuXHR9XHJcbn1cclxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbi5mb3JtIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBvcGFjaXR5OiAwLjg7XG59XG4uZm9ybSAuYnV0dG9uLmJ0bi5idXR0b24tYmxvY2sge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLmZvcm0gaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuLmZvcm0gaDQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5mb3JtIGg0IHNwYW4ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuOTVyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/verification/verification.page.ts": function srcAppVerificationVerificationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationPage", function () {
      return VerificationPage;
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


    var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/events/my-events.service */
    "./src/app/services/events/my-events.service.ts");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");

    var VerificationPage = /*#__PURE__*/function () {
      function VerificationPage(route, uiElementService, myEvent, platform, apiService, translate, navCtrl) {
        _classCallCheck(this, VerificationPage);

        this.route = route;
        this.uiElementService = uiElementService;
        this.myEvent = myEvent;
        this.platform = platform;
        this.apiService = apiService;
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.captchanotvarified = true;
        this.buttonDisabled = true;
        this.captchaVerified = false;
        this.minutes = 0;
        this.seconds = 0;
        this.totalSeconds = 0;
        this.intervalCalled = false;
        this.resendCode = false;
        this.otpNotSent = true;
        this.otp = "";
      }

      _createClass(VerificationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (params) {
            return _this.phoneNumberFull = params["phoneNumberFull"];
          });

          if (!this.platform.is('cordova')) {
            this.makeCaptcha();
          }

          this.sendOTP();
        }
      }, {
        key: "loginUser",
        value: function loginUser(token) {
          var _this2 = this;

          this.translate.get('just_moment').subscribe(function (value) {
            _this2.uiElementService.presentLoading(value);

            _this2.apiService.loginUser({
              token: token,
              role: src_models_constants_models__WEBPACK_IMPORTED_MODULE_10__["Constants"].ROLE_USER
            }).subscribe(function (res) {
              _this2.uiElementService.dismissLoading();

              src_models_helper_models__WEBPACK_IMPORTED_MODULE_8__["Helper"].setLoggedInUserResponse(res);

              _this2.apiService.setupHeaders(res.token);

              _this2.myEvent.setUserMeData(res.user);

              window.localStorage.removeItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_10__["Constants"].KEY_ADDRESS);

              _this2.myEvent.setAddressData(null);

              _this2.navCtrl.navigateForward(['tabs/main-home']);
            }, function (err) {
              console.log(err);

              _this2.uiElementService.dismissLoading();

              _this2.uiElementService.presentErrorAlert(err && err.error && err.error.message && String(err.error.message).toLowerCase().includes("role") ? "User exists with different role" : "Something went wrong");
            });
          });
        }
      }, {
        key: "getUserToken",
        value: function getUserToken(user) {
          var _this3 = this;

          user.getIdToken(false).then(function (res) {
            console.log('user_token_success', res);

            _this3.loginUser(res);
          })["catch"](function (err) {
            console.log('user_token_failure', err);
          });
        }
      }, {
        key: "sendOTP",
        value: function sendOTP() {
          this.resendCode = false;
          this.otpNotSent = true;

          if (this.platform.is('cordova')) {
            this.sendOtpPhone(this.phoneNumberFull);
          } else {
            this.sendOtpBrowser(this.phoneNumberFull);
          }

          if (this.intervalCalled) {
            clearInterval(this.timer);
          }
        }
      }, {
        key: "createTimer",
        value: function createTimer() {
          this.intervalCalled = true;
          this.totalSeconds--;

          if (this.totalSeconds == 0) {
            this.otpNotSent = true;
            this.resendCode = true;
            clearInterval(this.timer);
          } else {
            this.seconds = this.totalSeconds % 60;

            if (this.totalSeconds >= this.seconds) {
              this.minutes = (this.totalSeconds - this.seconds) / 60;
            } else {
              this.minutes = 0;
            }
          }
        }
      }, {
        key: "createInterval",
        value: function createInterval() {
          var _this4 = this;

          this.totalSeconds = 120;
          this.createTimer();
          this.timer = setInterval(function () {
            _this4.createTimer();
          }, 1000);
        }
      }, {
        key: "sendOtpPhone",
        value: function sendOtpPhone(phone) {
          var _this5 = this;

          var component = this;
          this.translate.get('sending_otp').subscribe(function (value) {
            _this5.uiElementService.presentLoading(value);

            window.FirebasePlugin.verifyPhoneNumber(function (credential) {
              component.uiElementService.dismissLoading();
              console.log("verifyPhoneNumber", JSON.stringify(credential)); //component.verfificationId = credential.instantVerification ? credential.id : credential.verificationId;

              component.credential = credential;

              if (credential.instantVerification) {
                component.translate.get("verifying_otp_auto").subscribe(function (value) {
                  return component.uiElementService.presentToast(value);
                });
                component.verifyOtpPhone();
              } else {
                component.translate.get("sending_otp_success").subscribe(function (value) {
                  return component.uiElementService.presentToast(value);
                });
                component.otpNotSent = false;
                component.createInterval();
              } // component.translate.get("otp_sent").subscribe(value => {
              //   component.global.showToast(value);
              // });
              // component.otpNotSent = false;
              // component.createInterval(); 

            }, function (error) {
              console.log("otp_send_fail", error);
              component.otpNotSent = true;
              component.resendCode = true;
              component.uiElementService.dismissLoading();
              component.translate.get('sending_otp_fail').subscribe(function (text) {
                return component.uiElementService.presentToast(text);
              });
            }, phone, 60);
          });
        }
      }, {
        key: "sendOtpBrowser",
        value: function sendOtpBrowser(phone) {
          var component = this;
          this.uiElementService.dismissLoading();
          this.uiElementService.presentLoading("Sending otp");
          firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().signInWithPhoneNumber(phone, this.recaptchaVerifier).then(function (confirmationResult) {
            console.log("otp_send_success", confirmationResult);
            component.otpNotSent = false;
            component.result = confirmationResult;
            component.uiElementService.dismissLoading();
            component.uiElementService.presentToast("OTP Sent");

            if (component.intervalCalled) {
              clearInterval(component.timer);
            }

            component.createInterval();
          })["catch"](function (error) {
            console.log("otp_send_fail", error);
            component.resendCode = true;
            component.uiElementService.dismissLoading();

            if (error.message) {
              component.uiElementService.presentToast(error.message);
            } else {
              component.uiElementService.presentToast("OTP Sending failed");
            }
          });
        }
      }, {
        key: "verify",
        value: function verify() {
          this.otpNotSent = true;

          if (this.platform.is('cordova')) {
            this.credential.code = String(this.otp);
            this.verifyOtpPhone();
          } else {
            this.verifyOtpBrowser();
          }
        }
      }, {
        key: "retryOld",
        value: function retryOld(credential) {
          var _this6 = this;

          //const credential = firebase.auth.PhoneAuthProvider.credential(this.verfificationId, this.otp);
          this.translate.get('verifying_otp').subscribe(function (value) {
            _this6.uiElementService.presentLoading(value);

            firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().signInAndRetrieveDataWithCredential(credential).then(function (info) {
              console.log('otp_verify_success', info);

              _this6.uiElementService.dismissLoading();

              _this6.translate.get('verifying_otp_success').subscribe(function (value) {
                return _this6.uiElementService.presentToast(value);
              });

              _this6.getUserToken(info.user);
            }, function (error) {
              console.log('otp_verify_fail', error);

              _this6.translate.get('verifying_otp_fail').subscribe(function (value) {
                return _this6.uiElementService.presentToast(value);
              });

              _this6.uiElementService.dismissLoading();
            });
          });
        }
      }, {
        key: "verifyOtpPhone",
        value: function verifyOtpPhone() {
          var _this7 = this;

          var component = this;
          this.translate.get('verifying_otp').subscribe(function (text) {
            _this7.uiElementService.presentLoading(text);

            console.log("credential", component.credential);
            window.FirebasePlugin.signInWithCredential(component.credential, function () {
              console.log("signInWithCredential");
              window.FirebasePlugin.getCurrentUser(function (user) {
                component.uiElementService.dismissLoading();
                console.log("getCurrentUser", JSON.stringify(user));
                component.translate.get('otp_verified').subscribe(function (text) {
                  return component.uiElementService.presentToast(text);
                });
                component.loginUser(user.idToken);
              }, function (error) {
                component.uiElementService.dismissLoading();
                console.log("getCurrentUser", JSON.stringify(error));
                component.translate.get('verify_otp_err').subscribe(function (text) {
                  return component.uiElementService.presentToast(text);
                });
              });
            }, function (error) {
              console.error("signInWithCredential", error);
              component.uiElementService.dismissLoading();
              component.retryOld(firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"].PhoneAuthProvider.credential(component.credential.id, component.otp));
              component.translate.get('verify_otp_err').subscribe(function (text) {
                return component.uiElementService.presentToast(text);
              });
            });
          });
        }
      }, {
        key: "verifyOtpBrowser",
        value: function verifyOtpBrowser() {
          var component = this;
          this.uiElementService.presentLoading("Verifying otp");
          this.result.confirm(String(this.otp)).then(function (response) {
            console.log('otp_verify_success', response);
            component.uiElementService.dismissLoading();
            component.uiElementService.presentToast("OTP Verified");
            component.getUserToken(response.user);
          })["catch"](function (error) {
            console.log('otp_verify_fail', error);

            if (error.message) {
              component.uiElementService.presentToast(error.message);
            } else {
              component.uiElementService.presentToast("OTP Verification failed");
            }

            component.uiElementService.dismissLoading();
          });
        }
      }, {
        key: "makeCaptcha",
        value: function makeCaptcha() {
          var component = this;
          this.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"].RecaptchaVerifier('recaptcha-container', {
            // 'size': 'normal',
            'size': 'invisible',
            'callback': function callback(response) {
              component.captchanotvarified = true; // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
          });
          this.recaptchaVerifier.render();
        }
      }]);

      return VerificationPage;
    }();

    VerificationPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"]
      }, {
        type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_5__["MyEventsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    VerificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verification',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./verification.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./verification.page.scss */
      "./src/app/verification/verification.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_5__["MyEventsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], VerificationPage);
    /***/
  }
}]);
//# sourceMappingURL=verification-verification-module-es5.js.map