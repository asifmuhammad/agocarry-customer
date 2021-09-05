(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["language-language-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/language/language.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/language/language.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t{{'languges' | translate}}\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list lines=\"none\">\n\t\t<h2>{{'select_preferred_language' | translate}}</h2>\n\t\t<ion-radio-group [(ngModel)]=\"defaultLanguageCode\">\n\t\t\t<ion-item *ngFor=\"let language of languages\" (click)=\"onLanguageClick(language)\" class=\"item_shadow\">\n\t\t\t\t<div class=\"item_inner d-flex\">\n\t\t\t\t\t<ion-radio  value=\"{{language.code}}\"></ion-radio>\n\t\t\t\t\t<h3>{{language.name}}</h3>\n\t\t\t\t</div>\n\t\t\t</ion-item>\n\t\t</ion-radio-group>\n\t</ion-list>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n\t<ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"languageConfirm()\">\n\t\t{{'save' | translate}}\n\t</ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/shop-hour/language/language-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shop-hour/language/language-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: LanguagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePageRoutingModule", function() { return LanguagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _language_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language.page */ "./src/app/shop-hour/language/language.page.ts");




const routes = [
    {
        path: '',
        component: _language_page__WEBPACK_IMPORTED_MODULE_3__["LanguagePage"]
    }
];
let LanguagePageRoutingModule = class LanguagePageRoutingModule {
};
LanguagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LanguagePageRoutingModule);



/***/ }),

/***/ "./src/app/shop-hour/language/language.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shop-hour/language/language.module.ts ***!
  \*******************************************************/
/*! exports provided: LanguagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePageModule", function() { return LanguagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _language_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./language-routing.module */ "./src/app/shop-hour/language/language-routing.module.ts");
/* harmony import */ var _language_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./language.page */ "./src/app/shop-hour/language/language.page.ts");








let LanguagePageModule = class LanguagePageModule {
};
LanguagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _language_routing_module__WEBPACK_IMPORTED_MODULE_6__["LanguagePageRoutingModule"]
        ],
        declarations: [_language_page__WEBPACK_IMPORTED_MODULE_7__["LanguagePage"]]
    })
], LanguagePageModule);



/***/ }),

/***/ "./src/app/shop-hour/language/language.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/shop-hour/language/language.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 38px;\n}\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  text-transform: uppercase;\n  font-size: 1rem;\n  letter-spacing: 1px;\n  padding: 0 19px;\n  padding-bottom: 10px;\n}\nion-list ion-item {\n  padding: 13px 19px;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent) !important;\n  --background-activated: var(--transparent) !important;\n  --background-activated-opacity: 1;\n  --background-hover: var(--transparent) !important;\n  --ripple-color: var(--transparent) !important;\n  background: var(--white);\n  transition: all 0.5s;\n}\nion-list ion-item h3 {\n  margin: 0;\n  font-weight: 600;\n  letter-spacing: 0;\n  font-size: 1.35rem;\n  color: var(--text-black);\n}\nion-list ion-item ion-radio {\n  --color-checked: var(--primary);\n  margin-right: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC1ob3VyL2xhbmd1YWdlL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxzaG9wLWhvdXJcXGxhbmd1YWdlXFxsYW5ndWFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3AtaG91ci9sYW5ndWFnZS9sYW5ndWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5Q0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNDRDtBRENDO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREVDO0VBQ0Msa0JBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsMkNBQUE7RUFDQSxxREFBQTtFQUNBLGlDQUFBO0VBQ0EsaURBQUE7RUFDQSw2Q0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUNBRjtBREVFO0VBQ0MsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDQUg7QURHRTtFQUNDLCtCQUFBO0VBQ0Esa0JBQUE7QUNESCIsImZpbGUiOiJzcmMvYXBwL3Nob3AtaG91ci9sYW5ndWFnZS9sYW5ndWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCB7XG5cdGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdHBhZGRpbmctdG9wOiAzOHB4O1xuXG5cdGgyIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdFx0cGFkZGluZzogMCAxOXB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHR9XG5cblx0aW9uLWl0ZW0ge1xuXHRcdHBhZGRpbmc6IDEzcHggMTlweDtcblx0XHRtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuXHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblx0XHQtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xuXHRcdC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcblx0XHQtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcblx0XHQtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG5cdFx0LS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcblx0XHQtLXJpcHBsZS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuXHRcdHRyYW5zaXRpb246IGFsbCAuNXM7XG5cblx0XHRoMyB7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDA7XG5cdFx0XHRmb250LXNpemU6IDEuMzVyZW07XG5cdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG5cdFx0fVxuXG5cdFx0aW9uLXJhZGlvIHtcblx0XHRcdC0tY29sb3ItY2hlY2tlZDogdmFyKC0tcHJpbWFyeSk7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDIycHg7XG5cdFx0fVxuXHR9XG59IiwiaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogMzhweDtcbn1cbmlvbi1saXN0IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZzogMCAxOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMTNweCAxOXB4O1xuICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLXJpcHBsZS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5pb24tbGlzdCBpb24taXRlbSBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1wcmltYXJ5KTtcbiAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shop-hour/language/language.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/shop-hour/language/language.page.ts ***!
  \*****************************************************/
/*! exports provided: LanguagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePage", function() { return LanguagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_shoup_hour_services_events_my_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shoup-hour-services/events/my-events.service */ "./src/app/services/shoup-hour-services/events/my-events.service.ts");
/* harmony import */ var src_app_shophour_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shophour.config */ "./src/app/shophour.config.ts");
/* harmony import */ var src_models_models_shop_hour_constants_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/models-shop-hour/constants.models */ "./src/models/models-shop-hour/constants.models.ts");





let LanguagePage = class LanguagePage {
    constructor(config, myEvent) {
        this.config = config;
        this.myEvent = myEvent;
        this.languages = this.config.availableLanguages;
        this.defaultLanguageCode = config.availableLanguages[0].code;
        let defaultLang = window.localStorage.getItem(src_models_models_shop_hour_constants_models__WEBPACK_IMPORTED_MODULE_4__["Constants"].KEY_DEFAULT_LANGUAGE);
        if (defaultLang)
            this.defaultLanguageCode = defaultLang;
    }
    ngOnInit() {
    }
    onLanguageClick(language) {
        this.defaultLanguageCode = language.code;
    }
    languageConfirm() {
        this.myEvent.setLanguageData(this.defaultLanguageCode);
        window.localStorage.setItem(src_models_models_shop_hour_constants_models__WEBPACK_IMPORTED_MODULE_4__["Constants"].KEY_DEFAULT_LANGUAGE, this.defaultLanguageCode);
    }
};
LanguagePage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_app_shophour_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG_ShopHour"],] }] },
    { type: src_app_services_shoup_hour_services_events_my_events_service__WEBPACK_IMPORTED_MODULE_2__["MyEventsService"] }
];
LanguagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-language',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./language.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/language/language.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./language.page.scss */ "./src/app/shop-hour/language/language.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_shophour_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG_ShopHour"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, src_app_services_shoup_hour_services_events_my_events_service__WEBPACK_IMPORTED_MODULE_2__["MyEventsService"]])
], LanguagePage);



/***/ })

}]);
//# sourceMappingURL=language-language-module-es2015.js.map