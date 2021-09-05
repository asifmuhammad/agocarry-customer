function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seller-info-seller-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/seller-info/seller-info.page.html": function node_modulesRawLoaderDistCjsJsSrcAppShopHourSellerInfoSellerInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"bg_transparent\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <!-- <ion-title>\n\t\t\t<div class=\"title_inner d-flex\">\n\t\t\t\t<h3 class=\"end\">\n\t\t\t\t\t<span class=\"end cart_icon\" (click)=\"cart()\">\n\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-mall ion-text-start\"></ion-icon>\n\t\t\t\t\t\t<ion-badge>2</ion-badge>\n\t\t\t\t\t</span>\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t</ion-title> -->\n    </ion-toolbar>\n\n    <div class=\"banner\">\n        <div class=\"banner_img center_img\">\n            <img [src]=\"pageImage\" class=\"crop_img\">\n        </div>\n        <h2>{{pageTitle}}</h2>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class=\"empty-view\" *ngIf=\"!isLoading && (!products || !products.length)\">\n        <div style=\"text-align:center\">\n            <img src=\"assets/images/plc_no_item.png\" alt=\"no offers\" />\n            <span style=\"color:#9E9E9E; font-weight:bold;\">\n                {{'empty_results' | translate}}\n            </span>\n        </div>\n    </div>\n    <div class=\"item_container\">\n        <ion-row>\n            <ion-col size=\"6\" *ngFor=\"let product of products\" (click)=\"navProDetail(product)\">\n                <div class=\"item\">\n                    <div class=\"item_img center_img\">\n                        <img [src]=\"product.images[0]\" class=\"crop_img\">\n                    </div>\n                    <div class=\"item_details\">\n                        <h3>{{product.title}}</h3>\n                        <h4>{{product.categories[0].title}}</h4>\n                        <h5 class=\"d-flex\">\n                            <span class=\"price\">{{product.priceToShow}}</span>\n                            <ion-badge class=\"end\">\n                                {{product.ratings}}\n                                <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n                            </ion-badge>\n                        </h5>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-infinite-scroll (ionInfinite)=\"doInfiniteProducts($event)\">\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{'loading' | translate}}\">\n            </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </div>\n</ion-content>";
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
  "./src/app/shop-hour/seller-info/seller-info-routing.module.ts": function srcAppShopHourSellerInfoSellerInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellerInfoPageRoutingModule", function () {
      return SellerInfoPageRoutingModule;
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


    var _seller_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./seller-info.page */
    "./src/app/shop-hour/seller-info/seller-info.page.ts");

    var routes = [{
      path: '',
      component: _seller_info_page__WEBPACK_IMPORTED_MODULE_3__["SellerInfoPage"]
    }];

    var SellerInfoPageRoutingModule = function SellerInfoPageRoutingModule() {
      _classCallCheck(this, SellerInfoPageRoutingModule);
    };

    SellerInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SellerInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/shop-hour/seller-info/seller-info.module.ts": function srcAppShopHourSellerInfoSellerInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellerInfoPageModule", function () {
      return SellerInfoPageModule;
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


    var _seller_info_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./seller-info-routing.module */
    "./src/app/shop-hour/seller-info/seller-info-routing.module.ts");
    /* harmony import */


    var _seller_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./seller-info.page */
    "./src/app/shop-hour/seller-info/seller-info.page.ts");

    var SellerInfoPageModule = function SellerInfoPageModule() {
      _classCallCheck(this, SellerInfoPageModule);
    };

    SellerInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _seller_info_routing_module__WEBPACK_IMPORTED_MODULE_6__["SellerInfoPageRoutingModule"]],
      declarations: [_seller_info_page__WEBPACK_IMPORTED_MODULE_7__["SellerInfoPage"]]
    })], SellerInfoPageModule);
    /***/
  },

  /***/
  "./src/app/shop-hour/seller-info/seller-info.page.scss": function srcAppShopHourSellerInfoSellerInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 70px;\n}\nion-header ion-toolbar ion-buttons ion-back-button {\n  --color: var(--white) !important;\n  --icon-font-size: 1.8rem !important;\n}\nion-header ion-toolbar ion-title {\n  width: 100%;\n  height: 60px;\n}\nion-header ion-toolbar ion-title .title_inner .center_title {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  text-align: center;\n}\nion-header ion-toolbar ion-title .title_inner h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n  display: flex;\n  align-items: center;\n  line-height: 68px;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.cart_icon {\n  position: relative;\n  min-width: 27px;\n  height: 46px;\n  line-height: normal;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.cart_icon ion-badge {\n  background: var(--red_color);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50%;\n  width: 17px;\n  height: 17px;\n  line-height: 17px;\n  display: block;\n  font-size: 0.8rem !important;\n  position: absolute;\n  top: 9px;\n  right: 0;\n  font-weight: 500;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.cart_icon ion-icon {\n  position: relative;\n  top: 16px;\n  font-size: 1.7rem;\n  color: var(--white);\n}\nion-header .banner {\n  position: relative;\n  height: 250px;\n  width: 100%;\n  overflow: hidden;\n  overflow: hidden;\n}\nion-header .banner .banner_img {\n  height: 100%;\n  width: 100%;\n}\nion-header .banner .banner_img::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.17);\n}\nion-header .banner h2 {\n  position: absolute;\n  bottom: 20px;\n  left: 0;\n  width: 100%;\n  margin: 0;\n  color: var(--white);\n  padding: 0 13px;\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n.item_container {\n  padding: 0 6px;\n  padding-top: 10px;\n}\n.item_container ion-row ion-col {\n  padding: 8px 6px;\n}\n.item_container ion-row ion-col .item {\n  display: inline-block;\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n}\n.item_container ion-row ion-col .item .item_img {\n  width: 100%;\n  height: 170px;\n  border-radius: 8px;\n  background: var(--bg-color);\n}\n.item_container ion-row ion-col .item .item_img img {\n  width: auto;\n  height: 100%;\n  display: block;\n  margin: auto;\n}\n.item_container ion-row ion-col .item .item_details {\n  padding-top: 12px;\n  width: 100%;\n  overflow: hidden;\n}\n.item_container ion-row ion-col .item .item_details h3 {\n  margin: 0;\n  color: var(--text-dark-primary);\n  font-size: 0.9rem;\n  font-weight: 500;\n  padding-bottom: 3px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.item_container ion-row ion-col .item .item_details h4 {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 400;\n  font-size: 0.7rem;\n  padding-bottom: 8px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.item_container ion-row ion-col .item .item_details h5 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-black);\n}\n.item_container ion-row ion-col .item .item_details h5 ion-badge {\n  background: var(--secondary);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50px;\n  font-weight: 400;\n  font-size: 0.7rem;\n  min-width: 41px;\n  height: 18px;\n  line-height: 18px;\n}\n.item_container ion-row ion-col .item .item_details h5 ion-badge ion-icon {\n  font-size: 0.6rem;\n  position: relative;\n  top: 1px;\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  top: 0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC1ob3VyL3NlbGxlci1pbmZvL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxzaG9wLWhvdXJcXHNlbGxlci1pbmZvXFxzZWxsZXItaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3AtaG91ci9zZWxsZXItaW5mby9zZWxsZXItaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FSO0FERVE7RUFDSSxnQ0FBQTtFQUNBLG1DQUFBO0FDQVo7QURHUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRFo7QURJZ0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FDRnBCO0FES2dCO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNIcEI7QURNd0I7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNKNUI7QURNNEI7RUFDSSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ0poQztBRE80QjtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNMaEM7QURjSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDWlI7QURjUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDWlo7QURjWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQ1poQjtBRGdCUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNkWjtBRG1CQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ2hCSjtBRG1CUTtFQUNJLGdCQUFBO0FDakJaO0FEbUJZO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2pCaEI7QURtQmdCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDakJwQjtBRG1Cb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDakJ4QjtBRHFCZ0I7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ25CcEI7QURxQm9CO0VBQ0ksU0FBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDbkJ4QjtBRHNCb0I7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNwQnhCO0FEdUJvQjtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FDckJ4QjtBRHVCd0I7RUFDSSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNyQjVCO0FEdUI0QjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDckJoQztBRCtCQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQzVCSjtBRDhCSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDNUJSO0FEK0JJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDN0JSO0FEZ0NJO0VBQ0ksZ0JBQUE7QUM5QlI7QURnQ1E7RUFDSSx5QkFBQTtBQzlCWiIsImZpbGUiOiJzcmMvYXBwL3Nob3AtaG91ci9zZWxsZXItaW5mby9zZWxsZXItaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuXG4gICAgICAgIGlvbi1idXR0b25zIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0taWNvbi1mb250LXNpemU6IDEuOHJlbSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLXRpdGxlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuXG4gICAgICAgICAgICAudGl0bGVfaW5uZXIge1xuICAgICAgICAgICAgICAgIC5jZW50ZXJfdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2OHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJi5jYXJ0X2ljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWRfY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYmFubmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAuYmFubmVyX2ltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTNweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLml0ZW1fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDZweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcblxuICAgIGlvbi1yb3cge1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCA2cHg7XG5cbiAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICAuaXRlbV9pbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaXRlbV9kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5lbXB0eS12aWV3IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgdG9wOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xuICAtLWljb24tZm9udC1zaXplOiAxLjhyZW0gIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciAuY2VudGVyX3RpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNjhweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBoMyBzcGFuLmNhcnRfaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAyN3B4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDMgc3Bhbi5jYXJ0X2ljb24gaW9uLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkX2NvbG9yKTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxN3B4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDlweDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDMgc3Bhbi5jYXJ0X2ljb24gaW9uLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTZweDtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5pb24taGVhZGVyIC5iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWhlYWRlciAuYmFubmVyIC5iYW5uZXJfaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuYmFubmVyX2ltZzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE3KTtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciBoMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiAwIDEzcHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaXRlbV9jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDZweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uaXRlbV9jb250YWluZXIgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogOHB4IDZweDtcbn1cbi5pdGVtX2NvbnRhaW5lciBpb24tcm93IGlvbi1jb2wgLml0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaXRlbV9jb250YWluZXIgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE3MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbn1cbi5pdGVtX2NvbnRhaW5lciBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1faW1nIGltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG4uaXRlbV9jb250YWluZXIgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2RldGFpbHMge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaXRlbV9jb250YWluZXIgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2RldGFpbHMgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pdGVtX2NvbnRhaW5lciBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fZGV0YWlscyBoNCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaXRlbV9jb250YWluZXIgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2RldGFpbHMgaDUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG59XG4uaXRlbV9jb250YWluZXIgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2RldGFpbHMgaDUgaW9uLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgbWluLXdpZHRoOiA0MXB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLml0ZW1fY29udGFpbmVyIGlvbi1yb3cgaW9uLWNvbCAuaXRlbSAuaXRlbV9kZXRhaWxzIGg1IGlvbi1iYWRnZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xufVxuXG4uZW1wdHktdmlldyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTtcbn1cbi5lbXB0eS12aWV3IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmVtcHR5LXZpZXcgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW1wdHktdmlldyBidXR0b24ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHNwYW4ge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shop-hour/seller-info/seller-info.page.ts": function srcAppShopHourSellerInfoSellerInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellerInfoPage", function () {
      return SellerInfoPage;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_models_models_shop_hour_constants_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/models/models-shop-hour/constants.models */
    "./src/models/models-shop-hour/constants.models.ts");
    /* harmony import */


    var src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/shoup-hour-services/common/ui-elements.service */
    "./src/app/services/shoup-hour-services/common/ui-elements.service.ts");
    /* harmony import */


    var src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/shoup-hour-services/network/api.service */
    "./src/app/services/shoup-hour-services/network/api.service.ts");

    var SellerInfoPage = /*#__PURE__*/function () {
      function SellerInfoPage(router, navCtrl, translate, uiElementService, apiService) {
        var _this3 = this;

        _classCallCheck(this, SellerInfoPage);

        this.router = router;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.products = new Array();
        this.isLoading = true;
        console.log("getCurrentNavigation", this.router.getCurrentNavigation().extras.state);

        if (this.router.getCurrentNavigation().extras.state) {
          var category = this.router.getCurrentNavigation().extras.state.category;
          var vendors = this.router.getCurrentNavigation().extras.state.vendors;

          if (vendors && vendors.length == 1) {
            this.pageTitle = vendors[0].vendor.name;
            this.pageImage = vendors[0].vendor.image;
            this.translate.get("loading").subscribe(function (value) {
              _this3.uiElementService.presentLoading(value);

              _this3.subscriptions.push(_this3.apiService.getProductsWithVendorId(vendors[0].vendor_id, 1).subscribe(function (res) {
                return _this3.productsRes(res);
              }, function (err) {
                return _this3.productsErr(err);
              }));
            });
          } else if (category != null) {
            this.pageTitle = category.title;
            this.pageImage = category.image;
            this.translate.get("loading").subscribe(function (value) {
              _this3.uiElementService.presentLoading(value);

              _this3.subscriptions.push(_this3.apiService.getProductsWithCategoryId(src_models_models_shop_hour_constants_models__WEBPACK_IMPORTED_MODULE_5__["Constants"].SCOPE_ECOMMERCE, category.id, null, 1).subscribe(function (res) {
                return _this3.productsRes(res);
              }, function (err) {
                return _this3.productsErr(err);
              }));
            });
          } else {
            this.navCtrl.pop();
          }
        }
      }

      _createClass(SellerInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
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
        key: "productsRes",
        value: function productsRes(res) {
          this.products = this.products.concat(res.data);
          this.nextUrl = res.links.next;
          if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
          this.isLoading = false;
          this.uiElementService.dismissLoading();
        }
      }, {
        key: "productsErr",
        value: function productsErr(err) {
          console.log("productsErr", err);
          this.uiElementService.dismissLoading();
          if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
          this.isLoading = false;
        }
      }, {
        key: "doInfiniteProducts",
        value: function doInfiniteProducts(event) {
          var _this4 = this;

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

                    _this4.apiService.setupProduct(pro);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }

              _this4.productsRes(res);
            }, function (err) {
              return _this4.productsErr(err);
            }));
          }
        }
      }, {
        key: "navProDetail",
        value: function navProDetail(pro) {
          var navigationExtras = {
            queryParams: {
              product_id: pro.id
            }
          };
          this.navCtrl.navigateForward(['tabs/main-home/shop-hour/item-detail'], navigationExtras);
        }
      }]);

      return SellerInfoPage;
    }();

    SellerInfoPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"]
      }, {
        type: src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
      }];
    };

    SellerInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-seller-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./seller-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/seller-info/seller-info.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./seller-info.page.scss */
      "./src/app/shop-hour/seller-info/seller-info.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"], src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]])], SellerInfoPage);
    /***/
  }
}]);
//# sourceMappingURL=seller-info-seller-info-module-es5.js.map