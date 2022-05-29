(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen=\"true\" color=\"background\">\r\n  <ion-item-group id=\"container\">\r\n    <ion-img src='assets/homePage/plane.svg' class=\"planeImg\"></ion-img>\r\n    <ion-title color=\"primary\">\r\n      <strong>#Ngebolang</strong>\r\n      <p><strong>dimulai sekarang!</strong></p>\r\n    </ion-title>\r\n    <form [formGroup]=\"credentialForm\">\r\n      <mat-label>Email</mat-label>\r\n      <mat-form-field appearance=\"standard\">\r\n        <input matInput formControlName=\"email\">\r\n        <mat-error *ngIf=\"(credentialForm.get('email').dirty || credentialForm.get('email').touched) && credentialForm.get('email').errors\">\r\n          <span *ngIf=\"credentialForm.get('email').errors?.required\">Email is required</span>\r\n          <span *ngIf=\"credentialForm.get('email').errors?.email\">Email is invalid</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-label>Password</mat-label>\r\n      <mat-form-field appearance=\"standard\">\r\n        <input matInput [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\">\r\n          <mat-icon matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n            {{hide ? 'visibility_off' : 'visibility'}}\r\n          </mat-icon>\r\n        <mat-error *ngIf=\"(credentialForm.get('password').dirty || credentialForm.get('password').touched) && credentialForm.get('password').errors\">\r\n          <span *ngIf=\"credentialForm.get('password').errors?.required\">Password is required</span>\r\n          <span *ngIf=\"credentialForm.get('password').errors?.minlength\">Password needs to be 6 characters</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </form>\r\n    <p routerLink=\"/reset-password\" expand=\"full\" color=\"secondary\" shape=\"round\" class=\"reset-password\">Lupa password?</p>\r\n    <ion-button (click)=\"login()\" expand=\"full\" color=\"primary\" shape=\"round\" [disabled]=\"!credentialForm.valid\">Login</ion-button>\r\n    <p style=\"text-align: center\">\r\n      Tidak memiliki akun? Register\r\n      <span routerLink=\"/register\" class=\"register\">disini</span>\r\n    </p>\r\n  </ion-item-group>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");










let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  position: absolute;\n  left: 5%;\n  right: 5%;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--ion-color-secondary-contrast);\n}\n#container ion-title {\n  padding: 35px 0px 70px 0px;\n}\n#container strong {\n  font-size: 36px;\n  line-height: 28px;\n  margin-top: 20px;\n}\n#container ion-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n#container ion-button {\n  margin-top: 100px;\n  font-weight: 700;\n}\n.planeImg {\n  left: 130px;\n  top: 0%;\n  z-index: 1;\n  float: right;\n  width: 200px;\n  position: absolute;\n  transform: rotate(-10deg);\n}\np {\n  font-size: 14px;\n  line-height: 1.5;\n  text-align: center;\n}\n.reset-password {\n  float: right;\n  margin: 0px;\n  padding: 0px;\n}\n.register {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\nmat-form-field {\n  width: 100%;\n}\nmat-label {\n  /*change color of label*/\n  color: #946E41 !important;\n  font-weight: 500;\n}\n.mat-icon {\n  color: #946E41;\n}\n.mat-button.mat-primary .mat-button-focus-overlay {\n  background-color: transparent;\n}\n::ng-deep .mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #946E41 !important;\n}\n::ng-deep .mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: #946E41 !important;\n}\n::ng-deep .mat-form-field-wrapper {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLDBDQUFBO0FBQ0Y7QUFDRTtFQUNFLDBCQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQU1BO0VBQ0UsV0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSEY7QUFNQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSEY7QUFNQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhGO0FBTUE7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0FBSEY7QUFNQTtFQUNFLFdBQUE7QUFIRjtBQU1BO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBSEY7QUFNQTtFQUNFLGNBQUE7QUFIRjtBQU1BO0VBQ0UsNkJBQUE7QUFIRjtBQU9FO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtBQUpKO0FBT0U7RUFDRSx5Q0FBQTtFQUNBLG9DQUFBO0FBTEo7QUFRRTtFQUNFLG1CQUFBO0FBTkoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNSU7XHJcbiAgcmlnaHQ6IDUlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XHJcblxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAzNXB4IDBweCA3MHB4IDBweDtcclxuICB9XHJcblxyXG4gIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBpb24taW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbn1cclxuXHJcbi5wbGFuZUltZyB7XHJcbiAgbGVmdDogMTMwcHg7XHJcbiAgdG9wOiAwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJlc2V0LXBhc3N3b3JkIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LWxhYmVsIHtcclxuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXHJcbiAgY29sb3I6ICM5NDZFNDEgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gIGNvbG9yOiAjOTQ2RTQxO1xyXG59XHJcblxyXG4ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ2RTQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0NkU0MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let LoginPage = class LoginPage {
    constructor(formBuilder, router, authService, alertController, loadingController) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.hide = true;
    }
    ngOnInit() {
        this.credentialForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            this.authService.login(this.credentialForm.value).then(user => {
                loading.dismiss();
                this.router.navigateByUrl('/menu/tabs/home', { replaceUrl: true });
            }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Login akun gagal',
                    message: err.message,
                    buttons: ['OK'],
                });
                yield alert.present();
            }));
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map