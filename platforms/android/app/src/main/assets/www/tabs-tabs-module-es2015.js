(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n\r\n\t<ion-tab-bar slot=\"bottom\">\r\n\t\t<ion-tab-button tab=\"main-home\">\r\n\t\t\t<div class=\"img_box\">\r\n\t\t\t\t<img src=\"assets/images/ic_medicine.png\" class=\"before\">\r\n\t\t\t\t<img src=\"assets/images/ic_medicineact.png\" class=\"after\">\r\n\t\t\t</div>\r\n\t\t\t<ion-label>{{'medicine' | translate}}</ion-label>\r\n\t\t</ion-tab-button>\r\n\r\n\t\t<ion-tab-button tab=\"doctors\">\r\n\t\t\t<div class=\"img_box\">\r\n\t\t\t\t<img src=\"assets/images/ic_doctorsf.png\" class=\"before\">\r\n\t\t\t\t<img src=\"assets/images/ic_doctorsact.png\" class=\"after\">\r\n\t\t\t</div>\r\n\t\t\t<ion-label>{{'doctors' | translate}}</ion-label>\r\n\t\t</ion-tab-button>\r\n\r\n\t\t<ion-tab-button tab=\"hospitals\">\r\n\t\t\t<div class=\"img_box\">\r\n\t\t\t\t<img src=\"assets/images/ic_hospitals.png\" class=\"before\">\r\n\t\t\t\t<img src=\"assets/images/ic_hospitalsact.png\" class=\"after\">\r\n\t\t\t</div>\r\n\t\t\t<ion-label>{{'hospitals' | translate}}</ion-label>\r\n\t\t</ion-tab-button>\r\n\r\n\t\t<ion-tab-button tab=\"my_appointments\">\r\n\t\t\t<div class=\"img_box\">\r\n\t\t\t\t<img src=\"assets/images/ic_appointments.png\" class=\"before\">\r\n\t\t\t\t<img src=\"assets/images/ic_appointmentsact.png\" class=\"after\">\r\n\t\t\t</div>\r\n\t\t\t<ion-label>{{'appts' | translate}}</ion-label>\r\n\t\t</ion-tab-button>\r\n\r\n\t\t<ion-tab-button tab=\"more\">\r\n\t\t\t<div class=\"img_box\">\r\n\t\t\t\t<img src=\"assets/images/ic_more.png\" class=\"before\">\r\n\t\t\t\t<img src=\"assets/images/ic_moreact.png\" class=\"after\">\r\n\t\t\t</div>\r\n\t\t\t<ion-label>{{'more' | translate}}</ion-label>\r\n\t\t</ion-tab-button>\r\n\t</ion-tab-bar>\r\n\r\n</ion-tabs>");

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
                        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469"), __webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomePageModule)
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
            }, {
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-tabs ion-tab-bar {\n  --background: var(--white) !important;\n  box-shadow: 0 4px 41px 10px rgba(0, 0, 0, 0.1);\n}\nion-tabs ion-tab-bar ion-tab-button ion-label {\n  color: var(--text-light2);\n  font-size: 0.7rem;\n}\nion-tabs ion-tab-bar ion-tab-button .img_box {\n  position: relative;\n  margin: 0 auto;\n  width: 27px;\n  height: 27px;\n}\nion-tabs ion-tab-bar ion-tab-button img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 0;\n  height: auto;\n  transition: all 0.3s;\n}\nion-tabs ion-tab-bar ion-tab-button img.before {\n  width: 24px;\n  transition: all 0.3s;\n}\nion-tabs ion-tab-bar ion-tab-button.tab-selected ion-label {\n  color: var(--primary);\n}\nion-tabs ion-tab-bar ion-tab-button.tab-selected img {\n  transition: all 0.3s;\n}\nion-tabs ion-tab-bar ion-tab-button.tab-selected img.before {\n  width: 0;\n  height: 0;\n  transition: all 0.3s;\n}\nion-tabs ion-tab-bar ion-tab-button.tab-selected img.after {\n  width: 24px;\n  transition: all 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1jdXN0b21lci9zcmNcXGFwcFxcdGFic1xcdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxxQ0FBQTtFQUNBLDhDQUFBO0FDQUY7QURHRztFQUNDLHlCQUFBO0VBQ0EsaUJBQUE7QUNESjtBRElHO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGSjtBREtHO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNISjtBREtJO0VBQ0MsV0FBQTtFQUNBLG9CQUFBO0FDSEw7QURTSTtFQUNDLHFCQUFBO0FDUEw7QURVSTtFQUNDLG9CQUFBO0FDUkw7QURVSztFQUNDLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUNSTjtBRFdLO0VBQ0MsV0FBQTtFQUNBLG9CQUFBO0FDVE4iLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYnMge1xyXG5cdGlvbi10YWItYmFyIHtcclxuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XHJcblx0XHRib3gtc2hhZG93OiAwIDRweCA0MXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuXHRcdGlvbi10YWItYnV0dG9uIHtcclxuXHRcdFx0aW9uLWxhYmVsIHtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogLjdyZW07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5pbWdfYm94IHtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0d2lkdGg6IDI3cHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAyN3B4XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGltZyB7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdFx0d2lkdGg6IDA7XHJcblx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAuM3M7XHJcblxyXG5cdFx0XHRcdCYuYmVmb3JlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAyNHB4O1xyXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQmLnRhYi1zZWxlY3RlZCB7XHJcblx0XHRcdFx0aW9uLWxhYmVsIHtcclxuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG5cclxuXHRcdFx0XHRcdCYuYmVmb3JlIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDA7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMDtcclxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQmLmFmdGVyIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDI0cHg7XHJcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAuM3M7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSIsImlvbi10YWJzIGlvbi10YWItYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCA0cHggNDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbmlvbi10YWJzIGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuaW9uLXRhYnMgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24gLmltZ19ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMjdweDtcbiAgaGVpZ2h0OiAyN3B4O1xufVxuaW9uLXRhYnMgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5pb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiBpbWcuYmVmb3JlIHtcbiAgd2lkdGg6IDI0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuaW9uLXRhYnMgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbmlvbi10YWJzIGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCBpbWcge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbmlvbi10YWJzIGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCBpbWcuYmVmb3JlIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5pb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgaW1nLmFmdGVyIHtcbiAgd2lkdGg6IDI0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufSJdfQ== */");

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








let TabsPage = class TabsPage {
    constructor(navCtrl, diagnostic, translate, myEventsService, alertCtrl, locationAccuracy) {
        this.navCtrl = navCtrl;
        this.diagnostic = diagnostic;
        this.translate = translate;
        this.myEventsService = myEventsService;
        this.alertCtrl = alertCtrl;
        this.locationAccuracy = locationAccuracy;
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
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_5__["LocationAccuracy"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_6__["Diagnostic"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_3__["MyEventsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_5__["LocationAccuracy"]])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map