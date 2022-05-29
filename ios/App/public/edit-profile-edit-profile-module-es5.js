(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-profile-edit-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/profile/edit-profile/edit-profile.page.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/profile/edit-profile/edit-profile.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMenuProfileEditProfileEditProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot='start' routerLink=\"/menu/tabs/profile\">\r\n      <ion-icon src='assets/icon/backButton.svg'></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      Wisea\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=\"background\" *ngIf=\"userProfile\">\r\n  <ion-item-group id=\"container\">\r\n    <ion-item lines='none'>\r\n      <ion-avatar class=\"proflePic\">\r\n        <ion-img src=\"{{ photo.userPhoto }}\"></ion-img>\r\n      </ion-avatar>\r\n      <ion-button class=\"btnImage\" (click)=\"takePicture()\"><ion-icon name=\"camera\"></ion-icon></ion-button>\r\n    </ion-item>\r\n    <form class=\"edit-form\" [formGroup]=\"form\">\r\n      <mat-label>Nama Lengkap</mat-label>\r\n      <mat-form-field appearance=\"standard\">\r\n        <input matInput formControlName=\"name\" ngModel=\"{{ userProfile?.name }}\">\r\n        <mat-error *ngIf=\"(form.get('name').dirty || form.get('name').touched) && form.get('name').errors\">\r\n          <span *ngIf=\"form.get('name').errors.required\">Full name is required</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-label>Username</mat-label>\r\n      <mat-form-field appearance=\"standard\">\r\n        <input matInput formControlName=\"username\" ngModel=\"{{ userProfile?.username }}\">\r\n        <mat-error *ngIf=\"(form.get('username').dirty || form.get('username').touched) && form.get('username').errors\">\r\n          <span *ngIf=\"form.get('username').errors.required\">Username is required</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-label>Email</mat-label>\r\n      <mat-form-field appearance=\"standard\">\r\n        <input matInput formControlName=\"email\" ngModel=\"{{ userProfile?.email }}\">\r\n        <mat-error *ngIf=\"(form.get('email').dirty || form.get('email').touched) && form.get('email').errors\">\r\n          <span *ngIf=\"form.get('email').errors.required\">Email is required</span>\r\n          <span *ngIf=\"form.get('email').errors.email\">Email is invalid</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-label>Nomor Telepon</mat-label>\r\n      <mat-form-field appearance=\"standard\">\r\n        <input matInput formControlName=\"phone\" ngModel=\"{{ userProfile?.phone }}\">\r\n        <mat-error *ngIf=\"(form.get('phone').dirty || form.get('phone').touched) && form.get('phone').errors\">\r\n          <span *ngIf=\"form.get('phone').errors.required\">Phone number is required</span>\r\n          <span *ngIf=\"form.get('phone').errors.minlength || form.get('phone').errors.maxlength\">Phone needs to be between 10 - 12 characters</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-label>Password Baru</mat-label>\r\n      <mat-form-field appearance=\"standard\">\r\n        <input matInput [type]=\"passwordHide ? 'password' : 'text'\" formControlName=\"newPassword\">\r\n        <mat-icon matSuffix (click)=\"passwordHide = !passwordHide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"passwordHide\">\r\n          {{passwordHide ? 'visibility_off' : 'visibility'}}\r\n        </mat-icon>\r\n        <mat-error *ngIf=\"(form.get('newPassword').dirty || form.get('newPassword').touched) && form.get('newPassword').errors\">\r\n          <span *ngIf=\"form.get('newPassword').errors.minlength\">Password needs to be 6 characters</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </form>\r\n    <ion-button (click)=\"confirmationAlert()\" expand=\"block\">Submit</ion-button>\r\n    </ion-item-group>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/menu/profile/edit-profile/edit-profile-routing.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/menu/profile/edit-profile/edit-profile-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: EditProfilePageRoutingModule */

    /***/
    function srcAppMenuProfileEditProfileEditProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function () {
        return EditProfilePageRoutingModule;
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


      var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-profile.page */
      "./src/app/menu/profile/edit-profile/edit-profile.page.ts");
      /* harmony import */


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");

      var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["redirectUnauthorizedTo"])(['/']);
      };

      var routes = [Object.assign({
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
      }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["canActivate"])(redirectUnauthorizedToLogin))];

      var EditProfilePageRoutingModule = function EditProfilePageRoutingModule() {
        _classCallCheck(this, EditProfilePageRoutingModule);
      };

      EditProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/menu/profile/edit-profile/edit-profile.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/menu/profile/edit-profile/edit-profile.module.ts ***!
      \******************************************************************/

    /*! exports provided: EditProfilePageModule */

    /***/
    function srcAppMenuProfileEditProfileEditProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function () {
        return EditProfilePageModule;
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


      var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-profile-routing.module */
      "./src/app/menu/profile/edit-profile/edit-profile-routing.module.ts");
      /* harmony import */


      var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-profile.page */
      "./src/app/menu/profile/edit-profile/edit-profile.page.ts");
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

      var EditProfilePageModule = function EditProfilePageModule() {
        _classCallCheck(this, EditProfilePageModule);
      };

      EditProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
      })], EditProfilePageModule);
      /***/
    },

    /***/
    "./src/app/menu/profile/edit-profile/edit-profile.page.scss":
    /*!******************************************************************!*\
      !*** ./src/app/menu/profile/edit-profile/edit-profile.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMenuProfileEditProfileEditProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  font-size: 24px;\n  margin-left: 5px;\n}\n\nion-title {\n  margin-left: -15%;\n}\n\n#container {\n  position: absolute;\n  left: 5%;\n  right: 5%;\n  top: 5%;\n  color: var(--ion-color-secondary-contrast);\n}\n\n#container ion-button {\n  margin-bottom: 80px;\n  font-weight: 700;\n}\n\n#container ion-item ion-button {\n  position: absolute;\n  left: 53%;\n  top: 65%;\n  z-index: 1;\n  float: right;\n}\n\n#container .btnImage {\n  width: 60px;\n  height: 60px;\n  --border-radius: 50%;\n}\n\n#container ion-icon {\n  font-size: 70px;\n  display: block;\n}\n\n#container ion-item {\n  margin: 50px 0px;\n}\n\n.proflePic {\n  height: 200px;\n  width: 200px;\n  margin: 0 auto;\n}\n\n.mat-icon {\n  color: #946E41;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nmat-label {\n  /*change color of label*/\n  color: #946E41 !important;\n  font-weight: 500;\n}\n\n::ng-deep .mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #946E41 !important;\n}\n\n::ng-deep .mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: #946E41 !important;\n}\n\n::ng-deep .mat-form-field-wrapper {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9wcm9maWxlL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSwwQ0FBQTtBQUNGOztBQUNFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUZKOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtBQUhGOztBQU1BO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBT0U7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0FBSko7O0FBT0U7RUFDRSx5Q0FBQTtFQUNBLG9DQUFBO0FBTEo7O0FBUUU7RUFDRSxtQkFBQTtBQU5KIiwiZmlsZSI6InNyYy9hcHAvbWVudS9wcm9maWxlL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTUlO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNSU7XHJcbiAgcmlnaHQ6IDUlO1xyXG4gIHRvcDogNSU7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0gaW9uLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MyU7XHJcbiAgICB0b3A6IDY1JTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuYnRuSW1hZ2V7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4jY29udGFpbmVyIGlvbi1pdGVtIHtcclxuICBtYXJnaW46IDUwcHggMHB4O1xyXG59XHJcblxyXG4ucHJvZmxlUGljIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLm1hdC1pY29uIHtcclxuICBjb2xvcjogIzk0NkU0MTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtbGFiZWwge1xyXG4gIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cclxuICBjb2xvcjogIzk0NkU0MSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0NkU0MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDZFNDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/menu/profile/edit-profile/edit-profile.page.ts":
    /*!****************************************************************!*\
      !*** ./src/app/menu/profile/edit-profile/edit-profile.page.ts ***!
      \****************************************************************/

    /*! exports provided: EditProfilePage */

    /***/
    function srcAppMenuProfileEditProfileEditProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePage", function () {
        return EditProfilePage;
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


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../service/auth.service */
      "./src/app/service/auth.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../app.component */
      "./src/app/app.component.ts");

      var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Camera;

      var EditProfilePage = /*#__PURE__*/function () {
        function EditProfilePage(authService, loadingController, alertController, router, appComponent) {
          _classCallCheck(this, EditProfilePage);

          this.authService = authService;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.router = router;
          this.appComponent = appComponent;
          this.passwordHide = true;
          this.photo = {
            userPhoto: '',
            oldPhoto: '',
            oldPhotoName: '',
            base64Photo: ''
          };
        }

        _createClass(EditProfilePage, [{
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
                      this.authService.getUserData().subscribe(function (ref) {
                        _this.authService.getUserPhotoUrl(ref.photo).subscribe(function (res) {
                          loading.dismiss();
                          _this.userProfile = ref;
                          _this.photo.userPhoto = res;
                          _this.photo.oldPhoto = res;
                          _this.photo.base64Photo = res;
                          _this.photo.oldPhotoName = ref.photo;
                        });
                      });
                      this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                          updateOn: 'change',
                          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                        }),
                        username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                          updateOn: 'change',
                          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                        }),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                          updateOn: 'change',
                          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
                        }),
                        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                          updateOn: 'change',
                          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)]
                        }),
                        photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                          updateOn: 'change',
                          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                        }),
                        newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                          updateOn: 'change',
                          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]
                        })
                      });

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "takePicture",
          value: function takePicture() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var profilePicture;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return Camera.getPhoto({
                        quality: 100,
                        allowEditing: false,
                        resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["CameraResultType"].Base64
                      });

                    case 3:
                      profilePicture = _context2.sent;
                      this.photo.base64Photo = profilePicture.base64String;
                      this.photo.userPhoto = 'data:image/png;base64,' + this.photo.base64Photo;
                      _context2.next = 10;
                      break;

                    case 8:
                      _context2.prev = 8;
                      _context2.t0 = _context2["catch"](0);

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 8]]);
            }));
          }
        }, {
          key: "edit",
          value: function edit(confirmPassword) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingController.create();

                    case 2:
                      loading = _context4.sent;
                      _context4.next = 5;
                      return loading.present();

                    case 5:
                      this.form.value.photo = this.photo.userPhoto;
                      _context4.next = 8;
                      return this.authService.editUserData(this.form.value, confirmPassword, this.photo).then(function () {
                        _this2.appComponent.updateUserProfile();

                        loading.dismiss();

                        _this2.router.navigateByUrl('/menu/tabs/profile', {
                          replaceUrl: true
                        });
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  loading.dismiss();
                                  _context3.next = 3;
                                  return this.alertController.create({
                                    header: 'Edit profile gagal',
                                    message: err.message,
                                    buttons: ['OK']
                                  });

                                case 3:
                                  alert = _context3.sent;
                                  _context3.next = 6;
                                  return alert.present();

                                case 6:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      });

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "confirmationAlert",
          value: function confirmationAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Konfirmasi perubahan data diri',
                        subHeader: 'Silahkan masukkan password anda.',
                        inputs: [{
                          name: 'password',
                          type: 'password',
                          placeholder: 'Password',
                          cssClass: 'specialClass'
                        }],
                        buttons: [{
                          text: 'Ok',
                          handler: function handler(data) {
                            _this3.edit(data.password);
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary'
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return EditProfilePage;
      }();

      EditProfilePage.ctorParameters = function () {
        return [{
          type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
        }];
      };

      EditProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit-profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/profile/edit-profile/edit-profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./edit-profile.page.scss */
        "./src/app/menu/profile/edit-profile/edit-profile.page.scss"))["default"]]
      })], EditProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=edit-profile-edit-profile-module-es5.js.map