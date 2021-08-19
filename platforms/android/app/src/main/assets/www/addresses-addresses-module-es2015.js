(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addresses-addresses-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addresses/addresses.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addresses/addresses.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'my_address' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"bg_color\">\r\n    <div class=\"empty-view\" *ngIf=\"!isLoading && (!addresses || !addresses.length)\">\r\n        <div style=\"text-align:center\">\r\n            <img src=\"assets/images/empty_address.png\" alt=\"no offers\" />\r\n            <span style=\"color:#9E9E9E; font-weight:bold; display: block;\">{{\"empty_addresses\" | translate}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"form\">\r\n        <h3 *ngIf=\"addresses && addresses.length\">{{'saved_addresses' | translate}}</h3>\r\n        <ion-list lines=\"none\">\r\n            <ion-radio-group value=\"{{addressIdSelected}}\" (ionChange)=\"onAddressSelected($event)\">\r\n                <ion-item *ngFor=\"let address of addresses\" lines=\"none\">\r\n                    <ion-radio slot=\"start\" value=\"{{address.id}}\"></ion-radio>\r\n                    <ion-label class=\"d-flex\">\r\n                        <div [ngSwitch]=\"address.title\" class=\"icon_box\">\r\n                            <ion-icon class=\"zmdi zmdi-home\" *ngSwitchDefault></ion-icon>\r\n                            <ion-icon class=\"zmdi zmdi-home\" *ngSwitchCase=\"'home'\"></ion-icon>\r\n                            <ion-icon class=\"zmdi zmdi-city-alt\" *ngSwitchCase=\"'office'\"></ion-icon>\r\n                            <ion-icon class=\"zmdi zmdi-pin-assistant\" *ngSwitchCase=\"'other'\"></ion-icon>\r\n                        </div>\r\n\r\n                        <div class=\"text_box\">\r\n                            <h2>{{address.title | translate}}</h2>\r\n                            <p>{{address.formatted_address}}</p>\r\n                        </div>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-radio-group>\r\n        </ion-list>\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"navAddressNew()\">\r\n        <ion-icon class=\"zmdi zmdi-plus\"></ion-icon> &nbsp;\r\n        {{'add_new_location' | translate}}\r\n    </ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/addresses/addresses-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/addresses/addresses-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AddressesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesPageRoutingModule", function() { return AddressesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addresses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addresses.page */ "./src/app/addresses/addresses.page.ts");




const routes = [
    {
        path: '',
        component: _addresses_page__WEBPACK_IMPORTED_MODULE_3__["AddressesPage"]
    }
];
let AddressesPageRoutingModule = class AddressesPageRoutingModule {
};
AddressesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddressesPageRoutingModule);



/***/ }),

/***/ "./src/app/addresses/addresses.module.ts":
/*!***********************************************!*\
  !*** ./src/app/addresses/addresses.module.ts ***!
  \***********************************************/
/*! exports provided: AddressesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesPageModule", function() { return AddressesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _addresses_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addresses-routing.module */ "./src/app/addresses/addresses-routing.module.ts");
/* harmony import */ var _addresses_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addresses.page */ "./src/app/addresses/addresses.page.ts");








let AddressesPageModule = class AddressesPageModule {
};
AddressesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _addresses_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddressesPageRoutingModule"]
        ],
        declarations: [_addresses_page__WEBPACK_IMPORTED_MODULE_7__["AddressesPage"]]
    })
], AddressesPageModule);



/***/ }),

/***/ "./src/app/addresses/addresses.page.scss":
/*!***********************************************!*\
  !*** ./src/app/addresses/addresses.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form {\n  width: calc(100% - 0px);\n}\n.form h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 0.95rem;\n  padding: 20px;\n}\n.form ion-item {\n  background: var(--white) !important;\n  padding: 20px;\n  margin-bottom: 8px;\n  border-radius: 0;\n  transition: all 0.5s;\n}\n.form ion-item ion-label {\n  width: 100% !important;\n  position: relative;\n  top: 0;\n  left: 0;\n  max-width: 100% !important;\n  white-space: normal;\n  align-items: flex-start;\n  padding: 0;\n}\n.form ion-item ion-label .icon_box ion-icon {\n  color: var(--primary);\n  font-size: 1.6rem;\n  min-width: 39px;\n}\n.form ion-item ion-label .text_box h2 {\n  margin: 0;\n  padding-top: 4px;\n  color: var(--text-black);\n  font-weight: 700;\n  font-size: 1.1rem;\n  padding-bottom: 15px;\n}\n.form ion-item ion-label .text_box p {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 500;\n  font-size: 0.96rem;\n}\n.form ion-item ion-radio {\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  --color: var(--transparent) !important;\n  --color-checked: var(--transparent) !important;\n}\n.form ion-item::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  margin: auto;\n  background: var(--primary);\n  transition: all 0.3s;\n  border-radius: 0;\n}\n.form ion-item.item-radio-checked {\n  border-color: var(--primary) !important;\n}\n.form ion-item.item-radio-checked::before {\n  width: 100%;\n  height: 100%;\n}\n.form ion-item.item-radio-checked ion-label {\n  align-items: flex-start;\n}\n.form ion-item.item-radio-checked ion-label .icon_box ion-icon {\n  color: var(--white);\n}\n.form ion-item.item-radio-checked ion-label .text_box {\n  width: 100%;\n}\n.form ion-item.item-radio-checked ion-label .text_box p {\n  color: var(--white);\n  font-weight: 400;\n}\n.form ion-item.item-radio-checked ion-label .text_box h2 {\n  color: var(--white);\n  font-weight: 400;\n}\nion-footer .button.btn {\n  --background: var(--white);\n  color: var(--primary);\n  height: 58px;\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkcmVzc2VzL0Y6XFxmaXZlclxcQmVybmFyZFxcRG9jdG9yIFdvcmxkXFxEb2N0b1dvcmxkX0FwcENvZGUgKFZpZGVvIENhbGwpLTIwMjEwODA5VDEwMTQwN1otMDAxXFxEb2N0b1dvcmxkX0FwcENvZGUgKFZpZGVvIENhbGwpXFxkb2N0b3dvcmxkX2N1c3RvbWVyXFxkb2N0b3dvcmxkX2N1c3RvbWVyL3NyY1xcYXBwXFxhZGRyZXNzZXNcXGFkZHJlc3Nlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZHJlc3Nlcy9hZGRyZXNzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUNDSjtBRENJO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNDUjtBREVJO0VBQ0ksbUNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDQVI7QURFUTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUNBWjtBREdnQjtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRHBCO0FETWdCO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNKcEI7QURPZ0I7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTHBCO0FEVVE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0FDUlo7QURXUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNUWjtBRFlRO0VBQ0ksdUNBQUE7QUNWWjtBRFlZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNWaEI7QURhWTtFQUNJLHVCQUFBO0FDWGhCO0FEY29CO0VBQ0ksbUJBQUE7QUNaeEI7QURnQmdCO0VBQ0ksV0FBQTtBQ2RwQjtBRGdCb0I7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FDZHhCO0FEaUJvQjtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUNmeEI7QUR3Qkk7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ3JCUjtBRHlCQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ3RCSjtBRHdCSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDdEJSO0FEeUJJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDdkJSO0FEMEJJO0VBQ0ksZ0JBQUE7QUN4QlI7QUQwQlE7RUFDSSx5QkFBQTtBQ3hCWiIsImZpbGUiOiJzcmMvYXBwL2FkZHJlc3Nlcy9hZGRyZXNzZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICAuaWNvbl9ib3gge1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDM5cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk2cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tcmFkaW8ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuaXRlbS1yYWRpby1jaGVja2VkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLmljb25fYm94IHtcclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICAuYnV0dG9uLmJ0biB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgIGhlaWdodDogNThweDtcclxuICAgIH1cclxufVxyXG5cclxuLmVtcHR5LXZpZXcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAxMCU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5mb3JtIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7XG59XG4uZm9ybSBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmZvcm0gaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5mb3JtIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDA7XG59XG4uZm9ybSBpb24taXRlbSBpb24tbGFiZWwgLmljb25fYm94IGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgbWluLXdpZHRoOiAzOXB4O1xufVxuLmZvcm0gaW9uLWl0ZW0gaW9uLWxhYmVsIC50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uZm9ybSBpb24taXRlbSBpb24tbGFiZWwgLnRleHRfYm94IHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAwLjk2cmVtO1xufVxuLmZvcm0gaW9uLWl0ZW0gaW9uLXJhZGlvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgLS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG59XG4uZm9ybSBpb24taXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmZvcm0gaW9uLWl0ZW0uaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuLmZvcm0gaW9uLWl0ZW0uaXRlbS1yYWRpby1jaGVja2VkOjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmZvcm0gaW9uLWl0ZW0uaXRlbS1yYWRpby1jaGVja2VkIGlvbi1sYWJlbCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmZvcm0gaW9uLWl0ZW0uaXRlbS1yYWRpby1jaGVja2VkIGlvbi1sYWJlbCAuaWNvbl9ib3ggaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLmZvcm0gaW9uLWl0ZW0uaXRlbS1yYWRpby1jaGVja2VkIGlvbi1sYWJlbCAudGV4dF9ib3gge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtIGlvbi1pdGVtLml0ZW0tcmFkaW8tY2hlY2tlZCBpb24tbGFiZWwgLnRleHRfYm94IHAge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmZvcm0gaW9uLWl0ZW0uaXRlbS1yYWRpby1jaGVja2VkIGlvbi1sYWJlbCAudGV4dF9ib3ggaDIge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pb24tZm9vdGVyIC5idXR0b24uYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgaGVpZ2h0OiA1OHB4O1xufVxuXG4uZW1wdHktdmlldyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB0b3A6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAxMCU7XG59XG4uZW1wdHktdmlldyBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5lbXB0eS12aWV3IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5lbXB0eS12aWV3IGJ1dHRvbiBzcGFuIHtcbiAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/addresses/addresses.page.ts":
/*!*********************************************!*\
  !*** ./src/app/addresses/addresses.page.ts ***!
  \*********************************************/
/*! exports provided: AddressesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesPage", function() { return AddressesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");
/* harmony import */ var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/events/my-events.service */ "./src/app/services/events/my-events.service.ts");
/* harmony import */ var _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/common/ecommerce.service */ "./src/app/services/common/ecommerce.service.ts");










let AddressesPage = class AddressesPage {
    constructor(navCtrl, translate, router, myEventService, uiElementService, apiService, eComService) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.router = router;
        this.myEventService = myEventService;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.eComService = eComService;
        this.subscriptions = new Array();
        this.addresses = new Array();
        this.isLoading = true;
        this.fabAction = false;
        this.addressIdSelected = -1;
    }
    ngOnInit() {
        //this.uiElementService.presentLoading(this.translate.instant("loading"));
        if (this.router.getCurrentNavigation().extras.state)
            this.pick_location = this.router.getCurrentNavigation().extras.state.pick_location;
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    ionViewDidEnter() {
        this.loadAddresses();
    }
    loadAddresses() {
        if (!this.addresses || !this.addresses.length)
            this.uiElementService.presentLoading(this.translate.instant("loading"));
        this.isLoading = true;
        this.subscriptions.push(this.apiService.getAddresses().subscribe(res => {
            this.addresses = res.reverse();
            this.isLoading = false;
            this.uiElementService.dismissLoading();
        }, err => {
            console.log("getAddresses", err);
            this.uiElementService.dismissLoading();
            this.isLoading = false;
            this.uiElementService.dismissLoading();
        }));
    }
    onAddressSelected(event) {
        if (event.detail && event.detail.value) {
            this.addressIdSelected = event.detail.value;
            let addressSelected = this.getSelectedAddress();
            if (addressSelected != null) {
                if (this.pick_location) {
                    this.eComService.clearCart();
                    this.selectAddress(addressSelected);
                    this.myEventService.setAddressData(addressSelected);
                }
                else {
                    let navigationExtras = { state: { address: addressSelected, pick_location: false } };
                    this.navCtrl.navigateForward(['./add-address'], navigationExtras);
                }
            }
        }
    }
    navAddressNew() {
        let navigationExtras = { state: { pick_location: false } };
        this.navCtrl.navigateForward(['./add-address'], navigationExtras);
    }
    getSelectedAddress() {
        let toReturn = null;
        for (let ad of this.addresses)
            if (ad.id == this.addressIdSelected) {
                toReturn = ad;
                break;
            }
        return toReturn;
    }
    selectAddress(address) {
        src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].setAddressSelected(address);
        // this.eComService.setupOrderRequestAddress(address);
        this.navCtrl.pop();
    }
};
AddressesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_8__["MyEventsService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_9__["ECommerceService"] }
];
AddressesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addresses',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addresses.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addresses/addresses.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addresses.page.scss */ "./src/app/addresses/addresses.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_8__["MyEventsService"],
        _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_9__["ECommerceService"]])
], AddressesPage);



/***/ })

}]);
//# sourceMappingURL=addresses-addresses-module-es2015.js.map