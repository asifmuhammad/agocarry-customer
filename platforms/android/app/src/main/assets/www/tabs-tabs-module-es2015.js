(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n\r\n\t<ion-tab-bar slot=\"bottom\" *ngIf=\"shareService?.isActiveCustomer == 'Home'\">\r\n\t\t<ion-tab-button tab=\"main-home\">\t\t\r\n\t\t\t<ion-icon  name=\"home-outline\"></ion-icon>\r\n\t\t\t<ion-label>{{'Home' | translate}}</ion-label>\r\n\t\t</ion-tab-button>\r\n\r\n\t\t<ion-tab-button tab=\"customer-wallet\">\r\n\t\t<ion-icon name=\"wallet-outline\"></ion-icon>\r\n\t\t\t<ion-label>{{'Wallet' | translate}}</ion-label>\r\n\t\t</ion-tab-button>\r\n\r\n\t\t<ion-tab-button tab=\"History\">\r\n\t\t\t<ion-icon name=\"file-tray-full-outline\"></ion-icon>\r\n\t\t\t<ion-label>{{'History' | translate}}</ion-label>\r\n\t\t</ion-tab-button>\r\n\r\n\t\t<ion-tab-button tab=\"customer-profile\">\r\n\r\n\t\t\t\t<ion-icon name=\"person-outline\"></ion-icon>\r\n\t\t\t\t<ion-label>{{'Profile' | translate}}</ion-label>\r\n\t\t\t\r\n\t\t</ion-tab-button>\r\n\t</ion-tab-bar>\r\n\t<ion-tab-bar slot=\"bottom\" *ngIf=\"shareService?.isActiveCustomer == 'Doctor'\">\r\n\t\t<ion-tab-button tab=\"main-home\">\t\t\r\n\t\t\t<ion-icon name=\"home-outline\"></ion-icon>\r\n\t\t\t<ion-label>{{'Home' | translate}}</ion-label>\r\n\t\t</ion-tab-button>\r\n\t\t<ion-tab-button tab=\"home\">\r\n\t\t\t<div class=\"img_box\">\r\n\t\t\t\t<img src=\"assets/images/ic_medicine.png\" class=\"before\">\r\n\t\t\t\t<img src=\"assets/images/ic_medicineact.png\" class=\"after\">\r\n\t\t\t</div>\r\n\t\t\t<ion-label>{{'medicine' | translate}}</ion-label>\r\n\t\t</ion-tab-button>\r\n\r\n\t\t<ion-tab-button tab=\"doctors\">\r\n\t\t\t<div class=\"img_box\">\r\n\t\t\t\t<img src=\"assets/images/ic_doctorsf.png\" class=\"before\">\r\n\t\t\t\t<img src=\"assets/images/ic_doctorsact.png\" class=\"after\">\r\n\t\t\t</div>\r\n\t\t\t<ion-label>{{'doctors' | translate}}</ion-label>\r\n\t\t</ion-tab-button>\r\n\r\n\t\t<ion-tab-button tab=\"hospitals\">\r\n\t\t\t<div class=\"img_box\">\r\n\t\t\t\t<img src=\"assets/images/ic_hospitals.png\" class=\"before\">\r\n\t\t\t\t<img src=\"assets/images/ic_hospitalsact.png\" class=\"after\">\r\n\t\t\t</div>\r\n\t\t\t<ion-label>{{'hospitals' | translate}}</ion-label>\r\n\t\t</ion-tab-button>\r\n\r\n\t\t<ion-tab-button tab=\"my_appointments\">\r\n\t\t\t<div class=\"img_box\">\r\n\t\t\t\t<img src=\"assets/images/ic_appointments.png\" class=\"before\">\r\n\t\t\t\t<img src=\"assets/images/ic_appointmentsact.png\" class=\"after\">\r\n\t\t\t</div>\r\n\t\t\t<ion-label>{{'appts' | translate}}</ion-label>\r\n\t\t</ion-tab-button>\r\n\r\n\t\t<ion-tab-button tab=\"more\">\r\n\t\t\t<div class=\"img_box\">\r\n\t\t\t\t<img src=\"assets/images/ic_more.png\" class=\"before\">\r\n\t\t\t\t<img src=\"assets/images/ic_moreact.png\" class=\"after\">\r\n\t\t\t</div>\r\n\t\t\t<ion-label>{{'more' | translate}}</ion-label>\r\n\t\t</ion-tab-button>\r\n\t</ion-tab-bar>\r\n</ion-tabs>");

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
                path: '',
                children: [
                    {
                        path: 'home',
                        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~df159abf"), __webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomePageModule)
                    }, {
                        path: 'main-home',
                        loadChildren: () => __webpack_require__.e(/*! import() | main-home-main-home-module */ "main-home-main-home-module").then(__webpack_require__.bind(null, /*! ../main-home/main-home.module */ "./src/app/main-home/main-home.module.ts")).then(m => m.MainHomePageModule)
                    }
                ]
            }, {
                path: 'doctors',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | doctors-doctors-module */ "doctors-doctors-module").then(__webpack_require__.bind(null, /*! ../doctors/doctors.module */ "./src/app/doctors/doctors.module.ts")).then(m => m.DoctorsPageModule)
                    }
                ]
            }, {
                path: 'hospitals',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | hospitals-hospitals-module */[__webpack_require__.e("common"), __webpack_require__.e("hospitals-hospitals-module")]).then(__webpack_require__.bind(null, /*! ../hospitals/hospitals.module */ "./src/app/hospitals/hospitals.module.ts")).then(m => m.HospitalsPageModule)
                    }
                ]
            }, {
                path: 'my_appointments',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | my-appointments-my-appointments-module */[__webpack_require__.e("common"), __webpack_require__.e("my-appointments-my-appointments-module")]).then(__webpack_require__.bind(null, /*! ../my-appointments/my-appointments.module */ "./src/app/my-appointments/my-appointments.module.ts")).then(m => m.MyAppointmentsPageModule)
                    }
                ]
            }, {
                path: 'more',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ../account/account.module */ "./src/app/account/account.module.ts")).then(m => m.AccountPageModule)
                    }
                ]
            },
            {
                path: 'History',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | orders-orders-module */[__webpack_require__.e("common"), __webpack_require__.e("orders-orders-module")]).then(__webpack_require__.bind(null, /*! ../orders/orders.module */ "./src/app/orders/orders.module.ts")).then(m => m.OrdersPageModule)
                    }
                ]
            },
            {
                path: 'customer-wallet',
                loadChildren: () => __webpack_require__.e(/*! import() | main-home-customer-wallet-customer-wallet-module */ "main-home-customer-wallet-customer-wallet-module").then(__webpack_require__.bind(null, /*! ../main-home/customer-wallet/customer-wallet.module */ "./src/app/main-home/customer-wallet/customer-wallet.module.ts")).then(m => m.CustomerWalletPageModule)
            },
            // {
            //   path: 'customer-history',
            //   loadChildren: () => import('../main-home/customer-history/customer-history.module').then( m => m.CustomerHistoryPageModule)
            // },
            {
                path: 'customer-profile',
                loadChildren: () => __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ../account/account.module */ "./src/app/account/account.module.ts")).then(m => m.AccountPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/main-home',
                pathMatch: 'full'
            }
        ]
    }, {
        path: '',
        redirectTo: '/tabs/main-home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js");










let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_6__["TabsPageRoutingModule"]
        ],
        providers: [_ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_9__["Diagnostic"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__["LocationAccuracy"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tabs ion-tab-bar {\n  --background: var(--white) !important;\n  box-shadow: 0 4px 41px 10px rgba(0, 0, 0, 0.1);\n}\nion-tabs ion-tab-bar ion-tab-button ion-label {\n  color: var(--text-light2);\n  font-size: 0.7rem;\n}\nion-tabs ion-tab-bar ion-tab-button .img_box {\n  position: relative;\n  margin: 0 auto;\n  width: 27px;\n  height: 27px;\n}\nion-tabs ion-tab-bar ion-tab-button img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 0;\n  height: auto;\n  transition: all 0.3s;\n}\nion-tabs ion-tab-bar ion-tab-button img.before {\n  width: 24px;\n  transition: all 0.3s;\n}\nion-tabs ion-tab-bar ion-tab-button.tab-selected {\n  color: var(--primary);\n}\nion-tabs ion-tab-bar ion-tab-button.tab-selected ion-label {\n  color: var(--primary);\n}\nion-tabs ion-tab-bar ion-tab-button.tab-selected img {\n  transition: all 0.3s;\n}\nion-tabs ion-tab-bar ion-tab-button.tab-selected img.before {\n  width: 0;\n  height: 0;\n  transition: all 0.3s;\n}\nion-tabs ion-tab-bar ion-tab-button.tab-selected img.after {\n  width: 24px;\n  transition: all 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1jdXN0b21lci9zcmNcXGFwcFxcdGFic1xcdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxxQ0FBQTtFQUNBLDhDQUFBO0FDQUY7QURHRztFQUNDLHlCQUFBO0VBQ0EsaUJBQUE7QUNESjtBRElHO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGSjtBREtHO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNISjtBREtJO0VBQ0MsV0FBQTtFQUNBLG9CQUFBO0FDSEw7QURRRztFQUNDLHFCQUFBO0FDTko7QURPSTtFQUNDLHFCQUFBO0FDTEw7QURRSTtFQUNDLG9CQUFBO0FDTkw7QURRSztFQUNDLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUNOTjtBRFNLO0VBQ0MsV0FBQTtFQUNBLG9CQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYnMge1xyXG5cdGlvbi10YWItYmFyIHtcclxuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XHJcblx0XHRib3gtc2hhZG93OiAwIDRweCA0MXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuXHRcdGlvbi10YWItYnV0dG9uIHtcclxuXHRcdFx0aW9uLWxhYmVsIHtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogLjdyZW07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5pbWdfYm94IHtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0d2lkdGg6IDI3cHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAyN3B4XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGltZyB7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdFx0d2lkdGg6IDA7XHJcblx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAuM3M7XHJcblxyXG5cdFx0XHRcdCYuYmVmb3JlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAyNHB4O1xyXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQmLnRhYi1zZWxlY3RlZCB7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG5cdFx0XHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpbWcge1xyXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHJcblx0XHRcdFx0XHQmLmJlZm9yZSB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAwO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDA7XHJcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAuM3M7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ji5hZnRlciB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAyNHB4O1xyXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHQiLCJpb24tdGFicyBpb24tdGFiLWJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDQxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5pb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiBpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbmlvbi10YWJzIGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIC5pbWdfYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDI3cHg7XG4gIGhlaWdodDogMjdweDtcbn1cbmlvbi10YWJzIGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuaW9uLXRhYnMgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24gaW1nLmJlZm9yZSB7XG4gIHdpZHRoOiAyNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbmlvbi10YWJzIGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbmlvbi10YWJzIGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCBpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5pb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgaW1nIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5pb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgaW1nLmJlZm9yZSB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuaW9uLXRhYnMgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIGltZy5hZnRlciB7XG4gIHdpZHRoOiAyNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/events/my-events.service */ "./src/app/services/events/my-events.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");
/* harmony import */ var _services_network_share_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/network/share.service */ "./src/app/services/network/share.service.ts");









let TabsPage = class TabsPage {
    constructor(navCtrl, diagnostic, translate, myEventsService, alertCtrl, locationAccuracy, shareService) {
        this.navCtrl = navCtrl;
        this.diagnostic = diagnostic;
        this.translate = translate;
        this.myEventsService = myEventsService;
        this.alertCtrl = alertCtrl;
        this.locationAccuracy = locationAccuracy;
        this.shareService = shareService;
        this.subscriptions = new Array();
    }
    ngOnInit() {
        this.subscriptions.push(this.myEventsService.getCustomEventObservable().subscribe(data => {
            if (data == "nav:pick_location") {
                this.alertLocation();
            }
        }));
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
    }
    ionViewDidEnter() {
        let selectedLocation = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].getAddressSelected();
        if (selectedLocation == null)
            this.alertLocation();
    }
    alertLocation() {
        if (src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].getLoggedInUser() != null) {
            let navigationExtras = { state: { pick_location: true } };
            this.navCtrl.navigateForward(['./addresses'], navigationExtras);
        }
        else {
            this.diagnostic.isLocationEnabled().then((isAvailable) => {
                if (isAvailable) {
                    let navigationExtras = { state: { pick_location: true } };
                    this.navCtrl.navigateForward(['./add-address'], navigationExtras);
                }
                else {
                    this.alertLocationServices();
                }
            }).catch((e) => {
                console.error(e);
                this.alertLocationServices();
            });
        }
    }
    alertLocationServices() {
        this.translate.get(["location_services_title", "location_services_message", "okay", "search_anyway"]).subscribe(values => {
            this.alertCtrl.create({
                header: values["location_services_title"],
                message: values["location_services_message"],
                buttons: [{
                        text: values["okay"],
                        handler: () => {
                            this.locationAccuracy.canRequest().then((canRequest) => {
                                if (canRequest) {
                                    // the accuracy option will be ignored by iOS
                                    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => console.log('Request successful'), error => console.log('Error requesting location permissions', error));
                                }
                            });
                        }
                    }, {
                        text: values["search_anyway"],
                        handler: () => {
                            let navigationExtras = { state: { pick_location: true } };
                            this.navCtrl.navigateForward(['./add-address'], navigationExtras);
                        }
                    }]
            }).then(alert => alert.present());
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_6__["Diagnostic"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_3__["MyEventsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_5__["LocationAccuracy"] },
    { type: _services_network_share_service__WEBPACK_IMPORTED_MODULE_8__["ShareService"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_6__["Diagnostic"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_3__["MyEventsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_5__["LocationAccuracy"], _services_network_share_service__WEBPACK_IMPORTED_MODULE_8__["ShareService"]])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map