webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cart; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/CartStyles */ \"./components/styles/CartStyles.js\");\n/* harmony import */ var _components_styles_Supreme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/Supreme */ \"./components/styles/Supreme.js\");\n/* harmony import */ var _components_CartItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CartItem */ \"./components/CartItem.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/calcTotalPrice */ \"./lib/calcTotalPrice.js\");\n/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/cartState */ \"./lib/cartState.js\");\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/Cart.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n // function CartItem({ cartItem }) {\n//     return <li>{cartItem.id}</li>;\n// }\n\nfunction Cart() {\n  _s();\n\n  var _this = this;\n\n  var me = Object(_User__WEBPACK_IMPORTED_MODULE_4__[\"useUser\"])();\n\n  var _useCart = Object(_lib_cartState__WEBPACK_IMPORTED_MODULE_7__[\"useCart\"])(),\n      cartOpen = _useCart.cartOpen,\n      closeCart = _useCart.closeCart;\n\n  if (!me) return null;\n  console.log({\n    me: me\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    open: cartOpen,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_styles_Supreme__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [me.name, \"'s cart\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: closeCart,\n      children: \"\\xD7\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: me.cart.map(function (cartItem) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CartItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          cartItem: cartItem\n        }, cartItem.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 40\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(me.cart))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 12\n  }, this);\n}\n\n_s(Cart, \"T8IrobZcZl8P+kAvSYAnS0OsnCo=\", false, function () {\n  return [_User__WEBPACK_IMPORTED_MODULE_4__[\"useUser\"], _lib_cartState__WEBPACK_IMPORTED_MODULE_7__[\"useCart\"]];\n});\n\n_c = Cart;\n\nvar _c;\n\n$RefreshReg$(_c, \"Cart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0LmpzP2ZmYzEiXSwibmFtZXMiOlsiQ2FydCIsIm1lIiwidXNlVXNlciIsInVzZUNhcnQiLCJjYXJ0T3BlbiIsImNsb3NlQ2FydCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiY2FydCIsIm1hcCIsImNhcnRJdGVtIiwiaWQiLCJmb3JtYXRNb25leSIsImNhbGNUb3RhbFByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUVBOztBQUdlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDM0IsTUFBTUMsRUFBRSxHQUFHQyxxREFBTyxFQUFsQjs7QUFEMkIsaUJBRUtDLDhEQUFPLEVBRlo7QUFBQSxNQUVuQkMsUUFGbUIsWUFFbkJBLFFBRm1CO0FBQUEsTUFFVEMsU0FGUyxZQUVUQSxTQUZTOztBQUczQixNQUFHLENBQUNKLEVBQUosRUFBUSxPQUFPLElBQVA7QUFDUkssU0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ04sTUFBRSxFQUFGQTtBQUFELEdBQVo7QUFFQSxzQkFBTyxxRUFBQywwREFBRDtBQUFZLFFBQUksRUFBRUcsUUFBbEI7QUFBQSw0QkFDSDtBQUFBLDZCQUNJLHFFQUFDLGtFQUFEO0FBQUEsbUJBQ0tILEVBQUUsQ0FBQ08sSUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREcsZUFNSDtBQUFRLGFBQU8sRUFBRUgsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORyxlQU9IO0FBQUEsZ0JBQ0tKLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxHQUFSLENBQVksVUFBQ0MsUUFBRDtBQUFBLDRCQUFjLHFFQUFDLDREQUFEO0FBRTNCLGtCQUFRLEVBQUVBO0FBRmlCLFdBQ3RCQSxRQUFRLENBQUNDLEVBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZDtBQUFBLE9BQVo7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEcsZUFhSDtBQUFBLDZCQUNJO0FBQUEsa0JBQ0tDLGdFQUFXLENBQUNDLG1FQUFjLENBQUNiLEVBQUUsQ0FBQ1EsSUFBSixDQUFmO0FBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFtQkg7O0dBekJ1QlQsSTtVQUNURSw2QyxFQUNxQkMsc0Q7OztLQUZaSCxJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcnRTdHlsZXMgZnJvbSAnLi9zdHlsZXMvQ2FydFN0eWxlcyc7XG5pbXBvcnQgU3VwcmVtZSBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcy9TdXByZW1lJztcbmltcG9ydCBDYXJ0SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL0NhcnRJdGVtJztcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSc7XG5pbXBvcnQgY2FsY1RvdGFsUHJpY2UgZnJvbSAnLi4vbGliL2NhbGNUb3RhbFByaWNlJztcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICcuLi9saWIvY2FydFN0YXRlJztcblxuLy8gZnVuY3Rpb24gQ2FydEl0ZW0oeyBjYXJ0SXRlbSB9KSB7XG4vLyAgICAgcmV0dXJuIDxsaT57Y2FydEl0ZW0uaWR9PC9saT47XG5cbi8vIH1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0KCkge1xuICAgIGNvbnN0IG1lID0gdXNlVXNlcigpO1xuICAgIGNvbnN0IHsgY2FydE9wZW4sIGNsb3NlQ2FydCB9ID0gdXNlQ2FydCgpO1xuICAgIGlmKCFtZSkgcmV0dXJuIG51bGw7XG4gICAgY29uc29sZS5sb2coe21lfSk7XG4gICAgXG4gICAgcmV0dXJuIDxDYXJ0U3R5bGVzIG9wZW49e2NhcnRPcGVufT5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxTdXByZW1lPlxuICAgICAgICAgICAgICAgIHttZS5uYW1lfSdzIGNhcnRcbiAgICAgICAgICAgIDwvU3VwcmVtZT5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y2xvc2VDYXJ0fT4mdGltZXM7PC9idXR0b24+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHttZS5jYXJ0Lm1hcCgoY2FydEl0ZW0pID0+IDxDYXJ0SXRlbSBcbiAgICAgICAgICAgIGtleT17Y2FydEl0ZW0uaWR9IFxuICAgICAgICAgICAgY2FydEl0ZW09e2NhcnRJdGVtfVxuICAgICAgICAgICAgLz4pfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAge2Zvcm1hdE1vbmV5KGNhbGNUb3RhbFByaWNlKG1lLmNhcnQpKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgPC9DYXJ0U3R5bGVzPlxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Cart.js\n");

/***/ })

})