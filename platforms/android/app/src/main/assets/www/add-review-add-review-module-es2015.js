(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-review-add-review-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/add-review/add-review.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/add-review/add-review.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"bg_transparent\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            {{'add_review' | translate}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <div class=\"banner\">\n        <div class=\"img_box center_img\">\n            <img [src]=\"product.images[0]\" class=\"crop_img\">\n        </div>\n        <div class=\"text_box ion-text-center\">\n            <h2>{{product.title}}</h2>\n            <!-- <h3>{{product.detail}}</h3> -->\n        </div>\n    </div>\n\n    <div class=\"give_rating ion-text-center\">\n        <h2>{{'how_was_your_experience' | translate}}?</h2>\n        <div class=\"icon_box\">\n\n            <span [ngClass]=\"rateRequest.rating>=1 ? 'icon_box active' : 'icon_box' \" (click)=\"setRating(1)\">\n                <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n            </span>\n            <span [ngClass]=\"rateRequest.rating>=2 ? 'icon_box active' : 'icon_box' \" (click)=\"setRating(2)\">\n                <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n            </span>\n            <span [ngClass]=\"rateRequest.rating>=3 ? 'icon_box active' : 'icon_box' \" (click)=\"setRating(3)\">\n                <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n            </span>\n            <span [ngClass]=\"rateRequest.rating>=4 ? 'icon_box active' : 'icon_box' \" (click)=\"setRating(4)\">\n                <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n            </span>\n            <span [ngClass]=\"rateRequest.rating>=5 ? 'icon_box active' : 'icon_box' \" (click)=\"setRating(5)\">\n                <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n            </span>\n        </div>\n    </div>\n\n    <div class=\"form\">\n        <ion-list lines=\"none\">\n            <ion-item lines=\"none\">\n                <ion-label mode=\"md\" position=\"stacked\">{{\"write_your_feedback\" | translate}}</ion-label>\n                <ion-textarea rows=\"2\" mode=\"md\" type=\"text\" [(ngModel)]=\"rateRequest.review\" maxlength=\"140\" placeholder=\"{{'enter_your_review' | translate}}\">\n                </ion-textarea>\n            </ion-item>\n        </ion-list>\n    </div>\n    <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"submitRating()\">\n        {{'submit' | translate}}\n    </ion-button>\n</ion-content>\n<!--\n<ion-footer class=\"ion-no-border\">\n\n</ion-footer>-->\n");

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

/***/ "./src/app/shop-hour/add-review/add-review-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shop-hour/add-review/add-review-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddReviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPageRoutingModule", function() { return AddReviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_review_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-review.page */ "./src/app/shop-hour/add-review/add-review.page.ts");




const routes = [
    {
        path: '',
        component: _add_review_page__WEBPACK_IMPORTED_MODULE_3__["AddReviewPage"]
    }
];
let AddReviewPageRoutingModule = class AddReviewPageRoutingModule {
};
AddReviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddReviewPageRoutingModule);



/***/ }),

/***/ "./src/app/shop-hour/add-review/add-review.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shop-hour/add-review/add-review.module.ts ***!
  \***********************************************************/
/*! exports provided: AddReviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPageModule", function() { return AddReviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_review_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-review-routing.module */ "./src/app/shop-hour/add-review/add-review-routing.module.ts");
/* harmony import */ var _add_review_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-review.page */ "./src/app/shop-hour/add-review/add-review.page.ts");








let AddReviewPageModule = class AddReviewPageModule {
};
AddReviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _add_review_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddReviewPageRoutingModule"]
        ],
        declarations: [_add_review_page__WEBPACK_IMPORTED_MODULE_7__["AddReviewPage"]]
    })
], AddReviewPageModule);



/***/ }),

/***/ "./src/app/shop-hour/add-review/add-review.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/shop-hour/add-review/add-review.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: var(--primary) !important;\n}\nion-header ion-toolbar ion-buttons ion-back-button {\n  --color: var(--white) !important;\n}\nion-header ion-toolbar ion-title {\n  color: var(--white);\n  color: var(--white);\n  font-weight: 500;\n  font-size: 1.3rem;\n}\n.banner {\n  position: relative;\n  z-index: 99;\n  padding: 0 20px;\n  padding-top: 22px;\n}\n.banner::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 120px);\n  background: var(--primary);\n  display: block;\n}\n.banner .img_box {\n  width: 115px;\n  height: 115px;\n  border-radius: 10px;\n  margin: 0 auto;\n}\n.banner .text_box {\n  padding-top: 15px;\n}\n.banner .text_box h2 {\n  margin: 0;\n  color: var(--text-dark-secondary);\n  font-size: 1.15rem;\n  padding-bottom: 9px;\n}\n.banner .text_box h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 400;\n  font-size: 0.9rem;\n  letter-spacing: 0.5px;\n}\n.give_rating {\n  border-bottom: 5px solid var(--bg-color);\n  padding-top: 39px;\n  padding-bottom: 20px;\n}\n.give_rating h2 {\n  margin: 0;\n  color: var(--text-light);\n  text-transform: uppercase;\n  font-size: 1rem;\n  letter-spacing: 1px;\n  font-weight: 500;\n  padding-bottom: 17px;\n}\n.give_rating .icon_box {\n  display: flex;\n  align-items: center;\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.give_rating .icon_box .icon_box ion-icon {\n  color: #E0E0DD;\n  font-size: 2.2rem;\n}\n.give_rating .icon_box .icon_box.active ion-icon {\n  color: var(--yelow_color);\n}\n.form {\n  padding-top: 26px;\n  padding-bottom: 31px;\n}\n.form ion-list ion-item {\n  margin-bottom: 16px;\n}\n.form ion-list ion-item ion-label {\n  font-weight: 400;\n  font-size: 1.35rem !important;\n  margin-bottom: 19px !important;\n}\n.form ion-list ion-item ion-input {\n  font-weight: 500 !important;\n  letter-spacing: 0;\n}\n.form ion-list ion-item ion-textarea {\n  margin-top: 0;\n  font-weight: 400 !important;\n  letter-spacing: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC1ob3VyL2FkZC1yZXZpZXcvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktY3VzdG9tZXIvc3JjXFxhcHBcXHNob3AtaG91clxcYWRkLXJldmlld1xcYWRkLXJldmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3AtaG91ci9hZGQtcmV2aWV3L2FkZC1yZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksdUNBQUE7QUNBUjtBREVRO0VBQ0ksZ0NBQUE7QUNBWjtBREdRO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNEWjtBRE1BO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSEo7QURLSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDSFI7QURNSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDSlI7QURPSTtFQUNJLGlCQUFBO0FDTFI7QURPUTtFQUNJLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNMWjtBRFFRO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDTlo7QURXQTtFQUNJLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ1JKO0FEVUk7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNSUjtBRFdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ1RSO0FEWVk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNWaEI7QURlZ0I7RUFDSSx5QkFBQTtBQ2JwQjtBRHNCQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUNuQko7QURxQlE7RUFDSSxtQkFBQTtBQ25CWjtBRHFCWTtFQUNJLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQ25CaEI7QURzQlk7RUFDSSwyQkFBQTtFQUNBLGlCQUFBO0FDcEJoQjtBRHVCWTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDckJoQiIsImZpbGUiOiJzcmMvYXBwL3Nob3AtaG91ci9hZGQtcmV2aWV3L2FkZC1yZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgaW9uLWJ1dHRvbnMgaW9uLWJhY2stYnV0dG9uIHtcbiAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLXRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYmFubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogOTk7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMnB4O1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMjBweCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuaW1nX2JveCB7XG4gICAgICAgIHdpZHRoOiAxMTVweDtcbiAgICAgICAgaGVpZ2h0OiAxMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgLnRleHRfYm94IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyay1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDlweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5naXZlX3JhdGluZyB7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWJnLWNvbG9yKTtcbiAgICBwYWRkaW5nLXRvcDogMzlweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcblxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE3cHg7XG4gICAgfVxuXG4gICAgLmljb25fYm94IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgICAgICAgLmljb25fYm94IHtcbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0UwRTBERDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teWVsb3dfY29sb3IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbi5mb3JtIHtcbiAgICBwYWRkaW5nLXRvcDogMjZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzFweDtcbiAgICBpb24tbGlzdCB7XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMzVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJhY2stYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uYmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjJweDtcbn1cbi5iYW5uZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMjBweCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5iYW5uZXIgLmltZ19ib3gge1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmJhbm5lciAudGV4dF9ib3gge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5iYW5uZXIgLnRleHRfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDlweDtcbn1cbi5iYW5uZXIgLnRleHRfYm94IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5naXZlX3JhdGluZyB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1iZy1jb2xvcik7XG4gIHBhZGRpbmctdG9wOiAzOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5naXZlX3JhdGluZyBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiAxN3B4O1xufVxuLmdpdmVfcmF0aW5nIC5pY29uX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmdpdmVfcmF0aW5nIC5pY29uX2JveCAuaWNvbl9ib3ggaW9uLWljb24ge1xuICBjb2xvcjogI0UwRTBERDtcbiAgZm9udC1zaXplOiAyLjJyZW07XG59XG4uZ2l2ZV9yYXRpbmcgLmljb25fYm94IC5pY29uX2JveC5hY3RpdmUgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0teWVsb3dfY29sb3IpO1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAyNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzFweDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMS4zNXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxOXB4ICFpbXBvcnRhbnQ7XG59XG4uZm9ybSBpb24tbGlzdCBpb24taXRlbSBpb24taW5wdXQge1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXRleHRhcmVhIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shop-hour/add-review/add-review.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/shop-hour/add-review/add-review.page.ts ***!
  \*********************************************************/
/*! exports provided: AddReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPage", function() { return AddReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_models_models_shop_hour_rate_request_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/models-shop-hour/rate-request.models */ "./src/models/models-shop-hour/rate-request.models.ts");
/* harmony import */ var src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/models-shop-hour/helper.models */ "./src/models/models-shop-hour/helper.models.ts");
/* harmony import */ var src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/shoup-hour-services/common/ui-elements.service */ "./src/app/services/shoup-hour-services/common/ui-elements.service.ts");
/* harmony import */ var src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/shoup-hour-services/network/api.service */ "./src/app/services/shoup-hour-services/network/api.service.ts");









let AddReviewPage = class AddReviewPage {
    constructor(router, navCtrl, translate, uiElementService, apiService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.rateRequest = new src_models_models_shop_hour_rate_request_models__WEBPACK_IMPORTED_MODULE_5__["RateRequest"]();
        console.log("getCurrentNavigation", this.router.getCurrentNavigation().extras.state);
        if (this.router.getCurrentNavigation().extras.state) {
            this.product = this.router.getCurrentNavigation().extras.state.product;
            this.order_id = String(this.router.getCurrentNavigation().extras.state.order_id);
            this.rateRequest.rating = 3;
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
                this.subscriptions.push(this.apiService.postReviewProduct(this.product.id, this.rateRequest).subscribe(res => {
                    console.log("postReviewProduct", res);
                    src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].addReviewedProductId(String(this.order_id + String(this.product.id)));
                    this.uiElementService.dismissLoading();
                    this.translate.get("review_done").subscribe(value => this.uiElementService.presentToast(value));
                    this.navCtrl.navigateRoot(['tabs/main-home/shop-hour/home']);
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
AddReviewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_7__["UiElementsService"] },
    { type: src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] }
];
AddReviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-review',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-review.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/add-review/add-review.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-review.page.scss */ "./src/app/shop-hour/add-review/add-review.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        src_app_services_shoup_hour_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_7__["UiElementsService"], src_app_services_shoup_hour_services_network_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]])
], AddReviewPage);



/***/ }),

/***/ "./src/models/models-shop-hour/rate-request.models.ts":
/*!************************************************************!*\
  !*** ./src/models/models-shop-hour/rate-request.models.ts ***!
  \************************************************************/
/*! exports provided: RateRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateRequest", function() { return RateRequest; });
class RateRequest {
}


/***/ })

}]);
//# sourceMappingURL=add-review-add-review-module-es2015.js.map