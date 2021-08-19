(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"],{

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  background: var(--transparent) !important;\n  padding: 0;\n  padding-top: 7px;\n  width: calc(100% - 20px);\n  margin: 0 auto;\n}\nion-list ion-item {\n  padding: 16px 15px;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  background: var(--white);\n  transition: all 0.5s;\n  border-radius: 4px;\n  margin-bottom: 7px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item .item_inner h3 {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 1rem;\n  font-weight: 500;\n}\nion-list ion-item .item_inner h4 {\n  margin-top: 0;\n  margin-bottom: 0;\n  color: var(--primary);\n  background: var(--bg-color);\n  text-transform: uppercase;\n  min-width: 113px;\n  text-align: center;\n  border-radius: 5px;\n  height: 40px;\n  line-height: 40px;\n  font-weight: 500;\n  font-size: 0.95rem;\n  padding: 0 10px;\n  border: 1px dashed var(--text-light2);\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmZXJzL0Y6XFxmaXZlclxcQmVybmFyZFxcRG9jdG9yIFdvcmxkXFxEb2N0b1dvcmxkX0FwcENvZGUgKFZpZGVvIENhbGwpLTIwMjEwODA5VDEwMTQwN1otMDAxXFxEb2N0b1dvcmxkX0FwcENvZGUgKFZpZGVvIENhbGwpXFxkb2N0b3dvcmxkX2N1c3RvbWVyXFxkb2N0b3dvcmxkX2N1c3RvbWVyL3NyY1xcYXBwXFxvZmZlcnNcXG9mZmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL29mZmVycy9vZmZlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQ1E7RUFDSSxXQUFBO0FDQ1o7QURDWTtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NoQjtBREVZO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQ0FoQjtBRE1BO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDSEo7QURLSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDSFI7QURNSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0pSO0FET0k7RUFDSSxnQkFBQTtBQ0xSO0FET1E7RUFDSSx5QkFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvb2ZmZXJzL29mZmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTVweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcblxyXG4gICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDExM3B4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOTVyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZW1wdHktdmlldyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDEwJTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDdweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMTZweCAxNXB4O1xuICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDQge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWluLXdpZHRoOiAxMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tdGV4dC1saWdodDIpO1xufVxuXG4uZW1wdHktdmlldyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB0b3A6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAxMCU7XG59XG4uZW1wdHktdmlldyBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5lbXB0eS12aWV3IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5lbXB0eS12aWV3IGJ1dHRvbiBzcGFuIHtcbiAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbn0iXX0= */");

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



/***/ })

}]);
//# sourceMappingURL=offers-offers-module-es2015.js.map