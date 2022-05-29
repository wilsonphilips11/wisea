(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-item-list-item-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/list-item/list-item.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/list-item/list-item.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot='start' routerLink=\"/menu/tabs/explore\">\r\n      <ion-icon class=\"header__icon\" src='assets/icon/backButton.svg'></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      Wisea\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=\"background\">\r\n  <ion-searchbar #searchbar=\"ngModel\" ngModel placeholder=\"Cari wisata favoritmu\" class=\"ion-padding\" (ionInput)=\"searchWisata($event)\" showCancelButton=\"focus\"></ion-searchbar>\r\n  <p class=\"ion-text-center\" *ngIf=\"wisataFilter?.length === 0\">Pencarian tidak ditemukan</p>\r\n  <ion-list class=\"ion-no-padding\">\r\n    <ion-item button lines=\"none\" class=\"ion-margin ion-no-padding\" *ngFor=\"let wisata of (wisataFilter)\" (click)=\"goToExploreDetail(wisata.id)\">\r\n      <ion-thumbnail slot=\"start\" class=\"ion-no-margin ion-margin-end\" style=\"height: 13vh; width: 13vh\">\r\n        <ion-img [src]=\"(wisata.gambarUrl | async)\" style=\"border-top-left-radius: 10px; border-bottom-left-radius: 10px;\"></ion-img>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-no-margin\">\r\n        <p class=\"ion-no-margin\" style=\"font-weight: bold; text-transform: uppercase;\">{{ wisata.nama }}</p>\r\n        <ion-grid fixed class=\"ion-no-padding\">\r\n          <ion-row>\r\n            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n              <ion-icon class=\"ion-float-left\" style=\"margin-right: 10px\" src=\"assets/icon/money.svg\"></ion-icon>\r\n              <p>{{ wisata.harga | currency:'IDR':'symbol-narrow':'3.0' }}</p>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n              <ion-icon class=\"ion-float-left\" style=\"margin-right: 10px\" src=\"assets/icon/date.svg\"></ion-icon>\r\n              <p style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">{{ wisata.tanggal }}</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n              <ion-icon class=\"ion-float-left\" style=\"margin-right: 10px\" src=\"assets/icon/sold.svg\"></ion-icon>\r\n              <p style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">{{ wisata.tiketTerjual }} sold</p>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n              <ion-icon class=\"ion-float-left\" style=\"margin-right: 10px\" src=\"assets/icon/location.svg\"></ion-icon>\r\n              <p style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">{{ wisata.distance }} km</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/menu/explore/list-item/list-item-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/menu/explore/list-item/list-item-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ListItemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemPageRoutingModule", function() { return ListItemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item.page */ "./src/app/menu/explore/list-item/list-item.page.ts");




const routes = [
    {
        path: '',
        component: _list_item_page__WEBPACK_IMPORTED_MODULE_3__["ListItemPage"]
    }
];
let ListItemPageRoutingModule = class ListItemPageRoutingModule {
};
ListItemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListItemPageRoutingModule);



/***/ }),

/***/ "./src/app/menu/explore/list-item/list-item.module.ts":
/*!************************************************************!*\
  !*** ./src/app/menu/explore/list-item/list-item.module.ts ***!
  \************************************************************/
/*! exports provided: ListItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemPageModule", function() { return ListItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-item-routing.module */ "./src/app/menu/explore/list-item/list-item-routing.module.ts");
/* harmony import */ var _list_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-item.page */ "./src/app/menu/explore/list-item/list-item.page.ts");







let ListItemPageModule = class ListItemPageModule {
};
ListItemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_item_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListItemPageRoutingModule"]
        ],
        declarations: [_list_item_page__WEBPACK_IMPORTED_MODULE_6__["ListItemPage"]]
    })
], ListItemPageModule);



/***/ }),

/***/ "./src/app/menu/explore/list-item/list-item.page.scss":
/*!************************************************************!*\
  !*** ./src/app/menu/explore/list-item/list-item.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --border-radius: 10px !important;\n  --border-width: 1px !important;\n  --background: #FFF5DA;\n}\n\n.header__icon {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9leHBsb3JlL2xpc3QtaXRlbS9saXN0LWl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxlQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9tZW51L2V4cGxvcmUvbGlzdC1pdGVtL2xpc3QtaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogI0ZGRjVEQTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgJl9faWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/menu/explore/list-item/list-item.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/menu/explore/list-item/list-item.page.ts ***!
  \**********************************************************/
/*! exports provided: ListItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemPage", function() { return ListItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_wisata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/wisata.service */ "./src/app/service/wisata.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let ListItemPage = class ListItemPage {
    constructor(wisataService, storage, router, route, loadingController) {
        this.wisataService = wisataService;
        this.storage = storage;
        this.router = router;
        this.route = route;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            const order = this.route.snapshot.paramMap.get('order');
            this.getWisataList(order);
            loading.dismiss();
        });
    }
    getWisataList(order = null) {
        this.wisataService.getWisata(null, order).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((wisataList) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            wisataList.map(wisata => {
                wisata.gambarUrl = this.getImageUrl(wisata.gambar[0]);
                return wisata;
            });
            wisataList = yield this.applyHaversine(wisataList);
            if (order === 'near-me') {
                wisataList.sort((wisataA, wisataB) => {
                    return wisataA.distance - wisataB.distance;
                });
            }
            else if (order === 'latest') {
                wisataList.sort((wisataA, wisataB) => {
                    return new Date(wisataB.tanggal).getTime() - new Date(wisataA.tanggal).getTime();
                });
            }
            return wisataList;
        }))).subscribe((wisataList) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.wisataList = yield wisataList;
            this.wisataFilter = yield wisataList;
        }));
    }
    getImageUrl(imageName) {
        return this.storage.ref(`wisata/${imageName}`).getDownloadURL();
    }
    searchWisata($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const searchTerm = $event.srcElement.value;
            if (!searchTerm) {
                this.wisataFilter = this.wisataList;
                return;
            }
            this.wisataFilter = this.wisataList.filter(wisata => {
                if (wisata.nama && searchTerm) {
                    return (wisata.nama.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                }
            });
        });
    }
    goToExploreDetail(wisataId) {
        this.router.navigate(['menu/tabs/explore/explore-detail', wisataId]);
    }
    applyHaversine(wisataList) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getCurrentPosition().then((coordinates) => {
                this.userLocation = {
                    lat: coordinates.coords.latitude,
                    lng: coordinates.coords.longitude
                };
            });
            wisataList.map((wisata) => {
                const placeLocation = {
                    lat: wisata.position[0],
                    lng: wisata.position[1]
                };
                wisata.distance = this.getDistanceBetweenPoints(this.userLocation, placeLocation, 'km').toFixed(2);
            });
            return wisataList;
        });
    }
    getCurrentPosition() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Geolocation"].getCurrentPosition();
        });
    }
    getDistanceBetweenPoints(start, end, units) {
        const earthRadius = {
            miles: 3958.8,
            km: 6371
        };
        const R = earthRadius[units || 'miles'];
        const lat1 = start.lat;
        const lon1 = start.lng;
        const lat2 = end.lat;
        const lon2 = end.lng;
        const dLat = this.toRad((lat2 - lat1));
        const dLon = this.toRad((lon2 - lon1));
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c;
        return d;
    }
    toRad(x) {
        return x * Math.PI / 180;
    }
};
ListItemPage.ctorParameters = () => [
    { type: _service_wisata_service__WEBPACK_IMPORTED_MODULE_2__["WisataService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
ListItemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-item.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/list-item/list-item.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-item.page.scss */ "./src/app/menu/explore/list-item/list-item.page.scss")).default]
    })
], ListItemPage);



/***/ })

}]);
//# sourceMappingURL=list-item-list-item-module-es2015.js.map