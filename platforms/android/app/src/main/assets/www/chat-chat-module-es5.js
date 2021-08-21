function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html": function node_modulesRawLoaderDistCjsJsSrcAppChatChatPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <div class=\"toolbar_inner d-flex\">\r\n            <ion-buttons slot=\"start\">\r\n                <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n            </ion-buttons>\r\n\r\n            <div class=\"d-flex user_details\">\r\n                <div class=\"img_box center_img\">\r\n                    <img [src]=\"chatObj.chatImage\" class=\"crop_img\">\r\n                </div>\r\n                <div class=\"text_box\">\r\n                    <h2>{{chatObj.chatName}}</h2>\r\n                    <h3>{{chatObj.chatStatus}}</h3>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #myContent fullscreen class=\"bg_color\">\r\n    <div class=\"chat_container d-flex\">\r\n        <div *ngFor=\"let msg of messages\"\r\n            [ngClass]=\"(chatObj.myId == msg.senderId) ? 'chat_box d-flex send' : 'chat_box d-flex  received'\">\r\n            <div class=\"chat\">\r\n                <h2>{{msg.body}}</h2>\r\n                <p>{{msg.timeDiff}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"footer_img\">\r\n        <img src=\"assets/images/chat_footer_img.png\">\r\n    </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n    <div class=\"form\">\r\n        <ion-list lines=\"none d-flex\">\r\n            <ion-item lines=\"none\">\r\n                <ion-input type=\"text\" [(ngModel)]=\"newMessageText\" placeholder=\"{{'write_your_message' | translate}}\">\r\n                </ion-input>\r\n            </ion-item>\r\n            <div class=\"send_btn end\" (click)=\"send()\">\r\n                <ion-icon class=\"zmdi zmdi-mail-send\"></ion-icon>\r\n            </div>\r\n        </ion-list>\r\n    </div>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/chat/chat-routing.module.ts": function srcAppChatChatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function () {
      return ChatPageRoutingModule;
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


    var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat.page */
    "./src/app/chat/chat.page.ts");

    var routes = [{
      path: '',
      component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
    }];

    var ChatPageRoutingModule = function ChatPageRoutingModule() {
      _classCallCheck(this, ChatPageRoutingModule);
    };

    ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/chat/chat.module.ts": function srcAppChatChatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPageModule", function () {
      return ChatPageModule;
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


    var _chat_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat-routing.module */
    "./src/app/chat/chat-routing.module.ts");
    /* harmony import */


    var _chat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./chat.page */
    "./src/app/chat/chat.page.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

    var ChatPageModule = function ChatPageModule() {
      _classCallCheck(this, ChatPageModule);
    };

    ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChatPageRoutingModule"]],
      providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]],
      declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_7__["ChatPage"]]
    })], ChatPageModule);
    /***/
  },

  /***/
  "./src/app/chat/chat.page.scss": function srcAppChatChatPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar .toolbar_inner {\n  align-items: flex-start;\n  position: relative;\n  overflow: hidden;\n  padding-bottom: 5px;\n}\nion-header ion-toolbar .toolbar_inner::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background: #ecf4f7;\n}\nion-header ion-toolbar .toolbar_inner .user_details {\n  align-items: flex-start;\n  position: relative;\n  z-index: 99;\n  padding-top: 12px;\n  overflow: hidden;\n  padding-right: 15px;\n}\nion-header ion-toolbar .toolbar_inner .user_details .img_box {\n  min-width: 55px;\n  height: 55px;\n  border-radius: 5px;\n  margin-right: 15px;\n}\nion-header ion-toolbar .toolbar_inner .user_details .text_box {\n  padding-top: 5px;\n}\nion-header ion-toolbar .toolbar_inner .user_details .text_box h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding: 0;\n  color: var(--text-dark);\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  padding-bottom: 18px;\n}\nion-header ion-toolbar .toolbar_inner .user_details .text_box h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.8rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  min-height: 30.4px;\n}\nion-header ion-title .title_inner {\n  width: 100%;\n  overflow: hidden;\n  padding-left: 30px;\n}\nion-header ion-title .title_inner h2 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 400;\n  overflow: hidden;\n}\nion-header ion-title .title_inner h2 span.name {\n  width: calc(100% - 40px);\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\nion-header ion-title .title_inner h2 ion-icon {\n  font-size: 1.3rem;\n  min-width: 30px;\n}\nion-header .appointment_details {\n  background: var(--white);\n}\nion-header .appointment_details h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.75rem;\n  padding: 14px 16px;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n}\nion-header .appointment_details h2 span {\n  min-width: 30px;\n  display: inline-block;\n  text-align: center;\n}\n.footer_img {\n  position: fixed;\n  bottom: 50px;\n  left: 0;\n  right: 0;\n  width: 100%;\n}\n.footer_img img {\n  width: auto;\n  max-width: calc(100% - 37px);\n  display: block;\n  margin: 0 auto;\n}\n.chat_container {\n  padding: 15px 15px;\n  flex-wrap: wrap;\n  position: relative;\n  z-index: 9;\n}\n.chat_container .chat_box {\n  width: auto !important;\n  margin-bottom: 20px;\n  min-width: 70%;\n  align-items: flex-start;\n}\n.chat_container .chat_box .chat {\n  min-width: 90px;\n  border-radius: 5px;\n  max-width: 100%;\n}\n.chat_container .chat_box .chat h2 {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--text-black);\n  line-height: 18px;\n  padding-bottom: 8px;\n}\n.chat_container .chat_box p {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: var(--text-light2);\n}\n.chat_container .chat_box.received .chat {\n  background: var(--white);\n  padding: 9px 50px 10px 14px;\n}\n.chat_container .chat_box.send {\n  margin-left: auto;\n  margin-right: 0;\n}\n.chat_container .chat_box.send .chat {\n  background: var(--primary);\n  padding: 9px 14px 10px 50px;\n  margin-left: auto;\n  margin-right: 0;\n}\n.chat_container .chat_box.send .chat h2 {\n  text-align: right;\n  color: var(--white);\n  font-weight: 400;\n}\n.chat_container .chat_box.send .chat p {\n  text-align: right;\n  color: var(--white);\n  opacity: 0.4;\n}\nion-footer {\n  background: var(--white);\n  box-shadow: 0 1px 38px 10px rgba(0, 0, 0, 0.1);\n}\nion-footer .form {\n  margin: 0;\n  width: 100%;\n  padding: 0;\n}\nion-footer .form ion-list {\n  padding: 0 !important;\n}\nion-footer .form ion-list ion-item {\n  border: none !important;\n  background: none;\n  margin: 0;\n  align-items: center;\n  border: 0 !important;\n  padding: 0px 17px !important;\n  --min-height: unset !important;\n  font-weight: 500 !important;\n}\nion-footer .form ion-list ion-item ion-input {\n  font-size: 0.95rem !important;\n  --placeholder-color: var(--text-light2) !important;\n  padding: 7px 0 !important;\n}\nion-footer .form ion-list .send_btn {\n  padding: 0 17px;\n  min-width: 30px;\n  position: relative;\n  top: 3px;\n}\nion-footer .form ion-list .send_btn ion-icon {\n  color: var(--primary);\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1jdXN0b21lci9zcmNcXGFwcFxcY2hhdFxcY2hhdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RaO0FER1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNEaEI7QURJWTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRmhCO0FESWdCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRnBCO0FES2dCO0VBQ0ksZ0JBQUE7QUNIcEI7QURLb0I7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDSHhCO0FETW9CO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDSnhCO0FEWVE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1ZaO0FEWVk7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDVmhCO0FEYW9CO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDWHhCO0FEZWdCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDYnBCO0FEbUJJO0VBQ0ksd0JBQUE7QUNqQlI7QURtQlE7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ2pCWjtBRG1CWTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDakJoQjtBRDJCQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDeEJKO0FEMEJJO0VBQ0ksV0FBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUN4QlI7QUQ0QkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUN6Qko7QUQyQkk7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDekJSO0FEMkJRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3pCWjtBRDJCWTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ3pCaEI7QUQ2QlE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDM0JaO0FEK0JZO0VBQ0ksd0JBQUE7RUFDQSwyQkFBQTtBQzdCaEI7QURpQ1E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUMvQlo7QURpQ1k7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDL0JoQjtBRGlDZ0I7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUMvQnBCO0FEa0NnQjtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDaENwQjtBRHVDQTtFQUNJLHdCQUFBO0VBQ0EsOENBQUE7QUNwQ0o7QURzQ0k7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNwQ1I7QURzQ1E7RUFDSSxxQkFBQTtBQ3BDWjtBRHNDWTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBQ3BDaEI7QURzQ2dCO0VBQ0ksNkJBQUE7RUFDQSxrREFBQTtFQUNBLHlCQUFBO0FDcENwQjtBRHdDWTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDdENoQjtBRHdDZ0I7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FDdENwQiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAudG9vbGJhcl9pbm5lciB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VjZjRmNztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVzZXJfZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMC40cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgLnRpdGxlX2lubmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuXHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJi5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcG9pbnRtZW50X2RldGFpbHMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy9pb24tY29udGVudCB7XHJcbi8vICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvY2hhdF9iZy5wbmcpIDAgMC8xMDAlIDEwMyUgbm8tcmVwZWF0O1xyXG4vL31cclxuXHJcbi5mb290ZXJfaW1nIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzN3B4KTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLmNoYXRfY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk7XHJcblxyXG4gICAgLmNoYXRfYm94IHtcclxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA3MCU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgIC5jaGF0IHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYucmVjZWl2ZWQge1xyXG4gICAgICAgICAgICAuY2hhdCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggNTBweCAxMHB4IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuc2VuZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcblxyXG4gICAgICAgICAgICAuY2hhdCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDlweCAxNHB4IDEwcHggNTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMzhweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHJcbiAgICAuZm9ybSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIGlvbi1saXN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDE3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZW5kX2J0biB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE3cHg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDNweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciAudG9vbGJhcl9pbm5lciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC50b29sYmFyX2lubmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZWNmNGY3O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAudG9vbGJhcl9pbm5lciAudXNlcl9kZXRhaWxzIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAudG9vbGJhcl9pbm5lciAudXNlcl9kZXRhaWxzIC5pbWdfYm94IHtcbiAgbWluLXdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAudG9vbGJhcl9pbm5lciAudXNlcl9kZXRhaWxzIC50ZXh0X2JveCB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC50b29sYmFyX2lubmVyIC51c2VyX2RldGFpbHMgLnRleHRfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC50b29sYmFyX2lubmVyIC51c2VyX2RldGFpbHMgLnRleHRfYm94IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiAzMC40cHg7XG59XG5pb24taGVhZGVyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuaW9uLWhlYWRlciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1oZWFkZXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBoMiBzcGFuLm5hbWUge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBoMiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBtaW4td2lkdGg6IDMwcHg7XG59XG5pb24taGVhZGVyIC5hcHBvaW50bWVudF9kZXRhaWxzIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xufVxuaW9uLWhlYWRlciAuYXBwb2ludG1lbnRfZGV0YWlscyBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbmlvbi1oZWFkZXIgLmFwcG9pbnRtZW50X2RldGFpbHMgaDIgc3BhbiB7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb290ZXJfaW1nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDUwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb290ZXJfaW1nIGltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDM3cHgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jaGF0X2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7XG59XG4uY2hhdF9jb250YWluZXIgLmNoYXRfYm94IHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWluLXdpZHRoOiA3MCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmNoYXRfY29udGFpbmVyIC5jaGF0X2JveCAuY2hhdCB7XG4gIG1pbi13aWR0aDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uY2hhdF9jb250YWluZXIgLmNoYXRfYm94IC5jaGF0IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbi5jaGF0X2NvbnRhaW5lciAuY2hhdF9ib3ggcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG59XG4uY2hhdF9jb250YWluZXIgLmNoYXRfYm94LnJlY2VpdmVkIC5jaGF0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiA5cHggNTBweCAxMHB4IDE0cHg7XG59XG4uY2hhdF9jb250YWluZXIgLmNoYXRfYm94LnNlbmQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLmNoYXRfY29udGFpbmVyIC5jaGF0X2JveC5zZW5kIC5jaGF0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDlweCAxNHB4IDEwcHggNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5jaGF0X2NvbnRhaW5lciAuY2hhdF9ib3guc2VuZCAuY2hhdCBoMiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmNoYXRfY29udGFpbmVyIC5jaGF0X2JveC5zZW5kIC5jaGF0IHAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgb3BhY2l0eTogMC40O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3gtc2hhZG93OiAwIDFweCAzOHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuaW9uLWZvb3RlciAuZm9ybSB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tZm9vdGVyIC5mb3JtIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCBpb24taXRlbSB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW46IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggMTdweCAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA3cHggMCAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCAuc2VuZF9idG4ge1xuICBwYWRkaW5nOiAwIDE3cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgLnNlbmRfYnRuIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/chat/chat.page.ts": function srcAppChatChatPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPage", function () {
      return ChatPage;
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


    var src_models_chat_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/models/chat.models */
    "./src/models/chat.models.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var src_models_message_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/models/message.models */
    "./src/models/message.models.ts");
    /* harmony import */


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
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

    var ChatPage = /*#__PURE__*/function () {
      function ChatPage(router, uiElementService, translate, iab, apiService) {
        _classCallCheck(this, ChatPage);

        this.router = router;
        this.uiElementService = uiElementService;
        this.translate = translate;
        this.iab = iab;
        this.apiService = apiService;
        this.messages = new Array();
        this.chatObj = new src_models_chat_models__WEBPACK_IMPORTED_MODULE_2__["Chat"]();
      }

      _createClass(ChatPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.router.getCurrentNavigation().extras.state) {
            this.chatObj = this.router.getCurrentNavigation().extras.state.chat;
            this.doctor_user = this.router.getCurrentNavigation().extras.state.doctor_user;
            this.userMe = this.apiService.getUserMe();
            this.chatChild = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getChatChild(this.chatObj.myId, this.chatObj.chatId);
            var component = this;
            this.inboxRef = firebase_app__WEBPACK_IMPORTED_MODULE_11__["database"]().ref(src_models_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].REF_INBOX);
            this.chatRef = firebase_app__WEBPACK_IMPORTED_MODULE_11__["database"]().ref(src_models_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].REF_CHAT);
            this.chatRef.child(this.chatChild).limitToLast(20).on("child_added", function (snapshot, prevChildKey) {
              var newMessage = snapshot.val();

              if (newMessage) {
                newMessage.timeDiff = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].formatMillisDateTimeWOYear(Number(newMessage.dateTimeStamp), src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getLocale());
                component.addMessage(newMessage);
                component.markDelivered();
                component.scrollList();
              }
            }, function (error) {
              console.error("child_added", error);
            });
            firebase_app__WEBPACK_IMPORTED_MODULE_11__["database"]().ref(src_models_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].REF_USERS_FCM_IDS).child(this.chatObj.chatId).once("value", function (snap) {
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
          this.myContent.scrollToBottom(300);
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
            var toSend = new src_models_message_models__WEBPACK_IMPORTED_MODULE_7__["Message"]();
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
        key: "dialDoctor",
        value: function dialDoctor() {
          this.iab.create("https://api.whatsapp.com/send?phone=" + this.doctor_user.mobile_number, "_system");
        }
      }, {
        key: "notifyMessages",
        value: function notifyMessages() {
          this.apiService.postNotification(src_models_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].ROLE_DOCTOR, Number(this.chatObj.chatId) ? this.chatObj.chatId : this.chatObj.chatId.substring(0, this.chatObj.chatId.indexOf(src_models_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].ROLE_DOCTOR))).subscribe(function (res) {
            return console.log("notiS", res);
          }, function (err) {
            return console.log("notiF", err);
          });
        }
      }]);

      return ChatPage;
    }();

    ChatPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myContent", {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ChatPage.prototype, "myContent", void 0);
    ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chat.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./chat.page.scss */
      "./src/app/chat/chat.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]])], ChatPage);
    /***/
  }
}]);
//# sourceMappingURL=chat-chat-module-es5.js.map