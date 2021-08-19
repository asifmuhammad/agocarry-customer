(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-list-product-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <div class=\"title_inner d-flex\">\r\n                <span class=\"title_center\" *ngIf=\"category\">{{category.title}}</span>\r\n                <span class=\"title_center\" *ngIf=\"!category\">{{'products' | translate}}</span>\r\n                <span class=\"end cart_icon\" (click)=\"navCart()\">\r\n                    <ion-icon class=\"zmdi zmdi-shopping-cart ion-text-start\"></ion-icon>\r\n                    <ion-badge>{{eComService.getCartItemsCount()}}</ion-badge>\r\n                </span>\r\n            </div>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n    <div class=\"empty-view\" *ngIf=\"!isLoading && (!products || !products.length)\">\r\n        <div style=\"text-align:center\">\r\n            <img src=\"assets/images/empty_categories.png\" alt=\"no offers\" />\r\n            <span style=\"color:#9E9E9E; font-weight:bold;\">\r\n                {{'empty_results' | translate}}\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"item_row\">\r\n        <ion-row>\r\n            <ion-col size=\"6\" *ngFor=\"let product of products\">\r\n                <div class=\"item ion-text-center\">\r\n                    <div class=\"item_content\" (click)=\"navProDetail(product)\">\r\n                        <div *ngIf=\"product.prescription_required\" class=\"prescription_required\">\r\n                            <img src=\"assets/images/px.png\">\r\n                        </div>\r\n                        <div class=\"img_box\">\r\n                            <img [src]=\"product.images[0]\">\r\n                        </div>\r\n                        <h2>{{product.title}}</h2>\r\n                    </div>\r\n                    <div class=\"item_footer d-flex\">\r\n                        <h3 class=\"ion-text-center\">{{product.priceToShow}}</h3>\r\n                        <h4 class=\"ion-text-center end\">\r\n                            <span (click)=\"addProCart(product)\">\r\n                                +\r\n                            </span>\r\n                        </h4>\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-infinite-scroll (ionInfinite)=\"doInfiniteProducts($event)\">\r\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{'loading' | translate}}\">\r\n            </ion-infinite-scroll-content>\r\n        </ion-infinite-scroll>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/product-list/product-list-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/product-list/product-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageRoutingModule", function() { return ProductListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list.page */ "./src/app/product-list/product-list.page.ts");




const routes = [
    {
        path: '',
        component: _product_list_page__WEBPACK_IMPORTED_MODULE_3__["ProductListPage"]
    }
];
let ProductListPageRoutingModule = class ProductListPageRoutingModule {
};
ProductListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductListPageRoutingModule);



/***/ }),

/***/ "./src/app/product-list/product-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/product-list/product-list.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function() { return ProductListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _product_list_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list-routing.module */ "./src/app/product-list/product-list-routing.module.ts");
/* harmony import */ var _product_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-list.page */ "./src/app/product-list/product-list.page.ts");








let ProductListPageModule = class ProductListPageModule {
};
ProductListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _product_list_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductListPageRoutingModule"]
        ],
        declarations: [_product_list_page__WEBPACK_IMPORTED_MODULE_7__["ProductListPage"]]
    })
], ProductListPageModule);



/***/ }),

/***/ "./src/app/product-list/product-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/product-list/product-list.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-title .title_inner span.title_center {\n  position: absolute;\n  left: 0;\n  top: -3px;\n  right: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n}\nion-header ion-toolbar ion-title .title_inner span.cart_icon {\n  position: relative;\n  min-width: 27px;\n}\nion-header ion-toolbar ion-title .title_inner span.cart_icon ion-badge {\n  background: var(--red_color);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  line-height: 15px;\n  display: block;\n  position: absolute;\n  top: 12px;\n  right: 0;\n}\nion-header ion-toolbar ion-title .title_inner span.cart_icon ion-icon {\n  position: relative;\n  top: 5px;\n  font-size: 1.35rem;\n}\n.prescription_required {\n  position: absolute;\n  right: 12px;\n  z-index: 99;\n  top: 12px;\n  width: 18px;\n}\n.item_row ion-row {\n  padding: 6px 6px;\n}\n.item_row ion-row ion-col {\n  padding: 7px 8px;\n}\n.item_row ion-row ion-col .item {\n  background: var(--white);\n  border-radius: 10px;\n  overflow: hidden;\n  text-align: unset !important;\n}\n.item_row ion-row ion-col .item .item_content {\n  padding: 10px 13px;\n  position: relative;\n  padding-bottom: 5px;\n}\n.item_row ion-row ion-col .item .item_content .img_box {\n  width: 115px;\n  height: 115px;\n  margin: 0 auto;\n  position: relative;\n  margin-bottom: 12px;\n}\n.item_row ion-row ion-col .item .item_content .img_box img {\n  width: 98px;\n  display: block;\n  margin: auto;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n.item_row ion-row ion-col .item .item_content h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.9rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n.item_row ion-row ion-col .item .item_footer h3 {\n  margin: 0;\n  font-size: 1rem;\n  min-width: 50%;\n  text-align: justify !important;\n  padding-left: 13px;\n  font-weight: 600;\n}\n.item_row ion-row ion-col .item .item_footer h4 {\n  color: var(--white);\n  background: var(--primary);\n  margin: 0;\n  font-size: 1.8rem;\n  height: 34px;\n  line-height: 31px;\n  min-width: 35px;\n  border-radius: 10px 0;\n  font-weight: 500;\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1saXN0L0Y6XFxmaXZlclxcQmVybmFyZFxcRG9jdG9yIFdvcmxkXFxEb2N0b1dvcmxkX0FwcENvZGUgKFZpZGVvIENhbGwpLTIwMjEwODA5VDEwMTQwN1otMDAxXFxEb2N0b1dvcmxkX0FwcENvZGUgKFZpZGVvIENhbGwpXFxkb2N0b3dvcmxkX2N1c3RvbWVyXFxkb2N0b3dvcmxkX2N1c3RvbWVyL3NyY1xcYXBwXFxwcm9kdWN0LWxpc3RcXHByb2R1Y3QtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlnQjtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtBQ0hwQjtBRE1nQjtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0pwQjtBRE1vQjtFQUNJLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNMeEI7QURRb0I7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ054QjtBRGNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDWEo7QURlSTtFQUNJLGdCQUFBO0FDWlI7QURjUTtFQUNJLGdCQUFBO0FDWlo7QURjWTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDWmhCO0FEY2dCO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDWnBCO0FEY29CO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1p4QjtBRGN3QjtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtBQ1o1QjtBRGlCb0I7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FDZnhCO0FEc0JvQjtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ3BCeEI7QUR1Qm9CO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDckJ4QjtBRDZCQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQzFCSjtBRDRCSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDMUJSO0FENkJJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDM0JSO0FEOEJJO0VBQ0ksZ0JBQUE7QUM1QlI7QUQ4QlE7RUFDSSx5QkFBQTtBQzVCWiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG4gICAgICAgIC50aXRsZV9pbm5lciB7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgJi50aXRsZV9jZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTNweDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuY2FydF9pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyN3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24tYmFkZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWRfY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2ZvbnQtc2l6ZTogMC42NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcmVzY3JpcHRpb25fcmVxdWlyZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEycHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHRvcDogMTJweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG59XHJcblxyXG4uaXRlbV9yb3cge1xyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDZweDtcclxuXHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCA4cHg7XHJcblxyXG4gICAgICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLml0ZW1fY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMy42cHg7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaXRlbV9mb290ZXIge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lbXB0eS12aWV3IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMTAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIHNwYW4udGl0bGVfY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IC0zcHg7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogYXV0bztcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBzcGFuLmNhcnRfaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAyN3B4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIHNwYW4uY2FydF9pY29uIGlvbi1iYWRnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZF9jb2xvcik7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogMDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBzcGFuLmNhcnRfaWNvbiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcbn1cblxuLnByZXNjcmlwdGlvbl9yZXF1aXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEycHg7XG4gIHotaW5kZXg6IDk5O1xuICB0b3A6IDEycHg7XG4gIHdpZHRoOiAxOHB4O1xufVxuXG4uaXRlbV9yb3cgaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDZweCA2cHg7XG59XG4uaXRlbV9yb3cgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogN3B4IDhweDtcbn1cbi5pdGVtX3JvdyBpb24tcm93IGlvbi1jb2wgLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG4uaXRlbV9yb3cgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2NvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4IDEzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5pdGVtX3JvdyBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fY29udGVudCAuaW1nX2JveCB7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5pdGVtX3JvdyBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fY29udGVudCAuaW1nX2JveCBpbWcge1xuICB3aWR0aDogOThweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDA7XG59XG4uaXRlbV9yb3cgaW9uLXJvdyBpb24tY29sIC5pdGVtIC5pdGVtX2NvbnRlbnQgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cbi5pdGVtX3JvdyBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fZm9vdGVyIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1pbi13aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5pdGVtX3JvdyBpb24tcm93IGlvbi1jb2wgLml0ZW0gLml0ZW1fZm9vdGVyIGg0IHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGhlaWdodDogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XG4gIG1pbi13aWR0aDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZW1wdHktdmlldyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB0b3A6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAxMCU7XG59XG4uZW1wdHktdmlldyBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5lbXB0eS12aWV3IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5lbXB0eS12aWV3IGJ1dHRvbiBzcGFuIHtcbiAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/product-list/product-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/product-list/product-list.page.ts ***!
  \***************************************************/
/*! exports provided: ProductListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPage", function() { return ProductListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common/ecommerce.service */ "./src/app/services/common/ecommerce.service.ts");
/* harmony import */ var src_models_constants_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/constants.models */ "./src/models/constants.models.ts");









let ProductListPage = class ProductListPage {
    constructor(router, navCtrl, translate, uiElementService, apiService, eComService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.eComService = eComService;
        this.subscriptions = new Array();
        this.doneAll = false;
        this.pageNo = 1;
        this.products = new Array();
        this.isLoading = true;
        console.log("getCurrentNavigation", this.router.getCurrentNavigation().extras.state);
        if (this.router.getCurrentNavigation().extras.state) {
            this.category = this.router.getCurrentNavigation().extras.state.category;
        }
        // if (this.category != null) {
        this.translate.get("loading").subscribe(value => {
            this.uiElementService.presentLoading(value);
            this.loadProducts();
        });
        // }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    loadProducts() {
        this.subscriptions.push(this.apiService.getProductsWithCategoryId(src_models_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].SCOPE_ECOMMERCE, this.category ? this.category.id : null, this.pageNo).subscribe(res => {
            this.products = this.products.concat(res.data);
            this.doneAll = (!res.data || !res.data.length);
            if (this.infiniteScrollEvent)
                this.infiniteScrollEvent.target.complete();
            this.isLoading = false;
            this.uiElementService.dismissLoading();
        }, err => {
            console.log("getProductsWithCategoryId", err);
            this.uiElementService.dismissLoading();
            if (this.infiniteScrollEvent)
                this.infiniteScrollEvent.target.complete();
            this.isLoading = false;
        }));
    }
    doInfiniteProducts(event) {
        if (this.doneAll) {
            event.target.complete();
        }
        else {
            this.infiniteScrollEvent = event;
            this.pageNo = this.pageNo + 1;
            this.loadProducts();
        }
    }
    addProCart(pro) {
        let added = this.eComService.addOrIncrementCartItem(this.eComService.getCartItemFromProduct(pro));
        this.translate.get((added ? "added_cart" : "incremented_cart")).subscribe(value => this.uiElementService.presentToast(value));
    }
    navCart() {
        this.navCtrl.navigateForward(['./my-cart']);
    }
    navProDetail(pro) {
        let navigationExtras = { queryParams: { product_id: pro.id } };
        this.navCtrl.navigateForward(['./product-info'], navigationExtras);
    }
};
ProductListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_7__["ECommerceService"] }
];
ProductListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-list.page.scss */ "./src/app/product-list/product-list.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_7__["ECommerceService"]])
], ProductListPage);



/***/ })

}]);
//# sourceMappingURL=product-list-product-list-module-es2015.js.map