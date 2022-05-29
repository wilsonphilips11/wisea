(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["on-boarding-screen-on-boarding-screen-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/on-boarding-screen/on-boarding-screen.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/on-boarding-screen/on-boarding-screen.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOnBoardingScreenOnBoardingScreenPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" color=\"background\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\" size=\"12\" sizeSm=\"8\" offsetSm=\"2\" sizeMd=\"6\" offsetMd=\"3\">\r\n        <ion-slides pager=\"true\">\r\n          <ion-slide>\r\n            <img src=\"assets/splashScreen/splash1.svg\">\r\n            <div class=\"slider-text\">\r\n              <h2>Mudah Memesan</h2>\r\n              <p>\r\n                Wisea memberikan kemudahan untuk memesan tiket wisata seni dan budaya\r\n                dengan memberikan rekomendasi pilihan tiket yang sesuai dengan selera pengguna\r\n              </p>\r\n            </div>\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <img src=\"assets/splashScreen/splash2.svg\">\r\n            <div class=\"slider-text\">\r\n              <h2>Yuk Mulai!</h2>\r\n            </div>\r\n            <ion-button color=\"primary\" expand=\"block\" shape=\"round\" routerLink=\"/register\">Daftar</ion-button>\r\n            <p>\r\n              Sudah punya akun?\r\n              <b routerLink=\"/login\" class=\"login\">Login disini</b>\r\n            </p>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/on-boarding-screen/on-boarding-screen-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/on-boarding-screen/on-boarding-screen-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: OnBoardingScreenPageRoutingModule */

    /***/
    function srcAppOnBoardingScreenOnBoardingScreenRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnBoardingScreenPageRoutingModule", function () {
        return OnBoardingScreenPageRoutingModule;
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


      var _on_boarding_screen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./on-boarding-screen.page */
      "./src/app/on-boarding-screen/on-boarding-screen.page.ts"); // const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);


      var routes = [{
        path: '',
        component: _on_boarding_screen_page__WEBPACK_IMPORTED_MODULE_3__["OnBoardingScreenPage"]
      }];

      var OnBoardingScreenPageRoutingModule = function OnBoardingScreenPageRoutingModule() {
        _classCallCheck(this, OnBoardingScreenPageRoutingModule);
      };

      OnBoardingScreenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OnBoardingScreenPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/on-boarding-screen/on-boarding-screen.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/on-boarding-screen/on-boarding-screen.module.ts ***!
      \*****************************************************************/

    /*! exports provided: OnBoardingScreenPageModule */

    /***/
    function srcAppOnBoardingScreenOnBoardingScreenModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnBoardingScreenPageModule", function () {
        return OnBoardingScreenPageModule;
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


      var _on_boarding_screen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./on-boarding-screen-routing.module */
      "./src/app/on-boarding-screen/on-boarding-screen-routing.module.ts");
      /* harmony import */


      var _on_boarding_screen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./on-boarding-screen.page */
      "./src/app/on-boarding-screen/on-boarding-screen.page.ts");

      var OnBoardingScreenPageModule = function OnBoardingScreenPageModule() {
        _classCallCheck(this, OnBoardingScreenPageModule);
      };

      OnBoardingScreenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _on_boarding_screen_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnBoardingScreenPageRoutingModule"]],
        declarations: [_on_boarding_screen_page__WEBPACK_IMPORTED_MODULE_6__["OnBoardingScreenPage"]]
      })], OnBoardingScreenPageModule);
      /***/
    },

    /***/
    "./src/app/on-boarding-screen/on-boarding-screen.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/on-boarding-screen/on-boarding-screen.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOnBoardingScreenOnBoardingScreenPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-slides {\n  height: 100%;\n}\n\nion-slide {\n  display: block;\n}\n\nion-grid {\n  margin: 0;\n  padding: 0;\n}\n\nion-button {\n  margin: 30px 16px 0px 16px;\n}\n\n.swiper-slide img {\n  width: 100%;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  text-align: center;\n  color: var(--ion-color-step-600, #BDBDBD);\n}\n\nh2 {\n  padding-top: 10%;\n}\n\n.login {\n  color: var(--ion-color-primary);\n}\n\nion-slides {\n  margin-bottom: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb24tYm9hcmRpbmctc2NyZWVuL29uLWJvYXJkaW5nLXNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9vbi1ib2FyZGluZy1zY3JlZW4vb24tYm9hcmRpbmctc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW9uLXNsaWRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBtYXJnaW46IDMwcHggMTZweCAwcHggMTZweDtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5wIHtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICNCREJEQkQpO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxufVxyXG5cclxuLmxvZ2luIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/on-boarding-screen/on-boarding-screen.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/on-boarding-screen/on-boarding-screen.page.ts ***!
      \***************************************************************/

    /*! exports provided: OnBoardingScreenPage */

    /***/
    function srcAppOnBoardingScreenOnBoardingScreenPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnBoardingScreenPage", function () {
        return OnBoardingScreenPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OnBoardingScreenPage = /*#__PURE__*/function () {
        function OnBoardingScreenPage() {
          _classCallCheck(this, OnBoardingScreenPage);
        }

        _createClass(OnBoardingScreenPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OnBoardingScreenPage;
      }();

      OnBoardingScreenPage.ctorParameters = function () {
        return [];
      };

      OnBoardingScreenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-on-boarding-screen',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./on-boarding-screen.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/on-boarding-screen/on-boarding-screen.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./on-boarding-screen.page.scss */
        "./src/app/on-boarding-screen/on-boarding-screen.page.scss"))["default"]]
      })], OnBoardingScreenPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=on-boarding-screen-on-boarding-screen-module-es5.js.map