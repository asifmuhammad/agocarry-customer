(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-detail-item-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/item-detail/item-detail.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/item-detail/item-detail.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"bg_transparent\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<div class=\"title_inner d-flex\">\n\t\t\t\t<h3 class=\"end\">\n\t\t\t\t\t<span class=\"end cart_icon\" (click)=\"cart()\">\n\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-mall ion-text-start\"></ion-icon>\n\t\t\t\t\t\t<ion-badge>{{cartCount}}</ion-badge>\n\t\t\t\t\t</span>\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg-color\">\n\t<div *ngIf=\"product\" class=\"banner\">\n\t\t<h3 [ngClass]=\"product.is_favourite ? 'end active' : 'end'\" (click)=\"toggleFavorite()\">\n\t\t\t<ion-icon class=\"zmdi zmdi-favorite-outline\"></ion-icon>\n\t\t\t<ion-icon class=\"zmdi zmdi-favorite\"></ion-icon>\n\t\t</h3>\n\n\t\t<ion-slides pager=\"true\" loop=\"true\">\n\t\t\t<ion-slide *ngFor=\"let proImage of product.images\">\n\t\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t\t<img [src]=\"proImage\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t</ion-slides>\n\t</div>\n\n\t<div class=\"item_details\">\n\t\t<h2>{{product.title}}</h2>\n\t\t<h3 *ngIf=\"product && product.categories && product.categories[0]\" class=\"d-flex\">\n\t\t\t{{product.categories[0].title}}\n\t\t\t<ion-badge class=\"end\">\n\t\t\t\t{{product.ratings}} <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t</ion-badge>\n\t\t</h3>\n\t\t<h4 class=\"d-flex\">\n\t\t\t{{product.priceToShow}}\n\t\t\t<span class=\"end\" (click)=\"navReviews()\">\n\t\t\t\t{{'read_all_reviews' | translate}}\n\t\t\t\t<ion-icon class=\"zmdi zmdi-chevron-right ion-text-end\"></ion-icon>\n\t\t\t</span>\n\t\t</h4>\n\t\t<p>{{product.detail}}</p>\n\t</div>\n\t<ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"addProCart(null)\">\n\t\t<ion-icon class=\"zmdi zmdi-mall ion-text-start\"></ion-icon>\n\t\t{{'add_to_cart' | translate}}\n\t</ion-button>\n\n\t<div class=\"more_by_seller\">\n\t\t<h2 *ngIf=\"product.vendor_products && product.vendor_products.length == 1\" class=\"d-flex\"\n\t\t\t(click)=\"navSimilarsAll()\">\n\t\t\t{{(similarProducts && similarProducts.length?'more_by':'sold_by') | translate}}&nbsp;<strong>{{product.vendor_products[0].vendor.name}}</strong>\n\t\t\t<span *ngIf=\"similarProducts && similarProducts.length\" class=\"end\">{{'view_all' | translate}}</span>\n\t\t</h2>\n\t\t<h2 *ngIf=\"similarProducts && similarProducts.length && !(product.vendor_products && product.vendor_products.length == 1)\"\n\t\t\tclass=\"d-flex\" (click)=\"navSimilarsAll()\">\n\t\t\t{{'similar_products' | translate}}\n\t\t\t<span class=\"end\">{{'view_all' | translate}}</span>\n\t\t</h2>\n\n\t\t<div *ngIf=\"similarProducts && similarProducts.length\" class=\"items_row\">\n\t\t\t<div class=\"item\" *ngFor=\"let product of similarProducts\" (click)=\"navProDetail(product)\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img [src]=\"product.images[0]\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>{{product.title}}</h3>\n\t\t\t\t\t<h4>{{product.categories[0].title}}</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">{{product.priceToShow}}</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t{{product.ratings}} <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>");

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

/***/ "./src/app/shop-hour/item-detail/item-detail-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shop-hour/item-detail/item-detail-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ItemDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailPageRoutingModule", function() { return ItemDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _item_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-detail.page */ "./src/app/shop-hour/item-detail/item-detail.page.ts");




const routes = [
    {
        path: '',
        component: _item_detail_page__WEBPACK_IMPORTED_MODULE_3__["ItemDetailPage"]
    }
];
let ItemDetailPageRoutingModule = class ItemDetailPageRoutingModule {
};
ItemDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/shop-hour/item-detail/item-detail.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/shop-hour/item-detail/item-detail.module.ts ***!
  \*************************************************************/
/*! exports provided: ItemDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailPageModule", function() { return ItemDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _item_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-detail-routing.module */ "./src/app/shop-hour/item-detail/item-detail-routing.module.ts");
/* harmony import */ var _item_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-detail.page */ "./src/app/shop-hour/item-detail/item-detail.page.ts");








let ItemDetailPageModule = class ItemDetailPageModule {
};
ItemDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _item_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["ItemDetailPageRoutingModule"]
        ],
        declarations: [_item_detail_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailPage"]]
    })
], ItemDetailPageModule);



/***/ }),

/***/ "./src/app/shop-hour/item-detail/item-detail.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/shop-hour/item-detail/item-detail.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-top: 20px;\n}\nion-header ion-toolbar ion-title {\n  position: absolute !important;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 60px;\n}\nion-header ion-toolbar ion-title .title_inner .center_title {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  text-align: center;\n}\nion-header ion-toolbar ion-title .title_inner h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n  display: flex;\n  align-items: center;\n  line-height: 68px;\n}\nion-header ion-toolbar ion-title .title_inner h3 ion-icon.zmdi-favorite {\n  min-width: 41px;\n  font-size: 1.7rem;\n  position: relative;\n  top: 8px;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.cart_icon {\n  position: relative;\n  min-width: 27px;\n  height: 46px;\n  line-height: normal;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.cart_icon ion-badge {\n  background: var(--red_color);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50%;\n  width: 17px;\n  height: 17px;\n  line-height: 17px;\n  display: block;\n  font-size: 0.8rem !important;\n  position: absolute;\n  top: 9px;\n  right: 0;\n  font-weight: 500;\n}\nion-header ion-toolbar ion-title .title_inner h3 span.cart_icon ion-icon {\n  position: relative;\n  top: 16px;\n  font-size: 1.7rem;\n}\n.banner {\n  position: relative;\n}\n.banner h3 {\n  position: absolute;\n  margin: 0;\n  top: 80px;\n  z-index: 99;\n  right: 18px;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n}\n.banner h3 ion-icon {\n  font-size: 1.7rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 28px;\n  height: 28px;\n  overflow: hidden;\n  transition: all 0.3s;\n}\n.banner h3 ion-icon.zmdi-favorite {\n  width: 0;\n  height: 0;\n  color: var(--primary);\n}\n.banner h3.active ion-icon.zmdi-favorite {\n  width: 28px;\n  height: 28px;\n}\n.banner h3.active ion-icon.zmdi-favorite-outline {\n  width: 0;\n  height: 0;\n}\n.banner ion-slides ion-slide .img_box {\n  width: 100%;\n  height: 350px;\n  border-radius: 0 0px 7px 7px;\n}\n.banner ion-slides ion-slide .img_box img {\n  position: absolute;\n  min-width: 100%;\n  min-height: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.item_details {\n  padding: 15px 13px 18px 13px;\n}\n.item_details h2 {\n  margin: 0;\n  font-weight: 600;\n  color: var(--text-black);\n  font-size: 1.52rem;\n  padding-bottom: 2px;\n}\n.item_details h3 {\n  margin: 0;\n  color: var(--text-dark-primary);\n  font-size: 0.9rem;\n  font-weight: 500;\n  letter-spacing: 0.6px;\n  padding-bottom: 10px;\n}\n.item_details h3 ion-badge {\n  background: var(--secondary);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50px;\n  font-weight: 400;\n  font-size: 0.9rem;\n  min-width: 52px;\n  height: 23px;\n  line-height: 23px;\n}\n.item_details h3 ion-badge ion-icon {\n  font-size: 0.75rem;\n  position: relative;\n  top: 1px;\n}\n.item_details h4 {\n  margin: 0;\n  font-size: 1.3rem;\n  padding-bottom: 17px;\n}\n.item_details h4 span {\n  color: var(--text-light);\n  font-size: 0.9rem;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.item_details h4 span ion-icon {\n  font-size: 1.5rem;\n  width: 17px;\n  min-width: 17px;\n}\n.item_details p {\n  margin: 0;\n  color: var(--text-dark-primary);\n  font-weight: 500;\n  font-size: 0.95rem;\n  letter-spacing: 0.3px;\n  line-height: 21px;\n  padding-bottom: 10px;\n}\n.button.btn {\n  height: 55px;\n}\n.button.btn ion-icon {\n  font-size: 1.3rem;\n  min-width: 35px;\n}\n.more_by_seller {\n  padding-top: 23px;\n}\n.more_by_seller h2 {\n  margin: 0;\n  padding: 0 16px 17px;\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n.more_by_seller h2 span {\n  color: var(--text-light);\n  text-transform: uppercase;\n  font-size: 1.1rem;\n  font-weight: 400;\n  letter-spacing: 1px;\n}\n.more_by_seller .items_row {\n  width: 100%;\n  white-space: nowrap;\n  overflow-x: auto;\n  padding: 0px 0 10px 0;\n}\n.more_by_seller .items_row .item {\n  display: inline-block;\n  margin: 0 6px;\n  overflow: hidden;\n  width: 147px;\n}\n.more_by_seller .items_row .item .item_img {\n  width: 147px;\n  height: 147px;\n  border-radius: 8px;\n}\n.more_by_seller .items_row .item .item_details {\n  padding: 0;\n  padding-top: 12px;\n  width: 100%;\n  overflow: hidden;\n}\n.more_by_seller .items_row .item .item_details h3 {\n  margin: 0;\n  color: var(--text-dark-primary);\n  font-size: 0.9rem;\n  font-weight: 500;\n  padding-bottom: 3px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.more_by_seller .items_row .item .item_details h4 {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 400;\n  font-size: 0.7rem;\n  padding-bottom: 8px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.more_by_seller .items_row .item .item_details h5 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-black);\n}\n.more_by_seller .items_row .item .item_details h5 ion-badge {\n  background: var(--secondary);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50px;\n  font-weight: 400;\n  font-size: 0.7rem;\n  min-width: 41px;\n  height: 18px;\n  line-height: 18px;\n}\n.more_by_seller .items_row .item .item_details h5 ion-badge ion-icon {\n  font-size: 0.6rem;\n  position: relative;\n  top: 1px;\n}\n.more_by_seller .items_row .item:first-child {\n  margin-left: 14px;\n}\n.more_by_seller .items_row .item:last-child {\n  margin-right: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC1ob3VyL2l0ZW0tZGV0YWlsL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxzaG9wLWhvdXJcXGl0ZW0tZGV0YWlsXFxpdGVtLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3AtaG91ci9pdGVtLWRldGFpbC9pdGVtLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBQ0ksNkJBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ1I7QURFWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUNBaEI7QURHWTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRGhCO0FESW9CO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDRnhCO0FET29CO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTHhCO0FET3dCO0VBQ0ksNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNMNUI7QURRd0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ041QjtBRGVBO0VBQ0ksa0JBQUE7QUNaSjtBRGNJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFB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O0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUM3Q3hCO0FEK0N3QjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDN0M1QjtBRG1EWTtFQUNJLGlCQUFBO0FDakRoQjtBRG9EWTtFQUNJLGtCQUFBO0FDbERoQiIsImZpbGUiOiJzcmMvYXBwL3Nob3AtaG91ci9pdGVtLWRldGFpbC9pdGVtLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG5cbiAgICBpb24tdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuXG4gICAgICAgIC50aXRsZV9pbm5lciB7XG4gICAgICAgICAgICAuY2VudGVyX3RpdGxlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjhweDtcblxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgJi56bWRpLWZhdm9yaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNDFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgJi5jYXJ0X2ljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWRfY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJhbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgaDMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdG9wOiA4MHB4O1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgcmlnaHQ6IDE4cHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAgICAgICAmLnptZGktZmF2b3JpdGUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgJi56bWRpLWZhdm9yaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLnptZGktZmF2b3JpdGUtb3V0bGluZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLXNsaWRlcyB7XG4gICAgICAgIGlvbi1zbGlkZSB7XG4gICAgICAgICAgICAuaW1nX2JveCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDBweCA3cHggN3B4O1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAvLyBtYXgtaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiB1bnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pdGVtX2RldGFpbHMge1xuICAgIHBhZGRpbmc6IDE1cHggMTNweCAxOHB4IDEzcHg7XG5cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICBmb250LXNpemU6IDEuNTJyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA1MnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaDQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTdweDtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcblxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxufVxuXG4uYnV0dG9uLmJ0biB7XG4gICAgaGVpZ2h0OiA1NXB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgbWluLXdpZHRoOiAzNXB4O1xuICAgIH1cbn1cblxuLm1vcmVfYnlfc2VsbGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMjNweDtcblxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHggMTdweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtc19yb3cge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xuXG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCA2cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2lkdGg6IDE0N3B4O1xuXG4gICAgICAgICAgICAuaXRlbV9pbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNDdweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0N3B4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLml0ZW1fZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG5cbiAgICAgICAgICAgICAgICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciAuY2VudGVyX3RpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNjhweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBoMyBpb24taWNvbi56bWRpLWZhdm9yaXRlIHtcbiAgbWluLXdpZHRoOiA0MXB4O1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBoMyBzcGFuLmNhcnRfaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAyN3B4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDMgc3Bhbi5jYXJ0X2ljb24gaW9uLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkX2NvbG9yKTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxN3B4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDlweDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDMgc3Bhbi5jYXJ0X2ljb24gaW9uLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTZweDtcbiAgZm9udC1zaXplOiAxLjdyZW07XG59XG5cbi5iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmFubmVyIGgzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDA7XG4gIHRvcDogODBweDtcbiAgei1pbmRleDogOTk7XG4gIHJpZ2h0OiAxOHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmFubmVyIGgzIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmJhbm5lciBoMyBpb24taWNvbi56bWRpLWZhdm9yaXRlIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuLmJhbm5lciBoMy5hY3RpdmUgaW9uLWljb24uem1kaS1mYXZvcml0ZSB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG59XG4uYmFubmVyIGgzLmFjdGl2ZSBpb24taWNvbi56bWRpLWZhdm9yaXRlLW91dGxpbmUge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuLmJhbm5lciBpb24tc2xpZGVzIGlvbi1zbGlkZSAuaW1nX2JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDBweCA3cHggN3B4O1xufVxuLmJhbm5lciBpb24tc2xpZGVzIGlvbi1zbGlkZSAuaW1nX2JveCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5pdGVtX2RldGFpbHMge1xuICBwYWRkaW5nOiAxNXB4IDEzcHggMThweCAxM3B4O1xufVxuLml0ZW1fZGV0YWlscyBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXNpemU6IDEuNTJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4uaXRlbV9kZXRhaWxzIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLXByaW1hcnkpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5pdGVtX2RldGFpbHMgaDMgaW9uLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWluLXdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDIzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xufVxuLml0ZW1fZGV0YWlscyBoMyBpb24tYmFkZ2UgaW9uLWljb24ge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcHg7XG59XG4uaXRlbV9kZXRhaWxzIGg0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDE3cHg7XG59XG4uaXRlbV9kZXRhaWxzIGg0IHNwYW4ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xufVxuLml0ZW1fZGV0YWlscyBoNCBzcGFuIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHdpZHRoOiAxN3B4O1xuICBtaW4td2lkdGg6IDE3cHg7XG59XG4uaXRlbV9kZXRhaWxzIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5idXR0b24uYnRuIHtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuLmJ1dHRvbi5idG4gaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWluLXdpZHRoOiAzNXB4O1xufVxuXG4ubW9yZV9ieV9zZWxsZXIge1xuICBwYWRkaW5nLXRvcDogMjNweDtcbn1cbi5tb3JlX2J5X3NlbGxlciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAxNnB4IDE3cHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLm1vcmVfYnlfc2VsbGVyIGgyIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLm1vcmVfYnlfc2VsbGVyIC5pdGVtc19yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xufVxuLm1vcmVfYnlfc2VsbGVyIC5pdGVtc19yb3cgLml0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxNDdweDtcbn1cbi5tb3JlX2J5X3NlbGxlciAuaXRlbXNfcm93IC5pdGVtIC5pdGVtX2ltZyB7XG4gIHdpZHRoOiAxNDdweDtcbiAgaGVpZ2h0OiAxNDdweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLm1vcmVfYnlfc2VsbGVyIC5pdGVtc19yb3cgLml0ZW0gLml0ZW1fZGV0YWlscyB7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tb3JlX2J5X3NlbGxlciAuaXRlbXNfcm93IC5pdGVtIC5pdGVtX2RldGFpbHMgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tb3JlX2J5X3NlbGxlciAuaXRlbXNfcm93IC5pdGVtIC5pdGVtX2RldGFpbHMgaDQge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1vcmVfYnlfc2VsbGVyIC5pdGVtc19yb3cgLml0ZW0gLml0ZW1fZGV0YWlscyBoNSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbn1cbi5tb3JlX2J5X3NlbGxlciAuaXRlbXNfcm93IC5pdGVtIC5pdGVtX2RldGFpbHMgaDUgaW9uLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgbWluLXdpZHRoOiA0MXB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLm1vcmVfYnlfc2VsbGVyIC5pdGVtc19yb3cgLml0ZW0gLml0ZW1fZGV0YWlscyBoNSBpb24tYmFkZ2UgaW9uLWljb24ge1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbn1cbi5tb3JlX2J5X3NlbGxlciAuaXRlbXNfcm93IC5pdGVtOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG4ubW9yZV9ieV9zZWxsZXIgLml0ZW1zX3JvdyAuaXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shop-hour/item-detail/item-detail.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/shop-hour/item-detail/item-detail.page.ts ***!
  \***********************************************************/
/*! exports provided: ItemDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailPage", function() { return ItemDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_models_category_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/category.models */ "./src/models/category.models.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_models_product_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/product.models */ "./src/models/product.models.ts");
/* harmony import */ var src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/constants.models */ "./src/models/constants.models.ts");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");
/* harmony import */ var src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/shoup-hour-services/common/ui-elements.service */ "./src/app/services/shoup-hour-services/common/ui-elements.service.ts");
/* harmony import */ var src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/shoup-hour-services/network/api.service */ "./src/app/services/shoup-hour-services/network/api.service.ts");
/* harmony import */ var src_app_services_shoup_hour_services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/shoup-hour-services/common/ecommerce.service */ "./src/app/services/shoup-hour-services/common/ecommerce.service.ts");












let ItemDetailPage = class ItemDetailPage {
    constructor(route, navCtrl, translate, uiElementService, apiService, eComService) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.eComService = eComService;
        this.subscriptions = new Array();
        this.similarProducts = new Array();
        this.product = new src_models_product_models__WEBPACK_IMPORTED_MODULE_6__["Product"]();
        this.category = new src_models_category_models__WEBPACK_IMPORTED_MODULE_3__["Category"]();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            let product_id = params["product_id"];
            this.translate.get(["loading", "something_wrong"]).subscribe(values => {
                this.uiElementService.presentLoading(values["loading"]);
                this.subscriptions.push(this.apiService.getProductsWithId(product_id).subscribe(res => {
                    this.product = res;
                    this.category = this.product.categories[0];
                    this.loadProductsSimilar();
                }, err => {
                    console.log("getProductsWithId", err);
                    this.uiElementService.dismissLoading();
                    this.uiElementService.presentErrorAlert(values["something_wrong"]);
                    this.navCtrl.pop();
                }));
            });
        });
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    ionViewDidEnter() {
        this.cartCount = this.eComService.getCartItemsCount();
    }
    loadProductsSimilar() {
        if (this.product && this.product.vendor_products && this.product.vendor_products.length == 1) {
            this.subscriptions.push(this.apiService.getProductsWithVendorId(this.product.vendor_products[0].vendor_id, 1).subscribe(res => this.similarsRes(res), err => this.similarsErr(err)));
        }
        else {
            this.subscriptions.push(this.apiService.getProductsWithCategoryId(src_models_constants_models__WEBPACK_IMPORTED_MODULE_7__["Constants"].SCOPE_ECOMMERCE, this.category.id, null, 1).subscribe(res => this.similarsRes(res), err => this.similarsErr(err)));
        }
    }
    similarsRes(prosRes) {
        let index = -1;
        for (let i = 0; i < prosRes.data.length; i++) {
            if (prosRes.data[i].id == this.product.id) {
                index = i;
                break;
            }
        }
        if (index != -1)
            prosRes.data.splice(index, 1);
        this.similarProducts = prosRes.data;
        // this.doneAll = (!res.data || !res.data.length);
        // if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
        // this.isLoding = false;
        this.uiElementService.dismissLoading();
    }
    similarsErr(proError) {
        console.log("similarsErr", proError);
        this.uiElementService.dismissLoading();
    }
    addProCart(pro) {
        let added = this.eComService.addOrIncrementCartItem(this.eComService.getCartItemFromProduct(pro == null ? this.product : pro));
        if (added)
            this.cartCount = this.eComService.getCartItemsCount();
        else
            this.translate.get("incremented_cart").subscribe(value => this.uiElementService.presentToast(value));
        this.cart();
    }
    toggleFavorite() {
        if (src_models_helper_models__WEBPACK_IMPORTED_MODULE_8__["Helper"].getLoggedInUser() != null) {
            this.translate.get("just_moment").subscribe(value => {
                this.uiElementService.presentLoading(value);
                this.subscriptions.push(this.apiService.toggleProductFavorite(this.product.id).subscribe(res => {
                    this.product.is_favourite = !this.product.is_favourite;
                    this.uiElementService.dismissLoading();
                }, err => {
                    console.log("toggleProductFavorite", err);
                    this.uiElementService.dismissLoading();
                }));
            });
        }
        else {
            this.alertLogin();
        }
    }
    navProDetail(pro) {
        let navigationExtras = { queryParams: { product_id: pro.id } };
        this.navCtrl.navigateForward(['tabs/main-home/shop-hour/item-detail'], navigationExtras);
    }
    cart() {
        this.navCtrl.navigateForward(['tabs/main-home/shop-hour/cart']);
    }
    navReviews() {
        let navigationExtras = { state: { product: this.product } };
        this.navCtrl.navigateForward(['tabs/main-home/shop-hour/reviews'], navigationExtras);
    }
    navSimilarsAll() {
        let navigationExtras = { state: { category: this.product.categories[0], vendors: this.product.vendor_products } };
        this.navCtrl.navigateForward(['tabs/main-home/shop-hour/seller-info'], navigationExtras);
    }
    alertLogin() {
        this.translate.get("alert_login_short").subscribe(value => this.uiElementService.presentToast(value));
        this.navCtrl.navigateForward(['sign-in']);
    }
};
ItemDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_9__["UiElementsService"] },
    { type: src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiServiceShopHour"] },
    { type: src_app_services_shoup_hour_services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_11__["ECommerceService"] }
];
ItemDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/item-detail/item-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-detail.page.scss */ "./src/app/shop-hour/item-detail/item-detail.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_9__["UiElementsService"], src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiServiceShopHour"], src_app_services_shoup_hour_services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_11__["ECommerceService"]])
], ItemDetailPage);



/***/ })

}]);
//# sourceMappingURL=item-detail-item-detail-module-es2015.js.map