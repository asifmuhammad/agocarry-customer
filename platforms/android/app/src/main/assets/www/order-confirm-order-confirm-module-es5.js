function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-confirm-order-confirm-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/order-confirm/order-confirm.page.html": function node_modulesRawLoaderDistCjsJsSrcAppShopHourOrderConfirmOrderConfirmPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"bg_transparent\">\n\t<ion-toolbar>\n\t\t<ion-title>\n\t\t\t{{'confirm_order' | translate}}\n\t\t</ion-title>\n\t</ion-toolbar>\n\t<div class=\"order_steps\">\n\t\t<ion-row>\n\t\t\t<ion-col class=\"active\">\n\t\t\t\t<ion-icon class=\"zmdi zmdi-pin\"></ion-icon>\n\t\t\t</ion-col>\n\t\t\t<ion-col class=\"active\">\n\t\t\t\t<h3>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t</h3>\n\t\t\t</ion-col>\n\t\t\t<ion-col class=\"active\">\n\t\t\t\t<ion-icon class=\"zmdi zmdi-card\"></ion-icon>\n\t\t\t</ion-col>\n\t\t\t<ion-col class=\"active\">\n\t\t\t\t<h3>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t</h3>\n\t\t\t</ion-col>\n\t\t\t<ion-col class=\"active\">\n\t\t\t\t<ion-icon class=\"zmdi zmdi-assignment-check\"></ion-icon>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</div>\n</ion-header>\n\n<ion-content>\n\t<div class=\"container ion-text-center\">\n\t\t<div class=\"img_box\">\n\t\t\t<img src=\"assets/images/order_confirm.png\">\n\t\t</div>\n\t\t<div class=\"text_box\">\n\t\t\t<h2 [innerHTML]=\"'order_placed_title' | translate\"></h2>\n\t\t\t<p [innerHTML]=\"'order_placed_msg' | translate\"></p>\n\t\t\t<h3 (click)=\"my_orders()\">{{'my_orders' | translate}}</h3>\n\t\t</div>\n\t</div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n\t<ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"home()\">\n\t\t{{'conitnue_shopping' | translate}}\n\t</ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/shop-hour/order-confirm/order-confirm-routing.module.ts": function srcAppShopHourOrderConfirmOrderConfirmRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderConfirmPageRoutingModule", function () {
      return OrderConfirmPageRoutingModule;
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


    var _order_confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-confirm.page */
    "./src/app/shop-hour/order-confirm/order-confirm.page.ts");

    var routes = [{
      path: '',
      component: _order_confirm_page__WEBPACK_IMPORTED_MODULE_3__["OrderConfirmPage"]
    }];

    var OrderConfirmPageRoutingModule = function OrderConfirmPageRoutingModule() {
      _classCallCheck(this, OrderConfirmPageRoutingModule);
    };

    OrderConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderConfirmPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/shop-hour/order-confirm/order-confirm.module.ts": function srcAppShopHourOrderConfirmOrderConfirmModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderConfirmPageModule", function () {
      return OrderConfirmPageModule;
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


    var _order_confirm_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./order-confirm-routing.module */
    "./src/app/shop-hour/order-confirm/order-confirm-routing.module.ts");
    /* harmony import */


    var _order_confirm_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./order-confirm.page */
    "./src/app/shop-hour/order-confirm/order-confirm.page.ts");

    var OrderConfirmPageModule = function OrderConfirmPageModule() {
      _classCallCheck(this, OrderConfirmPageModule);
    };

    OrderConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _order_confirm_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrderConfirmPageRoutingModule"]],
      declarations: [_order_confirm_page__WEBPACK_IMPORTED_MODULE_7__["OrderConfirmPage"]]
    })], OrderConfirmPageModule);
    /***/
  },

  /***/
  "./src/app/shop-hour/order-confirm/order-confirm.page.scss": function srcAppShopHourOrderConfirmOrderConfirmPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  background: var(--primary);\n}\nion-header ion-toolbar ion-buttons ion-back-button {\n  --color: var(--white) !important;\n}\nion-header ion-toolbar ion-title {\n  color: var(--white);\n  font-weight: 500;\n  font-size: 1.3rem;\n}\nion-header .order_steps {\n  padding: 24px 20px 20px 20px;\n}\nion-header .order_steps ion-row {\n  align-items: center;\n}\nion-header .order_steps ion-row ion-col {\n  max-width: 20% !important;\n  min-width: 20% !important;\n  opacity: 0.4;\n}\nion-header .order_steps ion-row ion-col ion-icon {\n  color: var(--white);\n  display: block;\n  margin: 0 auto;\n  font-size: 1.55rem;\n  text-align: center;\n}\nion-header .order_steps ion-row ion-col h3 {\n  display: flex;\n  align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n}\nion-header .order_steps ion-row ion-col h3 ion-icon {\n  font-size: 0.4rem;\n  margin: 0 2px;\n  height: 10px;\n  line-height: 10px;\n}\nion-header .order_steps ion-row ion-col.active {\n  opacity: 1;\n}\n.container {\n  padding: 0 15px;\n  padding-top: 65px;\n}\n.container .img_box {\n  max-width: 215px;\n  margin: 0 auto;\n  width: 100%;\n  margin-bottom: 60px;\n}\n.container .text_box {\n  width: 100%;\n}\n.container .text_box h2 {\n  margin: 0;\n  color: var(--text-black);\n  font-weight: 700;\n  font-size: 1.4rem;\n  padding-bottom: 27px;\n}\n.container .text_box p {\n  margin: 0;\n  color: var(--text-dark-primary);\n  font-size: 1rem;\n  padding-bottom: 20px;\n}\n.container .text_box h3 {\n  margin: 0;\n  color: var(--primary);\n  text-transform: uppercase;\n  font-size: 1.15rem;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\nion-footer .button.btn {\n  height: 55px;\n}\n@media (max-height: 680px) {\n  .container {\n    padding-top: 20px !important;\n  }\n  .container .img_box {\n    max-width: 233px !important;\n    margin-bottom: 15px !important;\n  }\n}\n@media (max-height: 650px) {\n  .container {\n    padding-top: 20px !important;\n  }\n  .container .img_box {\n    max-width: 233px !important;\n    margin-bottom: 15px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC1ob3VyL29yZGVyLWNvbmZpcm0vRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktY3VzdG9tZXIvc3JjXFxhcHBcXHNob3AtaG91clxcb3JkZXItY29uZmlybVxcb3JkZXItY29uZmlybS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3AtaG91ci9vcmRlci1jb25maXJtL29yZGVyLWNvbmZpcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMEJBQUE7QUNDRDtBREVFO0VBQ0MsZ0NBQUE7QUNBSDtBREdFO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDREg7QURLQztFQUNDLDRCQUFBO0FDSEY7QURLRTtFQUNDLG1CQUFBO0FDSEg7QURLRztFQUNDLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDSEo7QURLSTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEw7QURNSTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7QUNKTDtBRE9LO0VBQ0MsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDTE47QURTSTtFQUNDLFVBQUE7QUNQTDtBRGNBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FDWEQ7QURhQztFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ1hGO0FEY0M7RUFDQyxXQUFBO0FDWkY7QURjRTtFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ1pIO0FEZUU7RUFDQyxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNiSDtBRGdCRTtFQUNDLFNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDZEg7QURvQkM7RUFDQyxZQUFBO0FDakJGO0FEc0JBO0VBQ0M7SUFDQyw0QkFBQTtFQ25CQTtFRHFCQTtJQUNDLDJCQUFBO0lBQ0EsOEJBQUE7RUNuQkQ7QUFDRjtBRHVCQTtFQUNDO0lBQ0MsNEJBQUE7RUNyQkE7RUR1QkE7SUFDQywyQkFBQTtJQUNBLDhCQUFBO0VDckJEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaG9wLWhvdXIvb3JkZXItY29uZmlybS9vcmRlci1jb25maXJtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcblxuXHRpb24tdG9vbGJhciB7XG5cdFx0aW9uLWJ1dHRvbnMgaW9uLWJhY2stYnV0dG9uIHtcblx0XHRcdC0tY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xuXHRcdH1cblxuXHRcdGlvbi10aXRsZSB7XG5cdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdGZvbnQtc2l6ZTogMS4zcmVtO1xuXHRcdH1cblx0fVxuXG5cdC5vcmRlcl9zdGVwcyB7XG5cdFx0cGFkZGluZzogMjRweCAyMHB4IDIwcHggMjBweDtcblxuXHRcdGlvbi1yb3cge1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdFx0aW9uLWNvbCB7XG5cdFx0XHRcdG1heC13aWR0aDogMjAlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdG1pbi13aWR0aDogMjAlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdG9wYWNpdHk6IC40O1xuXG5cdFx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS41NXJlbTtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHdpZHRoOiBmaXQtY29udGVudDtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblxuXG5cdFx0XHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjRyZW07XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgMnB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMHB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji5hY3RpdmUge1xuXHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLmNvbnRhaW5lciB7XG5cdHBhZGRpbmc6IDAgMTVweDtcblx0cGFkZGluZy10b3A6IDY1cHg7XG5cblx0LmltZ19ib3gge1xuXHRcdG1heC13aWR0aDogMjE1cHg7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luLWJvdHRvbTogNjBweDtcblx0fVxuXG5cdC50ZXh0X2JveCB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRoMiB7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0Zm9udC1zaXplOiAxLjRyZW07XG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMjdweDtcblx0XHR9XG5cblx0XHRwIHtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSk7XG5cdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMjBweDtcblx0XHR9XG5cblx0XHRoMyB7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0Zm9udC1zaXplOiAxLjE1cmVtO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdFx0fVxuXHR9XG59XG5cbmlvbi1mb290ZXIge1xuXHQuYnV0dG9uLmJ0biB7XG5cdFx0aGVpZ2h0OiA1NXB4O1xuXHR9XG59XG5cblxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2ODBweCkge1xuXHQuY29udGFpbmVyIHtcblx0XHRwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuXG5cdFx0LmltZ19ib3gge1xuXHRcdFx0bWF4LXdpZHRoOiAyMzNweCAhaW1wb3J0YW50O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuXHRcdH1cblx0fVxufVxuXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY1MHB4KSB7XG5cdC5jb250YWluZXIge1xuXHRcdHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG5cblx0XHQuaW1nX2JveCB7XG5cdFx0XHRtYXgtd2lkdGg6IDIzM3B4ICFpbXBvcnRhbnQ7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHR9XG59IiwiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5pb24taGVhZGVyIC5vcmRlcl9zdGVwcyB7XG4gIHBhZGRpbmc6IDI0cHggMjBweCAyMHB4IDIwcHg7XG59XG5pb24taGVhZGVyIC5vcmRlcl9zdGVwcyBpb24tcm93IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1oZWFkZXIgLm9yZGVyX3N0ZXBzIGlvbi1yb3cgaW9uLWNvbCB7XG4gIG1heC13aWR0aDogMjAlICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMjAlICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbmlvbi1oZWFkZXIgLm9yZGVyX3N0ZXBzIGlvbi1yb3cgaW9uLWNvbCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxLjU1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24taGVhZGVyIC5vcmRlcl9zdGVwcyBpb24tcm93IGlvbi1jb2wgaDMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuaW9uLWhlYWRlciAub3JkZXJfc3RlcHMgaW9uLXJvdyBpb24tY29sIGgzIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAwLjRyZW07XG4gIG1hcmdpbjogMCAycHg7XG4gIGhlaWdodDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG59XG5pb24taGVhZGVyIC5vcmRlcl9zdGVwcyBpb24tcm93IGlvbi1jb2wuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgcGFkZGluZy10b3A6IDY1cHg7XG59XG4uY29udGFpbmVyIC5pbWdfYm94IHtcbiAgbWF4LXdpZHRoOiAyMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuLmNvbnRhaW5lciAudGV4dF9ib3gge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnRleHRfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMjdweDtcbn1cbi5jb250YWluZXIgLnRleHRfYm94IHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uY29udGFpbmVyIC50ZXh0X2JveCBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbmlvbi1mb290ZXIgLmJ1dHRvbi5idG4ge1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogNjgwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFpbmVyIC5pbWdfYm94IHtcbiAgICBtYXgtd2lkdGg6IDIzM3B4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY1MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW1nX2JveCB7XG4gICAgbWF4LXdpZHRoOiAyMzNweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shop-hour/order-confirm/order-confirm.page.ts": function srcAppShopHourOrderConfirmOrderConfirmPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderConfirmPage", function () {
      return OrderConfirmPage;
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

    var OrderConfirmPage = /*#__PURE__*/function () {
      function OrderConfirmPage(navCtrl) {
        _classCallCheck(this, OrderConfirmPage);

        this.navCtrl = navCtrl;
      }

      _createClass(OrderConfirmPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "home",
        value: function home() {
          this.navCtrl.navigateRoot(['tabs/main-home/shop-hour/home']);
        }
      }, {
        key: "my_orders",
        value: function my_orders() {
          this.navCtrl.navigateRoot(['tabs/main-home/shop-hour/my-orders']);
        }
      }]);

      return OrderConfirmPage;
    }();

    OrderConfirmPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    OrderConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-confirm',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order-confirm.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-hour/order-confirm/order-confirm.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./order-confirm.page.scss */
      "./src/app/shop-hour/order-confirm/order-confirm.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], OrderConfirmPage);
    /***/
  }
}]);
//# sourceMappingURL=order-confirm-order-confirm-module-es5.js.map