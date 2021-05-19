webpackHotUpdate_N_E("pages/reset",{

/***/ "./components/Reset.js":
/*!*****************************!*\
  !*** ./components/Reset.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResetPassword; });\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SignIn */ \"./components/SignIn.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/Reset.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n    mutation RESET_MUTATION(\\n            $email: String!, \\n            $token: String!, \\n            $password: String!\\n    ){\\n        redeemUserPasswordResetToken(\\n            email: $email,\\n            password: $password,\\n            token: $token\\n        ){\\n            code\\n            message\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n //TODO, upon resetting password, sign user in.\n//if \n\nvar RESET_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());\nfunction ResetPassword(_ref) {\n  _s();\n\n  var _data$redeemUserPassw;\n\n  var token = _ref.token;\n\n  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    email: '',\n    password: '',\n    token: token\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      clearForm = _useForm.clearForm,\n      resetForm = _useForm.resetForm;\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useMutation\"])(RESET_MUTATION, {\n    variables: inputs\n  }),\n      _useMutation2 = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation, 2),\n      resetPassword = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      data = _useMutation2$.data,\n      loading = _useMutation2$.loading,\n      error = _useMutation2$.error; //if rreturned data includes a code, that IS the error, else no error\n\n\n  var successfulError = (data === null || data === void 0 ? void 0 : (_data$redeemUserPassw = data.redeemUserPasswordResetToken) === null || _data$redeemUserPassw === void 0 ? void 0 : _data$redeemUserPassw.code) ? data.redeemUserPasswordResetToken : undefined; // console.log({error});\n\n  function handleSubmit(_x) {\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  function _handleSubmit() {\n    _handleSubmit = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var res;\n      return _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault(); //stop form from submitting early\n              //send email and password to graphQL API\n              // await signin();\n              //const res for logging only\n              //catch prevents popup dialog in favor of console\n\n              _context.next = 3;\n              return resetPassword()[\"catch\"](console.error);\n\n            case 3:\n              res = _context.sent;\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  ;\n  return (\n    /*#__PURE__*/\n    //method POST to prevent password from showing in URL, history, and logs\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      method: \"post\",\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h2\", {\n        children: \"Choose New Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        error: error || successfulError\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"fieldset\", {\n        disabled: loading,\n        \"aria-busy\": loading,\n        children: [(data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken) === null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", {\n          children: \"Password Successfully Reset, Please Sign In.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 25\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"email\",\n          children: [\"Email\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"email\",\n            id: \"email\",\n            name: \"email\",\n            placeholder: \"What Email Address Are You Using?\",\n            autoComplete: \"email\",\n            value: inputs.email,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"password\",\n          children: [\"New Password\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"password\",\n            id: \"password\",\n            name: \"password\",\n            placeholder: \"Please Enter a New Password\",\n            autoComplete: \"password\",\n            value: inputs.password,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }, this)\n  );\n}\n\n_s(ResetPassword, \"3EmtMz30wk1ESxvKeAL3iMegZf8=\", false, function () {\n  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useMutation\"]];\n});\n\n_c = ResetPassword;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"ResetPassword\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXNldC5qcz9hMDgwIl0sIm5hbWVzIjpbIlJFU0VUX01VVEFUSU9OIiwiZ3FsIiwiUmVzZXRQYXNzd29yZCIsInRva2VuIiwidXNlRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsInJlc2V0UGFzc3dvcmQiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwic3VjY2Vzc2Z1bEVycm9yIiwicmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbiIsImNvZGUiLCJ1bmRlZmluZWQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFHQSxJQUFNQSxjQUFjLEdBQUdDLGtEQUFILG1CQUFwQjtBQWlCZSxTQUFTQyxhQUFULE9BQWtDO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGlCQUVVQyw0REFBTyxDQUFDO0FBQzNEQyxTQUFLLEVBQUUsRUFEb0Q7QUFFM0RDLFlBQVEsRUFBRSxFQUZpRDtBQUczREgsU0FBSyxFQUFMQTtBQUgyRCxHQUFELENBRmpCO0FBQUEsTUFFckNJLE1BRnFDLFlBRXJDQSxNQUZxQztBQUFBLE1BRTdCQyxZQUY2QixZQUU3QkEsWUFGNkI7QUFBQSxNQUVmQyxTQUZlLFlBRWZBLFNBRmU7QUFBQSxNQUVKQyxTQUZJLFlBRUpBLFNBRkk7O0FBQUEscUJBT0tDLGtFQUFXLENBQUNYLGNBQUQsRUFBaUI7QUFDMUVZLGFBQVMsRUFBRUw7QUFEK0QsR0FBakIsQ0FQaEI7QUFBQTtBQUFBLE1BT3RDTSxhQVBzQztBQUFBO0FBQUEsTUFPckJDLElBUHFCLGtCQU9yQkEsSUFQcUI7QUFBQSxNQU9mQyxPQVBlLGtCQU9mQSxPQVBlO0FBQUEsTUFPTkMsS0FQTSxrQkFPTkEsS0FQTSxFQVk3Qzs7O0FBQ0EsTUFBTUMsZUFBZSxHQUFHLENBQUFILElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUoscUNBQUFBLElBQUksQ0FBRUksNEJBQU4sZ0ZBQW9DQyxJQUFwQyxJQUN0QkwsSUFBSSxDQUFDSSw0QkFEaUIsR0FFdEJFLFNBRkYsQ0FiNkMsQ0FnQjdDOztBQWhCNkMsV0FtQjlCQyxZQW5COEI7QUFBQTtBQUFBOztBQUFBO0FBQUEscWFBbUI3QyxpQkFBNEJDLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJQSxlQUFDLENBQUNDLGNBQUYsR0FESixDQUN3QjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFMSjtBQUFBLHFCQU1zQlYsYUFBYSxXQUFiLENBQXNCVyxPQUFPLENBQUNSLEtBQTlCLENBTnRCOztBQUFBO0FBTVVTLGlCQU5WOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbkI2QztBQUFBO0FBQUE7O0FBOEI1QztBQUVEO0FBQUE7QUFDSTtBQUNBLHlFQUFDLG9EQUFEO0FBQU0sWUFBTSxFQUFDLE1BQWI7QUFBb0IsY0FBUSxFQUFFSixZQUE5QjtBQUFBLDhCQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSSxxRUFBQyxxREFBRDtBQUFjLGFBQUssRUFBRUwsS0FBSyxJQUFJQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFLSTtBQUFVLGdCQUFRLEVBQUVGLE9BQXBCO0FBQTZCLHFCQUFXQSxPQUF4QztBQUFBLG1CQUVRLENBQUFELElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFSSw0QkFBTixNQUF1QyxJQUF2QyxpQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIWixlQVFJO0FBQU8saUJBQU8sRUFBQyxPQUFmO0FBQUEsMkNBRUk7QUFDSSxvQkFBUSxNQURaO0FBRUksZ0JBQUksRUFBQyxPQUZUO0FBR0ksY0FBRSxFQUFDLE9BSFA7QUFJSSxnQkFBSSxFQUFDLE9BSlQ7QUFLSSx1QkFBVyxFQUFDLG1DQUxoQjtBQU1JLHdCQUFZLEVBQUMsT0FOakI7QUFPSSxpQkFBSyxFQUFFWCxNQUFNLENBQUNGLEtBUGxCO0FBUUksb0JBQVEsRUFBRUc7QUFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSixlQXFCSTtBQUFPLGlCQUFPLEVBQUMsVUFBZjtBQUFBLGtEQUVJO0FBQ0ksb0JBQVEsTUFEWjtBQUVJLGdCQUFJLEVBQUMsVUFGVDtBQUdJLGNBQUUsRUFBQyxVQUhQO0FBSUksZ0JBQUksRUFBQyxVQUpUO0FBS0ksdUJBQVcsRUFBQyw2QkFMaEI7QUFNSSx3QkFBWSxFQUFDLFVBTmpCO0FBT0ksaUJBQUssRUFBRUQsTUFBTSxDQUFDRCxRQVBsQjtBQVFJLG9CQUFRLEVBQUVFO0FBUmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJKLGVBa0NJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBdURIOztHQXZGdUJOLGE7VUFFbUNFLG9ELEVBS0xPLDBEOzs7S0FQOUJULGE7QUF1RnZCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXNldC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xuaW1wb3J0IHsgU0lHTl9JTl9NVVRBVElPTiB9IGZyb20gJy4vU2lnbkluJztcblxuLy9UT0RPLCB1cG9uIHJlc2V0dGluZyBwYXNzd29yZCwgc2lnbiB1c2VyIGluLlxuLy9pZiBcblxuXG5jb25zdCBSRVNFVF9NVVRBVElPTiA9IGdxbGBcbiAgICBtdXRhdGlvbiBSRVNFVF9NVVRBVElPTihcbiAgICAgICAgICAgICRlbWFpbDogU3RyaW5nISwgXG4gICAgICAgICAgICAkdG9rZW46IFN0cmluZyEsIFxuICAgICAgICAgICAgJHBhc3N3b3JkOiBTdHJpbmchXG4gICAgKXtcbiAgICAgICAgcmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbihcbiAgICAgICAgICAgIGVtYWlsOiAkZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogJHBhc3N3b3JkLFxuICAgICAgICAgICAgdG9rZW46ICR0b2tlblxuICAgICAgICApe1xuICAgICAgICAgICAgY29kZVxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZXRQYXNzd29yZCh7IHRva2VuIH0pIHtcblxuICAgIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIHRva2VuLFxuICAgIH0pO1xuICAgIGNvbnN0IFtyZXNldFBhc3N3b3JkLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oUkVTRVRfTVVUQVRJT04sIHtcbiAgICAgICAgdmFyaWFibGVzOiBpbnB1dHMsXG4gXG4gICAgfSk7XG5cbiAgICAvL2lmIHJyZXR1cm5lZCBkYXRhIGluY2x1ZGVzIGEgY29kZSwgdGhhdCBJUyB0aGUgZXJyb3IsIGVsc2Ugbm8gZXJyb3JcbiAgICBjb25zdCBzdWNjZXNzZnVsRXJyb3IgPSBkYXRhPy5yZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuPy5jb2RlIFxuICAgID8gZGF0YS5yZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuIFxuICAgIDogdW5kZWZpbmVkO1xuICAgIC8vIGNvbnNvbGUubG9nKHtlcnJvcn0pO1xuICAgIFxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3N0b3AgZm9ybSBmcm9tIHN1Ym1pdHRpbmcgZWFybHlcbiAgICAgICAgLy9zZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBncmFwaFFMIEFQSVxuICAgICAgICAvLyBhd2FpdCBzaWduaW4oKTtcbiAgICAgICAgLy9jb25zdCByZXMgZm9yIGxvZ2dpbmcgb25seVxuICAgICAgICAvL2NhdGNoIHByZXZlbnRzIHBvcHVwIGRpYWxvZyBpbiBmYXZvciBvZiBjb25zb2xlXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc2V0UGFzc3dvcmQoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coeyByZXMgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSlcblxuICAgICAgICAvLyByZXNldEZvcm0oKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy9tZXRob2QgUE9TVCB0byBwcmV2ZW50IHBhc3N3b3JkIGZyb20gc2hvd2luZyBpbiBVUkwsIGhpc3RvcnksIGFuZCBsb2dzXG4gICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIHsvKiA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz4gKi99XG4gICAgICAgICAgICA8aDI+Q2hvb3NlIE5ldyBQYXNzd29yZDwvaDI+XG4gICAgICAgICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvciB8fCBzdWNjZXNzZnVsRXJyb3J9IC8+XG5cbiAgICAgICAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17bG9hZGluZ30gYXJpYS1idXN5PXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE/LnJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW4gPT09IG51bGwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGFzc3dvcmQgU3VjY2Vzc2Z1bGx5IFJlc2V0LCBQbGVhc2UgU2lnbiBJbi48L3A+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey8qIDxmaWVsZHNldD4gKi99XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgRW1haWwgQWRkcmVzcyBBcmUgWW91IFVzaW5nP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgTmV3IFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBFbnRlciBhIE5ldyBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9maWVsZHNldD5cblxuICAgICAgICAgICAgey8qIC8vRVhBTVBMRSBtZXRob2RzICovfVxuICAgICAgICAgICAgey8qIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtjbGVhckZvcm19PlxuICAgICAgICAgICAgICAgIENsZWFyIEZvcm1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e3Jlc2V0Rm9ybX0+XG4gICAgICAgICAgICAgICAgUmVzZXQgRm9ybVxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxuXG4gICAgICAgIDwvRm9ybT5cbiAgICApXG5cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Reset.js\n");

/***/ })

})