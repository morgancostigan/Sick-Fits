webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/CartItem.js":
/*!********************************!*\
  !*** ./components/CartItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CartItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/CartItem.js\";\n\n\nvar CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].li.withConfig({\n  displayName: \"CartItem__CartItemStyles\",\n  componentId: \"sc-1rm9l7o-0\"\n})([\"padding:1rem 0;border-bottom:1px solid var(--lightGrey);display:grid;grid-template-columns::auto 1fr auto;img{width:100px;margin-right:1rem;}h3,p{margin:0;}\"]);\n_c = CartItemStyles;\nfunction CartItem(_ref) {\n  var cartItem = _ref.cartItem;\n  var product = cartItem.product;\n  var pic = cartItem.product.photo.image.publicUrlTransformed;\n  console.log({\n    cartItem: cartItem\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CartItemStyles, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: pic,\n      alt: cartItem.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: product.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(product.price * cartItem.quantity), \"-\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"em\", {\n          children: [cartItem.quantity, \" \\xD7 \", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(produict.price)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, this);\n}\n_c2 = CartItem;\n;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CartItemStyles\");\n$RefreshReg$(_c2, \"CartItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0SXRlbS5qcz81YWNmIl0sIm5hbWVzIjpbIkNhcnRJdGVtU3R5bGVzIiwic3R5bGVkIiwibGkiLCJDYXJ0SXRlbSIsImNhcnRJdGVtIiwicHJvZHVjdCIsInBpYyIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiZm9ybWF0TW9uZXkiLCJwcmljZSIsInF1YW50aXR5IiwicHJvZHVpY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSxvS0FBcEI7S0FBTUYsYztBQWNTLFNBQVNHLFFBQVQsT0FBOEI7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFBQSxNQUNqQ0MsT0FEaUMsR0FDckJELFFBRHFCLENBQ2pDQyxPQURpQztBQUV6QyxNQUFNQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkUsS0FBakIsQ0FBdUJDLEtBQXZCLENBQTZCQyxvQkFBekM7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ1AsWUFBUSxFQUFSQTtBQUFELEdBQVo7QUFFQSxzQkFDSSxxRUFBQyxjQUFEO0FBQUEsNEJBQ0k7QUFBSyxTQUFHLEVBQUVFLEdBQVY7QUFBZSxTQUFHLEVBQUVGLFFBQVEsQ0FBQ1E7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSw4QkFDSTtBQUFBLGtCQUFLUCxPQUFPLENBQUNPO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQSxtQkFDS0MsZ0VBQVcsQ0FBQ1IsT0FBTyxDQUFDUyxLQUFSLEdBQWdCVixRQUFRLENBQUNXLFFBQTFCLENBRGhCLG9CQUdJO0FBQUEscUJBQUtYLFFBQVEsQ0FBQ1csUUFBZCxZQUFpQ0YsZ0VBQVcsQ0FBQ0csUUFBUSxDQUFDRixLQUFWLENBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIO01BbkJ1QlgsUTtBQW1CdkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRJdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tIFwiLi4vbGliL2Zvcm1hdE1vbmV5XCI7XG5cbmNvbnN0IENhcnRJdGVtU3R5bGVzID0gc3R5bGVkLmxpYFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmV5KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOiBhdXRvIDFmciBhdXRvO1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbiAgICBoMywgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0SXRlbSh7Y2FydEl0ZW19KSB7XG4gICAgY29uc3QgeyBwcm9kdWN0IH0gPSBjYXJ0SXRlbTtcbiAgICBjb25zdCBwaWMgPSBjYXJ0SXRlbS5wcm9kdWN0LnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkO1xuICAgIGNvbnNvbGUubG9nKHtjYXJ0SXRlbX0pO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJ0SXRlbVN0eWxlcz5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwaWN9IGFsdD17Y2FydEl0ZW0ubmFtZX0vPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDM+e3Byb2R1Y3QubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0TW9uZXkocHJvZHVjdC5wcmljZSAqIGNhcnRJdGVtLnF1YW50aXR5KX1cbiAgICAgICAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICAgICAgICA8ZW0+e2NhcnRJdGVtLnF1YW50aXR5fSAmdGltZXM7IHtmb3JtYXRNb25leShwcm9kdWljdC5wcmljZSl9PC9lbT5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L0NhcnRJdGVtU3R5bGVzPlxuICAgIClcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CartItem.js\n");

/***/ })

})