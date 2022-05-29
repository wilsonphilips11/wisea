(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recommend-recommendation3-recommendation3-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/recommend/recommendation3/recommendation3.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recommend/recommendation3/recommendation3.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRecommendRecommendation3Recommendation3PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\" routerLink=\"../recommendation2\">\r\n            <ion-icon src='assets/icon/backButton.svg'></ion-icon>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-center\">\r\n            Wisea\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item-group id=\"container\">\r\n        <ion-item lines='none'>\r\n            <ion-img src=\"assets/Recommendation/recommend3.svg\"></ion-img>\r\n        </ion-item>\r\n        <ion-title size=\"large\" class=\"ion-text-center title\">Pilih yang cocok ya</ion-title>\r\n        <ion-item lines='none'>\r\n            <ion-label color=\"medium\" class=\"ion-text-wrap\">Pilih dipilih.. Dari pertunjukan sampai museum kami sediakan semua!</ion-label>\r\n        </ion-item>\r\n        <ion-grid lines=\"none\" class=\"ion-margin-end\">\r\n            <ion-row>\r\n                <ion-col size=\"3\" size-lg>\r\n                    <ion-img src=\"assets/Recommendation/performance.svg\" class=\"budgetImg\" (click)=\"showInput($event, 'pertunjukan')\"></ion-img>\r\n                </ion-col>\r\n                <ion-col size=\"3\" size-lg>\r\n                    <ion-img src=\"assets/Recommendation/workshop.svg\" class=\"budgetImg\" (click)=\"showInput($event, 'workshop')\"></ion-img>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"3\" size-lg>\r\n                    <ion-img src=\"assets/Recommendation/museum.svg\" class=\"budgetImg\" (click)=\"showInput($event, 'museum')\"></ion-img>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-item-group>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/recommend/recommendation3/recommendation3-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/recommend/recommendation3/recommendation3-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: Recommendation3PageRoutingModule */

    /***/
    function srcAppRecommendRecommendation3Recommendation3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Recommendation3PageRoutingModule", function () {
        return Recommendation3PageRoutingModule;
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


      var _recommendation3_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./recommendation3.page */
      "./src/app/recommend/recommendation3/recommendation3.page.ts");

      var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["redirectUnauthorizedTo"])(['/']);
      };

      var routes = [Object.assign({
        path: '',
        component: _recommendation3_page__WEBPACK_IMPORTED_MODULE_4__["Recommendation3Page"]
      }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["canActivate"])(redirectUnauthorizedToLogin))];

      var Recommendation3PageRoutingModule = function Recommendation3PageRoutingModule() {
        _classCallCheck(this, Recommendation3PageRoutingModule);
      };

      Recommendation3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], Recommendation3PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/recommend/recommendation3/recommendation3.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/recommend/recommendation3/recommendation3.module.ts ***!
      \*********************************************************************/

    /*! exports provided: Recommendation3PageModule */

    /***/
    function srcAppRecommendRecommendation3Recommendation3ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Recommendation3PageModule", function () {
        return Recommendation3PageModule;
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


      var _recommendation3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./recommendation3-routing.module */
      "./src/app/recommend/recommendation3/recommendation3-routing.module.ts");
      /* harmony import */


      var _recommendation3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./recommendation3.page */
      "./src/app/recommend/recommendation3/recommendation3.page.ts");

      var Recommendation3PageModule = function Recommendation3PageModule() {
        _classCallCheck(this, Recommendation3PageModule);
      };

      Recommendation3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _recommendation3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Recommendation3PageRoutingModule"]],
        declarations: [_recommendation3_page__WEBPACK_IMPORTED_MODULE_6__["Recommendation3Page"]]
      })], Recommendation3PageModule);
      /***/
    },

    /***/
    "./src/app/recommend/recommendation3/recommendation3.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/recommend/recommendation3/recommendation3.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRecommendRecommendation3Recommendation3PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  position: absolute;\n  left: 0%;\n  right: 0%;\n  top: 30%;\n  margin: 200px 0px 200px;\n  transform: translateY(-50%);\n  color: var(--ion-color-primary);\n}\n\n#container strong {\n  font-size: 40px;\n  line-height: 28px;\n  margin-top: 20px;\n  letter-spacing: 2px;\n}\n\n#container p {\n  font-size: 26px;\n  line-height: 28px;\n  color: var(--ion-color-primary);\n  margin-bottom: 16px;\n  width: 10px;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container ion-item {\n  margin-top: 24px;\n  text-align: center;\n  z-index: -1;\n}\n\n#container ion-grid {\n  margin-top: 20px;\n  text-align: center;\n  z-index: -1;\n}\n\n#container ion-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n}\n\n#container ion-col {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-icon {\n  font-size: 24px;\n  margin-left: 5px;\n}\n\n.title {\n  margin-top: 30px;\n  font-size: 28px;\n  font-weight: 600;\n  text-align: left;\n}\n\n.budgetImg {\n  height: 150px;\n  width: 120px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb21tZW5kL3JlY29tbWVuZGF0aW9uMy9yZWNvbW1lbmRhdGlvbjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUVJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcmVjb21tZW5kL3JlY29tbWVuZGF0aW9uMy9yZWNvbW1lbmRhdGlvbjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbWFyZ2luOiAyMDBweCAwcHggMjAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuI2NvbnRhaW5lciBpb24tZ3JpZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbiNjb250YWluZXIgaW9uLWltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGlvbi1jb2wge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmJ1ZGdldEltZyB7XHJcbiAgICAvLyB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/recommend/recommendation3/recommendation3.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/recommend/recommendation3/recommendation3.page.ts ***!
      \*******************************************************************/

    /*! exports provided: Recommendation3Page */

    /***/
    function srcAppRecommendRecommendation3Recommendation3PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Recommendation3Page", function () {
        return Recommendation3Page;
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

      var Recommendation3Page = /*#__PURE__*/function () {
        function Recommendation3Page(router, storage, toastController) {
          _classCallCheck(this, Recommendation3Page);

          this.router = router;
          this.storage = storage;
          this.toastController = toastController;
        }

        _createClass(Recommendation3Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storage.get('time').then(function (val) {
              if (!val) {
                _this.presentToast();

                _this.router.navigate(['/recommendation2']);
              }
            });
          }
        }, {
          key: "showInput",
          value: function showInput(event, category) {
            console.log(category);
            this.storage.set('category', category);
            this.router.navigate(['/recommendation4']);
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

        return Recommendation3Page;
      }();

      Recommendation3Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      Recommendation3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recommendation3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./recommendation3.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/recommend/recommendation3/recommendation3.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./recommendation3.page.scss */
        "./src/app/recommend/recommendation3/recommendation3.page.scss"))["default"]]
      })], Recommendation3Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=recommend-recommendation3-recommendation3-module-es5.js.map