webpackHotUpdate_N_E("pages/products",{

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pagination; });\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/PaginationStyles */ \"./components/styles/PaginationStyles.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ErrorMessage */ \"./components/ErrorMessage.js\");\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/Pagination.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    query PAGINATION_QUERY {\\n        _allProductsMeta {\\n            count\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar PAGINATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());\nfunction Pagination(_ref) {\n  _s();\n\n  var page = _ref.page;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_7__[\"useQuery\"])(PAGINATION_QUERY),\n      error = _useQuery.error,\n      loading = _useQuery.loading,\n      data = _useQuery.data;\n\n  if (loading) return 'Wait for it...  Wait for it...';\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    error: error\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 22\n  }, this);\n  console.log({\n    data: data\n  });\n  var count = data._allProductsMeta.count;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: [\"Sick Fits - Page \", page, \" of ___\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/\",\n      children: \"\\u25C0\\uFE0F Prev\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      children: \"Page __ of __\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      children: [data._allProductsMeta.count, \" Total Items\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/\",\n      children: \"Next \\u25B6\\uFE0F\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Pagination, \"MadqETWYtkFh3dDWW9IjxDLlwQw=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_7__[\"useQuery\"]];\n});\n\n_c = Pagination;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"Pagination\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzPzJiMzMiXSwibmFtZXMiOlsiUEFHSU5BVElPTl9RVUVSWSIsImdxbCIsIlBhZ2luYXRpb24iLCJwYWdlIiwidXNlUXVlcnkiLCJlcnJvciIsImxvYWRpbmciLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNvdW50IiwiX2FsbFByb2R1Y3RzTWV0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0Msa0RBQUgsbUJBQXRCO0FBUWUsU0FBU0MsVUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDUkMsK0RBQVEsQ0FBQ0osZ0JBQUQsQ0FEQTtBQUFBLE1BQ2pDSyxLQURpQyxhQUNqQ0EsS0FEaUM7QUFBQSxNQUMxQkMsT0FEMEIsYUFDMUJBLE9BRDBCO0FBQUEsTUFDakJDLElBRGlCLGFBQ2pCQSxJQURpQjs7QUFFekMsTUFBR0QsT0FBSCxFQUFZLE9BQU8sZ0NBQVA7QUFDWixNQUFHRCxLQUFILEVBQVUsb0JBQU8scUVBQUMsZ0VBQUQ7QUFBYyxTQUFLLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNWRyxTQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDRixRQUFJLEVBQUpBO0FBQUQsR0FBWjtBQUp5QyxNQUtqQ0csS0FMaUMsR0FLdkJILElBQUksQ0FBQ0ksZ0JBTGtCLENBS2pDRCxLQUxpQztBQU96QyxzQkFDSSxxRUFBQyxnRUFBRDtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0k7QUFBQSx3Q0FBeUJQLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQU9JLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkosZUFTSTtBQUFBLGlCQUFJSSxJQUFJLENBQUNJLGdCQUFMLENBQXNCRCxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSixlQVVJLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIOztHQXJCdUJSLFU7VUFDYUUsdUQ7OztLQURiRixVO0FBcUJ2QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGFnaW5hdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdpbmF0aW9uU3R5bGVzIGZyb20gJy4vc3R5bGVzL1BhZ2luYXRpb25TdHlsZXMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBCaUxlZnRBcnJvdyB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcbmltcG9ydCB7IEJpUmlnaHRBcnJvdyB9IGZyb20gJ3JlYWN0LWljb25zL2JpJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4uL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlJztcblxuY29uc3QgUEFHSU5BVElPTl9RVUVSWSA9IGdxbGBcbiAgICBxdWVyeSBQQUdJTkFUSU9OX1FVRVJZIHtcbiAgICAgICAgX2FsbFByb2R1Y3RzTWV0YSB7XG4gICAgICAgICAgICBjb3VudFxuICAgICAgICB9XG4gICAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHBhZ2UgfSkge1xuICAgIGNvbnN0IHsgZXJyb3IsIGxvYWRpbmcsIGRhdGEgfSA9IHVzZVF1ZXJ5KFBBR0lOQVRJT05fUVVFUlkpO1xuICAgIGlmKGxvYWRpbmcpIHJldHVybiAnV2FpdCBmb3IgaXQuLi4gIFdhaXQgZm9yIGl0Li4uJztcbiAgICBpZihlcnJvcikgcmV0dXJuIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfS8+XG4gICAgY29uc29sZS5sb2coe2RhdGF9KTtcbiAgICBjb25zdCB7IGNvdW50IH0gPSBkYXRhLl9hbGxQcm9kdWN0c01ldGFcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFnaW5hdGlvblN0eWxlcz5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5TaWNrIEZpdHMgLSBQYWdlIHtwYWdlfSBvZiBfX188L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgey8qIExpbmsgdG8gcHJldmlvdXNcbiAgICAgICAgICAgIExpbmsgdG8gbmV4dCBcbiAgICAgICAgICAgIFRvdGFsIHBhZ2VzICovfVxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj7il4DvuI8gUHJldjwvTGluaz5cbiAgICAgICAgICAgIDxwPlBhZ2UgX18gb2YgX188L3A+XG4gICAgICAgICAgICA8cD57ZGF0YS5fYWxsUHJvZHVjdHNNZXRhLmNvdW50fSBUb3RhbCBJdGVtczwvcD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+TmV4dCDilrbvuI88L0xpbms+XG4gICAgICAgIDwvUGFnaW5hdGlvblN0eWxlcz5cbiAgICApO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Pagination.js\n");

/***/ })

})