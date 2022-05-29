(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" color=\"background\">\r\n  <ion-item-group id=\"container\">\r\n    <ion-img src='assets/login/register.svg' class=\"planeImg\"></ion-img>\r\n    <ion-title color=\"primary\">\r\n      <strong>Cie..</strong>\r\n      <p><strong>Buat akun</strong></p>\r\n    </ion-title>\r\n    <form [formGroup]=\"credentialForm\">\r\n      <mat-label>Nama Lengkap</mat-label>\r\n      <mat-form-field appearance=\"standard\">\r\n        <input matInput formControlName=\"name\">\r\n        <mat-error *ngIf=\"(credentialForm.get('name').dirty || credentialForm.get('name').touched) && credentialForm.get('name').errors\">\r\n          <span *ngIf=\"credentialForm.get('name').errors.required\">Full name is required</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-label>Username</mat-label>\r\n      <mat-form-field appearance=\"standard\">\r\n        <input matInput formControlName=\"username\">\r\n        <mat-error *ngIf=\"(credentialForm.get('username').dirty || credentialForm.get('username').touched) && credentialForm.get('username').errors\">\r\n          <span *ngIf=\"credentialForm.get('username').errors.required\">Username is required</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-label>Email</mat-label>\r\n      <mat-form-field appearance=\"standard\">\r\n        <input matInput formControlName=\"email\">\r\n        <mat-error *ngIf=\"(credentialForm.get('email').dirty || credentialForm.get('email').touched) && credentialForm.get('email').errors\">\r\n          <span *ngIf=\"credentialForm.get('email').errors.required\">Email is required</span>\r\n          <span *ngIf=\"credentialForm.get('email').errors.email\">Email is invalid</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-label>Password</mat-label>\r\n      <mat-form-field appearance=\"standard\">\r\n        <input matInput [type]=\"passwordHide ? 'password' : 'text'\" formControlName=\"password\">\r\n        <mat-icon matSuffix (click)=\"passwordHide = !passwordHide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"passwordHide\">\r\n          {{passwordHide ? 'visibility_off' : 'visibility'}}\r\n        </mat-icon>\r\n        <mat-error *ngIf=\"(credentialForm.get('password').dirty || credentialForm.get('password').touched) && credentialForm.get('password').errors\">\r\n          <span *ngIf=\"credentialForm.get('password').errors.required\">Password is required</span>\r\n          <span *ngIf=\"credentialForm.get('password').errors.minlength\">Password needs to be 6 characters</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-label>Konfirmasi Password</mat-label>\r\n      <mat-form-field appearance=\"standard\">\r\n        <input matInput [type]=\"confirmHide ? 'password' : 'text'\" formControlName=\"confirm\">\r\n        <mat-icon matSuffix (click)=\"confirmHide = !confirmHide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"confirmHide\">\r\n          {{confirmHide ? 'visibility_off' : 'visibility'}}\r\n        </mat-icon>\r\n        <mat-error *ngIf=\"(credentialForm.get('confirm').dirty || credentialForm.get('confirm').touched) && credentialForm.get('confirm').errors\">\r\n          <span *ngIf=\"credentialForm.get('confirm').errors.required\">Confirm Password is required</span>\r\n          <span *ngIf=\"credentialForm.get('confirm').errors.mustMatch\">Password and Confirm Password didn't match</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-label>Nomor Telepon</mat-label>\r\n      <mat-form-field appearance=\"standard\">\r\n        <input matInput formControlName=\"phone\">\r\n        <mat-error *ngIf=\"(credentialForm.get('phone').dirty || credentialForm.get('phone').touched) && credentialForm.get('phone').errors\">\r\n          <span *ngIf=\"credentialForm.get('phone').errors.required\">Phone number is required</span>\r\n          <span *ngIf=\"credentialForm.get('phone').errors.minlength || credentialForm.get('phone').errors.maxlength\">Phone needs to be between 10 - 12 characters</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </form>\r\n    <ion-button (click)=\"register()\" expand=\"full\" color=\"primary\" shape=\"round\" [disabled]=\"!credentialForm.valid\">Daftar</ion-button>\r\n    <p style=\"text-align: center\">\r\n      Sudah memiliki akun? Login\r\n      <span routerLink=\"/login\" class=\"login\">disini</span>\r\n    </p>\r\n  </ion-item-group>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/register/register-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/register/register-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: RegisterPageRoutingModule */

    /***/
    function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
        return RegisterPageRoutingModule;
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


      var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register.page */
      "./src/app/register/register.page.ts");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
      }];

      var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/register/register.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/register/register.module.ts ***!
      \*********************************************/

    /*! exports provided: RegisterPageModule */

    /***/
    function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
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


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register-routing.module */
      "./src/app/register/register-routing.module.ts");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register.page */
      "./src/app/register/register.page.ts");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
      })], RegisterPageModule);
      /***/
    },

    /***/
    "./src/app/register/register.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/register/register.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  position: absolute;\n  left: 5%;\n  right: 5%;\n  top: 5%;\n  bottom: 10%;\n  color: var(--ion-color-secondary-contrast);\n}\n#container ion-title {\n  padding: 130px 0px 50px 0px;\n}\n#container strong {\n  font-size: 36px;\n  line-height: 28px;\n  margin-top: 20px;\n}\n#container ion-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n#container ion-button {\n  margin-top: 10px;\n  font-weight: 700;\n}\n.planeImg {\n  left: 165px;\n  top: 0%;\n  z-index: 1;\n  float: right;\n  width: 206px;\n  height: 249px;\n  position: absolute;\n}\n.reset-password {\n  float: right;\n  margin: 0px;\n  padding: 0px;\n}\n.register {\n  color: #946E41;\n  font-weight: bold;\n}\nmat-form-field {\n  width: 100%;\n}\nmat-label {\n  /*change color of label*/\n  color: #946E41 !important;\n  font-weight: 500;\n}\n.mat-icon {\n  color: #946E41;\n}\n.mat-button.mat-primary .mat-button-focus-overlay {\n  background-color: transparent;\n}\n::ng-deep .mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #946E41 !important;\n}\n::ng-deep .mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: #946E41 !important;\n}\n::ng-deep .mat-form-field-wrapper {\n  margin-bottom: 20px;\n}\n.login {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBRUEsMENBQUE7QUFBRjtBQUVFO0VBQ0UsMkJBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUhKO0FBT0E7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUpGO0FBT0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKRjtBQU9BO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBSkY7QUFPQTtFQUNFLFdBQUE7QUFKRjtBQU9BO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBSkY7QUFPQTtFQUNFLGNBQUE7QUFKRjtBQU9BO0VBQ0UsNkJBQUE7QUFKRjtBQVFFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtBQUxKO0FBUUU7RUFDRSx5Q0FBQTtFQUNBLG9DQUFBO0FBTko7QUFTRTtFQUNFLG1CQUFBO0FBUEo7QUFXQTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7QUFSRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1JTtcclxuICByaWdodDogNSU7XHJcbiAgdG9wOiA1JTtcclxuICBib3R0b206IDEwJTtcclxuICAvL3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XHJcblxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAxMzBweCAwcHggNTBweCAwcHg7XHJcbiAgfVxyXG5cclxuICBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbn1cclxuXHJcbi5wbGFuZUltZyB7XHJcbiAgbGVmdDogMTY1cHg7XHJcbiAgdG9wOiAwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogMjA2cHg7XHJcbiAgaGVpZ2h0OiAyNDlweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5yZXNldC1wYXNzd29yZCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyIHtcclxuICBjb2xvcjogIzk0NkU0MTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtbGFiZWwge1xyXG4gIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cclxuICBjb2xvcjogIzk0NkU0MSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgY29sb3I6ICM5NDZFNDE7XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDZFNDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ2RTQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/register/register.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/register/register.page.ts ***!
      \*******************************************/

    /*! exports provided: RegisterPage */

    /***/
    function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/auth.service */
      "./src/app/service/auth.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _confirm_password_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirm-password.validator */
      "./src/app/register/confirm-password.validator.ts");

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(formBuilder, router, authService, alertController, loadingController) {
          _classCallCheck(this, RegisterPage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.authService = authService;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.confirmHide = true;
          this.passwordHide = true;
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.credentialForm = this.formBuilder.group({
              name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
              confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
              phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)]]
            }, {
              validator: Object(_confirm_password_validator__WEBPACK_IMPORTED_MODULE_6__["ConfirmPasswordValidator"])('password', 'confirm')
            });
          }
        }, {
          key: "register",
          value: function register() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create();

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      this.authService.register(this.credentialForm.value).then(function (user) {
                        loading.dismiss();

                        _this.router.navigateByUrl('/menu/tabs/home', {
                          replaceUrl: true
                        });
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  loading.dismiss();
                                  _context.next = 3;
                                  return this.alertController.create({
                                    header: 'Registrasi akun gagal',
                                    message: err.message,
                                    buttons: ['OK']
                                  });

                                case 3:
                                  alert = _context.sent;
                                  _context.next = 6;
                                  return alert.present();

                                case 6:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./register.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./register.page.scss */
        "./src/app/register/register.page.scss"))["default"]]
      })], RegisterPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=register-register-module-es5.js.map