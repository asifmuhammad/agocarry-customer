(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"],{

/***/ "./node_modules/@ionic-native/clipboard/__ivy_ngcc__/ngx/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic-native/clipboard/__ivy_ngcc__/ngx/index.js ***!
  \************************************************************************/
/*! exports provided: Clipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");




var Clipboard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Clipboard, _super);
    function Clipboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clipboard.prototype.copy = function (text) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "copy", {}, arguments); };
    Clipboard.prototype.paste = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "paste", {}, arguments); };
    Clipboard.prototype.clear = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "clear", {}, arguments); };
    Clipboard.pluginName = "Clipboard";
    Clipboard.plugin = "cordova-clipboard";
    Clipboard.pluginRef = "cordova.plugins.clipboard";
    Clipboard.repo = "https://github.com/ihadeed/cordova-clipboard";
    Clipboard.platforms = ["Android", "iOS", "Windows Phone 8"];
Clipboard.ɵfac = function Clipboard_Factory(t) { return ɵClipboard_BaseFactory(t || Clipboard); };
Clipboard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Clipboard, factory: function (t) { return Clipboard.ɵfac(t); } });
var ɵClipboard_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Clipboard);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Clipboard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return Clipboard;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvY2xpcGJvYXJkL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQUN4RTtBQUdNLElBbUN5Qiw2QkFBaUI7QUFBQztBQUU5QjtBQUM4QztBQUFNLElBSXJFLHdCQUFJLGFBQUMsSUFBWTtBQUtSLElBSVQseUJBQUs7QUFLaUIsSUFJdEIseUJBQUs7QUFJc0I7QUFBd0M7QUFBNEM7QUFBdUQ7QUFBcUU7NkNBOUI1TyxVQUFVOzs7OzswQkFDTDtBQUFDLG9CQXhDUDtBQUFFLEVBd0M2QixpQkFBaUI7QUFDL0MsU0FEWSxTQUFTO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbi8qKlxuICogQG5hbWUgQ2xpcGJvYXJkXG4gKiBAcHJlbWllciBjbGlwYm9hcmRcbiAqIEBkZXNjcmlwdGlvblxuICogQ2xpcGJvYXJkIG1hbmFnZW1lbnQgcGx1Z2luIGZvciBDb3Jkb3ZhIHRoYXQgc3VwcG9ydHMgaU9TLCBBbmRyb2lkLCBhbmQgV2luZG93cyBQaG9uZSA4LlxuICpcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENsaXBib2FyZCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2xpcGJvYXJkL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjbGlwYm9hcmQ6IENsaXBib2FyZCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuY2xpcGJvYXJkLmNvcHkoJ0hlbGxvIHdvcmxkJyk7XG4gKlxuICogdGhpcy5jbGlwYm9hcmQucGFzdGUoKS50aGVuKFxuICogICAgKHJlc29sdmU6IHN0cmluZykgPT4ge1xuICogICAgICAgYWxlcnQocmVzb2x2ZSk7XG4gKiAgICAgfSxcbiAqICAgICAocmVqZWN0OiBzdHJpbmcpID0+IHtcbiAqICAgICAgIGFsZXJ0KCdFcnJvcjogJyArIHJlamVjdCk7XG4gKiAgICAgfVxuICogICApO1xuICpcbiAqIHRoaXMuY2xpcGJvYXJkLmNsZWFyKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDbGlwYm9hcmQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWNsaXBib2FyZCcsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5jbGlwYm9hcmQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2loYWRlZWQvY29yZG92YS1jbGlwYm9hcmQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSA4J10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsaXBib2FyZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvcGllcyB0aGUgZ2l2ZW4gdGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUZXh0IHRoYXQgZ2V0cyBjb3BpZWQgb24gdGhlIHN5c3RlbSBjbGlwYm9hcmRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgYWZ0ZXIgdGhlIHRleHQgaGFzIGJlZW4gY29waWVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNvcHkodGV4dDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGFzdGVzIHRoZSB0ZXh0IHN0b3JlZCBpbiBjbGlwYm9hcmRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgYWZ0ZXIgdGhlIHRleHQgaGFzIGJlZW4gcGFzdGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBhc3RlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSB0ZXh0IHN0b3JlZCBpbiBjbGlwYm9hcmRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgYWZ0ZXIgdGhlIHRleHQgaGFzIGJlZW4gY2xlYW5lZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbGVhcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/offers/offers.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offers/offers.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'offers' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n    <div class=\"empty-view\" *ngIf=\"!isLoading && (!offers || !offers.length)\">\r\n        <div style=\"text-align:center\">\r\n            <img src=\"assets/images/empty_offers.png\" alt=\"no offers\" />\r\n            <span style=\"color:#9E9E9E; font-weight:bold; display: block;\">{{\"empty_offers\" | translate}}</span>\r\n        </div>\r\n    </div>\r\n    <ion-list lines=\"none\">\r\n        <ion-item *ngFor=\"let offer of offers\" (click)=\"copyOffer(offer)\">\r\n            <div class=\"item_inner d-flex\">\r\n                <h3>{{offer.detail}}</h3>\r\n                <h4 class=\"end\">{{offer.code}}</h4>\r\n            </div>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/offers/offers.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/offers/offers.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t{{'offers' | translate}}\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"empty-view\" *ngIf=\"!isLoading && (!offers || !offers.length)\">\n\t\t<div style=\"text-align:center\">\n\t\t\t<img src=\"assets/images/plc_no_offers.png\" alt=\"no offers\" />\n\t\t\t<span style=\"color:#9E9E9E; font-weight:bold; display: block;\">{{\"empty_offers\" | translate}}</span>\n\t\t</div>\n\t</div>\n\t<ion-list lines=\"none\">\n\t\t<ion-item *ngFor=\"let offer of offers\" (click)=\"copyOffer(offer)\">\n\t\t\t<div class=\"item_inner d-flex\">\n\t\t\t\t<h3>{{offer.detail}}</h3>\n\t\t\t\t<h4 class=\"end\">{{offer.code}}</h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/offers/offers-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/offers/offers-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OffersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageRoutingModule", function() { return OffersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offers.page */ "./src/app/offers/offers.page.ts");




const routes = [
    {
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_3__["OffersPage"]
    }
];
let OffersPageRoutingModule = class OffersPageRoutingModule {
};
OffersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OffersPageRoutingModule);



/***/ }),

/***/ "./src/app/offers/offers.module.ts":
/*!*****************************************!*\
  !*** ./src/app/offers/offers.module.ts ***!
  \*****************************************/
/*! exports provided: OffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _offers_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers-routing.module */ "./src/app/offers/offers-routing.module.ts");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offers.page */ "./src/app/offers/offers.page.ts");








let OffersPageModule = class OffersPageModule {
};
OffersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _offers_routing_module__WEBPACK_IMPORTED_MODULE_6__["OffersPageRoutingModule"]
        ],
        declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_7__["OffersPage"]]
    })
], OffersPageModule);



/***/ }),

/***/ "./src/app/offers/offers.page.scss":
/*!*****************************************!*\
  !*** ./src/app/offers/offers.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  background: var(--transparent) !important;\n  padding: 0;\n  padding-top: 7px;\n  width: calc(100% - 20px);\n  margin: 0 auto;\n}\nion-list ion-item {\n  padding: 16px 15px;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  background: var(--white);\n  transition: all 0.5s;\n  border-radius: 4px;\n  margin-bottom: 7px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item .item_inner h3 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 1rem;\n  font-weight: 500;\n}\nion-list ion-item .item_inner h4 {\n  margin-top: 0;\n  margin-bottom: 0;\n  color: var(--primary);\n  background: var(--bg-color);\n  text-transform: uppercase;\n  min-width: 113px;\n  text-align: center;\n  border-radius: 5px;\n  height: 40px;\n  line-height: 40px;\n  font-weight: 500;\n  font-size: 0.95rem;\n  padding: 0 10px;\n  border: 1px dashed var(--text-light2);\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmZXJzL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxvZmZlcnNcXG9mZmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL29mZmVycy9vZmZlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQ1E7RUFDSSxXQUFBO0FDQ1o7QURDWTtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NoQjtBREVZO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQ0FoQjtBRE1BO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDSEo7QURLSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDSFI7QURNSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0pSO0FET0k7RUFDSSxnQkFBQTtBQ0xSO0FET1E7RUFDSSx5QkFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvb2ZmZXJzL29mZmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTVweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcblxyXG4gICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDExM3B4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOTVyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZW1wdHktdmlldyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDEwJTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDdweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMTZweCAxNXB4O1xuICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDQge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWluLXdpZHRoOiAxMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tdGV4dC1saWdodDIpO1xufVxuXG4uZW1wdHktdmlldyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB0b3A6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAxMCU7XG59XG4uZW1wdHktdmlldyBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5lbXB0eS12aWV3IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5lbXB0eS12aWV3IGJ1dHRvbiBzcGFuIHtcbiAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/offers/offers.page.ts":
/*!***************************************!*\
  !*** ./src/app/offers/offers.page.ts ***!
  \***************************************/
/*! exports provided: OffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPage", function() { return OffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/constants.models */ "./src/models/constants.models.ts");







let OffersPage = class OffersPage {
    constructor(navCtrl, translate, uiElementService, apiService) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.offers = new Array();
        this.isLoading = true;
        this.translate.get("loading").subscribe(value => {
            this.uiElementService.presentLoading(value);
            this.getOffers();
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    getOffers() {
        this.apiService.getCoupons().subscribe(res => {
            this.isLoading = false;
            this.offers = this.offers.concat(res);
            this.uiElementService.dismissLoading();
        }, err => {
            console.log("getCoupons", err);
            this.isLoading = false;
            this.uiElementService.dismissLoading();
        });
    }
    copyOffer(offer) {
        // this.clipboard.copy(offer.code).then(res => {
        //   console.log("clipboard", res);
        //   this.translate.get("code_copied").subscribe(value => this.uiElementService.presentToast(value));
        // }).catch(err => console.log("clipboard", err));
        window.localStorage.setItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].TEMP_COUPON, offer.code);
        this.navCtrl.pop();
    }
};
OffersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
OffersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./offers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/offers/offers.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./offers.page.scss */ "./src/app/offers/offers.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
], OffersPage);



/***/ }),

/***/ "./src/app/services/shoup-hour-services/common/ui-elements.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/services/shoup-hour-services/common/ui-elements.service.ts ***!
  \****************************************************************************/
/*! exports provided: UiElementsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiElementsService", function() { return UiElementsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




let UiElementsService = class UiElementsService {
    constructor(toastController, loadingController, alertCtrl, translateService) {
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
    }
    presentToast(body, position, duration) {
        this.toastController.create({
            message: body,
            duration: (duration && duration > 0) ? duration : 1000,
            position: (position && (position == "top" || position == "middle")) ? position : "bottom"
        }).then(toast => toast.present());
    }
    presentErrorAlert(msg, headingText, actionText) {
        this.translateService.get(["error", "dismiss"]).subscribe(values => {
            this.alertCtrl.create({
                header: (headingText ? headingText : values["error"]),
                message: msg,
                buttons: [(actionText ? actionText : values["dismiss"])]
            }).then(alert => alert.present());
        });
    }
    presentLoading(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({ message: body }).then(overlay => {
                overlay.present().then(() => {
                    if (!this.isLoading) {
                        try {
                            overlay.dismiss().then(() => console.log('loading aborted'));
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }
                });
            });
        });
    }
    dismissLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            try {
                return yield this.loadingController.dismiss();
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
};
UiElementsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
UiElementsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
], UiElementsService);



/***/ }),

/***/ "./src/app/shop-hour/offers/offers-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shop-hour/offers/offers-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: OffersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageRoutingModule", function() { return OffersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offers.page */ "./src/app/shop-hour/offers/offers.page.ts");




const routes = [
    {
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_3__["OffersPage"]
    }
];
let OffersPageRoutingModule = class OffersPageRoutingModule {
};
OffersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OffersPageRoutingModule);



/***/ }),

/***/ "./src/app/shop-hour/offers/offers.module.ts":
/*!***************************************************!*\
  !*** ./src/app/shop-hour/offers/offers.module.ts ***!
  \***************************************************/
/*! exports provided: OffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _offers_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers-routing.module */ "./src/app/shop-hour/offers/offers-routing.module.ts");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offers.page */ "./src/app/shop-hour/offers/offers.page.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/__ivy_ngcc__/ngx/index.js");









let OffersPageModule = class OffersPageModule {
};
OffersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _offers_routing_module__WEBPACK_IMPORTED_MODULE_6__["OffersPageRoutingModule"]
        ],
        providers: [_ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_8__["Clipboard"]],
        declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_7__["OffersPage"]]
    })
], OffersPageModule);



/***/ }),

/***/ "./src/app/shop-hour/offers/offers.page.scss":
/*!***************************************************!*\
  !*** ./src/app/shop-hour/offers/offers.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  background: var(--transparent) !important;\n  padding: 0;\n  padding-top: 17px;\n  width: calc(100% - 25px);\n  margin: 0 auto;\n}\nion-list ion-item {\n  padding: 18px 18px;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  background: var(--primary);\n  transition: all 0.5s;\n  border-radius: 9px;\n  margin-bottom: 12px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item .item_inner h3 {\n  margin: 0;\n  color: var(--white);\n  font-size: 1.1rem;\n  letter-spacing: 0.5px;\n}\nion-list ion-item .item_inner h4 {\n  margin-top: 0;\n  margin-bottom: 0;\n  color: var(--primary);\n  background: var(--white);\n  text-transform: uppercase;\n  font-weight: 500;\n  min-width: 108px;\n  text-align: center;\n  border-radius: 50px;\n  height: 42px;\n  line-height: 42px;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  padding: 0 10px;\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 30%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC1ob3VyL29mZmVycy9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1jdXN0b21lci9zcmNcXGFwcFxcc2hvcC1ob3VyXFxvZmZlcnNcXG9mZmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3AtaG91ci9vZmZlcnMvb2ZmZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDQ0Q7QURDQztFQUNDLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0MsV0FBQTtBQ0NIO0FEQ0c7RUFDQyxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURFRztFQUNDLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FETUE7RUFDQyxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNIRDtBREtDO0VBQ0MsWUFBQTtFQUNBLFlBQUE7QUNIRjtBRE1DO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0FDSkY7QURPQztFQUNDLGdCQUFBO0FDTEY7QURPRTtFQUNDLHlCQUFBO0FDTEgiLCJmaWxlIjoic3JjL2FwcC9zaG9wLWhvdXIvb2ZmZXJzL29mZmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCB7XG5cdGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuXHRwYWRkaW5nOiAwO1xuXHRwYWRkaW5nLXRvcDogMTdweDtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xuXHRtYXJnaW46IDAgYXV0bztcblxuXHRpb24taXRlbSB7XG5cdFx0cGFkZGluZzogMThweCAxOHB4O1xuXHRcdG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHRcdC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XG5cdFx0LS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC41cztcblx0XHRib3JkZXItcmFkaXVzOiA5cHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTJweDtcblxuXHRcdC5pdGVtX2lubmVyIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0XHRoMyB7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcblx0XHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdH1cblxuXHRcdFx0aDQge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0bWluLXdpZHRoOiAxMDhweDtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDQycHg7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiA0MnB4O1xuXHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0cGFkZGluZzogMCAxMHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4uZW1wdHktdmlldyB7XG5cdHdpZHRoOiAyMDBweDtcblx0bWFyZ2luOiBhdXRvO1xuXHRoZWlnaHQ6IDIwMHB4O1xuXHR0b3A6IDMwJTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAxMCU7XG5cblx0aW1nIHtcblx0XHR3aWR0aDogMTAwcHg7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHR9XG5cblx0c3BhbiB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0YnV0dG9uIHtcblx0XHRtYXJnaW4tdG9wOiA1MHB4O1xuXG5cdFx0c3BhbiB7XG5cdFx0XHRkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xuXHRcdH1cblx0fVxufVx0XG4iLCJpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogMTdweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMThweCAxOHB4O1xuICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoNCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtaW4td2lkdGg6IDEwOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5lbXB0eS12aWV3IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMjAwcHg7XG4gIHRvcDogMzAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDEwJTtcbn1cbi5lbXB0eS12aWV3IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmVtcHR5LXZpZXcgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW1wdHktdmlldyBidXR0b24ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHNwYW4ge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shop-hour/offers/offers.page.ts":
/*!*************************************************!*\
  !*** ./src/app/shop-hour/offers/offers.page.ts ***!
  \*************************************************/
/*! exports provided: OffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPage", function() { return OffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shoup-hour-services/common/ui-elements.service */ "./src/app/services/shoup-hour-services/common/ui-elements.service.ts");
/* harmony import */ var src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shoup-hour-services/network/api.service */ "./src/app/services/shoup-hour-services/network/api.service.ts");






let OffersPage = class OffersPage {
    constructor(navCtrl, translate, uiElementService, apiService, clipboard) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.clipboard = clipboard;
        this.subscriptions = new Array();
        this.offers = new Array();
        this.isLoading = true;
        this.translate.get("loading").subscribe(value => {
            this.uiElementService.presentLoading(value);
            this.getOffers();
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    getOffers() {
        this.apiService.getCoupons().subscribe(res => {
            this.isLoading = false;
            this.offers = this.offers.concat(res);
            this.uiElementService.dismissLoading();
        }, err => {
            console.log("getCoupons", err);
            this.isLoading = false;
            this.uiElementService.dismissLoading();
        });
    }
    copyOffer(offer) {
        this.clipboard.writeText(offer.code).then(res => {
            console.log("clipboard", res);
            this.translate.get("code_copied").subscribe(value => this.uiElementService.presentToast(value));
        }).catch(err => console.log("clipboard", err));
    }
};
OffersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"] },
    { type: src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: Clipboard }
];
OffersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./offers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/offers/offers.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./offers.page.scss */ "./src/app/shop-hour/offers/offers.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], Clipboard])
], OffersPage);



/***/ })

}]);
//# sourceMappingURL=offers-offers-module-es2015.js.map