(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-reviews-product-reviews-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-reviews/product-reviews.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-reviews/product-reviews.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{'reviews2' | translate}}</ion-title>\n    </ion-toolbar>\n    <div class=\"banner\">\n        <h2 class=\"d-flex\">\n            {{product.title}}\n            <span class=\"end\">\n                <ion-icon class=\"zmdi zmdi-star ion-text-start\"></ion-icon>\n                {{product.ratings}}\n            </span>\n        </h2>\n        <h3 class=\"d-flex\"> <span class=\"end\">{{'avg_review' | translate}}</span></h3>\n    </div>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n    <div class=\"empty-view\" *ngIf=\"!isLoading && (!reviews || !reviews.length)\">\n        <div style=\"text-align:center;\">\n            <img src=\"assets/images/empty_orders.png\" alt=\"no offers\" />\n            <span style=\"color:#9E9E9E; font-weight:bold;\">\n                {{'empty_reviews' | translate}}\n            </span>\n        </div>\n    </div>\n    <ion-list lines=\"none\">\n        <ion-item *ngFor=\"let review of reviews\">\n            <div class=\"item_inner\">\n                <div class=\"reviewer_details d-flex\">\n                    <div class=\"img_box center_img\">\n                        <img [src]=\"review.user.image_url\" class=\"crop_img\">\n                    </div>\n                    <div class=\"text_box\">\n                        <h2 class=\"d-flex\">\n                            <span class=\"reviewer_name\">{{review.user.name}}</span>\n                            <span class=\"end\">\n                                {{review.rating}}\n                                &nbsp;\n                                <ion-icon [ngClass]=\"review.rating>=1 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\n                                </ion-icon>\n                                <ion-icon [ngClass]=\"review.rating>=2 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\n                                </ion-icon>\n                                <ion-icon [ngClass]=\"review.rating>=3 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\n                                </ion-icon>\n                                <ion-icon [ngClass]=\"review.rating>=4 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\n                                </ion-icon>\n                                <ion-icon [ngClass]=\"review.rating>=5 ? 'zmdi zmdi-star active' : 'zmdi zmdi-star'\">\n                                </ion-icon>\n                            </span>\n                        </h2>\n\n                        <h3 class=\"d-flex\">\n                            <!-- {{'for' | translate}}&nbsp;<strong>Cold Fever</strong> -->\n                            <span class=\"end\">{{review.created_at}}</span>\n                        </h3>\n                    </div>\n                </div>\n                <p>{{review.review}}</p>\n            </div>\n        </ion-item>\n    </ion-list>\n    <ion-infinite-scroll (ionInfinite)=\"doInfiniteReviews($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{'loading' | translate}}\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "./src/app/product-reviews/product-reviews-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/product-reviews/product-reviews-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProductReviewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewsPageRoutingModule", function() { return ProductReviewsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_reviews_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-reviews.page */ "./src/app/product-reviews/product-reviews.page.ts");




const routes = [
    {
        path: '',
        component: _product_reviews_page__WEBPACK_IMPORTED_MODULE_3__["ProductReviewsPage"]
    }
];
let ProductReviewsPageRoutingModule = class ProductReviewsPageRoutingModule {
};
ProductReviewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductReviewsPageRoutingModule);



/***/ }),

/***/ "./src/app/product-reviews/product-reviews.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/product-reviews/product-reviews.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductReviewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewsPageModule", function() { return ProductReviewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _product_reviews_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-reviews-routing.module */ "./src/app/product-reviews/product-reviews-routing.module.ts");
/* harmony import */ var _product_reviews_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-reviews.page */ "./src/app/product-reviews/product-reviews.page.ts");








let ProductReviewsPageModule = class ProductReviewsPageModule {
};
ProductReviewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _product_reviews_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductReviewsPageRoutingModule"]
        ],
        declarations: [_product_reviews_page__WEBPACK_IMPORTED_MODULE_7__["ProductReviewsPage"]]
    })
], ProductReviewsPageModule);



/***/ }),

/***/ "./src/app/product-reviews/product-reviews.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/product-reviews/product-reviews.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background: var(--white);\n}\nion-header .banner {\n  padding: 18px;\n}\nion-header .banner h2 {\n  color: var(--text-dark);\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 500;\n  padding-bottom: 4px;\n}\nion-header .banner h2 span {\n  display: flex;\n  align-items: center;\n  color: var(--yelow_color);\n  font-weight: 500;\n  font-size: 0.95rem;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\nion-header .banner h2 span ion-icon {\n  min-width: 20px;\n  font-size: 1.1rem;\n}\nion-header .banner h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 0;\n}\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 8px;\n}\nion-list ion-item {\n  padding: 11px 18px;\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin-bottom: 8px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item .item_inner .reviewer_details {\n  padding-bottom: 17px;\n  width: 100%;\n}\nion-list ion-item .item_inner .reviewer_details .img_box {\n  min-width: 37px;\n  height: 37px;\n  border-radius: 50%;\n  margin-right: 12px;\n}\nion-list ion-item .item_inner .reviewer_details .text_box {\n  width: 100%;\n  overflow: hidden;\n}\nion-list ion-item .item_inner .reviewer_details .text_box h2 {\n  margin: 0;\n  font-size: 0.9rem;\n  font-weight: 500;\n  padding-bottom: 3px;\n}\nion-list ion-item .item_inner .reviewer_details .text_box h2 span.reviewer_name {\n  width: 100%;\n  max-width: calc(100% - 100px);\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: block;\n  color: var(--text-dark);\n  font-size: 1rem;\n  letter-spacing: 0.4px;\n}\nion-list ion-item .item_inner .reviewer_details .text_box h2 span.end {\n  display: flex;\n  align-items: center;\n  font-size: 0.8rem;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\nion-list ion-item .item_inner .reviewer_details .text_box h2 span.end ion-icon {\n  color: #dddddd;\n  font-size: 0.8rem;\n}\nion-list ion-item .item_inner .reviewer_details .text_box h2 span.end ion-icon.active {\n  color: var(--yelow_color);\n}\nion-list ion-item .item_inner .reviewer_details .text_box h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.7rem;\n  font-weight: 400;\n}\nion-list ion-item .item_inner .reviewer_details .text_box h3 strong {\n  font-weight: 500;\n  color: var(--text-black);\n}\nion-list ion-item .item_inner .reviewer_details .text_box h3 span.end {\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 0.7rem;\n}\nion-list ion-item .item_inner p {\n  margin: 0;\n  font-size: 0.9rem;\n  line-height: 22px;\n  color: var(--text-black);\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1yZXZpZXdzL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxwcm9kdWN0LXJldmlld3NcXHByb2R1Y3QtcmV2aWV3cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUNDSjtBRENJO0VBQ0ksYUFBQTtBQ0NSO0FEQ1E7RUFDSSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDWjtBRENZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FDQ2hCO0FEQ2dCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQ3BCO0FESVE7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNGWjtBRE9BO0VBQ0kseUNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDSko7QURNSTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGtCQUFBO0FDSlI7QURNUTtFQUNJLFdBQUE7QUNKWjtBRE1ZO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0FDSmhCO0FETWdCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSnBCO0FET2dCO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDTHBCO0FET29CO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0x4QjtBRFE0QjtFQUNJLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ05oQztBRFM0QjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FDUGhDO0FEU2dDO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDUHBDO0FEU29DO0VBQ0kseUJBQUE7QUNQeEM7QURjb0I7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDWnhCO0FEY3dCO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtBQ1o1QjtBRGV3QjtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ2I1QjtBRG1CWTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNqQmhCO0FEc0JBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDbkJKO0FEcUJJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNuQlI7QURzQkk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNwQlI7QUR1Qkk7RUFDSSxnQkFBQTtBQ3JCUjtBRHVCUTtFQUNJLHlCQUFBO0FDckJaIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1yZXZpZXdzL3Byb2R1Y3QtcmV2aWV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHJcbiAgICAuYmFubmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxOHB4O1xyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teWVsb3dfY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk1cmVtO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMTFweCAxOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIC5yZXZpZXdlcl9kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgLmltZ19ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzdweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudGV4dF9ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5yZXZpZXdlcl9uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuZW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RkZGRkZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teWVsb3dfY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5lbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5lbXB0eS12aWV3IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMTAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xufVxuaW9uLWhlYWRlciAuYmFubmVyIHtcbiAgcGFkZGluZzogMThweDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciBoMiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciBoMiBzcGFuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXllbG93X2NvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIGgyIHNwYW4gaW9uLWljb24ge1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuaW9uLWhlYWRlciAuYmFubmVyIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMTFweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAucmV2aWV3ZXJfZGV0YWlscyB7XG4gIHBhZGRpbmctYm90dG9tOiAxN3B4O1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5yZXZpZXdlcl9kZXRhaWxzIC5pbWdfYm94IHtcbiAgbWluLXdpZHRoOiAzN3B4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnJldmlld2VyX2RldGFpbHMgLnRleHRfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAucmV2aWV3ZXJfZGV0YWlscyAudGV4dF9ib3ggaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnJldmlld2VyX2RldGFpbHMgLnRleHRfYm94IGgyIHNwYW4ucmV2aWV3ZXJfbmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAucmV2aWV3ZXJfZGV0YWlscyAudGV4dF9ib3ggaDIgc3Bhbi5lbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5yZXZpZXdlcl9kZXRhaWxzIC50ZXh0X2JveCBoMiBzcGFuLmVuZCBpb24taWNvbiB7XG4gIGNvbG9yOiAjZGRkZGRkO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5yZXZpZXdlcl9kZXRhaWxzIC50ZXh0X2JveCBoMiBzcGFuLmVuZCBpb24taWNvbi5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0teWVsb3dfY29sb3IpO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnJldmlld2VyX2RldGFpbHMgLnRleHRfYm94IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5yZXZpZXdlcl9kZXRhaWxzIC50ZXh0X2JveCBoMyBzdHJvbmcge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAucmV2aWV3ZXJfZGV0YWlscyAudGV4dF9ib3ggaDMgc3Bhbi5lbmQge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xufVxuXG4uZW1wdHktdmlldyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB0b3A6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAxMCU7XG59XG4uZW1wdHktdmlldyBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5lbXB0eS12aWV3IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5lbXB0eS12aWV3IGJ1dHRvbiBzcGFuIHtcbiAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/product-reviews/product-reviews.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/product-reviews/product-reviews.page.ts ***!
  \*********************************************************/
/*! exports provided: ProductReviewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewsPage", function() { return ProductReviewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_models_product_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/product.models */ "./src/models/product.models.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");








let ProductReviewsPage = class ProductReviewsPage {
    constructor(router, translate, uiElementService, apiService) {
        this.router = router;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.isLoading = true;
        this.product = new src_models_product_models__WEBPACK_IMPORTED_MODULE_2__["Product"]();
        this.reviews = new Array();
    }
    ngOnInit() {
        // this.rating = Rating.getDefault();
        if (this.router.getCurrentNavigation().extras.state) {
            this.product = this.router.getCurrentNavigation().extras.state.product;
            this.translate.get("loading").subscribe(value => {
                this.uiElementService.presentLoading(value);
                this.subscriptions.push(this.apiService.getReviewsProduct(this.product.id, 1).subscribe(res => this.reviewsRes(res), err => this.reviewsErr(err)));
            });
        }
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    reviewsRes(res) {
        this.reviews = this.reviews.concat(res.data);
        console.log('review', this.reviews);
        this.nextUrl = res.links.next;
        if (this.infiniteScrollEvent)
            this.infiniteScrollEvent.target.complete();
        this.isLoading = false;
        this.uiElementService.dismissLoading();
    }
    reviewsErr(err) {
        console.log("productsErr", err);
        this.uiElementService.dismissLoading();
        if (this.infiniteScrollEvent)
            this.infiniteScrollEvent.target.complete();
        this.isLoading = false;
    }
    doInfiniteReviews(event) {
        if (this.nextUrl == null) {
            event.target.complete();
        }
        else {
            this.infiniteScrollEvent = event;
            this.subscriptions.push(this.apiService.getURL(this.nextUrl).subscribe(res => {
                let locale = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].getLocale();
                for (let review of res.data)
                    review.created_at = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].formatTimestampDate(review.created_at, locale);
                this.reviewsRes(res);
            }, err => this.reviewsErr(err)));
        }
    }
};
ProductReviewsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }
];
ProductReviewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-reviews',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-reviews.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-reviews/product-reviews.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-reviews.page.scss */ "./src/app/product-reviews/product-reviews.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])
], ProductReviewsPage);



/***/ })

}]);
//# sourceMappingURL=product-reviews-product-reviews-module-es2015.js.map