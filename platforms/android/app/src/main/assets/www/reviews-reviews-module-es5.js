function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reviews-reviews-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/reviews/reviews.page.html": function node_modulesRawLoaderDistCjsJsSrcAppShopHourReviewsReviewsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<span>{{product.title}}</span>\n\t\t</ion-title>\n\t</ion-toolbar>\n\n\t<div class=\"banner\">\n\t\t<ion-row>\n\t\t\t<ion-col size=\"4\" class=\"ion-text-center\">\n\t\t\t\t<h2>{{'avg_ratings' | translate}}</h2>\n\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t{{product.ratings}} <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t</ion-badge>\n\t\t\t\t<h2>{{product.ratings_count}} {{'ratings' | translate}}</h2>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"8\">\n\t\t\t\t<div class=\"rating_box\">\n\t\t\t\t\t<div class=\"rating d-flex\">\n\t\t\t\t\t\t<p class=\"rating-num d-flex \">5 <ion-icon class=\"zmdi zmdi-star ion-text-center\"></ion-icon>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class=\"rating_scale\">\n\t\t\t\t\t\t\t<div class=\"rating_scale_active\" [style.width]=\"rating.summary[4].percent+'%'\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"ion-text-end\">{{rating.summary[4].total}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"rating d-flex\">\n\t\t\t\t\t\t<p class=\"rating-num d-flex\">4 <ion-icon class=\"zmdi zmdi-star ion-text-center\"></ion-icon>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class=\"rating_scale\">\n\t\t\t\t\t\t\t<div class=\"rating_scale_active\" [style.width]=\"rating.summary[3].percent+'%'\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"ion-text-end\">{{rating.summary[3].total}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"rating d-flex\">\n\t\t\t\t\t\t<p class=\"rating-num d-flex\">3 <ion-icon class=\"zmdi zmdi-star ion-text-center\"></ion-icon>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class=\"rating_scale\">\n\t\t\t\t\t\t\t<div class=\"rating_scale_active\" [style.width]=\"rating.summary[2].percent+'%'\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"ion-text-end\">{{rating.summary[2].total}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"rating d-flex\">\n\t\t\t\t\t\t<p class=\"rating-num d-flex\">2 <ion-icon class=\"zmdi zmdi-star ion-text-center\"></ion-icon>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class=\"rating_scale\">\n\t\t\t\t\t\t\t<div class=\"rating_scale_active\" [style.width]=\"rating.summary[1].percent+'%'\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"ion-text-end\">{{rating.summary[1].total}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"rating d-flex\">\n\t\t\t\t\t\t<p class=\"rating-num d-flex\">1 <ion-icon class=\"zmdi zmdi-star ion-text-center\"></ion-icon>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class=\"rating_scale\">\n\t\t\t\t\t\t\t<div class=\"rating_scale_active\" [style.width]=\"rating.summary[0].percent+'%'\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"ion-text-end\">{{rating.summary[0].total}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</div>\n</ion-header>\n\n\n<ion-content fullscreen class=\"bg_color\">\n\t<div class=\"empty-view\" *ngIf=\"!isLoading && (!reviews || !reviews.length)\">\n\t\t<div style=\"text-align:center;margin-top: 80%;\">\n\t\t\t<img src=\"assets/images/plc_no_review.png\" alt=\"no offers\" />\n\t\t\t<span style=\"color:#9E9E9E; font-weight:bold;\">\n\t\t\t\t{{'empty_reviews' | translate}}\n\t\t\t</span>\n\t\t</div>\n\t</div>\n\t<ion-list lines=\"none\">\n\t\t<h2 *ngIf=\"reviews && reviews.length\">{{'recent_reviews' | translate}}</h2>\n\t\t<ion-item *ngFor=\"let review of reviews\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<div class=\"reviewer_info\">\n\t\t\t\t\t<h3>{{review.user.name}}</h3>\n\t\t\t\t\t<h4 class=\"d-flex\">{{review.created_at}}\n\t\t\t\t\t\t<span class=\"rating_icons end\">\n\t\t\t\t\t\t\t<ion-icon [ngClass]=\"review.rating>=1 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\n\t\t\t\t\t\t\t</ion-icon>\n\t\t\t\t\t\t\t<ion-icon [ngClass]=\"review.rating>=2 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\n\t\t\t\t\t\t\t</ion-icon>\n\t\t\t\t\t\t\t<ion-icon [ngClass]=\"review.rating>=3 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\n\t\t\t\t\t\t\t</ion-icon>\n\t\t\t\t\t\t\t<ion-icon [ngClass]=\"review.rating>=4 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\n\t\t\t\t\t\t\t</ion-icon>\n\t\t\t\t\t\t\t<ion-icon [ngClass]=\"review.rating>=5 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\n\t\t\t\t\t\t\t</ion-icon>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</h4>\n\t\t\t\t</div>\n\t\t\t\t<p>{{review.review}}</p>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n\t<ion-infinite-scroll (ionInfinite)=\"doInfiniteReviews($event)\">\n\t\t<ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{'loading' | translate}}\">\n\t\t</ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n</ion-content>";
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
  "./src/app/shop-hour/reviews/reviews-routing.module.ts": function srcAppShopHourReviewsReviewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewsPageRoutingModule", function () {
      return ReviewsPageRoutingModule;
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


    var _reviews_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reviews.page */
    "./src/app/shop-hour/reviews/reviews.page.ts");

    var routes = [{
      path: '',
      component: _reviews_page__WEBPACK_IMPORTED_MODULE_3__["ReviewsPage"]
    }];

    var ReviewsPageRoutingModule = function ReviewsPageRoutingModule() {
      _classCallCheck(this, ReviewsPageRoutingModule);
    };

    ReviewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReviewsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/shop-hour/reviews/reviews.module.ts": function srcAppShopHourReviewsReviewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewsPageModule", function () {
      return ReviewsPageModule;
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


    var _reviews_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reviews-routing.module */
    "./src/app/shop-hour/reviews/reviews-routing.module.ts");
    /* harmony import */


    var _reviews_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./reviews.page */
    "./src/app/shop-hour/reviews/reviews.page.ts");

    var ReviewsPageModule = function ReviewsPageModule() {
      _classCallCheck(this, ReviewsPageModule);
    };

    ReviewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _reviews_routing_module__WEBPACK_IMPORTED_MODULE_6__["ReviewsPageRoutingModule"]],
      declarations: [_reviews_page__WEBPACK_IMPORTED_MODULE_7__["ReviewsPage"]]
    })], ReviewsPageModule);
    /***/
  },

  /***/
  "./src/app/shop-hour/reviews/reviews.page.scss": function srcAppShopHourReviewsReviewsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  background: var(--white);\n}\nion-header ion-toolbar ion-title span {\n  text-transform: none;\n  letter-spacing: 0;\n  font-size: 1.1rem;\n  width: calc(100% - 50px);\n  display: block;\n  margin: auto;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\nion-header .banner {\n  padding: 16px 15px 15px 15px;\n}\nion-header .banner ion-row {\n  align-items: center;\n}\nion-header .banner ion-row ion-col h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.98rem;\n  font-weight: 400;\n  padding-bottom: 10px;\n}\nion-header .banner ion-row ion-col ion-badge {\n  background: var(--secondary);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50px;\n  font-weight: 400;\n  font-size: 1.35rem;\n  min-width: 77px;\n  height: 35px;\n  line-height: 35px;\n  margin: 0 auto;\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-bottom: 9px;\n}\nion-header .banner ion-row ion-col ion-badge ion-icon {\n  font-size: 1.1rem;\n  position: relative;\n  top: 2px;\n}\nion-header .banner ion-row ion-col .rating_box {\n  border-left: 1px solid rgba(204, 204, 204, 0.6);\n  padding-left: 18px;\n}\nion-header .banner ion-row ion-col .rating_box .rating {\n  width: 100%;\n  margin-bottom: 7px;\n}\nion-header .banner ion-row ion-col .rating_box .rating p {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.9rem;\n}\nion-header .banner ion-row ion-col .rating_box .rating p.rating-num {\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  display: flex !important;\n  align-items: center !important;\n  margin-left: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nion-header .banner ion-row ion-col .rating_box .rating p.rating-num ion-icon {\n  color: var(--yelow_color);\n  font-size: 0.8rem;\n  margin-right: 4px;\n  min-width: 27px;\n}\nion-header .banner ion-row ion-col .rating_box .rating p.ion-text-end {\n  min-width: 35px;\n}\nion-header .banner ion-row ion-col .rating_box .rating .rating_scale {\n  width: calc(100% - 50px);\n  display: block;\n  height: 6px;\n  background: var(--bg-color) !important;\n  position: relative;\n  overflow: hidden;\n  border-radius: 50px;\n}\nion-header .banner ion-row ion-col .rating_box .rating .rating_scale .rating_scale_active {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  background: var(--secondary) !important;\n  border-radius: 50px;\n}\nion-list {\n  background: var(--transparent) !important;\n  padding: 0;\n  padding-top: 17px;\n  width: calc(100% - 25px);\n  margin: 0 auto;\n}\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  text-transform: uppercase;\n  font-size: 1rem;\n  letter-spacing: 1px;\n  padding-bottom: 14px;\n}\nion-list ion-item {\n  padding: 10px 13px;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  background: var(--white);\n  transition: all 0.5s;\n  border-radius: 6px;\n  margin-bottom: 12px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item .item_inner .reviewer_info {\n  width: 100%;\n  padding-bottom: 8px;\n}\nion-list ion-item .item_inner .reviewer_info h3 {\n  margin: 0;\n  font-weight: 500;\n  font-size: 1rem;\n}\nion-list ion-item .item_inner .reviewer_info h4 {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 400;\n  font-size: 0.7rem;\n  letter-spacing: 0.5px;\n}\nion-list ion-item .item_inner .reviewer_info h4 span.rating_icons {\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\nion-list ion-item .item_inner .reviewer_info h4 span.rating_icons ion-icon {\n  font-size: 1rem;\n}\nion-list ion-item .item_inner .reviewer_info h4 span.rating_icons ion-icon.active {\n  color: var(--yelow_color);\n}\nion-list ion-item .item_inner p {\n  margin: 0;\n  font-size: 0.83rem;\n  color: var(--text-dark-primary);\n  padding-bottom: 3px;\n  line-height: 19px;\n  letter-spacing: 0.3px;\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC1ob3VyL3Jldmlld3MvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktY3VzdG9tZXIvc3JjXFxhcHBcXHNob3AtaG91clxccmV2aWV3c1xccmV2aWV3cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3AtaG91ci9yZXZpZXdzL3Jldmlld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msd0JBQUE7QUNDRDtBREVFO0VBQ0Msb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FIO0FESUM7RUFDQyw0QkFBQTtBQ0ZGO0FESUU7RUFDQyxtQkFBQTtBQ0ZIO0FES0k7RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNITDtBRE1JO0VBQ0MsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtBQ0pMO0FETUs7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0pOO0FEUUk7RUFDQywrQ0FBQTtFQUNBLGtCQUFBO0FDTkw7QURRSztFQUNDLFdBQUE7RUFDQSxrQkFBQTtBQ05OO0FEUU07RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQ05QO0FEUU87RUFDQyw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ05SO0FEUVE7RUFDQyx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDTlQ7QURVTztFQUNDLGVBQUE7QUNSUjtBRFlNO0VBQ0Msd0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVlA7QURZTztFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7QUNWUjtBRG9CQTtFQUNDLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDakJEO0FEbUJDO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ2pCRjtBRG9CQztFQUNDLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDbEJGO0FEb0JFO0VBQ0MsV0FBQTtBQ2xCSDtBRG9CRztFQUNDLFdBQUE7RUFDQSxtQkFBQTtBQ2xCSjtBRG9CSTtFQUNDLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNsQkw7QURxQkk7RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNuQkw7QURzQk07RUFDQyw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUNwQlA7QURzQk87RUFDQyxlQUFBO0FDcEJSO0FEc0JRO0VBQ0MseUJBQUE7QUNwQlQ7QUQ0Qkc7RUFDQyxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQzFCSjtBRGdDQTtFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQzdCRDtBRCtCQztFQUNDLFlBQUE7RUFDQSxZQUFBO0FDN0JGO0FEZ0NDO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0FDOUJGO0FEaUNDO0VBQ0MsZ0JBQUE7QUMvQkY7QURpQ0U7RUFDQyx5QkFBQTtBQy9CSCIsImZpbGUiOiJzcmMvYXBwL3Nob3AtaG91ci9yZXZpZXdzL3Jldmlld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG5cdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblxuXHRpb24tdG9vbGJhciBpb24tdGl0bGUge1xuXHRcdHNwYW4ge1xuXHRcdFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMDtcblx0XHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdH1cblx0fVxuXG5cdC5iYW5uZXIge1xuXHRcdHBhZGRpbmc6IDE2cHggMTVweCAxNXB4IDE1cHg7XG5cblx0XHRpb24tcm93IHtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHRcdGlvbi1jb2wge1xuXHRcdFx0XHRoMiB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHRcdFx0XHRmb250LXNpemU6IDAuOThyZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlvbi1iYWRnZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcblx0XHRcdFx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcblx0XHRcdFx0XHQtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cdFx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogMDtcblx0XHRcdFx0XHQtLXBhZGRpbmctZW5kOiAwO1xuXHRcdFx0XHRcdC0tcGFkZGluZy1zdGFydDogMDtcblx0XHRcdFx0XHQtLXBhZGRpbmctdG9wOiAwO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMzVyZW07XG5cdFx0XHRcdFx0bWluLXdpZHRoOiA3N3B4O1xuXHRcdFx0XHRcdGhlaWdodDogMzVweDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMzVweDtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHR3aWR0aDogZml0LWNvbnRlbnQ7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOXB4O1xuXG5cdFx0XHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHR0b3A6IDJweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucmF0aW5nX2JveCB7XG5cdFx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNik7XG5cdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxOHB4O1xuXG5cdFx0XHRcdFx0LnJhdGluZyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDdweDtcblxuXHRcdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOXJlbTtcblxuXHRcdFx0XHRcdFx0XHQmLnJhdGluZy1udW0ge1xuXHRcdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMDtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogZml0LWNvbnRlbnQ7XG5cblx0XHRcdFx0XHRcdFx0XHRpb24taWNvbiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0teWVsb3dfY29sb3IpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjhyZW07XG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDRweDtcblx0XHRcdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogMjdweDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQmLmlvbi10ZXh0LWVuZCB7XG5cdFx0XHRcdFx0XHRcdFx0bWluLXdpZHRoOiAzNXB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5yYXRpbmdfc2NhbGUge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDZweDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblxuXHRcdFx0XHRcdFx0XHQucmF0aW5nX3NjYWxlX2FjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5pb24tbGlzdCB7XG5cdGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuXHRwYWRkaW5nOiAwO1xuXHRwYWRkaW5nLXRvcDogMTdweDtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xuXHRtYXJnaW46IDAgYXV0bztcblxuXHRoMiB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiAxNHB4O1xuXHR9XG5cblx0aW9uLWl0ZW0ge1xuXHRcdHBhZGRpbmc6IDEwcHggMTNweDtcblx0XHRtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuXHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblx0XHQtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xuXHRcdC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuXHRcdHRyYW5zaXRpb246IGFsbCAwLjVzO1xuXHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG5cdFx0Lml0ZW1faW5uZXIge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdC5yZXZpZXdlcl9pbmZvIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiA4cHg7XG5cblx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGg0IHtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAwLjdyZW07XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXG5cdFx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0XHQmLnJhdGluZ19pY29ucyB7XG5cdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG5cblx0XHRcdFx0XHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblxuXHRcdFx0XHRcdFx0XHRcdCYuYWN0aXZlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS15ZWxvd19jb2xvcik7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHAge1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMC44M3JlbTtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtZGFyay1wcmltYXJ5KTtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDNweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDE5cHg7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjNweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLmVtcHR5LXZpZXcge1xuXHR3aWR0aDogMjAwcHg7XG5cdG1hcmdpbjogYXV0bztcblx0aGVpZ2h0OiAyMDBweDtcblx0dG9wOiAxMCU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdGJvdHRvbTogMTAlO1xuXG5cdGltZyB7XG5cdFx0d2lkdGg6IDEwMHB4O1xuXHRcdG1hcmdpbjogYXV0bztcblx0fVxuXG5cdHNwYW4ge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdGJ1dHRvbiB7XG5cdFx0bWFyZ2luLXRvcDogNTBweDtcblxuXHRcdHNwYW4ge1xuXHRcdFx0ZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcblx0XHR9XG5cdH1cbn1cbiIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSBzcGFuIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciB7XG4gIHBhZGRpbmc6IDE2cHggMTVweCAxNXB4IDE1cHg7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaW9uLXJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaW9uLXJvdyBpb24tY29sIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC45OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaW9uLXJvdyBpb24tY29sIGlvbi1iYWRnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xuICBtaW4td2lkdGg6IDc3cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tYm90dG9tOiA5cHg7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaW9uLXJvdyBpb24tY29sIGlvbi1iYWRnZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIGlvbi1yb3cgaW9uLWNvbCAucmF0aW5nX2JveCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjYpO1xuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaW9uLXJvdyBpb24tY29sIC5yYXRpbmdfYm94IC5yYXRpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIGlvbi1yb3cgaW9uLWNvbCAucmF0aW5nX2JveCAucmF0aW5nIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaW9uLXJvdyBpb24tY29sIC5yYXRpbmdfYm94IC5yYXRpbmcgcC5yYXRpbmctbnVtIHtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaW9uLXJvdyBpb24tY29sIC5yYXRpbmdfYm94IC5yYXRpbmcgcC5yYXRpbmctbnVtIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXllbG93X2NvbG9yKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBtaW4td2lkdGg6IDI3cHg7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaW9uLXJvdyBpb24tY29sIC5yYXRpbmdfYm94IC5yYXRpbmcgcC5pb24tdGV4dC1lbmQge1xuICBtaW4td2lkdGg6IDM1cHg7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaW9uLXJvdyBpb24tY29sIC5yYXRpbmdfYm94IC5yYXRpbmcgLnJhdGluZ19zY2FsZSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcikgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIGlvbi1yb3cgaW9uLWNvbCAucmF0aW5nX2JveCAucmF0aW5nIC5yYXRpbmdfc2NhbGUgLnJhdGluZ19zY2FsZV9hY3RpdmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogMTdweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbmlvbi1saXN0IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDEwcHggMTNweDtcbiAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5yZXZpZXdlcl9pbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAucmV2aWV3ZXJfaW5mbyBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnJldmlld2VyX2luZm8gaDQge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5yZXZpZXdlcl9pbmZvIGg0IHNwYW4ucmF0aW5nX2ljb25zIHtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5yZXZpZXdlcl9pbmZvIGg0IHNwYW4ucmF0aW5nX2ljb25zIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnJldmlld2VyX2luZm8gaDQgc3Bhbi5yYXRpbmdfaWNvbnMgaW9uLWljb24uYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLXllbG93X2NvbG9yKTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC44M3JlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyay1wcmltYXJ5KTtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn1cblxuLmVtcHR5LXZpZXcge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdG9wOiAxMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMTAlO1xufVxuLmVtcHR5LXZpZXcgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uZW1wdHktdmlldyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5lbXB0eS12aWV3IGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uZW1wdHktdmlldyBidXR0b24gc3BhbiB7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shop-hour/reviews/reviews.page.ts": function srcAppShopHourReviewsReviewsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewsPage", function () {
      return ReviewsPage;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_models_models_shop_hour_rating_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/models/models-shop-hour/rating.models */
    "./src/models/models-shop-hour/rating.models.ts");
    /* harmony import */


    var src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/models/models-shop-hour/helper.models */
    "./src/models/models-shop-hour/helper.models.ts");
    /* harmony import */


    var src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/shoup-hour-services/common/ui-elements.service */
    "./src/app/services/shoup-hour-services/common/ui-elements.service.ts");
    /* harmony import */


    var src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/shoup-hour-services/network/api.service */
    "./src/app/services/shoup-hour-services/network/api.service.ts");

    var ReviewsPage = /*#__PURE__*/function () {
      function ReviewsPage(router, translate, uiElementService, apiService) {
        _classCallCheck(this, ReviewsPage);

        this.router = router;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.isLoading = true;
        this.reviews = new Array();
      }

      _createClass(ReviewsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.rating = src_models_models_shop_hour_rating_models__WEBPACK_IMPORTED_MODULE_4__["Rating"].getDefault();
          console.log("getCurrentNavigation", this.router.getCurrentNavigation().extras.state);

          if (this.router.getCurrentNavigation().extras.state) {
            this.product = this.router.getCurrentNavigation().extras.state.product;
            this.translate.get("loading").subscribe(function (value) {
              _this3.uiElementService.presentLoading(value);

              _this3.subscriptions.push(_this3.apiService.getRatingSummaryProduct(_this3.product.id).subscribe(function (res) {
                return _this3.rating = res;
              }, function (err) {
                return console.log("getRatingSummaryProduct", err);
              }));

              _this3.subscriptions.push(_this3.apiService.getReviewsProduct(_this3.product.id, 1).subscribe(function (res) {
                return setTimeout(function () {
                  return _this3.reviewsRes(res);
                }, 500);
              }, function (err) {
                return _this3.reviewsErr(err);
              }));
            });
          }
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
        key: "doInfiniteReviews",
        value: function doInfiniteReviews(event) {
          var _this4 = this;

          if (this.nextUrl == null) {
            event.target.complete();
          } else {
            this.infiniteScrollEvent = event;
            this.subscriptions.push(this.apiService.getURL(this.nextUrl).subscribe(function (res) {
              var locale = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getLocale();

              var _iterator2 = _createForOfIteratorHelper(res.data),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var review = _step2.value;
                  review.created_at = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].formatTimestampDate(review.created_at, locale);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              _this4.reviewsRes(res);
            }, function (err) {
              return _this4.reviewsErr(err);
            }));
          }
        }
      }, {
        key: "reviewsRes",
        value: function reviewsRes(res) {
          this.reviews = this.reviews.concat(res.data);
          this.nextUrl = res.links.next;
          if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
          this.isLoading = false;
          this.uiElementService.dismissLoading();
        }
      }, {
        key: "reviewsErr",
        value: function reviewsErr(err) {
          console.log("productsErr", err);
          this.uiElementService.dismissLoading();
          if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
          this.isLoading = false;
        }
      }]);

      return ReviewsPage;
    }();

    ReviewsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"]
      }, {
        type: src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
      }];
    };

    ReviewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reviews',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./reviews.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/reviews/reviews.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./reviews.page.scss */
      "./src/app/shop-hour/reviews/reviews.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_6__["UiElementsService"], src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]])], ReviewsPage);
    /***/
  },

  /***/
  "./src/models/models-shop-hour/rating.models.ts": function srcModelsModelsShopHourRatingModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Rating", function () {
      return Rating;
    });
    /* harmony import */


    var _rating_summary_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./rating-summary.models */
    "./src/models/models-shop-hour/rating-summary.models.ts");

    var Rating = /*#__PURE__*/function () {
      function Rating() {
        _classCallCheck(this, Rating);
      }

      _createClass(Rating, null, [{
        key: "getDefault",
        value: function getDefault() {
          var toReturn = new Rating();
          toReturn.average_rating = "0";
          toReturn.total_completed = 0;
          toReturn.total_ratings = 0;
          toReturn.summary = _rating_summary_models__WEBPACK_IMPORTED_MODULE_0__["RatingSummary"].defaultArray();
          return toReturn;
        }
      }]);

      return Rating;
    }();
    /***/

  }
}]);
//# sourceMappingURL=reviews-reviews-module-es5.js.map