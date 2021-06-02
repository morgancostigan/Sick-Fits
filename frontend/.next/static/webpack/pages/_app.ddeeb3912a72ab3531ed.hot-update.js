webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RemoveFromCart; });\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_RemoveButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/RemoveButton */ \"./components/styles/RemoveButton.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/RemoveFromCart.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    mutation REMOVE_FROM_CART_MUTATION($id: ID!) {\\n        deleteCartItem(id: $id){\\n            id\\n            # __typename - this comes automatically\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar REMOVE_FROM_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());\n\nfunction updateCart(cache, payload) {\n  console.log('uodateCart fucntion running');\n  cache.evict(cache.identify(payload.data.deleteCartItem));\n}\n\nfunction RemoveFromCart(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(REMOVE_FROM_CART_MUTATION, {\n    variables: {\n      id: id\n    },\n    updateCart: updateCart\n  }),\n      _useMutation2 = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation, 2),\n      removeFromCart = _useMutation2[0],\n      loading = _useMutation2[1].loading;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_styles_RemoveButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: removeFromCart,\n    disabled: loading,\n    \"aria-busy\": loading,\n    type: \"button\",\n    title: \"remove this item from cart\",\n    children: \"\\xD7\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 12\n  }, this);\n}\n\n_s(RemoveFromCart, \"1gobEhNNb1zJTO706ogXU/cmTeU=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"]];\n});\n\n_c = RemoveFromCart;\n\nvar _c;\n\n$RefreshReg$(_c, \"RemoveFromCart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZW1vdmVGcm9tQ2FydC5qcz9iMjVlIl0sIm5hbWVzIjpbIlJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04iLCJncWwiLCJ1cGRhdGVDYXJ0IiwiY2FjaGUiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsImV2aWN0IiwiaWRlbnRpZnkiLCJkYXRhIiwiZGVsZXRlQ2FydEl0ZW0iLCJSZW1vdmVGcm9tQ2FydCIsImlkIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZW1vdmVGcm9tQ2FydCIsImxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHlCQUF5QixHQUFHQyxrREFBSCxtQkFBL0I7O0FBU0EsU0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkJDLE9BQTNCLEVBQW9DO0FBQ2hDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjtBQUVBSCxPQUFLLENBQUNJLEtBQU4sQ0FBWUosS0FBSyxDQUFDSyxRQUFOLENBQWVKLE9BQU8sQ0FBQ0ssSUFBUixDQUFhQyxjQUE1QixDQUFaO0FBQ0g7O0FBRWMsU0FBU0MsY0FBVCxPQUFnQztBQUFBOztBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTs7QUFBQSxxQkFDTEMsa0VBQVcsQ0FDN0NiLHlCQUQ2QyxFQUNsQjtBQUN2QmMsYUFBUyxFQUFFO0FBQUNGLFFBQUUsRUFBRUE7QUFBTCxLQURZO0FBRXZCVixjQUFVLEVBQVZBO0FBRnVCLEdBRGtCLENBRE47QUFBQTtBQUFBLE1BQ3BDYSxjQURvQztBQUFBLE1BQ2xCQyxPQURrQixvQkFDbEJBLE9BRGtCOztBQU8zQyxzQkFBTyxxRUFBQyw0REFBRDtBQUNILFdBQU8sRUFBRUQsY0FETjtBQUVILFlBQVEsRUFBRUMsT0FGUDtBQUdILGlCQUFXQSxPQUhSO0FBSUgsUUFBSSxFQUFDLFFBSkY7QUFLSCxTQUFLLEVBQUMsNEJBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQU9IOztHQWR1QkwsYztVQUNrQkUsMEQ7OztLQURsQkYsYyIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVtb3ZlRnJvbUNhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IFJlbW92ZUJ1dHRvbiBmcm9tICcuL3N0eWxlcy9SZW1vdmVCdXR0b24nO1xuXG5jb25zdCBSRU1PVkVfRlJPTV9DQVJUX01VVEFUSU9OID0gZ3FsYFxuICAgIG11dGF0aW9uIFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04oJGlkOiBJRCEpIHtcbiAgICAgICAgZGVsZXRlQ2FydEl0ZW0oaWQ6ICRpZCl7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgIyBfX3R5cGVuYW1lIC0gdGhpcyBjb21lcyBhdXRvbWF0aWNhbGx5XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5mdW5jdGlvbiB1cGRhdGVDYXJ0KGNhY2hlLCBwYXlsb2FkKSB7XG4gICAgY29uc29sZS5sb2coJ3VvZGF0ZUNhcnQgZnVjbnRpb24gcnVubmluZycpO1xuICAgIFxuICAgIGNhY2hlLmV2aWN0KGNhY2hlLmlkZW50aWZ5KHBheWxvYWQuZGF0YS5kZWxldGVDYXJ0SXRlbSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbW92ZUZyb21DYXJ0KHsgaWQgfSkge1xuICAgIGNvbnN0IFtyZW1vdmVGcm9tQ2FydCwgeyBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oXG4gICAgICAgIFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04sIHtcbiAgICAgICAgICAgIHZhcmlhYmxlczoge2lkOiBpZH0sXG4gICAgICAgICAgICB1cGRhdGVDYXJ0IFxuICAgIH1cbiAgICApXG4gICAgcmV0dXJuIDxSZW1vdmVCdXR0b24gXG4gICAgICAgIG9uQ2xpY2s9e3JlbW92ZUZyb21DYXJ0fVxuICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgYXJpYS1idXN5PXtsb2FkaW5nfVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgIHRpdGxlPVwicmVtb3ZlIHRoaXMgaXRlbSBmcm9tIGNhcnRcIj5cbiAgICAgICAgJnRpbWVzOzwvUmVtb3ZlQnV0dG9uPlxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RemoveFromCart.js\n");

/***/ })

})