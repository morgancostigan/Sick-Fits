webpackHotUpdate_N_E("pages/update",{

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UpdateProduct; });\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/UpdateProduct.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n    mutation UPDATE_PRODUCT_MUTATION(\\n        $id: ID!\\n        $name: String\\n        $description: String\\n        $price: Int\\n    ) {\\n        updateProduct (\\n            id: $id,\\n            data: {\\n                name: $name,\\n                description: $description,\\n                price: $price,\\n            }\\n        ) {\\n            id\\n            name\\n            description\\n            price\\n        }\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n    query SINGLE_ITEM_QUERY($id: ID!) {\\n        Product (where: {\\n            id: $id\\n        }) \\n        {\\n            id\\n            name\\n            price\\n            description\\n            photo {\\n                id\\n                altText\\n                image {\\n                    publicUrlTransformed\\n                }\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar SINGLE_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());\nvar UPDATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject2());\nfunction UpdateProduct(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  //TODO\n  //get existing product\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(SINGLE_ITEM_QUERY, {\n    variables: {\n      id: id\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading; //mutation to update, including renaming res variables to not conflict with above\n\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"])(UPDATE_PRODUCT_MUTATION),\n      _useMutation2 = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation, 2),\n      updateProduct = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      updateData = _useMutation2$.data,\n      updateError = _useMutation2$.error,\n      updateLoading = _useMutation2$.loading; //create state for form inputs \n\n\n  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(data === null || data === void 0 ? void 0 : data.Product),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      clearForm = _useForm.clearForm,\n      resetForm = _useForm.resetForm; // console.log(inputs);\n\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 25\n  }, this); //form to handle updates\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_components_styles_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onSubmit: /*#__PURE__*/function () {\n      var _ref2 = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n        var res;\n        return _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                e.preventDefault();\n                _context.next = 3;\n                return updateProduct({\n                  variables: {\n                    id: id,\n                    name: inputs.name,\n                    price: inputs.price,\n                    description: inputs.description\n                  }\n                })[\"catch\"](console.error);\n\n              case 3:\n                res = _context.sent;\n                console.log({\n                  res: res\n                }); //TODO handle submit\n                // // console.log({inputs});\n                // //submit input fields to backend\n                // const res = await createProduct();\n                // clearForm();\n                // //Go to the new product's page\n                // Router.push({\n                //     pathname: `/product/${res.data.createProduct.id}`,\n                // })\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }(),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      error: error || updateError\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"fieldset\", {\n      disabled: updateLoading,\n      \"aria-busy\": updateLoading,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"name\",\n        children: [\"Name It!\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          id: \"name\",\n          name: \"name\",\n          placeholder: \"Name\",\n          value: inputs.name,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"price\",\n        children: [\"Price It!\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n          type: \"number\",\n          id: \"price\",\n          name: \"price\",\n          placeholder: \"Price\",\n          value: inputs.price,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"description\",\n        children: [\"Describe It!\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"textarea\", {\n          id: \"description\",\n          name: \"description\",\n          placeholder: \"Description\",\n          value: inputs.description,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        children: \"Bop It!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \"Update Product\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 9\n  }, this);\n}\n\n_s(UpdateProduct, \"7L5GFEDS63RjTpYIYToJhl0buiQ=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"], _lib_useForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"]];\n});\n\n_c = UpdateProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpdateProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzPzllOGUiXSwibmFtZXMiOlsiU0lOR0xFX0lURU1fUVVFUlkiLCJncWwiLCJVUERBVEVfUFJPRFVDVF9NVVRBVElPTiIsIlVwZGF0ZVByb2R1Y3QiLCJpZCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInVzZU11dGF0aW9uIiwidXBkYXRlUHJvZHVjdCIsInVwZGF0ZURhdGEiLCJ1cGRhdGVFcnJvciIsInVwZGF0ZUxvYWRpbmciLCJ1c2VGb3JtIiwiUHJvZHVjdCIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsImNsZWFyRm9ybSIsInJlc2V0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsInJlcyIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLGtEQUFILG1CQUF2QjtBQXFCQSxJQUFNQyx1QkFBdUIsR0FBR0Qsa0RBQUgsb0JBQTdCO0FBd0JlLFNBQVNFLGFBQVQsT0FBNkI7QUFBQTs7QUFBQSxNQUFMQyxFQUFLLFFBQUxBLEVBQUs7O0FBRXhDO0FBQ0E7QUFId0Msa0JBSVBDLCtEQUFRLENBQUNMLGlCQUFELEVBQW9CO0FBQ3pETSxhQUFTLEVBQUU7QUFBQ0YsUUFBRSxFQUFGQTtBQUFEO0FBRDhDLEdBQXBCLENBSkQ7QUFBQSxNQUloQ0csSUFKZ0MsYUFJaENBLElBSmdDO0FBQUEsTUFJMUJDLEtBSjBCLGFBSTFCQSxLQUowQjtBQUFBLE1BSW5CQyxPQUptQixhQUluQkEsT0FKbUIsRUFReEM7OztBQVJ3QyxxQkFhcENDLGtFQUFXLENBQUNSLHVCQUFELENBYnlCO0FBQUE7QUFBQSxNQVNqQ1MsYUFUaUM7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QXJDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0RUg7O0dBbEd1QmYsYTtVQUlhRSx1RCxFQVM3QkssMEQsRUFFbURLLG9EOzs7S0FmbkNaLGEiLCJmaWxlIjoiLi9jb21wb25lbnRzL1VwZGF0ZVByb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcy9Gb3JtJztcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XG5cbmNvbnN0IFNJTkdMRV9JVEVNX1FVRVJZID0gZ3FsYFxuICAgIHF1ZXJ5IFNJTkdMRV9JVEVNX1FVRVJZKCRpZDogSUQhKSB7XG4gICAgICAgIFByb2R1Y3QgKHdoZXJlOiB7XG4gICAgICAgICAgICBpZDogJGlkXG4gICAgICAgIH0pIFxuICAgICAgICB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBwaG90byB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmNvbnN0IFVQREFURV9QUk9EVUNUX01VVEFUSU9OID0gZ3FsYFxuICAgIG11dGF0aW9uIFVQREFURV9QUk9EVUNUX01VVEFUSU9OKFxuICAgICAgICAkaWQ6IElEIVxuICAgICAgICAkbmFtZTogU3RyaW5nXG4gICAgICAgICRkZXNjcmlwdGlvbjogU3RyaW5nXG4gICAgICAgICRwcmljZTogSW50XG4gICAgKSB7XG4gICAgICAgIHVwZGF0ZVByb2R1Y3QgKFxuICAgICAgICAgICAgaWQ6ICRpZCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAkbmFtZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHByaWNlOiAkcHJpY2UsXG4gICAgICAgICAgICB9XG4gICAgICAgICkge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBwcmljZVxuICAgICAgICB9XG4gICAgfVxuYDtcbiBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBkYXRlUHJvZHVjdCh7aWR9KSB7XG5cbiAgICAvL1RPRE9cbiAgICAvL2dldCBleGlzdGluZyBwcm9kdWN0XG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoU0lOR0xFX0lURU1fUVVFUlksIHtcbiAgICAgICAgdmFyaWFibGVzOiB7aWR9LFxuICAgIH0pO1xuICAgIFxuICAgIC8vbXV0YXRpb24gdG8gdXBkYXRlLCBpbmNsdWRpbmcgcmVuYW1pbmcgcmVzIHZhcmlhYmxlcyB0byBub3QgY29uZmxpY3Qgd2l0aCBhYm92ZVxuICAgIGNvbnN0IFt1cGRhdGVQcm9kdWN0LCB7IFxuICAgICAgICBkYXRhOiB1cGRhdGVEYXRhLCBcbiAgICAgICAgZXJyb3I6IHVwZGF0ZUVycm9yLCBcbiAgICAgICAgbG9hZGluZzogdXBkYXRlTG9hZGluZyB9XSA9IFxuICAgICAgICB1c2VNdXRhdGlvbihVUERBVEVfUFJPRFVDVF9NVVRBVElPTik7XG4gICAgLy9jcmVhdGUgc3RhdGUgZm9yIGZvcm0gaW5wdXRzIFxuICAgIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKGRhdGE/LlByb2R1Y3QpO1xuICAgIC8vIGNvbnNvbGUubG9nKGlucHV0cyk7XG4gICAgXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuXG4gICAgLy9mb3JtIHRvIGhhbmRsZSB1cGRhdGVzXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHVwZGF0ZVByb2R1Y3Qoe1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0cy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogaW5wdXRzLnByaWNlLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaW5wdXRzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtyZXN9KTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvL1RPRE8gaGFuZGxlIHN1Ym1pdFxuXG4gICAgICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyh7aW5wdXRzfSk7XG4gICAgICAgICAgICAvLyAvL3N1Ym1pdCBpbnB1dCBmaWVsZHMgdG8gYmFja2VuZFxuICAgICAgICAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlUHJvZHVjdCgpO1xuICAgICAgICAgICAgLy8gY2xlYXJGb3JtKCk7XG4gICAgICAgICAgICAvLyAvL0dvIHRvIHRoZSBuZXcgcHJvZHVjdCdzIHBhZ2VcbiAgICAgICAgICAgIC8vIFJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIC8vICAgICBwYXRobmFtZTogYC9wcm9kdWN0LyR7cmVzLmRhdGEuY3JlYXRlUHJvZHVjdC5pZH1gLFxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgfX0+XG4gICAgICAgICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvciB8fCB1cGRhdGVFcnJvcn0gLz5cbiAgICAgICAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17dXBkYXRlTG9hZGluZ30gYXJpYS1idXN5PXt1cGRhdGVMb2FkaW5nfT5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICBOYW1lIEl0IVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgUHJpY2UgSXQhXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICBEZXNjcmliZSBJdCFcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBCb3AgSXQhXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5VcGRhdGUgUHJvZHVjdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9maWVsZHNldD5cblxuICAgICAgICAgICAgey8qIC8vRVhBTVBMRSBtZXRob2RzICovfVxuICAgICAgICAgICAgey8qIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtjbGVhckZvcm19PlxuICAgICAgICAgICAgICAgIENsZWFyIEZvcm1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e3Jlc2V0Rm9ybX0+XG4gICAgICAgICAgICAgICAgUmVzZXQgRm9ybVxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxuXG4gICAgICAgIDwvRm9ybT5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UpdateProduct.js\n");

/***/ })

})