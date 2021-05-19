webpackHotUpdate_N_E("pages/reset",{

/***/ "./components/Reset.js":
/*!*****************************!*\
  !*** ./components/Reset.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResetPassword; });\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SignIn */ \"./components/SignIn.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/Reset.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n    mutation RESET_MUTATION(\\n            $email: String!, \\n            $token: String!, \\n            $password: String!\\n    ){\\n        redeemUserPasswordResetToken(\\n            email: $email,\\n            password: $password,\\n            token: $token\\n        ){\\n            code\\n            message\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n //TODO, upon resetting password, sign user in.\n//if too tricky, send to Sign In page\n\nvar RESET_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());\nfunction ResetPassword(_ref) {\n  _s();\n\n  var _data$redeemUserPassw;\n\n  var token = _ref.token;\n\n  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    email: '',\n    password: '',\n    token: token\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      clearForm = _useForm.clearForm,\n      resetForm = _useForm.resetForm;\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useMutation\"])(RESET_MUTATION, {\n    variables: inputs\n  }),\n      _useMutation2 = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation, 2),\n      resetPassword = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      data = _useMutation2$.data,\n      loading = _useMutation2$.loading,\n      error = _useMutation2$.error; //if rreturned data includes a code, that IS the error, else no error\n\n\n  var successfulError = (data === null || data === void 0 ? void 0 : (_data$redeemUserPassw = data.redeemUserPasswordResetToken) === null || _data$redeemUserPassw === void 0 ? void 0 : _data$redeemUserPassw.code) ? data.redeemUserPasswordResetToken : undefined; // console.log({error});\n\n  function handleSubmit(_x) {\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  function _handleSubmit() {\n    _handleSubmit = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var res;\n      return _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault(); //stop form from submitting early\n              //send email and password to graphQL API\n              // await signin();\n              //const res for logging only\n              //catch prevents popup dialog in favor of console\n\n              _context.next = 3;\n              return resetPassword()[\"catch\"](console.error);\n\n            case 3:\n              res = _context.sent;\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  ;\n  return (\n    /*#__PURE__*/\n    //method POST to prevent password from showing in URL, history, and logs\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      method: \"post\",\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h2\", {\n        children: \"Choose New Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        error: error || successfulError\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"fieldset\", {\n        disabled: loading,\n        \"aria-busy\": loading,\n        children: [(data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken) === null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", {\n          children: \"Password Successfully Reset, Please Sign In.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 25\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"email\",\n          children: [\"Email\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"email\",\n            id: \"email\",\n            name: \"email\",\n            placeholder: \"What Email Address Are You Using?\",\n            autoComplete: \"email\",\n            value: inputs.email,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"password\",\n          children: [\"New Password\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"password\",\n            id: \"password\",\n            name: \"password\",\n            placeholder: \"Please Enter a New Password\",\n            autoComplete: \"password\",\n            value: inputs.password,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }, this)\n  );\n}\n\n_s(ResetPassword, \"3EmtMz30wk1ESxvKeAL3iMegZf8=\", false, function () {\n  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useMutation\"]];\n});\n\n_c = ResetPassword;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"ResetPassword\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXNldC5qcz9hMDgwIl0sIm5hbWVzIjpbIlJFU0VUX01VVEFUSU9OIiwiZ3FsIiwiUmVzZXRQYXNzd29yZCIsInRva2VuIiwidXNlRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsInJlc2V0UGFzc3dvcmQiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwic3VjY2Vzc2Z1bEVycm9yIiwicmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbiIsImNvZGUiLCJ1bmRlZmluZWQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFHQSxJQUFNQSxjQUFjLEdBQUdDLGtEQUFILG1CQUFwQjtBQWlCZSxTQUFTQyxhQUFULE9BQWtDO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGlCQUVVQyw0REFBTyxDQUFDO0FBQzNEQyxTQUFLLEVBQUUsRUFEb0Q7QUFFM0RDLFlBQVEsRUFBRSxFQUZpRDtBQUczREgsU0FBSyxFQUFMQTtBQUgyRCxHQUFELENBRmpCO0FBQUEsTUFFckNJLE1BRnFDLFlBRXJDQSxNQUZxQztBQUFBLE1BRTdCQyxZQUY2QixZQUU3QkEsWUFGNkI7QUFBQSxNQUVmQyxTQUZlLFlBRWZBLFNBRmU7QUFBQSxNQUVKQyxTQUZJLFlBRUpBLFNBRkk7O0FBQUEscUJBT0tDLGtFQUFXLENBQUNYLGNBQUQsRUFBaUI7QUFDMUVZLGFBQVMsRUFBRUw7QUFEK0QsR0FBakIsQ0FQaEI7QUFBQTtBQUFBLE1BT3RDTSxhQVBzQztBQUFBO0FBQUEsTUFPckJDLElBUHFCLGtCQU9yQkEsSUFQcUI7QUFBQSxNQU9mQyxPQVBlLGtCQU9mQSxPQVBlO0FBQUEsTUFPTkMsS0FQTSxrQkFPTkEsS0FQTSxFQVk3Qzs7O0FBQ0EsTUFBTUMsZUFBZSxHQUFHLENBQUFILElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUoscUNBQUFBLElBQUksQ0FBRUksNEJBQU4sZ0ZBQW9DQyxJQUFwQyxJQUN0QkwsSUFBSSxDQUFDSSw0QkFEaUIsR0FFdEJFLFNBRkYsQ0FiNkMsQ0FnQjdDOztBQWhCNkMsV0FtQjlCQyxZQW5COEI7QUFBQTtBQUFBOztBQUFBO0FBQUEscWFBbUI3QyxpQkFBNEJDLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJQSxlQUFDLENBQUNDLGNBQUYsR0FESixDQUN3QjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFMSjtBQUFBLHFCQU1zQlYsYUFBYSxXQUFiLENBQXNCVyxPQUFPLENBQUNSLEtBQTlCLENBTnRCOztBQUFBO0FBTVVTLGlCQU5WOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbkI2QztBQUFBO0FBQUE7O0FBOEI1QztBQUVEO0FBQUE7QUFDSTtBQUNBLHlFQUFDLG9EQUFEO0FBQU0sWUFBTSxFQUFDLE1BQWI7QUFBb0IsY0FBUSxFQUFFSixZQUE5QjtBQUFBLDhCQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSSxxRUFBQyxxREFBRDtBQUFjLGFBQUssRUFBRUwsS0FBSyxJQUFJQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFLSTtBQUFVLGdCQUFRLEVBQUVGLE9BQXBCO0FBQTZCLHFCQUFXQSxPQUF4QztBQUFBLG1CQUVRLENBQUFELElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFSSw0QkFBTixNQUF1QyxJQUF2QyxpQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIWixlQVFJO0FBQU8saUJBQU8sRUFBQyxPQUFmO0FBQUEsMkNBRUk7QUFDSSxvQkFBUSxNQURaO0FBRUksZ0JBQUksRUFBQyxPQUZUO0FBR0ksY0FBRSxFQUFDLE9BSFA7QUFJSSxnQkFBSSxFQUFDLE9BSlQ7QUFLSSx1QkFBVyxFQUFDLG1DQUxoQjtBQU1JLHdCQUFZLEVBQUMsT0FOakI7QUFPSSxpQkFBSyxFQUFFWCxNQUFNLENBQUNGLEtBUGxCO0FBUUksb0JBQVEsRUFBRUc7QUFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSixlQXFCSTtBQUFPLGlCQUFPLEVBQUMsVUFBZjtBQUFBLGtEQUVJO0FBQ0ksb0JBQVEsTUFEWjtBQUVJLGdCQUFJLEVBQUMsVUFGVDtBQUdJLGNBQUUsRUFBQyxVQUhQO0FBSUksZ0JBQUksRUFBQyxVQUpUO0FBS0ksdUJBQVcsRUFBQyw2QkFMaEI7QUFNSSx3QkFBWSxFQUFDLFVBTmpCO0FBT0ksaUJBQUssRUFBRUQsTUFBTSxDQUFDRCxRQVBsQjtBQVFJLG9CQUFRLEVBQUVFO0FBUmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJKLGVBa0NJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBdURIOztHQXZGdUJOLGE7VUFFbUNFLG9ELEVBS0xPLDBEOzs7S0FQOUJULGE7QUF1RnZCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXNldC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xuaW1wb3J0IHsgU0lHTl9JTl9NVVRBVElPTiB9IGZyb20gJy4vU2lnbkluJztcblxuLy9UT0RPLCB1cG9uIHJlc2V0dGluZyBwYXNzd29yZCwgc2lnbiB1c2VyIGluLlxuLy9pZiB0b28gdHJpY2t5LCBzZW5kIHRvIFNpZ24gSW4gcGFnZVxuXG5cbmNvbnN0IFJFU0VUX01VVEFUSU9OID0gZ3FsYFxuICAgIG11dGF0aW9uIFJFU0VUX01VVEFUSU9OKFxuICAgICAgICAgICAgJGVtYWlsOiBTdHJpbmchLCBcbiAgICAgICAgICAgICR0b2tlbjogU3RyaW5nISwgXG4gICAgICAgICAgICAkcGFzc3dvcmQ6IFN0cmluZyFcbiAgICApe1xuICAgICAgICByZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuKFxuICAgICAgICAgICAgZW1haWw6ICRlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmQsXG4gICAgICAgICAgICB0b2tlbjogJHRva2VuXG4gICAgICAgICl7XG4gICAgICAgICAgICBjb2RlXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNldFBhc3N3b3JkKHsgdG9rZW4gfSkge1xuXG4gICAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgY2xlYXJGb3JtLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgdG9rZW4sXG4gICAgfSk7XG4gICAgY29uc3QgW3Jlc2V0UGFzc3dvcmQsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihSRVNFVF9NVVRBVElPTiwge1xuICAgICAgICB2YXJpYWJsZXM6IGlucHV0cyxcbiBcbiAgICB9KTtcblxuICAgIC8vaWYgcnJldHVybmVkIGRhdGEgaW5jbHVkZXMgYSBjb2RlLCB0aGF0IElTIHRoZSBlcnJvciwgZWxzZSBubyBlcnJvclxuICAgIGNvbnN0IHN1Y2Nlc3NmdWxFcnJvciA9IGRhdGE/LnJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW4/LmNvZGUgXG4gICAgPyBkYXRhLnJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW4gXG4gICAgOiB1bmRlZmluZWQ7XG4gICAgLy8gY29uc29sZS5sb2coe2Vycm9yfSk7XG4gICAgXG5cbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vc3RvcCBmb3JtIGZyb20gc3VibWl0dGluZyBlYXJseVxuICAgICAgICAvL3NlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIGdyYXBoUUwgQVBJXG4gICAgICAgIC8vIGF3YWl0IHNpZ25pbigpO1xuICAgICAgICAvL2NvbnN0IHJlcyBmb3IgbG9nZ2luZyBvbmx5XG4gICAgICAgIC8vY2F0Y2ggcHJldmVudHMgcG9wdXAgZGlhbG9nIGluIGZhdm9yIG9mIGNvbnNvbGVcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVzZXRQYXNzd29yZCgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh7IHJlcyB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9KVxuXG4gICAgICAgIC8vIHJlc2V0Rm9ybSgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAvL21ldGhvZCBQT1NUIHRvIHByZXZlbnQgcGFzc3dvcmQgZnJvbSBzaG93aW5nIGluIFVSTCwgaGlzdG9yeSwgYW5kIGxvZ3NcbiAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgey8qIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfSAvPiAqL31cbiAgICAgICAgICAgIDxoMj5DaG9vc2UgTmV3IFBhc3N3b3JkPC9oMj5cbiAgICAgICAgICAgIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yIHx8IHN1Y2Nlc3NmdWxFcnJvcn0gLz5cblxuICAgICAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfSBhcmlhLWJ1c3k9e2xvYWRpbmd9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YT8ucmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbiA9PT0gbnVsbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5QYXNzd29yZCBTdWNjZXNzZnVsbHkgUmVzZXQsIFBsZWFzZSBTaWduIEluLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7LyogPGZpZWxkc2V0PiAqL31cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgRW1haWxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBFbWFpbCBBZGRyZXNzIEFyZSBZb3UgVXNpbmc/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICBOZXcgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIEVudGVyIGEgTmV3IFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuXG4gICAgICAgICAgICB7LyogLy9FWEFNUExFIG1ldGhvZHMgKi99XG4gICAgICAgICAgICB7LyogPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2NsZWFyRm9ybX0+XG4gICAgICAgICAgICAgICAgQ2xlYXIgRm9ybVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17cmVzZXRGb3JtfT5cbiAgICAgICAgICAgICAgICBSZXNldCBGb3JtXG4gICAgICAgICAgICA8L2J1dHRvbj4gKi99XG5cbiAgICAgICAgPC9Gb3JtPlxuICAgIClcblxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Reset.js\n");

/***/ })

})