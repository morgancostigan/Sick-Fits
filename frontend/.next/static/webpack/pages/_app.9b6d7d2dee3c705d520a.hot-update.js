webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/*! exports provided: default, CartStateProvider, useCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CartStateProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartStateProvider\", function() { return CartStateProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCart\", function() { return useCart; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/lib/cartState.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar LocalStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nvar LocalStateProvider = LocalStateContext.Provider;\nfunction CartStateProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  //This is a custom Provider\n  //we store data (state) and functionality (updaters)\n  //accessible anywhere in the app via consumer\n  //default to closed cart\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      cartOpen = _useState[0],\n      setCartOpen = _useState[1];\n\n  function toggleCart() {\n    //toggle to opposite value\n    setCartOpen(!cartOpen);\n  }\n\n  ;\n\n  function closeCart() {\n    setCartOpen(false);\n  }\n\n  ;\n\n  function openCart() {\n    setCartOpen(true);\n  }\n\n  ;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LocalStateProvider, {\n    value: {\n      cartOpen: cartOpen,\n      setCartOpen: setCartOpen\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, this);\n}\n\n_s(CartStateProvider, \"xe1WncxGrJWPKk54fyWehQszVXg=\");\n\n_c = CartStateProvider;\n; // make a custom hook to access Cart local state\n\nfunction useCart() {\n  _s2();\n\n  //useContext is the Consumer that can access Provider info\n  var all = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(LocalStateContext);\n  return all;\n}\n\n_s2(useCart, \"k0r6hllA0ZVFTbsvyQUS1AVLOSY=\");\n\n\n\nvar _c;\n\n$RefreshReg$(_c, \"CartStateProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NhcnRTdGF0ZS5qcz83YTQ0Il0sIm5hbWVzIjpbIkxvY2FsU3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkxvY2FsU3RhdGVQcm92aWRlciIsIlByb3ZpZGVyIiwiQ2FydFN0YXRlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiY2FydE9wZW4iLCJzZXRDYXJ0T3BlbiIsInRvZ2dsZUNhcnQiLCJjbG9zZUNhcnQiLCJvcGVuQ2FydCIsInVzZUNhcnQiLCJhbGwiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxFQUF2QztBQUNBLElBQU1DLGtCQUFrQixHQUFHRixpQkFBaUIsQ0FBQ0csUUFBN0M7QUFHZSxTQUFTQyxpQkFBVCxPQUF5QztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFDcEQ7QUFDQTtBQUNBO0FBRUE7QUFMb0Qsa0JBTXBCQyxzREFBUSxDQUFDLEtBQUQsQ0FOWTtBQUFBLE1BTTdDQyxRQU42QztBQUFBLE1BTW5DQyxXQU5tQzs7QUFRcEQsV0FBU0MsVUFBVCxHQUFzQjtBQUNsQjtBQUNBRCxlQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0g7O0FBQUE7O0FBRUQsV0FBU0csU0FBVCxHQUFxQjtBQUNqQkYsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNIOztBQUFBOztBQUVELFdBQVNHLFFBQVQsR0FBb0I7QUFDaEJILGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDSDs7QUFBQTtBQUVELHNCQUNJLHFFQUFDLGtCQUFEO0FBQW9CLFNBQUssRUFBRTtBQUFFRCxjQUFRLEVBQVJBLFFBQUY7QUFBWUMsaUJBQVcsRUFBWEE7QUFBWixLQUEzQjtBQUFBLGNBQ0tIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0dBMUJ1QkQsaUI7O0tBQUFBLGlCO0FBMEJ2QixDLENBRUQ7O0FBRUEsU0FBU1EsT0FBVCxHQUFtQjtBQUFBOztBQUNmO0FBQ0EsTUFBTUMsR0FBRyxHQUFHQyx3REFBVSxDQUFDZCxpQkFBRCxDQUF0QjtBQUNBLFNBQU9hLEdBQVA7QUFDSDs7SUFKUUQsTzs7QUFNVCIsImZpbGUiOiIuL2xpYi9jYXJ0U3RhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTG9jYWxTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5jb25zdCBMb2NhbFN0YXRlUHJvdmlkZXIgPSBMb2NhbFN0YXRlQ29udGV4dC5Qcm92aWRlcjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0U3RhdGVQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgICAvL1RoaXMgaXMgYSBjdXN0b20gUHJvdmlkZXJcbiAgICAvL3dlIHN0b3JlIGRhdGEgKHN0YXRlKSBhbmQgZnVuY3Rpb25hbGl0eSAodXBkYXRlcnMpXG4gICAgLy9hY2Nlc3NpYmxlIGFueXdoZXJlIGluIHRoZSBhcHAgdmlhIGNvbnN1bWVyXG5cbiAgICAvL2RlZmF1bHQgdG8gY2xvc2VkIGNhcnRcbiAgICBjb25zdCBbY2FydE9wZW4sIHNldENhcnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUNhcnQoKSB7XG4gICAgICAgIC8vdG9nZ2xlIHRvIG9wcG9zaXRlIHZhbHVlXG4gICAgICAgIHNldENhcnRPcGVuKCFjYXJ0T3Blbik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNsb3NlQ2FydCgpIHtcbiAgICAgICAgc2V0Q2FydE9wZW4oZmFsc2UpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBvcGVuQ2FydCgpIHtcbiAgICAgICAgc2V0Q2FydE9wZW4odHJ1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMb2NhbFN0YXRlUHJvdmlkZXIgdmFsdWU9e3sgY2FydE9wZW4sIHNldENhcnRPcGVuIH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0xvY2FsU3RhdGVQcm92aWRlcj5cbiAgICApO1xufTtcblxuLy8gbWFrZSBhIGN1c3RvbSBob29rIHRvIGFjY2VzcyBDYXJ0IGxvY2FsIHN0YXRlXG5cbmZ1bmN0aW9uIHVzZUNhcnQoKSB7XG4gICAgLy91c2VDb250ZXh0IGlzIHRoZSBDb25zdW1lciB0aGF0IGNhbiBhY2Nlc3MgUHJvdmlkZXIgaW5mb1xuICAgIGNvbnN0IGFsbCA9IHVzZUNvbnRleHQoTG9jYWxTdGF0ZUNvbnRleHQpO1xuICAgIHJldHVybiBhbGw7XG59XG5cbmV4cG9ydCB7IENhcnRTdGF0ZVByb3ZpZGVyLCB1c2VDYXJ0IH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/cartState.js\n");

/***/ })

})