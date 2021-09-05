function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469"], {
  /***/
  "./src/app/services/shoup-hour-services/network/api.service.ts": function srcAppServicesShoupHourServicesNetworkApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/models/models-shop-hour/helper.models */
    "./src/models/models-shop-hour/helper.models.ts");
    /* harmony import */


    var src_models_models_shop_hour_rating_summary_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/models/models-shop-hour/rating-summary.models */
    "./src/models/models-shop-hour/rating-summary.models.ts");
    /* harmony import */


    var src_app_shophour_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shophour.config */
    "./src/app/shophour.config.ts");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(config, http) {
        _classCallCheck(this, ApiService);

        this.config = config;
        this.http = http;
        this.reviewedIds = new Array();
        this.uuid = "xxx";
        this.platform = "android";
      }

      _createClass(ApiService, [{
        key: "reloadSetting",
        value: function reloadSetting() {
          this.currency_icon = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getSetting("currency_icon");
          this.locale = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getSetting("locale");
        }
      }, {
        key: "reloadItemsReviewed",
        value: function reloadItemsReviewed() {
          this.reviewedIds = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getReviewedProductIds();
        }
      }, {
        key: "setupHeaders",
        value: function setupHeaders(authToken) {
          var tokenToUse = authToken ? authToken : src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getToken();
          var savedLanguageCode = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getLanguageDefault();
          this.myHeaders = tokenToUse ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenToUse,
            'X-Localization': String(savedLanguageCode ? savedLanguageCode : this.config.availableLanguages[0].code),
            'X-Device-Id': this.uuid ? this.uuid : "xxx",
            'X-Device-Type': this.platform ? this.platform : "android"
          }) : new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Localization': String(savedLanguageCode ? savedLanguageCode : this.config.availableLanguages[0].code),
            'X-Device-Id': this.uuid ? this.uuid : "xxx",
            'X-Device-Type': this.platform ? this.platform : "android"
          });
        }
      }, {
        key: "setUuidAndPlatform",
        value: function setUuidAndPlatform(uuid, platform) {
          this.uuid = uuid;
          this.platform = platform ? String(platform).toLowerCase() : platform;
          this.setupHeaders();
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          return this.http.get('./assets/json/countries.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            var indiaIndex = -1; // if (data) {
            //   for (let i = 0; i < data.length; i++) {
            //     if (data[i].name == "India") {
            //       indiaIndex = i;
            //       break;
            //     }
            //   }
            // }

            if (indiaIndex != -1) data.unshift(data.splice(indiaIndex, 1)[0]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCountries', [])));
        }
      }, {
        key: "getURL",
        value: function getURL(url) {
          return this.http.get(url, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getSettings",
        value: function getSettings() {
          return this.http.get(this.config.apiBase + 'api/settings', {
            headers: this.myHeaders
          });
        }
      }, {
        key: "submitSupport",
        value: function submitSupport(supportRequest) {
          return this.http.post(this.config.apiBase + "api/support", supportRequest, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "checkUser",
        value: function checkUser(checkUserRequest) {
          return this.http.post(this.config.apiBase + 'api/check-user', checkUserRequest, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "loginSocial",
        value: function loginSocial(socialLoginRequest) {
          var _this = this;

          return this.http.post(this.config.apiBase + 'api/social/login', socialLoginRequest, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            return _this.setupUserMe(data);
          }));
        }
      }, {
        key: "loginUser",
        value: function loginUser(loginTokenRequest) {
          var _this2 = this;

          return this.http.post(this.config.apiBase + 'api/login', loginTokenRequest, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            return _this2.setupUserMe(data);
          }));
        }
      }, {
        key: "createUser",
        value: function createUser(signUpRequest) {
          var _this3 = this;

          return this.http.post(this.config.apiBase + 'api/register', signUpRequest, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            return _this3.setupUserMe(data);
          }));
        }
      }, {
        key: "updateUser",
        value: function updateUser(updateRequest) {
          var _this4 = this;

          return this.http.put(this.config.apiBase + 'api/user', updateRequest, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            return _this4.setupUserMe(data);
          }));
        }
      }, {
        key: "rateUser",
        value: function rateUser(uId, rateRequest) {
          return this.http.post(this.config.apiBase + "api/user/ratings/" + uId, JSON.stringify(rateRequest), {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getCategoriesParents",
        value: function getCategoriesParents(scope) {
          var _this5 = this;

          return this.http.get(this.config.apiBase + "api/categories?pagination=0&parent=1&scope=" + scope, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            if (data && data.length) {
              var _iterator = _createForOfIteratorHelper(data),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var cat = _step.value;

                  _this5.setupCategory(cat);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }) //, catchError(this.handleError<Array<Category>>('getCategoriesParents', this.getTestCategories()))
          );
        }
      }, {
        key: "getBanners",
        value: function getBanners(scope) {
          var _this6 = this;

          return this.http.get(this.config.apiBase + "api/banners?pagination=0&parent=1&scope=" + scope, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            if (data && data.length) {
              var _iterator2 = _createForOfIteratorHelper(data),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var cat = _step2.value;

                  _this6.setupCategory(cat);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }) //, catchError(this.handleError<Array<Category>>('getCategoriesParents', this.getTestCategories()))
          );
        }
      }, {
        key: "getCategoriesSub",
        value: function getCategoriesSub(scope, parentId) {
          var _this7 = this;

          return this.http.get(this.config.apiBase + "api/categories?pagination=0&category=" + parentId + "&scope=" + scope, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            if (data && data.length) {
              var _iterator3 = _createForOfIteratorHelper(data),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var cat = _step3.value;

                  _this7.setupCategory(cat);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }) //, catchError(this.handleError<Array<Category>>('getCategoriesSub', this.getTestCategories()))
          );
        }
      }, {
        key: "getProductsFavorite",
        value: function getProductsFavorite() {
          var _this8 = this;

          return this.http.get(this.config.apiBase + "api/products/favourites/list", {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            if (data && data.length) {
              var _iterator4 = _createForOfIteratorHelper(data),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var pro = _step4.value;

                  _this8.setupProduct(pro);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }
          }) //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
          );
        }
      }, {
        key: "getProductsWithQuery",
        value: function getProductsWithQuery(query, page) {
          var _this9 = this;

          this.reloadSetting();
          var urlParams = new URLSearchParams();
          urlParams.append("search", query);
          urlParams.append("page", String(page));
          return this.http.get(this.config.apiBase + "api/products?" + urlParams.toString(), {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            if (data && data.data && data.data.length) {
              var _iterator5 = _createForOfIteratorHelper(data.data),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var pro = _step5.value;

                  _this9.setupProduct(pro);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          }) //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
          );
        }
      }, {
        key: "getProductsWithCategoryId",
        value: function getProductsWithCategoryId(scope, categoryId, type, page) {
          var _this10 = this;

          this.reloadSetting();
          var urlParams = new URLSearchParams();
          urlParams.append("category", String(categoryId));
          urlParams.append("page", String(page));
          urlParams.append("scope", scope);
          if (type != null) urlParams.append("vendor_type", type);
          return this.http.get(this.config.apiBase + "api/products?" + urlParams.toString(), {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            if (data && data.data && data.data.length) {
              var _iterator6 = _createForOfIteratorHelper(data.data),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var pro = _step6.value;

                  _this10.setupProduct(pro);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
          }) //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
          );
        }
      }, {
        key: "getProductsWithVendorId",
        value: function getProductsWithVendorId(vendorId, page) {
          var _this11 = this;

          this.reloadSetting();
          return this.http.get(this.config.apiBase + "api/products?vendor=" + vendorId + "&page=" + page, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            if (data && data.data && data.data.length) {
              var _iterator7 = _createForOfIteratorHelper(data.data),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var pro = _step7.value;

                  _this11.setupProduct(pro);
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          }) //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
          );
        }
      }, {
        key: "getProductsWithId",
        value: function getProductsWithId(productId) {
          var _this12 = this;

          this.reloadSetting();
          return this.http.get(this.config.apiBase + "api/products/" + productId, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            _this12.setupProduct(data);
          }) //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
          );
        }
      }, {
        key: "toggleProductFavorite",
        value: function toggleProductFavorite(productId) {
          return this.http.post(this.config.apiBase + "api/products/favourites/" + productId, {}, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getPaymentMethods",
        value: function getPaymentMethods() {
          return this.http.get(this.config.apiBase + 'api/payment/methods', {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getAddresses",
        value: function getAddresses() {
          return this.http.get(this.config.apiBase + 'api/addresses', {
            headers: this.myHeaders
          });
        }
      }, {
        key: "addressAdd",
        value: function addressAdd(address) {
          return this.http.post(this.config.apiBase + 'api/addresses', address, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "addressUpdate",
        value: function addressUpdate(address) {
          return this.http.put(this.config.apiBase + 'api/addresses/' + address.id + '/update', address, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "createOrder",
        value: function createOrder(orderRequest) {
          return this.http.post(this.config.apiBase + 'api/orders', orderRequest, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "checkCoupon",
        value: function checkCoupon(couponCode) {
          return this.http.get(this.config.apiBase + 'api/coupons/check-validity?code=' + couponCode, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getOrderById",
        value: function getOrderById(orderId) {
          var _this13 = this;

          this.reloadSetting();
          this.reloadItemsReviewed();
          return this.http.get(this.config.apiBase + "api/orders/" + orderId, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            _this13.setupOrder(data);
          }));
        }
      }, {
        key: "getOrders",
        value: function getOrders(pageNo) {
          var _this14 = this;

          this.reloadSetting();
          this.reloadItemsReviewed();
          return this.http.get(this.config.apiBase + "api/orders?page=" + pageNo, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            var _iterator8 = _createForOfIteratorHelper(data.data),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var order = _step8.value;

                _this14.setupOrder(order);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }));
        }
      }, {
        key: "getCoupons",
        value: function getCoupons() {
          return this.http.get(this.config.apiBase + "api/coupons", {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getRatingSummaryProduct",
        value: function getRatingSummaryProduct(productId) {
          return this.http.get(this.config.apiBase + "api/products/ratings/summary/" + productId, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            var ratingSummaries = src_models_models_shop_hour_rating_summary_models__WEBPACK_IMPORTED_MODULE_6__["RatingSummary"].defaultArray();

            var _iterator9 = _createForOfIteratorHelper(data.summary),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var ratingSummaryResult = _step9.value;
                ratingSummaries[ratingSummaryResult.rounded_rating - 1].total = ratingSummaryResult.total;
                ratingSummaries[ratingSummaryResult.rounded_rating - 1].percent = ratingSummaryResult.total / data.total_ratings * 100;
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            data.summary = ratingSummaries;
          }));
        }
      }, {
        key: "getReviewsProduct",
        value: function getReviewsProduct(productId, pageNo) {
          return this.http.get(this.config.apiBase + "api/products/ratings/" + productId + "?page=" + pageNo, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            var locale = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getLocale();

            var _iterator10 = _createForOfIteratorHelper(data.data),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var review = _step10.value;
                review.created_at = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].formatTimestampDate(review.created_at, locale);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }));
        }
      }, {
        key: "postReviewProduct",
        value: function postReviewProduct(productId, rr) {
          return this.http.post(this.config.apiBase + "api/products/ratings/" + productId, rr, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "setupOrder",
        value: function setupOrder(order) {
          order.created_at = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].formatTimestampDate(order.created_at, this.locale);
          if (order.scheduled_on) order.scheduled_on = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].formatTimestampDate(order.scheduled_on, this.locale);
          order.total_toshow = this.currency_icon + Number(order.total).toFixed(2);
          order.subtotal_toshow = this.currency_icon + Number(order.subtotal).toFixed(2);
          if (order.delivery_fee) order.delivery_fee_toshow = this.currency_icon + Number(order.delivery_fee).toFixed(2);
          if (order.discount) order.discount_toshow = this.currency_icon + Number(order.discount).toFixed(2);
          if (order.taxes) order.taxes_toshow = this.currency_icon + Number(order.taxes).toFixed(2);

          var _iterator11 = _createForOfIteratorHelper(order.products),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var product = _step11.value;
              product.total_toshow = this.currency_icon + Number(product.total).toFixed(2);

              if (product.vendor_product && product.vendor_product.product) {
                if (!product.vendor_product.product.price) product.vendor_product.product.price = 0;
                product.vendor_product.product.priceToShow = this.currency_icon + Number(product.vendor_product.product.price).toFixed(2);
                product.vendor_product.product.images = new Array();

                if (product.vendor_product.product.mediaurls && product.vendor_product.product.mediaurls.images) {
                  var _iterator14 = _createForOfIteratorHelper(product.vendor_product.product.mediaurls.images),
                      _step14;

                  try {
                    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                      var _imgObj2 = _step14.value;
                      if (_imgObj2["default"]) product.vendor_product.product.images.push(_imgObj2["default"]);
                    }
                  } catch (err) {
                    _iterator14.e(err);
                  } finally {
                    _iterator14.f();
                  }
                }

                if (!product.vendor_product.product.images.length) product.vendor_product.product.images.push("assets/images/plc_item_image.png"); //custom

                product.vendor_product.product.reviewed = this.reviewedIds != null && this.reviewedIds.includes(String(String(order.id) + String(product.vendor_product.product.id)));
              }
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }

          if (order.vendor) {
            if (!order.vendor.mediaurls || !order.vendor.mediaurls.images) order.vendor.mediaurls = {
              images: []
            };
            order.vendor.image = "assets/images/plc_seller_profile.png";

            var _iterator12 = _createForOfIteratorHelper(order.vendor.mediaurls.images),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var imgObj = _step12.value;

                if (imgObj["default"]) {
                  order.vendor.image = imgObj["default"];
                  break;
                }
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
          }

          if (order.delivery) {
            order.delivery.delivery.user.image_url = "assets/images/empty_dp";
            if (!order.delivery.delivery.user.mediaurls || !order.delivery.delivery.user.mediaurls.images) order.delivery.delivery.user.mediaurls = {
              images: []
            };

            var _iterator13 = _createForOfIteratorHelper(order.delivery.delivery.user.mediaurls.images),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _imgObj = _step13.value;

                if (_imgObj["default"]) {
                  order.delivery.delivery.user.image_url = _imgObj["default"];
                  break;
                }
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }
        }
      }, {
        key: "setupCategory",
        value: function setupCategory(category) {
          if (category.mediaurls && category.mediaurls.images) {
            var _iterator15 = _createForOfIteratorHelper(category.mediaurls.images),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var imgObj = _step15.value;

                if (imgObj["default"]) {
                  category.image = imgObj["default"];
                  break;
                }
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }
          }

          if (!category.image) category.image = "assets/images/plc_item_image.png";
        }
      }, {
        key: "setupProduct",
        value: function setupProduct(product) {
          //product.prescription_required = (product.meta && product.meta.prescription);
          if (!product.ratings) product.ratings = 0;
          if (!product.ratings_count) product.ratings_count = 0;
          if (!product.price) product.price = 0;
          product.priceToShow = this.currency_icon + product.price.toFixed(2);
          product.ratings = Number(product.ratings.toFixed(2));
          product.vendorText = "";

          if (product.vendor_products && product.vendor_products.length) {
            var _iterator16 = _createForOfIteratorHelper(product.vendor_products),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var vp = _step16.value;
                if (!vp.sale_price) vp.sale_price = 0;
                vp.priceToShow = this.currency_icon + vp.price.toFixed(2);
                vp.sale_priceToShow = this.currency_icon + vp.sale_price.toFixed(2);

                if (vp.vendor) {
                  if (!vp.vendor.mediaurls || !vp.vendor.mediaurls.images) vp.vendor.mediaurls = {
                    images: []
                  };
                  vp.vendor.image = "assets/images/plc_seller_profile.png";

                  var _iterator17 = _createForOfIteratorHelper(vp.vendor.mediaurls.images),
                      _step17;

                  try {
                    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                      var imgObj = _step17.value;

                      if (imgObj["default"]) {
                        vp.vendor.image = imgObj["default"];
                        break;
                      }
                    }
                  } catch (err) {
                    _iterator17.e(err);
                  } finally {
                    _iterator17.f();
                  }

                  product.vendorText += vp.vendor.name + ", ";
                }
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }
          }

          if (product.vendorText.length) product.vendorText = product.vendorText.substring(0, product.vendorText.length - 2);

          if (product.categories && product.categories.length) {
            var _iterator18 = _createForOfIteratorHelper(product.categories),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var cat = _step18.value;
                this.setupCategory(cat);
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
          }

          product.images = new Array();

          if (product.mediaurls && product.mediaurls.images) {
            var _iterator19 = _createForOfIteratorHelper(product.mediaurls.images),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var _imgObj3 = _step19.value;
                if (_imgObj3["default"]) product.images.push(_imgObj3["default"]);
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }
          }

          if (!product.images.length) product.images.push("assets/images/plc_item_image.png");
        }
      }, {
        key: "setupUserMe",
        value: function setupUserMe(data) {
          if (!data.mediaurls || !data.mediaurls.images) data.mediaurls = {
            images: []
          };

          if (!data.image_url) {
            var _iterator20 = _createForOfIteratorHelper(data.mediaurls.images),
                _step20;

            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                var imgObj = _step20.value;

                if (imgObj["default"]) {
                  data.image_url = imgObj["default"];
                  break;
                }
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }
          }
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption

            console.log("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
          };
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [src_app_shophour_config__WEBPACK_IMPORTED_MODULE_7__["APP_CONFIG_ShopHour"]]
        }]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_shophour_config__WEBPACK_IMPORTED_MODULE_7__["APP_CONFIG_ShopHour"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ApiService);
    /***/
  },

  /***/
  "./src/models/models-shop-hour/constants.models.ts": function srcModelsModelsShopHourConstantsModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });

    var Constants = function Constants() {
      _classCallCheck(this, Constants);
    };

    Constants.KEY_DEFAULT_LANGUAGE = 'shophourc_dl';
    Constants.KEY_USER = 'shophourc_user';
    Constants.KEY_NOTIFICATIONS = 'shophourc_notis';
    Constants.KEY_TOKEN = 'shophourc_token';
    Constants.KEY_SETTINGS = 'shophourc_settings';
    Constants.KEY_ADDRESS = 'shophourc_address';
    Constants.KEY_ADDRESSES = 'shophourc_addresses';
    Constants.KEY_APPOINT_REQ = 'shophourc_appoint_req';
    Constants.KEY_APPOINT_MYRATES = 'shophourc_appoint_myrates';
    Constants.KEY_LOCALE = "shophourc_locale";
    Constants.KEY_SETECT_ADDRESS = 'shophourc_setect_address';
    Constants.KEY_REVIEWED_PRODUCTS = 'shophourc_reviewed_products';
    Constants.KEY_SEARCH_HISTORY = 'shophourc_search_history';
    Constants.REF_USERS = "fire_app/users";
    Constants.REF_CHAT = "fire_app/chats";
    Constants.REF_INBOX = "fire_app/inbox";
    Constants.REF_USERS_FCM_IDS = "fire_app/user_fcm_ids";
    Constants.SCOPE_ECOMMERCE = "ecommerce";
    Constants.SCOPE_SPECIALIZATION = "specializations";
    Constants.ROLE_USER = "customer";
    Constants.ROLE_VENDOR = "vendor";
    Constants.ROLE_DELIVERY = "delivery";
    /***/
  },

  /***/
  "./src/models/models-shop-hour/helper.models.ts": function srcModelsModelsShopHourHelperModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Helper", function () {
      return Helper;
    });
    /* harmony import */


    var _constants_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./constants.models */
    "./src/models/models-shop-hour/constants.models.ts");
    /* harmony import */


    var _notification_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./notification.models */
    "./src/models/models-shop-hour/notification.models.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

    var Helper = /*#__PURE__*/function () {
      function Helper() {
        _classCallCheck(this, Helper);
      }

      _createClass(Helper, null, [{
        key: "formatPhone",
        value: function formatPhone(phone) {
          var toReturn = phone.replace(/\s/g, '');

          while (toReturn.startsWith("0")) {
            toReturn = toReturn.substring(1);
          }

          return toReturn;
        }
      }, {
        key: "setSearchHistory",
        value: function setSearchHistory(sh) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_SEARCH_HISTORY, JSON.stringify(sh));
        }
      }, {
        key: "getSearchHistory",
        value: function getSearchHistory() {
          var adl = JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_SEARCH_HISTORY));
          return adl && adl.length ? adl : new Array();
        }
      }, {
        key: "getReviewedProductIds",
        value: function getReviewedProductIds() {
          var adl = JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_REVIEWED_PRODUCTS));
          return adl && adl.length ? adl : new Array();
        }
      }, {
        key: "addReviewedProductId",
        value: function addReviewedProductId(id) {
          var adl = this.getReviewedProductIds();
          adl.push(id);
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_REVIEWED_PRODUCTS, JSON.stringify(adl));
        }
      }, {
        key: "setAddresses",
        value: function setAddresses(addresses) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_ADDRESSES, JSON.stringify(addresses));
        }
      }, {
        key: "getAddresses",
        value: function getAddresses() {
          var adl = JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_ADDRESSES));
          return adl && adl.length ? adl : new Array();
        }
      }, {
        key: "setSettings",
        value: function setSettings(settings) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_SETTINGS, JSON.stringify(settings));
        }
      }, {
        key: "getSettings",
        value: function getSettings() {
          return JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_SETTINGS));
        }
      }, {
        key: "setLoggedInUser",
        value: function setLoggedInUser(user) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_USER, JSON.stringify(user));
        }
      }, {
        key: "setLoggedInUserResponse",
        value: function setLoggedInUserResponse(authRes) {
          window.localStorage.removeItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_USER);
          window.localStorage.removeItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_TOKEN);
          window.localStorage.removeItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_ADDRESS);
          window.localStorage.removeItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_ADDRESSES);
          window.localStorage.removeItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_NOTIFICATIONS);

          if (authRes && authRes.user && authRes.token) {
            window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_USER, JSON.stringify(authRes.user));
            window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_TOKEN, authRes.token);
          }
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_TOKEN);
        }
      }, {
        key: "getLoggedInUser",
        value: function getLoggedInUser() {
          return JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_USER));
        }
      }, {
        key: "getAddressSelected",
        value: function getAddressSelected() {
          return JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_ADDRESS));
        }
      }, {
        key: "getSetectedAddress",
        value: function getSetectedAddress() {
          return JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_SETECT_ADDRESS));
        }
      }, {
        key: "getLocale",
        value: function getLocale() {
          var sl = window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_LOCALE);
          return sl && sl.length ? sl : "en";
        }
      }, {
        key: "getLanguageDefault",
        value: function getLanguageDefault() {
          return window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_DEFAULT_LANGUAGE);
        }
      }, {
        key: "setLanguageDefault",
        value: function setLanguageDefault(language) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_DEFAULT_LANGUAGE, language);
        }
      }, {
        key: "setLocale",
        value: function setLocale(lc) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_LOCALE, lc);
        }
      }, {
        key: "setAddressSelected",
        value: function setAddressSelected(location) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_ADDRESS, JSON.stringify(location));
        }
      }, {
        key: "getSetting",
        value: function getSetting(settingKey) {
          var settings = this.getSettings();
          var toReturn;

          if (settings) {
            var _iterator21 = _createForOfIteratorHelper(settings),
                _step21;

            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var s = _step21.value;

                if (s.key == settingKey) {
                  toReturn = s.value;
                  break;
                }
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
          }

          if (!toReturn) toReturn = "";
          return toReturn;
        }
      }, {
        key: "saveNotification",
        value: function saveNotification(notiTitle, notiBody, notiTime) {
          var notifications = JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_NOTIFICATIONS));
          if (!notifications) notifications = new Array();
          notifications.push(new _notification_models__WEBPACK_IMPORTED_MODULE_1__["MyNotification"](notiTitle, notiBody, notiTime));
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_NOTIFICATIONS, JSON.stringify(notifications));
        }
      }, {
        key: "formatMillisDateTime",
        value: function formatMillisDateTime(millis, locale) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(millis).locale(locale).format("ddd, MMM D, HH:mm");
        }
      }, {
        key: "formatTimestampDateTime",
        value: function formatTimestampDateTime(timestamp, locale) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(timestamp).locale(locale).format("ddd, MMM D, HH:mm");
        }
      }, {
        key: "formatMillisDate",
        value: function formatMillisDate(millis, locale) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(millis).locale(locale).format("Do MMM YYYY");
        }
      }, {
        key: "formatTimestampDate",
        value: function formatTimestampDate(timestamp, locale) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(timestamp).locale(locale).format("Do MMM YYYY");
        }
      }, {
        key: "formatMillisTime",
        value: function formatMillisTime(millis, locale) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(millis).locale(locale).format("HH:mm");
        }
      }, {
        key: "formatTimestampTime",
        value: function formatTimestampTime(timestamp, locale) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(timestamp).locale(locale).format("HH:mm");
        }
      }]);

      return Helper;
    }();
    /***/

  },

  /***/
  "./src/models/models-shop-hour/notification.models.ts": function srcModelsModelsShopHourNotificationModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyNotification", function () {
      return MyNotification;
    });

    var MyNotification = function MyNotification(title, detail, time) {
      _classCallCheck(this, MyNotification);

      this.title = title;
      this.detail = detail;
      this.time = time;
    };
    /***/

  },

  /***/
  "./src/models/models-shop-hour/rating-summary.models.ts": function srcModelsModelsShopHourRatingSummaryModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingSummary", function () {
      return RatingSummary;
    });

    var RatingSummary = /*#__PURE__*/function () {
      function RatingSummary(total, percent, rounded_rating) {
        _classCallCheck(this, RatingSummary);

        this.total = total;
        this.percent = percent;
        this.rounded_rating = rounded_rating;
      }

      _createClass(RatingSummary, null, [{
        key: "defaultArray",
        value: function defaultArray() {
          var ratingSummaries = new Array();

          for (var i = 0; i < 5; i++) {
            ratingSummaries.push(new RatingSummary(0, 0, i));
          }

          return ratingSummaries;
        }
      }]);

      return RatingSummary;
    }();
    /***/

  }
}]);
//# sourceMappingURL=default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469-es5.js.map