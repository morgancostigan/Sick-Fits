webpackHotUpdate_N_E("pages/update",{

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UpdateProduct; });\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/UpdateProduct.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n    mutation UPDATE_PRODUCT_MUTATION(\\n        $id: ID!\\n        $name: String\\n        $description: String\\n        $price: Int\\n    ) {\\n        updateProduct (\\n            id: $id,\\n            data: {\\n                id: $id,\\n                name: $name,\\n                description: $description,\\n                price: $price,\\n            }\\n        ) {\\n            id\\n            name\\n            description\\n            price\\n        }\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n    query SINGLE_ITEM_QUERY($id: ID!) {\\n        Product (where: {\\n            id: $id\\n        }) \\n        {\\n            id\\n            name\\n            price\\n            description\\n            photo {\\n                id\\n                altText\\n                image {\\n                    publicUrlTransformed\\n                }\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar SINGLE_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());\nvar UPDATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject2());\nfunction UpdateProduct(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  //TODO\n  //get existing product\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"])(SINGLE_ITEM_QUERY, {\n    variables: {\n      id: id\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading; //mutation to update, including renaming res variables to not conflict with above\n\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"])(UPDATE_PRODUCT_MUTATION, {\n    variables: {\n      id: id //TODO pass in updates\n\n    }\n  }),\n      _useMutation2 = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation, 2),\n      updateProduct = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      updateData = _useMutation2$.data,\n      updateError = _useMutation2$.error,\n      updateLoading = _useMutation2$.loading; //create state for form inputs \n\n\n  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(data === null || data === void 0 ? void 0 : data.Product),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      clearForm = _useForm.clearForm,\n      resetForm = _useForm.resetForm; // console.log(inputs);\n\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 25\n  }, this); //form to handle updates\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_components_styles_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onSubmit: /*#__PURE__*/function () {\n      var _ref2 = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n        var res;\n        return _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                e.preventDefault();\n                res = updateProduct();\n                console.log({\n                  res: res\n                }); //TODO handle submit\n                // // console.log({inputs});\n                // //submit input fields to backend\n                // const res = await createProduct();\n                // clearForm();\n                // //Go to the new product's page\n                // Router.push({\n                //     pathname: `/product/${res.data.createProduct.id}`,\n                // })\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }(),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      error: error || updateError\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"fieldset\", {\n      disabled: updateLoading,\n      \"aria-busy\": updateLoading,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"name\",\n        children: [\"Name It!\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          id: \"name\",\n          name: \"name\",\n          placeholder: \"Name\",\n          value: data.Product.name,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"price\",\n        children: [\"Price It!\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n          type: \"number\",\n          id: \"price\",\n          name: \"price\",\n          placeholder: \"Price\",\n          value: inputs.price,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"description\",\n        children: [\"Describe It!\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"textarea\", {\n          id: \"description\",\n          name: \"description\",\n          placeholder: \"Description\",\n          value: inputs.description,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        children: \"Bop It!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \"Update Product\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 9\n  }, this);\n}\n\n_s(UpdateProduct, \"7L5GFEDS63RjTpYIYToJhl0buiQ=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useQuery\"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"], _lib_useForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"]];\n});\n\n_c = UpdateProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpdateProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzPzllOGUiXSwibmFtZXMiOlsiU0lOR0xFX0lURU1fUVVFUlkiLCJncWwiLCJVUERBVEVfUFJPRFVDVF9NVVRBVElPTiIsIlVwZGF0ZVByb2R1Y3QiLCJpZCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInVzZU11dGF0aW9uIiwidXBkYXRlUHJvZHVjdCIsInVwZGF0ZURhdGEiLCJ1cGRhdGVFcnJvciIsInVwZGF0ZUxvYWRpbmciLCJ1c2VGb3JtIiwiUHJvZHVjdCIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsImNsZWFyRm9ybSIsInJlc2V0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwicHJpY2UiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLGtEQUFILG1CQUF2QjtBQXFCQSxJQUFNQyx1QkFBdUIsR0FBR0Qsa0RBQUgsb0JBQTdCO0FBeUJlLFNBQVNFLGFBQVQsT0FBNkI7QUFBQTs7QUFBQSxNQUFMQyxFQUFLLFFBQUxBLEVBQUs7O0FBRXhDO0FBQ0E7QUFId0Msa0JBSVBDLCtEQUFRLENBQUNMLGlCQUFELEVBQW9CO0FBQ3pETSxhQUFTLEVBQUU7QUFBQ0YsUUFBRSxFQUFGQTtBQUFEO0FBRDhDLEdBQXBCLENBSkQ7QUFBQSxNQUloQ0csSUFKZ0MsYUFJaENBLElBSmdDO0FBQUEsTUFJMUJDLEtBSjBCLGFBSTFCQSxLQUowQjtBQUFBLE1BSW5CQyxPQUptQixhQUluQkEsT0FKbUIsRUFReEM7OztBQVJ3QyxxQkFhcENDLGtFQUFXLENBQUNSLHVCQUFELEVBQTBCO0FBQ2pDSSxhQUFTLEVBQUU7QUFDUEYs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RDs7O0tBcEJuQ1osYSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVXBkYXRlUHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvc3R5bGVzL0Zvcm0nO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcblxuY29uc3QgU0lOR0xFX0lURU1fUVVFUlkgPSBncWxgXG4gICAgcXVlcnkgU0lOR0xFX0lURU1fUVVFUlkoJGlkOiBJRCEpIHtcbiAgICAgICAgUHJvZHVjdCAod2hlcmU6IHtcbiAgICAgICAgICAgIGlkOiAkaWRcbiAgICAgICAgfSkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIHBob3RvIHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuY29uc3QgVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXG4gICAgbXV0YXRpb24gVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04oXG4gICAgICAgICRpZDogSUQhXG4gICAgICAgICRuYW1lOiBTdHJpbmdcbiAgICAgICAgJGRlc2NyaXB0aW9uOiBTdHJpbmdcbiAgICAgICAgJHByaWNlOiBJbnRcbiAgICApIHtcbiAgICAgICAgdXBkYXRlUHJvZHVjdCAoXG4gICAgICAgICAgICBpZDogJGlkLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGlkOiAkaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogJG5hbWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBwcmljZTogJHByaWNlLFxuICAgICAgICAgICAgfVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgfVxuICAgIH1cbmA7XG4gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZVByb2R1Y3Qoe2lkfSkge1xuXG4gICAgLy9UT0RPXG4gICAgLy9nZXQgZXhpc3RpbmcgcHJvZHVjdFxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9JVEVNX1FVRVJZLCB7XG4gICAgICAgIHZhcmlhYmxlczoge2lkfSxcbiAgICB9KTtcbiAgICBcbiAgICAvL211dGF0aW9uIHRvIHVwZGF0ZSwgaW5jbHVkaW5nIHJlbmFtaW5nIHJlcyB2YXJpYWJsZXMgdG8gbm90IGNvbmZsaWN0IHdpdGggYWJvdmVcbiAgICBjb25zdCBbdXBkYXRlUHJvZHVjdCwgeyBcbiAgICAgICAgZGF0YTogdXBkYXRlRGF0YSwgXG4gICAgICAgIGVycm9yOiB1cGRhdGVFcnJvciwgXG4gICAgICAgIGxvYWRpbmc6IHVwZGF0ZUxvYWRpbmcgfV0gPSBcbiAgICAgICAgdXNlTXV0YXRpb24oVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04sIHtcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgIC8vVE9ETyBwYXNzIGluIHVwZGF0ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAvL2NyZWF0ZSBzdGF0ZSBmb3IgZm9ybSBpbnB1dHMgXG4gICAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgY2xlYXJGb3JtLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oZGF0YT8uUHJvZHVjdCk7XG4gICAgLy8gY29uc29sZS5sb2coaW5wdXRzKTtcbiAgICBcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XG5cbiAgICAvL2Zvcm0gdG8gaGFuZGxlIHVwZGF0ZXNcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgcmVzID0gdXBkYXRlUHJvZHVjdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coe3Jlc30pO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vVE9ETyBoYW5kbGUgc3VibWl0XG5cbiAgICAgICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKHtpbnB1dHN9KTtcbiAgICAgICAgICAgIC8vIC8vc3VibWl0IGlucHV0IGZpZWxkcyB0byBiYWNrZW5kXG4gICAgICAgICAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBjcmVhdGVQcm9kdWN0KCk7XG4gICAgICAgICAgICAvLyBjbGVhckZvcm0oKTtcbiAgICAgICAgICAgIC8vIC8vR28gdG8gdGhlIG5ldyBwcm9kdWN0J3MgcGFnZVxuICAgICAgICAgICAgLy8gUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgLy8gICAgIHBhdGhuYW1lOiBgL3Byb2R1Y3QvJHtyZXMuZGF0YS5jcmVhdGVQcm9kdWN0LmlkfWAsXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yIHx8IHVwZGF0ZUVycm9yfSAvPlxuICAgICAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXt1cGRhdGVMb2FkaW5nfSBhcmlhLWJ1c3k9e3VwZGF0ZUxvYWRpbmd9PlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIE5hbWUgSXQhXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5Qcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICBQcmljZSBJdCFcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIERlc2NyaWJlIEl0IVxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIEJvcCBJdCFcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlVwZGF0ZSBQcm9kdWN0PC9idXR0b24+XG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuXG4gICAgICAgICAgICB7LyogLy9FWEFNUExFIG1ldGhvZHMgKi99XG4gICAgICAgICAgICB7LyogPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2NsZWFyRm9ybX0+XG4gICAgICAgICAgICAgICAgQ2xlYXIgRm9ybVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17cmVzZXRGb3JtfT5cbiAgICAgICAgICAgICAgICBSZXNldCBGb3JtXG4gICAgICAgICAgICA8L2J1dHRvbj4gKi99XG5cbiAgICAgICAgPC9Gb3JtPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UpdateProduct.js\n");

/***/ })

})