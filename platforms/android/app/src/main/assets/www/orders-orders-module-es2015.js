(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'my_orders' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n        <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"{{'pull_refresh' | translate}}\"\r\n            refreshingSpinner=\"circles\" refreshingText=\"{{'refreshing' | translate}}\">\r\n        </ion-refresher-content>\r\n    </ion-refresher>\r\n    <div class=\"empty-view\" *ngIf=\"!isLoading && (!orders || !orders.length)\">\r\n        <div style=\"text-align:center\">\r\n            <img src=\"assets/images/empty_orders.png\" alt=\"no offers\" />\r\n            <span *ngIf=\"userMe\" style=\"color:#9E9E9E; font-weight:bold;\">\r\n                {{'empty_orders' | translate}}\r\n            </span>\r\n            <p *ngIf=\"!userMe\" style=\"color:#9E9E9E; font-weight:bold;\" [innerHTML]=\"'alert_login_msg' | translate\"></p>\r\n        </div>\r\n    </div>\r\n\r\n    <ion-list lines=\"none\">\r\n        <h2 *ngIf=\"inProcessList && inProcessList.length\">{{'in_process' | translate}}</h2>\r\n        <ion-item *ngFor=\"let order of inProcessList\"\r\n            [ngClass]=\"{'in_transist': (order.status=='dispatched' || order.status=='intransit'), 'delivered':order.status=='complete', 'confirmed':order.status=='accepted' }\"\r\n            (click)=\"navOrderDetail(order)\">\r\n            <div class=\"item_inner d-flex\">\r\n                <div class=\"img_box center_img\">\r\n                    <img [src]=\"order.vendor.image\" class=\"crop_img\">\r\n                </div>\r\n                <div class=\"text_box\">\r\n                    <h3 class=\"d-flex\">{{order.vendor.name}} <span\r\n                            class=\"end order_status\">{{('order_status_'+order.status) | translate}}</span></h3>\r\n                    <h4 class=\"d-flex\">\r\n                        {{order.created_at}}\r\n                        <span class=\"end\">{{'order_id' | translate}}{{order.id}} | {{order.total_toshow}}</span>\r\n                    </h4>\r\n                    <div class=\"item_details d-flex\">\r\n                        <div class=\"item_list\">\r\n                            <h5 *ngFor=\"let product of order.products\" class=\"d-flex\">\r\n                                {{product?.vendor_product.product.title}}\r\n                            </h5>\r\n                        </div>\r\n                        <!-- <h5 class=\"end\" *ngIf=\"order.status == 'complete'\" (click)=\"navReviewProduct(order)\">{{'review_now' | translate}}</h5> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ion-item>\r\n\r\n        <h2 *ngIf=\"pastOrderList && pastOrderList.length\">{{'past' | translate}}</h2>\r\n        <ion-item *ngFor=\"let order of pastOrderList\"\r\n            [ngClass]=\"{'in_transist': (order.status=='dispatched' || order.status=='intransit'), 'delivered':order.status=='complete', 'confirmed':order.status=='accepted' }\">\r\n            <div class=\"item_inner d-flex\">\r\n                <div class=\"img_box center_img\" (click)=\"navOrderDetail(order)\">\r\n                    <img [src]=\"order.vendor.image\" class=\"crop_img\">\r\n                </div>\r\n                <div class=\"text_box\">\r\n                    <h3 class=\"d-flex\">{{order.vendor.name}} <span class=\"end order_status\"\r\n                            (click)=\"navOrderDetail(order)\">{{('order_status_'+order.status) | translate}}</span></h3>\r\n                    <h4 class=\"d-flex\">\r\n                        {{order.created_at}}\r\n                        <span class=\"end\" (click)=\"navOrderDetail(order)\">{{'order_id' | translate}}{{order.id}} |\r\n                            {{order.total_toshow}}</span>\r\n                    </h4>\r\n                    <div class=\"item_details d-flex\">\r\n                        <div class=\"item_list\" (click)=\"navOrderDetail(order)\">\r\n                            <h3 *ngFor=\"let product of order.products\" class=\"d-flex\">\r\n                                {{product?.vendor_product.product.title}}\r\n                                <span *ngIf=\"order.status == 'complete' && product.vendor_product.product.reviewed\"\r\n                                    class=\"icon_box end\">\r\n                                    <ion-icon class=\"zmdi zmdi-star active\"></ion-icon>\r\n                                    <ion-icon class=\"zmdi zmdi-star active\"></ion-icon>\r\n                                    <ion-icon class=\"zmdi zmdi-star active\"></ion-icon>\r\n                                    <ion-icon class=\"zmdi zmdi-star active\"></ion-icon>\r\n                                    <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\r\n                                </span>\r\n                            </h3>\r\n                        </div>\r\n                        <h5 class=\"end\" *ngIf=\"order.status == 'complete'\" (click)=\"navReviewProduct(order)\">\r\n                            {{'review_now' | translate}}</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n\r\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\r\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{'loading' | translate}}\">\r\n        </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/orders/orders-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/orders/orders-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function() { return OrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.page */ "./src/app/orders/orders.page.ts");




const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersPageRoutingModule);



/***/ }),

/***/ "./src/app/orders/orders.module.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.module.ts ***!
  \*****************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/orders/orders-routing.module.ts");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orders.page */ "./src/app/orders/orders.page.ts");








let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrdersPageRoutingModule"]
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_7__["OrdersPage"]]
    })
], OrdersPageModule);



/***/ }),

/***/ "./src/app/orders/orders.page.scss":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  padding: 0;\n  background: none;\n  padding-top: 8px;\n}\nion-list h2 {\n  margin: 0;\n  color: var(--text-light2);\n  font-weight: 400;\n  font-size: 0.95rem;\n  padding: 7px 15px 15px 15px;\n}\nion-list ion-item {\n  padding: 16px 15px 20px 15px;\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  margin-bottom: 8px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n  align-items: flex-start;\n}\nion-list ion-item .item_inner .img_box {\n  min-width: 35px;\n  height: 35px;\n  margin-right: 15px;\n  border-radius: 4px;\n}\nion-list ion-item .item_inner .text_box {\n  width: 100%;\n}\nion-list ion-item .item_inner .text_box h3 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding-bottom: 6px;\n  color: var(--text-dark);\n}\nion-list ion-item .item_inner .text_box h3 span.order_status {\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  font-size: 0.85rem;\n}\nion-list ion-item .item_inner .text_box h4 {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: var(--text-light2);\n  padding-bottom: 16px;\n}\nion-list ion-item .item_inner .text_box .item_details {\n  width: 100%;\n  align-items: flex-end;\n}\nion-list ion-item .item_inner .text_box .item_details .item_list {\n  width: 100%;\n}\nion-list ion-item .item_inner .text_box .item_details .item_list h3 {\n  font-size: 0.95rem;\n  font-weight: 500;\n  padding-bottom: 10px;\n}\nion-list ion-item .item_inner .text_box .item_details .item_list h3:last-child {\n  padding-bottom: 0;\n}\nion-list ion-item .item_inner .text_box .item_details .item_list h3 span.icon_box ion-icon {\n  color: #dddddd;\n  font-size: 0.8rem;\n}\nion-list ion-item .item_inner .text_box .item_details .item_list h3 span.icon_box ion-icon.active {\n  color: var(--yelow_color);\n}\nion-list ion-item .item_inner .text_box .item_details h5 {\n  margin: 0;\n  color: var(--primary);\n  font-size: 0.9rem;\n  letter-spacing: 0.5px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\nion-list ion-item.in_transist .item_inner .text_box h3 span.order_status {\n  color: var(--yelow_color);\n}\nion-list ion-item.confirmed .item_inner .text_box h3 span.order_status {\n  color: var(--primary);\n}\nion-list ion-item.delivered .item_inner .text_box h3 span.order_status {\n  color: var(--text-dark);\n  font-weight: 700;\n}\n.empty-view {\n  width: 200px;\n  margin: auto;\n  height: 200px;\n  top: 10%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 10%;\n}\n.empty-view img {\n  width: 100px;\n  margin: auto;\n}\n.empty-view span {\n  display: block;\n  text-align: center;\n}\n.empty-view button {\n  margin-top: 50px;\n}\n.empty-view button span {\n  display: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL0Y6XFxmaXZlclxcQmVybmFyZFxcQWdvY2FycnlcXGFnb2NhcnJ5LWN1c3RvbWVyL3NyY1xcYXBwXFxvcmRlcnNcXG9yZGVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL29yZGVycy9vcmRlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENJO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDQ1I7QURFSTtFQUNJLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGtCQUFBO0FDQVI7QURFUTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtBQ0FaO0FERVk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNBaEI7QURHWTtFQUNJLFdBQUE7QUNEaEI7QURHZ0I7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNEcEI7QURJd0I7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxrQkFBQTtBQ0Y1QjtBRE9nQjtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQ0xwQjtBRFFnQjtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQ05wQjtBRFFvQjtFQUNJLFdBQUE7QUNOeEI7QURRd0I7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNONUI7QURRNEI7RUFDSSxpQkFBQTtBQ05oQztBRFdvQztFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ1R4QztBRFd3QztFQUNJLHlCQUFBO0FDVDVDO0FEaUJvQjtFQUNJLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUNmeEI7QUQwQjRCO0VBQ0kseUJBQUE7QUN4QmhDO0FEcUM0QjtFQUNJLHFCQUFBO0FDbkNoQztBRGdENEI7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0FDOUNoQztBRHdEQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ3JESjtBRHVESTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDckRSO0FEd0RJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDdERSO0FEeURJO0VBQ0ksZ0JBQUE7QUN2RFI7QUR5RFE7RUFDSSx5QkFBQTtBQ3ZEWiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMTVweCAxNXB4IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTVweCAyMHB4IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICAgICAgICAuaXRlbV9pbm5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgICAgIC5pbWdfYm94IHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRleHRfYm94IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYub3JkZXJfc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLml0ZW1fZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaXRlbV9saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmljb25fYm94IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkZGRkZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXllbG93X2NvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5pbl90cmFuc2lzdCB7XHJcbiAgICAgICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYub3JkZXJfc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teWVsb3dfY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmNvbmZpcm1lZCB7XHJcbiAgICAgICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYub3JkZXJfc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZGVsaXZlcmVkIHtcclxuICAgICAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICAgICAgLnRleHRfYm94IHtcclxuICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5vcmRlcl9zdGF0dXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lbXB0eS12aWV3IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMTAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuaW9uLWxpc3QgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgcGFkZGluZzogN3B4IDE1cHggMTVweCAxNXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAxNnB4IDE1cHggMjBweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLmltZ19ib3gge1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3gge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoMyBzcGFuLm9yZGVyX3N0YXR1cyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoNCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IC5pdGVtX2RldGFpbHMge1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IC5pdGVtX2RldGFpbHMgLml0ZW1fbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IC5pdGVtX2RldGFpbHMgLml0ZW1fbGlzdCBoMyB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggLml0ZW1fZGV0YWlscyAuaXRlbV9saXN0IGgzOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCAuaXRlbV9kZXRhaWxzIC5pdGVtX2xpc3QgaDMgc3Bhbi5pY29uX2JveCBpb24taWNvbiB7XG4gIGNvbG9yOiAjZGRkZGRkO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCAuaXRlbV9kZXRhaWxzIC5pdGVtX2xpc3QgaDMgc3Bhbi5pY29uX2JveCBpb24taWNvbi5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0teWVsb3dfY29sb3IpO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IC5pdGVtX2RldGFpbHMgaDUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0uaW5fdHJhbnNpc3QgLml0ZW1faW5uZXIgLnRleHRfYm94IGgzIHNwYW4ub3JkZXJfc3RhdHVzIHtcbiAgY29sb3I6IHZhcigtLXllbG93X2NvbG9yKTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtLmNvbmZpcm1lZCAuaXRlbV9pbm5lciAudGV4dF9ib3ggaDMgc3Bhbi5vcmRlcl9zdGF0dXMge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5pb24tbGlzdCBpb24taXRlbS5kZWxpdmVyZWQgLml0ZW1faW5uZXIgLnRleHRfYm94IGgzIHNwYW4ub3JkZXJfc3RhdHVzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5lbXB0eS12aWV3IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMjAwcHg7XG4gIHRvcDogMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDEwJTtcbn1cbi5lbXB0eS12aWV3IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmVtcHR5LXZpZXcgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW1wdHktdmlldyBidXR0b24ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmVtcHR5LXZpZXcgYnV0dG9uIHNwYW4ge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/orders/orders.page.ts":
/*!***************************************!*\
  !*** ./src/app/orders/orders.page.ts ***!
  \***************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common/ui-elements.service */ "./src/app/services/common/ui-elements.service.ts");
/* harmony import */ var _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/network/api.service */ "./src/app/services/network/api.service.ts");
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/helper.models */ "./src/models/helper.models.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);








let OrdersPage = class OrdersPage {
    constructor(navCtrl, translate, uiElementService, apiService) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.uiElementService = uiElementService;
        this.apiService = apiService;
        this.subscriptions = new Array();
        this.orders = new Array();
        this.isLoading = true;
        this.pageNo = 1;
        this.doneAll = false;
        this.orderStatus = ['cancelled', 'rejected', 'refund', 'failed', 'complete'];
        this.pastOrderList = new Array();
        this.inProcessList = new Array();
    }
    ngOnInit() {
        this.userMe = src_models_helper_models__WEBPACK_IMPORTED_MODULE_6__["Helper"].getLoggedInUser();
        if (this.userMe != null) {
            this.translate.get("loading").subscribe(value => {
                this.uiElementService.presentLoading(value);
                this.getOrders();
            });
        }
        else {
            this.isLoading = false;
            this.alertLogin();
        }
    }
    ngOnDestroy() {
        this.unRegisterUpdates();
        for (let sub of this.subscriptions)
            sub.unsubscribe();
        this.uiElementService.dismissLoading();
    }
    doRefresh(event) {
        this.refresherEvent = event;
        this.pageNo = 1;
        this.orders = [];
        this.pastOrderList = [];
        this.inProcessList = [];
        this.isLoading = true;
        this.translate.get("loading").subscribe(value => {
            this.unRegisterUpdates();
            this.uiElementService.presentLoading(value);
            this.getOrders();
        });
    }
    getOrders() {
        this.apiService.getOrders(this.pageNo).subscribe(res => {
            if ((!this.orders || !this.orders.length) && res.data && res.data.length)
                this.registerUpdates();
            this.isLoading = false;
            this.orders = this.orders.concat(res.data);
            this.setupOrders();
            this.doneAll = (!res.data || !res.data.length);
            this.uiElementService.dismissLoading();
            if (this.infiniteScrollEvent)
                this.infiniteScrollEvent.target.complete();
            if (this.refresherEvent)
                this.refresherEvent.target.complete();
        }, err => {
            console.log("getOrders", err);
            this.isLoading = false;
            if (this.infiniteScrollEvent)
                this.infiniteScrollEvent.target.complete();
            if (this.refresherEvent)
                this.refresherEvent.target.complete();
            this.uiElementService.dismissLoading();
        });
    }
    setupOrders() {
        let inProcessList = [];
        let pastOrderList = [];
        for (let element of this.orders) {
            if (element.status.toLowerCase() === this.orderStatus[0] || element.status.toLowerCase() === this.orderStatus[1] || element.status.toLowerCase() == this.orderStatus[2] ||
                element.status.toLowerCase() === this.orderStatus[3] || element.status.toLowerCase() == this.orderStatus[4]) {
                pastOrderList.push(element);
            }
            else {
                inProcessList.push(element);
            }
        }
        this.inProcessList = inProcessList;
        this.pastOrderList = pastOrderList;
    }
    doInfinite(event) {
        if (this.doneAll) {
            event.target.complete();
        }
        else {
            this.infiniteScrollEvent = event;
            this.pageNo = this.pageNo + 1;
            this.getOrders();
        }
    }
    updateStatusOnId(oId, oNew) {
        let index = -1;
        for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].id == oId) {
                index = i;
                break;
            }
        }
        if (index != -1) {
            this.orders[index].status = oNew.status;
            if (oNew.delivery != null) {
                oNew.delivery.delivery.user.image_url = "assets/images/empty_dp";
                if (!oNew.delivery.delivery.user.mediaurls || !oNew.delivery.delivery.user.mediaurls.images)
                    oNew.delivery.delivery.user.mediaurls = { images: [] };
                for (let imgObj of oNew.delivery.delivery.user.mediaurls.images)
                    if (imgObj["default"]) {
                        oNew.delivery.delivery.user.image_url = imgObj["default"];
                        break;
                    }
                this.orders[index].delivery = oNew.delivery;
            }
            this.setupOrders();
        }
    }
    registerUpdates() {
        const component = this;
        if (this.myOrdersRef == null) {
            this.myOrdersRef = firebase_app__WEBPACK_IMPORTED_MODULE_7__["database"]().ref("users").child(this.userMe.id).child("orders");
            this.myOrdersRef.on('child_changed', function (data) {
                var fireOrder = data.val();
                if (fireOrder.data != null)
                    component.updateStatusOnId(fireOrder.data.id, fireOrder.data);
            });
        }
    }
    unRegisterUpdates() {
        if (this.myOrdersRef != null) {
            this.myOrdersRef.off();
            this.myOrdersRef = null;
        }
    }
    alertLogin() {
        this.translate.get("alert_login_short").subscribe(value => this.uiElementService.presentToast(value));
        this.navCtrl.navigateForward(['./sign-in']);
    }
    navOrderDetail(order) {
        let navigationExtras = { state: { order: order } };
        this.navCtrl.navigateForward(['./orders-info'], navigationExtras);
    }
    navReviewProduct(order) {
        let checkReviewsStatus = false;
        order.products.map((element) => {
            if (!element.vendor_product.product.reviewed) {
                checkReviewsStatus = true;
            }
        });
        if (checkReviewsStatus) {
            let navigationExtras = { state: { order: order } };
            this.navCtrl.navigateForward(['./item-review'], navigationExtras);
        }
        else {
            this.translate.get("empty_reviews").subscribe(value => this.uiElementService.presentToast(value));
        }
    }
};
OrdersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"] },
    { type: _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orders.page.scss */ "./src/app/orders/orders.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _services_common_ui_elements_service__WEBPACK_IMPORTED_MODULE_4__["UiElementsService"], _services_network_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
], OrdersPage);



/***/ })

}]);
//# sourceMappingURL=orders-orders-module-es2015.js.map