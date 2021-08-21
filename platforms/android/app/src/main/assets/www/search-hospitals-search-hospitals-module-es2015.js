(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-hospitals-search-hospitals-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-hospitals/search-hospitals.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-hospitals/search-hospitals.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'find_hospital' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n\r\n    <div class=\"search_box d-flex\">\r\n        <ion-icon class=\"zmdi zmdi-search ion-text-start\"></ion-icon>\r\n        <ion-searchbar class=\"ion-no-padding\" searchIcon=\"hide\" debounce=\"1000\" (ionChange)=\"onSearchbarChange($event)\"\r\n            placeholder=\"{{'search_hospitals' | translate}}\"></ion-searchbar>\r\n    </div>\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n\r\n    <ion-list class=\"recent_search\" *ngIf=\"searchHistory && searchHistory.length\" lines=\"none\">\r\n        <h2>{{'recent_search' | translate}}</h2>\r\n        <ion-item *ngFor=\"let sh of searchHistory\" (click)=\"doSearch(sh)\">\r\n            <h3>{{sh}}</h3>\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n    <div *ngIf=\"!hospitals || !hospitals.length\" class=\"placeholder_view ion-text-center\">\r\n        <div class=\"img_box\">\r\n            <img src=\"assets/images/placeholder_doctors.png\">\r\n        </div>\r\n        <h2>{{'search_hospitals' | translate}}</h2>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"hospitals && hospitals.length\">\r\n        <ion-list class=\"search_results\" lines=\"none\">\r\n            <ion-item *ngFor=\"let hospital of hospitals\">\r\n                <div class=\"item_inner\">\r\n                    <div class=\"item_header d-flex\">\r\n                        <div class=\"text_box\" (click)=\"navHospitalInfo(hospital)\">\r\n                            <h2>{{hospital.name}}</h2>\r\n                            <h3>{{hospital.tagline}}</h3>\r\n                        </div>\r\n                        <h4 class=\"end\" (click)=\"dialHospital(hospital)\">{{'call_now' | translate}}</h4>\r\n                    </div>\r\n\r\n                    <div class=\"item_content\" (click)=\"navHospitalInfo(hospital)\">\r\n                        <div *ngFor=\"let image of hospital.images\" class=\"img_box center_img\">\r\n                            <img [src]=\"image\" class=\"crop_img\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item_footer\">\r\n                        <h3 class=\"d-flex\">\r\n                            <span class=\"address\" (click)=\"navHospitalInfo(hospital)\">{{hospital.address}}</span>\r\n                            <span class=\"end\" (click)=\"navHospital(hospital)\">\r\n                                <ion-icon class=\"zmdi zmdi-navigation ion-text-start\"></ion-icon>\r\n                                {{'get_direction' | translate}}\r\n                            </span>\r\n                        </h3>\r\n                    </div>\r\n                </div>\r\n            </ion-item>\r\n        </ion-list>\r\n        <!--\r\n         <ion-infinite-scroll (ionInfinite)=\"doInfiniteHospitals($event)\">\r\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{'loading' | translate}}\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll> \r\n-->\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/search-hospitals/search-hospitals-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/search-hospitals/search-hospitals-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SearchHospitalsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHospitalsPageRoutingModule", function() { return SearchHospitalsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_hospitals_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-hospitals.page */ "./src/app/search-hospitals/search-hospitals.page.ts");




const routes = [
    {
        path: '',
        component: _search_hospitals_page__WEBPACK_IMPORTED_MODULE_3__["SearchHospitalsPage"]
    }
];
let SearchHospitalsPageRoutingModule = class SearchHospitalsPageRoutingModule {
};
SearchHospitalsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchHospitalsPageRoutingModule);



/***/ }),

/***/ "./src/app/search-hospitals/search-hospitals.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/search-hospitals/search-hospitals.module.ts ***!
  \*************************************************************/
/*! exports provided: SearchHospitalsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHospitalsPageModule", function() { return SearchHospitalsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _search_hospitals_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-hospitals-routing.module */ "./src/app/search-hospitals/search-hospitals-routing.module.ts");
/* harmony import */ var _search_hospitals_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-hospitals.page */ "./src/app/search-hospitals/search-hospitals.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");










let SearchHospitalsPageModule = class SearchHospitalsPageModule {
};
SearchHospitalsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _search_hospitals_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchHospitalsPageRoutingModule"]
        ], providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"]],
        declarations: [_search_hospitals_page__WEBPACK_IMPORTED_MODULE_6__["SearchHospitalsPage"]]
    })
], SearchHospitalsPageModule);



/***/ }),

/***/ "./src/app/search-hospitals/search-hospitals.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/search-hospitals/search-hospitals.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header .search_box {\n  background: var(--white);\n  width: calc(100% - 0px);\n  border-radius: 3px;\n  margin: 0 auto;\n  padding: 0 15px;\n  position: relative;\n  overflow: hidden;\n  min-height: 45px;\n  z-index: 99;\n}\nion-header .search_box ion-icon {\n  color: var(--text-light);\n  font-size: 1.4rem;\n  min-width: 35px;\n  height: 35px;\n  line-height: 35px;\n  z-index: 99;\n  opacity: 0.5;\n}\nion-header .search_box ion-icon.zmdi-tune {\n  font-size: 1.3rem;\n  left: unset;\n  right: 0;\n  z-index: 99;\n}\nion-header .search_box ion-searchbar {\n  --background: var(--transparent) !important;\n  --color: var(--text-light2);\n  --placeholder-opacity: 1;\n  --placeholder-font-weight: 400 !important;\n  --box-shadow: none !important;\n}\nion-list {\n  margin: 0px;\n  background: var(--white) !important;\n  padding: 8px 0;\n  margin-top: 8px;\n  box-shadow: 0 10px 12px -9px rgba(0, 0, 0, 0.1);\n}\nion-list h2 {\n  color: var(--text-light2);\n  margin: 0;\n  font-size: 0.85rem;\n  font-weight: 400;\n  padding: 15px 20px 13px 20px;\n}\nion-list ion-item {\n  padding: 8px 0;\n  width: calc(100% - 42px);\n  margin: 0 auto;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n}\nion-list ion-item h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.9rem;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n  overflow: hidden;\n}\nion-list ion-item .item_inner .item_header {\n  padding: 0 16px 12px 16px;\n}\nion-list ion-item .item_inner .item_header .text_box {\n  width: 100%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nion-list ion-item .item_inner .item_header .text_box h2 {\n  margin: 0;\n  font-size: 0.9rem;\n  padding-bottom: 5px;\n}\nion-list ion-item .item_inner .item_header .text_box h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.8rem;\n  font-weight: 400;\n}\nion-list ion-item .item_inner .item_header h4 {\n  margin-top: 0;\n  margin-bottom: 0;\n  color: var(--white);\n  background: var(--primary);\n  font-size: 0.85rem;\n  font-weight: 400;\n  padding: 0 6px;\n  min-height: 30px;\n  min-width: 85px;\n  line-height: 30px;\n  border-radius: 4px;\n  text-align: center;\n}\nion-list ion-item .item_inner .item_content {\n  width: 100%;\n  overflow-x: scroll;\n  white-space: nowrap;\n  height: auto;\n}\nion-list ion-item .item_inner .item_content .img_box {\n  width: 81px;\n  height: 46px;\n  margin: 0 1px;\n  display: inline-block;\n}\nion-list ion-item .item_inner .item_content .img_box:first-child {\n  margin-left: 16px;\n}\nion-list ion-item .item_inner .item_content .img_box:last-child {\n  margin-right: 16px;\n}\nion-list ion-item .item_inner .item_footer {\n  padding: 10px 16px 0px 16px;\n}\nion-list ion-item .item_inner .item_footer h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.8rem;\n  font-weight: 400;\n  align-items: flex-start;\n}\nion-list ion-item .item_inner .item_footer h3 span.address {\n  max-width: calc(100% - 100px);\n}\nion-list ion-item .item_inner .item_footer h3 span.end {\n  color: var(--primary);\n  display: block;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: 400;\n}\nion-list.search_results {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 8px;\n  width: 100%;\n  box-shadow: none;\n}\nion-list.search_results ion-item {\n  padding: 12px 0;\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin-bottom: 8px;\n  width: 100% !important;\n}\nion-list.search_results ion-item .item_inner {\n  width: 100%;\n  overflow: hidden;\n}\nion-list.search_results ion-item .item_inner .item_header {\n  padding: 0 16px 12px 16px;\n}\nion-list.search_results ion-item .item_inner .item_header .text_box {\n  width: 100%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nion-list.search_results ion-item .item_inner .item_header .text_box h2 {\n  margin: 0;\n  font-size: 0.9rem;\n  padding: 0;\n  padding-bottom: 5px;\n  color: #000;\n  font-weight: 500;\n}\nion-list.search_results ion-item .item_inner .item_header .text_box h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.8rem;\n  font-weight: 400;\n}\nion-list.search_results ion-item .item_inner .item_header h4 {\n  margin-top: 0;\n  margin-bottom: 0;\n  color: var(--white);\n  background: var(--primary);\n  font-size: 0.85rem;\n  font-weight: 400;\n  padding: 0 6px;\n  min-height: 30px;\n  min-width: 85px;\n  line-height: 30px;\n  border-radius: 4px;\n  text-align: center;\n}\nion-list.search_results ion-item .item_inner .item_content {\n  width: 100%;\n  overflow-x: scroll;\n  white-space: nowrap;\n  height: auto;\n}\nion-list.search_results ion-item .item_inner .item_content .img_box {\n  width: 81px;\n  height: 46px;\n  margin: 0 1px;\n  display: inline-block;\n}\nion-list.search_results ion-item .item_inner .item_content .img_box:first-child {\n  margin-left: 16px;\n}\nion-list.search_results ion-item .item_inner .item_content .img_box:last-child {\n  margin-right: 16px;\n}\nion-list.search_results ion-item .item_inner .item_footer {\n  padding: 10px 16px 0px 16px;\n}\nion-list.search_results ion-item .item_inner .item_footer h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.8rem;\n  font-weight: 400;\n  align-items: flex-start;\n}\nion-list.search_results ion-item .item_inner .item_footer h3 span.address {\n  max-width: calc(100% - 100px);\n}\nion-list.search_results ion-item .item_inner .item_footer h3 span.end {\n  color: var(--primary);\n  display: block;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: 400;\n}\n.placeholder_view {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0%;\n  top: 28%;\n  margin: auto;\n  width: calc(100% - 50px);\n  padding: 0 20px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.placeholder_view .img_box {\n  width: 90px;\n  margin: 0 auto;\n  margin-bottom: 12px;\n}\n.placeholder_view h2 {\n  color: var(--text-light2);\n  margin: 0;\n  font-size: 0.95rem;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWhvc3BpdGFscy9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1jdXN0b21lci9zcmNcXGFwcFxcc2VhcmNoLWhvc3BpdGFsc1xcc2VhcmNoLWhvc3BpdGFscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlYXJjaC1ob3NwaXRhbHMvc2VhcmNoLWhvc3BpdGFscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNBUjtBREVRO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FaO0FERVk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0FoQjtBRElRO0VBQ0ksMkNBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtBQ0ZaO0FET0E7RUFDSSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLCtDQUFBO0FDSko7QURNSTtFQUNJLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0pSO0FET0k7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ0xSO0FET1E7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0xaO0FEUVE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNOWjtBRFFZO0VBQ0kseUJBQUE7QUNOaEI7QURRZ0I7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDTnBCO0FEUW9CO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNOeEI7QURTb0I7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDUHhCO0FEV2dCO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDVHBCO0FEYVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNYaEI7QURhZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ1hwQjtBRGFvQjtFQUNJLGlCQUFBO0FDWHhCO0FEY29CO0VBQ0ksa0JBQUE7QUNaeEI7QURpQlk7RUFDSSwyQkFBQTtBQ2ZoQjtBRGlCZ0I7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNmcEI7QURrQndCO0VBQ0ksNkJBQUE7QUNoQjVCO0FEbUJ3QjtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2pCNUI7QUR5Qkk7RUFDSSx5Q0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN2QlI7QUR5QlE7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUN2Qlo7QUR5Qlk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUN2QmhCO0FEeUJnQjtFQUNJLHlCQUFBO0FDdkJwQjtBRHlCb0I7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDdkJ4QjtBRHlCd0I7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN2QjVCO0FEMEJ3QjtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUN4QjVCO0FENEJvQjtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQzFCeEI7QUQ4QmdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDNUJwQjtBRDhCb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQzVCeEI7QUQ4QndCO0VBQ0ksaUJBQUE7QUM1QjVCO0FEK0J3QjtFQUNJLGtCQUFBO0FDN0I1QjtBRGtDZ0I7RUFDSSwyQkFBQTtBQ2hDcEI7QURrQ29CO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDaEN4QjtBRG1DNEI7RUFDSSw2QkFBQTtBQ2pDaEM7QURvQzRCO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDbENoQztBRDRDQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUN6Q0o7QUQyQ0k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDekNSO0FENENJO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDMUNSIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLWhvc3BpdGFscy9zZWFyY2gtaG9zcGl0YWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgLnNlYXJjaF9ib3gge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG5cclxuICAgICAgICAgICAgJi56bWRpLXR1bmUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiB1bnNldDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDEycHggLTlweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweCAxM3B4IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MnB4KTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAuaXRlbV9oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4IDEycHggMTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAudGV4dF9ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLml0ZW1fY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgICAgICAgICAgICAgLmltZ19ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLml0ZW1fZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTZweCAwcHggMTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuYWRkcmVzcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5lbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnNlYXJjaF9yZXN1bHRzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAuaXRlbV9oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweCAxMnB4IDE2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLml0ZW1fY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLml0ZW1fZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHggMHB4IDE2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYWRkcmVzcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5lbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucGxhY2Vob2xkZXJfdmlldyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgdG9wOiAyOCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG5cclxuICAgIC5pbWdfYm94IHtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG59XHJcbiIsImlvbi1oZWFkZXIgLnNlYXJjaF9ib3gge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLWhlaWdodDogNDVweDtcbiAgei1pbmRleDogOTk7XG59XG5pb24taGVhZGVyIC5zZWFyY2hfYm94IGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbWluLXdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB6LWluZGV4OiA5OTtcbiAgb3BhY2l0eTogMC41O1xufVxuaW9uLWhlYWRlciAuc2VhcmNoX2JveCBpb24taWNvbi56bWRpLXR1bmUge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbGVmdDogdW5zZXQ7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTtcbn1cbmlvbi1oZWFkZXIgLnNlYXJjaF9ib3ggaW9uLXNlYXJjaGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMTJweCAtOXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbmlvbi1saXN0IGgyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDE1cHggMjBweCAxM3B4IDIwcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDhweCAwO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDJweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5pb24tbGlzdCBpb24taXRlbSBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2hlYWRlciB7XG4gIHBhZGRpbmc6IDAgMTZweCAxMnB4IDE2cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIgLnRleHRfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2hlYWRlciAudGV4dF9ib3ggaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1faGVhZGVyIC50ZXh0X2JveCBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIgaDQge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAwIDZweDtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgbWluLXdpZHRoOiA4NXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1fY29udGVudCAuaW1nX2JveCB7XG4gIHdpZHRoOiA4MXB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIG1hcmdpbjogMCAxcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2NvbnRlbnQgLmltZ19ib3g6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2NvbnRlbnQgLmltZ19ib3g6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2Zvb3RlciB7XG4gIHBhZGRpbmc6IDEwcHggMTZweCAwcHggMTZweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2Zvb3RlciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1fZm9vdGVyIGgzIHNwYW4uYWRkcmVzcyB7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1fZm9vdGVyIGgzIHNwYW4uZW5kIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuaW9uLWxpc3Quc2VhcmNoX3Jlc3VsdHMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbmlvbi1saXN0LnNlYXJjaF9yZXN1bHRzIGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMTJweCAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbmlvbi1saXN0LnNlYXJjaF9yZXN1bHRzIGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tbGlzdC5zZWFyY2hfcmVzdWx0cyBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIge1xuICBwYWRkaW5nOiAwIDE2cHggMTJweCAxNnB4O1xufVxuaW9uLWxpc3Quc2VhcmNoX3Jlc3VsdHMgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1faGVhZGVyIC50ZXh0X2JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5pb24tbGlzdC5zZWFyY2hfcmVzdWx0cyBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIgLnRleHRfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5pb24tbGlzdC5zZWFyY2hfcmVzdWx0cyBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIgLnRleHRfYm94IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmlvbi1saXN0LnNlYXJjaF9yZXN1bHRzIGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2hlYWRlciBoNCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDAgNnB4O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBtaW4td2lkdGg6IDg1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1saXN0LnNlYXJjaF9yZXN1bHRzIGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBoZWlnaHQ6IGF1dG87XG59XG5pb24tbGlzdC5zZWFyY2hfcmVzdWx0cyBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9jb250ZW50IC5pbWdfYm94IHtcbiAgd2lkdGg6IDgxcHg7XG4gIGhlaWdodDogNDZweDtcbiAgbWFyZ2luOiAwIDFweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuaW9uLWxpc3Quc2VhcmNoX3Jlc3VsdHMgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1fY29udGVudCAuaW1nX2JveDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuaW9uLWxpc3Quc2VhcmNoX3Jlc3VsdHMgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1fY29udGVudCAuaW1nX2JveDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuaW9uLWxpc3Quc2VhcmNoX3Jlc3VsdHMgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1fZm9vdGVyIHtcbiAgcGFkZGluZzogMTBweCAxNnB4IDBweCAxNnB4O1xufVxuaW9uLWxpc3Quc2VhcmNoX3Jlc3VsdHMgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1fZm9vdGVyIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5pb24tbGlzdC5zZWFyY2hfcmVzdWx0cyBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9mb290ZXIgaDMgc3Bhbi5hZGRyZXNzIHtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XG59XG5pb24tbGlzdC5zZWFyY2hfcmVzdWx0cyBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9mb290ZXIgaDMgc3Bhbi5lbmQge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5wbGFjZWhvbGRlcl92aWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwJTtcbiAgdG9wOiAyOCU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4ucGxhY2Vob2xkZXJfdmlldyAuaW1nX2JveCB7XG4gIHdpZHRoOiA5MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5wbGFjZWhvbGRlcl92aWV3IGgyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIG9wYWNpdHk6IDAuNTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/search-hospitals/search-hospitals.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/search-hospitals/search-hospitals.page.ts ***!
  \***********************************************************/
/*! exports provided: SearchHospitalsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHospitalsPage", function() { return SearchHospitalsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_models_constants_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/models/constants.models */ "./src/models/constants.models.ts");











let SearchHospitalsPage = class SearchHospitalsPage {
    constructor(config, navCtrl, translate, uiElementService, apiService, callNumber, iab) {
        this.config = config;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.callNumber = callNumber;
        this.iab = iab;
        this.subscriptions = new Array();
        this.searchHistory = new Array();
        this.hospitals = new Array();
        this.isLoading = true;
    }
    ngOnInit() {
        this.searchHistory = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].getSearchHistory("hos");
        this.selectedLocationNew = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].getAddressSelected();
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
        src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].setSearchHistory(this.searchHistory, "hos");
    }
    onSearchbarChange(event) {
        let query = "";
        if (event && event.detail && event.detail.value)
            query = event.detail.value.toLowerCase().trim();
        if (query.length)
            this.doSearch(query);
    }
    doSearch(queryIn) {
        this.isLoading = true;
        this.lastSearchString = queryIn;
        this.hospitals = [];
        this.nextUrl = null;
        this.translate.get("loading").subscribe(value => {
            this.uiElementService.presentLoading(value);
            this.subscriptions.push(this.apiService.getHospitalsWithQuery(queryIn, 1, this.selectedLocationNew).subscribe(res => this.handleRes(res), err => this.handleErr(err)));
        });
    }
    handleRes(res) {
        this.hospitals = this.hospitals.concat(res);
        //this.nextUrl = res.links.next;
        if (this.infiniteScrollEvent)
            this.infiniteScrollEvent.target.complete();
        this.isLoading = false;
        this.uiElementService.dismissLoading();
        if (res && res.length)
            if (!this.searchHistory.includes(this.lastSearchString))
                this.searchHistory.unshift(this.lastSearchString);
        if (this.searchHistory.length > 3)
            this.searchHistory.splice(3, 1);
        src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].setSearchHistory(this.searchHistory, "hos");
    }
    handleErr(err) {
        console.log("handleErr", err);
        this.uiElementService.dismissLoading();
        if (this.infiniteScrollEvent)
            this.infiniteScrollEvent.target.complete();
        this.isLoading = false;
    }
    doInfiniteHospitals(event) {
        if (this.nextUrl == null) {
            event.target.complete();
        }
        else {
            this.infiniteScrollEvent = event;
            this.subscriptions.push(this.apiService.getURL(this.nextUrl).subscribe(res => {
                if (res && res.data && res.data.length)
                    for (let pro of res.data)
                        this.apiService.setupHospital(pro);
                this.handleRes(res);
            }, err => this.handleErr(err)));
        }
    }
    navHospitalInfo(hos) {
        window.localStorage.setItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_10__["Constants"].TEMP_HOSPITAL, JSON.stringify(hos));
        this.navCtrl.navigateForward(['./hospital-info']);
    }
    dialHospital(hospital) {
        if (hospital.meta && hospital.meta.phone) {
            this.callNumber.callNumber(hospital.meta.phone, false).then(res => console.log('Launched dialer!', res)).catch(err => console.log('Error launching dialer', err));
        }
        else {
            this.translate.get("phone_unavailable").subscribe(value => this.uiElementService.presentToast(value));
        }
    }
    navHospital(hospital) {
        this.iab.create((("http://maps.google.com/maps?daddr=" + hospital.latitude + "," + hospital.longitude)), "_system");
    }
};
SearchHospitalsPage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"],] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"] }
];
SearchHospitalsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-hospitals',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search-hospitals.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-hospitals/search-hospitals.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search-hospitals.page.scss */ "./src/app/search-hospitals/search-hospitals.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"]])
], SearchHospitalsPage);



/***/ })

}]);
//# sourceMappingURL=search-hospitals-search-hospitals-module-es2015.js.map