(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hospital-map-view-hospital-map-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hospital-map-view/hospital-map-view.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hospital-map-view/hospital-map-view.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'hospitals_near_you' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\" fullscreen=\"true\">\r\n    <div #map id=\"map\" class=\"map\">\r\n        <!-- <ion-spinner></ion-spinner> -->\r\n    </div>\r\n    <div #pleaseConnect id=\"please-connect\">\r\n        <!-- <p>{{'loading' | translate}}</p> -->\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-list lines=\"none\">\r\n        <ion-item *ngFor=\"let hospital of hospitals\">\r\n            <div class=\"item_inner\">\r\n                <div class=\"item_header d-flex\" (click)=\"navHospitalInfo(hospital)\">\r\n                    <div class=\"text_box\">\r\n                        <h2>{{hospital.name}}</h2>\r\n                        <h3 class=\"d-flex\">{{hospital.tagline}}\r\n                            <span class=\"end\">\r\n                                <ion-icon class=\"zmdi zmdi-phone ion-text-start\"></ion-icon>\r\n                                {{'call_now' | translate}}\r\n                            </span>\r\n                        </h3>\r\n                    </div>\r\n                    <!--\t\t\t\t\t<h4 class=\"end\">{{'know_more' | translate}}</h4>-->\r\n                </div>\r\n                <div class=\"item_footer\">\r\n                    <h3 class=\"d-flex\">\r\n                        <ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n                        <span class=\"address\" (click)=\"navHospitalInfo(hospital)\">{{hospital.address}}</span>\r\n                        <!--\r\n                        <span class=\"end\" (click)=\"navHospital(hospital)\">\r\n                            <ion-icon class=\"zmdi zmdi-navigation ion-text-start\"></ion-icon>\r\n                            {{'get_direction' | translate}}\r\n                        </span>\r\n-->\r\n                    </h3>\r\n                </div>\r\n            </div>\r\n        </ion-item>\r\n\r\n        <!-- <ion-item class=\"active\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h2>Silver Leaf Hospital</h2>\r\n\t\t\t\t\t\t<h3>Eye Care Hospital</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h4 class=\"end\">{{'know_more' | translate}}</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer\">\r\n\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t<span class=\"address\">At Walter street, Wallington, New York.</span>\r\n\t\t\t\t\t\t<span class=\"end\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t{{'get_direction' | translate}}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item> -->\r\n\r\n    </ion-list>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/hospital-map-view/hospital-map-view-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/hospital-map-view/hospital-map-view-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: HospitalMapViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalMapViewPageRoutingModule", function() { return HospitalMapViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hospital_map_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hospital-map-view.page */ "./src/app/hospital-map-view/hospital-map-view.page.ts");




const routes = [
    {
        path: '',
        component: _hospital_map_view_page__WEBPACK_IMPORTED_MODULE_3__["HospitalMapViewPage"]
    }
];
let HospitalMapViewPageRoutingModule = class HospitalMapViewPageRoutingModule {
};
HospitalMapViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HospitalMapViewPageRoutingModule);



/***/ }),

/***/ "./src/app/hospital-map-view/hospital-map-view.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/hospital-map-view/hospital-map-view.module.ts ***!
  \***************************************************************/
/*! exports provided: HospitalMapViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalMapViewPageModule", function() { return HospitalMapViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _hospital_map_view_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hospital-map-view-routing.module */ "./src/app/hospital-map-view/hospital-map-view-routing.module.ts");
/* harmony import */ var _hospital_map_view_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hospital-map-view.page */ "./src/app/hospital-map-view/hospital-map-view.page.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/network/google-maps.service */ "./src/app/services/network/google-maps.service.ts");










let HospitalMapViewPageModule = class HospitalMapViewPageModule {
};
HospitalMapViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _hospital_map_view_routing_module__WEBPACK_IMPORTED_MODULE_6__["HospitalMapViewPageRoutingModule"]
        ],
        providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"], _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsService"]],
        declarations: [_hospital_map_view_page__WEBPACK_IMPORTED_MODULE_7__["HospitalMapViewPage"]]
    })
], HospitalMapViewPageModule);



/***/ }),

/***/ "./src/app/hospital-map-view/hospital-map-view.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/hospital-map-view/hospital-map-view.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.map img {\n  width: 100%;\n  height: 100%;\n}\n.map ion-icon {\n  color: var(--primary);\n  position: absolute;\n  z-index: 99;\n  font-size: 2.2rem;\n}\n.map ion-icon.active {\n  color: var(--secondary);\n  font-size: 2.4rem;\n}\nion-footer {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  bottom: 0px;\n}\nion-footer ion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 10px;\n  overflow: hidden;\n  overflow-x: scroll;\n  white-space: nowrap;\n  height: 144px;\n}\nion-footer ion-list ion-item {\n  display: inline-block;\n  padding: 19px 18px;\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin: 0 4px;\n  min-width: 280px;\n  border-radius: 3px;\n  box-shadow: 0 6px 16px -3px rgba(0, 0, 0, 0.2);\n  max-width: 301px;\n  max-width: 301px;\n}\nion-footer ion-list ion-item .item_inner {\n  width: 100%;\n}\nion-footer ion-list ion-item .item_inner .text_box {\n  width: 100%;\n  overflow: hidden;\n}\nion-footer ion-list ion-item .item_inner .text_box h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding-bottom: 4px;\n  color: var(--text-dark);\n}\nion-footer ion-list ion-item .item_inner .text_box h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.8rem;\n  overflow: hidden;\n}\nion-footer ion-list ion-item .item_inner .text_box h3 span.end {\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: 400;\n}\nion-footer ion-list ion-item .item_inner .text_box h3 span.end ion-icon {\n  min-width: 21px;\n}\nion-footer ion-list ion-item .item_inner .item_footer {\n  padding: 20px 0px 0px 0px;\n}\nion-footer ion-list ion-item .item_inner .item_footer h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.7rem;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n}\nion-footer ion-list ion-item .item_inner .item_footer h3 span.address {\n  max-width: calc(100% - 100px);\n  display: flex;\n  align-items: center;\n}\nion-footer ion-list ion-item .item_inner .item_footer h3 span.address ion-icon {\n  min-width: 15px;\n}\nion-footer ion-list ion-item .item_inner .item_footer h3 span.end {\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: 400;\n}\nion-footer ion-list ion-item .item_inner .item_footer h3 span.end ion-icon {\n  min-width: 21px;\n}\nion-footer ion-list ion-item:first-child {\n  margin-left: 8px;\n}\nion-footer ion-list ion-item:last-child {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zcGl0YWwtbWFwLXZpZXcvRjpcXGZpdmVyXFxCZXJuYXJkXFxEb2N0b3IgV29ybGRcXERvY3RvV29ybGRfQXBwQ29kZSAoVmlkZW8gQ2FsbCktMjAyMTA4MDlUMTAxNDA3Wi0wMDFcXERvY3RvV29ybGRfQXBwQ29kZSAoVmlkZW8gQ2FsbClcXGRvY3Rvd29ybGRfY3VzdG9tZXJcXGRvY3Rvd29ybGRfY3VzdG9tZXIvc3JjXFxhcHBcXGhvc3BpdGFsLW1hcC12aWV3XFxob3NwaXRhbC1tYXAtdmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvc3BpdGFsLW1hcC12aWV3L2hvc3BpdGFsLW1hcC12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NSO0FERUk7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQVI7QURFUTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7QUNBWjtBREtBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNGSjtBRElJO0VBQ0kseUNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0ZSO0FESVE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtFQWdGQSxnQkFBQTtBQ2pGWjtBREdZO0VBQ0ksV0FBQTtBQ0RoQjtBREdnQjtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0RwQjtBREdvQjtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0R4QjtBRElvQjtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGeEI7QURLNEI7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNIaEM7QURLZ0M7RUFDSSxlQUFBO0FDSHBDO0FEVWdCO0VBQ0kseUJBQUE7QUNScEI7QURVb0I7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNSeEI7QURXNEI7RUFDSSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1RoQztBRFdnQztFQUNJLGVBQUE7QUNUcEM7QURhNEI7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNYaEM7QURhZ0M7RUFDSSxlQUFBO0FDWHBDO0FEbUJZO0VBQ0ksZ0JBQUE7QUNqQmhCO0FEc0JZO0VBQ0ksaUJBQUE7QUNwQmhCIiwiZmlsZSI6InNyYy9hcHAvaG9zcGl0YWwtbWFwLXZpZXcvaG9zcGl0YWwtbWFwLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDBweDtcclxuXHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBoZWlnaHQ6IDE0NHB4O1xyXG5cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogMTlweCAxOHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMTZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDFweDtcclxuXHJcbiAgICAgICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5lbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaXRlbV9mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDBweCAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYWRkcmVzcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5lbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwMXB4O1xyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5tYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYXAgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tYXAgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuLm1hcCBpb24taWNvbi5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAyLjRyZW07XG59XG5cbmlvbi1mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDBweDtcbn1cbmlvbi1mb290ZXIgaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBoZWlnaHQ6IDE0NHB4O1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTlweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCA0cHg7XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCA2cHggMTZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWF4LXdpZHRoOiAzMDFweDtcbiAgbWF4LXdpZHRoOiAzMDFweDtcbn1cbmlvbi1mb290ZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1mb290ZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tZm9vdGVyIGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbn1cbmlvbi1mb290ZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaDMgc3Bhbi5lbmQge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmlvbi1mb290ZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IGgzIHNwYW4uZW5kIGlvbi1pY29uIHtcbiAgbWluLXdpZHRoOiAyMXB4O1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9mb290ZXIge1xuICBwYWRkaW5nOiAyMHB4IDBweCAwcHggMHB4O1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9mb290ZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn1cbmlvbi1mb290ZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1fZm9vdGVyIGgzIHNwYW4uYWRkcmVzcyB7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9mb290ZXIgaDMgc3Bhbi5hZGRyZXNzIGlvbi1pY29uIHtcbiAgbWluLXdpZHRoOiAxNXB4O1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9mb290ZXIgaDMgc3Bhbi5lbmQge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmlvbi1mb290ZXIgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1fZm9vdGVyIGgzIHNwYW4uZW5kIGlvbi1pY29uIHtcbiAgbWluLXdpZHRoOiAyMXB4O1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCBpb24taXRlbTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5pb24tZm9vdGVyIGlvbi1saXN0IGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/hospital-map-view/hospital-map-view.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/hospital-map-view/hospital-map-view.page.ts ***!
  \*************************************************************/
/*! exports provided: HospitalMapViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalMapViewPage", function() { return HospitalMapViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/network/google-maps.service */ "./src/app/services/network/google-maps.service.ts");
/* harmony import */ var _assets_scripts_html_map_marker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/scripts/html-map-marker.js */ "./src/assets/scripts/html-map-marker.js");
/* harmony import */ var src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/constants.models */ "./src/models/constants.models.ts");








let HospitalMapViewPage = class HospitalMapViewPage {
    constructor(router, navCtrl, maps, iab) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.maps = maps;
        this.iab = iab;
        this.hospitals = new Array();
        this.initialized = false;
        console.log("getCurrentNavigation", this.router.getCurrentNavigation().extras.state);
        if (this.router.getCurrentNavigation().extras.state) {
            this.hospitals = this.router.getCurrentNavigation().extras.state.hospitals;
        }
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        if (!this.initialized) {
            let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement, null).then(() => {
                this.initialized = true;
                this.plotMarkers();
            }).catch(err => { console.log("maps.init", err); this.close(); });
            mapLoaded.catch(err => { console.log("mapLoaded", err); this.close(); });
        }
    }
    close() {
        this.navCtrl.pop();
    }
    plotMarkers() {
        let posBonds = new google.maps.LatLngBounds();
        for (let hos of this.hospitals) {
            let posDoc = new google.maps.LatLng(Number(hos.latitude), Number(hos.longitude));
            let markerDoc = Object(_assets_scripts_html_map_marker_js__WEBPACK_IMPORTED_MODULE_6__["default"])({
                latlng: posDoc,
                map: this.maps.map,
                html: '<div id="doctor_map"><img src="' + hos.image + '"></div>'
            });
            posBonds.extend(posDoc);
        }
        setTimeout(() => this.maps.map.fitBounds(posBonds), 1000);
    }
    navHospitalInfo(hos) {
        window.localStorage.setItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__["Constants"].TEMP_HOSPITAL, JSON.stringify(hos));
        this.navCtrl.navigateForward(['./hospital-info']);
    }
    navHospital(hospital) {
        this.iab.create((("http://maps.google.com/maps?daddr=" + hospital.latitude + "," + hospital.longitude)), "_system");
    }
};
HospitalMapViewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("pleaseConnect", { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HospitalMapViewPage.prototype, "pleaseConnect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map", { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HospitalMapViewPage.prototype, "mapElement", void 0);
HospitalMapViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hospital-map-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hospital-map-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hospital-map-view/hospital-map-view.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hospital-map-view.page.scss */ "./src/app/hospital-map-view/hospital-map-view.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]])
], HospitalMapViewPage);



/***/ })

}]);
//# sourceMappingURL=hospital-map-view-hospital-map-view-module-es2015.js.map