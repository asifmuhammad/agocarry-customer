(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-feedback-add-feedback-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-feedback/add-feedback.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-feedback/add-feedback.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'give_feedback' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"doctor_info d-flex\">\r\n        <div class=\"img_box center_img\">\r\n            <img [src]=\"doctor.user.image_url\" class=\"crop_img\">\r\n        </div>\r\n        <div class=\"text_box\">\r\n            <h2>{{doctor.name}}</h2>\r\n            <h3>{{doctor.specializations_text}}</h3>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"form\">\r\n        <ion-list lines=\"none\">\r\n            <ion-card>\r\n                <h2>{{'overall_experience_with_doctor' | translate}}</h2>\r\n                <div class=\"icon_box\">\r\n                    <ion-icon [ngClass]=\"rateRequest.rating>=1 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \" (click)=\"setRating(1)\"></ion-icon>\r\n                    <ion-icon [ngClass]=\"rateRequest.rating>=2 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \" (click)=\"setRating(2)\"></ion-icon>\r\n                    <ion-icon [ngClass]=\"rateRequest.rating>=3 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \" (click)=\"setRating(3)\"></ion-icon>\r\n                    <ion-icon [ngClass]=\"rateRequest.rating>=4 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \" (click)=\"setRating(4)\"></ion-icon>\r\n                    <ion-icon [ngClass]=\"rateRequest.rating>=5 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \" (click)=\"setRating(5)\"></ion-icon>\r\n                </div>\r\n            </ion-card>\r\n\r\n\r\n            <ion-card *ngIf=\"rateReasonExists\">\r\n                <h2>{{'visited_doctor_for' | translate}}</h2>\r\n                <ion-item lines=\"none\">\r\n                    <ion-input class=\"ion-text-start\" readonly [(ngModel)]=\"rateReason\"></ion-input>\r\n                </ion-item>\r\n            </ion-card>\r\n\r\n            <ion-card>\r\n                <h2>{{'bref_your_experiece' | translate}}</h2>\r\n                <ion-item lines=\"none\">\r\n                    <ion-textarea class=\"ion-text-start\" rows=\"6\" [(ngModel)]=\"rateRequest.review\" maxlength=\"140\" placeholder=\"{{'write_your_experience' | translate}}\"></ion-textarea>\r\n                </ion-item>\r\n            </ion-card>\r\n        </ion-list>\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"submitRating()\">\r\n        {{'submit_feedback' | translate}}\r\n    </ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/add-feedback/add-feedback-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/add-feedback/add-feedback-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AddFeedbackPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFeedbackPageRoutingModule", function() { return AddFeedbackPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_feedback_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-feedback.page */ "./src/app/add-feedback/add-feedback.page.ts");




const routes = [
    {
        path: '',
        component: _add_feedback_page__WEBPACK_IMPORTED_MODULE_3__["AddFeedbackPage"]
    }
];
let AddFeedbackPageRoutingModule = class AddFeedbackPageRoutingModule {
};
AddFeedbackPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddFeedbackPageRoutingModule);



/***/ }),

/***/ "./src/app/add-feedback/add-feedback.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-feedback/add-feedback.module.ts ***!
  \*****************************************************/
/*! exports provided: AddFeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFeedbackPageModule", function() { return AddFeedbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_feedback_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-feedback-routing.module */ "./src/app/add-feedback/add-feedback-routing.module.ts");
/* harmony import */ var _add_feedback_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-feedback.page */ "./src/app/add-feedback/add-feedback.page.ts");








let AddFeedbackPageModule = class AddFeedbackPageModule {
};
AddFeedbackPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _add_feedback_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddFeedbackPageRoutingModule"]
        ],
        declarations: [_add_feedback_page__WEBPACK_IMPORTED_MODULE_7__["AddFeedbackPage"]]
    })
], AddFeedbackPageModule);



/***/ }),

/***/ "./src/app/add-feedback/add-feedback.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/add-feedback/add-feedback.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".doctor_info {\n  padding: 18px;\n  align-items: flex-start;\n  padding-bottom: 36px;\n}\n.doctor_info .img_box {\n  width: 100%;\n  max-width: 150px;\n  height: 182px;\n  border-radius: 11px;\n  margin-right: 18px;\n}\n.doctor_info .text_box h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.53rem;\n  font-weight: 600;\n  line-height: 31px;\n  padding-bottom: 10px;\n}\n.doctor_info .text_box h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  padding-bottom: 7px;\n}\n.form {\n  width: 100%;\n}\n.form ion-list ion-card {\n  margin: 0;\n  width: 100%;\n  box-shadow: none;\n  border-radius: 0;\n  padding: 0px 18px;\n  padding-bottom: 32px;\n  background: var(--white);\n}\n.form ion-list ion-card h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  padding-bottom: 15px;\n}\n.form ion-list ion-card h2 span {\n  color: var(--text-black);\n  font-weight: 500;\n}\n.form ion-list ion-card .icon_box ion-icon {\n  color: #dddddd;\n  font-size: 2.54rem;\n}\n.form ion-list ion-card .icon_box ion-icon.active {\n  color: var(--yelow_color);\n}\n.form ion-list ion-card ion-item.item-has-placeholder {\n  margin-bottom: 0;\n  background: var(--bg-color) !important;\n  border-radius: 3px;\n}\n.form ion-list ion-card ion-item.item-has-placeholder ion-textarea,\n.form ion-list ion-card ion-item.item-has-placeholder ion-input {\n  --placeholder-opacity: 1;\n  font-size: 1rem !important;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWZlZWRiYWNrL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxhZGQtZmVlZGJhY2tcXGFkZC1mZWVkYmFjay5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZC1mZWVkYmFjay9hZGQtZmVlZGJhY2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUNDTDtBRENLO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDVDtBREdTO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNEYjtBRElTO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRmI7QURPQztFQUNJLFdBQUE7QUNKTDtBRFFTO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0FDTmI7QURRYTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDTmpCO0FEUWlCO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtBQ05yQjtBRFdpQjtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ1RyQjtBRFdxQjtFQUNJLHlCQUFBO0FDVHpCO0FEZWlCO0VBQ0ksZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0FDYnJCO0FEZXFCOztFQUVJLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0FDYnpCIiwiZmlsZSI6InNyYy9hcHAvYWRkLWZlZWRiYWNrL2FkZC1mZWVkYmFjay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmRvY3Rvcl9pbmZvIHtcclxuICAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAzNnB4O1xyXG5cclxuICAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICBoZWlnaHQ6IDE4MnB4O1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgICAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgICAgfVxyXG5cclxuICAgICAudGV4dF9ib3gge1xyXG4gICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41M3JlbTtcclxuICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzFweDtcclxuICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgZm9udC1zaXplOiAwLjk0cmVtO1xyXG4gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiB9XHJcblxyXG4gLmZvcm0ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICBpb24tbGlzdCB7XHJcblxyXG4gICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgcGFkZGluZzogMHB4IDE4cHg7XHJcbiAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxuICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHJcbiAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk0cmVtO1xyXG4gICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgIC5pY29uX2JveCB7XHJcbiAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RkZGRkZDtcclxuICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjU0cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXllbG93X2NvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgJi5pdGVtLWhhcy1wbGFjZWhvbGRlciB7IFxyXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgaW9uLXRleHRhcmVhLFxyXG4gICAgICAgICAgICAgICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuIH0iLCIuZG9jdG9yX2luZm8ge1xuICBwYWRkaW5nOiAxOHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZy1ib3R0b206IDM2cHg7XG59XG4uZG9jdG9yX2luZm8gLmltZ19ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxODJweDtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xufVxuLmRvY3Rvcl9pbmZvIC50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIGZvbnQtc2l6ZTogMS41M3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmRvY3Rvcl9pbmZvIC50ZXh0X2JveCBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjk0cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xufVxuXG4uZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwcHggMThweDtcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1jYXJkIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuOTRyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1jYXJkIGgyIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCAuaWNvbl9ib3ggaW9uLWljb24ge1xuICBjb2xvcjogI2RkZGRkZDtcbiAgZm9udC1zaXplOiAyLjU0cmVtO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgLmljb25fYm94IGlvbi1pY29uLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS15ZWxvd19jb2xvcik7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBpb24taXRlbS5pdGVtLWhhcy1wbGFjZWhvbGRlciB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBpb24taXRlbS5pdGVtLWhhcy1wbGFjZWhvbGRlciBpb24tdGV4dGFyZWEsXG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCBpb24taXRlbS5pdGVtLWhhcy1wbGFjZWhvbGRlciBpb24taW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/add-feedback/add-feedback.page.ts":
/*!***************************************************!*\
  !*** ./src/app/add-feedback/add-feedback.page.ts ***!
  \***************************************************/
/*! exports provided: AddFeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFeedbackPage", function() { return AddFeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var src_models_rate_request_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/rate-request.models */ "./src/models/rate-request.models.ts");








let AddFeedbackPage = class AddFeedbackPage {
    constructor(router, navCtrl, uiElementService, translate, apiService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.uiElementService = uiElementService;
        this.translate = translate;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.rateRequest = new src_models_rate_request_models__WEBPACK_IMPORTED_MODULE_7__["RateRequest"]();
        this.rateReasonExists = false;
        console.log("getCurrentNavigation", this.router.getCurrentNavigation().extras.state);
        if (this.router.getCurrentNavigation().extras.state) {
            this.doctor = this.router.getCurrentNavigation().extras.state.doctor;
            this.rateReason = this.router.getCurrentNavigation().extras.state.rateReason;
            this.rateRequest.rating = 3;
            this.rateReasonExists = (this.rateReason != null && this.rateReason.length > 0);
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    setRating(rating) {
        this.rateRequest.rating = rating;
    }
    submitRating() {
        if (!this.rateRequest.review || !this.rateRequest.review.length) {
            this.translate.get("err_review").subscribe(value => this.uiElementService.presentToast(value));
        }
        else {
            this.translate.get("just_moment").subscribe(value => {
                this.uiElementService.presentToast(value);
                this.subscriptions.push(this.apiService.postReviewDoctor(this.doctor.id, this.rateRequest).subscribe(res => {
                    console.log("postReviewProduct", res);
                    // Helper.addReviewedProductId(String(this.order_id + String(this.product.id)));
                    this.uiElementService.dismissLoading();
                    this.translate.get("review_done").subscribe(value => this.uiElementService.presentToast(value));
                    this.navCtrl.navigateRoot(['./tabs']);
                }, err => {
                    this.uiElementService.dismissLoading();
                    console.log("postReviewProduct", err);
                    let found = false;
                    if (err && err.error && err.error.errors) {
                        if (err.error.errors.review) {
                            found = true;
                            this.translate.get("err_review_length").subscribe(value => this.uiElementService.presentErrorAlert(value));
                        }
                    }
                    if (!found)
                        this.translate.get("something_went_wrong").subscribe(value => this.uiElementService.presentErrorAlert(value));
                    this.navCtrl.pop();
                }));
            });
        }
    }
};
AddFeedbackPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }
];
AddFeedbackPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-feedback',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-feedback.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-feedback/add-feedback.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-feedback.page.scss */ "./src/app/add-feedback/add-feedback.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])
], AddFeedbackPage);



/***/ }),

/***/ "./src/models/rate-request.models.ts":
/*!*******************************************!*\
  !*** ./src/models/rate-request.models.ts ***!
  \*******************************************/
/*! exports provided: RateRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateRequest", function() { return RateRequest; });
class RateRequest {
}


/***/ })

}]);
//# sourceMappingURL=add-feedback-add-feedback-module-es2015.js.map