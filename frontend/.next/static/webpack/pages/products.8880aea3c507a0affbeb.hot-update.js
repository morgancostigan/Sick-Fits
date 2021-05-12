webpackHotUpdate_N_E("pages/products",{

/***/ "./components/DeleteProduct.js":
/*!*************************************!*\
  !*** ./components/DeleteProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DeleteProduct; });\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/DeleteProduct.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    mutation DELETE_PRODUCT_MUTATION($id: ID!) {\\n        deleteProduct($id) {\\n            id\\n            name\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar DELETE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());\nfunction DeleteProduct(_ref) {\n  _s();\n\n  var id = _ref.id,\n      children = _ref.children;\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(DELETE_PRODUCT_MUTATION, {\n    variables: {\n      id: id\n    }\n  }),\n      _useMutation2 = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation, 2),\n      deleteProduct = _useMutation2[0],\n      loading = _useMutation2[1].loading;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n    type: \"button\",\n    onClick: function onClick() {\n      if (confirm('Should we really remove this item from existence?')) {\n        //if confirmed, THEN delete\n        console.log('gettin it gone!');\n        deleteProduct();\n      }\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 12\n  }, this);\n}\n\n_s(DeleteProduct, \"GyubW56s+77t++G2PPz6H62tcvs=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"]];\n});\n\n_c = DeleteProduct;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"DeleteProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxldGVQcm9kdWN0LmpzP2QzZTMiXSwibmFtZXMiOlsiREVMRVRFX1BST0RVQ1RfTVVUQVRJT04iLCJncWwiLCJEZWxldGVQcm9kdWN0IiwiaWQiLCJjaGlsZHJlbiIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwiZGVsZXRlUHJvZHVjdCIsImxvYWRpbmciLCJjb25maXJtIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsdUJBQXVCLEdBQUdDLGtEQUFILG1CQUE3QjtBQVNlLFNBQVNDLGFBQVQsT0FBdUM7QUFBQTs7QUFBQSxNQUFmQyxFQUFlLFFBQWZBLEVBQWU7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7O0FBQUEscUJBQ2ZDLGtFQUFXLENBQzFDTCx1QkFEMEMsRUFDakI7QUFDckJNLGFBQVMsRUFBRTtBQUFFSCxRQUFFLEVBQUZBO0FBQUY7QUFEVSxHQURpQixDQURJO0FBQUE7QUFBQSxNQUMzQ0ksYUFEMkM7QUFBQSxNQUMzQkMsT0FEMkIsb0JBQzNCQSxPQUQyQjs7QUFNbEQsc0JBQU87QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUUsbUJBQU07QUFDeEMsVUFBR0MsT0FBTyxDQUFDLG1EQUFELENBQVYsRUFBaUU7QUFDN0Q7QUFDQUMsZUFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDQUoscUJBQWE7QUFDaEI7QUFDSixLQU5NO0FBQUEsY0FPRkg7QUFQRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFTSDs7R0FmdUJGLGE7VUFDZUcsMEQ7OztLQURmSCxhO0FBZXZCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EZWxldGVQcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5cbmNvbnN0IERFTEVURV9QUk9EVUNUX01VVEFUSU9OID0gZ3FsYFxuICAgIG11dGF0aW9uIERFTEVURV9QUk9EVUNUX01VVEFUSU9OKCRpZDogSUQhKSB7XG4gICAgICAgIGRlbGV0ZVByb2R1Y3QoJGlkKSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlUHJvZHVjdCh7aWQsIGNoaWxkcmVufSkge1xuICAgIGNvbnN0IFtkZWxldGVQcm9kdWN0LCB7bG9hZGluZ31dID0gdXNlTXV0YXRpb24oXG4gICAgICAgIERFTEVURV9QUk9EVUNUX01VVEFUSU9OLCB7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgaWYoY29uZmlybSgnU2hvdWxkIHdlIHJlYWxseSByZW1vdmUgdGhpcyBpdGVtIGZyb20gZXhpc3RlbmNlPycpKSB7XG4gICAgICAgICAgICAvL2lmIGNvbmZpcm1lZCwgVEhFTiBkZWxldGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXR0aW4gaXQgZ29uZSEnKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2R1Y3QoKVxuICAgICAgICB9XG4gICAgfX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DeleteProduct.js\n");

/***/ })

})