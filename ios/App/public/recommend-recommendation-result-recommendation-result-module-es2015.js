(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recommend-recommendation-result-recommendation-result-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recommend/recommendation-result/recommendation-result.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recommend/recommendation-result/recommendation-result.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\" routerLink=\"../recommendation4\">\r\n            <ion-icon src='assets/icon/backButton.svg'></ion-icon>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-center\">\r\n            Wisea\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item-group id=\"container\">\r\n        <ion-item lines='none'>\r\n            <ion-img src=\"assets/Recommendation/recommendResult.svg\"></ion-img>\r\n        </ion-item>\r\n        <ion-label size=\"large\" class=\"ion-text-center ion-text-wrap title\">Hiburan Spesial Untuk Kamu!</ion-label>\r\n\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col size-sm=\"12\" size-lg=\"4\" offset-lg=\"4\">\r\n                    <ion-list class=\"ion-no-padding\">\r\n                        <ion-item button lines=\"none\" class=\"ion-margin ion-no-padding card\" *ngFor=\"let wisata of recommendResult\" [routerLink]=\"['../explore/explore-detail', wisata.id]\">\r\n                            <ion-thumbnail slot=\"start\" class=\"ion-no-margin ion-margin-end\" style=\"height: 13vh; width: 13vh\">\r\n                                <ion-img [src]=\"(wisata.gambarUrl | async)\" style=\"border-top-left-radius: 10px; border-bottom-left-radius: 10px;\"></ion-img>\r\n                            </ion-thumbnail>\r\n                            <ion-label class=\"ion-no-margin\">\r\n                                <p style=\"font-weight: bold; text-transform: uppercase;\">{{ wisata.nama }}</p>\r\n                                <ion-grid fixed class=\"ion-no-padding\">\r\n                                    <ion-row>\r\n                                        <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                            <ion-icon class=\"ion-float-left\" style=\"margin-right: 10px\" src=\"assets/icon/date.svg\"></ion-icon>\r\n                                            <p style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">{{ wisata.tanggal }}</p>\r\n                                        </ion-col>\r\n                                        <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                            <ion-icon class=\"ion-float-left\" style=\"margin-right: 10px\" src=\"assets/icon/time.svg\"></ion-icon>\r\n                                            <p>{{ wisata.jam }}</p>\r\n                                        </ion-col>\r\n                                    </ion-row>\r\n                                    <ion-row>\r\n                                        <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                            <ion-icon class=\"ion-float-left\" style=\"margin-right: 10px\" src=\"assets/icon/money.svg\"></ion-icon>\r\n                                            <p>{{ wisata.harga | currency:'IDR':'symbol-narrow':'3.0' }}</p>\r\n                                        </ion-col>\r\n                                        <ion-col size=\"6\" class=\"sold\">\r\n                                            <ion-icon class=\"ion-float-left\" style=\"margin-right: 10px\" src=\"assets/icon/sold.svg\"></ion-icon>\r\n                                            <p style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">{{ wisata.tiketTerjual }} sold</p>\r\n                                        </ion-col>\r\n                                    </ion-row>\r\n                                </ion-grid>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-list>\r\n                    <ion-label *ngIf=\"(recommendResult.length === 0)\" color=\"medium\" class=\"ion-text-wrap ion-text-center\">\r\n                        Ops, maaf belum ada rekomendasi untuk Anda :(\r\n                    </ion-label>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n        <ion-button expand=\"block\" shape='round' (click)='tryAgain()'>Cari Lagi</ion-button>\r\n    </ion-item-group>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/recommend/recommendation-result/recommendation-result-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/recommend/recommendation-result/recommendation-result-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: RecommendationResultPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationResultPageRoutingModule", function() { return RecommendationResultPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _recommendation_result_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recommendation-result.page */ "./src/app/recommend/recommendation-result/recommendation-result.page.ts");





const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["redirectUnauthorizedTo"])(['/']);
const routes = [
    Object.assign({ path: '', component: _recommendation_result_page__WEBPACK_IMPORTED_MODULE_4__["RecommendationResultPage"] }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["canActivate"])(redirectUnauthorizedToLogin))
];
let RecommendationResultPageRoutingModule = class RecommendationResultPageRoutingModule {
};
RecommendationResultPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], RecommendationResultPageRoutingModule);



/***/ }),

/***/ "./src/app/recommend/recommendation-result/recommendation-result.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/recommend/recommendation-result/recommendation-result.module.ts ***!
  \*********************************************************************************/
/*! exports provided: RecommendationResultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationResultPageModule", function() { return RecommendationResultPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _recommendation_result_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recommendation-result-routing.module */ "./src/app/recommend/recommendation-result/recommendation-result-routing.module.ts");
/* harmony import */ var _recommendation_result_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recommendation-result.page */ "./src/app/recommend/recommendation-result/recommendation-result.page.ts");







let RecommendationResultPageModule = class RecommendationResultPageModule {
};
RecommendationResultPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recommendation_result_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecommendationResultPageRoutingModule"]
        ],
        declarations: [_recommendation_result_page__WEBPACK_IMPORTED_MODULE_6__["RecommendationResultPage"]]
    })
], RecommendationResultPageModule);



/***/ }),

/***/ "./src/app/recommend/recommendation-result/recommendation-result.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/recommend/recommendation-result/recommendation-result.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  position: absolute;\n  left: 0%;\n  right: 0%;\n  top: 32%;\n  margin: 120px 0px 30px;\n  transform: translateY(-50%);\n  color: var(--ion-color-primary);\n}\n\n#container ion-row {\n  margin-top: 5px;\n}\n\n#container p {\n  color: black;\n  margin-left: 10px;\n}\n\n#container ion-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n}\n\n#container ion-card {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 16px;\n}\n\n.card {\n  --border-radius: 10px !important;\n  --border-width: 1px !important;\n  --background: #FFF5DA;\n}\n\n.img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 16px;\n}\n\n#container ion-button {\n  margin: 10px 50px 50px;\n  font-weight: 600;\n}\n\nion-icon {\n  font-size: 24px;\n  margin-left: 5px;\n}\n\n.title {\n  margin-top: 30px;\n  font-size: 28px;\n  font-weight: 600;\n  padding: 20px;\n  text-align: left;\n  word-wrap: break-word;\n}\n\n.alert {\n  color: #dc0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb21tZW5kL3JlY29tbWVuZGF0aW9uLXJlc3VsdC9yZWNvbW1lbmRhdGlvbi1yZXN1bHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZWNvbW1lbmQvcmVjb21tZW5kYXRpb24tcmVzdWx0L3JlY29tbWVuZGF0aW9uLXJlc3VsdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgdG9wOiAzMiU7XHJcbiAgICBtYXJnaW46IDEyMHB4IDBweCAzMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuI2NvbnRhaW5lciBpb24tcm93IHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIGlvbi1pbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2NvbnRhaW5lciBpb24tY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkY1REE7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHggNTBweCA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgICBjb2xvcjogcmdiKDIyMCwgMCwgMCk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/recommend/recommendation-result/recommendation-result.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/recommend/recommendation-result/recommendation-result.page.ts ***!
  \*******************************************************************************/
/*! exports provided: RecommendationResultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationResultPage", function() { return RecommendationResultPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_service_wisata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/wisata.service */ "./src/app/service/wisata.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let RecommendationResultPage = class RecommendationResultPage {
    constructor(router, storage, toastController, wisataService, fireStorage) {
        this.router = router;
        this.storage = storage;
        this.toastController = toastController;
        this.wisataService = wisataService;
        this.fireStorage = fireStorage;
        this.wisata = true;
    }
    ngOnInit() {
        this.recommendResult = [];
        this.message = null;
    }
    ionViewWillEnter() {
        this.recommendResult = [];
        this.message = null;
        this.getLocalData();
        this.p1 = this.storage.get('budget');
        this.p2 = this.storage.get('time');
        this.p3 = this.storage.get('category');
        this.p4 = this.storage.get('location');
        this.array = Promise.all([this.p1, this.p2, this.p3, this.p4]).then(arr => {
            // checking 
            if (arr[0] == null) {
                this.presentToast();
                this.router.navigate(['/recommendation1']);
            }
            else if (!arr[1]) {
                this.presentToast();
                this.router.navigate(['/recommendation2']);
            }
            else if (!arr[2]) {
                this.presentToast();
                this.router.navigate(['/recommendation3']);
            }
            else if (!arr[3]) {
                this.presentToast();
                this.router.navigate(['/recommendation4']);
            }
            this.wisataService.getWisata().subscribe(res => res.map(m => {
                this.waktu = m.jam.split("-");
                if (m.kategori == arr[2] && m.daerah == arr[3].toLowerCase() && arr[1] == 'pagi' && arr[0] == 'less') {
                    if (m.harga <= 100000 && (this.waktu[0] >= '05:00' && this.waktu[0] < '10:00') || (this.waktu[1] >= '05:00' && this.waktu[1] < '10:00')) {
                        console.log('pagi');
                        m.gambarUrl = this.getImageUrl(m.gambar[0]);
                        this.recommendResult.push(m);
                    }
                }
                else if (m.kategori == arr[2] && m.daerah == arr[3].toLowerCase() && arr[1] == 'siang' && arr[0] == 'less') {
                    if (m.harga <= 100000 && (this.waktu[0] >= '10:00' && this.waktu[0] < '16:00') || (this.waktu[1] >= '10:00' && this.waktu[1] < '16:00')) {
                        console.log('siang');
                        m.gambarUrl = this.getImageUrl(m.gambar[0]);
                        this.recommendResult.push(m);
                    }
                }
                else if (m.kategori == arr[2] && m.daerah == arr[3].toLowerCase() && arr[1] == 'sore' && arr[0] == 'less') {
                    if (m.harga <= 100000 && (this.waktu[0] >= '16:00' && this.waktu[0] < '20:00') || (this.waktu[1] >= '16:00' && this.waktu[1] < '20:00')) {
                        console.log('sore');
                        m.gambarUrl = this.getImageUrl(m.gambar[0]);
                        this.recommendResult.push(m);
                    }
                }
                else if (m.kategori == arr[2] && m.daerah == arr[3].toLowerCase() && arr[1] == 'malam' && arr[0] == 'less') {
                    if (m.harga <= 100000 && (this.waktu[0] >= '20:00' && (this.waktu[0] <= '24:00' && this.waktu[0] >= '00:00' && this.waktu[0] > '05:00')) || (this.waktu[1] >= '20:00' && (this.waktu[1] <= '24:00' && this.waktu[1] >= '00:00' && this.waktu[1] > '05:00'))) {
                        m.gambarUrl = this.getImageUrl(m.gambar[0]);
                        this.recommendResult.push(m);
                    }
                }
                else if (m.kategori == arr[2] && m.daerah == arr[3].toLowerCase() && arr[1] == 'pagi' && arr[0] == 'more') {
                    if (m.harga > 100000 && (this.waktu[0] >= '05:00' && this.waktu[0] < '10:00') || (this.waktu[1] >= '05:00' && this.waktu[1] < '10:00')) {
                        console.log('pagi');
                        m.gambarUrl = this.getImageUrl(m.gambar[0]);
                        this.recommendResult.push(m);
                    }
                }
                else if (m.kategori == arr[2] && m.daerah == arr[3].toLowerCase() && arr[1] == 'siang' && arr[0] == 'more') {
                    if (m.harga > 100000 && (this.waktu[0] >= '10:00' && this.waktu[0] < '16:00') || (this.waktu[1] >= '10:00' && this.waktu[1] < '16:00')) {
                        console.log('siang');
                        m.gambarUrl = this.getImageUrl(m.gambar[0]);
                        this.recommendResult.push(m);
                    }
                }
                else if (m.kategori == arr[2] && m.daerah == arr[3].toLowerCase() && arr[1] == 'sore' && arr[0] == 'more') {
                    if (m.harga > 100000 && (this.waktu[0] >= '16:00' && this.waktu[0] < '20:00') || (this.waktu[1] >= '16:00' && this.waktu[1] < '20:00')) {
                        console.log('sore');
                        m.gambarUrl = this.getImageUrl(m.gambar[0]);
                        this.recommendResult.push(m);
                    }
                }
                else if (m.kategori == arr[2] && m.daerah == arr[3].toLowerCase() && arr[1] == 'malam' && arr[0] == 'more') {
                    if (m.harga > 100000 && (this.waktu[0] >= '20:00' && (this.waktu[0] <= '24:00' && this.waktu[0] >= '00:00' && this.waktu[0] > '05:00')) || (this.waktu[1] >= '20:00' && (this.waktu[1] <= '24:00' && this.waktu[1] >= '00:00' && this.waktu[1] > '05:00'))) {
                        m.gambarUrl = this.getImageUrl(m.gambar[0]);
                        this.recommendResult.push(m);
                    }
                }
                else {
                    this.message = 'data tidak ada';
                    this.wisata = false;
                }
            }));
        });
        console.log(this.recommendResult);
    }
    getLocalData() {
        this.storage.get('budget').then((val) => {
            this.budget = val;
        });
        this.storage.get('time').then((val) => {
            this.time = val;
        });
        this.storage.get('category').then((val) => {
            this.category = val;
        });
        this.storage.get('location').then((val) => {
            this.location = val;
        });
    }
    getImageUrl(imageName) {
        return this.fireStorage.ref(`wisata/${imageName}`).getDownloadURL();
    }
    tryAgain() {
        this.storage.clear();
        this.router.navigate(['./menu/tabs/home']);
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Pilih dahulu opsi berikut.',
                duration: 2000,
                color: 'danger'
            });
            toast.present();
        });
    }
};
RecommendationResultPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_service_wisata_service__WEBPACK_IMPORTED_MODULE_5__["WisataService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }
];
RecommendationResultPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recommendation-result',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./recommendation-result.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recommend/recommendation-result/recommendation-result.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./recommendation-result.page.scss */ "./src/app/recommend/recommendation-result/recommendation-result.page.scss")).default]
    })
], RecommendationResultPage);



/***/ })

}]);
//# sourceMappingURL=recommend-recommendation-result-recommendation-result-module-es2015.js.map