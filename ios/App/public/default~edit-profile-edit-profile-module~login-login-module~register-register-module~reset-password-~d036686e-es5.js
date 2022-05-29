(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~edit-profile-edit-profile-module~login-login-module~register-register-module~reset-password-~d036686e"], {
    /***/
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js ***!
      \*****************************************************************/

    /*! exports provided: A11yModule, ActiveDescendantKeyManager, AriaDescriber, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, CDK_DESCRIBEDBY_ID_PREFIX, CdkAriaLive, CdkMonitorFocus, CdkTrapFocus, ConfigurableFocusTrap, ConfigurableFocusTrapFactory, EventListenerFocusTrapInertStrategy, FOCUS_MONITOR_DEFAULT_OPTIONS, FOCUS_TRAP_INERT_STRATEGY, FocusKeyManager, FocusMonitor, FocusTrap, FocusTrapFactory, HighContrastModeDetector, InteractivityChecker, IsFocusableConfig, LIVE_ANNOUNCER_DEFAULT_OPTIONS, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, ListKeyManager, LiveAnnouncer, MESSAGES_CONTAINER_ID, TOUCH_BUFFER_MS, isFakeMousedownFromScreenReader, ɵangular_material_src_cdk_a11y_a11y_a, ɵangular_material_src_cdk_a11y_a11y_b */

    /***/
    function node_modulesAngularCdk__ivy_ngcc__Fesm2015A11yJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "A11yModule", function () {
        return A11yModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function () {
        return ActiveDescendantKeyManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AriaDescriber", function () {
        return AriaDescriber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function () {
        return CDK_DESCRIBEDBY_HOST_ATTRIBUTE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function () {
        return CDK_DESCRIBEDBY_ID_PREFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAriaLive", function () {
        return CdkAriaLive;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function () {
        return CdkMonitorFocus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function () {
        return CdkTrapFocus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrap", function () {
        return ConfigurableFocusTrap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrapFactory", function () {
        return ConfigurableFocusTrapFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventListenerFocusTrapInertStrategy", function () {
        return EventListenerFocusTrapInertStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_DEFAULT_OPTIONS", function () {
        return FOCUS_MONITOR_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FOCUS_TRAP_INERT_STRATEGY", function () {
        return FOCUS_TRAP_INERT_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function () {
        return FocusKeyManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusMonitor", function () {
        return FocusMonitor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusTrap", function () {
        return FocusTrap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function () {
        return FocusTrapFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighContrastModeDetector", function () {
        return HighContrastModeDetector;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function () {
        return InteractivityChecker;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsFocusableConfig", function () {
        return IsFocusableConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_DEFAULT_OPTIONS", function () {
        return LIVE_ANNOUNCER_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function () {
        return LIVE_ANNOUNCER_ELEMENT_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY", function () {
        return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListKeyManager", function () {
        return ListKeyManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function () {
        return LiveAnnouncer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function () {
        return MESSAGES_CONTAINER_ID;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function () {
        return TOUCH_BUFFER_MS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function () {
        return isFakeMousedownFromScreenReader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_a", function () {
        return FocusTrapManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_b", function () {
        return ConfigurableFocusTrapConfig;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** IDs are delimited by an empty space, as per the spec. */


      var ID_DELIMITER = ' ';
      /**
       * Adds the given ID to the specified ARIA attribute on an element.
       * Used for attributes such as aria-labelledby, aria-owns, etc.
       */

      function addAriaReferencedId(el, attr, id) {
        var ids = getAriaReferenceIds(el, attr);

        if (ids.some(function (existingId) {
          return existingId.trim() == id.trim();
        })) {
          return;
        }

        ids.push(id.trim());
        el.setAttribute(attr, ids.join(ID_DELIMITER));
      }
      /**
       * Removes the given ID from the specified ARIA attribute on an element.
       * Used for attributes such as aria-labelledby, aria-owns, etc.
       */


      function removeAriaReferencedId(el, attr, id) {
        var ids = getAriaReferenceIds(el, attr);
        var filteredIds = ids.filter(function (val) {
          return val != id.trim();
        });

        if (filteredIds.length) {
          el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
        } else {
          el.removeAttribute(attr);
        }
      }
      /**
       * Gets the list of IDs referenced by the given ARIA attribute on an element.
       * Used for attributes such as aria-labelledby, aria-owns, etc.
       */


      function getAriaReferenceIds(el, attr) {
        // Get string array of all individual ids (whitespace delimited) in the attribute value
        return (el.getAttribute(attr) || '').match(/\S+/g) || [];
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** ID used for the body container where all messages are appended. */


      var MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
      /** ID prefix used for each created message element. */

      var CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
      /** Attribute given to each host element that is described by a message element. */

      var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
      /** Global incremental identifier for each registered message element. */

      var nextId = 0;
      /** Global map of all registered message elements that have been placed into the document. */

      var messageRegistry = new Map();
      /** Container for all registered messages. */

      var messagesContainer = null;
      /**
       * Utility that creates visually hidden elements with a message content. Useful for elements that
       * want to use aria-describedby to further describe themselves without adding additional visual
       * content.
       */

      var AriaDescriber = /*#__PURE__*/function () {
        function AriaDescriber(_document,
        /**
         * @breaking-change 8.0.0 `_platform` parameter to be made required.
         */
        _platform) {
          _classCallCheck(this, AriaDescriber);

          this._platform = _platform;
          this._document = _document;
        }
        /**
         * Adds to the host element an aria-describedby reference to a hidden element that contains
         * the message. If the same message has already been registered, then it will reuse the created
         * message element.
         */


        _createClass(AriaDescriber, [{
          key: "describe",
          value: function describe(hostElement, message) {
            if (!this._canBeDescribed(hostElement, message)) {
              return;
            }

            if (typeof message !== 'string') {
              // We need to ensure that the element has an ID.
              this._setMessageId(message);

              messageRegistry.set(message, {
                messageElement: message,
                referenceCount: 0
              });
            } else if (!messageRegistry.has(message)) {
              this._createMessageElement(message);
            }

            if (!this._isElementDescribedByMessage(hostElement, message)) {
              this._addMessageReference(hostElement, message);
            }
          }
          /** Removes the host element's aria-describedby reference to the message element. */

        }, {
          key: "removeDescription",
          value: function removeDescription(hostElement, message) {
            if (!message || !this._isElementNode(hostElement)) {
              return;
            }

            if (this._isElementDescribedByMessage(hostElement, message)) {
              this._removeMessageReference(hostElement, message);
            } // If the message is a string, it means that it's one that we created for the
            // consumer so we can remove it safely, otherwise we should leave it in place.


            if (typeof message === 'string') {
              var registeredMessage = messageRegistry.get(message);

              if (registeredMessage && registeredMessage.referenceCount === 0) {
                this._deleteMessageElement(message);
              }
            }

            if (messagesContainer && messagesContainer.childNodes.length === 0) {
              this._deleteMessagesContainer();
            }
          }
          /** Unregisters all created message elements and removes the message container. */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var describedElements = this._document.querySelectorAll("[".concat(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, "]"));

            for (var i = 0; i < describedElements.length; i++) {
              this._removeCdkDescribedByReferenceIds(describedElements[i]);

              describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
            }

            if (messagesContainer) {
              this._deleteMessagesContainer();
            }

            messageRegistry.clear();
          }
          /**
           * Creates a new element in the visually hidden message container element with the message
           * as its content and adds it to the message registry.
           */

        }, {
          key: "_createMessageElement",
          value: function _createMessageElement(message) {
            var messageElement = this._document.createElement('div');

            this._setMessageId(messageElement);

            messageElement.textContent = message;

            this._createMessagesContainer();

            messagesContainer.appendChild(messageElement);
            messageRegistry.set(message, {
              messageElement: messageElement,
              referenceCount: 0
            });
          }
          /** Assigns a unique ID to an element, if it doesn't have one already. */

        }, {
          key: "_setMessageId",
          value: function _setMessageId(element) {
            if (!element.id) {
              element.id = "".concat(CDK_DESCRIBEDBY_ID_PREFIX, "-").concat(nextId++);
            }
          }
          /** Deletes the message element from the global messages container. */

        }, {
          key: "_deleteMessageElement",
          value: function _deleteMessageElement(message) {
            var registeredMessage = messageRegistry.get(message);
            var messageElement = registeredMessage && registeredMessage.messageElement;

            if (messagesContainer && messageElement) {
              messagesContainer.removeChild(messageElement);
            }

            messageRegistry["delete"](message);
          }
          /** Creates the global container for all aria-describedby messages. */

        }, {
          key: "_createMessagesContainer",
          value: function _createMessagesContainer() {
            if (!messagesContainer) {
              // @breaking-change 8.0.0 `_platform` null check can be removed once the parameter is required
              var canBeAriaHidden = !this._platform || !this._platform.EDGE && !this._platform.TRIDENT;

              var preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID); // When going from the server to the client, we may end up in a situation where there's
              // already a container on the page, but we don't have a reference to it. Clear the
              // old container so we don't get duplicates. Doing this, instead of emptying the previous
              // container, should be slightly faster.


              if (preExistingContainer && preExistingContainer.parentNode) {
                preExistingContainer.parentNode.removeChild(preExistingContainer);
              }

              messagesContainer = this._document.createElement('div');
              messagesContainer.id = MESSAGES_CONTAINER_ID;
              messagesContainer.classList.add('cdk-visually-hidden'); // IE and Edge won't read out the messages if they're in an `aria-hidden` container.
              // We only disable `aria-hidden` for these platforms, because it comes with the
              // disadvantage that people might hit the messages when they've navigated past
              // the end of the document using the arrow keys.

              messagesContainer.setAttribute('aria-hidden', canBeAriaHidden + '');

              this._document.body.appendChild(messagesContainer);
            }
          }
          /** Deletes the global messages container. */

        }, {
          key: "_deleteMessagesContainer",
          value: function _deleteMessagesContainer() {
            if (messagesContainer && messagesContainer.parentNode) {
              messagesContainer.parentNode.removeChild(messagesContainer);
              messagesContainer = null;
            }
          }
          /** Removes all cdk-describedby messages that are hosted through the element. */

        }, {
          key: "_removeCdkDescribedByReferenceIds",
          value: function _removeCdkDescribedByReferenceIds(element) {
            // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
            var originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(function (id) {
              return id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0;
            });
            element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
          }
          /**
           * Adds a message reference to the element using aria-describedby and increments the registered
           * message's reference count.
           */

        }, {
          key: "_addMessageReference",
          value: function _addMessageReference(element, message) {
            var registeredMessage = messageRegistry.get(message); // Add the aria-describedby reference and set the
            // describedby_host attribute to mark the element.

            addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
            element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
            registeredMessage.referenceCount++;
          }
          /**
           * Removes a message reference from the element using aria-describedby
           * and decrements the registered message's reference count.
           */

        }, {
          key: "_removeMessageReference",
          value: function _removeMessageReference(element, message) {
            var registeredMessage = messageRegistry.get(message);
            registeredMessage.referenceCount--;
            removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
            element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
          }
          /** Returns true if the element has been described by the provided message ID. */

        }, {
          key: "_isElementDescribedByMessage",
          value: function _isElementDescribedByMessage(element, message) {
            var referenceIds = getAriaReferenceIds(element, 'aria-describedby');
            var registeredMessage = messageRegistry.get(message);
            var messageId = registeredMessage && registeredMessage.messageElement.id;
            return !!messageId && referenceIds.indexOf(messageId) != -1;
          }
          /** Determines whether a message can be described on a particular element. */

        }, {
          key: "_canBeDescribed",
          value: function _canBeDescribed(element, message) {
            if (!this._isElementNode(element)) {
              return false;
            }

            if (message && typeof message === 'object') {
              // We'd have to make some assumptions about the description element's text, if the consumer
              // passed in an element. Assume that if an element is passed in, the consumer has verified
              // that it can be used as a description.
              return true;
            }

            var trimmedMessage = message == null ? '' : "".concat(message).trim();
            var ariaLabel = element.getAttribute('aria-label'); // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
            // element, because screen readers will end up reading out the same text twice in a row.

            return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
          }
          /** Checks whether a node is an Element node. */

        }, {
          key: "_isElementNode",
          value: function _isElementNode(element) {
            return element.nodeType === this._document.ELEMENT_NODE;
          }
        }]);

        return AriaDescriber;
      }();

      AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
        return new (t || AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      };

      AriaDescriber.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function AriaDescriber_Factory() {
          return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
        },
        token: AriaDescriber,
        providedIn: "root"
      });

      AriaDescriber.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AriaDescriber, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * This class manages keyboard events for selectable lists. If you pass it a query list
       * of items, it will set the active item correctly when arrow events occur.
       */


      var ListKeyManager = /*#__PURE__*/function () {
        function ListKeyManager(_items) {
          var _this = this;

          _classCallCheck(this, ListKeyManager);

          this._items = _items;
          this._activeItemIndex = -1;
          this._activeItem = null;
          this._wrap = false;
          this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
          this._vertical = true;
          this._allowedModifierKeys = [];
          this._homeAndEnd = false;
          /**
           * Predicate function that can be used to check whether an item should be skipped
           * by the key manager. By default, disabled items are skipped.
           */

          this._skipPredicateFn = function (item) {
            return item.disabled;
          }; // Buffer for the letters that the user has pressed when the typeahead option is turned on.


          this._pressedLetters = [];
          /**
           * Stream that emits any time the TAB key is pressed, so components can react
           * when focus is shifted off of the list.
           */

          this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          /** Stream that emits whenever the active item of the list manager changes. */

          this.change = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](); // We allow for the items to be an array because, in some cases, the consumer may
          // not have access to a QueryList of the items they want to manage (e.g. when the
          // items aren't being collected via `ViewChildren` or `ContentChildren`).

          if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]) {
            _items.changes.subscribe(function (newItems) {
              if (_this._activeItem) {
                var itemArray = newItems.toArray();
                var newIndex = itemArray.indexOf(_this._activeItem);

                if (newIndex > -1 && newIndex !== _this._activeItemIndex) {
                  _this._activeItemIndex = newIndex;
                }
              }
            });
          }
        }
        /**
         * Sets the predicate function that determines which items should be skipped by the
         * list key manager.
         * @param predicate Function that determines whether the given item should be skipped.
         */


        _createClass(ListKeyManager, [{
          key: "skipPredicate",
          value: function skipPredicate(predicate) {
            this._skipPredicateFn = predicate;
            return this;
          }
          /**
           * Configures wrapping mode, which determines whether the active item will wrap to
           * the other end of list when there are no more items in the given direction.
           * @param shouldWrap Whether the list should wrap when reaching the end.
           */

        }, {
          key: "withWrap",
          value: function withWrap() {
            var shouldWrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._wrap = shouldWrap;
            return this;
          }
          /**
           * Configures whether the key manager should be able to move the selection vertically.
           * @param enabled Whether vertical selection should be enabled.
           */

        }, {
          key: "withVerticalOrientation",
          value: function withVerticalOrientation() {
            var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._vertical = enabled;
            return this;
          }
          /**
           * Configures the key manager to move the selection horizontally.
           * Passing in `null` will disable horizontal movement.
           * @param direction Direction in which the selection can be moved.
           */

        }, {
          key: "withHorizontalOrientation",
          value: function withHorizontalOrientation(direction) {
            this._horizontal = direction;
            return this;
          }
          /**
           * Modifier keys which are allowed to be held down and whose default actions will be prevented
           * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
           */

        }, {
          key: "withAllowedModifierKeys",
          value: function withAllowedModifierKeys(keys) {
            this._allowedModifierKeys = keys;
            return this;
          }
          /**
           * Turns on typeahead mode which allows users to set the active item by typing.
           * @param debounceInterval Time to wait after the last keystroke before setting the active item.
           */

        }, {
          key: "withTypeAhead",
          value: function withTypeAhead() {
            var _this2 = this;

            var debounceInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

            if ((typeof ngDevMode === 'undefined' || ngDevMode) && this._items.length && this._items.some(function (item) {
              return typeof item.getLabel !== 'function';
            })) {
              throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
            }

            this._typeaheadSubscription.unsubscribe(); // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
            // and convert those letters back into a string. Afterwards find the first item that starts
            // with that string and select it.


            this._typeaheadSubscription = this._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (letter) {
              return _this2._pressedLetters.push(letter);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(debounceInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return _this2._pressedLetters.length > 0;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
              return _this2._pressedLetters.join('');
            })).subscribe(function (inputString) {
              var items = _this2._getItemsArray(); // Start at 1 because we want to start searching at the item immediately
              // following the current active item.


              for (var i = 1; i < items.length + 1; i++) {
                var index = (_this2._activeItemIndex + i) % items.length;
                var item = items[index];

                if (!_this2._skipPredicateFn(item) && item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
                  _this2.setActiveItem(index);

                  break;
                }
              }

              _this2._pressedLetters = [];
            });
            return this;
          }
          /**
           * Configures the key manager to activate the first and last items
           * respectively when the Home or End key is pressed.
           * @param enabled Whether pressing the Home or End key activates the first/last item.
           */

        }, {
          key: "withHomeAndEnd",
          value: function withHomeAndEnd() {
            var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._homeAndEnd = enabled;
            return this;
          }
        }, {
          key: "setActiveItem",
          value: function setActiveItem(item) {
            var previousActiveItem = this._activeItem;
            this.updateActiveItem(item);

            if (this._activeItem !== previousActiveItem) {
              this.change.next(this._activeItemIndex);
            }
          }
          /**
           * Sets the active item depending on the key event passed in.
           * @param event Keyboard event to be used for determining which element should be active.
           */

        }, {
          key: "onKeydown",
          value: function onKeydown(event) {
            var _this3 = this;

            var keyCode = event.keyCode;
            var modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
            var isModifierAllowed = modifiers.every(function (modifier) {
              return !event[modifier] || _this3._allowedModifierKeys.indexOf(modifier) > -1;
            });

            switch (keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["TAB"]:
                this.tabOut.next();
                return;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["DOWN_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                  this.setNextItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["UP_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                  this.setPreviousItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["RIGHT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                  this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["LEFT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                  this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["HOME"]:
                if (this._homeAndEnd && isModifierAllowed) {
                  this.setFirstItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["END"]:
                if (this._homeAndEnd && isModifierAllowed) {
                  this.setLastItemActive();
                  break;
                } else {
                  return;
                }

              default:
                if (isModifierAllowed || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["hasModifierKey"])(event, 'shiftKey')) {
                  // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                  // otherwise fall back to resolving alphanumeric characters via the keyCode.
                  if (event.key && event.key.length === 1) {
                    this._letterKeyStream.next(event.key.toLocaleUpperCase());
                  } else if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["Z"] || keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["NINE"]) {
                    this._letterKeyStream.next(String.fromCharCode(keyCode));
                  }
                } // Note that we return here, in order to avoid preventing
                // the default action of non-navigational keys.


                return;
            }

            this._pressedLetters = [];
            event.preventDefault();
          }
          /** Index of the currently active item. */

        }, {
          key: "isTyping",

          /** Gets whether the user is currently typing into the manager using the typeahead feature. */
          value: function isTyping() {
            return this._pressedLetters.length > 0;
          }
          /** Sets the active item to the first enabled item in the list. */

        }, {
          key: "setFirstItemActive",
          value: function setFirstItemActive() {
            this._setActiveItemByIndex(0, 1);
          }
          /** Sets the active item to the last enabled item in the list. */

        }, {
          key: "setLastItemActive",
          value: function setLastItemActive() {
            this._setActiveItemByIndex(this._items.length - 1, -1);
          }
          /** Sets the active item to the next enabled item in the list. */

        }, {
          key: "setNextItemActive",
          value: function setNextItemActive() {
            this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
          }
          /** Sets the active item to a previous enabled item in the list. */

        }, {
          key: "setPreviousItemActive",
          value: function setPreviousItemActive() {
            this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
          }
        }, {
          key: "updateActiveItem",
          value: function updateActiveItem(item) {
            var itemArray = this._getItemsArray();

            var index = typeof item === 'number' ? item : itemArray.indexOf(item);
            var activeItem = itemArray[index]; // Explicitly check for `null` and `undefined` because other falsy values are valid.

            this._activeItem = activeItem == null ? null : activeItem;
            this._activeItemIndex = index;
          }
          /**
           * This method sets the active item, given a list of items and the delta between the
           * currently active item and the new active item. It will calculate differently
           * depending on whether wrap mode is turned on.
           */

        }, {
          key: "_setActiveItemByDelta",
          value: function _setActiveItemByDelta(delta) {
            this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
          }
          /**
           * Sets the active item properly given "wrap" mode. In other words, it will continue to move
           * down the list until it finds an item that is not disabled, and it will wrap if it
           * encounters either end of the list.
           */

        }, {
          key: "_setActiveInWrapMode",
          value: function _setActiveInWrapMode(delta) {
            var items = this._getItemsArray();

            for (var i = 1; i <= items.length; i++) {
              var index = (this._activeItemIndex + delta * i + items.length) % items.length;
              var item = items[index];

              if (!this._skipPredicateFn(item)) {
                this.setActiveItem(index);
                return;
              }
            }
          }
          /**
           * Sets the active item properly given the default mode. In other words, it will
           * continue to move down the list until it finds an item that is not disabled. If
           * it encounters either end of the list, it will stop and not wrap.
           */

        }, {
          key: "_setActiveInDefaultMode",
          value: function _setActiveInDefaultMode(delta) {
            this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
          }
          /**
           * Sets the active item to the first enabled item starting at the index specified. If the
           * item is disabled, it will move in the fallbackDelta direction until it either
           * finds an enabled item or encounters the end of the list.
           */

        }, {
          key: "_setActiveItemByIndex",
          value: function _setActiveItemByIndex(index, fallbackDelta) {
            var items = this._getItemsArray();

            if (!items[index]) {
              return;
            }

            while (this._skipPredicateFn(items[index])) {
              index += fallbackDelta;

              if (!items[index]) {
                return;
              }
            }

            this.setActiveItem(index);
          }
          /** Returns the items as an array. */

        }, {
          key: "_getItemsArray",
          value: function _getItemsArray() {
            return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"] ? this._items.toArray() : this._items;
          }
        }, {
          key: "activeItemIndex",
          get: function get() {
            return this._activeItemIndex;
          }
          /** The active item. */

        }, {
          key: "activeItem",
          get: function get() {
            return this._activeItem;
          }
        }]);

        return ListKeyManager;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var ActiveDescendantKeyManager = /*#__PURE__*/function (_ListKeyManager) {
        _inherits(ActiveDescendantKeyManager, _ListKeyManager);

        var _super = _createSuper(ActiveDescendantKeyManager);

        function ActiveDescendantKeyManager() {
          _classCallCheck(this, ActiveDescendantKeyManager);

          return _super.apply(this, arguments);
        }

        _createClass(ActiveDescendantKeyManager, [{
          key: "setActiveItem",
          value: function setActiveItem(index) {
            if (this.activeItem) {
              this.activeItem.setInactiveStyles();
            }

            _get(_getPrototypeOf(ActiveDescendantKeyManager.prototype), "setActiveItem", this).call(this, index);

            if (this.activeItem) {
              this.activeItem.setActiveStyles();
            }
          }
        }]);

        return ActiveDescendantKeyManager;
      }(ListKeyManager);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var FocusKeyManager = /*#__PURE__*/function (_ListKeyManager2) {
        _inherits(FocusKeyManager, _ListKeyManager2);

        var _super2 = _createSuper(FocusKeyManager);

        function FocusKeyManager() {
          var _this4;

          _classCallCheck(this, FocusKeyManager);

          _this4 = _super2.apply(this, arguments);
          _this4._origin = 'program';
          return _this4;
        }
        /**
         * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
         * @param origin Focus origin to be used when focusing items.
         */


        _createClass(FocusKeyManager, [{
          key: "setFocusOrigin",
          value: function setFocusOrigin(origin) {
            this._origin = origin;
            return this;
          }
        }, {
          key: "setActiveItem",
          value: function setActiveItem(item) {
            _get(_getPrototypeOf(FocusKeyManager.prototype), "setActiveItem", this).call(this, item);

            if (this.activeItem) {
              this.activeItem.focus(this._origin);
            }
          }
        }]);

        return FocusKeyManager;
      }(ListKeyManager);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Configuration for the isFocusable method.
       */


      var IsFocusableConfig = function IsFocusableConfig() {
        _classCallCheck(this, IsFocusableConfig);

        /**
         * Whether to count an element as focusable even if it is not currently visible.
         */
        this.ignoreVisibility = false;
      }; // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
      // Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
      // supported.

      /**
       * Utility for checking the interactivity of an element, such as whether is is focusable or
       * tabbable.
       */


      var InteractivityChecker = /*#__PURE__*/function () {
        function InteractivityChecker(_platform) {
          _classCallCheck(this, InteractivityChecker);

          this._platform = _platform;
        }
        /**
         * Gets whether an element is disabled.
         *
         * @param element Element to be checked.
         * @returns Whether the element is disabled.
         */


        _createClass(InteractivityChecker, [{
          key: "isDisabled",
          value: function isDisabled(element) {
            // This does not capture some cases, such as a non-form control with a disabled attribute or
            // a form control inside of a disabled form, but should capture the most common cases.
            return element.hasAttribute('disabled');
          }
          /**
           * Gets whether an element is visible for the purposes of interactivity.
           *
           * This will capture states like `display: none` and `visibility: hidden`, but not things like
           * being clipped by an `overflow: hidden` parent or being outside the viewport.
           *
           * @returns Whether the element is visible.
           */

        }, {
          key: "isVisible",
          value: function isVisible(element) {
            return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
          }
          /**
           * Gets whether an element can be reached via Tab key.
           * Assumes that the element has already been checked with isFocusable.
           *
           * @param element Element to be checked.
           * @returns Whether the element is tabbable.
           */

        }, {
          key: "isTabbable",
          value: function isTabbable(element) {
            // Nothing is tabbable on the server 😎
            if (!this._platform.isBrowser) {
              return false;
            }

            var frameElement = getFrameElement(getWindow(element));

            if (frameElement) {
              // Frame elements inherit their tabindex onto all child elements.
              if (getTabIndexValue(frameElement) === -1) {
                return false;
              } // Browsers disable tabbing to an element inside of an invisible frame.


              if (!this.isVisible(frameElement)) {
                return false;
              }
            }

            var nodeName = element.nodeName.toLowerCase();
            var tabIndexValue = getTabIndexValue(element);

            if (element.hasAttribute('contenteditable')) {
              return tabIndexValue !== -1;
            }

            if (nodeName === 'iframe' || nodeName === 'object') {
              // The frame or object's content may be tabbable depending on the content, but it's
              // not possibly to reliably detect the content of the frames. We always consider such
              // elements as non-tabbable.
              return false;
            } // In iOS, the browser only considers some specific elements as tabbable.


            if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
              return false;
            }

            if (nodeName === 'audio') {
              // Audio elements without controls enabled are never tabbable, regardless
              // of the tabindex attribute explicitly being set.
              if (!element.hasAttribute('controls')) {
                return false;
              } // Audio elements with controls are by default tabbable unless the
              // tabindex attribute is set to `-1` explicitly.


              return tabIndexValue !== -1;
            }

            if (nodeName === 'video') {
              // For all video elements, if the tabindex attribute is set to `-1`, the video
              // is not tabbable. Note: We cannot rely on the default `HTMLElement.tabIndex`
              // property as that one is set to `-1` in Chrome, Edge and Safari v13.1. The
              // tabindex attribute is the source of truth here.
              if (tabIndexValue === -1) {
                return false;
              } // If the tabindex is explicitly set, and not `-1` (as per check before), the
              // video element is always tabbable (regardless of whether it has controls or not).


              if (tabIndexValue !== null) {
                return true;
              } // Otherwise (when no explicit tabindex is set), a video is only tabbable if it
              // has controls enabled. Firefox is special as videos are always tabbable regardless
              // of whether there are controls or not.


              return this._platform.FIREFOX || element.hasAttribute('controls');
            }

            return element.tabIndex >= 0;
          }
          /**
           * Gets whether an element can be focused by the user.
           *
           * @param element Element to be checked.
           * @param config The config object with options to customize this method's behavior
           * @returns Whether the element is focusable.
           */

        }, {
          key: "isFocusable",
          value: function isFocusable(element, config) {
            // Perform checks in order of left to most expensive.
            // Again, naive approach that does not capture many edge cases and browser quirks.
            return isPotentiallyFocusable(element) && !this.isDisabled(element) && ((config === null || config === void 0 ? void 0 : config.ignoreVisibility) || this.isVisible(element));
          }
        }]);

        return InteractivityChecker;
      }();

      InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
        return new (t || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      };

      InteractivityChecker.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function InteractivityChecker_Factory() {
          return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
        },
        token: InteractivityChecker,
        providedIn: "root"
      });

      InteractivityChecker.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InteractivityChecker, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }];
        }, null);
      })();
      /**
       * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
       * the frameElement property is being accessed from a different host address, this property
       * should be accessed carefully.
       */


      function getFrameElement(window) {
        try {
          return window.frameElement;
        } catch (_a) {
          return null;
        }
      }
      /** Checks whether the specified element has any geometry / rectangles. */


      function hasGeometry(element) {
        // Use logic from jQuery to check for an invisible element.
        // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
        return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
      }
      /** Gets whether an element's  */


      function isNativeFormElement(element) {
        var nodeName = element.nodeName.toLowerCase();
        return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
      }
      /** Gets whether an element is an `<input type="hidden">`. */


      function isHiddenInput(element) {
        return isInputElement(element) && element.type == 'hidden';
      }
      /** Gets whether an element is an anchor that has an href attribute. */


      function isAnchorWithHref(element) {
        return isAnchorElement(element) && element.hasAttribute('href');
      }
      /** Gets whether an element is an input element. */


      function isInputElement(element) {
        return element.nodeName.toLowerCase() == 'input';
      }
      /** Gets whether an element is an anchor element. */


      function isAnchorElement(element) {
        return element.nodeName.toLowerCase() == 'a';
      }
      /** Gets whether an element has a valid tabindex. */


      function hasValidTabIndex(element) {
        if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
          return false;
        }

        var tabIndex = element.getAttribute('tabindex'); // IE11 parses tabindex="" as the value "-32768"

        if (tabIndex == '-32768') {
          return false;
        }

        return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
      }
      /**
       * Returns the parsed tabindex from the element attributes instead of returning the
       * evaluated tabindex from the browsers defaults.
       */


      function getTabIndexValue(element) {
        if (!hasValidTabIndex(element)) {
          return null;
        } // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054


        var tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
        return isNaN(tabIndex) ? -1 : tabIndex;
      }
      /** Checks whether the specified element is potentially tabbable on iOS */


      function isPotentiallyTabbableIOS(element) {
        var nodeName = element.nodeName.toLowerCase();
        var inputType = nodeName === 'input' && element.type;
        return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
      }
      /**
       * Gets whether an element is potentially focusable without taking current visible/disabled state
       * into account.
       */


      function isPotentiallyFocusable(element) {
        // Inputs are potentially focusable *unless* they're type="hidden".
        if (isHiddenInput(element)) {
          return false;
        }

        return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
      }
      /** Gets the parent window of a DOM node with regards of being inside of an iframe. */


      function getWindow(node) {
        // ownerDocument is null if `node` itself *is* a document.
        return node.ownerDocument && node.ownerDocument.defaultView || window;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class that allows for trapping focus within a DOM element.
       *
       * This class currently uses a relatively simple approach to focus trapping.
       * It assumes that the tab order is the same as DOM order, which is not necessarily true.
       * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause the two to misalign.
       *
       * @deprecated Use `ConfigurableFocusTrap` instead.
       * @breaking-change for 11.0.0 Remove this class.
       */


      var FocusTrap = /*#__PURE__*/function () {
        function FocusTrap(_element, _checker, _ngZone, _document) {
          var _this5 = this;

          var deferAnchors = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

          _classCallCheck(this, FocusTrap);

          this._element = _element;
          this._checker = _checker;
          this._ngZone = _ngZone;
          this._document = _document;
          this._hasAttached = false; // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.

          this.startAnchorListener = function () {
            return _this5.focusLastTabbableElement();
          };

          this.endAnchorListener = function () {
            return _this5.focusFirstTabbableElement();
          };

          this._enabled = true;

          if (!deferAnchors) {
            this.attachAnchors();
          }
        }
        /** Whether the focus trap is active. */


        _createClass(FocusTrap, [{
          key: "destroy",

          /** Destroys the focus trap by cleaning up the anchors. */
          value: function destroy() {
            var startAnchor = this._startAnchor;
            var endAnchor = this._endAnchor;

            if (startAnchor) {
              startAnchor.removeEventListener('focus', this.startAnchorListener);

              if (startAnchor.parentNode) {
                startAnchor.parentNode.removeChild(startAnchor);
              }
            }

            if (endAnchor) {
              endAnchor.removeEventListener('focus', this.endAnchorListener);

              if (endAnchor.parentNode) {
                endAnchor.parentNode.removeChild(endAnchor);
              }
            }

            this._startAnchor = this._endAnchor = null;
            this._hasAttached = false;
          }
          /**
           * Inserts the anchors into the DOM. This is usually done automatically
           * in the constructor, but can be deferred for cases like directives with `*ngIf`.
           * @returns Whether the focus trap managed to attach successfuly. This may not be the case
           * if the target element isn't currently in the DOM.
           */

        }, {
          key: "attachAnchors",
          value: function attachAnchors() {
            var _this6 = this;

            // If we're not on the browser, there can be no focus to trap.
            if (this._hasAttached) {
              return true;
            }

            this._ngZone.runOutsideAngular(function () {
              if (!_this6._startAnchor) {
                _this6._startAnchor = _this6._createAnchor();

                _this6._startAnchor.addEventListener('focus', _this6.startAnchorListener);
              }

              if (!_this6._endAnchor) {
                _this6._endAnchor = _this6._createAnchor();

                _this6._endAnchor.addEventListener('focus', _this6.endAnchorListener);
              }
            });

            if (this._element.parentNode) {
              this._element.parentNode.insertBefore(this._startAnchor, this._element);

              this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);

              this._hasAttached = true;
            }

            return this._hasAttached;
          }
          /**
           * Waits for the zone to stabilize, then either focuses the first element that the
           * user specified, or the first tabbable element.
           * @returns Returns a promise that resolves with a boolean, depending
           * on whether focus was moved successfuly.
           */

        }, {
          key: "focusInitialElementWhenReady",
          value: function focusInitialElementWhenReady() {
            var _this7 = this;

            return new Promise(function (resolve) {
              _this7._executeOnStable(function () {
                return resolve(_this7.focusInitialElement());
              });
            });
          }
          /**
           * Waits for the zone to stabilize, then focuses
           * the first tabbable element within the focus trap region.
           * @returns Returns a promise that resolves with a boolean, depending
           * on whether focus was moved successfuly.
           */

        }, {
          key: "focusFirstTabbableElementWhenReady",
          value: function focusFirstTabbableElementWhenReady() {
            var _this8 = this;

            return new Promise(function (resolve) {
              _this8._executeOnStable(function () {
                return resolve(_this8.focusFirstTabbableElement());
              });
            });
          }
          /**
           * Waits for the zone to stabilize, then focuses
           * the last tabbable element within the focus trap region.
           * @returns Returns a promise that resolves with a boolean, depending
           * on whether focus was moved successfuly.
           */

        }, {
          key: "focusLastTabbableElementWhenReady",
          value: function focusLastTabbableElementWhenReady() {
            var _this9 = this;

            return new Promise(function (resolve) {
              _this9._executeOnStable(function () {
                return resolve(_this9.focusLastTabbableElement());
              });
            });
          }
          /**
           * Get the specified boundary element of the trapped region.
           * @param bound The boundary to get (start or end of trapped region).
           * @returns The boundary element.
           */

        }, {
          key: "_getRegionBoundary",
          value: function _getRegionBoundary(bound) {
            // Contains the deprecated version of selector, for temporary backwards comparability.
            var markers = this._element.querySelectorAll("[cdk-focus-region-".concat(bound, "], ") + "[cdkFocusRegion".concat(bound, "], ") + "[cdk-focus-".concat(bound, "]"));

            for (var i = 0; i < markers.length; i++) {
              // @breaking-change 8.0.0
              if (markers[i].hasAttribute("cdk-focus-".concat(bound))) {
                console.warn("Found use of deprecated attribute 'cdk-focus-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated ") + "attribute will be removed in 8.0.0.", markers[i]);
              } else if (markers[i].hasAttribute("cdk-focus-region-".concat(bound))) {
                console.warn("Found use of deprecated attribute 'cdk-focus-region-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated attribute ") + "will be removed in 8.0.0.", markers[i]);
              }
            }

            if (bound == 'start') {
              return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
            }

            return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
          }
          /**
           * Focuses the element that should be focused when the focus trap is initialized.
           * @returns Whether focus was moved successfuly.
           */

        }, {
          key: "focusInitialElement",
          value: function focusInitialElement() {
            // Contains the deprecated version of selector, for temporary backwards comparability.
            var redirectToElement = this._element.querySelector("[cdk-focus-initial], " + "[cdkFocusInitial]");

            if (redirectToElement) {
              // @breaking-change 8.0.0
              if (redirectToElement.hasAttribute("cdk-focus-initial")) {
                console.warn("Found use of deprecated attribute 'cdk-focus-initial', " + "use 'cdkFocusInitial' instead. The deprecated attribute " + "will be removed in 8.0.0", redirectToElement);
              } // Warn the consumer if the element they've pointed to
              // isn't focusable, when not in production mode.


              if ((typeof ngDevMode === 'undefined' || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
                console.warn("Element matching '[cdkFocusInitial]' is not focusable.", redirectToElement);
              }

              redirectToElement.focus();
              return true;
            }

            return this.focusFirstTabbableElement();
          }
          /**
           * Focuses the first tabbable element within the focus trap region.
           * @returns Whether focus was moved successfuly.
           */

        }, {
          key: "focusFirstTabbableElement",
          value: function focusFirstTabbableElement() {
            var redirectToElement = this._getRegionBoundary('start');

            if (redirectToElement) {
              redirectToElement.focus();
            }

            return !!redirectToElement;
          }
          /**
           * Focuses the last tabbable element within the focus trap region.
           * @returns Whether focus was moved successfuly.
           */

        }, {
          key: "focusLastTabbableElement",
          value: function focusLastTabbableElement() {
            var redirectToElement = this._getRegionBoundary('end');

            if (redirectToElement) {
              redirectToElement.focus();
            }

            return !!redirectToElement;
          }
          /**
           * Checks whether the focus trap has successfuly been attached.
           */

        }, {
          key: "hasAttached",
          value: function hasAttached() {
            return this._hasAttached;
          }
          /** Get the first tabbable element from a DOM subtree (inclusive). */

        }, {
          key: "_getFirstTabbableElement",
          value: function _getFirstTabbableElement(root) {
            if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
              return root;
            } // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
            // back to `childNodes` which includes text nodes, comments etc.


            var children = root.children || root.childNodes;

            for (var i = 0; i < children.length; i++) {
              var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;

              if (tabbableChild) {
                return tabbableChild;
              }
            }

            return null;
          }
          /** Get the last tabbable element from a DOM subtree (inclusive). */

        }, {
          key: "_getLastTabbableElement",
          value: function _getLastTabbableElement(root) {
            if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
              return root;
            } // Iterate in reverse DOM order.


            var children = root.children || root.childNodes;

            for (var i = children.length - 1; i >= 0; i--) {
              var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;

              if (tabbableChild) {
                return tabbableChild;
              }
            }

            return null;
          }
          /** Creates an anchor element. */

        }, {
          key: "_createAnchor",
          value: function _createAnchor() {
            var anchor = this._document.createElement('div');

            this._toggleAnchorTabIndex(this._enabled, anchor);

            anchor.classList.add('cdk-visually-hidden');
            anchor.classList.add('cdk-focus-trap-anchor');
            anchor.setAttribute('aria-hidden', 'true');
            return anchor;
          }
          /**
           * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
           * @param isEnabled Whether the focus trap is enabled.
           * @param anchor Anchor on which to toggle the tabindex.
           */

        }, {
          key: "_toggleAnchorTabIndex",
          value: function _toggleAnchorTabIndex(isEnabled, anchor) {
            // Remove the tabindex completely, rather than setting it to -1, because if the
            // element has a tabindex, the user might still hit it when navigating with the arrow keys.
            isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
          }
          /**
           * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
           * @param enabled: Whether the anchors should trap Tab.
           */

        }, {
          key: "toggleAnchors",
          value: function toggleAnchors(enabled) {
            if (this._startAnchor && this._endAnchor) {
              this._toggleAnchorTabIndex(enabled, this._startAnchor);

              this._toggleAnchorTabIndex(enabled, this._endAnchor);
            }
          }
          /** Executes a function when the zone is stable. */

        }, {
          key: "_executeOnStable",
          value: function _executeOnStable(fn) {
            if (this._ngZone.isStable) {
              fn();
            } else {
              this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(fn);
            }
          }
        }, {
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(value) {
            this._enabled = value;

            if (this._startAnchor && this._endAnchor) {
              this._toggleAnchorTabIndex(value, this._startAnchor);

              this._toggleAnchorTabIndex(value, this._endAnchor);
            }
          }
        }]);

        return FocusTrap;
      }();
      /**
       * Factory that allows easy instantiation of focus traps.
       * @deprecated Use `ConfigurableFocusTrapFactory` instead.
       * @breaking-change for 11.0.0 Remove this class.
       */


      var FocusTrapFactory = /*#__PURE__*/function () {
        function FocusTrapFactory(_checker, _ngZone, _document) {
          _classCallCheck(this, FocusTrapFactory);

          this._checker = _checker;
          this._ngZone = _ngZone;
          this._document = _document;
        }
        /**
         * Creates a focus-trapped region around the given element.
         * @param element The element around which focus will be trapped.
         * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
         *     manually by the user.
         * @returns The created focus trap instance.
         */


        _createClass(FocusTrapFactory, [{
          key: "create",
          value: function create(element) {
            var deferCaptureElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
          }
        }]);

        return FocusTrapFactory;
      }();

      FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
        return new (t || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      };

      FocusTrapFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function FocusTrapFactory_Factory() {
          return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
        },
        token: FocusTrapFactory,
        providedIn: "root"
      });

      FocusTrapFactory.ctorParameters = function () {
        return [{
          type: InteractivityChecker
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusTrapFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: InteractivityChecker
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /** Directive for trapping focus within a region. */


      var CdkTrapFocus = /*#__PURE__*/function () {
        function CdkTrapFocus(_elementRef, _focusTrapFactory, _document) {
          _classCallCheck(this, CdkTrapFocus);

          this._elementRef = _elementRef;
          this._focusTrapFactory = _focusTrapFactory;
          /** Previously focused element to restore focus to upon destroy when using autoCapture. */

          this._previouslyFocusedElement = null;
          this._document = _document;
          this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
        }
        /** Whether the focus trap is active. */


        _createClass(CdkTrapFocus, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.focusTrap.destroy(); // If we stored a previously focused element when using autoCapture, return focus to that
            // element now that the trapped region is being destroyed.

            if (this._previouslyFocusedElement) {
              this._previouslyFocusedElement.focus();

              this._previouslyFocusedElement = null;
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.focusTrap.attachAnchors();

            if (this.autoCapture) {
              this._captureFocus();
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (!this.focusTrap.hasAttached()) {
              this.focusTrap.attachAnchors();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var autoCaptureChange = changes['autoCapture'];

            if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap.hasAttached()) {
              this._captureFocus();
            }
          }
        }, {
          key: "_captureFocus",
          value: function _captureFocus() {
            this._previouslyFocusedElement = this._document.activeElement;
            this.focusTrap.focusInitialElementWhenReady();
          }
        }, {
          key: "enabled",
          get: function get() {
            return this.focusTrap.enabled;
          },
          set: function set(value) {
            this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether the directive should automatially move focus into the trapped region upon
           * initialization and return focus to the previous activeElement upon destruction.
           */

        }, {
          key: "autoCapture",
          get: function get() {
            return this._autoCapture;
          },
          set: function set(value) {
            this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
          }
        }]);

        return CdkTrapFocus;
      }();

      CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
        return new (t || CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      };

      CdkTrapFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkTrapFocus,
        selectors: [["", "cdkTrapFocus", ""]],
        inputs: {
          enabled: ["cdkTrapFocus", "enabled"],
          autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"]
        },
        exportAs: ["cdkTrapFocus"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      CdkTrapFocus.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: FocusTrapFactory
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      };

      CdkTrapFocus.propDecorators = {
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTrapFocus']
        }],
        autoCapture: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTrapFocusAutoCapture']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTrapFocus, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkTrapFocus]',
            exportAs: 'cdkTrapFocus'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: FocusTrapFactory
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }];
        }, {
          enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkTrapFocus']
          }],
          autoCapture: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkTrapFocusAutoCapture']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class that allows for trapping focus within a DOM element.
       *
       * This class uses a strategy pattern that determines how it traps focus.
       * See FocusTrapInertStrategy.
       */


      var ConfigurableFocusTrap = /*#__PURE__*/function (_FocusTrap) {
        _inherits(ConfigurableFocusTrap, _FocusTrap);

        var _super3 = _createSuper(ConfigurableFocusTrap);

        function ConfigurableFocusTrap(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
          var _this10;

          _classCallCheck(this, ConfigurableFocusTrap);

          _this10 = _super3.call(this, _element, _checker, _ngZone, _document, config.defer);
          _this10._focusTrapManager = _focusTrapManager;
          _this10._inertStrategy = _inertStrategy;

          _this10._focusTrapManager.register(_assertThisInitialized(_this10));

          return _this10;
        }
        /** Whether the FocusTrap is enabled. */


        _createClass(ConfigurableFocusTrap, [{
          key: "destroy",

          /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
          value: function destroy() {
            this._focusTrapManager.deregister(this);

            _get(_getPrototypeOf(ConfigurableFocusTrap.prototype), "destroy", this).call(this);
          }
          /** @docs-private Implemented as part of ManagedFocusTrap. */

        }, {
          key: "_enable",
          value: function _enable() {
            this._inertStrategy.preventFocus(this);

            this.toggleAnchors(true);
          }
          /** @docs-private Implemented as part of ManagedFocusTrap. */

        }, {
          key: "_disable",
          value: function _disable() {
            this._inertStrategy.allowFocus(this);

            this.toggleAnchors(false);
          }
        }, {
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(value) {
            this._enabled = value;

            if (this._enabled) {
              this._focusTrapManager.register(this);
            } else {
              this._focusTrapManager.deregister(this);
            }
          }
        }]);

        return ConfigurableFocusTrap;
      }(FocusTrap);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** IE 11 compatible closest implementation that is able to start from non-Element Nodes. */


      function closest(element, selector) {
        if (!(element instanceof Node)) {
          return null;
        }

        var curr = element;

        while (curr != null && !(curr instanceof Element)) {
          curr = curr.parentNode;
        }

        return curr && (hasNativeClosest ? curr.closest(selector) : polyfillClosest(curr, selector));
      }
      /** Polyfill for browsers without Element.closest. */


      function polyfillClosest(element, selector) {
        var curr = element;

        while (curr != null && !(curr instanceof Element && matches(curr, selector))) {
          curr = curr.parentNode;
        }

        return curr || null;
      }

      var hasNativeClosest = typeof Element != 'undefined' && !!Element.prototype.closest;
      /** IE 11 compatible matches implementation. */

      function matches(element, selector) {
        return element.matches ? element.matches(selector) : element['msMatchesSelector'](selector);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Lightweight FocusTrapInertStrategy that adds a document focus event
       * listener to redirect focus back inside the FocusTrap.
       */


      var EventListenerFocusTrapInertStrategy = /*#__PURE__*/function () {
        function EventListenerFocusTrapInertStrategy() {
          _classCallCheck(this, EventListenerFocusTrapInertStrategy);

          /** Focus event handler. */
          this._listener = null;
        }
        /** Adds a document event listener that keeps focus inside the FocusTrap. */


        _createClass(EventListenerFocusTrapInertStrategy, [{
          key: "preventFocus",
          value: function preventFocus(focusTrap) {
            var _this11 = this;

            // Ensure there's only one listener per document
            if (this._listener) {
              focusTrap._document.removeEventListener('focus', this._listener, true);
            }

            this._listener = function (e) {
              return _this11._trapFocus(focusTrap, e);
            };

            focusTrap._ngZone.runOutsideAngular(function () {
              focusTrap._document.addEventListener('focus', _this11._listener, true);
            });
          }
          /** Removes the event listener added in preventFocus. */

        }, {
          key: "allowFocus",
          value: function allowFocus(focusTrap) {
            if (!this._listener) {
              return;
            }

            focusTrap._document.removeEventListener('focus', this._listener, true);

            this._listener = null;
          }
          /**
           * Refocuses the first element in the FocusTrap if the focus event target was outside
           * the FocusTrap.
           *
           * This is an event listener callback. The event listener is added in runOutsideAngular,
           * so all this code runs outside Angular as well.
           */

        }, {
          key: "_trapFocus",
          value: function _trapFocus(focusTrap, event) {
            var target = event.target;
            var focusTrapRoot = focusTrap._element; // Don't refocus if target was in an overlay, because the overlay might be associated
            // with an element inside the FocusTrap, ex. mat-select.

            if (!focusTrapRoot.contains(target) && closest(target, 'div.cdk-overlay-pane') === null) {
              // Some legacy FocusTrap usages have logic that focuses some element on the page
              // just before FocusTrap is destroyed. For backwards compatibility, wait
              // to be sure FocusTrap is still enabled before refocusing.
              setTimeout(function () {
                // Check whether focus wasn't put back into the focus trap while the timeout was pending.
                if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
                  focusTrap.focusFirstTabbableElement();
                }
              });
            }
          }
        }]);

        return EventListenerFocusTrapInertStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Configuration for creating a ConfigurableFocusTrap.
       */


      var ConfigurableFocusTrapConfig = function ConfigurableFocusTrapConfig() {
        _classCallCheck(this, ConfigurableFocusTrapConfig);

        /**
         * Whether to defer the creation of FocusTrap elements to be
         * done manually by the user. Default is to create them
         * automatically.
         */
        this.defer = false;
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The injection token used to specify the inert strategy. */


      var FOCUS_TRAP_INERT_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('FOCUS_TRAP_INERT_STRATEGY');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injectable that ensures only the most recently enabled FocusTrap is active. */

      var FocusTrapManager = /*#__PURE__*/function () {
        function FocusTrapManager() {
          _classCallCheck(this, FocusTrapManager);

          // A stack of the FocusTraps on the page. Only the FocusTrap at the
          // top of the stack is active.
          this._focusTrapStack = [];
        }
        /**
         * Disables the FocusTrap at the top of the stack, and then pushes
         * the new FocusTrap onto the stack.
         */


        _createClass(FocusTrapManager, [{
          key: "register",
          value: function register(focusTrap) {
            // Dedupe focusTraps that register multiple times.
            this._focusTrapStack = this._focusTrapStack.filter(function (ft) {
              return ft !== focusTrap;
            });
            var stack = this._focusTrapStack;

            if (stack.length) {
              stack[stack.length - 1]._disable();
            }

            stack.push(focusTrap);

            focusTrap._enable();
          }
          /**
           * Removes the FocusTrap from the stack, and activates the
           * FocusTrap that is the new top of the stack.
           */

        }, {
          key: "deregister",
          value: function deregister(focusTrap) {
            focusTrap._disable();

            var stack = this._focusTrapStack;
            var i = stack.indexOf(focusTrap);

            if (i !== -1) {
              stack.splice(i, 1);

              if (stack.length) {
                stack[stack.length - 1]._enable();
              }
            }
          }
        }]);

        return FocusTrapManager;
      }();

      FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) {
        return new (t || FocusTrapManager)();
      };

      FocusTrapManager.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function FocusTrapManager_Factory() {
          return new FocusTrapManager();
        },
        token: FocusTrapManager,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusTrapManager, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Factory that allows easy instantiation of configurable focus traps. */


      var ConfigurableFocusTrapFactory = /*#__PURE__*/function () {
        function ConfigurableFocusTrapFactory(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
          _classCallCheck(this, ConfigurableFocusTrapFactory);

          this._checker = _checker;
          this._ngZone = _ngZone;
          this._focusTrapManager = _focusTrapManager;
          this._document = _document; // TODO split up the strategies into different modules, similar to DateAdapter.

          this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
        }

        _createClass(ConfigurableFocusTrapFactory, [{
          key: "create",
          value: function create(element) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new ConfigurableFocusTrapConfig();
            var configObject;

            if (typeof config === 'boolean') {
              configObject = new ConfigurableFocusTrapConfig();
              configObject.defer = config;
            } else {
              configObject = config;
            }

            return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
          }
        }]);

        return ConfigurableFocusTrapFactory;
      }();

      ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) {
        return new (t || ConfigurableFocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8));
      };

      ConfigurableFocusTrapFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ConfigurableFocusTrapFactory_Factory() {
          return new ConfigurableFocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FocusTrapManager), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FOCUS_TRAP_INERT_STRATEGY, 8));
        },
        token: ConfigurableFocusTrapFactory,
        providedIn: "root"
      });

      ConfigurableFocusTrapFactory.ctorParameters = function () {
        return [{
          type: InteractivityChecker
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: FocusTrapManager
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [FOCUS_TRAP_INERT_STRATEGY]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfigurableFocusTrapFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: InteractivityChecker
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: FocusTrapManager
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [FOCUS_TRAP_INERT_STRATEGY]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('liveAnnouncerElement', {
        providedIn: 'root',
        factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
      });
      /** @docs-private */

      function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
        return null;
      }
      /** Injection token that can be used to configure the default options for the LiveAnnouncer. */


      var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var LiveAnnouncer = /*#__PURE__*/function () {
        function LiveAnnouncer(elementToken, _ngZone, _document, _defaultOptions) {
          _classCallCheck(this, LiveAnnouncer);

          this._ngZone = _ngZone;
          this._defaultOptions = _defaultOptions; // We inject the live element and document as `any` because the constructor signature cannot
          // reference browser globals (HTMLElement, Document) on non-browser environments, since having
          // a class decorator causes TypeScript to preserve the constructor signature types.

          this._document = _document;
          this._liveElement = elementToken || this._createLiveElement();
        }

        _createClass(LiveAnnouncer, [{
          key: "announce",
          value: function announce(message) {
            var _this12 = this;

            var defaultOptions = this._defaultOptions;
            var politeness;
            var duration;

            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            if (args.length === 1 && typeof args[0] === 'number') {
              duration = args[0];
            } else {
              politeness = args[0];
              duration = args[1];
            }

            this.clear();
            clearTimeout(this._previousTimeout);

            if (!politeness) {
              politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
            }

            if (duration == null && defaultOptions) {
              duration = defaultOptions.duration;
            } // TODO: ensure changing the politeness works on all environments we support.


            this._liveElement.setAttribute('aria-live', politeness); // This 100ms timeout is necessary for some browser + screen-reader combinations:
            // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
            // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
            //   second time without clearing and then using a non-zero delay.
            // (using JAWS 17 at time of this writing).


            return this._ngZone.runOutsideAngular(function () {
              return new Promise(function (resolve) {
                clearTimeout(_this12._previousTimeout);
                _this12._previousTimeout = setTimeout(function () {
                  _this12._liveElement.textContent = message;
                  resolve();

                  if (typeof duration === 'number') {
                    _this12._previousTimeout = setTimeout(function () {
                      return _this12.clear();
                    }, duration);
                  }
                }, 100);
              });
            });
          }
          /**
           * Clears the current text from the announcer element. Can be used to prevent
           * screen readers from reading the text out again while the user is going
           * through the page landmarks.
           */

        }, {
          key: "clear",
          value: function clear() {
            if (this._liveElement) {
              this._liveElement.textContent = '';
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearTimeout(this._previousTimeout);

            if (this._liveElement && this._liveElement.parentNode) {
              this._liveElement.parentNode.removeChild(this._liveElement);

              this._liveElement = null;
            }
          }
        }, {
          key: "_createLiveElement",
          value: function _createLiveElement() {
            var elementClass = 'cdk-live-announcer-element';

            var previousElements = this._document.getElementsByClassName(elementClass);

            var liveEl = this._document.createElement('div'); // Remove any old containers. This can happen when coming in from a server-side-rendered page.


            for (var i = 0; i < previousElements.length; i++) {
              previousElements[i].parentNode.removeChild(previousElements[i]);
            }

            liveEl.classList.add(elementClass);
            liveEl.classList.add('cdk-visually-hidden');
            liveEl.setAttribute('aria-atomic', 'true');
            liveEl.setAttribute('aria-live', 'polite');

            this._document.body.appendChild(liveEl);

            return liveEl;
          }
        }]);

        return LiveAnnouncer;
      }();

      LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
        return new (t || LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
      };

      LiveAnnouncer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function LiveAnnouncer_Factory() {
          return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
        },
        token: LiveAnnouncer,
        providedIn: "root"
      });

      LiveAnnouncer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LiveAnnouncer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
            }]
          }];
        }, null);
      })();
      /**
       * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
       * with a wider range of browsers and screen readers.
       */


      var CdkAriaLive = /*#__PURE__*/function () {
        function CdkAriaLive(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
          _classCallCheck(this, CdkAriaLive);

          this._elementRef = _elementRef;
          this._liveAnnouncer = _liveAnnouncer;
          this._contentObserver = _contentObserver;
          this._ngZone = _ngZone;
          this._politeness = 'polite';
        }
        /** The aria-live politeness level to use when announcing messages. */


        _createClass(CdkAriaLive, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._subscription) {
              this._subscription.unsubscribe();
            }
          }
        }, {
          key: "politeness",
          get: function get() {
            return this._politeness;
          },
          set: function set(value) {
            var _this13 = this;

            this._politeness = value === 'off' || value === 'assertive' ? value : 'polite';

            if (this._politeness === 'off') {
              if (this._subscription) {
                this._subscription.unsubscribe();

                this._subscription = null;
              }
            } else if (!this._subscription) {
              this._subscription = this._ngZone.runOutsideAngular(function () {
                return _this13._contentObserver.observe(_this13._elementRef).subscribe(function () {
                  // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
                  var elementText = _this13._elementRef.nativeElement.textContent; // The `MutationObserver` fires also for attribute
                  // changes which we don't want to announce.

                  if (elementText !== _this13._previousAnnouncedText) {
                    _this13._liveAnnouncer.announce(elementText, _this13._politeness);

                    _this13._previousAnnouncedText = elementText;
                  }
                });
              });
            }
          }
        }]);

        return CdkAriaLive;
      }();

      CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
        return new (t || CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      CdkAriaLive.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkAriaLive,
        selectors: [["", "cdkAriaLive", ""]],
        inputs: {
          politeness: ["cdkAriaLive", "politeness"]
        },
        exportAs: ["cdkAriaLive"]
      });

      CdkAriaLive.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: LiveAnnouncer
        }, {
          type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CdkAriaLive.propDecorators = {
        politeness: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAriaLive']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkAriaLive, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkAriaLive]',
            exportAs: 'cdkAriaLive'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: LiveAnnouncer
          }, {
            type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, {
          politeness: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAriaLive']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Screenreaders will often fire fake mousedown events when a focusable element
       * is activated using the keyboard. We can typically distinguish between these faked
       * mousedown events and real mousedown events using the "buttons" property. While
       * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
       * the left mouse button), faked mousedowns will usually set the property value to 0.
       */


      function isFakeMousedownFromScreenReader(event) {
        return event.buttons === 0;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
      // that a value of around 650ms seems appropriate.


      var TOUCH_BUFFER_MS = 650;
      /** InjectionToken for FocusMonitorOptions. */

      var FOCUS_MONITOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-focus-monitor-default-options');
      /**
       * Event listener options that enable capturing and also
       * mark the listener as passive if the browser supports it.
       */

      var captureEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["normalizePassiveListenerOptions"])({
        passive: true,
        capture: true
      });
      /** Monitors mouse and keyboard events to determine the cause of focus events. */

      var FocusMonitor = /*#__PURE__*/function () {
        function FocusMonitor(_ngZone, _platform,
        /** @breaking-change 11.0.0 make document required */
        document, options) {
          var _this14 = this;

          _classCallCheck(this, FocusMonitor);

          this._ngZone = _ngZone;
          this._platform = _platform;
          /** The focus origin that the next focus event is a result of. */

          this._origin = null;
          /** Whether the window has just been focused. */

          this._windowFocused = false;
          /** Map of elements being monitored to their info. */

          this._elementInfo = new Map();
          /** The number of elements currently being monitored. */

          this._monitoredElementCount = 0;
          /**
           * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
           * as well as the number of monitored elements that they contain. We have to treat focus/blur
           * handlers differently from the rest of the events, because the browser won't emit events
           * to the document when focus moves inside of a shadow root.
           */

          this._rootNodeFocusListenerCount = new Map();
          /**
           * Event listener for `keydown` events on the document.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */

          this._documentKeydownListener = function () {
            // On keydown record the origin and clear any touch event that may be in progress.
            _this14._lastTouchTarget = null;

            _this14._setOriginForCurrentEventQueue('keyboard');
          };
          /**
           * Event listener for `mousedown` events on the document.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */


          this._documentMousedownListener = function (event) {
            // On mousedown record the origin only if there is not touch
            // target, since a mousedown can happen as a result of a touch event.
            if (!_this14._lastTouchTarget) {
              // In some cases screen readers fire fake `mousedown` events instead of `keydown`.
              // Resolve the focus source to `keyboard` if we detect one of them.
              var source = isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse';

              _this14._setOriginForCurrentEventQueue(source);
            }
          };
          /**
           * Event listener for `touchstart` events on the document.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */


          this._documentTouchstartListener = function (event) {
            // When the touchstart event fires the focus event is not yet in the event queue. This means
            // we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
            // see if a focus happens.
            if (_this14._touchTimeoutId != null) {
              clearTimeout(_this14._touchTimeoutId);
            }

            _this14._lastTouchTarget = getTarget(event);
            _this14._touchTimeoutId = setTimeout(function () {
              return _this14._lastTouchTarget = null;
            }, TOUCH_BUFFER_MS);
          };
          /**
           * Event listener for `focus` events on the window.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */


          this._windowFocusListener = function () {
            // Make a note of when the window regains focus, so we can
            // restore the origin info for the focused element.
            _this14._windowFocused = true;
            _this14._windowFocusTimeoutId = setTimeout(function () {
              return _this14._windowFocused = false;
            });
          };
          /**
           * Event listener for `focus` and 'blur' events on the document.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */


          this._rootNodeFocusAndBlurListener = function (event) {
            var target = getTarget(event);
            var handler = event.type === 'focus' ? _this14._onFocus : _this14._onBlur; // We need to walk up the ancestor chain in order to support `checkChildren`.

            for (var element = target; element; element = element.parentElement) {
              handler.call(_this14, event, element);
            }
          };

          this._document = document;
          this._detectionMode = (options === null || options === void 0 ? void 0 : options.detectionMode) || 0
          /* IMMEDIATE */
          ;
        }

        _createClass(FocusMonitor, [{
          key: "monitor",
          value: function monitor(element) {
            var checkChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element); // Do nothing if we're not on the browser platform or the passed in node isn't an element.

            if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            } // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
            // the shadow root, rather than the `document`, because the browser won't emit focus events
            // to the `document`, if focus is moving within the same shadow root.


            var rootNode = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["_getShadowRoot"])(nativeElement) || this._getDocument();

            var cachedInfo = this._elementInfo.get(nativeElement); // Check if we're already monitoring this element.


            if (cachedInfo) {
              if (checkChildren) {
                // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
                // observers into ones that behave as if `checkChildren` was turned on. We need a more
                // robust solution.
                cachedInfo.checkChildren = true;
              }

              return cachedInfo.subject;
            } // Create monitored element info.


            var info = {
              checkChildren: checkChildren,
              subject: new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](),
              rootNode: rootNode
            };

            this._elementInfo.set(nativeElement, info);

            this._registerGlobalListeners(info);

            return info.subject;
          }
        }, {
          key: "stopMonitoring",
          value: function stopMonitoring(element) {
            var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element);

            var elementInfo = this._elementInfo.get(nativeElement);

            if (elementInfo) {
              elementInfo.subject.complete();

              this._setClasses(nativeElement);

              this._elementInfo["delete"](nativeElement);

              this._removeGlobalListeners(elementInfo);
            }
          }
        }, {
          key: "focusVia",
          value: function focusVia(element, origin, options) {
            var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element);

            this._setOriginForCurrentEventQueue(origin); // `focus` isn't available on the server


            if (typeof nativeElement.focus === 'function') {
              // Cast the element to `any`, because the TS typings don't have the `options` parameter yet.
              nativeElement.focus(options);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this15 = this;

            this._elementInfo.forEach(function (_info, element) {
              return _this15.stopMonitoring(element);
            });
          }
          /** Access injected document if available or fallback to global document reference */

        }, {
          key: "_getDocument",
          value: function _getDocument() {
            return this._document || document;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            return doc.defaultView || window;
          }
        }, {
          key: "_toggleClass",
          value: function _toggleClass(element, className, shouldSet) {
            if (shouldSet) {
              element.classList.add(className);
            } else {
              element.classList.remove(className);
            }
          }
        }, {
          key: "_getFocusOrigin",
          value: function _getFocusOrigin(event) {
            // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
            // 1) The window has just regained focus, in which case we want to restore the focused state of
            //    the element from before the window blurred.
            // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
            // 3) The element was programmatically focused, in which case we should mark the origin as
            //    'program'.
            if (this._origin) {
              return this._origin;
            }

            if (this._windowFocused && this._lastFocusOrigin) {
              return this._lastFocusOrigin;
            } else if (this._wasCausedByTouch(event)) {
              return 'touch';
            } else {
              return 'program';
            }
          }
          /**
           * Sets the focus classes on the element based on the given focus origin.
           * @param element The element to update the classes on.
           * @param origin The focus origin.
           */

        }, {
          key: "_setClasses",
          value: function _setClasses(element, origin) {
            this._toggleClass(element, 'cdk-focused', !!origin);

            this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');

            this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');

            this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');

            this._toggleClass(element, 'cdk-program-focused', origin === 'program');
          }
          /**
           * Sets the origin and schedules an async function to clear it at the end of the event queue.
           * If the detection mode is 'eventual', the origin is never cleared.
           * @param origin The origin to set.
           */

        }, {
          key: "_setOriginForCurrentEventQueue",
          value: function _setOriginForCurrentEventQueue(origin) {
            var _this16 = this;

            this._ngZone.runOutsideAngular(function () {
              _this16._origin = origin;

              if (_this16._detectionMode === 0
              /* IMMEDIATE */
              ) {
                  // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
                  // tick after the interaction event fired. To ensure the focus origin is always correct,
                  // the focus origin will be determined at the beginning of the next tick.
                  _this16._originTimeoutId = setTimeout(function () {
                    return _this16._origin = null;
                  }, 1);
                }
            });
          }
          /**
           * Checks whether the given focus event was caused by a touchstart event.
           * @param event The focus event to check.
           * @returns Whether the event was caused by a touch.
           */

        }, {
          key: "_wasCausedByTouch",
          value: function _wasCausedByTouch(event) {
            // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
            // Consider the following dom structure:
            //
            // <div #parent tabindex="0" cdkFocusClasses>
            //   <div #child (click)="#parent.focus()"></div>
            // </div>
            //
            // If the user touches the #child element and the #parent is programmatically focused as a
            // result, this code will still consider it to have been caused by the touch event and will
            // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
            // relatively small edge-case that can be worked around by using
            // focusVia(parentEl, 'program') to focus the parent element.
            //
            // If we decide that we absolutely must handle this case correctly, we can do so by listening
            // for the first focus event after the touchstart, and then the first blur event after that
            // focus event. When that blur event fires we know that whatever follows is not a result of the
            // touchstart.
            var focusTarget = getTarget(event);
            return this._lastTouchTarget instanceof Node && focusTarget instanceof Node && (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
          }
          /**
           * Handles focus events on a registered element.
           * @param event The focus event.
           * @param element The monitored element.
           */

        }, {
          key: "_onFocus",
          value: function _onFocus(event, element) {
            // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
            // focus event affecting the monitored element. If we want to use the origin of the first event
            // instead we should check for the cdk-focused class here and return if the element already has
            // it. (This only matters for elements that have includesChildren = true).
            // If we are not counting child-element-focus as focused, make sure that the event target is the
            // monitored element itself.
            var elementInfo = this._elementInfo.get(element);

            if (!elementInfo || !elementInfo.checkChildren && element !== getTarget(event)) {
              return;
            }

            var origin = this._getFocusOrigin(event);

            this._setClasses(element, origin);

            this._emitOrigin(elementInfo.subject, origin);

            this._lastFocusOrigin = origin;
          }
          /**
           * Handles blur events on a registered element.
           * @param event The blur event.
           * @param element The monitored element.
           */

        }, {
          key: "_onBlur",
          value: function _onBlur(event, element) {
            // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
            // order to focus another child of the monitored element.
            var elementInfo = this._elementInfo.get(element);

            if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
              return;
            }

            this._setClasses(element);

            this._emitOrigin(elementInfo.subject, null);
          }
        }, {
          key: "_emitOrigin",
          value: function _emitOrigin(subject, origin) {
            this._ngZone.run(function () {
              return subject.next(origin);
            });
          }
        }, {
          key: "_registerGlobalListeners",
          value: function _registerGlobalListeners(elementInfo) {
            var _this17 = this;

            if (!this._platform.isBrowser) {
              return;
            }

            var rootNode = elementInfo.rootNode;
            var rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;

            if (!rootNodeFocusListeners) {
              this._ngZone.runOutsideAngular(function () {
                rootNode.addEventListener('focus', _this17._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                rootNode.addEventListener('blur', _this17._rootNodeFocusAndBlurListener, captureEventListenerOptions);
              });
            }

            this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1); // Register global listeners when first element is monitored.


            if (++this._monitoredElementCount === 1) {
              // Note: we listen to events in the capture phase so we
              // can detect them even if the user stops propagation.
              this._ngZone.runOutsideAngular(function () {
                var document = _this17._getDocument();

                var window = _this17._getWindow();

                document.addEventListener('keydown', _this17._documentKeydownListener, captureEventListenerOptions);
                document.addEventListener('mousedown', _this17._documentMousedownListener, captureEventListenerOptions);
                document.addEventListener('touchstart', _this17._documentTouchstartListener, captureEventListenerOptions);
                window.addEventListener('focus', _this17._windowFocusListener);
              });
            }
          }
        }, {
          key: "_removeGlobalListeners",
          value: function _removeGlobalListeners(elementInfo) {
            var rootNode = elementInfo.rootNode;

            if (this._rootNodeFocusListenerCount.has(rootNode)) {
              var rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);

              if (rootNodeFocusListeners > 1) {
                this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
              } else {
                rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);

                this._rootNodeFocusListenerCount["delete"](rootNode);
              }
            } // Unregister global listeners when last element is unmonitored.


            if (! --this._monitoredElementCount) {
              var _document2 = this._getDocument();

              var _window = this._getWindow();

              _document2.removeEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);

              _document2.removeEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);

              _document2.removeEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);

              _window.removeEventListener('focus', this._windowFocusListener); // Clear timeouts for all potentially pending timeouts to prevent the leaks.


              clearTimeout(this._windowFocusTimeoutId);
              clearTimeout(this._touchTimeoutId);
              clearTimeout(this._originTimeoutId);
            }
          }
        }]);

        return FocusMonitor;
      }();

      FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
        return new (t || FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
      };

      FocusMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function FocusMonitor_Factory() {
          return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
        },
        token: FocusMonitor,
        providedIn: "root"
      });

      FocusMonitor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusMonitor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
            }]
          }];
        }, null);
      })();
      /** Gets the target of an event, accounting for Shadow DOM. */


      function getTarget(event) {
        // If an event is bound outside the Shadow DOM, the `event.target` will
        // point to the shadow root so we have to use `composedPath` instead.
        return event.composedPath ? event.composedPath()[0] : event.target;
      }
      /**
       * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
       * programmatically) and adds corresponding classes to the element.
       *
       * There are two variants of this directive:
       * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
       *    focused.
       * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
       */


      var CdkMonitorFocus = /*#__PURE__*/function () {
        function CdkMonitorFocus(_elementRef, _focusMonitor) {
          _classCallCheck(this, CdkMonitorFocus);

          this._elementRef = _elementRef;
          this._focusMonitor = _focusMonitor;
          this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(CdkMonitorFocus, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this18 = this;

            var element = this._elementRef.nativeElement;
            this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(function (origin) {
              return _this18.cdkFocusChange.emit(origin);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);

            if (this._monitorSubscription) {
              this._monitorSubscription.unsubscribe();
            }
          }
        }]);

        return CdkMonitorFocus;
      }();

      CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
        return new (t || CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusMonitor));
      };

      CdkMonitorFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkMonitorFocus,
        selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
        outputs: {
          cdkFocusChange: "cdkFocusChange"
        }
      });

      CdkMonitorFocus.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: FocusMonitor
        }];
      };

      CdkMonitorFocus.propDecorators = {
        cdkFocusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkMonitorFocus, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: FocusMonitor
          }];
        }, {
          cdkFocusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** CSS class applied to the document body when in black-on-white high-contrast mode. */


      var BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
      /** CSS class applied to the document body when in white-on-black high-contrast mode. */

      var WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
      /** CSS class applied to the document body when in high-contrast mode. */

      var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
      /**
       * Service to determine whether the browser is currently in a high-contrast-mode environment.
       *
       * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
       * changes the appearance of all applications, including web applications, to dramatically increase
       * contrast.
       *
       * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
       * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
       * browser extension.
       */

      var HighContrastModeDetector = /*#__PURE__*/function () {
        function HighContrastModeDetector(_platform, document) {
          _classCallCheck(this, HighContrastModeDetector);

          this._platform = _platform;
          this._document = document;
        }
        /** Gets the current high-contrast-mode for the page. */


        _createClass(HighContrastModeDetector, [{
          key: "getHighContrastMode",
          value: function getHighContrastMode() {
            if (!this._platform.isBrowser) {
              return 0
              /* NONE */
              ;
            } // Create a test element with an arbitrary background-color that is neither black nor
            // white; high-contrast mode will coerce the color to either black or white. Also ensure that
            // appending the test element to the DOM does not affect layout by absolutely positioning it


            var testElement = this._document.createElement('div');

            testElement.style.backgroundColor = 'rgb(1,2,3)';
            testElement.style.position = 'absolute';

            this._document.body.appendChild(testElement); // Get the computed style for the background color, collapsing spaces to normalize between
            // browsers. Once we get this color, we no longer need the test element. Access the `window`
            // via the document so we can fake it in tests. Note that we have extra null checks, because
            // this logic will likely run during app bootstrap and throwing can break the entire app.


            var documentWindow = this._document.defaultView || window;
            var computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
            var computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');

            this._document.body.removeChild(testElement);

            switch (computedColor) {
              case 'rgb(0,0,0)':
                return 2
                /* WHITE_ON_BLACK */
                ;

              case 'rgb(255,255,255)':
                return 1
                /* BLACK_ON_WHITE */
                ;
            }

            return 0
            /* NONE */
            ;
          }
          /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */

        }, {
          key: "_applyBodyHighContrastModeCssClasses",
          value: function _applyBodyHighContrastModeCssClasses() {
            if (this._platform.isBrowser && this._document.body) {
              var bodyClasses = this._document.body.classList; // IE11 doesn't support `classList` operations with multiple arguments

              bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
              bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
              bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
              var mode = this.getHighContrastMode();

              if (mode === 1
              /* BLACK_ON_WHITE */
              ) {
                  bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                  bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
                } else if (mode === 2
              /* WHITE_ON_BLACK */
              ) {
                  bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                  bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
                }
            }
          }
        }]);

        return HighContrastModeDetector;
      }();

      HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) {
        return new (t || HighContrastModeDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      };

      HighContrastModeDetector.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function HighContrastModeDetector_Factory() {
          return new HighContrastModeDetector(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
        },
        token: HighContrastModeDetector,
        providedIn: "root"
      });

      HighContrastModeDetector.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HighContrastModeDetector, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var A11yModule = function A11yModule(highContrastModeDetector) {
        _classCallCheck(this, A11yModule);

        highContrastModeDetector._applyBodyHighContrastModeCssClasses();
      };

      A11yModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: A11yModule
      });
      A11yModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function A11yModule_Factory(t) {
          return new (t || A11yModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HighContrastModeDetector));
        },
        imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]]]
      });

      A11yModule.ctorParameters = function () {
        return [{
          type: HighContrastModeDetector
        }];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](A11yModule, {
          declarations: function declarations() {
            return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
          },
          imports: function imports() {
            return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]];
          },
          exports: function exports() {
            return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](A11yModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]],
            declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
            exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
          }]
        }], function () {
          return [{
            type: HighContrastModeDetector
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=a11y.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js ***!
      \*****************************************************************/

    /*! exports provided: BidiModule, DIR_DOCUMENT, Dir, Directionality, ɵangular_material_src_cdk_bidi_bidi_a */

    /***/
    function node_modulesAngularCdk__ivy_ngcc__Fesm2015BidiJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BidiModule", function () {
        return BidiModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function () {
        return DIR_DOCUMENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Dir", function () {
        return Dir;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Directionality", function () {
        return Directionality;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_bidi_bidi_a", function () {
        return DIR_DOCUMENT_FACTORY;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token used to inject the document into Directionality.
       * This is used so that the value can be faked in tests.
       *
       * We can't use the real document in tests because changing the real `dir` causes geometry-based
       * tests in Safari to fail.
       *
       * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
       * themselves use things like `querySelector` in test code.
       *
       * This token is defined in a separate file from Directionality as a workaround for
       * https://github.com/angular/angular/issues/22559
       *
       * @docs-private
       */


      var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cdk-dir-doc', {
        providedIn: 'root',
        factory: DIR_DOCUMENT_FACTORY
      });
      /** @docs-private */

      function DIR_DOCUMENT_FACTORY() {
        return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The directionality (LTR / RTL) context for the application (or a subtree of it).
       * Exposes the current direction and a stream of direction changes.
       */


      var Directionality = /*#__PURE__*/function () {
        function Directionality(_document) {
          _classCallCheck(this, Directionality);

          /** The current 'ltr' or 'rtl' value. */
          this.value = 'ltr';
          /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

          if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            var bodyDir = _document.body ? _document.body.dir : null;
            var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            var value = bodyDir || htmlDir;
            this.value = value === 'ltr' || value === 'rtl' ? value : 'ltr';
          }
        }

        _createClass(Directionality, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.change.complete();
          }
        }]);

        return Directionality;
      }();

      Directionality.ɵfac = function Directionality_Factory(t) {
        return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8));
      };

      Directionality.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function Directionality_Factory() {
          return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DIR_DOCUMENT, 8));
        },
        token: Directionality,
        providedIn: "root"
      });

      Directionality.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [DIR_DOCUMENT]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Directionality, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [DIR_DOCUMENT]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Directive to listen for changes of direction of part of the DOM.
       *
       * Provides itself as Directionality such that descendant directives only need to ever inject
       * Directionality to get the closest direction.
       */


      var Dir = /*#__PURE__*/function () {
        function Dir() {
          _classCallCheck(this, Dir);

          /** Normalized direction that accounts for invalid/unsupported values. */
          this._dir = 'ltr';
          /** Whether the `value` has been set to its initial value. */

          this._isInitialized = false;
          /** Event emitted when the direction changes. */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /** @docs-private */


        _createClass(Dir, [{
          key: "ngAfterContentInit",

          /** Initialize once default value has been set. */
          value: function ngAfterContentInit() {
            this._isInitialized = true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.change.complete();
          }
        }, {
          key: "dir",
          get: function get() {
            return this._dir;
          },
          set: function set(value) {
            var old = this._dir;
            var normalizedValue = value ? value.toLowerCase() : value;
            this._rawDir = value;
            this._dir = normalizedValue === 'ltr' || normalizedValue === 'rtl' ? normalizedValue : 'ltr';

            if (old !== this._dir && this._isInitialized) {
              this.change.emit(this._dir);
            }
          }
          /** Current layout direction of the element. */

        }, {
          key: "value",
          get: function get() {
            return this.dir;
          }
        }]);

        return Dir;
      }();

      Dir.ɵfac = function Dir_Factory(t) {
        return new (t || Dir)();
      };

      Dir.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: Dir,
        selectors: [["", "dir", ""]],
        hostVars: 1,
        hostBindings: function Dir_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
          }
        },
        inputs: {
          dir: "dir"
        },
        outputs: {
          change: "dirChange"
        },
        exportAs: ["dir"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: Directionality,
          useExisting: Dir
        }])]
      });
      Dir.propDecorators = {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['dirChange']
        }],
        dir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dir, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[dir]',
            providers: [{
              provide: Directionality,
              useExisting: Dir
            }],
            host: {
              '[attr.dir]': '_rawDir'
            },
            exportAs: 'dir'
          }]
        }], function () {
          return [];
        }, {
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['dirChange']
          }],
          dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var BidiModule = function BidiModule() {
        _classCallCheck(this, BidiModule);
      };

      BidiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BidiModule
      });
      BidiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BidiModule_Factory(t) {
          return new (t || BidiModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BidiModule, {
          declarations: [Dir],
          exports: [Dir]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidiModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [Dir],
            declarations: [Dir]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=bidi.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js ***!
      \*********************************************************************/

    /*! exports provided: A, ALT, APOSTROPHE, AT_SIGN, B, BACKSLASH, BACKSPACE, C, CAPS_LOCK, CLOSE_SQUARE_BRACKET, COMMA, CONTEXT_MENU, CONTROL, D, DASH, DELETE, DOWN_ARROW, E, EIGHT, END, ENTER, EQUALS, ESCAPE, F, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FF_EQUALS, FF_MINUS, FF_MUTE, FF_SEMICOLON, FF_VOLUME_DOWN, FF_VOLUME_UP, FIRST_MEDIA, FIVE, FOUR, G, H, HOME, I, INSERT, J, K, L, LAST_MEDIA, LEFT_ARROW, M, MAC_ENTER, MAC_META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, META, MUTE, N, NINE, NUMPAD_DIVIDE, NUMPAD_EIGHT, NUMPAD_FIVE, NUMPAD_FOUR, NUMPAD_MINUS, NUMPAD_MULTIPLY, NUMPAD_NINE, NUMPAD_ONE, NUMPAD_PERIOD, NUMPAD_PLUS, NUMPAD_SEVEN, NUMPAD_SIX, NUMPAD_THREE, NUMPAD_TWO, NUMPAD_ZERO, NUM_CENTER, NUM_LOCK, O, ONE, OPEN_SQUARE_BRACKET, P, PAGE_DOWN, PAGE_UP, PAUSE, PLUS_SIGN, PRINT_SCREEN, Q, QUESTION_MARK, R, RIGHT_ARROW, S, SCROLL_LOCK, SEMICOLON, SEVEN, SHIFT, SINGLE_QUOTE, SIX, SLASH, SPACE, T, TAB, THREE, TILDE, TWO, U, UP_ARROW, V, VOLUME_DOWN, VOLUME_UP, W, X, Y, Z, ZERO, hasModifierKey */

    /***/
    function node_modulesAngularCdk__ivy_ngcc__Fesm2015KeycodesJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "A", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ALT", function () {
        return ALT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function () {
        return APOSTROPHE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AT_SIGN", function () {
        return AT_SIGN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "B", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BACKSLASH", function () {
        return BACKSLASH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BACKSPACE", function () {
        return BACKSPACE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function () {
        return CAPS_LOCK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function () {
        return CLOSE_SQUARE_BRACKET;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COMMA", function () {
        return COMMA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function () {
        return CONTEXT_MENU;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONTROL", function () {
        return CONTROL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "D", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DASH", function () {
        return DASH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DELETE", function () {
        return DELETE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function () {
        return DOWN_ARROW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "E", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EIGHT", function () {
        return EIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "END", function () {
        return END;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ENTER", function () {
        return ENTER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EQUALS", function () {
        return EQUALS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ESCAPE", function () {
        return ESCAPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F1", function () {
        return F1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F10", function () {
        return F10;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F11", function () {
        return F11;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F12", function () {
        return F12;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F2", function () {
        return F2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F3", function () {
        return F3;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F4", function () {
        return F4;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F5", function () {
        return F5;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F6", function () {
        return F6;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F7", function () {
        return F7;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F8", function () {
        return F8;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F9", function () {
        return F9;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function () {
        return FF_EQUALS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_MINUS", function () {
        return FF_MINUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_MUTE", function () {
        return FF_MUTE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function () {
        return FF_SEMICOLON;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function () {
        return FF_VOLUME_DOWN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function () {
        return FF_VOLUME_UP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function () {
        return FIRST_MEDIA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FIVE", function () {
        return FIVE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FOUR", function () {
        return FOUR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "G", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "H", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HOME", function () {
        return HOME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "INSERT", function () {
        return INSERT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "J", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "K", function () {
        return K;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "L", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function () {
        return LAST_MEDIA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function () {
        return LEFT_ARROW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "M", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function () {
        return MAC_ENTER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAC_META", function () {
        return MAC_META;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function () {
        return MAC_WK_CMD_LEFT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function () {
        return MAC_WK_CMD_RIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "META", function () {
        return META;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MUTE", function () {
        return MUTE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "N", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NINE", function () {
        return NINE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function () {
        return NUMPAD_DIVIDE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function () {
        return NUMPAD_EIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function () {
        return NUMPAD_FIVE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function () {
        return NUMPAD_FOUR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function () {
        return NUMPAD_MINUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function () {
        return NUMPAD_MULTIPLY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function () {
        return NUMPAD_NINE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function () {
        return NUMPAD_ONE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function () {
        return NUMPAD_PERIOD;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function () {
        return NUMPAD_PLUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function () {
        return NUMPAD_SEVEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function () {
        return NUMPAD_SIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function () {
        return NUMPAD_THREE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function () {
        return NUMPAD_TWO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function () {
        return NUMPAD_ZERO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function () {
        return NUM_CENTER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function () {
        return NUM_LOCK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "O", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ONE", function () {
        return ONE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function () {
        return OPEN_SQUARE_BRACKET;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function () {
        return PAGE_DOWN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAGE_UP", function () {
        return PAGE_UP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAUSE", function () {
        return PAUSE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function () {
        return PLUS_SIGN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function () {
        return PRINT_SCREEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Q", function () {
        return Q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function () {
        return QUESTION_MARK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "R", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function () {
        return RIGHT_ARROW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function () {
        return SCROLL_LOCK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SEMICOLON", function () {
        return SEMICOLON;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SEVEN", function () {
        return SEVEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SHIFT", function () {
        return SHIFT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function () {
        return SINGLE_QUOTE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SIX", function () {
        return SIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SLASH", function () {
        return SLASH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SPACE", function () {
        return SPACE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "T", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TAB", function () {
        return TAB;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "THREE", function () {
        return THREE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TILDE", function () {
        return TILDE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TWO", function () {
        return TWO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "U", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UP_ARROW", function () {
        return UP_ARROW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "V", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function () {
        return VOLUME_DOWN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function () {
        return VOLUME_UP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "W", function () {
        return W;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "X", function () {
        return X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Y", function () {
        return Y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Z", function () {
        return Z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZERO", function () {
        return ZERO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasModifierKey", function () {
        return hasModifierKey;
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MAC_ENTER = 3;
      var BACKSPACE = 8;
      var TAB = 9;
      var NUM_CENTER = 12;
      var ENTER = 13;
      var SHIFT = 16;
      var CONTROL = 17;
      var ALT = 18;
      var PAUSE = 19;
      var CAPS_LOCK = 20;
      var ESCAPE = 27;
      var SPACE = 32;
      var PAGE_UP = 33;
      var PAGE_DOWN = 34;
      var END = 35;
      var HOME = 36;
      var LEFT_ARROW = 37;
      var UP_ARROW = 38;
      var RIGHT_ARROW = 39;
      var DOWN_ARROW = 40;
      var PLUS_SIGN = 43;
      var PRINT_SCREEN = 44;
      var INSERT = 45;
      var DELETE = 46;
      var ZERO = 48;
      var ONE = 49;
      var TWO = 50;
      var THREE = 51;
      var FOUR = 52;
      var FIVE = 53;
      var SIX = 54;
      var SEVEN = 55;
      var EIGHT = 56;
      var NINE = 57;
      var FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186

      var FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187

      var QUESTION_MARK = 63;
      var AT_SIGN = 64;
      var A = 65;
      var B = 66;
      var C = 67;
      var D = 68;
      var E = 69;
      var F = 70;
      var G = 71;
      var H = 72;
      var I = 73;
      var J = 74;
      var K = 75;
      var L = 76;
      var M = 77;
      var N = 78;
      var O = 79;
      var P = 80;
      var Q = 81;
      var R = 82;
      var S = 83;
      var T = 84;
      var U = 85;
      var V = 86;
      var W = 87;
      var X = 88;
      var Y = 89;
      var Z = 90;
      var META = 91; // WIN_KEY_LEFT

      var MAC_WK_CMD_LEFT = 91;
      var MAC_WK_CMD_RIGHT = 93;
      var CONTEXT_MENU = 93;
      var NUMPAD_ZERO = 96;
      var NUMPAD_ONE = 97;
      var NUMPAD_TWO = 98;
      var NUMPAD_THREE = 99;
      var NUMPAD_FOUR = 100;
      var NUMPAD_FIVE = 101;
      var NUMPAD_SIX = 102;
      var NUMPAD_SEVEN = 103;
      var NUMPAD_EIGHT = 104;
      var NUMPAD_NINE = 105;
      var NUMPAD_MULTIPLY = 106;
      var NUMPAD_PLUS = 107;
      var NUMPAD_MINUS = 109;
      var NUMPAD_PERIOD = 110;
      var NUMPAD_DIVIDE = 111;
      var F1 = 112;
      var F2 = 113;
      var F3 = 114;
      var F4 = 115;
      var F5 = 116;
      var F6 = 117;
      var F7 = 118;
      var F8 = 119;
      var F9 = 120;
      var F10 = 121;
      var F11 = 122;
      var F12 = 123;
      var NUM_LOCK = 144;
      var SCROLL_LOCK = 145;
      var FIRST_MEDIA = 166;
      var FF_MINUS = 173;
      var MUTE = 173; // Firefox (Gecko) fires 181 for MUTE

      var VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN

      var VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP

      var FF_MUTE = 181;
      var FF_VOLUME_DOWN = 182;
      var LAST_MEDIA = 183;
      var FF_VOLUME_UP = 183;
      var SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON

      var EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS

      var COMMA = 188;
      var DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS

      var SLASH = 191;
      var APOSTROPHE = 192;
      var TILDE = 192;
      var OPEN_SQUARE_BRACKET = 219;
      var BACKSLASH = 220;
      var CLOSE_SQUARE_BRACKET = 221;
      var SINGLE_QUOTE = 222;
      var MAC_META = 224;
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Checks whether a modifier key is pressed.
       * @param event Event to be checked.
       */

      function hasModifierKey(event) {
        for (var _len2 = arguments.length, modifiers = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          modifiers[_key2 - 1] = arguments[_key2];
        }

        if (modifiers.length) {
          return modifiers.some(function (modifier) {
            return event[modifier];
          });
        }

        return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=keycodes.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js ***!
      \**********************************************************************/

    /*! exports provided: CdkObserveContent, ContentObserver, MutationObserverFactory, ObserversModule */

    /***/
    function node_modulesAngularCdk__ivy_ngcc__Fesm2015ObserversJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkObserveContent", function () {
        return CdkObserveContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentObserver", function () {
        return ContentObserver;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MutationObserverFactory", function () {
        return MutationObserverFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObserversModule", function () {
        return ObserversModule;
      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
       * @docs-private
       */


      var MutationObserverFactory = /*#__PURE__*/function () {
        function MutationObserverFactory() {
          _classCallCheck(this, MutationObserverFactory);
        }

        _createClass(MutationObserverFactory, [{
          key: "create",
          value: function create(callback) {
            return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
          }
        }]);

        return MutationObserverFactory;
      }();

      MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
        return new (t || MutationObserverFactory)();
      };

      MutationObserverFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function MutationObserverFactory_Factory() {
          return new MutationObserverFactory();
        },
        token: MutationObserverFactory,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MutationObserverFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /** An injectable service that allows watching elements for changes to their content. */


      var ContentObserver = /*#__PURE__*/function () {
        function ContentObserver(_mutationObserverFactory) {
          _classCallCheck(this, ContentObserver);

          this._mutationObserverFactory = _mutationObserverFactory;
          /** Keeps track of the existing MutationObservers so they can be reused. */

          this._observedElements = new Map();
        }

        _createClass(ContentObserver, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this19 = this;

            this._observedElements.forEach(function (_, element) {
              return _this19._cleanupObserver(element);
            });
          }
        }, {
          key: "observe",
          value: function observe(elementOrRef) {
            var _this20 = this;

            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrRef);
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              var stream = _this20._observeElement(element);

              var subscription = stream.subscribe(observer);
              return function () {
                subscription.unsubscribe();

                _this20._unobserveElement(element);
              };
            });
          }
          /**
           * Observes the given element by using the existing MutationObserver if available, or creating a
           * new one if not.
           */

        }, {
          key: "_observeElement",
          value: function _observeElement(element) {
            if (!this._observedElements.has(element)) {
              var stream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

              var observer = this._mutationObserverFactory.create(function (mutations) {
                return stream.next(mutations);
              });

              if (observer) {
                observer.observe(element, {
                  characterData: true,
                  childList: true,
                  subtree: true
                });
              }

              this._observedElements.set(element, {
                observer: observer,
                stream: stream,
                count: 1
              });
            } else {
              this._observedElements.get(element).count++;
            }

            return this._observedElements.get(element).stream;
          }
          /**
           * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
           * observing this element.
           */

        }, {
          key: "_unobserveElement",
          value: function _unobserveElement(element) {
            if (this._observedElements.has(element)) {
              this._observedElements.get(element).count--;

              if (!this._observedElements.get(element).count) {
                this._cleanupObserver(element);
              }
            }
          }
          /** Clean up the underlying MutationObserver for the specified element. */

        }, {
          key: "_cleanupObserver",
          value: function _cleanupObserver(element) {
            if (this._observedElements.has(element)) {
              var _this$_observedElemen = this._observedElements.get(element),
                  observer = _this$_observedElemen.observer,
                  stream = _this$_observedElemen.stream;

              if (observer) {
                observer.disconnect();
              }

              stream.complete();

              this._observedElements["delete"](element);
            }
          }
        }]);

        return ContentObserver;
      }();

      ContentObserver.ɵfac = function ContentObserver_Factory(t) {
        return new (t || ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MutationObserverFactory));
      };

      ContentObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ContentObserver_Factory() {
          return new ContentObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MutationObserverFactory));
        },
        token: ContentObserver,
        providedIn: "root"
      });

      ContentObserver.ctorParameters = function () {
        return [{
          type: MutationObserverFactory
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentObserver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: MutationObserverFactory
          }];
        }, null);
      })();
      /**
       * Directive that triggers a callback whenever the content of
       * its associated element has changed.
       */


      var CdkObserveContent = /*#__PURE__*/function () {
        function CdkObserveContent(_contentObserver, _elementRef, _ngZone) {
          _classCallCheck(this, CdkObserveContent);

          this._contentObserver = _contentObserver;
          this._elementRef = _elementRef;
          this._ngZone = _ngZone;
          /** Event emitted for each change in the element's content. */

          this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._disabled = false;
          this._currentSubscription = null;
        }
        /**
         * Whether observing content is disabled. This option can be used
         * to disconnect the underlying MutationObserver until it is needed.
         */


        _createClass(CdkObserveContent, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            if (!this._currentSubscription && !this.disabled) {
              this._subscribe();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._unsubscribe();
          }
        }, {
          key: "_subscribe",
          value: function _subscribe() {
            var _this21 = this;

            this._unsubscribe();

            var stream = this._contentObserver.observe(this._elementRef); // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
            // Consider brining it back inside the zone next time we're making breaking changes.
            // Bringing it back inside can cause things like infinite change detection loops and changed
            // after checked errors if people's code isn't handling it properly.


            this._ngZone.runOutsideAngular(function () {
              _this21._currentSubscription = (_this21.debounce ? stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(_this21.debounce)) : stream).subscribe(_this21.event);
            });
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            if (this._currentSubscription) {
              this._currentSubscription.unsubscribe();
            }
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
            this._disabled ? this._unsubscribe() : this._subscribe();
          }
          /** Debounce interval for emitting the changes. */

        }, {
          key: "debounce",
          get: function get() {
            return this._debounce;
          },
          set: function set(value) {
            this._debounce = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);

            this._subscribe();
          }
        }]);

        return CdkObserveContent;
      }();

      CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
        return new (t || CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      CdkObserveContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkObserveContent,
        selectors: [["", "cdkObserveContent", ""]],
        inputs: {
          disabled: ["cdkObserveContentDisabled", "disabled"],
          debounce: "debounce"
        },
        outputs: {
          event: "cdkObserveContent"
        },
        exportAs: ["cdkObserveContent"]
      });

      CdkObserveContent.ctorParameters = function () {
        return [{
          type: ContentObserver
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CdkObserveContent.propDecorators = {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['cdkObserveContent']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkObserveContentDisabled']
        }],
        debounce: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkObserveContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkObserveContent]',
            exportAs: 'cdkObserveContent'
          }]
        }], function () {
          return [{
            type: ContentObserver
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, {
          event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['cdkObserveContent']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkObserveContentDisabled']
          }],
          debounce: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      var ObserversModule = function ObserversModule() {
        _classCallCheck(this, ObserversModule);
      };

      ObserversModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ObserversModule
      });
      ObserversModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function ObserversModule_Factory(t) {
          return new (t || ObserversModule)();
        },
        providers: [MutationObserverFactory]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ObserversModule, {
          declarations: [CdkObserveContent],
          exports: [CdkObserveContent]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ObserversModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [CdkObserveContent],
            declarations: [CdkObserveContent],
            providers: [MutationObserverFactory]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=observers.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js ***!
      \*********************************************************************/

    /*! exports provided: Platform, PlatformModule, _getShadowRoot, _supportsShadowDom, getRtlScrollAxisType, getSupportedInputTypes, normalizePassiveListenerOptions, supportsPassiveEventListeners, supportsScrollBehavior */

    /***/
    function node_modulesAngularCdk__ivy_ngcc__Fesm2015PlatformJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Platform", function () {
        return Platform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlatformModule", function () {
        return PlatformModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_getShadowRoot", function () {
        return _getShadowRoot;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function () {
        return _supportsShadowDom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function () {
        return getRtlScrollAxisType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function () {
        return getSupportedInputTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function () {
        return normalizePassiveListenerOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function () {
        return supportsPassiveEventListeners;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function () {
        return supportsScrollBehavior;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Whether the current platform supports the V8 Break Iterator. The V8 check
      // is necessary to detect all Blink based browsers.


      var hasV8BreakIterator; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
      // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
      // the consumer is providing a polyfilled `Map`. See:
      // https://github.com/Microsoft/ChakraCore/issues/3189
      // https://github.com/angular/components/issues/15687

      try {
        hasV8BreakIterator = typeof Intl !== 'undefined' && Intl.v8BreakIterator;
      } catch (_a) {
        hasV8BreakIterator = false;
      }
      /**
       * Service to detect the current platform by comparing the userAgent strings and
       * checking browser-specific global properties.
       */


      var Platform = function Platform(_platformId) {
        _classCallCheck(this, Platform);

        this._platformId = _platformId; // We want to use the Angular platform check because if the Document is shimmed
        // without the navigator, the following checks will fail. This is preferred because
        // sometimes the Document may be shimmed without the user's knowledge or intention

        /** Whether the Angular application is being rendered in the browser. */

        this.isBrowser = this._platformId ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /** Whether the current browser is Microsoft Edge. */

        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /** Whether the current rendering engine is Microsoft Trident. */

        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent); // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.

        /** Whether the current rendering engine is Blink. */

        this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT; // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.

        /** Whether the current rendering engine is WebKit. */

        this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /** Whether the current platform is Apple iOS. */

        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window); // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.

        /** Whether the current browser is Firefox. */

        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /** Whether the current platform is Android. */
        // Trident on mobile adds the android platform to the userAgent to trick detections.

        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT; // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.

        /** Whether the current browser is Safari. */

        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
      };

      Platform.ɵfac = function Platform_Factory(t) {
        return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      Platform.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function Platform_Factory() {
          return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
        },
        token: Platform,
        providedIn: "root"
      });

      Platform.ctorParameters = function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Platform, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var PlatformModule = function PlatformModule() {
        _classCallCheck(this, PlatformModule);
      };

      PlatformModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PlatformModule
      });
      PlatformModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PlatformModule_Factory(t) {
          return new (t || PlatformModule)();
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{}]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Cached result Set of input types support by the current browser. */


      var supportedInputTypes;
      /** Types of `<input>` that *might* be supported. */

      var candidateInputTypes = [// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
      // first changing it to something else:
      // The specified value "" does not conform to the required format.
      // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
      'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
      /** @returns The input types supported by this browser. */

      function getSupportedInputTypes() {
        // Result is cached.
        if (supportedInputTypes) {
          return supportedInputTypes;
        } // We can't check if an input type is not supported until we're on the browser, so say that
        // everything is supported when not on the browser. We don't use `Platform` here since it's
        // just a helper function and can't inject it.


        if (typeof document !== 'object' || !document) {
          supportedInputTypes = new Set(candidateInputTypes);
          return supportedInputTypes;
        }

        var featureTestInput = document.createElement('input');
        supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
          featureTestInput.setAttribute('type', value);
          return featureTestInput.type === value;
        }));
        return supportedInputTypes;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Cached result of whether the user's browser supports passive event listeners. */


      var supportsPassiveEvents;
      /**
       * Checks whether the user's browser supports passive event listeners.
       * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
       */

      function supportsPassiveEventListeners() {
        if (supportsPassiveEvents == null && typeof window !== 'undefined') {
          try {
            window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
              get: function get() {
                return supportsPassiveEvents = true;
              }
            }));
          } finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
          }
        }

        return supportsPassiveEvents;
      }
      /**
       * Normalizes an `AddEventListener` object to something that can be passed
       * to `addEventListener` on any browser, no matter whether it supports the
       * `options` parameter.
       * @param options Object to be normalized.
       */


      function normalizePassiveListenerOptions(options) {
        return supportsPassiveEventListeners() ? options : !!options.capture;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */


      var rtlScrollAxisType;
      /** Cached result of the check that indicates whether the browser supports scroll behaviors. */

      var scrollBehaviorSupported;
      /** Check whether the browser supports scroll behaviors. */

      function supportsScrollBehavior() {
        if (scrollBehaviorSupported == null) {
          // If we're not in the browser, it can't be supported.
          if (typeof document !== 'object' || !document) {
            scrollBehaviorSupported = false;
          } // If the element can have a `scrollBehavior` style, we can be sure that it's supported.


          if ('scrollBehavior' in document.documentElement.style) {
            scrollBehaviorSupported = true;
          } else {
            // At this point we have 3 possibilities: `scrollTo` isn't supported at all, it's
            // supported but it doesn't handle scroll behavior, or it has been polyfilled.
            var scrollToFunction = Element.prototype.scrollTo;

            if (scrollToFunction) {
              // We can detect if the function has been polyfilled by calling `toString` on it. Native
              // functions are obfuscated using `[native code]`, whereas if it was overwritten we'd get
              // the actual function source. Via https://davidwalsh.name/detect-native-function. Consider
              // polyfilled functions as supporting scroll behavior.
              scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
            } else {
              scrollBehaviorSupported = false;
            }
          }
        }

        return scrollBehaviorSupported;
      }
      /**
       * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
       * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
       */


      function getRtlScrollAxisType() {
        // We can't check unless we're on the browser. Just assume 'normal' if we're not.
        if (typeof document !== 'object' || !document) {
          return 0
          /* NORMAL */
          ;
        }

        if (rtlScrollAxisType == null) {
          // Create a 1px wide scrolling container and a 2px wide content element.
          var scrollContainer = document.createElement('div');
          var containerStyle = scrollContainer.style;
          scrollContainer.dir = 'rtl';
          containerStyle.width = '1px';
          containerStyle.overflow = 'auto';
          containerStyle.visibility = 'hidden';
          containerStyle.pointerEvents = 'none';
          containerStyle.position = 'absolute';
          var content = document.createElement('div');
          var contentStyle = content.style;
          contentStyle.width = '2px';
          contentStyle.height = '1px';
          scrollContainer.appendChild(content);
          document.body.appendChild(scrollContainer);
          rtlScrollAxisType = 0
          /* NORMAL */
          ; // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
          // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
          // dealing with one of the other two types of browsers.

          if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? 1
            /* NEGATED */
            : 2
            /* INVERTED */
            ;
          }

          scrollContainer.parentNode.removeChild(scrollContainer);
        }

        return rtlScrollAxisType;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var shadowDomIsSupported;
      /** Checks whether the user's browser support Shadow DOM. */

      function _supportsShadowDom() {
        if (shadowDomIsSupported == null) {
          var head = typeof document !== 'undefined' ? document.head : null;
          shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
        }

        return shadowDomIsSupported;
      }
      /** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */


      function _getShadowRoot(element) {
        if (_supportsShadowDom()) {
          var rootNode = element.getRootNode ? element.getRootNode() : null; // Note that this should be caught by `_supportsShadowDom`, but some
          // teams have been able to hit this code path on unsupported browsers.

          if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
            return rootNode;
          }
        }

        return null;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=platform.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js ***!
      \***********************************************************************/

    /*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */

    /***/
    function node_modulesAngularCdk__ivy_ngcc__Fesm2015TextFieldJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function () {
        return AutofillMonitor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAutofill", function () {
        return CdkAutofill;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function () {
        return CdkTextareaAutosize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextFieldModule", function () {
        return TextFieldModule;
      });
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Options to pass to the animationstart listener. */


      var listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /**
       * An injectable service that can be used to monitor the autofill state of an input.
       * Based on the following blog post:
       * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
       */

      var AutofillMonitor = /*#__PURE__*/function () {
        function AutofillMonitor(_platform, _ngZone) {
          _classCallCheck(this, AutofillMonitor);

          this._platform = _platform;
          this._ngZone = _ngZone;
          this._monitoredElements = new Map();
        }

        _createClass(AutofillMonitor, [{
          key: "monitor",
          value: function monitor(elementOrRef) {
            var _this22 = this;

            if (!this._platform.isBrowser) {
              return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }

            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);

            var info = this._monitoredElements.get(element);

            if (info) {
              return info.subject;
            }

            var result = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            var cssClass = 'cdk-text-field-autofilled';

            var listener = function listener(event) {
              // Animation events fire on initial element render, we check for the presence of the autofill
              // CSS class to make sure this is a real change in state, not just the initial render before
              // we fire off events.
              if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
                element.classList.add(cssClass);

                _this22._ngZone.run(function () {
                  return result.next({
                    target: event.target,
                    isAutofilled: true
                  });
                });
              } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
                element.classList.remove(cssClass);

                _this22._ngZone.run(function () {
                  return result.next({
                    target: event.target,
                    isAutofilled: false
                  });
                });
              }
            };

            this._ngZone.runOutsideAngular(function () {
              element.addEventListener('animationstart', listener, listenerOptions);
              element.classList.add('cdk-text-field-autofill-monitored');
            });

            this._monitoredElements.set(element, {
              subject: result,
              unlisten: function unlisten() {
                element.removeEventListener('animationstart', listener, listenerOptions);
              }
            });

            return result;
          }
        }, {
          key: "stopMonitoring",
          value: function stopMonitoring(elementOrRef) {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);

            var info = this._monitoredElements.get(element);

            if (info) {
              info.unlisten();
              info.subject.complete();
              element.classList.remove('cdk-text-field-autofill-monitored');
              element.classList.remove('cdk-text-field-autofilled');

              this._monitoredElements["delete"](element);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this23 = this;

            this._monitoredElements.forEach(function (_info, element) {
              return _this23.stopMonitoring(element);
            });
          }
        }]);

        return AutofillMonitor;
      }();

      AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) {
        return new (t || AutofillMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      AutofillMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function AutofillMonitor_Factory() {
          return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
        },
        token: AutofillMonitor,
        providedIn: "root"
      });

      AutofillMonitor.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutofillMonitor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, null);
      })();
      /** A directive that can be used to monitor the autofill state of an input. */


      var CdkAutofill = /*#__PURE__*/function () {
        function CdkAutofill(_elementRef, _autofillMonitor) {
          _classCallCheck(this, CdkAutofill);

          this._elementRef = _elementRef;
          this._autofillMonitor = _autofillMonitor;
          /** Emits when the autofill state of the element changes. */

          this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(CdkAutofill, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            this._autofillMonitor.monitor(this._elementRef).subscribe(function (event) {
              return _this24.cdkAutofill.emit(event);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._autofillMonitor.stopMonitoring(this._elementRef);
          }
        }]);

        return CdkAutofill;
      }();

      CdkAutofill.ɵfac = function CdkAutofill_Factory(t) {
        return new (t || CdkAutofill)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AutofillMonitor));
      };

      CdkAutofill.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkAutofill,
        selectors: [["", "cdkAutofill", ""]],
        outputs: {
          cdkAutofill: "cdkAutofill"
        }
      });

      CdkAutofill.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: AutofillMonitor
        }];
      };

      CdkAutofill.propDecorators = {
        cdkAutofill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkAutofill, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkAutofill]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: AutofillMonitor
          }];
        }, {
          cdkAutofill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Directive to automatically resize a textarea to fit its content. */


      var CdkTextareaAutosize = /*#__PURE__*/function () {
        function CdkTextareaAutosize(_elementRef, _platform, _ngZone,
        /** @breaking-change 11.0.0 make document required */
        document) {
          _classCallCheck(this, CdkTextareaAutosize);

          this._elementRef = _elementRef;
          this._platform = _platform;
          this._ngZone = _ngZone;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this._enabled = true;
          /**
           * Value of minRows as of last resize. If the minRows has decreased, the
           * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
           * does not have the same problem because it does not affect the textarea's scrollHeight.
           */

          this._previousMinRows = -1;
          this._document = document;
          this._textareaElement = this._elementRef.nativeElement;
          this._measuringClass = _platform.FIREFOX ? 'cdk-textarea-autosize-measuring-firefox' : 'cdk-textarea-autosize-measuring';
        }
        /** Minimum amount of rows in the textarea. */


        _createClass(CdkTextareaAutosize, [{
          key: "_setMinHeight",

          /** Sets the minimum height of the textarea as determined by minRows. */
          value: function _setMinHeight() {
            var minHeight = this.minRows && this._cachedLineHeight ? "".concat(this.minRows * this._cachedLineHeight, "px") : null;

            if (minHeight) {
              this._textareaElement.style.minHeight = minHeight;
            }
          }
          /** Sets the maximum height of the textarea as determined by maxRows. */

        }, {
          key: "_setMaxHeight",
          value: function _setMaxHeight() {
            var maxHeight = this.maxRows && this._cachedLineHeight ? "".concat(this.maxRows * this._cachedLineHeight, "px") : null;

            if (maxHeight) {
              this._textareaElement.style.maxHeight = maxHeight;
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this25 = this;

            if (this._platform.isBrowser) {
              // Remember the height which we started with in case autosizing is disabled
              this._initialHeight = this._textareaElement.style.height;
              this.resizeToFitContent();

              this._ngZone.runOutsideAngular(function () {
                var window = _this25._getWindow();

                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this25._destroyed)).subscribe(function () {
                  return _this25.resizeToFitContent(true);
                });
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /**
           * Cache the height of a single-row textarea if it has not already been cached.
           *
           * We need to know how large a single "row" of a textarea is in order to apply minRows and
           * maxRows. For the initial version, we will assume that the height of a single line in the
           * textarea does not ever change.
           */

        }, {
          key: "_cacheTextareaLineHeight",
          value: function _cacheTextareaLineHeight() {
            if (this._cachedLineHeight) {
              return;
            } // Use a clone element because we have to override some styles.


            var textareaClone = this._textareaElement.cloneNode(false);

            textareaClone.rows = 1; // Use `position: absolute` so that this doesn't cause a browser layout and use
            // `visibility: hidden` so that nothing is rendered. Clear any other styles that
            // would affect the height.

            textareaClone.style.position = 'absolute';
            textareaClone.style.visibility = 'hidden';
            textareaClone.style.border = 'none';
            textareaClone.style.padding = '0';
            textareaClone.style.height = '';
            textareaClone.style.minHeight = '';
            textareaClone.style.maxHeight = ''; // In Firefox it happens that textarea elements are always bigger than the specified amount
            // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
            // As a workaround that removes the extra space for the scrollbar, we can just set overflow
            // to hidden. This ensures that there is no invalid calculation of the line height.
            // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654

            textareaClone.style.overflow = 'hidden';

            this._textareaElement.parentNode.appendChild(textareaClone);

            this._cachedLineHeight = textareaClone.clientHeight;

            this._textareaElement.parentNode.removeChild(textareaClone); // Min and max heights have to be re-calculated if the cached line height changes


            this._setMinHeight();

            this._setMaxHeight();
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this._platform.isBrowser) {
              this.resizeToFitContent();
            }
          }
          /**
           * Resize the textarea to fit its content.
           * @param force Whether to force a height recalculation. By default the height will be
           *    recalculated only if the value changed since the last call.
           */

        }, {
          key: "resizeToFitContent",
          value: function resizeToFitContent() {
            var _this26 = this;

            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            // If autosizing is disabled, just skip everything else
            if (!this._enabled) {
              return;
            }

            this._cacheTextareaLineHeight(); // If we haven't determined the line-height yet, we know we're still hidden and there's no point
            // in checking the height of the textarea.


            if (!this._cachedLineHeight) {
              return;
            }

            var textarea = this._elementRef.nativeElement;
            var value = textarea.value; // Only resize if the value or minRows have changed since these calculations can be expensive.

            if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
              return;
            }

            var placeholderText = textarea.placeholder; // Reset the textarea height to auto in order to shrink back to its default size.
            // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
            // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
            // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
            // need to be removed temporarily.

            textarea.classList.add(this._measuringClass);
            textarea.placeholder = ''; // The measuring class includes a 2px padding to workaround an issue with Chrome,
            // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).

            var height = textarea.scrollHeight - 4; // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.

            textarea.style.height = "".concat(height, "px");
            textarea.classList.remove(this._measuringClass);
            textarea.placeholder = placeholderText;

            this._ngZone.runOutsideAngular(function () {
              if (typeof requestAnimationFrame !== 'undefined') {
                requestAnimationFrame(function () {
                  return _this26._scrollToCaretPosition(textarea);
                });
              } else {
                setTimeout(function () {
                  return _this26._scrollToCaretPosition(textarea);
                });
              }
            });

            this._previousValue = value;
            this._previousMinRows = this._minRows;
          }
          /**
           * Resets the textarea to its original size
           */

        }, {
          key: "reset",
          value: function reset() {
            // Do not try to change the textarea, if the initialHeight has not been determined yet
            // This might potentially remove styles when reset() is called before ngAfterViewInit
            if (this._initialHeight !== undefined) {
              this._textareaElement.style.height = this._initialHeight;
            }
          } // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
          // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
          // can move this back into `host`.
          // tslint:disable:no-host-decorator-in-concrete

        }, {
          key: "_noopInputHandler",
          value: function _noopInputHandler() {// no-op handler that ensures we're running change detection on input events.
          }
          /** Access injected document if available or fallback to global document reference */

        }, {
          key: "_getDocument",
          value: function _getDocument() {
            return this._document || document;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            return doc.defaultView || window;
          }
          /**
           * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
           * prevent it from scrolling to the caret position. We need to re-set the selection
           * in order for it to scroll to the proper position.
           */

        }, {
          key: "_scrollToCaretPosition",
          value: function _scrollToCaretPosition(textarea) {
            var selectionStart = textarea.selectionStart,
                selectionEnd = textarea.selectionEnd;

            var document = this._getDocument(); // IE will throw an "Unspecified error" if we try to set the selection range after the
            // element has been removed from the DOM. Assert that the directive hasn't been destroyed
            // between the time we requested the animation frame and when it was executed.
            // Also note that we have to assert that the textarea is focused before we set the
            // selection range. Setting the selection range on a non-focused textarea will cause
            // it to receive focus on IE and Edge.


            if (!this._destroyed.isStopped && document.activeElement === textarea) {
              textarea.setSelectionRange(selectionStart, selectionEnd);
            }
          }
        }, {
          key: "minRows",
          get: function get() {
            return this._minRows;
          },
          set: function set(value) {
            this._minRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

            this._setMinHeight();
          }
          /** Maximum amount of rows in the textarea. */

        }, {
          key: "maxRows",
          get: function get() {
            return this._maxRows;
          },
          set: function set(value) {
            this._maxRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

            this._setMaxHeight();
          }
          /** Whether autosizing is enabled or not */

        }, {
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(value) {
            value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Only act if the actual value changed. This specifically helps to not run
            // resizeToFitContent too early (i.e. before ngAfterViewInit)

            if (this._enabled !== value) {
              (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
            }
          }
        }]);

        return CdkTextareaAutosize;
      }();

      CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) {
        return new (t || CdkTextareaAutosize)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      };

      CdkTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkTextareaAutosize,
        selectors: [["textarea", "cdkTextareaAutosize", ""]],
        hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
        hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() {
              return ctx._noopInputHandler();
            });
          }
        },
        inputs: {
          minRows: ["cdkAutosizeMinRows", "minRows"],
          maxRows: ["cdkAutosizeMaxRows", "maxRows"],
          enabled: ["cdkTextareaAutosize", "enabled"]
        },
        exportAs: ["cdkTextareaAutosize"]
      });

      CdkTextareaAutosize.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };

      CdkTextareaAutosize.propDecorators = {
        minRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAutosizeMinRows']
        }],
        maxRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAutosizeMaxRows']
        }],
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTextareaAutosize']
        }],
        _noopInputHandler: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['input']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTextareaAutosize, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'textarea[cdkTextareaAutosize]',
            exportAs: 'cdkTextareaAutosize',
            host: {
              'class': 'cdk-textarea-autosize',
              // Textarea elements that have the directive applied should have a single row by default.
              // Browsers normally show two rows by default and therefore this limits the minRows binding.
              'rows': '1'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }];
        }, {
          minRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAutosizeMinRows']
          }],
          maxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAutosizeMaxRows']
          }],
          enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkTextareaAutosize']
          }],
          // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
          // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
          // can move this back into `host`.
          // tslint:disable:no-host-decorator-in-concrete
          _noopInputHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var TextFieldModule = function TextFieldModule() {
        _classCallCheck(this, TextFieldModule);
      };

      TextFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: TextFieldModule
      });
      TextFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function TextFieldModule_Factory(t) {
          return new (t || TextFieldModule)();
        },
        imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TextFieldModule, {
          declarations: function declarations() {
            return [CdkAutofill, CdkTextareaAutosize];
          },
          imports: function imports() {
            return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]];
          },
          exports: function exports() {
            return [CdkAutofill, CdkTextareaAutosize];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TextFieldModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [CdkAutofill, CdkTextareaAutosize],
            imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
            exports: [CdkAutofill, CdkTextareaAutosize]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=text-field.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/cdk/fesm2015/cdk.js":
    /*!***************************************************!*\
      !*** ./node_modules/@angular/cdk/fesm2015/cdk.js ***!
      \***************************************************/

    /*! exports provided: VERSION */

    /***/
    function node_modulesAngularCdkFesm2015CdkJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Current version of the Angular Component Development Kit. */


      var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('10.2.7');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      //# sourceMappingURL=cdk.js.map

      /***/
    },

    /***/
    "./node_modules/@angular/cdk/fesm2015/coercion.js":
    /*!********************************************************!*\
      !*** ./node_modules/@angular/cdk/fesm2015/coercion.js ***!
      \********************************************************/

    /*! exports provided: _isNumberValue, coerceArray, coerceBooleanProperty, coerceCssPixelValue, coerceElement, coerceNumberProperty */

    /***/
    function node_modulesAngularCdkFesm2015CoercionJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_isNumberValue", function () {
        return _isNumberValue;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
        return coerceArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function () {
        return coerceBooleanProperty;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function () {
        return coerceCssPixelValue;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceElement", function () {
        return coerceElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function () {
        return coerceNumberProperty;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Coerces a data-bound value (typically a string) to a boolean. */


      function coerceBooleanProperty(value) {
        return value != null && "".concat(value) !== 'false';
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function coerceNumberProperty(value) {
        var fallbackValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return _isNumberValue(value) ? Number(value) : fallbackValue;
      }
      /**
       * Whether the provided value is considered a number.
       * @docs-private
       */


      function _isNumberValue(value) {
        // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
        // and other non-number values as NaN, where Number just uses 0) but it considers the string
        // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
        return !isNaN(parseFloat(value)) && !isNaN(Number(value));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function coerceArray(value) {
        return Array.isArray(value) ? value : [value];
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Coerces a value to a CSS pixel value. */


      function coerceCssPixelValue(value) {
        if (value == null) {
          return '';
        }

        return typeof value === 'string' ? value : "".concat(value, "px");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Coerces an ElementRef or an Element into an element.
       * Useful for APIs that can accept either a ref or the native element itself.
       */


      function coerceElement(elementOrRef) {
        return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      //# sourceMappingURL=coercion.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js ***!
      \**********************************************************************/

    /*! exports provided: APR, AUG, AnimationCurves, AnimationDurations, DEC, DateAdapter, ErrorStateMatcher, FEB, JAN, JUL, JUN, MAR, MATERIAL_SANITY_CHECKS, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE_PROVIDER, MAT_LABEL_GLOBAL_OPTIONS, MAT_NATIVE_DATE_FORMATS, MAT_OPTGROUP, MAT_OPTION_PARENT_COMPONENT, MAT_RIPPLE_GLOBAL_OPTIONS, MAY, MatCommonModule, MatLine, MatLineModule, MatLineSetter, MatNativeDateModule, MatOptgroup, MatOption, MatOptionModule, MatOptionSelectionChange, MatPseudoCheckbox, MatPseudoCheckboxModule, MatRipple, MatRippleModule, NOV, NativeDateAdapter, NativeDateModule, OCT, RippleRef, RippleRenderer, SEP, ShowOnDirtyErrorStateMatcher, VERSION, _MatOptgroupBase, _MatOptionBase, _countGroupLabelsBeforeOption, _getOptionScrollPosition, defaultRippleAnimationConfig, mixinColor, mixinDisableRipple, mixinDisabled, mixinErrorState, mixinInitialized, mixinTabIndex, setLines, ɵ0, ɵangular_material_src_material_core_core_a */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015CoreJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APR", function () {
        return APR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AUG", function () {
        return AUG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationCurves", function () {
        return AnimationCurves;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationDurations", function () {
        return AnimationDurations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEC", function () {
        return DEC;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
        return DateAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function () {
        return ErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FEB", function () {
        return FEB;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JAN", function () {
        return JAN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JUL", function () {
        return JUL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JUN", function () {
        return JUN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAR", function () {
        return MAR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function () {
        return MATERIAL_SANITY_CHECKS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function () {
        return MAT_DATE_FORMATS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function () {
        return MAT_DATE_LOCALE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function () {
        return MAT_DATE_LOCALE_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_PROVIDER", function () {
        return MAT_DATE_LOCALE_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_LABEL_GLOBAL_OPTIONS", function () {
        return MAT_LABEL_GLOBAL_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function () {
        return MAT_NATIVE_DATE_FORMATS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_OPTGROUP", function () {
        return MAT_OPTGROUP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function () {
        return MAT_OPTION_PARENT_COMPONENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function () {
        return MAT_RIPPLE_GLOBAL_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAY", function () {
        return MAY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCommonModule", function () {
        return MatCommonModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLine", function () {
        return MatLine;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLineModule", function () {
        return MatLineModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLineSetter", function () {
        return MatLineSetter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function () {
        return MatNativeDateModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOptgroup", function () {
        return MatOptgroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOption", function () {
        return MatOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOptionModule", function () {
        return MatOptionModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function () {
        return MatOptionSelectionChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function () {
        return MatPseudoCheckbox;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function () {
        return MatPseudoCheckboxModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRipple", function () {
        return MatRipple;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRippleModule", function () {
        return MatRippleModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NOV", function () {
        return NOV;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function () {
        return NativeDateAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NativeDateModule", function () {
        return NativeDateModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OCT", function () {
        return OCT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RippleRef", function () {
        return RippleRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RippleRenderer", function () {
        return RippleRenderer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SEP", function () {
        return SEP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function () {
        return ShowOnDirtyErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatOptgroupBase", function () {
        return _MatOptgroupBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatOptionBase", function () {
        return _MatOptionBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function () {
        return _countGroupLabelsBeforeOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function () {
        return _getOptionScrollPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function () {
        return defaultRippleAnimationConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinColor", function () {
        return mixinColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function () {
        return mixinDisableRipple;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinDisabled", function () {
        return mixinDisabled;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinErrorState", function () {
        return mixinErrorState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinInitialized", function () {
        return mixinInitialized;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function () {
        return mixinTabIndex;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setLines", function () {
        return setLines;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_core_core_a", function () {
        return MATERIAL_SANITY_CHECKS_FACTORY;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
      /* harmony import */


      var _angular_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk */
      "./node_modules/@angular/cdk/fesm2015/cdk.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Current version of Angular Material. */


      var _c0 = ["*", [["mat-option"], ["ng-container"]]];
      var _c1 = ["*", "mat-option, ng-container"];

      function MatOption_mat_pseudo_checkbox_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-pseudo-checkbox", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
        }
      }

      var _c2 = ["*"];
      var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('10.2.7');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */

      var AnimationCurves = function AnimationCurves() {
        _classCallCheck(this, AnimationCurves);
      };

      AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
      AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
      AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
      AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
      /** @docs-private */

      var AnimationDurations = function AnimationDurations() {
        _classCallCheck(this, AnimationDurations);
      };

      AnimationDurations.COMPLEX = '375ms';
      AnimationDurations.ENTERING = '225ms';
      AnimationDurations.EXITING = '195ms';
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Private version constant to circumvent test/build issues,
      // i.e. avoid core to depend on the @angular/material primary entry-point
      // Can be removed once the Material primary entry-point no longer
      // re-exports all secondary entry-points

      var VERSION$1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('10.2.7');
      /** @docs-private */

      function MATERIAL_SANITY_CHECKS_FACTORY() {
        return true;
      }
      /** Injection token that configures whether the Material sanity checks are enabled. */


      var MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-sanity-checks', {
        providedIn: 'root',
        factory: MATERIAL_SANITY_CHECKS_FACTORY
      });
      /**
       * Module that captures anything that should be loaded and/or run for *all* Angular Material
       * components. This includes Bidi, etc.
       *
       * This module should be imported to each top-level component module (e.g., MatTabsModule).
       */

      var MatCommonModule = /*#__PURE__*/function () {
        function MatCommonModule(highContrastModeDetector, sanityChecks,
        /** @breaking-change 11.0.0 make document required */
        document) {
          _classCallCheck(this, MatCommonModule);

          /** Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype). */
          this._hasDoneGlobalChecks = false;
          this._document = document; // While A11yModule also does this, we repeat it here to avoid importing A11yModule
          // in MatCommonModule.

          highContrastModeDetector._applyBodyHighContrastModeCssClasses(); // Note that `_sanityChecks` is typed to `any`, because AoT
          // throws an error if we use the `SanityChecks` type directly.


          this._sanityChecks = sanityChecks;

          if (!this._hasDoneGlobalChecks) {
            this._checkDoctypeIsDefined();

            this._checkThemeIsPresent();

            this._checkCdkVersionMatch();

            this._hasDoneGlobalChecks = true;
          }
        }
        /** Access injected document if available or fallback to global document reference */


        _createClass(MatCommonModule, [{
          key: "_getDocument",
          value: function _getDocument() {
            var doc = this._document || document;
            return typeof doc === 'object' && doc ? doc : null;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            var win = (doc === null || doc === void 0 ? void 0 : doc.defaultView) || window;
            return typeof win === 'object' && win ? win : null;
          }
          /** Whether any sanity checks are enabled. */

        }, {
          key: "_checksAreEnabled",
          value: function _checksAreEnabled() {
            // TODO(crisbeto): we can't use `ngDevMode` here yet, because ViewEngine apps might not support
            // it. Since these checks can have performance implications and they aren't tree shakeable
            // in their current form, we can leave the `isDevMode` check in for now.
            // tslint:disable-next-line:ban
            return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !this._isTestEnv();
          }
          /** Whether the code is running in tests. */

        }, {
          key: "_isTestEnv",
          value: function _isTestEnv() {
            var window = this._getWindow();

            return window && (window.__karma__ || window.jasmine);
          }
        }, {
          key: "_checkDoctypeIsDefined",
          value: function _checkDoctypeIsDefined() {
            var isEnabled = this._checksAreEnabled() && (this._sanityChecks === true || this._sanityChecks.doctype);

            var document = this._getDocument();

            if (isEnabled && document && !document.doctype) {
              console.warn('Current document does not have a doctype. This may cause ' + 'some Angular Material components not to behave as expected.');
            }
          }
        }, {
          key: "_checkThemeIsPresent",
          value: function _checkThemeIsPresent() {
            // We need to assert that the `body` is defined, because these checks run very early
            // and the `body` won't be defined if the consumer put their scripts in the `head`.
            var isDisabled = !this._checksAreEnabled() || this._sanityChecks === false || !this._sanityChecks.theme;

            var document = this._getDocument();

            if (isDisabled || !document || !document.body || typeof getComputedStyle !== 'function') {
              return;
            }

            var testElement = document.createElement('div');
            testElement.classList.add('mat-theme-loaded-marker');
            document.body.appendChild(testElement);
            var computedStyle = getComputedStyle(testElement); // In some situations the computed style of the test element can be null. For example in
            // Firefox, the computed style is null if an application is running inside of a hidden iframe.
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

            if (computedStyle && computedStyle.display !== 'none') {
              console.warn('Could not find Angular Material core theme. Most Material ' + 'components may not work as expected. For more info refer ' + 'to the theming guide: https://material.angular.io/guide/theming');
            }

            document.body.removeChild(testElement);
          }
          /** Checks whether the material version matches the cdk version */

        }, {
          key: "_checkCdkVersionMatch",
          value: function _checkCdkVersionMatch() {
            var isEnabled = this._checksAreEnabled() && (this._sanityChecks === true || this._sanityChecks.version);

            if (isEnabled && VERSION$1.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full) {
              console.warn('The Angular Material version (' + VERSION$1.full + ') does not match ' + 'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full + ').\n' + 'Please ensure the versions of these two packages exactly match.');
            }
          }
        }]);

        return MatCommonModule;
      }();

      MatCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatCommonModule
      });
      MatCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatCommonModule_Factory(t) {
          return new (t || MatCommonModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MATERIAL_SANITY_CHECKS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], 8));
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
      });

      MatCommonModule.ctorParameters = function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MATERIAL_SANITY_CHECKS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCommonModule, {
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCommonModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
            exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
          }]
        }], function () {
          return [{
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MATERIAL_SANITY_CHECKS]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Mixin to augment a directive with a `disabled` property. */


      function mixinDisabled(base) {
        return /*#__PURE__*/function (_base) {
          _inherits(_class, _base);

          var _super4 = _createSuper(_class);

          function _class() {
            var _this27;

            _classCallCheck(this, _class);

            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            _this27 = _super4.call.apply(_super4, [this].concat(args));
            _this27._disabled = false;
            return _this27;
          }

          _createClass(_class, [{
            key: "disabled",
            get: function get() {
              return this._disabled;
            },
            set: function set(value) {
              this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
            }
          }]);

          return _class;
        }(base);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Mixin to augment a directive with a `color` property. */


      function mixinColor(base, defaultColor) {
        return /*#__PURE__*/function (_base2) {
          _inherits(_class2, _base2);

          var _super5 = _createSuper(_class2);

          function _class2() {
            var _this28;

            _classCallCheck(this, _class2);

            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            _this28 = _super5.call.apply(_super5, [this].concat(args));
            _this28.defaultColor = defaultColor; // Set the default color that can be specified from the mixin.

            _this28.color = defaultColor;
            return _this28;
          }

          _createClass(_class2, [{
            key: "color",
            get: function get() {
              return this._color;
            },
            set: function set(value) {
              var colorPalette = value || this.defaultColor;

              if (colorPalette !== this._color) {
                if (this._color) {
                  this._elementRef.nativeElement.classList.remove("mat-".concat(this._color));
                }

                if (colorPalette) {
                  this._elementRef.nativeElement.classList.add("mat-".concat(colorPalette));
                }

                this._color = colorPalette;
              }
            }
          }]);

          return _class2;
        }(base);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Mixin to augment a directive with a `disableRipple` property. */


      function mixinDisableRipple(base) {
        var Mixin = /*#__PURE__*/function (_base3) {
          _inherits(Mixin, _base3);

          var _super6 = _createSuper(Mixin);

          function Mixin() {
            var _this29;

            _classCallCheck(this, Mixin);

            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }

            _this29 = _super6.call.apply(_super6, [this].concat(args));
            _this29._disableRipple = false;
            return _this29;
          }
          /** Whether the ripple effect is disabled or not. */


          _createClass(Mixin, [{
            key: "disableRipple",
            get: function get() {
              return this._disableRipple;
            },
            set: function set(value) {
              this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
            }
          }]);

          return Mixin;
        }(base); // Since we don't directly extend from `base` with it's original types, and we instruct
        // TypeScript that `T` actually is instantiatable through `new`, the types don't overlap.
        // This is a limitation in TS as abstract classes cannot be typed properly dynamically.


        return Mixin;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Mixin to augment a directive with a `tabIndex` property. */


      function mixinTabIndex(base) {
        var defaultTabIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        // Note: We cast `base` to `unknown` and then `Constructor`. It could be an abstract class,
        // but given we `extend` it from another class, we can assume a constructor being accessible.
        var Mixin = /*#__PURE__*/function (_base4) {
          _inherits(Mixin, _base4);

          var _super7 = _createSuper(Mixin);

          function Mixin() {
            var _this30;

            _classCallCheck(this, Mixin);

            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }

            _this30 = _super7.call.apply(_super7, [this].concat(args));
            _this30._tabIndex = defaultTabIndex;
            _this30.defaultTabIndex = defaultTabIndex;
            return _this30;
          }

          _createClass(Mixin, [{
            key: "tabIndex",
            get: function get() {
              return this.disabled ? -1 : this._tabIndex;
            },
            set: function set(value) {
              // If the specified tabIndex value is null or undefined, fall back to the default value.
              this._tabIndex = value != null ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value) : this.defaultTabIndex;
            }
          }]);

          return Mixin;
        }(base); // Since we don't directly extend from `base` with it's original types, and we instruct
        // TypeScript that `T` actually is instantiatable through `new`, the types don't overlap.
        // This is a limitation in TS as abstract classes cannot be typed properly dynamically.


        return Mixin;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Mixin to augment a directive with updateErrorState method.
       * For component with `errorState` and need to update `errorState`.
       */


      function mixinErrorState(base) {
        return /*#__PURE__*/function (_base5) {
          _inherits(_class3, _base5);

          var _super8 = _createSuper(_class3);

          function _class3() {
            var _this31;

            _classCallCheck(this, _class3);

            for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              args[_key7] = arguments[_key7];
            }

            _this31 = _super8.call.apply(_super8, [this].concat(args));
            /** Whether the component is in an error state. */

            _this31.errorState = false;
            /**
             * Stream that emits whenever the state of the input changes such that the wrapping
             * `MatFormField` needs to run change detection.
             */

            _this31.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
            return _this31;
          }

          _createClass(_class3, [{
            key: "updateErrorState",
            value: function updateErrorState() {
              var oldState = this.errorState;
              var parent = this._parentFormGroup || this._parentForm;
              var matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
              var control = this.ngControl ? this.ngControl.control : null;
              var newState = matcher.isErrorState(control, parent);

              if (newState !== oldState) {
                this.errorState = newState;
                this.stateChanges.next();
              }
            }
          }]);

          return _class3;
        }(base);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Mixin to augment a directive with an initialized property that will emits when ngOnInit ends. */


      function mixinInitialized(base) {
        return /*#__PURE__*/function (_base6) {
          _inherits(_class4, _base6);

          var _super9 = _createSuper(_class4);

          function _class4() {
            var _this32;

            _classCallCheck(this, _class4);

            for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              args[_key8] = arguments[_key8];
            }

            _this32 = _super9.call.apply(_super9, [this].concat(args));
            /** Whether this directive has been marked as initialized. */

            _this32._isInitialized = false;
            /**
             * List of subscribers that subscribed before the directive was initialized. Should be notified
             * during _markInitialized. Set to null after pending subscribers are notified, and should
             * not expect to be populated after.
             */

            _this32._pendingSubscribers = [];
            /**
             * Observable stream that emits when the directive initializes. If already initialized, the
             * subscriber is stored to be notified once _markInitialized is called.
             */

            _this32.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](function (subscriber) {
              // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
              // when _markInitialized is called.
              if (_this32._isInitialized) {
                _this32._notifySubscriber(subscriber);
              } else {
                _this32._pendingSubscribers.push(subscriber);
              }
            });
            return _this32;
          }
          /**
           * Marks the state as initialized and notifies pending subscribers. Should be called at the end
           * of ngOnInit.
           * @docs-private
           */


          _createClass(_class4, [{
            key: "_markInitialized",
            value: function _markInitialized() {
              if (this._isInitialized && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('This directive has already been marked as initialized and ' + 'should not be called twice.');
              }

              this._isInitialized = true;

              this._pendingSubscribers.forEach(this._notifySubscriber);

              this._pendingSubscribers = null;
            }
            /** Emits and completes the subscriber stream (should only emit once). */

          }, {
            key: "_notifySubscriber",
            value: function _notifySubscriber(subscriber) {
              subscriber.next();
              subscriber.complete();
            }
          }]);

          return _class4;
        }(base);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** InjectionToken for datepicker that can be used to override default locale code. */


      var MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_DATE_LOCALE', {
        providedIn: 'root',
        factory: MAT_DATE_LOCALE_FACTORY
      });
      /** @docs-private */

      function MAT_DATE_LOCALE_FACTORY() {
        return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]);
      }
      /**
       * No longer needed since MAT_DATE_LOCALE has been changed to a scoped injectable.
       * If you are importing and providing this in your code you can simply remove it.
       * @deprecated
       * @breaking-change 8.0.0
       */


      var MAT_DATE_LOCALE_PROVIDER = {
        provide: MAT_DATE_LOCALE,
        useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]
      };
      /** Adapts type `D` to be usable as a date by cdk-based components that work with dates. */

      var DateAdapter = /*#__PURE__*/function () {
        function DateAdapter() {
          _classCallCheck(this, DateAdapter);

          this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** A stream that emits when the locale changes. */

          this.localeChanges = this._localeChanges;
        }
        /**
         * Given a potential date object, returns that same date object if it is
         * a valid date, or `null` if it's not a valid date.
         * @param obj The object to check.
         * @returns A date or `null`.
         */


        _createClass(DateAdapter, [{
          key: "getValidDateOrNull",
          value: function getValidDateOrNull(obj) {
            return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
          }
          /**
           * Attempts to deserialize a value to a valid date object. This is different from parsing in that
           * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
           * string). The default implementation does not allow any deserialization, it simply checks that
           * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
           * method on all of its `@Input()` properties that accept dates. It is therefore possible to
           * support passing values from your backend directly to these properties by overriding this method
           * to also deserialize the format used by your backend.
           * @param value The value to be deserialized into a date object.
           * @returns The deserialized date object, either a valid date, null if the value can be
           *     deserialized into a null date (e.g. the empty string), or an invalid date.
           */

        }, {
          key: "deserialize",
          value: function deserialize(value) {
            if (value == null || this.isDateInstance(value) && this.isValid(value)) {
              return value;
            }

            return this.invalid();
          }
          /**
           * Sets the locale used for all dates.
           * @param locale The new locale.
           */

        }, {
          key: "setLocale",
          value: function setLocale(locale) {
            this.locale = locale;

            this._localeChanges.next();
          }
          /**
           * Compares two dates.
           * @param first The first date to compare.
           * @param second The second date to compare.
           * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
           *     a number greater than 0 if the first date is later.
           */

        }, {
          key: "compareDate",
          value: function compareDate(first, second) {
            return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
          }
          /**
           * Checks if two dates are equal.
           * @param first The first date to check.
           * @param second The second date to check.
           * @returns Whether the two dates are equal.
           *     Null dates are considered equal to other null dates.
           */

        }, {
          key: "sameDate",
          value: function sameDate(first, second) {
            if (first && second) {
              var firstValid = this.isValid(first);
              var secondValid = this.isValid(second);

              if (firstValid && secondValid) {
                return !this.compareDate(first, second);
              }

              return firstValid == secondValid;
            }

            return first == second;
          }
          /**
           * Clamp the given date between min and max dates.
           * @param date The date to clamp.
           * @param min The minimum value to allow. If null or omitted no min is enforced.
           * @param max The maximum value to allow. If null or omitted no max is enforced.
           * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
           *     otherwise `date`.
           */

        }, {
          key: "clampDate",
          value: function clampDate(date, min, max) {
            if (min && this.compareDate(date, min) < 0) {
              return min;
            }

            if (max && this.compareDate(date, max) > 0) {
              return max;
            }

            return date;
          }
        }]);

        return DateAdapter;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-date-formats');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(mmalerba): Remove when we no longer support safari 9.

      /** Whether the browser supports the Intl API. */

      var SUPPORTS_INTL_API; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
      // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
      // the consumer is providing a polyfilled `Map`. See:
      // https://github.com/Microsoft/ChakraCore/issues/3189
      // https://github.com/angular/components/issues/15687

      try {
        SUPPORTS_INTL_API = typeof Intl != 'undefined';
      } catch (_a) {
        SUPPORTS_INTL_API = false;
      }
      /** The default month names to use if Intl API is not available. */


      var DEFAULT_MONTH_NAMES = {
        'long': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
      };

      var ɵ0 = function ɵ0(i) {
        return String(i + 1);
      };
      /** The default date names to use if Intl API is not available. */


      var DEFAULT_DATE_NAMES = range(31, ɵ0);
      /** The default day of the week names to use if Intl API is not available. */

      var DEFAULT_DAY_OF_WEEK_NAMES = {
        'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
      };
      /**
       * Matches strings that have the form of a valid RFC 3339 string
       * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
       * because the regex will match strings an with out of bounds month, date, etc.
       */

      var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
      /** Creates an array and fills it with values. */

      function range(length, valueFunction) {
        var valuesArray = Array(length);

        for (var i = 0; i < length; i++) {
          valuesArray[i] = valueFunction(i);
        }

        return valuesArray;
      }
      /** Adapts the native JS Date for use with cdk-based components that work with dates. */


      var NativeDateAdapter = /*#__PURE__*/function (_DateAdapter) {
        _inherits(NativeDateAdapter, _DateAdapter);

        var _super10 = _createSuper(NativeDateAdapter);

        function NativeDateAdapter(matDateLocale, platform) {
          var _thisSuper, _this33;

          _classCallCheck(this, NativeDateAdapter);

          _this33 = _super10.call(this);
          /**
           * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
           * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
           * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
           * will produce `'8/13/1800'`.
           *
           * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
           * getting the string representation of a Date object from its utc representation. We're keeping
           * it here for sometime, just for precaution, in case we decide to revert some of these changes
           * though.
           */

          _this33.useUtcForDisplay = true;

          _get((_thisSuper = _assertThisInitialized(_this33), _getPrototypeOf(NativeDateAdapter.prototype)), "setLocale", _thisSuper).call(_thisSuper, matDateLocale); // IE does its own time zone correction, so we disable this on IE.


          _this33.useUtcForDisplay = !platform.TRIDENT;
          _this33._clampDate = platform.TRIDENT || platform.EDGE;
          return _this33;
        }

        _createClass(NativeDateAdapter, [{
          key: "getYear",
          value: function getYear(date) {
            return date.getFullYear();
          }
        }, {
          key: "getMonth",
          value: function getMonth(date) {
            return date.getMonth();
          }
        }, {
          key: "getDate",
          value: function getDate(date) {
            return date.getDate();
          }
        }, {
          key: "getDayOfWeek",
          value: function getDayOfWeek(date) {
            return date.getDay();
          }
        }, {
          key: "getMonthNames",
          value: function getMonthNames(style) {
            var _this34 = this;

            if (SUPPORTS_INTL_API) {
              var dtf = new Intl.DateTimeFormat(this.locale, {
                month: style,
                timeZone: 'utc'
              });
              return range(12, function (i) {
                return _this34._stripDirectionalityCharacters(_this34._format(dtf, new Date(2017, i, 1)));
              });
            }

            return DEFAULT_MONTH_NAMES[style];
          }
        }, {
          key: "getDateNames",
          value: function getDateNames() {
            var _this35 = this;

            if (SUPPORTS_INTL_API) {
              var dtf = new Intl.DateTimeFormat(this.locale, {
                day: 'numeric',
                timeZone: 'utc'
              });
              return range(31, function (i) {
                return _this35._stripDirectionalityCharacters(_this35._format(dtf, new Date(2017, 0, i + 1)));
              });
            }

            return DEFAULT_DATE_NAMES;
          }
        }, {
          key: "getDayOfWeekNames",
          value: function getDayOfWeekNames(style) {
            var _this36 = this;

            if (SUPPORTS_INTL_API) {
              var dtf = new Intl.DateTimeFormat(this.locale, {
                weekday: style,
                timeZone: 'utc'
              });
              return range(7, function (i) {
                return _this36._stripDirectionalityCharacters(_this36._format(dtf, new Date(2017, 0, i + 1)));
              });
            }

            return DEFAULT_DAY_OF_WEEK_NAMES[style];
          }
        }, {
          key: "getYearName",
          value: function getYearName(date) {
            if (SUPPORTS_INTL_API) {
              var dtf = new Intl.DateTimeFormat(this.locale, {
                year: 'numeric',
                timeZone: 'utc'
              });
              return this._stripDirectionalityCharacters(this._format(dtf, date));
            }

            return String(this.getYear(date));
          }
        }, {
          key: "getFirstDayOfWeek",
          value: function getFirstDayOfWeek() {
            // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
            return 0;
          }
        }, {
          key: "getNumDaysInMonth",
          value: function getNumDaysInMonth(date) {
            return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
          }
        }, {
          key: "clone",
          value: function clone(date) {
            return new Date(date.getTime());
          }
        }, {
          key: "createDate",
          value: function createDate(year, month, date) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              // Check for invalid month and date (except upper bound on date which we have to check after
              // creating the Date).
              if (month < 0 || month > 11) {
                throw Error("Invalid month index \"".concat(month, "\". Month index has to be between 0 and 11."));
              }

              if (date < 1) {
                throw Error("Invalid date \"".concat(date, "\". Date has to be greater than 0."));
              }
            }

            var result = this._createDateWithOverflow(year, month, date); // Check that the date wasn't above the upper bound for the month, causing the month to overflow


            if (result.getMonth() != month && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("Invalid date \"".concat(date, "\" for month with index \"").concat(month, "\"."));
            }

            return result;
          }
        }, {
          key: "today",
          value: function today() {
            return new Date();
          }
        }, {
          key: "parse",
          value: function parse(value) {
            // We have no way using the native JS Date to set the parse format or locale, so we ignore these
            // parameters.
            if (typeof value == 'number') {
              return new Date(value);
            }

            return value ? new Date(Date.parse(value)) : null;
          }
        }, {
          key: "format",
          value: function format(date, displayFormat) {
            if (!this.isValid(date)) {
              throw Error('NativeDateAdapter: Cannot format invalid date.');
            }

            if (SUPPORTS_INTL_API) {
              // On IE and Edge the i18n API will throw a hard error that can crash the entire app
              // if we attempt to format a date whose year is less than 1 or greater than 9999.
              if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
                date = this.clone(date);
                date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
              }

              displayFormat = Object.assign(Object.assign({}, displayFormat), {
                timeZone: 'utc'
              });
              var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
              return this._stripDirectionalityCharacters(this._format(dtf, date));
            }

            return this._stripDirectionalityCharacters(date.toDateString());
          }
        }, {
          key: "addCalendarYears",
          value: function addCalendarYears(date, years) {
            return this.addCalendarMonths(date, years * 12);
          }
        }, {
          key: "addCalendarMonths",
          value: function addCalendarMonths(date, months) {
            var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date)); // It's possible to wind up in the wrong month if the original month has more days than the new
            // month. In this case we want to go to the last day of the desired month.
            // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
            // guarantee this.


            if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
              newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
            }

            return newDate;
          }
        }, {
          key: "addCalendarDays",
          value: function addCalendarDays(date, days) {
            return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
          }
        }, {
          key: "toIso8601",
          value: function toIso8601(date) {
            return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
          }
          /**
           * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
           * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
           * invalid date for all other values.
           */

        }, {
          key: "deserialize",
          value: function deserialize(value) {
            if (typeof value === 'string') {
              if (!value) {
                return null;
              } // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
              // string is the right format first.


              if (ISO_8601_REGEX.test(value)) {
                var date = new Date(value);

                if (this.isValid(date)) {
                  return date;
                }
              }
            }

            return _get(_getPrototypeOf(NativeDateAdapter.prototype), "deserialize", this).call(this, value);
          }
        }, {
          key: "isDateInstance",
          value: function isDateInstance(obj) {
            return obj instanceof Date;
          }
        }, {
          key: "isValid",
          value: function isValid(date) {
            return !isNaN(date.getTime());
          }
        }, {
          key: "invalid",
          value: function invalid() {
            return new Date(NaN);
          }
          /** Creates a date but allows the month and date to overflow. */

        }, {
          key: "_createDateWithOverflow",
          value: function _createDateWithOverflow(year, month, date) {
            // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
            // To work around this we use `setFullYear` and `setHours` instead.
            var d = new Date();
            d.setFullYear(year, month, date);
            d.setHours(0, 0, 0, 0);
            return d;
          }
          /**
           * Pads a number to make it two digits.
           * @param n The number to pad.
           * @returns The padded number.
           */

        }, {
          key: "_2digit",
          value: function _2digit(n) {
            return ('00' + n).slice(-2);
          }
          /**
           * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
           * other browsers do not. We remove them to make output consistent and because they interfere with
           * date parsing.
           * @param str The string to strip direction characters from.
           * @returns The stripped string.
           */

        }, {
          key: "_stripDirectionalityCharacters",
          value: function _stripDirectionalityCharacters(str) {
            return str.replace(/[\u200e\u200f]/g, '');
          }
          /**
           * When converting Date object to string, javascript built-in functions may return wrong
           * results because it applies its internal DST rules. The DST rules around the world change
           * very frequently, and the current valid rule is not always valid in previous years though.
           * We work around this problem building a new Date object which has its internal UTC
           * representation with the local date and time.
           * @param dtf Intl.DateTimeFormat object, containg the desired string format. It must have
           *    timeZone set to 'utc' to work fine.
           * @param date Date from which we want to get the string representation according to dtf
           * @returns A Date object with its UTC representation based on the passed in date info
           */

        }, {
          key: "_format",
          value: function _format(dtf, date) {
            // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
            // To work around this we use `setUTCFullYear` and `setUTCHours` instead.
            var d = new Date();
            d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
            d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
            return dtf.format(d);
          }
        }]);

        return NativeDateAdapter;
      }(DateAdapter);

      NativeDateAdapter.ɵfac = function NativeDateAdapter_Factory(t) {
        return new (t || NativeDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_DATE_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]));
      };

      NativeDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NativeDateAdapter,
        factory: NativeDateAdapter.ɵfac
      });

      NativeDateAdapter.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_DATE_LOCALE]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateAdapter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_DATE_LOCALE]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MAT_NATIVE_DATE_FORMATS = {
        parse: {
          dateInput: null
        },
        display: {
          dateInput: {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
          },
          monthYearLabel: {
            year: 'numeric',
            month: 'short'
          },
          dateA11yLabel: {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          },
          monthYearA11yLabel: {
            year: 'numeric',
            month: 'long'
          }
        }
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var NativeDateModule = function NativeDateModule() {
        _classCallCheck(this, NativeDateModule);
      };

      NativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NativeDateModule
      });
      NativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NativeDateModule_Factory(t) {
          return new (t || NativeDateModule)();
        },
        providers: [{
          provide: DateAdapter,
          useClass: NativeDateAdapter
        }],
        imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NativeDateModule, {
          imports: function imports() {
            return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]],
            providers: [{
              provide: DateAdapter,
              useClass: NativeDateAdapter
            }]
          }]
        }], null, null);
      })();

      var ɵ0$1 = MAT_NATIVE_DATE_FORMATS;

      var MatNativeDateModule = function MatNativeDateModule() {
        _classCallCheck(this, MatNativeDateModule);
      };

      MatNativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatNativeDateModule
      });
      MatNativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatNativeDateModule_Factory(t) {
          return new (t || MatNativeDateModule)();
        },
        providers: [{
          provide: MAT_DATE_FORMATS,
          useValue: ɵ0$1
        }],
        imports: [[NativeDateModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatNativeDateModule, {
          imports: [NativeDateModule]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNativeDateModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [NativeDateModule],
            providers: [{
              provide: MAT_DATE_FORMATS,
              useValue: ɵ0$1
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Error state matcher that matches when a control is invalid and dirty. */


      var ShowOnDirtyErrorStateMatcher = /*#__PURE__*/function () {
        function ShowOnDirtyErrorStateMatcher() {
          _classCallCheck(this, ShowOnDirtyErrorStateMatcher);
        }

        _createClass(ShowOnDirtyErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            return !!(control && control.invalid && (control.dirty || form && form.submitted));
          }
        }]);

        return ShowOnDirtyErrorStateMatcher;
      }();

      ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(t) {
        return new (t || ShowOnDirtyErrorStateMatcher)();
      };

      ShowOnDirtyErrorStateMatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ShowOnDirtyErrorStateMatcher,
        factory: ShowOnDirtyErrorStateMatcher.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowOnDirtyErrorStateMatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /** Provider that defines how form controls behave with regards to displaying error messages. */


      var ErrorStateMatcher = /*#__PURE__*/function () {
        function ErrorStateMatcher() {
          _classCallCheck(this, ErrorStateMatcher);
        }

        _createClass(ErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            return !!(control && control.invalid && (control.touched || form && form.submitted));
          }
        }]);

        return ErrorStateMatcher;
      }();

      ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(t) {
        return new (t || ErrorStateMatcher)();
      };

      ErrorStateMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function ErrorStateMatcher_Factory() {
          return new ErrorStateMatcher();
        },
        token: ErrorStateMatcher,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorStateMatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Shared directive to count lines inside a text area, such as a list item.
       * Line elements can be extracted with a @ContentChildren(MatLine) query, then
       * counted by checking the query list's length.
       */


      var MatLine = function MatLine() {
        _classCallCheck(this, MatLine);
      };

      MatLine.ɵfac = function MatLine_Factory(t) {
        return new (t || MatLine)();
      };

      MatLine.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatLine,
        selectors: [["", "mat-line", ""], ["", "matLine", ""]],
        hostAttrs: [1, "mat-line"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLine, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-line], [matLine]',
            host: {
              'class': 'mat-line'
            }
          }]
        }], null, null);
      })();
      /**
       * Helper that takes a query list of lines and sets the correct class on the host.
       * @docs-private
       */


      function setLines(lines, element) {
        var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'mat';
        // Note: doesn't need to unsubscribe, because `changes`
        // gets completed by Angular when the view is destroyed.
        lines.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(lines)).subscribe(function (_ref) {
          var length = _ref.length;
          setClass(element, "".concat(prefix, "-2-line"), false);
          setClass(element, "".concat(prefix, "-3-line"), false);
          setClass(element, "".concat(prefix, "-multi-line"), false);

          if (length === 2 || length === 3) {
            setClass(element, "".concat(prefix, "-").concat(length, "-line"), true);
          } else if (length > 3) {
            setClass(element, "".concat(prefix, "-multi-line"), true);
          }
        });
      }
      /** Adds or removes a class from an element. */


      function setClass(element, className, isAdd) {
        var classList = element.nativeElement.classList;
        isAdd ? classList.add(className) : classList.remove(className);
      }
      /**
       * Helper that takes a query list of lines and sets the correct class on the host.
       * @docs-private
       * @deprecated Use `setLines` instead.
       * @breaking-change 8.0.0
       */


      var MatLineSetter = function MatLineSetter(lines, element) {
        _classCallCheck(this, MatLineSetter);

        setLines(lines, element);
      };

      var MatLineModule = function MatLineModule() {
        _classCallCheck(this, MatLineModule);
      };

      MatLineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatLineModule
      });
      MatLineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatLineModule_Factory(t) {
          return new (t || MatLineModule)();
        },
        imports: [[MatCommonModule], MatCommonModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatLineModule, {
          declarations: [MatLine],
          imports: [MatCommonModule],
          exports: [MatLine, MatCommonModule]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLineModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MatCommonModule],
            exports: [MatLine, MatCommonModule],
            declarations: [MatLine]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Reference to a previously launched ripple element.
       */


      var RippleRef = /*#__PURE__*/function () {
        function RippleRef(_renderer,
        /** Reference to the ripple HTML element. */
        element,
        /** Ripple configuration used for the ripple. */
        config) {
          _classCallCheck(this, RippleRef);

          this._renderer = _renderer;
          this.element = element;
          this.config = config;
          /** Current state of the ripple. */

          this.state = 3
          /* HIDDEN */
          ;
        }
        /** Fades out the ripple element. */


        _createClass(RippleRef, [{
          key: "fadeOut",
          value: function fadeOut() {
            this._renderer.fadeOutRipple(this);
          }
        }]);

        return RippleRef;
      }();
      /**
       * Default ripple animation configuration for ripples without an explicit
       * animation config specified.
       */


      var defaultRippleAnimationConfig = {
        enterDuration: 450,
        exitDuration: 400
      };
      /**
       * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
       * events to avoid synthetic mouse events.
       */

      var ignoreMouseEventsTimeout = 800;
      /** Options that apply to all the event listeners that are bound by the ripple renderer. */

      var passiveEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /** Events that signal that the pointer is down. */

      var pointerDownEvents = ['mousedown', 'touchstart'];
      /** Events that signal that the pointer is up. */

      var pointerUpEvents = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
      /**
       * Helper service that performs DOM manipulations. Not intended to be used outside this module.
       * The constructor takes a reference to the ripple directive's host element and a map of DOM
       * event handlers to be installed on the element that triggers ripple animations.
       * This will eventually become a custom renderer once Angular support exists.
       * @docs-private
       */

      var RippleRenderer = /*#__PURE__*/function () {
        function RippleRenderer(_target, _ngZone, elementOrElementRef, platform) {
          _classCallCheck(this, RippleRenderer);

          this._target = _target;
          this._ngZone = _ngZone;
          /** Whether the pointer is currently down or not. */

          this._isPointerDown = false;
          /** Set of currently active ripple references. */

          this._activeRipples = new Set();
          /** Whether pointer-up event listeners have been registered. */

          this._pointerUpEventsRegistered = false; // Only do anything if we're on the browser.

          if (platform.isBrowser) {
            this._containerElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(elementOrElementRef);
          }
        }
        /**
         * Fades in a ripple at the given coordinates.
         * @param x Coordinate within the element, along the X axis at which to start the ripple.
         * @param y Coordinate within the element, along the Y axis at which to start the ripple.
         * @param config Extra ripple options.
         */


        _createClass(RippleRenderer, [{
          key: "fadeInRipple",
          value: function fadeInRipple(x, y) {
            var _this37 = this;

            var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();

            var animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), config.animation);

            if (config.centered) {
              x = containerRect.left + containerRect.width / 2;
              y = containerRect.top + containerRect.height / 2;
            }

            var radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
            var offsetX = x - containerRect.left;
            var offsetY = y - containerRect.top;
            var duration = animationConfig.enterDuration;
            var ripple = document.createElement('div');
            ripple.classList.add('mat-ripple-element');
            ripple.style.left = "".concat(offsetX - radius, "px");
            ripple.style.top = "".concat(offsetY - radius, "px");
            ripple.style.height = "".concat(radius * 2, "px");
            ripple.style.width = "".concat(radius * 2, "px"); // If a custom color has been specified, set it as inline style. If no color is
            // set, the default color will be applied through the ripple theme styles.

            if (config.color != null) {
              ripple.style.backgroundColor = config.color;
            }

            ripple.style.transitionDuration = "".concat(duration, "ms");

            this._containerElement.appendChild(ripple); // By default the browser does not recalculate the styles of dynamically created
            // ripple elements. This is critical because then the `scale` would not animate properly.


            enforceStyleRecalculation(ripple);
            ripple.style.transform = 'scale(1)'; // Exposed reference to the ripple that will be returned.

            var rippleRef = new RippleRef(this, ripple, config);
            rippleRef.state = 0
            /* FADING_IN */
            ; // Add the ripple reference to the list of all active ripples.

            this._activeRipples.add(rippleRef);

            if (!config.persistent) {
              this._mostRecentTransientRipple = rippleRef;
            } // Wait for the ripple element to be completely faded in.
            // Once it's faded in, the ripple can be hidden immediately if the mouse is released.


            this._runTimeoutOutsideZone(function () {
              var isMostRecentTransientRipple = rippleRef === _this37._mostRecentTransientRipple;
              rippleRef.state = 1
              /* VISIBLE */
              ; // When the timer runs out while the user has kept their pointer down, we want to
              // keep only the persistent ripples and the latest transient ripple. We do this,
              // because we don't want stacked transient ripples to appear after their enter
              // animation has finished.

              if (!config.persistent && (!isMostRecentTransientRipple || !_this37._isPointerDown)) {
                rippleRef.fadeOut();
              }
            }, duration);

            return rippleRef;
          }
          /** Fades out a ripple reference. */

        }, {
          key: "fadeOutRipple",
          value: function fadeOutRipple(rippleRef) {
            var wasActive = this._activeRipples["delete"](rippleRef);

            if (rippleRef === this._mostRecentTransientRipple) {
              this._mostRecentTransientRipple = null;
            } // Clear out the cached bounding rect if we have no more ripples.


            if (!this._activeRipples.size) {
              this._containerRect = null;
            } // For ripples that are not active anymore, don't re-run the fade-out animation.


            if (!wasActive) {
              return;
            }

            var rippleEl = rippleRef.element;
            var animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), rippleRef.config.animation);
            rippleEl.style.transitionDuration = "".concat(animationConfig.exitDuration, "ms");
            rippleEl.style.opacity = '0';
            rippleRef.state = 2
            /* FADING_OUT */
            ; // Once the ripple faded out, the ripple can be safely removed from the DOM.

            this._runTimeoutOutsideZone(function () {
              rippleRef.state = 3
              /* HIDDEN */
              ;
              rippleEl.parentNode.removeChild(rippleEl);
            }, animationConfig.exitDuration);
          }
          /** Fades out all currently active ripples. */

        }, {
          key: "fadeOutAll",
          value: function fadeOutAll() {
            this._activeRipples.forEach(function (ripple) {
              return ripple.fadeOut();
            });
          }
          /** Sets up the trigger event listeners */

        }, {
          key: "setupTriggerEvents",
          value: function setupTriggerEvents(elementOrElementRef) {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(elementOrElementRef);

            if (!element || element === this._triggerElement) {
              return;
            } // Remove all previously registered event listeners from the trigger element.


            this._removeTriggerEvents();

            this._triggerElement = element;

            this._registerEvents(pointerDownEvents);
          }
          /**
           * Handles all registered events.
           * @docs-private
           */

        }, {
          key: "handleEvent",
          value: function handleEvent(event) {
            if (event.type === 'mousedown') {
              this._onMousedown(event);
            } else if (event.type === 'touchstart') {
              this._onTouchStart(event);
            } else {
              this._onPointerUp();
            } // If pointer-up events haven't been registered yet, do so now.
            // We do this on-demand in order to reduce the total number of event listeners
            // registered by the ripples, which speeds up the rendering time for large UIs.


            if (!this._pointerUpEventsRegistered) {
              this._registerEvents(pointerUpEvents);

              this._pointerUpEventsRegistered = true;
            }
          }
          /** Function being called whenever the trigger is being pressed using mouse. */

        }, {
          key: "_onMousedown",
          value: function _onMousedown(event) {
            // Screen readers will fire fake mouse events for space/enter. Skip launching a
            // ripple in this case for consistency with the non-screen-reader experience.
            var isFakeMousedown = Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["isFakeMousedownFromScreenReader"])(event);
            var isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;

            if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
              this._isPointerDown = true;
              this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
            }
          }
          /** Function being called whenever the trigger is being pressed using touch. */

        }, {
          key: "_onTouchStart",
          value: function _onTouchStart(event) {
            if (!this._target.rippleDisabled) {
              // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
              // events will launch a second ripple if we don't ignore mouse events for a specific
              // time after a touchstart event.
              this._lastTouchStartEvent = Date.now();
              this._isPointerDown = true; // Use `changedTouches` so we skip any touches where the user put
              // their finger down, but used another finger to tap the element again.

              var touches = event.changedTouches;

              for (var i = 0; i < touches.length; i++) {
                this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
              }
            }
          }
          /** Function being called whenever the trigger is being released. */

        }, {
          key: "_onPointerUp",
          value: function _onPointerUp() {
            if (!this._isPointerDown) {
              return;
            }

            this._isPointerDown = false; // Fade-out all ripples that are visible and not persistent.

            this._activeRipples.forEach(function (ripple) {
              // By default, only ripples that are completely visible will fade out on pointer release.
              // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
              var isVisible = ripple.state === 1
              /* VISIBLE */
              || ripple.config.terminateOnPointerUp && ripple.state === 0
              /* FADING_IN */
              ;

              if (!ripple.config.persistent && isVisible) {
                ripple.fadeOut();
              }
            });
          }
          /** Runs a timeout outside of the Angular zone to avoid triggering the change detection. */

        }, {
          key: "_runTimeoutOutsideZone",
          value: function _runTimeoutOutsideZone(fn) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            this._ngZone.runOutsideAngular(function () {
              return setTimeout(fn, delay);
            });
          }
          /** Registers event listeners for a given list of events. */

        }, {
          key: "_registerEvents",
          value: function _registerEvents(eventTypes) {
            var _this38 = this;

            this._ngZone.runOutsideAngular(function () {
              eventTypes.forEach(function (type) {
                _this38._triggerElement.addEventListener(type, _this38, passiveEventOptions);
              });
            });
          }
          /** Removes previously registered event listeners from the trigger element. */

        }, {
          key: "_removeTriggerEvents",
          value: function _removeTriggerEvents() {
            var _this39 = this;

            if (this._triggerElement) {
              pointerDownEvents.forEach(function (type) {
                _this39._triggerElement.removeEventListener(type, _this39, passiveEventOptions);
              });

              if (this._pointerUpEventsRegistered) {
                pointerUpEvents.forEach(function (type) {
                  _this39._triggerElement.removeEventListener(type, _this39, passiveEventOptions);
                });
              }
            }
          }
        }]);

        return RippleRenderer;
      }();
      /** Enforces a style recalculation of a DOM element by computing its styles. */


      function enforceStyleRecalculation(element) {
        // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
        // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
        // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
        window.getComputedStyle(element).getPropertyValue('opacity');
      }
      /**
       * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
       */


      function distanceToFurthestCorner(x, y, rect) {
        var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
        var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
        return Math.sqrt(distX * distX + distY * distY);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that can be used to specify the global ripple options. */


      var MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-ripple-global-options');

      var MatRipple = /*#__PURE__*/function () {
        function MatRipple(_elementRef, ngZone, platform, globalOptions, _animationMode) {
          _classCallCheck(this, MatRipple);

          this._elementRef = _elementRef;
          this._animationMode = _animationMode;
          /**
           * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
           * will be the distance from the center of the ripple to the furthest corner of the host element's
           * bounding rectangle.
           */

          this.radius = 0;
          this._disabled = false;
          /** Whether ripple directive is initialized and the input bindings are set. */

          this._isInitialized = false;
          this._globalOptions = globalOptions || {};
          this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
        }
        /**
         * Whether click events will not trigger the ripple. Ripples can be still launched manually
         * by using the `launch()` method.
         */


        _createClass(MatRipple, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._isInitialized = true;

            this._setupTriggerEventsIfEnabled();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rippleRenderer._removeTriggerEvents();
          }
          /** Fades out all currently showing ripple elements. */

        }, {
          key: "fadeOutAll",
          value: function fadeOutAll() {
            this._rippleRenderer.fadeOutAll();
          }
          /**
           * Ripple configuration from the directive's input values.
           * @docs-private Implemented as part of RippleTarget
           */

        }, {
          key: "_setupTriggerEventsIfEnabled",

          /** Sets up the trigger event listeners if ripples are enabled. */
          value: function _setupTriggerEventsIfEnabled() {
            if (!this.disabled && this._isInitialized) {
              this._rippleRenderer.setupTriggerEvents(this.trigger);
            }
          }
          /** Launches a manual ripple at the specified coordinated or just by the ripple config. */

        }, {
          key: "launch",
          value: function launch(configOrX) {
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var config = arguments.length > 2 ? arguments[2] : undefined;

            if (typeof configOrX === 'number') {
              return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign(Object.assign({}, this.rippleConfig), config));
            } else {
              return this._rippleRenderer.fadeInRipple(0, 0, Object.assign(Object.assign({}, this.rippleConfig), configOrX));
            }
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = value;

            this._setupTriggerEventsIfEnabled();
          }
          /**
           * The element that triggers the ripple when click events are received.
           * Defaults to the directive's host element.
           */

        }, {
          key: "trigger",
          get: function get() {
            return this._trigger || this._elementRef.nativeElement;
          },
          set: function set(trigger) {
            this._trigger = trigger;

            this._setupTriggerEventsIfEnabled();
          }
        }, {
          key: "rippleConfig",
          get: function get() {
            return {
              centered: this.centered,
              radius: this.radius,
              color: this.color,
              animation: Object.assign(Object.assign(Object.assign({}, this._globalOptions.animation), this._animationMode === 'NoopAnimations' ? {
                enterDuration: 0,
                exitDuration: 0
              } : {}), this.animation),
              terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
            };
          }
          /**
           * Whether ripples on pointer-down are disabled or not.
           * @docs-private Implemented as part of RippleTarget
           */

        }, {
          key: "rippleDisabled",
          get: function get() {
            return this.disabled || !!this._globalOptions.disabled;
          }
        }]);

        return MatRipple;
      }();

      MatRipple.ɵfac = function MatRipple_Factory(t) {
        return new (t || MatRipple)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatRipple.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatRipple,
        selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
        hostAttrs: [1, "mat-ripple"],
        hostVars: 2,
        hostBindings: function MatRipple_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
          }
        },
        inputs: {
          radius: ["matRippleRadius", "radius"],
          disabled: ["matRippleDisabled", "disabled"],
          trigger: ["matRippleTrigger", "trigger"],
          color: ["matRippleColor", "color"],
          unbounded: ["matRippleUnbounded", "unbounded"],
          centered: ["matRippleCentered", "centered"],
          animation: ["matRippleAnimation", "animation"]
        },
        exportAs: ["matRipple"]
      });

      MatRipple.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_RIPPLE_GLOBAL_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatRipple.propDecorators = {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleColor']
        }],
        unbounded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleUnbounded']
        }],
        centered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleCentered']
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleRadius']
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleAnimation']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleDisabled']
        }],
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleTrigger']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRipple, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-ripple], [matRipple]',
            exportAs: 'matRipple',
            host: {
              'class': 'mat-ripple',
              '[class.mat-ripple-unbounded]': 'unbounded'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_RIPPLE_GLOBAL_OPTIONS]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleRadius']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleDisabled']
          }],
          trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleTrigger']
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleColor']
          }],
          unbounded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleUnbounded']
          }],
          centered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleCentered']
          }],
          animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleAnimation']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatRippleModule = function MatRippleModule() {
        _classCallCheck(this, MatRippleModule);
      };

      MatRippleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatRippleModule
      });
      MatRippleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatRippleModule_Factory(t) {
          return new (t || MatRippleModule)();
        },
        imports: [[MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]], MatCommonModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatRippleModule, {
          declarations: function declarations() {
            return [MatRipple];
          },
          imports: function imports() {
            return [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]];
          },
          exports: function exports() {
            return [MatRipple, MatCommonModule];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRippleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]],
            exports: [MatRipple, MatCommonModule],
            declarations: [MatRipple]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Component that shows a simplified checkbox without including any kind of "real" checkbox.
       * Meant to be used when the checkbox is purely decorative and a large number of them will be
       * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
       * Note that theming is meant to be handled by the parent element, e.g.
       * `mat-primary .mat-pseudo-checkbox`.
       *
       * Note that this component will be completely invisible to screen-reader users. This is *not*
       * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
       * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
       * of more complex components that appropriately handle selected / checked state.
       * @docs-private
       */


      var MatPseudoCheckbox = function MatPseudoCheckbox(_animationMode) {
        _classCallCheck(this, MatPseudoCheckbox);

        this._animationMode = _animationMode;
        /** Display state of the checkbox. */

        this.state = 'unchecked';
        /** Whether the checkbox is disabled. */

        this.disabled = false;
      };

      MatPseudoCheckbox.ɵfac = function MatPseudoCheckbox_Factory(t) {
        return new (t || MatPseudoCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatPseudoCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatPseudoCheckbox,
        selectors: [["mat-pseudo-checkbox"]],
        hostAttrs: [1, "mat-pseudo-checkbox"],
        hostVars: 8,
        hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          state: "state",
          disabled: "disabled"
        },
        decls: 0,
        vars: 0,
        template: function MatPseudoCheckbox_Template(rf, ctx) {},
        styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatPseudoCheckbox.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatPseudoCheckbox.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckbox, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'mat-pseudo-checkbox',
            template: '',
            host: {
              'class': 'mat-pseudo-checkbox',
              '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
              '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
              '[class.mat-pseudo-checkbox-disabled]': 'disabled',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
            },
            styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"]
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatPseudoCheckboxModule = function MatPseudoCheckboxModule() {
        _classCallCheck(this, MatPseudoCheckboxModule);
      };

      MatPseudoCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatPseudoCheckboxModule
      });
      MatPseudoCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatPseudoCheckboxModule_Factory(t) {
          return new (t || MatPseudoCheckboxModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatPseudoCheckboxModule, {
          declarations: [MatPseudoCheckbox],
          exports: [MatPseudoCheckbox]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckboxModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [MatPseudoCheckbox],
            declarations: [MatPseudoCheckbox]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatOptgroup.

      /** @docs-private */


      var MatOptgroupBase = function MatOptgroupBase() {
        _classCallCheck(this, MatOptgroupBase);
      };

      var _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase); // Counter for unique group ids.


      var _uniqueOptgroupIdCounter = 0;

      var _MatOptgroupBase = /*#__PURE__*/function (_MatOptgroupMixinBase2) {
        _inherits(_MatOptgroupBase, _MatOptgroupMixinBase2);

        var _super11 = _createSuper(_MatOptgroupBase);

        function _MatOptgroupBase() {
          var _this40;

          _classCallCheck(this, _MatOptgroupBase);

          _this40 = _super11.apply(this, arguments);
          /** Unique id for the underlying label. */

          _this40._labelId = "mat-optgroup-label-".concat(_uniqueOptgroupIdCounter++);
          return _this40;
        }

        return _MatOptgroupBase;
      }(_MatOptgroupMixinBase);

      _MatOptgroupBase.ɵfac = function _MatOptgroupBase_Factory(t) {
        return ɵ_MatOptgroupBase_BaseFactory(t || _MatOptgroupBase);
      };

      _MatOptgroupBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatOptgroupBase,
        inputs: {
          label: "label"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      _MatOptgroupBase.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      var ɵ_MatOptgroupBase_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatOptgroupBase);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatOptgroupBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], null, {
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * Injection token that can be used to reference instances of `MatOptgroup`. It serves as
       * alternative token to the actual `MatOptgroup` class which could cause unnecessary
       * retention of the class and its component metadata.
       */


      var MAT_OPTGROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MatOptgroup');
      /**
       * Component that is used to group instances of `mat-option`.
       */

      var MatOptgroup = /*#__PURE__*/function (_MatOptgroupBase2) {
        _inherits(MatOptgroup, _MatOptgroupBase2);

        var _super12 = _createSuper(MatOptgroup);

        function MatOptgroup() {
          _classCallCheck(this, MatOptgroup);

          return _super12.apply(this, arguments);
        }

        return MatOptgroup;
      }(_MatOptgroupBase);

      MatOptgroup.ɵfac = function MatOptgroup_Factory(t) {
        return ɵMatOptgroup_BaseFactory(t || MatOptgroup);
      };

      MatOptgroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatOptgroup,
        selectors: [["mat-optgroup"]],
        hostAttrs: ["role", "group", 1, "mat-optgroup"],
        hostVars: 4,
        hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", ctx.disabled.toString())("aria-labelledby", ctx._labelId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-optgroup-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: "disabled"
        },
        exportAs: ["matOptgroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_OPTGROUP,
          useExisting: MatOptgroup
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 4,
        vars: 2,
        consts: [[1, "mat-optgroup-label", 3, "id"]],
        template: function MatOptgroup_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._labelId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
          }
        },
        styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      var ɵMatOptgroup_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatOptgroup);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptgroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-optgroup',
            exportAs: 'matOptgroup',
            template: "<label class=\"mat-optgroup-label\" [id]=\"_labelId\">{{ label }} <ng-content></ng-content></label>\n<ng-content select=\"mat-option, ng-container\"></ng-content>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            inputs: ['disabled'],
            host: {
              'class': 'mat-optgroup',
              'role': 'group',
              '[class.mat-optgroup-disabled]': 'disabled',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.aria-labelledby]': '_labelId'
            },
            providers: [{
              provide: MAT_OPTGROUP,
              useExisting: MatOptgroup
            }],
            styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Option IDs need to be unique across components, so this counter exists outside of
       * the component definition.
       */


      var _uniqueIdCounter = 0;
      /** Event object emitted by MatOption when selected or deselected. */

      var MatOptionSelectionChange = function MatOptionSelectionChange(
      /** Reference to the option that emitted the event. */
      source) {
        var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _classCallCheck(this, MatOptionSelectionChange);

        this.source = source;
        this.isUserInput = isUserInput;
      };
      /**
       * Injection token used to provide the parent component to options.
       */


      var MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_OPTION_PARENT_COMPONENT');

      var _MatOptionBase = /*#__PURE__*/function () {
        function _MatOptionBase(_element, _changeDetectorRef, _parent, group) {
          _classCallCheck(this, _MatOptionBase);

          this._element = _element;
          this._changeDetectorRef = _changeDetectorRef;
          this._parent = _parent;
          this.group = group;
          this._selected = false;
          this._active = false;
          this._disabled = false;
          this._mostRecentViewValue = '';
          /** The unique ID of the option. */

          this.id = "mat-option-".concat(_uniqueIdCounter++);
          /** Event emitted when the option is selected or deselected. */
          // tslint:disable-next-line:no-output-on-prefix

          this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the state of the option changes and any parents have to be notified. */

          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        }
        /** Whether the wrapping component is in multiple selection mode. */


        _createClass(_MatOptionBase, [{
          key: "select",

          /** Selects the option. */
          value: function select() {
            if (!this._selected) {
              this._selected = true;

              this._changeDetectorRef.markForCheck();

              this._emitSelectionChangeEvent();
            }
          }
          /** Deselects the option. */

        }, {
          key: "deselect",
          value: function deselect() {
            if (this._selected) {
              this._selected = false;

              this._changeDetectorRef.markForCheck();

              this._emitSelectionChangeEvent();
            }
          }
          /** Sets focus onto this option. */

        }, {
          key: "focus",
          value: function focus(_origin, options) {
            // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
            // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
            var element = this._getHostElement();

            if (typeof element.focus === 'function') {
              element.focus(options);
            }
          }
          /**
           * This method sets display styles on the option to make it appear
           * active. This is used by the ActiveDescendantKeyManager so key
           * events will display the proper options as active on arrow key events.
           */

        }, {
          key: "setActiveStyles",
          value: function setActiveStyles() {
            if (!this._active) {
              this._active = true;

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * This method removes display styles on the option that made it appear
           * active. This is used by the ActiveDescendantKeyManager so key
           * events will display the proper options as active on arrow key events.
           */

        }, {
          key: "setInactiveStyles",
          value: function setInactiveStyles() {
            if (this._active) {
              this._active = false;

              this._changeDetectorRef.markForCheck();
            }
          }
          /** Gets the label to be used when determining whether the option should be focused. */

        }, {
          key: "getLabel",
          value: function getLabel() {
            return this.viewValue;
          }
          /** Ensures the option is selected when activated from the keyboard. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
              this._selectViaInteraction(); // Prevent the page from scrolling down and form submits.


              event.preventDefault();
            }
          }
          /**
           * `Selects the option while indicating the selection came from the user. Used to
           * determine if the select's view -> model callback should be invoked.`
           */

        }, {
          key: "_selectViaInteraction",
          value: function _selectViaInteraction() {
            if (!this.disabled) {
              this._selected = this.multiple ? !this._selected : true;

              this._changeDetectorRef.markForCheck();

              this._emitSelectionChangeEvent(true);
            }
          }
          /**
           * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
           * attribute from single-selection, unselected options. Including the `aria-selected="false"`
           * attributes adds a significant amount of noise to screen-reader users without providing useful
           * information.
           */

        }, {
          key: "_getAriaSelected",
          value: function _getAriaSelected() {
            return this.selected || (this.multiple ? false : null);
          }
          /** Returns the correct tabindex for the option depending on disabled state. */

        }, {
          key: "_getTabIndex",
          value: function _getTabIndex() {
            return this.disabled ? '-1' : '0';
          }
          /** Gets the host DOM element. */

        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._element.nativeElement;
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            // Since parent components could be using the option's label to display the selected values
            // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
            // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
            // relatively cheap, however we still limit them only to selected options in order to avoid
            // hitting the DOM too often.
            if (this._selected) {
              var viewValue = this.viewValue;

              if (viewValue !== this._mostRecentViewValue) {
                this._mostRecentViewValue = viewValue;

                this._stateChanges.next();
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
          /** Emits the selection change event. */

        }, {
          key: "_emitSelectionChangeEvent",
          value: function _emitSelectionChangeEvent() {
            var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
          }
        }, {
          key: "multiple",
          get: function get() {
            return this._parent && this._parent.multiple;
          }
          /** Whether or not the option is currently selected. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          }
          /** Whether the option is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this.group && this.group.disabled || this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether ripples for the option are disabled. */

        }, {
          key: "disableRipple",
          get: function get() {
            return this._parent && this._parent.disableRipple;
          }
          /**
           * Whether or not the option is currently active and ready to be selected.
           * An active option displays styles as if it is focused, but the
           * focus is actually retained somewhere else. This comes in handy
           * for components like autocomplete where focus must remain on the input.
           */

        }, {
          key: "active",
          get: function get() {
            return this._active;
          }
          /**
           * The displayed value of the option. It is necessary to show the selected option in the
           * select's trigger.
           */

        }, {
          key: "viewValue",
          get: function get() {
            // TODO(kara): Add input property alternative for node envs.
            return (this._getHostElement().textContent || '').trim();
          }
        }]);

        return _MatOptionBase;
      }();

      _MatOptionBase.ɵfac = function _MatOptionBase_Factory(t) {
        return new (t || _MatOptionBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatOptgroupBase));
      };

      _MatOptionBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatOptionBase,
        inputs: {
          id: "id",
          disabled: "disabled",
          value: "value"
        },
        outputs: {
          onSelectionChange: "onSelectionChange"
        }
      });

      _MatOptionBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: undefined
        }, {
          type: _MatOptgroupBase
        }];
      };

      _MatOptionBase.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onSelectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatOptionBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: undefined
          }, {
            type: _MatOptgroupBase
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onSelectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * Single option inside of a `<mat-select>` element.
       */


      var MatOption = /*#__PURE__*/function (_MatOptionBase2) {
        _inherits(MatOption, _MatOptionBase2);

        var _super13 = _createSuper(MatOption);

        function MatOption(element, changeDetectorRef, parent, group) {
          _classCallCheck(this, MatOption);

          return _super13.call(this, element, changeDetectorRef, parent, group);
        }

        return MatOption;
      }(_MatOptionBase);

      MatOption.ɵfac = function MatOption_Factory(t) {
        return new (t || MatOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTGROUP, 8));
      };

      MatOption.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatOption,
        selectors: [["mat-option"]],
        hostAttrs: ["role", "option", 1, "mat-option", "mat-focus-indicator"],
        hostVars: 12,
        hostBindings: function MatOption_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatOption_click_HostBindingHandler() {
              return ctx._selectViaInteraction();
            })("keydown", function MatOption_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._getTabIndex())("aria-selected", ctx._getAriaSelected())("aria-disabled", ctx.disabled.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-selected", ctx.selected)("mat-option-multiple", ctx.multiple)("mat-active", ctx.active)("mat-option-disabled", ctx.disabled);
          }
        },
        exportAs: ["matOption"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c2,
        decls: 4,
        vars: 3,
        consts: [["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"], [1, "mat-option-text"], ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"]],
        template: function MatOption_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatOption_mat_pseudo_checkbox_0_Template, 1, 2, "mat-pseudo-checkbox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], MatRipple, MatPseudoCheckbox],
        styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.cdk-high-contrast-active .mat-option .mat-option-ripple{opacity:.5}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_OPTION_PARENT_COMPONENT]
          }]
        }, {
          type: MatOptgroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_OPTGROUP]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-option',
            exportAs: 'matOption',
            host: {
              'role': 'option',
              '[attr.tabindex]': '_getTabIndex()',
              '[class.mat-selected]': 'selected',
              '[class.mat-option-multiple]': 'multiple',
              '[class.mat-active]': 'active',
              '[id]': 'id',
              '[attr.aria-selected]': '_getAriaSelected()',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[class.mat-option-disabled]': 'disabled',
              '(click)': '_selectViaInteraction()',
              '(keydown)': '_handleKeydown($event)',
              'class': 'mat-option mat-focus-indicator'
            },
            template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\"\n    [state]=\"selected ? 'checked' : 'unchecked'\" [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n<span class=\"mat-option-text\"><ng-content></ng-content></span>\n\n<div class=\"mat-option-ripple\" mat-ripple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disabled || disableRipple\">\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.cdk-high-contrast-active .mat-option .mat-option-ripple{opacity:.5}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_OPTION_PARENT_COMPONENT]
            }]
          }, {
            type: MatOptgroup,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_OPTGROUP]
            }]
          }];
        }, null);
      })();
      /**
       * Counts the amount of option group labels that precede the specified option.
       * @param optionIndex Index of the option at which to start counting.
       * @param options Flat list of all of the options.
       * @param optionGroups Flat list of all of the option groups.
       * @docs-private
       */


      function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
        if (optionGroups.length) {
          var optionsArray = options.toArray();
          var groups = optionGroups.toArray();
          var groupCounter = 0;

          for (var i = 0; i < optionIndex + 1; i++) {
            if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
              groupCounter++;
            }
          }

          return groupCounter;
        }

        return 0;
      }
      /**
       * Determines the position to which to scroll a panel in order for an option to be into view.
       * @param optionOffset Offset of the option from the top of the panel.
       * @param optionHeight Height of the options.
       * @param currentScrollPosition Current scroll position of the panel.
       * @param panelHeight Height of the panel.
       * @docs-private
       */


      function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
        if (optionOffset < currentScrollPosition) {
          return optionOffset;
        }

        if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
          return Math.max(0, optionOffset - panelHeight + optionHeight);
        }

        return currentScrollPosition;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatOptionModule = function MatOptionModule() {
        _classCallCheck(this, MatOptionModule);
      };

      MatOptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatOptionModule
      });
      MatOptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatOptionModule_Factory(t) {
          return new (t || MatOptionModule)();
        },
        imports: [[MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatPseudoCheckboxModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatOptionModule, {
          declarations: function declarations() {
            return [MatOption, MatOptgroup];
          },
          imports: function imports() {
            return [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatPseudoCheckboxModule];
          },
          exports: function exports() {
            return [MatOption, MatOptgroup];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatPseudoCheckboxModule],
            exports: [MatOption, MatOptgroup],
            declarations: [MatOption, MatOptgroup]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * InjectionToken that can be used to specify the global label options.
       * @deprecated Use `MAT_FORM_FIELD_DEFAULT_OPTIONS` injection token from
       *     `@angular/material/form-field` instead.
       * @breaking-change 11.0.0
       */


      var MAT_LABEL_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-label-global-options');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * When constructing a Date, the month is zero-based. This can be confusing, since people are
       * used to seeing them one-based. So we create these aliases to make writing the tests easier.
       * @docs-private
       * @breaking-change 8.0.0 Remove this with V8 since it was only targeted for testing.
       */

      var JAN = 0,
          FEB = 1,
          MAR = 2,
          APR = 3,
          MAY = 4,
          JUN = 5,
          JUL = 6,
          AUG = 7,
          SEP = 8,
          OCT = 9,
          NOV = 10,
          DEC = 11;
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=core.js.map

      /***/
    },

    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js ***!
      \****************************************************************************/

    /*! exports provided: MAT_ERROR, MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS, MAT_PREFIX, MAT_SUFFIX, MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, _MAT_HINT, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError, matFormFieldAnimations */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015FormFieldJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_ERROR", function () {
        return MAT_ERROR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD", function () {
        return MAT_FORM_FIELD;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function () {
        return MAT_FORM_FIELD_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PREFIX", function () {
        return MAT_PREFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SUFFIX", function () {
        return MAT_SUFFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatError", function () {
        return MatError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormField", function () {
        return MatFormField;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function () {
        return MatFormFieldControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function () {
        return MatFormFieldModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHint", function () {
        return MatHint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLabel", function () {
        return MatLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function () {
        return MatPlaceholder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPrefix", function () {
        return MatPrefix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSuffix", function () {
        return MatSuffix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MAT_HINT", function () {
        return _MAT_HINT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function () {
        return getMatFormFieldDuplicatedHintError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function () {
        return getMatFormFieldMissingControlError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function () {
        return getMatFormFieldPlaceholderConflictError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function () {
        return matFormFieldAnimations;
      });
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _c0 = ["underline"];
      var _c1 = ["connectionContainer"];
      var _c2 = ["inputContainer"];
      var _c3 = ["label"];

      function MatFormField_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
      }

      function MatFormField_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_label_9_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10._control.placeholder);
        }
      }

      function MatFormField_label_9_ng_content_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
        }
      }

      function MatFormField_label_9_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_label_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.updateOutlineGap();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MatFormField_label_9_ng_content_3_Template, 1, 0, "ng-content", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-form-field-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-accent", ctx_r4.color == "accent")("mat-warn", ctx_r4.color == "warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r4.appearance != "outline")("id", ctx_r4._labelId)("ngSwitch", ctx_r4._hasLabel());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx_r4._control.id)("aria-owns", ctx_r4._control.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.hideRequiredMarker && ctx_r4._control.required && !ctx_r4._control.disabled);
        }
      }

      function MatFormField_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-accent", ctx_r6.color == "accent")("mat-warn", ctx_r6.color == "warn");
        }
      }

      function MatFormField_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transitionMessages", ctx_r7._subscriptAnimationState);
        }
      }

      function MatFormField_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r16._hintLabelId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r16.hintLabel);
        }
      }

      function MatFormField_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatFormField_div_14_div_1_Template, 2, 2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transitionMessages", ctx_r8._subscriptAnimationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.hintLabel);
        }
      }

      var _c4 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
      var _c5 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
      var nextUniqueId = 0;
      /**
       * Injection token that can be used to reference instances of `MatError`. It serves as
       * alternative token to the actual `MatError` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var MAT_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatError');
      /** Single error message to be shown underneath the form field. */

      var MatError = function MatError() {
        _classCallCheck(this, MatError);

        this.id = "mat-error-".concat(nextUniqueId++);
      };

      MatError.ɵfac = function MatError_Factory(t) {
        return new (t || MatError)();
      };

      MatError.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatError,
        selectors: [["mat-error"]],
        hostAttrs: ["role", "alert", 1, "mat-error"],
        hostVars: 1,
        hostBindings: function MatError_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id);
          }
        },
        inputs: {
          id: "id"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_ERROR,
          useExisting: MatError
        }])]
      });
      MatError.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatError, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-error',
            host: {
              'class': 'mat-error',
              'role': 'alert',
              '[attr.id]': 'id'
            },
            providers: [{
              provide: MAT_ERROR,
              useExisting: MatError
            }]
          }]
        }], function () {
          return [];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by the MatFormField.
       * @docs-private
       */


      var matFormFieldAnimations = {
        /** Animation that transitions the form field's error and hint messages. */
        transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 1,
          transform: 'translateY(0%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 0,
          transform: 'translateY(-100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** An interface which allows a control to work inside of a `MatFormField`. */

      var MatFormFieldControl = function MatFormFieldControl() {
        _classCallCheck(this, MatFormFieldControl);
      };

      MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(t) {
        return new (t || MatFormFieldControl)();
      };

      MatFormFieldControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatFormFieldControl
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormFieldControl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */


      function getMatFormFieldPlaceholderConflictError() {
        return Error('Placeholder attribute and child element were both specified.');
      }
      /** @docs-private */


      function getMatFormFieldDuplicatedHintError(align) {
        return Error("A hint was already declared for 'align=\"".concat(align, "\"'."));
      }
      /** @docs-private */


      function getMatFormFieldMissingControlError() {
        return Error('mat-form-field must contain a MatFormFieldControl.');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var nextUniqueId$1 = 0;
      /**
       * Injection token that can be used to reference instances of `MatHint`. It serves as
       * alternative token to the actual `MatHint` class which could cause unnecessary
       * retention of the class and its directive metadata.
       *
       * *Note*: This is not part of the public API as the MDC-based form-field will not
       * need a lightweight token for `MatHint` and we want to reduce breaking changes.
       */

      var _MAT_HINT = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatHint');
      /** Hint text to be shown underneath the form field control. */


      var MatHint = function MatHint() {
        _classCallCheck(this, MatHint);

        /** Whether to align the hint label at the start or end of the line. */
        this.align = 'start';
        /** Unique ID for the hint. Used for the aria-describedby on the form field control. */

        this.id = "mat-hint-".concat(nextUniqueId$1++);
      };

      MatHint.ɵfac = function MatHint_Factory(t) {
        return new (t || MatHint)();
      };

      MatHint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatHint,
        selectors: [["mat-hint"]],
        hostAttrs: [1, "mat-hint"],
        hostVars: 4,
        hostBindings: function MatHint_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("align", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-form-field-hint-end", ctx.align === "end");
          }
        },
        inputs: {
          align: "align",
          id: "id"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _MAT_HINT,
          useExisting: MatHint
        }])]
      });
      MatHint.propDecorators = {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatHint, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-hint',
            host: {
              'class': 'mat-hint',
              '[class.mat-form-field-hint-end]': 'align === "end"',
              '[attr.id]': 'id',
              // Remove align attribute to prevent it from interfering with layout.
              '[attr.align]': 'null'
            },
            providers: [{
              provide: _MAT_HINT,
              useExisting: MatHint
            }]
          }]
        }], function () {
          return [];
        }, {
          align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The floating label for a `mat-form-field`. */


      var MatLabel = function MatLabel() {
        _classCallCheck(this, MatLabel);
      };

      MatLabel.ɵfac = function MatLabel_Factory(t) {
        return new (t || MatLabel)();
      };

      MatLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatLabel,
        selectors: [["mat-label"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-label'
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The placeholder text for an `MatFormField`.
       * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
       *     placeholder.
       * @breaking-change 8.0.0
       */


      var MatPlaceholder = function MatPlaceholder() {
        _classCallCheck(this, MatPlaceholder);
      };

      MatPlaceholder.ɵfac = function MatPlaceholder_Factory(t) {
        return new (t || MatPlaceholder)();
      };

      MatPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatPlaceholder,
        selectors: [["mat-placeholder"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatPlaceholder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-placeholder'
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `MatPrefix`. It serves as
       * alternative token to the actual `MatPrefix` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatPrefix');
      /** Prefix to be placed in front of the form field. */

      var MatPrefix = function MatPrefix() {
        _classCallCheck(this, MatPrefix);
      };

      MatPrefix.ɵfac = function MatPrefix_Factory(t) {
        return new (t || MatPrefix)();
      };

      MatPrefix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatPrefix,
        selectors: [["", "matPrefix", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_PREFIX,
          useExisting: MatPrefix
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatPrefix, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matPrefix]',
            providers: [{
              provide: MAT_PREFIX,
              useExisting: MatPrefix
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `MatSuffix`. It serves as
       * alternative token to the actual `MatSuffix` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_SUFFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatSuffix');
      /** Suffix to be placed at the end of the form field. */

      var MatSuffix = function MatSuffix() {
        _classCallCheck(this, MatSuffix);
      };

      MatSuffix.ɵfac = function MatSuffix_Factory(t) {
        return new (t || MatSuffix)();
      };

      MatSuffix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatSuffix,
        selectors: [["", "matSuffix", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_SUFFIX,
          useExisting: MatSuffix
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSuffix, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matSuffix]',
            providers: [{
              provide: MAT_SUFFIX,
              useExisting: MatSuffix
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var nextUniqueId$2 = 0;
      var floatingLabelScale = 0.75;
      var outlineGapPadding = 5;
      /**
       * Boilerplate for applying mixins to MatFormField.
       * @docs-private
       */

      var MatFormFieldBase = function MatFormFieldBase(_elementRef) {
        _classCallCheck(this, MatFormFieldBase);

        this._elementRef = _elementRef;
      };
      /**
       * Base class to which we're applying the form field mixins.
       * @docs-private
       */


      var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(MatFormFieldBase, 'primary');
      /**
       * Injection token that can be used to configure the
       * default options for all form field within an app.
       */


      var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
      /**
       * Injection token that can be used to inject an instances of `MatFormField`. It serves
       * as alternative token to the actual `MatFormField` class which would cause unnecessary
       * retention of the `MatFormField` class and its component metadata.
       */

      var MAT_FORM_FIELD = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatFormField');
      /** Container for form controls that applies Material Design styling and behavior. */

      var MatFormField = /*#__PURE__*/function (_MatFormFieldMixinBas) {
        _inherits(MatFormField, _MatFormFieldMixinBas);

        var _super14 = _createSuper(MatFormField);

        function MatFormField(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
          var _this41;

          _classCallCheck(this, MatFormField);

          _this41 = _super14.call(this, _elementRef);
          _this41._elementRef = _elementRef;
          _this41._changeDetectorRef = _changeDetectorRef;
          _this41._dir = _dir;
          _this41._defaults = _defaults;
          _this41._platform = _platform;
          _this41._ngZone = _ngZone;
          /**
           * Whether the outline gap needs to be calculated
           * immediately on the next change detection run.
           */

          _this41._outlineGapCalculationNeededImmediately = false;
          /** Whether the outline gap needs to be calculated next time the zone has stabilized. */

          _this41._outlineGapCalculationNeededOnStable = false;
          _this41._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Override for the logic that disables the label animation in certain cases. */

          _this41._showAlwaysAnimate = false;
          /** State of the mat-hint and mat-error animations. */

          _this41._subscriptAnimationState = '';
          _this41._hintLabel = ''; // Unique id for the hint label.

          _this41._hintLabelId = "mat-hint-".concat(nextUniqueId$2++); // Unique id for the label element.

          _this41._labelId = "mat-form-field-label-".concat(nextUniqueId$2++);
          _this41._labelOptions = labelOptions ? labelOptions : {};
          _this41.floatLabel = _this41._getDefaultFloatLabelState();
          _this41._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

          _this41.appearance = _defaults && _defaults.appearance ? _defaults.appearance : 'legacy';
          _this41._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
          return _this41;
        }
        /** The form-field appearance style. */


        _createClass(MatFormField, [{
          key: "_shouldAlwaysFloat",

          /** Whether the floating label should always float or not. */
          value: function _shouldAlwaysFloat() {
            return this.floatLabel === 'always' && !this._showAlwaysAnimate;
          }
          /** Whether the label can float or not. */

        }, {
          key: "_canLabelFloat",
          value: function _canLabelFloat() {
            return this.floatLabel !== 'never';
          }
          /** Text for the form field hint. */

        }, {
          key: "getLabelId",

          /**
           * Gets the id of the label element. If no label is present, returns `null`.
           */
          value: function getLabelId() {
            return this._hasFloatingLabel() ? this._labelId : null;
          }
          /**
           * Gets an ElementRef for the element that a overlay attached to the form-field should be
           * positioned relative to.
           */

        }, {
          key: "getConnectedOverlayOrigin",
          value: function getConnectedOverlayOrigin() {
            return this._connectionContainerRef || this._elementRef;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this42 = this;

            this._validateControlChild();

            var control = this._control;

            if (control.controlType) {
              this._elementRef.nativeElement.classList.add("mat-form-field-type-".concat(control.controlType));
            } // Subscribe to changes in the child control state in order to update the form field UI.


            control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this42._validatePlaceholders();

              _this42._syncDescribedByIds();

              _this42._changeDetectorRef.markForCheck();
            }); // Run change detection if the value changes.

            if (control.ngControl && control.ngControl.valueChanges) {
              control.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function () {
                return _this42._changeDetectorRef.markForCheck();
              });
            } // Note that we have to run outside of the `NgZone` explicitly,
            // in order to avoid throwing users into an infinite loop
            // if `zone-patch-rxjs` is included.


            this._ngZone.runOutsideAngular(function () {
              _this42._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this42._destroyed)).subscribe(function () {
                if (_this42._outlineGapCalculationNeededOnStable) {
                  _this42.updateOutlineGap();
                }
              });
            }); // Run change detection and update the outline if the suffix or prefix changes.


            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(function () {
              _this42._outlineGapCalculationNeededOnStable = true;

              _this42._changeDetectorRef.markForCheck();
            }); // Re-validate when the number of hints changes.

            this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this42._processHints();

              _this42._changeDetectorRef.markForCheck();
            }); // Update the aria-described by when the number of errors changes.


            this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this42._syncDescribedByIds();

              _this42._changeDetectorRef.markForCheck();
            });

            if (this._dir) {
              this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function () {
                if (typeof requestAnimationFrame === 'function') {
                  _this42._ngZone.runOutsideAngular(function () {
                    requestAnimationFrame(function () {
                      return _this42.updateOutlineGap();
                    });
                  });
                } else {
                  _this42.updateOutlineGap();
                }
              });
            }
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this._validateControlChild();

            if (this._outlineGapCalculationNeededImmediately) {
              this.updateOutlineGap();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // Avoid animations on load.
            this._subscriptAnimationState = 'enter';

            this._changeDetectorRef.detectChanges();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Determines whether a class from the NgControl should be forwarded to the host element. */

        }, {
          key: "_shouldForward",
          value: function _shouldForward(prop) {
            var ngControl = this._control ? this._control.ngControl : null;
            return ngControl && ngControl[prop];
          }
        }, {
          key: "_hasPlaceholder",
          value: function _hasPlaceholder() {
            return !!(this._control && this._control.placeholder || this._placeholderChild);
          }
        }, {
          key: "_hasLabel",
          value: function _hasLabel() {
            return !!(this._labelChildNonStatic || this._labelChildStatic);
          }
        }, {
          key: "_shouldLabelFloat",
          value: function _shouldLabelFloat() {
            return this._canLabelFloat() && (this._control && this._control.shouldLabelFloat || this._shouldAlwaysFloat());
          }
        }, {
          key: "_hideControlPlaceholder",
          value: function _hideControlPlaceholder() {
            // In the legacy appearance the placeholder is promoted to a label if no label is given.
            return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
          }
        }, {
          key: "_hasFloatingLabel",
          value: function _hasFloatingLabel() {
            // In the legacy appearance the placeholder is promoted to a label if no label is given.
            return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
          }
          /** Determines whether to display hints or errors. */

        }, {
          key: "_getDisplayedMessages",
          value: function _getDisplayedMessages() {
            return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
          }
          /** Animates the placeholder up and locks it in position. */

        }, {
          key: "_animateAndLockLabel",
          value: function _animateAndLockLabel() {
            var _this43 = this;

            if (this._hasFloatingLabel() && this._canLabelFloat()) {
              // If animations are disabled, we shouldn't go in here,
              // because the `transitionend` will never fire.
              if (this._animationsEnabled && this._label) {
                this._showAlwaysAnimate = true;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
                  _this43._showAlwaysAnimate = false;
                });
              }

              this.floatLabel = 'always';

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
           * or child element with the `mat-placeholder` directive).
           */

        }, {
          key: "_validatePlaceholders",
          value: function _validatePlaceholders() {
            if (this._control.placeholder && this._placeholderChild && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatFormFieldPlaceholderConflictError();
            }
          }
          /** Does any extra processing that is required when handling the hints. */

        }, {
          key: "_processHints",
          value: function _processHints() {
            this._validateHints();

            this._syncDescribedByIds();
          }
          /**
           * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
           * attribute being considered as `align="start"`.
           */

        }, {
          key: "_validateHints",
          value: function _validateHints() {
            var _this44 = this;

            if (this._hintChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              var startHint;
              var endHint;

              this._hintChildren.forEach(function (hint) {
                if (hint.align === 'start') {
                  if (startHint || _this44.hintLabel) {
                    throw getMatFormFieldDuplicatedHintError('start');
                  }

                  startHint = hint;
                } else if (hint.align === 'end') {
                  if (endHint) {
                    throw getMatFormFieldDuplicatedHintError('end');
                  }

                  endHint = hint;
                }
              });
            }
          }
          /** Gets the default float label state. */

        }, {
          key: "_getDefaultFloatLabelState",
          value: function _getDefaultFloatLabelState() {
            return this._defaults && this._defaults.floatLabel || this._labelOptions["float"] || 'auto';
          }
          /**
           * Sets the list of element IDs that describe the child control. This allows the control to update
           * its `aria-describedby` attribute accordingly.
           */

        }, {
          key: "_syncDescribedByIds",
          value: function _syncDescribedByIds() {
            if (this._control) {
              var ids = []; // TODO(wagnermaciel): Remove the type check when we find the root cause of this bug.

              if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === 'string') {
                ids.push.apply(ids, _toConsumableArray(this._control.userAriaDescribedBy.split(' ')));
              }

              if (this._getDisplayedMessages() === 'hint') {
                var startHint = this._hintChildren ? this._hintChildren.find(function (hint) {
                  return hint.align === 'start';
                }) : null;
                var endHint = this._hintChildren ? this._hintChildren.find(function (hint) {
                  return hint.align === 'end';
                }) : null;

                if (startHint) {
                  ids.push(startHint.id);
                } else if (this._hintLabel) {
                  ids.push(this._hintLabelId);
                }

                if (endHint) {
                  ids.push(endHint.id);
                }
              } else if (this._errorChildren) {
                ids.push.apply(ids, _toConsumableArray(this._errorChildren.map(function (error) {
                  return error.id;
                })));
              }

              this._control.setDescribedByIds(ids);
            }
          }
          /** Throws an error if the form field's control is missing. */

        }, {
          key: "_validateControlChild",
          value: function _validateControlChild() {
            if (!this._control && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatFormFieldMissingControlError();
            }
          }
          /**
           * Updates the width and position of the gap in the outline. Only relevant for the outline
           * appearance.
           */

        }, {
          key: "updateOutlineGap",
          value: function updateOutlineGap() {
            var labelEl = this._label ? this._label.nativeElement : null;

            if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
              return;
            }

            if (!this._platform.isBrowser) {
              // getBoundingClientRect isn't available on the server.
              return;
            } // If the element is not present in the DOM, the outline gap will need to be calculated
            // the next time it is checked and in the DOM.


            if (!this._isAttachedToDOM()) {
              this._outlineGapCalculationNeededImmediately = true;
              return;
            }

            var startWidth = 0;
            var gapWidth = 0;
            var container = this._connectionContainerRef.nativeElement;
            var startEls = container.querySelectorAll('.mat-form-field-outline-start');
            var gapEls = container.querySelectorAll('.mat-form-field-outline-gap');

            if (this._label && this._label.nativeElement.children.length) {
              var containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
              // invisible and we can't calculate the outline gap. Mark the element as needing
              // to be checked the next time the zone stabilizes. We can't do this immediately
              // on the next change detection, because even if the element becomes visible,
              // the `ClientRect` won't be reclaculated immediately. We reset the
              // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

              if (containerRect.width === 0 && containerRect.height === 0) {
                this._outlineGapCalculationNeededOnStable = true;
                this._outlineGapCalculationNeededImmediately = false;
                return;
              }

              var containerStart = this._getStartEnd(containerRect);

              var labelChildren = labelEl.children;

              var labelStart = this._getStartEnd(labelChildren[0].getBoundingClientRect());

              var labelWidth = 0;

              for (var i = 0; i < labelChildren.length; i++) {
                labelWidth += labelChildren[i].offsetWidth;
              }

              startWidth = Math.abs(labelStart - containerStart) - outlineGapPadding;
              gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
            }

            for (var _i = 0; _i < startEls.length; _i++) {
              startEls[_i].style.width = "".concat(startWidth, "px");
            }

            for (var _i2 = 0; _i2 < gapEls.length; _i2++) {
              gapEls[_i2].style.width = "".concat(gapWidth, "px");
            }

            this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
          }
          /** Gets the start end of the rect considering the current directionality. */

        }, {
          key: "_getStartEnd",
          value: function _getStartEnd(rect) {
            return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
          }
          /** Checks whether the form field is attached to the DOM. */

        }, {
          key: "_isAttachedToDOM",
          value: function _isAttachedToDOM() {
            var element = this._elementRef.nativeElement;

            if (element.getRootNode) {
              var rootNode = element.getRootNode(); // If the element is inside the DOM the root node will be either the document
              // or the closest shadow root, otherwise it'll be the element itself.

              return rootNode && rootNode !== element;
            } // Otherwise fall back to checking if it's in the document. This doesn't account for
            // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.


            return document.documentElement.contains(element);
          }
        }, {
          key: "appearance",
          get: function get() {
            return this._appearance;
          },
          set: function set(value) {
            var oldValue = this._appearance;
            this._appearance = value || this._defaults && this._defaults.appearance || 'legacy';

            if (this._appearance === 'outline' && oldValue !== value) {
              this._outlineGapCalculationNeededOnStable = true;
            }
          }
          /** Whether the required marker should be hidden. */

        }, {
          key: "hideRequiredMarker",
          get: function get() {
            return this._hideRequiredMarker;
          },
          set: function set(value) {
            this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "hintLabel",
          get: function get() {
            return this._hintLabel;
          },
          set: function set(value) {
            this._hintLabel = value;

            this._processHints();
          }
          /**
           * Whether the label should always float, never float or float as the user types.
           *
           * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
           * way to make the floating label emulate the behavior of a standard input placeholder. However
           * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
           * appearances the `never` option has been disabled in favor of just using the placeholder.
           */

        }, {
          key: "floatLabel",
          get: function get() {
            return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
          },
          set: function set(value) {
            if (value !== this._floatLabel) {
              this._floatLabel = value || this._getDefaultFloatLabelState();

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "_control",
          get: function get() {
            // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
            //  We should clean this up once Ivy is the default renderer.
            return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
          },
          set: function set(value) {
            this._explicitFormFieldControl = value;
          }
        }]);

        return MatFormField;
      }(_MatFormFieldMixinBase);

      MatFormField.ɵfac = function MatFormField_Factory(t) {
        return new (t || MatFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatFormField.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatFormField,
        selectors: [["mat-form-field"]],
        contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, MatFormFieldControl, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatLabel, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, MatLabel, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatPlaceholder, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_ERROR, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _MAT_HINT, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_PREFIX, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_SUFFIX, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._controlNonStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._controlStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._placeholderChild = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
          }
        },
        viewQuery: function MatFormField_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.underlineRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._connectionContainerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._inputContainerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
          }
        },
        hostAttrs: [1, "mat-form-field"],
        hostVars: 44,
        hostBindings: function MatFormField_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat())("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("mat-accent", ctx.color == "accent")("mat-warn", ctx.color == "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
          }
        },
        inputs: {
          color: "color",
          floatLabel: "floatLabel",
          appearance: "appearance",
          hideRequiredMarker: "hideRequiredMarker",
          hintLabel: "hintLabel"
        },
        exportAs: ["matFormField"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_FORM_FIELD,
          useExisting: MatFormField
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c5,
        decls: 15,
        vars: 8,
        consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], ["underline", ""], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]],
        template: function MatFormField_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatFormField_Template_div_click_1_listener($event) {
              return ctx._control.onContainerClick && ctx._control.onContainerClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatFormField_div_4_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MatFormField_label_9_Template, 5, 16, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MatFormField_div_10_Template, 2, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MatFormField_div_11_Template, 3, 4, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MatFormField_div_13_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MatFormField_div_14_Template, 5, 2, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.appearance == "outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._prefixChildren.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._hasFloatingLabel());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._suffixChildren.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.appearance != "outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx._getDisplayedMessages());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "hint");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]],
        styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"],
        encapsulation: 2,
        data: {
          animation: [matFormFieldAnimations.transitionMessages]
        },
        changeDetection: 0
      });

      MatFormField.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatFormField.propDecorators = {
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hideRequiredMarker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hintLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        floatLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        underlineRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['underline']
        }],
        _connectionContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['connectionContainer', {
            "static": true
          }]
        }],
        _inputContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['inputContainer']
        }],
        _label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['label']
        }],
        _controlNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatFormFieldControl]
        }],
        _controlStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatFormFieldControl, {
            "static": true
          }]
        }],
        _labelChildNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatLabel]
        }],
        _labelChildStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatLabel, {
            "static": true
          }]
        }],
        _placeholderChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatPlaceholder]
        }],
        _errorChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MAT_ERROR, {
            descendants: true
          }]
        }],
        _hintChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_MAT_HINT, {
            descendants: true
          }]
        }],
        _prefixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MAT_PREFIX, {
            descendants: true
          }]
        }],
        _suffixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MAT_SUFFIX, {
            descendants: true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormField, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-form-field',
            exportAs: 'matFormField',
            template: "<div class=\"mat-form-field-wrapper\">\n  <div class=\"mat-form-field-flex\" #connectionContainer\n       (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n\n    <!-- Outline used for outline appearance. -->\n    <ng-container *ngIf=\"appearance == 'outline'\">\n      <div class=\"mat-form-field-outline\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n      <div class=\"mat-form-field-outline mat-form-field-outline-thick\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n    </ng-container>\n\n    <div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\">\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-infix\" #inputContainer>\n      <ng-content></ng-content>\n\n      <span class=\"mat-form-field-label-wrapper\">\n        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n             read if it comes before the control in the DOM. -->\n        <label class=\"mat-form-field-label\"\n               (cdkObserveContent)=\"updateOutlineGap()\"\n               [cdkObserveContentDisabled]=\"appearance != 'outline'\"\n               [id]=\"_labelId\"\n               [attr.for]=\"_control.id\"\n               [attr.aria-owns]=\"_control.id\"\n               [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-accent]=\"color == 'accent'\"\n               [class.mat-warn]=\"color == 'warn'\"\n               #label\n               *ngIf=\"_hasFloatingLabel()\"\n               [ngSwitch]=\"_hasLabel()\">\n\n          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->\n          <ng-container *ngSwitchCase=\"false\">\n            <ng-content select=\"mat-placeholder\"></ng-content>\n            <span>{{_control.placeholder}}</span>\n          </ng-container>\n\n          <ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content>\n\n          <!-- @breaking-change 8.0.0 remove `mat-placeholder-required` class -->\n          <span\n            class=\"mat-placeholder-required mat-form-field-required-marker\"\n            aria-hidden=\"true\"\n            *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n        </label>\n      </span>\n    </div>\n\n    <div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <!-- Underline used for legacy, standard, and box appearances. -->\n  <div class=\"mat-form-field-underline\" #underline\n       *ngIf=\"appearance != 'outline'\">\n    <span class=\"mat-form-field-ripple\"\n          [class.mat-accent]=\"color == 'accent'\"\n          [class.mat-warn]=\"color == 'warn'\"></span>\n  </div>\n\n  <div class=\"mat-form-field-subscript-wrapper\"\n       [ngSwitch]=\"_getDisplayedMessages()\">\n    <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n      <ng-content select=\"mat-error\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n      [@transitionMessages]=\"_subscriptAnimationState\">\n      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->\n      <div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div>\n      <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n      <div class=\"mat-form-field-hint-spacer\"></div>\n      <ng-content select=\"mat-hint[align='end']\"></ng-content>\n    </div>\n  </div>\n</div>\n",
            animations: [matFormFieldAnimations.transitionMessages],
            host: {
              'class': 'mat-form-field',
              '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
              '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
              '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
              '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
              '[class.mat-form-field-invalid]': '_control.errorState',
              '[class.mat-form-field-can-float]': '_canLabelFloat()',
              '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
              '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
              '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
              '[class.mat-form-field-disabled]': '_control.disabled',
              '[class.mat-form-field-autofilled]': '_control.autofilled',
              '[class.mat-focused]': '_control.focused',
              '[class.mat-accent]': 'color == "accent"',
              '[class.mat-warn]': 'color == "warn"',
              '[class.ng-untouched]': '_shouldForward("untouched")',
              '[class.ng-touched]': '_shouldForward("touched")',
              '[class.ng-pristine]': '_shouldForward("pristine")',
              '[class.ng-dirty]': '_shouldForward("dirty")',
              '[class.ng-valid]': '_shouldForward("valid")',
              '[class.ng-invalid]': '_shouldForward("invalid")',
              '[class.ng-pending]': '_shouldForward("pending")',
              '[class._mat-animation-noopable]': '!_animationsEnabled'
            },
            inputs: ['color'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            providers: [{
              provide: MAT_FORM_FIELD,
              useExisting: MatFormField
            }],
            styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          floatLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          hideRequiredMarker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          hintLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          underlineRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['underline']
          }],
          _connectionContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['connectionContainer', {
              "static": true
            }]
          }],
          _inputContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['inputContainer']
          }],
          _label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['label']
          }],
          _controlNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatFormFieldControl]
          }],
          _controlStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatFormFieldControl, {
              "static": true
            }]
          }],
          _labelChildNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatLabel]
          }],
          _labelChildStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatLabel, {
              "static": true
            }]
          }],
          _placeholderChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatPlaceholder]
          }],
          _errorChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_ERROR, {
              descendants: true
            }]
          }],
          _hintChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_MAT_HINT, {
              descendants: true
            }]
          }],
          _prefixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_PREFIX, {
              descendants: true
            }]
          }],
          _suffixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_SUFFIX, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatFormFieldModule = function MatFormFieldModule() {
        _classCallCheck(this, MatFormFieldModule);
      };

      MatFormFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatFormFieldModule
      });
      MatFormFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatFormFieldModule_Factory(t) {
          return new (t || MatFormFieldModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatFormFieldModule, {
          declarations: function declarations() {
            return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormFieldModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=form-field.js.map

      /***/

    },

    /***/
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js ***!
      \***********************************************************************/

    /*! exports provided: MAT_INPUT_VALUE_ACCESSOR, MatInput, MatInputModule, MatTextareaAutosize, getMatInputUnsupportedTypeError */

    /***/
    function node_modulesAngularMaterial__ivy_ngcc__Fesm2015InputJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function () {
        return MAT_INPUT_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatInput", function () {
        return MatInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatInputModule", function () {
        return MatInputModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function () {
        return MatTextareaAutosize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function () {
        return getMatInputUnsupportedTypeError;
      });
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "./node_modules/@angular/cdk/fesm2015/coercion.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Directive to automatically resize a textarea to fit its content.
       * @deprecated Use `cdkTextareaAutosize` from `@angular/cdk/text-field` instead.
       * @breaking-change 8.0.0
       */


      var MatTextareaAutosize = /*#__PURE__*/function (_angular_cdk_text_fie) {
        _inherits(MatTextareaAutosize, _angular_cdk_text_fie);

        var _super15 = _createSuper(MatTextareaAutosize);

        function MatTextareaAutosize() {
          _classCallCheck(this, MatTextareaAutosize);

          return _super15.apply(this, arguments);
        }

        _createClass(MatTextareaAutosize, [{
          key: "matAutosizeMinRows",
          get: function get() {
            return this.minRows;
          },
          set: function set(value) {
            this.minRows = value;
          }
        }, {
          key: "matAutosizeMaxRows",
          get: function get() {
            return this.maxRows;
          },
          set: function set(value) {
            this.maxRows = value;
          }
        }, {
          key: "matAutosize",
          get: function get() {
            return this.enabled;
          },
          set: function set(value) {
            this.enabled = value;
          }
        }, {
          key: "matTextareaAutosize",
          get: function get() {
            return this.enabled;
          },
          set: function set(value) {
            this.enabled = value;
          }
        }]);

        return MatTextareaAutosize;
      }(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["CdkTextareaAutosize"]);

      MatTextareaAutosize.ɵfac = function MatTextareaAutosize_Factory(t) {
        return ɵMatTextareaAutosize_BaseFactory(t || MatTextareaAutosize);
      };

      MatTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatTextareaAutosize,
        selectors: [["textarea", "mat-autosize", ""], ["textarea", "matTextareaAutosize", ""]],
        hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize", "mat-autosize"],
        inputs: {
          cdkAutosizeMinRows: "cdkAutosizeMinRows",
          cdkAutosizeMaxRows: "cdkAutosizeMaxRows",
          matAutosizeMinRows: "matAutosizeMinRows",
          matAutosizeMaxRows: "matAutosizeMaxRows",
          matAutosize: ["mat-autosize", "matAutosize"],
          matTextareaAutosize: "matTextareaAutosize"
        },
        exportAs: ["matTextareaAutosize"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });
      MatTextareaAutosize.propDecorators = {
        matAutosizeMinRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        matAutosizeMaxRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        matAutosize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['mat-autosize']
        }],
        matTextareaAutosize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      var ɵMatTextareaAutosize_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTextareaAutosize);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTextareaAutosize, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
            exportAs: 'matTextareaAutosize',
            inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
            host: {
              'class': 'cdk-textarea-autosize mat-autosize',
              // Textarea elements that have the directive applied should have a single row by default.
              // Browsers normally show two rows by default and therefore this limits the minRows binding.
              'rows': '1'
            }
          }]
        }], null, {
          matAutosizeMinRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          matAutosizeMaxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          matAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mat-autosize']
          }],
          matTextareaAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */


      function getMatInputUnsupportedTypeError(type) {
        return Error("Input type \"".concat(type, "\" isn't supported by matInput."));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * This token is used to inject the object whose value should be set into `MatInput`. If none is
       * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
       * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
       * value to them.
       */


      var MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.

      var MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
      var nextUniqueId = 0; // Boilerplate for applying mixins to MatInput.

      /** @docs-private */

      var MatInputBase = function MatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
      /** @docs-private */
      ngControl) {
        _classCallCheck(this, MatInputBase);

        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
      };

      var _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinErrorState"])(MatInputBase);
      /** Directive that allows a native input to work inside a `MatFormField`. */


      var MatInput = /*#__PURE__*/function (_MatInputMixinBase2) {
        _inherits(MatInput, _MatInputMixinBase2);

        var _super16 = _createSuper(MatInput);

        function MatInput(_elementRef, _platform,
        /** @docs-private */
        ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone, // TODO: Remove this once the legacy appearance has been removed. We only need
        // to inject the form-field for determining whether the placeholder has been promoted.
        _formField) {
          var _this45;

          _classCallCheck(this, MatInput);

          _this45 = _super16.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
          _this45._elementRef = _elementRef;
          _this45._platform = _platform;
          _this45.ngControl = ngControl;
          _this45._autofillMonitor = _autofillMonitor;
          _this45._formField = _formField;
          _this45._uid = "mat-input-".concat(nextUniqueId++);
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this45.focused = false;
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this45.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this45.controlType = 'mat-input';
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this45.autofilled = false;
          _this45._disabled = false;
          _this45._required = false;
          _this45._type = 'text';
          _this45._readonly = false;
          _this45._neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(function (t) {
            return Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(t);
          });
          var element = _this45._elementRef.nativeElement;
          var nodeName = element.nodeName.toLowerCase(); // If no input value accessor was explicitly specified, use the element as the input value
          // accessor.

          _this45._inputValueAccessor = inputValueAccessor || element;
          _this45._previousNativeValue = _this45.value; // Force setter to be called in case id was not specified.

          _this45.id = _this45.id; // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
          // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
          // exists on iOS, we only bother to install the listener on iOS.

          if (_platform.IOS) {
            ngZone.runOutsideAngular(function () {
              _elementRef.nativeElement.addEventListener('keyup', function (event) {
                var el = event.target;

                if (!el.value && !el.selectionStart && !el.selectionEnd) {
                  // Note: Just setting `0, 0` doesn't fix the issue. Setting
                  // `1, 1` fixes it for the first time that you type text and
                  // then hold delete. Toggling to `1, 1` and then back to
                  // `0, 0` seems to completely fix it.
                  el.setSelectionRange(1, 1);
                  el.setSelectionRange(0, 0);
                }
              });
            });
          }

          _this45._isServer = !_this45._platform.isBrowser;
          _this45._isNativeSelect = nodeName === 'select';
          _this45._isTextarea = nodeName === 'textarea';

          if (_this45._isNativeSelect) {
            _this45.controlType = element.multiple ? 'mat-native-select-multiple' : 'mat-native-select';
          }

          return _this45;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */


        _createClass(MatInput, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this46 = this;

            if (this._platform.isBrowser) {
              this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(function (event) {
                _this46.autofilled = event.isAutofilled;

                _this46.stateChanges.next();
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.stateChanges.next();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChanges.complete();

            if (this._platform.isBrowser) {
              this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              // We need to re-evaluate this on every change detection cycle, because there are some
              // error triggers that we can't subscribe to (e.g. parent form submissions). This means
              // that whatever logic is in here has to be super lean or we risk destroying the performance.
              this.updateErrorState();
            } // We need to dirty-check the native element's value, because there are some cases where
            // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
            // updating the value using `emitEvent: false`).


            this._dirtyCheckNativeValue(); // We need to dirty-check and set the placeholder attribute ourselves, because whether it's
            // present or not depends on a query which is prone to "changed after checked" errors.


            this._dirtyCheckPlaceholder();
          }
          /** Focuses the input. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._elementRef.nativeElement.focus(options);
          } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

          /** Callback for the cases where the focused state of the input changes. */
          // tslint:disable:no-host-decorator-in-concrete
          // tslint:enable:no-host-decorator-in-concrete

        }, {
          key: "_focusChanged",
          value: function _focusChanged(isFocused) {
            if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
              this.focused = isFocused;
              this.stateChanges.next();
            }
          } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete

        }, {
          key: "_onInput",
          value: function _onInput() {// This is a noop function and is used to let Angular know whenever the value changes.
            // Angular will run a new change detection each time the `input` event has been dispatched.
            // It's necessary that Angular recognizes the value change, because when floatingLabel
            // is set to false and Angular forms aren't used, the placeholder won't recognize the
            // value changes and will not disappear.
            // Listening to the input event wouldn't be necessary when the input is using the
            // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
          }
          /** Does some manual dirty checking on the native input `placeholder` attribute. */

        }, {
          key: "_dirtyCheckPlaceholder",
          value: function _dirtyCheckPlaceholder() {
            var _a, _b; // If we're hiding the native placeholder, it should also be cleared from the DOM, otherwise
            // screen readers will read it out twice: once from the label and once from the attribute.
            // TODO: can be removed once we get rid of the `legacy` style for the form field, because it's
            // the only one that supports promoting the placeholder to a label.


            var placeholder = ((_b = (_a = this._formField) === null || _a === void 0 ? void 0 : _a._hideControlPlaceholder) === null || _b === void 0 ? void 0 : _b.call(_a)) ? null : this.placeholder;

            if (placeholder !== this._previousPlaceholder) {
              var element = this._elementRef.nativeElement;
              this._previousPlaceholder = placeholder;
              placeholder ? element.setAttribute('placeholder', placeholder) : element.removeAttribute('placeholder');
            }
          }
          /** Does some manual dirty checking on the native input `value` property. */

        }, {
          key: "_dirtyCheckNativeValue",
          value: function _dirtyCheckNativeValue() {
            var newValue = this._elementRef.nativeElement.value;

            if (this._previousNativeValue !== newValue) {
              this._previousNativeValue = newValue;
              this.stateChanges.next();
            }
          }
          /** Make sure the input is a supported type. */

        }, {
          key: "_validateType",
          value: function _validateType() {
            if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatInputUnsupportedTypeError(this._type);
            }
          }
          /** Checks whether the input type is one of the types that are never empty. */

        }, {
          key: "_isNeverEmpty",
          value: function _isNeverEmpty() {
            return this._neverEmptyInputTypes.indexOf(this._type) > -1;
          }
          /** Checks whether the input is invalid based on the native validation. */

        }, {
          key: "_isBadInput",
          value: function _isBadInput() {
            // The `validity` property won't be present on platform-server.
            var validity = this._elementRef.nativeElement.validity;
            return validity && validity.badInput;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "setDescribedByIds",

          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */
          value: function setDescribedByIds(ids) {
            if (ids.length) {
              this._elementRef.nativeElement.setAttribute('aria-describedby', ids.join(' '));
            } else {
              this._elementRef.nativeElement.removeAttribute('aria-describedby');
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick() {
            // Do not re-focus the input element if the element is already focused. Otherwise it can happen
            // that someone clicks on a time input and the cursor resets to the "hours" field while the
            // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
            if (!this.focused) {
              this.focus();
            }
          }
        }, {
          key: "disabled",
          get: function get() {
            if (this.ngControl && this.ngControl.disabled !== null) {
              return this.ngControl.disabled;
            }

            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Browsers may not fire the blur event if the input is disabled too quickly.
            // Reset from here to ensure that the element doesn't become stuck.

            if (this.focused) {
              this.focused = false;
              this.stateChanges.next();
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(value) {
            this._id = value || this._uid;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
          /** Input type of the element. */

        }, {
          key: "type",
          get: function get() {
            return this._type;
          },
          set: function set(value) {
            this._type = value || 'text';

            this._validateType(); // When using Angular inputs, developers are no longer able to set the properties on the native
            // input element. To ensure that bindings for `type` work, we need to sync the setter
            // with the native property. Textarea elements don't support the type property or attribute.


            if (!this._isTextarea && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(this._type)) {
              this._elementRef.nativeElement.type = this._type;
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "value",
          get: function get() {
            return this._inputValueAccessor.value;
          },
          set: function set(value) {
            if (value !== this.value) {
              this._inputValueAccessor.value = value;
              this.stateChanges.next();
            }
          }
          /** Whether the element is readonly. */

        }, {
          key: "readonly",
          get: function get() {
            return this._readonly;
          },
          set: function set(value) {
            this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "empty",
          get: function get() {
            return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "shouldLabelFloat",
          get: function get() {
            if (this._isNativeSelect) {
              // For a single-selection `<select>`, the label should float when the selected option has
              // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
              // overlapping the label with the options.
              var selectElement = this._elementRef.nativeElement;
              var firstOption = selectElement.options[0]; // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
              // -1 if the `value` is set to something, that isn't in the list of options, at a later point.

              return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
            } else {
              return this.focused || !this.empty;
            }
          }
        }]);

        return MatInput;
      }(_MatInputMixinBase);

      MatInput.ɵfac = function MatInput_Factory(t) {
        return new (t || MatInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_INPUT_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD"], 8));
      };

      MatInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatInput,
        selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
        hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"],
        hostVars: 9,
        hostBindings: function MatInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatInput_focus_HostBindingHandler() {
              return ctx._focusChanged(true);
            })("blur", function MatInput_blur_HostBindingHandler() {
              return ctx._focusChanged(false);
            })("input", function MatInput_input_HostBindingHandler() {
              return ctx._onInput();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("disabled", ctx.disabled)("required", ctx.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id)("data-placeholder", ctx.placeholder)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-invalid", ctx.errorState)("aria-required", ctx.required.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-input-server", ctx._isServer);
          }
        },
        inputs: {
          id: "id",
          disabled: "disabled",
          required: "required",
          type: "type",
          value: "value",
          readonly: "readonly",
          placeholder: "placeholder",
          errorStateMatcher: "errorStateMatcher",
          userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"]
        },
        exportAs: ["matInput"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"],
          useExisting: MatInput
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      MatInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_INPUT_VALUE_ACCESSOR]
          }]
        }, {
          type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD"]]
          }]
        }];
      };

      MatInput.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        userAriaDescribedBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-describedby']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _focusChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['focus', ['true']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['blur', ['false']]
        }],
        _onInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['input']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]",
            exportAs: 'matInput',
            host: {
              /**
               * @breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
               */
              'class': 'mat-input-element mat-form-field-autofill-control',
              '[class.mat-input-server]': '_isServer',
              // Native input properties that are overwritten by Angular inputs need to be synced with
              // the native input element. Otherwise property bindings for those don't work.
              '[attr.id]': 'id',
              // At the time of writing, we have a lot of customer tests that look up the input based on its
              // placeholder. Since we sometimes omit the placeholder attribute from the DOM to prevent screen
              // readers from reading it twice, we have to keep it somewhere in the DOM for the lookup.
              '[attr.data-placeholder]': 'placeholder',
              '[disabled]': 'disabled',
              '[required]': 'required',
              '[attr.readonly]': 'readonly && !_isNativeSelect || null',
              '[attr.aria-invalid]': 'errorState',
              '[attr.aria-required]': 'required.toString()'
            },
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"],
              useExisting: MatInput
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_INPUT_VALUE_ACCESSOR]
            }]
          }, {
            type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD"]]
            }]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

          /** Callback for the cases where the focused state of the input changes. */
          // tslint:disable:no-host-decorator-in-concrete
          // tslint:enable:no-host-decorator-in-concrete
          _focusChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['focus', ['true']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['blur', ['false']]
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          userAriaDescribedBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-describedby']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatInputModule = function MatInputModule() {
        _classCallCheck(this, MatInputModule);
      };

      MatInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatInputModule
      });
      MatInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatInputModule_Factory(t) {
          return new (t || MatInputModule)();
        },
        providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]],
        imports: [[_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
        // be used together with `MatFormField`.
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatInputModule, {
          declarations: function declarations() {
            return [MatInput, MatTextareaAutosize];
          },
          imports: function imports() {
            return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
            // be used together with `MatFormField`.
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInputModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [MatInput, MatTextareaAutosize],
            imports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]],
            exports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
            // be used together with `MatFormField`.
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize],
            providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=input.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~edit-profile-edit-profile-module~login-login-module~register-register-module~reset-password-~d036686e-es5.js.map