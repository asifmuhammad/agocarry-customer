var _excluded = ["OverlayView"];

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js": function node_modulesIonicNativeCallNumber__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallNumber", function () {
      return CallNumber;
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

    var CallNumber = function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CallNumber, _super);

      function CallNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      CallNumber.prototype.callNumber = function (numberToCall, bypassAppChooser) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "callNumber", {
          "callbackOrder": "reverse"
        }, arguments);
      };

      CallNumber.prototype.isCallSupported = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isCallSupported", {}, arguments);
      };

      CallNumber.pluginName = "CallNumber";
      CallNumber.plugin = "call-number";
      CallNumber.pluginRef = "plugins.CallNumber";
      CallNumber.repo = "https://github.com/Rohfosho/CordovaCallNumberPlugin";
      CallNumber.platforms = ["Android", "iOS"];

      CallNumber.ɵfac = function CallNumber_Factory(t) {
        return ɵCallNumber_BaseFactory(t || CallNumber);
      };

      CallNumber.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CallNumber,
        factory: function factory(t) {
          return CallNumber.ɵfac(t);
        }
      });

      var ɵCallNumber_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CallNumber);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CallNumber, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], null, null);
      })();

      return CallNumber;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvY2FsbC1udW1iZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBSVUsSUEwQnNCLDhCQUFpQjtBQUFDO0FBRTlCO0FBQytDO0FBQ2pFLElBTUEsK0JBQVUsYUFBQyxZQUFvQixFQUFFLGdCQUF5QjtBQU12RCxJQUdILG9DQUFlO0FBSXNCO0FBQTBDO0FBQXVDO0FBQWlEO0FBQTZFOzhDQXhCclAsVUFBVTs7Ozs7MEJBQ0w7QUFBQyxxQkFoQ1A7QUFBRSxFQWdDOEIsaUJBQWlCO0FBQ2hELFNBRFksVUFBVTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQ2FsbCBOdW1iZXJcbiAqIEBkZXNjcmlwdGlvblxuICogQ2FsbCBhIG51bWJlciBkaXJlY3RseSBmcm9tIHlvdXIgQ29yZG92YS9Jb25pYyBhcHBsaWNhdGlvbi5cbiAqICoqTk9URSoqOiBUaGUgaU9TIFNpbXVsYXRvciAoYW5kIG1heWJlIEFuZHJvaWQgU2ltdWxhdG9ycykgZG8gbm90IHByb3ZpZGUgYWNjZXNzIHRvIHRoZSBwaG9uZSBzdWJzeXN0ZW0uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYWxsTnVtYmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYWxsLW51bWJlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FsbE51bWJlcjogQ2FsbE51bWJlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuY2FsbE51bWJlci5jYWxsTnVtYmVyKFwiMTgwMDEwMTAxMDFcIiwgdHJ1ZSlcbiAqICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKCdMYXVuY2hlZCBkaWFsZXIhJywgcmVzKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3IgbGF1bmNoaW5nIGRpYWxlcicsIGVycikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhbGxOdW1iZXInLFxuICBwbHVnaW46ICdjYWxsLW51bWJlcicsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuQ2FsbE51bWJlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vUm9oZm9zaG8vQ29yZG92YUNhbGxOdW1iZXJQbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsbE51bWJlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENhbGxzIGEgcGhvbmUgbnVtYmVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBudW1iZXJUb0NhbGwgVGhlIHBob25lIG51bWJlciB0byBjYWxsIGFzIGEgc3RyaW5nXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYnlwYXNzQXBwQ2hvb3NlciBTZXQgdG8gdHJ1ZSB0byBieXBhc3MgdGhlIGFwcCBjaG9vc2VyIGFuZCBnbyBkaXJlY3RseSB0byBkaWFsZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY2FsbE51bWJlcihudW1iZXJUb0NhbGw6IHN0cmluZywgYnlwYXNzQXBwQ2hvb3NlcjogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGNhbGwgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0NhbGxTdXBwb3J0ZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

    /***/

  },

  /***/
  "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js": function node_modulesIonicNativePhotoViewer__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoViewer", function () {
      return PhotoViewer;
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

    var PhotoViewer = function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PhotoViewer, _super);

      function PhotoViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      PhotoViewer.prototype.show = function (url, title, options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "show", {
          "sync": true
        }, arguments);
      };

      PhotoViewer.pluginName = "PhotoViewer";
      PhotoViewer.plugin = "com-sarriaroman-photoviewer";
      PhotoViewer.pluginRef = "PhotoViewer";
      PhotoViewer.repo = "https://github.com/sarriaroman/photoviewer";
      PhotoViewer.platforms = ["Android", "iOS"];

      PhotoViewer.ɵfac = function PhotoViewer_Factory(t) {
        return ɵPhotoViewer_BaseFactory(t || PhotoViewer);
      };

      PhotoViewer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: PhotoViewer,
        factory: function factory(t) {
          return PhotoViewer.ɵfac(t);
        }
      });

      var ɵPhotoViewer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](PhotoViewer);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PhotoViewer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], null, null);
      })();

      return PhotoViewer;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvcGhvdG8tdmlld2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQUN4RTtBQUdRLElBb0R5QiwrQkFBaUI7QUFBQztBQUU5QjtBQUVSO0FBQU0sSUFJakIsMEJBQUksYUFBQyxHQUFXLEVBQUUsS0FBYyxFQUFFLE9BQTRCO0FBRVg7QUFBNEM7QUFBd0Q7QUFBMkM7QUFBcUU7K0NBWHhRLFVBQVU7Ozs7OzBCQUNMO0FBQUMsc0JBekRQO0FBQUUsRUF5RCtCLGlCQUFpQjtBQUNqRCxTQURZLFdBQVc7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBob3RvVmlld2VyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGUgc2hhcmUgYnV0dG9uIChBbmRyb2lkIG9ubHkpLiBEZWZhdWx0OiB0cnVlXG4gICAqL1xuICBzaGFyZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBZGQgSFRUUCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0LiAgVXNlZnVsIGZvciBhdXRoZW50aWNhdGVkIHBhZ2VzLlxuICAgKiBUaGUgdmFsdWUgaXMgYSBzdHJpbmcgaW4gYSBKU09OIGZvcm1hdC4gIERlZmF1bHQ6ICcnXG4gICAqL1xuICBoZWFkZXJzPzogc3RyaW5nO1xuICAvKipcbiAgICogT3B0aW9uIGZvciBjbG9zZSBidXR0b24gdmlzaWJpbGl0eSB3aGVuIHNoYXJlIGZhbHNlIFtPTkxZIEZPUiBpT1NdXG4gICAqL1xuICBjbG9zZUJ1dHRvbj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJZiB5b3UgbmVlZCB0byBjb3B5IGltYWdlIHRvIHJlZmVyZW5jZSBiZWZvcmUgc2hvdyB0aGVuIHNldCBpdCB0cnVlIFtPTkxZIEZPUiBpT1NdXG4gICAqL1xuICBjb3B5VG9SZWZlcmVuY2U/OiBib29sZWFuO1xuICAvKipcbiAgICogRW5hYmxlIG9yIERpc2FibGUgUGljYXNzbyBPcHRpb25zICggT25seSBBbmRyb2lkICk6IGZpdCwgY2VudGVySW5zaWRlLCBjZW50ZXJDcm9wLlxuICAgKi9cbiAgcGljY2Fzb09wdGlvbnM/OiB7XG4gICAgZml0PzogYm9vbGVhbjtcbiAgICBjZW50ZXJJbnNpZGU/OiBib29sZWFuO1xuICAgIGNlbnRlckNyb3A/OiBib29sZWFuO1xuICB9O1xufVxuXG4vKipcbiAqIEBuYW1lIFBob3RvIFZpZXdlclxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGNhbiBkaXNwbGF5IHlvdXIgaW1hZ2UgaW4gZnVsbCBzY3JlZW4gd2l0aCB0aGUgYWJpbGl0eSB0byBwYW4sIHpvb20sIGFuZCBzaGFyZSB0aGUgaW1hZ2UuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFBob3RvVmlld2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9waG90by12aWV3ZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBob3RvVmlld2VyOiBQaG90b1ZpZXdlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5waG90b1ZpZXdlci5zaG93KCdodHRwczovL215c2l0ZS5jb20vcGF0aC90by9pbWFnZS5qcGcnKTtcbiAqXG4gKiB0aGlzLnBob3RvVmlld2VyLnNob3coJ2h0dHBzOi8vbXlzaXRlLmNvbS9wYXRoL3RvL2ltYWdlLmpwZycsICdNeSBpbWFnZSB0aXRsZScsIHtzaGFyZTogZmFsc2V9KTtcbiAqXG4gKiB0aGlzLnBob3RvVmlld2VyLnNob3coJ2h0dHBzOi8vbXlzZWN1cmVzaXRlLmNvbS9wYXRoL3RvL2ltYWdlLmpwZycsICdNeSBpbWFnZSB0aXRsZScsIHtzaGFyZTogZmFsc2UsIGhlYWRlcnM6ICd7dXNlcm5hbWU6Zm9vLHBhc3N3b3JkOmJhcn0nfSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdQaG90b1ZpZXdlcicsXG4gIHBsdWdpbjogJ2NvbS1zYXJyaWFyb21hbi1waG90b3ZpZXdlcicsXG4gIHBsdWdpblJlZjogJ1Bob3RvVmlld2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXJyaWFyb21hbi9waG90b3ZpZXdlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQaG90b1ZpZXdlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNob3dzIGFuIGltYWdlIGluIGZ1bGwgc2NyZWVuXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVVJMIG9yIHBhdGggdG8gaW1hZ2VcbiAgICogQHBhcmFtIHRpdGxlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBvcHRpb25zIHtQaG90b1ZpZXdlck9wdGlvbnN9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvdyh1cmw6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG9wdGlvbnM/OiBQaG90b1ZpZXdlck9wdGlvbnMpOiB2b2lkIHt9XG59XG4iXX0=

    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js": function node_modulesIonicCoreDistEsmButtonActiveD4bd4f74Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createButtonActiveGesture;
    });
    /* harmony import */


    var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a8b7a1c.js */
    "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
    /* harmony import */


    var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./haptic-27b3f981.js */
    "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
    /* harmony import */


    var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./index-34cb2743.js */
    "./node_modules/@ionic/core/dist/esm/index-34cb2743.js");

    var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
      var currentTouchedButton;
      var initialTouchedButton;

      var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
          return;
        }

        var target = document.elementFromPoint(x, y);

        if (!target || !isButton(target)) {
          clearActiveButton();
          return;
        }

        if (target !== currentTouchedButton) {
          clearActiveButton();
          setActiveButton(target, hapticFeedbackFn);
        }
      };

      var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
        currentTouchedButton = button;

        if (!initialTouchedButton) {
          initialTouchedButton = currentTouchedButton;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.add('ion-activated');
        });
        hapticFeedbackFn();
      };

      var clearActiveButton = function clearActiveButton() {
        var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!currentTouchedButton) {
          return;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.remove('ion-activated');
        });
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */

        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
          currentTouchedButton.click();
        }

        currentTouchedButton = undefined;
      };

      return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function onStart(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
        },
        onMove: function onMove(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
        },
        onEnd: function onEnd() {
          clearActiveButton(true);
          Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
          initialTouchedButton = undefined;
        }
      });
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js": function node_modulesIonicCoreDistEsmFrameworkDelegate4392cd63Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });
    /* harmony import */


    var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./helpers-dd7e4b7b.js */
    "./node_modules/@ionic/core/dist/esm/helpers-dd7e4b7b.js");

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);
                _context.next = 10;
                return new Promise(function (resolve) {
                  return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                });

              case 10:
                return _context.abrupt("return", el);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js": function node_modulesIonicCoreDistEsmHaptic27b3f981Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelectionEnd;
    });

    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionEnd();
        } else {
          engine.gestureSelectionEnd();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */

    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */


    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js": function node_modulesIonicCoreDistEsmSpinnerConfigsCd7845afJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js": function node_modulesIonicCoreDistEsmThemeFf3fc52fJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color, cssClassMap) {
      return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction, animation));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8, _x9) {
        return _ref2.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/firebase/app/dist/index.cjs.js": function node_modulesFirebaseAppDistIndexCjsJs(module, exports, __webpack_require__) {
    "use strict";

    var firebase = __webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js");

    function _interopDefaultLegacy(e) {
      return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
      };
    }

    var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

    var name = "firebase";
    var version = "7.24.0";
    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    firebase__default['default'].registerVersion(name, version, 'app');
    module.exports = firebase__default['default']; //# sourceMappingURL=index.cjs.js.map

    /***/
  },

  /***/
  "./src/app/services/network/connectivity.service.ts": function srcAppServicesNetworkConnectivityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectivityService", function () {
      return ConnectivityService;
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


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ConnectivityService = /*#__PURE__*/function () {
      function ConnectivityService(platform, network) {
        _classCallCheck(this, ConnectivityService);

        this.platform = platform;
        this.network = network;
      }

      _createClass(ConnectivityService, [{
        key: "isOnline",
        value: function isOnline() {
          if (this.onDevice && this.network.type) {
            return this.network.type != 'none';
          } else {
            return navigator.onLine;
          }
        }
      }, {
        key: "isOffline",
        value: function isOffline() {
          if (this.onDevice && this.network.type) {
            return this.network.type == 'none';
          } else {
            return !navigator.onLine;
          }
        }
      }, {
        key: "watchOnline",
        value: function watchOnline() {
          return this.network.onConnect();
        }
      }, {
        key: "watchOffline",
        value: function watchOffline() {
          return this.network.onDisconnect();
        }
      }]);

      return ConnectivityService;
    }();

    ConnectivityService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"]
      }];
    };

    ConnectivityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"]])], ConnectivityService);
    /***/
  },

  /***/
  "./src/app/services/network/google-maps.service.ts": function srcAppServicesNetworkGoogleMapsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapsService", function () {
      return GoogleMapsService;
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


    var src_app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var _connectivity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./connectivity.service */
    "./src/app/services/network/connectivity.service.ts"); /// <reference types="@types/googlemaps" />


    var GoogleMapsService = /*#__PURE__*/function () {
      function GoogleMapsService(config, connectivityService) {
        _classCallCheck(this, GoogleMapsService);

        this.config = config;
        this.connectivityService = connectivityService;
        this.mapInitialised = false;
      }

      _createClass(GoogleMapsService, [{
        key: "init",
        value: function init(mapElement, pleaseConnect, myCenter) {
          this.mapElement = mapElement;
          this.pleaseConnect = pleaseConnect;
          this.myCenter = myCenter;
          return this.loadGoogleMaps();
        }
      }, {
        key: "loadGoogleMaps",
        value: function loadGoogleMaps() {
          var _this = this;

          return new Promise(function (resolve) {
            if (typeof google == "undefined" || typeof google.maps == "undefined") {
              console.log("Google maps JavaScript needs to be loaded.");

              _this.disableMap();

              if (_this.connectivityService.isOnline()) {
                window['mapInit'] = function () {
                  _this.initMap().then(function () {
                    resolve(true);
                  });

                  _this.enableMap();
                };

                var script = document.createElement("script");
                script.id = "googleMaps";

                if (_this.config.googleApiKey) {
                  script.src = 'http://maps.google.com/maps/api/js?key=' + _this.config.googleApiKey + '&callback=mapInit&libraries=places';
                } else {
                  script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
                }

                document.body.appendChild(script);
              }
            } else {
              if (_this.connectivityService.isOnline()) {
                _this.initMap();

                _this.enableMap();
              } else {
                _this.disableMap();
              }

              resolve(true);
            }

            _this.addConnectivityListeners();
          });
        }
      }, {
        key: "initMap",
        value: function initMap() {
          var _this2 = this;

          this.mapInitialised = true;
          return new Promise(function (resolve) {
            var styles = [{
              "elementType": "labels.icon",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "administrative.land_parcel",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "poi",
              stylers: [{
                visibility: "off"
              }] // "elementType": "labels.text.fill",
              // "stylers": [
              //   {
              //     "color": "#757575"
              //   }
              // ]

            }, {
              "featureType": "poi.park",
              stylers: [{
                visibility: "off"
              }] // "elementType": "geometry",
              // "stylers": [
              //   {
              //     "color": "#181818"
              //   }
              // ]

            }, {
              "featureType": "poi.park",
              stylers: [{
                visibility: "off"
              }] // "elementType": "labels.text.fill",
              // "stylers": [
              //   {
              //     "color": "#616161"
              //   }
              // ]

            }, {
              "featureType": "poi.park",
              stylers: [{
                visibility: "off"
              }] // "elementType": "labels.text.stroke",
              // "stylers": [
              //   {
              //     "color": "#1b1b1b"
              //   }
              // ]

            }];
            var center = new google.maps.LatLng(_this2.myCenter ? Number(_this2.myCenter.latitude) : 39.9334, _this2.myCenter ? Number(_this2.myCenter.longitude) : 32.8597);
            var mapOptions = {
              center: center,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              styles: styles,
              disableDefaultUI: true //,minZoom: 3, maxZoom: 15

            };
            _this2.map = new google.maps.Map(_this2.mapElement, mapOptions);
            resolve(true);
          });
        }
      }, {
        key: "disableMap",
        value: function disableMap() {
          if (this.pleaseConnect) {
            if (this.pleaseConnect != null) this.pleaseConnect.style.display = "block";
          }
        }
      }, {
        key: "enableMap",
        value: function enableMap() {
          if (this.pleaseConnect) {
            if (this.pleaseConnect != null) this.pleaseConnect.style.display = "none";
          }
        }
      }, {
        key: "addConnectivityListeners",
        value: function addConnectivityListeners() {
          var _this3 = this;

          this.connectivityService.watchOnline().subscribe(function () {
            setTimeout(function () {
              if (typeof google == "undefined" || typeof google.maps == "undefined") {
                _this3.loadGoogleMaps();
              } else {
                if (!_this3.mapInitialised) {
                  _this3.initMap();
                }

                _this3.enableMap();
              }
            }, 2000);
          });
          this.connectivityService.watchOffline().subscribe(function () {
            _this3.disableMap();
          });
        }
      }]);

      return GoogleMapsService;
    }();

    GoogleMapsService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [src_app_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"]]
        }]
      }, {
        type: _connectivity_service__WEBPACK_IMPORTED_MODULE_3__["ConnectivityService"]
      }];
    };

    GoogleMapsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: null
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _connectivity_service__WEBPACK_IMPORTED_MODULE_3__["ConnectivityService"]])], GoogleMapsService);
    /***/
  },

  /***/
  "./src/app/services/shoup-hour-services/common/ecommerce.service.ts": function srcAppServicesShoupHourServicesCommonEcommerceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartItem", function () {
      return CartItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExtraCharge", function () {
      return ExtraCharge;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cart", function () {
      return Cart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ECommerceService", function () {
      return ECommerceService;
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


    var src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/models/models-shop-hour/helper.models */
    "./src/models/models-shop-hour/helper.models.ts");
    /* harmony import */


    var src_models_models_shop_hour_order_request_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/models/models-shop-hour/order-request.models */
    "./src/models/models-shop-hour/order-request.models.ts");

    var CartItem = /*#__PURE__*/function () {
      function CartItem() {
        _classCallCheck(this, CartItem);
      }

      _createClass(CartItem, [{
        key: "setQuantity",
        value: function setQuantity(newQuantity) {
          this.quantity = newQuantity;
          this.total = this.price * this.quantity;
        }
      }, {
        key: "getTotal",
        value: function getTotal(fixFloatingPoint) {
          return fixFloatingPoint ? Number(this.total.toFixed(2)) : this.total;
        }
      }], [{
        key: "fromSaved",
        value: function fromSaved(savedCartItem) {
          var toReturn = new CartItem();
          toReturn.id = savedCartItem.id;
          toReturn.title = savedCartItem.title;
          toReturn.subtitle = savedCartItem.subtitle;
          toReturn.image = savedCartItem.image;
          toReturn.price = savedCartItem.price;
          toReturn.priceToShow = savedCartItem.priceToShow;
          toReturn.quantity = savedCartItem.quantity;
          toReturn.total = savedCartItem.total;
          toReturn.product = savedCartItem.product;
          return toReturn;
        }
      }]);

      return CartItem;
    }();

    var ExtraCharge = function ExtraCharge() {
      _classCallCheck(this, ExtraCharge);
    };

    var Cart = /*#__PURE__*/function () {
      function Cart() {
        _classCallCheck(this, Cart);
      }

      _createClass(Cart, [{
        key: "removeExtraCharge",
        value: function removeExtraCharge(extraChargeId) {
          var currIndex = -1;

          for (var i = 0; i < this.extraCharges.length; i++) {
            if (this.extraCharges[i].id == extraChargeId) {
              currIndex = i;
              break;
            }
          }

          if (currIndex != -1) this.extraCharges.splice(currIndex, 1);
        }
      }, {
        key: "addExtraCharge",
        value: function addExtraCharge(extraCharge) {
          this.extraCharges.push(extraCharge);
        }
      }, {
        key: "getTotalCartItems",
        value: function getTotalCartItems(fixFloatingPoint) {
          var toReturn = 0;

          var _iterator = _createForOfIteratorHelper(this.cartItems),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var ci = _step.value;
              toReturn += ci.total;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return fixFloatingPoint ? Number(toReturn.toFixed(2)) : toReturn;
        }
      }, {
        key: "getTotalCart",
        value: function getTotalCart(fixFloatingPoint) {
          var subTotal = this.getTotalCartItems(false);
          var tax_in_percent = 0;

          var _iterator2 = _createForOfIteratorHelper(this.extraCharges),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var ec = _step2.value;

              if (ec.id == "tax_in_percent") {
                tax_in_percent = ec.isPercent ? subTotal * ec.price / 100 : ec.price;
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          var delivery_fee = 0;

          var _iterator3 = _createForOfIteratorHelper(this.extraCharges),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _ec = _step3.value;

              if (_ec.id == "delivery_fee") {
                delivery_fee = _ec.price;
                break;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          var coupon = 0;

          var _iterator4 = _createForOfIteratorHelper(this.extraCharges),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _ec2 = _step4.value;

              if (_ec2.id == "coupon") {
                coupon = _ec2.isPercent ? subTotal * _ec2.price / 100 : _ec2.price;
                break;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          var toReturn = subTotal + tax_in_percent + delivery_fee - coupon;
          return fixFloatingPoint ? Number(toReturn.toFixed(2)) : toReturn;
        }
      }], [{
        key: "restore",
        value: function restore() {
          var toReturn = new Cart();
          toReturn.cartItems = new Array();
          toReturn.extraCharges = new Array();
          var savedCart = Cart.getSavedCart();

          if (savedCart) {
            if (savedCart.extraCharges && savedCart.extraCharges.length) toReturn.extraCharges = savedCart.extraCharges;

            if (savedCart.cartItems && savedCart.cartItems.length) {
              var _iterator5 = _createForOfIteratorHelper(savedCart.cartItems),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var sCi = _step5.value;
                  toReturn.cartItems.push(CartItem.fromSaved(sCi));
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          }

          return toReturn;
        }
      }, {
        key: "getSavedCart",
        value: function getSavedCart() {
          return JSON.parse(window.localStorage.getItem(Cart.KEY_CART));
        }
      }, {
        key: "setSavedCart",
        value: function setSavedCart(cartToSave) {
          window.localStorage.setItem(Cart.KEY_CART, JSON.stringify(cartToSave));
        }
      }]);

      return Cart;
    }();

    Cart.KEY_CART = 'sh_cart';

    var ECommerceService = /*#__PURE__*/function () {
      function ECommerceService() {
        _classCallCheck(this, ECommerceService);

        this.initialize();
      }

      _createClass(ECommerceService, [{
        key: "initialize",
        value: function initialize() {
          this.myCart = Cart.restore();
          var tax_in_percent = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_2__["Helper"].getSetting("tax_in_percent");
          var delivery_fee = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_2__["Helper"].getSetting("delivery_fee");
          var currency_icon = src_models_models_shop_hour_helper_models__WEBPACK_IMPORTED_MODULE_2__["Helper"].getSetting("currency_icon");
          this.myCart.removeExtraCharge("delivery_fee");
          this.myCart.removeExtraCharge("tax_in_percent");

          if (tax_in_percent != null && Number(tax_in_percent) > 0) {
            var ec = new ExtraCharge();
            ec.extraChargeObject = tax_in_percent;
            ec.id = "tax_in_percent";
            ec.title = "Service Fee";
            ec.isPercent = true;
            ec.price = Number(tax_in_percent);
            ec.priceToShow = ec.price + "%";
            this.myCart.addExtraCharge(ec);
          }

          if (delivery_fee != null && Number(delivery_fee) > 0) {
            var _ec3 = new ExtraCharge();

            _ec3.extraChargeObject = delivery_fee;
            _ec3.id = "delivery_fee";
            _ec3.title = "Delivery Fee";
            _ec3.isPercent = false;
            _ec3.price = Number(delivery_fee);
            _ec3.priceToShow = currency_icon + _ec3.price;
            this.myCart.addExtraCharge(_ec3);
          }
        }
      }, {
        key: "clearCart",
        value: function clearCart() {
          Cart.setSavedCart(null);
          this.initialize();
          this.orderMeta = null;
          this.orderRequest = null;
        }
      }, {
        key: "getCartItems",
        value: function getCartItems() {
          return this.myCart.cartItems;
        }
      }, {
        key: "getExtraCharges",
        value: function getExtraCharges() {
          return this.myCart.extraCharges;
        }
      }, {
        key: "getCartItemsCount",
        value: function getCartItemsCount() {
          return this.myCart.cartItems.length;
        }
      }, {
        key: "getCartItemsTotal",
        value: function getCartItemsTotal(fixFloatingPoint) {
          return this.myCart.getTotalCartItems(fixFloatingPoint);
        }
      }, {
        key: "getCartTotal",
        value: function getCartTotal(fixFloatingPoint) {
          return this.myCart.getTotalCart(fixFloatingPoint);
        }
      }, {
        key: "isExistsCartItem",
        value: function isExistsCartItem(ci) {
          var index = -1;

          for (var i = 0; i < this.myCart.cartItems.length; i++) {
            if (this.myCart.cartItems[i].id == ci.id) {
              index = i;
              break;
            }
          }

          return index != -1;
        }
      }, {
        key: "addOrIncrementCartItem",
        value: function addOrIncrementCartItem(ci) {
          var index = -1;

          for (var i = 0; i < this.myCart.cartItems.length; i++) {
            if (this.myCart.cartItems[i].id == ci.id) {
              index = i;
              break;
            }
          }

          if (index == -1) {
            this.myCart.cartItems.push(ci);
          } else {
            ci.setQuantity(this.myCart.cartItems[index].quantity + 1);
            this.myCart.cartItems[index] = ci;
          }

          Cart.setSavedCart(this.myCart);
          return index == -1;
        }
      }, {
        key: "removeOrDecrementCartItem",
        value: function removeOrDecrementCartItem(ci) {
          var index = -1;

          for (var i = 0; i < this.myCart.cartItems.length; i++) {
            if (this.myCart.cartItems[i].id == ci.id) {
              index = i;
              break;
            }
          }

          var removed = false;

          if (index != -1) {
            if (this.myCart.cartItems[index].quantity > 1) {
              ci.setQuantity(this.myCart.cartItems[index].quantity - 1);
              this.myCart.cartItems[index] = ci;
            } else {
              removed = true;
              this.myCart.cartItems.splice(index, 1);
            }

            Cart.setSavedCart(this.myCart);
          }

          return removed;
        } //custom IMPLEMENTATION below.

      }, {
        key: "removeCoupon",
        value: function removeCoupon() {
          this.myCart.removeExtraCharge("coupon");
        } //custom COUPON implementation below

      }, {
        key: "applyCoupon",
        value: function applyCoupon(coupon) {
          this.myCart.removeExtraCharge("coupon");

          if (coupon != null) {
            var ec = new ExtraCharge();
            ec.extraChargeObject = coupon;
            ec.id = "coupon";
            ec.title = coupon.title;
            ec.isPercent = coupon.type == "percent";
            ec.price = Number(coupon.reward);
            ec.priceToShow = ec.price + "%";
            this.myCart.addExtraCharge(ec);
            this.setupOrderRequestBase();
            this.orderRequest.coupon_code = coupon.code;
          } else {
            this.setupOrderRequestBase();
            this.orderRequest.coupon_code = null;
          }
        } //custom PRODUCT implementation below

      }, {
        key: "getCartItemFromProduct",
        value: function getCartItemFromProduct(product) {
          var ci = new CartItem();
          ci.price = product.price;
          ci.title = product.title;
          ci.subtitle = product.categories[0].title;
          ci.image = product.images[0];
          ci.product = product;
          ci.id = String(product.id);
          ci.setQuantity(1);
          return ci;
        } //custom ORDERREQUEST implementation below

      }, {
        key: "getOrderRequest",
        value: function getOrderRequest() {
          this.orderRequest.products = [];

          var _iterator6 = _createForOfIteratorHelper(this.myCart.cartItems),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var ci = _step6.value;
              this.orderRequest.products.push({
                id: ci.product.id,
                quantity: ci.quantity
              });
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          if (this.orderMeta != null) this.orderRequest.meta = JSON.stringify(this.orderMeta);
          return this.orderRequest;
        }
      }, {
        key: "setupOrderRequestBase",
        value: function setupOrderRequestBase() {
          if (this.orderRequest == null) this.orderRequest = new src_models_models_shop_hour_order_request_models__WEBPACK_IMPORTED_MODULE_3__["OrderRequest"]();
          if (this.orderMeta == null) this.orderMeta = {};
        }
      }, {
        key: "setupOrderRequestAddress",
        value: function setupOrderRequestAddress(address) {
          this.setupOrderRequestBase();
          this.orderRequest.address_id = address.id;
        }
      }, {
        key: "setupOrderRequestPaymentMethod",
        value: function setupOrderRequestPaymentMethod(paymentMethod) {
          this.setupOrderRequestBase();
          this.orderRequest.payment_method_id = paymentMethod.id;
          this.orderRequest.payment_method_slug = paymentMethod.slug;
        }
      }, {
        key: "setupOrderRequestMeta",
        value: function setupOrderRequestMeta(key, value) {
          this.setupOrderRequestBase();
          this.orderMeta[key] = value;
        }
      }, {
        key: "hasOrderRequestMetaKey",
        value: function hasOrderRequestMetaKey(key) {
          this.setupOrderRequestBase();
          return this.orderMeta[key] != null;
        }
      }, {
        key: "removeOrderRequestMeta",
        value: function removeOrderRequestMeta(key) {
          this.setupOrderRequestBase();
          this.orderMeta[key] = null;
        }
      }]);

      return ECommerceService;
    }();

    ECommerceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ECommerceService);
    /***/
  },

  /***/
  "./src/assets/scripts/html-map-marker.js": function srcAssetsScriptsHtmlMapMarkerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* global google */


    var createHTMLMapMarker = function createHTMLMapMarker(_ref3) {
      var _ref3$OverlayView = _ref3.OverlayView,
          OverlayView = _ref3$OverlayView === void 0 ? google.maps.OverlayView : _ref3$OverlayView,
          args = _objectWithoutProperties(_ref3, _excluded);

      var HTMLMapMarker = /*#__PURE__*/function (_OverlayView) {
        _inherits(HTMLMapMarker, _OverlayView);

        var _super2 = _createSuper(HTMLMapMarker);

        function HTMLMapMarker() {
          var _this4;

          _classCallCheck(this, HTMLMapMarker);

          _this4 = _super2.call(this);
          _this4.latlng = args.latlng;
          _this4.html = args.html;

          _this4.setMap(args.map);

          return _this4;
        }

        _createClass(HTMLMapMarker, [{
          key: "createDiv",
          value: function createDiv() {
            var _this5 = this;

            this.div = document.createElement("div");
            this.div.style.position = "absolute";

            if (this.html) {
              this.div.innerHTML = this.html;
            }

            google.maps.event.addDomListener(this.div, "click", function (event) {
              google.maps.event.trigger(_this5, "click");
            });
          }
        }, {
          key: "appendDivToOverlay",
          value: function appendDivToOverlay() {
            var panes = this.getPanes();
            panes.overlayImage.appendChild(this.div);
          }
        }, {
          key: "positionDiv",
          value: function positionDiv() {
            var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
            var offset = 25;

            if (point) {
              this.div.style.left = "".concat(point.x - offset, "px");
              this.div.style.top = "".concat(point.y - offset, "px");
            }
          }
        }, {
          key: "draw",
          value: function draw() {
            if (!this.div) {
              this.createDiv();
              this.appendDivToOverlay();
            }

            this.positionDiv();
          }
        }, {
          key: "remove",
          value: function remove() {
            if (this.div) {
              this.div.parentNode.removeChild(this.div);
              this.div = null;
            }
          }
        }, {
          key: "getPosition",
          value: function getPosition() {
            return this.latlng;
          }
        }, {
          key: "setPosition",
          value: function setPosition(latlng) {
            this.latlng = latlng;
            this.positionDiv();
          }
        }, {
          key: "getDraggable",
          value: function getDraggable() {
            return false;
          }
        }]);

        return HTMLMapMarker;
      }(OverlayView);

      return new HTMLMapMarker();
    };
    /* harmony default export */


    __webpack_exports__["default"] = createHTMLMapMarker;
    /***/
  },

  /***/
  "./src/models/chat.models.ts": function srcModelsChatModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chat", function () {
      return Chat;
    });
    /* harmony import */


    var _helper_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./helper.models */
    "./src/models/helper.models.ts");

    var Chat = /*#__PURE__*/function () {
      function Chat() {
        _classCallCheck(this, Chat);
      }

      _createClass(Chat, null, [{
        key: "fromMessage",
        value: function fromMessage(msg, isMeSender) {
          var chat = new Chat();
          chat.chatId = isMeSender ? msg.recipientId : msg.senderId;
          chat.myId = isMeSender ? msg.senderId : msg.recipientId;
          chat.chatName = isMeSender ? msg.recipientName : msg.senderName;
          chat.chatImage = isMeSender ? msg.recipientImage : msg.senderImage;
          chat.chatStatus = isMeSender ? msg.recipientStatus : msg.senderStatus;
          chat.dateTimeStamp = msg.dateTimeStamp;
          chat.timeDiff = _helper_models__WEBPACK_IMPORTED_MODULE_0__["Helper"].formatMillisDateTimeWOYear(Number(chat.dateTimeStamp), _helper_models__WEBPACK_IMPORTED_MODULE_0__["Helper"].getLocale());
          chat.lastMessage = msg.body;
          return chat;
        }
      }]);

      return Chat;
    }();
    /***/

  },

  /***/
  "./src/models/message.models.ts": function srcModelsMessageModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Message", function () {
      return Message;
    });
    /* harmony import */


    var _helper_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./helper.models */
    "./src/models/helper.models.ts");

    var Message = /*#__PURE__*/function () {
      function Message() {
        _classCallCheck(this, Message);
      }

      _createClass(Message, [{
        key: "fromRow",
        value: function fromRow(arg0) {
          this.senderName = arg0.senderName;
          this.senderImage = arg0.senderImage;
          this.senderStatus = arg0.senderStatus;
          this.recipientName = arg0.recipientName;
          this.recipientImage = arg0.recipientImage;
          this.recipientStatus = arg0.recipientStatus;
          this.recipientId = arg0.recipientId;
          this.senderId = arg0.senderId;
          this.chatId = arg0.chatId;
          this.id = arg0.id;
          this.body = arg0.body;
          this.dateTimeStamp = arg0.dateTimeStamp;
          this.timeDiff = _helper_models__WEBPACK_IMPORTED_MODULE_0__["Helper"].formatMillisDateTimeWOYear(Number(this.dateTimeStamp), _helper_models__WEBPACK_IMPORTED_MODULE_0__["Helper"].getLocale());
          this.delivered = arg0.delivered == 1;
          this.sent = arg0.sent == 1;
        }
      }]);

      return Message;
    }();
    /***/

  },

  /***/
  "./src/models/models-shop-hour/order-request.models.ts": function srcModelsModelsShopHourOrderRequestModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderRequest", function () {
      return OrderRequest;
    });

    var OrderRequest = function OrderRequest() {
      _classCallCheck(this, OrderRequest);

      this.products = new Array();
    };
    /***/

  },

  /***/
  "./src/models/product.models.ts": function srcModelsProductModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });

    var Product = function Product() {
      _classCallCheck(this, Product);
    };
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map