(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["explore-explore-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/explore.page.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/explore.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMenuExploreExplorePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons routerLink=\"/history\" slot=\"end\">\r\n      <ion-badge class=\"notifications-badge\" color=\"danger\" mode=\"ios\" *ngIf=\"historyCount > 0\">{{ historyCount }}</ion-badge>\r\n      <ion-icon class=\"header__icon\" name=\"bag-check\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      Wisea\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=\"background\" class=\"explore\">\r\n  <ion-searchbar class=\"explore__search\" placeholder=\"Cari wisata favoritmu\" class=\"ion-padding\" style=\"border-radius: 80px; padding-bottom: 0\" (ionFocus)=\"goToListItem($event)\"></ion-searchbar>\r\n  <ion-slides style=\"margin-top: 8px;\" [options]=\"slideOptions\" pager=\"true\" #slider (ionSlidesDidLoad)=\"slidesDidLoad(slider)\">\r\n    <ion-slide class=\"shadow ion-padding\">\r\n      <ion-img src=\"assets/banner/banner-1.svg\" style=\"width: 100%; object-fit: cover; border-radius: 20px; overflow: hidden\"></ion-img>\r\n    </ion-slide>\r\n    <ion-slide class=\"shadow ion-padding\">\r\n      <ion-img src=\"assets/banner/banner-2.svg\" style=\"width: 100%; object-fit: cover; border-radius: 20px; overflow: hidden\"></ion-img>\r\n    </ion-slide>\r\n    <ion-slide class=\"shadow ion-padding\">\r\n      <ion-img src=\"assets/banner/banner-3.svg\" style=\"width: 100%; object-fit: cover; border-radius: 20px; overflow: hidden\"></ion-img>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <ion-grid style=\"margin: 0px 8px 8px;\">\r\n    <ion-row class=\"ion-justify-content-evenly\" style=\"background-color: #FFF5DA; padding: 8px 0px; border-radius: 8px;\">\r\n      <ion-col class=\"ion-text-center box\" (click)=\"goToListItem($event, 'trending')\">\r\n        <ion-icon class=\"icon\" name=\"trending-up-outline\" style=\"background: #7BA57F; padding: 8px; border-radius: 50%; color: white; font-size: 24px;\"></ion-icon>\r\n        <p class=\"ion-no-margin\" style=\"font-size: 12px;\">Trending</p>\r\n      </ion-col>\r\n      <ion-col class=\"ion-text-center box\" (click)=\"goToListItem($event, 'latest')\">\r\n        <ion-icon class=\"icon\" name=\"bag-add-outline\" style=\"background: #7BA57F; padding: 8px; border-radius: 50%; color: white; font-size: 24px;\"></ion-icon>\r\n        <p class=\"ion-no-margin\" style=\"font-size: 12px;\">Latest</p>\r\n      </ion-col>\r\n      <ion-col class=\"ion-text-center box\" (click)=\"goToListItem($event, 'low-budget')\">\r\n        <ion-icon class=\"icon\" name=\"pricetags-outline\" style=\"background: #7BA57F; padding: 8px; border-radius: 50%; color: white; font-size: 24px;\"></ion-icon>\r\n        <p class=\"ion-no-margin\" style=\"font-size: 12px;\">Low Rp.</p>\r\n      </ion-col>\r\n      <ion-col class=\"ion-text-center box\" (click)=\"goToListItem($event, 'near-me')\">\r\n        <ion-icon class=\"icon\" name=\"location-outline\" style=\"background: #7BA57F; padding: 8px; border-radius: 50%; color: white; font-size: 24px;\"></ion-icon>\r\n        <p class=\"ion-no-margin\" style=\"font-size: 12px;\">Near Me</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!--  Pertunjukan -->\r\n  <div class=\"explore__section\">\r\n    <h4 class=\"ion-no-margin ion-margin-start explore__section-title\">Seni Pertunjukan</h4>\r\n    <p class=\"ion-no-margin ion-margin-start explore__section-subtitle\">Yuk, tonton seni pertunjukan yang kaya akan nilai budaya.</p>\r\n    <ion-slides [options]=\"{ slidesPerView: 'auto'}\">\r\n      <ion-slide *ngFor=\"let wisata of (pertunjukanList | async)\" style=\"width: 150px\">\r\n        <section class=\"section\">\r\n          <div class=\"container\">\r\n            <div class=\"grid\">\r\n              <article class=\"card\">\r\n                <img class=\"card__image\" [routerLink]=\"['./explore-detail', wisata.id]\" [src]=\"(wisata.gambarUrl | async)\"/>\r\n                <div class=\"card__data\">\r\n                  <div class=\"card__info\">\r\n                    <h2 style=\"color: #7BA57F;\">{{ wisata.nama }}</h2>\r\n                    <ion-chip *ngIf=\"wisata.tiketTersedia < 1\" color=\"danger\">\r\n                      <ion-label>Habis</ion-label>\r\n                    </ion-chip>\r\n                  </div>\r\n                  <div>\r\n                    <h3 class=\"card__price\">{{ wisata.harga | currency:'IDR':'symbol-narrow':'3.0' }}</h3>\r\n                    <button class=\"card__add\" [routerLink]=\"['./explore-detail', wisata.id]\">+</button>\r\n                  </div>\r\n                </div>\r\n              </article>\r\n            </div>\r\n          </div>\r\n        </section>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n  <hr class=\"separator\">\r\n  <!--  Museum -->\r\n  <div class=\"explore__section\">\r\n    <h4 class=\"ion-no-margin ion-margin-start explore__section-title\">Museum</h4>\r\n    <p class=\"ion-no-margin ion-margin-start explore__section-subtitle\">Jelajahi museum untuk mengetahui barang-barang peninggalan nenek moyang kita.</p>\r\n    <ion-slides [options]=\"{ slidesPerView: 'auto'}\" style=\"padding: 8px;\">\r\n      <ion-slide *ngFor=\"let wisata of (museumList | async)\" style=\"width: 150px\">\r\n        <section class=\"section\">\r\n          <div class=\"container\">\r\n            <div class=\"grid\">\r\n              <article class=\"card\">\r\n                <img class=\"card__image\" [routerLink]=\"['./explore-detail', wisata.id]\" [src]=\"(wisata.gambarUrl | async)\"/>\r\n                <div class=\"card__data\">\r\n                  <div class=\"card__info\">\r\n                    <h2 style=\"color: #7BA57F;\">{{ wisata.nama }}</h2>\r\n                  </div>\r\n                  <div>\r\n                    <h3 class=\"card__price\">{{ wisata.harga | currency:'IDR':'symbol-narrow':'3.0' }}</h3>\r\n                    <button class=\"card__add\" [routerLink]=\"['./explore-detail', wisata.id]\">+</button>\r\n                  </div>\r\n                </div>\r\n              </article>\r\n            </div>\r\n          </div>\r\n        </section>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n  <hr class=\"separator\">\r\n  <!--  Workshop -->\r\n  <div class=\"explore__section\">\r\n    <h4 class=\"ion-no-margin ion-margin-start explore__section-title\">Workshop</h4>\r\n    <p class=\"ion-no-margin ion-margin-start explore__section-subtitle\">Ayo pelajari kesenian maupun kerajinan budaya kita yang unik.</p>\r\n    <ion-slides [options]=\"{ slidesPerView: 'auto'}\" style=\"padding: 8px;\">\r\n      <ion-slide *ngFor=\"let wisata of (workshopList | async)\" style=\"width: 150px\">\r\n        <section class=\"section\">\r\n          <div class=\"container\">\r\n            <div class=\"grid\">\r\n              <article class=\"card\">\r\n                <img class=\"card__image\" [routerLink]=\"['./explore-detail', wisata.id]\" [src]=\"(wisata.gambarUrl | async)\"/>\r\n                <div class=\"card__data\">\r\n                  <div class=\"card__info\">\r\n                    <h2 style=\"color: #7BA57F;\">{{ wisata.nama }}</h2>\r\n                  </div>\r\n                  <div>\r\n                    <h3 class=\"card__price\">{{ wisata.harga | currency:'IDR':'symbol-narrow':'3.0' }}</h3>\r\n                    <button class=\"card__add\" [routerLink]=\"['./explore-detail', wisata.id]\">+</button>\r\n                  </div>\r\n                </div>\r\n              </article>\r\n            </div>\r\n          </div>\r\n        </section>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/menu/explore/explore-routing.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/menu/explore/explore-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: ExplorePageRoutingModule */

    /***/
    function srcAppMenuExploreExploreRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExplorePageRoutingModule", function () {
        return ExplorePageRoutingModule;
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


      var _explore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./explore.page */
      "./src/app/menu/explore/explore.page.ts");

      var routes = [{
        path: '',
        component: _explore_page__WEBPACK_IMPORTED_MODULE_3__["ExplorePage"]
      }, {
        path: 'explore-detail/map-location',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | explore-detail-map-location-map-location-module */
          "map-location-map-location-module").then(__webpack_require__.bind(null,
          /*! ./explore-detail/map-location/map-location.module */
          "./src/app/menu/explore/explore-detail/map-location/map-location.module.ts")).then(function (m) {
            return m.MapLocationPageModule;
          });
        }
      }, {
        path: 'explore-detail/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | explore-detail-explore-detail-module */
          "explore-detail-explore-detail-module").then(__webpack_require__.bind(null,
          /*! ./explore-detail/explore-detail.module */
          "./src/app/menu/explore/explore-detail/explore-detail.module.ts")).then(function (m) {
            return m.ExploreDetailPageModule;
          });
        }
      }, {
        path: 'list-item/:order',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | list-item-list-item-module */
          [__webpack_require__.e("default~edit-profile-edit-profile-module~list-item-list-item-module"), __webpack_require__.e("list-item-list-item-module")]).then(__webpack_require__.bind(null,
          /*! ./list-item/list-item.module */
          "./src/app/menu/explore/list-item/list-item.module.ts")).then(function (m) {
            return m.ListItemPageModule;
          });
        }
      }, {
        path: 'shopping-cart/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | shopping-cart-shopping-cart-module */
          [__webpack_require__.e("common"), __webpack_require__.e("shopping-cart-shopping-cart-module")]).then(__webpack_require__.bind(null,
          /*! ./shopping-cart/shopping-cart.module */
          "./src/app/menu/explore/shopping-cart/shopping-cart.module.ts")).then(function (m) {
            return m.ShoppingCartPageModule;
          });
        }
      }];

      var ExplorePageRoutingModule = function ExplorePageRoutingModule() {
        _classCallCheck(this, ExplorePageRoutingModule);
      };

      ExplorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ExplorePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/menu/explore/explore.module.ts":
    /*!************************************************!*\
      !*** ./src/app/menu/explore/explore.module.ts ***!
      \************************************************/

    /*! exports provided: ExplorePageModule */

    /***/
    function srcAppMenuExploreExploreModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExplorePageModule", function () {
        return ExplorePageModule;
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


      var _explore_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./explore-routing.module */
      "./src/app/menu/explore/explore-routing.module.ts");
      /* harmony import */


      var _explore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./explore.page */
      "./src/app/menu/explore/explore.page.ts");

      var ExplorePageModule = function ExplorePageModule() {
        _classCallCheck(this, ExplorePageModule);
      };

      ExplorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _explore_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExplorePageRoutingModule"]],
        declarations: [_explore_page__WEBPACK_IMPORTED_MODULE_6__["ExplorePage"]]
      })], ExplorePageModule);
      /***/
    },

    /***/
    "./src/app/menu/explore/explore.page.scss":
    /*!************************************************!*\
      !*** ./src/app/menu/explore/explore.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMenuExploreExplorePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-slides {\n  height: 33%;\n}\n\n.box {\n  border-radius: 10px;\n}\n\np {\n  padding-top: 5px;\n}\n\n.icon {\n  box-shadow: 0 8px 14px rgba(0, 0, 0, 0.1) !important;\n}\n\n.shadow {\n  box-shadow: 0 8px 14px rgba(0, 0, 0, 0.1) !important;\n}\n\n.explore__section {\n  padding: 16px 0px 0px;\n}\n\n.explore__section-title {\n  font-weight: bold;\n  margin-bottom: 5px;\n  color: #7BA57F;\n  text-align: center;\n  margin: 8px 0px;\n}\n\n@media only screen and (max-width: 769px) {\n  .explore__section-title {\n    font-size: 18px;\n  }\n}\n\n.explore__section-subtitle {\n  font-size: 24px;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.38);\n}\n\n@media only screen and (max-width: 769px) {\n  .explore__section-subtitle {\n    font-size: 14px;\n  }\n}\n\n.separator {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 4px 16px;\n  padding: 0;\n}\n\nh2,\nh3,\np {\n  margin: 0;\n  color: #7BA57F;\n}\n\n.section {\n  padding: 50px 8px;\n}\n\n.container {\n  max-width: 375px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.grid {\n  display: grid;\n  grid-gap: 25px;\n}\n\n.card {\n  position: relative;\n  max-width: 100%;\n  margin: 0 auto;\n}\n\n.card__image {\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 120px;\n  width: 120px;\n  right: 6px;\n  margin: 0 auto;\n  top: -18%;\n  z-index: 2;\n  border-radius: 50%;\n  transition: all 0.3s ease-out;\n  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3));\n}\n\n.card__data {\n  border-top-right-radius: 50%;\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background-color: #FFF5DA;\n  padding-top: calc(100% * 0.75);\n  transition: all 0.3s ease-out 0.1s;\n  height: 210px;\n}\n\n.card__info {\n  padding: 0 10px;\n  margin-bottom: 10px;\n  height: 62px;\n  width: 130px;\n}\n\n.card__info h2 {\n  font-size: 14px;\n  font-weight: 800;\n}\n\n.card__info p {\n  font-size: 10px;\n  line-height: 14px;\n  color: #a2a2a2;\n}\n\n.card__action {\n  display: grid;\n  grid-template: 30px/1fr 35px;\n}\n\n.card__price {\n  height: 30px;\n  padding: 0 10px 0 12px;\n  margin-top: 16px;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  font-weight: 800;\n}\n\n.card__add {\n  overflow: hidden;\n  width: 35px;\n  height: 30px;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  background-color: #7BA57F;\n  border: none;\n  color: #fff;\n  border-top-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  font-size: 20px;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.3s ease-in;\n}\n\n.card__add:hover {\n  opacity: 0.8;\n  transform: scale(1.1);\n}\n\n.card__add:active {\n  opacity: 1;\n  transform: scale(0.8);\n}\n\n.notifications-badge {\n  position: absolute;\n  top: -3px;\n  right: -4px;\n  font-size: 10px;\n}\n\n.header__icon {\n  font-size: 24px;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9leHBsb3JlL2V4cGxvcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBRUUsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFFRSxvREFBQTtBQUFGOztBQUdBO0VBRUUsb0RBQUE7QUFBRjs7QUFJRTtFQUNFLHFCQUFBO0FBREo7O0FBRUk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFOOztBQUNNO0VBTkY7SUFPSSxlQUFBO0VBRU47QUFDRjs7QUFBSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBRU47O0FBRE07RUFKRjtJQUtJLGVBQUE7RUFJTjtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFFRjs7QUFDQTs7O0VBR0UsU0FBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUVBLGtEQUFBO0FBT0Y7O0FBTEE7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7QUFRRjs7QUFOQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBU0Y7O0FBUEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFXRjs7QUFUQTtFQUNFLGFBQUE7RUFDQSw0QkFBQTtBQVlGOztBQVZBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFhRjs7QUFYQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQWNGOztBQVpBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FBZUY7O0FBYkE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7QUFnQkY7O0FBWkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWVKOztBQVZFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFhSiIsImZpbGUiOiJzcmMvYXBwL21lbnUvZXhwbG9yZS9leHBsb3JlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogMzMlO1xyXG59XHJcblxyXG4uYm94IHtcclxuICAvL2JveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxucCB7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLmljb257XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaGFkb3d7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5leHBsb3Jle1xyXG4gICZfX3NlY3Rpb257XHJcbiAgICBwYWRkaW5nOiAxNnB4IDBweCAwcHg7XHJcbiAgICAmLXRpdGxle1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDsgXHJcbiAgICAgIGNvbG9yOiAjN0JBNTdGO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogOHB4IDBweDtcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1zdWJ0aXRsZXtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuMzgpO1xyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2VwYXJhdG9ye1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcclxuICBtYXJnaW46IDRweCAxNnB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmgyLFxyXG5oMyxcclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjN0JBNTdGO1xyXG59XHJcbi5zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA1MHB4IDhweDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDM3NXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMjVweDtcclxufVxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uY2FyZF9faW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICByaWdodDogNnB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRvcDogLTE4JTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCA1cHggIzIyMik7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XHJcbn1cclxuLmNhcmRfX2RhdGEge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjVEQTtcclxuICBwYWRkaW5nLXRvcDogY2FsYygxMDAlICogMC43NSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMC4xcztcclxuICBoZWlnaHQ6IDIxMHB4O1xyXG59XHJcbi5jYXJkX19pbmZvIHtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBoZWlnaHQ6IDYycHg7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG59XHJcbi5jYXJkX19pbmZvIGgyIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4uY2FyZF9faW5mbyBwIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgY29sb3I6ICNhMmEyYTI7XHJcbn1cclxuLmNhcmRfX2FjdGlvbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiAzMHB4IC8gMWZyIDM1cHg7XHJcbn1cclxuLmNhcmRfX3ByaWNlIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcGFkZGluZzogMCAxMHB4IDAgMTJweDtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4uY2FyZF9fYWRkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3QkE1N0Y7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbn1cclxuLmNhcmRfX2FkZDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4uY2FyZF9fYWRkOmFjdGl2ZSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb25zIHtcclxuICAmLWJhZGdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTNweDtcclxuICAgIHJpZ2h0OiAtNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgJl9faWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/menu/explore/explore.page.ts":
    /*!**********************************************!*\
      !*** ./src/app/menu/explore/explore.page.ts ***!
      \**********************************************/

    /*! exports provided: ExplorePage */

    /***/
    function srcAppMenuExploreExplorePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExplorePage", function () {
        return ExplorePage;
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
      /*! ../../service/wisata.service */
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _service_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../service/database.service */
      "./src/app/service/database.service.ts");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../service/auth.service */
      "./src/app/service/auth.service.ts");

      var ExplorePage = /*#__PURE__*/function () {
        function ExplorePage(authService, wisataService, storage, navCtrl, loadingController, databaseService, firestore) {
          _classCallCheck(this, ExplorePage);

          this.authService = authService;
          this.wisataService = wisataService;
          this.storage = storage;
          this.navCtrl = navCtrl;
          this.loadingController = loadingController;
          this.databaseService = databaseService;
          this.firestore = firestore;
          this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
          };
        }

        _createClass(ExplorePage, [{
          key: "slidesDidLoad",
          value: function slidesDidLoad(slides) {
            slides.startAutoplay();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loading;
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
                      this.pertunjukanList = this.wisataService.getWisata('pertunjukan').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (wisataList) {
                        return wisataList.map(function (wisata) {
                          wisata.gambarUrl = _this.getImageUrl(wisata.gambar[0]);
                          return wisata;
                        });
                      }));
                      this.museumList = this.wisataService.getWisata('museum').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (wisataList) {
                        return wisataList.map(function (wisata) {
                          wisata.gambarUrl = _this.getImageUrl(wisata.gambar[0]);
                          return wisata;
                        });
                      }));
                      this.workshopList = this.wisataService.getWisata('workshop').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (wisataList) {
                        return wisataList.map(function (wisata) {
                          wisata.gambarUrl = _this.getImageUrl(wisata.gambar[0]);
                          return wisata;
                        });
                      }));
                      _context.next = 10;
                      return this.authService.getPromiseUserData().then(function (user) {
                        _this.userProfile = user;
                        loading.dismiss();
                      });

                    case 10:
                      this.firestore.collection('history', function (ref) {
                        return ref.where('email', '==', _this.userProfile.email).where('open', '==', false);
                      }).valueChanges().subscribe(function (res) {
                        _this.historyCount = res.length;
                      });

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getImageUrl",
          value: function getImageUrl(imageName) {
            return this.storage.ref("wisata/".concat(imageName)).getDownloadURL();
          }
        }, {
          key: "goToListItem",
          value: function goToListItem($event, order) {
            this.navCtrl.navigateForward("/menu/tabs/explore/list-item/".concat(order));
          }
        }]);

        return ExplorePage;
      }();

      ExplorePage.ctorParameters = function () {
        return [{
          type: _service_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _service_wisata_service__WEBPACK_IMPORTED_MODULE_2__["WisataService"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _service_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
        }];
      };

      ExplorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explore',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./explore.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/explore.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./explore.page.scss */
        "./src/app/menu/explore/explore.page.scss"))["default"]]
      })], ExplorePage);
      /***/
    },

    /***/
    "./src/app/service/database.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/service/database.service.ts ***!
      \*********************************************/

    /*! exports provided: DatabaseService */

    /***/
    function srcAppServiceDatabaseServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatabaseService", function () {
        return DatabaseService;
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

      var DatabaseService = /*#__PURE__*/function () {
        function DatabaseService(firestore) {
          _classCallCheck(this, DatabaseService);

          this.firestore = firestore;
          this.wisataList = [{
            id: '',
            deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gambar: ['pertunjukan-wayang-kulit-1.jpg', 'pertunjukan-wayang-kulit-2.jpg'],
            harga: 50000,
            jam: '10:00-11:00',
            kategori: 'pertunjukan',
            kota: 'Yogyakarta',
            lokasi: 'Gedung Kesenian Kota Yogyakarta',
            nama: 'Pertunjukan Wayang Kulit',
            tanggal: '2020-11-01',
            tiketTerjual: 50,
            tiketTersedia: 100,
            daerah: 'jateng',
            position: [7.7956, 110.3695]
          }, {
            id: '',
            deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gambar: ['tari-barong-1.jpg', 'tari-barong-2.jpg'],
            harga: 60000,
            jam: '11:00-12:00',
            kategori: 'pertunjukan',
            kota: 'Denpasar',
            lokasi: 'Gedung Kesenian Kota Denpasar',
            nama: 'Tari Barong',
            tanggal: '2020-11-02',
            tiketTerjual: 50,
            tiketTersedia: 100,
            daerah: 'bali',
            position: [8.6705, 115.2126]
          }, {
            id: '',
            deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gambar: ['tari-hudoq-1.jpg', 'tari-hudoq-2.jpg'],
            harga: 70000,
            jam: '12:00-13:00',
            kategori: 'pertunjukan',
            kota: 'Samarinda',
            lokasi: 'Gedung Kesenian Kota Samarinda',
            nama: 'Tari Hudoq',
            tanggal: '2020-11-03',
            tiketTerjual: 50,
            tiketTersedia: 100,
            daerah: 'kaltim',
            position: [0.5016, 117.1265]
          }, {
            id: '',
            deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gambar: ['tari-musyoh-1.jpg', 'tari-musyoh-2.jpg'],
            harga: 80000,
            jam: '13:00-14:00',
            kategori: 'pertunjukan',
            kota: 'Jayapura',
            lokasi: 'Gedung Kesenian Kota Jayapura',
            nama: 'Tari Musyoh',
            tanggal: '2020-11-04',
            tiketTerjual: 50,
            tiketTersedia: 100,
            daerah: 'papua',
            position: [2.5916, 140.6690]
          }, {
            id: '',
            deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gambar: ['teater-randai-1.jpg', 'teater-randai-2.jpg'],
            harga: 90000,
            jam: '14:00-15:00',
            kategori: 'pertunjukan',
            kota: 'Padang',
            lokasi: 'Gedung Kesenian Kota Padang',
            nama: 'Teater Randai',
            tanggal: '2020-11-05',
            tiketTerjual: 50,
            tiketTersedia: 100,
            daerah: 'sumbar',
            position: [0.9471, 100.4172]
          }, {
            id: '',
            deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gambar: ['museum-buntu-kalando-1.jpg', 'museum-buntu-kalando-2.jpg'],
            harga: 100000,
            jam: '10:00-17:00',
            kategori: 'museum',
            kota: 'Toraja',
            lokasi: 'Musuem Buntu Kalando',
            nama: 'Musuem Buntu Kalando',
            tanggal: '2020-11-06',
            tiketTerjual: 50,
            tiketTersedia: 100,
            daerah: 'sulsel',
            position: [3.0753, 119.7426]
          }, {
            id: '',
            deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gambar: ['museum-gajah-1.jpg', 'museum-gajah-2.jpg'],
            harga: 110000,
            jam: '10:00-17:00',
            kategori: 'museum',
            kota: 'DKI Jakarta',
            lokasi: 'Museum Gajah',
            nama: 'Museum Gajah',
            tanggal: '2020-11-07',
            tiketTerjual: 50,
            tiketTersedia: 100,
            daerah: 'jakarta',
            position: [6.2088, 106.8456]
          }, {
            id: '',
            deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gambar: ['museum-konferensi-asia-afrika-1.jpg', 'museum-konferensi-asia-afrika-1-2.jpg'],
            harga: 120000,
            jam: '10:00-17:00',
            kategori: 'museum',
            kota: 'Bandung',
            lokasi: 'Museum Konferensi Asia Afrika',
            nama: 'Museum Konferensi Asia Afrika',
            tanggal: '2020-11-08',
            tiketTerjual: 50,
            tiketTersedia: 100,
            daerah: 'jabar',
            position: [6.9175, 107.6191]
          }, {
            id: '',
            deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gambar: ['museum-tsunami-1.jpg', 'museum-tsunami-2.jpg'],
            harga: 130000,
            jam: '10:00-17:00',
            kategori: 'museum',
            kota: 'Banda Aceh',
            lokasi: 'Museum Tsunami',
            nama: 'Museum Tsunami',
            tanggal: '2020-11-09',
            tiketTerjual: 50,
            tiketTersedia: 100,
            daerah: 'aceh',
            position: [5.5483, 95.3238]
          }, {
            id: '',
            deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gambar: ['museum-house-of-sampoerna-1.jpg', 'museum-house-of-sampoerna-2.jpg'],
            harga: 140000,
            jam: '10:00-17:00',
            kategori: 'museum',
            kota: 'Surabaya',
            lokasi: 'Museum House Of Sampoerna',
            nama: 'Museum House Of Sampoerna',
            tanggal: '2020-11-10',
            tiketTerjual: 50,
            tiketTersedia: 100,
            daerah: 'jatim',
            position: [7.2575, 112.7521]
          }, {
            id: '',
            deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gambar: ['workshop-kerajinan-perak-1.jpg', 'workshop-kerajinan-perak-2.jpg'],
            harga: 150000,
            jam: '17:00-18:00',
            kategori: 'workshop',
            kota: 'Yogyakarta',
            lokasi: 'Gedung Kesenian Kota Yogyakarta',
            nama: 'Workshop Kerajinan Perak',
            tanggal: '2020-11-11',
            tiketTerjual: 50,
            tiketTersedia: 100,
            daerah: 'jateng',
            position: [7.7956, 110.3695]
          }, {
            id: '',
            deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gambar: ['workshop-memahat-patung-1.jpg', 'workshop-memahat-patung-2.jpg'],
            harga: 160000,
            jam: '18:00-19:00',
            kategori: 'workshop',
            kota: 'Pontianak',
            lokasi: 'Gedung Kesenian Kota Pontianak',
            nama: 'Workshop Memahat Patung',
            tanggal: '2020-11-12',
            tiketTerjual: 50,
            tiketTersedia: 100,
            daerah: 'kalbar',
            position: [0.0263, 109.3425]
          }, {
            id: '',
            deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gambar: ['workshop-membatik-1.jpg', 'workshop-membatik-2.jpg'],
            harga: 170000,
            jam: '19:00-20:00',
            kategori: 'workshop',
            kota: 'Makassar',
            lokasi: 'Gedung Kesenian Kota Makassar',
            nama: 'Workshop Membatik',
            tanggal: '2020-11-13',
            tiketTerjual: 50,
            tiketTersedia: 100,
            daerah: 'sulsel',
            position: [5.1477, 119.4327]
          }, {
            id: '',
            deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gambar: ['workshop-nganyam-rotan-1.jpg', 'workshop-nganyam-rotan-2.jpg'],
            harga: 180000,
            jam: '20:00-21:00',
            kategori: 'workshop',
            kota: 'Jambi',
            lokasi: 'Gedung Kesenian Kota Jambi',
            nama: 'Workshop Nganyam Rotan',
            tanggal: '2020-11-14',
            tiketTerjual: 50,
            tiketTersedia: 100,
            daerah: 'jambi',
            position: [1.6101, 103.6131]
          }, {
            id: '',
            deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gambar: ['workshop-tari-1.jpg', 'workshop-tari-2.jpg'],
            harga: 100000,
            jam: '21:00-22:00',
            kategori: 'workshop',
            kota: 'Ambon',
            lokasi: 'Gedung Kesenian Kota Ambon',
            nama: 'Workshop Tari',
            tanggal: '2020-11-15',
            tiketTerjual: 50,
            tiketTersedia: 100,
            daerah: 'maluku',
            position: [3.6387, 128.1689]
          }];
        }

        _createClass(DatabaseService, [{
          key: "createWisataList",
          value: function createWisataList() {
            var _this2 = this;

            this.wisataList.forEach(function (wisata) {
              wisata.id = _this2.firestore.createId();

              _this2.firestore.collection('wisata').doc(wisata.id).set(wisata);
            });
            return;
          }
        }]);

        return DatabaseService;
      }();

      DatabaseService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      DatabaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DatabaseService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=explore-explore-module-es5.js.map