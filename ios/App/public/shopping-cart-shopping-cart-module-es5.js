(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopping-cart-shopping-cart-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/shopping-cart/shopping-cart.page.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/shopping-cart/shopping-cart.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMenuExploreShoppingCartShoppingCartPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\" [routerLink]=\"['/menu/tabs/explore/explore-detail/', (wisataList | async)?.id]\">\r\n      <ion-icon class=\"header__icon\" src='assets/icon/backButton.svg'></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      Wisea\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=\"background\">\r\n    <form [formGroup]=\"shopForm\" (submit)=\"shopping()\">\r\n  <ion-item-group class=\"body__container\">\r\n      <ion-item-group class=\"body__card\">\r\n        <ion-card *ngIf=\"(wisataList | async)\">\r\n          <ion-card-header>\r\n            <ion-row>\r\n              <ion-item-group class=\"cart__avatar\">\r\n                <ion-avatar slot=\"start\">\r\n                  <img [src]=\"(imageDetail[0] | async)\">\r\n                </ion-avatar>\r\n              </ion-item-group>\r\n              <ion-col>\r\n                <ion-card-title style=\"color: var(--ion-color-primary); font-size: 16px;\"><strong>{{ (wisataList | async)?.nama }}</strong></ion-card-title>\r\n                <ion-row>\r\n                  <ion-chip color=\"success\">\r\n                    <ion-label style=\"font-size: 12px;\">{{ (wisataList | async)?.kategori }}</ion-label>\r\n                  </ion-chip>\r\n                  <ion-item-group>\r\n                    <ion-row style=\"display: flex;\">\r\n                      <ion-icon name=\"bag-handle-outline\" style=\"font-size: 16px; align-self: center; margin-right: 8px;\"></ion-icon>\r\n                      <p>{{ (wisataList | async)?.harga | currency:'IDR':'symbol-narrow':'3.0' }}</p>\r\n                    </ion-row>\r\n                  </ion-item-group>\r\n                </ion-row>\r\n                <ion-item-group class=\"btn__qty\">\r\n                  <ion-row>\r\n                    <ion-icon class=\"header__icon btn__qty-remove\" name=\"remove-circle\" (click)=\"decrementQty()\" item-right></ion-icon>\r\n                    <ion-input class=\"btn__qty-value\" type=\"number\" min=\"0\" [(ngModel)]=\"qty\" formControlName=\"qty\"></ion-input>\r\n                    <ion-icon class=\"header__icon btn__qty-add\" name=\"add-circle\" (click)=\"incrementQty()\" item-right></ion-icon>\r\n                  </ion-row>\r\n                </ion-item-group>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-header>\r\n        </ion-card>\r\n        <ion-item-group class=\"body__form\">\r\n          <ion-label style=\"color: var(--ion-color-primary); margin: 8px 8px;\"><strong>Data pribadi</strong></ion-label>\r\n          <ion-item-group>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">NIK</ion-label>\r\n              <ion-input autofocus type=\"number\" clear-input required formControlName=\"nik\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Nomor telepon</ion-label>\r\n              <ion-input clear-input type=\"number\" required formControlName=\"tlp\"></ion-input>\r\n            </ion-item>\r\n          </ion-item-group>\r\n        </ion-item-group>\r\n      </ion-item-group>\r\n      <ion-item-group class=\"body__total\">\r\n        <ion-row class=\"body__total-buy\">\r\n          <ion-label style=\"color: var(--ion-color-primary); font-size: 14px;\"><strong>Jumlah</strong></ion-label>\r\n          <ion-label style=\"font-size: 14px;\">{{ qty }}</ion-label>\r\n        </ion-row>\r\n        <ion-row class=\"body__total-buy\">\r\n          <ion-label style=\"color: var(--ion-color-primary);\"><strong>Total</strong></ion-label>\r\n          <ion-label>{{ total | currency:'IDR'}}</ion-label>\r\n        </ion-row>\r\n        <ion-button type=\"submit\" shape=\"round\" expand=\"full\" class=\"btn\" [disabled]=\"!shopForm.valid\">Bayar</ion-button>\r\n      </ion-item-group>\r\n  </ion-item-group>\r\n  </form>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/menu/explore/shopping-cart/shopping-cart-routing.module.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/menu/explore/shopping-cart/shopping-cart-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: ShoppingCartPageRoutingModule */

    /***/
    function srcAppMenuExploreShoppingCartShoppingCartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShoppingCartPageRoutingModule", function () {
        return ShoppingCartPageRoutingModule;
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


      var _shopping_cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shopping-cart.page */
      "./src/app/menu/explore/shopping-cart/shopping-cart.page.ts");

      var routes = [{
        path: '',
        component: _shopping_cart_page__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartPage"]
      }, {
        path: 'payment-summary',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | payment-summary-payment-summary-module */
          [__webpack_require__.e("common"), __webpack_require__.e("payment-summary-payment-summary-module")]).then(__webpack_require__.bind(null,
          /*! ./payment-summary/payment-summary.module */
          "./src/app/menu/explore/shopping-cart/payment-summary/payment-summary.module.ts")).then(function (m) {
            return m.PaymentSummaryPageModule;
          });
        }
      }];

      var ShoppingCartPageRoutingModule = function ShoppingCartPageRoutingModule() {
        _classCallCheck(this, ShoppingCartPageRoutingModule);
      };

      ShoppingCartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ShoppingCartPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/menu/explore/shopping-cart/shopping-cart.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/menu/explore/shopping-cart/shopping-cart.module.ts ***!
      \********************************************************************/

    /*! exports provided: ShoppingCartPageModule */

    /***/
    function srcAppMenuExploreShoppingCartShoppingCartModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShoppingCartPageModule", function () {
        return ShoppingCartPageModule;
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


      var _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shopping-cart-routing.module */
      "./src/app/menu/explore/shopping-cart/shopping-cart-routing.module.ts");
      /* harmony import */


      var _shopping_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shopping-cart.page */
      "./src/app/menu/explore/shopping-cart/shopping-cart.page.ts");

      var ShoppingCartPageModule = function ShoppingCartPageModule() {
        _classCallCheck(this, ShoppingCartPageModule);
      };

      ShoppingCartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_shopping_cart_page__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartPage"]]
      })], ShoppingCartPageModule);
      /***/
    },

    /***/
    "./src/app/menu/explore/shopping-cart/shopping-cart.page.scss":
    /*!********************************************************************!*\
      !*** ./src/app/menu/explore/shopping-cart/shopping-cart.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMenuExploreShoppingCartShoppingCartPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header__icon {\n  font-size: 24px;\n}\n\n.cart__avatar {\n  margin-right: 8px;\n}\n\n.body__container {\n  background-color: #FFF9E9 !important;\n  padding-top: 32px;\n}\n\n.body__card {\n  border-radius: 24px;\n  background-color: white;\n  padding: 32px 0px;\n  margin-top: -48px;\n}\n\n.body__form {\n  padding: 0px 8px 8px;\n}\n\n.body__total {\n  background-color: #FFF9E9;\n  padding: 16px 8px;\n}\n\n.body__total-buy {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.btn {\n  margin-top: 16px;\n}\n\n.btn__qty {\n  display: flex;\n  justify-content: space-between;\n}\n\n.btn__qty-add {\n  color: #7BA57F;\n  align-self: center;\n}\n\n.btn__qty-remove {\n  color: #F06F53;\n  align-self: center;\n}\n\n.btn__qty-value {\n  width: 40px;\n  align-self: center;\n  text-align: center;\n}\n\nion-card {\n  background-color: #FFF9E9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9leHBsb3JlL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxlQUFBO0FBQU47O0FBS0k7RUFDRSxpQkFBQTtBQUZOOztBQU9JO0VBQ0Usb0NBQUE7RUFDQSxpQkFBQTtBQUpOOztBQU1JO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFKTjs7QUFNSTtFQUNFLG9CQUFBO0FBSk47O0FBTUk7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBSk47O0FBS007RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUhSOztBQVFFO0VBQ0UsZ0JBQUE7QUFMSjs7QUFNSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUpOOztBQUtNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBSFI7O0FBS007RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFIUjs7QUFLTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSFI7O0FBUUU7RUFDRSx5QkFBQTtBQUxKIiwiZmlsZSI6InNyYy9hcHAvbWVudS9leHBsb3JlL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgICZfX2ljb257XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNhcnQge1xyXG4gICAgJl9fYXZhdGFyIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ib2R5IHtcclxuICAgICZfX2NvbnRhaW5lciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY5RTkgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy10b3A6IDMycHg7XHJcbiAgICB9XHJcbiAgICAmX19jYXJkIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDMycHggMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtNDhweFxyXG4gICAgfVxyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgIHBhZGRpbmc6IDBweCA4cHggOHB4O1xyXG4gICAgfVxyXG4gICAgJl9fdG90YWwge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUU5O1xyXG4gICAgICBwYWRkaW5nOiAxNnB4IDhweDtcclxuICAgICAgJi1idXkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAmX19xdHkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICYtYWRkIHtcclxuICAgICAgICBjb2xvcjogIzdCQTU3RjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgJi1yZW1vdmUge1xyXG4gICAgICAgIGNvbG9yOiAjRjA2RjUzO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAmLXZhbHVlIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY5RTk7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/menu/explore/shopping-cart/shopping-cart.page.ts":
    /*!******************************************************************!*\
      !*** ./src/app/menu/explore/shopping-cart/shopping-cart.page.ts ***!
      \******************************************************************/

    /*! exports provided: ShoppingCartPage */

    /***/
    function srcAppMenuExploreShoppingCartShoppingCartPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShoppingCartPage", function () {
        return ShoppingCartPage;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _service_wisata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../service/wisata.service */
      "./src/app/service/wisata.service.ts");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../service/auth.service */
      "./src/app/service/auth.service.ts");
      /* harmony import */


      var src_app_service_history_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/service/history.service */
      "./src/app/service/history.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ShoppingCartPage = /*#__PURE__*/function () {
        function ShoppingCartPage(route, wisataService, storage, formBuilder, authService, historyService, firestore, toastController) {
          _classCallCheck(this, ShoppingCartPage);

          this.route = route;
          this.wisataService = wisataService;
          this.storage = storage;
          this.authService = authService;
          this.historyService = historyService;
          this.firestore = firestore;
          this.toastController = toastController;
          this.shopCart = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
          this.cartItems = [];
          this.paid = false;
          this.nama = [];
          this.shopForm = formBuilder.group({
            nik: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            tlp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            qty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]
          });
        }

        _createClass(ShoppingCartPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.wisataId = this.route.snapshot.paramMap.get('id');
            this.wisataList = this.wisataService.getWisataDetail(this.wisataId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (wisataList) {
              _this.imageDetail = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
              wisataList.gambarUrl = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
              wisataList.gambar.forEach(function (gambar, index) {
                _this.imageDetail[index] = _this.getImageUrl(gambar);
              });
              _this.max = wisataList.tiketTersedia;
              _this.harga = wisataList.harga;
              _this.total = _this.harga;
              _this.qty = 1;
              _this.wisata = wisataList.nama;
              _this.oldTiketTerjual = wisataList.tiketTerjual;
              _this.oldTiketTersedia = wisataList.tiketTersedia;
              return wisataList;
            }));
          }
        }, {
          key: "getImageUrl",
          value: function getImageUrl(imageName) {
            return this.storage.ref("wisata/".concat(imageName)).getDownloadURL();
          }
        }, {
          key: "incrementQty",
          value: function incrementQty() {
            this.qty++;
            this.total = this.qty * this.harga;

            if (this.qty > this.max) {
              this.qty = this.max;
            }
          }
        }, {
          key: "decrementQty",
          value: function decrementQty() {
            this.qty--;
            this.total = this.qty * this.harga;

            if (this.qty < 1) {
              this.qty = 1;
              this.total = this.harga;
            }
          }
        }, {
          key: "shopping",
          value: function shopping() {
            var _this2 = this;

            var qty = this.shopForm.value.qty;
            var nik = this.shopForm.value.nik;
            var tlp = this.shopForm.value.tlp;
            var date = new Date();
            this.authService.getUserData().subscribe(function (ref) {
              _this2.userProfile = ref;
              _this2.oldBalance = _this2.userProfile.balance;
              var email = _this2.userProfile.email;

              if (_this2.paid === false) {
                if (_this2.oldBalance < _this2.total || _this2.oldTiketTersedia < _this2.qty) {
                  _this2.presentToast();
                } else if (!_this2.paid) {
                  _this2.firestore.collection('wisata').doc(_this2.wisataId).update({
                    tiketTerjual: _this2.oldTiketTerjual + qty,
                    tiketTersedia: _this2.oldTiketTersedia - qty
                  });

                  _this2.firestore.collection('users').doc(_this2.userProfile.uid).update({
                    balance: _this2.oldBalance - _this2.total
                  });

                  _this2.historyService.addHistory(qty, _this2.userProfile.name, date, _this2.wisata, _this2.total, email, tlp, false, nik);

                  _this2.paid = true;
                }
              }
            });
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'Saldo anda tidak cukup.',
                        duration: 2000,
                        color: 'danger',
                        position: 'top',
                        mode: 'ios'
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ShoppingCartPage;
      }();

      ShoppingCartPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _service_wisata_service__WEBPACK_IMPORTED_MODULE_4__["WisataService"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }, {
          type: _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: src_app_service_history_service__WEBPACK_IMPORTED_MODULE_6__["HistoryService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ToastController"]
        }];
      };

      ShoppingCartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./shopping-cart.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/shopping-cart/shopping-cart.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./shopping-cart.page.scss */
        "./src/app/menu/explore/shopping-cart/shopping-cart.page.scss"))["default"]]
      })], ShoppingCartPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=shopping-cart-shopping-cart-module-es5.js.map