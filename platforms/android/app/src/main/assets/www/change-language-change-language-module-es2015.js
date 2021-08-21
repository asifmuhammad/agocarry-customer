(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-language-change-language-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-language/change-language.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-language/change-language.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'change_language' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n\t<ion-list lines=\"none\">\r\n\t\t<ion-radio-group [(ngModel)]=\"defaultLanguageCode\">\r\n\t\t\t<ion-item *ngFor=\"let language of languages\" (click)=\"onLanguageClick(language)\" class=\"item_shadow\">\r\n\t\t\t\t<div class=\"item_inner d-flex\">\r\n\t\t\t\t\t<h3>{{language.name}}</h3>\r\n\t\t\t\t\t<ion-radio class=\"end\" value=\"{{language.code}}\"></ion-radio>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t</ion-radio-group>\r\n\t</ion-list>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n\t<ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"languageConfirm()\">\r\n\t\t{{'save' | translate}}\r\n\t</ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/change-language/change-language-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/change-language/change-language-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChangeLanguagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLanguagePageRoutingModule", function() { return ChangeLanguagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _change_language_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-language.page */ "./src/app/change-language/change-language.page.ts");




const routes = [
    {
        path: '',
        component: _change_language_page__WEBPACK_IMPORTED_MODULE_3__["ChangeLanguagePage"]
    }
];
let ChangeLanguagePageRoutingModule = class ChangeLanguagePageRoutingModule {
};
ChangeLanguagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangeLanguagePageRoutingModule);



/***/ }),

/***/ "./src/app/change-language/change-language.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/change-language/change-language.module.ts ***!
  \***********************************************************/
/*! exports provided: ChangeLanguagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLanguagePageModule", function() { return ChangeLanguagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _change_language_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-language-routing.module */ "./src/app/change-language/change-language-routing.module.ts");
/* harmony import */ var _change_language_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-language.page */ "./src/app/change-language/change-language.page.ts");








let ChangeLanguagePageModule = class ChangeLanguagePageModule {
};
ChangeLanguagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _change_language_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChangeLanguagePageRoutingModule"]
        ],
        declarations: [_change_language_page__WEBPACK_IMPORTED_MODULE_7__["ChangeLanguagePage"]]
    })
], ChangeLanguagePageModule);



/***/ }),

/***/ "./src/app/change-language/change-language.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/change-language/change-language.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 10px;\n}\nion-list ion-item {\n  padding: 13px 16px;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin-bottom: 5px;\n  background: var(--white);\n  transition: all 0.5s;\n}\nion-list ion-item h3 {\n  margin: 0;\n  font-weight: 600;\n  letter-spacing: 0;\n  font-size: 1.3rem;\n  color: var(--text-black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLWxhbmd1YWdlL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxjaGFuZ2UtbGFuZ3VhZ2VcXGNoYW5nZS1sYW5ndWFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYW5nZS1sYW5ndWFnZS9jaGFuZ2UtbGFuZ3VhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MseUNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDQ0Q7QURHQztFQUNDLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtBQ0RGO0FER0U7RUFDQyxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNESCIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1sYW5ndWFnZS9jaGFuZ2UtbGFuZ3VhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cclxuXHJcblxyXG5cdGlvbi1pdGVtIHtcclxuXHRcdHBhZGRpbmc6IDEzcHggMTZweDtcclxuXHRcdG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHQtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XHJcblx0XHQtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIC41cztcclxuXHJcblx0XHRoMyB7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogMS4zcmVtO1xyXG5cdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMTNweCAxNnB4O1xuICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5pb24tbGlzdCBpb24taXRlbSBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG59Il19 */");

/***/ }),

/***/ "./src/app/change-language/change-language.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/change-language/change-language.page.ts ***!
  \*********************************************************/
/*! exports provided: ChangeLanguagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLanguagePage", function() { return ChangeLanguagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var src_models_constants_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/constants.models */ "./src/models/constants.models.ts");
/* harmony import */ var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/events/my-events.service */ "./src/app/services/events/my-events.service.ts");





let ChangeLanguagePage = class ChangeLanguagePage {
    constructor(config, myEvent) {
        this.config = config;
        this.myEvent = myEvent;
        this.languages = this.config.availableLanguages;
        this.defaultLanguageCode = config.availableLanguages[0].code;
        let defaultLang = window.localStorage.getItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_3__["Constants"].KEY_DEFAULT_LANGUAGE);
        if (defaultLang)
            this.defaultLanguageCode = defaultLang;
    }
    ngOnInit() {
    }
    onLanguageClick(language) {
        this.defaultLanguageCode = language.code;
    }
    languageConfirm() {
        window.localStorage.setItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_3__["Constants"].KEY_DEFAULT_LANGUAGE, this.defaultLanguageCode);
        this.myEvent.setLanguageData(this.defaultLanguageCode);
    }
};
ChangeLanguagePage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"],] }] },
    { type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_4__["MyEventsService"] }
];
ChangeLanguagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-language',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./change-language.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-language/change-language.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./change-language.page.scss */ "./src/app/change-language/change-language.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_4__["MyEventsService"]])
], ChangeLanguagePage);



/***/ })

}]);
//# sourceMappingURL=change-language-change-language-module-es2015.js.map