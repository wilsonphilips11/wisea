(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-item-list-item-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/list-item/list-item.page.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/list-item/list-item.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMenuExploreListItemListItemPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot='start' routerLink=\"/menu/tabs/explore\">\r\n      <ion-icon class=\"header__icon\" src='assets/icon/backButton.svg'></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      Wisea\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=\"background\">\r\n  <ion-searchbar #searchbar=\"ngModel\" ngModel placeholder=\"Cari wisata favoritmu\" class=\"ion-padding\" (ionInput)=\"searchWisata($event)\" showCancelButton=\"focus\"></ion-searchbar>\r\n  <p class=\"ion-text-center\" *ngIf=\"wisataFilter?.length === 0\">Pencarian tidak ditemukan</p>\r\n  <ion-list class=\"ion-no-padding\">\r\n    <ion-item button lines=\"none\" class=\"ion-margin ion-no-padding\" *ngFor=\"let wisata of (wisataFilter)\" (click)=\"goToExploreDetail(wisata.id)\">\r\n      <ion-thumbnail slot=\"start\" class=\"ion-no-margin ion-margin-end\" style=\"height: 13vh; width: 13vh\">\r\n        <ion-img [src]=\"(wisata.gambarUrl | async)\" style=\"border-top-left-radius: 10px; border-bottom-left-radius: 10px;\"></ion-img>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-no-margin\">\r\n        <p class=\"ion-no-margin\" style=\"font-weight: bold; text-transform: uppercase;\">{{ wisata.nama }}</p>\r\n        <ion-grid fixed class=\"ion-no-padding\">\r\n          <ion-row>\r\n            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n              <ion-icon class=\"ion-float-left\" style=\"margin-right: 10px\" src=\"assets/icon/money.svg\"></ion-icon>\r\n              <p>{{ wisata.harga | currency:'IDR':'symbol-narrow':'3.0' }}</p>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n              <ion-icon class=\"ion-float-left\" style=\"margin-right: 10px\" src=\"assets/icon/date.svg\"></ion-icon>\r\n              <p style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">{{ wisata.tanggal }}</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n              <ion-icon class=\"ion-float-left\" style=\"margin-right: 10px\" src=\"assets/icon/sold.svg\"></ion-icon>\r\n              <p style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">{{ wisata.tiketTerjual }} sold</p>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n              <ion-icon class=\"ion-float-left\" style=\"margin-right: 10px\" src=\"assets/icon/location.svg\"></ion-icon>\r\n              <p style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">{{ wisata.distance }} km</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/menu/explore/list-item/list-item-routing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/menu/explore/list-item/list-item-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: ListItemPageRoutingModule */

    /***/
    function srcAppMenuExploreListItemListItemRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListItemPageRoutingModule", function () {
        return ListItemPageRoutingModule;
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


      var _list_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-item.page */
      "./src/app/menu/explore/list-item/list-item.page.ts");

      var routes = [{
        path: '',
        component: _list_item_page__WEBPACK_IMPORTED_MODULE_3__["ListItemPage"]
      }];

      var ListItemPageRoutingModule = function ListItemPageRoutingModule() {
        _classCallCheck(this, ListItemPageRoutingModule);
      };

      ListItemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListItemPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/menu/explore/list-item/list-item.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/menu/explore/list-item/list-item.module.ts ***!
      \************************************************************/

    /*! exports provided: ListItemPageModule */

    /***/
    function srcAppMenuExploreListItemListItemModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListItemPageModule", function () {
        return ListItemPageModule;
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


      var _list_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-item-routing.module */
      "./src/app/menu/explore/list-item/list-item-routing.module.ts");
      /* harmony import */


      var _list_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./list-item.page */
      "./src/app/menu/explore/list-item/list-item.page.ts");

      var ListItemPageModule = function ListItemPageModule() {
        _classCallCheck(this, ListItemPageModule);
      };

      ListItemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_item_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListItemPageRoutingModule"]],
        declarations: [_list_item_page__WEBPACK_IMPORTED_MODULE_6__["ListItemPage"]]
      })], ListItemPageModule);
      /***/
    },

    /***/
    "./src/app/menu/explore/list-item/list-item.page.scss":
    /*!************************************************************!*\
      !*** ./src/app/menu/explore/list-item/list-item.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMenuExploreListItemListItemPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --border-radius: 10px !important;\n  --border-width: 1px !important;\n  --background: #FFF5DA;\n}\n\n.header__icon {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9leHBsb3JlL2xpc3QtaXRlbS9saXN0LWl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxlQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9tZW51L2V4cGxvcmUvbGlzdC1pdGVtL2xpc3QtaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogI0ZGRjVEQTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgJl9faWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/menu/explore/list-item/list-item.page.ts":
    /*!**********************************************************!*\
      !*** ./src/app/menu/explore/list-item/list-item.page.ts ***!
      \**********************************************************/

    /*! exports provided: ListItemPage */

    /***/
    function srcAppMenuExploreListItemListItemPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListItemPage", function () {
        return ListItemPage;
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


      var _service_wisata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../service/wisata.service */
      "./src/app/service/wisata.service.ts");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ListItemPage = /*#__PURE__*/function () {
        function ListItemPage(wisataService, storage, router, route, loadingController) {
          _classCallCheck(this, ListItemPage);

          this.wisataService = wisataService;
          this.storage = storage;
          this.router = router;
          this.route = route;
          this.loadingController = loadingController;
        }

        _createClass(ListItemPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading, order;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create();

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      order = this.route.snapshot.paramMap.get('order');
                      this.getWisataList(order);
                      loading.dismiss();

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getWisataList",
          value: function getWisataList() {
            var _this = this;

            var order = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.wisataService.getWisata(null, order).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (wisataList) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this2 = this;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        wisataList.map(function (wisata) {
                          wisata.gambarUrl = _this2.getImageUrl(wisata.gambar[0]);
                          return wisata;
                        });
                        _context2.next = 3;
                        return this.applyHaversine(wisataList);

                      case 3:
                        wisataList = _context2.sent;

                        if (order === 'near-me') {
                          wisataList.sort(function (wisataA, wisataB) {
                            return wisataA.distance - wisataB.distance;
                          });
                        } else if (order === 'latest') {
                          wisataList.sort(function (wisataA, wisataB) {
                            return new Date(wisataB.tanggal).getTime() - new Date(wisataA.tanggal).getTime();
                          });
                        }

                        return _context2.abrupt("return", wisataList);

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            })).subscribe(function (wisataList) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return wisataList;

                      case 2:
                        this.wisataList = _context3.sent;
                        _context3.next = 5;
                        return wisataList;

                      case 5:
                        this.wisataFilter = _context3.sent;

                      case 6:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });
          }
        }, {
          key: "getImageUrl",
          value: function getImageUrl(imageName) {
            return this.storage.ref("wisata/".concat(imageName)).getDownloadURL();
          }
        }, {
          key: "searchWisata",
          value: function searchWisata($event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var searchTerm;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      searchTerm = $event.srcElement.value;

                      if (searchTerm) {
                        _context4.next = 4;
                        break;
                      }

                      this.wisataFilter = this.wisataList;
                      return _context4.abrupt("return");

                    case 4:
                      this.wisataFilter = this.wisataList.filter(function (wisata) {
                        if (wisata.nama && searchTerm) {
                          return wisata.nama.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                        }
                      });

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "goToExploreDetail",
          value: function goToExploreDetail(wisataId) {
            this.router.navigate(['menu/tabs/explore/explore-detail', wisataId]);
          }
        }, {
          key: "applyHaversine",
          value: function applyHaversine(wisataList) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.getCurrentPosition().then(function (coordinates) {
                        _this3.userLocation = {
                          lat: coordinates.coords.latitude,
                          lng: coordinates.coords.longitude
                        };
                      });

                    case 2:
                      wisataList.map(function (wisata) {
                        var placeLocation = {
                          lat: wisata.position[0],
                          lng: wisata.position[1]
                        };
                        wisata.distance = _this3.getDistanceBetweenPoints(_this3.userLocation, placeLocation, 'km').toFixed(2);
                      });
                      return _context5.abrupt("return", wisataList);

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getCurrentPosition",
          value: function getCurrentPosition() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Geolocation"].getCurrentPosition();

                    case 2:
                      return _context6.abrupt("return", _context6.sent);

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }, {
          key: "getDistanceBetweenPoints",
          value: function getDistanceBetweenPoints(start, end, units) {
            var earthRadius = {
              miles: 3958.8,
              km: 6371
            };
            var R = earthRadius[units || 'miles'];
            var lat1 = start.lat;
            var lon1 = start.lng;
            var lat2 = end.lat;
            var lon2 = end.lng;
            var dLat = this.toRad(lat2 - lat1);
            var dLon = this.toRad(lon2 - lon1);
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            return d;
          }
        }, {
          key: "toRad",
          value: function toRad(x) {
            return x * Math.PI / 180;
          }
        }]);

        return ListItemPage;
      }();

      ListItemPage.ctorParameters = function () {
        return [{
          type: _service_wisata_service__WEBPACK_IMPORTED_MODULE_2__["WisataService"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }];
      };

      ListItemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./list-item.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/list-item/list-item.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./list-item.page.scss */
        "./src/app/menu/explore/list-item/list-item.page.scss"))["default"]]
      })], ListItemPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=list-item-list-item-module-es5.js.map