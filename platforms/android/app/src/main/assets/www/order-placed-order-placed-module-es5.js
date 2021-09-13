function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-placed-order-placed-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/order-placed/order-placed.page.html": function node_modulesRawLoaderDistCjsJsSrcAppOrderPlacedOrderPlacedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title></ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"container ion-text-center\">\r\n        <div class=\"img_box\">\r\n            <img src=\"assets/images/order_places.png\">\r\n        </div>\r\n        <h1>{{'order_placed' | translate}}</h1>\r\n        <p [innerHTML]=\"'order_placed_msg' | translate\"> {{'your_order_has_been_placed' | translate}}<br>\r\n            {{'successfull' | translate}}<br>\r\n            {{'visit_my_order' | translate}}<br>\r\n            {{'to_check_order_status' | translate}}\r\n        </p>\r\n    </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n    <h2 class=\"ion-text-center\" (click)=\"navMyOrders()\">{{'my_orders' | translate}}</h2>\r\n    <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"navHome()\">\r\n        {{'continue_shopping' | translate}}\r\n    </ion-button>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/order-placed/order-placed-routing.module.ts": function srcAppOrderPlacedOrderPlacedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderPlacedPageRoutingModule", function () {
      return OrderPlacedPageRoutingModule;
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


    var _order_placed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-placed.page */
    "./src/app/order-placed/order-placed.page.ts");

    var routes = [{
      path: '',
      component: _order_placed_page__WEBPACK_IMPORTED_MODULE_3__["OrderPlacedPage"]
    }];

    var OrderPlacedPageRoutingModule = function OrderPlacedPageRoutingModule() {
      _classCallCheck(this, OrderPlacedPageRoutingModule);
    };

    OrderPlacedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderPlacedPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/order-placed/order-placed.module.ts": function srcAppOrderPlacedOrderPlacedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderPlacedPageModule", function () {
      return OrderPlacedPageModule;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _order_placed_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./order-placed-routing.module */
    "./src/app/order-placed/order-placed-routing.module.ts");
    /* harmony import */


    var _order_placed_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./order-placed.page */
    "./src/app/order-placed/order-placed.page.ts");

    var OrderPlacedPageModule = function OrderPlacedPageModule() {
      _classCallCheck(this, OrderPlacedPageModule);
    };

    OrderPlacedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _order_placed_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrderPlacedPageRoutingModule"]],
      declarations: [_order_placed_page__WEBPACK_IMPORTED_MODULE_7__["OrderPlacedPage"]]
    })], OrderPlacedPageModule);
    /***/
  },

  /***/
  "./src/app/order-placed/order-placed.page.scss": function srcAppOrderPlacedOrderPlacedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  padding: 20px 26px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.container .img_box {\n  margin: 0 auto;\n  width: 275px;\n  margin-bottom: 95px;\n}\n.container h1 {\n  margin: 0;\n  color: var(--primary);\n  font-weight: 400;\n  font-size: 1.15rem;\n  letter-spacing: 1.5px;\n  margin-bottom: 21px;\n}\n.container p {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  font-size: 1rem;\n}\nion-footer h2 {\n  margin: 0;\n  color: var(--primary);\n  font-size: 1.1rem;\n  padding: 19px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItcGxhY2VkL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxvcmRlci1wbGFjZWRcXG9yZGVyLXBsYWNlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL29yZGVyLXBsYWNlZC9vcmRlci1wbGFjZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ1I7QURFSTtFQUNJLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURHSTtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDRFI7QURNSTtFQUNJLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvb3JkZXItcGxhY2VkL29yZGVyLXBsYWNlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMjZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHJcbiAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDI3NXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDk1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIxcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgaDIge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMTlweCAwO1xyXG4gICAgfVxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4IDI2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLmNvbnRhaW5lciAuaW1nX2JveCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMjc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDk1cHg7XG59XG4uY29udGFpbmVyIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMXB4O1xufVxuLmNvbnRhaW5lciBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5pb24tZm9vdGVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBwYWRkaW5nOiAxOXB4IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/order-placed/order-placed.page.ts": function srcAppOrderPlacedOrderPlacedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderPlacedPage", function () {
      return OrderPlacedPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var OrderPlacedPage = /*#__PURE__*/function () {
      function OrderPlacedPage(navCtrl) {
        _classCallCheck(this, OrderPlacedPage);

        this.navCtrl = navCtrl;
      }

      _createClass(OrderPlacedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navHome",
        value: function navHome() {
          this.navCtrl.navigateRoot(['./tabs/main-home']);
        }
      }, {
        key: "navMyOrders",
        value: function navMyOrders() {
          var _this = this;

          this.navHome();
          setTimeout(function () {
            return _this.navCtrl.navigateForward(['./orders']);
          }, 100);
        }
      }]);

      return OrderPlacedPage;
    }();

    OrderPlacedPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    OrderPlacedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-placed',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order-placed.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/order-placed/order-placed.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./order-placed.page.scss */
      "./src/app/order-placed/order-placed.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], OrderPlacedPage);
    /***/
  }
}]);
//# sourceMappingURL=order-placed-order-placed-module-es5.js.map