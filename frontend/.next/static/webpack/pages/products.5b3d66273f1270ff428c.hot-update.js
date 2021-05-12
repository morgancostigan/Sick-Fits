webpackHotUpdate_N_E("pages/products",{

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Product; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/styles/ItemStyles */ \"./components/styles/ItemStyles.js\");\n/* harmony import */ var _components_styles_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/Title */ \"./components/styles/Title.js\");\n/* harmony import */ var _components_styles_PriceTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/PriceTag */ \"./components/styles/PriceTag.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n/* harmony import */ var _components_DeleteProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DeleteProduct */ \"./components/DeleteProduct.js\");\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/Product.js\";\n\n\n\n\n\n\nfunction Product(_ref) {\n  var _product$photo, _product$photo$image;\n\n  var product = _ref.product;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : (_product$photo$image = _product$photo.image) === null || _product$photo$image === void 0 ? void 0 : _product$photo$image.publicUrlTransformed,\n      alt: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_styles_Title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: \"/product/\".concat(product.id),\n        children: product.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_styles_PriceTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(product.price)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: product.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"buttonList\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: {\n          pathname: 'update',\n          query: {\n            id: product.id\n          }\n        },\n        children: \"Edit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_DeleteProduct__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, this);\n}\n_c = Product;\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzPzlkMDYiXSwibmFtZXMiOlsiUHJvZHVjdCIsInByb2R1Y3QiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIiwiaWQiLCJmb3JtYXRNb25leSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJwYXRobmFtZSIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUN6QyxzQkFDSSxxRUFBQyxxRUFBRDtBQUFBLDRCQUNJO0FBQ0ksU0FBRyxFQUFFQSxPQUFGLGFBQUVBLE9BQUYseUNBQUVBLE9BQU8sQ0FBRUMsS0FBWCwyRUFBRSxlQUFnQkMsS0FBbEIseURBQUUscUJBQXVCQyxvQkFEaEM7QUFFSSxTQUFHLEVBQUVILE9BQU8sQ0FBQ0k7QUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0kscUVBQUMsZ0VBQUQ7QUFBQSw2QkFDSSxxRUFBQyxnREFBRDtBQUFNLFlBQUkscUJBQWNKLE9BQU8sQ0FBQ0ssRUFBdEIsQ0FBVjtBQUFBLGtCQUF1Q0wsT0FBTyxDQUFDSTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBUUkscUVBQUMsbUVBQUQ7QUFBQSxnQkFBV0UsZ0VBQVcsQ0FBQ04sT0FBTyxDQUFDTyxLQUFUO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSixlQVNJO0FBQUEsZ0JBQUlQLE9BQU8sQ0FBQ1E7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEosZUFXSTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsOEJBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUU7QUFDUkMsa0JBQVEsRUFBRSxRQURGO0FBRVJDLGVBQUssRUFBRTtBQUNITCxjQUFFLEVBQUVMLE9BQU8sQ0FBQ0s7QUFEVDtBQUZDLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVVJLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRCSDtLQTdCdUJOLE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXRlbVN0eWxlcyBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcy9JdGVtU3R5bGVzJztcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcy9UaXRsZSc7XG5pbXBvcnQgUHJpY2VUYWcgZnJvbSAnLi4vY29tcG9uZW50cy9zdHlsZXMvUHJpY2VUYWcnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi9saWIvZm9ybWF0TW9uZXknO1xuaW1wb3J0IERlbGV0ZVByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9EZWxldGVQcm9kdWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdCh7IHByb2R1Y3QgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxJdGVtU3R5bGVzPlxuICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3Q/LnBob3RvPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWR9IFxuICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfSBcbiAgICAgICAgICAgIC8+ICAgXG4gICAgICAgICAgICA8VGl0bGU+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT57cHJvZHVjdC5uYW1lfTwvTGluaz5cbiAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICA8UHJpY2VUYWc+e2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfTwvUHJpY2VUYWc+XG4gICAgICAgICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICB7LyogVE9ETyBhZGQgZWRpdCBhbmQgZGVsZXRlIGJ1dHRvbnMgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkxpc3RcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAndXBkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxEZWxldGVQcm9kdWN0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICA8L0l0ZW1TdHlsZXM+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Product.js\n");

/***/ })

})