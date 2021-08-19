(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-paymet-method-select-paymet-method-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-paymet-method/select-paymet-method.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-paymet-method/select-paymet-method.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'select_payment_method' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n\r\n    <div class=\"amount_to_pay\">\r\n        <h3>{{'amount_to_pay' | translate}}</h3>\r\n        <h2>{{currency_icon}}{{eComService.getCartTotal(true)}}</h2>\r\n    </div>\r\n</ion-header>\r\n<ion-content class=\"bg_color\">\r\n    <ion-list lines=\"none\">\r\n        <!-- <h2>{{'payment_modes' | translate}}</h2> -->\r\n        <ion-radio-group value=\"{{paymentMethoIdSelected}}\" (ionChange)=\"onPaymentMethodSelected($event)\">\r\n            <ion-item *ngFor=\"let pm of paymentMethods\">\r\n                <div class=\"item_inner\">\r\n                    <div class=\"payment_option d-flex\">\r\n                        <h3 class=\"d-flex\">{{pm.title}}</h3>\r\n                        <ion-radio class=\"end\" slot=\"start\" value=\"{{pm.id}}\"></ion-radio>\r\n                    </div>\r\n                </div>\r\n            </ion-item>\r\n        </ion-radio-group>\r\n\r\n        <!-- <ion-item (click)=\"pay()\">\r\n            <div class=\"item_inner\">\r\n                <div class=\"payment_option d-flex\">\r\n                    <div class=\"img_box center_img\">\r\n                        <img src=\"assets/images/payment_cod.png\" class=\"crop_img\">\r\n                    </div>\r\n                    <h3>Cash on Delivery</h3>\r\n                </div>\r\n            </div>\r\n        </ion-item>\r\n        <ion-item (click)=\"pay()\">\r\n            <div class=\"item_inner\">\r\n                <div class=\"payment_option d-flex\">\r\n                    <div class=\"img_box center_img\">\r\n                        <img src=\"assets/images/payment_paypal.png\" class=\"crop_img\">\r\n                    </div>\r\n                    <h3>PayPal</h3>\r\n                </div>\r\n            </div>\r\n        </ion-item>\r\n        <ion-item (click)=\"pay()\">\r\n            <div class=\"item_inner\">\r\n                <div class=\"payment_option d-flex\">\r\n                    <div class=\"img_box center_img\">\r\n                        <img src=\"assets/images/payment_payu.png\" class=\"crop_img\">\r\n                    </div>\r\n                    <h3>PayU Money</h3>\r\n                </div>\r\n            </div>\r\n        </ion-item>\r\n        <ion-item (click)=\"pay()\">\r\n            <div class=\"item_inner\">\r\n                <div class=\"payment_option d-flex\">\r\n                    <div class=\"img_box center_img\">\r\n                        <img src=\"assets/images/payment_stripe.png\" class=\"crop_img\">\r\n                    </div>\r\n                    <h3>Stripe</h3>\r\n                </div>\r\n            </div>\r\n        </ion-item> -->\r\n    </ion-list>\r\n</ion-content>\r\n\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <!-- <div class=\"form\" [ngClass]=\"fabAction ? 'active' : ''\">\r\n        <div class=\"payment_details\">\r\n            <div class=\"container\">\r\n                <h2 class=\"d-flex\">\r\n                    {{'sub_total' | translate}}\r\n                    <span class=\"end\">{{currency_icon}}{{eComService.getCartItemsTotal(true)}}</span>\r\n                </h2>\r\n                <h2 *ngFor=\"let ec of eComService.getExtraCharges()\" class=\"d-flex\">\r\n                    {{ec.id | translate}}\r\n                    <span class=\"end\">{{ec.priceToShow}}</span>\r\n                </h2>\r\n            </div>\r\n            <div class=\"amount_payable\" (click)=\"toggleFab()\">\r\n                <h2 class=\"d-flex\">\r\n                    {{'amount_payable' | translate}}\r\n                    <ion-icon class=\"zmdi zmdi-alert-circle-o\"></ion-icon>\r\n                    <ion-icon class=\"zmdi zmdi-chevron-down\"></ion-icon>\r\n                    <span class=\"end\">{{currency_icon}}{{eComService.getCartTotal(true)}}</span>\r\n                </h2>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n    <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"placeOrder()\">\r\n        {{'order_place' | translate}}\r\n        <ion-icon class=\"zmdi zmdi-chevron-right\"></ion-icon>\r\n    </ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/select-paymet-method/select-paymet-method-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/select-paymet-method/select-paymet-method-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SelectPaymetMethodPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPaymetMethodPageRoutingModule", function() { return SelectPaymetMethodPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_paymet_method_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-paymet-method.page */ "./src/app/select-paymet-method/select-paymet-method.page.ts");




const routes = [
    {
        path: '',
        component: _select_paymet_method_page__WEBPACK_IMPORTED_MODULE_3__["SelectPaymetMethodPage"]
    }
];
let SelectPaymetMethodPageRoutingModule = class SelectPaymetMethodPageRoutingModule {
};
SelectPaymetMethodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectPaymetMethodPageRoutingModule);



/***/ }),

/***/ "./src/app/select-paymet-method/select-paymet-method.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/select-paymet-method/select-paymet-method.module.ts ***!
  \*********************************************************************/
/*! exports provided: SelectPaymetMethodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPaymetMethodPageModule", function() { return SelectPaymetMethodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _select_paymet_method_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-paymet-method-routing.module */ "./src/app/select-paymet-method/select-paymet-method-routing.module.ts");
/* harmony import */ var _select_paymet_method_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-paymet-method.page */ "./src/app/select-paymet-method/select-paymet-method.page.ts");








let SelectPaymetMethodPageModule = class SelectPaymetMethodPageModule {
};
SelectPaymetMethodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _select_paymet_method_routing_module__WEBPACK_IMPORTED_MODULE_6__["SelectPaymetMethodPageRoutingModule"]
        ],
        declarations: [_select_paymet_method_page__WEBPACK_IMPORTED_MODULE_7__["SelectPaymetMethodPage"]]
    })
], SelectPaymetMethodPageModule);



/***/ }),

/***/ "./src/app/select-paymet-method/select-paymet-method.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/select-paymet-method/select-paymet-method.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".amount_to_pay {\n  background: var(--white);\n  padding: 18px 18px 23px 18px;\n}\n.amount_to_pay h3 {\n  margin: 0;\n  color: var(--text-light2);\n  text-transform: uppercase;\n  font-size: 0.93rem;\n  font-weight: 400;\n  letter-spacing: 1px;\n  padding-bottom: 4px;\n}\n.amount_to_pay h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-weight: 700;\n  font-size: 2.25rem;\n}\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  margin-top: 4px;\n}\nion-list h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1rem;\n  background: var(--bg-color);\n  padding: 20px 20px;\n  font-weight: 600;\n}\nion-list ion-item {\n  padding: 0;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--none);\n  background: var(--white);\n  margin-bottom: 4px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n  background: var(--white);\n}\nion-list ion-item .item_inner .payment_option {\n  padding: 13px 16px;\n}\nion-list ion-item .item_inner .payment_option .img_box {\n  min-width: 42px;\n  height: 42px;\n  margin-right: 17px;\n}\nion-list ion-item .item_inner .payment_option h3 {\n  margin: 0;\n  font-weight: 500;\n  letter-spacing: 0;\n  font-size: 1.2rem;\n  color: var(--text-black);\n}\nion-list ion-item .item_inner .payment_option h3 span {\n  font-weight: 400;\n  font-size: 0.9rem;\n}\nion-list ion-item .item_inner .payment_option ion-radio {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  display: block;\n  min-width: 20px;\n}\nion-footer .form {\n  width: calc(100% - 21px);\n  padding-top: 8px;\n}\nion-footer .form .payment_details {\n  width: calc(100% - 10px);\n  margin: 0 auto;\n}\nion-footer .form .payment_details h2 {\n  margin: 0;\n  width: 100%;\n  padding: 7px 0;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--text-light);\n}\nion-footer .form .payment_details h2 ion-icon {\n  color: var(--primary);\n  margin: 0 10px;\n  font-size: 1.3rem;\n}\nion-footer .form .payment_details h2 ion-icon.zmdi-chevron-down {\n  display: none;\n}\nion-footer .form .payment_details h2 span {\n  color: var(--text-dark);\n  font-size: 1.1rem;\n}\nion-footer .form .payment_details .container {\n  padding-bottom: 5px;\n  display: none;\n}\nion-footer .form .payment_details .amount_payable {\n  padding-bottom: 5px;\n}\nion-footer .form .payment_details .amount_payable h2 span {\n  color: #000;\n}\nion-footer .form.active .payment_details .container {\n  display: block;\n}\nion-footer .form.active .payment_details h2 ion-icon.zmdi-alert-circle-o {\n  display: none;\n}\nion-footer .form.active .payment_details h2 ion-icon.zmdi-chevron-down {\n  display: block;\n}\nion-footer .button.btn ion-icon {\n  position: absolute;\n  right: 0px;\n  font-size: 1.8rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0LXBheW1ldC1tZXRob2QvRjpcXGZpdmVyXFxCZXJuYXJkXFxEb2N0b3IgV29ybGRcXERvY3RvV29ybGRfQXBwQ29kZSAoVmlkZW8gQ2FsbCktMjAyMTA4MDlUMTAxNDA3Wi0wMDFcXERvY3RvV29ybGRfQXBwQ29kZSAoVmlkZW8gQ2FsbClcXGRvY3Rvd29ybGRfY3VzdG9tZXJcXGRvY3Rvd29ybGRfY3VzdG9tZXIvc3JjXFxhcHBcXHNlbGVjdC1wYXltZXQtbWV0aG9kXFxzZWxlY3QtcGF5bWV0LW1ldGhvZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlbGVjdC1wYXltZXQtbWV0aG9kL3NlbGVjdC1wYXltZXQtbWV0aG9kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsNEJBQUE7QUNDSjtBRENJO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NSO0FERUk7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQVI7QUR1Q0E7RUFDSSx5Q0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ3BDSjtBRHNDSTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNwQ1I7QUR1Q0k7RUFDSSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQ3JDUjtBRHVDUTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtBQ3JDWjtBRHVDWTtFQUNJLGtCQUFBO0FDckNoQjtBRHVDZ0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDckNwQjtBRHdDZ0I7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUN0Q3BCO0FEd0NvQjtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUN0Q3hCO0FEMENnQjtFQUNJLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ3hDcEI7QURnREk7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0FDN0NSO0FEK0NRO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0FDN0NaO0FEK0NZO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FDN0NoQjtBRCtDZ0I7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQzdDcEI7QUQrQ29CO0VBQ0ksYUFBQTtBQzdDeEI7QURpRGdCO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtBQy9DcEI7QURtRFk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNqRGhCO0FEb0RZO0VBQ0ksbUJBQUE7QUNsRGhCO0FEcURvQjtFQUNJLFdBQUE7QUNuRHhCO0FEMkRnQjtFQUNJLGNBQUE7QUN6RHBCO0FEOER3QjtFQUNJLGFBQUE7QUM1RDVCO0FEK0R3QjtFQUNJLGNBQUE7QUM3RDVCO0FEc0VRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUNwRVoiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3QtcGF5bWV0LW1ldGhvZC9zZWxlY3QtcGF5bWV0LW1ldGhvZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW1vdW50X3RvX3BheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDE4cHggMjNweCAxOHB4O1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45M3JlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy5mb3JtIHtcclxuLy8gICAgcGFkZGluZy10b3A6IDEzcHg7XHJcbi8vICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcclxuLy9cclxuLy8gICAgaDMge1xyXG4vLyAgICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbi8vICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuLy8gICAgfVxyXG4vL1xyXG4vLyAgICBpb24taXRlbSB7XHJcbi8vICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxuLy8gICAgICAgIHBhZGRpbmc6IDlweCAyM3B4O1xyXG4vLyAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4vLyAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4vLyAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vXHJcbi8vICAgICAgICBpb24tbGFiZWwge1xyXG4vLyAgICAgICAgICAgIG1hcmdpbjogMDtcclxuLy8gICAgICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgaW9uLXJhZGlvIHtcclxuLy8gICAgICAgICAgICBtYXJnaW46IDA7XHJcbi8vICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0tdGV4dC1saWdodDIpICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyM3B4O1xyXG4vLyAgICAgICAgICAgIG1pbi13aWR0aDogMjBweDtcclxuLy8gICAgICAgIH1cclxuLy8gICAgfVxyXG4vL31cclxuXHJcbmlvbi1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tbm9uZSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuXHJcbiAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cclxuICAgICAgICAgICAgLnBheW1lbnRfb3B0aW9uIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEzcHggMTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpb24tcmFkaW8ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIC5mb3JtIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjFweCk7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuXHJcbiAgICAgICAgLnBheW1lbnRfZGV0YWlscyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweCAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYuem1kaS1jaGV2cm9uLWRvd24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFtb3VudF9wYXlhYmxlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgLnBheW1lbnRfZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLnptZGktYWxlcnQtY2lyY2xlLW8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi56bWRpLWNoZXZyb24tZG93biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLmJ0biB7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5hbW91bnRfdG9fcGF5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiAxOHB4IDE4cHggMjNweCAxOHB4O1xufVxuLmFtb3VudF90b19wYXkgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC45M3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cbi5hbW91bnRfdG9fcGF5IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbmlvbi1saXN0IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1ub25lKTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAucGF5bWVudF9vcHRpb24ge1xuICBwYWRkaW5nOiAxM3B4IDE2cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAucGF5bWVudF9vcHRpb24gLmltZ19ib3gge1xuICBtaW4td2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnBheW1lbnRfb3B0aW9uIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5wYXltZW50X29wdGlvbiBoMyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAucGF5bWVudF9vcHRpb24gaW9uLXJhZGlvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDIwcHg7XG59XG5cbmlvbi1mb290ZXIgLmZvcm0ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjFweCk7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5pb24tZm9vdGVyIC5mb3JtIC5wYXltZW50X2RldGFpbHMge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuaW9uLWZvb3RlciAuZm9ybSAucGF5bWVudF9kZXRhaWxzIGgyIHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogN3B4IDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG59XG5pb24tZm9vdGVyIC5mb3JtIC5wYXltZW50X2RldGFpbHMgaDIgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbmlvbi1mb290ZXIgLmZvcm0gLnBheW1lbnRfZGV0YWlscyBoMiBpb24taWNvbi56bWRpLWNoZXZyb24tZG93biB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pb24tZm9vdGVyIC5mb3JtIC5wYXltZW50X2RldGFpbHMgaDIgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbmlvbi1mb290ZXIgLmZvcm0gLnBheW1lbnRfZGV0YWlscyAuY29udGFpbmVyIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmlvbi1mb290ZXIgLmZvcm0gLnBheW1lbnRfZGV0YWlscyAuYW1vdW50X3BheWFibGUge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuaW9uLWZvb3RlciAuZm9ybSAucGF5bWVudF9kZXRhaWxzIC5hbW91bnRfcGF5YWJsZSBoMiBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG59XG5pb24tZm9vdGVyIC5mb3JtLmFjdGl2ZSAucGF5bWVudF9kZXRhaWxzIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1mb290ZXIgLmZvcm0uYWN0aXZlIC5wYXltZW50X2RldGFpbHMgaDIgaW9uLWljb24uem1kaS1hbGVydC1jaXJjbGUtbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pb24tZm9vdGVyIC5mb3JtLmFjdGl2ZSAucGF5bWVudF9kZXRhaWxzIGgyIGlvbi1pY29uLnptZGktY2hldnJvbi1kb3duIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tZm9vdGVyIC5idXR0b24uYnRuIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBmb250LXNpemU6IDEuOHJlbSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/select-paymet-method/select-paymet-method.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/select-paymet-method/select-paymet-method.page.ts ***!
  \*******************************************************************/
/*! exports provided: SelectPaymetMethodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPaymetMethodPage", function() { return SelectPaymetMethodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common/ecommerce.service */ "./src/app/services/common/ecommerce.service.ts");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");








let SelectPaymetMethodPage = class SelectPaymetMethodPage {
    constructor(navCtrl, translate, uiElementService, apiService, eComService) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.eComService = eComService;
        this.subscriptions = new Array();
        this.paymentMethods = new Array();
        this.paymentMethoIdSelected = -1;
        this.fabAction = false;
        this.translate.get("loading").subscribe(value => {
            this.uiElementService.presentLoading(value);
            this.subscriptions.push(this.apiService.getPaymentMethods().subscribe(res => {
                this.paymentMethods = res;
                this.uiElementService.dismissLoading();
            }, err => {
                console.log("getPaymentMethods", err);
                this.uiElementService.dismissLoading();
            }));
        });
    }
    ngOnInit() {
        this.currency_icon = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].getSetting("currency_icon");
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    onPaymentMethodSelected(event) {
        if (event.detail && event.detail.value) {
            this.paymentMethoIdSelected = event.detail.value;
        }
    }
    placeOrder() {
        let selectedPaymentMethod = this.getSelectedPaymentMethod();
        if (selectedPaymentMethod != null) {
            this.eComService.setupOrderRequestPaymentMethod(selectedPaymentMethod);
            let orderRequest = this.eComService.getOrderRequest();
            this.translate.get(["order_placing", "order_placed", "order_place_err"]).subscribe(values => {
                this.uiElementService.presentLoading(values["order_placing"]);
                this.apiService.createOrder(orderRequest).subscribe(res => {
                    this.uiElementService.dismissLoading();
                    this.uiElementService.presentToast(values["order_placed"]);
                    this.eComService.clearCart();
                    this.navCtrl.navigateRoot(['./order-placed']);
                }, err => {
                    console.log("createOrder", err);
                    this.uiElementService.dismissLoading();
                    this.uiElementService.presentToast(values["order_place_err"]);
                });
            });
        }
        else {
            this.translate.get("select_payment_method").subscribe(value => this.uiElementService.presentToast(value));
        }
    }
    getSelectedPaymentMethod() {
        let toReturn = null;
        for (let pm of this.paymentMethods)
            if (this.paymentMethoIdSelected == pm.id) {
                toReturn = pm;
                break;
            }
        return toReturn;
    }
    toggleFab() {
        this.fabAction = !this.fabAction;
    }
};
SelectPaymetMethodPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_6__["ECommerceService"] }
];
SelectPaymetMethodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-paymet-method',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-paymet-method.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-paymet-method/select-paymet-method.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-paymet-method.page.scss */ "./src/app/select-paymet-method/select-paymet-method.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_6__["ECommerceService"]])
], SelectPaymetMethodPage);



/***/ })

}]);
//# sourceMappingURL=select-paymet-method-select-paymet-method-module-es2015.js.map