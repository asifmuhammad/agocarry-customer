(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["title-title-module"],{

/***/ "./src/app/shop-hour/title/title-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/shop-hour/title/title-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TitlePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlePageRoutingModule", function() { return TitlePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _title_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title.page */ "./src/app/shop-hour/title/title.page.ts");




const routes = [
    {
        path: '',
        component: _title_page__WEBPACK_IMPORTED_MODULE_3__["TitlePage"]
    }
];
let TitlePageRoutingModule = class TitlePageRoutingModule {
};
TitlePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TitlePageRoutingModule);



/***/ }),

/***/ "./src/app/shop-hour/title/title.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shop-hour/title/title.module.ts ***!
  \*************************************************/
/*! exports provided: TitlePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlePageModule", function() { return TitlePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _title_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./title-routing.module */ "./src/app/shop-hour/title/title-routing.module.ts");
/* harmony import */ var _title_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./title.page */ "./src/app/shop-hour/title/title.page.ts");








let TitlePageModule = class TitlePageModule {
};
TitlePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _title_routing_module__WEBPACK_IMPORTED_MODULE_6__["TitlePageRoutingModule"]
        ],
        declarations: [_title_page__WEBPACK_IMPORTED_MODULE_7__["TitlePage"]]
    })
], TitlePageModule);



/***/ })

}]);
//# sourceMappingURL=title-title-module-es2015.js.map