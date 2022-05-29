(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-location-map-location-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/explore-detail/map-location/map-location.page.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/explore-detail/map-location/map-location.page.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMenuExploreExploreDetailMapLocationMapLocationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot='start' (click)=\"popView()\">\n      <ion-icon src='assets/icon/backButton.svg'></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      Wisea\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #map id=\"map\"></div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/menu/explore/explore-detail/map-location/map-location-routing.module.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/menu/explore/explore-detail/map-location/map-location-routing.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: MapLocationPageRoutingModule */

    /***/
    function srcAppMenuExploreExploreDetailMapLocationMapLocationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapLocationPageRoutingModule", function () {
        return MapLocationPageRoutingModule;
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


      var _map_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./map-location.page */
      "./src/app/menu/explore/explore-detail/map-location/map-location.page.ts");

      var routes = [{
        path: '',
        component: _map_location_page__WEBPACK_IMPORTED_MODULE_3__["MapLocationPage"]
      }];

      var MapLocationPageRoutingModule = function MapLocationPageRoutingModule() {
        _classCallCheck(this, MapLocationPageRoutingModule);
      };

      MapLocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MapLocationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/menu/explore/explore-detail/map-location/map-location.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/menu/explore/explore-detail/map-location/map-location.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: MapLocationPageModule */

    /***/
    function srcAppMenuExploreExploreDetailMapLocationMapLocationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapLocationPageModule", function () {
        return MapLocationPageModule;
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


      var _map_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./map-location-routing.module */
      "./src/app/menu/explore/explore-detail/map-location/map-location-routing.module.ts");
      /* harmony import */


      var _map_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./map-location.page */
      "./src/app/menu/explore/explore-detail/map-location/map-location.page.ts");

      var MapLocationPageModule = function MapLocationPageModule() {
        _classCallCheck(this, MapLocationPageModule);
      };

      MapLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _map_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapLocationPageRoutingModule"]],
        declarations: [_map_location_page__WEBPACK_IMPORTED_MODULE_6__["MapLocationPage"]]
      })], MapLocationPageModule);
      /***/
    },

    /***/
    "./src/app/menu/explore/explore-detail/map-location/map-location.page.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/menu/explore/explore-detail/map-location/map-location.page.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMenuExploreExploreDetailMapLocationMapLocationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9leHBsb3JlL2V4cGxvcmUtZGV0YWlsL21hcC1sb2NhdGlvbi9tYXAtbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21lbnUvZXhwbG9yZS9leHBsb3JlLWRldGFpbC9tYXAtbG9jYXRpb24vbWFwLWxvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/menu/explore/explore-detail/map-location/map-location.page.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/menu/explore/explore-detail/map-location/map-location.page.ts ***!
      \*******************************************************************************/

    /*! exports provided: MapLocationPage */

    /***/
    function srcAppMenuExploreExploreDetailMapLocationMapLocationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapLocationPage", function () {
        return MapLocationPage;
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

      var MapLocationPage = /*#__PURE__*/function () {
        function MapLocationPage(route, navCtrl) {
          _classCallCheck(this, MapLocationPage);

          this.route = route;
          this.navCtrl = navCtrl;
          this.markers = [];
        }

        _createClass(MapLocationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.lat = parseFloat(this.route.snapshot.paramMap.get('lat'));
            this["long"] = parseFloat(this.route.snapshot.paramMap.get('long'));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.loadMap();
          } // Initialize a blank map

        }, {
          key: "loadMap",
          value: function loadMap() {
            var latLng = new google.maps.LatLng(this.lat, this["long"]);
            var mapOptions = {
              center: latLng,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.markers = new google.maps.Marker({
              map: this.map,
              animation: google.maps.Animation.DROP,
              position: latLng
            });
            var cityCircle = new google.maps.Circle({
              strokeColor: "#fffb00",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#FFF5DA",
              fillOpacity: 0.35,
              map: this.map,
              center: latLng,
              radius: 400
            });
          }
        }, {
          key: "popView",
          value: function popView() {
            this.navCtrl.pop();
          }
        }]);

        return MapLocationPage;
      }();

      MapLocationPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      MapLocationPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['map']
        }]
      };
      MapLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map-location',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./map-location.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/explore-detail/map-location/map-location.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./map-location.page.scss */
        "./src/app/menu/explore/explore-detail/map-location/map-location.page.scss"))["default"]]
      })], MapLocationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=map-location-map-location-module-es5.js.map