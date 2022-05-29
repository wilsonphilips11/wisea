(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/home/home.page.html":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/home/home.page.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMenuHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-text-center\">\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons routerLink=\"/history\" slot=\"end\">\r\n            <ion-badge class=\"notifications-badge\" color=\"danger\" mode=\"ios\" *ngIf=\"historyCount > 0\">{{ historyCount }}</ion-badge>\r\n            <ion-icon class=\"header__icon\" name=\"bag-check\"></ion-icon>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-center\">\r\n            Wisea\r\n        </ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=\"background\" class=\"homepage\">\r\n    <ion-item-group id=\"container\">\r\n        <div style=\"display: flex;\">\r\n            <ion-item-group lines='none' class=\"homepage__username\">\r\n                <ion-title color=\"primary\">\r\n                    <p class=\"homepage__username-heading\">Halo,</p>\r\n                    <strong><p class=\"homepage__username-subheading\">{{ currentUser }}</p></strong>\r\n                </ion-title>\r\n            </ion-item-group>\r\n            <ion-img src='assets/homePage/plane.svg' class=\"homepage__image\"></ion-img>\r\n        </div>\r\n        <div class=\"homepage__content\">\r\n            <ion-item lines='none' class=\"homepage__content-image\">\r\n                <ion-img src=\"assets/homePage/home.svg\"></ion-img>\r\n            </ion-item>\r\n            <ion-title class=\"homepage__content-title\">#NgeBolang yukk!</ion-title>\r\n            <ion-item lines='none' class=\"ion-text-center\">\r\n                <p class=\"homepage__content-subtitle\">Seperti abang nasi goreng, kami siapkan hiburan spesial sesuai preferensi kamu!</p>\r\n            </ion-item>\r\n            <ion-button expand=\"block\" shape=\"round\" routerLink=\"/recommendation1\" class=\"homepage__content-btn\">\r\n                Mulai\r\n            </ion-button>\r\n        </div>\r\n    </ion-item-group>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/menu/home/home-routing.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/menu/home/home-routing.module.ts ***!
      \**************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppMenuHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/menu/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/menu/home/home.module.ts":
    /*!******************************************!*\
      !*** ./src/app/menu/home/home.module.ts ***!
      \******************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppMenuHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/menu/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/menu/home/home-routing.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/menu/home/home.page.scss":
    /*!******************************************!*\
      !*** ./src/app/menu/home/home.page.scss ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function srcAppMenuHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  position: absolute;\n  left: 0%;\n  right: 0%;\n  top: 32%;\n  margin: 120px 0px 30px;\n  transform: translateY(-50%);\n  color: var(--ion-color-primary);\n}\n\n.homepage__username {\n  display: flex;\n  flex-direction: column;\n}\n\n.homepage__username-heading {\n  font-size: 28px;\n  margin: 8px 0px;\n}\n\n@media only screen and (max-width: 769px) {\n  .homepage__username-heading {\n    font-size: 18px;\n  }\n}\n\n.homepage__username-subheading {\n  font-size: 32px;\n  margin: 8px 0px;\n}\n\n@media only screen and (max-width: 769px) {\n  .homepage__username-subheading {\n    font-size: 24px;\n  }\n}\n\n.homepage__image {\n  width: 150px;\n  margin-left: 16px;\n}\n\n.homepage__content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.homepage__content-image {\n  align-self: center;\n}\n\n.homepage__content-title {\n  margin-top: 30px;\n  font-size: 32px;\n  font-weight: 600;\n  text-align: center;\n}\n\n@media only screen and (max-width: 769px) {\n  .homepage__content-title {\n    font-size: 24px;\n  }\n}\n\n.homepage__content-subtitle {\n  font-size: 16px;\n  margin: 8px 0px;\n  color: rgba(0, 0, 0, 0.38);\n  text-align: center !important;\n  width: 100%;\n}\n\n@media only screen and (max-width: 769px) {\n  .homepage__content-subtitle {\n    font-size: 16px;\n    text-align: center;\n  }\n}\n\n.homepage__content-btn {\n  margin: 24px 16px 36px;\n}\n\n.header__icon {\n  font-size: 24px;\n  z-index: -1;\n}\n\n.notifications-badge {\n  position: absolute;\n  top: -3px;\n  right: -4px;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFHSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUFSOztBQUNRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFDVjs7QUFBVTtFQUhGO0lBSU0sZUFBQTtFQUdaO0FBQ0Y7O0FBRFE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUdWOztBQUZVO0VBSEY7SUFJTSxlQUFBO0VBS1o7QUFDRjs7QUFGSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUlSOztBQUZJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFJUjs7QUFIUTtFQUNJLGtCQUFBO0FBS1o7O0FBSFE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBS1o7O0FBSlk7RUFMSjtJQU1RLGVBQUE7RUFPZDtBQUNGOztBQUxRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQU9aOztBQU5ZO0VBTko7SUFPUSxlQUFBO0lBQ0Esa0JBQUE7RUFTZDtBQUNGOztBQVBRO0VBQ0ksc0JBQUE7QUFTWjs7QUFISTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBTVI7O0FBREk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUlSIiwiZmlsZSI6InNyYy9hcHAvbWVudS9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIHRvcDogMzIlO1xyXG4gICAgbWFyZ2luOiAxMjBweCAwcHggMzBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5ob21lcGFnZSB7XHJcbiAgICAmX191c2VybmFtZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICYtaGVhZGluZyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwcHg7XHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLXN1YmhlYWRpbmcge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA4cHggMHB4O1xyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICYtaW1hZ2Uge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc3VidGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IDBweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAyNHB4IDE2cHggMzZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgJl9faWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9ucyB7XHJcbiAgICAmLWJhZGdlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtM3B4O1xyXG4gICAgICAgIHJpZ2h0OiAtNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/menu/home/home.page.ts":
    /*!****************************************!*\
      !*** ./src/app/menu/home/home.page.ts ***!
      \****************************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppMenuHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/auth.service */
      "./src/app/service/auth.service.ts");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(firestore, authService) {
          _classCallCheck(this, HomePage);

          this.firestore = firestore;
          this.authService = authService;
        }

        _createClass(HomePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.authService.getUserData().subscribe(function (res) {
              _this.userProfile = res;

              _this.firestore.collection('history', function (ref) {
                return ref.where('email', '==', _this.userProfile.email).where('open', '==', false);
              }).valueChanges().subscribe(function (res) {
                _this.historyCount = res.length;
              });
            });
            this.authService.getUserData().subscribe(function (ref) {
              _this.userProfile = ref;
              _this.currentUser = _this.userProfile.name;
            });
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/menu/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map