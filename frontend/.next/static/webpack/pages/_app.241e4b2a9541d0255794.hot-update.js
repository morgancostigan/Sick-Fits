webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cart; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/CartStyles */ \"./components/styles/CartStyles.js\");\n/* harmony import */ var _components_styles_Supreme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/Supreme */ \"./components/styles/Supreme.js\");\n/* harmony import */ var _components_CartItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CartItem */ \"./components/CartItem.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/calcTotalPrice */ \"./lib/calcTotalPrice.js\");\n/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/cartState */ \"./lib/cartState.js\");\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/Cart.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n // function CartItem({ cartItem }) {\n//     return <li>{cartItem.id}</li>;\n// }\n\nfunction Cart() {\n  _s();\n\n  var _this = this;\n\n  var me = Object(_User__WEBPACK_IMPORTED_MODULE_4__[\"useUser\"])();\n  var data = Object(_lib_cartState__WEBPACK_IMPORTED_MODULE_7__[\"useCart\"])();\n  log;\n  if (!me) return null;\n  console.log({\n    me: me\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    open: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_styles_Supreme__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [me.name, \"'s cart\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: me.cart.map(function (cartItem) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CartItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          cartItem: cartItem\n        }, cartItem.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 40\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(me.cart))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 12\n  }, this);\n}\n\n_s(Cart, \"3731w8x4p+xV9SPw1/nkt2YiMzE=\", false, function () {\n  return [_User__WEBPACK_IMPORTED_MODULE_4__[\"useUser\"], _lib_cartState__WEBPACK_IMPORTED_MODULE_7__[\"useCart\"]];\n});\n\n_c = Cart;\n\nvar _c;\n\n$RefreshReg$(_c, \"Cart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0LmpzP2ZmYzEiXSwibmFtZXMiOlsiQ2FydCIsIm1lIiwidXNlVXNlciIsImRhdGEiLCJ1c2VDYXJ0IiwibG9nIiwiY29uc29sZSIsIm5hbWUiLCJjYXJ0IiwibWFwIiwiY2FydEl0ZW0iLCJpZCIsImZvcm1hdE1vbmV5IiwiY2FsY1RvdGFsUHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBRUE7O0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUMzQixNQUFNQyxFQUFFLEdBQUdDLHFEQUFPLEVBQWxCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyw4REFBTyxFQUFwQjtBQUNBQyxLQUFHO0FBQ0gsTUFBRyxDQUFDSixFQUFKLEVBQVEsT0FBTyxJQUFQO0FBQ1JLLFNBQU8sQ0FBQ0QsR0FBUixDQUFZO0FBQUNKLE1BQUUsRUFBRkE7QUFBRCxHQUFaO0FBRUEsc0JBQU8scUVBQUMsMERBQUQ7QUFBWSxRQUFJLE1BQWhCO0FBQUEsNEJBQ0g7QUFBQSw2QkFDSSxxRUFBQyxrRUFBRDtBQUFBLG1CQUNLQSxFQUFFLENBQUNNLElBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURHLGVBTUg7QUFBQSxnQkFDS04sRUFBRSxDQUFDTyxJQUFILENBQVFDLEdBQVIsQ0FBWSxVQUFDQyxRQUFEO0FBQUEsNEJBQWMscUVBQUMsNERBQUQ7QUFFM0Isa0JBQVEsRUFBRUE7QUFGaUIsV0FDdEJBLFFBQVEsQ0FBQ0MsRUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFkO0FBQUEsT0FBWjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORyxlQVlIO0FBQUEsNkJBQ0k7QUFBQSxrQkFDS0MsZ0VBQVcsQ0FBQ0MsbUVBQWMsQ0FBQ1osRUFBRSxDQUFDTyxJQUFKLENBQWY7QUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQWtCSDs7R0F6QnVCUixJO1VBQ1RFLDZDLEVBQ0VFLHNEOzs7S0FGT0osSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJ0U3R5bGVzIGZyb20gJy4vc3R5bGVzL0NhcnRTdHlsZXMnO1xuaW1wb3J0IFN1cHJlbWUgZnJvbSAnLi4vY29tcG9uZW50cy9zdHlsZXMvU3VwcmVtZSc7XG5pbXBvcnQgQ2FydEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9DYXJ0SXRlbSc7XG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi9saWIvZm9ybWF0TW9uZXknO1xuaW1wb3J0IGNhbGNUb3RhbFByaWNlIGZyb20gJy4uL2xpYi9jYWxjVG90YWxQcmljZSc7XG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vbGliL2NhcnRTdGF0ZSc7XG5cbi8vIGZ1bmN0aW9uIENhcnRJdGVtKHsgY2FydEl0ZW0gfSkge1xuLy8gICAgIHJldHVybiA8bGk+e2NhcnRJdGVtLmlkfTwvbGk+O1xuXG4vLyB9XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCgpIHtcbiAgICBjb25zdCBtZSA9IHVzZVVzZXIgKCk7XG4gICAgY29uc3QgZGF0YSA9IHVzZUNhcnQoKTtcbiAgICBsb2dcbiAgICBpZighbWUpIHJldHVybiBudWxsO1xuICAgIGNvbnNvbGUubG9nKHttZX0pO1xuICAgIFxuICAgIHJldHVybiA8Q2FydFN0eWxlcyBvcGVuPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPFN1cHJlbWU+XG4gICAgICAgICAgICAgICAge21lLm5hbWV9J3MgY2FydFxuICAgICAgICAgICAgPC9TdXByZW1lPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAge21lLmNhcnQubWFwKChjYXJ0SXRlbSkgPT4gPENhcnRJdGVtIFxuICAgICAgICAgICAga2V5PXtjYXJ0SXRlbS5pZH0gXG4gICAgICAgICAgICBjYXJ0SXRlbT17Y2FydEl0ZW19XG4gICAgICAgICAgICAvPil9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICB7Zm9ybWF0TW9uZXkoY2FsY1RvdGFsUHJpY2UobWUuY2FydCkpfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICA8L0NhcnRTdHlsZXM+XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cart.js\n");

/***/ })

})