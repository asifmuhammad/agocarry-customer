function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat2-chat2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat2/chat2.page.html": function node_modulesRawLoaderDistCjsJsSrcAppChat2Chat2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <div class=\"toolbar_inner d-flex\">\n            <ion-buttons slot=\"start\">\n                <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n            </ion-buttons>\n\n            <div class=\"d-flex user_details\">\n                <div class=\"img_box center_img\">\n                    <img src=\"assets/images/empty_image.png\" class=\"crop_img\">\n                </div>\n                <div class=\"text_box\">\n                    <h2>{{chatObj.chatName}}</h2>\n                    <h3>{{'delivery_partner' | translate}}</h3>\n                </div>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content  fullscreen class=\"bg_color\">\n    <div class=\"chat_container d-flex\">\n        <div *ngFor=\"let msg of messages\" [ngClass]=\"(chatObj.myId == msg.senderId) ? 'chat_box d-flex send' : 'chat_box d-flex received'\">\n            <div class=\"chat\">\n                <h2>{{msg.body}}</h2>\n                <p>{{msg.timeDiff}}</p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"footer_img\">\n        <img src=\"assets/images/chat_footer_img.png\">\n    </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n    <div class=\"form\">\n        <ion-list lines=\"none d-flex\">\n            <ion-item lines=\"none\">\n                <ion-input type=\"text\" [(ngModel)]=\"newMessageText\" placeholder=\"{{'type_your_meassage' | translate}}\">\n                </ion-input>\n            </ion-item>\n            <div class=\"send_btn end\" (click)=\"send()\">\n                <ion-icon class=\"zmdi zmdi-mail-send\"></ion-icon>\n            </div>\n        </ion-list>\n    </div>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/chat2/chat2-routing.module.ts": function srcAppChat2Chat2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chat2PageRoutingModule", function () {
      return Chat2PageRoutingModule;
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


    var _chat2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat2.page */
    "./src/app/chat2/chat2.page.ts");

    var routes = [{
      path: '',
      component: _chat2_page__WEBPACK_IMPORTED_MODULE_3__["Chat2Page"]
    }];

    var Chat2PageRoutingModule = function Chat2PageRoutingModule() {
      _classCallCheck(this, Chat2PageRoutingModule);
    };

    Chat2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Chat2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/chat2/chat2.module.ts": function srcAppChat2Chat2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chat2PageModule", function () {
      return Chat2PageModule;
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


    var _chat2_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat2-routing.module */
    "./src/app/chat2/chat2-routing.module.ts");
    /* harmony import */


    var _chat2_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./chat2.page */
    "./src/app/chat2/chat2.page.ts");

    var Chat2PageModule = function Chat2PageModule() {
      _classCallCheck(this, Chat2PageModule);
    };

    Chat2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _chat2_routing_module__WEBPACK_IMPORTED_MODULE_6__["Chat2PageRoutingModule"]],
      declarations: [_chat2_page__WEBPACK_IMPORTED_MODULE_7__["Chat2Page"]]
    })], Chat2PageModule);
    /***/
  },

  /***/
  "./src/app/chat2/chat2.page.scss": function srcAppChat2Chat2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar .toolbar_inner {\n  align-items: flex-start;\n  position: relative;\n  overflow: hidden;\n  padding-bottom: 5px;\n}\nion-header ion-toolbar .toolbar_inner::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background: #ecf4f7;\n}\nion-header ion-toolbar .toolbar_inner .user_details {\n  align-items: flex-start;\n  position: relative;\n  z-index: 99;\n  padding-top: 12px;\n  overflow: hidden;\n  padding-right: 15px;\n}\nion-header ion-toolbar .toolbar_inner .user_details .img_box {\n  min-width: 55px;\n  height: 55px;\n  border-radius: 5px;\n  margin-right: 15px;\n}\nion-header ion-toolbar .toolbar_inner .user_details .text_box {\n  padding-top: 5px;\n}\nion-header ion-toolbar .toolbar_inner .user_details .text_box h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding: 0;\n  color: var(--text-dark);\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  padding-bottom: 18px;\n}\nion-header ion-toolbar .toolbar_inner .user_details .text_box h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.8rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  min-height: 30.4px;\n}\nion-header ion-title .title_inner {\n  width: 100%;\n  overflow: hidden;\n  padding-left: 30px;\n}\nion-header ion-title .title_inner h2 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 400;\n  overflow: hidden;\n}\nion-header ion-title .title_inner h2 span.name {\n  width: calc(100% - 40px);\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\nion-header ion-title .title_inner h2 ion-icon {\n  font-size: 1.3rem;\n  min-width: 30px;\n}\nion-header .appointment_details {\n  background: var(--white);\n}\nion-header .appointment_details h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.75rem;\n  padding: 14px 16px;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n}\nion-header .appointment_details h2 span {\n  min-width: 30px;\n  display: inline-block;\n  text-align: center;\n}\n.footer_img {\n  position: fixed;\n  bottom: 50px;\n  left: 0;\n  right: 0;\n  width: 100%;\n}\n.footer_img img {\n  width: auto;\n  max-width: calc(100% - 37px);\n  display: block;\n  margin: 0 auto;\n}\n.chat_container {\n  padding: 15px 15px;\n  flex-wrap: wrap;\n  position: relative;\n  z-index: 9;\n}\n.chat_container .chat_box {\n  width: auto !important;\n  margin-bottom: 20px;\n  min-width: 70%;\n  align-items: flex-start;\n}\n.chat_container .chat_box .chat {\n  min-width: 90px;\n  border-radius: 5px;\n  max-width: 100%;\n}\n.chat_container .chat_box .chat h2 {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--text-black);\n  line-height: 18px;\n  padding-bottom: 8px;\n}\n.chat_container .chat_box p {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: var(--text-light2);\n}\n.chat_container .chat_box.received .chat {\n  background: var(--white);\n  padding: 9px 50px 10px 14px;\n}\n.chat_container .chat_box.send {\n  margin-left: auto;\n  margin-right: 0;\n}\n.chat_container .chat_box.send .chat {\n  background: var(--primary);\n  padding: 9px 14px 10px 50px;\n  margin-left: auto;\n  margin-right: 0;\n}\n.chat_container .chat_box.send .chat h2 {\n  text-align: right;\n  color: var(--white);\n  font-weight: 400;\n}\n.chat_container .chat_box.send .chat p {\n  text-align: right;\n  color: var(--white);\n  opacity: 0.4;\n}\nion-footer {\n  background: var(--white);\n  box-shadow: 0 1px 38px 10px rgba(0, 0, 0, 0.1);\n}\nion-footer .form {\n  margin: 0;\n  width: 100%;\n  padding: 0;\n}\nion-footer .form ion-list {\n  padding: 0 !important;\n}\nion-footer .form ion-list ion-item {\n  border: none !important;\n  background: none;\n  margin: 0;\n  align-items: center;\n  border: 0 !important;\n  padding: 0px 17px !important;\n  --min-height: unset !important;\n  font-weight: 500 !important;\n}\nion-footer .form ion-list ion-item ion-input {\n  font-size: 0.95rem !important;\n  --placeholder-color: var(--text-light2) !important;\n  padding: 7px 0 !important;\n}\nion-footer .form ion-list .send_btn {\n  padding: 0 17px;\n  min-width: 30px;\n  position: relative;\n  top: 3px;\n}\nion-footer .form ion-list .send_btn ion-icon {\n  color: var(--primary);\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdDIvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktY3VzdG9tZXIvc3JjXFxhcHBcXGNoYXQyXFxjaGF0Mi5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQyL2NoYXQyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRFo7QURHWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0RoQjtBRElZO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGaEI7QURJZ0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNGcEI7QURLZ0I7RUFDSSxnQkFBQTtBQ0hwQjtBREtvQjtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNIeEI7QURNb0I7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNKeEI7QURZUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDVlo7QURZWTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNWaEI7QURhb0I7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNYeEI7QURlZ0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNicEI7QURtQkk7RUFDSSx3QkFBQTtBQ2pCUjtBRG1CUTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDakJaO0FEbUJZO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNqQmhCO0FEMkJBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUN4Qko7QUQwQkk7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ3hCUjtBRDRCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ3pCSjtBRDJCSTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUN6QlI7QUQyQlE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDekJaO0FEMkJZO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDekJoQjtBRDZCUTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUMzQlo7QUQrQlk7RUFDSSx3QkFBQTtFQUNBLDJCQUFBO0FDN0JoQjtBRGlDUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQy9CWjtBRGlDWTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUMvQmhCO0FEaUNnQjtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQy9CcEI7QURrQ2dCO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNoQ3BCO0FEdUNBO0VBQ0ksd0JBQUE7RUFDQSw4Q0FBQTtBQ3BDSjtBRHNDSTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ3BDUjtBRHNDUTtFQUNJLHFCQUFBO0FDcENaO0FEc0NZO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FDcENoQjtBRHNDZ0I7RUFDSSw2QkFBQTtFQUNBLGtEQUFBO0VBQ0EseUJBQUE7QUNwQ3BCO0FEd0NZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUN0Q2hCO0FEd0NnQjtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUN0Q3BCIiwiZmlsZSI6InNyYy9hcHAvY2hhdDIvY2hhdDIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLnRvb2xiYXJfaW5uZXIge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlY2Y0Zjc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51c2VyX2RldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmltZ19ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudGV4dF9ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzAuNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIC50aXRsZV9pbm5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICYubmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hcHBvaW50bWVudF9kZXRhaWxzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vaW9uLWNvbnRlbnQge1xyXG4vLyAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2NoYXRfYmcucG5nKSAwIDAvMTAwJSAxMDMlIG5vLXJlcGVhdDtcclxuLy99XHJcblxyXG4uZm9vdGVyX2ltZyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDUwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMzdweCk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaGF0X2NvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5O1xyXG5cclxuICAgIC5jaGF0X2JveCB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNzAlO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICAuY2hhdCB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogOTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnJlY2VpdmVkIHtcclxuICAgICAgICAgICAgLmNoYXQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOXB4IDUwcHggMTBweCAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnNlbmQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG5cclxuICAgICAgICAgICAgLmNoYXQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMTRweCAxMHB4IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDM4cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0MikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHggMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VuZF9idG4ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxN3B4O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLnRvb2xiYXJfaW5uZXIge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAudG9vbGJhcl9pbm5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogI2VjZjRmNztcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLnRvb2xiYXJfaW5uZXIgLnVzZXJfZGV0YWlscyB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLnRvb2xiYXJfaW5uZXIgLnVzZXJfZGV0YWlscyAuaW1nX2JveCB7XG4gIG1pbi13aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLnRvb2xiYXJfaW5uZXIgLnVzZXJfZGV0YWlscyAudGV4dF9ib3gge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAudG9vbGJhcl9pbm5lciAudXNlcl9kZXRhaWxzIC50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmctYm90dG9tOiAxOHB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAudG9vbGJhcl9pbm5lciAudXNlcl9kZXRhaWxzIC50ZXh0X2JveCBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgbWluLWhlaWdodDogMzAuNHB4O1xufVxuaW9uLWhlYWRlciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5pb24taGVhZGVyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDIgc3Bhbi5uYW1lIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5pb24taGVhZGVyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIgaDIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuaW9uLWhlYWRlciAuYXBwb2ludG1lbnRfZGV0YWlscyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbmlvbi1oZWFkZXIgLmFwcG9pbnRtZW50X2RldGFpbHMgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5pb24taGVhZGVyIC5hcHBvaW50bWVudF9kZXRhaWxzIGgyIHNwYW4ge1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9vdGVyX2ltZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1MHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9vdGVyX2ltZyBpbWcge1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzN3B4KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2hhdF9jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5O1xufVxuLmNoYXRfY29udGFpbmVyIC5jaGF0X2JveCB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1pbi13aWR0aDogNzAlO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5jaGF0X2NvbnRhaW5lciAuY2hhdF9ib3ggLmNoYXQge1xuICBtaW4td2lkdGg6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmNoYXRfY29udGFpbmVyIC5jaGF0X2JveCAuY2hhdCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4uY2hhdF9jb250YWluZXIgLmNoYXRfYm94IHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xufVxuLmNoYXRfY29udGFpbmVyIC5jaGF0X2JveC5yZWNlaXZlZCAuY2hhdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZzogOXB4IDUwcHggMTBweCAxNHB4O1xufVxuLmNoYXRfY29udGFpbmVyIC5jaGF0X2JveC5zZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5jaGF0X2NvbnRhaW5lciAuY2hhdF9ib3guc2VuZCAuY2hhdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBwYWRkaW5nOiA5cHggMTRweCAxMHB4IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uY2hhdF9jb250YWluZXIgLmNoYXRfYm94LnNlbmQgLmNoYXQgaDIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5jaGF0X2NvbnRhaW5lciAuY2hhdF9ib3guc2VuZCAuY2hhdCBwIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMzhweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbmlvbi1mb290ZXIgLmZvcm0ge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4IDE3cHggIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG59XG5pb24tZm9vdGVyIC5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbSAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0MikgIWltcG9ydGFudDtcbiAgcGFkZGluZzogN3B4IDAgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgLnNlbmRfYnRuIHtcbiAgcGFkZGluZzogMCAxN3B4O1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG59XG5pb24tZm9vdGVyIC5mb3JtIGlvbi1saXN0IC5zZW5kX2J0biBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/chat2/chat2.page.ts": function srcAppChat2Chat2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chat2Page", function () {
      return Chat2Page;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_models_chat_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/models/chat.models */
    "./src/models/chat.models.ts");
    /* harmony import */


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var src_models_message_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/models/message.models */
    "./src/models/message.models.ts");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_11__);

    var Chat2Page = /*#__PURE__*/function () {
      function Chat2Page(router, apiService, uiElementService, translate) {
        _classCallCheck(this, Chat2Page);

        this.router = router;
        this.apiService = apiService;
        this.uiElementService = uiElementService;
        this.translate = translate;
        this.messages = new Array();
        this.chatObj = new src_models_chat_models__WEBPACK_IMPORTED_MODULE_5__["Chat"]();
      }

      _createClass(Chat2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log("getCurrentNavigation", this.router.getCurrentNavigation().extras.state);

          if (this.router.getCurrentNavigation().extras.state) {
            this.chatObj = this.router.getCurrentNavigation().extras.state.chat;
            this.delivery_user = this.router.getCurrentNavigation().extras.state.delivery_user;
            this.userMe = this.apiService.getUserMe();
            this.chatChild = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].getChatChild(this.chatObj.myId, this.chatObj.chatId);
            var component = this;
            this.inboxRef = firebase_app__WEBPACK_IMPORTED_MODULE_11__["database"]().ref(src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].REF_INBOX);
            this.chatRef = firebase_app__WEBPACK_IMPORTED_MODULE_11__["database"]().ref(src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].REF_CHAT);
            this.chatRef.child(this.chatChild).limitToLast(20).on("child_added", function (snapshot, prevChildKey) {
              var newMessage = snapshot.val();

              if (newMessage) {
                newMessage.timeDiff = src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].formatMillisDateTimeWOYear(Number(newMessage.dateTimeStamp), src_models_helper_models__WEBPACK_IMPORTED_MODULE_7__["Helper"].getLocale());
                component.addMessage(newMessage);
                component.markDelivered();
                component.scrollList();
              }
            }, function (error) {
              console.error("child_added", error);
            });
            firebase_app__WEBPACK_IMPORTED_MODULE_11__["database"]().ref(src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].REF_USERS_FCM_IDS).child(this.chatObj.chatId).once("value", function (snap) {
              component.userPlayerId = snap.val();
            });
            this.translate.get("just_moment").subscribe(function (value) {
              return _this.uiElementService.presentToast(value);
            });
          }
        }
      }, {
        key: "scrollList",
        value: function scrollList() {
          // this.myContent.scrollToBottom(300);
          this.content.scrollToBottom(300);
        }
      }, {
        key: "markDelivered",
        value: function markDelivered() {
          if (this.messages && this.messages.length) {
            if (this.messages[this.messages.length - 1].senderId != this.chatObj.myId) {
              this.messages[this.messages.length - 1].delivered = true;
              this.chatRef.child(this.chatChild).child(this.messages[this.messages.length - 1].id).child("delivered").set(true);
            } // else {
            //   let toNotify;
            //   if (!this.messages[this.messages.length - 1].delivered) {
            //     toNotify = this.messages[this.messages.length - 1];
            //     this.messages[this.messages.length - 1].delivered = true;
            //   }
            //   if (toNotify) {
            //     this.notifyMessages(toNotify);
            //   }
            // }

          }
        }
      }, {
        key: "addMessage",
        value: function addMessage(msg) {
          this.messages = this.messages.concat(msg); //this.storage.set(Constants.KEY_MESSAGES + this.chatChild, this.messages);

          if (this.chatObj && msg) {
            var isMeSender = msg.senderId == this.chatObj.myId;
            this.chatObj.chatImage = isMeSender ? msg.recipientImage : msg.senderImage;
            this.chatObj.chatName = isMeSender ? msg.recipientName : msg.senderName; //this.chatObj.chatStatus = isMeSender ? msg.recipientStatus : msg.senderStatus;
          }
        }
      }, {
        key: "send",
        value: function send() {
          var _this2 = this;

          if (this.newMessageText && this.newMessageText.trim().length) {
            var toSend = new src_models_message_models__WEBPACK_IMPORTED_MODULE_8__["Message"]();
            toSend.chatId = this.chatChild;
            toSend.body = this.newMessageText;
            toSend.dateTimeStamp = String(new Date().getTime());
            toSend.delivered = false;
            toSend.sent = true;
            toSend.recipientId = this.chatObj.chatId;
            toSend.recipientImage = this.chatObj.chatImage;
            toSend.recipientName = this.chatObj.chatName;
            toSend.recipientStatus = this.chatObj.chatStatus;
            toSend.senderId = this.chatObj.myId;
            toSend.senderName = this.userMe.name;
            toSend.senderImage = this.userMe.image_url && this.userMe.image_url.length ? this.userMe.image_url : "assets/images/empty_dp.png";
            toSend.senderStatus = this.userMe.email;
            toSend.id = this.chatRef.child(this.chatChild).push().key;
            this.chatRef.child(this.chatChild).child(toSend.id).set(toSend).then(function (res) {
              _this2.inboxRef.child(toSend.recipientId).child(toSend.senderId).set(toSend);

              _this2.inboxRef.child(toSend.senderId).child(toSend.recipientId).set(toSend);

              _this2.newMessageText = '';

              _this2.notifyMessages();
            });
          } else {
            this.translate.get("type_message").subscribe(function (value) {
              return _this2.uiElementService.presentToast(value);
            });
          }
        }
      }, {
        key: "notifyMessages",
        value: function notifyMessages() {
          this.apiService.postNotification(src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROLE_DELIVERY, Number(this.chatObj.chatId) ? this.chatObj.chatId : this.chatObj.chatId.substring(0, this.chatObj.chatId.indexOf(src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROLE_DELIVERY))).subscribe(function (res) {
            return console.log("notiS", res);
          }, function (err) {
            return console.log("notiF", err);
          });
        }
      }]);

      return Chat2Page;
    }();

    Chat2Page.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_9__["UiElementsService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myContent", {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Chat2Page.prototype, "myContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])], Chat2Page.prototype, "content", void 0);
    Chat2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat2',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chat2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat2/chat2.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./chat2.page.scss */
      "./src/app/chat2/chat2.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_9__["UiElementsService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])], Chat2Page);
    /***/
  }
}]);
//# sourceMappingURL=chat2-chat2-module-es5.js.map