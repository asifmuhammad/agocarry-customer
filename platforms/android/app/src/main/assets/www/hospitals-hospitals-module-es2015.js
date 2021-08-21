(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hospitals-hospitals-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hospitals/hospitals.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hospitals/hospitals.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>\r\n            <div class=\"title_inner d-flex\">\r\n                <div class=\"location\" (click)=\"pickLocation()\">\r\n                    <h2 *ngIf=\"selectedLocation != null\" class=\"d-flex\">\r\n                        <ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n                        <p class=\"marquee\"> <span> {{selectedLocation.formatted_address}} </span> </p>\r\n                    </h2>\r\n                    <h2 *ngIf=\"selectedLocation == null\" class=\"d-flex\">\r\n                        <ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n                        <span>{{'select_location' | translate}}</span>\r\n                    </h2>\r\n                </div>\r\n            </div>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n\r\n    <div class=\"banner\">\r\n        <!--\r\n        <ion-slides pager=\"true\" loop=\"true\">\r\n            <ion-slide *ngFor=\"let banner of banners\">\r\n                <div class=\"img_box center_img\">\r\n                    <img [src]=\"banner.image\" class=\"crop_img\">\r\n                </div>\r\n            </ion-slide>\r\n        </ion-slides>\r\n-->\r\n        <div class=\"banner_text\">\r\n            <h3 *ngIf=\"apiService.getUserMe() != null\">{{'hello' | translate}}, {{apiService.getUserMe().name}}.</h3>\r\n            <h3 *ngIf=\"apiService.getUserMe() == null\">{{'hello' | translate}}.</h3>\r\n            <h2>{{'find_hospital' | translate}}</h2>\r\n        </div>\r\n        <div class=\"search_box d-flex\" (click)=\"navSearch()\">\r\n            <ion-icon name=\"search-outline\" class=\"ion-text-start\"></ion-icon>\r\n            <h2>{{'search_hospital' | translate}}</h2>\r\n        </div>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\" fullscreen>\r\n\r\n    <div class=\"shop_by_category\">\r\n        <h2 class=\"d-flex map_view\" (click)=\"navMapView()\">{{'hospitals_near_you' | translate}}\r\n            <span class=\"end\">\r\n                <ion-icon class=\"zmdi zmdi-map end\"></ion-icon>\r\n            </span>\r\n        </h2>\r\n        <div class=\"scroll-x\">\r\n            <div class=\"category\" *ngFor=\"let category of hostpitalsCategory\">\r\n                <div class=\"category_img center_img\">\r\n                    <img [src]=\"category.image\" class=\"crop_img\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- <h2 class=\"d-flex map_view\" (click)=\"navMapView()\">{{'hospitals_near_you' | translate}}\r\n            <span class=\"end\">\r\n                <ion-icon class=\"zmdi zmdi-map end\"></ion-icon>\r\n            </span>\r\n        </h2> -->\r\n    </div>\r\n\r\n    <div class=\"empty-view\" *ngIf=\"!isLoading && (!hospitals || !hospitals.length)\">\r\n        <div style=\"text-align:center;margin-top: 90%;\" (click)=\"pickLocation()\">\r\n            <img src=\"assets/images/empty_categories.png\" alt=\"no offers\" />\r\n            <span *ngIf=\"selectedLocation\" style=\"color:#9E9E9E; font-weight:bold;\">\r\n                {{'empty_results' | translate}}\r\n            </span>\r\n            <span *ngIf=\"!selectedLocation\" style=\"color:#9E9E9E; font-weight:bold;\">\r\n                {{'Select_your_location_to_continue' | translate}}\r\n            </span>\r\n        </div>\r\n\r\n    </div>\r\n    <ion-list lines=\"none\">\r\n        <ion-item *ngFor=\"let hospital of hospitals\">\r\n            <div class=\"item_inner\">\r\n                <div class=\"item_header\">\r\n                    <ion-row (click)=\"navHospitalInfo(hospital)\">\r\n                        <ion-col size='6'>\r\n                            <h2>{{hospital.name}}</h2>\r\n                            <h3>{{hospital.tagline}}</h3>\r\n                        </ion-col>\r\n                        <ion-col size='6'>\r\n                            <div class=\"hospital_images\" (click)=\"navHospitalInfo(hospital)\">\r\n                                <div *ngFor=\"let image of hospital.images\" class=\"img_box center_img\">\r\n                                    <img [src]=\"image\" class=\"crop_img\">\r\n                                </div>\r\n                            </div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </div>\r\n\r\n                <div class=\"item_footer\">\r\n                    <h3 class=\"d-flex\">\r\n                        <span class=\"address\" (click)=\"navHospitalInfo(hospital)\">\r\n                            <ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n                            {{hospital.address}}\r\n                        </span>\r\n                        <span class=\"end\" (click)=\"dialHospital(hospital)\">\r\n                            <ion-icon class=\"zmdi zmdi-phone ion-text-start\"></ion-icon>\r\n                            {{'call_now' | translate}}\r\n                        </span>\r\n                    </h3>\r\n                </div>\r\n            </div>\r\n        </ion-item>\r\n    </ion-list>\r\n    <!-- <ion-infinite-scroll (ionInfinite)=\"doInfiniteHospitals($event)\">\r\n\t\t<ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{'loading' | translate}}\">\r\n\t\t</ion-infinite-scroll-content>\r\n\t</ion-infinite-scroll> -->\r\n</ion-content>");

/***/ }),

/***/ "./src/app/hospitals/hospitals-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/hospitals/hospitals-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: HospitalsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsPageRoutingModule", function() { return HospitalsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hospitals_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hospitals.page */ "./src/app/hospitals/hospitals.page.ts");




const routes = [
    {
        path: '',
        component: _hospitals_page__WEBPACK_IMPORTED_MODULE_3__["HospitalsPage"]
    }
];
let HospitalsPageRoutingModule = class HospitalsPageRoutingModule {
};
HospitalsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HospitalsPageRoutingModule);



/***/ }),

/***/ "./src/app/hospitals/hospitals.module.ts":
/*!***********************************************!*\
  !*** ./src/app/hospitals/hospitals.module.ts ***!
  \***********************************************/
/*! exports provided: HospitalsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsPageModule", function() { return HospitalsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _hospitals_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hospitals-routing.module */ "./src/app/hospitals/hospitals-routing.module.ts");
/* harmony import */ var _hospitals_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hospitals.page */ "./src/app/hospitals/hospitals.page.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");










let HospitalsPageModule = class HospitalsPageModule {
};
HospitalsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _hospitals_routing_module__WEBPACK_IMPORTED_MODULE_6__["HospitalsPageRoutingModule"]
        ],
        providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"]],
        declarations: [_hospitals_page__WEBPACK_IMPORTED_MODULE_7__["HospitalsPage"]]
    })
], HospitalsPageModule);



/***/ }),

/***/ "./src/app/hospitals/hospitals.page.scss":
/*!***********************************************!*\
  !*** ./src/app/hospitals/hospitals.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background: var(--white);\n}\nion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n}\nion-header ion-toolbar ion-title .title_inner {\n  min-height: 60px !important;\n}\nion-header ion-toolbar ion-title .title_inner .location {\n  overflow: hidden;\n  position: relative;\n  z-index: 999;\n}\nion-header ion-toolbar ion-title .title_inner .location ion-icon {\n  font-size: 1.3rem !important;\n  min-width: 17px;\n  color: var(--primary);\n  padding: 0 1px;\n}\nion-header ion-toolbar ion-title .title_inner .location h2 {\n  margin: 0;\n  overflow: hidden;\n}\nion-header ion-toolbar ion-title .title_inner .location h2 span {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--text-black);\n  letter-spacing: 0;\n  display: block;\n  position: relative;\n  top: 2px;\n}\nion-header ion-toolbar ion-title .title_inner h3 {\n  margin: 0 auto;\n  text-align: center;\n  font-size: 1.1rem;\n  font-weight: 500;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 0;\n}\nion-header .banner {\n  position: relative;\n  padding: 15px;\n}\nion-header .banner .banner_text {\n  padding-bottom: 20px;\n}\nion-header .banner .banner_text h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  padding-bottom: 4px;\n}\nion-header .banner .banner_text h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-weight: 600;\n  font-size: 1.4rem;\n}\nion-header .banner .search_box {\n  background: var(--info_field_bg);\n  width: calc(100% - 0px);\n  border-radius: 6px;\n  padding: 5px 13px;\n  min-height: 50px;\n}\nion-header .banner .search_box ion-icon {\n  color: var(--text-light);\n  font-size: 1.2rem;\n  margin-right: 13px;\n  font-weight: 600;\n}\nion-header .banner .search_box h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.95rem;\n  font-weight: 300;\n  letter-spacing: 0.3px;\n}\n.shop_by_category {\n  padding-bottom: 15px;\n  background: var(--white);\n}\n.shop_by_category h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  padding-bottom: 4px;\n  padding: 15px;\n}\n.shop_by_category h2 span {\n  color: var(--primary);\n}\n.shop_by_category h2.map_view {\n  padding-bottom: 0;\n}\n.shop_by_category h2.map_view ion-icon {\n  color: var(--text-light2);\n  font-size: 1.5rem;\n}\n.shop_by_category .scroll-x {\n  width: 100%;\n  white-space: nowrap;\n  overflow-x: auto;\n}\n.shop_by_category .scroll-x .category {\n  display: inline-block;\n  margin: 0 3.5px;\n}\n.shop_by_category .scroll-x .category .category_img {\n  width: 103px;\n  height: 103px;\n  border-radius: 5px;\n}\n.shop_by_category .scroll-x .category:first-child {\n  margin-left: 15px;\n}\n.shop_by_category .scroll-x .category:last-child {\n  margin-right: 15px;\n}\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 8px;\n}\nion-list ion-item {\n  padding: 12px 0;\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin-bottom: 8px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n  overflow: hidden;\n}\nion-list ion-item .item_inner .item_header {\n  padding-left: 16px;\n}\nion-list ion-item .item_inner .item_header ion-row ion-col {\n  padding: 0;\n}\nion-list ion-item .item_inner .item_header ion-row ion-col h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding-bottom: 4px;\n  color: var(--text-dark);\n}\nion-list ion-item .item_inner .item_header ion-row ion-col h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.8rem;\n  overflow: hidden;\n}\nion-list ion-item .item_inner .item_header ion-row ion-col .hospital_images {\n  width: 100%;\n  overflow-x: scroll;\n  white-space: nowrap;\n  height: auto;\n}\nion-list ion-item .item_inner .item_header ion-row ion-col .hospital_images .img_box {\n  width: 72px;\n  height: 42px;\n  margin: 0px 2px;\n  display: inline-block;\n  border-radius: 5px;\n}\nion-list ion-item .item_inner .item_header ion-row ion-col .hospital_images .img_box:first-child {\n  margin-left: 0px;\n}\nion-list ion-item .item_inner .item_header ion-row ion-col .hospital_images .img_box:last-child {\n  margin-right: 16px;\n}\nion-list ion-item .item_inner .item_footer {\n  padding: 10px 16px 0px 16px;\n}\nion-list ion-item .item_inner .item_footer h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.7rem;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n}\nion-list ion-item .item_inner .item_footer h3 span.address {\n  max-width: calc(100% - 100px);\n  display: flex;\n  align-items: flex-start;\n}\nion-list ion-item .item_inner .item_footer h3 span.address ion-icon {\n  min-width: 15px;\n  padding: 0 1px;\n}\nion-list ion-item .item_inner .item_footer h3 span.end {\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: 400;\n}\nion-list ion-item .item_inner .item_footer h3 span.end ion-icon {\n  min-width: 21px;\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n.marquee {\n  width: 80px;\n  margin: 0 auto;\n  white-space: nowrap;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.marquee span {\n  display: inline-block;\n  padding-left: 100%;\n  will-change: transform;\n  -webkit-animation: marquee 10s linear infinite;\n          animation: marquee 10s linear infinite;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.marquee span:hover {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n@-webkit-keyframes marquee {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n@keyframes marquee {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zcGl0YWxzL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxob3NwaXRhbHNcXGhvc3BpdGFscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvc3BpdGFscy9ob3NwaXRhbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUNDSjtBRENJO0VBQ0ksMEJBQUE7QUNDUjtBRENRO0VBQ0ksMkJBQUE7QUNDWjtBRENZO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDaEI7QURDZ0I7RUFDSSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNDcEI7QURFZ0I7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUNBcEI7QURFb0I7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNBeEI7QURLWTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQ0hoQjtBRFFJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDTlI7QURRUTtFQUNJLG9CQUFBO0FDTlo7QURRWTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNOaEI7QURTWTtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNQaEI7QURXUTtFQUNJLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNUWjtBRFdZO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7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aW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblxyXG4gICAgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgLnRpdGxlX2lubmVyIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgLmxvY2F0aW9uIHtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5iYW5uZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICAgICAgICAuYmFubmVyX3RleHQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VhcmNoX2JveCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm9fZmllbGRfYmcpO1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTNweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaG9wX2J5X2NhdGVnb3J5IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5tYXBfdmlldyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zY3JvbGwteCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG5cclxuICAgICAgICAuY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAzLjVweDtcclxuXHJcbiAgICAgICAgICAgIC5jYXRlZ29yeV9pbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwM3B4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDNweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIC5pdGVtX2hlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ob3NwaXRhbF9pbWFnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbWdfYm94IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLml0ZW1fZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTZweCAwcHggMTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuYWRkcmVzcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5lbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lbXB0eS12aWV3IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMTAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXJxdWVlIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5tYXJxdWVlIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDAlO1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgIGFuaW1hdGlvbjogbWFycXVlZSAxMHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4ubWFycXVlZSBzcGFuOmhvdmVyIHtcclxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbWFycXVlZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDApO1xyXG4gICAgfVxyXG59IiwiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIge1xuICBtaW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgLmxvY2F0aW9uIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgLmxvY2F0aW9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxN3B4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDAgMXB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIC5sb2NhdGlvbiBoMiB7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciAubG9jYXRpb24gaDIgc3BhbiB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIGgzIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTVweDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuYmFubmVyX3RleHQge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuYmFubmVyX3RleHQgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIC5iYW5uZXJfdGV4dCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuc2VhcmNoX2JveCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWluZm9fZmllbGRfYmcpO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA1cHggMTNweDtcbiAgbWluLWhlaWdodDogNTBweDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuc2VhcmNoX2JveCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuc2VhcmNoX2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG5cbi5zaG9wX2J5X2NhdGVnb3J5IHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbi5zaG9wX2J5X2NhdGVnb3J5IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5zaG9wX2J5X2NhdGVnb3J5IGgyIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG4uc2hvcF9ieV9jYXRlZ29yeSBoMi5tYXBfdmlldyB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLnNob3BfYnlfY2F0ZWdvcnkgaDIubWFwX3ZpZXcgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5zaG9wX2J5X2NhdGVnb3J5IC5zY3JvbGwteCB7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLnNob3BfYnlfY2F0ZWdvcnkgLnNjcm9sbC14IC5jYXRlZ29yeSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDMuNXB4O1xufVxuLnNob3BfYnlfY2F0ZWdvcnkgLnNjcm9sbC14IC5jYXRlZ29yeSAuY2F0ZWdvcnlfaW1nIHtcbiAgd2lkdGg6IDEwM3B4O1xuICBoZWlnaHQ6IDEwM3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc2hvcF9ieV9jYXRlZ29yeSAuc2Nyb2xsLXggLmNhdGVnb3J5OmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4uc2hvcF9ieV9jYXRlZ29yeSAuc2Nyb2xsLXggLmNhdGVnb3J5Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMTJweCAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2hlYWRlciBpb24tcm93IGlvbi1jb2wgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIgaW9uLXJvdyBpb24tY29sIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1faGVhZGVyIGlvbi1yb3cgaW9uLWNvbCAuaG9zcGl0YWxfaW1hZ2VzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1faGVhZGVyIGlvbi1yb3cgaW9uLWNvbCAuaG9zcGl0YWxfaW1hZ2VzIC5pbWdfYm94IHtcbiAgd2lkdGg6IDcycHg7XG4gIGhlaWdodDogNDJweDtcbiAgbWFyZ2luOiAwcHggMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2hlYWRlciBpb24tcm93IGlvbi1jb2wgLmhvc3BpdGFsX2ltYWdlcyAuaW1nX2JveDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIgaW9uLXJvdyBpb24tY29sIC5ob3NwaXRhbF9pbWFnZXMgLmltZ19ib3g6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2Zvb3RlciB7XG4gIHBhZGRpbmc6IDEwcHggMTZweCAwcHggMTZweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2Zvb3RlciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1fZm9vdGVyIGgzIHNwYW4uYWRkcmVzcyB7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2Zvb3RlciBoMyBzcGFuLmFkZHJlc3MgaW9uLWljb24ge1xuICBtaW4td2lkdGg6IDE1cHg7XG4gIHBhZGRpbmc6IDAgMXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1fZm9vdGVyIGgzIHNwYW4uZW5kIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9mb290ZXIgaDMgc3Bhbi5lbmQgaW9uLWljb24ge1xuICBtaW4td2lkdGg6IDIxcHg7XG59XG5cbi5lbXB0eS12aWV3IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMjAwcHg7XG4gIHRvcDogMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDEwJTtcbn1cbi5lbXB0eS12aWV3IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmVtcHR5LXZpZXcgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW1wdHktdmlldyBidXR0b24ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHNwYW4ge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4ubWFycXVlZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1hcnF1ZWUgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAxMDAlO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICBhbmltYXRpb246IG1hcnF1ZWUgMTBzIGxpbmVhciBpbmZpbml0ZTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4ubWFycXVlZSBzcGFuOmhvdmVyIHtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbn1cblxuQGtleWZyYW1lcyBtYXJxdWVlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwKTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/hospitals/hospitals.page.ts":
/*!*********************************************!*\
  !*** ./src/app/hospitals/hospitals.page.ts ***!
  \*********************************************/
/*! exports provided: HospitalsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsPage", function() { return HospitalsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/constants.models */ "./src/models/constants.models.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/events/my-events.service */ "./src/app/services/events/my-events.service.ts");











let HospitalsPage = class HospitalsPage {
    constructor(navCtrl, translate, callNumber, myEventsService, uiElementService, apiService, iab) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.callNumber = callNumber;
        this.myEventsService = myEventsService;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.iab = iab;
        this.subscriptions = new Array();
        this.doneAll = false;
        this.pageNo = 1;
        this.isLoading = true;
        this.banners = new Array();
        this.hospitals = new Array();
        this.hostpitalsCategory = new Array();
    }
    ;
    ngOnInit() {
        this.selectedLocation = src_models_helper_models__WEBPACK_IMPORTED_MODULE_3__["Helper"].getAddressSelected();
        this.subscriptions.push(this.myEventsService.getAddressObservable().subscribe(selectedLocationNew => {
            let changed = !this.selectedLocation || !selectedLocationNew || (this.selectedLocation.latitude != selectedLocationNew.latitude || this.selectedLocation.longitude != selectedLocationNew.longitude);
            this.selectedLocation = selectedLocationNew;
            if (changed)
                this.doRefresh();
        }));
        this.loadBanners();
        this.doRefresh();
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    pickLocation() {
        this.myEventsService.setCustomEventData("nav:pick_location");
    }
    doRefresh() {
        this.pageNo = 1;
        this.hospitals = [];
        this.isLoading = true;
        this.loadHospitals();
    }
    loadHospitals() {
        if (this.selectedLocation != null) {
            if (this.hospitals && this.hospitals.length) {
                this.getHostpitalsCategory();
                this.refreshHospitals();
            }
            else {
                this.translate.get("loading").subscribe(value => {
                    this.uiElementService.presentLoading(value);
                    this.getHostpitalsCategory();
                    this.refreshHospitals();
                });
            }
        }
        else {
            this.isLoading = false;
        }
    }
    getHostpitalsCategory() {
        this.subscriptions.push(this.apiService.getCategoriesWithScope(src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__["Constants"].SCOPE_HOSPITAL).subscribe(res => { this.hostpitalsCategory = res; this.uiElementService.dismissLoading(); }, err => { console.log("getCategoriesWithScope", err); this.uiElementService.dismissLoading(); }));
    }
    loadBanners() {
        this.subscriptions.push(this.apiService.getBanners(src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__["Constants"].SCOPE_HOSPITAL).subscribe(res => this.banners = res, err => console.log("getBanners", err)));
    }
    refreshHospitals() {
        this.subscriptions.push(this.apiService.getHospitals(this.selectedLocation, this.pageNo).subscribe(res => {
            this.hospitals = this.hospitals.concat(res);
            this.doneAll = (!res || !res.length);
            if (this.infiniteScrollEvent)
                this.infiniteScrollEvent.target.complete();
            this.isLoading = false;
            this.uiElementService.dismissLoading();
        }, err => {
            console.log("getHospitals", err);
            this.uiElementService.dismissLoading();
            if (this.infiniteScrollEvent)
                this.infiniteScrollEvent.target.complete();
            this.isLoading = false;
        }));
    }
    doInfiniteHospitals(event) {
        if (this.doneAll) {
            event.target.complete();
        }
        else {
            this.infiniteScrollEvent = event;
            this.pageNo = this.pageNo + 1;
            this.refreshHospitals();
        }
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
    navHospitalInfo(hos) {
        window.localStorage.setItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__["Constants"].TEMP_HOSPITAL, JSON.stringify(hos));
        this.navCtrl.navigateForward(['./hospital-info']);
    }
    navMapView() {
        if (this.hospitals && this.hospitals.length) {
            let navigationExtras = { state: { hospitals: this.hospitals } };
            this.navCtrl.navigateForward(['./hospital-map-view'], navigationExtras);
        }
    }
    navSearch() {
        if (this.selectedLocation && this.selectedLocation.latitude && this.selectedLocation.longitude) {
            this.navCtrl.navigateForward(['./search-hospitals']);
        }
        else {
            this.translate.get("select_location").subscribe(value => this.uiElementService.presentToast(value));
        }
    }
};
HospitalsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"] },
    { type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_10__["MyEventsService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"] }
];
HospitalsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hospitals',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hospitals.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hospitals/hospitals.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hospitals.page.scss */ "./src/app/hospitals/hospitals.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"],
        _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_10__["MyEventsService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"]])
], HospitalsPage);



/***/ })

}]);
//# sourceMappingURL=hospitals-hospitals-module-es2015.js.map