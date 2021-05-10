webpackHotUpdate_N_E("pages/update",{

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UpdateProduct; });\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/UpdateProduct.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    mutation UPDATE_PRODUCT_MUTATION(\\n        $id: ID!\\n        $name: String\\n        $description: String\\n        $price: Int\\n    ) {\\n        updateProduct (\\n            id: $id,\\n            data: {\\n                id: $id,\\n                name: $name,\\n                description: $description,\\n                price: $price,\\n            }\\n        ) {\\n            id\\n            name\\n            description\\n            price\\n        }\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    query SINGLE_ITEM_QUERY($id: ID!) {\\n        Product (where: {\\n            id: $id\\n        }) \\n        {\\n            id\\n            name\\n            price\\n            description\\n            photo {\\n                id\\n                altText\\n                image {\\n                    publicUrlTransformed\\n                }\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar SINGLE_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());\nvar UPDATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject2());\nfunction UpdateProduct(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  //TODO\n  //get existing product\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(SINGLE_ITEM_QUERY, {\n    variables: {\n      id: id\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  console.log({\n    data: data\n  }); //mutation to update, including renaming res variables to not conflict with above\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(UPDATE_PRODUCT_MUTATION, {\n    variables: {\n      id: id\n    }\n  }),\n      _useMutation2 = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation, 2),\n      updateProduct = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      updateData = _useMutation2$.data,\n      updateError = _useMutation2$.error,\n      updateLoading = _useMutation2$.loading; //form to handle updates\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n    children: [\"Update \", id]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 12\n  }, this);\n}\n\n_s(UpdateProduct, \"f1yWKvIEXovp2CPYEfjSlhDSK4o=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"]];\n});\n\n_c = UpdateProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpdateProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzPzllOGUiXSwibmFtZXMiOlsiU0lOR0xFX0lURU1fUVVFUlkiLCJncWwiLCJVUERBVEVfUFJPRFVDVF9NVVRBVElPTiIsIlVwZGF0ZVByb2R1Y3QiLCJpZCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VNdXRhdGlvbiIsInVwZGF0ZVByb2R1Y3QiLCJ1cGRhdGVEYXRhIiwidXBkYXRlRXJyb3IiLCJ1cGRhdGVMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLGtEQUFILG1CQUF2QjtBQXFCQSxJQUFNQyx1QkFBdUIsR0FBR0Qsa0RBQUgsb0JBQTdCO0FBeUJlLFNBQVNFLGFBQVQsT0FBNkI7QUFBQTs7QUFBQSxNQUFMQyxFQUFLLFFBQUxBLEVBQUs7O0FBRXhDO0FBQ0E7QUFId0Msa0JBSVBDLCtEQUFRLENBQUNMLGlCQUFELEVBQW9CO0FBQ3pETSxhQUFTLEVBQUU7QUFBQ0YsUUFBRSxFQUFGQTtBQUFEO0FBRDhDLEdBQXBCLENBSkQ7QUFBQSxNQUloQ0csSUFKZ0MsYUFJaENBLElBSmdDO0FBQUEsTUFJMUJDLEtBSjBCLGFBSTFCQSxLQUowQjtBQUFBLE1BSW5CQyxPQUptQixhQUluQkEsT0FKbUI7O0FBT3hDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDSixRQUFJLEVBQUpBO0FBQUQsR0FBWixFQVB3QyxDQVN4Qzs7QUFUd0MscUJBY3BDSyxrRUFBVyxDQUFDVix1QkFBRCxFQUEwQjtBQUNqQ0ksYUFBUyxFQUFFO0FBQ1BGLFFBQUUsRUFBRUE7QUFERztBQURzQixHQUExQixDQWR5QjtBQUFBO0FBQUEsTUFVakNTLGFBVmlDO0FBQUE7QUFBQSxNQVc5QkMsVUFYOEIsa0JBV3BDUCxJQVhvQztBQUFBLE1BWTdCUSxXQVo2QixrQkFZcENQLEtBWm9DO0FBQUEsTUFhM0JRLGFBYjJCLGtCQWFwQ1AsT0Fib0MsRUFtQnhDOzs7QUFFQSxzQkFBTztBQUFBLDBCQUFXTCxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7O0dBdEJ1QkQsYTtVQUlhRSx1RCxFQVU3Qk8sMEQ7OztLQWRnQlQsYSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVXBkYXRlUHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcblxuY29uc3QgU0lOR0xFX0lURU1fUVVFUlkgPSBncWxgXG4gICAgcXVlcnkgU0lOR0xFX0lURU1fUVVFUlkoJGlkOiBJRCEpIHtcbiAgICAgICAgUHJvZHVjdCAod2hlcmU6IHtcbiAgICAgICAgICAgIGlkOiAkaWRcbiAgICAgICAgfSkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIHBob3RvIHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuY29uc3QgVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXG4gICAgbXV0YXRpb24gVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04oXG4gICAgICAgICRpZDogSUQhXG4gICAgICAgICRuYW1lOiBTdHJpbmdcbiAgICAgICAgJGRlc2NyaXB0aW9uOiBTdHJpbmdcbiAgICAgICAgJHByaWNlOiBJbnRcbiAgICApIHtcbiAgICAgICAgdXBkYXRlUHJvZHVjdCAoXG4gICAgICAgICAgICBpZDogJGlkLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGlkOiAkaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogJG5hbWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBwcmljZTogJHByaWNlLFxuICAgICAgICAgICAgfVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgfVxuICAgIH1cbmA7XG4gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZVByb2R1Y3Qoe2lkfSkge1xuXG4gICAgLy9UT0RPXG4gICAgLy9nZXQgZXhpc3RpbmcgcHJvZHVjdFxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9JVEVNX1FVRVJZLCB7XG4gICAgICAgIHZhcmlhYmxlczoge2lkfSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh7ZGF0YX0pO1xuICAgIFxuICAgIC8vbXV0YXRpb24gdG8gdXBkYXRlLCBpbmNsdWRpbmcgcmVuYW1pbmcgcmVzIHZhcmlhYmxlcyB0byBub3QgY29uZmxpY3Qgd2l0aCBhYm92ZVxuICAgIGNvbnN0IFt1cGRhdGVQcm9kdWN0LCB7IFxuICAgICAgICBkYXRhOiB1cGRhdGVEYXRhLCBcbiAgICAgICAgZXJyb3I6IHVwZGF0ZUVycm9yLCBcbiAgICAgICAgbG9hZGluZzogdXBkYXRlTG9hZGluZyB9XSA9IFxuICAgICAgICB1c2VNdXRhdGlvbihVUERBVEVfUFJPRFVDVF9NVVRBVElPTiwge1xuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgLy9mb3JtIHRvIGhhbmRsZSB1cGRhdGVzXG5cbiAgICByZXR1cm4gPHA+VXBkYXRlIHtpZH08L3A+O1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UpdateProduct.js\n");

/***/ })

})