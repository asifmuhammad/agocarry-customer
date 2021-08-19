(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-address-add-address-module~tabs-tabs-module"], {
  /***/
  "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js": function node_modulesIonicNativeDiagnostic__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Diagnostic", function () {
      return Diagnostic;
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

    var Diagnostic = function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Diagnostic, _super);

      function Diagnostic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.permission = {
          READ_CALENDAR: 'READ_CALENDAR',
          WRITE_CALENDAR: 'WRITE_CALENDAR',
          CAMERA: 'CAMERA',
          READ_CONTACTS: 'READ_CONTACTS',
          WRITE_CONTACTS: 'WRITE_CONTACTS',
          GET_ACCOUNTS: 'GET_ACCOUNTS',
          ACCESS_FINE_LOCATION: 'ACCESS_FINE_LOCATION',
          ACCESS_COARSE_LOCATION: 'ACCESS_COARSE_LOCATION',
          RECORD_AUDIO: 'RECORD_AUDIO',
          READ_PHONE_STATE: 'READ_PHONE_STATE',
          CALL_PHONE: 'CALL_PHONE',
          ADD_VOICEMAIL: 'ADD_VOICEMAIL',
          USE_SIP: 'USE_SIP',
          PROCESS_OUTGOING_CALLS: 'PROCESS_OUTGOING_CALLS',
          READ_CALL_LOG: 'READ_CALL_LOG',
          WRITE_CALL_LOG: 'WRITE_CALL_LOG',
          SEND_SMS: 'SEND_SMS',
          RECEIVE_SMS: 'RECEIVE_SMS',
          READ_SMS: 'READ_SMS',
          RECEIVE_WAP_PUSH: 'RECEIVE_WAP_PUSH',
          RECEIVE_MMS: 'RECEIVE_MMS',
          WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',
          READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
          BODY_SENSORS: 'BODY_SENSORS'
        };
        _this.locationAuthorizationMode = {
          ALWAYS: 'always',
          WHEN_IN_USE: 'when_in_use'
        };
        _this.permissionGroups = {
          CALENDAR: ['READ_CALENDAR', 'WRITE_CALENDAR'],
          CAMERA: ['CAMERA'],
          CONTACTS: ['READ_CONTACTS', 'WRITE_CONTACTS', 'GET_ACCOUNTS'],
          LOCATION: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
          MICROPHONE: ['RECORD_AUDIO'],
          PHONE: ['READ_PHONE_STATE', 'CALL_PHONE', 'ADD_VOICEMAIL', 'USE_SIP', 'PROCESS_OUTGOING_CALLS', 'READ_CALL_LOG', 'WRITE_CALL_LOG'],
          SENSORS: ['BODY_SENSORS'],
          SMS: ['SEND_SMS', 'RECEIVE_SMS', 'READ_SMS', 'RECEIVE_WAP_PUSH', 'RECEIVE_MMS'],
          STORAGE: ['READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE']
        };
        _this.locationMode = {
          HIGH_ACCURACY: 'high_accuracy',
          DEVICE_ONLY: 'device_only',
          BATTERY_SAVING: 'battery_saving',
          LOCATION_OFF: 'location_off'
        };
        _this.bluetoothState = {
          UNKNOWN: 'unknown',
          RESETTING: 'resetting',
          UNSUPPORTED: 'unsupported',
          UNAUTHORIZED: 'unauthorized',
          POWERED_OFF: 'powered_off',
          POWERED_ON: 'powered_on',
          POWERING_OFF: 'powering_off',
          POWERING_ON: 'powering_on'
        };
        return _this;
      }

      Diagnostic.prototype.isLocationAvailable = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isLocationAvailable", {}, arguments);
      };

      Diagnostic.prototype.isWifiAvailable = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isWifiAvailable", {}, arguments);
      };

      Diagnostic.prototype.isCameraAvailable = function (externalStorage) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isCameraAvailable", {
          "callbackOrder": "reverse"
        }, arguments);
      };

      Diagnostic.prototype.isBluetoothAvailable = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isBluetoothAvailable", {}, arguments);
      };

      Diagnostic.prototype.switchToLocationSettings = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "switchToLocationSettings", {
          "sync": true,
          "platforms": ["Android", "Windows 10", "iOS"]
        }, arguments);
      };

      Diagnostic.prototype.switchToMobileDataSettings = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "switchToMobileDataSettings", {
          "sync": true,
          "platforms": ["Android", "Windows 10"]
        }, arguments);
      };

      Diagnostic.prototype.switchToBluetoothSettings = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "switchToBluetoothSettings", {
          "sync": true,
          "platforms": ["Android", "Windows 10"]
        }, arguments);
      };

      Diagnostic.prototype.switchToWifiSettings = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "switchToWifiSettings", {
          "sync": true,
          "platforms": ["Android", "Windows 10"]
        }, arguments);
      };

      Diagnostic.prototype.isWifiEnabled = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isWifiEnabled", {
          "platforms": ["Android", "Windows 10"]
        }, arguments);
      };

      Diagnostic.prototype.setWifiState = function (state) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setWifiState", {
          "callbackOrder": "reverse",
          "platforms": ["Android", "Windows 10"]
        }, arguments);
      };

      Diagnostic.prototype.setBluetoothState = function (state) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setBluetoothState", {
          "callbackOrder": "reverse",
          "platforms": ["Android", "Windows 10"]
        }, arguments);
      };

      Diagnostic.prototype.isLocationEnabled = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isLocationEnabled", {
          "platforms": ["Android", "iOS"]
        }, arguments);
      };

      Diagnostic.prototype.isLocationAuthorized = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isLocationAuthorized", {}, arguments);
      };

      Diagnostic.prototype.getLocationAuthorizationStatus = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getLocationAuthorizationStatus", {
          "platforms": ["Android", "iOS"]
        }, arguments);
      };

      Diagnostic.prototype.requestLocationAuthorization = function (mode) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestLocationAuthorization", {
          "platforms": ["Android", "iOS"],
          "callbackOrder": "reverse"
        }, arguments);
      };

      Diagnostic.prototype.isCameraPresent = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isCameraPresent", {
          "platforms": ["Android", "iOS"]
        }, arguments);
      };

      Diagnostic.prototype.isCameraAuthorized = function (externalStorage) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isCameraAuthorized", {
          "platforms": ["Android", "iOS"],
          "callbackOrder": "reverse"
        }, arguments);
      };

      Diagnostic.prototype.getCameraAuthorizationStatus = function (externalStorage) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getCameraAuthorizationStatus", {
          "platforms": ["Android", "iOS"],
          "callbackOrder": "reverse"
        }, arguments);
      };

      Diagnostic.prototype.requestCameraAuthorization = function (externalStorage) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestCameraAuthorization", {
          "platforms": ["Android", "iOS"],
          "callbackOrder": "reverse"
        }, arguments);
      };

      Diagnostic.prototype.isMicrophoneAuthorized = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isMicrophoneAuthorized", {
          "platforms": ["Android", "iOS"]
        }, arguments);
      };

      Diagnostic.prototype.getMicrophoneAuthorizationStatus = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getMicrophoneAuthorizationStatus", {
          "platforms": ["Android", "iOS"]
        }, arguments);
      };

      Diagnostic.prototype.requestMicrophoneAuthorization = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestMicrophoneAuthorization", {
          "platforms": ["Android", "iOS"]
        }, arguments);
      };

      Diagnostic.prototype.isContactsAuthorized = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isContactsAuthorized", {
          "platforms": ["Android", "iOS"]
        }, arguments);
      };

      Diagnostic.prototype.getContactsAuthorizationStatus = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getContactsAuthorizationStatus", {
          "platforms": ["Android", "iOS"]
        }, arguments);
      };

      Diagnostic.prototype.requestContactsAuthorization = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestContactsAuthorization", {
          "platforms": ["Android", "iOS"]
        }, arguments);
      };

      Diagnostic.prototype.isCalendarAuthorized = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isCalendarAuthorized", {
          "platforms": ["Android", "iOS"]
        }, arguments);
      };

      Diagnostic.prototype.getCalendarAuthorizationStatus = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getCalendarAuthorizationStatus", {
          "platforms": ["Android", "iOS"]
        }, arguments);
      };

      Diagnostic.prototype.requestCalendarAuthorization = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestCalendarAuthorization", {
          "platforms": ["Android", "iOS"]
        }, arguments);
      };

      Diagnostic.prototype.switchToSettings = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "switchToSettings", {
          "platforms": ["Android", "iOS"]
        }, arguments);
      };

      Diagnostic.prototype.getBluetoothState = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getBluetoothState", {
          "platforms": ["Android", "iOS"]
        }, arguments);
      };

      Diagnostic.prototype.registerBluetoothStateChangeHandler = function (handler) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "registerBluetoothStateChangeHandler", {
          "platforms": ["Android", "iOS"],
          "sync": true
        }, arguments);
      };

      Diagnostic.prototype.registerLocationStateChangeHandler = function (handler) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "registerLocationStateChangeHandler", {
          "platforms": ["Android", "iOS"],
          "sync": true
        }, arguments);
      };

      Diagnostic.prototype.isGpsLocationAvailable = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isGpsLocationAvailable", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.isGpsLocationEnabled = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isGpsLocationEnabled", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.isNetworkLocationAvailable = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isNetworkLocationAvailable", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.isNetworkLocationEnabled = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isNetworkLocationEnabled", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.getLocationMode = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getLocationMode", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.getPermissionAuthorizationStatus = function (permission) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getPermissionAuthorizationStatus", {
          "platforms": ["Android"],
          "callbackOrder": "reverse"
        }, arguments);
      };

      Diagnostic.prototype.getPermissionsAuthorizationStatus = function (permissions) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getPermissionsAuthorizationStatus", {
          "platforms": ["Android"],
          "callbackOrder": "reverse"
        }, arguments);
      };

      Diagnostic.prototype.requestRuntimePermission = function (permission) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestRuntimePermission", {
          "platforms": ["Android"],
          "callbackOrder": "reverse"
        }, arguments);
      };

      Diagnostic.prototype.requestRuntimePermissions = function (permissions) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestRuntimePermissions", {
          "platforms": ["Android"],
          "callbackOrder": "reverse"
        }, arguments);
      };

      Diagnostic.prototype.isRequestingPermission = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isRequestingPermission", {
          "sync": true
        }, arguments);
      };

      Diagnostic.prototype.registerPermissionRequestCompleteHandler = function (handler) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "registerPermissionRequestCompleteHandler", {
          "sync": true
        }, arguments);
      };

      Diagnostic.prototype.isBluetoothEnabled = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isBluetoothEnabled", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.hasBluetoothSupport = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hasBluetoothSupport", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.hasBluetoothLESupport = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hasBluetoothLESupport", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.hasBluetoothLEPeripheralSupport = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hasBluetoothLEPeripheralSupport", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.isExternalStorageAuthorized = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isExternalStorageAuthorized", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.getExternalStorageAuthorizationStatus = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getExternalStorageAuthorizationStatus", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.requestExternalStorageAuthorization = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestExternalStorageAuthorization", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.getExternalSdCardDetails = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getExternalSdCardDetails", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.switchToWirelessSettings = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "switchToWirelessSettings", {
          "platforms": ["Android"],
          "sync": true
        }, arguments);
      };

      Diagnostic.prototype.switchToNFCSettings = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "switchToNFCSettings", {
          "platforms": ["Android"],
          "sync": true
        }, arguments);
      };

      Diagnostic.prototype.isNFCPresent = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isNFCPresent", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.isNFCEnabled = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isNFCEnabled", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.isNFCAvailable = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isNFCAvailable", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.registerNFCStateChangeHandler = function (handler) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "registerNFCStateChangeHandler", {
          "platforms": ["Android"],
          "sync": true
        }, arguments);
      };

      Diagnostic.prototype.isDataRoamingEnabled = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isDataRoamingEnabled", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.isADBModeEnabled = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isADBModeEnabled", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.isDeviceRooted = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isDeviceRooted", {
          "platforms": ["Android"]
        }, arguments);
      };

      Diagnostic.prototype.isCameraRollAuthorized = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isCameraRollAuthorized", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.getCameraRollAuthorizationStatus = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getCameraRollAuthorizationStatus", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.requestCameraRollAuthorization = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestCameraRollAuthorization", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.isRemoteNotificationsEnabled = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isRemoteNotificationsEnabled", {
          "platforms": ["iOS", "Android"]
        }, arguments);
      };

      Diagnostic.prototype.isRegisteredForRemoteNotifications = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isRegisteredForRemoteNotifications", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.getRemoteNotificationsAuthorizationStatus = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getRemoteNotificationsAuthorizationStatus", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.requestRemoteNotificationsAuthorization = function (types, omitRegistration) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestRemoteNotificationsAuthorization", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.getRemoteNotificationTypes = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getRemoteNotificationTypes", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.isRemindersAuthorized = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isRemindersAuthorized", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.getRemindersAuthorizationStatus = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getRemindersAuthorizationStatus", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.requestRemindersAuthorization = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestRemindersAuthorization", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.isBackgroundRefreshAuthorized = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isBackgroundRefreshAuthorized", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.getBackgroundRefreshStatus = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getBackgroundRefreshStatus", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.requestBluetoothAuthorization = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestBluetoothAuthorization", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.isMotionAvailable = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isMotionAvailable", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.isMotionRequestOutcomeAvailable = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isMotionRequestOutcomeAvailable", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.requestMotionAuthorization = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestMotionAuthorization", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.getMotionAuthorizationStatus = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getMotionAuthorizationStatus", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.getLocationAccuracyAuthorization = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getLocationAccuracyAuthorization", {
          "platform": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.requestTemporaryFullAccuracyAuthorization = function (purpose) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestTemporaryFullAccuracyAuthorization", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Diagnostic.prototype.registerLocationAccuracyAuthorizationChangeHandler = function (handler) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "registerLocationAccuracyAuthorizationChangeHandler", {
          "platforms": ["iOS"],
          "sync": true
        }, arguments);
      };

      Object.defineProperty(Diagnostic.prototype, "permissionStatus", {
        get: function get() {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "permissionStatus");
        },
        set: function set(value) {
          Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "permissionStatus", value);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Diagnostic.prototype, "NFCState", {
        get: function get() {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "NFCState");
        },
        set: function set(value) {
          Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "NFCState", value);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Diagnostic.prototype, "motionStatus", {
        get: function get() {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "motionStatus");
        },
        set: function set(value) {
          Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "motionStatus", value);
        },
        enumerable: false,
        configurable: true
      });
      Diagnostic.pluginName = "Diagnostic";
      Diagnostic.plugin = "cordova.plugins.diagnostic";
      Diagnostic.pluginRef = "cordova.plugins.diagnostic";
      Diagnostic.repo = "https://github.com/dpa99c/cordova-diagnostic-plugin";
      Diagnostic.platforms = ["Android", "iOS", "Windows"];

      Diagnostic.ɵfac = function Diagnostic_Factory(t) {
        return ɵDiagnostic_BaseFactory(t || Diagnostic);
      };

      Diagnostic.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: Diagnostic,
        factory: function factory(t) {
          return Diagnostic.ɵfac(t);
        }
      });

      var ɵDiagnostic_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Diagnostic);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Diagnostic, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], null, null);
      })();

      return Diagnostic;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZGlhZ25vc3RpYy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDekY7QUFJVyxJQXNDcUIsOEJBQWlCO0FBQUM7QUFFekM7QUFFSSxRQUhYLGdCQUFVLEdBQUc7QUFDZixZQUFJLGFBQWEsRUFBRSxlQUFlO0FBQ2xDLFlBQUksY0FBYyxFQUFFLGdCQUFnQjtBQUNwQyxZQUFJLE1BQU0sRUFBRSxRQUFRO0FBQ3BCLFlBQUksYUFBYSxFQUFFLGVBQWU7QUFDbEMsWUFBSSxjQUFjLEVBQUUsZ0JBQWdCO0FBQ3BDLFlBQUksWUFBWSxFQUFFLGNBQWM7QUFDaEMsWUFBSSxvQkFBb0IsRUFBRSxzQkFBc0I7QUFDaEQsWUFBSSxzQkFBc0IsRUFBRSx3QkFBd0I7QUFDcEQsWUFBSSxZQUFZLEVBQUUsY0FBYztBQUNoQyxZQUFJLGdCQUFnQixFQUFFLGtCQUFrQjtBQUN4QyxZQUFJLFVBQVUsRUFBRSxZQUFZO0FBQzVCLFlBQUksYUFBYSxFQUFFLGVBQWU7QUFDbEMsWUFBSSxPQUFPLEVBQUUsU0FBUztBQUN0QixZQUFJLHNCQUFzQixFQUFFLHdCQUF3QjtBQUNwRCxZQUFJLGFBQWEsRUFBRSxlQUFlO0FBQ2xDLFlBQUksY0FBYyxFQUFFLGdCQUFnQjtBQUNwQyxZQUFJLFFBQVEsRUFBRSxVQUFVO0FBQ3hCLFlBQUksV0FBVyxFQUFFLGFBQWE7QUFDOUIsWUFBSSxRQUFRLEVBQUUsVUFBVTtBQUN4QixZQUFJLGdCQUFnQixFQUFFLGtCQUFrQjtBQUN4QyxZQUFJLFdBQVcsRUFBRSxhQUFhO0FBQzlCLFlBQUksc0JBQXNCLEVBQUUsd0JBQXdCO0FBQ3BELFlBQUkscUJBQXFCLEVBQUUsdUJBQXVCO0FB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Q0FBMEI7QUFNekIsSUFNRCxpREFBNEI7QUFLb0MsSUFPaEUscURBQWdDO0FBS21DLElBT25FLDhEQUF5QyxhQUFDLE9BQWU7QUFLUSxJQUtqRSx1RUFBa0QsYUFBQyxPQUFpQjtBQUVtRCwwQkFwNEJ2SCx3Q0FBZ0I7QUFDbEI7QUFFc0Q7QUFHdEQ7QUFDRTtBQUNBO0FBQVEsMEJBMERSLGdDQUFRO0FBQ1Y7QUFHSztBQUtFO0FBQ1M7QUFDQTtBQUNiLDBCQUhELG9DQUFZO0FBQ2Q7QUFHVztBQUdLO0FBSU47QUFBMkI7QUFBUTtBQUV6QztBQUVtQztBQUtOO0FBQTZFOzhDQTdIN0csVUFBVTs7Ozs7MEJBQ0w7QUFBQyxxQkE1Q1A7QUFBRSxFQTRDOEIsaUJBQWlCO0FBQ2hELFNBRFksVUFBVTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBEaWFnbm9zdGljXG4gKiBAZGVzY3JpcHRpb25cbiAqIENoZWNrcyB3aGV0aGVyIGRldmljZSBoYXJkd2FyZSBmZWF0dXJlcyBhcmUgZW5hYmxlZCBvciBhdmFpbGFibGUgdG8gdGhlIGFwcCwgZS5nLiBjYW1lcmEsIEdQUywgd2lmaVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRGlhZ25vc3RpYyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGlhZ25vc3RpYy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhZ25vc3RpYzogRGlhZ25vc3RpYykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogbGV0IHN1Y2Nlc3NDYWxsYmFjayA9IChpc0F2YWlsYWJsZSkgPT4geyBjb25zb2xlLmxvZygnSXMgYXZhaWxhYmxlPyAnICsgaXNBdmFpbGFibGUpOyB9XG4gKiBsZXQgZXJyb3JDYWxsYmFjayA9IChlKSA9PiBjb25zb2xlLmVycm9yKGUpO1xuICpcbiAqIHRoaXMuZGlhZ25vc3RpYy5pc0NhbWVyYUF2YWlsYWJsZSgpLnRoZW4oc3VjY2Vzc0NhbGxiYWNrKS5jYXRjaChlcnJvckNhbGxiYWNrKTtcbiAqXG4gKiB0aGlzLmRpYWdub3N0aWMuaXNCbHVldG9vdGhBdmFpbGFibGUoKS50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gKlxuICpcbiAqIHRoaXMuZGlhZ25vc3RpYy5nZXRCbHVldG9vdGhTdGF0ZSgpXG4gKiAgIC50aGVuKChzdGF0ZSkgPT4ge1xuICogICAgIGlmIChzdGF0ZSA9PSB0aGlzLmRpYWdub3N0aWMuYmx1ZXRvb3RoU3RhdGUuUE9XRVJFRF9PTil7XG4gKiAgICAgICAvLyBkbyBzb21ldGhpbmdcbiAqICAgICB9IGVsc2Uge1xuICogICAgICAgLy8gZG8gc29tZXRoaW5nIGVsc2VcbiAqICAgICB9XG4gKiAgIH0pLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSk7XG4gKlxuICogYGBgXG4gKlxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0RpYWdub3N0aWMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLnBsdWdpbnMuZGlhZ25vc3RpYycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5kaWFnbm9zdGljJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kcGE5OWMvY29yZG92YS1kaWFnbm9zdGljLXBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERpYWdub3N0aWMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIHBlcm1pc3Npb24gPSB7XG4gICAgUkVBRF9DQUxFTkRBUjogJ1JFQURfQ0FMRU5EQVInLFxuICAgIFdSSVRFX0NBTEVOREFSOiAnV1JJVEVfQ0FMRU5EQVInLFxuICAgIENBTUVSQTogJ0NBTUVSQScsXG4gICAgUkVBRF9DT05UQUNUUzogJ1JFQURfQ09OVEFDVFMnLFxuICAgIFdSSVRFX0NPTlRBQ1RTOiAnV1JJVEVfQ09OVEFDVFMnLFxuICAgIEdFVF9BQ0NPVU5UUzogJ0dFVF9BQ0NPVU5UUycsXG4gICAgQUNDRVNTX0ZJTkVfTE9DQVRJT046ICdBQ0NFU1NfRklORV9MT0NBVElPTicsXG4gICAgQUNDRVNTX0NPQVJTRV9MT0NBVElPTjogJ0FDQ0VTU19DT0FSU0VfTE9DQVRJT04nLFxuICAgIFJFQ09SRF9BVURJTzogJ1JFQ09SRF9BVURJTycsXG4gICAgUkVBRF9QSE9ORV9TVEFURTogJ1JFQURfUEhPTkVfU1RBVEUnLFxuICAgIENBTExfUEhPTkU6ICdDQUxMX1BIT05FJyxcbiAgICBBRERfVk9JQ0VNQUlMOiAnQUREX1ZPSUNFTUFJTCcsXG4gICAgVVNFX1NJUDogJ1VTRV9TSVAnLFxuICAgIFBST0NFU1NfT1VUR09JTkdfQ0FMTFM6ICdQUk9DRVNTX09VVEdPSU5HX0NBTExTJyxcbiAgICBSRUFEX0NBTExfTE9HOiAnUkVBRF9DQUxMX0xPRycsXG4gICAgV1JJVEVfQ0FMTF9MT0c6ICdXUklURV9DQUxMX0xPRycsXG4gICAgU0VORF9TTVM6ICdTRU5EX1NNUycsXG4gICAgUkVDRUlWRV9TTVM6ICdSRUNFSVZFX1NNUycsXG4gICAgUkVBRF9TTVM6ICdSRUFEX1NNUycsXG4gICAgUkVDRUlWRV9XQVBfUFVTSDogJ1JFQ0VJVkVfV0FQX1BVU0gnLFxuICAgIFJFQ0VJVkVfTU1TOiAnUkVDRUlWRV9NTVMnLFxuICAgIFdSSVRFX0VYVEVSTkFMX1NUT1JBR0U6ICdXUklURV9FWFRFUk5BTF9TVE9SQUdFJyxcbiAgICBSRUFEX0VYVEVSTkFMX1NUT1JBR0U6ICdSRUFEX0VYVEVSTkFMX1NUT1JBR0UnLFxuICAgIEJPRFlfU0VOU09SUzogJ0JPRFlfU0VOU09SUycsXG4gIH07XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHBlcm1pc3Npb25TdGF0dXM6IHtcbiAgICBHUkFOVEVEOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgY29yZG92YS5wbHVnaW5zLmRpYWdub3N0aWNANS4wLjAgdXNlcyBERU5JRURfT05DRSB0byB1bmlmeSBERU5JRUQqIHN0YXR1c2VzIGFjcm9zcyBpT1MvQW5kcm9pZFxuICAgICAqL1xuICAgIERFTklFRDogc3RyaW5nO1xuICAgIERFTklFRF9PTkNFOiBzdHJpbmc7XG4gICAgTk9UX1JFUVVFU1RFRDogc3RyaW5nO1xuICAgIERFTklFRF9BTFdBWVM6IHN0cmluZztcbiAgICBSRVNUUklDVEVEOiBzdHJpbmc7XG4gICAgR1JBTlRFRF9XSEVOX0lOX1VTRTogc3RyaW5nO1xuICB9O1xuXG4gIGxvY2F0aW9uQXV0aG9yaXphdGlvbk1vZGUgPSB7XG4gICAgQUxXQVlTOiAnYWx3YXlzJyxcbiAgICBXSEVOX0lOX1VTRTogJ3doZW5faW5fdXNlJyxcbiAgfTtcblxuICAvKipcbiAgICogaU9TIE9OTFlcbiAgICogTG9jYXRpb24gYWNjdXJhY3kgYXV0aG9yaXphdGlvblxuICAgKi9cbiAgbG9jYXRpb25BY2N1cmFjeUF1dGhvcml6YXRpb246IHtcbiAgICBGVUxMOiAnZnVsbCc7XG4gICAgUkVEVUNFRDogJ3JlZHVjZWQnO1xuICB9O1xuXG4gIHBlcm1pc3Npb25Hcm91cHMgPSB7XG4gICAgQ0FMRU5EQVI6IFsnUkVBRF9DQUxFTkRBUicsICdXUklURV9DQUxFTkRBUiddLFxuICAgIENBTUVSQTogWydDQU1FUkEnXSxcbiAgICBDT05UQUNUUzogWydSRUFEX0NPTlRBQ1RTJywgJ1dSSVRFX0NPTlRBQ1RTJywgJ0dFVF9BQ0NPVU5UUyddLFxuICAgIExPQ0FUSU9OOiBbJ0FDQ0VTU19GSU5FX0xPQ0FUSU9OJywgJ0FDQ0VTU19DT0FSU0VfTE9DQVRJT04nXSxcbiAgICBNSUNST1BIT05FOiBbJ1JFQ09SRF9BVURJTyddLFxuICAgIFBIT05FOiBbXG4gICAgICAnUkVBRF9QSE9ORV9TVEFURScsXG4gICAgICAnQ0FMTF9QSE9ORScsXG4gICAgICAnQUREX1ZPSUNFTUFJTCcsXG4gICAgICAnVVNFX1NJUCcsXG4gICAgICAnUFJPQ0VTU19PVVRHT0lOR19DQUxMUycsXG4gICAgICAnUkVBRF9DQUxMX0xPRycsXG4gICAgICAnV1JJVEVfQ0FMTF9MT0cnLFxuICAgIF0sXG4gICAgU0VOU09SUzogWydCT0RZX1NFTlNPUlMnXSxcbiAgICBTTVM6IFsnU0VORF9TTVMnLCAnUkVDRUlWRV9TTVMnLCAnUkVBRF9TTVMnLCAnUkVDRUlWRV9XQVBfUFVTSCcsICdSRUNFSVZFX01NUyddLFxuICAgIFNUT1JBR0U6IFsnUkVBRF9FWFRFUk5BTF9TVE9SQUdFJywgJ1dSSVRFX0VYVEVSTkFMX1NUT1JBR0UnXSxcbiAgfTtcblxuICBsb2NhdGlvbk1vZGUgPSB7XG4gICAgSElHSF9BQ0NVUkFDWTogJ2hpZ2hfYWNjdXJhY3knLFxuICAgIERFVklDRV9PTkxZOiAnZGV2aWNlX29ubHknLFxuICAgIEJBVFRFUllfU0FWSU5HOiAnYmF0dGVyeV9zYXZpbmcnLFxuICAgIExPQ0FUSU9OX09GRjogJ2xvY2F0aW9uX29mZicsXG4gIH07XG5cbiAgYmx1ZXRvb3RoU3RhdGUgPSB7XG4gICAgVU5LTk9XTjogJ3Vua25vd24nLFxuICAgIFJFU0VUVElORzogJ3Jlc2V0dGluZycsIC8vIGlPU1xuICAgIFVOU1VQUE9SVEVEOiAndW5zdXBwb3J0ZWQnLCAvLyBpT1NcbiAgICBVTkFVVEhPUklaRUQ6ICd1bmF1dGhvcml6ZWQnLCAvLyBpT1NcbiAgICBQT1dFUkVEX09GRjogJ3Bvd2VyZWRfb2ZmJyxcbiAgICBQT1dFUkVEX09OOiAncG93ZXJlZF9vbicsXG4gICAgUE9XRVJJTkdfT0ZGOiAncG93ZXJpbmdfb2ZmJyxcbiAgICBQT1dFUklOR19PTjogJ3Bvd2VyaW5nX29uJyxcbiAgfTtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgTkZDU3RhdGU6IHtcbiAgICBVTktOT1dOOiBzdHJpbmc7XG4gICAgUE9XRVJFRF9PRkY6IHN0cmluZztcbiAgICBQT1dFUkVEX09OOiBzdHJpbmc7XG4gICAgUE9XRVJJTkdfT046IHN0cmluZztcbiAgICBQT1dFUklOR19PRkY6IHN0cmluZztcbiAgfTtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgbW90aW9uU3RhdHVzOiB7XG4gICAgTk9UX1JFUVVFU1RFRDogc3RyaW5nO1xuICAgIEdSQU5URUQ6IHN0cmluZztcbiAgICBERU5JRUQ6IHN0cmluZztcbiAgICBSRVNUUklDVEVEOiBzdHJpbmc7XG4gICAgTk9UX0FWQUlMQUJMRTogc3RyaW5nO1xuICAgIE5PVF9ERVRFUk1JTkVEOiBzdHJpbmc7XG4gICAgVU5LTk9XTjogc3RyaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYXBwIGlzIGFibGUgdG8gYWNjZXNzIGRldmljZSBsb2NhdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNMb2NhdGlvbkF2YWlsYWJsZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgV2lmaSBpcyBjb25uZWN0ZWQvZW5hYmxlZC4gT24gaU9TIHRoaXMgcmV0dXJucyB0cnVlIGlmIHRoZSBkZXZpY2UgaXMgY29ubmVjdGVkIHRvIGEgbmV0d29yayBieSBXaUZpLiBPbiBBbmRyb2lkIGFuZCBXaW5kb3dzIDEwIE1vYmlsZSB0aGlzIHJldHVybnMgdHJ1ZSBpZiB0aGUgV2lGaSBzZXR0aW5nIGlzIHNldCB0byBlbmFibGVkLlxuICAgKiBPbiBBbmRyb2lkIHRoaXMgcmVxdWlyZXMgcGVybWlzc2lvbi4gYDx1c2VzLXBlcm1pc3Npb24gYW5kcm9pZDpuYW1lPVwiYW5kcm9pZC5wZXJtaXNzaW9uLkFDQ0VTU19XSUZJX1NUQVRFXCIgLz5gXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzV2lmaUF2YWlsYWJsZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGRldmljZSBoYXMgYSBjYW1lcmEuIE9uIEFuZHJvaWQgdGhpcyByZXR1cm5zIHRydWUgaWYgdGhlIGRldmljZSBoYXMgYSBjYW1lcmEuIE9uIGlPUyB0aGlzIHJldHVybnMgdHJ1ZSBpZiBib3RoIHRoZSBkZXZpY2UgaGFzIGEgY2FtZXJhIEFORCB0aGUgYXBwbGljYXRpb24gaXMgYXV0aG9yaXplZCB0byB1c2UgaXQuIE9uIFdpbmRvd3MgMTAgTW9iaWxlIHRoaXMgcmV0dXJucyB0cnVlIGlmIGJvdGggdGhlIGRldmljZSBoYXMgYSByZWFyLWZhY2luZyBjYW1lcmEgQU5EIHRoZVxuICAgKiBhcHBsaWNhdGlvbiBpcyBhdXRob3JpemVkIHRvIHVzZSBpdC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXh0ZXJuYWxTdG9yYWdlXSBBbmRyb2lkIG9ubHk6IElmIHRydWUsIGNoZWNrcyBwZXJtaXNzaW9uIGZvciBSRUFEX0VYVEVSTkFMX1NUT1JBR0UgaW4gYWRkaXRpb24gdG8gQ0FNRVJBIHJ1bi10aW1lIHBlcm1pc3Npb24uXG4gICAqICBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFAMi4yKyByZXF1aXJlcyBib3RoIG9mIHRoZXNlIHBlcm1pc3Npb25zLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgaXNDYW1lcmFBdmFpbGFibGUoZXh0ZXJuYWxTdG9yYWdlPzogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZGV2aWNlIGhhcyBCbHVldG9vdGggY2FwYWJpbGl0aWVzIGFuZCBpZiBzbyB0aGF0IEJsdWV0b290aCBpcyBzd2l0Y2hlZCBvbiAoc2FtZSBvbiBBbmRyb2lkLCBpT1MgYW5kIFdpbmRvd3MgMTAgTW9iaWxlKVxuICAgKiBPbiBBbmRyb2lkIHRoaXMgcmVxdWlyZXMgcGVybWlzc2lvbiA8dXNlcy1wZXJtaXNzaW9uIGFuZHJvaWQ6bmFtZT1cImFuZHJvaWQucGVybWlzc2lvbi5CTFVFVE9PVEhcIiAvPlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0JsdWV0b290aEF2YWlsYWJsZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aGUgZGV2aWNlIGxvY2F0aW9uIHNldHRpbmdzIHRvIGFsbG93IHVzZXIgdG8gZW5hYmxlIGxvY2F0aW9uIHNlcnZpY2VzL2NoYW5nZSBsb2NhdGlvbiBtb2RlLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlLCBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdXaW5kb3dzIDEwJywgJ2lPUyddIH0pXG4gIHN3aXRjaFRvTG9jYXRpb25TZXR0aW5ncygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIG1vYmlsZSBzZXR0aW5ncyB0byBhbGxvdyB1c2VyIHRvIGVuYWJsZSBtb2JpbGUgZGF0YS5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSwgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnV2luZG93cyAxMCddIH0pXG4gIHN3aXRjaFRvTW9iaWxlRGF0YVNldHRpbmdzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogRGlzcGxheXMgQmx1ZXRvb3RoIHNldHRpbmdzIHRvIGFsbG93IHVzZXIgdG8gZW5hYmxlIEJsdWV0b290aC5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSwgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnV2luZG93cyAxMCddIH0pXG4gIHN3aXRjaFRvQmx1ZXRvb3RoU2V0dGluZ3MoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyBXaUZpIHNldHRpbmdzIHRvIGFsbG93IHVzZXIgdG8gZW5hYmxlIFdpRmkuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUsIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ1dpbmRvd3MgMTAnXSB9KVxuICBzd2l0Y2hUb1dpZmlTZXR0aW5ncygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgV2lGaSBzZXR0aW5nIGlzIHNldCB0byBlbmFibGVkLCBhbmQgaXMgdGhlIHNhbWUgYXMgYGlzV2lmaUF2YWlsYWJsZSgpYFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnV2luZG93cyAxMCddIH0pXG4gIGlzV2lmaUVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMvZGlzYWJsZXMgV2lGaSBvbiB0aGUgZGV2aWNlLlxuICAgKiBSZXF1aXJlcyBgQUNDRVNTX1dJRklfU1RBVEVgIGFuZCBgQ0hBTkdFX1dJRklfU1RBVEVgIHBlcm1pc3Npb25zIG9uIEFuZHJvaWRcbiAgICogQHBhcmFtIHtib29sZWFufSBzdGF0ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ1dpbmRvd3MgMTAnXSB9KVxuICBzZXRXaWZpU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzL2Rpc2FibGVzIEJsdWV0b290aCBvbiB0aGUgZGV2aWNlLlxuICAgKiBSZXF1aXJlcyBgQkxVRVRPT1RIYCBhbmQgYEJMVUVUT09USF9BRE1JTmAgcGVybWlzc2lvbnMgb24gQW5kcm9pZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN0YXRlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJywgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnV2luZG93cyAxMCddIH0pXG4gIHNldEJsdWV0b290aFN0YXRlKHN0YXRlOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBBTkRST0lEIEFORCBJT1MgT05MWVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGRldmljZSBzZXR0aW5nIGZvciBsb2NhdGlvbiBpcyBvbi4gT24gQW5kcm9pZCB0aGlzIHJldHVybnMgdHJ1ZSBpZiBMb2NhdGlvbiBNb2RlIGlzIHN3aXRjaGVkIG9uLiBPbiBpT1MgdGhpcyByZXR1cm5zIHRydWUgaWYgTG9jYXRpb24gU2VydmljZXMgaXMgc3dpdGNoZWQgb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSB9KVxuICBpc0xvY2F0aW9uRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBhcHBsaWNhdGlvbiBpcyBhdXRob3JpemVkIHRvIHVzZSBsb2NhdGlvbi5cbiAgICogTm90ZSBmb3IgQW5kcm9pZDogdGhpcyBpcyBpbnRlbmRlZCBmb3IgQW5kcm9pZCA2IC8gQVBJIDIzIGFuZCBhYm92ZS4gQ2FsbGluZyBvbiBBbmRyb2lkIDUgLyBBUEkgMjIgYW5kIGJlbG93IHdpbGwgYWx3YXlzIHJldHVybiBHUkFOVEVEIHN0YXR1cyBhcyBwZXJtaXNzaW9ucyBhcmUgYWxyZWFkeSBncmFudGVkIGF0IGluc3RhbGxhdGlvbiB0aW1lLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0xvY2F0aW9uQXV0aG9yaXplZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsb2NhdGlvbiBhdXRob3JpemF0aW9uIHN0YXR1cyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSB9KVxuICBnZXRMb2NhdGlvbkF1dGhvcml6YXRpb25TdGF0dXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbG9jYXRpb24gYXV0aG9yaXphdGlvbiBzdGF0dXMgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAgICogTm90ZSBmb3IgQW5kcm9pZDogdGhpcyBpcyBpbnRlbmRlZCBmb3IgQW5kcm9pZCA2IC8gQVBJIDIzIGFuZCBhYm92ZS4gQ2FsbGluZyBvbiBBbmRyb2lkIDUgLyBBUEkgMjIgYW5kIGJlbG93IHdpbGwgYWx3YXlzIHJldHVybiBHUkFOVEVEIHN0YXR1cyBhcyBwZXJtaXNzaW9ucyBhcmUgYWxyZWFkeSBncmFudGVkIGF0IGluc3RhbGxhdGlvbiB0aW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW21vZGVdIGlPUyBvbmx5OiBsb2NhdGlvbiBhdXRob3JpemF0aW9uIG1vZGU6IFwiYWx3YXlzXCIgb3IgXCJ3aGVuX2luX3VzZVwiLiBJZiBub3Qgc3BlY2lmaWVkLCBkZWZhdWx0cyB0byBcIndoZW5faW5fdXNlXCIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVxdWVzdExvY2F0aW9uQXV0aG9yaXphdGlvbihtb2RlPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGNhbWVyYSBoYXJkd2FyZSBpcyBwcmVzZW50IG9uIGRldmljZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gfSlcbiAgaXNDYW1lcmFQcmVzZW50KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgYXBwbGljYXRpb24gaXMgYXV0aG9yaXplZCB0byB1c2UgdGhlIGNhbWVyYS5cbiAgICogTm90ZSBmb3IgQW5kcm9pZDogdGhpcyBpcyBpbnRlbmRlZCBmb3IgQW5kcm9pZCA2IC8gQVBJIDIzIGFuZCBhYm92ZS4gQ2FsbGluZyBvbiBBbmRyb2lkIDUgLyBBUEkgMjIgYW5kIGJlbG93IHdpbGwgYWx3YXlzIHJldHVybiBUUlVFIGFzIHBlcm1pc3Npb25zIGFyZSBhbHJlYWR5IGdyYW50ZWQgYXQgaW5zdGFsbGF0aW9uIHRpbWUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V4dGVybmFsU3RvcmFnZV0gQW5kcm9pZCBvbmx5OiBJZiB0cnVlLCBjaGVja3MgcGVybWlzc2lvbiBmb3IgUkVBRF9FWFRFUk5BTF9TVE9SQUdFIGluIGFkZGl0aW9uIHRvIENBTUVSQSBydW4tdGltZSBwZXJtaXNzaW9uLlxuICAgKiAgY29yZG92YS1wbHVnaW4tY2FtZXJhQDIuMisgcmVxdWlyZXMgYm90aCBvZiB0aGVzZSBwZXJtaXNzaW9ucy4gRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBpc0NhbWVyYUF1dGhvcml6ZWQoZXh0ZXJuYWxTdG9yYWdlPzogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNhbWVyYSBhdXRob3JpemF0aW9uIHN0YXR1cyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtleHRlcm5hbFN0b3JhZ2VdIEFuZHJvaWQgb25seTogSWYgdHJ1ZSwgY2hlY2tzIHBlcm1pc3Npb24gZm9yIFJFQURfRVhURVJOQUxfU1RPUkFHRSBpbiBhZGRpdGlvbiB0byBDQU1FUkEgcnVuLXRpbWUgcGVybWlzc2lvbi5cbiAgICogIGNvcmRvdmEtcGx1Z2luLWNhbWVyYUAyLjIrIHJlcXVpcmVzIGJvdGggb2YgdGhlc2UgcGVybWlzc2lvbnMuIERlZmF1bHRzIHRvIHRydWUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgZ2V0Q2FtZXJhQXV0aG9yaXphdGlvblN0YXR1cyhleHRlcm5hbFN0b3JhZ2U/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdHMgY2FtZXJhIGF1dGhvcml6YXRpb24gZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXh0ZXJuYWxTdG9yYWdlXSBBbmRyb2lkIG9ubHk6IElmIHRydWUsIHJlcXVlc3RzIHBlcm1pc3Npb24gZm9yIFJFQURfRVhURVJOQUxfU1RPUkFHRSBpbiBhZGRpdGlvbiB0byBDQU1FUkEgcnVuLXRpbWUgcGVybWlzc2lvbi5cbiAgICogIGNvcmRvdmEtcGx1Z2luLWNhbWVyYUAyLjIrIHJlcXVpcmVzIGJvdGggb2YgdGhlc2UgcGVybWlzc2lvbnMuIERlZmF1bHRzIHRvIHRydWUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVxdWVzdENhbWVyYUF1dGhvcml6YXRpb24oZXh0ZXJuYWxTdG9yYWdlPzogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgYXBwbGljYXRpb24gaXMgYXV0aG9yaXplZCB0byB1c2UgdGhlIG1pY3JvcGhvbmUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSB9KVxuICBpc01pY3JvcGhvbmVBdXRob3JpemVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtaWNyb3Bob25lIGF1dGhvcml6YXRpb24gc3RhdHVzIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddIH0pXG4gIGdldE1pY3JvcGhvbmVBdXRob3JpemF0aW9uU3RhdHVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIG1pY3JvcGhvbmUgYXV0aG9yaXphdGlvbiBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSB9KVxuICByZXF1ZXN0TWljcm9waG9uZUF1dGhvcml6YXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBhcHBsaWNhdGlvbiBpcyBhdXRob3JpemVkIHRvIHVzZSBjb250YWN0cyAoYWRkcmVzcyBib29rKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddIH0pXG4gIGlzQ29udGFjdHNBdXRob3JpemVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb250YWN0cyBhdXRob3JpemF0aW9uIHN0YXR1cyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSB9KVxuICBnZXRDb250YWN0c0F1dGhvcml6YXRpb25TdGF0dXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdHMgY29udGFjdHMgYXV0aG9yaXphdGlvbiBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSB9KVxuICByZXF1ZXN0Q29udGFjdHNBdXRob3JpemF0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgYXBwbGljYXRpb24gaXMgYXV0aG9yaXplZCB0byB1c2UgdGhlIGNhbGVuZGFyLlxuICAgKlxuICAgKiBOb3RlcyBmb3IgQW5kcm9pZDpcbiAgICogICAtIFRoaXMgaXMgaW50ZW5kZWQgZm9yIEFuZHJvaWQgNiAvIEFQSSAyMyBhbmQgYWJvdmUuIENhbGxpbmcgb24gQW5kcm9pZCA1IC8gQVBJIDIyIGFuZCBiZWxvdyB3aWxsIGFsd2F5cyByZXR1cm4gVFJVRSBhcyBwZXJtaXNzaW9ucyBhcmUgYWxyZWFkeSBncmFudGVkIGF0IGluc3RhbGxhdGlvbiB0aW1lLlxuICAgKlxuICAgKiBOb3RlcyBmb3IgaU9TOlxuICAgKiAgIC0gVGhpcyByZWxhdGVzIHRvIENhbGVuZGFyIEV2ZW50cyAobm90IENhbGVuZGFyIFJlbWluZGVycylcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddIH0pXG4gIGlzQ2FsZW5kYXJBdXRob3JpemVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjYWxlbmRhciBhdXRob3JpemF0aW9uIHN0YXR1cyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgKlxuICAgKiBOb3RlcyBmb3IgQW5kcm9pZDpcbiAgICogICAtIFRoaXMgaXMgaW50ZW5kZWQgZm9yIEFuZHJvaWQgNiAvIEFQSSAyMyBhbmQgYWJvdmUuIENhbGxpbmcgb24gQW5kcm9pZCA1IC8gQVBJIDIyIGFuZCBiZWxvdyB3aWxsIGFsd2F5cyByZXR1cm4gYEdSQU5URURgIHN0YXR1cyBhcyBwZXJtaXNzaW9ucyBhcmUgYWxyZWFkeSBncmFudGVkIGF0IGluc3RhbGxhdGlvbiB0aW1lLlxuICAgKlxuICAgKiBOb3RlcyBmb3IgaU9TOlxuICAgKiAgIC0gVGhpcyByZWxhdGVzIHRvIENhbGVuZGFyIEV2ZW50cyAobm90IENhbGVuZGFyIFJlbWluZGVycylcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gfSlcbiAgZ2V0Q2FsZW5kYXJBdXRob3JpemF0aW9uU3RhdHVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIGNhbGVuZGFyIGF1dGhvcml6YXRpb24gZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAgICpcbiAgICogTm90ZXMgZm9yIGlPUzpcbiAgICogICAtIFNob3VsZCBvbmx5IGJlIGNhbGxlZCBpZiBhdXRob3JpemF0aW9uIHN0YXR1cyBpcyBOT1RfREVURVJNSU5FRC4gQ2FsbGluZyBpdCB3aGVuIGluIGFueSBvdGhlciBzdGF0ZSB3aWxsIGhhdmUgbm8gZWZmZWN0IGFuZCBqdXN0IHJldHVybiB0aGUgY3VycmVudCBhdXRob3JpemF0aW9uIHN0YXR1cy5cbiAgICogICAtIFRoaXMgcmVsYXRlcyB0byBDYWxlbmRhciBFdmVudHMgKG5vdCBDYWxlbmRhciBSZW1pbmRlcnMpXG4gICAqXG4gICAqIE5vdGVzIGZvciBBbmRyb2lkOlxuICAgKiAgIC0gVGhpcyBpcyBpbnRlbmRlZCBmb3IgQW5kcm9pZCA2IC8gQVBJIDIzIGFuZCBhYm92ZS4gQ2FsbGluZyBvbiBBbmRyb2lkIDUgLyBBUEkgMjIgYW5kIGJlbG93IHdpbGwgaGF2ZSBubyBlZmZlY3QgYXMgdGhlIHBlcm1pc3Npb25zIGFyZSBhbHJlYWR5IGdyYW50ZWQgYXQgaW5zdGFsbGF0aW9uIHRpbWUuXG4gICAqICAgLSBUaGlzIHJlcXVlc3RzIHBlcm1pc3Npb24gZm9yIGBSRUFEX0NBTEVOREFSYCBydW4tdGltZSBwZXJtaXNzaW9uXG4gICAqICAgLSBSZXF1aXJlZCBwZXJtaXNzaW9ucyBtdXN0IGJlIGFkZGVkIHRvIGBBbmRyb2lkTWFuaWZlc3QueG1sYCBhcyBhcHByb3ByaWF0ZSAtIHNlZSBBbmRyb2lkIHBlcm1pc3Npb25zOiBgUkVBRF9DQUxFTkRBUmAsIGBXUklURV9DQUxFTkRBUmBcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gfSlcbiAgcmVxdWVzdENhbGVuZGFyQXV0aG9yaXphdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBzZXR0aW5ncyBwYWdlIGZvciB0aGlzIGFwcC5cbiAgICogT24gQW5kcm9pZCwgdGhpcyBvcGVucyB0aGUgXCJBcHAgSW5mb1wiIHBhZ2UgaW4gdGhlIFNldHRpbmdzIGFwcC5cbiAgICogT24gaU9TLCB0aGlzIG9wZW5zIHRoZSBhcHAgc2V0dGluZ3MgcGFnZSBpbiB0aGUgU2V0dGluZ3MgYXBwLiBUaGlzIHdvcmtzIG9ubHkgb24gaU9TIDgrIC0gaU9TIDcgYW5kIGJlbG93IHdpbGwgaW52b2tlIHRoZSBlcnJvckNhbGxiYWNrLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSB9KVxuICBzd2l0Y2hUb1NldHRpbmdzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN0YXRlIG9mIEJsdWV0b290aCBvbiB0aGUgZGV2aWNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSB9KVxuICBnZXRCbHVldG9vdGhTdGF0ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBhIGNoYW5nZSBpbiBCbHVldG9vdGggc3RhdGUgb2NjdXJzLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCBzeW5jOiB0cnVlIH0pXG4gIHJlZ2lzdGVyQmx1ZXRvb3RoU3RhdGVDaGFuZ2VIYW5kbGVyKGhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBhIGNoYW5nZSBpbiBMb2NhdGlvbiBzdGF0ZSBvY2N1cnMuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sIHN5bmM6IHRydWUgfSlcbiAgcmVnaXN0ZXJMb2NhdGlvblN0YXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge31cblxuICAvLyBBTkRST0lEIE9OTFlcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGhpZ2gtYWNjdXJhY3kgbG9jYXRpb25zIGFyZSBhdmFpbGFibGUgdG8gdGhlIGFwcCBmcm9tIEdQUyBoYXJkd2FyZS5cbiAgICogUmV0dXJucyB0cnVlIGlmIExvY2F0aW9uIG1vZGUgaXMgZW5hYmxlZCBhbmQgaXMgc2V0IHRvIFwiRGV2aWNlIG9ubHlcIiBvciBcIkhpZ2ggYWNjdXJhY3lcIiBBTkQgaWYgdGhlIGFwcCBpcyBhdXRob3JpemVkIHRvIHVzZSBsb2NhdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgaXNHcHNMb2NhdGlvbkF2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGxvY2F0aW9uIG1vZGUgaXMgc2V0IHRvIHJldHVybiBoaWdoLWFjY3VyYWN5IGxvY2F0aW9ucyBmcm9tIEdQUyBoYXJkd2FyZS5cbiAgICogICBSZXR1cm5zIHRydWUgaWYgTG9jYXRpb24gbW9kZSBpcyBlbmFibGVkIGFuZCBpcyBzZXQgdG8gZWl0aGVyOlxuICAgKiAgIC0gRGV2aWNlIG9ubHkgPSBHUFMgaGFyZHdhcmUgb25seSAoaGlnaCBhY2N1cmFjeSlcbiAgICogICAtIEhpZ2ggYWNjdXJhY3kgPSBHUFMgaGFyZHdhcmUsIG5ldHdvcmsgdHJpYW5ndWxhdGlvbiBhbmQgV2lmaSBuZXR3b3JrIElEcyAoaGlnaCBhbmQgbG93IGFjY3VyYWN5KVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXG4gIGlzR3BzTG9jYXRpb25FbmFibGVkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBsb3ctYWNjdXJhY3kgbG9jYXRpb25zIGFyZSBhdmFpbGFibGUgdG8gdGhlIGFwcCBmcm9tIG5ldHdvcmsgdHJpYW5ndWxhdGlvbi9XaUZpIGFjY2VzcyBwb2ludHMuXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBMb2NhdGlvbiBtb2RlIGlzIGVuYWJsZWQgYW5kIGlzIHNldCB0byBcIkJhdHRlcnkgc2F2aW5nXCIgb3IgXCJIaWdoIGFjY3VyYWN5XCIgQU5EIGlmIHRoZSBhcHAgaXMgYXV0aG9yaXplZCB0byB1c2UgbG9jYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgaXNOZXR3b3JrTG9jYXRpb25BdmFpbGFibGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGxvY2F0aW9uIG1vZGUgaXMgc2V0IHRvIHJldHVybiBsb3ctYWNjdXJhY3kgbG9jYXRpb25zIGZyb20gbmV0d29yayB0cmlhbmd1bGF0aW9uL1dpRmkgYWNjZXNzIHBvaW50cy5cbiAgICogUmV0dXJucyB0cnVlIGlmIExvY2F0aW9uIG1vZGUgaXMgZW5hYmxlZCBhbmQgaXMgc2V0IHRvIGVpdGhlcjpcbiAgICogICAtIEJhdHRlcnkgc2F2aW5nID0gbmV0d29yayB0cmlhbmd1bGF0aW9uIGFuZCBXaWZpIG5ldHdvcmsgSURzIChsb3cgYWNjdXJhY3kpXG4gICAqICAgLSBIaWdoIGFjY3VyYWN5ID0gR1BTIGhhcmR3YXJlLCBuZXR3b3JrIHRyaWFuZ3VsYXRpb24gYW5kIFdpZmkgbmV0d29yayBJRHMgKGhpZ2ggYW5kIGxvdyBhY2N1cmFjeSlcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSB9KVxuICBpc05ldHdvcmtMb2NhdGlvbkVuYWJsZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBsb2NhdGlvbiBtb2RlIHNldHRpbmcgZm9yIHRoZSBkZXZpY2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgZ2V0TG9jYXRpb25Nb2RlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgYXV0aG9yaXphdGlvbiBzdGF0dXMgZm9yIGEgZ2l2ZW4gcGVybWlzc2lvbi5cbiAgICogTm90ZTogdGhpcyBpcyBpbnRlbmRlZCBmb3IgQW5kcm9pZCA2IC8gQVBJIDIzIGFuZCBhYm92ZS4gQ2FsbGluZyBvbiBBbmRyb2lkIDUgLyBBUEkgMjIgYW5kIGJlbG93IHdpbGwgYWx3YXlzIHJldHVybiBHUkFOVEVEIHN0YXR1cyBhcyBwZXJtaXNzaW9ucyBhcmUgYWxyZWFkeSBncmFudGVkIGF0IGluc3RhbGxhdGlvbiB0aW1lLlxuICAgKiBAcGFyYW0gcGVybWlzc2lvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLCBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgZ2V0UGVybWlzc2lvbkF1dGhvcml6YXRpb25TdGF0dXMocGVybWlzc2lvbjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBhdXRob3JpemF0aW9uIHN0YXR1cyBmb3IgbXVsdGlwbGUgcGVybWlzc2lvbnMuXG4gICAqIE5vdGU6IHRoaXMgaXMgaW50ZW5kZWQgZm9yIEFuZHJvaWQgNiAvIEFQSSAyMyBhbmQgYWJvdmUuIENhbGxpbmcgb24gQW5kcm9pZCA1IC8gQVBJIDIyIGFuZCBiZWxvdyB3aWxsIGFsd2F5cyByZXR1cm4gR1JBTlRFRCBzdGF0dXMgYXMgcGVybWlzc2lvbnMgYXJlIGFscmVhZHkgZ3JhbnRlZCBhdCBpbnN0YWxsYXRpb24gdGltZS5cbiAgICogQHBhcmFtIHthbnlbXX0gcGVybWlzc2lvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSwgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGdldFBlcm1pc3Npb25zQXV0aG9yaXphdGlvblN0YXR1cyhwZXJtaXNzaW9uczogYW55W10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0cyBhcHAgdG8gYmUgZ3JhbnRlZCBhdXRob3JpemF0aW9uIGZvciBhIHJ1bnRpbWUgcGVybWlzc2lvbi5cbiAgICogTm90ZTogdGhpcyBpcyBpbnRlbmRlZCBmb3IgQW5kcm9pZCA2IC8gQVBJIDIzIGFuZCBhYm92ZS4gQ2FsbGluZyBvbiBBbmRyb2lkIDUgLyBBUEkgMjIgYW5kIGJlbG93IHdpbGwgaGF2ZSBubyBlZmZlY3QgYXMgdGhlIHBlcm1pc3Npb25zIGFyZSBhbHJlYWR5IGdyYW50ZWQgYXQgaW5zdGFsbGF0aW9uIHRpbWUuXG4gICAqIEBwYXJhbSBwZXJtaXNzaW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10sIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZXF1ZXN0UnVudGltZVBlcm1pc3Npb24ocGVybWlzc2lvbjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdHMgYXBwIHRvIGJlIGdyYW50ZWQgYXV0aG9yaXphdGlvbiBmb3IgbXVsdGlwbGUgcnVudGltZSBwZXJtaXNzaW9ucy5cbiAgICogTm90ZTogdGhpcyBpcyBpbnRlbmRlZCBmb3IgQW5kcm9pZCA2IC8gQVBJIDIzIGFuZCBhYm92ZS4gQ2FsbGluZyBvbiBBbmRyb2lkIDUgLyBBUEkgMjIgYW5kIGJlbG93IHdpbGwgYWx3YXlzIHJldHVybiBHUkFOVEVEIHN0YXR1cyBhcyBwZXJtaXNzaW9ucyBhcmUgYWxyZWFkeSBncmFudGVkIGF0IGluc3RhbGxhdGlvbiB0aW1lLlxuICAgKiBAcGFyYW0ge2FueVtdfSBwZXJtaXNzaW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLCBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVxdWVzdFJ1bnRpbWVQZXJtaXNzaW9ucyhwZXJtaXNzaW9uczogYW55W10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHBsdWdpbiBpcyBjdXJyZW50bHkgcmVxdWVzdGluZyBhIHJ1bnRpbWUgcGVybWlzc2lvbiB2aWEgdGhlIG5hdGl2ZSBBUEkuXG4gICAqIE5vdGUgdGhhdCBvbmx5IG9uZSByZXF1ZXN0IGNhbiBiZSBtYWRlIGNvbmN1cnJlbnRseSBiZWNhdXNlIHRoZSBuYXRpdmUgQVBJIGNhbm5vdCBoYW5kbGUgY29uY3VycmVudCByZXF1ZXN0cyxcbiAgICogc28gdGhlIHBsdWdpbiB3aWxsIGludm9rZSB0aGUgZXJyb3IgY2FsbGJhY2sgaWYgYXR0ZW1wdGluZyB0byBtYWtlIG1vcmUgdGhhbiBvbmUgc2ltdWx0YW5lb3VzIHJlcXVlc3QuXG4gICAqIE11bHRpcGxlIHBlcm1pc3Npb24gcmVxdWVzdHMgc2hvdWxkIGJlIGdyb3VwZWQgaW50byBhIHNpbmdsZSBjYWxsIHNpbmNlIHRoZSBuYXRpdmUgQVBJIGlzIHNldHVwIHRvIGhhbmRsZSBiYXRjaCByZXF1ZXN0cyBvZiBtdWx0aXBsZSBwZXJtaXNzaW9uIGdyb3Vwcy5cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgaXNSZXF1ZXN0aW5nUGVybWlzc2lvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gYSBydW50aW1lIHBlcm1pc3Npb24gcmVxdWVzdCBoYXMgY29tcGxldGVkLlxuICAgKiBQYXNzIGluIGEgZmFsc3kgdmFsdWUgdG8gZGUtcmVnaXN0ZXIgdGhlIGN1cnJlbnRseSByZWdpc3RlcmVkIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVnaXN0ZXJQZXJtaXNzaW9uUmVxdWVzdENvbXBsZXRlSGFuZGxlcihoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGRldmljZSBzZXR0aW5nIGZvciBCbHVldG9vdGggaXMgc3dpdGNoZWQgb24uXG4gICAqIFRoaXMgcmVxdWlyZXMgYEJMVUVUT09USGAgcGVybWlzc2lvbiBvbiBBbmRyb2lkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXG4gIGlzQmx1ZXRvb3RoRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBkZXZpY2UgaGFzIEJsdWV0b290aCBjYXBhYmlsaXRpZXMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXG4gIGhhc0JsdWV0b290aFN1cHBvcnQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZGV2aWNlIGhhcyBCbHVldG9vdGggTG93IEVuZXJneSAoTEUpIGNhcGFiaWxpdGllcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgaGFzQmx1ZXRvb3RoTEVTdXBwb3J0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGRldmljZSBzdXBwb3J0cyBCbHVldG9vdGggTG93IEVuZXJneSAoTEUpIFBlcmlwaGVyYWwgbW9kZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgaGFzQmx1ZXRvb3RoTEVQZXJpcGhlcmFsU3VwcG9ydCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBhcHBsaWNhdGlvbiBpcyBhdXRob3JpemVkIHRvIHVzZSBleHRlcm5hbCBzdG9yYWdlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSB9KVxuICBpc0V4dGVybmFsU3RvcmFnZUF1dGhvcml6ZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENSZXR1cm5zIHRoZSBleHRlcm5hbCBzdG9yYWdlIGF1dGhvcml6YXRpb24gc3RhdHVzIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXG4gIGdldEV4dGVybmFsU3RvcmFnZUF1dGhvcml6YXRpb25TdGF0dXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdHMgZXh0ZXJuYWwgc3RvcmFnZSBhdXRob3JpemF0aW9uIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgcmVxdWVzdEV4dGVybmFsU3RvcmFnZUF1dGhvcml6YXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBkZXRhaWxzIG9mIGV4dGVybmFsIFNEIGNhcmQocyk6IGFic29sdXRlIHBhdGgsIGlzIHdyaXRhYmxlLCBmcmVlIHNwYWNlLlxuICAgKlxuICAgKiBUaGUgaW50ZW50aW9uIG9mIHRoaXMgbWV0aG9kIGlzIHRvIHJldHVybiB0aGUgbG9jYXRpb24gYW5kIGRldGFpbHMgb2YgcmVtb3ZhYmxlIGV4dGVybmFsIFNEIGNhcmRzLlxuICAgKiBUaGlzIGRpZmZlcnMgZnJvbSB0aGUgXCJleHRlcm5hbCBkaXJlY3Rvcmllc1wiIHJldHVybmVkIGJ5IGNvcmRvdmEtcGx1Z2luLWZpbGUgd2hpY2ggcmV0dXJuIG1vdW50IHBvaW50cyByZWxhdGluZyB0byBub24tcmVtb3ZhYmxlIChpbnRlcm5hbCkgc3RvcmFnZS5cbiAgICpcbiAgICogTGVhcm4gbW9yZSBhYm91dCB0aGlzIG1ldGhvZCBbaGVyZV0oaHR0cHM6Ly9naXRodWIuY29tL2RwYTk5Yy9jb3Jkb3ZhLWRpYWdub3N0aWMtcGx1Z2luI2dldGV4dGVybmFsc2RjYXJkZGV0YWlscylcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSB9KVxuICBnZXRFeHRlcm5hbFNkQ2FyZERldGFpbHMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoZXMgdG8gdGhlIHdpcmVsZXNzIHNldHRpbmdzIHBhZ2UgaW4gdGhlIFNldHRpbmdzIGFwcC4gQWxsb3dzIGNvbmZpZ3VyYXRpb24gb2Ygd2lyZWxlc3MgY29udHJvbHMgc3VjaCBhcyBXaS1GaSwgQmx1ZXRvb3RoIGFuZCBNb2JpbGUgbmV0d29ya3MuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzd2l0Y2hUb1dpcmVsZXNzU2V0dGluZ3MoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyBORkMgc2V0dGluZ3MgdG8gYWxsb3cgdXNlciB0byBlbmFibGUgTkZDLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc3dpdGNoVG9ORkNTZXR0aW5ncygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBORkMgaGFyZHdhcmUgaXMgcHJlc2VudCBvbiBkZXZpY2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXG4gIGlzTkZDUHJlc2VudCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBkZXZpY2Ugc2V0dGluZyBmb3IgTkZDIGlzIHN3aXRjaGVkIG9uLlxuICAgKiBOb3RlOiB0aGlzIG9wZXJhdGlvbiBkb2VzIG5vdCByZXF1aXJlIE5GQyBwZXJtaXNzaW9uIGluIHRoZSBtYW5pZmVzdC5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgaXNORkNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgTkZDIGlzIGF2YWlsYWJsZSB0byB0aGUgYXBwLiBSZXR1cm5zIHRydWUgaWYgdGhlIGRldmljZSBoYXMgTkZDIGNhcGFiaWxpdGllcyBBTkQgaWYgTkZDIHNldHRpbmcgaXMgc3dpdGNoZWQgb24uXG4gICAqIE5vdGU6IHRoaXMgb3BlcmF0aW9uIGRvZXMgbm90IHJlcXVpcmUgTkZDIHBlcm1pc3Npb24gaW4gdGhlIG1hbmlmZXN0LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXG4gIGlzTkZDQXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBhIGNoYW5nZSBpbiBORkMgc3RhdGUgb2NjdXJzLiBQYXNzIGluIGEgZmFsc3kgdmFsdWUgdG8gZGUtcmVnaXN0ZXIgdGhlIGN1cnJlbnRseSByZWdpc3RlcmVkIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kZXIgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gTkZDIHN0YXRlIGNoYW5nZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHJlZ2lzdGVyTkZDU3RhdGVDaGFuZ2VIYW5kbGVyKGhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGRldmljZSBkYXRhIHJvYW1pbmcgc2V0dGluZyBpcyBlbmFibGVkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSB9KVxuICBpc0RhdGFSb2FtaW5nRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBkZXZpY2Ugc2V0dGluZyBmb3IgQURCKGRlYnVnKSBpcyBzd2l0Y2hlZCBvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgaXNBREJNb2RlRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBkZXZpY2UgaXMgcm9vdGVkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSB9KVxuICBpc0RldmljZVJvb3RlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBJT1MgT05MWVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGFwcGxpY2F0aW9uIGlzIGF1dGhvcml6ZWQgdG8gdXNlIHRoZSBDYW1lcmEgUm9sbCBpbiBQaG90b3MgYXBwLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIGlzQ2FtZXJhUm9sbEF1dGhvcml6ZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGF1dGhvcml6YXRpb24gc3RhdHVzIGZvciB0aGUgYXBwbGljYXRpb24gdG8gdXNlIHRoZSBDYW1lcmEgUm9sbCBpbiBQaG90b3MgYXBwLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgZ2V0Q2FtZXJhUm9sbEF1dGhvcml6YXRpb25TdGF0dXMoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdHMgY2FtZXJhIHJvbGwgYXV0aG9yaXphdGlvbiBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBTaG91bGQgb25seSBiZSBjYWxsZWQgaWYgYXV0aG9yaXphdGlvbiBzdGF0dXMgaXMgTk9UX1JFUVVFU1RFRC5cbiAgICogQ2FsbGluZyBpdCB3aGVuIGluIGFueSBvdGhlciBzdGF0ZSB3aWxsIGhhdmUgbm8gZWZmZWN0LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgcmVxdWVzdENhbWVyYVJvbGxBdXRob3JpemF0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiByZW1vdGUgKHB1c2gpIG5vdGlmaWNhdGlvbnMgYXJlIGVuYWJsZWQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSB9KVxuICBpc1JlbW90ZU5vdGlmaWNhdGlvbnNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIGFwcCBpcyByZWdpc3RlcmVkIGZvciByZW1vdGUgKHB1c2gpIG5vdGlmaWNhdGlvbnMgb24gdGhlIGRldmljZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICBpc1JlZ2lzdGVyZWRGb3JSZW1vdGVOb3RpZmljYXRpb25zKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhdXRob3JpemF0aW9uIHN0YXR1cyBmb3IgdGhlIGFwcGxpY2F0aW9uIHRvIHVzZSBSZW1vdGUgTm90aWZpY2F0aW9ucy5cbiAgICogTm90ZTogV29ya3Mgb24gaU9TIDEwKyBvbmx5IChpT1MgOSBhbmQgYmVsb3cgd2lsbCBpbnZva2UgdGhlIGVycm9yIGNhbGxiYWNrKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIGdldFJlbW90ZU5vdGlmaWNhdGlvbnNBdXRob3JpemF0aW9uU3RhdHVzKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIHJlbWluZGVycyBhdXRob3JpemF0aW9uIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICByZXF1ZXN0UmVtb3RlTm90aWZpY2F0aW9uc0F1dGhvcml6YXRpb24odHlwZXM/OiBzdHJpbmdbXSwgb21pdFJlZ2lzdHJhdGlvbj86IGJvb2xlYW4pOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgc2V0dGluZyBvZiBub3RpZmljYXRpb24gdHlwZXMgZm9yIHRoZSBhcHAgaW4gdGhlIFNldHRpbmdzIGFwcC5cbiAgICogTm90ZTogb24gaU9TIDgrLCBpZiBcIkFsbG93IE5vdGlmaWNhdGlvbnNcIiBzd2l0Y2ggaXMgT0ZGLCBhbGwgdHlwZXMgd2lsbCBiZSByZXR1cm5lZCBhcyBkaXNhYmxlZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIGdldFJlbW90ZU5vdGlmaWNhdGlvblR5cGVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgYXBwbGljYXRpb24gaXMgYXV0aG9yaXplZCB0byB1c2UgcmVtaW5kZXJzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIGlzUmVtaW5kZXJzQXV0aG9yaXplZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVtaW5kZXJzIGF1dGhvcml6YXRpb24gc3RhdHVzIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICBnZXRSZW1pbmRlcnNBdXRob3JpemF0aW9uU3RhdHVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIHJlbWluZGVycyBhdXRob3JpemF0aW9uIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICByZXF1ZXN0UmVtaW5kZXJzQXV0aG9yaXphdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGFwcGxpY2F0aW9uIGlzIGF1dGhvcml6ZWQgZm9yIGJhY2tncm91bmQgcmVmcmVzaC5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICBpc0JhY2tncm91bmRSZWZyZXNoQXV0aG9yaXplZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYmFja2dyb3VuZCByZWZyZXNoIGF1dGhvcml6YXRpb24gc3RhdHVzIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICBnZXRCYWNrZ3JvdW5kUmVmcmVzaFN0YXR1cygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0cyBCbHVldG9vdGggYXV0aG9yaXphdGlvbiBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgKlxuICAgKiBMZWFybiBtb3JlIGFib3V0IHRoaXMgbWV0aG9kIFtoZXJlXShodHRwczovL2dpdGh1Yi5jb20vZHBhOTljL2NvcmRvdmEtZGlhZ25vc3RpYy1wbHVnaW4jcmVxdWVzdGJsdWV0b290aGF1dGhvcml6YXRpb24pXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIHJlcXVlc3RCbHVldG9vdGhBdXRob3JpemF0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBtb3Rpb24gdHJhY2tpbmcgaXMgYXZhaWxhYmxlIG9uIHRoZSBjdXJyZW50IGRldmljZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIGlzTW90aW9uQXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgaXQncyBwb3NzaWJsZSB0byBkZXRlcm1pbmUgdGhlIG91dGNvbWUgb2YgYSBtb3Rpb24gYXV0aG9yaXphdGlvbiByZXF1ZXN0IG9uIHRoZSBjdXJyZW50IGRldmljZS5cbiAgICogVGhlcmUncyBubyBkaXJlY3Qgd2F5IHRvIGRldGVybWluZSBpZiBhdXRob3JpemF0aW9uIHdhcyBncmFudGVkIG9yIGRlbmllZCwgc28gdGhlIFBlZG9tZXRlciBBUEkgbXVzdCBiZSB1c2VkIHRvIGluZGlyZWN0bHkgZGV0ZXJtaW5lIHRoaXM6XG4gICAqIHRoZXJlZm9yZSwgaWYgdGhlIGRldmljZSBzdXBwb3J0cyBtb3Rpb24gdHJhY2tpbmcgYnV0IG5vdCBQZWRvbWV0ZXIgRXZlbnQgVHJhY2tpbmcsIHRoZSBvdXRjb21lIG9mIHJlcXVlc3RpbmcgbW90aW9uIGRldGVjdGlvbiBjYW5ub3QgYmUgZGV0ZXJtaW5lZC5cbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIGlzTW90aW9uUmVxdWVzdE91dGNvbWVBdmFpbGFibGUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIG1vdGlvbiB0cmFja2luZyBhdXRob3JpemF0aW9uIGZvciB0aGUgYXBwbGljYXRpb24uXG4gICAqXG4gICAqIExlYXJuIG1vcmUgYWJvdXQgdGhpcyBtZXRob2QgW2hlcmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9kcGE5OWMvY29yZG92YS1kaWFnbm9zdGljLXBsdWdpbiNyZXF1ZXN0bW90aW9uYXV0aG9yaXphdGlvbilcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgcmVxdWVzdE1vdGlvbkF1dGhvcml6YXRpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIG1vdGlvbiBhdXRob3JpemF0aW9uIHN0YXR1cyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICAgKlxuICAgKiBMZWFybiBtb3JlIGFib3V0IHRoaXMgbWV0aG9kIFtoZXJlXShodHRwczovL2dpdGh1Yi5jb20vZHBhOTljL2NvcmRvdmEtZGlhZ25vc3RpYy1wbHVnaW4jZ2V0bW90aW9uYXV0aG9yaXphdGlvbnN0YXR1cylcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgZ2V0TW90aW9uQXV0aG9yaXphdGlvblN0YXR1cygpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsb2NhdGlvbiBhY2N1cmFjeSBhdXRob3JpemF0aW9uIGZvciB0aGUgYXBwbGljYXRpb24gb24gaU9TIDE0Ky4gTm90ZTogY2FsbGluZyBvbiBpT1MgPDE0IHdpbGwgcmVzdWx0IGluIHRoZSBQcm9taXNlIGJlaW5nIHJlamVjdGVkLlxuICAgKlxuICAgKiBMZWFybiBtb3JlIGFib3V0IHRoaXMgbWV0aG9kIFtoZXJlXShodHRwczovL2dpdGh1Yi5jb20vZHBhOTljL2NvcmRvdmEtZGlhZ25vc3RpYy1wbHVnaW4jZ2V0bG9jYXRpb25hY2N1cmFjeWF1dGhvcml6YXRpb24pXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm06IFsnaU9TJ10gfSlcbiAgZ2V0TG9jYXRpb25BY2N1cmFjeUF1dGhvcml6YXRpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdHMgdGVtcG9yYXJ5IGFjY2VzcyB0byBmdWxsIGxvY2F0aW9uIGFjY3VyYWN5IGZvciB0aGUgYXBwbGljYXRpb24gb24gaU9TIDE0Ky5cbiAgICpcbiAgICogTGVhcm4gbW9yZSBhYm91dCB0aGlzIG1ldGhvZCBbaGVyZV0oaHR0cHM6Ly9naXRodWIuY29tL2RwYTk5Yy9jb3Jkb3ZhLWRpYWdub3N0aWMtcGx1Z2luI3JlcXVlc3R0ZW1wb3JhcnlmdWxsYWNjdXJhY3lhdXRob3JpemF0aW9uKVxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSB9KVxuICByZXF1ZXN0VGVtcG9yYXJ5RnVsbEFjY3VyYWN5QXV0aG9yaXphdGlvbihwdXJwb3NlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBhIGNoYW5nZSBpbiBsb2NhdGlvbiBhY2N1cmFjeSBhdXRob3JpemF0aW9uIG9jY3VycyBvbiBpT1MgMTQrLlxuICAgKlxuICAgKiBMZWFybiBtb3JlIGFib3V0IHRoaXMgbWV0aG9kIFtoZXJlXShodHRwczovL2dpdGh1Yi5jb20vZHBhOTljL2NvcmRvdmEtZGlhZ25vc3RpYy1wbHVnaW4jcmVnaXN0ZXJMb2NhdGlvbkFjY3VyYWN5QXV0aG9yaXphdGlvbkNoYW5nZUhhbmRsZXIpXG4gICAqL1xuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydpT1MnXSwgc3luYzogdHJ1ZSB9KVxuICByZWdpc3RlckxvY2F0aW9uQWNjdXJhY3lBdXRob3JpemF0aW9uQ2hhbmdlSGFuZGxlcihoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge31cbn1cbiJdfQ==

    /***/

  },

  /***/
  "./node_modules/@ionic-native/location-accuracy/__ivy_ngcc__/ngx/index.js": function node_modulesIonicNativeLocationAccuracy__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationAccuracy", function () {
      return LocationAccuracy;
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

    var LocationAccuracy = function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocationAccuracy, _super);

      function LocationAccuracy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience constant
         * @type {number}
         */


        _this.REQUEST_PRIORITY_NO_POWER = 0;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.REQUEST_PRIORITY_LOW_POWER = 1;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.REQUEST_PRIORITY_BALANCED_POWER_ACCURACY = 2;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.REQUEST_PRIORITY_HIGH_ACCURACY = 3;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.SUCCESS_SETTINGS_SATISFIED = 0;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.SUCCESS_USER_AGREED = 1;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.ERROR_ALREADY_REQUESTING = -1;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.ERROR_INVALID_ACTION = 0;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.ERROR_INVALID_ACCURACY = 1;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.ERROR_EXCEPTION = 1;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.ERROR_CANNOT_CHANGE_ACCURACY = 3;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.ERROR_USER_DISAGREED = 4;
        /**
         * Convenience constant
         * @type {number}
         */

        _this.ERROR_GOOGLE_API_CONNECTION_FAILED = 4;
        return _this;
      }

      LocationAccuracy.prototype.canRequest = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "canRequest", {}, arguments);
      };

      LocationAccuracy.prototype.isRequesting = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isRequesting", {}, arguments);
      };

      LocationAccuracy.prototype.request = function (accuracy) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "request", {
          "callbackOrder": "reverse"
        }, arguments);
      };

      LocationAccuracy.pluginName = "LocationAccuracy";
      LocationAccuracy.plugin = "cordova-plugin-request-location-accuracy";
      LocationAccuracy.pluginRef = "cordova.plugins.locationAccuracy";
      LocationAccuracy.repo = "https://github.com/dpa99c/cordova-plugin-request-location-accuracy";
      LocationAccuracy.platforms = ["Android", "iOS"];

      LocationAccuracy.ɵfac = function LocationAccuracy_Factory(t) {
        return ɵLocationAccuracy_BaseFactory(t || LocationAccuracy);
      };

      LocationAccuracy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LocationAccuracy,
        factory: function factory(t) {
          return LocationAccuracy.ɵfac(t);
        }
      });

      var ɵLocationAccuracy_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](LocationAccuracy);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocationAccuracy, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], null, null);
      })();

      return LocationAccuracy;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvbG9jYXRpb24tYWNjdXJhY3kvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBSVUsSUFnQzRCLG9DQUFpQjtBQUFDO0FBR3hEO0FBSWEsUUFOWDtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBRSwrQkFBeUIsR0FBRyxDQUFDLENBQUM7QUFDaEMsUUFBRTtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBRSxnQ0FBMEIsR0FBRyxDQUFDLENBQUM7QUFDakMsUUFBRTtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBRSw4Q0FBd0MsR0FBRyxDQUFDLENBQUM7QUFDL0MsUUFBRTtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBRSxvQ0FBOEIsR0FBRyxDQUFDLENBQUM7QUFDckMsUUFBRTtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBRSxnQ0FBMEIsR0FBRyxDQUFDLENBQUM7QUFDakMsUUFBRTtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBRSx5QkFBbUIsR0FBRyxDQUFDLENBQUM7QUFDMUIsUUFBRTtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBRSw4QkFBd0IsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoQyxRQUFFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFFLDBCQUFvQixHQUFHLENBQUMsQ0FBQztBQUMzQixRQUFFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFFLDRCQUFzQixHQUFHLENBQUMsQ0FBQztBQUM3QixRQUFFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFFLHFCQUFlLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLFFBQUU7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQUUsa0NBQTRCLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLFFBQUU7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQUUsMEJBQW9CLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLFFBQUU7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQUUsd0NBQWtDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDO0FBRWU7QUFBTSxJQUluQixxQ0FBVTtBQUthLElBSXZCLHVDQUFZO0FBS2EsSUFLekIsa0NBQU8sYUFBQyxRQUFnQjtBQUlxQjtBQUFzRDtBQUEwRTtBQUFxRTtBQUFrRztvREFoR3JWLFVBQVU7Ozs7OzBCQUNMO0FBQUMsMkJBdENQO0FBQUUsRUFzQ29DLGlCQUFpQjtBQUN0RCxTQURZLGdCQUFnQjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgTG9jYXRpb24gQWNjdXJhY3lcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBDb3Jkb3ZhL1Bob25lZ2FwIHBsdWdpbiBmb3IgQW5kcm9pZCBhbmQgaU9TIHRvIHJlcXVlc3QgZW5hYmxpbmcvY2hhbmdpbmcgb2YgTG9jYXRpb24gU2VydmljZXMgYnkgdHJpZ2dlcmluZyBhIG5hdGl2ZSBkaWFsb2cgZnJvbSB3aXRoaW4gdGhlIGFwcCwgYXZvaWRpbmcgdGhlIG5lZWQgZm9yIHRoZSB1c2VyIHRvIGxlYXZlIHlvdXIgYXBwIHRvIGNoYW5nZSBsb2NhdGlvbiBzZXR0aW5ncyBtYW51YWxseS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IExvY2F0aW9uQWNjdXJhY3kgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2xvY2F0aW9uLWFjY3VyYWN5L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbkFjY3VyYWN5OiBMb2NhdGlvbkFjY3VyYWN5KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmxvY2F0aW9uQWNjdXJhY3kuY2FuUmVxdWVzdCgpLnRoZW4oKGNhblJlcXVlc3Q6IGJvb2xlYW4pID0+IHtcbiAqXG4gKiAgIGlmKGNhblJlcXVlc3QpIHtcbiAqICAgICAvLyB0aGUgYWNjdXJhY3kgb3B0aW9uIHdpbGwgYmUgaWdub3JlZCBieSBpT1NcbiAqICAgICB0aGlzLmxvY2F0aW9uQWNjdXJhY3kucmVxdWVzdCh0aGlzLmxvY2F0aW9uQWNjdXJhY3kuUkVRVUVTVF9QUklPUklUWV9ISUdIX0FDQ1VSQUNZKS50aGVuKFxuICogICAgICAgKCkgPT4gY29uc29sZS5sb2coJ1JlcXVlc3Qgc3VjY2Vzc2Z1bCcpLFxuICogICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coJ0Vycm9yIHJlcXVlc3RpbmcgbG9jYXRpb24gcGVybWlzc2lvbnMnLCBlcnJvcilcbiAqICAgICApO1xuICogICB9XG4gKlxuICogfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTG9jYXRpb25BY2N1cmFjeScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXJlcXVlc3QtbG9jYXRpb24tYWNjdXJhY3knLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMubG9jYXRpb25BY2N1cmFjeScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZHBhOTljL2NvcmRvdmEtcGx1Z2luLXJlcXVlc3QtbG9jYXRpb24tYWNjdXJhY3knLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYXRpb25BY2N1cmFjeSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBSRVFVRVNUX1BSSU9SSVRZX05PX1BPV0VSID0gMDtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBSRVFVRVNUX1BSSU9SSVRZX0xPV19QT1dFUiA9IDE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgUkVRVUVTVF9QUklPUklUWV9CQUxBTkNFRF9QT1dFUl9BQ0NVUkFDWSA9IDI7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgUkVRVUVTVF9QUklPUklUWV9ISUdIX0FDQ1VSQUNZID0gMztcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBTVUNDRVNTX1NFVFRJTkdTX1NBVElTRklFRCA9IDA7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgU1VDQ0VTU19VU0VSX0FHUkVFRCA9IDE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgRVJST1JfQUxSRUFEWV9SRVFVRVNUSU5HID0gLTE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgRVJST1JfSU5WQUxJRF9BQ1RJT04gPSAwO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEVSUk9SX0lOVkFMSURfQUNDVVJBQ1kgPSAxO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEVSUk9SX0VYQ0VQVElPTiA9IDE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgRVJST1JfQ0FOTk9UX0NIQU5HRV9BQ0NVUkFDWSA9IDM7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgRVJST1JfVVNFUl9ESVNBR1JFRUQgPSA0O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEVSUk9SX0dPT0dMRV9BUElfQ09OTkVDVElPTl9GQUlMRUQgPSA0O1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgeW91IGNhbiByZXF1ZXN0IGFjY3VyYXRlIGxvY2F0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc292bGVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHlvdSBjYW4gcmVxdWVzdCBhY2N1cmF0ZSBsb2NhdGlvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjYW5SZXF1ZXN0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgYSByZXF1ZXN0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiBhIHJlcXVlc3QgaXMgY3VycmVudGx5IGluIHByb2dyZXNzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzUmVxdWVzdGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdHMgYWNjdXJhdGUgbG9jYXRpb25cbiAgICogQHBhcmFtIGFjY3VyYWN5IHtudW1iZXJ9IEFjY3VyYWN5LCBmcm9tIDAgdG8gNC4gWW91IGNhbiB1c2UgdGhlIHN0YXRpYyBwcm9wZXJ0aWVzIG9mIHRoaXMgY2xhc3MgdGhhdCBzdGFydCB3aXRoIFJFUVVFU1RfUFJJT1JJVFlfXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2VzcyBhbmQgcmVqZWN0cyBpZiBhbiBlcnJvciBvY2N1cnJlZFxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVxdWVzdChhY2N1cmFjeTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

    /***/

  }
}]);
//# sourceMappingURL=default~add-address-add-address-module~tabs-tabs-module-es5.js.map