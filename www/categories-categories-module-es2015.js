(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            {{'shop_by_category' | translate}}\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"bg_color\" fullscreen>\r\n    <div class=\"container_new d-flex\">\r\n        <ion-segment mode=\"ios\" [(ngModel)]=\"category_id\" lines=\"none\" scrollable (ionChange)=\"segmentChanged($event)\">\r\n            <ion-segment-button mode=\"ios\" *ngFor=\"let cat of categories\" [value]=\"cat.id\">\r\n                <div class=\"category_img center_img\">\r\n                    <img [src]=\"cat.image\" class=\"crop_img\">\r\n                    <ion-icon class=\"zmdi zmdi-chevron-right\" (click)=\"listProducts(cat)\"></ion-icon>\r\n                </div>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n        <div class=\"tab_content end\">\r\n            <div class=\"empty-view\" *ngIf=\"!isLoading && (!categoriesSub || !categoriesSub.length)\">\r\n                <div style=\"text-align:center\">\r\n                    <img src=\"assets/images/empty_categories.png\" alt=\"no offers\" />\r\n                    <span>{{'empty_categories' | translate}}</span>\r\n                </div>\r\n            </div>\r\n            <ion-list lines=\"none\">\r\n                <ion-item *ngFor=\"let cat of categoriesSub\" (click)=\"listProducts(cat)\">\r\n                    <div class=\"item_inner d-flex\">\r\n                        <h2>{{cat.title}}</h2>\r\n                        <ion-icon class=\"zmdi zmdi-chevron-right ion-text-end end\"></ion-icon>\r\n                    </div>\r\n                </ion-item>\r\n            </ion-list>\r\n        </div>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/categories/categories-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function() { return CategoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.page */ "./src/app/categories/categories.page.ts");




const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
    }
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/categories/categories-routing.module.ts");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories.page */ "./src/app/categories/categories.page.ts");








let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_6__["CategoriesPageRoutingModule"]
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_7__["CategoriesPage"]]
    })
], CategoriesPageModule);



/***/ }),

/***/ "./src/app/categories/categories.page.scss":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container_new {\n  align-items: flex-start;\n  padding: 0 5px;\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n}\n.container_new ion-segment {\n  border: none !important;\n  background: var(--none) !important;\n  border-radius: 0px;\n  margin: 0;\n  position: fixed;\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 10px 5px 54px 5px;\n  min-width: 112px;\n  z-index: 9;\n  overflow-y: scroll;\n  height: 100%;\n}\n.container_new ion-segment ion-segment-button {\n  background: none !important;\n  position: relative;\n  --background-checked: var(--transparent) !important;\n  --background-focused: var(--transparent) !important;\n  --border-width: 0 !important;\n  --border-radius: 0 !important;\n  --indicator-color: var(--transparent) !important;\n  --indicator-box-shadow: none !important;\n  --ripple-color: var(--transparent) !important;\n  --color: var(--text-light) !important;\n  --color-checked: var(--text-light) !important;\n  --color-hover: var(--text-light) !important;\n  --background-hover: var(--transparent) !important;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n  margin-bottom: 10px;\n}\n.container_new ion-segment ion-segment-button .category_img {\n  width: 110px;\n  height: 110px;\n  border-radius: 8px;\n}\n.container_new ion-segment ion-segment-button .category_img img {\n  transition: all 0.4s;\n}\n.container_new ion-segment ion-segment-button .category_img ion-icon {\n  color: var(--text-black);\n  font-size: 2rem;\n  position: absolute;\n  bottom: -400px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  z-index: 99;\n  transition: all 0.4s;\n}\n.container_new ion-segment ion-segment-button .category_img::after {\n  content: \"\";\n  position: absolute;\n  bottom: -400px;\n  left: 0;\n  width: 100%;\n  height: 30%;\n  background: linear-gradient(180deg, rgba(255, 185, 163, 0) 7%, rgba(255, 255, 255, 0.8158613787) 78%);\n  transition: all 0.4s;\n}\n.container_new ion-segment ion-segment-button.segment-button-checked {\n  color: var(--primary) !important;\n  opacity: 1;\n}\n.container_new ion-segment ion-segment-button.segment-button-checked .category_img::after {\n  bottom: 0;\n}\n.container_new ion-segment ion-segment-button.segment-button-checked .category_img ion-icon {\n  bottom: 0;\n}\n.container_new ion-segment ion-segment-button.segment-button-checked .category_img img {\n  filter: grayscale(0);\n}\n.container_new .tab_content {\n  padding: 10px 5px;\n  width: calc(100% - 121px);\n  min-height: calc(100vh - 60px);\n  position: relative;\n}\n.container_new .tab_content ion-list {\n  margin: 0;\n  background: none;\n  padding: 0px;\n  width: 100%;\n}\n.container_new .tab_content ion-list ion-item {\n  --inner-padding-end: 0px;\n  --min-height: unset !important;\n  --padding-start: 0;\n  --background: var(--transparent) !important;\n  background: var(--white);\n  padding: 8px 20px;\n  margin-bottom: 8px;\n  border-radius: 10px;\n}\n.container_new .tab_content ion-list ion-item .item_inner h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 0.94rem;\n  letter-spacing: normal;\n  font-weight: 500;\n}\n.container_new .tab_content ion-list ion-item .item_inner ion-icon {\n  color: var(--text-light2);\n  font-size: 1.9rem;\n  opacity: 0.6;\n}\n.empty-view {\n  margin: auto;\n  padding: 21px 7px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n}\n.empty-view img {\n  width: 75px;\n  margin: auto;\n  margin-bottom: 16px;\n}\n.empty-view span {\n  color: #9e9e9e;\n  font-weight: 400;\n  font-size: 0.9rem;\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9GOlxcZml2ZXJcXEJlcm5hcmRcXERvY3RvciBXb3JsZFxcRG9jdG9Xb3JsZF9BcHBDb2RlIChWaWRlbyBDYWxsKS0yMDIxMDgwOVQxMDE0MDdaLTAwMVxcRG9jdG9Xb3JsZF9BcHBDb2RlIChWaWRlbyBDYWxsKVxcZG9jdG93b3JsZF9jdXN0b21lclxcZG9jdG93b3JsZF9jdXN0b21lci9zcmNcXGFwcFxcY2F0ZWdvcmllc1xcY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NSO0FEQ1E7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7RUFDQSxtREFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnREFBQTtFQUNBLHVDQUFBO0VBQ0EsNkNBQUE7RUFDQSxxQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsMkNBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNDWjtBRENZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NoQjtBRENnQjtFQUNJLG9CQUFBO0FDQ3BCO0FERWdCO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ0FwQjtBREdnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxR0FBQTtFQUdBLG9CQUFBO0FDSHBCO0FET1k7RUFDSSxnQ0FBQTtFQUNBLFVBQUE7QUNMaEI7QURRb0I7RUFDSSxTQUFBO0FDTnhCO0FEU29CO0VBQ0ksU0FBQTtBQ1B4QjtBRFVvQjtFQUNJLG9CQUFBO0FDUnhCO0FEZUk7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ2JSO0FEZVE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2JaO0FEZVk7RUFDSSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDYmhCO0FEZ0JvQjtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ2R4QjtBRGlCb0I7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ2Z4QjtBRHVCQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUNwQko7QURzQkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDcEJSO0FEdUJJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNyQlI7QUR3Qkk7RUFDSSxnQkFBQTtBQ3RCUjtBRHdCUTtFQUNJLHlCQUFBO0FDdEJaIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJfbmV3IHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaW9uLXNlZ21lbnQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW5vbmUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4IDU0cHggNXB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTEycHg7XHJcbiAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0taW5kaWNhdG9yLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1yaXBwbGUtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tY29sb3ItaG92ZXI6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgLmNhdGVnb3J5X2ltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IC00MDBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDI1NSwgMTg1LCAxNjMsIDApIDclLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgxNTg2MTM3ODczMTE3OTkpIDc4JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhdGVnb3J5X2ltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGFiX2NvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMjFweCk7XHJcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgaW9uLWxpc3Qge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZW1wdHktdmlldyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMXB4IDdweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5jb250YWluZXJfbmV3IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lcl9uZXcgaW9uLXNlZ21lbnQge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbm9uZSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMTBweCA1cHggNTRweCA1cHg7XG4gIG1pbi13aWR0aDogMTEycHg7XG4gIHotaW5kZXg6IDk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lcl9uZXcgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWluZGljYXRvci1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICAtLWNvbG9yLWhvdmVyOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXJfbmV3IGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiAuY2F0ZWdvcnlfaW1nIHtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDExMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uY29udGFpbmVyX25ldyBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gLmNhdGVnb3J5X2ltZyBpbWcge1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbi5jb250YWluZXJfbmV3IGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiAuY2F0ZWdvcnlfaW1nIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXNpemU6IDJyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNDAwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbi5jb250YWluZXJfbmV3IGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiAuY2F0ZWdvcnlfaW1nOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNDAwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsIDE4NSwgMTYzLCAwKSA3JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgxNTg2MTM3ODcpIDc4JSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuLmNvbnRhaW5lcl9uZXcgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTtcbn1cbi5jb250YWluZXJfbmV3IGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIC5jYXRlZ29yeV9pbWc6OmFmdGVyIHtcbiAgYm90dG9tOiAwO1xufVxuLmNvbnRhaW5lcl9uZXcgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgLmNhdGVnb3J5X2ltZyBpb24taWNvbiB7XG4gIGJvdHRvbTogMDtcbn1cbi5jb250YWluZXJfbmV3IGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIC5jYXRlZ29yeV9pbWcgaW1nIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XG59XG4uY29udGFpbmVyX25ldyAudGFiX2NvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEyMXB4KTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyX25ldyAudGFiX2NvbnRlbnQgaW9uLWxpc3Qge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyX25ldyAudGFiX2NvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uY29udGFpbmVyX25ldyAudGFiX2NvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZm9udC1zaXplOiAwLjk0cmVtO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNvbnRhaW5lcl9uZXcgLnRhYl9jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAxLjlyZW07XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLmVtcHR5LXZpZXcge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDIxcHggN3B4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG4uZW1wdHktdmlldyBpbWcge1xuICB3aWR0aDogNzVweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmVtcHR5LXZpZXcgc3BhbiB7XG4gIGNvbG9yOiAjOWU5ZTllO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5lbXB0eS12aWV3IGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uZW1wdHktdmlldyBidXR0b24gc3BhbiB7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/categories/categories.page.ts":
/*!***********************************************!*\
  !*** ./src/app/categories/categories.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");







let CategoriesPage = class CategoriesPage {
    constructor(router, navCtrl, translate, uiElementService, apiService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.categoriesSub = new Array();
        this.isLoading = true;
        this.tab = "otc";
        console.log("getCurrentNavigation", this.router.getCurrentNavigation().extras.state);
        if (this.router.getCurrentNavigation().extras.state) {
            this.categories = this.router.getCurrentNavigation().extras.state.categories;
            this.category_id = this.router.getCurrentNavigation().extras.state.category_id;
            this.translate.get("loading").subscribe(value => { this.uiElementService.presentLoading(value); this.loadSubCategories(); });
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    segmentChanged(event) {
        this.categoriesSub = [];
        this.translate.get("loading").subscribe(value => { this.uiElementService.presentLoading(value); this.loadSubCategories(); });
    }
    loadSubCategories() {
        this.subscriptions.push(this.apiService.getCategoriesSub(this.category_id).subscribe(res => {
            this.categoriesSub = res;
            this.uiElementService.dismissLoading();
            this.isLoading = false;
        }, err => {
            console.log("getCategoriesSub", err);
            this.uiElementService.dismissLoading();
            this.isLoading = false;
        }));
    }
    listProducts(cat) {
        let navigationExtras = { state: { category: cat } };
        this.navCtrl.navigateForward(['./product-list'], navigationExtras);
    }
};
CategoriesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }
];
CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categories.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categories.page.scss */ "./src/app/categories/categories.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])
], CategoriesPage);



/***/ })

}]);
//# sourceMappingURL=categories-categories-module-es2015.js.map