function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-my-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html": function node_modulesRawLoaderDistCjsJsSrcAppMyProfileMyProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'my_profile' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"form\">\r\n\t\t<div class=\"img_container\">\r\n\t\t\t<div *ngIf=\"userMe && userMe.image_url\" class=\"img_box center_img\">\r\n\t\t\t\t<img [src]=\"userMe.image_url\" class=\"crop_img\">\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"!userMe || !userMe.image_url\" class=\"img_box center_img\">\r\n\t\t\t\t<img src=\"assets/images/empty_dp.png\" class=\"crop_img\">\r\n\t\t\t</div>\r\n\t\t\t<ion-icon class=\"zmdi zmdi-camera\" (click)=\"pickImage()\"></ion-icon>\r\n\t\t</div>\r\n\t\t<ion-list lines=\"none\">\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<ion-label position=\"fixed\">{{'user_name' | translate}}</ion-label>\r\n\t\t\t\t<ion-input class=\"ion-text-end\" [(ngModel)]=\"userMe.name\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<ion-label position=\"fixed\">{{'email_address' | translate}}</ion-label>\r\n\t\t\t\t<ion-input class=\"ion-text-end\" [(ngModel)]=\"userMe.email\" disabled readonly></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<ion-label position=\"fixed\">{{'phone_number' | translate}}</ion-label>\r\n\t\t\t\t<ion-input class=\"ion-text-end\" [(ngModel)]=\"userMe.mobile_number\" disabled readonly></ion-input>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"saveMe()\">\r\n\t\t\t\t{{'save' | translate}}\r\n\t\t\t</ion-button>\r\n\t\t</ion-list>\r\n\t</div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile-routing.module.ts": function srcAppMyProfileMyProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePageRoutingModule", function () {
      return MyProfilePageRoutingModule;
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


    var _my_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-profile.page */
    "./src/app/my-profile/my-profile.page.ts");

    var routes = [{
      path: '',
      component: _my_profile_page__WEBPACK_IMPORTED_MODULE_3__["MyProfilePage"]
    }];

    var MyProfilePageRoutingModule = function MyProfilePageRoutingModule() {
      _classCallCheck(this, MyProfilePageRoutingModule);
    };

    MyProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile.module.ts": function srcAppMyProfileMyProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function () {
      return MyProfilePageModule;
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


    var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-profile-routing.module */
    "./src/app/my-profile/my-profile-routing.module.ts");
    /* harmony import */


    var _my_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./my-profile.page */
    "./src/app/my-profile/my-profile.page.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");

    var MyProfilePageModule = function MyProfilePageModule() {
      _classCallCheck(this, MyProfilePageModule);
    };

    MyProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyProfilePageRoutingModule"]],
      providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__["Crop"]],
      declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_7__["MyProfilePage"]]
    })], MyProfilePageModule);
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile.page.scss": function srcAppMyProfileMyProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form {\n  padding-top: 40px;\n}\n.form .img_container {\n  position: relative;\n  width: 113px;\n  margin: 0 auto;\n  margin-bottom: 40px;\n}\n.form .img_container .img_box {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n}\n.form .img_container ion-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  font-size: 1.1rem;\n  text-align: center;\n  border-radius: 50%;\n  background: var(--primary);\n  color: var(--white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcHJvZmlsZS9GOlxcZml2ZXJcXEJlcm5hcmRcXERvY3RvciBXb3JsZFxcRG9jdG9Xb3JsZF9BcHBDb2RlIChWaWRlbyBDYWxsKS0yMDIxMDgwOVQxMDE0MDdaLTAwMVxcRG9jdG9Xb3JsZF9BcHBDb2RlIChWaWRlbyBDYWxsKVxcZG9jdG93b3JsZF9jdXN0b21lclxcZG9jdG93b3JsZF9jdXN0b21lci9zcmNcXGFwcFxcbXktcHJvZmlsZVxcbXktcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL215LXByb2ZpbGUvbXktcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxpQkFBQTtBQ0NEO0FEQ0M7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NIO0FERUU7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ0FIIiwiZmlsZSI6InNyYy9hcHAvbXktcHJvZmlsZS9teS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuXHRwYWRkaW5nLXRvcDogNDBweDtcclxuXHJcblx0LmltZ19jb250YWluZXIge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDExM3B4O1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuXHRcdC5pbWdfYm94IHtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHR3aWR0aDogMTAwcHg7XHJcblx0XHRcdGhlaWdodDogMTAwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0aW9uLWljb24ge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0bWFyZ2luOiBhdXRvIDA7XHJcblx0XHRcdHdpZHRoOiAyOHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDI4cHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5cdFx0XHRmb250LXNpemU6IDEuMXJlbTtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG5cdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsIi5mb3JtIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uZm9ybSAuaW1nX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDExM3B4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5mb3JtIC5pbWdfY29udGFpbmVyIC5pbWdfYm94IHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG4uZm9ybSAuaW1nX2NvbnRhaW5lciBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG8gMDtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile.page.ts": function srcAppMyProfileMyProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePage", function () {
      return MyProfilePage;
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


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _services_network_firebase_uploader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/network/firebase-uploader.service */
    "./src/app/services/network/firebase-uploader.service.ts");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/events/my-events.service */
    "./src/app/services/events/my-events.service.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");

    var MyProfilePage = /*#__PURE__*/function () {
      function MyProfilePage(uiElementService, fireUpService, apiService, platform, cropService, translate, alertCtrl, camera, myEvent) {
        _classCallCheck(this, MyProfilePage);

        this.uiElementService = uiElementService;
        this.fireUpService = fireUpService;
        this.apiService = apiService;
        this.platform = platform;
        this.cropService = cropService;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.myEvent = myEvent; // setTimeout(() => {
        //   this.saveMe({ image_url: "https://i.picsum.photos/id/829/200/200.jpg?hmac=UR6WfoHy282eoIXjFzEm86pUeBNLQsX71BUthF-sOvM" });
        // }, 5000);
      }

      _createClass(MyProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userMe = this.apiService.getUserMe();
        }
      }, {
        key: "pickImage",
        value: function pickImage() {
          var _this = this;

          this.translate.get(["image_pic_header", "image_pic_subheader", "image_pic_camera", "image_pic_gallery"]).subscribe(function (values) {
            _this.alertCtrl.create({
              header: values["image_pic_header"],
              message: values["image_pic_subheader"],
              buttons: [{
                text: values["image_pic_camera"],
                handler: function handler() {
                  _this.getImageCamera();
                }
              }, {
                text: values["image_pic_gallery"],
                handler: function handler() {
                  _this.getImageGallery();
                }
              }]
            }).then(function (alert) {
              return alert.present();
            });
          });
        }
      }, {
        key: "getImageGallery",
        value: function getImageGallery() {
          var _this2 = this;

          var component = this;
          this.platform.ready().then(function () {
            if (_this2.platform.is("android")) {
              //{ "mime": "application/pdf" }  // text/plain, image/png, image/jpeg, audio/wav etc
              //(<any>window).fileChooser.open({ "mime": component.uploadType == 1 ? "image/jpeg" : "application/*" }, (uri) => component.resolveUri(uri), (err) => console.log("fileChooser", err)); // with mime filter
              window.fileChooser.open({
                "mime": "image/*"
              }, function (uri) {
                return component.reduceImages(uri);
              }, function (err) {
                return console.log("fileChooser", err);
              }); // with mime filter
            } else {
              var gpr = {
                maximumImagesCount: 1,
                disable_popover: 1
              };
              window.imagePicker.getPictures(gpr).then(function (results) {
                if (results && results[0]) _this2.reduceImages(results[0]);
              }, function (err) {
                console.log("getPictures", JSON.stringify(err));
              });
            }
          });
        }
      }, {
        key: "reduceImages",
        value: function reduceImages(selected_pictures) {
          var _this3 = this;

          // return selected_pictures.reduce((promise: any, item: any) => {
          //   return promise.then((result) => {
          //     return this.cropService.crop(item, { quality: 100 }).then(cropped_image => this.uploadImage(cropped_image));
          //   });
          // }, Promise.resolve());
          this.cropService.crop(selected_pictures, {
            quality: 100
          }).then(function (cropped_image) {
            return _this3.uploadImage(cropped_image);
          });
        }
      }, {
        key: "getImageCamera",
        value: function getImageCamera() {
          var _this4 = this;

          var options = {
            quality: 75,
            destinationType: this.platform.is("android") ? this.camera.DestinationType.FILE_URI : this.camera.DestinationType.NATIVE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          this.camera.getPicture(options).then(function (imageData) {
            return _this4.reduceImages(imageData);
          }, function (err) {
            _this4.translate.get('camera_err').subscribe(function (value) {
              return _this4.uiElementService.presentToast(value, "top");
            });

            console.log("getPicture", JSON.stringify(err));
          });
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(imageUri) {
          var _this5 = this;

          this.translate.get(["uploading_image", "uploading_fail"]).subscribe(function (values) {
            _this5.uiElementService.presentLoading(values["uploading_image"]);

            _this5.fireUpService.resolveUriAndUpload(imageUri).then(function (res) {
              console.log("resolveUriAndUpload", res);

              _this5.uiElementService.dismissLoading();

              _this5.saveMe({
                image_url: String(res)
              });
            }, function (err) {
              console.log("resolveUriAndUpload", err);

              _this5.uiElementService.dismissLoading();

              _this5.uiElementService.presentErrorAlert(values["uploading_fail"]);
            });
          });
        }
      }, {
        key: "saveMe",
        value: function saveMe(updateRequestIn) {
          var _this6 = this;

          var uur = updateRequestIn != null ? updateRequestIn : {
            name: this.userMe.name
          };
          this.translate.get(["saving", "something_wrong"]).subscribe(function (values) {
            _this6.uiElementService.presentLoading(values["saving"]);

            _this6.apiService.updateUser(uur).subscribe(function (res) {
              _this6.uiElementService.dismissLoading();

              src_models_helper_models__WEBPACK_IMPORTED_MODULE_8__["Helper"].setLoggedInUser(res);

              _this6.myEvent.setUserMeData(res);
            }, function (err) {
              console.log("updateUser", err);

              _this6.uiElementService.dismissLoading();

              _this6.uiElementService.presentErrorAlert(values["something_wrong"]);
            });
          });
        }
      }]);

      return MyProfilePage;
    }();

    MyProfilePage.ctorParameters = function () {
      return [{
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_2__["UiElementsService"]
      }, {
        type: _services_network_firebase_uploader_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseUploaderService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__["Crop"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"]
      }, {
        type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_7__["MyEventsService"]
      }];
    };

    MyProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-profile.page.scss */
      "./src/app/my-profile/my-profile.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_2__["UiElementsService"], _services_network_firebase_uploader_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseUploaderService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__["Crop"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_7__["MyEventsService"]])], MyProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=my-profile-my-profile-module-es5.js.map