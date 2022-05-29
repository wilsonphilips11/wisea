(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-confirmation-email-confirmation-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/email-confirmation/email-confirmation.page.html":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/email-confirmation/email-confirmation.page.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppResetPasswordEmailConfirmationEmailConfirmationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content color=\"background\">\r\n  <ion-item-group id=\"container\">\r\n    <ion-img src=\"assets/login/email-confirm.svg\"></ion-img>\r\n    <ion-title>\r\n      <p>Diingat ya, jangan sampai lupa lagi</p>\r\n    </ion-title>\r\n    <form [formGroup]=\"confirmPasswordForm\">\r\n      <mat-label>Password</mat-label>\r\n      <mat-form-field appearance=\"standard\">\r\n        <input matInput [type]=\"passwordHide ? 'password' : 'text'\" formControlName=\"password\">\r\n        <mat-icon matSuffix (click)=\"passwordHide = !passwordHide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"passwordHide\">\r\n          {{passwordHide ? 'visibility_off' : 'visibility'}}\r\n        </mat-icon>\r\n        <mat-error *ngIf=\"(confirmPasswordForm.get('password').dirty || confirmPasswordForm.get('password').touched) && confirmPasswordForm.get('password').errors\">\r\n          <span *ngIf=\"confirmPasswordForm.get('password').errors.required\">Password is required</span>\r\n          <span *ngIf=\"confirmPasswordForm.get('password').errors.minlength\">Password needs to be 6 characters</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-label>Konfirmasi Password</mat-label>\r\n      <mat-form-field appearance=\"standard\">\r\n        <input matInput [type]=\"confirmHide ? 'password' : 'text'\" formControlName=\"confirm\">\r\n        <mat-icon matSuffix (click)=\"confirmHide = !confirmHide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"confirmHide\">\r\n          {{confirmHide ? 'visibility_off' : 'visibility'}}\r\n        </mat-icon>\r\n        <mat-error *ngIf=\"(confirmPasswordForm.get('confirm').dirty || confirmPasswordForm.get('confirm').touched) && confirmPasswordForm.get('confirm').errors\">\r\n          <span *ngIf=\"confirmPasswordForm.get('confirm').errors.required\">Confirm Password is required</span>\r\n          <span *ngIf=\"confirmPasswordForm.get('confirm').errors.mustMatch\">Password and Confirm Password didn't match</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </form>\r\n    <ion-button (click)=\"confirm()\" expand=\"full\" color=\"primary\" [disabled]=\"!confirmPasswordForm.valid\" shape=\"round\">Reset</ion-button>\r\n    <ion-button routerLink=\"/login\" expand=\"full\" color=\"tertiary\" shape=\"round\">Batalkan</ion-button>\r\n  </ion-item-group>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/reset-password/email-confirmation/email-confirmation-routing.module.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/reset-password/email-confirmation/email-confirmation-routing.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: EmailConfirmationPageRoutingModule */

    /***/
    function srcAppResetPasswordEmailConfirmationEmailConfirmationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailConfirmationPageRoutingModule", function () {
        return EmailConfirmationPageRoutingModule;
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


      var _email_confirmation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./email-confirmation.page */
      "./src/app/reset-password/email-confirmation/email-confirmation.page.ts");

      var routes = [{
        path: '',
        component: _email_confirmation_page__WEBPACK_IMPORTED_MODULE_3__["EmailConfirmationPage"]
      }];

      var EmailConfirmationPageRoutingModule = function EmailConfirmationPageRoutingModule() {
        _classCallCheck(this, EmailConfirmationPageRoutingModule);
      };

      EmailConfirmationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EmailConfirmationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/reset-password/email-confirmation/email-confirmation.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/reset-password/email-confirmation/email-confirmation.module.ts ***!
      \********************************************************************************/

    /*! exports provided: EmailConfirmationPageModule */

    /***/
    function srcAppResetPasswordEmailConfirmationEmailConfirmationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailConfirmationPageModule", function () {
        return EmailConfirmationPageModule;
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


      var _email_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./email-confirmation-routing.module */
      "./src/app/reset-password/email-confirmation/email-confirmation-routing.module.ts");
      /* harmony import */


      var _email_confirmation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./email-confirmation.page */
      "./src/app/reset-password/email-confirmation/email-confirmation.page.ts");
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

      var EmailConfirmationPageModule = function EmailConfirmationPageModule() {
        _classCallCheck(this, EmailConfirmationPageModule);
      };

      EmailConfirmationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _email_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmailConfirmationPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]],
        declarations: [_email_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["EmailConfirmationPage"]]
      })], EmailConfirmationPageModule);
      /***/
    },

    /***/
    "./src/app/reset-password/email-confirmation/email-confirmation.page.scss":
    /*!********************************************************************************!*\
      !*** ./src/app/reset-password/email-confirmation/email-confirmation.page.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppResetPasswordEmailConfirmationEmailConfirmationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  position: absolute;\n  left: 5%;\n  right: 5%;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--ion-color-secondary-contrast);\n}\n#container ion-title {\n  padding: 35px 0px;\n  text-align: center;\n}\n#container p {\n  font-size: 14px;\n  color: #BDBDBD;\n  line-height: 20px;\n  font-weight: 350;\n}\n#container ion-img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 300px;\n  height: 300px;\n}\n#container ion-button {\n  margin-top: 10px;\n  font-weight: 700;\n}\n.planeImg {\n  left: 130px;\n  top: 0%;\n  z-index: 1;\n  float: right;\n  width: 200px;\n  position: absolute;\n  transform: rotate(-10deg);\n}\n.reset-password {\n  float: right;\n  margin: 0px;\n  padding: 0px;\n}\nmat-form-field {\n  width: 100%;\n}\nmat-label {\n  /*change color of label*/\n  color: #946E41 !important;\n  font-weight: 500;\n}\n.mat-icon {\n  color: #946E41;\n}\n.mat-button.mat-primary .mat-button-focus-overlay {\n  background-color: transparent;\n}\n::ng-deep .mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #946E41 !important;\n}\n::ng-deep .mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: #946E41 !important;\n}\n::ng-deep .mat-form-field-wrapper {\n  margin-bottom: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvZW1haWwtY29uZmlybWF0aW9uL2VtYWlsLWNvbmZpcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsMENBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBRko7QUFNQTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUhGO0FBTUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFIRjtBQU1BO0VBQ0UsV0FBQTtBQUhGO0FBTUE7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQU1BO0VBQ0UsY0FBQTtBQUhGO0FBTUE7RUFDRSw2QkFBQTtBQUhGO0FBT0U7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0FBSko7QUFPRTtFQUNFLHlDQUFBO0VBQ0Esb0NBQUE7QUFMSjtBQVFFO0VBQ0UsbUJBQUE7QUFOSiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL2VtYWlsLWNvbmZpcm1hdGlvbi9lbWFpbC1jb25maXJtYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUlO1xyXG4gIHJpZ2h0OiA1JTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xyXG5cclxuICBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZzogMzVweCAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjQkRCREJEO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzUwO1xyXG4gIH1cclxuXHJcbiAgaW9uLWltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucGxhbmVJbWcge1xyXG4gIGxlZnQ6IDEzMHB4O1xyXG4gIHRvcDogMCU7XHJcbiAgei1pbmRleDogMTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG59XHJcblxyXG4ucmVzZXQtcGFzc3dvcmQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LWxhYmVsIHtcclxuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXHJcbiAgY29sb3I6ICM5NDZFNDEgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gIGNvbG9yOiAjOTQ2RTQxO1xyXG59XHJcblxyXG4ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ2RTQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0NkU0MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/reset-password/email-confirmation/email-confirmation.page.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/reset-password/email-confirmation/email-confirmation.page.ts ***!
      \******************************************************************************/

    /*! exports provided: EmailConfirmationPage */

    /***/
    function srcAppResetPasswordEmailConfirmationEmailConfirmationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailConfirmationPage", function () {
        return EmailConfirmationPage;
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
      /*! ../../service/auth.service */
      "./src/app/service/auth.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _register_confirm_password_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../register/confirm-password.validator */
      "./src/app/register/confirm-password.validator.ts");

      var EmailConfirmationPage = /*#__PURE__*/function () {
        function EmailConfirmationPage(formBuilder, router, authService, route, loadingController, alertController) {
          _classCallCheck(this, EmailConfirmationPage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.authService = authService;
          this.route = route;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.confirmHide = true;
          this.passwordHide = true;
        }

        _createClass(EmailConfirmationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.confirmPasswordForm = this.formBuilder.group({
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
              confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
            }, {
              validator: Object(_register_confirm_password_validator__WEBPACK_IMPORTED_MODULE_6__["ConfirmPasswordValidator"])('password', 'confirm')
            });
          }
        }, {
          key: "confirm",
          value: function confirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var loading, password, code;
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
                      password = this.confirmPasswordForm.value.password;
                      code = this.route.snapshot.queryParams.oobCode;
                      console.log('OOB Code: ', code);
                      this.authService.confirmResetPassword(code, password).then(function () {
                        loading.dismiss();

                        _this.presentAlert('Konfirmasi password baru berhasil!', 'Silahkan login kembali menggunakan password baru');

                        _this.authService.logout().then(function () {
                          _this.router.navigateByUrl('/login', {
                            replaceUrl: true
                          });
                        });
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  loading.dismiss();
                                  this.presentAlert('Konfirmasi password baru gagal', err.message);

                                case 2:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(header, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: header,
                        message: message,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return EmailConfirmationPage;
      }();

      EmailConfirmationPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }];
      };

      EmailConfirmationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-confirmation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./email-confirmation.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/email-confirmation/email-confirmation.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./email-confirmation.page.scss */
        "./src/app/reset-password/email-confirmation/email-confirmation.page.scss"))["default"]]
      })], EmailConfirmationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=email-confirmation-email-confirmation-module-es5.js.map