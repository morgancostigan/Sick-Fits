webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/*! exports provided: default, CartStateProvider, useCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CartStateProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartStateProvider\", function() { return CartStateProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCart\", function() { return useCart; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/lib/cartState.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar LocalStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nvar LocalStateProvider = LocalStateContext.Provider;\nfunction CartStateProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  //This is a custom Provider\n  //we store data (state) and functionality (updaters)\n  //accessible anywhere in the app via consumer\n  //default to closed cart\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      cartOpen = _useState[0],\n      setCartOpen = _useState[1];\n\n  function toggleCart() {\n    setCar;\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LocalStateProvider, {\n    value: {\n      cartOpen: cartOpen,\n      setCartOpen: setCartOpen\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, this);\n}\n\n_s(CartStateProvider, \"xe1WncxGrJWPKk54fyWehQszVXg=\");\n\n_c = CartStateProvider;\n; // make a custom hook to access Cart local state\n\nfunction useCart() {\n  _s2();\n\n  //useContext is the Consumer that can access Provider info\n  var all = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(LocalStateContext);\n  return all;\n}\n\n_s2(useCart, \"k0r6hllA0ZVFTbsvyQUS1AVLOSY=\");\n\n\n\nvar _c;\n\n$RefreshReg$(_c, \"CartStateProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NhcnRTdGF0ZS5qcz83YTQ0Il0sIm5hbWVzIjpbIkxvY2FsU3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkxvY2FsU3RhdGVQcm92aWRlciIsIlByb3ZpZGVyIiwiQ2FydFN0YXRlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiY2FydE9wZW4iLCJzZXRDYXJ0T3BlbiIsInRvZ2dsZUNhcnQiLCJzZXRDYXIiLCJ1c2VDYXJ0IiwiYWxsIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsRUFBdkM7QUFDQSxJQUFNQyxrQkFBa0IsR0FBR0YsaUJBQWlCLENBQUNHLFFBQTdDO0FBR2UsU0FBU0MsaUJBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQ3BEO0FBQ0E7QUFDQTtBQUVBO0FBTG9ELGtCQU1wQkMsc0RBQVEsQ0FBQyxLQUFELENBTlk7QUFBQSxNQU03Q0MsUUFONkM7QUFBQSxNQU1uQ0MsV0FObUM7O0FBUXBELFdBQVNDLFVBQVQsR0FBc0I7QUFDbEJDLFVBQU07QUFDVDs7QUFFRCxzQkFDSSxxRUFBQyxrQkFBRDtBQUFvQixTQUFLLEVBQUU7QUFBRUgsY0FBUSxFQUFSQSxRQUFGO0FBQVlDLGlCQUFXLEVBQVhBO0FBQVosS0FBM0I7QUFBQSxjQUNLSDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztHQWpCdUJELGlCOztLQUFBQSxpQjtBQWlCdkIsQyxDQUVEOztBQUVBLFNBQVNPLE9BQVQsR0FBbUI7QUFBQTs7QUFDZjtBQUNBLE1BQU1DLEdBQUcsR0FBR0Msd0RBQVUsQ0FBQ2IsaUJBQUQsQ0FBdEI7QUFDQSxTQUFPWSxHQUFQO0FBQ0g7O0lBSlFELE87O0FBTVQiLCJmaWxlIjoiLi9saWIvY2FydFN0YXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IExvY2FsU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuY29uc3QgTG9jYWxTdGF0ZVByb3ZpZGVyID0gTG9jYWxTdGF0ZUNvbnRleHQuUHJvdmlkZXI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydFN0YXRlUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gICAgLy9UaGlzIGlzIGEgY3VzdG9tIFByb3ZpZGVyXG4gICAgLy93ZSBzdG9yZSBkYXRhIChzdGF0ZSkgYW5kIGZ1bmN0aW9uYWxpdHkgKHVwZGF0ZXJzKVxuICAgIC8vYWNjZXNzaWJsZSBhbnl3aGVyZSBpbiB0aGUgYXBwIHZpYSBjb25zdW1lclxuXG4gICAgLy9kZWZhdWx0IHRvIGNsb3NlZCBjYXJ0XG4gICAgY29uc3QgW2NhcnRPcGVuLCBzZXRDYXJ0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVDYXJ0KCkge1xuICAgICAgICBzZXRDYXJcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TG9jYWxTdGF0ZVByb3ZpZGVyIHZhbHVlPXt7IGNhcnRPcGVuLCBzZXRDYXJ0T3BlbiB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Mb2NhbFN0YXRlUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbi8vIG1ha2UgYSBjdXN0b20gaG9vayB0byBhY2Nlc3MgQ2FydCBsb2NhbCBzdGF0ZVxuXG5mdW5jdGlvbiB1c2VDYXJ0KCkge1xuICAgIC8vdXNlQ29udGV4dCBpcyB0aGUgQ29uc3VtZXIgdGhhdCBjYW4gYWNjZXNzIFByb3ZpZGVyIGluZm9cbiAgICBjb25zdCBhbGwgPSB1c2VDb250ZXh0KExvY2FsU3RhdGVDb250ZXh0KTtcbiAgICByZXR1cm4gYWxsO1xufVxuXG5leHBvcnQgeyBDYXJ0U3RhdGVQcm92aWRlciwgdXNlQ2FydCB9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/cartState.js\n");

/***/ })

})