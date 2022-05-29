(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recommend-recommendation2-recommendation2-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/recommend/recommendation2/recommendation2.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recommend/recommendation2/recommendation2.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRecommendRecommendation2Recommendation2PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\" routerLink=\"../recommendation1\">\r\n            <ion-icon src='assets/icon/backButton.svg'></ion-icon>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-center\">\r\n            Wisea\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item-group id=\"container\">\r\n        <ion-item lines='none'>\r\n            <ion-img src=\"assets/Recommendation/recommend2.svg\"></ion-img>\r\n        </ion-item>\r\n        <ion-title size=\"large\" class=\"ion-text-center title\">Jam berapa nih? </ion-title>\r\n        <ion-item lines='none'>\r\n            <ion-label color=\"medium\" class=\"ion-text-wrap\">Pagi, siang, sore ataupun malam tetap akan menyenangkan kok..</ion-label>\r\n        </ion-item>\r\n        <ion-grid lines=\"none\">\r\n            <ion-row>\r\n                <ion-col size=\"3\" size-lg>\r\n                    <ion-img src=\"assets/Recommendation/morning.svg\" class=\"budgetImg\" (click)=\"time($event, 'pagi')\"></ion-img>\r\n                </ion-col>\r\n                <ion-col size=\"4\" size-lg>\r\n                    <ion-img src=\"assets/Recommendation/day.svg\" class=\"budgetImg\" (click)=\"time($event, 'siang')\"></ion-img>\r\n                </ion-col>\r\n            </ion-row>\r\n            <br>\r\n            <ion-row>\r\n                <ion-col size=\"3\" size-lg>\r\n                    <ion-img src=\"assets/Recommendation/afternoon.svg\" class=\"budgetImg\" (click)=\"time($event, 'sore')\"></ion-img>\r\n                </ion-col>\r\n                <ion-col size=\"4\" size-lg>\r\n                    <ion-img src=\"assets/Recommendation/night.svg\" class=\"budgetImg\" (click)=\"time($event, 'malam')\"></ion-img>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-item-group>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/recommend/recommendation2/recommendation2-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/recommend/recommendation2/recommendation2-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: Recommendation2PageRoutingModule */

    /***/
    function srcAppRecommendRecommendation2Recommendation2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Recommendation2PageRoutingModule", function () {
        return Recommendation2PageRoutingModule;
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


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _recommendation2_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./recommendation2.page */
      "./src/app/recommend/recommendation2/recommendation2.page.ts");

      var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["redirectUnauthorizedTo"])(['/']);
      };

      var routes = [Object.assign({
        path: '',
        component: _recommendation2_page__WEBPACK_IMPORTED_MODULE_4__["Recommendation2Page"]
      }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["canActivate"])(redirectUnauthorizedToLogin))];

      var Recommendation2PageRoutingModule = function Recommendation2PageRoutingModule() {
        _classCallCheck(this, Recommendation2PageRoutingModule);
      };

      Recommendation2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], Recommendation2PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/recommend/recommendation2/recommendation2.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/recommend/recommendation2/recommendation2.module.ts ***!
      \*********************************************************************/

    /*! exports provided: Recommendation2PageModule */

    /***/
    function srcAppRecommendRecommendation2Recommendation2ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Recommendation2PageModule", function () {
        return Recommendation2PageModule;
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


      var _recommendation2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./recommendation2-routing.module */
      "./src/app/recommend/recommendation2/recommendation2-routing.module.ts");
      /* harmony import */


      var _recommendation2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./recommendation2.page */
      "./src/app/recommend/recommendation2/recommendation2.page.ts");

      var Recommendation2PageModule = function Recommendation2PageModule() {
        _classCallCheck(this, Recommendation2PageModule);
      };

      Recommendation2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _recommendation2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Recommendation2PageRoutingModule"]],
        declarations: [_recommendation2_page__WEBPACK_IMPORTED_MODULE_6__["Recommendation2Page"]]
      })], Recommendation2PageModule);
      /***/
    },

    /***/
    "./src/app/recommend/recommendation2/recommendation2.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/recommend/recommendation2/recommendation2.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRecommendRecommendation2Recommendation2PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  position: absolute;\n  left: 0%;\n  right: 0%;\n  top: 32%;\n  margin: 180px 0px 30px;\n  transform: translateY(-50%);\n  color: var(--ion-color-primary);\n}\n\n#container strong {\n  font-size: 40px;\n  line-height: 28px;\n  margin-top: 20px;\n  letter-spacing: 2px;\n}\n\n#container p {\n  font-size: 26px;\n  line-height: 28px;\n  color: var(--ion-color-primary);\n  margin-bottom: 16px;\n  width: 10px;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container ion-item {\n  margin-top: 24px;\n  text-align: center;\n  z-index: -1;\n}\n\n#container ion-grid {\n  margin-top: 20px;\n  text-align: center;\n  z-index: -1;\n}\n\n#container ion-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n}\n\n#container ion-col {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  color: black;\n}\n\nion-icon {\n  font-size: 24px;\n  margin-left: 5px;\n}\n\n.title {\n  margin-top: 30px;\n  font-size: 28px;\n  font-weight: 600;\n  text-align: left;\n}\n\n.budgetImg {\n  width: 125px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb21tZW5kL3JlY29tbWVuZGF0aW9uMi9yZWNvbW1lbmRhdGlvbjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZWNvbW1lbmQvcmVjb21tZW5kYXRpb24yL3JlY29tbWVuZGF0aW9uMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgdG9wOiAzMiU7XHJcbiAgICBtYXJnaW46IDE4MHB4IDBweCAzMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2NvbnRhaW5lciBpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbiNjb250YWluZXIgaW9uLWdyaWQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGlvbi1pbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2NvbnRhaW5lciBpb24tY29sIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5idWRnZXRJbWcge1xyXG4gICAgd2lkdGg6IDEyNXB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/recommend/recommendation2/recommendation2.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/recommend/recommendation2/recommendation2.page.ts ***!
      \*******************************************************************/

    /*! exports provided: Recommendation2Page */

    /***/
    function srcAppRecommendRecommendation2Recommendation2PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Recommendation2Page", function () {
        return Recommendation2Page;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var Recommendation2Page = /*#__PURE__*/function () {
        function Recommendation2Page(router, storage, toastController) {
          _classCallCheck(this, Recommendation2Page);

          this.router = router;
          this.storage = storage;
          this.toastController = toastController;
        }

        _createClass(Recommendation2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get('budget').then(function (val) {
              if (!val) {
                _this.presentToast();

                _this.router.navigate(['/recommendation1']);
              }
            });
          }
        }, {
          key: "time",
          value: function time(event, _time) {
            console.log(_time);
            this.storage.set('time', _time);
            this.router.navigate(['/recommendation3']);
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
                        message: 'Pilih dahulu opsi berikut.',
                        duration: 2000,
                        color: 'danger'
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

        return Recommendation2Page;
      }();

      Recommendation2Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      Recommendation2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recommendation2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./recommendation2.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/recommend/recommendation2/recommendation2.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./recommendation2.page.scss */
        "./src/app/recommend/recommendation2/recommendation2.page.scss"))["default"]]
      })], Recommendation2Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=recommend-recommendation2-recommendation2-module-es5.js.map