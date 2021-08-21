function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-reviews-doctor-reviews-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor-reviews/doctor-reviews.page.html": function node_modulesRawLoaderDistCjsJsSrcAppDoctorReviewsDoctorReviewsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{'reviews2' | translate}}</ion-title>\n    </ion-toolbar>\n    <div class=\"banner\">\n        <h2 class=\"d-flex\">\n       {{doctor?.name}}\n            <span class=\"end\">\n                <ion-icon class=\"zmdi zmdi-star ion-text-start\"></ion-icon>\n                {{doctor?.ratings}}\n            </span>\n        </h2>\n        <h3 class=\"d-flex\"> <span class=\"end\">{{'avg_review' | translate}}</span></h3>\n    </div>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n    <div class=\"empty-view\" *ngIf=\"!isLoading && (!reviews || !reviews.length)\">\n        <div style=\"text-align:center;\">\n            <img src=\"assets/images/empty_orders.png\" alt=\"no offers\" />\n            <span style=\"color:#9E9E9E; font-weight:bold;\">\n                {{'empty_reviews' | translate}}\n            </span>\n        </div>\n    </div>\n    <ion-list lines=\"none\">\n        <ion-item *ngFor=\"let review of reviews\">\n            <div class=\"item_inner\">\n                <div class=\"reviewer_details d-flex\">\n                    <div class=\"img_box center_img\">\n                        <img [src]=\"review.user.image_url\" class=\"crop_img\">\n                    </div>\n                    <div class=\"text_box\">\n                        <h2 class=\"d-flex\">\n                            <span class=\"reviewer_name\">{{review.user.name}}</span>\n                            <span class=\"end\">\n                                {{review.rating}}\n                                &nbsp;\n                                <ion-icon [ngClass]=\"review.rating>=1 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\n                                </ion-icon>\n                                <ion-icon [ngClass]=\"review.rating>=2 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\n                                </ion-icon>\n                                <ion-icon [ngClass]=\"review.rating>=3 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\n                                </ion-icon>\n                                <ion-icon [ngClass]=\"review.rating>=4 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\n                                </ion-icon>\n                                <ion-icon [ngClass]=\"review.rating>=5 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\n                                </ion-icon>\n                            </span>\n                        </h2>\n\n                        <h3 class=\"d-flex\">\n                            <!-- {{'for' | translate}}&nbsp;<strong>Cold Fever</strong> -->\n                            <span class=\"end\">{{review.created_at}}</span>\n                        </h3>\n                    </div>\n                </div>\n                <p>{{review.review}}</p>\n            </div>\n        </ion-item>\n        <ion-infinite-scroll (ionInfinite)=\"doInfiniteReviews($event)\">\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{'loading' | translate}}\">\n            </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/doctor-reviews/doctor-reviews-routing.module.ts": function srcAppDoctorReviewsDoctorReviewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorReviewsPageRoutingModule", function () {
      return DoctorReviewsPageRoutingModule;
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


    var _doctor_reviews_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./doctor-reviews.page */
    "./src/app/doctor-reviews/doctor-reviews.page.ts");

    var routes = [{
      path: '',
      component: _doctor_reviews_page__WEBPACK_IMPORTED_MODULE_3__["DoctorReviewsPage"]
    }];

    var DoctorReviewsPageRoutingModule = function DoctorReviewsPageRoutingModule() {
      _classCallCheck(this, DoctorReviewsPageRoutingModule);
    };

    DoctorReviewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DoctorReviewsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/doctor-reviews/doctor-reviews.module.ts": function srcAppDoctorReviewsDoctorReviewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorReviewsPageModule", function () {
      return DoctorReviewsPageModule;
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


    var _doctor_reviews_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./doctor-reviews-routing.module */
    "./src/app/doctor-reviews/doctor-reviews-routing.module.ts");
    /* harmony import */


    var _doctor_reviews_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./doctor-reviews.page */
    "./src/app/doctor-reviews/doctor-reviews.page.ts");

    var DoctorReviewsPageModule = function DoctorReviewsPageModule() {
      _classCallCheck(this, DoctorReviewsPageModule);
    };

    DoctorReviewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _doctor_reviews_routing_module__WEBPACK_IMPORTED_MODULE_6__["DoctorReviewsPageRoutingModule"]],
      declarations: [_doctor_reviews_page__WEBPACK_IMPORTED_MODULE_7__["DoctorReviewsPage"]]
    })], DoctorReviewsPageModule);
    /***/
  },

  /***/
  "./src/app/doctor-reviews/doctor-reviews.page.scss": function srcAppDoctorReviewsDoctorReviewsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  background: var(--white);\n}\nion-header .banner {\n  padding: 18px;\n}\nion-header .banner h2 {\n  color: var(--text-dark);\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 500;\n  padding-bottom: 4px;\n}\nion-header .banner h2 span {\n  display: flex;\n  align-items: center;\n  color: var(--yelow_color);\n  font-weight: 500;\n  font-size: 0.95rem;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\nion-header .banner h2 span ion-icon {\n  min-width: 20px;\n  font-size: 1.1rem;\n}\nion-header .banner h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 0;\n}\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 8px;\n}\nion-list ion-item {\n  padding: 11px 18px;\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin-bottom: 8px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item .item_inner .reviewer_details {\n  padding-bottom: 17px;\n  width: 100%;\n}\nion-list ion-item .item_inner .reviewer_details .img_box {\n  min-width: 37px;\n  height: 37px;\n  border-radius: 50%;\n  margin-right: 12px;\n}\nion-list ion-item .item_inner .reviewer_details .text_box {\n  width: 100%;\n  overflow: hidden;\n}\nion-list ion-item .item_inner .reviewer_details .text_box h2 {\n  margin: 0;\n  font-size: 0.9rem;\n  font-weight: 500;\n  padding-bottom: 3px;\n}\nion-list ion-item .item_inner .reviewer_details .text_box h2 span.reviewer_name {\n  width: 100%;\n  max-width: calc(100% - 100px);\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: block;\n  color: var(--text-dark);\n  font-size: 1rem;\n  letter-spacing: 0.4px;\n}\nion-list ion-item .item_inner .reviewer_details .text_box h2 span.end {\n  display: flex;\n  align-items: center;\n  font-size: 0.8rem;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\nion-list ion-item .item_inner .reviewer_details .text_box h2 span.end ion-icon {\n  color: #dddddd;\n  font-size: 0.8rem;\n}\nion-list ion-item .item_inner .reviewer_details .text_box h2 span.end ion-icon.active {\n  color: var(--yelow_color);\n}\nion-list ion-item .item_inner .reviewer_details .text_box h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.7rem;\n  font-weight: 400;\n}\nion-list ion-item .item_inner .reviewer_details .text_box h3 strong {\n  font-weight: 500;\n  color: var(--text-black);\n}\nion-list ion-item .item_inner .reviewer_details .text_box h3 span.end {\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 0.7rem;\n}\nion-list ion-item .item_inner p {\n  margin: 0;\n  font-size: 0.9rem;\n  line-height: 22px;\n  color: var(--text-black);\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9yLXJldmlld3MvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktY3VzdG9tZXIvc3JjXFxhcHBcXGRvY3Rvci1yZXZpZXdzXFxkb2N0b3ItcmV2aWV3cy5wYWdlLnNjc3MiLCJzcmMvYXBwL2RvY3Rvci1yZXZpZXdzL2RvY3Rvci1yZXZpZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7QUNDUjtBRENRO0VBQ0ksdUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ1o7QURDWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBQ0NoQjtBRENnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NwQjtBRElRO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRlo7QURPQTtFQUNJLHlDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0pKO0FETUk7RUFDSSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSxrQkFBQTtBQ0pSO0FETVE7RUFDSSxXQUFBO0FDSlo7QURNWTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtBQ0poQjtBRE1nQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0pwQjtBRE9nQjtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0xwQjtBRE9vQjtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNMeEI7QURRNEI7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNOaEM7QURTNEI7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBQ1BoQztBRFNnQztFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ1BwQztBRFNvQztFQUNJLHlCQUFBO0FDUHhDO0FEY29CO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1p4QjtBRGN3QjtFQUNJLGdCQUFBO0VBQ0Esd0JBQUE7QUNaNUI7QURld0I7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNiNUI7QURtQlk7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FDakJoQjtBRHNCQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ25CSjtBRHFCSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDbkJSO0FEc0JJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDcEJSO0FEdUJJO0VBQ0ksZ0JBQUE7QUNyQlI7QUR1QlE7RUFDSSx5QkFBQTtBQ3JCWiIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci1yZXZpZXdzL2RvY3Rvci1yZXZpZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cclxuICAgIC5iYW5uZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDE4cHg7XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS15ZWxvd19jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOTVyZW07XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nOiAxMXB4IDE4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICAgICAgICAuaXRlbV9pbm5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgLnJldmlld2VyX2RldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE3cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnJldmlld2VyX25hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC40cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5lbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGRkZGRkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS15ZWxvd19jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmVuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmVtcHR5LXZpZXcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAxMCU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG59XG5pb24taGVhZGVyIC5iYW5uZXIge1xuICBwYWRkaW5nOiAxOHB4O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIGgyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIGgyIHNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0teWVsb3dfY29sb3IpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaDIgc3BhbiBpb24taWNvbiB7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5pb24taGVhZGVyIC5iYW5uZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAxMXB4IDE4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5yZXZpZXdlcl9kZXRhaWxzIHtcbiAgcGFkZGluZy1ib3R0b206IDE3cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnJldmlld2VyX2RldGFpbHMgLmltZ19ib3gge1xuICBtaW4td2lkdGg6IDM3cHg7XG4gIGhlaWdodDogMzdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAucmV2aWV3ZXJfZGV0YWlscyAudGV4dF9ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5yZXZpZXdlcl9kZXRhaWxzIC50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAucmV2aWV3ZXJfZGV0YWlscyAudGV4dF9ib3ggaDIgc3Bhbi5yZXZpZXdlcl9uYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5yZXZpZXdlcl9kZXRhaWxzIC50ZXh0X2JveCBoMiBzcGFuLmVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnJldmlld2VyX2RldGFpbHMgLnRleHRfYm94IGgyIHNwYW4uZW5kIGlvbi1pY29uIHtcbiAgY29sb3I6ICNkZGRkZGQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnJldmlld2VyX2RldGFpbHMgLnRleHRfYm94IGgyIHNwYW4uZW5kIGlvbi1pY29uLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS15ZWxvd19jb2xvcik7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAucmV2aWV3ZXJfZGV0YWlscyAudGV4dF9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnJldmlld2VyX2RldGFpbHMgLnRleHRfYm94IGgzIHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5yZXZpZXdlcl9kZXRhaWxzIC50ZXh0X2JveCBoMyBzcGFuLmVuZCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG59XG5cbi5lbXB0eS12aWV3IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMjAwcHg7XG4gIHRvcDogMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDEwJTtcbn1cbi5lbXB0eS12aWV3IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmVtcHR5LXZpZXcgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW1wdHktdmlldyBidXR0b24ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHNwYW4ge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/doctor-reviews/doctor-reviews.page.ts": function srcAppDoctorReviewsDoctorReviewsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorReviewsPage", function () {
      return DoctorReviewsPage;
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


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");

    var DoctorReviewsPage = /*#__PURE__*/function () {
      function DoctorReviewsPage(router, translate, uiElementService, apiService) {
        var _this = this;

        _classCallCheck(this, DoctorReviewsPage);

        this.router = router;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.isLoading = true;
        this.reviews = new Array(); // console.log(this.router.getCurrentNavigation().extras.state)

        if (this.router.getCurrentNavigation().extras.state) {
          this.doctor = this.router.getCurrentNavigation().extras.state.doctor;
          this.translate.get("loading").subscribe(function (value) {
            _this.uiElementService.presentLoading(value);

            _this.subscriptions.push(_this.apiService.getReviewsDoctor(_this.doctor.id, 1).subscribe(function (res) {
              return _this.reviewsRes(res);
            }, function (err) {
              return _this.reviewsErr(err);
            }));
          });
        }
      }

      _createClass(DoctorReviewsPage, [{
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
        key: "doInfiniteReviews",
        value: function doInfiniteReviews(event) {
          var _this2 = this;

          if (this.nextUrl == null) {
            event.target.complete();
          } else {
            this.infiniteScrollEvent = event;
            this.subscriptions.push(this.apiService.getURL(this.nextUrl).subscribe(function (res) {
              var locale = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getLocale();

              var _iterator2 = _createForOfIteratorHelper(res.data),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var review = _step2.value;
                  review.created_at = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].formatTimestampDate(review.created_at, locale);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              _this2.reviewsRes(res);
            }, function (err) {
              return _this2.reviewsErr(err);
            }));
          }
        }
      }, {
        key: "reviewsRes",
        value: function reviewsRes(res) {
          this.reviews = this.reviews.concat(res.data);
          console.log(this.reviews);
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

      return DoctorReviewsPage;
    }();

    DoctorReviewsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }];
    };

    DoctorReviewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-doctor-reviews',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./doctor-reviews.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor-reviews/doctor-reviews.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./doctor-reviews.page.scss */
      "./src/app/doctor-reviews/doctor-reviews.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])], DoctorReviewsPage);
    /***/
  }
}]);
//# sourceMappingURL=doctor-reviews-doctor-reviews-module-es5.js.map