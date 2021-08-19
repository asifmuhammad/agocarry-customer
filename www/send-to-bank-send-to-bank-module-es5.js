function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["send-to-bank-send-to-bank-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/send-to-bank/send-to-bank.page.html": function node_modulesRawLoaderDistCjsJsSrcAppSendToBankSendToBankPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            {{'send_to_bank' | translate}}\n        </ion-title>\n    </ion-toolbar>\n    <div class=\"banner\">\n        <h2>{{'available_balance' | translate}}</h2>\n        <h1>$ 520.50</h1>\n    </div>\n</ion-header>\n\n<ion-content class=\"bg_color\">\n    <div class=\"form\">\n        <ion-list lines=\"none\">\n            <ion-card>\n                <h2>{{'bank_info' | translate}}</h2>\n\n                <ion-item lines=\"none\">\n                    <div class=\"item_inner\">\n                        <ion-label mode=\"md\">{{\"account_holder_name\" | translate}}</ion-label>\n                        <ion-input mode=\"md\" type=\"name\" value=\"Geroge Anderson\"></ion-input>\n                    </div>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                    <div class=\"item_inner\">\n                        <ion-label mode=\"md\">{{\"bank_name\" | translate}}</ion-label>\n                        <ion-input mode=\"md\" type=\"name\" value=\"HBNC Bank of New York\"></ion-input>\n                    </div>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                    <div class=\"item_inner\">\n                        <ion-label mode=\"md\">{{\"branch_code\" | translate}}</ion-label>\n                        <ion-input mode=\"md\" type=\"name\" value=\"NYC123456\"></ion-input>\n                    </div>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                    <div class=\"item_inner\">\n                        <ion-label mode=\"md\">{{\"account_number\" | translate}}</ion-label>\n                        <ion-input mode=\"md\" type=\"name\" value=\"1234 5678 1234 6789\"></ion-input>\n                    </div>\n                </ion-item>\n\n            </ion-card>\n\n            <ion-card>\n                <ion-item lines=\"none\">\n                    <div class=\"item_inner\">\n                        <ion-label mode=\"md\" position=\"stacked\">{{\"enter_amount_transfer\" | translate}}</ion-label>\n                        <ion-input mode=\"md\" type=\"name\" value=\"$ 500\"></ion-input>\n                    </div>\n                </ion-item>\n            </ion-card>\n        </ion-list>\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-button size=\"large\" expand=\"full\" class=\"btn\">{{'send_to_bank' | translate}}</ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/send-to-bank/send-to-bank-routing.module.ts": function srcAppSendToBankSendToBankRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendToBankPageRoutingModule", function () {
      return SendToBankPageRoutingModule;
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


    var _send_to_bank_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./send-to-bank.page */
    "./src/app/send-to-bank/send-to-bank.page.ts");

    var routes = [{
      path: '',
      component: _send_to_bank_page__WEBPACK_IMPORTED_MODULE_3__["SendToBankPage"]
    }];

    var SendToBankPageRoutingModule = function SendToBankPageRoutingModule() {
      _classCallCheck(this, SendToBankPageRoutingModule);
    };

    SendToBankPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SendToBankPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/send-to-bank/send-to-bank.module.ts": function srcAppSendToBankSendToBankModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendToBankPageModule", function () {
      return SendToBankPageModule;
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


    var _send_to_bank_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./send-to-bank-routing.module */
    "./src/app/send-to-bank/send-to-bank-routing.module.ts");
    /* harmony import */


    var _send_to_bank_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./send-to-bank.page */
    "./src/app/send-to-bank/send-to-bank.page.ts");

    var SendToBankPageModule = function SendToBankPageModule() {
      _classCallCheck(this, SendToBankPageModule);
    };

    SendToBankPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _send_to_bank_routing_module__WEBPACK_IMPORTED_MODULE_6__["SendToBankPageRoutingModule"]],
      declarations: [_send_to_bank_page__WEBPACK_IMPORTED_MODULE_7__["SendToBankPage"]]
    })], SendToBankPageModule);
    /***/
  },

  /***/
  "./src/app/send-to-bank/send-to-bank.page.scss": function srcAppSendToBankSendToBankPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  background: var(--white);\n}\nion-header .banner {\n  position: relative;\n  z-index: 99;\n  padding: 20px;\n}\nion-header .banner h2 {\n  margin: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 1px;\n  padding-bottom: 4px;\n  color: var(--text-light2);\n}\nion-header .banner h1 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 2.35rem;\n  color: var(--text-black);\n}\n.form {\n  width: 100%;\n  margin-top: 8px;\n}\n.form ion-list ion-card {\n  width: 100%;\n  border-radius: 0;\n  background: var(--white);\n  margin: 0;\n  box-shadow: none;\n  margin-bottom: 10px;\n  padding: 19px 20px;\n}\n.form ion-list ion-card:last-child {\n  margin-bottom: 0;\n}\n.form ion-list ion-card h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  padding-bottom: 15px;\n  text-transform: uppercase;\n}\n.form ion-list ion-card ion-item {\n  margin-bottom: 0px;\n  background: none;\n  border-radius: 0;\n  padding: 0;\n}\n.form ion-list ion-card ion-item .item_inner {\n  width: 100%;\n}\n.form ion-list ion-card ion-item ion-label {\n  font-weight: 400;\n  font-size: 0.95rem !important;\n  margin-bottom: 0 !important;\n  letter-spacing: 0px !important;\n  color: var(--text-light) !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  transition: unset;\n  transform: unset;\n}\n.form ion-list ion-card ion-item ion-input {\n  background: var(--info_field_bg);\n  border-radius: 6px;\n  padding: 0 16px !important;\n  min-height: 50px;\n  color: var(--text-dark);\n  font-size: 0.95rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC10by1iYW5rL0Y6XFxmaXZlclxcQmVybmFyZFxcRG9jdG9yIFdvcmxkXFxEb2N0b1dvcmxkX0FwcENvZGUgKFZpZGVvIENhbGwpLTIwMjEwODA5VDEwMTQwN1otMDAxXFxEb2N0b1dvcmxkX0FwcENvZGUgKFZpZGVvIENhbGwpXFxkb2N0b3dvcmxkX2N1c3RvbWVyXFxkb2N0b3dvcmxkX2N1c3RvbWVyL3NyY1xcYXBwXFxzZW5kLXRvLWJhbmtcXHNlbmQtdG8tYmFuay5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlbmQtdG8tYmFuay9zZW5kLXRvLWJhbmsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NSO0FEQ1E7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ1o7QURFUTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUNBWjtBREtBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNGSjtBREtRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSFo7QURLWTtFQUNJLGdCQUFBO0FDSGhCO0FETVk7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDSmhCO0FET1k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDTGhCO0FET2dCO0VBQ0ksV0FBQTtBQ0xwQjtBRFFnQjtFQUNJLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ05wQjtBRFNnQjtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQ1BwQiIsImZpbGUiOiJzcmMvYXBwL3NlbmQtdG8tYmFuay9zZW5kLXRvLWJhbmsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuXG4gICAgLmJhbm5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuMzVyZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTlweCAyMHB4O1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTRyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICAgICAgLml0ZW1faW5uZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdW5zZXQ7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdW5zZXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5mb19maWVsZF9iZyk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC45NXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xufVxuaW9uLWhlYWRlciAuYmFubmVyIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIuMzVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbn1cblxuLmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDE5cHggMjBweDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1jYXJkOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtc2l6ZTogMC45NHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IHVuc2V0O1xuICB0cmFuc2Zvcm06IHVuc2V0O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW5mb19maWVsZF9iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMCAxNnB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXNpemU6IDAuOTVyZW0gIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/send-to-bank/send-to-bank.page.ts": function srcAppSendToBankSendToBankPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendToBankPage", function () {
      return SendToBankPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SendToBankPage = /*#__PURE__*/function () {
      function SendToBankPage() {
        _classCallCheck(this, SendToBankPage);
      }

      _createClass(SendToBankPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SendToBankPage;
    }();

    SendToBankPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-send-to-bank',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./send-to-bank.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/send-to-bank/send-to-bank.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./send-to-bank.page.scss */
      "./src/app/send-to-bank/send-to-bank.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SendToBankPage);
    /***/
  }
}]);
//# sourceMappingURL=send-to-bank-send-to-bank-module-es5.js.map