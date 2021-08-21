(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-review-item-review-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/item-review/item-review.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item-review/item-review.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            {{'review_order' | translate}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n    <div class=\"form\">\n        <ion-list lines=\"none\">\n            <ion-card *ngFor=\"let product of products;let i = index\">\n                <div class=\"item_detail d-flex\">\n                    <div class=\"text_box\">\n                        <h2>{{order.vendor.name}}</h2>\n                        <h3>{{product.title}}</h3>\n                    </div>\n                    <div class=\"img_box end\">\n                        <img [src]=\"product.images[0]\">\n                    </div>\n                </div>\n                <div class=\"overall_experience\">\n                    <h2>{{'overall_experience' | translate}}</h2>\n                    <div class=\"icon_box\">\n                        <ion-icon  [ngClass]=\"rateRequest[i].rating>=1 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \" (click)=\"setRating(1,i)\"></ion-icon>\n                        <ion-icon  [ngClass]=\"rateRequest[i].rating>=2 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \" (click)=\"setRating(2,i)\"></ion-icon>\n                        <ion-icon  [ngClass]=\"rateRequest[i].rating>=3 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \" (click)=\"setRating(3,i)\"></ion-icon>\n                        <ion-icon  [ngClass]=\"rateRequest[i].rating>=4 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \" (click)=\"setRating(4,i)\"></ion-icon>\n                        <ion-icon  [ngClass]=\"rateRequest[i].rating>=5 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star' \" (click)=\"setRating(5,i)\"></ion-icon>\n                    </div>\n                </div>\n\n                <div class=\"add_feedback\">\n                    <h2>{{'add_feedback' | translate}}</h2>\n                    <ion-item lines=\"none\">\n                        <ion-textarea rows=\"2\" mode=\"md\" type=\"text\" [(ngModel)]=\"rateRequest[i].review\" maxlength=\"140\" placeholder=\"{{'write_your_feedback' | translate}}\">\n                        </ion-textarea>\n                    </ion-item>\n                </div>\n                <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"submitRating(i)\">{{'submit' | translate}}</ion-button>\n            </ion-card>\n\n            <!-- <ion-card>\n                <div class=\"item_detail d-flex\">\n                    <div class=\"text_box\">\n                        <h2>Well life Store</h2>\n                        <h3>Salospir 100mg <br>Tablet</h3>\n                    </div>\n                    <div class=\"img_box end\">\n                        <img src=\"assets/images/11.png\">\n                    </div>\n                </div>\n                <div class=\"overall_experience\">\n                    <h2>{{'overall_experience' | translate}}</h2>\n                    <div class=\"icon_box\">\n                        <ion-icon class=\"zmdi zmdi-star active\"></ion-icon>\n                        <ion-icon class=\"zmdi zmdi-star active\"></ion-icon>\n                        <ion-icon class=\"zmdi zmdi-star active\"></ion-icon>\n                        <ion-icon class=\"zmdi zmdi-star active\"></ion-icon>\n                        <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n                    </div>\n                </div>\n\n                <div class=\"add_feedback\">\n                    <h2>{{'add_feedback' | translate}}</h2>\n                    <ion-item lines=\"none\">\n                        <ion-textarea class=\"ion-text-start\" rows=\"4\" maxlength=\"140\" placeholder=\"{{'write_your_feedback' | translate}}\"></ion-textarea>\n                    </ion-item>\n                </div>\n                <ion-button size=\"large\" shape=\"full\" class=\"btn\">{{'submit' | translate}}</ion-button>\n            </ion-card> -->\n        </ion-list>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/item-review/item-review-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/item-review/item-review-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ItemReviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemReviewPageRoutingModule", function() { return ItemReviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _item_review_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-review.page */ "./src/app/item-review/item-review.page.ts");




const routes = [
    {
        path: '',
        component: _item_review_page__WEBPACK_IMPORTED_MODULE_3__["ItemReviewPage"]
    }
];
let ItemReviewPageRoutingModule = class ItemReviewPageRoutingModule {
};
ItemReviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemReviewPageRoutingModule);



/***/ }),

/***/ "./src/app/item-review/item-review.module.ts":
/*!***************************************************!*\
  !*** ./src/app/item-review/item-review.module.ts ***!
  \***************************************************/
/*! exports provided: ItemReviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemReviewPageModule", function() { return ItemReviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _item_review_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-review-routing.module */ "./src/app/item-review/item-review-routing.module.ts");
/* harmony import */ var _item_review_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-review.page */ "./src/app/item-review/item-review.page.ts");








let ItemReviewPageModule = class ItemReviewPageModule {
};
ItemReviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _item_review_routing_module__WEBPACK_IMPORTED_MODULE_6__["ItemReviewPageRoutingModule"]
        ],
        declarations: [_item_review_page__WEBPACK_IMPORTED_MODULE_7__["ItemReviewPage"]]
    })
], ItemReviewPageModule);



/***/ }),

/***/ "./src/app/item-review/item-review.page.scss":
/*!***************************************************!*\
  !*** ./src/app/item-review/item-review.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form {\n  width: 100%;\n}\n.form ion-list {\n  padding-top: 8px;\n}\n.form ion-list ion-card {\n  padding: 0;\n  background: var(--white);\n  border-radius: 0;\n  box-shadow: none;\n  margin: 0;\n  width: 100%;\n  margin-bottom: 8px;\n  padding: 0;\n}\n.form ion-list ion-card .item_detail {\n  padding: 20px;\n  padding-bottom: 0px;\n}\n.form ion-list ion-card .item_detail .img_box {\n  width: 100%;\n  min-width: 120px;\n  max-width: 120px;\n}\n.form ion-list ion-card .item_detail .img_box img {\n  max-width: 120px;\n}\n.form ion-list ion-card .item_detail .text_box {\n  width: 100%;\n}\n.form ion-list ion-card .item_detail .text_box h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.53rem;\n  font-weight: 600;\n}\n.form ion-list ion-card .item_detail .text_box h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  padding-bottom: 7px;\n}\n.form ion-list ion-card .overall_experience {\n  padding: 20px;\n  padding-bottom: 10px;\n}\n.form ion-list ion-card .overall_experience h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  padding-bottom: 15px;\n}\n.form ion-list ion-card .overall_experience .icon_box ion-icon {\n  color: #dddddd;\n  font-size: 2.54rem;\n}\n.form ion-list ion-card .overall_experience .icon_box ion-icon.active {\n  color: var(--yelow_color);\n}\n.form ion-list ion-card .add_feedback {\n  padding: 20px;\n}\n.form ion-list ion-card .add_feedback h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.94rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  padding-bottom: 20px;\n}\n.form ion-list ion-card .add_feedback ion-item.item-has-placeholder {\n  margin-bottom: 0;\n  background: var(--bg-color) !important;\n  border-radius: 3px;\n}\n.form ion-list ion-card .add_feedback ion-item.item-has-placeholder ion-textarea,\n.form ion-list ion-card .add_feedback ion-item.item-has-placeholder ion-input {\n  --placeholder-opacity: 1;\n  font-size: 1rem !important;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1yZXZpZXcvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktY3VzdG9tZXIvc3JjXFxhcHBcXGl0ZW0tcmV2aWV3XFxpdGVtLXJldmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL2l0ZW0tcmV2aWV3L2l0ZW0tcmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjtBRENJO0VBQ0ksZ0JBQUE7QUNDUjtBRENRO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ1o7QURDWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0NoQjtBRENnQjtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ3BCO0FEQ29CO0VBQ0ksZ0JBQUE7QUNDeEI7QURHZ0I7RUFDSSxXQUFBO0FDRHBCO0FER29CO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0R4QjtBRElvQjtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0Z4QjtBRE9ZO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0FDTGhCO0FET2dCO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNMcEI7QURTb0I7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNQeEI7QURTd0I7RUFDSSx5QkFBQTtBQ1A1QjtBRGFZO0VBQ0ksYUFBQTtBQ1hoQjtBRGFnQjtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDWHBCO0FEZW9CO0VBQ0ksZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0FDYnhCO0FEZXdCOztFQUVJLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0FDYjVCIiwiZmlsZSI6InNyYy9hcHAvaXRlbS1yZXZpZXcvaXRlbS1yZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuXG4gICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgICAgLml0ZW1fZGV0YWlsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAgICAgICAgICAgICAuaW1nX2JveCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRleHRfYm94IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNTNyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub3ZlcmFsbF9leHBlcmllbmNlIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NHJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pY29uX2JveCB7XG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGRkZGRkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjU0cmVtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXllbG93X2NvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFkZF9mZWVkYmFjayB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTRyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICYuaXRlbS1oYXMtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24tdGV4dGFyZWEsXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufSIsIi5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybSBpb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBwYWRkaW5nOiAwO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgLml0ZW1fZGV0YWlsIHtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1jYXJkIC5pdGVtX2RldGFpbCAuaW1nX2JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXgtd2lkdGg6IDEyMHB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgLml0ZW1fZGV0YWlsIC5pbWdfYm94IGltZyB7XG4gIG1heC13aWR0aDogMTIwcHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCAuaXRlbV9kZXRhaWwgLnRleHRfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCAuaXRlbV9kZXRhaWwgLnRleHRfYm94IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1zaXplOiAxLjUzcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgLml0ZW1fZGV0YWlsIC50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjk0cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgLm92ZXJhbGxfZXhwZXJpZW5jZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgLm92ZXJhbGxfZXhwZXJpZW5jZSBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjk0cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCAub3ZlcmFsbF9leHBlcmllbmNlIC5pY29uX2JveCBpb24taWNvbiB7XG4gIGNvbG9yOiAjZGRkZGRkO1xuICBmb250LXNpemU6IDIuNTRyZW07XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCAub3ZlcmFsbF9leHBlcmllbmNlIC5pY29uX2JveCBpb24taWNvbi5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0teWVsb3dfY29sb3IpO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgLmFkZF9mZWVkYmFjayB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCAuYWRkX2ZlZWRiYWNrIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuOTRyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1jYXJkIC5hZGRfZmVlZGJhY2sgaW9uLWl0ZW0uaXRlbS1oYXMtcGxhY2Vob2xkZXIge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcikgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWNhcmQgLmFkZF9mZWVkYmFjayBpb24taXRlbS5pdGVtLWhhcy1wbGFjZWhvbGRlciBpb24tdGV4dGFyZWEsXG4uZm9ybSBpb24tbGlzdCBpb24tY2FyZCAuYWRkX2ZlZWRiYWNrIGlvbi1pdGVtLml0ZW0taGFzLXBsYWNlaG9sZGVyIGlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/item-review/item-review.page.ts":
/*!*************************************************!*\
  !*** ./src/app/item-review/item-review.page.ts ***!
  \*************************************************/
/*! exports provided: ItemReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemReviewPage", function() { return ItemReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");








let ItemReviewPage = class ItemReviewPage {
    constructor(router, navCtrl, translate, uiElementService, apiService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.rateRequest = new Array();
        this.products = new Array();
        console.log("getCurrentNavigation", this.router.getCurrentNavigation().extras.state);
        if (this.router.getCurrentNavigation().extras.state) {
            this.order = this.router.getCurrentNavigation().extras.state.order;
            this.order.products.map((element) => { if (!element.vendor_product.product.reviewed) {
                this.rateRequest.push({ rating: 3, review: '' });
                this.products.push(element.vendor_product.product);
            } });
            // this.rateRequest.rating = 3;
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    setRating(rating, index) {
        this.rateRequest[index].rating = rating;
    }
    submitRating(index) {
        if (!this.rateRequest[index].review || !this.rateRequest[index].review.length) {
            this.translate.get("err_review").subscribe(value => this.uiElementService.presentToast(value));
        }
        else {
            this.translate.get("just_moment").subscribe(value => {
                this.uiElementService.presentToast(value);
                this.subscriptions.push(this.apiService.postReviewProduct(this.products[index].id, this.rateRequest[index]).subscribe(res => {
                    console.log("postReviewProduct", res);
                    src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].addReviewedProductId(String(this.order.id + String(this.products[index].id)));
                    this.uiElementService.dismissLoading();
                    this.translate.get("review_done").subscribe(value => this.uiElementService.presentToast(value));
                    // this.navCtrl.navigateRoot(['./home']);
                    this.navCtrl.pop();
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
ItemReviewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }
];
ItemReviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-review',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-review.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/item-review/item-review.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-review.page.scss */ "./src/app/item-review/item-review.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])
], ItemReviewPage);



/***/ })

}]);
//# sourceMappingURL=item-review-item-review-module-es2015.js.map