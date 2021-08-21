function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-view-map-view-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/map-view/map-view.page.html": function node_modulesRawLoaderDistCjsJsSrcAppMapViewMapViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'map_view' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\" fullscreen=\"true\">\r\n    <div #map id=\"map\" class=\"map\">\r\n        <!-- <ion-spinner></ion-spinner> -->\r\n    </div>\r\n    <div #pleaseConnect id=\"please-connect\">\r\n        <!-- <p>{{'loading' | translate}}</p> -->\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-list lines=\"none\">\r\n        <ion-item *ngFor=\"let doctor of doctors\" (click)=\"navDocProfile(doctor)\">\r\n            <div class=\"item_inner\">\r\n                <!--\r\n\t\t\t\t\t<div *ngIf=\"doctor.user && doctor.user.image_url\" class=\"img_box center_img\">\r\n\t\t\t\t\t\t<img [src]=\"doctor.user.image_url\" class=\"crop_img\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"!doctor.user || !doctor.user.image_url\" class=\"img_box center_img\">\r\n\t\t\t\t\t\t<img src=\"assets/images/empty_dp.png\" class=\"crop_img\">\r\n\t\t\t\t\t</div>\r\n-->\r\n                <div class=\"text_box\">\r\n                    <h2>{{doctor.name}}</h2>\r\n                    <h3>{{doctor.specializations_text}}\r\n                        <!-- <span>{{'at' | translate}}</span> {{doctor.address}} -->\r\n                    </h3>\r\n\r\n                    <ion-row>\r\n                        <ion-col size=\"4\">\r\n                            <h2>{{'exp' | translate}}&nbsp;<strong>{{doctor.experience_years}}\r\n                                    {{'years' | translate}}</strong></h2>\r\n                        </ion-col>\r\n                        <ion-col size=\"2\">\r\n                            <h2>{{'fees' | translate}}&nbsp;<strong>{{currency_icon}}{{doctor.consultancy_fee}}</strong>\r\n                            </h2>\r\n                        </ion-col>\r\n\r\n                        <ion-col size=\"6\" class=\"d-flex\">\r\n                            <h2 class=\"end\">\r\n                                <ion-icon [ngClass]=\"doctor.ratings>=1 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                </ion-icon>\r\n                                <ion-icon [ngClass]=\"doctor.ratings>=2 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                </ion-icon>\r\n                                <ion-icon [ngClass]=\"doctor.ratings>=3 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                </ion-icon>\r\n                                <ion-icon [ngClass]=\"doctor.ratings>=4 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                </ion-icon>\r\n                                <ion-icon [ngClass]=\"doctor.ratings>=5 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \">\r\n                                </ion-icon>\r\n                                &nbsp;\r\n                                ({{doctor.ratings_count}})\r\n                            </h2>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </div>\r\n            </div>\r\n        </ion-item>\r\n\r\n        <!-- <ion-item  class=\"active\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box center_img\">\r\n\t\t\t\t\t\t<img src=\"assets/images/doc4.png\" class=\"crop_img\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\" >\r\n\t\t\t\t\t\t<h2>Dr. Joseph Williamoson</h2>\r\n\t\t\t\t\t\t<h3>Cardiac Surgeon</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-info-outline\"></ion-icon>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_content\" >\r\n\t\t\t\t\t<p>At Apple Hospital, Wallter street, Wallington, New York.</p>\r\n\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col size=\"4\">\r\n\t\t\t\t\t\t\t<h2>{{'exp' | translate}}&nbsp;<strong>18 years</strong></h2>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t\t\t<h2>{{'fees' | translate}}&nbsp;<strong>$30</strong></h2>\r\n\t\t\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t\t\t<ion-col size=\"6\" class=\"d-flex\">\r\n\t\t\t\t\t\t\t<h2 class=\"end\">\r\n\t\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-star active\"></ion-icon>\r\n\t\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-star active\"></ion-icon>\r\n\t\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-star active\"></ion-icon>\r\n\t\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-star active\"></ion-icon>\r\n\t\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-star\"></ion-icon>\r\n\t\t\t\t\t\t\t\t&nbsp;\r\n\t\t\t\t\t\t\t\t(152)\r\n\t\t\t\t\t\t\t</h2>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item> -->\r\n\r\n    </ion-list>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/map-view/map-view-routing.module.ts": function srcAppMapViewMapViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapViewPageRoutingModule", function () {
      return MapViewPageRoutingModule;
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


    var _map_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./map-view.page */
    "./src/app/map-view/map-view.page.ts");

    var routes = [{
      path: '',
      component: _map_view_page__WEBPACK_IMPORTED_MODULE_3__["MapViewPage"]
    }];

    var MapViewPageRoutingModule = function MapViewPageRoutingModule() {
      _classCallCheck(this, MapViewPageRoutingModule);
    };

    MapViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MapViewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/map-view/map-view.module.ts": function srcAppMapViewMapViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapViewPageModule", function () {
      return MapViewPageModule;
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


    var _map_view_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./map-view-routing.module */
    "./src/app/map-view/map-view-routing.module.ts");
    /* harmony import */


    var _map_view_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./map-view.page */
    "./src/app/map-view/map-view.page.ts");
    /* harmony import */


    var _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/network/google-maps.service */
    "./src/app/services/network/google-maps.service.ts");

    var MapViewPageModule = function MapViewPageModule() {
      _classCallCheck(this, MapViewPageModule);
    };

    MapViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _map_view_routing_module__WEBPACK_IMPORTED_MODULE_6__["MapViewPageRoutingModule"]],
      providers: [_services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsService"]],
      declarations: [_map_view_page__WEBPACK_IMPORTED_MODULE_7__["MapViewPage"]]
    })], MapViewPageModule);
    /***/
  },

  /***/
  "./src/app/map-view/map-view.page.scss": function srcAppMapViewMapViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.map img {\n  width: 100%;\n  height: 100%;\n}\n.map .doctors {\n  position: absolute;\n  z-index: 999;\n  width: 65px;\n  height: 65px;\n  display: flex;\n  align-items: center;\n  align-self: center;\n}\n.map .doctors::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  opacity: 0.3;\n}\n.map .doctors .img_box {\n  width: 47px;\n  height: 47px;\n  border: 3px solid var(--primary);\n  border-radius: 50%;\n  margin: auto;\n  align-self: center;\n}\n.map .doctors.active .img_box {\n  border-color: var(--secondary);\n}\n.map .doctors.active::before {\n  background: var(--secondary);\n}\nion-footer {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  bottom: 0px;\n}\nion-footer ion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 10px;\n  overflow: hidden;\n  overflow-x: scroll;\n  white-space: nowrap;\n  height: 144px;\n}\nion-footer ion-list ion-item {\n  display: inline-block;\n  padding: 19px 18px;\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin: 0 4px;\n  min-width: 280px;\n  border-radius: 3px;\n  box-shadow: 0 6px 16px -3px rgba(0, 0, 0, 0.2);\n  max-width: 301px;\n}\nion-footer ion-list ion-item .item_inner {\n  width: 100%;\n}\nion-footer ion-list ion-item .item_inner .text_box {\n  width: 100%;\n  overflow: hidden;\n}\nion-footer ion-list ion-item .item_inner .text_box h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding-bottom: 4px;\n  color: var(--text-dark);\n}\nion-footer ion-list ion-item .item_inner .text_box h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.8rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  min-height: 30.4px;\n  margin-bottom: 6px;\n}\nion-footer ion-list ion-item .item_inner .text_box ion-row {\n  margin: 0 -5px;\n}\nion-footer ion-list ion-item .item_inner .text_box ion-row ion-col {\n  padding: 0 5px;\n}\nion-footer ion-list ion-item .item_inner .text_box ion-row ion-col h2 {\n  margin: 0;\n  font-size: 0.73rem;\n  font-weight: 400;\n  color: var(--text-light2);\n  display: flex;\n  align-content: center;\n  padding: 0;\n}\nion-footer ion-list ion-item .item_inner .text_box ion-row ion-col h2 strong {\n  color: #000;\n  font-weight: 500;\n}\nion-footer ion-list ion-item .item_inner .text_box ion-row ion-col h2 ion-icon {\n  color: #dddddd;\n  font-size: 0.8rem;\n}\nion-footer ion-list ion-item .item_inner .text_box ion-row ion-col h2 ion-icon.active {\n  color: var(--yelow_color);\n}\nion-footer ion-list ion-item:first-child {\n  margin-left: 8px;\n}\nion-footer ion-list ion-item:last-child {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLXZpZXcvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktY3VzdG9tZXIvc3JjXFxhcHBcXG1hcC12aWV3XFxtYXAtdmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL21hcC12aWV3L21hcC12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NSO0FERUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURFUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7QUNEWjtBRElRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRlo7QURNWTtFQUNJLDhCQUFBO0FDSmhCO0FET1k7RUFDSSw0QkFBQTtBQ0xoQjtBRFlBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNUSjtBRFdJO0VBQ0kseUNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ1RSO0FEV1E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFrRUEsZ0JBQUE7QUMxRVo7QURTWTtFQUNJLFdBQUE7QUNQaEI7QURTZ0I7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNQcEI7QURTb0I7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNQeEI7QURVb0I7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1J4QjtBRFdvQjtFQUNJLGNBQUE7QUNUeEI7QURXd0I7RUFDSSxjQUFBO0FDVDVCO0FEVzRCO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNUaEM7QURXZ0M7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNUcEM7QURZZ0M7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNWcEM7QURZb0M7RUFDSSx5QkFBQTtBQ1Z4QztBRG1CWTtFQUNJLGdCQUFBO0FDakJoQjtBRHNCWTtFQUNJLGlCQUFBO0FDcEJoQiIsImZpbGUiOiJzcmMvYXBwL21hcC12aWV3L21hcC12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kb2N0b3JzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAvL1x0XHRcdGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IC4zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltZ19ib3gge1xyXG4gICAgICAgICAgICB3aWR0aDogNDdweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgLmltZ19ib3gge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcblxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDRweDtcclxuXHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE5cHggMThweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDE2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzAuNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24tcm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIC01cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjczcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkZGRkZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXllbG93X2NvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwMXB4O1xyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIubWFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFwIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFwIC5kb2N0b3JzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5tYXAgLmRvY3RvcnM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3BhY2l0eTogMC4zO1xufVxuLm1hcCAuZG9jdG9ycyAuaW1nX2JveCB7XG4gIHdpZHRoOiA0N3B4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLm1hcCAuZG9jdG9ycy5hY3RpdmUgLmltZ19ib3gge1xuICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG59XG4ubWFwIC5kb2N0b3JzLmFjdGl2ZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMHB4O1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGhlaWdodDogMTQ0cHg7XG59XG5pb24tZm9vdGVyIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxOXB4IDE4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDRweDtcbiAgbWluLXdpZHRoOiAyODBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwIDZweCAxNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXgtd2lkdGg6IDMwMXB4O1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1mb290ZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG1pbi1oZWlnaHQ6IDMwLjRweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaW9uLXJvdyB7XG4gIG1hcmdpbjogMCAtNXB4O1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5pb24tZm9vdGVyIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBpb24tcm93IGlvbi1jb2wgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC43M3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaW9uLXJvdyBpb24tY29sIGgyIHN0cm9uZyB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaW9uLXJvdyBpb24tY29sIGgyIGlvbi1pY29uIHtcbiAgY29sb3I6ICNkZGRkZGQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaW9uLXJvdyBpb24tY29sIGgyIGlvbi1pY29uLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS15ZWxvd19jb2xvcik7XG59XG5pb24tZm9vdGVyIGlvbi1saXN0IGlvbi1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbmlvbi1mb290ZXIgaW9uLWxpc3QgaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/map-view/map-view.page.ts": function srcAppMapViewMapViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapViewPage", function () {
      return MapViewPage;
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


    var _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/network/google-maps.service */
    "./src/app/services/network/google-maps.service.ts");
    /* harmony import */


    var _assets_scripts_html_map_marker_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../assets/scripts/html-map-marker.js */
    "./src/assets/scripts/html-map-marker.js");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");

    var MapViewPage = /*#__PURE__*/function () {
      function MapViewPage(router, navCtrl, maps) {
        _classCallCheck(this, MapViewPage);

        this.router = router;
        this.navCtrl = navCtrl;
        this.maps = maps;
        this.doctors = new Array();
        this.initialized = false;
        console.log("getCurrentNavigation", this.router.getCurrentNavigation().extras.state);

        if (this.router.getCurrentNavigation().extras.state) {
          this.doctors = this.router.getCurrentNavigation().extras.state.doctors;
        }
      }

      _createClass(MapViewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currency_icon = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getSetting("currency_icon");
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          if (!this.initialized) {
            var mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement, null).then(function () {
              _this.initialized = true;

              _this.plotMarkers();
            })["catch"](function (err) {
              console.log("maps.init", err);

              _this.close();
            });
            mapLoaded["catch"](function (err) {
              console.log("mapLoaded", err);

              _this.close();
            });
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.navCtrl.pop();
        }
      }, {
        key: "plotMarkers",
        value: function plotMarkers() {
          var _this2 = this;

          var posBonds = new google.maps.LatLngBounds();

          var _iterator = _createForOfIteratorHelper(this.doctors),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var doc = _step.value;
              var posDoc = new google.maps.LatLng(Number(doc.hospitalClosest.latitude), Number(doc.hospitalClosest.longitude));
              var markerDoc = Object(_assets_scripts_html_map_marker_js__WEBPACK_IMPORTED_MODULE_5__["default"])({
                latlng: posDoc,
                map: this.maps.map,
                html: '<div id="doctor_map"><img src="' + doc.user.image_url + '"></div>'
              });
              posBonds.extend(posDoc);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          setTimeout(function () {
            return _this2.maps.map.fitBounds(posBonds);
          }, 1000);
        }
      }, {
        key: "navDocProfile",
        value: function navDocProfile(doc) {
          window.localStorage.setItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__["Constants"].TEMP_DOCTOR, JSON.stringify(doc));
          this.navCtrl.navigateForward(['./doctor-profile']);
        }
      }]);

      return MapViewPage;
    }();

    MapViewPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("pleaseConnect", {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MapViewPage.prototype, "pleaseConnect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map", {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MapViewPage.prototype, "mapElement", void 0);
    MapViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./map-view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/map-view/map-view.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./map-view.page.scss */
      "./src/app/map-view/map-view.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsService"]])], MapViewPage);
    /***/
  }
}]);
//# sourceMappingURL=map-view-map-view-module-es5.js.map