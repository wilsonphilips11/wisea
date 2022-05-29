(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/profile/profile.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/profile/profile.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons routerLink=\"/history\" slot=\"end\">\r\n      <ion-badge class=\"notifications-badge\" color=\"danger\" mode=\"ios\" *ngIf=\"historyCount > 0\">{{ historyCount }}</ion-badge>\r\n      <ion-icon class=\"header__icon\" name=\"bag-check\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      Wisea\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=\"background\">\r\n  <ion-item-group id=\"container\">\r\n    <ion-item lines='none'>\r\n      <ion-avatar class=\"proflePic\">\r\n        <ion-img src=\"{{ userProfile?.photo }}\"></ion-img>\r\n      </ion-avatar>\r\n    </ion-item>\r\n    <ion-title size=\"large\" class=\"ion-text-center userName\">{{ userProfile?.username }}</ion-title>\r\n    <ion-label style=\"padding-top: 30px\">{{ userProfile?.name }}</ion-label>\r\n    <ion-label class=\"ion-padding-top\">{{ userProfile?.email }}</ion-label>\r\n    <ion-label class=\"ion-padding-top\">\r\n      <ion-icon name=\"phone-portrait-sharp\"></ion-icon>{{ userProfile?.phone }}\r\n    </ion-label>\r\n    <ion-item lines='none'>\r\n      <ion-card>\r\n        <ion-grid>\r\n          <ion-row class=\"ion-align-items-center ion-text-center\">\r\n            <ion-col size=\"8\">\r\n              <p>Saldo kamu</p>\r\n              <p>{{ userProfile?.balance | currency:'IDR':'symbol-narrow':'1.0' }}</p>\r\n            </ion-col>\r\n            <div class=\"verticalLine\"></div>\r\n            <ion-col size=\"4\">\r\n              <ion-button (click)=\"topupAlert()\">Topup</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card>\r\n    </ion-item>\r\n    <ion-button expand=\"block\" shape=\"round\" color=\"primary\" style=\"margin-bottom: 80px\" routerLink=\"/menu/tabs/profile/edit-profile\">Edit Profile</ion-button>\r\n  </ion-item-group>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/menu/profile/profile-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/menu/profile/profile-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/menu/profile/profile.page.ts");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");





const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["redirectUnauthorizedTo"])(['/']);
const routes = [
    Object.assign({ path: '', component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"] }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["canActivate"])(redirectUnauthorizedToLogin)),
    {
        path: 'edit-profile',
        loadChildren: () => Promise.all(/*! import() | edit-profile-edit-profile-module */[__webpack_require__.e("default~edit-profile-edit-profile-module~login-login-module~register-register-module~reset-password-~d036686e"), __webpack_require__.e("default~edit-profile-edit-profile-module~email-confirmation-email-confirmation-module~login-login-mo~30f52c33"), __webpack_require__.e("default~edit-profile-edit-profile-module~list-item-list-item-module"), __webpack_require__.e("edit-profile-edit-profile-module")]).then(__webpack_require__.bind(null, /*! ./edit-profile/edit-profile.module */ "./src/app/menu/profile/edit-profile/edit-profile.module.ts")).then(m => m.EditProfilePageModule)
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/menu/profile/profile.module.ts":
/*!************************************************!*\
  !*** ./src/app/menu/profile/profile.module.ts ***!
  \************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/menu/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/menu/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/menu/profile/profile.page.scss":
/*!************************************************!*\
  !*** ./src/app/menu/profile/profile.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  position: absolute;\n  left: 5%;\n  right: 5%;\n  top: 5%;\n  color: var(--ion-color-secondary-contrast);\n}\n\n#container ion-item {\n  margin-top: 30px;\n}\n\n#container ion-label {\n  font-size: 16px;\n  text-align: center;\n}\n\n#container ion-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#container ion-card {\n  margin: 30px 0 !important;\n  border: 2px solid black;\n  border-radius: 20px;\n  width: 100%;\n  color: var(--ion-color-secondary-contrast);\n}\n\n.verticalLine {\n  width: 2px;\n  top: 0%;\n  bottom: 0%;\n  left: 65%;\n  background: black;\n  margin: 0 auto;\n  position: absolute;\n  border-radius: 2px;\n}\n\n.userName {\n  margin-top: 30px;\n  font-size: 28px;\n  font-weight: 600;\n}\n\n.proflePic {\n  height: 200px;\n  width: 200px;\n  margin: 30px auto 0px auto;\n}\n\n.notifications-badge {\n  position: absolute;\n  top: -3px;\n  right: -4px;\n  font-size: 10px;\n}\n\n.header__icon {\n  font-size: 24px;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUtFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL21lbnUvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1JTtcclxuICByaWdodDogNSU7XHJcbiAgdG9wOiA1JTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgaW9uLWl0ZW0ge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgaW9uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGlvbi1pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuI2NvbnRhaW5lciBpb24tY2FyZCB7XHJcbiAgbWFyZ2luOiAzMHB4IDAgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcclxufVxyXG5cclxuLnZlcnRpY2FsTGluZSB7XHJcbiAgd2lkdGg6IDJweDtcclxuICB0b3A6IDAlO1xyXG4gIGJvdHRvbTogMCU7XHJcbiAgbGVmdDogNjUlO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi51c2VyTmFtZXtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucHJvZmxlUGljIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IDMwcHggYXV0byAwcHggYXV0bztcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbnMge1xyXG4gICYtYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtM3B4O1xyXG4gICAgcmlnaHQ6IC00cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAmX19pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/menu/profile/profile.page.ts":
/*!**********************************************!*\
  !*** ./src/app/menu/profile/profile.page.ts ***!
  \**********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");





let ProfilePage = class ProfilePage {
    constructor(authService, loadingController, alertController, firestore) {
        this.authService = authService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.firestore = firestore;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            this.authService.getUserData().subscribe(ref => {
                this.authService.getUserPhotoUrl(ref.photo).subscribe(res => {
                    loading.dismiss();
                    this.userProfile = ref;
                    this.userProfile.photo = res;
                    this.firestore.collection('history', ref => {
                        return ref.where('email', '==', this.userProfile.email).where('open', '==', false);
                    }).valueChanges().subscribe(res => {
                        this.historyCount = res.length;
                    });
                });
            });
        });
    }
    topupAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: 'Silahkan memilih jumlah topup yang diinginkan.',
                buttons: [
                    {
                        text: '10.000',
                        handler: () => {
                            const totalAmount = this.userProfile.balance + 10000;
                            this.authService.topupBalance(totalAmount);
                        }
                    }, {
                        text: '50.000',
                        handler: () => {
                            const totalAmount = this.userProfile.balance + 50000;
                            this.authService.topupBalance(totalAmount);
                        }
                    }, {
                        text: '100.000',
                        handler: () => {
                            const totalAmount = this.userProfile.balance + 100000;
                            this.authService.topupBalance(totalAmount);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/menu/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map