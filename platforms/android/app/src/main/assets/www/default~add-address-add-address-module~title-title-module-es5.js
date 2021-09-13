function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-address-add-address-module~title-title-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/title/title.page.html": function node_modulesRawLoaderDistCjsJsSrcAppShopHourTitleTitlePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\n<ion-header>\n  <ion-toolbar>\n    <ion-title>title</ion-title>\n  </ion-toolbar>\n</ion-header>\n-->\n<ion-content (click)=\"dismiss()\">\n\n</ion-content>\n<ion-footer no-border>\n\t<div class=\"form\">\n\t\t<ion-list lines=\"none\">\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-icon class=\"zmdi zmdi-badge-check\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">{{\"address_title\" | translate}}</ion-label>\n\t\t\t\t<ion-input mode=\"md\" type=\"text\" placeholder=\"{{'enter_address_title' | translate}}\"\n\t\t\t\t\t[(ngModel)]=\"address.title\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-icon class=\"zmdi zmdi-pin\" slot=\"start\"></ion-icon>\n\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">{{\"address_address\" | translate}}</ion-label>\n\t\t\t\t<ion-input mode=\"md\" type=\"text\" placeholder=\"{{'enter_address_detail' | translate}}\"\n\t\t\t\t\t[(ngModel)]=\"address.formatted_address\"></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</div>\n\t<ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"save()\">\n\t\t{{'save_address' | translate}}\n\t</ion-button>\n</ion-footer>";
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
          var _this = this;

          this.translateService.get(["error", "dismiss"]).subscribe(function (values) {
            _this.alertCtrl.create({
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
            var _this2 = this;

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
                        if (!_this2.isLoading) {
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
  "./src/app/shop-hour/title/title.page.scss": function srcAppShopHourTitleTitlePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgba(0, 0, 0, 0) !important;\n}\n\nion-footer {\n  background: var(--white);\n  padding-top: 15px;\n}\n\nion-footer .form ion-list ion-item {\n  margin-bottom: 20px;\n  border-bottom: none !important;\n  --min-height: unset !important;\n}\n\nion-footer .form ion-list ion-item ion-icon {\n  color: var(--secondary);\n  margin: 0;\n  font-size: 1.2rem;\n  min-width: 30px;\n  height: 37px;\n  line-height: 50px;\n}\n\nion-footer .form ion-list ion-item ion-label {\n  font-weight: 400;\n  font-size: 1.35rem !important;\n  margin-bottom: 14px !important;\n}\n\nion-footer .form ion-list ion-item ion-input {\n  font-weight: 500 !important;\n  letter-spacing: 0;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.6) !important;\n  padding-bottom: 7px !important;\n}\n\nion-footer .form ion-list ion-item.address .item_inner {\n  align-items: flex-start;\n}\n\nion-footer .form ion-list ion-item.address .item_inner ion-icon {\n  height: 18px;\n  line-height: normal;\n}\n\nion-footer .form ion-list ion-item.address .item_inner p {\n  margin: 0;\n  color: var(--text-black);\n  font-weight: 400;\n}\n\nion-footer .button.btn {\n  font-weight: 400;\n  letter-spacing: 1.5px !important;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC1ob3VyL3RpdGxlL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxzaG9wLWhvdXJcXHRpdGxlXFx0aXRsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3AtaG91ci90aXRsZS90aXRsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5Q0FBQTtBQ0NEOztBREVBO0VBQ0Msd0JBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREdHO0VBQ0MsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDREo7O0FER0k7RUFDQyx1QkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNETDs7QURJSTtFQUNDLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQ0ZMOztBREtJO0VBQ0MsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLDREQUFBO0VBQ0EsOEJBQUE7QUNITDs7QURPSztFQUNDLHVCQUFBO0FDTE47O0FET007RUFDQyxZQUFBO0VBQ0EsbUJBQUE7QUNMUDs7QURRTTtFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDTlA7O0FEY0M7RUFDQyxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvc2hvcC1ob3VyL3RpdGxlL3RpdGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcblx0LS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG5cdHBhZGRpbmctdG9wOiAxNXB4O1xuXG5cdC5mb3JtIHtcblx0XHRpb24tbGlzdCB7XG5cdFx0XHRpb24taXRlbSB7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcblx0XHRcdFx0LS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuXG5cdFx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJyZW07XG5cdFx0XHRcdFx0bWluLXdpZHRoOiAzMHB4O1xuXHRcdFx0XHRcdGhlaWdodDogMzdweDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogNTBweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlvbi1sYWJlbCB7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMzVyZW0gIWltcG9ydGFudDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpb24taW5wdXQge1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMDtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjYpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji5hZGRyZXNzIHtcblx0XHRcdFx0XHQuaXRlbV9pbm5lciB7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuXHRcdFx0XHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHAge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuYnV0dG9uLmJ0biB7XG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRsZXR0ZXItc3BhY2luZzogMS41cHggIWltcG9ydGFudDtcblx0XHRmb250LXNpemU6IDFyZW07XG5cdH1cbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuMzVyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweCAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCBpb24taXRlbSBpb24taW5wdXQge1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjYpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0uYWRkcmVzcyAuaXRlbV9pbm5lciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCBpb24taXRlbS5hZGRyZXNzIC5pdGVtX2lubmVyIGlvbi1pY29uIHtcbiAgaGVpZ2h0OiAxOHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCBpb24taXRlbS5hZGRyZXNzIC5pdGVtX2lubmVyIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmlvbi1mb290ZXIgLmJ1dHRvbi5idG4ge1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxcmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shop-hour/title/title.page.ts": function srcAppShopHourTitleTitlePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitlePage", function () {
      return TitlePage;
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


    var src_models_address_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/models/address.models */
    "./src/models/address.models.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/shoup-hour-services/common/ui-elements.service */
    "./src/app/services/shoup-hour-services/common/ui-elements.service.ts");

    var TitlePage = /*#__PURE__*/function () {
      function TitlePage(modalController, uiElementService, translate) {
        _classCallCheck(this, TitlePage);

        this.modalController = modalController;
        this.uiElementService = uiElementService;
        this.translate = translate;
      }

      _createClass(TitlePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.address) this.address = new src_models_address_models__WEBPACK_IMPORTED_MODULE_3__["MyAddress"](); // if (!this.address.title || !this.address.title.length) this.address.title = "home";
        }
      }, {
        key: "onAddressTypeChange",
        value: function onAddressTypeChange(event) {
          if (event.detail && event.detail.value) {
            this.address.title = event.detail.value;
          }
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss(null);
        }
      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          if (!this.address.title || !this.address.title.length) {
            this.translate.get("err_field_address_title").subscribe(function (value) {
              return _this3.uiElementService.presentToast(value);
            });
          } else if (!this.address.formatted_address || !this.address.formatted_address.length) {
            this.translate.get("err_field_address").subscribe(function (value) {
              return _this3.uiElementService.presentToast(value);
            });
          } else {
            this.modalController.dismiss(this.address);
          }
        }
      }]);

      return TitlePage;
    }();

    TitlePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_models_address_models__WEBPACK_IMPORTED_MODULE_3__["MyAddress"])], TitlePage.prototype, "address", void 0);
    TitlePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-title',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./title.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/title/title.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./title.page.scss */
      "./src/app/shop-hour/title/title.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])], TitlePage);
    /***/
  }
}]);
//# sourceMappingURL=default~add-address-add-address-module~title-title-module-es5.js.map