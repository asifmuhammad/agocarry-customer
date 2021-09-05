(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469"],{

/***/ "./src/app/services/shoup-hour-services/network/api.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/shoup-hour-services/network/api.service.ts ***!
  \*********************************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/models-shop-hour/helper.models */ "./src/models/models-shop-hour/helper.models.ts");
/* harmony import */ var src_models_models_shop_hour_rating_summary_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/models-shop-hour/rating-summary.models */ "./src/models/models-shop-hour/rating-summary.models.ts");
/* harmony import */ var src_app_shophour_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shophour.config */ "./src/app/shophour.config.ts");








let ApiService = class ApiService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
        this.reviewedIds = new Array();
        this.uuid = "xxx";
        this.platform = "android";
    }
    reloadSetting() {
        this.currency_icon = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getSetting("currency_icon");
        this.locale = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getSetting("locale");
    }
    reloadItemsReviewed() {
        this.reviewedIds = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getReviewedProductIds();
    }
    setupHeaders(authToken) {
        let tokenToUse = authToken ? authToken : src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getToken();
        let savedLanguageCode = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getLanguageDefault();
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
            let ratingSummaries = src_models_models_shop_hour_rating_summary_models__WEBPACK_IMPORTED_MODULE_6__["RatingSummary"].defaultArray();
            for (let ratingSummaryResult of data.summary) {
                ratingSummaries[ratingSummaryResult.rounded_rating - 1].total = ratingSummaryResult.total;
                ratingSummaries[ratingSummaryResult.rounded_rating - 1].percent = ((ratingSummaryResult.total / data.total_ratings) * 100);
            }
            data.summary = ratingSummaries;
        }));
    }
    getReviewsProduct(productId, pageNo) {
        return this.http.get(this.config.apiBase + "api/products/ratings/" + productId + "?page=" + pageNo, { headers: this.myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            let locale = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getLocale();
            for (let review of data.data)
                review.created_at = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].formatTimestampDate(review.created_at, locale);
        }));
    }
    postReviewProduct(productId, rr) {
        return this.http.post(this.config.apiBase + "api/products/ratings/" + productId, rr, { headers: this.myHeaders });
    }
    setupOrder(order) {
        order.created_at = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].formatTimestampDate(order.created_at, this.locale);
        if (order.scheduled_on)
            order.scheduled_on = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].formatTimestampDate(order.scheduled_on, this.locale);
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
ApiService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_app_shophour_config__WEBPACK_IMPORTED_MODULE_7__["APP_CONFIG_ShopHour"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_shophour_config__WEBPACK_IMPORTED_MODULE_7__["APP_CONFIG_ShopHour"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApiService);



/***/ }),

/***/ "./src/models/models-shop-hour/constants.models.ts":
/*!*********************************************************!*\
  !*** ./src/models/models-shop-hour/constants.models.ts ***!
  \*********************************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
class Constants {
}
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


/***/ }),

/***/ "./src/models/models-shop-hour/helper.models.ts":
/*!******************************************************!*\
  !*** ./src/models/models-shop-hour/helper.models.ts ***!
  \******************************************************/
/*! exports provided: Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return Helper; });
/* harmony import */ var _constants_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.models */ "./src/models/models-shop-hour/constants.models.ts");
/* harmony import */ var _notification_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.models */ "./src/models/models-shop-hour/notification.models.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



class Helper {
    static formatPhone(phone) {
        let toReturn = phone.replace(/\s/g, '');
        while (toReturn.startsWith("0"))
            toReturn = toReturn.substring(1);
        return toReturn;
    }
    static setSearchHistory(sh) {
        window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_SEARCH_HISTORY, JSON.stringify(sh));
    }
    static getSearchHistory() {
        let adl = JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_SEARCH_HISTORY));
        return (adl && adl.length) ? adl : new Array();
    }
    static getReviewedProductIds() {
        let adl = JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_REVIEWED_PRODUCTS));
        return (adl && adl.length) ? adl : new Array();
    }
    static addReviewedProductId(id) {
        let adl = this.getReviewedProductIds();
        adl.push(id);
        window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_REVIEWED_PRODUCTS, JSON.stringify(adl));
    }
    static setAddresses(addresses) {
        window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_ADDRESSES, JSON.stringify(addresses));
    }
    static getAddresses() {
        let adl = JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_ADDRESSES));
        return (adl && adl.length) ? adl : new Array();
    }
    static setSettings(settings) {
        window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_SETTINGS, JSON.stringify(settings));
    }
    static getSettings() {
        return JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_SETTINGS));
    }
    static setLoggedInUser(user) {
        window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_USER, JSON.stringify(user));
    }
    static setLoggedInUserResponse(authRes) {
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
    static getToken() {
        return window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_TOKEN);
    }
    static getLoggedInUser() {
        return JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_USER));
    }
    static getAddressSelected() {
        return JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_ADDRESS));
    }
    static getSetectedAddress() {
        return JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_SETECT_ADDRESS));
    }
    static getLocale() {
        let sl = window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_LOCALE);
        return sl && sl.length ? sl : "en";
    }
    static getLanguageDefault() {
        return window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_DEFAULT_LANGUAGE);
    }
    static setLanguageDefault(language) {
        window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_DEFAULT_LANGUAGE, language);
    }
    static setLocale(lc) {
        window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_LOCALE, lc);
    }
    static setAddressSelected(location) {
        window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_ADDRESS, JSON.stringify(location));
    }
    static getSetting(settingKey) {
        let settings = this.getSettings();
        let toReturn;
        if (settings) {
            for (let s of settings) {
                if (s.key == settingKey) {
                    toReturn = s.value;
                    break;
                }
            }
        }
        if (!toReturn)
            toReturn = "";
        return toReturn;
    }
    static saveNotification(notiTitle, notiBody, notiTime) {
        let notifications = JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_NOTIFICATIONS));
        if (!notifications)
            notifications = new Array();
        notifications.push(new _notification_models__WEBPACK_IMPORTED_MODULE_1__["MyNotification"](notiTitle, notiBody, notiTime));
        window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_NOTIFICATIONS, JSON.stringify(notifications));
    }
    static formatMillisDateTime(millis, locale) {
        return moment__WEBPACK_IMPORTED_MODULE_2__(millis).locale(locale).format("ddd, MMM D, HH:mm");
    }
    static formatTimestampDateTime(timestamp, locale) {
        return moment__WEBPACK_IMPORTED_MODULE_2__(timestamp).locale(locale).format("ddd, MMM D, HH:mm");
    }
    static formatMillisDate(millis, locale) {
        return moment__WEBPACK_IMPORTED_MODULE_2__(millis).locale(locale).format("Do MMM YYYY");
    }
    static formatTimestampDate(timestamp, locale) {
        return moment__WEBPACK_IMPORTED_MODULE_2__(timestamp).locale(locale).format("Do MMM YYYY");
    }
    static formatMillisTime(millis, locale) {
        return moment__WEBPACK_IMPORTED_MODULE_2__(millis).locale(locale).format("HH:mm");
    }
    static formatTimestampTime(timestamp, locale) {
        return moment__WEBPACK_IMPORTED_MODULE_2__(timestamp).locale(locale).format("HH:mm");
    }
}


/***/ }),

/***/ "./src/models/models-shop-hour/notification.models.ts":
/*!************************************************************!*\
  !*** ./src/models/models-shop-hour/notification.models.ts ***!
  \************************************************************/
/*! exports provided: MyNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNotification", function() { return MyNotification; });
class MyNotification {
    constructor(title, detail, time) {
        this.title = title;
        this.detail = detail;
        this.time = time;
    }
}


/***/ }),

/***/ "./src/models/models-shop-hour/rating-summary.models.ts":
/*!**************************************************************!*\
  !*** ./src/models/models-shop-hour/rating-summary.models.ts ***!
  \**************************************************************/
/*! exports provided: RatingSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingSummary", function() { return RatingSummary; });
class RatingSummary {
    constructor(total, percent, rounded_rating) {
        this.total = total;
        this.percent = percent;
        this.rounded_rating = rounded_rating;
    }
    static defaultArray() {
        let ratingSummaries = new Array();
        for (let i = 0; i < 5; i++) {
            ratingSummaries.push(new RatingSummary(0, 0, i));
        }
        return ratingSummaries;
    }
}


/***/ })

}]);
//# sourceMappingURL=default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469-es2015.js.map