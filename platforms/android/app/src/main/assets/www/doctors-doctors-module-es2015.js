(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctors-doctors-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/doctors/doctors.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doctors/doctors.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>\r\n            <div class=\"title_inner d-flex\">\r\n                <div class=\"location\" (click)=\"pickLocation()\">\r\n                    <h2 *ngIf=\"selectedLocation != null\" class=\"d-flex\">\r\n                        <ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n                        <p class=\"marquee\"> <span> {{selectedLocation.formatted_address}} </span> </p>\r\n                    </h2>\r\n                    <h2 *ngIf=\"selectedLocation == null\" class=\"d-flex\">\r\n                        <ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n                        <span>{{'select_location' | translate}}</span>\r\n                    </h2>\r\n                </div>\r\n            </div>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n    <div class=\"banner\">\r\n        <div class=\"banner_text\">\r\n            <h3 *ngIf=\"apiService.getUserMe() != null\">{{'hello' | translate}}, {{apiService.getUserMe().name}}.</h3>\r\n            <h3 *ngIf=\"apiService.getUserMe() == null\">{{'hello' | translate}}.</h3>\r\n            <h2>{{'find_doctors' | translate}}</h2>\r\n        </div>\r\n        <div class=\"search_box d-flex\" (click)=\"navSearch()\">\r\n            <ion-icon name=\"search-outline\" class=\"ion-text-start\"></ion-icon>\r\n            <h2>{{'doctor_specialities_clinic_hospital' | translate}}</h2>\r\n        </div>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n    <div *ngIf=\"doctorTypes && doctorTypes.length\" class=\"shop_by_category\">\r\n        <h2 class=\"d-flex\" (click)=\"navListDoctors()\">{{'find_by_specialities' | translate}}<span\r\n                class=\"end\">{{'view_all' | translate}}</span>\r\n        </h2>\r\n        <div class=\"scroll-x\">\r\n            <div class=\"category\" *ngFor=\"let category of doctorTypes\" (click)=\"navListDoctorsType(category)\">\r\n                <div class=\"category_img center_img\">\r\n                    <img [src]=\"category.image\" class=\"crop_img\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"offres\" *ngIf=\"banners && banners.length\">\r\n        <h2 class=\"d-flex\">{{'sponsors_ad' | translate}}</h2>\r\n        <div class=\"scroll-x\">\r\n            <div class=\"offer center_img\" *ngFor=\"let banner of banners\">\r\n                <img [src]=\"banner.image\" class=\"crop_img\">\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"empty-view\" *ngIf=\"!isLoading && (!specializations || !specializations.length)\">\r\n        <div style=\"text-align:center\">\r\n            <img src=\"assets/images/empty_categories.png\" alt=\"no offers\" />\r\n            <span style=\"color:#9E9E9E; font-weight:bold;\">\r\n                {{'empty_specializations' | translate}}\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <ion-list lines=\"none\">\r\n        <h2 *ngIf=\"specializations && specializations.length\">{{'list_of_specialities' | translate}}</h2>\r\n        <ion-item *ngFor=\"let category of specializations\" (click)=\"navListDoctorsSpeciality(category)\">\r\n            <h3>{{category.title}}</h3>\r\n            <h4 slot=\"end\">\r\n                {{category.count}}\r\n                <ion-icon class=\"zmdi zmdi-chevron-right ion-text-end\"></ion-icon>\r\n            </h4>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/doctors/doctors-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/doctors/doctors-routing.module.ts ***!
  \***************************************************/
/*! exports provided: DoctorsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsPageRoutingModule", function() { return DoctorsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _doctors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctors.page */ "./src/app/doctors/doctors.page.ts");




const routes = [
    {
        path: '',
        component: _doctors_page__WEBPACK_IMPORTED_MODULE_3__["DoctorsPage"]
    }
];
let DoctorsPageRoutingModule = class DoctorsPageRoutingModule {
};
DoctorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DoctorsPageRoutingModule);



/***/ }),

/***/ "./src/app/doctors/doctors.module.ts":
/*!*******************************************!*\
  !*** ./src/app/doctors/doctors.module.ts ***!
  \*******************************************/
/*! exports provided: DoctorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsPageModule", function() { return DoctorsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _doctors_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doctors-routing.module */ "./src/app/doctors/doctors-routing.module.ts");
/* harmony import */ var _doctors_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./doctors.page */ "./src/app/doctors/doctors.page.ts");








let DoctorsPageModule = class DoctorsPageModule {
};
DoctorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _doctors_routing_module__WEBPACK_IMPORTED_MODULE_6__["DoctorsPageRoutingModule"]
        ],
        declarations: [_doctors_page__WEBPACK_IMPORTED_MODULE_7__["DoctorsPage"]]
    })
], DoctorsPageModule);



/***/ }),

/***/ "./src/app/doctors/doctors.page.scss":
/*!*******************************************!*\
  !*** ./src/app/doctors/doctors.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background: var(--white);\n}\nion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n}\nion-header ion-toolbar ion-title .title_inner {\n  min-height: 60px !important;\n}\nion-header ion-toolbar ion-title .title_inner .location {\n  overflow: hidden;\n  position: relative;\n  z-index: 999;\n}\nion-header ion-toolbar ion-title .title_inner .location ion-icon {\n  font-size: 1.3rem !important;\n  min-width: 17px;\n  color: var(--primary);\n  padding: 0 1px;\n}\nion-header ion-toolbar ion-title .title_inner .location h2 {\n  margin: 0;\n  overflow: hidden;\n}\nion-header ion-toolbar ion-title .title_inner .location h2 span {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--text-black);\n  letter-spacing: 0;\n  display: block;\n  position: relative;\n  top: 2px;\n}\nion-header ion-toolbar ion-title .title_inner h3 {\n  margin: 0 auto;\n  text-align: center;\n  font-size: 1.1rem;\n  font-weight: 500;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 0;\n}\nion-header .banner {\n  position: relative;\n  padding: 15px;\n}\nion-header .banner .banner_text {\n  padding-bottom: 20px;\n}\nion-header .banner .banner_text h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  padding-bottom: 4px;\n}\nion-header .banner .banner_text h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-weight: 600;\n  font-size: 1.4rem;\n}\nion-header .banner .search_box {\n  background: var(--info_field_bg);\n  width: calc(100% - 0px);\n  border-radius: 6px;\n  padding: 5px 13px;\n  min-height: 50px;\n}\nion-header .banner .search_box ion-icon {\n  color: var(--text-light);\n  font-size: 1.2rem;\n  margin-right: 13px;\n  font-weight: 600;\n}\nion-header .banner .search_box h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.95rem;\n  font-weight: 300;\n  letter-spacing: 0.3px;\n}\n.shop_by_category {\n  padding-bottom: 15px;\n}\n.shop_by_category h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  padding-bottom: 4px;\n  padding: 15px;\n}\n.shop_by_category h2 span {\n  color: var(--primary);\n}\n.shop_by_category .scroll-x {\n  width: 100%;\n  white-space: nowrap;\n  overflow-x: auto;\n}\n.shop_by_category .scroll-x .category {\n  display: inline-block;\n  margin: 0 3.5px;\n}\n.shop_by_category .scroll-x .category .category_img {\n  width: 103px;\n  height: 103px;\n  border-radius: 5px;\n}\n.shop_by_category .scroll-x .category:first-child {\n  margin-left: 15px;\n}\n.shop_by_category .scroll-x .category:last-child {\n  margin-right: 15px;\n}\n.offres {\n  padding-bottom: 15px;\n}\n.offres h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  padding-bottom: 4px;\n  padding: 15px;\n}\n.offres h2 span {\n  color: var(--primary);\n}\n.offres .scroll-x {\n  width: 100%;\n  white-space: nowrap;\n  overflow-x: auto;\n}\n.offres .scroll-x .offer {\n  display: inline-block;\n  margin: 0 3.5px;\n  width: 250px;\n  height: 108px;\n  border-radius: 5px;\n}\n.offres .scroll-x .offer:first-child {\n  margin-left: 15px;\n}\n.offres .scroll-x .offer:last-child {\n  margin-right: 15px;\n}\nion-list {\n  padding: 0px 15px 0 15px;\n  background: none;\n  margin: 0;\n}\nion-list h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  padding: 0;\n  padding-bottom: 6px;\n}\nion-list ion-item {\n  padding: 7px 0;\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --min-height: unset;\n}\nion-list ion-item h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.95rem;\n}\nion-list ion-item h4 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n}\nion-list ion-item h4 ion-icon {\n  color: var(--text-light2);\n  font-size: 1.55rem;\n  min-width: 22px;\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n.marquee {\n  width: 80px;\n  margin: 0 auto;\n  white-space: nowrap;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.marquee span {\n  display: inline-block;\n  padding-left: 100%;\n  will-change: transform;\n  -webkit-animation: marquee 10s linear infinite;\n          animation: marquee 10s linear infinite;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.marquee span:hover {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n@-webkit-keyframes marquee {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n@keyframes marquee {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9ycy9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1jdXN0b21lci9zcmNcXGFwcFxcZG9jdG9yc1xcZG9jdG9ycy5wYWdlLnNjc3MiLCJzcmMvYXBwL2RvY3RvcnMvZG9jdG9ycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQ0NKO0FEQ0k7RUFDSSwwQkFBQTtBQ0NSO0FEQ1E7RUFDSSwyQkFBQTtBQ0NaO0FEQ1k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NoQjtBRENnQjtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ0NwQjtBREVnQjtFQUNJLFNBQUE7RUFDQSxnQkFBQTtBQ0FwQjtBREVvQjtFQUNJLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNEeEI7QURNWTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQ0poQjtBRFNJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDUFI7QURTUTtFQUNJLG9CQUFBO0FDUFo7QURTWTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNQaEI7QURVWTtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNSaEI7QURZUTtFQUNJLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNWWjtBRFlZO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNWaEI7QURhWTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ1hoQjtBRGlCQTtFQUNJLG9CQUFBO0FDZEo7QURnQkk7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ2RSO0FEZ0JRO0VBQ0kscUJBQUE7QUNkWjtBRGtCSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDaEJSO0FEa0JRO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FDaEJaO0FEa0JZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ2hCaEI7QURtQlk7RUFDSSxpQkFBQTtBQ2pCaEI7QURvQlk7RUFDSSxrQkFBQTtBQ2xCaEI7QUR3QkE7RUFDSSxvQkFBQTtBQ3JCSjtBRHVCSTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDckJSO0FEdUJRO0VBQ0kscUJBQUE7QUNyQlo7QUR5Qkk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3ZCUjtBRHlCUTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUN2Qlo7QUR5Qlk7RUFDSSxpQkFBQTtBQ3ZCaEI7QUQwQlk7RUFDSSxrQkFBQTtBQ3hCaEI7QUQ4QkE7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQzNCSjtBRDZCSTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDM0JSO0FEOEJJO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSxtQkFBQTtBQzVCUjtBRDhCUTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDNUJaO0FEK0JRO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQzdCWjtBRCtCWTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDN0JoQjtBRG1DQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ2hDSjtBRGtDSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDaENSO0FEbUNJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDakNSO0FEb0NJO0VBQ0ksZ0JBQUE7QUNsQ1I7QURvQ1E7RUFDSSx5QkFBQTtBQ2xDWjtBRHVDQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDcENKO0FEdUNBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ3BDSjtBRHVDQTtFQUNJLG9DQUFBO1VBQUEsNEJBQUE7QUNwQ0o7QURzQ0E7RUFDSTtJQUNJLDBCQUFBO0VDbkNOO0VEcUNFO0lBQ0ksOEJBQUE7RUNuQ047QUFDRjtBRDZCQTtFQUNJO0lBQ0ksMEJBQUE7RUNuQ047RURxQ0U7SUFDSSw4QkFBQTtFQ25DTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZG9jdG9ycy9kb2N0b3JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cclxuICAgIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIC50aXRsZV9pbm5lciB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIC5sb2NhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYmFubmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgICAgICAgLmJhbm5lcl90ZXh0IHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlYXJjaF9ib3gge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvX2ZpZWxkX2JnKTtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEzcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2hvcF9ieV9jYXRlZ29yeSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNjcm9sbC14IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcblxyXG4gICAgICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDMuNXB4O1xyXG5cclxuICAgICAgICAgICAgLmNhdGVnb3J5X2ltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAzcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwM3B4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ub2ZmcmVzIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2Nyb2xsLXgge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuXHJcbiAgICAgICAgLm9mZmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMy41cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHggMCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogN3B4IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1taW4taGVpZ2h0OiB1bnNldDtcclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjU1cmVtO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZW1wdHktdmlldyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDEwJTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWFycXVlZSB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ubWFycXVlZSBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogMTAwJTtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICBhbmltYXRpb246IG1hcnF1ZWUgMTBzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLm1hcnF1ZWUgc3Bhbjpob3ZlciB7XHJcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG59XHJcbkBrZXlmcmFtZXMgbWFycXVlZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIge1xuICBtaW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgLmxvY2F0aW9uIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgLmxvY2F0aW9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxN3B4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDAgMXB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIC5sb2NhdGlvbiBoMiB7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciAubG9jYXRpb24gaDIgc3BhbiB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIGgzIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTVweDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuYmFubmVyX3RleHQge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuYmFubmVyX3RleHQgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIC5iYW5uZXJfdGV4dCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuc2VhcmNoX2JveCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWluZm9fZmllbGRfYmcpO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA1cHggMTNweDtcbiAgbWluLWhlaWdodDogNTBweDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuc2VhcmNoX2JveCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuc2VhcmNoX2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG5cbi5zaG9wX2J5X2NhdGVnb3J5IHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uc2hvcF9ieV9jYXRlZ29yeSBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uc2hvcF9ieV9jYXRlZ29yeSBoMiBzcGFuIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuLnNob3BfYnlfY2F0ZWdvcnkgLnNjcm9sbC14IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4uc2hvcF9ieV9jYXRlZ29yeSAuc2Nyb2xsLXggLmNhdGVnb3J5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMy41cHg7XG59XG4uc2hvcF9ieV9jYXRlZ29yeSAuc2Nyb2xsLXggLmNhdGVnb3J5IC5jYXRlZ29yeV9pbWcge1xuICB3aWR0aDogMTAzcHg7XG4gIGhlaWdodDogMTAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5zaG9wX2J5X2NhdGVnb3J5IC5zY3JvbGwteCAuY2F0ZWdvcnk6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5zaG9wX2J5X2NhdGVnb3J5IC5zY3JvbGwteCAuY2F0ZWdvcnk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLm9mZnJlcyB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLm9mZnJlcyBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ub2ZmcmVzIGgyIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG4ub2ZmcmVzIC5zY3JvbGwteCB7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLm9mZnJlcyAuc2Nyb2xsLXggLm9mZmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMy41cHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAxMDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm9mZnJlcyAuc2Nyb2xsLXggLm9mZmVyOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4ub2ZmcmVzIC5zY3JvbGwteCAub2ZmZXI6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwcHggMTVweCAwIDE1cHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1saXN0IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogN3B4IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiB1bnNldDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaDQge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaDQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDEuNTVyZW07XG4gIG1pbi13aWR0aDogMjJweDtcbn1cblxuLmVtcHR5LXZpZXcge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdG9wOiAxMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMTAlO1xufVxuLmVtcHR5LXZpZXcgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uZW1wdHktdmlldyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5lbXB0eS12aWV3IGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uZW1wdHktdmlldyBidXR0b24gc3BhbiB7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJxdWVlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubWFycXVlZSBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDEwMCU7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIGFuaW1hdGlvbjogbWFycXVlZSAxMHMgbGluZWFyIGluZmluaXRlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5tYXJxdWVlIHNwYW46aG92ZXIge1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuXG5Aa2V5ZnJhbWVzIG1hcnF1ZWUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDApO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/doctors/doctors.page.ts":
/*!*****************************************!*\
  !*** ./src/app/doctors/doctors.page.ts ***!
  \*****************************************/
/*! exports provided: DoctorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsPage", function() { return DoctorsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/constants.models */ "./src/models/constants.models.ts");
/* harmony import */ var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/events/my-events.service */ "./src/app/services/events/my-events.service.ts");









let DoctorsPage = class DoctorsPage {
    constructor(navCtrl, translate, myEventsService, uiElementService, apiService) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.myEventsService = myEventsService;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.banners = new Array();
        this.specializations = new Array();
        this.doctorTypes = new Array();
        this.isLoading = true;
    }
    ngOnInit() {
        this.selectedLocation = src_models_helper_models__WEBPACK_IMPORTED_MODULE_3__["Helper"].getAddressSelected();
        this.subscriptions.push(this.myEventsService.getAddressObservable().subscribe(selectedLocationNew => {
            let changed = !this.selectedLocation || !selectedLocationNew || (this.selectedLocation.latitude != selectedLocationNew.latitude || this.selectedLocation.longitude != selectedLocationNew.longitude);
            this.selectedLocation = selectedLocationNew;
            if (changed) {
                this.doRefresh();
            }
        }));
        this.doRefresh();
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    doRefresh() {
        this.translate.get("loading").subscribe(value => {
            this.uiElementService.presentLoading(value);
            this.doctorTypes = [];
            this.specializations = [];
            this.banners = [];
            this.loadBanners();
            this.refreshSpecializations();
        });
    }
    refreshSpecializations() {
        this.subscriptions.push(this.apiService.getCategoriesWithScope(src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__["Constants"].SCOPE_DOCTOR_TYPE).subscribe(res => this.doctorTypes = res, err => console.log("getCategoriesWithScope", err)));
        this.subscriptions.push(this.apiService.getCategoriesWithScope(src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__["Constants"].SCOPE_SPECIALIZATION).subscribe(res => {
            this.specializations = res;
            this.uiElementService.dismissLoading();
            this.isLoading = false;
        }, err => {
            console.log("getCategoriesWithScope", err);
            this.uiElementService.dismissLoading();
            this.isLoading = false;
        }));
    }
    loadBanners() {
        this.subscriptions.push(this.apiService.getBanners(src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__["Constants"].SCOPE_DOCTOR).subscribe(res => this.banners = res, err => console.log("getBanners", err)));
    }
    pickLocation() {
        this.myEventsService.setCustomEventData("nav:pick_location");
    }
    navSearch() {
        if (this.selectedLocation && this.selectedLocation.latitude && this.selectedLocation.longitude) {
            this.navCtrl.navigateForward(['./specilities']);
        }
        else {
            this.translate.get("select_location").subscribe(value => this.uiElementService.presentToast(value));
        }
    }
    navListDoctorsType(cat) {
        if (this.selectedLocation && this.selectedLocation.latitude && this.selectedLocation.longitude) {
            let navigationExtras = { state: { category: cat, scope: src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__["Constants"].SCOPE_DOCTOR_TYPE } };
            this.navCtrl.navigateForward(['./list-of-doctors'], navigationExtras);
        }
        else {
            this.translate.get("select_location").subscribe(value => this.uiElementService.presentToast(value));
        }
    }
    navListDoctors() {
        if (this.selectedLocation && this.selectedLocation.latitude && this.selectedLocation.longitude) {
            this.navCtrl.navigateForward(['./list-of-doctors']);
        }
        else {
            this.translate.get("select_location").subscribe(value => this.uiElementService.presentToast(value));
        }
    }
    navListDoctorsSpeciality(cat) {
        if (this.selectedLocation && this.selectedLocation.latitude && this.selectedLocation.longitude) {
            let navigationExtras = { state: { category: cat, scope: src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__["Constants"].SCOPE_SPECIALIZATION } };
            this.navCtrl.navigateForward(['./list-of-doctors'], navigationExtras);
        }
        else {
            this.translate.get("select_location").subscribe(value => this.uiElementService.presentToast(value));
        }
    }
};
DoctorsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_8__["MyEventsService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }
];
DoctorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./doctors.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/doctors/doctors.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./doctors.page.scss */ "./src/app/doctors/doctors.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_8__["MyEventsService"],
        _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])
], DoctorsPage);



/***/ })

}]);
//# sourceMappingURL=doctors-doctors-module-es2015.js.map