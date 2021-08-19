function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tnc-tnc-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tnc/tnc.page.html": function node_modulesRawLoaderDistCjsJsSrcAppTncTncPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'terms_conditions' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"container\">\r\n\t\t<p [innerHTML]=\"privacy_policy\"></p>\r\n\t</div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tnc/tnc-routing.module.ts": function srcAppTncTncRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TncPageRoutingModule", function () {
      return TncPageRoutingModule;
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


    var _tnc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tnc.page */
    "./src/app/tnc/tnc.page.ts");

    var routes = [{
      path: '',
      component: _tnc_page__WEBPACK_IMPORTED_MODULE_3__["TncPage"]
    }];

    var TncPageRoutingModule = function TncPageRoutingModule() {
      _classCallCheck(this, TncPageRoutingModule);
    };

    TncPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TncPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tnc/tnc.module.ts": function srcAppTncTncModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TncPageModule", function () {
      return TncPageModule;
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


    var _tnc_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tnc-routing.module */
    "./src/app/tnc/tnc-routing.module.ts");
    /* harmony import */


    var _tnc_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tnc.page */
    "./src/app/tnc/tnc.page.ts");

    var TncPageModule = function TncPageModule() {
      _classCallCheck(this, TncPageModule);
    };

    TncPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _tnc_routing_module__WEBPACK_IMPORTED_MODULE_6__["TncPageRoutingModule"]],
      declarations: [_tnc_page__WEBPACK_IMPORTED_MODULE_7__["TncPage"]]
    })], TncPageModule);
    /***/
  },

  /***/
  "./src/app/tnc/tnc.page.scss": function srcAppTncTncPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  width: calc(100% - 45px);\n  margin: 0 auto;\n  padding-top: 20px;\n}\n.container p {\n  margin: 0;\n  margin-bottom: 20px;\n  font-weight: 400;\n  font-size: 1.1rem;\n  line-height: 23px;\n  letter-spacing: 0.3px;\n  color: var(--text-black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG5jL0Y6XFxmaXZlclxcQmVybmFyZFxcRG9jdG9yIFdvcmxkXFxEb2N0b1dvcmxkX0FwcENvZGUgKFZpZGVvIENhbGwpLTIwMjEwODA5VDEwMTQwN1otMDAxXFxEb2N0b1dvcmxkX0FwcENvZGUgKFZpZGVvIENhbGwpXFxkb2N0b3dvcmxkX2N1c3RvbWVyXFxkb2N0b3dvcmxkX2N1c3RvbWVyL3NyY1xcYXBwXFx0bmNcXHRuYy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RuYy90bmMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvdG5jL3RuYy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0NXB4KTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjNweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XHJcbiAgICB9XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ1cHgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uY29udGFpbmVyIHAge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tnc/tnc.page.ts": function srcAppTncTncPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TncPage", function () {
      return TncPage;
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


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");

    var TncPage = /*#__PURE__*/function () {
      function TncPage() {
        _classCallCheck(this, TncPage);
      }

      _createClass(TncPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.privacy_policy = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__["Helper"].getSetting("terms");
        }
      }]);

      return TncPage;
    }();

    TncPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tnc',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tnc.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tnc/tnc.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tnc.page.scss */
      "./src/app/tnc/tnc.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TncPage);
    /***/
  }
}]);
//# sourceMappingURL=tnc-tnc-module-es5.js.map