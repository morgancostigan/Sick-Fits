webpackHotUpdate_N_E("pages/reset",{

/***/ "./components/Reset.js":
/*!*****************************!*\
  !*** ./components/Reset.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResetPassword; });\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/Reset.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n    mutation RESET_MUTATION(\\n            $email: String!, \\n            $token: String!, \\n            $password: String!\\n    ){\\n        redeemUserPasswordResetToken(\\n            email: $email,\\n            password: $password,\\n            token: $token\\n        ){\\n            code\\n            message\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar RESET_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());\nfunction ResetPassword() {\n  _s();\n\n  var _data$redeemUserPassw;\n\n  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    email: '',\n    password: '',\n    token: ''\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      clearForm = _useForm.clearForm,\n      resetForm = _useForm.resetForm;\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useMutation\"])(RESET_MUTATION, {\n    variables: inputs\n  }),\n      _useMutation2 = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation, 2),\n      resetPassword = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      data = _useMutation2$.data,\n      loading = _useMutation2$.loading; //if rreturned data includes a code, that IS the error, else no error\n\n\n  var error = (data === null || data === void 0 ? void 0 : (_data$redeemUserPassw = data.redeemUserPasswordResetToken) === null || _data$redeemUserPassw === void 0 ? void 0 : _data$redeemUserPassw.code) ? data.redeemUserPasswordResetToken : undefined;\n\n  function handleSubmit(_x) {\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  function _handleSubmit() {\n    _handleSubmit = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var res;\n      return _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault(); //stop form from submitting early\n              //send email and password to graphQL API\n              // await signin();\n              //const res for logging only\n              //catch prevents popup dialog in favor of console\n\n              _context.next = 3;\n              return resetPassword()[\"catch\"](console.error);\n\n            case 3:\n              res = _context.sent;\n              console.log({\n                res: res\n              });\n              console.log({\n                data: data,\n                error: error,\n                loading: loading\n              }); // resetForm();\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  ;\n  return (\n    /*#__PURE__*/\n    //method POST to prevent password from showing in URL, history, and logs\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      method: \"post\",\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h2\", {\n        children: \"Choose New Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        error: error\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"fieldset\", {\n        disabled: loading,\n        \"aria-busy\": loading,\n        children: [(data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken) === null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", {\n          children: \"Password Successfully Reset, Please Sign In.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 25\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"email\",\n          children: [\"Email\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"email\",\n            id: \"email\",\n            name: \"email\",\n            placeholder: \"What Email Address Are You Using?\",\n            autoComplete: \"email\",\n            value: inputs.email,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"password\",\n          children: [\"New Password\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"password\",\n            id: \"password\",\n            name: \"password\",\n            placeholder: \"Please Enter a New Password\",\n            autoComplete: \"password\",\n            value: inputs.password,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }, this)\n  );\n}\n\n_s(ResetPassword, \"yDXBWji9Rj5jkw6Z7sHWu7OVVvA=\", false, function () {\n  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useMutation\"]];\n});\n\n_c = ResetPassword;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"ResetPassword\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXNldC5qcz9hMDgwIl0sIm5hbWVzIjpbIlJFU0VUX01VVEFUSU9OIiwiZ3FsIiwiUmVzZXRQYXNzd29yZCIsInVzZUZvcm0iLCJlbWFpbCIsInBhc3N3b3JkIiwidG9rZW4iLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsInJlc2V0UGFzc3dvcmQiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwicmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbiIsImNvZGUiLCJ1bmRlZmluZWQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwicmVzIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLGtEQUFILG1CQUFwQjtBQWlCZSxTQUFTQyxhQUFULEdBQXlCO0FBQUE7O0FBQUE7O0FBQUEsaUJBRW1CQyw0REFBTyxDQUFDO0FBQzNEQyxTQUFLLEVBQUUsRUFEb0Q7QUFFM0RDLFlBQVEsRUFBRSxFQUZpRDtBQUczREMsU0FBSyxFQUFFO0FBSG9ELEdBQUQsQ0FGMUI7QUFBQSxNQUU1QkMsTUFGNEIsWUFFNUJBLE1BRjRCO0FBQUEsTUFFcEJDLFlBRm9CLFlBRXBCQSxZQUZvQjtBQUFBLE1BRU5DLFNBRk0sWUFFTkEsU0FGTTtBQUFBLE1BRUtDLFNBRkwsWUFFS0EsU0FGTDs7QUFBQSxxQkFPT0Msa0VBQVcsQ0FBQ1gsY0FBRCxFQUFpQjtBQUNuRVksYUFBUyxFQUFFTDtBQUR3RCxHQUFqQixDQVBsQjtBQUFBO0FBQUEsTUFPN0JNLGFBUDZCO0FBQUE7QUFBQSxNQU9aQyxJQVBZLGtCQU9aQSxJQVBZO0FBQUEsTUFPTkMsT0FQTSxrQkFPTkEsT0FQTSxFQVdwQzs7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHLENBQUFGLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUoscUNBQUFBLElBQUksQ0FBRUcsNEJBQU4sZ0ZBQW9DQyxJQUFwQyxJQUNaSixJQUFJLENBQUNHLDRCQURPLEdBRVpFLFNBRkY7O0FBWm9DLFdBZ0JyQkMsWUFoQnFCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFhQWdCcEMsaUJBQTRCQyxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSUEsZUFBQyxDQUFDQyxjQUFGLEdBREosQ0FDd0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBTEo7QUFBQSxxQkFNc0JULGFBQWEsV0FBYixDQUFzQlUsT0FBTyxDQUFDUCxLQUE5QixDQU50Qjs7QUFBQTtBQU1VUSxpQkFOVjtBQU9JRCxxQkFBTyxDQUFDRSxHQUFSLENBQVk7QUFBRUQsbUJBQUcsRUFBSEE7QUFBRixlQUFaO0FBQ0FELHFCQUFPLENBQUNFLEdBQVIsQ0FBWTtBQUFFWCxvQkFBSSxFQUFKQSxJQUFGO0FBQVFFLHFCQUFLLEVBQUxBLEtBQVI7QUFBZUQsdUJBQU8sRUFBUEE7QUFBZixlQUFaLEVBUkosQ0FVSTs7QUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWhCb0M7QUFBQTtBQUFBOztBQTJCbkM7QUFFRDtBQUFBO0FBQ0k7QUFDQSx5RUFBQyxvREFBRDtBQUFNLFlBQU0sRUFBQyxNQUFiO0FBQW9CLGNBQVEsRUFBRUssWUFBOUI7QUFBQSw4QkFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0kscUVBQUMscURBQUQ7QUFBYyxhQUFLLEVBQUVKO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUtJO0FBQVUsZ0JBQVEsRUFBRUQsT0FBcEI7QUFBNkIscUJBQVdBLE9BQXhDO0FBQUEsbUJBRVEsQ0FBQUQsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVHLDRCQUFOLE1BQXVDLElBQXZDLGlCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhaLGVBUUk7QUFBTyxpQkFBTyxFQUFDLE9BQWY7QUFBQSwyQ0FFSTtBQUNJLG9CQUFRLE1BRFo7QUFFSSxnQkFBSSxFQUFDLE9BRlQ7QUFHSSxjQUFFLEVBQUMsT0FIUDtBQUlJLGdCQUFJLEVBQUMsT0FKVDtBQUtJLHVCQUFXLEVBQUMsbUNBTGhCO0FBTUksd0JBQVksRUFBQyxPQU5qQjtBQU9JLGlCQUFLLEVBQUVWLE1BQU0sQ0FBQ0gsS0FQbEI7QUFRSSxvQkFBUSxFQUFFSTtBQVJkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJKLGVBcUJJO0FBQU8saUJBQU8sRUFBQyxVQUFmO0FBQUEsa0RBRUk7QUFDSSxvQkFBUSxNQURaO0FBRUksZ0JBQUksRUFBQyxVQUZUO0FBR0ksY0FBRSxFQUFDLFVBSFA7QUFJSSxnQkFBSSxFQUFDLFVBSlQ7QUFLSSx1QkFBVyxFQUFDLDZCQUxoQjtBQU1JLHdCQUFZLEVBQUMsVUFOakI7QUFPSSxpQkFBSyxFQUFFRCxNQUFNLENBQUNGLFFBUGxCO0FBUUksb0JBQVEsRUFBRUc7QUFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQkosZUFrQ0k7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUF1REg7O0dBcEZ1Qk4sYTtVQUVtQ0Msb0QsRUFLWlEsMEQ7OztLQVB2QlQsYTtBQW9GdkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jlc2V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vbGliL3VzZUZvcm1cIjtcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gJy4vVXNlcic7XG5cbmNvbnN0IFJFU0VUX01VVEFUSU9OID0gZ3FsYFxuICAgIG11dGF0aW9uIFJFU0VUX01VVEFUSU9OKFxuICAgICAgICAgICAgJGVtYWlsOiBTdHJpbmchLCBcbiAgICAgICAgICAgICR0b2tlbjogU3RyaW5nISwgXG4gICAgICAgICAgICAkcGFzc3dvcmQ6IFN0cmluZyFcbiAgICApe1xuICAgICAgICByZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuKFxuICAgICAgICAgICAgZW1haWw6ICRlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmQsXG4gICAgICAgICAgICB0b2tlbjogJHRva2VuXG4gICAgICAgICl7XG4gICAgICAgICAgICBjb2RlXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNldFBhc3N3b3JkKCkge1xuXG4gICAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgY2xlYXJGb3JtLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgdG9rZW46ICcnLFxuICAgIH0pO1xuICAgIGNvbnN0IFtyZXNldFBhc3N3b3JkLCB7IGRhdGEsIGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihSRVNFVF9NVVRBVElPTiwge1xuICAgICAgICB2YXJpYWJsZXM6IGlucHV0cyxcbiAgICB9KTtcblxuICAgIC8vaWYgcnJldHVybmVkIGRhdGEgaW5jbHVkZXMgYSBjb2RlLCB0aGF0IElTIHRoZSBlcnJvciwgZWxzZSBubyBlcnJvclxuICAgIGNvbnN0IGVycm9yID0gZGF0YT8ucmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbj8uY29kZSBcbiAgICA/IGRhdGEucmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbiBcbiAgICA6IHVuZGVmaW5lZDtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9zdG9wIGZvcm0gZnJvbSBzdWJtaXR0aW5nIGVhcmx5XG4gICAgICAgIC8vc2VuZCBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gZ3JhcGhRTCBBUElcbiAgICAgICAgLy8gYXdhaXQgc2lnbmluKCk7XG4gICAgICAgIC8vY29uc3QgcmVzIGZvciBsb2dnaW5nIG9ubHlcbiAgICAgICAgLy9jYXRjaCBwcmV2ZW50cyBwb3B1cCBkaWFsb2cgaW4gZmF2b3Igb2YgY29uc29sZVxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXNldFBhc3N3b3JkKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHsgcmVzIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0pXG5cbiAgICAgICAgLy8gcmVzZXRGb3JtKCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIC8vbWV0aG9kIFBPU1QgdG8gcHJldmVudCBwYXNzd29yZCBmcm9tIHNob3dpbmcgaW4gVVJMLCBoaXN0b3J5LCBhbmQgbG9nc1xuICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICB7LyogPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+ICovfVxuICAgICAgICAgICAgPGgyPkNob29zZSBOZXcgUGFzc3dvcmQ8L2gyPlxuICAgICAgICAgICAgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+XG5cbiAgICAgICAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17bG9hZGluZ30gYXJpYS1idXN5PXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE/LnJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW4gPT09IG51bGwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGFzc3dvcmQgU3VjY2Vzc2Z1bGx5IFJlc2V0LCBQbGVhc2UgU2lnbiBJbi48L3A+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey8qIDxmaWVsZHNldD4gKi99XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgRW1haWwgQWRkcmVzcyBBcmUgWW91IFVzaW5nP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgTmV3IFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBFbnRlciBhIE5ldyBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9maWVsZHNldD5cblxuICAgICAgICAgICAgey8qIC8vRVhBTVBMRSBtZXRob2RzICovfVxuICAgICAgICAgICAgey8qIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtjbGVhckZvcm19PlxuICAgICAgICAgICAgICAgIENsZWFyIEZvcm1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e3Jlc2V0Rm9ybX0+XG4gICAgICAgICAgICAgICAgUmVzZXQgRm9ybVxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxuXG4gICAgICAgIDwvRm9ybT5cbiAgICApXG5cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Reset.js\n");

/***/ })

})