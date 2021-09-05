function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$": function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$": function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app [dir]=\"rtlSide\">\r\n<!--<ion-app dir=\"rtl\">-->\r\n    <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.page.html": function node_modulesRawLoaderDistCjsJsSrcAppFilterFilterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-title>\r\n\t\t\t<div class=\"title_inner d-flex\">\r\n\t\t\t\t<ion-icon class=\"zmdi zmdi-close ion-text-start\" (click)=\"dismiss()\"></ion-icon>\r\n\t\t\t\t{{'short_filters' | translate}}\r\n\r\n\t\t\t\t<span class=\"end\">{{'reset' | translate}}</span>\r\n\t\t\t</div>\r\n\t\t</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n\t<ion-list lines=\"none\">\r\n\t\t<ion-card>\r\n\t\t\t<h2>{{'sort_by' | translate}}</h2>\r\n\t\t\t<ion-radio-group>\r\n\t\t\t\t<ion-item>\r\n\t\t\t\t\t<ion-label>{{'consultancy_fees' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-radio slot=\"end\" value=\"consultancy_fees\"></ion-radio>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-item>\r\n\t\t\t\t\t<ion-label>{{'ratings' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-radio slot=\"end\" value=\"ratings\"></ion-radio>\r\n\t\t\t\t</ion-item>\r\n\t\t\t\t<ion-item>\r\n\t\t\t\t\t<ion-label>{{'distance' | translate}}</ion-label>\r\n\t\t\t\t\t<ion-radio slot=\"end\" value=\"distance\"></ion-radio>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-radio-group>\r\n\t\t</ion-card>\r\n\r\n\t\t<ion-card>\r\n\t\t\t<h2>{{'consultancy_fees' | translate}}</h2>\r\n\t\t \r\n\t\t\t<ion-item class=\"item_range\">\r\n\t\t\t\t<h3 class=\"d-flex\">1 $  <span class=\"end\">100 $</span></h3>\r\n\t\t\t\t<ion-range dualKnobs=\"true\" min=\"21\" max=\"72\"  mode=\"md\" ></ion-range>\r\n\t\t\t</ion-item>\r\n\r\n\t\t</ion-card>\r\n\r\n\t\t<ion-card>\r\n\t\t\t<h2>{{'gender' | translate}}</h2>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t<ion-label>{{'male' | translate}}</ion-label>\r\n\t\t\t\t\t\t<ion-checkbox slot=\"start\"></ion-checkbox>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t<ion-label>{{'female' | translate}}</ion-label>\r\n\t\t\t\t\t\t<ion-checkbox slot=\"start\"></ion-checkbox>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-card>\r\n\t</ion-list>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n\t<ion-button size=\"large\" shape=\"block\" class=\"btn\">{{'apply_now' | translate}}</ion-button>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/prescription/prescription.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPrescriptionPrescriptionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>prescription</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n-->\r\n\r\n<ion-content>\r\n\t<ion-card>\r\n\t\t<div class=\"banner\">\r\n\t\t\t<div class=\"banner_img\">\r\n\t\t\t\t<img src=\"assets/images/prescription_banner_img.png\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"card_ditails ion-text-center\">\r\n\t\t\t<h2>{{'prescription_require' | translate}}</h2>\r\n\t\t\t<p [innerHTML]=\"'prescription_require_msg' | translate\"> </p>\r\n\r\n\t\t\t<ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"pickPrescription()\">\r\n\t\t\t\t{{'upload_prescription' | translate}}\r\n\t\t\t</ion-button>\r\n\t\t\t<ion-button size=\"large\" shape=\"block\" class=\"btn\" fill=\"clear\" (click)=\"cancel()\">\r\n\t\t\t\t{{'cancel' | translate}}\r\n\t\t\t</ion-button>\r\n\t\t</div>\r\n\t</ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/title/title.page.html": function node_modulesRawLoaderDistCjsJsSrcAppTitleTitlePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>title</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n-->\r\n<ion-content (click)=\"dismiss()\">\r\n\r\n</ion-content>\r\n<ion-footer no-border>\r\n    <div class=\"form\">\r\n        <ion-icon class=\"zmdi zmdi-close ion-text-end\" (click)=\"dismiss()\"></ion-icon>\r\n\r\n        <ion-list lines=\"none\">\r\n            <h1>{{'select_address_type' | translate}}</h1>\r\n            <ion-radio-group value=\"{{address.title}}\" (ionChange)=\"onAddressTypeChange($event)\">\r\n                <ion-row>\r\n                    <ion-col size=\"4\">\r\n                        <ion-item lines=\"none\">\r\n                            <ion-radio slot=\"start\" value=\"home\"></ion-radio>\r\n                            <ion-label class=\"d-flex\">\r\n                                <div class=\"img_container\">\r\n                                    <div class=\"img_box\">\r\n                                        <ion-icon class=\"zmdi zmdi-home\"></ion-icon>\r\n                                    </div>\r\n                                    <h2>{{'home' | translate}}</h2>\r\n                                </div>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                    <ion-col size=\"4\">\r\n                        <ion-item lines=\"none\">\r\n                            <ion-radio slot=\"start\" value=\"office\"></ion-radio>\r\n                            <ion-label class=\"d-flex\">\r\n                                <div class=\"img_container\">\r\n                                    <div class=\"img_box\">\r\n                                        <ion-icon class=\"zmdi zmdi-city-alt\"></ion-icon>\r\n                                    </div>\r\n                                    <h2>{{'office' | translate}}</h2>\r\n                                </div>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                    <ion-col size=\"4\">\r\n                        <ion-item lines=\"none\">\r\n                            <ion-radio slot=\"start\" value=\"other\"></ion-radio>\r\n                            <ion-label class=\"d-flex\">\r\n                                <div class=\"img_container\">\r\n                                    <div class=\"img_box\">\r\n                                        <ion-icon class=\"zmdi zmdi-pin-assistant\"></ion-icon>\r\n                                    </div>\r\n                                    <h2>{{'other' | translate}}</h2>\r\n                                </div>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-item lines=\"none\">\r\n                    <ion-label position=\"floating\">{{'enter_address_detail' | translate}}</ion-label>\r\n                    <ion-input type=\"text\" [(ngModel)]=\"address.formatted_address\"></ion-input>\r\n                </ion-item>\r\n            </ion-radio-group>\r\n        </ion-list>\r\n    </div>\r\n    <ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"save()\">\r\n        {{'save' | translate}}\r\n    </ion-button>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vt-popup/vt-popup.page.html": function node_modulesRawLoaderDistCjsJsSrcAppVtPopupVtPopupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"cloes_btn ion-text-end\" > \n      <ion-icon name=\"close-outline\" (click)=\"dismiss()\"></ion-icon>\n  </div>\n\n  <ion-card>\n      <div class=\"img_box\">\n          <img src=\"https://opuslabs.nyc3.digitaloceanspaces.com/AAFixItems/Other/popup_img_head.png\">\n      </div>\n\n      <div class=\"text_box\">\n          <h2>Stay in touch.</h2>\n          <p>Stay connected for Future <br>updates and new products.</p>\n      </div>\n      <ion-list lines=\"none\">\n\n          <ion-item lines=\"none\">\n              <ion-input type=\"email\" placeholder=\"Enter your email address\" [(ngModel)]=\"email_Id\"></ion-input>\n          </ion-item>\n\n          <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"onSubscribe()\">\n              Subscribe Now\n          </ion-button>\n\n      </ion-list>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      redirectTo: 'tabs',
      pathMatch: 'full'
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | tabs-tabs-module */
        [__webpack_require__.e("default~add-address-add-address-module~tabs-tabs-module"), __webpack_require__.e("tabs-tabs-module")]).then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'sign-in',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sign-in-sign-in-module */
        "sign-in-sign-in-module").then(__webpack_require__.bind(null,
        /*! ./sign-in/sign-in.module */
        "./src/app/sign-in/sign-in.module.ts")).then(function (m) {
          return m.SignInPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | register-register-module */
        "register-register-module").then(__webpack_require__.bind(null,
        /*! ./register/register.module */
        "./src/app/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'verification',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | verification-verification-module */
        [__webpack_require__.e("common"), __webpack_require__.e("verification-verification-module")]).then(__webpack_require__.bind(null,
        /*! ./verification/verification.module */
        "./src/app/verification/verification.module.ts")).then(function (m) {
          return m.VerificationPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | home-home-module */
        [__webpack_require__.e("default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469"), __webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'categories',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | categories-categories-module */
        "categories-categories-module").then(__webpack_require__.bind(null,
        /*! ./categories/categories.module */
        "./src/app/categories/categories.module.ts")).then(function (m) {
          return m.CategoriesPageModule;
        });
      }
    }, {
      path: 'product-list',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | product-list-product-list-module */
        "product-list-product-list-module").then(__webpack_require__.bind(null,
        /*! ./product-list/product-list.module */
        "./src/app/product-list/product-list.module.ts")).then(function (m) {
          return m.ProductListPageModule;
        });
      }
    }, {
      path: 'product-info',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | product-info-product-info-module */
        [__webpack_require__.e("common"), __webpack_require__.e("product-info-product-info-module")]).then(__webpack_require__.bind(null,
        /*! ./product-info/product-info.module */
        "./src/app/product-info/product-info.module.ts")).then(function (m) {
          return m.ProductInfoPageModule;
        });
      }
    }, {
      path: 'my-cart',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | my-cart-my-cart-module */
        [__webpack_require__.e("common"), __webpack_require__.e("my-cart-my-cart-module")]).then(__webpack_require__.bind(null,
        /*! ./my-cart/my-cart.module */
        "./src/app/my-cart/my-cart.module.ts")).then(function (m) {
          return m.MyCartPageModule;
        });
      }
    }, {
      path: 'select-address',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | select-address-select-address-module */
        [__webpack_require__.e("default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469"), __webpack_require__.e("common"), __webpack_require__.e("select-address-select-address-module")]).then(__webpack_require__.bind(null,
        /*! ./select-address/select-address.module */
        "./src/app/select-address/select-address.module.ts")).then(function (m) {
          return m.SelectAddressPageModule;
        });
      }
    }, {
      path: 'select-paymet-method',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | select-paymet-method-select-paymet-method-module */
        "select-paymet-method-select-paymet-method-module").then(__webpack_require__.bind(null,
        /*! ./select-paymet-method/select-paymet-method.module */
        "./src/app/select-paymet-method/select-paymet-method.module.ts")).then(function (m) {
          return m.SelectPaymetMethodPageModule;
        });
      }
    }, {
      path: 'order-placed',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | order-placed-order-placed-module */
        "order-placed-order-placed-module").then(__webpack_require__.bind(null,
        /*! ./order-placed/order-placed.module */
        "./src/app/order-placed/order-placed.module.ts")).then(function (m) {
          return m.OrderPlacedPageModule;
        });
      }
    }, {
      path: 'doctors',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | doctors-doctors-module */
        "doctors-doctors-module").then(__webpack_require__.bind(null,
        /*! ./doctors/doctors.module */
        "./src/app/doctors/doctors.module.ts")).then(function (m) {
          return m.DoctorsPageModule;
        });
      }
    }, {
      path: 'specilities',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | specilities-specilities-module */
        "specilities-specilities-module").then(__webpack_require__.bind(null,
        /*! ./specilities/specilities.module */
        "./src/app/specilities/specilities.module.ts")).then(function (m) {
          return m.SpecilitiesPageModule;
        });
      }
    }, {
      path: 'list-of-doctors',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | list-of-doctors-list-of-doctors-module */
        "list-of-doctors-list-of-doctors-module").then(__webpack_require__.bind(null,
        /*! ./list-of-doctors/list-of-doctors.module */
        "./src/app/list-of-doctors/list-of-doctors.module.ts")).then(function (m) {
          return m.ListOfDoctorsPageModule;
        });
      }
    }, {
      path: 'map-view',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | map-view-map-view-module */
        [__webpack_require__.e("common"), __webpack_require__.e("map-view-map-view-module")]).then(__webpack_require__.bind(null,
        /*! ./map-view/map-view.module */
        "./src/app/map-view/map-view.module.ts")).then(function (m) {
          return m.MapViewPageModule;
        });
      }
    }, {
      path: 'filter',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./filter/filter.module */
        "./src/app/filter/filter.module.ts")).then(function (m) {
          return m.FilterPageModule;
        });
      }
    }, {
      path: 'doctor-profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | doctor-profile-doctor-profile-module */
        "doctor-profile-doctor-profile-module").then(__webpack_require__.bind(null,
        /*! ./doctor-profile/doctor-profile.module */
        "./src/app/doctor-profile/doctor-profile.module.ts")).then(function (m) {
          return m.DoctorProfilePageModule;
        });
      }
    }, {
      path: 'appointment-book',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | appointment-book-appointment-book-module */
        "appointment-book-appointment-book-module").then(__webpack_require__.bind(null,
        /*! ./appointment-book/appointment-book.module */
        "./src/app/appointment-book/appointment-book.module.ts")).then(function (m) {
          return m.AppointmentBookPageModule;
        });
      }
    }, {
      path: 'add-feedback',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | add-feedback-add-feedback-module */
        "add-feedback-add-feedback-module").then(__webpack_require__.bind(null,
        /*! ./add-feedback/add-feedback.module */
        "./src/app/add-feedback/add-feedback.module.ts")).then(function (m) {
          return m.AddFeedbackPageModule;
        });
      }
    }, {
      path: 'hospitals',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | hospitals-hospitals-module */
        [__webpack_require__.e("common"), __webpack_require__.e("hospitals-hospitals-module")]).then(__webpack_require__.bind(null,
        /*! ./hospitals/hospitals.module */
        "./src/app/hospitals/hospitals.module.ts")).then(function (m) {
          return m.HospitalsPageModule;
        });
      }
    }, {
      path: 'hospital-map-view',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | hospital-map-view-hospital-map-view-module */
        [__webpack_require__.e("common"), __webpack_require__.e("hospital-map-view-hospital-map-view-module")]).then(__webpack_require__.bind(null,
        /*! ./hospital-map-view/hospital-map-view.module */
        "./src/app/hospital-map-view/hospital-map-view.module.ts")).then(function (m) {
          return m.HospitalMapViewPageModule;
        });
      }
    }, {
      path: 'hospital-info',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | hospital-info-hospital-info-module */
        [__webpack_require__.e("common"), __webpack_require__.e("hospital-info-hospital-info-module")]).then(__webpack_require__.bind(null,
        /*! ./hospital-info/hospital-info.module */
        "./src/app/hospital-info/hospital-info.module.ts")).then(function (m) {
          return m.HospitalInfoPageModule;
        });
      }
    }, {
      path: 'my-appointments',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | my-appointments-my-appointments-module */
        [__webpack_require__.e("common"), __webpack_require__.e("my-appointments-my-appointments-module")]).then(__webpack_require__.bind(null,
        /*! ./my-appointments/my-appointments.module */
        "./src/app/my-appointments/my-appointments.module.ts")).then(function (m) {
          return m.MyAppointmentsPageModule;
        });
      }
    }, {
      path: 'appointment-detail',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | appointment-detail-appointment-detail-module */
        [__webpack_require__.e("common"), __webpack_require__.e("appointment-detail-appointment-detail-module")]).then(__webpack_require__.bind(null,
        /*! ./appointment-detail/appointment-detail.module */
        "./src/app/appointment-detail/appointment-detail.module.ts")).then(function (m) {
          return m.AppointmentDetailPageModule;
        });
      }
    }, {
      path: 'account',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | account-account-module */
        "account-account-module").then(__webpack_require__.bind(null,
        /*! ./account/account.module */
        "./src/app/account/account.module.ts")).then(function (m) {
          return m.AccountPageModule;
        });
      }
    }, {
      path: 'my-profile',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | my-profile-my-profile-module */
        [__webpack_require__.e("default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469"), __webpack_require__.e("common"), __webpack_require__.e("my-profile-my-profile-module")]).then(__webpack_require__.bind(null,
        /*! ./my-profile/my-profile.module */
        "./src/app/my-profile/my-profile.module.ts")).then(function (m) {
          return m.MyProfilePageModule;
        });
      }
    }, {
      path: 'addresses',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | addresses-addresses-module */
        "addresses-addresses-module").then(__webpack_require__.bind(null,
        /*! ./addresses/addresses.module */
        "./src/app/addresses/addresses.module.ts")).then(function (m) {
          return m.AddressesPageModule;
        });
      }
    }, {
      path: 'add-address',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | add-address-add-address-module */
        [__webpack_require__.e("default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469"), __webpack_require__.e("default~add-address-add-address-module~tabs-tabs-module"), __webpack_require__.e("default~add-address-add-address-module~title-title-module"), __webpack_require__.e("common"), __webpack_require__.e("add-address-add-address-module")]).then(__webpack_require__.bind(null,
        /*! ./add-address/add-address.module */
        "./src/app/add-address/add-address.module.ts")).then(function (m) {
          return m.AddAddressPageModule;
        });
      }
    }, {
      path: 'contact-us',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | contact-us-contact-us-module */
        [__webpack_require__.e("default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469"), __webpack_require__.e("contact-us-contact-us-module")]).then(__webpack_require__.bind(null,
        /*! ./contact-us/contact-us.module */
        "./src/app/contact-us/contact-us.module.ts")).then(function (m) {
          return m.ContactUsPageModule;
        });
      }
    }, {
      path: 'faqs',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | faqs-faqs-module */
        "faqs-faqs-module").then(__webpack_require__.bind(null,
        /*! ./faqs/faqs.module */
        "./src/app/faqs/faqs.module.ts")).then(function (m) {
          return m.FaqsPageModule;
        });
      }
    }, {
      path: 'tnc',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tnc-tnc-module */
        "tnc-tnc-module").then(__webpack_require__.bind(null,
        /*! ./tnc/tnc.module */
        "./src/app/tnc/tnc.module.ts")).then(function (m) {
          return m.TncPageModule;
        });
      }
    }, {
      path: 'title',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | title-title-module */
        [__webpack_require__.e("default~add-address-add-address-module~title-title-module"), __webpack_require__.e("title-title-module")]).then(__webpack_require__.bind(null,
        /*! ./title/title.module */
        "./src/app/title/title.module.ts")).then(function (m) {
          return m.TitlePageModule;
        });
      }
    }, {
      path: 'change-language',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | change-language-change-language-module */
        "change-language-change-language-module").then(__webpack_require__.bind(null,
        /*! ./change-language/change-language.module */
        "./src/app/change-language/change-language.module.ts")).then(function (m) {
          return m.ChangeLanguagePageModule;
        });
      }
    }, {
      path: 'seller-profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | seller-profile-seller-profile-module */
        "seller-profile-seller-profile-module").then(__webpack_require__.bind(null,
        /*! ./seller-profile/seller-profile.module */
        "./src/app/seller-profile/seller-profile.module.ts")).then(function (m) {
          return m.SellerProfilePageModule;
        });
      }
    }, {
      path: 'prescription',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./prescription/prescription.module */
        "./src/app/prescription/prescription.module.ts")).then(function (m) {
          return m.PrescriptionPageModule;
        });
      }
    }, {
      path: 'pill-reminders',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pill-reminders-pill-reminders-module */
        [__webpack_require__.e("default~pill-reminder-pill-reminder-module~pill-reminders-pill-reminders-module"), __webpack_require__.e("pill-reminders-pill-reminders-module")]).then(__webpack_require__.bind(null,
        /*! ./pill-reminders/pill-reminders.module */
        "./src/app/pill-reminders/pill-reminders.module.ts")).then(function (m) {
          return m.PillRemindersPageModule;
        });
      }
    }, {
      path: 'pill-reminder',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pill-reminder-pill-reminder-module */
        [__webpack_require__.e("default~pill-reminder-pill-reminder-module~pill-reminders-pill-reminders-module"), __webpack_require__.e("pill-reminder-pill-reminder-module")]).then(__webpack_require__.bind(null,
        /*! ./pill-reminder/pill-reminder.module */
        "./src/app/pill-reminder/pill-reminder.module.ts")).then(function (m) {
          return m.PillReminderPageModule;
        });
      }
    }, {
      path: 'orders',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | orders-orders-module */
        [__webpack_require__.e("common"), __webpack_require__.e("orders-orders-module")]).then(__webpack_require__.bind(null,
        /*! ./orders/orders.module */
        "./src/app/orders/orders.module.ts")).then(function (m) {
          return m.OrdersPageModule;
        });
      }
    }, {
      path: 'orders-info',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | orders-info-orders-info-module */
        [__webpack_require__.e("common"), __webpack_require__.e("orders-info-orders-info-module")]).then(__webpack_require__.bind(null,
        /*! ./orders-info/orders-info.module */
        "./src/app/orders-info/orders-info.module.ts")).then(function (m) {
          return m.OrdersInfoPageModule;
        });
      }
    }, {
      path: 'order-tracking',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | order-tracking-order-tracking-module */
        [__webpack_require__.e("common"), __webpack_require__.e("order-tracking-order-tracking-module")]).then(__webpack_require__.bind(null,
        /*! ./order-tracking/order-tracking.module */
        "./src/app/order-tracking/order-tracking.module.ts")).then(function (m) {
          return m.OrderTrackingPageModule;
        });
      }
    }, {
      path: 'saved-items',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | saved-items-saved-items-module */
        [__webpack_require__.e("common"), __webpack_require__.e("saved-items-saved-items-module")]).then(__webpack_require__.bind(null,
        /*! ./saved-items/saved-items.module */
        "./src/app/saved-items/saved-items.module.ts")).then(function (m) {
          return m.SavedItemsPageModule;
        });
      }
    }, {
      path: 'chat',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | chat-chat-module */
        [__webpack_require__.e("common"), __webpack_require__.e("chat-chat-module")]).then(__webpack_require__.bind(null,
        /*! ./chat/chat.module */
        "./src/app/chat/chat.module.ts")).then(function (m) {
          return m.ChatPageModule;
        });
      }
    }, {
      path: 'chat2',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | chat2-chat2-module */
        [__webpack_require__.e("common"), __webpack_require__.e("chat2-chat2-module")]).then(__webpack_require__.bind(null,
        /*! ./chat2/chat2.module */
        "./src/app/chat2/chat2.module.ts")).then(function (m) {
          return m.Chat2PageModule;
        });
      }
    }, {
      path: 'search-products',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | search-products-search-products-module */
        "search-products-search-products-module").then(__webpack_require__.bind(null,
        /*! ./search-products/search-products.module */
        "./src/app/search-products/search-products.module.ts")).then(function (m) {
          return m.SearchProductsPageModule;
        });
      }
    }, {
      path: 'search-hospitals',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | search-hospitals-search-hospitals-module */
        [__webpack_require__.e("common"), __webpack_require__.e("search-hospitals-search-hospitals-module")]).then(__webpack_require__.bind(null,
        /*! ./search-hospitals/search-hospitals.module */
        "./src/app/search-hospitals/search-hospitals.module.ts")).then(function (m) {
          return m.SearchHospitalsPageModule;
        });
      }
    }, {
      path: 'offers',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | offers-offers-module */
        [__webpack_require__.e("default~add-address-add-address-module~contact-us-contact-us-module~home-home-module~my-profile-my-p~1f12d469"), __webpack_require__.e("offers-offers-module")]).then(__webpack_require__.bind(null,
        /*! ./offers/offers.module */
        "./src/app/offers/offers.module.ts")).then(function (m) {
          return m.OffersPageModule;
        });
      }
    }, {
      path: 'product-reviews',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | product-reviews-product-reviews-module */
        [__webpack_require__.e("common"), __webpack_require__.e("product-reviews-product-reviews-module")]).then(__webpack_require__.bind(null,
        /*! ./product-reviews/product-reviews.module */
        "./src/app/product-reviews/product-reviews.module.ts")).then(function (m) {
          return m.ProductReviewsPageModule;
        });
      }
    }, {
      path: 'confirm-order',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | confirm-order-confirm-order-module */
        "confirm-order-confirm-order-module").then(__webpack_require__.bind(null,
        /*! ./confirm-order/confirm-order.module */
        "./src/app/confirm-order/confirm-order.module.ts")).then(function (m) {
          return m.ConfirmOrderPageModule;
        });
      }
    }, {
      path: 'doctor-reviews',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | doctor-reviews-doctor-reviews-module */
        "doctor-reviews-doctor-reviews-module").then(__webpack_require__.bind(null,
        /*! ./doctor-reviews/doctor-reviews.module */
        "./src/app/doctor-reviews/doctor-reviews.module.ts")).then(function (m) {
          return m.DoctorReviewsPageModule;
        });
      }
    }, {
      path: 'appointment-booked',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | appointment-booked-appointment-booked-module */
        "appointment-booked-appointment-booked-module").then(__webpack_require__.bind(null,
        /*! ./appointment-booked/appointment-booked.module */
        "./src/app/appointment-booked/appointment-booked.module.ts")).then(function (m) {
          return m.AppointmentBookedPageModule;
        });
      }
    }, {
      path: 'wallet',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | wallet-wallet-module */
        "wallet-wallet-module").then(__webpack_require__.bind(null,
        /*! ./wallet/wallet.module */
        "./src/app/wallet/wallet.module.ts")).then(function (m) {
          return m.WalletPageModule;
        });
      }
    }, {
      path: 'item-review',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | item-review-item-review-module */
        "item-review-item-review-module").then(__webpack_require__.bind(null,
        /*! ./item-review/item-review.module */
        "./src/app/item-review/item-review.module.ts")).then(function (m) {
          return m.ItemReviewPageModule;
        });
      }
    }, {
      path: 'send-to-bank',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | send-to-bank-send-to-bank-module */
        "send-to-bank-send-to-bank-module").then(__webpack_require__.bind(null,
        /*! ./send-to-bank/send-to-bank.module */
        "./src/app/send-to-bank/send-to-bank.module.ts")).then(function (m) {
          return m.SendToBankPageModule;
        });
      }
    }, {
      path: 'add-money',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | add-money-add-money-module */
        "add-money-add-money-module").then(__webpack_require__.bind(null,
        /*! ./add-money/add-money.module */
        "./src/app/add-money/add-money.module.ts")).then(function (m) {
          return m.AddMoneyPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss": function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Italic.woff2') format(\"woff2\"), url('GoogleSans-Italic.woff') format(\"woff\");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Regular.woff2') format(\"woff2\"), url('GoogleSans-Regular.woff') format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-BoldItalic.woff2') format(\"woff2\"), url('GoogleSans-BoldItalic.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Bold.woff2') format(\"woff2\"), url('GoogleSans-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-MediumItalic.woff2') format(\"woff2\"), url('GoogleSans-MediumItalic.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Medium.woff2') format(\"woff2\"), url('GoogleSans-Medium.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n*,\nbody,\nhtml,\np,\nspan,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nstrong,\nli {\n  --ion-font-family: \"Google Sans\";\n  font-family: \"Google Sans\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktY3VzdG9tZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMEJBQUE7RUFDQSxpR0FBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBRDtBREdBO0VBQ0MsMEJBQUE7RUFDQSxtR0FBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNGRDtBREtBO0VBQ0MsMEJBQUE7RUFDQSx5R0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNKRDtBRE9BO0VBQ0MsMEJBQUE7RUFDQSw2RkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNORDtBRFNBO0VBQ0MsMEJBQUE7RUFDQSw2R0FBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUNSRDtBRFdBO0VBQ0MsMEJBQUE7RUFDQSxpR0FBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUNWRDtBRGVBOzs7Ozs7Ozs7Ozs7O0VBYUMsZ0NBQUE7RUFDQSwwQkFBQTtBQ2JEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XHJcblx0c3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG5cdFx0dXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xyXG5cdHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXHJcblx0XHR1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xyXG5cdHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUJvbGRJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXHJcblx0XHR1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZEl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcclxuXHRzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG5cdFx0dXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XHJcblx0c3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG5cdFx0dXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bUl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xyXG5cdHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuXHRcdHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1NZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuXHJcbiosXHJcbmJvZHksXHJcbmh0bWwsXHJcbnAsXHJcbnNwYW4sXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYsXHJcbnN0cm9uZyxcclxubGkge1xyXG5cdC0taW9uLWZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xyXG5cdGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xyXG5cdC8vbGV0dGVyLXNwYWNpbmc6IC4wNXJlbTtcclxufVxyXG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1JdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZEl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1Cb2xkSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtSXRhbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiosXG5ib2R5LFxuaHRtbCxcbnAsXG5zcGFuLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuc3Ryb25nLFxubGkge1xuICAtLWlvbi1mb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xuICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/models/constants.models */
    "./src/models/constants.models.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/events/my-events.service */
    "./src/app/services/events/my-events.service.ts");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_network_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/network/api.service */
    "./src/app/services/network/api.service.ts");
    /* harmony import */


    var _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/common/ecommerce.service */
    "./src/app/services/common/ecommerce.service.ts");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var _vt_popup_vt_popup_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./vt-popup/vt-popup.page */
    "./src/app/vt-popup/vt-popup.page.ts");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(config, uiElementService, platform, apiService, splashScreen, modalController, statusBar, oneSignal, eComService, translate, device, navCtrl, myEvent) {
        _classCallCheck(this, AppComponent);

        this.config = config;
        this.uiElementService = uiElementService;
        this.platform = platform;
        this.apiService = apiService;
        this.splashScreen = splashScreen;
        this.modalController = modalController;
        this.statusBar = statusBar;
        this.oneSignal = oneSignal;
        this.eComService = eComService;
        this.translate = translate;
        this.device = device;
        this.navCtrl = navCtrl;
        this.myEvent = myEvent;
        this.rtlSide = "left"; //Helper.setAddressSelected(null);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.config.demoMode && this.platform.is('cordova')) setTimeout(function () {
            return _this.presentModal();
          }, 15000);
          this.initializeApp();
          this.myEvent.getLanguageObservable().subscribe(function (value) {
            _this.apiService.setupHeaders();

            _this.navCtrl.navigateRoot(['./']);

            _this.globalize(value);
          });
          this.myEvent.getUserMeObservable().subscribe(function (user) {
            _this.refreshSettings();

            _this.apiService.setUserMe(user);

            _this.userMe = _this.apiService.getUserMe();
            if (_this.userMe == null) _this.apiService.setupHeaders(null);

            _this.navCtrl.navigateRoot(['./']);

            if (_this.platform.is('cordova')) {
              if (_this.userMe) {
                _this.updatePlayerId();
              } else {
                //logout of Agora SDK
                Agora.logout(function (res) {
                  console.log("Agora-logout", res);
                }, function (err) {
                  console.log("Agora-logout", err);
                });
              }
            }
          });
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _vt_popup_vt_popup_page__WEBPACK_IMPORTED_MODULE_15__["VtPopupPage"]
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            _this2.statusBar.styleDefault();

            _this2.splashScreen.show();

            firebase__WEBPACK_IMPORTED_MODULE_14__["initializeApp"]({
              apiKey: _this2.config.firebaseConfig.apiKey,
              authDomain: _this2.config.firebaseConfig.authDomain,
              databaseURL: _this2.config.firebaseConfig.databaseURL,
              projectId: _this2.config.firebaseConfig.projectId,
              storageBucket: _this2.config.firebaseConfig.storageBucket,
              messagingSenderId: _this2.config.firebaseConfig.messagingSenderId
            });
            if (_this2.platform.is('cordova')) _this2.initOneSignal();

            _this2.globalize(src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].getLanguageDefault());

            _this2.apiService.setUuidAndPlatform(_this2.device.uuid, _this2.device.platform);

            _this2.refreshSettings();

            _this2.apiService.setUserMe(src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].getLoggedInUser());

            _this2.userMe = _this2.apiService.getUserMe();

            _this2.navCtrl.navigateRoot(['./']);

            setTimeout(function () {
              _this2.splashScreen.hide();

              if (_this2.platform.is('cordova') && _this2.userMe) _this2.updatePlayerId();

              _this2.globalize(src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].getLanguageDefault());
            }, 3000);

            _this2.platform.backButton.subscribe(function () {
              if (_this2.routerOutlets && _this2.routerOutlets.canGoBack()) {
                _this2.routerOutlets.pop();
              } else {
                var currPathName = window.location.pathname;

                if (currPathName && currPathName.includes("tabs")) {
                  navigator['app'].exitApp();
                } else {
                  _this2.navCtrl.navigateRoot(['./tabs']);
                }
              }
            });
          });
        }
      }, {
        key: "globalize",
        value: function globalize(languagePriority) {
          this.translate.setDefaultLang("en");
          var defaultLangCode = this.config.availableLanguages[0].code;
          this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
          this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
          src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].setLocale(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
          src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].setLanguageDefault(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
        }
      }, {
        key: "setDirectionAccordingly",
        value: function setDirectionAccordingly(lang) {
          switch (lang) {
            case 'ar':
              {
                this.rtlSide = "rtl";
                break;
              }

            default:
              {
                this.rtlSide = "ltr";
                break;
              }
          }
        }
      }, {
        key: "initOneSignal",
        value: function initOneSignal() {
          if (this.config.oneSignalAppId && this.config.oneSignalAppId.length && this.config.oneSignalGPSenderId && this.config.oneSignalGPSenderId.length) {
            this.oneSignal.startInit(this.config.oneSignalAppId, this.config.oneSignalGPSenderId);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationReceived().subscribe(function (data) {
              console.log(data);
              src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].saveNotification(data.payload.additionalData && data.payload.additionalData.title ? data.payload.additionalData.title : data.payload.title, data.payload.additionalData && data.payload.additionalData.body ? data.payload.additionalData.body : data.payload.body, String(new Date().getTime()));
              var noti_ids_processed = JSON.parse(window.localStorage.getItem("noti_ids_processed"));
              if (!noti_ids_processed) noti_ids_processed = new Array();
              noti_ids_processed.push(data.payload.notificationID);
              window.localStorage.setItem("noti_ids_processed", JSON.stringify(noti_ids_processed));
            });
            this.oneSignal.handleNotificationOpened().subscribe(function (data) {
              var noti_ids_processed = JSON.parse(window.localStorage.getItem("noti_ids_processed"));
              if (!noti_ids_processed) noti_ids_processed = new Array();
              var index = noti_ids_processed.indexOf(data.notification.payload.notificationID);

              if (index == -1) {
                src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].saveNotification(data.notification.payload.additionalData && data.notification.payload.additionalData.title ? data.notification.payload.additionalData.title : data.notification.payload.title, data.notification.payload.additionalData && data.notification.payload.additionalData.body ? data.notification.payload.additionalData.body : data.notification.payload.body, String(new Date().getTime()));
              } else {
                noti_ids_processed.splice(index, 1);
                window.localStorage.setItem("noti_ids_processed", JSON.stringify(noti_ids_processed));
              }
            });
            this.oneSignal.endInit();
          }
        }
      }, {
        key: "updatePlayerId",
        value: function updatePlayerId() {
          var _this3 = this;

          //initialize Agora SDK with Agora App ID
          if (this.platform.is("cordova") && this.config.agoraVideoConfig.enableAgoraVideo) {
            Agora.initAgora(this.config.agoraVideoConfig.agoraAppId, function (res) {
              console.log("Agora-initAgora", res); //login to Agora sdk.

              Agora.loginUser(null, _this3.userMe.id, function (res) {
                console.log("Agora-loginUser", res);
              }, function (err) {
                console.log("Agora-loginUser", err);
              });
            }, function (err) {
              console.log("Agora-initAgora", err);

              _this3.uiElementService.presentToast("Unable to instantiate Agora");
            });
          }

          this.oneSignal.getIds().then(function (id) {
            if (id && id.userId) {
              var defaultLang = src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].getLanguageDefault();

              _this3.apiService.updateUser({
                notification: "{\"" + src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROLE_USER + "\":\"" + id.userId + "\"}",
                language: defaultLang && defaultLang.length ? defaultLang : _this3.config.availableLanguages[0].code
              }).subscribe(function (res) {
                return console.log('updateUser', res);
              }, function (err) {
                return console.log('updateUser', err);
              });

              firebase__WEBPACK_IMPORTED_MODULE_14__["database"]().ref(src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].REF_USERS_FCM_IDS).child(_this3.userMe.id + src_models_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROLE_USER).set(id.userId);
            }
          });
        }
      }, {
        key: "refreshSettings",
        value: function refreshSettings() {
          var _this4 = this;

          this.apiService.getSettings().subscribe(function (res) {
            console.log('getSettings', res);
            src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__["Helper"].setSettings(res);

            _this4.apiService.reloadSetting();

            _this4.eComService.initialize();
          }, function (err) {
            return console.log('getSettings', err);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_app_config__WEBPACK_IMPORTED_MODULE_7__["APP_CONFIG"]]
        }]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_16__["UiElementsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__["OneSignal"]
      }, {
        type: _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_12__["ECommerceService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_8__["MyEventsService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"], {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"])], AppComponent.prototype, "routerOutlets", void 0);
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_7__["APP_CONFIG"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_16__["UiElementsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__["OneSignal"], _services_common_ecommerce_service__WEBPACK_IMPORTED_MODULE_12__["ECommerceService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_events_my_events_service__WEBPACK_IMPORTED_MODULE_8__["MyEventsService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.config.ts": function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function () {
      return APP_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseAppConfig", function () {
      return BaseAppConfig;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("app.config");
    var BaseAppConfig = {
      appName: "CookFu",
      // apiBase: "http://192.168.0.115:8001/",
      apiBase: "https://api.agocarry.com/public/",
      googleApiKey: "AIzaSyDLMJOClhhQjkfepu0R8iOCIt7bUpUF0nU",
      oneSignalAppId: "14a71c55-8888-4373-afa7-f69c79bfdda7",
      oneSignalGPSenderId: "971942122749",
      agoraVideoConfig: {
        enableAgoraVideo: false,
        agoraAppId: ""
      },
      availableLanguages: [{
        code: 'en',
        name: 'English'
      }, {
        code: 'ar',
        name: 'Arabic'
      }, {
        code: 'fr',
        name: 'French'
      }, {
        code: 'es',
        name: 'Spanish'
      }, {
        code: 'id',
        name: 'Indonesian'
      }, {
        code: 'pt',
        name: 'Portuguese'
      }, {
        code: 'tr',
        name: 'Turkish'
      }, {
        code: 'it',
        name: 'Italian'
      }, {
        code: 'sw',
        name: 'Swahili'
      }],
      demoMode: false,
      firebaseConfig: {
        apiKey: "AIzaSyBzkgi5R1M_owyTrPzfkw8-4OJw7vEcMGU",
        authDomain: "customer-cookfu.firebaseapp.com",
        databaseURL: "https://customer-cookfu-default-rtdb.firebaseio.com",
        projectId: "customer-cookfu",
        storageBucket: "customer-cookfu.appspot.com",
        messagingSenderId: "971942122749",
        webApplicationId: "1:971942122749:web:83d41cd821a538d1a7da94"
      }
    };
    /***/
  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _filter_filter_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./filter/filter.module */
    "./src/app/filter/filter.module.ts");
    /* harmony import */


    var _title_title_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./title/title.module */
    "./src/app/title/title.module.ts");
    /* harmony import */


    var _prescription_prescription_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./prescription/prescription.module */
    "./src/app/prescription/prescription.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var _shophour_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shophour.config */
    "./src/app/shophour.config.ts");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _vt_popup_vt_popup_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./vt-popup/vt-popup.module */
    "./src/app/vt-popup/vt-popup.module.ts");

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http);
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"], _filter_filter_module__WEBPACK_IMPORTED_MODULE_7__["FilterPageModule"], _title_title_module__WEBPACK_IMPORTED_MODULE_8__["TitlePageModule"], // Chat2PageModule,
      _prescription_prescription_module__WEBPACK_IMPORTED_MODULE_9__["PrescriptionPageModule"], _vt_popup_vt_popup_module__WEBPACK_IMPORTED_MODULE_22__["VtPopupPageModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
        }
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_17__["OneSignal"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__["File"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_19__["Network"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_20__["Device"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_21__["InAppBrowser"], {
        provide: _shophour_config__WEBPACK_IMPORTED_MODULE_16__["APP_CONFIG_ShopHour"],
        useValue: _shophour_config__WEBPACK_IMPORTED_MODULE_16__["BaseShopHourConfig"]
      }, {
        provide: _app_config__WEBPACK_IMPORTED_MODULE_15__["APP_CONFIG"],
        useValue: _app_config__WEBPACK_IMPORTED_MODULE_15__["BaseAppConfig"]
      }, {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/filter/filter-routing.module.ts": function srcAppFilterFilterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPageRoutingModule", function () {
      return FilterPageRoutingModule;
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


    var _filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./filter.page */
    "./src/app/filter/filter.page.ts");

    var routes = [{
      path: '',
      component: _filter_page__WEBPACK_IMPORTED_MODULE_3__["FilterPage"]
    }];

    var FilterPageRoutingModule = function FilterPageRoutingModule() {
      _classCallCheck(this, FilterPageRoutingModule);
    };

    FilterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FilterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/filter/filter.module.ts": function srcAppFilterFilterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPageModule", function () {
      return FilterPageModule;
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


    var _filter_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./filter-routing.module */
    "./src/app/filter/filter-routing.module.ts");
    /* harmony import */


    var _filter_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./filter.page */
    "./src/app/filter/filter.page.ts");

    var FilterPageModule = function FilterPageModule() {
      _classCallCheck(this, FilterPageModule);
    };

    FilterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _filter_routing_module__WEBPACK_IMPORTED_MODULE_6__["FilterPageRoutingModule"]],
      declarations: [_filter_page__WEBPACK_IMPORTED_MODULE_7__["FilterPage"]]
    })], FilterPageModule);
    /***/
  },

  /***/
  "./src/app/filter/filter.page.scss": function srcAppFilterFilterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n}\nion-header ion-toolbar ion-title ion-icon {\n  font-size: 1.5rem;\n  min-width: 29px;\n}\nion-header ion-toolbar ion-title span.end {\n  color: var(--primary);\n}\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 8px;\n}\nion-list ion-card {\n  box-shadow: none !important;\n  background: var(--white);\n  border-radius: 0;\n  width: 100%;\n  margin: 0;\n  margin-bottom: 8px;\n  padding: 15px 20px 12px 20px;\n}\nion-list ion-card h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  padding-bottom: 10px;\n}\nion-list ion-card ion-item {\n  padding: 8px 0;\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --min-height: unset;\n}\nion-list ion-card ion-item ion-label {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.95rem !important;\n  font-weight: 500;\n  letter-spacing: 0.3px;\n}\nion-list ion-card ion-item ion-radio {\n  margin: 0;\n  --color: var(--text-light2);\n  --color-checked: var(--secondary);\n}\nion-list ion-card ion-item ion-checkbox {\n  margin: 0;\n  --border-color: var(--text-light2);\n  --border-color-checked: var(--secondary);\n  --background-checked: var(--secondary);\n  --size: 18px;\n  margin-right: 19px;\n}\nion-list ion-card ion-item.item_range {\n  --min-height: 82px;\n  padding: 0;\n}\nion-list ion-card ion-item.item_range h3 {\n  position: absolute;\n  top: 4px;\n  margin: 0;\n  padding: 0 6px;\n  color: var(--text-dark);\n  font-size: 0.95rem !important;\n  font-weight: 500;\n  letter-spacing: 0.3px;\n}\nion-list ion-card ion-item.item_range h3 span {\n  color: var(--primary);\n}\nion-list ion-card ion-item.item_range ion-range {\n  --bar-background: var(--bg-color);\n  --bar-background-active: var(--primary);\n  --bar-border-radius: 6px;\n  --bar-height: 6px;\n  --knob-background: var(--secondary);\n  --knob-size: 25px;\n  padding-bottom: 0;\n}\nion-list ion-card ion-row {\n  margin: 0 -5px;\n}\nion-list ion-card ion-row ion-col {\n  padding: 0 5px !important;\n}\nion-footer .button.btn.button-block {\n  --border-radius: 6px 6px 0 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxmaWx0ZXJcXGZpbHRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpbHRlci9maWx0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUNDSjtBRENJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDQ1I7QURHUTtFQUNJLHFCQUFBO0FDRFo7QURNQTtFQUNJLHlDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0hKO0FES0k7RUFDSSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUNIUjtBREtRO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQ0haO0FETVE7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLG1CQUFBO0FDSlo7QURNWTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0poQjtBRE9ZO0VBQ0ksU0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7QUNMaEI7QURRWTtFQUNJLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNOaEI7QURTWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ1BoQjtBRFNnQjtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNQcEI7QURTb0I7RUFDSSxxQkFBQTtBQ1B4QjtBRFdnQjtFQUNJLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDVHBCO0FEZVE7RUFDSSxjQUFBO0FDYlo7QURlWTtFQUNJLHlCQUFBO0FDYmhCO0FEc0JJO0VBQ0ksdUNBQUE7QUNuQlIiLCJmaWxlIjoic3JjL2FwcC9maWx0ZXIvZmlsdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDI5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgJi5lbmQge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHggMTJweCAyMHB4O1xyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xyXG5cclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4zcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1yYWRpbyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1jaGVja2JveCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgLS1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLml0ZW1fcmFuZ2Uge1xyXG4gICAgICAgICAgICAgICAgLS1taW4taGVpZ2h0OiA4MnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDsgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjNweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLXJhbmdlIHtcclxuICAgICAgICAgICAgICAgICAgICAtLWJhci1iYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFyLWJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAtLWJhci1oZWlnaHQ6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAtLWtub2ItYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAtLWtub2Itc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1yb3cge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgLTVweDtcclxuXHJcbiAgICAgICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHggIWltcG9ydGFudFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgLmJ1dHRvbi5idG4uYnV0dG9uLWJsb2NrIHtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWluLXdpZHRoOiAyOXB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgc3Bhbi5lbmQge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbmlvbi1saXN0IGlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgcGFkZGluZzogMTVweCAyMHB4IDEycHggMjBweDtcbn1cbmlvbi1saXN0IGlvbi1jYXJkIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5pb24tbGlzdCBpb24tY2FyZCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogdW5zZXQ7XG59XG5pb24tbGlzdCBpb24tY2FyZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXNpemU6IDAuOTVyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xufVxuaW9uLWxpc3QgaW9uLWNhcmQgaW9uLWl0ZW0gaW9uLXJhZGlvIHtcbiAgbWFyZ2luOiAwO1xuICAtLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cbmlvbi1saXN0IGlvbi1jYXJkIGlvbi1pdGVtIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbjogMDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLXNlY29uZGFyeSk7XG4gIC0tc2l6ZTogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAxOXB4O1xufVxuaW9uLWxpc3QgaW9uLWNhcmQgaW9uLWl0ZW0uaXRlbV9yYW5nZSB7XG4gIC0tbWluLWhlaWdodDogODJweDtcbiAgcGFkZGluZzogMDtcbn1cbmlvbi1saXN0IGlvbi1jYXJkIGlvbi1pdGVtLml0ZW1fcmFuZ2UgaDMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgNnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn1cbmlvbi1saXN0IGlvbi1jYXJkIGlvbi1pdGVtLml0ZW1fcmFuZ2UgaDMgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbmlvbi1saXN0IGlvbi1jYXJkIGlvbi1pdGVtLml0ZW1fcmFuZ2UgaW9uLXJhbmdlIHtcbiAgLS1iYXItYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xuICAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0tcHJpbWFyeSk7XG4gIC0tYmFyLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1iYXItaGVpZ2h0OiA2cHg7XG4gIC0ta25vYi1iYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAtLWtub2Itc2l6ZTogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5pb24tbGlzdCBpb24tY2FyZCBpb24tcm93IHtcbiAgbWFyZ2luOiAwIC01cHg7XG59XG5pb24tbGlzdCBpb24tY2FyZCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDVweCAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIC5idXR0b24uYnRuLmJ1dHRvbi1ibG9jayB7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDAgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/filter/filter.page.ts": function srcAppFilterFilterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPage", function () {
      return FilterPage;
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

    var FilterPage = /*#__PURE__*/function () {
      function FilterPage(modalController) {
        _classCallCheck(this, FilterPage);

        this.modalController = modalController;
      }

      _createClass(FilterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss();
        }
      }]);

      return FilterPage;
    }();

    FilterPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    FilterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-filter',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./filter.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./filter.page.scss */
      "./src/app/filter/filter.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], FilterPage);
    /***/
  },

  /***/
  "./src/app/prescription/prescription-routing.module.ts": function srcAppPrescriptionPrescriptionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrescriptionPageRoutingModule", function () {
      return PrescriptionPageRoutingModule;
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


    var _prescription_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./prescription.page */
    "./src/app/prescription/prescription.page.ts");

    var routes = [{
      path: '',
      component: _prescription_page__WEBPACK_IMPORTED_MODULE_3__["PrescriptionPage"]
    }];

    var PrescriptionPageRoutingModule = function PrescriptionPageRoutingModule() {
      _classCallCheck(this, PrescriptionPageRoutingModule);
    };

    PrescriptionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrescriptionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/prescription/prescription.module.ts": function srcAppPrescriptionPrescriptionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrescriptionPageModule", function () {
      return PrescriptionPageModule;
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


    var _prescription_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./prescription-routing.module */
    "./src/app/prescription/prescription-routing.module.ts");
    /* harmony import */


    var _prescription_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./prescription.page */
    "./src/app/prescription/prescription.page.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");

    var PrescriptionPageModule = function PrescriptionPageModule() {
      _classCallCheck(this, PrescriptionPageModule);
    };

    PrescriptionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _prescription_routing_module__WEBPACK_IMPORTED_MODULE_6__["PrescriptionPageRoutingModule"]],
      providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__["Crop"]],
      declarations: [_prescription_page__WEBPACK_IMPORTED_MODULE_7__["PrescriptionPage"]]
    })], PrescriptionPageModule);
    /***/
  },

  /***/
  "./src/app/prescription/prescription.page.scss": function srcAppPrescriptionPrescriptionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgba(0, 0, 0, 0.25) !important;\n}\n\nion-card {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: calc(100% - 40px);\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: auto;\n  border-radius: 10px;\n  box-shadow: none;\n  overflow: hidden;\n  background: var(--white);\n  padding-top: 42px;\n}\n\nion-card .banner .banner_img {\n  width: 230px;\n  margin: 0 auto;\n}\n\nion-card .card_ditails {\n  padding: 26px 39px 0 39px;\n}\n\nion-card .card_ditails h2 {\n  margin: 0;\n  color: var(--primary);\n  font-size: 1.25rem;\n  font-weight: 500;\n  padding-bottom: 22px;\n}\n\nion-card .card_ditails p {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 500;\n  font-size: 1rem;\n  line-height: 20px;\n  padding-bottom: 32px;\n}\n\nion-card .card_ditails .button.btn {\n  font-size: 0.9rem;\n  margin-bottom: 9px;\n  font-weight: 500;\n}\n\nion-card .card_ditails .button.btn.button-clear {\n  --background: var(--white);\n  color: var(--primary);\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlc2NyaXB0aW9uL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxwcmVzY3JpcHRpb25cXHByZXNjcmlwdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3ByZXNjcmlwdGlvbi9wcmVzY3JpcHRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFUTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDQVo7O0FES0k7RUFDSSx5QkFBQTtBQ0hSOztBREtRO0VBQ0ksU0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDSFo7O0FET1E7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDTFo7O0FEUVE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNOWjs7QURRWTtFQUNJLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ05oQiIsImZpbGUiOiJzcmMvYXBwL3ByZXNjcmlwdGlvbi9wcmVzY3JpcHRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBwYWRkaW5nLXRvcDogNDJweDtcclxuXHJcbiAgICAuYmFubmVyIHtcclxuICAgICAgICAuYmFubmVyX2ltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZF9kaXRhaWxzIHtcclxuICAgICAgICBwYWRkaW5nOiAyNnB4IDM5cHggMCAzOXB4O1xyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMnB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnV0dG9uLmJ0biB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICAgICAgICYuYnV0dG9uLWNsZWFyIHtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSkgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZy10b3A6IDQycHg7XG59XG5pb24tY2FyZCAuYmFubmVyIC5iYW5uZXJfaW1nIHtcbiAgd2lkdGg6IDIzMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbmlvbi1jYXJkIC5jYXJkX2RpdGFpbHMge1xuICBwYWRkaW5nOiAyNnB4IDM5cHggMCAzOXB4O1xufVxuaW9uLWNhcmQgLmNhcmRfZGl0YWlscyBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiAyMnB4O1xufVxuaW9uLWNhcmQgLmNhcmRfZGl0YWlscyBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xufVxuaW9uLWNhcmQgLmNhcmRfZGl0YWlscyAuYnV0dG9uLmJ0biB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5pb24tY2FyZCAuY2FyZF9kaXRhaWxzIC5idXR0b24uYnRuLmJ1dHRvbi1jbGVhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/prescription/prescription.page.ts": function srcAppPrescriptionPrescriptionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrescriptionPage", function () {
      return PrescriptionPage;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/crop/ngx */
    "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_network_firebase_uploader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/network/firebase-uploader.service */
    "./src/app/services/network/firebase-uploader.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");

    var PrescriptionPage = /*#__PURE__*/function () {
      function PrescriptionPage(modalController, alertCtrl, camera, translate, cropService, fireUpService, platform, uiElementService) {
        _classCallCheck(this, PrescriptionPage);

        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.translate = translate;
        this.cropService = cropService;
        this.fireUpService = fireUpService;
        this.platform = platform;
        this.uiElementService = uiElementService; // setTimeout(() => {
        //   this.modalController.dismiss("https://i.picsum.photos/id/888/200/200.jpg?hmac=k4DxIkJ_O8YKi3TA5I9xxJYJzqpSvx3QmJlgZwHMojo");
        // }, 2000);
      }

      _createClass(PrescriptionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cancel",
        value: function cancel() {
          this.modalController.dismiss();
        }
      }, {
        key: "pickPrescription",
        value: function pickPrescription() {
          var _this5 = this;

          this.translate.get(["image_pic_header", "image_pic_subheader", "image_pic_camera", "image_pic_gallery"]).subscribe(function (values) {
            _this5.alertCtrl.create({
              header: values["image_pic_header"],
              message: values["image_pic_subheader"],
              buttons: [{
                text: values["image_pic_camera"],
                handler: function handler() {
                  _this5.getImageCamera();
                }
              }, {
                text: values["image_pic_gallery"],
                handler: function handler() {
                  _this5.getImageGallery();
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
          var _this6 = this;

          var component = this;
          this.platform.ready().then(function () {
            if (_this6.platform.is("android")) {
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
                if (results && results[0]) _this6.reduceImages(results[0]);
              }, function (err) {
                console.log("getPictures", JSON.stringify(err));
              });
            }
          });
        }
      }, {
        key: "reduceImages",
        value: function reduceImages(selected_pictures) {
          var _this7 = this;

          // return selected_pictures.reduce((promise: any, item: any) => {
          //   return promise.then((result) => {
          //     return this.cropService.crop(item, { quality: 100 }).then(cropped_image => this.uploadImage(cropped_image));
          //   });
          // }, Promise.resolve());
          this.cropService.crop(selected_pictures, {
            quality: 100
          }).then(function (cropped_image) {
            return _this7.uploadImage(cropped_image);
          });
        }
      }, {
        key: "getImageCamera",
        value: function getImageCamera() {
          var _this8 = this;

          var options = {
            quality: 75,
            destinationType: this.platform.is("android") ? this.camera.DestinationType.FILE_URI : this.camera.DestinationType.NATIVE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          this.camera.getPicture(options).then(function (imageData) {
            return _this8.reduceImages(imageData);
          }, function (err) {
            _this8.translate.get('camera_err').subscribe(function (value) {
              return _this8.uiElementService.presentToast(value, "top");
            });

            console.log("getPicture", JSON.stringify(err));
          });
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(imageUri) {
          var _this9 = this;

          this.translate.get(["uploading_prescription", "uploading_fail"]).subscribe(function (values) {
            _this9.uiElementService.presentLoading(values["uploading_prescription"]);

            _this9.fireUpService.resolveUriAndUpload(imageUri).then(function (res) {
              console.log("resolveUriAndUpload", res);

              _this9.uiElementService.dismissLoading();

              var imageUrl = String(res);

              _this9.modalController.dismiss(imageUrl);
            }, function (err) {
              console.log("resolveUriAndUpload", err);

              _this9.uiElementService.dismissLoading();

              _this9.uiElementService.presentErrorAlert(values["uploading_fail"]);
            });
          });
        }
      }]);

      return PrescriptionPage;
    }();

    PrescriptionPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_4__["Crop"]
      }, {
        type: _services_network_firebase_uploader_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseUploaderService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_7__["UiElementsService"]
      }];
    };

    PrescriptionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prescription',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./prescription.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/prescription/prescription.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./prescription.page.scss */
      "./src/app/prescription/prescription.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_4__["Crop"], _services_network_firebase_uploader_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseUploaderService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_7__["UiElementsService"]])], PrescriptionPage);
    /***/
  },

  /***/
  "./src/app/services/common/ecommerce.service.ts": function srcAppServicesCommonEcommerceServiceTs(module, __webpack_exports__, __webpack_require__) {
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


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var src_models_order_request_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/models/order-request.models */
    "./src/models/order-request.models.ts");

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

    Cart.KEY_CART = 'dw_cart';

    var ECommerceService = /*#__PURE__*/function () {
      function ECommerceService() {
        _classCallCheck(this, ECommerceService);

        this.initialize();
      }

      _createClass(ECommerceService, [{
        key: "initialize",
        value: function initialize() {
          this.myCart = Cart.restore();
          var tax_in_percent = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__["Helper"].getSetting("tax_in_percent");
          var delivery_fee = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__["Helper"].getSetting("delivery_fee");
          var currency_icon = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__["Helper"].getSetting("currency_icon");
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
          if (this.orderRequest == null) this.orderRequest = new src_models_order_request_models__WEBPACK_IMPORTED_MODULE_3__["OrderRequest"]();
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
        key: "getOrderRequestMetaKey",
        value: function getOrderRequestMetaKey(key) {
          this.setupOrderRequestBase();
          return this.orderMeta[key] != null ? this.orderMeta[key] : null;
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
  "./src/app/services/common/ui-elements.service.ts": function srcAppServicesCommonUiElementsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiElementsService", function () {
      return UiElementsService;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var UiElementsService = /*#__PURE__*/function () {
      function UiElementsService(toastController, loadingController, alertCtrl, translateService) {
        _classCallCheck(this, UiElementsService);

        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
      }

      _createClass(UiElementsService, [{
        key: "presentToast",
        value: function presentToast(body, position, duration) {
          this.toastController.create({
            message: body,
            duration: duration && duration > 0 ? duration : 1500,
            position: position && (position == "top" || position == "middle") ? position : "bottom"
          }).then(function (toast) {
            return toast.present();
          });
        }
      }, {
        key: "presentErrorAlert",
        value: function presentErrorAlert(msg, headingText, actionText) {
          var _this10 = this;

          this.translateService.get(["error", "dismiss"]).subscribe(function (values) {
            _this10.alertCtrl.create({
              header: headingText ? headingText : values["error"],
              message: msg,
              buttons: [actionText ? actionText : values["dismiss"]]
            }).then(function (alert) {
              return alert.present();
            });
          });
        }
      }, {
        key: "presentLoading",
        value: function presentLoading(body, duration) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this11 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isLoading = true;
                    _context2.next = 3;
                    return this.loadingController.create({
                      message: body,
                      duration: duration
                    }).then(function (overlay) {
                      overlay.present().then(function () {
                        if (!_this11.isLoading) {
                          try {
                            overlay.dismiss().then(function () {
                              return console.log('loading aborted');
                            });
                          } catch (error) {
                            console.log(error);
                          }
                        }
                      });
                    });

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "dismissLoading",
        value: function dismissLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.isLoading = false;
                    _context3.prev = 1;
                    _context3.next = 4;
                    return this.loadingController.dismiss();

                  case 4:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                    _context3.prev = 7;
                    _context3.t0 = _context3["catch"](1);
                    console.log(_context3.t0);
                    return _context3.abrupt("return", null);

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[1, 7]]);
          }));
        }
      }]);

      return UiElementsService;
    }();

    UiElementsService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }];
    };

    UiElementsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])], UiElementsService);
    /***/
  },

  /***/
  "./src/app/services/events/my-events.service.ts": function srcAppServicesEventsMyEventsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyEventsService", function () {
      return MyEventsService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // For rxjs 6


    var MyEventsService = /*#__PURE__*/function () {
      function MyEventsService() {
        _classCallCheck(this, MyEventsService);

        this.customEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.selectedLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentLocation = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(MyEventsService, [{
        key: "getLanguageObservable",
        value: function getLanguageObservable() {
          return this.selectedLanguage.asObservable();
        }
      }, {
        key: "setLanguageData",
        value: function setLanguageData(data) {
          this.selectedLanguage.next(data);
        }
      }, {
        key: "getUserMeObservable",
        value: function getUserMeObservable() {
          return this.currentUser.asObservable();
        }
      }, {
        key: "setUserMeData",
        value: function setUserMeData(data) {
          this.currentUser.next(data);
        }
      }, {
        key: "setAddressData",
        value: function setAddressData(data) {
          this.currentLocation.next(data);
        }
      }, {
        key: "getAddressObservable",
        value: function getAddressObservable() {
          return this.currentLocation.asObservable();
        }
      }, {
        key: "setCustomEventData",
        value: function setCustomEventData(data) {
          this.customEvent.next(data);
        }
      }, {
        key: "getCustomEventObservable",
        value: function getCustomEventObservable() {
          return this.customEvent.asObservable();
        }
      }]);

      return MyEventsService;
    }();

    MyEventsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MyEventsService);
    /***/
  },

  /***/
  "./src/app/services/network/api.service.ts": function srcAppServicesNetworkApiServiceTs(module, __webpack_exports__, __webpack_require__) {
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


    var src_app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/models/helper.models */
    "./src/models/helper.models.ts");
    /* harmony import */


    var src_models_rating_summary_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/models/rating-summary.models */
    "./src/models/rating-summary.models.ts");
    /* harmony import */


    var src_models_user_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/models/user.models */
    "./src/models/user.models.ts");
    /* harmony import */


    var src_models_doctor_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/models/doctor.models */
    "./src/models/doctor.models.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

    var ApiService = /*#__PURE__*/function () {
      function ApiService(config, http) {
        _classCallCheck(this, ApiService);

        this.config = config;
        this.http = http;
        this.reviewedIds = new Array();
        this.distance_metric = "km";
        this.uuid = "xxx";
        this.platform = "android";
      }

      _createClass(ApiService, [{
        key: "reloadSetting",
        value: function reloadSetting() {
          this.currency_icon = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getSetting("currency_icon");
          this.locale = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getSetting("locale");
        }
      }, {
        key: "setUserMe",
        value: function setUserMe(user) {
          this.userMe = user;
        }
      }, {
        key: "getUserMe",
        value: function getUserMe() {
          return this.userMe;
        }
      }, {
        key: "reloadItemsReviewed",
        value: function reloadItemsReviewed() {
          this.reviewedIds = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getReviewedProductIds();
        }
      }, {
        key: "setupHeaders",
        value: function setupHeaders(authToken) {
          var tokenToUse = authToken ? authToken : src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getToken();
          var savedLanguageCode = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getLanguageDefault();
          this.myHeaders = tokenToUse ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenToUse,
            'X-Localization': String(savedLanguageCode ? savedLanguageCode : this.config.availableLanguages[0].code),
            'X-Device-Id': this.uuid ? this.uuid : "xxx",
            'X-Device-Type': this.platform ? this.platform : "android"
          }) : new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
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
          return this.http.get('./assets/json/countries.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            var indiaIndex = -1; // if (data) {
            //   for (let i = 0; i < data.length; i++) {
            //     if (data[i].name == "India") {
            //       indiaIndex = i;
            //       break;
            //     }
            //   }
            // }

            if (indiaIndex != -1) data.unshift(data.splice(indiaIndex, 1)[0]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getCountries', [])));
        }
      }, {
        key: "postNotification",
        value: function postNotification(roleTo, userIdTo) {
          return this.http.post(this.config.apiBase + 'api/user/push-notification', {
            role: roleTo,
            user_id: userIdTo
          }, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getURL",
        value: function getURL(url) {
          return this.http.get(url, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getContactLink",
        value: function getContactLink() {
          return this.http.get('https://dashboard.vtlabs.dev/whatsapp.php?product_name=doctorworld&source=application', {
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
        key: "getFaqs",
        value: function getFaqs() {
          return this.http.get(this.config.apiBase + 'api/faq', {
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
          var _this12 = this;

          return this.http.post(this.config.apiBase + 'api/social/login', socialLoginRequest, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            return _this12.setupUserMe(data.user);
          }));
        }
      }, {
        key: "loginUser",
        value: function loginUser(loginTokenRequest) {
          var _this13 = this;

          return this.http.post(this.config.apiBase + 'api/login', loginTokenRequest, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            return _this13.setupUserMe(data.user);
          }));
        }
      }, {
        key: "createUser",
        value: function createUser(signUpRequest) {
          var _this14 = this;

          return this.http.post(this.config.apiBase + 'api/register', signUpRequest, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            return _this14.setupUserMe(data.user);
          }));
        }
      }, {
        key: "updateUser",
        value: function updateUser(updateRequest) {
          var _this15 = this;

          return this.http.put(this.config.apiBase + 'api/user', updateRequest, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            return _this15.setupUserMe(data);
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
        key: "postNotificationContent",
        value: function postNotificationContent(roleTo, userIdTo, title, body) {
          var urlParams = new URLSearchParams();
          urlParams.append("message_title", title);
          urlParams.append("message_body", body);
          return this.http.post(this.config.apiBase + 'api/user/push-notification?' + urlParams.toString(), {
            role: roleTo,
            user_id: userIdTo
          }, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getBanners",
        value: function getBanners(scope) {
          var _this16 = this;

          var urlParams = new URLSearchParams();
          urlParams.append("pagination", "0");
          urlParams.append("parent", "1");
          if (scope != null) urlParams.append("scope", scope);
          return this.http.get(this.config.apiBase + "api/banners?" + urlParams.toString(), {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.length) {
              var _iterator7 = _createForOfIteratorHelper(data),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var cat = _step7.value;

                  _this16.setupCategory(cat);
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          }) //, catchError(this.handleError<Array<Category>>('getCategoriesParents', this.getTestCategories()))
          );
        }
      }, {
        key: "getProductsWithQuery",
        value: function getProductsWithQuery(query, page, location) {
          var _this17 = this;

          this.reloadSetting();
          var urlParams = new URLSearchParams();
          urlParams.append("search", query);
          if (page) urlParams.append("page", String(page));

          if (location) {
            urlParams.append("lat", String(location.latitude));
            urlParams.append("long", String(location.longitude));
          }

          return this.http.get(this.config.apiBase + "api/products?" + urlParams.toString(), {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.data && data.data.length) _this17.setupProductRemoveUnfilled(data.data);

            if (data && data.data && data.data.length) {
              var _iterator8 = _createForOfIteratorHelper(data.data),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var pro = _step8.value;

                  _this17.setupProduct(pro);
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }
          }) //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
          );
        }
      }, {
        key: "getHospitalsWithQuery",
        value: function getHospitalsWithQuery(query, page, location) {
          var _this18 = this;

          var urlParams = new URLSearchParams();
          urlParams.append("name", query);
          if (page) urlParams.append("page", String(page));

          if (location) {
            urlParams.append("lat", String(location.latitude));
            urlParams.append("long", String(location.longitude));
          }

          return this.http.get(this.config.apiBase + "api/doctor/hospitals?" + urlParams.toString(), {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data && data.length) {
              var _iterator9 = _createForOfIteratorHelper(data),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var pro = _step9.value;

                  _this18.setupHospital(pro);
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
            }
          }) //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
          );
        }
      }, {
        key: "getHospitals",
        value: function getHospitals(location, pageNo) {
          var _this19 = this;

          var urlParams = new URLSearchParams();
          if (pageNo) urlParams.append("page", String(pageNo));

          if (location) {
            urlParams.append("lat", String(location.latitude));
            urlParams.append("long", String(location.longitude));
          }

          return this.http.get(this.config.apiBase + "api/doctor/hospitals?" + urlParams.toString(), {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.length) {
              var _iterator10 = _createForOfIteratorHelper(data),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var hos = _step10.value;

                  _this19.setupHospital(hos);
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }
          }) //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestDoctors()))
          );
        }
      }, {
        key: "getDoctorsWithHospitalId",
        value: function getDoctorsWithHospitalId(hospitalId, page) {
          var _this20 = this;

          this.myLocation = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getAddressSelected();
          var urlParams = new URLSearchParams();
          urlParams.append("hospital", String(hospitalId));
          if (page) urlParams.append("page", String(page));
          return this.http.get(this.config.apiBase + "api/doctor/profile/list?" + urlParams.toString(), {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.data) _this20.setupDoctorRemoveUnfilled(data.data);

            if (data && data.data && data.data.length) {
              var _iterator11 = _createForOfIteratorHelper(data.data),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var doc = _step11.value;

                  _this20.setupDoctor(doc);
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
            }
          }) //, catchError(this.handleError<BaseListResponse>('getDoctorsWithCategoryId', this.getTestDoctors()))
          );
        }
      }, {
        key: "getDoctorsWithQuery",
        value: function getDoctorsWithQuery(query, page, location) {
          var _this21 = this;

          this.myLocation = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getAddressSelected();
          var urlParams = new URLSearchParams();
          urlParams.append("search", query);
          if (page) urlParams.append("page", String(page)); //if (location) { urlParams.append("lat", String(location.latitude)); urlParams.append("long", String(location.longitude)); }

          return this.http.get(this.config.apiBase + "api/doctor/profile/list?" + urlParams.toString(), {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.data) _this21.setupDoctorRemoveUnfilled(data.data);

            if (data && data.data && data.data.length) {
              var _iterator12 = _createForOfIteratorHelper(data.data),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var pro = _step12.value;

                  _this21.setupDoctor(pro);
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            }
          }) //, catchError(this.handleError<BaseListResponse>('get   ProductsWithCategoryId', this.getTestDoctors()))
          );
        }
      }, {
        key: "getDoctorsWithScopeId",
        value: function getDoctorsWithScopeId(categoryId, scope, location, page) {
          var _this22 = this;

          this.myLocation = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getAddressSelected();
          var urlParams = new URLSearchParams();
          if (categoryId) urlParams.append(scope, String(categoryId));
          if (page) urlParams.append("page", String(page)); //if (location) { urlParams.append("lat", String(location.latitude)); urlParams.append("long", String(location.longitude)); }

          return this.http.get(this.config.apiBase + "api/doctor/profile/list?" + urlParams.toString(), {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.data) _this22.setupDoctorRemoveUnfilled(data.data);

            if (data && data.data && data.data.length) {
              var _iterator13 = _createForOfIteratorHelper(data.data),
                  _step13;

              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var doc = _step13.value;

                  _this22.setupDoctor(doc);
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }
            }
          }) //, catchError(this.handleError<BaseListResponse>('getDoctorsWithCategoryId', this.getTestDoctors()))
          );
        }
      }, {
        key: "rateUser",
        value: function rateUser(uId, rateRequest) {
          return this.http.post(this.config.apiBase + "api/user/ratings/" + uId, JSON.stringify(rateRequest), {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getCategoriesWithScope",
        value: function getCategoriesWithScope(scope) {
          var _this23 = this;

          return this.http.get(this.config.apiBase + "api/categories?pagination=0&scope=" + scope, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.length) {
              var _iterator14 = _createForOfIteratorHelper(data),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var cat = _step14.value;

                  _this23.setupCategory(cat);
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }
            }
          }) //, catchError(this.handleError<Array<Category>>('getCategoriesWithScope', this.getTestCategories()))
          );
        }
      }, {
        key: "getCategoriesParents",
        value: function getCategoriesParents(scope) {
          var _this24 = this;

          var urlParams = new URLSearchParams();
          urlParams.append("pagination", "0");
          urlParams.append("parent", "1");
          if (scope != null) urlParams.append("scope", scope);
          return this.http.get(this.config.apiBase + "api/categories?" + urlParams.toString(), {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.length) {
              var _iterator15 = _createForOfIteratorHelper(data),
                  _step15;

              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var cat = _step15.value;

                  _this24.setupCategory(cat);
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }
            }
          }) //, catchError(this.handleError<Array<Category>>('getCategoriesParents', this.getTestCategories()))
          );
        }
      }, {
        key: "getCategoriesVendors",
        value: function getCategoriesVendors(location) {
          var _this25 = this;

          var urlParams = new URLSearchParams(); // urlParams.append("category", String(parentId));

          urlParams.append("lat", String(location.latitude));
          urlParams.append("long", String(location.longitude));
          return this.http.get(this.config.apiBase + "api/vendors/list?" + urlParams.toString(), {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this25.myLocation = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getAddressSelected();
            if (data.data && data.data.length) data.data.map(function (vendor) {
              return _this25.setupVendor(vendor);
            });
          }));
        }
      }, {
        key: "setupVendor",
        value: function setupVendor(vendor) {
          if (!vendor.mediaurls || !vendor.mediaurls.images) vendor.mediaurls = {
            images: []
          };
          vendor.image = "assets/images/empty_image.png";

          var _iterator16 = _createForOfIteratorHelper(vendor.mediaurls.images),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var imgObj = _step16.value;

              if (imgObj["default"]) {
                vendor.image = imgObj["default"];
                break;
              }
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }

          vendor.categories_text = "";

          if (vendor.categories && vendor.categories.length) {
            var _iterator17 = _createForOfIteratorHelper(vendor.categories),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var cat = _step17.value;
                vendor.categories_text += cat.title + ", ";
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }
          }

          if (vendor.categories_text.length) vendor.categories_text = vendor.categories_text.substring(0, vendor.categories_text.length - 2);
          vendor.distance = this.getDistanceBetweenTwoCoordinates(Number(this.myLocation.latitude), Number(this.myLocation.longitude), Number(vendor.latitude), Number(vendor.longitude));
          vendor.distance_toshow = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].formatDistance(vendor.distance, this.distance_metric);
        }
      }, {
        key: "getCategoriesSub",
        value: function getCategoriesSub(parentId) {
          var _this26 = this;

          return this.http.get(this.config.apiBase + "api/categories?pagination=0&category=" + parentId, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.length) {
              var _iterator18 = _createForOfIteratorHelper(data),
                  _step18;

              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var cat = _step18.value;

                  _this26.setupCategory(cat);
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }
            }
          }) //, catchError(this.handleError<Array<Category>>('getCategoriesSub', this.getTestCategories()))
          );
        }
      }, {
        key: "getProductsWithCategoryId",
        value: function getProductsWithCategoryId(scope, categoryId, page) {
          var _this27 = this;

          this.reloadSetting();
          var urlParams = new URLSearchParams();
          if (categoryId) urlParams.append("category", String(categoryId));
          urlParams.append("page", String(page));
          urlParams.append("scope", String(scope));
          var location = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getAddressSelected();

          if (location) {
            urlParams.append("lat", String(location.latitude));
            urlParams.append("long", String(location.longitude));
          }

          return this.http.get(this.config.apiBase + "api/products?" + urlParams, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.data && data.data.length) _this27.setupProductRemoveUnfilled(data.data);

            if (data && data.data && data.data.length) {
              var _iterator19 = _createForOfIteratorHelper(data.data),
                  _step19;

              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var pro = _step19.value;

                  _this27.setupProduct(pro);
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }
            }
          }) //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
          );
        }
      }, {
        key: "getVendorById",
        value: function getVendorById(vendorId) {
          var _this28 = this;

          this.myLocation = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getAddressSelected();
          return this.http.get(this.config.apiBase + "api/vendors/" + vendorId, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            return _this28.setupVendor(data);
          }));
        }
      }, {
        key: "getProductsWithVendorId",
        value: function getProductsWithVendorId(vendorId, page) {
          var _this29 = this;

          this.reloadSetting();
          return this.http.get(this.config.apiBase + "api/products?vendor=" + vendorId + "&page=" + page, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.data && data.data.length) _this29.setupProductRemoveUnfilled(data.data);

            if (data && data.data && data.data.length) {
              var _iterator20 = _createForOfIteratorHelper(data.data),
                  _step20;

              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var pro = _step20.value;

                  _this29.setupProduct(pro);
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }
            }
          }) //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
          );
        }
      }, {
        key: "getProductsWithId",
        value: function getProductsWithId(productId) {
          var _this30 = this;

          this.reloadSetting();
          return this.http.get(this.config.apiBase + "api/products/" + productId, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this30.setupProduct(data);
          }) //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
          );
        }
      }, {
        key: "toggleFavoriteProduct",
        value: function toggleFavoriteProduct(productId) {
          return this.http.post(this.config.apiBase + "api/products/favourites/" + productId, {}, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "toggleFavoriteDoctor",
        value: function toggleFavoriteDoctor(docId) {
          return this.http.post(this.config.apiBase + "api/doctor/profile/favourites/" + docId, {}, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "toggleFavoriteHospital",
        value: function toggleFavoriteHospital(hosId) {
          return this.http.post(this.config.apiBase + "api/doctor/hospitals/favourites/" + hosId, {}, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getFavoriteProducts",
        value: function getFavoriteProducts() {
          var _this31 = this;

          return this.http.get(this.config.apiBase + "api/products/favourites/list", {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.length) _this31.setupProductRemoveUnfilled(data);

            if (data && data.length) {
              var _iterator21 = _createForOfIteratorHelper(data),
                  _step21;

              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                  var pro = _step21.value;

                  _this31.setupProduct(pro);
                }
              } catch (err) {
                _iterator21.e(err);
              } finally {
                _iterator21.f();
              }
            }
          }) //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
          );
        }
      }, {
        key: "getFavoriteDoctors",
        value: function getFavoriteDoctors() {
          var _this32 = this;

          return this.http.get(this.config.apiBase + "api/doctor/profile/favourites/list", {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.length) {
              var _iterator22 = _createForOfIteratorHelper(data),
                  _step22;

              try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                  var pro = _step22.value;

                  _this32.setupDoctor(pro);
                }
              } catch (err) {
                _iterator22.e(err);
              } finally {
                _iterator22.f();
              }
            }
          }) //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
          );
        }
      }, {
        key: "getFavoriteHospitals",
        value: function getFavoriteHospitals() {
          var _this33 = this;

          return this.http.get(this.config.apiBase + "api/doctor/hospitals/favourites/list", {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.length) {
              var _iterator23 = _createForOfIteratorHelper(data),
                  _step23;

              try {
                for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                  var pro = _step23.value;

                  _this33.setupHospital(pro);
                }
              } catch (err) {
                _iterator23.e(err);
              } finally {
                _iterator23.f();
              }
            }
          }) //, catchError(this.handleError<BaseListResponse>('getProductsWithCategoryId', this.getTestProducts()))
          );
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
          return this.http.put(this.config.apiBase + 'api/addresses/' + address.id, address, {
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
        key: "createAppointment",
        value: function createAppointment(doctorId, apr) {
          return this.http.post(this.config.apiBase + 'api/doctor/appointments/' + doctorId, apr, {
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
        key: "getAppointments",
        value: function getAppointments(userId, pageNo) {
          var _this34 = this;

          var urlParams = new URLSearchParams();
          urlParams.append("appointer", String(userId));
          if (pageNo) urlParams.append("page", String(pageNo));
          return this.http.get(this.config.apiBase + "api/doctor/appointments?" + urlParams.toString(), {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.data) _this34.setupAppointmentRemoveUnfilled(data.data);

            var _iterator24 = _createForOfIteratorHelper(data.data),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var ap = _step24.value;

                _this34.setupAppointment(ap);
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }
          }));
        }
      }, {
        key: "getAppointmentById",
        value: function getAppointmentById(apId) {
          var _this35 = this;

          return this.http.get(this.config.apiBase + "api/doctor/appointments/" + apId, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.doctor && data.doctor.hospitals) _this35.setupAppointment(data);
          }));
        }
      }, {
        key: "updateAppointment",
        value: function updateAppointment(apId, ur) {
          var _this36 = this;

          return this.http.put(this.config.apiBase + "api/doctor/appointments/" + apId, ur, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (ap) {
            _this36.setupAppointment(ap);
          }));
        }
      }, {
        key: "getOrders",
        value: function getOrders(pageNo) {
          var _this37 = this;

          this.reloadSetting();
          this.reloadItemsReviewed();
          return this.http.get(this.config.apiBase + "api/orders?page=" + pageNo, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.data) _this37.setupOrderRemoveUnfilled(data.data);

            var _iterator25 = _createForOfIteratorHelper(data.data),
                _step25;

            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var order = _step25.value;

                _this37.setupOrder(order);
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }
          }));
        }
      }, {
        key: "getRatingSummaryProduct",
        value: function getRatingSummaryProduct(productId) {
          return this.http.get(this.config.apiBase + "api/products/ratings/summary/" + productId, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            var ratingSummaries = src_models_rating_summary_models__WEBPACK_IMPORTED_MODULE_7__["RatingSummary"].defaultArray();

            var _iterator26 = _createForOfIteratorHelper(data.summary),
                _step26;

            try {
              for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                var ratingSummaryResult = _step26.value;
                ratingSummaries[ratingSummaryResult.rounded_rating - 1].total = ratingSummaryResult.total;
                ratingSummaries[ratingSummaryResult.rounded_rating - 1].percent = ratingSummaryResult.total / data.total_ratings * 100;
              }
            } catch (err) {
              _iterator26.e(err);
            } finally {
              _iterator26.f();
            }

            data.summary = ratingSummaries;
          }));
        }
      }, {
        key: "getReviewsProduct",
        value: function getReviewsProduct(productId, pageNo) {
          var _this38 = this;

          return this.http.get(this.config.apiBase + "api/products/ratings/" + productId + "?page=" + pageNo, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            var _iterator27 = _createForOfIteratorHelper(data.data),
                _step27;

            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                var review = _step27.value;

                _this38.setupReview(review);
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }
          }));
        }
      }, {
        key: "getReviewsDoctor",
        value: function getReviewsDoctor(doctorId, pageNo) {
          var _this39 = this;

          return this.http.get(this.config.apiBase + "api/doctor/profile/ratings/" + doctorId + "?page=" + pageNo, {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            var _iterator28 = _createForOfIteratorHelper(data.data),
                _step28;

            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                var review = _step28.value;

                _this39.setupReview(review);
              }
            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
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
        key: "postReviewDoctor",
        value: function postReviewDoctor(doctorId, rr) {
          return this.http.post(this.config.apiBase + "api/doctor/profile/ratings/" + doctorId, rr, {
            headers: this.myHeaders
          });
        }
      }, {
        key: "getBalance",
        value: function getBalance() {
          return this.http.get(this.config.apiBase + 'api/user/wallet/balance', {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (!data.balance) data.balance = 0;
            data.balance = Number(data.balance.toFixed(2));
          }));
        }
      }, {
        key: "getTransactions",
        value: function getTransactions() {
          var _this40 = this;

          return this.http.get(this.config.apiBase + 'api/user/wallet/transactions', {
            headers: this.myHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data && data.data && data.data.length) {
              var _iterator29 = _createForOfIteratorHelper(data.data),
                  _step29;

              try {
                for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                  var trans = _step29.value;

                  _this40.setupTransaction(trans);
                }
              } catch (err) {
                _iterator29.e(err);
              } finally {
                _iterator29.f();
              }
            }
          }));
        }
      }, {
        key: "setupTransaction",
        value: function setupTransaction(transaction) {
          transaction.created_at = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].formatTimestampDateTime(transaction.created_at, this.locale);
          transaction.updated_at = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].formatTimestampDateTime(transaction.updated_at, this.locale);
          if (!transaction.amount) transaction.amount = 0;
          transaction.amount = Number(transaction.amount.toFixed(2));
          if (transaction.meta && transaction.meta.source_amount) transaction.meta.source_amount = Number(Number(transaction.meta.source_amount).toFixed(2));
        }
      }, {
        key: "setupReview",
        value: function setupReview(data) {
          data.created_at = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].formatTimestampDate(data.created_at, this.locale);

          if (data.user.mediaurls && data.user.mediaurls.images) {
            var _iterator30 = _createForOfIteratorHelper(data.user.mediaurls.images),
                _step30;

            try {
              for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                var imgObj = _step30.value;

                if (imgObj["default"]) {
                  data.user.image_url = imgObj["default"];
                  break;
                }
              }
            } catch (err) {
              _iterator30.e(err);
            } finally {
              _iterator30.f();
            }
          }

          if (!data.user.image_url) data.user.image_url = "assets/images/empty_dp.png";
        }
      }, {
        key: "getCategoriesText",
        value: function getCategoriesText(categories) {
          var toReturn = "";

          if (categories != null && categories.length > 0) {
            var _iterator31 = _createForOfIteratorHelper(categories),
                _step31;

            try {
              for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                var cat = _step31.value;
                toReturn += cat.title + ", ";
              }
            } catch (err) {
              _iterator31.e(err);
            } finally {
              _iterator31.f();
            }

            toReturn = toReturn.substring(0, toReturn.length - 2);
          }

          return toReturn;
        }
      }, {
        key: "getDistanceBetweenTwoCoordinates",
        value: function getDistanceBetweenTwoCoordinates(lat1, lon1, lat2, lon2) {
          var R = 6371; // Radius of the earth in km 

          var dLat = (lat2 - lat1) * (Math.PI / 180); // deg2rad below 

          var dLon = (lon2 - lon1) * (Math.PI / 180);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var d = R * c; // Distance in km

          return d * 1000; // Returning in meters
        }
      }, {
        key: "setDoctorsClosestHospital",
        value: function setDoctorsClosestHospital(data) {
          data.hospitalClosest = data.hospitals[0];

          if (this.myLocation != null) {
            var smallestDistance = -1;

            var _iterator32 = _createForOfIteratorHelper(data.hospitals),
                _step32;

            try {
              for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                var hos = _step32.value;
                var hosMeDistance = this.getDistanceBetweenTwoCoordinates(Number(this.myLocation.latitude), Number(this.myLocation.longitude), Number(hos.latitude), Number(hos.longitude));

                if (smallestDistance == -1 || hosMeDistance < smallestDistance) {
                  smallestDistance = hosMeDistance;
                  data.hospitalClosest = hos;
                }
              }
            } catch (err) {
              _iterator32.e(err);
            } finally {
              _iterator32.f();
            }
          }
        }
      }, {
        key: "setupAppointment",
        value: function setupAppointment(data) {
          if (!data.meta) data.meta = {};
          if (!data.status) data.status = "pending";
          data.momentAppointment = moment__WEBPACK_IMPORTED_MODULE_10__(data.date + " " + data.time_from);
          data.day_toshow = String(data.momentAppointment.format("ddd")).toLowerCase();
          data.date_toshow = data.momentAppointment.format("Do MMM");
          var timeFromSplit = data.time_from.split(":");
          var timeToSplit = data.time_to.split(":");
          data.time_from_toshow = timeFromSplit[0] + ":" + timeFromSplit[1];
          data.time_to_toshow = timeToSplit[0] + ":" + timeToSplit[1];
          this.setupDoctor(data.doctor);
          if (!data.user) data.user = new src_models_user_models__WEBPACK_IMPORTED_MODULE_8__["User"]();

          if (data.user.mediaurls && data.user.mediaurls.images) {
            var _iterator33 = _createForOfIteratorHelper(data.user.mediaurls.images),
                _step33;

            try {
              for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                var imgObj = _step33.value;

                if (imgObj["default"]) {
                  data.user.image_url = imgObj["default"];
                  break;
                }
              }
            } catch (err) {
              _iterator33.e(err);
            } finally {
              _iterator33.f();
            }
          }

          if (!data.user.image_url) data.user.image_url = "assets/images/empty_dp.png";
        }
      }, {
        key: "setupDoctorRemoveUnfilled",
        value: function setupDoctorRemoveUnfilled(data) {
          var found = false;

          for (var i = 0; i < data.length; i++) {
            if (!data[i].hospitals || !data[i].hospitals.length) {
              found = true;
              data.splice(i, 1);
            }
          }

          if (found) this.setupDoctorRemoveUnfilled(data);
        }
      }, {
        key: "setupAppointmentRemoveUnfilled",
        value: function setupAppointmentRemoveUnfilled(data) {
          var found = false;

          for (var i = 0; i < data.length; i++) {
            if (!data[i].doctor || !data[i].doctor.hospitals) {
              found = true;
              data.splice(i, 1);
            }
          }

          if (found) this.setupAppointmentRemoveUnfilled(data);
        }
      }, {
        key: "setupHospital",
        value: function setupHospital(data) {
          if (!data.mediaurls || !data.mediaurls.images) data.mediaurls = {
            images: []
          };
          data.image = "assets/images/empty_image.png";
          data.images = new Array();

          for (var i = 0; i < data.mediaurls.images.length; i++) {
            if (data.mediaurls.images[i]["default"]) {
              if (i == 0) data.image = data.mediaurls.images[i]["default"];
              data.images.push(data.mediaurls.images[i]["default"]);
            }
          }

          if (!data.images.length) data.images.push("assets/images/empty_image.png");
          if (!data.services) data.services = new Array();
          var availabilityDefault = src_models_doctor_models__WEBPACK_IMPORTED_MODULE_9__["AvailabilityDateTime"].getDefault();

          if (data.availability && data.availability.length) {
            var _iterator34 = _createForOfIteratorHelper(data.availability),
                _step34;

            try {
              for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                var avail = _step34.value;
                var index = 0;

                switch (avail.days) {
                  case "sun":
                    index = 0;
                    break;

                  case "mon":
                    index = 1;
                    break;

                  case "tue":
                    index = 2;
                    break;

                  case "wed":
                    index = 3;
                    break;

                  case "thu":
                    index = 4;
                    break;

                  case "fri":
                    index = 5;
                    break;

                  case "sat":
                    index = 6;
                    break;
                }

                availabilityDefault[index].selected = true;
                availabilityDefault[index].setTime(avail.from, avail.to);
              }
            } catch (err) {
              _iterator34.e(err);
            } finally {
              _iterator34.f();
            }
          }

          data.availability = availabilityDefault;
        }
      }, {
        key: "setupDoctor",
        value: function setupDoctor(data) {
          this.setDoctorsClosestHospital(data);
          data.consultancy_fee = data.hospitalClosest.fee;
          if (!data.ratings) data.ratings = 0;
          if (!data.ratings_count) data.ratings_count = 0;
          data.ratings = Number(Number(data.ratings).toFixed(1));
          data.hospitals_text = "";

          if (data.hospitals && data.hospitals.length) {
            var hospitals_text_new = "";

            var _iterator35 = _createForOfIteratorHelper(data.hospitals),
                _step35;

            try {
              for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                var hos = _step35.value;
                hospitals_text_new += hos.name + ", ";
              }
            } catch (err) {
              _iterator35.e(err);
            } finally {
              _iterator35.f();
            }

            hospitals_text_new = hospitals_text_new.substring(0, hospitals_text_new.length - 2);
            data.hospitals_text = hospitals_text_new;

            var _iterator36 = _createForOfIteratorHelper(data.hospitals),
                _step36;

            try {
              for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                var _hos = _step36.value;
                this.setupHospital(_hos);
              }
            } catch (err) {
              _iterator36.e(err);
            } finally {
              _iterator36.f();
            }
          }

          data.degrees_text = this.getCategoriesText(data.degrees);
          data.specializations_text = this.getCategoriesText(data.specializations);
          data.services_text = this.getCategoriesText(data.services);
          if (!data.mediaurls || !data.mediaurls.images) data.mediaurls = {
            images: []
          };
          data.image = "assets/images/empty_image.png";

          var _iterator37 = _createForOfIteratorHelper(data.mediaurls.images),
              _step37;

          try {
            for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
              var _imgObj = _step37.value;

              if (_imgObj["default"]) {
                data.image = _imgObj["default"];
                break;
              }
            }
          } catch (err) {
            _iterator37.e(err);
          } finally {
            _iterator37.f();
          }

          if (!data.user) data.user = new src_models_user_models__WEBPACK_IMPORTED_MODULE_8__["User"]();

          if (data.user.mediaurls && data.user.mediaurls.images) {
            var _iterator38 = _createForOfIteratorHelper(data.user.mediaurls.images),
                _step38;

            try {
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                var imgObj = _step38.value;

                if (imgObj["default"]) {
                  data.user.image_url = imgObj["default"];
                  break;
                }
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
            }
          }

          if (!data.user.image_url) data.user.image_url = "assets/images/empty_dp.png";
          var availabilityDefault = src_models_doctor_models__WEBPACK_IMPORTED_MODULE_9__["AvailabilityDateTime"].getDefault();

          if (data.availability && data.availability.length) {
            var _iterator39 = _createForOfIteratorHelper(data.availability),
                _step39;

            try {
              for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                var avail = _step39.value;
                var index = 0;

                switch (avail.days) {
                  case "sun":
                    index = 0;
                    break;

                  case "mon":
                    index = 1;
                    break;

                  case "tue":
                    index = 2;
                    break;

                  case "wed":
                    index = 3;
                    break;

                  case "thu":
                    index = 4;
                    break;

                  case "fri":
                    index = 5;
                    break;

                  case "sat":
                    index = 6;
                    break;
                }

                availabilityDefault[index].selected = true;
                availabilityDefault[index].setTime(avail.from, avail.to);
              }
            } catch (err) {
              _iterator39.e(err);
            } finally {
              _iterator39.f();
            }
          }

          data.availability = availabilityDefault;
        }
      }, {
        key: "setupCategory",
        value: function setupCategory(category) {
          if (category.mediaurls && category.mediaurls.images) {
            var _iterator40 = _createForOfIteratorHelper(category.mediaurls.images),
                _step40;

            try {
              for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                var imgObj = _step40.value;

                if (imgObj["default"]) {
                  category.image = imgObj["default"];
                  break;
                }
              }
            } catch (err) {
              _iterator40.e(err);
            } finally {
              _iterator40.f();
            }
          }

          if (!category.image) category.image = "assets/images/empty_image.png";
        }
      }, {
        key: "setupProductRemoveUnfilled",
        value: function setupProductRemoveUnfilled(data) {
          var found = false;

          for (var i = 0; i < data.length; i++) {
            if (!data[i].categories || !data[i].categories.length) {
              found = true;
              data.splice(i, 1);
            }
          }

          if (found) this.setupProductRemoveUnfilled(data);
        }
      }, {
        key: "setupOrderRemoveUnfilled",
        value: function setupOrderRemoveUnfilled(data) {
          var found = false;

          for (var i = 0; i < data.length; i++) {
            if (!data[i].products || !data[i].products.length || !data[i].vendor || !data[i].user) {
              found = true;
              data.splice(i, 1);
            }
          }

          if (found) this.setupOrderRemoveUnfilled(data);
        } // private setupProduct(product: Product, currency: string) {
        //   product.prescription_required = (product.meta && product.meta.prescription);
        //   if (!product.price) product.price = 0;
        //   product.priceToShow = currency + product.price.toFixed(2);
        //   if (product.vendor_products && product.vendor_products.length) {
        //     for (let vp of product.vendor_products) {
        //       if (!vp.sale_price) vp.sale_price = 0;
        //       vp.priceToShow = currency + vp.price.toFixed(2);
        //       vp.sale_priceToShow = currency + vp.sale_price.toFixed(2);
        //       if (vp.vendor) {
        //         if (!vp.vendor.mediaurls || !vp.vendor.mediaurls.images) vp.vendor.mediaurls = { images: [] };
        //         vp.vendor.image = "assets/images/empty_appointments.png";
        //         for (let imgObj of vp.vendor.mediaurls.images) if (imgObj["default"]) { vp.vendor.image = imgObj["default"]; break; }
        //         console.log("vp.vendor.image", vp.vendor.image);
        //       }
        //     }
        //   }
        //   if (product.categories && product.categories.length) {
        //     for (let cat of product.categories) this.setupCategory(cat);
        //   }
        //   product.images = new Array<string>();
        //   if (product.mediaurls && product.mediaurls.images) for (let imgObj of product.mediaurls.images) if (imgObj["default"]) product.images.push(imgObj["default"]);
        //   if (!product.images.length) product.images.push("assets/images/empty_appointments.png");
        // }

      }, {
        key: "setupProduct",
        value: function setupProduct(product) {
          product.prescription_required = product.meta && product.meta.prescription;
          if (!product.ratings) product.ratings = 0;
          if (!product.ratings_count) product.ratings_count = 0;
          product.ratings = Number(Number(product.ratings).toFixed(1));
          if (!product.price) product.price = 0;
          product.priceToShow = this.currency_icon + product.price.toFixed(2);
          product.ratings = Number(product.ratings.toFixed(2));
          product.vendorText = "";

          if (product.vendor_products && product.vendor_products.length) {
            var _iterator41 = _createForOfIteratorHelper(product.vendor_products),
                _step41;

            try {
              for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                var vp = _step41.value;
                if (!vp.sale_price) vp.sale_price = 0;
                vp.priceToShow = this.currency_icon + vp.price.toFixed(2);
                vp.sale_priceToShow = this.currency_icon + vp.sale_price.toFixed(2);

                if (vp.vendor) {
                  if (!vp.vendor.mediaurls || !vp.vendor.mediaurls.images) vp.vendor.mediaurls = {
                    images: []
                  };
                  vp.vendor.image = "assets/images/empty_image.png";

                  var _iterator42 = _createForOfIteratorHelper(vp.vendor.mediaurls.images),
                      _step42;

                  try {
                    for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                      var imgObj = _step42.value;

                      if (imgObj["default"]) {
                        vp.vendor.image = imgObj["default"];
                        break;
                      }
                    }
                  } catch (err) {
                    _iterator42.e(err);
                  } finally {
                    _iterator42.f();
                  }

                  product.vendorText += vp.vendor.name + ", ";
                }
              }
            } catch (err) {
              _iterator41.e(err);
            } finally {
              _iterator41.f();
            }
          }

          if (product.vendorText.length) product.vendorText = product.vendorText.substring(0, product.vendorText.length - 2);

          if (product.categories && product.categories.length) {
            var _iterator43 = _createForOfIteratorHelper(product.categories),
                _step43;

            try {
              for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                var cat = _step43.value;
                this.setupCategory(cat);
              }
            } catch (err) {
              _iterator43.e(err);
            } finally {
              _iterator43.f();
            }
          }

          product.images = new Array();

          if (product.mediaurls && product.mediaurls.images) {
            var _iterator44 = _createForOfIteratorHelper(product.mediaurls.images),
                _step44;

            try {
              for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
                var _imgObj2 = _step44.value;
                if (_imgObj2["default"]) product.images.push(_imgObj2["default"]);
              }
            } catch (err) {
              _iterator44.e(err);
            } finally {
              _iterator44.f();
            }
          }

          if (!product.images.length) product.images.push("assets/images/empty_image.png");
        }
      }, {
        key: "setupOrder",
        value: function setupOrder(order) {
          order.created_at = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].formatTimestampDate(order.created_at, this.locale);
          if (order.scheduled_on) order.scheduled_on = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].formatTimestampDate(order.scheduled_on, this.locale);
          order.total_toshow = this.currency_icon + Number(order.total).toFixed(2);
          order.subtotal_toshow = this.currency_icon + Number(order.subtotal).toFixed(2);
          if (order.delivery_fee) order.delivery_fee_toshow = this.currency_icon + Number(order.delivery_fee).toFixed(2);
          if (order.discount) order.discount_toshow = this.currency_icon + Number(order.discount).toFixed(2);
          if (order.taxes) order.taxes_toshow = this.currency_icon + Number(order.taxes).toFixed(2);

          var _iterator45 = _createForOfIteratorHelper(order.products),
              _step45;

          try {
            for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
              var product = _step45.value;
              product.total_toshow = this.currency_icon + Number(product.total).toFixed(2);

              if (product.vendor_product && product.vendor_product.product) {
                if (!product.vendor_product.product.price) product.vendor_product.product.price = 0;
                product.vendor_product.product.priceToShow = this.currency_icon + Number(product.vendor_product.product.price).toFixed(2);
                product.vendor_product.product.images = new Array();

                if (product.vendor_product.product.mediaurls && product.vendor_product.product.mediaurls.images) {
                  var _iterator49 = _createForOfIteratorHelper(product.vendor_product.product.mediaurls.images),
                      _step49;

                  try {
                    for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
                      var _imgObj5 = _step49.value;
                      if (_imgObj5["default"]) product.vendor_product.product.images.push(_imgObj5["default"]);
                    }
                  } catch (err) {
                    _iterator49.e(err);
                  } finally {
                    _iterator49.f();
                  }
                }

                if (!product.vendor_product.product.images.length) product.vendor_product.product.images.push("assets/images/empty_image.png"); //custom

                product.vendor_product.product.reviewed = this.reviewedIds != null && this.reviewedIds.includes(String(String(order.id) + String(product.vendor_product.product.id)));
              }
            }
          } catch (err) {
            _iterator45.e(err);
          } finally {
            _iterator45.f();
          }

          if (order.vendor) {
            if (!order.vendor.mediaurls || !order.vendor.mediaurls.images) order.vendor.mediaurls = {
              images: []
            };
            order.vendor.image = "assets/images/empty_image.png";

            var _iterator46 = _createForOfIteratorHelper(order.vendor.mediaurls.images),
                _step46;

            try {
              for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
                var imgObj = _step46.value;

                if (imgObj["default"]) {
                  order.vendor.image = imgObj["default"];
                  break;
                }
              }
            } catch (err) {
              _iterator46.e(err);
            } finally {
              _iterator46.f();
            }
          }

          if (order.delivery) {
            order.delivery.delivery.user.image_url = "assets/images/empty_dp";
            if (!order.delivery.delivery.user.mediaurls || !order.delivery.delivery.user.mediaurls.images) order.delivery.delivery.user.mediaurls = {
              images: []
            };

            var _iterator47 = _createForOfIteratorHelper(order.delivery.delivery.user.mediaurls.images),
                _step47;

            try {
              for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
                var _imgObj3 = _step47.value;

                if (_imgObj3["default"]) {
                  order.delivery.delivery.user.image_url = _imgObj3["default"];
                  break;
                }
              }
            } catch (err) {
              _iterator47.e(err);
            } finally {
              _iterator47.f();
            }
          }

          if (order.user) {
            if (!order.user.mediaurls || !order.user.mediaurls.images) order.user.mediaurls = {
              images: []
            };
            order.user.image_url = "assets/images/empty_dp.png";

            var _iterator48 = _createForOfIteratorHelper(order.user.mediaurls.images),
                _step48;

            try {
              for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
                var _imgObj4 = _step48.value;

                if (_imgObj4["default"]) {
                  order.user.image_url = _imgObj4["default"];
                  break;
                }
              }
            } catch (err) {
              _iterator48.e(err);
            } finally {
              _iterator48.f();
            }
          }
        }
      }, {
        key: "setupUserMe",
        value: function setupUserMe(data) {
          if (!data.mediaurls || !data.mediaurls.images) data.mediaurls = {
            images: []
          };

          if (!data.image_url) {
            var _iterator50 = _createForOfIteratorHelper(data.mediaurls.images),
                _step50;

            try {
              for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
                var imgObj = _step50.value;

                if (imgObj["default"]) {
                  data.image_url = imgObj["default"];
                  break;
                }
              }
            } catch (err) {
              _iterator50.e(err);
            } finally {
              _iterator50.f();
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

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
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
          args: [src_app_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"]]
        }]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/services/network/firebase-uploader.service.ts": function srcAppServicesNetworkFirebaseUploaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseUploaderService", function () {
      return FirebaseUploaderService;
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


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);

    var FirebaseUploaderService = /*#__PURE__*/function () {
      function FirebaseUploaderService(platform, file) {
        _classCallCheck(this, FirebaseUploaderService);

        this.platform = platform;
        this.file = file;
      }

      _createClass(FirebaseUploaderService, [{
        key: "resolveUriAndUpload",
        value: function resolveUriAndUpload(uri) {
          var _this41 = this;

          return new Promise(function (resolve, reject) {
            // console.log('uri: ' + uri);
            // if (this.platform.is("android") && uri.startsWith('content://') && uri.indexOf('/storage/') != -1) {
            //   uri = "file://" + uri.substring(uri.indexOf("/storage/"), uri.length);
            //   console.log('file: ' + uri);
            // }
            _this41.file.resolveLocalFilesystemUrl(uri).then(function (entry) {
              console.log(entry);
              var fileEntry = entry;
              fileEntry.file(function (success) {
                var mimeType = success.type;
                console.log("mimeType", mimeType); // let dirPath = entry.nativeURL;
                // this.upload(dirPath, entry.name, mimeType);

                var reader = new FileReader();

                reader.onloadend = function (evt) {
                  var imgBlob = new Blob([evt.target.result], {
                    type: mimeType
                  });
                  imgBlob.name = entry.name;

                  _this41.uploadBlob(imgBlob).then(function (res) {
                    return resolve(res);
                  }, function (err) {
                    return reject(err);
                  });
                };

                reader.onerror = function (e) {
                  return reject(e);
                };

                reader.readAsArrayBuffer(success);
              }, function (error) {
                console.log(error);
              });
            }); // this.file.resolveLocalFilesystemUrl(uri).then((entry: Entry) => {
            //   console.log(entry);
            //   var fileEntry = entry as FileEntry;
            //   fileEntry.file(success => {
            //     var mimeType = success.type;
            //     console.log(mimeType);
            //     let dirPath = entry.nativeURL;
            //     let path = dirPath;
            //     let name = entry.name;
            //     let mime = mimeType;
            //     console.log('original: ' + path);
            //     let dirPathSegments = path.split('/');
            //     dirPathSegments.pop();
            //     path = dirPathSegments.join('/');
            //     console.log('dir: ' + path);
            //     this.file.readAsArrayBuffer(path, name).then(buffer => this.uploadBlob(new Blob([buffer], { type: mime })).then(res => resolve(res), err => reject(err))).catch(err => reject(err))
            //   }, error => reject(error));
            // })

          });
        }
      }, {
        key: "uploadBlob",
        value: function uploadBlob(blob) {
          return new Promise(function (resolve, reject) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref();
            storageRef.child(new Date().getTime().toString()).put(blob).then(function (snapshot) {
              console.log(snapshot);
              firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref(snapshot.metadata.fullPath).getDownloadURL().then(function (url) {
                return resolve(url);
              })["catch"](function (err) {
                return reject(err);
              });
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(file) {
          return new Promise(function (resolve, reject) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref();
            storageRef.child(new Date().getTime().toString()).put(file).then(function (snapshot) {
              console.log(snapshot);
              firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref(snapshot.metadata.fullPath).getDownloadURL().then(function (url) {
                return resolve(url);
              })["catch"](function (err) {
                return reject(err);
              });
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(imageURI) {
          var _this42 = this;

          return new Promise(function (resolve, reject) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref();
            var imageRef = storageRef.child('image').child('imageName');

            _this42.encodeImageUri(imageURI, function (image64) {
              imageRef.putString(image64, 'data_url').then(function (snapshot) {
                resolve(snapshot.downloadURL);
              }, function (err) {
                reject(err);
              });
            });
          });
        }
      }, {
        key: "encodeImageUri",
        value: function encodeImageUri(imageUri, callback) {
          var c = document.createElement('canvas');
          var ctx = c.getContext("2d");
          var img = new Image();

          img.onload = function () {
            var aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL("image/jpeg");
            callback(dataURL);
          };

          img.src = imageUri;
        }
      }]);

      return FirebaseUploaderService;
    }();

    FirebaseUploaderService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"]
      }];
    };

    FirebaseUploaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"]])], FirebaseUploaderService);
    /***/
  },

  /***/
  "./src/app/shophour.config.ts": function srcAppShophourConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_CONFIG_ShopHour", function () {
      return APP_CONFIG_ShopHour;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseShopHourConfig", function () {
      return BaseShopHourConfig;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var APP_CONFIG_ShopHour = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("shophour.config");
    var BaseShopHourConfig = {
      appName: "Shop Hour",
      // apiBase: "https://yourapibase.com/", 
      apiBase: "https://api.agocarry.com/public/",
      googleApiKey: "AIzaSyDLMJOClhhQjkfepu0R8iOCIt7bUpUF0nU",
      oneSignalAppId: "14a71c55-8888-4373-afa7-f69c79bfdda7",
      oneSignalGPSenderId: "971942122749",
      availableLanguages: [{
        code: 'en',
        name: 'English'
      }, {
        code: 'ar',
        name: 'Arabic'
      } // , {
      //     code: 'es',
      //     name: 'Spanish'
      // }, {
      //     code: 'fr',
      //     name: 'French'
      // }, {
      //     code: 'id',
      //     name: 'Indonesian'
      // }, {
      //     code: 'pt',
      //     name: 'Portuguese'
      // }
      ],
      showBuyPromt: false,
      firebaseConfig: {
        apiKey: "AIzaSyBzkgi5R1M_owyTrPzfkw8-4OJw7vEcMGU",
        authDomain: "customer-cookfu.firebaseapp.com",
        databaseURL: "https://customer-cookfu-default-rtdb.firebaseio.com",
        projectId: "customer-cookfu",
        storageBucket: "customer-cookfu.appspot.com",
        messagingSenderId: "971942122749",
        webApplicationId: "1:971942122749:web:83d41cd821a538d1a7da94"
      }
    };
    /***/
  },

  /***/
  "./src/app/title/title-routing.module.ts": function srcAppTitleTitleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitlePageRoutingModule", function () {
      return TitlePageRoutingModule;
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


    var _title_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./title.page */
    "./src/app/title/title.page.ts");

    var routes = [{
      path: '',
      component: _title_page__WEBPACK_IMPORTED_MODULE_3__["TitlePage"]
    }];

    var TitlePageRoutingModule = function TitlePageRoutingModule() {
      _classCallCheck(this, TitlePageRoutingModule);
    };

    TitlePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TitlePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/title/title.module.ts": function srcAppTitleTitleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitlePageModule", function () {
      return TitlePageModule;
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


    var _title_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./title-routing.module */
    "./src/app/title/title-routing.module.ts");
    /* harmony import */


    var _title_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./title.page */
    "./src/app/title/title.page.ts");

    var TitlePageModule = function TitlePageModule() {
      _classCallCheck(this, TitlePageModule);
    };

    TitlePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _title_routing_module__WEBPACK_IMPORTED_MODULE_6__["TitlePageRoutingModule"]],
      declarations: [_title_page__WEBPACK_IMPORTED_MODULE_7__["TitlePage"]]
    })], TitlePageModule);
    /***/
  },

  /***/
  "./src/app/title/title.page.scss": function srcAppTitleTitlePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgba(0, 0, 0, 0) !important;\n}\n\nion-footer {\n  background: var(--white);\n  padding-top: 11px;\n}\n\nion-footer .form {\n  width: calc(100% - 30px);\n  padding-bottom: 7px;\n}\n\nion-footer .form ion-icon.zmdi-close {\n  color: var(--text-light2);\n  display: block;\n  width: 100%;\n  font-size: 1.3rem;\n  position: relative;\n  top: 5px;\n}\n\nion-footer .form ion-list {\n  padding: 0;\n}\n\nion-footer .form ion-list h1 {\n  margin: 0;\n  color: var(--text-light2) !important;\n  font-weight: 400;\n  font-size: 0.9rem;\n  margin-bottom: 10px;\n}\n\nion-footer .form ion-list ion-item {\n  padding: 0 !important;\n  padding-bottom: 7px !important;\n  background: none !important;\n  border-radius: 0;\n  border: 0 !important;\n  border-bottom: 1px solid #ccc !important;\n  --min-height: unset !important;\n  margin-bottom: 13px !important;\n}\n\nion-footer .form ion-list ion-item ion-label {\n  font-size: 1.1rem !important;\n  color: var(--text-light2) !important;\n  max-width: 100% !important;\n  font-weight: 400;\n  letter-spacing: 0 !important;\n  padding: 0 !important;\n}\n\nion-footer .form ion-list ion-item ion-input {\n  margin-top: 0;\n  margin-top: 0;\n  --padding-top: 17px !important;\n  --padding-bottom: 6px !important;\n}\n\nion-footer .form ion-list ion-row ion-col ion-item {\n  padding: 9px 8px !important;\n  border-radius: 7px;\n  transition: all 0.5s;\n  border: none !important;\n  background: var(--bg-color) !important;\n}\n\nion-footer .form ion-list ion-row ion-col ion-item ion-label {\n  width: 100% !important;\n  position: relative;\n  top: 0;\n  left: 0;\n  max-width: 100% !important;\n  white-space: normal;\n  padding: 0px 0 !important;\n}\n\nion-footer .form ion-list ion-row ion-col ion-item ion-label .img_container {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\nion-footer .form ion-list ion-row ion-col ion-item ion-label .img_container .img_box {\n  position: relative;\n  width: 25px;\n  height: 25px;\n  overflow: hidden;\n  margin-right: 11px;\n}\n\nion-footer .form ion-list ion-row ion-col ion-item ion-label .img_container .img_box ion-icon {\n  color: var(--primary);\n  font-size: 1.5rem;\n  min-width: 25px;\n  padding: 0 3px;\n  position: relative;\n  top: 0px;\n}\n\nion-footer .form ion-list ion-row ion-col ion-item ion-label .img_container h2 {\n  margin: 0;\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: #000;\n  position: relative;\n  top: 2px;\n}\n\nion-footer .form ion-list ion-row ion-col ion-item ion-radio {\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  --color: var(--transparent) !important;\n  --color-checked: var(--transparent) !important;\n}\n\nion-footer .form ion-list ion-row ion-col ion-item::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  margin: auto;\n  background: var(--primary);\n  transition: all 0.3s;\n  border-radius: 7px;\n}\n\nion-footer .form ion-list ion-row ion-col ion-item.item-radio-checked {\n  border-color: var(--transparent) !important;\n}\n\nion-footer .form ion-list ion-row ion-col ion-item.item-radio-checked::before {\n  width: 100%;\n  height: 100%;\n}\n\nion-footer .form ion-list ion-row ion-col ion-item.item-radio-checked ion-label .img_container .img_box ion-icon {\n  color: var(--white);\n}\n\nion-footer .form ion-list ion-row ion-col ion-item.item-radio-checked ion-label .img_container h2 {\n  color: var(--white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGl0bGUvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktY3VzdG9tZXIvc3JjXFxhcHBcXHRpdGxlXFx0aXRsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RpdGxlL3RpdGxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0k7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0FDQ1I7O0FERVk7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNBaEI7O0FESVE7RUFDSSxVQUFBO0FDRlo7O0FESVk7RUFDSSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNGaEI7O0FES1k7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0NBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDSGhCOztBREtnQjtFQUNJLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQ0hwQjs7QURNZ0I7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUNKcEI7O0FEVW9CO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtBQ1J4Qjs7QURVd0I7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNSNUI7O0FEVTRCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1JoQzs7QURVZ0M7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1JwQzs7QURVb0M7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNSeEM7O0FEWWdDO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDVnBDOztBRGV3QjtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7QUNiNUI7O0FEZ0J3QjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNkNUI7O0FEaUJ3QjtFQUNJLDJDQUFBO0FDZjVCOztBRGlCNEI7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2ZoQzs7QURxQndDO0VBQ0ksbUJBQUE7QUNuQjVDOztBRHVCb0M7RUFDSSxtQkFBQTtBQ3JCeEMiLCJmaWxlIjoic3JjL2FwcC90aXRsZS90aXRsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBwYWRkaW5nLXRvcDogMTFweDtcclxuXHJcbiAgICAuZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgJi56bWRpLWNsb3NlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWxpc3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEzcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tcm93IHtcclxuICAgICAgICAgICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOXB4IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbWdfY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbWdfYm94IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24tcmFkaW8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLml0ZW0tcmFkaW8tY2hlY2tlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltZ19jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xufVxuaW9uLWZvb3RlciAuZm9ybSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWljb24uem1kaS1jbG9zZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG59XG5pb24tZm9vdGVyIC5mb3JtIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgaDEge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0MikgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tZm9vdGVyIC5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTNweCAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5pb24tZm9vdGVyIC5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIC0tcGFkZGluZy10b3A6IDE3cHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XG59XG5pb24tZm9vdGVyIC5mb3JtIGlvbi1saXN0IGlvbi1yb3cgaW9uLWNvbCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDlweCA4cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKSAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBwYWRkaW5nOiAwcHggMCAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW0gaW9uLWxhYmVsIC5pbWdfY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tZm9vdGVyIC5mb3JtIGlvbi1saXN0IGlvbi1yb3cgaW9uLWNvbCBpb24taXRlbSBpb24tbGFiZWwgLmltZ19jb250YWluZXIgLmltZ19ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgaW9uLXJvdyBpb24tY29sIGlvbi1pdGVtIGlvbi1sYWJlbCAuaW1nX2NvbnRhaW5lciAuaW1nX2JveCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1pbi13aWR0aDogMjVweDtcbiAgcGFkZGluZzogMCAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG59XG5pb24tZm9vdGVyIC5mb3JtIGlvbi1saXN0IGlvbi1yb3cgaW9uLWNvbCBpb24taXRlbSBpb24tbGFiZWwgLmltZ19jb250YWluZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogIzAwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgaW9uLXJvdyBpb24tY29sIGlvbi1pdGVtIGlvbi1yYWRpbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIC0tY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW0uaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgaW9uLXJvdyBpb24tY29sIGlvbi1pdGVtLml0ZW0tcmFkaW8tY2hlY2tlZDo6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi1mb290ZXIgLmZvcm0gaW9uLWxpc3QgaW9uLXJvdyBpb24tY29sIGlvbi1pdGVtLml0ZW0tcmFkaW8tY2hlY2tlZCBpb24tbGFiZWwgLmltZ19jb250YWluZXIgLmltZ19ib3ggaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuaW9uLWZvb3RlciAuZm9ybSBpb24tbGlzdCBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW0uaXRlbS1yYWRpby1jaGVja2VkIGlvbi1sYWJlbCAuaW1nX2NvbnRhaW5lciBoMiB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/title/title.page.ts": function srcAppTitleTitlePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitlePage", function () {
      return TitlePage;
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


    var src_models_address_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/models/address.models */
    "./src/models/address.models.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");

    var TitlePage = /*#__PURE__*/function () {
      function TitlePage(modalController, uiElementService, translate) {
        _classCallCheck(this, TitlePage);

        this.modalController = modalController;
        this.uiElementService = uiElementService;
        this.translate = translate;
      }

      _createClass(TitlePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.address) this.address = new src_models_address_models__WEBPACK_IMPORTED_MODULE_3__["MyAddress"]();
          if (!this.address.title || !this.address.title.length) this.address.title = "home";
        }
      }, {
        key: "onAddressTypeChange",
        value: function onAddressTypeChange(event) {
          if (event.detail && event.detail.value) {
            this.address.title = event.detail.value;
          }
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss(null);
        }
      }, {
        key: "save",
        value: function save() {
          var _this43 = this;

          if (this.address.formatted_address && this.address.formatted_address.length > 2) {
            this.modalController.dismiss(this.address);
          } else {
            this.translate.get("err_field_address").subscribe(function (value) {
              return _this43.uiElementService.presentToast(value);
            });
          }
        }
      }]);

      return TitlePage;
    }();

    TitlePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_models_address_models__WEBPACK_IMPORTED_MODULE_3__["MyAddress"])], TitlePage.prototype, "address", void 0);
    TitlePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-title',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./title.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/title/title.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./title.page.scss */
      "./src/app/title/title.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_5__["UiElementsService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])], TitlePage);
    /***/
  },

  /***/
  "./src/app/vt-popup/vt-popup-routing.module.ts": function srcAppVtPopupVtPopupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VtPopupPageRoutingModule", function () {
      return VtPopupPageRoutingModule;
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


    var _vt_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vt-popup.page */
    "./src/app/vt-popup/vt-popup.page.ts");

    var routes = [{
      path: '',
      component: _vt_popup_page__WEBPACK_IMPORTED_MODULE_3__["VtPopupPage"]
    }];

    var VtPopupPageRoutingModule = function VtPopupPageRoutingModule() {
      _classCallCheck(this, VtPopupPageRoutingModule);
    };

    VtPopupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VtPopupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/vt-popup/vt-popup.module.ts": function srcAppVtPopupVtPopupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VtPopupPageModule", function () {
      return VtPopupPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _vt_popup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./vt-popup-routing.module */
    "./src/app/vt-popup/vt-popup-routing.module.ts");
    /* harmony import */


    var _vt_popup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./vt-popup.page */
    "./src/app/vt-popup/vt-popup.page.ts");

    var VtPopupPageModule = function VtPopupPageModule() {
      _classCallCheck(this, VtPopupPageModule);
    };

    VtPopupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _vt_popup_routing_module__WEBPACK_IMPORTED_MODULE_5__["VtPopupPageRoutingModule"]],
      declarations: [_vt_popup_page__WEBPACK_IMPORTED_MODULE_6__["VtPopupPage"]]
    })], VtPopupPageModule);
    /***/
  },

  /***/
  "./src/app/vt-popup/vt-popup.page.scss": function srcAppVtPopupVtPopupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgba(0, 0, 0, 0.66) !important;\n}\n\n.cloes_btn {\n  padding: 25px;\n}\n\n.cloes_btn ion-icon {\n  color: #fff;\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\nion-card {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: calc(100% - 53px);\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 0;\n  background: none;\n  overflow: hidden;\n  box-shadow: none;\n  padding: 0 0 3px 0;\n}\n\nion-card::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 113px);\n  background: #fff;\n  border-radius: 5px;\n}\n\nion-card .img_box {\n  position: relative;\n  z-index: 99;\n  margin: auto;\n  width: 100%;\n  max-width: 275px;\n  min-height: 275px;\n}\n\nion-card .text_box {\n  position: relative;\n  z-index: 99;\n  width: 100%;\n  padding: 0 25px;\n  top: -23px;\n}\n\nion-card .text_box h2 {\n  font-size: 2rem;\n  font-weight: 600;\n  color: #000;\n  margin: 0;\n  letter-spacing: 0;\n  padding-bottom: 18px;\n}\n\nion-card .text_box p {\n  margin: 0;\n  font-size: 1.1rem;\n  line-height: 19px;\n  color: #000;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n\nion-card ion-list {\n  position: relative;\n  z-index: 99;\n  margin: 0;\n  padding: 0 25px;\n  padding-bottom: 25px;\n}\n\nion-card ion-list ion-item {\n  background: #f5f5f5;\n  padding: 0 17px;\n  width: calc(100% - 0px);\n  min-height: unset !important;\n  margin: 0 auto;\n  --background: none;\n  align-items: flex-start;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --ripple-color: var(--transparent) !important;\n  --background-focused: var(--transparent) !important;\n  margin-bottom: 20px;\n  border-radius: 5px;\n}\n\nion-card ion-list ion-item ion-input {\n  font-size: 0.95rem !important;\n  font-weight: 500 !important;\n  color: #000;\n  --padding-start: 0 !important;\n  --padding-end: 0 !important;\n  --padding-top: 0 !important;\n  --padding-bottom: 0px !important;\n  --placeholder-color: #b3b3b3 !important;\n  --placeholder-opacity: 1;\n  --placeholder-font-weight: 400 !important;\n  --padding: 0 !important;\n  min-height: 45px;\n}\n\nion-card ion-list button[ion-button] {\n  margin: 0;\n  background: linear-gradient(180deg, #f5839d 0%, #ee2d5a 70%);\n  height: 46px;\n  border-radius: 5px;\n  text-transform: unset;\n  font-size: 1.4rem;\n  box-shadow: 0 12px 18px -1px rgba(238, 45, 90, 0.34);\n}\n\nion-card ion-list .button.btn {\n  width: 100%;\n  font-size: 0.95rem;\n  font-weight: 400;\n  letter-spacing: 0.53px !important;\n  height: 46px;\n  --background: linear-gradient(180deg, #f5839d 0%, #ee2d5a 70%);\n  color: #fff;\n  margin: 0;\n  text-transform: unset !important;\n  --box-shadow: 0 12px 18px -1px rgba(238, 45, 90, 0.34);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdnQtcG9wdXAvRjpcXGZpdmVyXFxCZXJuYXJkXFxBZ29jYXJyeVxcYWdvY2FycnktY3VzdG9tZXIvc3JjXFxhcHBcXHZ0LXBvcHVwXFx2dC1wb3B1cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Z0LXBvcHVwL3Z0LXBvcHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NSOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQVI7O0FER0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURJSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0ZSOztBRElRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDRlo7O0FES1E7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSFo7O0FET0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDTFI7O0FET1E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMWjs7QURPWTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHdCQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDTGhCOztBRFVZO0VBQ0ksU0FBQTtFQUNBLDREQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9EQUFBO0FDUmhCOztBRGFZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSw4REFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzREFBQTtBQ1hoQiIsImZpbGUiOiJzcmMvYXBwL3Z0LXBvcHVwL3Z0LXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42NikgIWltcG9ydGFudDtcbn1cblxuLmNsb2VzX2J0biB7XG4gICAgcGFkZGluZzogMjVweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbn1cblxuaW9uLWNhcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1M3B4KTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcGFkZGluZzogMCAwIDNweCAwO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDExM3B4KTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgIC5pbWdfYm94IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAyNzVweDtcbiAgICAgICAgbWluLWhlaWdodDogMjc1cHg7XG4gICAgfVxuXG4gICAgLnRleHRfYm94IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICAgICAgdG9wOiAtMjNweDtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxN3B4O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IzYjNiMyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICZbaW9uLWJ1dHRvbl0ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjU4MzlkIDAlLCAjZWUyZDVhIDcwJSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDE4cHggLTFweCByZ2JhKDIzOCwgNDUsIDkwLCAwLjM0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgJi5idG4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjUzcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjU4MzlkIDAlLCAjZWUyZDVhIDcwJSk7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tYm94LXNoYWRvdzogMCAxMnB4IDE4cHggLTFweCByZ2JhKDIzOCwgNDUsIDkwLCAwLjM0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42NikgIWltcG9ydGFudDtcbn1cblxuLmNsb2VzX2J0biB7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG4uY2xvZXNfYnRuIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pb24tY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1M3B4KTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogMCAwIDNweCAwO1xufVxuaW9uLWNhcmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMTNweCk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmlvbi1jYXJkIC5pbWdfYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyNzVweDtcbiAgbWluLWhlaWdodDogMjc1cHg7XG59XG5pb24tY2FyZCAudGV4dF9ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAyNXB4O1xuICB0b3A6IC0yM3B4O1xufVxuaW9uLWNhcmQgLnRleHRfYm94IGgyIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XG59XG5pb24tY2FyZCAudGV4dF9ib3ggcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5pb24tY2FyZCBpb24tbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cbmlvbi1jYXJkIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMCAxN3B4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTtcbiAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtLXJpcHBsZS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDA7XG4gIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiM2IzYjMgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG59XG5pb24tY2FyZCBpb24tbGlzdCBidXR0b25baW9uLWJ1dHRvbl0ge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmNTgzOWQgMCUsICNlZTJkNWEgNzAlKTtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1bnNldDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGJveC1zaGFkb3c6IDAgMTJweCAxOHB4IC0xcHggcmdiYSgyMzgsIDQ1LCA5MCwgMC4zNCk7XG59XG5pb24tY2FyZCBpb24tbGlzdCAuYnV0dG9uLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjUzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NnB4O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmNTgzOWQgMCUsICNlZTJkNWEgNzAlKTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzogMCAxMnB4IDE4cHggLTFweCByZ2JhKDIzOCwgNDUsIDkwLCAwLjM0KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/vt-popup/vt-popup.page.ts": function srcAppVtPopupVtPopupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VtPopupPage", function () {
      return VtPopupPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/common/ui-elements.service */
    "./src/app/services/common/ui-elements.service.ts");

    var VtPopupPage = /*#__PURE__*/function () {
      function VtPopupPage(navCtrl, modalCtrl, modalController, http, uiElementService) {
        _classCallCheck(this, VtPopupPage);

        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.modalController = modalController;
        this.http = http;
        this.uiElementService = uiElementService;
        this.email_Id = '';
      }

      _createClass(VtPopupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss();
        }
      }, {
        key: "onSubscribe",
        value: function onSubscribe() {
          var _this44 = this;

          var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

          if (this.email_Id.length <= 5 || !reg.test(this.email_Id)) {
            return this.uiElementService.presentToast('Please provide your Email.');
          }

          this.uiElementService.presentLoading('Sending...');
          var req = {
            "email": this.email_Id,
            "source": "opus_application_doctorworld"
          };
          this.http.post("https://dashboard.vtlabs.dev/api/subscribe", req).subscribe(function (res) {
            _this44.uiElementService.presentToast('Submitted successfully.');

            _this44.modalController.dismiss();

            _this44.uiElementService.dismissLoading();
          });
        }
      }]);

      return VtPopupPage;
    }();

    VtPopupPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"]
      }];
    };

    VtPopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-vt-popup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./vt-popup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vt-popup/vt-popup.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./vt-popup.page.scss */
      "./src/app/vt-popup/vt-popup.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"]])], VtPopupPage);
    /***/
  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  "./src/models/address.models.ts": function srcModelsAddressModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAddress", function () {
      return MyAddress;
    });

    var MyAddress = function MyAddress() {
      _classCallCheck(this, MyAddress);
    };
    /***/

  },

  /***/
  "./src/models/constants.models.ts": function srcModelsConstantsModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });

    var Constants = function Constants() {
      _classCallCheck(this, Constants);
    };

    Constants.KEY_USER = 'dw_user';
    Constants.KEY_NOTIFICATIONS = 'dw_notis';
    Constants.KEY_TOKEN = 'dw_token';
    Constants.KEY_SETTINGS = 'dw_settings';
    Constants.KEY_ADDRESS = 'dw_address';
    Constants.KEY_ADDRESSES = 'dw_addresses';
    Constants.KEY_APPOINT_REQ = 'dw_appoint_req';
    Constants.KEY_APPOINT_MYRATES = 'dw_appoint_myrates';
    Constants.KEY_LOCALE = "dw_locale";
    Constants.KEY_DEFAULT_LANGUAGE = 'dw_dl';
    Constants.KEY_REMINDER_LASTID = 'dw_reminder_last_id2';
    Constants.KEY_REMINDERS = 'dw_reminders2';
    Constants.KEY_REVIEWED_PRODUCTS = "dw_reviews_products";
    Constants.KEY_SEARCH_HISTORY = "dw_searchhistory";
    Constants.KEY_PRESCRIPTION_URL = "prescription_url";
    Constants.TEMP_DOCTOR = "dw_temp_doctor";
    Constants.TEMP_HOSPITAL = "dw_temp_hospital";
    Constants.TEMP_COUPON = "dw_temp_coupon";
    Constants.REF_USERS = "fire_app/users";
    Constants.REF_CHAT = "fire_app/chats";
    Constants.REF_INBOX = "fire_app/inbox";
    Constants.REF_USERS_FCM_IDS = "fire_app/user_fcm_ids";
    Constants.SCOPE_ECOMMERCE = "ecommerce";
    Constants.SCOPE_SPECIALIZATION = "specializations";
    Constants.SCOPE_DOCTOR_TYPE = "type";
    Constants.SCOPE_DOCTOR = "doctor";
    Constants.SCOPE_HOSPITAL = "hospital";
    Constants.SCOPE_SERVICES = "services";
    Constants.ROLE_USER = "customer";
    Constants.ROLE_DOCTOR = 'doctor';
    Constants.ROLE_DELIVERY = 'delivery';
    /***/
  },

  /***/
  "./src/models/doctor.models.ts": function srcModelsDoctorModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Doctor", function () {
      return Doctor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvailabilityDateTime", function () {
      return AvailabilityDateTime;
    });
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

    var Doctor = function Doctor() {
      _classCallCheck(this, Doctor);
    };

    var AvailabilityDateTime = /*#__PURE__*/function () {
      function AvailabilityDateTime(days) {
        _classCallCheck(this, AvailabilityDateTime);

        this.days = days;
        this.setTime("07:00:00", "21:00:00");
      }

      _createClass(AvailabilityDateTime, [{
        key: "setTime",
        value: function setTime(timeFrom, timeTo) {
          var momentStart = moment__WEBPACK_IMPORTED_MODULE_0__();
          var momentReturn = moment__WEBPACK_IMPORTED_MODULE_0__();
          var time_start_split = timeFrom.split(":");
          momentStart.set({
            hour: Number(time_start_split[0]),
            minute: Number(time_start_split[1]),
            second: 0,
            millisecond: 0
          });
          var time_return_split = timeTo.split(":");
          momentReturn.set({
            hour: Number(time_return_split[0]),
            minute: Number(time_return_split[1]),
            second: 0,
            millisecond: 0
          });
          this.from = time_start_split[0] + ":" + time_start_split[1];
          this.to = time_return_split[0] + ":" + time_return_split[1];
          this.dateFromISO = momentStart.format();
          this.dateToISO = momentReturn.format();
        }
      }], [{
        key: "getDefault",
        value: function getDefault() {
          var toReturn = [new AvailabilityDateTime("sun"), new AvailabilityDateTime("mon"), new AvailabilityDateTime("tue"), new AvailabilityDateTime("wed"), new AvailabilityDateTime("thu"), new AvailabilityDateTime("fri"), new AvailabilityDateTime("sat")];
          return toReturn;
        }
      }, {
        key: "getRequest",
        value: function getRequest(adt) {
          var momentFromDate = moment__WEBPACK_IMPORTED_MODULE_0__(adt.dateFromISO);
          var momentToDate = moment__WEBPACK_IMPORTED_MODULE_0__(adt.dateToISO);
          return {
            days: adt.days,
            from: momentFromDate.format("HH:mm"),
            to: momentToDate.format("HH:mm")
          };
        }
      }]);

      return AvailabilityDateTime;
    }();
    /***/

  },

  /***/
  "./src/models/helper.models.ts": function srcModelsHelperModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Helper", function () {
      return Helper;
    });
    /* harmony import */


    var _constants_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./constants.models */
    "./src/models/constants.models.ts");
    /* harmony import */


    var _notification_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./notification.models */
    "./src/models/notification.models.ts");
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
        key: "getAgoraChannelId",
        value: function getAgoraChannelId(id1, id2) {
          return id1 > id2 ? id1 + "_" + id2 : id2 + "_" + id1;
        }
      }, {
        key: "formatPhone",
        value: function formatPhone(phone) {
          var toReturn = phone.replace(/\s/g, '');

          while (toReturn.startsWith("0")) {
            toReturn = toReturn.substring(1);
          }

          return toReturn;
        }
      }, {
        key: "formatDistance",
        value: function formatDistance(distance, distanceMetric) {
          if (!distance) distance = 0;
          var divider = distanceMetric == "km" ? 1000 : 1609.34;
          return Number(distance / divider).toFixed(2) + distanceMetric;
        }
      }, {
        key: "setSearchHistory",
        value: function setSearchHistory(sh, key) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_SEARCH_HISTORY + key, JSON.stringify(sh));
        }
      }, {
        key: "getSearchHistory",
        value: function getSearchHistory(key) {
          var adl = JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_SEARCH_HISTORY + key));
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
        key: "getReminders",
        value: function getReminders() {
          var adl = JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_REMINDERS));
          return adl && adl.length ? adl : new Array();
        }
      }, {
        key: "removeReminder",
        value: function removeReminder(reminder) {
          var reminders = this.getReminders();

          for (var i = 0; i < reminders.length; i++) {
            if (String(reminders[i].notificationIds) == String(reminder.notificationIds)) {
              reminders.splice(i, 1);
              break;
            }
          }

          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_REMINDERS, JSON.stringify(reminders));
          return reminders;
        }
      }, {
        key: "saveReminder",
        value: function saveReminder(reminder) {
          var reminders = this.getReminders();
          reminders.push(reminder);
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_REMINDERS, JSON.stringify(reminders));
        }
      }, {
        key: "getLastReminderID",
        value: function getLastReminderID() {
          var notiId = window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_REMINDER_LASTID);
          return notiId != null ? Number(notiId) : 0;
        }
      }, {
        key: "setLastReminderID",
        value: function setLastReminderID(latRemId) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_REMINDER_LASTID, String(latRemId));
        }
      }, {
        key: "getCategoriesParent",
        value: function getCategoriesParent() {
          var adl = JSON.parse(window.localStorage.getItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_CATEGORIES_PARENT));
          return adl && adl.length ? adl : new Array();
        }
      }, {
        key: "setCategoriesParent",
        value: function setCategoriesParent(cats) {
          window.localStorage.setItem(_constants_models__WEBPACK_IMPORTED_MODULE_0__["Constants"].KEY_CATEGORIES_PARENT, JSON.stringify(cats));
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
            var _iterator51 = _createForOfIteratorHelper(settings),
                _step51;

            try {
              for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
                var s = _step51.value;

                if (s.key == settingKey) {
                  toReturn = s.value;
                  break;
                }
              }
            } catch (err) {
              _iterator51.e(err);
            } finally {
              _iterator51.f();
            }
          }

          if (!toReturn) toReturn = "";
          return toReturn;
        }
      }, {
        key: "getChatChild",
        value: function getChatChild(userId, myId) {
          //example: userId="9" and myId="5" -->> chat child = "5-9"
          var values = [userId, myId];
          values.sort(function (one, two) {
            return one > two ? -1 : 1;
          });
          return values[0] + "-" + values[1];
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
        key: "formatMillisDateTimeWOYear",
        value: function formatMillisDateTimeWOYear(millis, locale) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(millis).locale(locale).format("Do MMM, HH:mm");
        }
      }, {
        key: "formatMillisDateTime",
        value: function formatMillisDateTime(millis, locale) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(millis).locale(locale).format("Do MMM YYYY, HH:mm");
        }
      }, {
        key: "formatTimestampDateTime",
        value: function formatTimestampDateTime(timestamp, locale) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(timestamp).locale(locale).format("Do MMM YYYY, HH:mm");
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
  "./src/models/notification.models.ts": function srcModelsNotificationModelsTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/models/order-request.models.ts": function srcModelsOrderRequestModelsTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/models/rating-summary.models.ts": function srcModelsRatingSummaryModelsTs(module, __webpack_exports__, __webpack_require__) {
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

  },

  /***/
  "./src/models/user.models.ts": function srcModelsUserModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\fiver\Bernard\Agocarry\agocarry-customer\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map