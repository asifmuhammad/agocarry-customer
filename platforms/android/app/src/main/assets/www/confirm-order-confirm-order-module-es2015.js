(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirm-order-confirm-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-order/confirm-order.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-order/confirm-order.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{'confirm_order' | translate}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n    <ion-list lines=\"none\">\n        <h2 class=\"d-flex\">{{'delivery_at' | translate}}\n            <!-- <span class=\"end\">{{'change' | translate}}</span> -->\n        </h2>\n\n        <ion-item class=\"delivery_at\">\n            <div class=\"item_inner d-flex\">\n                <div [ngSwitch]=\"selectedLocation.title\" class=\"icon_box\">\n                    <ion-icon class=\"zmdi zmdi-home\" *ngSwitchDefault></ion-icon>\n                    <ion-icon class=\"zmdi zmdi-home\" *ngSwitchCase=\"'home'\"></ion-icon>\n                    <ion-icon class=\"zmdi zmdi-city-alt\" *ngSwitchCase=\"'office'\"></ion-icon>\n                    <ion-icon class=\"zmdi zmdi-pin-assistant\" *ngSwitchCase=\"'other'\"></ion-icon>\n                </div>\n                <div class=\"address\">\n                    <h3>{{selectedLocation.title | translate}}</h3>\n                    <p>{{selectedLocation.formatted_address}}</p>\n                </div>\n            </div>\n        </ion-item>\n\n        <h2 class=\"d-flex\">{{'items_in_cart' | translate}}</h2>\n        <div class=\"item_list\">\n            <ion-item *ngFor=\"let ci of eComService.getCartItems()\">\n                <div class=\"item_inner\">\n                    <h3 class=\"d-flex\">{{ci.title}}\n                        <img *ngIf=\"ci.product.prescription_required\" src=\"assets/images/px.png\">\n                    </h3>\n                    <h4 class=\"d-flex\">\n                        x {{ci.quantity}}\n                        <span class=\"end\">{{currency_icon}}{{ci.getTotal(true)}}</span>\n                    </h4>\n                </div>\n            </ion-item>\n        </div>\n\n        <!-- <ion-item class=\"upload_prescription\">\n            <div class=\"item_inner d-flex\">\n                <div class=\"item_img\">\n                    <img src=\"assets/images/px.png\">\n                </div>\n                <h2 class=\"d-flex\">\n                    {{'prescription_uploaded' | translate}}\n                    <span class=\"icon_box end\">\n                        <ion-icon class=\"zmdi zmdi-delete ion-text-end\"></ion-icon>\n                    </span>\n                </h2>\n            </div>\n        </ion-item> -->\n\n        <div class=\"payment_details\">\n            <ion-item>\n                <div class=\"item_inner\">\n                    <h3 class=\"d-flex\"> {{'sub_total' | translate}} <span\n                            class=\"end\">{{currency_icon}}{{eComService.getCartItemsTotal(true)}}</span></h3>\n                </div>\n            </ion-item>\n            <ion-item *ngFor=\"let ec of eComService.getExtraCharges()\">\n                <div class=\"item_inner\">\n                    <h3 class=\"d-flex\"> {{ec.id | translate}} <span class=\"end\">{{ec.priceToShow}}</span></h3>\n                </div>\n            </ion-item>\n            <ion-item class=\"amount_payable\">\n                <div class=\"item_inner\">\n                    <h3 class=\"d-flex\"> {{'amount_payable' | translate}} <span\n                            class=\"end\">{{currency_icon}}{{eComService.getCartTotal(true)}}</span></h3>\n                </div>\n            </ion-item>\n        </div>\n    </ion-list>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"select_paymet_method()\">\n        {{'continue_to_pay' | translate}}\n    </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/confirm-order/confirm-order-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/confirm-order/confirm-order-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ConfirmOrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmOrderPageRoutingModule", function() { return ConfirmOrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _confirm_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-order.page */ "./src/app/confirm-order/confirm-order.page.ts");




const routes = [
    {
        path: '',
        component: _confirm_order_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmOrderPage"]
    }
];
let ConfirmOrderPageRoutingModule = class ConfirmOrderPageRoutingModule {
};
ConfirmOrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmOrderPageRoutingModule);



/***/ }),

/***/ "./src/app/confirm-order/confirm-order.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/confirm-order/confirm-order.module.ts ***!
  \*******************************************************/
/*! exports provided: ConfirmOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmOrderPageModule", function() { return ConfirmOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _confirm_order_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-order-routing.module */ "./src/app/confirm-order/confirm-order-routing.module.ts");
/* harmony import */ var _confirm_order_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirm-order.page */ "./src/app/confirm-order/confirm-order.page.ts");








let ConfirmOrderPageModule = class ConfirmOrderPageModule {
};
ConfirmOrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _confirm_order_routing_module__WEBPACK_IMPORTED_MODULE_6__["ConfirmOrderPageRoutingModule"]
        ],
        declarations: [_confirm_order_page__WEBPACK_IMPORTED_MODULE_7__["ConfirmOrderPage"]]
    })
], ConfirmOrderPageModule);



/***/ }),

/***/ "./src/app/confirm-order/confirm-order.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/confirm-order/confirm-order.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  margin: 0;\n  background: none;\n  padding: 0;\n  padding-top: 4px;\n}\nion-list h2 {\n  margin: 0;\n  color: #595959;\n  padding: 12px 18px 15px 18px;\n  font-size: 1.1rem;\n}\nion-list h2 span {\n  color: var(--primary);\n}\nion-list ion-item {\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  --background: var(--transparent) !important;\n  background: var(--white);\n  padding: 20px 18px;\n  margin-bottom: 4px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item.delivery_at .item_inner {\n  align-items: flex-start;\n}\nion-list ion-item.delivery_at .item_inner ion-icon {\n  color: var(--primary);\n  font-size: 1.6rem;\n  min-width: 43px;\n}\nion-list ion-item.delivery_at .item_inner .address h3 {\n  color: var(--text-black);\n  margin: 0;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  padding-bottom: 9px;\n}\nion-list ion-item.delivery_at .item_inner .address p {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.9rem;\n  letter-spacing: 0.3px;\n}\nion-list ion-item.upload_prescription {\n  padding: 18px;\n}\nion-list ion-item.upload_prescription .item_inner .item_img {\n  min-width: 25px;\n  width: 25px;\n  margin-right: 20px;\n}\nion-list ion-item.upload_prescription .item_inner .item_img img {\n  display: block;\n}\nion-list ion-item.upload_prescription .item_inner h2 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-black);\n  padding: 0;\n}\nion-list ion-item.upload_prescription .item_inner h2 .icon_box ion-icon {\n  color: var(--primary);\n  font-size: 1.35rem;\n  min-width: 28px;\n}\nion-list .item_list {\n  margin-bottom: 5px;\n}\nion-list .item_list ion-item {\n  margin-bottom: 0;\n  padding-top: 9px;\n  padding-bottom: 9px;\n}\nion-list .item_list ion-item .item_inner h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 1rem;\n  letter-spacing: 0;\n  font-weight: 500;\n  padding-bottom: 6px;\n}\nion-list .item_list ion-item .item_inner h3 img {\n  min-width: 20px;\n  width: 20px;\n  margin-left: 20px;\n  display: block;\n}\nion-list .item_list ion-item .item_inner h4 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.85rem;\n  font-weight: 400;\n}\nion-list .item_list ion-item .item_inner h4 span {\n  color: var(--text-black);\n  font-size: 0.98rem;\n  font-weight: 500;\n}\nion-list .item_list ion-item:first-child {\n  padding-top: 20px;\n}\nion-list .item_list ion-item:last-child {\n  padding-bottom: 20px;\n}\nion-list .payment_details {\n  margin-bottom: 4px;\n}\nion-list .payment_details ion-item {\n  margin-bottom: 0;\n  padding-top: 9px;\n  padding-bottom: 9px;\n}\nion-list .payment_details ion-item .item_inner h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.95rem;\n  letter-spacing: 0;\n  font-weight: 500;\n}\nion-list .payment_details ion-item .item_inner h3 span {\n  font-size: 1.1rem;\n  font-weight: 500;\n  color: var(--text-dark);\n}\nion-list .payment_details ion-item:first-child {\n  padding-top: 20px;\n}\nion-list .payment_details ion-item:last-child {\n  padding-bottom: 20px;\n}\nion-list .payment_details ion-item.amount_payable .item_inner h3 {\n  color: var(--text-black);\n  font-size: 1.1rem;\n  letter-spacing: 0;\n  font-weight: 600;\n}\nion-list .payment_details ion-item.amount_payable .item_inner h3 span {\n  color: var(--text-black);\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybS1vcmRlci9GOlxcZml2ZXJcXEJlcm5hcmRcXERvY3RvciBXb3JsZFxcRG9jdG9Xb3JsZF9BcHBDb2RlIChWaWRlbyBDYWxsKS0yMDIxMDgwOVQxMDE0MDdaLTAwMVxcRG9jdG9Xb3JsZF9BcHBDb2RlIChWaWRlbyBDYWxsKVxcZG9jdG93b3JsZF9jdXN0b21lclxcZG9jdG93b3JsZF9jdXN0b21lci9zcmNcXGFwcFxcY29uZmlybS1vcmRlclxcY29uZmlybS1vcmRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbmZpcm0tb3JkZXIvY29uZmlybS1vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENJO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURDUTtFQUNJLHFCQUFBO0FDQ1o7QURHSTtFQUNJLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREdRO0VBQ0ksV0FBQTtBQ0RaO0FES1k7RUFDSSx1QkFBQTtBQ0hoQjtBREtnQjtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSHBCO0FET29CO0VBQ0ksd0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNMeEI7QURRb0I7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDTnhCO0FEWVE7RUFDSSxhQUFBO0FDVlo7QURhZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDWHBCO0FEYW9CO0VBQ0ksY0FBQTtBQ1h4QjtBRGVnQjtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUNicEI7QURnQndCO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNkNUI7QURzQkk7RUFDSSxrQkFBQTtBQ3BCUjtBRHNCUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ3BCWjtBRHVCZ0I7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDckJwQjtBRHVCb0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ3JCeEI7QUR5QmdCO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ3ZCcEI7QUR5Qm9CO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDdkJ4QjtBRDRCWTtFQUNJLGlCQUFBO0FDMUJoQjtBRDZCWTtFQUNJLG9CQUFBO0FDM0JoQjtBRGdDSTtFQUNJLGtCQUFBO0FDOUJSO0FEZ0NRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDOUJaO0FEaUNnQjtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQy9CcEI7QURpQ29CO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDL0J4QjtBRG9DWTtFQUNJLGlCQUFBO0FDbENoQjtBRHFDWTtFQUNJLG9CQUFBO0FDbkNoQjtBRHdDb0I7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ3RDeEI7QUR3Q3dCO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtBQ3RDNUIiLCJmaWxlIjoic3JjL2FwcC9jb25maXJtLW9yZGVyL2NvbmZpcm0tb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICM1OTU5NTk7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxOHB4IDE1cHggMThweDtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG5cclxuICAgICAgICAuaXRlbV9pbm5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5kZWxpdmVyeV9hdCB7XHJcbiAgICAgICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0M3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hZGRyZXNzIHtcclxuICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDlweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudXBsb2FkX3ByZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHg7XHJcblxyXG4gICAgICAgICAgICAuaXRlbV9pbm5lciB7XHJcbiAgICAgICAgICAgICAgICAuaXRlbV9pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaWNvbl9ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW1fbGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA5cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XHJcblxyXG4gICAgICAgICAgICAuaXRlbV9pbm5lciB7XHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk4cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wYXltZW50X2RldGFpbHMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuXHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogOXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG5cclxuICAgICAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYW1vdW50X3BheWFibGUge1xyXG4gICAgICAgICAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLWxpc3Qge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5pb24tbGlzdCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIHBhZGRpbmc6IDEycHggMThweCAxNXB4IDE4cHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuaW9uLWxpc3QgaDIgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDIwcHggMThweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtLmRlbGl2ZXJ5X2F0IC5pdGVtX2lubmVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5pb24tbGlzdCBpb24taXRlbS5kZWxpdmVyeV9hdCAuaXRlbV9pbm5lciBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIG1pbi13aWR0aDogNDNweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtLmRlbGl2ZXJ5X2F0IC5pdGVtX2lubmVyIC5hZGRyZXNzIGgzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0uZGVsaXZlcnlfYXQgLml0ZW1faW5uZXIgLmFkZHJlc3MgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0udXBsb2FkX3ByZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDE4cHg7XG59XG5pb24tbGlzdCBpb24taXRlbS51cGxvYWRfcHJlc2NyaXB0aW9uIC5pdGVtX2lubmVyIC5pdGVtX2ltZyB7XG4gIG1pbi13aWR0aDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtLnVwbG9hZF9wcmVzY3JpcHRpb24gLml0ZW1faW5uZXIgLml0ZW1faW1nIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0udXBsb2FkX3ByZXNjcmlwdGlvbiAuaXRlbV9pbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tbGlzdCBpb24taXRlbS51cGxvYWRfcHJlc2NyaXB0aW9uIC5pdGVtX2lubmVyIGgyIC5pY29uX2JveCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xuICBtaW4td2lkdGg6IDI4cHg7XG59XG5pb24tbGlzdCAuaXRlbV9saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuaW9uLWxpc3QgLml0ZW1fbGlzdCBpb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XG59XG5pb24tbGlzdCAuaXRlbV9saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5pb24tbGlzdCAuaXRlbV9saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGgzIGltZyB7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1saXN0IC5pdGVtX2xpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDQge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmlvbi1saXN0IC5pdGVtX2xpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDQgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZm9udC1zaXplOiAwLjk4cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLWxpc3QgLml0ZW1fbGlzdCBpb24taXRlbTpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuaW9uLWxpc3QgLml0ZW1fbGlzdCBpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5pb24tbGlzdCAucGF5bWVudF9kZXRhaWxzIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuaW9uLWxpc3QgLnBheW1lbnRfZGV0YWlscyBpb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XG59XG5pb24tbGlzdCAucGF5bWVudF9kZXRhaWxzIGlvbi1pdGVtIC5pdGVtX2lubmVyIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5pb24tbGlzdCAucGF5bWVudF9kZXRhaWxzIGlvbi1pdGVtIC5pdGVtX2lubmVyIGgzIHNwYW4ge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG59XG5pb24tbGlzdCAucGF5bWVudF9kZXRhaWxzIGlvbi1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5pb24tbGlzdCAucGF5bWVudF9kZXRhaWxzIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbmlvbi1saXN0IC5wYXltZW50X2RldGFpbHMgaW9uLWl0ZW0uYW1vdW50X3BheWFibGUgLml0ZW1faW5uZXIgaDMge1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi1saXN0IC5wYXltZW50X2RldGFpbHMgaW9uLWl0ZW0uYW1vdW50X3BheWFibGUgLml0ZW1faW5uZXIgaDMgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/confirm-order/confirm-order.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/confirm-order/confirm-order.page.ts ***!
  \*****************************************************/
/*! exports provided: ConfirmOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmOrderPage", function() { return ConfirmOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");
/* harmony import */ var _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common/ecommerce.service */ "./src/app/services/common/ecommerce.service.ts");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");









let ConfirmOrderPage = class ConfirmOrderPage {
    constructor(route, navCtrl, modalController, translate, eComService, uiElementService, apiService) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.translate = translate;
        this.eComService = eComService;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
    }
    ngOnInit() {
        this.currency_icon = src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getSetting("currency_icon");
        this.selectedLocation = src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getAddressSelected();
    }
    select_paymet_method() {
        this.eComService.setupOrderRequestAddress(this.selectedLocation);
        this.navCtrl.navigateForward(['./select-paymet-method']);
    }
};
ConfirmOrderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_6__["ECommerceService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_7__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] }
];
ConfirmOrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirm-order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-order/confirm-order.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./confirm-order.page.scss */ "./src/app/confirm-order/confirm-order.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_6__["ECommerceService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_7__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]])
], ConfirmOrderPage);



/***/ })

}]);
//# sourceMappingURL=confirm-order-confirm-order-module-es2015.js.map