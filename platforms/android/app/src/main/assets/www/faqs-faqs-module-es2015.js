(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faqs-faqs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/faqs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/faqs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'faqs' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n    <div class=\"empty-view\" *ngIf=\"!isLoading && (!faqs || !faqs.length)\">\r\n        <div style=\"text-align:center\">\r\n            <img src=\"assets/images/empty_address.png\" alt=\"no offers\" />\r\n            <span style=\"color:#9E9E9E; font-weight:bold; display: block;\">{{\"empty_faqs\" | translate}}</span>\r\n        </div>\r\n    </div>\r\n    <ion-list lines=\"none\">\r\n        <ion-item *ngFor=\"let faq of faqs\" [ngClass]=\"faq.id == curFaqId ? 'active' : '' \" (click)=\"expandFaq(faq)\">\r\n            <div class=\"item_inner d-flex\">\r\n<!--                <h2>1.&nbsp;</h2>-->\r\n                <div style=\"width: 100%\">\r\n                    <h3>{{faq.title}}</h3>\r\n                    <div class=\"text_box\">\r\n                        <p *ngIf=\"faq.id != curFaqId\">{{faq.short_description}}</p>\r\n                        <p *ngIf=\"faq.id == curFaqId\">{{faq.description}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/faqs/faqs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/faqs/faqs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: FaqsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsPageRoutingModule", function() { return FaqsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faqs.page */ "./src/app/faqs/faqs.page.ts");




const routes = [
    {
        path: '',
        component: _faqs_page__WEBPACK_IMPORTED_MODULE_3__["FaqsPage"]
    }
];
let FaqsPageRoutingModule = class FaqsPageRoutingModule {
};
FaqsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FaqsPageRoutingModule);



/***/ }),

/***/ "./src/app/faqs/faqs.module.ts":
/*!*************************************!*\
  !*** ./src/app/faqs/faqs.module.ts ***!
  \*************************************/
/*! exports provided: FaqsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsPageModule", function() { return FaqsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _faqs_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faqs-routing.module */ "./src/app/faqs/faqs-routing.module.ts");
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./faqs.page */ "./src/app/faqs/faqs.page.ts");








let FaqsPageModule = class FaqsPageModule {
};
FaqsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _faqs_routing_module__WEBPACK_IMPORTED_MODULE_6__["FaqsPageRoutingModule"]
        ],
        declarations: [_faqs_page__WEBPACK_IMPORTED_MODULE_7__["FaqsPage"]]
    })
], FaqsPageModule);



/***/ }),

/***/ "./src/app/faqs/faqs.page.scss":
/*!*************************************!*\
  !*** ./src/app/faqs/faqs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 4px;\n}\nion-list ion-item {\n  padding: 15px 20px;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin-bottom: 4px;\n  background: var(--white);\n  transition: all 0.5s;\n}\nion-list ion-item .item_inner {\n  align-items: flex-start;\n}\nion-list ion-item .item_inner h2 {\n  margin: 0;\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--text-black);\n}\nion-list ion-item .item_inner h3 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--text-black);\n}\nion-list ion-item .item_inner .text_box {\n  height: 0px;\n  overflow: hidden;\n  transition: all 0.5s;\n}\nion-list ion-item .item_inner .text_box p {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  padding-top: 13px;\n  line-height: 23px;\n  color: var(--text-light);\n}\nion-list ion-item.active {\n  transition: all 0.5s;\n}\nion-list ion-item.active .item_inner .text_box {\n  height: auto;\n  transition: all 0.5s;\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxcy9GOlxcZml2ZXJcXEJlcm5hcmRcXERvY3RvciBXb3JsZFxcRG9jdG9Xb3JsZF9BcHBDb2RlIChWaWRlbyBDYWxsKS0yMDIxMDgwOVQxMDE0MDdaLTAwMVxcRG9jdG9Xb3JsZF9BcHBDb2RlIChWaWRlbyBDYWxsKVxcZG9jdG93b3JsZF9jdXN0b21lclxcZG9jdG93b3JsZF9jdXN0b21lci9zcmNcXGFwcFxcZmFxc1xcZmFxcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZhcXMvZmFxcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUNDUjtBRENRO0VBQ0ksdUJBQUE7QUNDWjtBRENZO0VBQ0ksU0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUNDaEI7QURFWTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUNBaEI7QURHWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDRGhCO0FER2dCO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQ0RwQjtBRE1RO0VBQ0ksb0JBQUE7QUNKWjtBRE9ZO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FDTGhCO0FEV0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNSSjtBRFVJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNSUjtBRFdJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDVFI7QURZSTtFQUNJLGdCQUFBO0FDVlI7QURZUTtFQUNJLHlCQUFBO0FDVloiLCJmaWxlIjoic3JjL2FwcC9mYXFzL2ZhcXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuXHJcbiAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGV4dF9ib3gge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcblxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxM3B4OyBcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcblxyXG4gICAgICAgICAgICAvL3BhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIC5pdGVtX2lubmVyIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmVtcHR5LXZpZXcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAxMCU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3gge1xuICBoZWlnaHQ6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLXRvcDogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtLmFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0uYWN0aXZlIC5pdGVtX2lubmVyIC50ZXh0X2JveCB7XG4gIGhlaWdodDogYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5lbXB0eS12aWV3IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMjAwcHg7XG4gIHRvcDogMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDEwJTtcbn1cbi5lbXB0eS12aWV3IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmVtcHR5LXZpZXcgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW1wdHktdmlldyBidXR0b24ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHNwYW4ge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/faqs/faqs.page.ts":
/*!***********************************!*\
  !*** ./src/app/faqs/faqs.page.ts ***!
  \***********************************/
/*! exports provided: FaqsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsPage", function() { return FaqsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");






let FaqsPage = class FaqsPage {
    constructor(navCtrl, translate, uiElementService, apiService) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.faqs = new Array();
        this.isLoading = true;
        this.translate.get("loading").subscribe(value => {
            this.uiElementService.presentLoading(value);
            this.getFaqs();
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    expandFaq(faq) {
        this.curFaqId = (this.curFaqId == faq.id) ? -1 : faq.id;
    }
    getFaqs() {
        this.subscriptions.push(this.apiService.getFaqs().subscribe(res => {
            this.faqs = res;
            this.isLoading = false;
            this.uiElementService.dismissLoading();
        }, err => {
            console.log('faqs', err);
            this.isLoading = false;
            this.uiElementService.dismissLoading();
        }));
    }
};
FaqsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
FaqsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faqs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./faqs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/faqs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./faqs.page.scss */ "./src/app/faqs/faqs.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
], FaqsPage);



/***/ })

}]);
//# sourceMappingURL=faqs-faqs-module-es2015.js.map