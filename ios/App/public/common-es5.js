(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActive5da929d4Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-92848855.js */
      "./node_modules/@ionic/core/dist/esm/index-92848855.js");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmTheme5641d27fJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history-detail/history-detail.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history-detail/history-detail.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHistoryHistoryDetailHistoryDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\" routerLink=\"/history\">\r\n      <ion-icon class=\"header__icon\" src='assets/icon/backButton.svg'></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n        Wisea\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item-group>\r\n    <ion-item-group class=\"body__container\">\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle style=\"font-size: 12px;\">\r\n            <ion-item-group class=\"history__desc\" style=\"display: flex; justify-content: space-between; align-items: center;\">\r\n              {{ (detail | async)?.tanggal.toMillis() | date:'EEEE, MM-dd-yyyy h:mm a' }}\r\n              <ion-chip color=\"success\">\r\n                <ion-label>{{ (detail | async)?.status }}</ion-label>\r\n              </ion-chip>\r\n            </ion-item-group>\r\n          </ion-card-subtitle>\r\n          <ion-card-title style=\"color: var(--ion-color-primary); font-size: 18px;\"><strong>Tiket: {{ (detail | async)?.tiket }}</strong></ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <div id=\"mid\">\r\n            <div class=\"info\">\r\n              <p style=\"font-size: 12px;\">\r\n                <strong>Email   : </strong>{{ (detail | async)?.email }}<br>\r\n                <strong>Phone   : </strong>0{{ (detail | async)?.tlp }}<br>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div>\r\n            <div>\r\n              <table>\r\n                <tr style=\"background: #EEE; color: var(--ion-color-primary); font-size: 14px;\">\r\n                  <td><strong>Item</strong></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td><strong>Qty</strong></td>\r\n                  <td></td>\r\n                  <td><strong>Sub Total</strong></td>\r\n                </tr>\r\n  \r\n                <tr>\r\n                  <td><p>{{ (detail | async)?.tiket }}</p></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td><p>{{ (detail | async)?.jumlah }}</p></td>\r\n                  <td></td>\r\n                  <td><p>{{ (detail | async)?.total | currency:'IDR':'symbol-narrow':'3.0'}}</p></td>\r\n                </tr>\r\n                <tr>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td style=\"color: var(--ion-color-primary); font-size: 14px;\"><strong>Total</strong></td>\r\n                  <td></td>\r\n                  <td>{{ (detail | async)?.total | currency:'IDR':'symbol-narrow':'3.0'}}</td>\r\n                </tr>\r\n              </table>\r\n              <br>\r\n              <p style=\"text-align: center;\"><strong>Thank you for your purchase!</strong><br>Happy #ngeBolang !</p>\r\n            </div>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-item-group>\r\n  </ion-item-group>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/shopping-cart/payment-summary/payment-summary.page.html":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/shopping-cart/payment-summary/payment-summary.page.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMenuExploreShoppingCartPaymentSummaryPaymentSummaryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\" routerLink=\"/menu/tabs/explore\">\r\n      <ion-icon class=\"header__icon\" src='assets/icon/backButton.svg'></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n        Wisea\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item-group class=\"payment\">\r\n    <ion-item-group>\r\n      <ion-img class=\"payment-img\" src=\"assets/icon/payment.svg\"></ion-img>\r\n      <ion-title>\r\n        <div class=\"payment-title\"><strong>Payment succeed</strong></div>\r\n        <p class=\"payment-subtitle\">Pembayaranmu telah kami terima,<br>cek email untuk bukti bayar ya!</p>\r\n      </ion-title>\r\n    </ion-item-group>\r\n    <ion-button class=\"payment-btn\" shape=\"round\" (click)=\"goToExplore()\">Done</ion-button>\r\n    <p class=\"payment-msg\" (click)=\"goToHistoryDetail()\">Cek detail pemesanan</p>\r\n  </ion-item-group>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/history/history-detail/history-detail-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/history/history-detail/history-detail-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: HistoryDetailPageRoutingModule */

    /***/
    function srcAppHistoryHistoryDetailHistoryDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoryDetailPageRoutingModule", function () {
        return HistoryDetailPageRoutingModule;
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


      var _history_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./history-detail.page */
      "./src/app/history/history-detail/history-detail.page.ts");

      var routes = [{
        path: '',
        component: _history_detail_page__WEBPACK_IMPORTED_MODULE_3__["HistoryDetailPage"]
      }];

      var HistoryDetailPageRoutingModule = function HistoryDetailPageRoutingModule() {
        _classCallCheck(this, HistoryDetailPageRoutingModule);
      };

      HistoryDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HistoryDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/history/history-detail/history-detail.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/history/history-detail/history-detail.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHistoryHistoryDetailHistoryDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header__icon {\n  font-size: 24px;\n}\n\ntable {\n  width: 100%;\n}\n\ntr {\n  border-bottom: 1px solid #EEE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LWRldGFpbC9oaXN0b3J5LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FBQUo7O0FBSUE7RUFDRSxXQUFBO0FBREY7O0FBR0E7RUFDRSw2QkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LWRldGFpbC9oaXN0b3J5LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAmX19pY29ue1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbnRyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/history/history-detail/history-detail.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/history/history-detail/history-detail.page.ts ***!
      \***************************************************************/

    /*! exports provided: HistoryDetailPage */

    /***/
    function srcAppHistoryHistoryDetailHistoryDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoryDetailPage", function () {
        return HistoryDetailPage;
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


      var src_app_service_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/history.service */
      "./src/app/service/history.service.ts");

      var HistoryDetailPage = /*#__PURE__*/function () {
        function HistoryDetailPage(route, historyService) {
          _classCallCheck(this, HistoryDetailPage);

          this.route = route;
          this.historyService = historyService;
        }

        _createClass(HistoryDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.historyId = this.route.snapshot.paramMap.get('id');
            this.detail = this.historyService.getHistoryDetail(this.historyId);
          }
        }]);

        return HistoryDetailPage;
      }();

      HistoryDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_service_history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"]
        }];
      };

      HistoryDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./history-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history-detail/history-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./history-detail.page.scss */
        "./src/app/history/history-detail/history-detail.page.scss"))["default"]]
      })], HistoryDetailPage);
      /***/
    },

    /***/
    "./src/app/menu/explore/shopping-cart/payment-summary/payment-summary-routing.module.ts":
    /*!**********************************************************************************************!*\
      !*** ./src/app/menu/explore/shopping-cart/payment-summary/payment-summary-routing.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: PaymentSummaryPageRoutingModule */

    /***/
    function srcAppMenuExploreShoppingCartPaymentSummaryPaymentSummaryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentSummaryPageRoutingModule", function () {
        return PaymentSummaryPageRoutingModule;
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


      var _payment_summary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payment-summary.page */
      "./src/app/menu/explore/shopping-cart/payment-summary/payment-summary.page.ts");

      var routes = [{
        path: '',
        component: _payment_summary_page__WEBPACK_IMPORTED_MODULE_3__["PaymentSummaryPage"]
      }];

      var PaymentSummaryPageRoutingModule = function PaymentSummaryPageRoutingModule() {
        _classCallCheck(this, PaymentSummaryPageRoutingModule);
      };

      PaymentSummaryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PaymentSummaryPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/menu/explore/shopping-cart/payment-summary/payment-summary.page.scss":
    /*!**************************************************************************************!*\
      !*** ./src/app/menu/explore/shopping-cart/payment-summary/payment-summary.page.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMenuExploreShoppingCartPaymentSummaryPaymentSummaryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header__icon {\n  font-size: 24px;\n}\n\n.payment {\n  margin-top: 12%;\n  display: flex;\n  flex-direction: column;\n  text-align: -webkit-center;\n  text-align: center;\n}\n\n.payment-img {\n  width: 200px;\n  margin: auto;\n}\n\n.payment-title {\n  margin-top: 30px;\n  font-size: 32px;\n  font-weight: 600;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n\n@media only screen and (max-width: 769px) {\n  .payment-title {\n    font-size: 24px;\n  }\n}\n\n.payment-subtitle {\n  font-size: 28px;\n  margin: 8px 0px;\n  color: rgba(0, 0, 0, 0.38);\n  text-align: center;\n}\n\n@media only screen and (max-width: 769px) {\n  .payment-subtitle {\n    font-size: 14px;\n  }\n}\n\n.payment-btn {\n  margin: 24px 16px 0px;\n}\n\n.payment-msg {\n  font-size: 14px;\n  margin: 8px 0px;\n  color: rgba(0, 0, 0, 0.38);\n  text-align: center;\n}\n\n@media only screen and (max-width: 769px) {\n  .payment-msg {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9leHBsb3JlL3Nob3BwaW5nLWNhcnQvcGF5bWVudC1zdW1tYXJ5L3BheW1lbnQtc3VtbWFyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FBQUo7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUFKOztBQUNJO0VBTkY7SUFPSSxlQUFBO0VBRUo7QUFDRjs7QUFBRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQURJO0VBTEY7SUFNSSxlQUFBO0VBSUo7QUFDRjs7QUFGRTtFQUNFLHFCQUFBO0FBSUo7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFISTtFQUxGO0lBTUksZUFBQTtFQU1KO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tZW51L2V4cGxvcmUvc2hvcHBpbmctY2FydC9wYXltZW50LXN1bW1hcnkvcGF5bWVudC1zdW1tYXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICZfX2ljb257XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucGF5bWVudCB7XHJcbiAgbWFyZ2luLXRvcDogMTIlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgJi1pbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAmLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmLXN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbjogOHB4IDBweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuMzgpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtYnRuIHtcclxuICAgIG1hcmdpbjogMjRweCAxNnB4IDBweDtcclxuICB9XHJcbiAgJi1tc2cge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC4zOCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/menu/explore/shopping-cart/payment-summary/payment-summary.page.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/menu/explore/shopping-cart/payment-summary/payment-summary.page.ts ***!
      \************************************************************************************/

    /*! exports provided: PaymentSummaryPage */

    /***/
    function srcAppMenuExploreShoppingCartPaymentSummaryPaymentSummaryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentSummaryPage", function () {
        return PaymentSummaryPage;
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

      var PaymentSummaryPage = /*#__PURE__*/function () {
        function PaymentSummaryPage(route, router) {
          _classCallCheck(this, PaymentSummaryPage);

          this.route = route;
          this.router = router;
        }

        _createClass(PaymentSummaryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToHistoryDetail",
          value: function goToHistoryDetail() {
            this.paymentId = this.route.snapshot.paramMap.get('id');
            this.router.navigate(["/history-detail/".concat(this.paymentId)]);
          }
        }, {
          key: "goToExplore",
          value: function goToExplore() {
            this.router.navigate(["/menu/tabs/explore"]);
          }
        }]);

        return PaymentSummaryPage;
      }();

      PaymentSummaryPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      PaymentSummaryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-summary',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./payment-summary.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/explore/shopping-cart/payment-summary/payment-summary.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./payment-summary.page.scss */
        "./src/app/menu/explore/shopping-cart/payment-summary/payment-summary.page.scss"))["default"]]
      })], PaymentSummaryPage);
      /***/
    },

    /***/
    "./src/app/register/confirm-password.validator.ts":
    /*!********************************************************!*\
      !*** ./src/app/register/confirm-password.validator.ts ***!
      \********************************************************/

    /*! exports provided: ConfirmPasswordValidator */

    /***/
    function srcAppRegisterConfirmPasswordValidatorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function () {
        return ConfirmPasswordValidator;
      });

      function ConfirmPasswordValidator(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              mustMatch: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    "./src/app/service/history.service.ts":
    /*!********************************************!*\
      !*** ./src/app/service/history.service.ts ***!
      \********************************************/

    /*! exports provided: HistoryService */

    /***/
    function srcAppServiceHistoryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoryService", function () {
        return HistoryService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _assets_js_smtp_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../assets/js/smtp.js */
      "./src/assets/js/smtp.js");
      /* harmony import */


      var _assets_js_smtp_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_smtp_js__WEBPACK_IMPORTED_MODULE_4__); // mail


      var HistoryService = /*#__PURE__*/function () {
        function HistoryService(firestore, router) {
          _classCallCheck(this, HistoryService);

          this.firestore = firestore;
          this.router = router;
        }

        _createClass(HistoryService, [{
          key: "addHistory",
          value: function addHistory(jumlah, nama, tanggal, tiket, total, email, tlp, open, nik) {
            var id = this.firestore.createId();
            var status = 'terbayar';
            this.router.navigate(["/payment-summary/".concat(id)]); // sent to mail

            Email.send({
              Host: 'smtp.elasticemail.com',
              Username: 'wiseawisea1@gmail.com',
              Password: '6942257CEC67FAFE3B2218395345D90C4D47',
              To: email,
              From: 'wiseawisea1@gmail.com',
              Subject: 'Wisea payment success &#128525;',
              Body: 'Hi, ' + nama + '&#128521; <br> Thankyou for #ngeBolang with us ! &#10024; <br> Your ' + '<strong>' + tiket + ' ticket are paid.</strong>' + ' Detail payment: <br>' + '<br><strong>Personal Detail</strong><br>' + 'Email   : ' + email + '<br>' + 'Phone   : ' + tlp + '<br><br>' + '<hr>' + '<table><tr><td><strong>Item</strong></td><td></td><td><strong>Qty</strong></td><td></td><td><strong>Sub Total</strong></td></tr><tr><td>' + tiket + '</td><td></td><td>' + jumlah + '</td><td></td><td>Rp' + total + '</td></tr><tr><td></td><td></td><td><strong>Total</strong></td><td></td><td><strong>Rp' + total + '</strong></td></tr></table>' + '<p><strong>Thank you for your purchase!</strong> Happy #ngeBolang ! &#127752;</p>'
            });
            return this.firestore.doc("history/".concat(id)).set({
              jumlah: jumlah,
              nama: nama,
              status: status,
              tanggal: tanggal,
              tiket: tiket,
              total: total,
              email: email,
              tlp: tlp,
              open: open,
              id: id
            });
          }
        }, {
          key: "getHistoryDetail",
          value: function getHistoryDetail(id) {
            return this.firestore.collection('history').doc(id).valueChanges();
          }
        }]);

        return HistoryService;
      }();

      HistoryService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      HistoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], HistoryService);
      /***/
    },

    /***/
    "./src/app/service/wisata.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/service/wisata.service.ts ***!
      \*******************************************/

    /*! exports provided: WisataService */

    /***/
    function srcAppServiceWisataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WisataService", function () {
        return WisataService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

      var WisataService = /*#__PURE__*/function () {
        function WisataService(firestore) {
          _classCallCheck(this, WisataService);

          this.firestore = firestore;
        }

        _createClass(WisataService, [{
          key: "getWisata",
          value: function getWisata() {
            var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return this.firestore.collection('wisata', function (ref) {
              if (category) {
                return ref.where('kategori', '==', category);
              }

              if (order) {
                if (order === 'trending') {
                  return ref.orderBy('tiketTerjual', 'desc');
                } else if (order === 'latest') {
                  return ref;
                } else if (order === 'low-budget') {
                  return ref.orderBy('harga');
                } else if (order === 'near-me') {
                  return ref;
                }
              }

              return ref;
            }).valueChanges();
          }
        }, {
          key: "getWisataDetail",
          value: function getWisataDetail(wisataId) {
            return this.firestore.collection('wisata').doc(wisataId).valueChanges();
          }
        }]);

        return WisataService;
      }();

      WisataService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      WisataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], WisataService);
      /***/
    },

    /***/
    "./src/assets/js/smtp.js":
    /*!*******************************!*\
      !*** ./src/assets/js/smtp.js ***!
      \*******************************/

    /*! no static exports found */

    /***/
    function srcAssetsJsSmtpJs(module, exports) {
      /* SmtpJS.com - v3.0.0 */
      var Email = {
        send: function send(a) {
          return new Promise(function (n, e) {
            a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
            var t = JSON.stringify(a);
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
              n(e);
            });
          });
        },
        ajaxPost: function ajaxPost(e, n, t) {
          var a = Email.createCORSRequest("POST", e);
          a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () {
            var e = a.responseText;
            null != t && t(e);
          }, a.send(n);
        },
        ajax: function ajax(e, n) {
          var t = Email.createCORSRequest("GET", e);
          t.onload = function () {
            var e = t.responseText;
            null != n && n(e);
          }, t.send();
        },
        createCORSRequest: function createCORSRequest(e, n) {
          var t = new XMLHttpRequest();
          return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest()).open(e, n) : t = null, t;
        }
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map