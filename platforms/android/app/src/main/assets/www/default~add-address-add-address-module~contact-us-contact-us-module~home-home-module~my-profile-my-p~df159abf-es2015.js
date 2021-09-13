(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~df159abf"],{

/***/ "./src/app/services/shoup-hour-services/network/api.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/shoup-hour-services/network/api.service.ts ***!
  \*********************************************************************/
/*! exports provided: ApiServiceShopHour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceShopHour", function() { return ApiServiceShopHour; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");
/* harmony import */ var src_models_rating_summary_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/rating-summary.models */ "./src/models/rating-summary.models.ts");
/* harmony import */ var src_app_shophour_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shophour.config */ "./src/app/shophour.config.ts");








let ApiServiceShopHour = class ApiServiceShopHour {
    constructor(config, http) {
        this.config = config;
        this.http = http;
        this.reviewedIds = new Array();
        this.uuid = "xxx";
        this.platform = "android";
    }
    reloadSetting() {
        this.currency_icon = src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getSetting("currency_icon");
        this.locale = src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getSetting("locale");
    }
    reloadItemsReviewed() {
        this.reviewedIds = src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getReviewedProductIds();
    }
    setupHeaders(authToken) {
        let tokenToUse = authToken ? authToken : src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getToken();
        let savedLanguageCode = src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getLanguageDefault();
        this.myHeaders = tokenToUse ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': ('Bearer ' + tokenToUse),
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
    setUuidAndPlatform(uuid, platform) {
        this.uuid = uuid;
        this.platform = platform ? String(platform).toLowerCase() : platform;
        this.setupHeaders();
    }
    getCountries() {
        return this.http.get('./assets/json/countries.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            let indiaIndex = -1;
            // if (data) {
            //   for (let i = 0; i < data.length; i++) {
            //     if (data[i].name == "India") {
            //       indiaIndex = i;
            //       break;
            //     }
            //   }
            // }
            if (indiaIndex != -1)
                data.unshift(data.splice(indiaIndex, 1)[0]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCountries', [])));
    }
    getURL(url) {
        return this.http.get(url, { headers: this.myHeaders });
    }
    getSettings() {
        return this.http.get(this.config.apiBase + 'api/settings', { headers: this.myHeaders });
    }
    submitSupport(supportRequest) {
        return this.http.post(this.config.apiBase + "api/support", supportRequest, { headers: this.myHeaders });
    }
    checkUser(checkUserRequest) {
        return this.http.post(this.config.apiBase + 'api/check-user', checkUserRequest, { headers: this.myHeaders });
    }
    loginSocial(socialLoginRequest) {
        return this.http.post(this.config.apiBase + 'api/social/login', socialLoginRequest, { headers: this.myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => this.setupUserMe(data)));
    }
    loginUser(loginTokenRequest) {
        return this.http.post(this.config.apiBase + 'api/login', loginTokenRequest, { headers: this.myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => this.setupUserMe(data)));
    }
    createUser(signUpRequest) {
        return this.http.post(this.config.apiBase + 'api/register', signUpRequest, { headers: this.myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => this.setupUserMe(data)));
    }
    updateUser(updateRequest) {
        return this.http.put(this.config.apiBase + 'api/user', updateRequest, { headers: this.myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => this.setupUserMe(data)));
    }
    rateUser(uId, rateRequest) {
        return this.http.post(this.config.apiBase + "api/user/ratings/" + uId, JSON.stringify(rateRequest), { headers: this.myHeaders });
    }
    getCategoriesParents(scope) {
        return this.http.get(this.config.apiBase + "api/categories?pagination=0&parent=1&scope=" + scope, { headers: this.myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            if (data && data.length)
                for (let cat of data)
                    this.setupCategory(cat);
        })
        //, catchError(this.handleError<Array<Category>>('getCategoriesParents', this.getTestCategories()))
        );
    }
    getBanners(scope) {
        return this.http.get(this.config.apiBase + "api/banners?pagination=0&parent=1&scope=" + scope, { headers: this.myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            if (data && data.length)
                for (let cat of data)
                    this.setupCategory(cat);
        })
        //, catchError(this.handleError<Array<Category>>('getCategoriesParents', this.getTestCategories()))
        );
    }
    getCategoriesSub(scope, parentId) {
        return this.http.get(this.config.apiBase + "api/categories?pagination=0&category=" + parentId + "&scope=" + scope, { headers: this.myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            if (data && data.length)
                for (let cat of data)
                    this.setupCategory(cat);
        })
        //, catchError(this.handleError<Array<Category>>('getCategoriesSub', this.getTestCategories()))
        );
    }
    getProductsFavorite() {
        return this.http.get(this.config.apiBase + "api/products/favourites/list", { headers: this.myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            if (data && data.length)
                for (let pro of data)
                    this.setupProduct(pro);
        })
        //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
        );
    }
    getProductsWithQuery(query, page) {
        this.reloadSetting();
        let urlParams = new URLSearchParams();
        urlParams.append("search", query);
        urlParams.append("page", String(page));
        return this.http.get(this.config.apiBase + "api/products?" + urlParams.toString(), { headers: this.myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            if (data && data.data && data.data.length)
                for (let pro of data.data)
                    this.setupProduct(pro);
        })
        //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
        );
    }
    getProductsWithCategoryId(scope, categoryId, type, page) {
        this.reloadSetting();
        let urlParams = new URLSearchParams();
        urlParams.append("category", String(categoryId));
        urlParams.append("page", String(page));
        urlParams.append("scope", scope);
        if (type != null)
            urlParams.append("vendor_type", type);
        return this.http.get(this.config.apiBase + "api/products?" + urlParams.toString(), { headers: this.myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            if (data && data.data && data.data.length)
                for (let pro of data.data)
                    this.setupProduct(pro);
        })
        //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
        );
    }
    getProductsWithVendorId(vendorId, page) {
        this.reloadSetting();
        return this.http.get(this.config.apiBase + "api/products?vendor=" + vendorId + "&page=" + page, { headers: this.myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            if (data && data.data && data.data.length)
                for (let pro of data.data)
                    this.setupProduct(pro);
        })
        //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
        );
    }
    getProductsWithId(productId) {
        this.reloadSetting();
        return this.http.get(this.config.apiBase + "api/products/" + productId, { headers: this.myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            this.setupProduct(data);
        })
        //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
        );
    }
    toggleProductFavorite(productId) {
        return this.http.post(this.config.apiBase + "api/products/favourites/" + productId, {}, { headers: this.myHeaders });
    }
    getPaymentMethods() {
        return this.http.get(this.config.apiBase + 'api/payment/methods', { headers: this.myHeaders });
    }
    getAddresses() {
        return this.http.get(this.config.apiBase + 'api/addresses', { headers: this.myHeaders });
    }
    addressAdd(address) {
        return this.http.post(this.config.apiBase + 'api/addresses', address, { headers: this.myHeaders });
    }
    addressUpdate(address) {
        return this.http.put(this.config.apiBase + 'api/addresses/' + address.id + '/update', address, { headers: this.myHeaders });
    }
    createOrder(orderRequest) {
        return this.http.post(this.config.apiBase + 'api/orders', orderRequest, { headers: this.myHeaders });
    }
    checkCoupon(couponCode) {
        return this.http.get(this.config.apiBase + 'api/coupons/check-validity?code=' + couponCode, { headers: this.myHeaders });
    }
    getOrderById(orderId) {
        this.reloadSetting();
        this.reloadItemsReviewed();
        return this.http.get(this.config.apiBase + "api/orders/" + orderId, { headers: this.myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            this.setupOrder(data);
        }));
    }
    getOrders(pageNo) {
        this.reloadSetting();
        this.reloadItemsReviewed();
        return this.http.get(this.config.apiBase + "api/orders?page=" + pageNo, { headers: this.myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            for (let order of data.data)
                this.setupOrder(order);
        }));
    }
    getCoupons() {
        return this.http.get(this.config.apiBase + "api/coupons", { headers: this.myHeaders });
    }
    getRatingSummaryProduct(productId) {
        return this.http.get(this.config.apiBase + "api/products/ratings/summary/" + productId, { headers: this.myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            let ratingSummaries = src_models_rating_summary_models__WEBPACK_IMPORTED_MODULE_6__["RatingSummary"].defaultArray();
            for (let ratingSummaryResult of data.summary) {
                ratingSummaries[ratingSummaryResult.rounded_rating - 1].total = ratingSummaryResult.total;
                ratingSummaries[ratingSummaryResult.rounded_rating - 1].percent = ((ratingSummaryResult.total / data.total_ratings) * 100);
            }
            data.summary = ratingSummaries;
        }));
    }
    getReviewsProduct(productId, pageNo) {
        return this.http.get(this.config.apiBase + "api/products/ratings/" + productId + "?page=" + pageNo, { headers: this.myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            let locale = src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getLocale();
            for (let review of data.data)
                review.created_at = src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].formatTimestampDate(review.created_at, locale);
        }));
    }
    postReviewProduct(productId, rr) {
        return this.http.post(this.config.apiBase + "api/products/ratings/" + productId, rr, { headers: this.myHeaders });
    }
    setupOrder(order) {
        order.created_at = src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].formatTimestampDate(order.created_at, this.locale);
        if (order.scheduled_on)
            order.scheduled_on = src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].formatTimestampDate(order.scheduled_on, this.locale);
        order.total_toshow = this.currency_icon + Number(order.total).toFixed(2);
        order.subtotal_toshow = this.currency_icon + Number(order.subtotal).toFixed(2);
        if (order.delivery_fee)
            order.delivery_fee_toshow = this.currency_icon + Number(order.delivery_fee).toFixed(2);
        if (order.discount)
            order.discount_toshow = this.currency_icon + Number(order.discount).toFixed(2);
        if (order.taxes)
            order.taxes_toshow = this.currency_icon + Number(order.taxes).toFixed(2);
        for (let product of order.products) {
            product.total_toshow = this.currency_icon + Number(product.total).toFixed(2);
            if (product.vendor_product && product.vendor_product.product) {
                if (!product.vendor_product.product.price)
                    product.vendor_product.product.price = 0;
                product.vendor_product.product.priceToShow = this.currency_icon + Number(product.vendor_product.product.price).toFixed(2);
                product.vendor_product.product.images = new Array();
                if (product.vendor_product.product.mediaurls && product.vendor_product.product.mediaurls.images)
                    for (let imgObj of product.vendor_product.product.mediaurls.images)
                        if (imgObj["default"])
                            product.vendor_product.product.images.push(imgObj["default"]);
                if (!product.vendor_product.product.images.length)
                    product.vendor_product.product.images.push("assets/images/plc_item_image.png");
                //custom
                product.vendor_product.product.reviewed = (this.reviewedIds != null && this.reviewedIds.includes(String(String(order.id) + String(product.vendor_product.product.id))));
            }
        }
        if (order.vendor) {
            if (!order.vendor.mediaurls || !order.vendor.mediaurls.images)
                order.vendor.mediaurls = { images: [] };
            order.vendor.image = "assets/images/plc_seller_profile.png";
            for (let imgObj of order.vendor.mediaurls.images)
                if (imgObj["default"]) {
                    order.vendor.image = imgObj["default"];
                    break;
                }
        }
        if (order.delivery) {
            order.delivery.delivery.user.image_url = "assets/images/empty_dp";
            if (!order.delivery.delivery.user.mediaurls || !order.delivery.delivery.user.mediaurls.images)
                order.delivery.delivery.user.mediaurls = { images: [] };
            for (let imgObj of order.delivery.delivery.user.mediaurls.images)
                if (imgObj["default"]) {
                    order.delivery.delivery.user.image_url = imgObj["default"];
                    break;
                }
        }
    }
    setupCategory(category) {
        if (category.mediaurls && category.mediaurls.images)
            for (let imgObj of category.mediaurls.images)
                if (imgObj["default"]) {
                    category.image = imgObj["default"];
                    break;
                }
        if (!category.image)
            category.image = "assets/images/plc_item_image.png";
    }
    setupProduct(product) {
        //product.prescription_required = (product.meta && product.meta.prescription);
        if (!product.ratings)
            product.ratings = 0;
        if (!product.ratings_count)
            product.ratings_count = 0;
        if (!product.price)
            product.price = 0;
        product.priceToShow = this.currency_icon + product.price.toFixed(2);
        product.ratings = Number(product.ratings.toFixed(2));
        product.vendorText = "";
        if (product.vendor_products && product.vendor_products.length) {
            for (let vp of product.vendor_products) {
                if (!vp.sale_price)
                    vp.sale_price = 0;
                vp.priceToShow = this.currency_icon + vp.price.toFixed(2);
                vp.sale_priceToShow = this.currency_icon + vp.sale_price.toFixed(2);
                if (vp.vendor) {
                    if (!vp.vendor.mediaurls || !vp.vendor.mediaurls.images)
                        vp.vendor.mediaurls = { images: [] };
                    vp.vendor.image = "assets/images/plc_seller_profile.png";
                    for (let imgObj of vp.vendor.mediaurls.images)
                        if (imgObj["default"]) {
                            vp.vendor.image = imgObj["default"];
                            break;
                        }
                    product.vendorText += (vp.vendor.name + ", ");
                }
            }
        }
        if (product.vendorText.length)
            product.vendorText = product.vendorText.substring(0, product.vendorText.length - 2);
        if (product.categories && product.categories.length) {
            for (let cat of product.categories)
                this.setupCategory(cat);
        }
        product.images = new Array();
        if (product.mediaurls && product.mediaurls.images)
            for (let imgObj of product.mediaurls.images)
                if (imgObj["default"])
                    product.images.push(imgObj["default"]);
        if (!product.images.length)
            product.images.push("assets/images/plc_item_image.png");
    }
    setupUserMe(data) {
        if (!data.mediaurls || !data.mediaurls.images)
            data.mediaurls = { images: [] };
        if (!data.image_url)
            for (let imgObj of data.mediaurls.images)
                if (imgObj["default"]) {
                    data.image_url = imgObj["default"];
                    break;
                }
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
};
ApiServiceShopHour.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_app_shophour_config__WEBPACK_IMPORTED_MODULE_7__["APP_CONFIG_ShopHour"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiServiceShopHour = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_shophour_config__WEBPACK_IMPORTED_MODULE_7__["APP_CONFIG_ShopHour"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApiServiceShopHour);



/***/ })

}]);
//# sourceMappingURL=default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~df159abf-es2015.js.map