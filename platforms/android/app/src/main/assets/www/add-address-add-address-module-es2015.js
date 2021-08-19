(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-address-add-address-module"],{

/***/ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js ***!
  \**************************************************************************/
/*! exports provided: Geolocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





var Geolocation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Geolocation, _super);
    function Geolocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Geolocation.prototype.getCurrentPosition = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getCurrentPosition", { "callbackOrder": "reverse" }, arguments); };
    /**
     * Watch the current device's position.  Clear the watch by unsubscribing from
     * Observable changes.
     *
     * ```typescript
     * const subscription = this.geolocation.watchPosition()
     *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
     *                               .subscribe(position => {
     *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
     * });
     *
     * // To stop notifications
     * subscription.unsubscribe();
     * ```
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Observable<Geoposition | PositionError>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
     */
    Geolocation.prototype.watchPosition = function (options) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.geolocation.clearWatch(watchId); };
        });
    };
    Geolocation.pluginName = "Geolocation";
    Geolocation.plugin = "cordova-plugin-geolocation";
    Geolocation.pluginRef = "navigator.geolocation";
    Geolocation.repo = "https://github.com/apache/cordova-plugin-geolocation";
    Geolocation.install = "ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION=\"To locate you\"";
    Geolocation.installVariables = ["GEOLOCATION_USAGE_DESCRIPTION"];
    Geolocation.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
Geolocation.ɵfac = function Geolocation_Factory(t) { return ɵGeolocation_BaseFactory(t || Geolocation); };
Geolocation.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Geolocation, factory: function (t) { return Geolocation.ɵfac(t); } });
var ɵGeolocation_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Geolocation);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Geolocation, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return Geolocation;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZ2VvbG9jYXRpb24vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFDbEM7QUFHcUIsSUE4SlksK0JBQWlCO0FBQUM7QUFFOUI7QUFFNEI7QUFBTSxJQU1yRCx3Q0FBa0IsYUFBQyxPQUE0QjtBQUtKLElBRDNDO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUdaO0FBQVc7QUFBTztBQUNFO0FBR1o7QUFBVztBQUFPO0FBQ0U7QUFFSixPQURyQjtBQUNMLElBQUUsbUNBQWEsR0FBYixVQUFjLE9BQTRCO0FBQUksUUFDNUMsT0FBTyxJQUFJLFVBQVUsQ0FBOEIsVUFBQyxRQUFhO0FBQUksWUFDbkUsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQ2pELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDNUIsT0FBTyxDQUNSLENBQUM7QUFDUixZQUFNLE9BQU8sY0FBTSxPQUFBLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUF6QyxDQUF5QyxDQUFDO0FBQzdELFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDRjtBQUMwQztBQUF1RDtBQUFxRDtBQUErRTtBQUE0STtBQUFzRTsrQ0E1Q3ZiLFVBQVU7Ozs7OzBCQUNMO0FBQUMsc0JBcEtQO0FBQUUsRUFvSytCLGlCQUFpQjtBQUNqRCxTQURZLFdBQVc7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIGNvbnN0IG5hdmlnYXRvcjogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvb3JkaW5hdGVzIHtcbiAgLyoqXG4gICAqIGEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgcG9zaXRpb24ncyBsYXRpdHVkZSBpbiBkZWNpbWFsIGRlZ3JlZXMuXG4gICAqL1xuICBsYXRpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIHBvc2l0aW9uJ3MgbG9uZ2l0dWRlIGluIGRlY2ltYWwgZGVncmVlcy5cbiAgICovXG4gIGxvbmdpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIGFjY3VyYWN5IG9mIHRoZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHByb3BlcnRpZXMsXG4gICAqIGV4cHJlc3NlZCBpbiBtZXRlcnMuXG4gICAqL1xuICBhY2N1cmFjeTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIHBvc2l0aW9uJ3MgYWx0aXR1ZGUgaW4gbWV0cmVzLCByZWxhdGl2ZSB0byBzZWFcbiAgICogbGV2ZWwuIFRoaXMgdmFsdWUgY2FuIGJlIG51bGwgaWYgdGhlIGltcGxlbWVudGF0aW9uIGNhbm5vdCBwcm92aWRlIHRoZSBkYXRhLlxuICAgKi9cbiAgYWx0aXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBhY2N1cmFjeSBvZiB0aGUgYWx0aXR1ZGUgZXhwcmVzc2VkIGluIG1ldGVycy5cbiAgICogVGhpcyB2YWx1ZSBjYW4gYmUgbnVsbC5cbiAgICovXG4gIGFsdGl0dWRlQWNjdXJhY3k6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIGRldmljZSBpcyB0cmF2ZWxpbmcuIFRoaXNcbiAgICogdmFsdWUsIHNwZWNpZmllZCBpbiBkZWdyZWVzLCBpbmRpY2F0ZXMgaG93IGZhciBvZmYgZnJvbSBoZWFkaW5nIHRydWUgbm9ydGhcbiAgICogdGhlIGRldmljZSBpcy4gMCBkZWdyZWVzIHJlcHJlc2VudHMgdHJ1ZSBub3J0aCwgYW5kIHRoZSBkaXJlY3Rpb24gaXNcbiAgICogZGV0ZXJtaW5lZCBjbG9ja3dpc2UgKHdoaWNoIG1lYW5zIHRoYXQgZWFzdCBpcyA5MCBkZWdyZWVzIGFuZCB3ZXN0IGlzIDI3MFxuICAgKiBkZWdyZWVzKS4gSWYgc3BlZWQgaXMgMCwgaGVhZGluZyBpcyBOYU4uIElmIHRoZSBkZXZpY2UgaXMgdW5hYmxlIHRvIHByb3ZpZGVcbiAgICogaGVhZGluZyBpbmZvcm1hdGlvbiwgdGhpcyB2YWx1ZSBpcyBudWxsLlxuICAgKi9cbiAgaGVhZGluZzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIHZlbG9jaXR5IG9mIHRoZSBkZXZpY2UgaW4gbWV0ZXJzIHBlciBzZWNvbmQuXG4gICAqIFRoaXMgdmFsdWUgY2FuIGJlIG51bGwuXG4gICAqL1xuICBzcGVlZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb3Bvc2l0aW9uIHtcbiAgLyoqXG4gICAqIEEgQ29vcmRpbmF0ZXMgb2JqZWN0IGRlZmluaW5nIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAqL1xuICBjb29yZHM6IENvb3JkaW5hdGVzO1xuXG4gIC8qKlxuICAgKiBBIHRpbWVzdGFtcCByZXByZXNlbnRpbmcgdGhlIHRpbWUgYXQgd2hpY2ggdGhlIGxvY2F0aW9uIHdhcyByZXRyaWV2ZWQuXG4gICAqL1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbkVycm9yIHtcbiAgLyoqXG4gICAqIEEgY29kZSB0aGF0IGluZGljYXRlcyB0aGUgZXJyb3IgdGhhdCBvY2N1cnJlZFxuICAgKi9cbiAgY29kZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIG1lc3NhZ2UgdGhhdCBjYW4gZGVzY3JpYmUgdGhlIGVycm9yIHRoYXQgb2NjdXJyZWRcbiAgICovXG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW9sb2NhdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogSXMgYSBwb3NpdGl2ZSBsb25nIHZhbHVlIGluZGljYXRpbmcgdGhlIG1heGltdW0gYWdlIGluIG1pbGxpc2Vjb25kcyBvZiBhXG4gICAqIHBvc3NpYmxlIGNhY2hlZCBwb3NpdGlvbiB0aGF0IGlzIGFjY2VwdGFibGUgdG8gcmV0dXJuLiBJZiBzZXQgdG8gMCwgaXRcbiAgICogbWVhbnMgdGhhdCB0aGUgZGV2aWNlIGNhbm5vdCB1c2UgYSBjYWNoZWQgcG9zaXRpb24gYW5kIG11c3QgYXR0ZW1wdCB0b1xuICAgKiByZXRyaWV2ZSB0aGUgcmVhbCBjdXJyZW50IHBvc2l0aW9uLiBJZiBzZXQgdG8gSW5maW5pdHkgdGhlIGRldmljZSBtdXN0XG4gICAqIHJldHVybiBhIGNhY2hlZCBwb3NpdGlvbiByZWdhcmRsZXNzIG9mIGl0cyBhZ2UuIERlZmF1bHQ6IDAuXG4gICAqL1xuICBtYXhpbXVtQWdlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJcyBhIHBvc2l0aXZlIGxvbmcgdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aW1lXG4gICAqIChpbiBtaWxsaXNlY29uZHMpIHRoZSBkZXZpY2UgaXMgYWxsb3dlZCB0byB0YWtlIGluIG9yZGVyIHRvIHJldHVybiBhXG4gICAqIHBvc2l0aW9uLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBJbmZpbml0eSwgbWVhbmluZyB0aGF0IGdldEN1cnJlbnRQb3NpdGlvbigpXG4gICAqIHdvbid0IHJldHVybiB1bnRpbCB0aGUgcG9zaXRpb24gaXMgYXZhaWxhYmxlLlxuICAgKi9cbiAgdGltZW91dD86IG51bWJlcjtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBhcHBsaWNhdGlvbiB3b3VsZCBsaWtlIHRvIHJlY2VpdmUgdGhlIGJlc3QgcG9zc2libGUgcmVzdWx0cy5cbiAgICogSWYgdHJ1ZSBhbmQgaWYgdGhlIGRldmljZSBpcyBhYmxlIHRvIHByb3ZpZGUgYSBtb3JlIGFjY3VyYXRlIHBvc2l0aW9uLCBpdFxuICAgKiB3aWxsIGRvIHNvLiBOb3RlIHRoYXQgdGhpcyBjYW4gcmVzdWx0IGluIHNsb3dlciByZXNwb25zZSB0aW1lcyBvciBpbmNyZWFzZWRcbiAgICogcG93ZXIgY29uc3VtcHRpb24gKHdpdGggYSBHUFMgY2hpcCBvbiBhIG1vYmlsZSBkZXZpY2UgZm9yIGV4YW1wbGUpLiBPbiB0aGVcbiAgICogb3RoZXIgaGFuZCwgaWYgZmFsc2UsIHRoZSBkZXZpY2UgY2FuIHRha2UgdGhlIGxpYmVydHkgdG8gc2F2ZSByZXNvdXJjZXMgYnlcbiAgICogcmVzcG9uZGluZyBtb3JlIHF1aWNrbHkgYW5kL29yIHVzaW5nIGxlc3MgcG93ZXIuIERlZmF1bHQ6IGZhbHNlLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGVuYWJsZUhpZ2hBY2N1cmFjeT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgR2VvbG9jYXRpb25cbiAqIEBwcmVtaWVyIGdlb2xvY2F0aW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBkZXZpY2UncyBsb2NhdGlvbiwgc3VjaCBhcyBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlLiBDb21tb24gc291cmNlcyBvZiBsb2NhdGlvbiBpbmZvcm1hdGlvbiBpbmNsdWRlIEdsb2JhbCBQb3NpdGlvbmluZyBTeXN0ZW0gKEdQUykgYW5kIGxvY2F0aW9uIGluZmVycmVkIGZyb20gbmV0d29yayBzaWduYWxzIHN1Y2ggYXMgSVAgYWRkcmVzcywgUkZJRCwgV2lGaSBhbmQgQmx1ZXRvb3RoIE1BQyBhZGRyZXNzZXMsIGFuZCBHU00vQ0RNQSBjZWxsIElEcy5cbiAqXG4gKiAgVGhpcyBBUEkgaXMgYmFzZWQgb24gdGhlIFczQyBHZW9sb2NhdGlvbiBBUEkgU3BlY2lmaWNhdGlvbiwgYW5kIG9ubHkgZXhlY3V0ZXMgb24gZGV2aWNlcyB0aGF0IGRvbid0IGFscmVhZHkgcHJvdmlkZSBhbiBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBGb3IgaU9TIHlvdSBoYXZlIHRvIGFkZCB0aGlzIGNvbmZpZ3VyYXRpb24gdG8geW91ciBjb25maWd1cmF0aW9uLnhtbCBmaWxlXG4gKiBgYGB4bWxcbiAqIDxlZGl0LWNvbmZpZyBmaWxlPVwiKi1JbmZvLnBsaXN0XCIgbW9kZT1cIm1lcmdlXCIgdGFyZ2V0PVwiTlNMb2NhdGlvbldoZW5JblVzZVVzYWdlRGVzY3JpcHRpb25cIj5cbiAqICAgIDxzdHJpbmc+V2UgdXNlIHlvdXIgbG9jYXRpb24gZm9yIGZ1bGwgZnVuY3Rpb25hbGl0eSBvZiBjZXJ0YWluIGFwcCBmZWF0dXJlcy48L3N0cmluZz5cbiAqIDwvZWRpdC1jb25maWc+XG4gKiBgYGBcbiAqXG4gKlxuICogQHVzYWdlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgR2VvbG9jYXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2dlb2xvY2F0aW9uL25neCc7XG4gKlxuICogLi4uXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBnZW9sb2NhdGlvbjogR2VvbG9jYXRpb24pIHt9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKS50aGVuKChyZXNwKSA9PiB7XG4gKiAgLy8gcmVzcC5jb29yZHMubGF0aXR1ZGVcbiAqICAvLyByZXNwLmNvb3Jkcy5sb25naXR1ZGVcbiAqIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICogICBjb25zb2xlLmxvZygnRXJyb3IgZ2V0dGluZyBsb2NhdGlvbicsIGVycm9yKTtcbiAqIH0pO1xuICpcbiAqIGxldCB3YXRjaCA9IHRoaXMuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbigpO1xuICogd2F0Y2guc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gKiAgLy8gZGF0YSBjYW4gYmUgYSBzZXQgb2YgY29vcmRpbmF0ZXMsIG9yIGFuIGVycm9yIChpZiBhbiBlcnJvciBvY2N1cnJlZCkuXG4gKiAgLy8gZGF0YS5jb29yZHMubGF0aXR1ZGVcbiAqICAvLyBkYXRhLmNvb3Jkcy5sb25naXR1ZGVcbiAqIH0pO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQ29vcmRpbmF0ZXNcbiAqIEdlb3Bvc2l0aW9uXG4gKiBQb3NpdGlvbkVycm9yXG4gKiBHZW9sb2NhdGlvbk9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHZW9sb2NhdGlvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdlb2xvY2F0aW9uJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmdlb2xvY2F0aW9uJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZ2VvbG9jYXRpb24nLFxuICBpbnN0YWxsOlxuICAgICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZ2VvbG9jYXRpb24gLS12YXJpYWJsZSBHRU9MT0NBVElPTl9VU0FHRV9ERVNDUklQVElPTj1cIlRvIGxvY2F0ZSB5b3VcIicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnR0VPTE9DQVRJT05fVVNBR0VfREVTQ1JJUFRJT04nXSxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHZW9sb2NhdGlvbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEdldCB0aGUgZGV2aWNlJ3MgY3VycmVudCBwb3NpdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtHZW9sb2NhdGlvbk9wdGlvbnN9IG9wdGlvbnMgIFRoZSBbZ2VvbG9jYXRpb24gb3B0aW9uc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Bvc2l0aW9uT3B0aW9ucykuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEdlb3Bvc2l0aW9uPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBbcG9zaXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbikgb2YgdGhlIGRldmljZSwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgZ2V0Q3VycmVudFBvc2l0aW9uKG9wdGlvbnM/OiBHZW9sb2NhdGlvbk9wdGlvbnMpOiBQcm9taXNlPEdlb3Bvc2l0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoIHRoZSBjdXJyZW50IGRldmljZSdzIHBvc2l0aW9uLiAgQ2xlYXIgdGhlIHdhdGNoIGJ5IHVuc3Vic2NyaWJpbmcgZnJvbVxuICAgKiBPYnNlcnZhYmxlIGNoYW5nZXMuXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKClcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigocCkgPT4gcC5jb29yZHMgIT09IHVuZGVmaW5lZCkgLy9GaWx0ZXIgT3V0IEVycm9yc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHBvc2l0aW9uID0+IHtcbiAgICogICBjb25zb2xlLmxvZyhwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlICsgJyAnICsgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlKTtcbiAgICogfSk7XG4gICAqXG4gICAqIC8vIFRvIHN0b3Agbm90aWZpY2F0aW9uc1xuICAgKiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7R2VvbG9jYXRpb25PcHRpb25zfSBvcHRpb25zICBUaGUgW2dlb2xvY2F0aW9uIG9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbk9wdGlvbnMpLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxHZW9wb3NpdGlvbiB8IFBvc2l0aW9uRXJyb3I+fSBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyB3aXRoIHRoZSBbcG9zaXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbikgb2YgdGhlIGRldmljZSwgb3IgZXJyb3JzLlxuICAgKi9cbiAgd2F0Y2hQb3NpdGlvbihvcHRpb25zPzogR2VvbG9jYXRpb25PcHRpb25zKTogT2JzZXJ2YWJsZTxHZW9wb3NpdGlvbiB8IFBvc2l0aW9uRXJyb3I+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8R2VvcG9zaXRpb24gfCBQb3NpdGlvbkVycm9yPigob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgY29uc3Qgd2F0Y2hJZCA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxuICAgICAgICBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuICgpID0+IG5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKHdhdGNoSWQpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-address/add-address.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-address/add-address.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <div class=\"title_inner d-flex\">\r\n                {{\"cancel\" | translate}} <span class=\"end\" (click)=\"save()\"> {{\"continue\" | translate}}</span>\r\n            </div>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n\r\n    <div class=\"search_box d-flex\">\r\n        <ion-icon class=\"zmdi zmdi-search ion-text-start\"></ion-icon>\r\n        <ion-searchbar class=\"ion-no-padding\" searchIcon=\"hide\" placeholder=\"{{'search_location' | translate}}\" [(ngModel)]=\"query\" (ionInput)=\"searchPlace()\">\r\n        </ion-searchbar>\r\n\r\n        <ion-icon class=\"zmdi zmdi-gps-dot ion-text-end\" (click)=\"detect()\"></ion-icon>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n    <div class=\"saved_address\" *ngIf=\"places && places.length\">\r\n        <div *ngFor=\"let place of places\" class=\"address_box d-flex\" (click)=\"selectPlace(place)\">\r\n            <!-- <img src=\"assets/imgs/ic_home.png\"> -->\r\n            <div class=\"text_box\">\r\n                <!-- <h3>Home</h3> -->\r\n                <p>{{place.description}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div #map id=\"map\" class=\"map\">\r\n        <!-- <ion-spinner></ion-spinner> -->\r\n    </div>\r\n    <div #pleaseConnect id=\"please-connect\">\r\n        <!-- <p>{{'loading' | translate}}</p> -->\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/add-address/add-address-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/add-address/add-address-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddAddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPageRoutingModule", function() { return AddAddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-address.page */ "./src/app/add-address/add-address.page.ts");




const routes = [
    {
        path: '',
        component: _add_address_page__WEBPACK_IMPORTED_MODULE_3__["AddAddressPage"]
    }
];
let AddAddressPageRoutingModule = class AddAddressPageRoutingModule {
};
AddAddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddAddressPageRoutingModule);



/***/ }),

/***/ "./src/app/add-address/add-address.module.ts":
/*!***************************************************!*\
  !*** ./src/app/add-address/add-address.module.ts ***!
  \***************************************************/
/*! exports provided: AddAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPageModule", function() { return AddAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_address_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-address-routing.module */ "./src/app/add-address/add-address-routing.module.ts");
/* harmony import */ var _add_address_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-address.page */ "./src/app/add-address/add-address.page.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/network/google-maps.service */ "./src/app/services/network/google-maps.service.ts");












let AddAddressPageModule = class AddAddressPageModule {
};
AddAddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _add_address_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddAddressPageRoutingModule"]
        ],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_9__["Diagnostic"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_10__["LocationAccuracy"], _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_11__["GoogleMapsService"]],
        declarations: [_add_address_page__WEBPACK_IMPORTED_MODULE_7__["AddAddressPage"]]
    })
], AddAddressPageModule);



/***/ }),

/***/ "./src/app/add-address/add-address.page.scss":
/*!***************************************************!*\
  !*** ./src/app/add-address/add-address.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-title .title_inner {\n  padding-left: 30px;\n}\nion-header ion-toolbar ion-title span {\n  color: var(--primary);\n  font-size: 1.2rem;\n}\nion-header .search_box {\n  width: calc(100% - 0px);\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  min-height: 50px;\n  z-index: 99;\n  background: var(--bg-color);\n  padding: 0 15px;\n}\nion-header .search_box ion-icon {\n  color: var(--text-light);\n  font-size: 1.4rem;\n  min-width: 35px;\n  height: 35px;\n  line-height: 35px;\n  z-index: 99;\n  position: relative;\n  top: 0px;\n  padding: 0 2px;\n}\nion-header .search_box ion-icon.zmdi-tune {\n  font-size: 1.3rem;\n  left: unset;\n  right: 0;\n  z-index: 99;\n}\nion-header .search_box ion-searchbar {\n  --background: var(--transparent) !important;\n  --color: var(--text-black);\n  font-weight: 500 !important;\n  --placeholder-opacity: 1;\n  --placeholder-color: var(--text-light2) !important;\n  --placeholder-font-weight: 400 !important;\n  --box-shadow: none !important;\n  padding: 0 !important;\n}\n.map {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.map img {\n  width: 100%;\n  height: 100%;\n}\n.map ion-icon {\n  position: absolute;\n  z-index: 99;\n  color: var(--secondary);\n  font-size: 2.5rem;\n  width: 24px;\n  overflow: hidden;\n}\n.saved_address {\n  background: var(--bg-color);\n  position: relative;\n  z-index: 999;\n  padding: 13px 20px;\n}\n.saved_address h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 400;\n  letter-spacing: 0;\n  font-size: 0.8rem;\n  padding-bottom: 11px;\n  opacity: 0.8;\n}\n.saved_address .address_box {\n  align-items: flex-start !important;\n  padding: 10px 0px;\n  overflow: hidden;\n}\n.saved_address .address_box img {\n  width: 25px;\n  min-width: 25px;\n  display: block;\n  margin-right: 22px;\n}\n.saved_address .address_box h3 {\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin: 0;\n  font-size: 0.85rem;\n  font-weight: 500;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-bottom: 8px;\n}\n.saved_address .address_box p {\n  color: var(--text-light);\n  opacity: 0.8;\n  margin: 0;\n  font-weight: 400;\n  font-size: 0.8rem;\n  letter-spacing: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWFkZHJlc3MvRjpcXGZpdmVyXFxCZXJuYXJkXFxEb2N0b3IgV29ybGRcXERvY3RvV29ybGRfQXBwQ29kZSAoVmlkZW8gQ2FsbCktMjAyMTA4MDlUMTAxNDA3Wi0wMDFcXERvY3RvV29ybGRfQXBwQ29kZSAoVmlkZW8gQ2FsbClcXGRvY3Rvd29ybGRfY3VzdG9tZXJcXGRvY3Rvd29ybGRfY3VzdG9tZXIvc3JjXFxhcHBcXGFkZC1hZGRyZXNzXFxhZGQtYWRkcmVzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZC1hZGRyZXNzL2FkZC1hZGRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGtCQUFBO0FDRFo7QURJUTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUNGWjtBRE1JO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQ0pSO0FETVE7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FDSlo7QURNWTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDSmhCO0FEUVE7RUFDSSwyQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGtEQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FDTlo7QURXQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDUko7QURVSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDUlI7QURXSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNUUjtBRGFBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1ZKO0FEWUk7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNWUjtBRGFJO0VBQ0ksa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDWFI7QURhUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDWFo7QURjUTtFQUNJLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsbUJBQUE7QUNaWjtBRGVRO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2JaIiwiZmlsZSI6InNyYy9hcHAvYWRkLWFkZHJlc3MvYWRkLWFkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG4gICAgICAgIC50aXRsZV9pbm5lciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoX2JveCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMnB4O1xyXG5cclxuICAgICAgICAgICAgJi56bWRpLXR1bmUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiB1bnNldDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zYXZlZF9hZGRyZXNzIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHBhZGRpbmc6IDEzcHggMjBweDtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMXB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkcmVzc19ib3gge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGVfaW5uZXIge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSBzcGFuIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbmlvbi1oZWFkZXIgLnNlYXJjaF9ib3gge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgei1pbmRleDogOTk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuaW9uLWhlYWRlciAuc2VhcmNoX2JveCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG1pbi13aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgei1pbmRleDogOTk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmc6IDAgMnB4O1xufVxuaW9uLWhlYWRlciAuc2VhcmNoX2JveCBpb24taWNvbi56bWRpLXR1bmUge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbGVmdDogdW5zZXQ7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTtcbn1cbmlvbi1oZWFkZXIgLnNlYXJjaF9ib3ggaW9uLXNlYXJjaGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tdGV4dC1saWdodDIpICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ubWFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFwIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFwIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICB3aWR0aDogMjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNhdmVkX2FkZHJlc3Mge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk5O1xuICBwYWRkaW5nOiAxM3B4IDIwcHg7XG59XG4uc2F2ZWRfYWRkcmVzcyBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMXB4O1xuICBvcGFjaXR5OiAwLjg7XG59XG4uc2F2ZWRfYWRkcmVzcyAuYWRkcmVzc19ib3gge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zYXZlZF9hZGRyZXNzIC5hZGRyZXNzX2JveCBpbWcge1xuICB3aWR0aDogMjVweDtcbiAgbWluLXdpZHRoOiAyNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xufVxuLnNhdmVkX2FkZHJlc3MgLmFkZHJlc3NfYm94IGgzIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4uc2F2ZWRfYWRkcmVzcyAuYWRkcmVzc19ib3ggcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgb3BhY2l0eTogMC44O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */");

/***/ }),

/***/ "./src/app/add-address/add-address.page.ts":
/*!*************************************************!*\
  !*** ./src/app/add-address/add-address.page.ts ***!
  \*************************************************/
/*! exports provided: AddAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPage", function() { return AddAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _title_title_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../title/title.page */ "./src/app/title/title.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_models_address_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/address.models */ "./src/models/address.models.ts");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/network/google-maps.service */ "./src/app/services/network/google-maps.service.ts");
/* harmony import */ var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/events/my-events.service */ "./src/app/services/events/my-events.service.ts");















let AddAddressPage = class AddAddressPage {
    constructor(geolocation, zone, translate, modalController, router, diagnostic, alertCtrl, navCtrl, apiService, paltform, maps, uiElementService, locationAccuracy, myEventService) {
        this.geolocation = geolocation;
        this.zone = zone;
        this.translate = translate;
        this.modalController = modalController;
        this.router = router;
        this.diagnostic = diagnostic;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.paltform = paltform;
        this.maps = maps;
        this.uiElementService = uiElementService;
        this.locationAccuracy = locationAccuracy;
        this.myEventService = myEventService;
        this.detecting = false;
        this.subscriptions = new Array();
        this.query = "";
        this.places = [];
    }
    ngOnInit() {
        if (this.router.getCurrentNavigation().extras.state) {
            this.location = this.router.getCurrentNavigation().extras.state.address;
            this.pick_location = this.router.getCurrentNavigation().extras.state.pick_location;
        }
    }
    ngOnDestroy() {
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    ionViewDidEnter() {
        if (!this.initialized) {
            let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement, this.location).then(() => {
                this.autocompleteService = new google.maps.places.AutocompleteService();
                this.placesService = new google.maps.places.PlacesService(this.maps.map);
                this.maps.map.addListener('click', (event) => {
                    if (event && event.latLng) {
                        let pos = new google.maps.LatLng(event.latLng.lat(), event.latLng.lng());
                        this.geocode(pos);
                    }
                });
                this.initialized = true;
                if (this.location) {
                    let pos = new google.maps.LatLng(Number(this.location.latitude), Number(this.location.longitude));
                    this.plotMarker(pos);
                }
                else {
                    this.detect();
                }
            }).catch(err => { console.log("maps.init", err); this.close(); });
            mapLoaded.catch(err => { console.log("mapLoaded", err); this.close(); });
        }
    }
    searchPlace() {
        if (this.autocompleteService && this.query.length > 0) {
            let config = { input: this.query };
            this.autocompleteService.getPlacePredictions(config, (predictions, status) => {
                if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
                    this.places = [];
                    predictions.forEach((prediction) => this.places.push(prediction));
                }
            });
        }
        else {
            this.places = [];
        }
    }
    selectPlace(place) {
        this.query = place.description;
        this.places = [];
        let myLocation = new src_models_address_models__WEBPACK_IMPORTED_MODULE_4__["MyAddress"]();
        myLocation.id = -1;
        if (this.location) {
            myLocation.id = this.location.id;
            myLocation.title = this.location.title;
        }
        myLocation.formatted_address = place.name;
        this.placesService.getDetails({ placeId: place.place_id }, (details) => {
            this.zone.run(() => {
                myLocation.formatted_address = (details.formatted_address && details.formatted_address.length) ? details.formatted_address : details.name;
                myLocation.latitude = String(details.geometry.location.lat());
                myLocation.longitude = String(details.geometry.location.lng());
                let lc = { lat: details.geometry.location.lat(), lng: details.geometry.location.lng() };
                this.maps.map.setCenter(lc);
                this.location = myLocation;
                let pos = new google.maps.LatLng(Number(lc.lat), Number(lc.lng));
                this.plotMarker(pos);
            });
        });
    }
    save() {
        if (this.location != null) {
            if (this.pick_location) {
                this.selectAddress(this.location);
                this.myEventService.setAddressData(this.location);
            }
            else if (src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].getLoggedInUser() != null) {
                this.modalController.create({ component: _title_title_page__WEBPACK_IMPORTED_MODULE_2__["TitlePage"], componentProps: { address: this.location } }).then((modalElement) => {
                    modalElement.onDidDismiss().then(data => {
                        console.log(data);
                        if (data && data.data) {
                            this.location = data.data;
                            if (this.location.id == -1) {
                                this.createAddress();
                            }
                            else {
                                this.updateAddress();
                            }
                        }
                    });
                    modalElement.present();
                });
            }
        }
        else {
            this.translate.get("select_search_loc").subscribe(value => this.uiElementService.presentToast(value));
        }
    }
    selectAddress(address) {
        src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__["Helper"].setAddressSelected(address);
        this.close();
    }
    close() {
        this.navCtrl.pop();
    }
    detect() {
        this.diagnostic.isLocationEnabled().then((isAvailable) => {
            if (!isAvailable)
                if (this.paltform.is("cordova"))
                    this.alertLocationServices();
        }).catch((e) => {
            console.error(e);
            if (this.paltform.is("cordova"))
                this.alertLocationServices();
        });
        if (!this.detecting) {
            this.detecting = true;
            this.geolocation.getCurrentPosition().then((position) => {
                let pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                this.geocode(pos);
                this.detecting = false;
            }).catch((err) => {
                console.log("getCurrentPosition", err);
                this.translate.get("curr_pos_fail").subscribe(value => this.uiElementService.presentToast(value));
                this.detecting = false;
            });
        }
    }
    geocode(pos) {
        let geocoder = new google.maps.Geocoder();
        let request = { location: pos };
        geocoder.geocode(request, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
                let myLocation = new src_models_address_models__WEBPACK_IMPORTED_MODULE_4__["MyAddress"]();
                myLocation.id = -1;
                if (this.location) {
                    myLocation.id = this.location.id;
                    myLocation.title = this.location.title;
                }
                myLocation.formatted_address = results[0].formatted_address;
                myLocation.latitude = String(pos.lat());
                myLocation.longitude = String(pos.lng());
                this.location = myLocation;
                this.plotMarker(pos);
                this.uiElementService.presentToast(this.location.formatted_address);
            }
        });
    }
    plotMarker(pos) {
        if (!this.marker) {
            // this.marker = createHTMLMapMarker({
            //   latlng: pos,
            //   map: this.maps.map,
            //   html: '<div id="doctor_map"><img src="assets/images/empty_dp.png"></div>'
            // });
            this.marker = new google.maps.Marker({
                position: pos,
                map: this.maps.map
                //, icon: 'assets/images/marker_map_me.png'
            });
            this.marker.setClickable(true);
            this.marker.addListener('click', (event) => {
                console.log("markerevent", event);
                this.uiElementService.presentToast(this.location.formatted_address);
            });
        }
        else {
            this.marker.setPosition(pos);
        }
        this.maps.map.panTo(pos);
    }
    alertLocationServices() {
        this.translate.get(['location_services_title', 'location_services_message', 'okay']).subscribe(text => {
            this.alertCtrl.create({
                header: text['location_services_title'],
                message: text['location_services_message'],
                buttons: [{
                        text: text['okay'],
                        role: 'cancel',
                        handler: () => {
                            this.locationAccuracy.canRequest().then((canRequest) => {
                                if (canRequest) {
                                    // the accuracy option will be ignored by iOS
                                    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(res => console.log('Request successful', res), error => console.log('Error requesting location permissions', error));
                                }
                            });
                        }
                    }]
            }).then(alert => alert.present());
        });
    }
    createAddress() {
        this.translate.get(["address_creating", "something_wrong"]).subscribe(values => {
            this.uiElementService.presentLoading(values["address_creating"]);
            this.subscriptions.push(this.apiService.addressAdd(this.location).subscribe(res => {
                this.uiElementService.dismissLoading();
                this.selectAddress(res);
            }, err => {
                console.log("addressAdd", err);
                this.uiElementService.dismissLoading();
                this.uiElementService.presentToast(values["something_wrong"]);
            }));
        });
    }
    updateAddress() {
        this.translate.get(["address_updating", "something_wrong"]).subscribe(values => {
            this.uiElementService.presentLoading(values["address_updating"]);
            this.subscriptions.push(this.apiService.addressUpdate(this.location).subscribe(res => {
                this.uiElementService.dismissLoading();
                this.selectAddress(res);
            }, err => {
                console.log("addressUpdate", err);
                this.uiElementService.dismissLoading();
                this.uiElementService.presentToast(values["something_wrong"]);
            }));
        });
    }
};
AddAddressPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_11__["Diagnostic"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_13__["GoogleMapsService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_9__["UiElementsService"] },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_12__["LocationAccuracy"] },
    { type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_14__["MyEventsService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("pleaseConnect", { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AddAddressPage.prototype, "pleaseConnect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map", { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AddAddressPage.prototype, "mapElement", void 0);
AddAddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-address',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-address.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-address/add-address.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-address.page.scss */ "./src/app/add-address/add-address.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_11__["Diagnostic"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _services_network_google_maps_service__WEBPACK_IMPORTED_MODULE_13__["GoogleMapsService"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_9__["UiElementsService"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_12__["LocationAccuracy"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_14__["MyEventsService"]])
], AddAddressPage);



/***/ })

}]);
//# sourceMappingURL=add-address-add-address-module-es2015.js.map