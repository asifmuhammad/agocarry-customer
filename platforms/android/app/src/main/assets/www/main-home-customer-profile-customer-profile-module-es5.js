function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-home-customer-profile-customer-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main-home/customer-profile/customer-profile.page.html": function node_modulesRawLoaderDistCjsJsSrcAppMainHomeCustomerProfileCustomerProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>customer-profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/main-home/customer-profile/customer-profile-routing.module.ts": function srcAppMainHomeCustomerProfileCustomerProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerProfilePageRoutingModule", function () {
      return CustomerProfilePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _customer_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customer-profile.page */
    "./src/app/main-home/customer-profile/customer-profile.page.ts");

    var routes = [{
      path: '',
      component: _customer_profile_page__WEBPACK_IMPORTED_MODULE_3__["CustomerProfilePage"]
    }];

    var CustomerProfilePageRoutingModule = function CustomerProfilePageRoutingModule() {
      _classCallCheck(this, CustomerProfilePageRoutingModule);
    };

    CustomerProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CustomerProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/main-home/customer-profile/customer-profile.module.ts": function srcAppMainHomeCustomerProfileCustomerProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerProfilePageModule", function () {
      return CustomerProfilePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _customer_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./customer-profile-routing.module */
    "./src/app/main-home/customer-profile/customer-profile-routing.module.ts");
    /* harmony import */


    var _customer_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./customer-profile.page */
    "./src/app/main-home/customer-profile/customer-profile.page.ts");

    var CustomerProfilePageModule = function CustomerProfilePageModule() {
      _classCallCheck(this, CustomerProfilePageModule);
    };

    CustomerProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customer_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerProfilePageRoutingModule"]],
      declarations: [_customer_profile_page__WEBPACK_IMPORTED_MODULE_6__["CustomerProfilePage"]]
    })], CustomerProfilePageModule);
    /***/
  },

  /***/
  "./src/app/main-home/customer-profile/customer-profile.page.scss": function srcAppMainHomeCustomerProfileCustomerProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4taG9tZS9jdXN0b21lci1wcm9maWxlL2N1c3RvbWVyLXByb2ZpbGUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main-home/customer-profile/customer-profile.page.ts": function srcAppMainHomeCustomerProfileCustomerProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerProfilePage", function () {
      return CustomerProfilePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CustomerProfilePage = /*#__PURE__*/function () {
      function CustomerProfilePage() {
        _classCallCheck(this, CustomerProfilePage);
      }

      _createClass(CustomerProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomerProfilePage;
    }();

    CustomerProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./customer-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main-home/customer-profile/customer-profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./customer-profile.page.scss */
      "./src/app/main-home/customer-profile/customer-profile.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CustomerProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=main-home-customer-profile-customer-profile-module-es5.js.map