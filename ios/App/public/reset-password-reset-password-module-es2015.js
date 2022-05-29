(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password-reset-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"background\">\r\n  <ion-item-group id=\"container\">\r\n    <ion-img src=\"assets/login/lupa-password.svg\"></ion-img>\r\n    <ion-title>\r\n      <strong>Reset Password</strong>\r\n      <p>Kami tidak bisa reset pata hati kamu,<br> kalau sekedar reset password tentu bisa!</p>\r\n    </ion-title>\r\n    <form [formGroup]=\"resetPasswordForm\">\r\n      <mat-label>Nomor Telepon</mat-label>\r\n      <mat-form-field appearance=\"standard\">\r\n        <input matInput formControlName=\"phone\">\r\n        <mat-error *ngIf=\"(resetPasswordForm.get('phone').dirty || resetPasswordForm.get('phone').touched) && resetPasswordForm.get('phone').errors\">\r\n          <span *ngIf=\"resetPasswordForm.get('phone').errors.required\">Phone number is required</span>\r\n          <span *ngIf=\"resetPasswordForm.get('phone').errors.minlength || resetPasswordForm.get('phone').errors.maxlength\">Phone needs to be between 10 - 12 characters</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </form>\r\n    <ion-button (click)=\"reset()\" expand=\"full\" color=\"primary\" [disabled]=\"!resetPasswordForm.valid\" shape=\"round\" class=\"submit\">Lanjutkan</ion-button>\r\n    <ion-button routerLink=\"/login\" expand=\"full\" color=\"tertiary\" shape=\"round\">Batalkan</ion-button>\r\n  </ion-item-group>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/reset-password/reset-password-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/reset-password/reset-password-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageRoutingModule", function() { return ResetPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password.page */ "./src/app/reset-password/reset-password.page.ts");




const routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordPage"]
    },
    {
        path: 'email-confirmation',
        loadChildren: () => Promise.all(/*! import() | email-confirmation-email-confirmation-module */[__webpack_require__.e("default~edit-profile-edit-profile-module~email-confirmation-email-confirmation-module~login-login-mo~30f52c33"), __webpack_require__.e("common"), __webpack_require__.e("email-confirmation-email-confirmation-module")]).then(__webpack_require__.bind(null, /*! ./email-confirmation/email-confirmation.module */ "./src/app/reset-password/email-confirmation/email-confirmation.module.ts")).then(m => m.EmailConfirmationPageModule)
    }
];
let ResetPasswordPageRoutingModule = class ResetPasswordPageRoutingModule {
};
ResetPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/reset-password/reset-password.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.module.ts ***!
  \*********************************************************/
/*! exports provided: ResetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password-routing.module */ "./src/app/reset-password/reset-password-routing.module.ts");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password.page */ "./src/app/reset-password/reset-password.page.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");









let ResetPasswordPageModule = class ResetPasswordPageModule {
};
ResetPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"]
        ],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]]
    })
], ResetPasswordPageModule);



/***/ }),

/***/ "./src/app/reset-password/reset-password.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  position: absolute;\n  left: 5%;\n  right: 5%;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--ion-color-secondary-contrast);\n}\n#container ion-title {\n  padding: 35px 0px;\n  text-align: center;\n}\n#container strong {\n  font-size: 32px;\n  line-height: 28px;\n  margin-top: 20px;\n  color: var(--ion-color-primary);\n}\n#container p {\n  font-size: 14px;\n  color: #BDBDBD;\n  line-height: 20px;\n  font-weight: 350;\n}\n#container ion-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 300px;\n  height: 300px;\n}\n#container ion-button {\n  margin-top: 10px;\n  font-weight: 700;\n}\n.planeImg {\n  left: 130px;\n  top: 0%;\n  z-index: 1;\n  float: right;\n  width: 200px;\n  position: absolute;\n  transform: rotate(-10deg);\n}\n.submit {\n  margin-top: 30px;\n}\n.reset-password {\n  float: right;\n  margin: 0px;\n  padding: 0px;\n}\nmat-form-field {\n  width: 100%;\n}\nmat-label {\n  /*change color of label*/\n  color: #946E41 !important;\n  font-weight: 500;\n}\n.mat-button.mat-primary .mat-button-focus-overlay {\n  background-color: transparent;\n}\n::ng-deep .mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #946E41 !important;\n}\n::ng-deep .mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: #946E41 !important;\n}\n::ng-deep .mat-form-field-wrapper {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLDBDQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBSEo7QUFPQTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUpGO0FBT0E7RUFDRSxnQkFBQTtBQUpGO0FBT0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKRjtBQU9BO0VBQ0UsV0FBQTtBQUpGO0FBT0E7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFKRjtBQU9BO0VBQ0UsNkJBQUE7QUFKRjtBQVFFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtBQUxKO0FBUUU7RUFDRSx5Q0FBQTtFQUNBLG9DQUFBO0FBTko7QUFTRTtFQUNFLG1CQUFBO0FBUEoiLCJmaWxlIjoic3JjL2FwcC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNSU7XHJcbiAgcmlnaHQ6IDUlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XHJcblxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAzNXB4IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI0JEQkRCRDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcclxuICB9XHJcblxyXG4gIGlvbi1pbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxufVxyXG5cclxuLnBsYW5lSW1nIHtcclxuICBsZWZ0OiAxMzBweDtcclxuICB0b3A6IDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnJlc2V0LXBhc3N3b3JkIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1sYWJlbCB7XHJcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xyXG4gIGNvbG9yOiAjOTQ2RTQxICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm1hdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0NkU0MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDZFNDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/reset-password/reset-password.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.ts ***!
  \*******************************************************/
/*! exports provided: ResetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function() { return ResetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let ResetPasswordPage = class ResetPasswordPage {
    constructor(formBuilder, router, authService, loadingController, alertController) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.loadingController = loadingController;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.resetPasswordForm = this.formBuilder.group({
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)]],
        });
    }
    reset() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            const phone = this.resetPasswordForm.value.phone;
            this.authService.checkAvailablePhone(phone).subscribe((res) => {
                console.log('Inputted phone number\'s data: ', res[0]);
                const userPhone = res[0].phone;
                const userEmail = res[0].email;
                if (userPhone === phone) {
                    this.authService.resetPassword(userEmail).then(() => {
                        loading.dismiss();
                        this.presentAlert('Reset password sukses!', 'Silahkan mengkonfirmasi pesan yang telah dikirimkan melalui email anda');
                        this.router.navigateByUrl('/login', { replaceUrl: true });
                    }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        loading.dismiss();
                        this.presentAlert('Reset password gagal', err.message);
                    }));
                }
                else {
                    loading.dismiss();
                    this.presentAlert('Reset password gagal', 'Nomor yang dimasukkan tidak terdaftar');
                }
            });
        });
    }
    presentAlert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
ResetPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
ResetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reset-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reset-password.page.scss */ "./src/app/reset-password/reset-password.page.scss")).default]
    })
], ResetPasswordPage);



/***/ })

}]);
//# sourceMappingURL=reset-password-reset-password-module-es2015.js.map