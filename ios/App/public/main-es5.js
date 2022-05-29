(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
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
    "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicPwaElementsDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./pwa-action-sheet.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-action-sheet.entry.js", 43],
        "./pwa-camera-modal-instance.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js", 44],
        "./pwa-camera-modal.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js", 45],
        "./pwa-camera.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera.entry.js", 46],
        "./pwa-toast.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-toast.entry.js", 47]
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
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-menu menuId=\"main-menu\" contentId=\"main\">\r\n    <ion-content color=\"secondary\">\r\n      <div class=\"menu-header-bg\"></div>\r\n      <div class=\"header-content\">\r\n        <img [src]=\"userProfile?.photo\" alt=\"\">\r\n        <ion-label>\r\n          <h2>{{ userProfile?.username }}</h2>\r\n          <p>{{ userProfile?.name }}</p>\r\n        </ion-label>\r\n      </div>\r\n\r\n      <ion-list class=\"menu-items\" lines=\"none\">\r\n        <ion-menu-toggle menu=\"main-menu\">\r\n          <ion-item routerLink=\"/menu/tabs/profile/edit-profile\" color=\"secondary\">\r\n            <ion-icon name=\"home-outline\"></ion-icon>\r\n            <ion-label>Edit Profile</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-menu-toggle menu=\"main-menu\">\r\n          <ion-item color=\"secondary\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <ion-label>About App</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-menu-toggle menu=\"main-menu\">\r\n          <ion-item color=\"secondary\" (click)=\"logoutAlert()\">\r\n            <ion-icon name=\"log-out-outline\"></ion-icon>\r\n            <ion-label>Log out</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      /* harmony import */


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");

      var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["redirectUnauthorizedTo"])(['/']);
      };

      var redirectLoggedInToHome = function redirectLoggedInToHome() {
        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["redirectLoggedInTo"])(['/menu/tabs/home']);
      };

      var routes = [{
        path: '',
        redirectTo: 'on-boarding-screen',
        // redirectTo: 'menu/tabs/explore',
        pathMatch: 'full'
      }, {
        path: 'recommendation1',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | recommend-recommendation1-recommendation1-module */
          "recommend-recommendation1-recommendation1-module").then(__webpack_require__.bind(null,
          /*! ./recommend/recommendation1/recommendation1.module */
          "./src/app/recommend/recommendation1/recommendation1.module.ts")).then(function (m) {
            return m.Recommendation1PageModule;
          });
        }
      }, {
        path: 'recommendation2',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | recommend-recommendation2-recommendation2-module */
          "recommend-recommendation2-recommendation2-module").then(__webpack_require__.bind(null,
          /*! ./recommend/recommendation2/recommendation2.module */
          "./src/app/recommend/recommendation2/recommendation2.module.ts")).then(function (m) {
            return m.Recommendation2PageModule;
          });
        }
      }, {
        path: 'recommendation3',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | recommend-recommendation3-recommendation3-module */
          "recommend-recommendation3-recommendation3-module").then(__webpack_require__.bind(null,
          /*! ./recommend/recommendation3/recommendation3.module */
          "./src/app/recommend/recommendation3/recommendation3.module.ts")).then(function (m) {
            return m.Recommendation3PageModule;
          });
        }
      }, {
        path: 'recommendation4',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | recommend-recommendation4-recommendation4-module */
          "recommend-recommendation4-recommendation4-module").then(__webpack_require__.bind(null,
          /*! ./recommend/recommendation4/recommendation4.module */
          "./src/app/recommend/recommendation4/recommendation4.module.ts")).then(function (m) {
            return m.Recommendation4PageModule;
          });
        }
      }, {
        path: 'recommendation-result',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | recommend-recommendation-result-recommendation-result-module */
          [__webpack_require__.e("common"), __webpack_require__.e("recommend-recommendation-result-recommendation-result-module")]).then(__webpack_require__.bind(null,
          /*! ./recommend/recommendation-result/recommendation-result.module */
          "./src/app/recommend/recommendation-result/recommendation-result.module.ts")).then(function (m) {
            return m.RecommendationResultPageModule;
          });
        }
      }, Object.assign({
        path: 'on-boarding-screen',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | on-boarding-screen-on-boarding-screen-module */
          "on-boarding-screen-on-boarding-screen-module").then(__webpack_require__.bind(null,
          /*! ./on-boarding-screen/on-boarding-screen.module */
          "./src/app/on-boarding-screen/on-boarding-screen.module.ts")).then(function (m) {
            return m.OnBoardingScreenPageModule;
          });
        }
      }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["canActivate"])(redirectLoggedInToHome)), Object.assign({
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("default~edit-profile-edit-profile-module~login-login-module~register-register-module~reset-password-~d036686e"), __webpack_require__.e("default~edit-profile-edit-profile-module~email-confirmation-email-confirmation-module~login-login-mo~30f52c33"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["canActivate"])(redirectLoggedInToHome)), {
        path: 'register',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | register-register-module */
          [__webpack_require__.e("default~edit-profile-edit-profile-module~login-login-module~register-register-module~reset-password-~d036686e"), __webpack_require__.e("default~edit-profile-edit-profile-module~email-confirmation-email-confirmation-module~login-login-mo~30f52c33"), __webpack_require__.e("common"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null,
          /*! ./register/register.module */
          "./src/app/register/register.module.ts")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'reset-password',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | reset-password-reset-password-module */
          [__webpack_require__.e("default~edit-profile-edit-profile-module~login-login-module~register-register-module~reset-password-~d036686e"), __webpack_require__.e("reset-password-reset-password-module")]).then(__webpack_require__.bind(null,
          /*! ./reset-password/reset-password.module */
          "./src/app/reset-password/reset-password.module.ts")).then(function (m) {
            return m.ResetPasswordPageModule;
          });
        }
      }, {
        path: 'menu',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | menu-menu-module */
          "menu-menu-module").then(__webpack_require__.bind(null,
          /*! ./menu/menu.module */
          "./src/app/menu/menu.module.ts")).then(function (m) {
            return m.MenuPageModule;
          });
        }
      }, {
        path: 'explore',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | menu-explore-explore-module */
          [__webpack_require__.e("common"), __webpack_require__.e("explore-explore-module")]).then(__webpack_require__.bind(null,
          /*! ./menu/explore/explore.module */
          "./src/app/menu/explore/explore.module.ts")).then(function (m) {
            return m.ExplorePageModule;
          });
        }
      }, {
        path: 'history',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | history-history-module */
          "history-history-module").then(__webpack_require__.bind(null,
          /*! ./history/history.module */
          "./src/app/history/history.module.ts")).then(function (m) {
            return m.HistoryPageModule;
          });
        }
      }, {
        path: 'history-detail/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | history-history-detail-history-detail-routing-module */
          "common").then(__webpack_require__.bind(null,
          /*! ./history/history-detail/history-detail-routing.module */
          "./src/app/history/history-detail/history-detail-routing.module.ts")).then(function (m) {
            return m.HistoryDetailPageRoutingModule;
          });
        }
      }, {
        path: 'payment-summary/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | menu-explore-shopping-cart-payment-summary-payment-summary-routing-module */
          "common").then(__webpack_require__.bind(null,
          /*! ./menu/explore/shopping-cart/payment-summary/payment-summary-routing.module */
          "./src/app/menu/explore/shopping-cart/payment-summary/payment-summary-routing.module.ts")).then(function (m) {
            return m.PaymentSummaryPageRoutingModule;
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
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background-color: var(--ion-color-primary);\n  box-shadow: 0px 1px 10px black;\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin-right: 14px;\n}\n\n.header-content h2 {\n  font-weight: 300;\n  color: #ffffff;\n}\n\n.header-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n}\n\n.menu-items {\n  margin: 0px;\n  background-color: var(--ion-color-secondary);\n}\n\n.menu-items ion-icon {\n  margin-right: 20px;\n  color: #946E41;\n}\n\n.menu-items ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0lBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFLQTtFQUNFLFdBQUE7RUFDQSw0Q0FBQTtBQUZGOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubWVudS1oZWFkZXItYmcge1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiKDAsIDAsIDApO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggNTBweDtcclxuICBtYXJnaW4tbGVmdDogLTE4cHg7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLmhlYWRlci1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjZTRlNGU0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxuICB9XHJcbn1cclxuXHJcbi5tZW51LWl0ZW1zIHtcclxuICBtYXJnaW46IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM5NDZFNDE7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./service/auth.service */
      "./src/app/service/auth.service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, router, authService, loadingController, alertController, navController) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.router = router;
          this.authService = authService;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.navController = navController; // this.authService.userAuth.onAuthStateChanged(user => {
          //   if (user) {
          //     console.log(user);
          //     this.initializeApp();
          //   }
          // });

          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.platform.ready().then(function () {
                        _this.statusBar.styleDefault();

                        _this.splashScreen.hide();

                        _this.menuRadius();
                      });
                      this.authService.userAuth.onAuthStateChanged(function (user) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (!user) {
                                    _context.next = 3;
                                    break;
                                  }

                                  _context.next = 3;
                                  return this.updateUserProfile();

                                case 3:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "updateUserProfile",
          value: function updateUserProfile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.create();

                    case 2:
                      loading = _context3.sent;
                      _context3.next = 5;
                      return loading.present();

                    case 5:
                      this.authService.getPromisePhotoUserData().then(function (obs) {
                        obs.subscribe(function (ref) {
                          _this2.authService.getUserPhotoUrl(ref.photo).subscribe(function (res) {
                            _this2.userProfile = ref;
                            _this2.userProfile.photo = res;
                            loading.dismiss();
                          });
                        });
                      });

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "menuRadius",
          value: function menuRadius() {
            setTimeout(function () {
              document.querySelector('ion-menu').shadowRoot.querySelector('.menu-inner').setAttribute('style', 'border-radius:0px 30px 30px 0px');
            }, 200);
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var loading;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingController.create();

                    case 2:
                      loading = _context4.sent;
                      _context4.next = 5;
                      return loading.present();

                    case 5:
                      _context4.next = 7;
                      return this.authService.logout().then(function () {
                        loading.dismiss();
                      });

                    case 7:
                      return _context4.abrupt("return", this.navController.navigateRoot('/', {
                        replaceUrl: true
                      }));

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "logoutAlert",
          value: function logoutAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        cssClass: 'logout-alert',
                        header: 'Logout',
                        // subHeader: 'Yahh... Yakin nih mau keluar?',
                        message: "\n                <p>Yakin ingin keluar?</p>\n                <img src=\"../assets/login/logout.svg\"></img>",
                        buttons: [{
                          text: 'Tidak',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Ya',
                          handler: function handler() {
                            _this3.logout();
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
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


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
      /* harmony import */


      var _credentials__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./credentials */
      "./src/app/credentials.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./service/auth.service */
      "./src/app/service/auth.service.ts"); // using Ionic Storage (Local Storage)
      // using firebase store


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot(), _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_credentials__WEBPACK_IMPORTED_MODULE_14__["firebaseConfig"]), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorageModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _service_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/credentials.ts":
    /*!********************************!*\
      !*** ./src/app/credentials.ts ***!
      \********************************/

    /*! exports provided: firebaseConfig */

    /***/
    function srcAppCredentialsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
        return firebaseConfig;
      });

      var firebaseConfig = {
        apiKey: 'AIzaSyBSLMbliZdidFaCBfWuXkt2XM3SwBngQxg',
        authDomain: 'wisea-f81b0.firebaseapp.com',
        databaseURL: 'https://wisea-f81b0.firebaseio.com',
        projectId: 'wisea-f81b0',
        storageBucket: 'wisea-f81b0.appspot.com',
        messagingSenderId: '318389370572'
      };
      /***/
    },

    /***/
    "./src/app/service/auth.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/service/auth.service.ts ***!
      \*****************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServiceAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.esm.js");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(userAuth, userStore, storage) {
          _classCallCheck(this, AuthService);

          this.userAuth = userAuth;
          this.userStore = userStore;
          this.storage = storage;
          this.currentUser = null;
          this.authenticate();
        }

        _createClass(AuthService, [{
          key: "authenticate",
          value: function authenticate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.userAuth.onAuthStateChanged(function (user) {
                        _this4.currentUser = user;
                      });

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "register",
          value: function register(userData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var credential;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.userAuth.createUserWithEmailAndPassword(userData.email, userData.password);

                    case 2:
                      credential = _context8.sent;
                      return _context8.abrupt("return", this.userStore.doc("users/".concat(credential.user.uid)).set({
                        uid: credential.user.uid,
                        email: userData.email,
                        name: userData.name,
                        username: userData.username,
                        phone: userData.phone,
                        photo: 'account.svg',
                        balance: 0
                      }));

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "login",
          value: function login(_ref) {
            var email = _ref.email,
                password = _ref.password;
            return this.userAuth.signInWithEmailAndPassword(email, password);
          }
        }, {
          key: "logout",
          value: function logout() {
            return this.userAuth.signOut();
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(email) {
            return this.userAuth.sendPasswordResetEmail(email);
          }
        }, {
          key: "confirmResetPassword",
          value: function confirmResetPassword(code, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.userAuth.confirmPasswordReset(code, password);

                    case 2:
                      return _context9.abrupt("return", _context9.sent);

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "editUserData",
          value: function editUserData(userData, password, photo) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this5 = this;

              var user, credential;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      user = firebase__WEBPACK_IMPORTED_MODULE_5__["default"].auth().currentUser;
                      credential = firebase__WEBPACK_IMPORTED_MODULE_5__["default"].auth.EmailAuthProvider.credential(user.email, password);

                      if (!(userData.photo !== photo.oldPhoto)) {
                        _context10.next = 8;
                        break;
                      }

                      _context10.next = 5;
                      return this.uploadPhoto(photo.base64Photo, userData.email);

                    case 5:
                      userData.photo = userData.email + '.png';
                      _context10.next = 9;
                      break;

                    case 8:
                      userData.photo = photo.oldPhotoName;

                    case 9:
                      _context10.next = 11;
                      return user.reauthenticateWithCredential(credential).then(function (res) {
                        _this5.userStore.doc("users/".concat(_this5.currentUser.uid)).update({
                          email: userData.email,
                          name: userData.name,
                          username: userData.username,
                          phone: userData.phone,
                          photo: userData.photo
                        });

                        if (userData.email !== _this5.currentUser.email) {
                          user.updateEmail(userData.email);
                        }

                        if (userData.newPassword !== null) {
                          user.updatePassword(userData.newPassword);
                        }
                      });

                    case 11:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "uploadPhoto",
          value: function uploadPhoto(imageString, email) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var storageRef, uploadedPicture;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      storageRef = firebase__WEBPACK_IMPORTED_MODULE_5__["default"].storage().ref("users/".concat(email, ".png"));
                      _context11.next = 3;
                      return storageRef.putString(imageString, 'base64', {
                        contentType: 'image/png'
                      });

                    case 3:
                      uploadedPicture = _context11.sent;
                      return _context11.abrupt("return", uploadedPicture);

                    case 5:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            }));
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            return this.userStore.collection('users').doc(this.currentUser.uid).valueChanges();
          }
        }, {
          key: "getPromisePhotoUserData",
          value: function getPromisePhotoUserData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return new Promise(function (resolve) {
                        _this6.userAuth.onAuthStateChanged(function (user) {
                          console.log('onAuthStateChanged');
                          _this6.currentUser = user;

                          if (user) {
                            resolve(_this6.userStore.collection('users').doc(user.uid).valueChanges());
                          }
                        });
                      });

                    case 2:
                      return _context12.abrupt("return", _context12.sent);

                    case 3:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12);
            }));
          }
        }, {
          key: "getPromiseUserData",
          value: function getPromiseUserData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return new Promise(function (resolve) {
                        _this7.userAuth.onAuthStateChanged(function (user) {
                          resolve(user);
                        });
                      });

                    case 2:
                      return _context13.abrupt("return", _context13.sent);

                    case 3:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }));
          }
        }, {
          key: "getUserPhotoUrl",
          value: function getUserPhotoUrl(imageName) {
            return this.storage.ref("users/".concat(imageName)).getDownloadURL();
          }
        }, {
          key: "checkAvailablePhone",
          value: function checkAvailablePhone(phone) {
            return this.userStore.collection('users', function (ref) {
              return ref.where('phone', '==', phone);
            }).valueChanges();
          }
        }, {
          key: "topupBalance",
          value: function topupBalance(amount) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.userStore.doc("users/".concat(this.currentUser.uid)).update({
                        balance: amount
                      });

                    case 2:
                      return _context14.abrupt("return", _context14.sent);

                    case 3:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
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
      /* harmony import */


      var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/pwa-elements/loader */
      "./node_modules/@ionic/pwa-elements/loader/index.es2017.mjs");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Mobile 2\Praktek\Wisea\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map