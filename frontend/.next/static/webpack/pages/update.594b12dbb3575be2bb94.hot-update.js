webpackHotUpdate_N_E("pages/update",{

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UpdateProduct; });\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/styles/Form */ \"./components/styles/Form.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/UpdateProduct.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n    mutation UPDATE_PRODUCT_MUTATION(\\n        $id: ID!\\n        $name: String\\n        $description: String\\n        $price: Int\\n    ) {\\n        updateProduct (\\n            id: $id,\\n            data: {\\n                id: $id,\\n                name: $name,\\n                description: $description,\\n                price: $price,\\n            }\\n        ) {\\n            id\\n            name\\n            description\\n            price\\n        }\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n    query SINGLE_ITEM_QUERY($id: ID!) {\\n        Product (where: {\\n            id: $id\\n        }) \\n        {\\n            id\\n            name\\n            price\\n            description\\n            photo {\\n                id\\n                altText\\n                image {\\n                    publicUrlTransformed\\n                }\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar SINGLE_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());\nvar UPDATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject2());\nfunction UpdateProduct(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  //TODO\n  //get existing product\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(SINGLE_ITEM_QUERY, {\n    variables: {\n      id: id\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  console.log({\n    data: data\n  }); //mutation to update, including renaming res variables to not conflict with above\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"])(UPDATE_PRODUCT_MUTATION, {\n    variables: {\n      id: id //TODO pass in updates\n\n    }\n  }),\n      _useMutation2 = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation, 2),\n      updateProduct = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      updateData = _useMutation2$.data,\n      updateError = _useMutation2$.error,\n      updateLoading = _useMutation2$.loading; //form to handle updates\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_components_styles_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onSubmit: /*#__PURE__*/function () {\n      var _ref2 = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n        var res;\n        return _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                e.preventDefault(); // console.log({inputs});\n                //submit input fields to backend\n\n                _context.next = 3;\n                return createProduct();\n\n              case 3:\n                res = _context.sent;\n                clearForm(); //Go to the new product's page\n\n                Router.push({\n                  pathname: \"/product/\".concat(res.data.createProduct.id)\n                });\n\n              case 6:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }(),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(DisplayError, {\n      error: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"fieldset\", {\n      disabled: loading,\n      \"aria-busy\": loading,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"image\",\n        children: [\"Image\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n          required: true,\n          type: \"file\",\n          id: \"image\",\n          name: \"image\",\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"name\",\n        children: [\"Name It!\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          id: \"name\",\n          name: \"name\",\n          placeholder: \"Name\",\n          value: inputs.name,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"price\",\n        children: [\"Price It!\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n          type: \"number\",\n          id: \"price\",\n          name: \"price\",\n          placeholder: \"Price\",\n          value: inputs.price,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"description\",\n        children: [\"Describe It!\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"textarea\", {\n          id: \"description\",\n          name: \"description\",\n          placeholder: \"Description\",\n          value: inputs.description,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        children: \"Bop It!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \"+ Add Product\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 9\n  }, this);\n}\n\n_s(UpdateProduct, \"f1yWKvIEXovp2CPYEfjSlhDSK4o=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"]];\n});\n\n_c = UpdateProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpdateProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzPzllOGUiXSwibmFtZXMiOlsiU0lOR0xFX0lURU1fUVVFUlkiLCJncWwiLCJVUERBVEVfUFJPRFVDVF9NVVRBVElPTiIsIlVwZGF0ZVByb2R1Y3QiLCJpZCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VNdXRhdGlvbiIsInVwZGF0ZVByb2R1Y3QiLCJ1cGRhdGVEYXRhIiwidXBkYXRlRXJyb3IiLCJ1cGRhdGVMb2FkaW5nIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlUHJvZHVjdCIsInJlcyIsImNsZWFyRm9ybSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsImhhbmRsZUNoYW5nZSIsImlucHV0cyIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0Msa0RBQUgsbUJBQXZCO0FBcUJBLElBQU1DLHVCQUF1QixHQUFHRCxrREFBSCxvQkFBN0I7QUF5QmUsU0FBU0UsYUFBVCxPQUE2QjtBQUFBOztBQUFBLE1BQUxDLEVBQUssUUFBTEEsRUFBSzs7QUFFeEM7QUFDQTtBQUh3QyxrQkFJUEMsK0RBQVEsQ0FBQ0wsaUJBQUQsRUFBb0I7QUFDekRNLGFBQVMsRUFBRTtBQUFDRixRQUFFLEVBQUZBO0FBQUQ7QUFEOEMsR0FBcEIsQ0FKRDtBQUFBLE1BSWhDRyxJQUpnQyxhQUloQ0EsSUFKZ0M7QUFBQSxNQUkxQkMsS0FKMEIsYUFJMUJBLEtBSjBCO0FBQUEsTUFJbkJDLE9BSm1CLGFBSW5CQSxPQUptQjs7QUFPeENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNKLFFBQUksRUFBSkE7QUFBRCxHQUFaLEVBUHdDLENBU3hDOztB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bXBvbmVudHMvVXBkYXRlUHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvc3R5bGVzL0Zvcm0nXG5cbmNvbnN0IFNJTkdMRV9JVEVNX1FVRVJZID0gZ3FsYFxuICAgIHF1ZXJ5IFNJTkdMRV9JVEVNX1FVRVJZKCRpZDogSUQhKSB7XG4gICAgICAgIFByb2R1Y3QgKHdoZXJlOiB7XG4gICAgICAgICAgICBpZDogJGlkXG4gICAgICAgIH0pIFxuICAgICAgICB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBwaG90byB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmNvbnN0IFVQREFURV9QUk9EVUNUX01VVEFUSU9OID0gZ3FsYFxuICAgIG11dGF0aW9uIFVQREFURV9QUk9EVUNUX01VVEFUSU9OKFxuICAgICAgICAkaWQ6IElEIVxuICAgICAgICAkbmFtZTogU3RyaW5nXG4gICAgICAgICRkZXNjcmlwdGlvbjogU3RyaW5nXG4gICAgICAgICRwcmljZTogSW50XG4gICAgKSB7XG4gICAgICAgIHVwZGF0ZVByb2R1Y3QgKFxuICAgICAgICAgICAgaWQ6ICRpZCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBpZDogJGlkLFxuICAgICAgICAgICAgICAgIG5hbWU6ICRuYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgcHJpY2U6ICRwcmljZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIHByaWNlXG4gICAgICAgIH1cbiAgICB9XG5gO1xuIFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVQcm9kdWN0KHtpZH0pIHtcblxuICAgIC8vVE9ET1xuICAgIC8vZ2V0IGV4aXN0aW5nIHByb2R1Y3RcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShTSU5HTEVfSVRFTV9RVUVSWSwge1xuICAgICAgICB2YXJpYWJsZXM6IHtpZH0sXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coe2RhdGF9KTtcbiAgICBcbiAgICAvL211dGF0aW9uIHRvIHVwZGF0ZSwgaW5jbHVkaW5nIHJlbmFtaW5nIHJlcyB2YXJpYWJsZXMgdG8gbm90IGNvbmZsaWN0IHdpdGggYWJvdmVcbiAgICBjb25zdCBbdXBkYXRlUHJvZHVjdCwgeyBcbiAgICAgICAgZGF0YTogdXBkYXRlRGF0YSwgXG4gICAgICAgIGVycm9yOiB1cGRhdGVFcnJvciwgXG4gICAgICAgIGxvYWRpbmc6IHVwZGF0ZUxvYWRpbmcgfV0gPSBcbiAgICAgICAgdXNlTXV0YXRpb24oVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04sIHtcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgIC8vVE9ETyBwYXNzIGluIHVwZGF0ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAvL2Zvcm0gdG8gaGFuZGxlIHVwZGF0ZXNcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coe2lucHV0c30pO1xuICAgICAgICAgICAgLy9zdWJtaXQgaW5wdXQgZmllbGRzIHRvIGJhY2tlbmRcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNyZWF0ZVByb2R1Y3QoKTtcbiAgICAgICAgICAgIGNsZWFyRm9ybSgpO1xuICAgICAgICAgICAgLy9HbyB0byB0aGUgbmV3IHByb2R1Y3QncyBwYWdlXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvcHJvZHVjdC8ke3Jlcy5kYXRhLmNyZWF0ZVByb2R1Y3QuaWR9YCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH19PlxuICAgICAgICAgICAgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9IGFyaWEtYnVzeT17bG9hZGluZ30+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICBJbWFnZVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIE5hbWUgSXQhXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICBQcmljZSBJdCFcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIERlc2NyaWJlIEl0IVxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIEJvcCBJdCFcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPisgQWRkIFByb2R1Y3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG5cbiAgICAgICAgICAgIHsvKiAvL0VYQU1QTEUgbWV0aG9kcyAqL31cbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17Y2xlYXJGb3JtfT5cbiAgICAgICAgICAgICAgICBDbGVhciBGb3JtXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtyZXNldEZvcm19PlxuICAgICAgICAgICAgICAgIFJlc2V0IEZvcm1cbiAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cblxuICAgICAgICA8L0Zvcm0+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UpdateProduct.js\n");

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"keyframes\"])([\"from{background-position:0 0;}to{background-position:100% 100%;}\"]);\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].form.withConfig({\n  displayName: \"Form\",\n  componentId: \"sc-1xszr8q-0\"\n})([\"box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:var(--red);}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:\", \" 0.5s linear infinite;}}\"], loading);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHlsZXMvRm9ybS5qcz85YjM1Il0sIm5hbWVzIjpbImxvYWRpbmciLCJrZXlmcmFtZXMiLCJGb3JtIiwic3R5bGVkIiwiZm9ybSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxtRUFBSCxzRUFBYjtBQVlBLElBQU1DLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSw4dEJBc0RTSixPQXREVCxDQUFWO0FBMkRlRSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3R5bGVzL0Zvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIC8qIHJvdGF0ZTogMDsgKi9cbiAgfVxuXG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gICAgLyogcm90YXRlOiAzNjBkZWc7ICovXG4gIH1cbmA7XG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBpbnB1dCxcbiAgdGV4dGFyZWEsXG4gIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7XG4gICAgfVxuICB9XG4gIGJ1dHRvbixcbiAgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gIH1cbiAgZmllbGRzZXQge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAmOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gcmlnaHQsXG4gICAgICAgICNmZjMwMTkgMCUsXG4gICAgICAgICNlMmIwNGEgNTAlLFxuICAgICAgICAjZmYzMDE5IDEwMCVcbiAgICAgICk7XG4gICAgfVxuICAgICZbYXJpYS1idXN5PSd0cnVlJ106OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSBhdXRvO1xuICAgICAgYW5pbWF0aW9uOiAke2xvYWRpbmd9IDAuNXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/styles/Form.js\n");

/***/ })

})