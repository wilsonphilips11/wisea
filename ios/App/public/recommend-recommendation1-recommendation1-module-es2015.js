(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recommend-recommendation1-recommendation1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recommend/recommendation1/recommendation1.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recommend/recommendation1/recommendation1.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot='start' routerLink=\"/menu/tabs/home\">\r\n            <ion-icon src='assets/icon/backButton.svg'></ion-icon>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-center\">\r\n            Wisea\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item-group id=\"container\">\r\n        <ion-item lines='none'>\r\n            <ion-img src=\"assets/Recommendation/recommend1.svg\"></ion-img>\r\n        </ion-item>\r\n        <ion-title size=\"large\" class=\"ion-text-center title\">Sesuaikan Budget</ion-title>\r\n        <ion-item lines='none'>\r\n            <ion-label color=\"medium\" class=\"ion-text-wrap\">Seperti menghitung hari bersama dirinya, budget kamu juga perlu dihitung nih..</ion-label>\r\n        </ion-item>\r\n        <ion-grid lines=\"none\">\r\n            <ion-row>\r\n                <ion-col size=\"3\" size-lg>\r\n                    <ion-img src=\"assets/Recommendation/less100k.svg\" class=\"budgetImg\" (click)=\"budgetInput($event, 'less')\"></ion-img>\r\n                </ion-col>\r\n                <ion-col size=\"3\" size-lg>\r\n                    <ion-img src=\"assets/Recommendation/more100k.svg\" class=\"budgetImg\" (click)=\"budgetInput($event, 'more')\"></ion-img>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-item-group>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/recommend/recommendation1/recommendation1-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/recommend/recommendation1/recommendation1-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: Recommendation1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recommendation1PageRoutingModule", function() { return Recommendation1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _recommendation1_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recommendation1.page */ "./src/app/recommend/recommendation1/recommendation1.page.ts");





const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["redirectUnauthorizedTo"])(['/']);
const routes = [
    Object.assign({ path: '', component: _recommendation1_page__WEBPACK_IMPORTED_MODULE_4__["Recommendation1Page"] }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["canActivate"])(redirectUnauthorizedToLogin))
];
let Recommendation1PageRoutingModule = class Recommendation1PageRoutingModule {
};
Recommendation1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], Recommendation1PageRoutingModule);



/***/ }),

/***/ "./src/app/recommend/recommendation1/recommendation1.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/recommend/recommendation1/recommendation1.module.ts ***!
  \*********************************************************************/
/*! exports provided: Recommendation1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recommendation1PageModule", function() { return Recommendation1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _recommendation1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recommendation1-routing.module */ "./src/app/recommend/recommendation1/recommendation1-routing.module.ts");
/* harmony import */ var _recommendation1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recommendation1.page */ "./src/app/recommend/recommendation1/recommendation1.page.ts");







let Recommendation1PageModule = class Recommendation1PageModule {
};
Recommendation1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recommendation1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Recommendation1PageRoutingModule"]
        ],
        declarations: [_recommendation1_page__WEBPACK_IMPORTED_MODULE_6__["Recommendation1Page"]]
    })
], Recommendation1PageModule);



/***/ }),

/***/ "./src/app/recommend/recommendation1/recommendation1.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/recommend/recommendation1/recommendation1.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  position: absolute;\n  left: 0%;\n  right: 0%;\n  top: 32%;\n  margin: 120px 0px 30px;\n  transform: translateY(-50%);\n  color: var(--ion-color-primary);\n}\n\n#container strong {\n  font-size: 40px;\n  line-height: 28px;\n  margin-top: 20px;\n  letter-spacing: 2px;\n}\n\n#container p {\n  font-size: 26px;\n  line-height: 28px;\n  color: var(--ion-color-primary);\n  margin-bottom: 16px;\n  width: 10px;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container ion-item {\n  margin-top: 24px;\n  text-align: center;\n  z-index: -1;\n}\n\n#container ion-grid {\n  margin-top: 20px;\n  text-align: center;\n  z-index: -1;\n}\n\n#container ion-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n}\n\n#container ion-col {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  color: black;\n}\n\nion-icon {\n  font-size: 24px;\n  margin-left: 5px;\n}\n\n.title {\n  margin-top: 30px;\n  font-size: 28px;\n  font-weight: 600;\n  text-align: left;\n}\n\n.budgetImg {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb21tZW5kL3JlY29tbWVuZGF0aW9uMS9yZWNvbW1lbmRhdGlvbjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZWNvbW1lbmQvcmVjb21tZW5kYXRpb24xL3JlY29tbWVuZGF0aW9uMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgdG9wOiAzMiU7XHJcbiAgICBtYXJnaW46IDEyMHB4IDBweCAzMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2NvbnRhaW5lciBpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbiNjb250YWluZXIgaW9uLWdyaWQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGlvbi1pbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2NvbnRhaW5lciBpb24tY29sIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5idWRnZXRJbWcge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/recommend/recommendation1/recommendation1.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/recommend/recommendation1/recommendation1.page.ts ***!
  \*******************************************************************/
/*! exports provided: Recommendation1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recommendation1Page", function() { return Recommendation1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");




let Recommendation1Page = class Recommendation1Page {
    constructor(router, storage) {
        this.router = router;
        this.storage = storage;
    }
    ngOnInit() {
    }
    budgetInput(event, budget) {
        console.log(budget);
        this.storage.set('budget', budget);
        this.router.navigate(['/recommendation2']);
    }
};
Recommendation1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
Recommendation1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recommendation1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./recommendation1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recommend/recommendation1/recommendation1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./recommendation1.page.scss */ "./src/app/recommend/recommendation1/recommendation1.page.scss")).default]
    })
], Recommendation1Page);



/***/ })

}]);
//# sourceMappingURL=recommend-recommendation1-recommendation1-module-es2015.js.map