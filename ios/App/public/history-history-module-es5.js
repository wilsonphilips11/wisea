(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHistoryHistoryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\" (click)=\"popView()\">\r\n        <ion-icon class=\"header__icon\" src='assets/icon/backButton.svg'></ion-icon>\r\n      </ion-buttons>\r\n      <ion-title class=\"ion-text-center\">\r\n          Wisea\r\n      </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=\"background\">\r\n  <ng-template #hasValue>\r\n    <ion-item-group class=\"body__container\" *ngFor=\"let history of histories\">\r\n      <ion-card (click)=\"goToHistoryDetail(history.id)\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle style=\"font-size: 12px;\">\r\n            <ion-item-group class=\"history__desc\">\r\n              {{ history.tanggal.toMillis() | date:'EEEE, MM-dd-yyyy h:mm a' }}\r\n              <ion-chip *ngIf=\"history.status === 'terbayar'; else canceled\" color=\"success\">\r\n                <ion-label>{{ history.status }}</ion-label>\r\n              </ion-chip>\r\n              <ng-template #canceled>\r\n                <ion-chip color=\"danger\">\r\n                  <ion-label>{{ history.status}}</ion-label>\r\n                </ion-chip>\r\n              </ng-template>\r\n            </ion-item-group>\r\n          </ion-card-subtitle>\r\n          <ion-card-title style=\"color: var(--ion-color-primary); font-size: 18px;\"><strong>{{ history.tiket }}</strong></ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-row class=\"history__desc\">\r\n            <ion-item-group>\r\n              <ion-row class=\"history__total\">\r\n                <ion-icon name=\"bag-handle-outline\" class=\"history__total-icon\"></ion-icon>\r\n                <p>Jumlah: {{ history.jumlah }}</p>\r\n              </ion-row>\r\n            </ion-item-group>\r\n            <ion-item-group>\r\n              <ion-row class=\"history__total\">\r\n                <ion-icon name=\"cash-outline\" class=\"history__total-icon\"></ion-icon>\r\n                <p>Total: {{ history.total | currency:'IDR':'symbol-narrow':'3.0'}}</p>\r\n              </ion-row>\r\n            </ion-item-group>\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-item-group>\r\n  </ng-template>\r\n  <ion-item-group class=\"history__noresult\" *ngIf=\"historyCount === 0; else hasValue\">\r\n    <ion-img class=\"history__noresult-img\" src=\"assets/login/lupa-password.svg\"></ion-img>\r\n    <ion-title>\r\n      <div class=\"history__noresult-title\"><strong>Yahh, kosong :(</strong></div>\r\n      <p class=\"history__noresult-subtitle\">Seperti hatimu,<br> jangan biarkan pesananmu kosong</p>\r\n    </ion-title>\r\n  </ion-item-group>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/history/history-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/history/history-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HistoryPageRoutingModule */

    /***/
    function srcAppHistoryHistoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function () {
        return HistoryPageRoutingModule;
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


      var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./history.page */
      "./src/app/history/history.page.ts");

      var routes = [{
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
      }, {
        path: 'history-detail/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | history-detail-history-detail-module */
          [__webpack_require__.e("common"), __webpack_require__.e("history-detail-history-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./history-detail/history-detail.module */
          "./src/app/history/history-detail/history-detail.module.ts")).then(function (m) {
            return m.HistoryDetailPageModule;
          });
        }
      }];

      var HistoryPageRoutingModule = function HistoryPageRoutingModule() {
        _classCallCheck(this, HistoryPageRoutingModule);
      };

      HistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HistoryPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/history/history.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/history/history.module.ts ***!
      \*******************************************/

    /*! exports provided: HistoryPageModule */

    /***/
    function srcAppHistoryHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function () {
        return HistoryPageModule;
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


      var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./history-routing.module */
      "./src/app/history/history-routing.module.ts");
      /* harmony import */


      var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./history.page */
      "./src/app/history/history.page.ts");

      var HistoryPageModule = function HistoryPageModule() {
        _classCallCheck(this, HistoryPageModule);
      };

      HistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"]],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
      })], HistoryPageModule);
      /***/
    },

    /***/
    "./src/app/history/history.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/history/history.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppHistoryHistoryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header__icon {\n  font-size: 24px;\n}\n\n.history__desc {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.history__total {\n  display: flex;\n}\n\n.history__total-icon {\n  font-size: 16px;\n  margin-right: 8px;\n  margin-top: 2px;\n}\n\n.history__noresult {\n  display: flex;\n  flex-direction: column;\n  margin-top: 30%;\n}\n\n.history__noresult-img {\n  width: 200px;\n  align-self: center;\n  display: flex;\n}\n\n.history__noresult-title {\n  margin-top: 30px;\n  font-size: 32px;\n  font-weight: 600;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n\n@media only screen and (max-width: 769px) {\n  .history__noresult-title {\n    font-size: 24px;\n  }\n}\n\n.history__noresult-subtitle {\n  font-size: 28px;\n  margin: 8px 0px;\n  color: rgba(0, 0, 0, 0.38);\n  text-align: center;\n}\n\n@media only screen and (max-width: 769px) {\n  .history__noresult-subtitle {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUFBSjs7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBRko7O0FBSUU7RUFDRSxhQUFBO0FBRko7O0FBR0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRE47O0FBSUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBR0k7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRE47O0FBR0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFETjs7QUFFTTtFQU5GO0lBT0ksZUFBQTtFQUNOO0FBQ0Y7O0FBQ0k7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUFDTjs7QUFBTTtFQUxGO0lBTUksZUFBQTtFQUdOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgJl9faWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbn1cclxuXHJcbi5oaXN0b3J5e1xyXG4gICZfX2Rlc2N7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgJl9fdG90YWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICYtaWNvbntcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19ub3Jlc3VsdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICAgICYtaW1nIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAmLXRpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYtc3VidGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIG1hcmdpbjogOHB4IDBweDtcclxuICAgICAgY29sb3I6IHJnYmEoMCwwLDAsMC4zOCk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/history/history.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/history/history.page.ts ***!
      \*****************************************/

    /*! exports provided: HistoryPage */

    /***/
    function srcAppHistoryHistoryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoryPage", function () {
        return HistoryPage;
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


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/auth.service */
      "./src/app/service/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var HistoryPage = /*#__PURE__*/function () {
        function HistoryPage(authService, firestore, router, navCtrl) {
          _classCallCheck(this, HistoryPage);

          this.authService = authService;
          this.firestore = firestore;
          this.router = router;
          this.navCtrl = navCtrl;
        }

        _createClass(HistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getHistory();
          }
        }, {
          key: "getHistory",
          value: function getHistory() {
            var _this = this;

            this.authService.getUserData().subscribe(function (res) {
              _this.userProfile = res;

              _this.firestore.collection('history').ref.where('email', '==', _this.userProfile.email).orderBy('tanggal', 'desc').get().then(function (ref) {
                var results = ref.docs.map(function (doc) {
                  return doc.data();
                });

                if (results.length > 0) {
                  _this.histories = results;
                } else {
                  _this.historyCount = 0;
                }
              });
            });
          }
        }, {
          key: "goToHistoryDetail",
          value: function goToHistoryDetail(id) {
            this.firestore.collection('history').doc(id).update({
              open: true
            });
            this.router.navigate(["/history-detail/".concat(id)]);
          }
        }, {
          key: "popView",
          value: function popView() {
            this.router.navigate(['/menu/tabs/home']);
          }
        }]);

        return HistoryPage;
      }();

      HistoryPage.ctorParameters = function () {
        return [{
          type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }];
      };

      HistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./history.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./history.page.scss */
        "./src/app/history/history.page.scss"))["default"]]
      })], HistoryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=history-history-module-es5.js.map