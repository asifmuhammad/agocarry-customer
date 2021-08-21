(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment-booked-appointment-booked-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-booked/appointment-booked.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-booked/appointment-booked.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <!-- <ion-title>{{'appointment_booked' | translate}}</ion-title> -->\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"container ion-text-center\">\n        <div class=\"img_box\">\n            <img src=\"assets/images/img_appointmentbooked.png\">\n        </div>\n        <h1>{{'appointment_booked' | translate}}</h1>\n        <p [innerHTML]=\"'appointment_booked_msg' | translate\"></p>\n    </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n    <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"navMyAppointments()\">\n        {{'my_appointments' | translate}}\n    </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/appointment-booked/appointment-booked-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/appointment-booked/appointment-booked-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AppointmentBookedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentBookedPageRoutingModule", function() { return AppointmentBookedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _appointment_booked_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointment-booked.page */ "./src/app/appointment-booked/appointment-booked.page.ts");




const routes = [
    {
        path: '',
        component: _appointment_booked_page__WEBPACK_IMPORTED_MODULE_3__["AppointmentBookedPage"]
    }
];
let AppointmentBookedPageRoutingModule = class AppointmentBookedPageRoutingModule {
};
AppointmentBookedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppointmentBookedPageRoutingModule);



/***/ }),

/***/ "./src/app/appointment-booked/appointment-booked.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/appointment-booked/appointment-booked.module.ts ***!
  \*****************************************************************/
/*! exports provided: AppointmentBookedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentBookedPageModule", function() { return AppointmentBookedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _appointment_booked_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointment-booked-routing.module */ "./src/app/appointment-booked/appointment-booked-routing.module.ts");
/* harmony import */ var _appointment_booked_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appointment-booked.page */ "./src/app/appointment-booked/appointment-booked.page.ts");








let AppointmentBookedPageModule = class AppointmentBookedPageModule {
};
AppointmentBookedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _appointment_booked_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppointmentBookedPageRoutingModule"]
        ],
        declarations: [_appointment_booked_page__WEBPACK_IMPORTED_MODULE_7__["AppointmentBookedPage"]]
    })
], AppointmentBookedPageModule);



/***/ }),

/***/ "./src/app/appointment-booked/appointment-booked.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/appointment-booked/appointment-booked.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 20px 26px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.container .img_box {\n  margin: 0 auto;\n  width: 275px;\n  margin-bottom: 95px;\n}\n.container h1 {\n  margin: 0;\n  color: var(--primary);\n  font-weight: 400;\n  font-size: 1.15rem;\n  letter-spacing: 1.5px;\n  margin-bottom: 21px;\n}\n.container p {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  font-size: 1rem;\n}\nion-footer h2 {\n  margin: 0;\n  color: var(--primary);\n  font-size: 1.1rem;\n  padding: 19px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwb2ludG1lbnQtYm9va2VkL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxhcHBvaW50bWVudC1ib29rZWRcXGFwcG9pbnRtZW50LWJvb2tlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FwcG9pbnRtZW50LWJvb2tlZC9hcHBvaW50bWVudC1ib29rZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ1I7QURFSTtFQUNJLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURHSTtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDRFI7QURNSTtFQUNJLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvYXBwb2ludG1lbnQtYm9va2VkL2FwcG9pbnRtZW50LWJvb2tlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMjZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHJcbiAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDI3NXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDk1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIxcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxOXB4IDA7XHJcbiAgICB9XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweCAyNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5jb250YWluZXIgLmltZ19ib3gge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDI3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA5NXB4O1xufVxuLmNvbnRhaW5lciBoMSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjFweDtcbn1cbi5jb250YWluZXIgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuaW9uLWZvb3RlciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgcGFkZGluZzogMTlweCAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/appointment-booked/appointment-booked.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/appointment-booked/appointment-booked.page.ts ***!
  \***************************************************************/
/*! exports provided: AppointmentBookedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentBookedPage", function() { return AppointmentBookedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let AppointmentBookedPage = class AppointmentBookedPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    navMyAppointments() {
        this.navCtrl.navigateRoot(['./tabs/my_appointments']);
    }
};
AppointmentBookedPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
AppointmentBookedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appointment-booked',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./appointment-booked.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment-booked/appointment-booked.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./appointment-booked.page.scss */ "./src/app/appointment-booked/appointment-booked.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], AppointmentBookedPage);



/***/ })

}]);
//# sourceMappingURL=appointment-booked-appointment-booked-module-es2015.js.map