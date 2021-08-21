function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"], {
  /***/
  "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js": function node_modulesIonicNativeFacebook__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Facebook", function () {
      return Facebook;
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


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

    var Facebook = function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Facebook, _super);

      function Facebook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.EVENTS = {
          EVENT_NAME_ACTIVATED_APP: 'fb_mobile_activate_app',
          EVENT_NAME_DEACTIVATED_APP: 'fb_mobile_deactivate_app',
          EVENT_NAME_SESSION_INTERRUPTIONS: 'fb_mobile_app_interruptions',
          EVENT_NAME_TIME_BETWEEN_SESSIONS: 'fb_mobile_time_between_sessions',
          EVENT_NAME_COMPLETED_REGISTRATION: 'fb_mobile_complete_registration',
          EVENT_NAME_VIEWED_CONTENT: 'fb_mobile_content_view',
          EVENT_NAME_SEARCHED: 'fb_mobile_search',
          EVENT_NAME_RATED: 'fb_mobile_rate',
          EVENT_NAME_COMPLETED_TUTORIAL: 'fb_mobile_tutorial_completion',
          EVENT_NAME_PUSH_TOKEN_OBTAINED: 'fb_mobile_obtain_push_token',
          EVENT_NAME_ADDED_TO_CART: 'fb_mobile_add_to_cart',
          EVENT_NAME_ADDED_TO_WISHLIST: 'fb_mobile_add_to_wishlist',
          EVENT_NAME_INITIATED_CHECKOUT: 'fb_mobile_initiated_checkout',
          EVENT_NAME_ADDED_PAYMENT_INFO: 'fb_mobile_add_payment_info',
          EVENT_NAME_PURCHASED: 'fb_mobile_purchase',
          EVENT_NAME_ACHIEVED_LEVEL: 'fb_mobile_level_achieved',
          EVENT_NAME_UNLOCKED_ACHIEVEMENT: 'fb_mobile_achievement_unlocked',
          EVENT_NAME_SPENT_CREDITS: 'fb_mobile_spent_credits',
          EVENT_PARAM_CURRENCY: 'fb_currency',
          EVENT_PARAM_REGISTRATION_METHOD: 'fb_registration_method',
          EVENT_PARAM_CONTENT_TYPE: 'fb_content_type',
          EVENT_PARAM_CONTENT_ID: 'fb_content_id',
          EVENT_PARAM_SEARCH_STRING: 'fb_search_string',
          EVENT_PARAM_SUCCESS: 'fb_success',
          EVENT_PARAM_MAX_RATING_VALUE: 'fb_max_rating_value',
          EVENT_PARAM_PAYMENT_INFO_AVAILABLE: 'fb_payment_info_available',
          EVENT_PARAM_NUM_ITEMS: 'fb_num_items',
          EVENT_PARAM_LEVEL: 'fb_level',
          EVENT_PARAM_DESCRIPTION: 'fb_description',
          EVENT_PARAM_SOURCE_APPLICATION: 'fb_mobile_launch_source',
          EVENT_PARAM_VALUE_YES: '1',
          EVENT_PARAM_VALUE_NO: '0'
        };
        return _this;
      }

      Facebook.prototype.login = function (permissions) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "login", {}, arguments);
      };

      Facebook.prototype.loginWithLimitedTracking = function (permissions) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "loginWithLimitedTracking", {}, arguments);
      };

      Facebook.prototype.checkHasCorrectPermissions = function (permissions) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "checkHasCorrectPermissions", {}, arguments);
      };

      Facebook.prototype.isDataAccessExpired = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isDataAccessExpired", {}, arguments);
      };

      Facebook.prototype.reauthorizeDataAccess = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "reauthorizeDataAccess", {}, arguments);
      };

      Facebook.prototype.logout = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logout", {}, arguments);
      };

      Facebook.prototype.getLoginStatus = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getLoginStatus", {}, arguments);
      };

      Facebook.prototype.getAccessToken = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getAccessToken", {}, arguments);
      };

      Facebook.prototype.getCurrentProfile = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getCurrentProfile", {}, arguments);
      };

      Facebook.prototype.showDialog = function (options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "showDialog", {}, arguments);
      };

      Facebook.prototype.api = function (requestPath, permissions, httpMethod) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "api", {}, arguments);
      };

      Facebook.prototype.logEvent = function (name, params, valueToSum) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logEvent", {
          "successIndex": 3,
          "errorIndex": 4
        }, arguments);
      };

      Facebook.prototype.setAutoLogAppEventsEnabled = function (enabled) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setAutoLogAppEventsEnabled", {
          "successIndex": 1,
          "errorIndex": 2
        }, arguments);
      };

      Facebook.prototype.setAdvertiserIDCollectionEnabled = function (enabled) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setAdvertiserIDCollectionEnabled", {}, arguments);
      };

      Facebook.prototype.setAdvertiserTrackingEnabled = function (enabled) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setAdvertiserTrackingEnabled", {}, arguments);
      };

      Facebook.prototype.logPurchase = function (value, currency, params) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logPurchase", {}, arguments);
      };

      Facebook.prototype.getDeferredApplink = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getDeferredApplink", {}, arguments);
      };

      Facebook.prototype.activateApp = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "activateApp", {}, arguments);
      };

      Facebook.pluginName = "Facebook";
      Facebook.plugin = "cordova-plugin-facebook-connect";
      Facebook.pluginRef = "facebookConnectPlugin";
      Facebook.repo = "https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect";
      Facebook.install = "ionic cordova plugin add cordova-plugin-facebook-connect --variable APP_ID=\"123456789\" --variable APP_NAME=\"myApplication\"";
      Facebook.installVariables = ["APP_ID", "APP_NAME"];
      Facebook.platforms = ["Android", "iOS", "Browser"];

      Facebook.ɵfac = function Facebook_Factory(t) {
        return ɵFacebook_BaseFactory(t || Facebook);
      };

      Facebook.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: Facebook,
        factory: function factory(t) {
          return Facebook.ɵfac(t);
        }
      });

      var ɵFacebook_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Facebook);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Facebook, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], null, null);
      })();

      return Facebook;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZmFjZWJvb2svbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBRVEsSUFrSHNCLDRCQUFpQjtBQUFDO0FBRXJDO0FBQ3NCLFFBRi9CLFlBQU0sR0FBRztBQUNYLFlBQUksd0JBQXdCLEVBQUUsd0JBQXdCO0FBQ3RELFlBQUksMEJBQTBCLEVBQUUsMEJBQTBCO0FBQzFELFlBQUksZ0NBQWdDLEVBQUUsNkJBQTZCO0FBQ25FLFlBQUksZ0NBQWdDLEVBQUUsaUNBQWlDO0FBQ3ZFLFlBQUksaUNBQWlDLEVBQUUsaUNBQWlDO0FBQ3hFLFlBQUkseUJBQXlCLEVBQUUsd0JBQXdCO0FBQ3ZELFlBQUksbUJBQW1CLEVBQUUsa0JBQWtCO0FBQzNDLFlBQUksZ0JBQWdCLEVBQUUsZ0JBQWdCO0FBQ3RDLFlBQUksNkJBQTZCLEVBQUUsK0JBQStCO0FBQ2xFLFlBQUksOEJBQThCLEVBQUUsNkJBQTZCO0FBQ2pFLFlBQUksd0JBQXdCLEVBQUUsdUJBQXVCO0FBQ3JELFlBQUksNEJBQTRCLEVBQUUsMkJBQTJCO0FBQzdELFlBQUksNkJBQTZCLEVBQUUsOEJBQThCO0FBQ2pFLFlBQUksNkJBQTZCLEVBQUUsNEJBQTRCO0FBQy9ELFlBQUksb0JBQW9CLEVBQUUsb0JBQW9CO0FBQzlDLFlBQUkseUJBQXlCLEVBQUUsMEJBQTBCO0FBQ3pELFlBQUksK0JBQStCLEVBQUUsZ0NBQWdDO0FBQ3JFLFlBQUksd0JBQXdCLEVBQUUseUJBQXlCO0FBQ3ZELFlBQUksb0JBQW9CLEVBQUUsYUFBYTtBQUN2QyxZQUFJLCtCQUErQixFQUFFLHdCQUF3QjtBQUM3RCxZQUFJLHdCQUF3QixFQUFFLGlCQUFpQjtBQUMvQyxZQUFJLHNCQUFzQixFQUFFLGVBQWU7QUFDM0MsWUFBSSx5QkFBeUIsRUFBRSxrQkFBa0I7QUFDakQsWUFBSSxtQkFBbUIsRUFBRSxZQUFZO0FBQ3JDLFlBQUksNEJBQTRCLEVBQUUscUJBQXFCO0FBQ3ZELFlBQUksa0NBQWtDLEVBQUUsMkJBQTJCO0FBQ25FLFlBQUkscUJBQXFCLEVBQUUsY0FBYztBQUN6QyxZQUFJLGlCQUFpQixFQUFFLFVBQVU7QUFDakMsWUFBSSx1QkFBdUIsRUFBRSxnQkFBZ0I7QUFDN0MsWUFBSSw4QkFBOEIsRUFBRSx5QkFBeUI7QUFDN0QsWUFBSSxxQkFBcUIsRUFBRSxHQUFHO0FBQzlCLFlBQUksb0JBQW9CLEVBQUUsR0FBRztBQUM3QixTQUFHLENBQUM7QUFDSjtBQUVlO0FBQU0sSUFxQm5CLHdCQUFLLGFBQUMsV0FBcUI7QUFJN0IsSUFtQkUsMkNBQXdCLGFBQUMsV0FBcUI7QUFLbkMsSUFNWCw2Q0FBMEIsYUFBQyxXQUFxQjtBQUtwQixJQUs1QixzQ0FBbUI7QUFLYyxJQUtqQyx3Q0FBcUI7QUFLRCxJQU1wQix5QkFBTTtBQUtpQixJQTBCdkIsaUNBQWM7QUFLaUIsSUFLL0IsaUNBQWM7QUFLYyxJQUs1QixvQ0FBaUI7QUFLaUIsSUFpQmxDLDZCQUFVLGFBQUMsT0FBWTtBQUtSLElBY2Ysc0JBQUcsYUFBQyxXQUFtQixFQUFFLFdBQXFCLEVBQUUsVUFBbUI7QUFLM0QsSUFXUiwyQkFBUSxhQUFDLElBQVksRUFBRSxNQUFlLEVBQUUsVUFBbUI7QUFLVixJQVFqRCw2Q0FBMEIsYUFBQyxPQUFnQjtBQU9qQyxJQUdWLG1EQUFnQyxhQUFDLE9BQWdCO0FBS2IsSUFLcEMsK0NBQTRCLGFBQUMsT0FBZ0I7QUFLYixJQVFoQyw4QkFBVyxhQUFDLEtBQWEsRUFBRSxRQUFnQixFQUFFLE1BQWU7QUFLNUMsSUFJaEIscUNBQWtCO0FBS2MsSUFJaEMsOEJBQVc7QUFJc0I7QUFBc0M7QUFBeUQ7QUFBa0Q7QUFBMEc7QUFBeUo7QUFBd0Q7NENBNVM5ZSxVQUFVOzs7OzswQkFDTDtBQUFDLG1CQXRIUDtBQUFFLEVBc0g0QixpQkFBaUI7QUFDOUMsU0FEWSxRQUFRO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBGYWNlYm9va0xvZ2luUmVzcG9uc2Uge1xuICBzdGF0dXM6IHN0cmluZztcblxuICBhdXRoUmVzcG9uc2U6IHtcbiAgICBzZXNzaW9uX2tleTogYm9vbGVhbjtcblxuICAgIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG5cbiAgICBleHBpcmVzSW46IG51bWJlcjtcblxuICAgIHNpZzogc3RyaW5nO1xuXG4gICAgc2VjcmV0OiBzdHJpbmc7XG5cbiAgICB1c2VySUQ6IHN0cmluZztcbiAgfTtcbn1cblxuLyoqXG4gKiBAbmFtZSBGYWNlYm9va1xuICogQGRlc2NyaXB0aW9uXG4gKiBVc2UgdGhlIEZhY2Vib29rIENvbm5lY3QgcGx1Z2luIHRvIG9idGFpbiBhY2Nlc3MgdG8gdGhlIG5hdGl2ZSBGQiBhcHBsaWNhdGlvbiBvbiBpT1MgYW5kIEFuZHJvaWQuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0YC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0ZhY2Vib29rIENvbm5lY3RdKGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0L2NvcmRvdmEtcGx1Z2luLWZhY2Vib29rLWNvbm5lY3QpLlxuICpcbiAqICMjIyMgSW5zdGFsbGF0aW9uXG4gKlxuICogIFRvIHVzZSB0aGUgRkIgcGx1Z2luLCB5b3UgZmlyc3QgaGF2ZSB0byBjcmVhdGUgYSBuZXcgRmFjZWJvb2sgQXBwIGluc2lkZSBvZiB0aGUgRmFjZWJvb2sgZGV2ZWxvcGVyIHBvcnRhbCBhdCBbaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMpLlxuICpcbiAqIFshW2ZiLWdldHN0YXJ0ZWQtMV0oL2ltZy9kb2NzL25hdGl2ZS9GYWNlYm9vay8xLnBuZyldKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcy8pXG4gKlxuICogUmV0cmlldmUgdGhlIGBBcHAgSURgIGFuZCBgQXBwIE5hbWVgLlxuICpcbiAqIFshW2ZiLWdldHN0YXJ0ZWQtMl0oL2ltZy9kb2NzL25hdGl2ZS9GYWNlYm9vay8yLnBuZyldKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcy8pXG4gKlxuICogVGhlbiB0eXBlIGluIHRoZSBmb2xsb3dpbmcgY29tbWFuZCBpbiB5b3VyIFRlcm1pbmFsLCB3aGVyZSBBUFBfSUQgYW5kIEFQUF9OQU1FIGFyZSB0aGUgdmFsdWVzIGZyb20gdGhlIEZhY2Vib29rIERldmVsb3BlciBwb3J0YWwuXG4gKlxuICogYGBgYmFzaFxuICogIGlvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0IC0tdmFyaWFibGUgQVBQX0lEPVwiMTIzNDU2Nzg5XCIgLS12YXJpYWJsZSBBUFBfTkFNRT1cIm15QXBwbGljYXRpb25cIlxuICogYGBgXG4gKlxuICogQWZ0ZXIsIHlvdSdsbCBuZWVkIHRvIGFkZCB0aGUgbmF0aXZlIHBsYXRmb3JtcyB5b3UnbGwgYmUgdXNpbmcgdG8geW91ciBhcHAgaW4gdGhlIEZhY2Vib29rIERldmVsb3BlciBwb3J0YWwgdW5kZXIgeW91ciBhcHAncyBTZXR0aW5nczpcbiAqXG4gKiBbIVtmYi1nZXRzdGFydGVkLTNdKC9pbWcvZG9jcy9uYXRpdmUvRmFjZWJvb2svMy5wbmcpXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMvKVxuICpcbiAqIENsaWNrIGAnQWRkIFBsYXRmb3JtJ2AuXG4gKlxuICogWyFbZmItZ2V0c3RhcnRlZC00XSgvaW1nL2RvY3MvbmF0aXZlL0ZhY2Vib29rLzQucG5nKV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzLylcbiAqXG4gKiBBdCB0aGlzIHBvaW50IHlvdSdsbCBuZWVkIHRvIG9wZW4geW91ciBwcm9qZWN0J3MgW2Bjb25maWcueG1sYF0oaHR0cHM6Ly9jb3Jkb3ZhLmFwYWNoZS5vcmcvZG9jcy9lbi9sYXRlc3QvY29uZmlnX3JlZi9pbmRleC5odG1sKSBmaWxlLCBmb3VuZCBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgeW91ciBwcm9qZWN0LlxuICpcbiAqIFRha2Ugbm90ZSBvZiB0aGUgYGlkYCBmb3IgdGhlIG5leHQgc3RlcDpcbiAqIGBgYFxuICogPHdpZGdldCBpZD1cImNvbS5teWNvbXBhbnkudGVzdGFwcFwiIHZlcnNpb249XCIwLjAuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvbnMvd2lkZ2V0c1wiIHhtbG5zOmNkdj1cImh0dHA6Ly9jb3Jkb3ZhLmFwYWNoZS5vcmcvbnMvMS4wXCI+XG4gKiBgYGBcbiAqXG4gKiBZb3UgY2FuIGFsc28gZWRpdCB0aGUgYGlkYCB0byB3aGF0ZXZlciB5b3UnZCBsaWtlIGl0IHRvIGJlLlxuICpcbiAqICMjIyMgaU9TIEluc3RhbGxcbiAqIFVuZGVyICdCdW5kbGUgSUQnLCBhZGQgdGhlIGBpZGAgZnJvbSB5b3VyIGBjb25maWcueG1sYCBmaWxlOlxuICpcbiAqIFshW2ZiLWdldHN0YXJ0ZWQtNV0oL2ltZy9kb2NzL25hdGl2ZS9GYWNlYm9vay81LnBuZyldKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcy8pXG4gKlxuICpcbiAqICMjIyMgQW5kcm9pZCBJbnN0YWxsXG4gKiBVbmRlciAnR29vZ2xlIFBsYXkgUGFja2FnZSBOYW1lJywgYWRkIHRoZSBgaWRgIGZyb20geW91ciBgY29uZmlnLnhtbGAgZmlsZTpcbiAqXG4gKiBbIVtmYi1nZXRzdGFydGVkLTZdKC9pbWcvZG9jcy9uYXRpdmUvRmFjZWJvb2svNi5wbmcpXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMvKVxuICpcbiAqXG4gKiBBbmQgdGhhdCdzIGl0ISBZb3UgY2FuIG5vdyBtYWtlIGNhbGxzIHRvIEZhY2Vib29rIHVzaW5nIHRoZSBwbHVnaW4uXG4gKlxuICogIyMgRXZlbnRzXG4gKlxuICogQXBwIGV2ZW50cyBhbGxvdyB5b3UgdG8gdW5kZXJzdGFuZCB0aGUgbWFrZXVwIG9mIHVzZXJzIGVuZ2FnaW5nIHdpdGggeW91ciBhcHAsIG1lYXN1cmUgdGhlIHBlcmZvcm1hbmNlIG9mIHlvdXIgRmFjZWJvb2sgbW9iaWxlIGFwcCBhZHMsIGFuZCByZWFjaCBzcGVjaWZpYyBzZXRzIG9mIHlvdXIgdXNlcnMgd2l0aCBGYWNlYm9vayBtb2JpbGUgYXBwIGFkcy5cbiAqXG4gKiAtIFtpT1NdIFtodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvaW9zL2FwcC1ldmVudHNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9pb3MvYXBwLWV2ZW50cylcbiAqIC0gW0FuZHJvaWRdIFtodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvYW5kcm9pZC9hcHAtZXZlbnRzXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvYW5kcm9pZC9hcHAtZXZlbnRzKVxuICogLSBbSlNdIERvZXMgbm90IGhhdmUgYW4gRXZlbnRzIEFQSSwgc28gdGhlIHBsdWdpbiBmdW5jdGlvbnMgYXJlIGVtcHR5IGFuZCB3aWxsIHJldHVybiBhbiBhdXRvbWF0aWMgc3VjY2Vzc1xuICpcbiAqIEFjdGl2YXRpb24gZXZlbnRzIGFyZSBhdXRvbWF0aWNhbGx5IHRyYWNrZWQgZm9yIHlvdSBpbiB0aGUgcGx1Z2luLlxuICpcbiAqIEV2ZW50cyBhcmUgbGlzdGVkIG9uIHRoZSBbaW5zaWdodHMgcGFnZV0oaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2luc2lnaHRzLykuXG4gKlxuICogRm9yIHRyYWNraW5nIGV2ZW50cywgc2VlIGBsb2dFdmVudGAgYW5kIGBsb2dQdXJjaGFzZWAuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGYWNlYm9vaywgRmFjZWJvb2tMb2dpblJlc3BvbnNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9mYWNlYm9vay9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZhY2Vib29rKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZiLmxvZ2luKFsncHVibGljX3Byb2ZpbGUnLCAndXNlcl9mcmllbmRzJywgJ2VtYWlsJ10pXG4gKiAgIC50aGVuKChyZXM6IEZhY2Vib29rTG9naW5SZXNwb25zZSkgPT4gY29uc29sZS5sb2coJ0xvZ2dlZCBpbnRvIEZhY2Vib29rIScsIHJlcykpXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKCdFcnJvciBsb2dnaW5nIGludG8gRmFjZWJvb2snLCBlKSk7XG4gKlxuICpcbiAqIHRoaXMuZmIubG9nRXZlbnQodGhpcy5mYi5FVkVOVFMuRVZFTlRfTkFNRV9BRERFRF9UT19DQVJUKTtcbiAqXG4gKiBgYGBcbiAqXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmFjZWJvb2snLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0JyxcbiAgcGx1Z2luUmVmOiAnZmFjZWJvb2tDb25uZWN0UGx1Z2luJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0L2NvcmRvdmEtcGx1Z2luLWZhY2Vib29rLWNvbm5lY3QnLFxuICBpbnN0YWxsOlxuICAgICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZmFjZWJvb2stY29ubmVjdCAtLXZhcmlhYmxlIEFQUF9JRD1cIjEyMzQ1Njc4OVwiIC0tdmFyaWFibGUgQVBQX05BTUU9XCJteUFwcGxpY2F0aW9uXCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FQUF9JRCcsICdBUFBfTkFNRSddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnQnJvd3NlciddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWNlYm9vayBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgRVZFTlRTID0ge1xuICAgIEVWRU5UX05BTUVfQUNUSVZBVEVEX0FQUDogJ2ZiX21vYmlsZV9hY3RpdmF0ZV9hcHAnLFxuICAgIEVWRU5UX05BTUVfREVBQ1RJVkFURURfQVBQOiAnZmJfbW9iaWxlX2RlYWN0aXZhdGVfYXBwJyxcbiAgICBFVkVOVF9OQU1FX1NFU1NJT05fSU5URVJSVVBUSU9OUzogJ2ZiX21vYmlsZV9hcHBfaW50ZXJydXB0aW9ucycsXG4gICAgRVZFTlRfTkFNRV9USU1FX0JFVFdFRU5fU0VTU0lPTlM6ICdmYl9tb2JpbGVfdGltZV9iZXR3ZWVuX3Nlc3Npb25zJyxcbiAgICBFVkVOVF9OQU1FX0NPTVBMRVRFRF9SRUdJU1RSQVRJT046ICdmYl9tb2JpbGVfY29tcGxldGVfcmVnaXN0cmF0aW9uJyxcbiAgICBFVkVOVF9OQU1FX1ZJRVdFRF9DT05URU5UOiAnZmJfbW9iaWxlX2NvbnRlbnRfdmlldycsXG4gICAgRVZFTlRfTkFNRV9TRUFSQ0hFRDogJ2ZiX21vYmlsZV9zZWFyY2gnLFxuICAgIEVWRU5UX05BTUVfUkFURUQ6ICdmYl9tb2JpbGVfcmF0ZScsXG4gICAgRVZFTlRfTkFNRV9DT01QTEVURURfVFVUT1JJQUw6ICdmYl9tb2JpbGVfdHV0b3JpYWxfY29tcGxldGlvbicsXG4gICAgRVZFTlRfTkFNRV9QVVNIX1RPS0VOX09CVEFJTkVEOiAnZmJfbW9iaWxlX29idGFpbl9wdXNoX3Rva2VuJyxcbiAgICBFVkVOVF9OQU1FX0FEREVEX1RPX0NBUlQ6ICdmYl9tb2JpbGVfYWRkX3RvX2NhcnQnLFxuICAgIEVWRU5UX05BTUVfQURERURfVE9fV0lTSExJU1Q6ICdmYl9tb2JpbGVfYWRkX3RvX3dpc2hsaXN0JyxcbiAgICBFVkVOVF9OQU1FX0lOSVRJQVRFRF9DSEVDS09VVDogJ2ZiX21vYmlsZV9pbml0aWF0ZWRfY2hlY2tvdXQnLFxuICAgIEVWRU5UX05BTUVfQURERURfUEFZTUVOVF9JTkZPOiAnZmJfbW9iaWxlX2FkZF9wYXltZW50X2luZm8nLFxuICAgIEVWRU5UX05BTUVfUFVSQ0hBU0VEOiAnZmJfbW9iaWxlX3B1cmNoYXNlJyxcbiAgICBFVkVOVF9OQU1FX0FDSElFVkVEX0xFVkVMOiAnZmJfbW9iaWxlX2xldmVsX2FjaGlldmVkJyxcbiAgICBFVkVOVF9OQU1FX1VOTE9DS0VEX0FDSElFVkVNRU5UOiAnZmJfbW9iaWxlX2FjaGlldmVtZW50X3VubG9ja2VkJyxcbiAgICBFVkVOVF9OQU1FX1NQRU5UX0NSRURJVFM6ICdmYl9tb2JpbGVfc3BlbnRfY3JlZGl0cycsXG4gICAgRVZFTlRfUEFSQU1fQ1VSUkVOQ1k6ICdmYl9jdXJyZW5jeScsXG4gICAgRVZFTlRfUEFSQU1fUkVHSVNUUkFUSU9OX01FVEhPRDogJ2ZiX3JlZ2lzdHJhdGlvbl9tZXRob2QnLFxuICAgIEVWRU5UX1BBUkFNX0NPTlRFTlRfVFlQRTogJ2ZiX2NvbnRlbnRfdHlwZScsXG4gICAgRVZFTlRfUEFSQU1fQ09OVEVOVF9JRDogJ2ZiX2NvbnRlbnRfaWQnLFxuICAgIEVWRU5UX1BBUkFNX1NFQVJDSF9TVFJJTkc6ICdmYl9zZWFyY2hfc3RyaW5nJyxcbiAgICBFVkVOVF9QQVJBTV9TVUNDRVNTOiAnZmJfc3VjY2VzcycsXG4gICAgRVZFTlRfUEFSQU1fTUFYX1JBVElOR19WQUxVRTogJ2ZiX21heF9yYXRpbmdfdmFsdWUnLFxuICAgIEVWRU5UX1BBUkFNX1BBWU1FTlRfSU5GT19BVkFJTEFCTEU6ICdmYl9wYXltZW50X2luZm9fYXZhaWxhYmxlJyxcbiAgICBFVkVOVF9QQVJBTV9OVU1fSVRFTVM6ICdmYl9udW1faXRlbXMnLFxuICAgIEVWRU5UX1BBUkFNX0xFVkVMOiAnZmJfbGV2ZWwnLFxuICAgIEVWRU5UX1BBUkFNX0RFU0NSSVBUSU9OOiAnZmJfZGVzY3JpcHRpb24nLFxuICAgIEVWRU5UX1BBUkFNX1NPVVJDRV9BUFBMSUNBVElPTjogJ2ZiX21vYmlsZV9sYXVuY2hfc291cmNlJyxcbiAgICBFVkVOVF9QQVJBTV9WQUxVRV9ZRVM6ICcxJyxcbiAgICBFVkVOVF9QQVJBTV9WQUxVRV9OTzogJzAnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBMb2dpbiB0byBGYWNlYm9vayB0byBhdXRoZW50aWNhdGUgdGhpcyBhcHAuXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICoge1xuICAgKiAgIHN0YXR1czogJ2Nvbm5lY3RlZCcsXG4gICAqICAgYXV0aFJlc3BvbnNlOiB7XG4gICAqICAgICBzZXNzaW9uX2tleTogdHJ1ZSxcbiAgICogICAgIGFjY2Vzc1Rva2VuOiAna2draDNnNDJraDRnMjNraDRnMmtoMzRnMmtnNGsyaDRna2gzZzRrMmg0Z2syM2g0Z2syaDM0Z2syMzRnazJoMzRBbmRTb09uJyxcbiAgICogICAgIGV4cGlyZXNJbjogNTE4Mzk3OSxcbiAgICogICAgIHNpZzogJy4uLicsXG4gICAqICAgICBzZWNyZXQ6ICcuLi4nLFxuICAgKiAgICAgdXNlcklEOiAnNjM0NTY1NDM1J1xuICAgKiAgIH1cbiAgICogfVxuICAgKlxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gIHBlcm1pc3Npb25zIExpc3Qgb2YgW3Blcm1pc3Npb25zXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZmFjZWJvb2stbG9naW4vcGVybWlzc2lvbnMpIHRoaXMgYXBwIGhhcyB1cG9uIGxvZ2dpbmcgaW4uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZhY2Vib29rTG9naW5SZXNwb25zZT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIHN0YXR1cyBvYmplY3QgaWYgbG9naW4gc3VjY2VlZHMsIGFuZCByZWplY3RzIGlmIGxvZ2luIGZhaWxzLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dpbihwZXJtaXNzaW9uczogc3RyaW5nW10pOiBQcm9taXNlPEZhY2Vib29rTG9naW5SZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dpbiB0byBGYWNlYm9vayB1c2luZyBMaW1pdGVkIExvZ2luIChpT1MgT25seSlcbiAgICpcbiAgICogYGBgdHlwZXNjcmlwdFxuICAgKiB7XG4gICAqICAgc3RhdHVzOiAnY29ubmVjdGVkJyxcbiAgICogICBhdXRoUmVzcG9uc2U6IHtcbiAgICogICAgIGF1dGhlbnRpY2F0aW9uVG9rZW46ICdrZ2toM2c0MmtoNGcyM2toNGcya2gzNGcya2c0azJoNGdraDNnNGsyaDRnazIzaDRnazJoMzRnazIzNGdrMmgzNEFuZFNvT24nLFxuICAgKiAgICAgbm9uY2U6ICdmb28nLFxuICAgKiAgICAgdXNlcklEOiAnNjM0NTY1NDM1J1xuICAgKiAgIH1cbiAgICogfVxuICAgKlxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gIHBlcm1pc3Npb25zIExpc3Qgb2YgW3Blcm1pc3Npb25zXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZmFjZWJvb2stbG9naW4vbGltaXRlZC1sb2dpbi9wZXJtaXNzaW9ucykgdGhpcyBhcHAgaGFzIHVwb24gbG9nZ2luZyBpbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8RmFjZWJvb2tMb2dpblJlc3BvbnNlPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgc3RhdHVzIG9iamVjdCBpZiBsb2dpbiBzdWNjZWVkcywgYW5kIHJlamVjdHMgaWYgbG9naW4gZmFpbHMuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ2luV2l0aExpbWl0ZWRUcmFja2luZyhwZXJtaXNzaW9uczogc3RyaW5nW10pOiBQcm9taXNlPEZhY2Vib29rTG9naW5SZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgdXNlciBoYXMgYXBwcm92ZWQgYWxsIG5lY2Vzc2FyeSBwZXJtaXNzaW9uc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSAgcGVybWlzc2lvbnMgTGlzdCBvZiBbcGVybWlzc2lvbnNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9mYWNlYm9vay1sb2dpbi9wZXJtaXNzaW9ucykgdG8gY2hlY2sgZm9yXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIHN1Y2Nlc3Mgc3RyaW5nIGlmIGFsbCBwYXNzZWQgcGVybWlzc2lvbnMgYXJlIGdyYW50ZWQsIG9yIGFuIGVycm9yIHN0cmluZyBpZiBhbnkgcGVybWlzc2lvbnMgYXJlIG5vdCBncmFudGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNoZWNrSGFzQ29ycmVjdFBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiBzdHJpbmdbXSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGRhdGEgYWNjZXNzIGhhcyBleHBpcmVkIGZvciB0aGUgdXNlclxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBzdWNjZXNzIHN0cmluZyBpZiBkYXRhIGFjY2VzcyBpcyBleHBpcmVkLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNEYXRhQWNjZXNzRXhwaXJlZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWF1dGhvcml6ZSBkYXRhIGFjY2VzcyBhZnRlciBpdCBoYXMgZXhwaXJlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGYWNlYm9va0xvZ2luUmVzcG9uc2U+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBzdGF0dXMgb2JqZWN0IGlmIGxvZ2luIHN1Y2NlZWRzLCBhbmQgcmVqZWN0cyBpZiBsb2dpbiBmYWlscy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVhdXRob3JpemVEYXRhQWNjZXNzKCk6IFByb21pc2U8RmFjZWJvb2tMb2dpblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ291dCBvZiBGYWNlYm9vay5cbiAgICpcbiAgICogRm9yIG1vcmUgaW5mbyBzZWUgdGhlIFtGYWNlYm9vayBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcmVmZXJlbmNlL2phdmFzY3JpcHQvRkIubG9nb3V0KVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIGEgc3VjY2Vzc2Z1bCBsb2dvdXQsIGFuZCByZWplY3RzIGlmIGxvZ291dCBmYWlscy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluIHRvIEZhY2Vib29rIGFuZCBoYXMgYXV0aGVudGljYXRlZCB5b3VyIGFwcC4gIFRoZXJlIGFyZSB0aHJlZSBwb3NzaWJsZSBzdGF0ZXMgZm9yIGEgdXNlcjpcbiAgICpcbiAgICogMSkgdGhlIHVzZXIgaXMgbG9nZ2VkIGludG8gRmFjZWJvb2sgYW5kIGhhcyBhdXRoZW50aWNhdGVkIHlvdXIgYXBwbGljYXRpb24gKGNvbm5lY3RlZClcbiAgICogMikgdGhlIHVzZXIgaXMgbG9nZ2VkIGludG8gRmFjZWJvb2sgYnV0IGhhcyBub3QgYXV0aGVudGljYXRlZCB5b3VyIGFwcGxpY2F0aW9uIChub3RfYXV0aG9yaXplZClcbiAgICogMykgdGhlIHVzZXIgaXMgZWl0aGVyIG5vdCBsb2dnZWQgaW50byBGYWNlYm9vayBvciBleHBsaWNpdGx5IGxvZ2dlZCBvdXQgb2YgeW91ciBhcHBsaWNhdGlvbiBzbyBpdCBkb2Vzbid0IGF0dGVtcHQgdG8gY29ubmVjdCB0byBGYWNlYm9vayBhbmQgdGh1cywgd2UgZG9uJ3Qga25vdyBpZiB0aGV5J3ZlIGF1dGhlbnRpY2F0ZWQgeW91ciBhcHBsaWNhdGlvbiBvciBub3QgKHVua25vd24pXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggYSByZXNwb25zZSBsaWtlOlxuICAgKlxuICAgKiBgYGBcbiAgICoge1xuICAgKiAgIGF1dGhSZXNwb25zZToge1xuICAgKiAgICAgdXNlcklEOiAnMTIzNDU2Nzg5MTIzNDUnLFxuICAgKiAgICAgYWNjZXNzVG9rZW46ICdrZ2toM2c0MmtoNGcyM2toNGcya2gzNGcya2c0azJoNGdraDNnNGsyaDRnazIzaDRnazJoMzRnazIzNGdrMmgzNEFuZFNvT24nLFxuICAgKiAgICAgc2Vzc2lvbl9LZXk6IHRydWUsXG4gICAqICAgICBleHBpcmVzSW46ICc1MTgzNzM4JyxcbiAgICogICAgIHNpZzogJy4uLidcbiAgICogICB9LFxuICAgKiAgIHN0YXR1czogJ2Nvbm5lY3RlZCdcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlIHRoZSBbRmFjZWJvb2sgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3JlZmVyZW5jZS9qYXZhc2NyaXB0L0ZCLmdldExvZ2luU3RhdHVzKVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBzdGF0dXMsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRMb2dpblN0YXR1cygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBGYWNlYm9vayBhY2Nlc3MgdG9rZW4gZm9yIHVzaW5nIEZhY2Vib29rIHNlcnZpY2VzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYWNjZXNzIHRva2VuLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWNjZXNzVG9rZW4oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHByb2ZpbGUgaW5mb3JtYXRpb24gZm9yIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHN1Y2Nlc3MgZGF0YSwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEN1cnJlbnRQcm9maWxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgb25lIG9mIHZhcmlvdXMgRmFjZWJvb2sgZGlhbG9ncy4gRXhhbXBsZSBvZiBvcHRpb25zIGZvciBhIFNoYXJlIGRpYWxvZzpcbiAgICpcbiAgICogYGBgXG4gICAqIHtcbiAgICogICBtZXRob2Q6ICdzaGFyZScsXG4gICAqICAgaHJlZjogJ2h0dHA6Ly9leGFtcGxlLmNvbScsXG4gICAqICAgY2FwdGlvbjogJ1N1Y2ggY2FwdGlvbiwgdmVyeSBmZWVkLicsXG4gICAqICAgZGVzY3JpcHRpb246ICdNdWNoIGRlc2NyaXB0aW9uJyxcbiAgICogICBwaWN0dXJlOiAnaHR0cDovL2V4YW1wbGUuY29tL2ltYWdlLnBuZydcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogRm9yIG1vcmUgb3B0aW9ucyBzZWUgdGhlIFtDb3Jkb3ZhIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1wbHVnaW4tZmFjZWJvb2stY29ubmVjdC9jb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0I3Nob3ctYS1kaWFsb2cpIGFuZCB0aGUgW0ZhY2Vib29rIGRvY3NdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9qYXZhc2NyaXB0L3JlZmVyZW5jZS9GQi51aSlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIGRpYWxvZyBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBzdWNjZXNzIGRhdGEsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93RGlhbG9nKG9wdGlvbnM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBjYWxsIHRvIEZhY2Vib29rIEdyYXBoIEFQSS4gQ2FuIHRha2UgYWRkaXRpb25hbCBwZXJtaXNzaW9ucyBiZXlvbmQgdGhvc2UgZ3JhbnRlZCBvbiBsb2dpbi5cbiAgICpcbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlOlxuICAgKlxuICAgKiAgQ2FsbGluZyB0aGUgR3JhcGggQVBJIC0gaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2phdmFzY3JpcHQvcmVmZXJlbmNlL0ZCLmFwaVxuICAgKiAgR3JhcGggRXhwbG9yZXIgLSBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL3Rvb2xzL2V4cGxvcmVyXG4gICAqICBHcmFwaCBBUEkgLSBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZ3JhcGgtYXBpXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgcmVxdWVzdFBhdGggR3JhcGggQVBJIGVuZHBvaW50IHlvdSB3YW50IHRvIGNhbGxcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gIHBlcm1pc3Npb25zIExpc3Qgb2YgW3Blcm1pc3Npb25zXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZmFjZWJvb2stbG9naW4vcGVybWlzc2lvbnMpIGZvciB0aGlzIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgaHR0cE1ldGhvZCBIVFRQIG1ldGhvZCBmb3IgdGhlIHJlcXVlc3QsIG9uZSBvZiBcIkdFVFwiLCBcIlBPU1RcIiwgb3IgXCJERUxFVEVcIiAoZGVmYXVsdCBpcyBcIkdFVFwiKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlc3VsdCBvZiB0aGUgcmVxdWVzdCwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFwaShyZXF1ZXN0UGF0aDogc3RyaW5nLCBwZXJtaXNzaW9uczogc3RyaW5nW10sIGh0dHBNZXRob2Q/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgYW4gZXZlbnQuICBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgdGhlIEV2ZW50cyBzZWN0aW9uIGFib3ZlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gIG5hbWUgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtPYmplY3R9ICBbcGFyYW1zXSBBbiBvYmplY3QgY29udGFpbmluZyBleHRyYSBkYXRhIHRvIGxvZyB3aXRoIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge251bWJlcn0gIFt2YWx1ZVRvU3VtXSBhbnkgdmFsdWUgdG8gYmUgYWRkZWQgdG8gYWRkZWQgdG8gYSBzdW0gb24gZWFjaCBldmVudFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMyxcbiAgICBlcnJvckluZGV4OiA0LFxuICB9KVxuICBsb2dFdmVudChuYW1lOiBzdHJpbmcsIHBhcmFtcz86IE9iamVjdCwgdmFsdWVUb1N1bT86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIHRoZSBhdXRvIGxvZyBhcHAgZXZlbnQgZmVhdHVyZSAtIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9hcHAtZXZlbnRzL2dkcHItY29tcGxpYW5jZS9cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSAgZW5hYmxlZCB2YWx1ZSB0byBiZSBzZXRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc2V0QXV0b0xvZ0FwcEV2ZW50c0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBjb2xsZWN0aW9uIG9mIGFkdmVydGlzZXItaWRcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSAgZW5hYmxlZCB2YWx1ZSB0byBiZSBzZXRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QWR2ZXJ0aXNlcklEQ29sbGVjdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBhZHZlcnRpc2VyIHRyYWNraW5nIChpT1MgT25seSlcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSAgZW5hYmxlZCB2YWx1ZSB0byBiZSBzZXRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QWR2ZXJ0aXNlclRyYWNraW5nRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZyBhIHB1cmNoYXNlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgdGhlIEV2ZW50cyBzZWN0aW9uIGFib3ZlLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gIHZhbHVlIFZhbHVlIG9mIHRoZSBwdXJjaGFzZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9ICBjdXJyZW5jeSBUaGUgY3VycmVuY3ksIGFzIGFuIFtJU08gNDIxNyBjdXJyZW5jeSBjb2RlXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT180MjE3KVxuICAgKiBAcGFyYW0ge09iamVjdH0gIHBhcmFtcyBBbiBvYmplY3QgY29udGFpbmluZyBleHRyYSBkYXRhIHRvIGxvZyB3aXRoIHRoZSBldmVudFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dQdXJjaGFzZSh2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeTogc3RyaW5nLCBwYXJhbXM/OiBPYmplY3QpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkZWZlcnJlZCBhcHAgbGlua1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXREZWZlcnJlZEFwcGxpbmsoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFudWFsbHkgbG9nIGFjdGl2YXRpb24gZXZlbnRzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFjdGl2YXRlQXBwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

    /***/

  },

  /***/
  "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js": function node_modulesIonicNativeGooglePlus__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GooglePlus", function () {
      return GooglePlus;
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


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

    var GooglePlus = function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GooglePlus, _super);

      function GooglePlus() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      GooglePlus.prototype.login = function (options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "login", {
          "successIndex": 1,
          "errorIndex": 2
        }, arguments);
      };

      GooglePlus.prototype.trySilentLogin = function (options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "trySilentLogin", {}, arguments);
      };

      GooglePlus.prototype.logout = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logout", {}, arguments);
      };

      GooglePlus.prototype.disconnect = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disconnect", {}, arguments);
      };

      GooglePlus.prototype.getSigningCertificateFingerprint = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getSigningCertificateFingerprint", {}, arguments);
      };

      GooglePlus.pluginName = "GooglePlus";
      GooglePlus.plugin = "cordova-plugin-googleplus";
      GooglePlus.pluginRef = "window.plugins.googleplus";
      GooglePlus.repo = "https://github.com/EddyVerbruggen/cordova-plugin-googleplus";
      GooglePlus.install = "ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid";
      GooglePlus.installVariables = ["REVERSED_CLIENT_ID"];
      GooglePlus.platforms = ["Android", "iOS"];

      GooglePlus.ɵfac = function GooglePlus_Factory(t) {
        return ɵGooglePlus_BaseFactory(t || GooglePlus);
      };

      GooglePlus.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: GooglePlus,
        factory: function factory(t) {
          return GooglePlus.ɵfac(t);
        }
      });

      var ɵGooglePlus_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GooglePlus);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GooglePlus, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], null, null);
      })();

      return GooglePlus;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZ29vZ2xlLXBsdXMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBS0EsSUF1QmdDLDhCQUFpQjtBQUFDO0FBRTlCO0FBRW5CO0FBQU0sSUFNTCwwQkFBSyxhQUFDLE9BQVk7QUFLNEIsSUFLOUMsbUNBQWMsYUFBQyxPQUFhO0FBS1QsSUFJbkIsMkJBQU07QUFLaUIsSUFJdkIsK0JBQVU7QUFLaUIsSUFJM0IscURBQWdDO0FBSXNCO0FBQTBDO0FBQXFEO0FBQXdEO0FBQXFGO0FBQWdJO0FBQTBEOzhDQXBEN2QsVUFBVTs7Ozs7MEJBQ0w7QUFBQyxxQkE5QlA7QUFBRSxFQThCOEIsaUJBQWlCO0FBQ2hELFNBRFksVUFBVTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgR29vZ2xlIFBsdXNcbiAqIEBkZXNjcmlwdGlvblxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHb29nbGVQbHVzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9nb29nbGUtcGx1cy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZ29vZ2xlUGx1czogR29vZ2xlUGx1cykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5nb29nbGVQbHVzLmxvZ2luKHt9KVxuICogICAudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZVBsdXMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVwbHVzJyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LnBsdWdpbnMuZ29vZ2xlcGx1cycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vY29yZG92YS1wbHVnaW4tZ29vZ2xlcGx1cycsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZ29vZ2xlcGx1cyAtLXZhcmlhYmxlIFJFVkVSU0VEX0NMSUVOVF9JRD1teXJldmVyc2VkY2xpZW50aWQnLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1JFVkVSU0VEX0NMSUVOVF9JRCddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlUGx1cyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoZSBsb2dpbiBmdW5jdGlvbiB3YWxrcyB0aGUgdXNlciB0aHJvdWdoIHRoZSBHb29nbGUgQXV0aCBwcm9jZXNzLlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICBsb2dpbihvcHRpb25zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGNhbGwgdHJ5U2lsZW50TG9naW4gdG8gY2hlY2sgaWYgdGhleSdyZSBhbHJlYWR5IHNpZ25lZCBpbiB0byB0aGUgYXBwIGFuZCBzaWduIHRoZW0gaW4gc2lsZW50bHkgaWYgdGhleSBhcmUuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHRyeVNpbGVudExvZ2luKG9wdGlvbnM/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdpbGwgY2xlYXIgdGhlIE9BdXRoMiB0b2tlbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBjbGVhciB0aGUgT0F1dGgyIHRva2VuLCBmb3JnZXQgd2hpY2ggYWNjb3VudCB3YXMgdXNlZCB0byBsb2dpbiwgYW5kIGRpc2Nvbm5lY3QgdGhhdCBhY2NvdW50IGZyb20gdGhlIGFwcC4gVGhpcyB3aWxsIHJlcXVpcmUgdGhlIHVzZXIgdG8gYWxsb3cgdGhlIGFwcCBhY2Nlc3MgYWdhaW4gbmV4dCB0aW1lIHRoZXkgc2lnbiBpbi4gQmUgYXdhcmUgdGhhdCB0aGlzIGVmZmVjdCBpcyBub3QgYWx3YXlzIGluc3RhbnRhbmVvdXMuIEl0IGNhbiB0YWtlIHRpbWUgdG8gY29tcGxldGVseSBkaXNjb25uZWN0LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkaXNjb25uZWN0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCByZXRyaWV2ZSB0aGUgQW5kcm9pZCBzaWduaW5nIGNlcnRpZmljYXRlIGZpbmdlcnByaW50IHdoaWNoIGlzIHJlcXVpcmVkIGluIHRoZSBHb29nbGUgRGV2ZWxvcGVyIENvbnNvbGUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFNpZ25pbmdDZXJ0aWZpY2F0ZUZpbmdlcnByaW50KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html": function node_modulesRawLoaderDistCjsJsSrcAppSignInSignInPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n    <div class=\"banner\">\r\n        <div class=\"logo_box\">\r\n            <img src=\"assets/images/logo.png\">\r\n        </div>\r\n\r\n        <div class=\"banner_images\">\r\n            <img src=\"assets/images/hero_image.png\">\r\n        </div>\r\n        <div class=\"form\">\r\n            <ion-list lines=\"none\">\r\n                <ion-item lines=\"none\">\r\n                    <div class=\"ite_inner d-flex\">\r\n                        <ion-icon class=\"zmdi zmdi-globe-alt ion-text-start\"></ion-icon>\r\n                        <ion-label mode=\"md\" position=\"fixed\">{{\"select_country\" | translate}}</ion-label>\r\n                        <ion-select mode=\"md\" [(ngModel)]=\"countryCode\" multiple=\"false\" [okText]=\"'okay' | translate\"\r\n                            [cancelText]=\"'cancel' | translate\" (ionChange)=\"changeHint()\"\r\n                            placeholder=\"{{'select_country' | translate}}\">\r\n                            <ion-select-option *ngFor=\"let country of countries\" [value]=\"country.callingCodes[0]\">\r\n                                {{country.name}}\r\n                            </ion-select-option>\r\n                        </ion-select>\r\n                    </div>\r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                    <div class=\"ite_inner d-flex\">\r\n                        <ion-icon class=\"zmdi zmdi-smartphone-iphone ion-text-start\"></ion-icon>\r\n                        <!--                        <ion-label position=\"fixed\">{{phoneNumberHint}}</ion-label>-->\r\n                        <ion-input type=\"tel\" [(ngModel)]=\"phoneNumber\" (keyup.enter)=\"alertPhone()\"\r\n                            placeholder=\"{{phoneNumberHint}}\">\r\n                        </ion-input>\r\n                    </div>\r\n                </ion-item>\r\n                <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"alertPhone()\">\r\n                    {{'continue' | translate}}\r\n                </ion-button>\r\n            </ion-list>\r\n        </div>\r\n    </div>\r\n    <div class=\"quick_signin\">\r\n        <h4 class=\"ion-text-center\">{{'or_quick_continue_withh' | translate}}</h4>\r\n        <ion-row>\r\n            <ion-col size=\"6\">\r\n                <ion-button size=\"large\" shape=\"block\" class=\"btn facebook\" (click)=\"signInFacebook()\">\r\n                    <img slot=\"start\" src=\"assets/images/fb.png\">\r\n                    {{'facebook' | translate}}\r\n                </ion-button>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"6\">\r\n                <ion-button size=\"large\" shape=\"block\" class=\"btn gmail\" (click)=\"signInGoogle()\">\r\n                    <img slot=\"start\" src=\"assets/images/google.png\">\r\n                    {{'gmail' | translate}}\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/sign-in/sign-in-routing.module.ts": function srcAppSignInSignInRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function () {
      return SignInPageRoutingModule;
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


    var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-in.page */
    "./src/app/sign-in/sign-in.page.ts");

    var routes = [{
      path: '',
      component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }];

    var SignInPageRoutingModule = function SignInPageRoutingModule() {
      _classCallCheck(this, SignInPageRoutingModule);
    };

    SignInPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignInPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/sign-in/sign-in.module.ts": function srcAppSignInSignInModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPageModule", function () {
      return SignInPageModule;
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


    var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-in-routing.module */
    "./src/app/sign-in/sign-in-routing.module.ts");
    /* harmony import */


    var _sign_in_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sign-in.page */
    "./src/app/sign-in/sign-in.page.ts");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");

    var SignInPageModule = function SignInPageModule() {
      _classCallCheck(this, SignInPageModule);
    };

    SignInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignInPageRoutingModule"]],
      providers: [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"]],
      declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_7__["SignInPage"]]
    })], SignInPageModule);
    /***/
  },

  /***/
  "./src/app/sign-in/sign-in.page.scss": function srcAppSignInSignInPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  --background: none !important;\n}\n\n.banner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.banner::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 168px);\n  background: var(--bg-secondary);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.banner .logo_box {\n  position: relative;\n  z-index: 99;\n  display: flex;\n  align-items: center;\n  height: 200px;\n}\n\n.banner .logo_box img {\n  width: 145px;\n  display: block;\n  margin: auto;\n}\n\n.banner .welcome_text {\n  position: relative;\n  z-index: 99;\n  color: var(--white);\n  padding: 0 20px;\n  margin-bottom: 60px;\n}\n\n.banner .welcome_text h2 {\n  margin: 0;\n  font-size: 1.35rem;\n  font-weight: 400;\n  margin-bottom: 13px;\n}\n\n.banner .welcome_text h3 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.banner .banner_images {\n  position: relative;\n}\n\n.banner .banner_images img {\n  display: block;\n  margin: 0 auto;\n  width: 300px;\n}\n\n.banner .form ion-item {\n  background: var(--white);\n}\n\n.banner .form ion-item.item-input ion-label {\n  max-width: unset !important;\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.banner .form ion-item.item-select {\n  padding: 2px 13px;\n}\n\n.banner .form ion-item.item-select ion-label {\n  display: none;\n}\n\n.banner .button.btn.button-block {\n  margin-top: 20px !important;\n}\n\n.quick_signin {\n  width: calc(100% - 40px);\n  margin: 0 auto;\n}\n\n.quick_signin h4 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\n.quick_signin ion-row {\n  margin: 0 -10px;\n}\n\n.quick_signin ion-row ion-col {\n  padding: 0 10px !important;\n}\n\n.quick_signin .button.btn {\n  font-size: 1rem !important;\n}\n\n.quick_signin .button.btn img {\n  width: 18px;\n  position: relative;\n  left: -11px;\n}\n\n.quick_signin .button.btn.facebook {\n  --background: #3c5a9a !important;\n}\n\n.quick_signin .button.btn.gmail {\n  --background: #fff !important;\n  color: #000 !important;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9GOlxcZml2ZXJcXEJlcm5hcmRcXEFnb2NhcnJ5XFxhZ29jYXJyeS1jdXN0b21lci9zcmNcXGFwcFxcc2lnbi1pblxcc2lnbi1pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0FDQUo7O0FERUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDQVI7O0FER0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDRFI7O0FER1E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNEWjs7QURLSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSFI7O0FES1E7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSFo7O0FETVE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSlo7O0FEUUk7RUFDSSxrQkFBQTtBQ05SOztBRFFRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDTlo7O0FEVUk7RUFDSSx3QkFBQTtBQ1JSOztBRFlZO0VBQ0ksMkJBQUE7RUFDQSxxQ0FBQTtFQUFBLGtDQUFBO0VBQUEsNkJBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUNWaEI7O0FEYVE7RUFDSSxpQkFBQTtBQ1haOztBRFlZO0VBQ0ksYUFBQTtBQ1ZoQjs7QURlSTtFQUNJLDJCQUFBO0FDYlI7O0FEaUJBO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0FDZEo7O0FEZ0JJO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDZFI7O0FEaUJJO0VBQ0ksZUFBQTtBQ2ZSOztBRGlCUTtFQUNJLDBCQUFBO0FDZlo7O0FEbUJJO0VBQ0ksMEJBQUE7QUNqQlI7O0FEbUJRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ2pCWjs7QURvQlE7RUFDSSxnQ0FBQTtBQ2xCWjs7QURxQlE7RUFDSSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNuQloiLCJmaWxlIjoic3JjL2FwcC9zaWduLWluL3NpZ24taW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJhbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTY4cHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIH1cclxuXHJcbiAgICAubG9nb19ib3gge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE0NXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAud2VsY29tZV90ZXh0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5iYW5uZXJfaW1hZ2VzIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybSBpb24taXRlbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIC8vICAgICAgICBwYWRkaW5nOiAycHggMjBweDtcclxuXHJcbiAgICAgICAgJi5pdGVtLWlucHV0IHtcclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLml0ZW0tc2VsZWN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4IDEzcHg7XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24uYnRuLmJ1dHRvbi1ibG9jayB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucXVpY2tfc2lnbmluIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgIGg0IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tcm93IHtcclxuICAgICAgICBtYXJnaW46IDAgLTEwcHg7XHJcblxyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi5idG4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBsZWZ0OiAtMTFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZmFjZWJvb2sge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMzYzVhOWEgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZ21haWwge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJhbm5lcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE2OHB4KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmJhbm5lciAubG9nb19ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLmJhbm5lciAubG9nb19ib3ggaW1nIHtcbiAgd2lkdGg6IDE0NXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmJhbm5lciAud2VsY29tZV90ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuLmJhbm5lciAud2VsY29tZV90ZXh0IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XG59XG4uYmFubmVyIC53ZWxjb21lX3RleHQgaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5iYW5uZXIgLmJhbm5lcl9pbWFnZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmFubmVyIC5iYW5uZXJfaW1hZ2VzIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDMwMHB4O1xufVxuLmJhbm5lciAuZm9ybSBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbi5iYW5uZXIgLmZvcm0gaW9uLWl0ZW0uaXRlbS1pbnB1dCBpb24tbGFiZWwge1xuICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmJhbm5lciAuZm9ybSBpb24taXRlbS5pdGVtLXNlbGVjdCB7XG4gIHBhZGRpbmc6IDJweCAxM3B4O1xufVxuLmJhbm5lciAuZm9ybSBpb24taXRlbS5pdGVtLXNlbGVjdCBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJhbm5lciAuYnV0dG9uLmJ0bi5idXR0b24tYmxvY2sge1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5xdWlja19zaWduaW4ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnF1aWNrX3NpZ25pbiBoNCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnF1aWNrX3NpZ25pbiBpb24tcm93IHtcbiAgbWFyZ2luOiAwIC0xMHB4O1xufVxuLnF1aWNrX3NpZ25pbiBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcbn1cbi5xdWlja19zaWduaW4gLmJ1dHRvbi5idG4ge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbn1cbi5xdWlja19zaWduaW4gLmJ1dHRvbi5idG4gaW1nIHtcbiAgd2lkdGg6IDE4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTExcHg7XG59XG4ucXVpY2tfc2lnbmluIC5idXR0b24uYnRuLmZhY2Vib29rIHtcbiAgLS1iYWNrZ3JvdW5kOiAjM2M1YTlhICFpbXBvcnRhbnQ7XG59XG4ucXVpY2tfc2lnbmluIC5idXR0b24uYnRuLmdtYWlsIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/sign-in/sign-in.page.ts": function srcAppSignInSignInPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPage", function () {
      return SignInPage;
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
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/events/my-events.service */
    "./src/app/services/events/my-events.service.ts");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_models_sociallogin_request_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/models/sociallogin-request.models */
    "./src/models/sociallogin-request.models.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");

    var SignInPage = /*#__PURE__*/function () {
      function SignInPage(config, navCtrl, myEvent, uiElementService, apiService, translate, alertCtrl, platform, facebook, google) {
        _classCallCheck(this, SignInPage);

        this.config = config;
        this.navCtrl = navCtrl;
        this.myEvent = myEvent;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.facebook = facebook;
        this.google = google;
      }

      _createClass(SignInPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.apiService.getCountries().subscribe(function (res) {
            return _this2.countries = res;
          });
          this.changeHint();
        }
      }, {
        key: "changeHint",
        value: function changeHint() {
          var _this3 = this;

          this.phoneNumber = "";

          if (this.countryCode && this.countryCode.length) {
            this.translate.get('enter_phone_number_exluding').subscribe(function (value) {
              return _this3.phoneNumberHint = value + " (+" + _this3.countryCode + ")";
            });
          } else {
            this.translate.get('enter_phone_number').subscribe(function (value) {
              return _this3.phoneNumberHint = value;
            });
          }
        }
      }, {
        key: "alertPhone",
        value: function alertPhone() {
          var _this4 = this;

          if (!this.countryCode || !this.countryCode.length) {
            this.translate.get("select_country").subscribe(function (value) {
              return _this4.uiElementService.presentToast(value);
            });
            return;
          }

          if (!this.phoneNumber || !this.phoneNumber.length) {
            this.uiElementService.presentToast(this.phoneNumberHint);
            return;
          }

          this.translate.get(['alert_phone', 'no', 'yes']).subscribe(function (text) {
            _this4.phoneNumberFull = "+" + _this4.countryCode + src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].formatPhone(_this4.phoneNumber);

            _this4.alertCtrl.create({
              header: _this4.phoneNumberFull,
              message: text['alert_phone'],
              buttons: [{
                text: text['no'],
                role: 'cancel',
                handler: function handler() {
                  console.log('Cancel clicked');
                }
              }, {
                text: text['yes'],
                handler: function handler() {
                  _this4.checkIfExists();
                }
              }]
            }).then(function (alert) {
              return alert.present();
            });
          });
        }
      }, {
        key: "checkIfExists",
        value: function checkIfExists() {
          var _this5 = this;

          this.translate.get('just_moment').subscribe(function (value) {
            _this5.uiElementService.presentLoading(value);

            _this5.apiService.checkUser({
              mobile_number: _this5.phoneNumberFull,
              role: src_models_constants_models__WEBPACK_IMPORTED_MODULE_12__["Constants"].ROLE_USER
            }).subscribe(function (res) {
              console.log(res);

              _this5.uiElementService.dismissLoading();

              var navigationExtras = {
                queryParams: {
                  phoneNumberFull: _this5.phoneNumberFull
                }
              };

              _this5.navCtrl.navigateForward(['./verification'], navigationExtras);
            }, function (err) {
              console.log(err);

              _this5.uiElementService.dismissLoading();

              var navigationExtras = {
                queryParams: {
                  code: _this5.countryCode,
                  phone: _this5.phoneNumber
                }
              };

              _this5.navCtrl.navigateForward(['./register'], navigationExtras);
            });
          });
        }
      }, {
        key: "signInFacebook",
        value: function signInFacebook() {
          var _this6 = this;

          if (this.platform.is('cordova')) {
            this.translate.get(["logging_facebook", "logging_facebook_err"]).subscribe(function (values) {
              _this6.uiElementService.presentLoading(values["logging_facebook"]);

              _this6.facebook.login(["public_profile", 'email']).then(function (response) {
                console.log("fb_success", JSON.stringify(response));
                var os = _this6.platform.is('ios') ? 'ios' : 'android';

                _this6.verifyUser(new src_models_sociallogin_request_models__WEBPACK_IMPORTED_MODULE_10__["SocialLoginRequest"](response.authResponse.accessToken, "facebook", os), null);
              })["catch"](function (error) {
                console.log("fb_error", error);

                _this6.uiElementService.presentToast(values["logging_facebook_err"]);

                _this6.uiElementService.dismissLoading();
              });
            });
          }
        }
      }, {
        key: "signInGoogle",
        value: function signInGoogle() {
          var _this7 = this;

          if (this.platform.is('cordova')) {
            this.translate.get(["logging_google", "logging_google_err"]).subscribe(function (values) {
              _this7.uiElementService.presentLoading(values["logging_google"]);

              _this7.google.login({
                'webClientId': _this7.config.firebaseConfig.webApplicationId,
                'offline': false,
                'scopes': 'profile email'
              }).then(function (googleCredential) {
                console.log('google_success', JSON.stringify(googleCredential));
                var os = _this7.platform.is('ios') ? 'ios' : 'android';

                _this7.verifyUser(new src_models_sociallogin_request_models__WEBPACK_IMPORTED_MODULE_10__["SocialLoginRequest"](googleCredential.idToken, "google", os), googleCredential.displayName && googleCredential.email ? {
                  name: googleCredential.displayName,
                  email: googleCredential.email
                } : null);
              })["catch"](function (err) {
                console.log('google_fail', err);

                _this7.uiElementService.dismissLoading();

                _this7.uiElementService.presentToast(values["logging_google_err"]);
              });
            });
          }
        }
      }, {
        key: "verifyUser",
        value: function verifyUser(slr, nameEmail) {
          var _this8 = this;

          this.translate.get('verifying_user').subscribe(function (value) {
            _this8.uiElementService.presentToast(value);

            _this8.apiService.loginSocial(slr).subscribe(function (res) {
              _this8.uiElementService.dismissLoading();

              _this8.loginSocialSuccess(res);
            }, function (err) {
              _this8.uiElementService.dismissLoading();

              console.log(err);

              if (err && err.status && err.status == 404) {
                var navigationExtras = {
                  queryParams: nameEmail ? nameEmail : {
                    name: err.error.name,
                    email: err.error.email
                  }
                };

                _this8.navCtrl.navigateForward(['./register'], navigationExtras);
              } else {
                _this8.uiElementService.presentToast(err.error.message);
              }
            });
          });
        }
      }, {
        key: "loginSocialSuccess",
        value: function loginSocialSuccess(res) {
          if (res.user.mobile_verified == 1) {
            src_models_helper_models__WEBPACK_IMPORTED_MODULE_11__["Helper"].setLoggedInUserResponse(res);
            this.apiService.setupHeaders(res.token);
            this.myEvent.setUserMeData(res.user);
            window.localStorage.removeItem(src_models_constants_models__WEBPACK_IMPORTED_MODULE_12__["Constants"].KEY_ADDRESS);
            this.myEvent.setAddressData(null);
          } else {
            var navigationExtras = {
              queryParams: {
                phoneNumberFull: res.user.mobile_number
              }
            };
            this.navCtrl.navigateForward(['./verification'], navigationExtras);
          }
        }
      }]);

      return SignInPage;
    }();

    SignInPage.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"]]
        }]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_4__["MyEventsService"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"]
      }, {
        type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"]
      }];
    };

    SignInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-in',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sign-in.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sign-in.page.scss */
      "./src/app/sign-in/sign-in.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_4__["MyEventsService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"]])], SignInPage);
    /***/
  },

  /***/
  "./src/models/sociallogin-request.models.ts": function srcModelsSocialloginRequestModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialLoginRequest", function () {
      return SocialLoginRequest;
    });
    /* harmony import */


    var _constants_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./constants.models */
    "./src/models/constants.models.ts");

    var SocialLoginRequest = function SocialLoginRequest(token, platform, os) {
      _classCallCheck(this, SocialLoginRequest);

      this.token = token;
      this.platform = platform;
      this.os = os;
      this.role = _constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].ROLE_USER;
    };
    /***/

  }
}]);
//# sourceMappingURL=sign-in-sign-in-module-es5.js.map