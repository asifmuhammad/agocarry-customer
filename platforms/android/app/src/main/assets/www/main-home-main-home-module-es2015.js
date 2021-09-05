(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-home-main-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-home/main-home.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-home/main-home.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-item class=\"item-cls\" lines=\"none\">\r\n    <img  height=\"50\" src=\"../../assets/images/Agocarry logo.png\">\r\n    <ion-button color=\"light\" fill=\"outline\"  class=\"ion-button\" slot=\"end\">\r\n      <ion-icon class=\"ion-search\" name=\"search-outline\"></ion-icon>\r\n    </ion-button>\r\n</ion-item>\r\n<br/>\r\n<ion-item lines=\"none\">\r\n  <ion-label class=\"text\">Hi, Robert Fox\r\n    <span class=\"amount\">$1255</span>\r\n    <br/><ion-note slot=\"start\" class=\"availaible\">Your avalaible balance</ion-note> \r\n  </ion-label>\r\n</ion-item>\r\n<br/>\r\n<ion-item class=\"discount\" lines=\"none\" >\r\n  <ion-label class=\"text\">Promo & Discount\r\n    <span class=\"seemore\">  See More</span> \r\n    </ion-label>\r\n</ion-item>\r\n\r\n<ion-item lines=\"none\">\r\n  <ion-slides scrollX=\"true\" style=\"width: 100%\" [options]=\"slideOpts\">\r\n    <ng-container\r\n      \r\n    >\r\n      <ion-slide>\r\n          \r\n        <img class=\"img2\" src=\"../../assets/images/banner1.jpg\" />\r\n      </ion-slide>\r\n\r\n      <ion-slide>\r\n        \r\n            \r\n        <img class=\"img2\" src=\"../../assets/images/banner2.jpg\" />\r\n\r\n      </ion-slide>\r\n    </ng-container>\r\n  </ion-slides>\r\n  <br />\r\n</ion-item>\r\n<ion-item lines=\"none\"><ion-label class=\"text\"> Our Services </ion-label></ion-item>\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col size=\"3\">\r\n      <ion-button color=\"secondary\"   class=\"ion-button\" >\r\n        <img class=\"img2\" src=\"../../assets/images/fast-delivery 1.png\" />\r\n      </ion-button>\r\n      <ion-label class=\"t-lable\"> Delivery</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n      <ion-button color=\"secondary\"   class=\"ion-button-delivery\"   >\r\n        <img class=\"img2\" src=\"../../assets/images/ride.png\" />\r\n      </ion-button>\r\n      <ion-label class=\"text-lable\"> Ride</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n      <ion-button color=\"secondary\"   class=\"ion-button-food\" >\r\n        <img class=\"img2\" src=\"../../assets/images/fast-food 1.png\" />\r\n      </ion-button>\r\n      <ion-label class=\"text-lable\"> Food</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n      <ion-button color=\"secondary\"   class=\"ion-button-pharmacy\" >\r\n        <img class=\"img2\" src=\"../../assets/images/pharmacy.png\" />\r\n      </ion-button>\r\n      <ion-label > Pharmacy</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"3\" (click)=\"navigateToShophour()\">\r\n      <ion-button color=\"secondary\"   class=\"ion-button-shopping\" >\r\n        <img class=\"img2\" src=\"../../assets/images/shopping.png\" />\r\n      </ion-button>\r\n      <ion-label > Shopping</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n      <ion-button color=\"secondary\"   class=\"ion-button-more\" >\r\n        <img class=\"img2\" src=\"../../assets/images/more.png\" />\r\n      </ion-button>\r\n      <ion-label class=\"text-lable\"> More</ion-label>\r\n    </ion-col>\r\n    \r\n  </ion-row>\r\n</ion-grid>\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/main-home/main-home-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/main-home/main-home-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MainHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHomePageRoutingModule", function() { return MainHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-home.page */ "./src/app/main-home/main-home.page.ts");




const routes = [
    {
        path: '',
        component: _main_home_page__WEBPACK_IMPORTED_MODULE_3__["MainHomePage"]
    },
    {
        path: 'shop-hour',
        loadChildren: () => Promise.all(/*! import() | shop-hour-shop-hour-module */[__webpack_require__.e("default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469"), __webpack_require__.e("common"), __webpack_require__.e("shop-hour-shop-hour-module")]).then(__webpack_require__.bind(null, /*! ../shop-hour/shop-hour.module */ "./src/app/shop-hour/shop-hour.module.ts")).then(m => m.ShopHourPageModule)
    }
];
let MainHomePageRoutingModule = class MainHomePageRoutingModule {
};
MainHomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MainHomePageRoutingModule);



/***/ }),

/***/ "./src/app/main-home/main-home.module.ts":
/*!***********************************************!*\
  !*** ./src/app/main-home/main-home.module.ts ***!
  \***********************************************/
/*! exports provided: MainHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHomePageModule", function() { return MainHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _main_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-home-routing.module */ "./src/app/main-home/main-home-routing.module.ts");
/* harmony import */ var _main_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-home.page */ "./src/app/main-home/main-home.page.ts");







let MainHomePageModule = class MainHomePageModule {
};
MainHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _main_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainHomePageRoutingModule"]
        ],
        declarations: [_main_home_page__WEBPACK_IMPORTED_MODULE_6__["MainHomePage"]]
    })
], MainHomePageModule);



/***/ }),

/***/ "./src/app/main-home/main-home.page.scss":
/*!***********************************************!*\
  !*** ./src/app/main-home/main-home.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-cls {\n  margin-top: 40px;\n}\n\n.ion-button {\n  height: 60px;\n  width: 60px;\n  --border-radius: 10px;\n  --background: white;\n  --ion-color-base: #009de04d !important;\n}\n\n.ion-search {\n  font-size: 40px;\n}\n\n.text {\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.availaible {\n  font-size: 23px;\n  font-weight: initial;\n}\n\n.amount {\n  float: right;\n  padding-top: 11px;\n  color: #fd6309;\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.discount {\n  font-size: 25px;\n}\n\n.seemore {\n  font-size: 17px;\n  padding-left: 9px;\n  color: #4bbd4b;\n  float: right;\n}\n\n.img2 {\n  border-radius: 15px;\n}\n\nion-slide {\n  padding: 10px;\n}\n\n.ion-button-delivery {\n  height: 60px;\n  width: 60px;\n  --border-radius: 10px;\n  --background: white;\n  --ion-color-base: #5140e04d !important;\n}\n\n.ion-ride {\n  font-size: 40px;\n  color: purple;\n}\n\n.ion-button-food {\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #f1d7d1a8 !important;\n}\n\n.ion-food {\n  font-size: 40px;\n  color: #e4de43;\n}\n\n.ion-button-pharmacy {\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #f79a85a8 !important;\n}\n\n.ion-pharmacy {\n  font-size: 40px;\n  color: #e62a2a;\n}\n\n.ion-button-shopping {\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #94a3b8a8 !important;\n}\n\n.ion-shopping {\n  font-size: 40px;\n  color: #40375f;\n}\n\n.ion-button-more {\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #a2d1aaa8 !important;\n}\n\n.ion-more {\n  font-size: 40px;\n  color: #245c2b;\n}\n\n.text-lable {\n  position: relative;\n  left: 13px;\n}\n\n.t-lable {\n  position: relative;\n  left: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1ob21lL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxtYWluLWhvbWVcXG1haW4taG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21haW4taG9tZS9tYWluLWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0FDRUo7O0FEQUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QURERTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ0lKOztBREZFO0VBQ0UsWUFBQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0tOOztBREhFO0VBQ0UsZUFBQTtBQ01KOztBREpFO0VBQ0UsZUFBQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNPTjs7QURKRTtFQUNFLG1CQUFBO0FDT0o7O0FETEU7RUFDRSxhQUFBO0FDUUo7O0FETkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQ1NKOztBRE5FO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUNTSjs7QURQRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7QUNVSjs7QURSRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDV0o7O0FEVEk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0FDWU47O0FEVkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ2FOOztBRFhNO0VBQ0UsWUFBQTtFQUNGLFdBQUE7RUFDRSxzQ0FBQTtBQ2NSOztBRFpNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNlUjs7QURiUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7QUNnQlY7O0FEZFE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ2lCVjs7QURoQlU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNtQlo7O0FEakJVO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDb0JaIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1ob21lL21haW4taG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1jbHN7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAuaW9uLWJ1dHRvbntcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwMDlkZTA0ZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaW9uLXNlYXJjaHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICB9XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmF2YWlsYWlibGV7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBmb250LXdlaWdodDogaW5pdGlhbDtcclxuICB9XHJcbiAgLmFtb3VudHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgcGFkZGluZy10b3A6IDExcHg7XHJcbiAgICAgIGNvbG9yOiAjZmQ2MzA5O1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuZGlzY291bnR7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG4gIC5zZWVtb3Jle1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDlweDtcclxuICAgICAgY29sb3I6IHJnYig3NSwgMTg5LCA3NSk7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICBcclxuICB9XHJcbiAgLmltZzIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweFxyXG4gIH1cclxuICBpb24tc2xpZGV7XHJcbiAgICBwYWRkaW5nOjEwcHhcclxuICB9XHJcbiAgLmlvbi1idXR0b24tZGVsaXZlcnl7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjNTE0MGUwNGQgIWltcG9ydGFudDtcclxuICBcclxuICB9XHJcbiAgLmlvbi1yaWRle1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6IHB1cnBsZTtcclxuICB9XHJcbiAgLmlvbi1idXR0b24tZm9vZHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogI2YxZDdkMWE4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pb24tZm9vZHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiByZ2IoMjI4LCAyMjIsIDY3KTt9XHJcbiAgXHJcbiAgICAuaW9uLWJ1dHRvbi1waGFybWFjeXtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgLS1pb24tY29sb3ItYmFzZTogI2Y3OWE4NWE4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaW9uLXBoYXJtYWN5e1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjMwLCA0MiwgNDIpO31cclxuICBcclxuICAgICAgLmlvbi1idXR0b24tc2hvcHBpbmd7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiAjOTRhM2I4YTggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAuaW9uLXNob3BwaW5ne1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBjb2xvcjogcmdiKDY0LCA1NSwgOTUpO31cclxuICBcclxuICAgICAgICAuaW9uLWJ1dHRvbi1tb3Jle1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiAjYTJkMWFhYTggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlvbi1tb3Jle1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYigzNiwgOTIsIDQzKTt9XHJcbiAgICAgICAgICAudGV4dC1sYWJsZXtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBsZWZ0OiAxM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnQtbGFibGV7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbGVmdDogM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIiwiLml0ZW0tY2xzIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICMwMDlkZTA0ZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXNlYXJjaCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYXZhaWxhaWJsZSB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XG59XG5cbi5hbW91bnQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICBjb2xvcjogI2ZkNjMwOTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRpc2NvdW50IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uc2VlbW9yZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgcGFkZGluZy1sZWZ0OiA5cHg7XG4gIGNvbG9yOiAjNGJiZDRiO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5pbWcyIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuaW9uLXNsaWRlIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmlvbi1idXR0b24tZGVsaXZlcnkge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICM1MTQwZTA0ZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXJpZGUge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiBwdXJwbGU7XG59XG5cbi5pb24tYnV0dG9uLWZvb2Qge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWlvbi1jb2xvci1iYXNlOiAjZjFkN2QxYTggIWltcG9ydGFudDtcbn1cblxuLmlvbi1mb29kIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogI2U0ZGU0Mztcbn1cblxuLmlvbi1idXR0b24tcGhhcm1hY3kge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWlvbi1jb2xvci1iYXNlOiAjZjc5YTg1YTggIWltcG9ydGFudDtcbn1cblxuLmlvbi1waGFybWFjeSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICNlNjJhMmE7XG59XG5cbi5pb24tYnV0dG9uLXNob3BwaW5nIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgLS1pb24tY29sb3ItYmFzZTogIzk0YTNiOGE4ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tc2hvcHBpbmcge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjNDAzNzVmO1xufVxuXG4uaW9uLWJ1dHRvbi1tb3JlIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgLS1pb24tY29sb3ItYmFzZTogI2EyZDFhYWE4ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tbW9yZSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICMyNDVjMmI7XG59XG5cbi50ZXh0LWxhYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxM3B4O1xufVxuXG4udC1sYWJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogM3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/main-home/main-home.page.ts":
/*!*********************************************!*\
  !*** ./src/app/main-home/main-home.page.ts ***!
  \*********************************************/
/*! exports provided: MainHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHomePage", function() { return MainHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let MainHomePage = class MainHomePage {
    constructor(router) {
        this.router = router;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 1.2,
        };
    }
    ngOnInit() {
    }
    navigateToShophour() {
        this.router.navigate(['tabs/main-home/shop-hour/home']);
    }
};
MainHomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MainHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main-home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-home/main-home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main-home.page.scss */ "./src/app/main-home/main-home.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MainHomePage);



/***/ })

}]);
//# sourceMappingURL=main-home-main-home-module-es2015.js.map