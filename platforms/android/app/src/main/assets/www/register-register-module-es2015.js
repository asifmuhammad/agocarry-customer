(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'register_now' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n    <div class=\"form\">\r\n        <p class=\"ion-text-center\">{{'register_now_message' | translate}} <br>{{'register_now_message2' | translate}}\r\n        </p>\r\n\r\n        <ion-list lines=\"none\">\r\n            <ion-item lines=\"none\">\r\n                <div class=\"ite_inner d-flex\">\r\n                    <ion-icon class=\"zmdi zmdi-globe-alt ion-text-start\"></ion-icon>\r\n                    <ion-label mode=\"md\" position=\"fixed\">{{\"select_country\" | translate}}</ion-label>\r\n                    <ion-select mode=\"md\" [(ngModel)]=\"countryCode\" multiple=\"false\" [value]=\"countryCode\"\r\n\t\t\t\t\tplaceholder=\"{{'select_country' | translate}}\" [okText]=\"'okay' | translate\"\r\n\t\t\t\t\t[cancelText]=\"'cancel' | translate\" (ionChange)=\"changeHint()\"\r\n\t\t\t\t\t[selectedText]=\"countryCodeCountryText\">\r\n                        <ion-select-option *ngFor=\"let country of countries\" [value]=\"country.callingCodes[0]\">\r\n                            {{country.name}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </div>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n                <div class=\"ite_inner d-flex\">\r\n                    <ion-icon class=\"zmdi  zmdi-smartphone-iphone ion-text-start\"></ion-icon>\r\n<!--                    <ion-label position=\"fixed\">{{phoneNumberHint}}</ion-label>-->\r\n                    <ion-input type=\"tel\" [(ngModel)]=\"phoneNumber\" placeholder=\"{{phoneNumberHint}}\"></ion-input>\r\n                </div>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n                <div class=\"ite_inner d-flex\">\r\n                    <ion-icon class=\"zmdi zmdi-account ion-text-start\"></ion-icon>\r\n                    <!--                    <ion-label position=\"fixed\">{{'user_name' | translate}}</ion-label>-->\r\n                    <ion-input type=\"text\" [(ngModel)]=\"signUpRequest.name\" placeholder=\"{{'user_name' | translate}}\"></ion-input>\r\n                </div>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n                <div class=\"ite_inner d-flex\">\r\n                    <ion-icon class=\"zmdi zmdi-email ion-text-start\"></ion-icon>\r\n                    <!--                    <ion-label position=\"fixed\">{{'email_address' | translate}}</ion-label>-->\r\n                    <ion-input type=\"email\" [(ngModel)]=\"signUpRequest.email\" placeholder=\"{{'email_address' | translate}}\"></ion-input>\r\n                </div>\r\n            </ion-item>\r\n            <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"requestSignUp()\">\r\n                {{'continue' | translate}}\r\n            </ion-button>\r\n        </ion-list>\r\n        <h4 class=\"ion-text-center\" (click)=\"goBack()\">\r\n            {{'back_to_sign_in' | translate}}\r\n        </h4>\r\n        <div class=\"form\">\r\n            <p class=\"ion-text-center\">{{'will_send_an_otp_on_above' | translate}}\r\n                <br>{{'given_phone_number' | translate}}\r\n            </p>\r\n        </div>\r\n    </div>\r\n\r\n</ion-content>\r\n\r\n<!-- <ion-footer class=\"ion-no-border\">\r\n\t<div class=\"form\">\r\n\t\t<p class=\"ion-text-center\">{{'will_send_an_otp_on_above' | translate}} <br>{{'given_phone_number' | translate}}\r\n\t\t</p>\r\n\t</div>\r\n</ion-footer> -->");

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_6__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form {\n  padding-top: 50px;\n}\n.form ion-item {\n  background: var(--info_field_bg);\n}\n.form ion-item.item-input ion-label {\n  max-width: unset !important;\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.form ion-item.item-select {\n  padding: 2px 13px;\n}\n.form ion-item.item-select ion-label {\n  display: none;\n}\n.form p {\n  color: var(--text-light) !important;\n  margin: 0;\n  font-size: 1rem !important;\n  letter-spacing: 0;\n  font-weight: 500;\n  line-height: 19px;\n  margin-bottom: 50px;\n  opacity: 0.8;\n}\n.form .button.btn.button-block {\n  margin-top: 25px;\n}\n.form ion-list {\n  margin-bottom: 28px;\n}\n.form h4 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n}\nion-footer .form {\n  padding-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktY3VzdG9tZXIvc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNJLGlCQUFBO0FDUko7QURVSTtFQUNJLGdDQUFBO0FDUlI7QURZWTtFQUNJLDJCQUFBO0VBQ0EscUNBQUE7RUFBQSxrQ0FBQTtFQUFBLDZCQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FDVmhCO0FEY1E7RUFDSSxpQkFBQTtBQ1paO0FEY1k7RUFDSSxhQUFBO0FDWmhCO0FEaUJJO0VBQ0ksbUNBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNmUjtBRGtCSTtFQUNJLGdCQUFBO0FDaEJSO0FEbUJJO0VBQ0ksbUJBQUE7QUNqQlI7QURvQkk7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDbEJSO0FEdUJJO0VBQ0ksMkJBQUE7QUNwQlIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2lvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcclxuLy8gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbi8vICAgIGxlZnQ6IDA7XHJcbi8vICAgIHRvcDogMDtcclxuLy8gICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XHJcbi8vfVxyXG5cclxuLmZvcm0ge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm9fZmllbGRfYmcpO1xyXG4vLyAgICAgICAgcGFkZGluZzogMnB4IDIwcHg7XHJcblxyXG4gICAgICAgICYuaXRlbS1pbnB1dCB7XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuaXRlbS1zZWxlY3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMTNweDtcclxuXHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24uYnRuLmJ1dHRvbi1ibG9jayB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIC5mb3JtIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIuZm9ybSB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuLmZvcm0gaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvX2ZpZWxkX2JnKTtcbn1cbi5mb3JtIGlvbi1pdGVtLml0ZW0taW5wdXQgaW9uLWxhYmVsIHtcbiAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5mb3JtIGlvbi1pdGVtLml0ZW0tc2VsZWN0IHtcbiAgcGFkZGluZzogMnB4IDEzcHg7XG59XG4uZm9ybSBpb24taXRlbS5pdGVtLXNlbGVjdCBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZvcm0gcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi5mb3JtIC5idXR0b24uYnRuLmJ1dHRvbi1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4uZm9ybSBpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG4uZm9ybSBoNCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tZm9vdGVyIC5mb3JtIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_models_auth_signup_request_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/auth-signup-request.models */ "./src/models/auth-signup-request.models.ts");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var _services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/shoup-hour-services/network/api.service */ "./src/app/services/shoup-hour-services/network/api.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");










let RegisterPage = class RegisterPage {
    constructor(navCtrl, uiElementService, apiService, apiServiceShophour, route, translate, alertCtrl) {
        this.navCtrl = navCtrl;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.apiServiceShophour = apiServiceShophour;
        this.route = route;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.signUpRequest = new src_models_auth_signup_request_models__WEBPACK_IMPORTED_MODULE_4__["SignUpRequest"]();
    }
    ngOnInit() {
        this.changeHint();
        this.route.queryParams.subscribe(params => {
            let code = params["code"];
            let phone = params["phone"];
            let name = params["name"];
            let email = params["email"];
            if (code && code.length)
                this.countryCode = code;
            if (phone && phone.length)
                this.phoneNumber = phone;
            if (name && name.length)
                this.signUpRequest.name = name;
            if (email && email.length)
                this.signUpRequest.email = email;
            this.apiService.getCountries().subscribe(res => { this.countries = res; this.countryCode = this.countryCode; this.changeHint(true); });
        });
        this.apiService.getCountries().subscribe(res => { this.countries = res; this.changeHint(true); });
    }
    changeHint(clearPhoneSkip) {
        this.phoneNumber = clearPhoneSkip ? this.phoneNumber : "";
        if (this.countryCode && this.countryCode.length) {
            for (let country of this.countries)
                if (country.callingCodes[0] && country.callingCodes[0] == this.countryCode)
                    this.countryCodeCountryText = country.name;
            this.translate.get('enter_phone_number_exluding').subscribe(value => this.phoneNumberHint = (value + " (+" + this.countryCode + ")"));
        }
        else {
            this.translate.get('enter_phone_number').subscribe(value => this.phoneNumberHint = value);
        }
    }
    requestSignUp() {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (this.signUpRequest.name.length < 2) {
            this.translate.get("err_valid_name").subscribe(value => this.uiElementService.presentToast(value));
        }
        else if (this.signUpRequest.email.length <= 5 || !reg.test(this.signUpRequest.email)) {
            this.translate.get("err_valid_email").subscribe(value => this.uiElementService.presentToast(value));
        }
        else if (!this.countryCode || !this.countryCode.length || !this.phoneNumber || !this.phoneNumber.length) {
            this.translate.get("err_valid_phone").subscribe(value => this.uiElementService.presentToast(value));
        }
        else {
            this.alertPhone();
        }
    }
    alertPhone() {
        this.translate.get(['alert_phone', 'no', 'yes']).subscribe(text => {
            this.phoneNumberFull = "+" + this.countryCode + src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].formatPhone(this.phoneNumber);
            this.alertCtrl.create({
                header: this.phoneNumberFull,
                message: text['alert_phone'],
                buttons: [{
                        text: text['no'],
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }, {
                        text: text['yes'],
                        handler: () => {
                            this.signUpRequest.password = String(Math.floor(100000 + Math.random() * 900000));
                            this.signUpRequest.mobile_number = this.phoneNumberFull;
                            this.signUp();
                        }
                    }]
            }).then(alert => alert.present());
        });
    }
    signUp() {
        this.translate.get('signing_up').subscribe(value => {
            this.uiElementService.presentLoading(value);
            this.apiService.createUser(this.signUpRequest).subscribe(res => {
                this.apiServiceShophour.createUser(this.signUpRequest).subscribe(resShophour => {
                    console.log("shophour user", resShophour);
                });
                console.log(res);
                this.uiElementService.dismissLoading();
                let navigationExtras = { queryParams: { phoneNumberFull: res.user.mobile_number } };
                this.navCtrl.navigateForward(['./verification'], navigationExtras);
            }, err => {
                console.log(err);
                this.uiElementService.dismissLoading();
                let errMsg;
                this.translate.get(['invalid_credentials', 'invalid_credential_email', 'invalid_credential_phone', 'invalid_credential_password']).subscribe(value => {
                    errMsg = value['invalid_credentials'];
                    if (err && err.error && err.error.errors) {
                        if (err.error.errors.email) {
                            errMsg = value['invalid_credential_email'];
                        }
                        else if (err.error.errors.mobile_number) {
                            errMsg = value['invalid_credential_phone'];
                        }
                        else if (err.error.errors.password) {
                            errMsg = value['invalid_credential_password'];
                        }
                    }
                    this.uiElementService.presentErrorAlert(errMsg);
                });
            });
        });
    }
    goBack() {
        this.navCtrl.pop();
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiServiceShopHour"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"],
        _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiServiceShopHour"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], RegisterPage);



/***/ }),

/***/ "./src/models/auth-signup-request.models.ts":
/*!**************************************************!*\
  !*** ./src/models/auth-signup-request.models.ts ***!
  \**************************************************/
/*! exports provided: SignUpRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpRequest", function() { return SignUpRequest; });
/* harmony import */ var _constants_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.models */ "./src/models/constants.models.ts");

class SignUpRequest {
    constructor() {
        this.name = "";
        this.email = "";
        this.password = "";
        this.mobile_number = "";
        this.role = _constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].ROLE_USER;
    }
}


/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map