webpackHotUpdate_N_E("pages/sell",{

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CreateProduct; });\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/CreateProduct.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n    mutation CREATE_PRODUCT_MUTATION(\\n        # which variables (and their types) are passed in?\\n        $name: String!\\n        $description: String!\\n        $price: Int!\\n        $image: Upload\\n    ) {\\n        createProduct (data:{\\n            name: $name\\n            price: $price\\n            description: $description\\n            status: \\\"available\\\"\\n            photo: {\\n                create: {\\n                    image: $image\\n                    alttext: $name\\n                }\\n            }\\n        }){\\n            id\\n            description\\n            price\\n            name\\n            photo\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar CREATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());\nfunction CreateProduct() {\n  _s();\n\n  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n    image: '',\n    name: '',\n    price: '',\n    description: ''\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      clearForm = _useForm.clearForm,\n      resetForm = _useForm.resetForm;\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"])(CREATE_PRODUCT_MUTATION, {\n    variables: inputs\n  }),\n      _useMutation2 = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation, 2),\n      createProduct = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      loading = _useMutation2$.loading,\n      error = _useMutation2$.error,\n      data = _useMutation2$.data;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onSubmit: /*#__PURE__*/function () {\n      var _ref = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n        return _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                e.preventDefault();\n                console.log({\n                  inputs: inputs\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }(),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"fieldset\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"image\",\n        children: [\"Image\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n          required: true,\n          type: \"file\",\n          id: \"image\",\n          name: \"image\",\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"name\",\n        children: [\"Name It!\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          id: \"name\",\n          name: \"name\",\n          placeholder: \"Name\",\n          value: inputs.name,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"price\",\n        children: [\"Price It!\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n          type: \"number\",\n          id: \"price\",\n          name: \"price\",\n          placeholder: \"Price\",\n          value: inputs.price,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"description\",\n        children: [\"Describe It!\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"textarea\", {\n          id: \"description\",\n          name: \"description\",\n          placeholder: \"Description\",\n          value: inputs.description,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n        children: \"Bop It!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \"+ Add Product\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 9\n  }, this);\n}\n\n_s(CreateProduct, \"9RH+W94J0wGM7lFNDDz15+7Z3fk=\", false, function () {\n  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"]];\n});\n\n_c = CreateProduct;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzP2UwNTAiXSwibmFtZXMiOlsiQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04iLCJncWwiLCJDcmVhdGVQcm9kdWN0IiwidXNlRm9ybSIsImltYWdlIiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsImNyZWF0ZVByb2R1Y3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSx1QkFBdUIsR0FBR0Msa0RBQUgsbUJBQTdCO0FBNkJlLFNBQVNDLGFBQVQsR0FBeUI7QUFBQTs7QUFBQSxpQkFDaUJDLDREQUFPLENBQUM7QUFDekRDLFNBQUssRUFBRSxFQURrRDtBQUV6REMsUUFBSSxFQUFFLEVBRm1EO0FBR3pEQyxTQUFLLEVBQUUsRUFIa0Q7QUFJekRDLGVBQVcsRUFBRTtBQUo0QyxHQUFELENBRHhCO0FBQUEsTUFDN0JDLE1BRDZCLFlBQzdCQSxNQUQ2QjtBQUFBLE1BQ3JCQyxZQURxQixZQUNyQkEsWUFEcUI7QUFBQSxNQUNQQyxTQURPLFlBQ1BBLFNBRE87QUFBQSxNQUNJQyxTQURKLFlBQ0lBLFNBREo7O0FBQUEscUJBT1lDLGtFQUFXLENBQUNaLHVCQUFELEVBQTBCO0FBQ2pGYSxhQUFTLEVBQUVMO0FBRHNFLEdBQTFCLENBUHZCO0FBQUE7QUFBQSxNQU83Qk0sYUFQNkI7QUFBQTtBQUFBLE1BT2JDLE9BUGEsa0JBT2JBLE9BUGE7QUFBQSxNQU9KQyxLQVBJLGtCQU9KQSxLQVBJO0FBQUEsTUFPR0MsSUFQSCxrQkFPR0EsSUFQSDs7QUFXcEMsc0JBQ0kscUVBQUMsb0RBQUQ7QUFBTSxZQUFRO0FBQUEsa2FBQUcsaUJBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiQSxpQkFBQyxDQUFDQyxjQUFGO0FBQ0FDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDYix3QkFBTSxFQUFOQTtBQUFELGlCQUFaOztBQUZhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZDtBQUFBLDJCQU1JO0FBQUEsOEJBQ0k7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHlDQUVJO0FBQ0ksa0JBQVEsTUFEWjtBQUVJLGNBQUksRUFBQyxNQUZUO0FBR0ksWUFBRSxFQUFDLE9BSFA7QUFJSSxjQUFJLEVBQUMsT0FKVDtBQUtJLGtCQUFRLEVBQUVDO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVdJO0FBQU8sZUFBTyxFQUFDLE1BQWY7QUFBQSw0Q0FFSTtBQUNJLGNBQUksRUFBQyxNQURUO0FBRUksWUFBRSxFQUFDLE1BRlA7QUFHSSxjQUFJLEVBQUMsTUFIVDtBQUlJLHFCQUFXLEVBQUMsTUFKaEI7QUFLSSxlQUFLLEVBQUVELE1BQU0sQ0FBQ0gsSUFMbEI7QUFNSSxrQkFBUSxFQUFFSTtBQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEosZUFzQkk7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLDZDQUVJO0FBQ0ksY0FBSSxFQUFDLFFBRFQ7QUFFSSxZQUFFLEVBQUMsT0FGUDtBQUdJLGNBQUksRUFBQyxPQUhUO0FBSUkscUJBQVcsRUFBQyxPQUpoQjtBQUtJLGVBQUssRUFBRUQsTUFBTSxDQUFDRixLQUxsQjtBQU1JLGtCQUFRLEVBQUVHO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkosZUFpQ0k7QUFBTyxlQUFPLEVBQUMsYUFBZjtBQUFBLGdEQUVJO0FBQ0ksWUFBRSxFQUFDLGFBRFA7QUFFSSxjQUFJLEVBQUMsYUFGVDtBQUdJLHFCQUFXLEVBQUMsYUFIaEI7QUFJSSxlQUFLLEVBQUVELE1BQU0sQ0FBQ0QsV0FKbEI7QUFLSSxrQkFBUSxFQUFFRTtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakNKLGVBMkNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0NKLGVBOENJO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0VIOztHQTdFdUJQLGE7VUFDaUNDLG9ELEVBTUxTLDBEOzs7S0FQNUJWLGE7QUE2RXZCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vbGliL3VzZUZvcm1cIjtcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuXG5jb25zdCBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcbiAgICBtdXRhdGlvbiBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTihcbiAgICAgICAgIyB3aGljaCB2YXJpYWJsZXMgKGFuZCB0aGVpciB0eXBlcykgYXJlIHBhc3NlZCBpbj9cbiAgICAgICAgJG5hbWU6IFN0cmluZyFcbiAgICAgICAgJGRlc2NyaXB0aW9uOiBTdHJpbmchXG4gICAgICAgICRwcmljZTogSW50IVxuICAgICAgICAkaW1hZ2U6IFVwbG9hZFxuICAgICkge1xuICAgICAgICBjcmVhdGVQcm9kdWN0IChkYXRhOntcbiAgICAgICAgICAgIG5hbWU6ICRuYW1lXG4gICAgICAgICAgICBwcmljZTogJHByaWNlXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBzdGF0dXM6IFwiYXZhaWxhYmxlXCJcbiAgICAgICAgICAgIHBob3RvOiB7XG4gICAgICAgICAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiAkaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgYWx0dGV4dDogJG5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pe1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgcGhvdG9cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVByb2R1Y3QoKSB7XG4gICAgY29uc3Qge2lucHV0cywgaGFuZGxlQ2hhbmdlLCBjbGVhckZvcm0sIHJlc2V0Rm9ybX0gPSB1c2VGb3JtKHtcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgcHJpY2U6ICcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgfSk7XG4gICAgY29uc3QgW2NyZWF0ZVByb2R1Y3QsIHtsb2FkaW5nLCBlcnJvciwgZGF0YX1dID0gdXNlTXV0YXRpb24oQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04sIHtcbiAgICAgICAgdmFyaWFibGVzOiBpbnB1dHMsXG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9eyBhc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coe2lucHV0c30pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfX0+XG4gICAgICAgICAgICA8ZmllbGRzZXQgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgTmFtZSBJdCFcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgIFByaWNlIEl0IVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgRGVzY3JpYmUgSXQhXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPiBcbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIEJvcCBJdCFcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPisgQWRkIFByb2R1Y3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG5cbiAgICAgICAgICAgIHsvKiAvL0VYQU1QTEUgbWV0aG9kcyAqL31cbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17Y2xlYXJGb3JtfT5cbiAgICAgICAgICAgICAgICBDbGVhciBGb3JtXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtyZXNldEZvcm19PlxuICAgICAgICAgICAgICAgIFJlc2V0IEZvcm1cbiAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgIFxuICAgICAgICA8L0Zvcm0+XG4gICAgKVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CreateProduct.js\n");

/***/ })

})