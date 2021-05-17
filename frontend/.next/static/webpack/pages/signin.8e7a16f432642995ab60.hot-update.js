webpackHotUpdate_N_E("pages/signin",{

/***/ "./components/SignIn.js":
/*!******************************!*\
  !*** ./components/SignIn.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignIn; });\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/SignIn.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n    mutation SIGN_IN_MUTATION($email: String!, $password: String!) {\\n        authenticateUserWithPassword(email: $email, password: $password){\\n            ... on UserAuthenticationWithPasswordSuccess {\\n                item {\\n                    id\\n                    name\\n                    email\\n                }\\n            },\\n            ... on UserAuthenticationWithPasswordFailure {\\n                code\\n                message\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar SIGN_IN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());\nfunction SignIn() {\n  _s();\n\n  var _data$authenticateUse;\n\n  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    email: '',\n    password: ''\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      clearForm = _useForm.clearForm,\n      resetForm = _useForm.resetForm;\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useMutation\"])(SIGN_IN_MUTATION, {\n    variables: inputs,\n    refetchQueries: [{\n      query: _User__WEBPACK_IMPORTED_MODULE_10__[\"CURRENT_USER_QUERY\"]\n    }]\n  }),\n      _useMutation2 = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation, 2),\n      signin = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      data = _useMutation2$.data,\n      loading = _useMutation2$.loading;\n\n  function handleSubmit(_x) {\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  function _handleSubmit() {\n    _handleSubmit = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var res;\n      return _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault(); //stop form from submitting early\n              //send email and password to graphQL API\n              // await signin();\n              //const res for logging only\n\n              _context.next = 3;\n              return signin(next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push({\n                pathname: \"/products\"\n              }));\n\n            case 3:\n              res = _context.sent;\n              console.log({\n                res: res\n              });\n              resetForm();\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  ; //error is weird here.  if there is error data that matches the typename, then display it...  else, undefined\n\n  var error = (data === null || data === void 0 ? void 0 : (_data$authenticateUse = data.authenticateUserWithPassword) === null || _data$authenticateUse === void 0 ? void 0 : _data$authenticateUse.__typename) === \"UserAuthenticationWithPasswordFailure\" ? data === null || data === void 0 ? void 0 : data.authenticateUserWithPassword : undefined;\n  return (\n    /*#__PURE__*/\n    //method POST to prevent password from showing in URL, history, and logs\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      method: \"post\",\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h2\", {\n        children: \"Go Ahead And Sign On In\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        error: error\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"fieldset\", {\n        disabled: loading,\n        \"aria-busy\": loading,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"email\",\n          children: [\"Email\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n            required: true,\n            type: \"email\",\n            id: \"email\",\n            name: \"email\",\n            placeholder: \"Please Enter Your Email\",\n            autoComplete: \"email\",\n            value: inputs.email,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"password\",\n          children: [\"Password\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"input\", {\n            type: \"password\",\n            id: \"password\",\n            name: \"password\",\n            placeholder: \"...And We Will Know You By The Password You Enter\",\n            autoComplete: \"password\",\n            value: inputs.password,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          children: \"Sign In\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }, this)\n  );\n}\n\n_s(SignIn, \"dxtz0Oh145ggcWXE4c8nWIIEKlg=\", false, function () {\n  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useMutation\"]];\n});\n\n_c = SignIn;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduSW4uanM/NDgzOCJdLCJuYW1lcyI6WyJTSUdOX0lOX01VVEFUSU9OIiwiZ3FsIiwiU2lnbkluIiwidXNlRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJDVVJSRU5UX1VTRVJfUVVFUlkiLCJzaWduaW4iLCJkYXRhIiwibG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQiLCJfX3R5cGVuYW1lIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxnQkFBZ0IsR0FBR0Msa0RBQUgsbUJBQXRCO0FBa0JlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxpQkFFMEJDLDREQUFPLENBQUM7QUFDM0RDLFNBQUssRUFBRSxFQURvRDtBQUUzREMsWUFBUSxFQUFFO0FBRmlELEdBQUQsQ0FGakM7QUFBQSxNQUVyQkMsTUFGcUIsWUFFckJBLE1BRnFCO0FBQUEsTUFFYkMsWUFGYSxZQUViQSxZQUZhO0FBQUEsTUFFQ0MsU0FGRCxZQUVDQSxTQUZEO0FBQUEsTUFFWUMsU0FGWixZQUVZQSxTQUZaOztBQUFBLHFCQU1PQyxrRUFBVyxDQUFDVixnQkFBRCxFQUFtQjtBQUM5RFcsYUFBUyxFQUFFTCxNQURtRDtBQUU5RE0sa0JBQWMsRUFBRSxDQUFDO0FBQUNDLFdBQUssRUFBRUMseURBQWtCQTtBQUExQixLQUFEO0FBRjhDLEdBQW5CLENBTmxCO0FBQUE7QUFBQSxNQU10QkMsTUFOc0I7QUFBQTtBQUFBLE1BTVpDLElBTlksa0JBTVpBLElBTlk7QUFBQSxNQU1OQyxPQU5NLGtCQU1OQSxPQU5NOztBQUFBLFdBV2RDLFlBWGM7QUFBQTtBQUFBOztBQUFBO0FBQUEscWFBVzdCLGlCQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lBLGVBQUMsQ0FBQ0MsY0FBRixHQURKLENBQ3dCO0FBQ3BCO0FBQ0E7QUFDQTs7QUFKSjtBQUFBLHFCQUtzQkwsTUFBTSxDQUNwQk0sbURBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1JDLHdCQUFRO0FBREEsZUFBWixDQURvQixDQUw1Qjs7QUFBQTtBQUtVQyxpQkFMVjtBQVVJQyxxQkFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ0YsbUJBQUcsRUFBSEE7QUFBRCxlQUFaO0FBQ0FmLHVCQUFTOztBQVhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWDZCO0FBQUE7QUFBQTs7QUF1QjVCLEdBdkI0QixDQXdCN0I7O0FBQ0EsTUFBTWtCLEtBQUssR0FBRyxDQUFBWCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLHFDQUFBQSxJQUFJLENBQUVZLDRCQUFOLGdGQUFvQ0MsVUFBcEMsTUFBbUQsdUNBQW5ELEdBQTZGYixJQUE3RixhQUE2RkEsSUFBN0YsdUJBQTZGQSxJQUFJLENBQUVZLDRCQUFuRyxHQUFrSUUsU0FBaEo7QUFFQTtBQUFBO0FBQ0k7QUFDQSx5RUFBQyxvREFBRDtBQUFNLFlBQU0sRUFBQyxNQUFiO0FBQW9CLGNBQVEsRUFBRVosWUFBOUI7QUFBQSw4QkFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0kscUVBQUMscURBQUQ7QUFBYyxhQUFLLEVBQUVTO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUtJO0FBQVUsZ0JBQVEsRUFBRVYsT0FBcEI7QUFBNkIscUJBQVdBLE9BQXhDO0FBQUEsZ0NBR0k7QUFBTyxpQkFBTyxFQUFDLE9BQWY7QUFBQSwyQ0FFSTtBQUNJLG9CQUFRLE1BRFo7QUFFSSxnQkFBSSxFQUFDLE9BRlQ7QUFHSSxjQUFFLEVBQUMsT0FIUDtBQUlJLGdCQUFJLEVBQUMsT0FKVDtBQUtJLHVCQUFXLEVBQUMseUJBTGhCO0FBTUksd0JBQVksRUFBQyxPQU5qQjtBQU9JLGlCQUFLLEVBQUVYLE1BQU0sQ0FBQ0YsS0FQbEI7QUFRSSxvQkFBUSxFQUFFRztBQVJkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBZ0JJO0FBQU8saUJBQU8sRUFBQyxVQUFmO0FBQUEsOENBRUk7QUFDSSxnQkFBSSxFQUFDLFVBRFQ7QUFFSSxjQUFFLEVBQUMsVUFGUDtBQUdJLGdCQUFJLEVBQUMsVUFIVDtBQUlJLHVCQUFXLEVBQUMsbURBSmhCO0FBS0ksd0JBQVksRUFBQyxVQUxqQjtBQU1JLGlCQUFLLEVBQUVELE1BQU0sQ0FBQ0QsUUFObEI7QUFPSSxvQkFBUSxFQUFFRTtBQVBkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCSixlQTRCSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQWlESDs7R0E1RXVCTCxNO1VBRW1DQyxvRCxFQUluQk8sMEQ7OztLQU5oQlIsTTtBQTRFdkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ25Jbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5cbmNvbnN0IFNJR05fSU5fTVVUQVRJT04gPSBncWxgXG4gICAgbXV0YXRpb24gU0lHTl9JTl9NVVRBVElPTigkZW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xuICAgICAgICBhdXRoZW50aWNhdGVVc2VyV2l0aFBhc3N3b3JkKGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpe1xuICAgICAgICAgICAgLi4uIG9uIFVzZXJBdXRoZW50aWNhdGlvbldpdGhQYXNzd29yZFN1Y2Nlc3Mge1xuICAgICAgICAgICAgICAgIGl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLiBvbiBVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRGYWlsdXJlIHtcbiAgICAgICAgICAgICAgICBjb2RlXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKCkge1xuXG4gICAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgY2xlYXJGb3JtLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICB9KTtcbiAgICBjb25zdCBbc2lnbmluLCB7IGRhdGEsIGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihTSUdOX0lOX01VVEFUSU9OLCB7XG4gICAgICAgIHZhcmlhYmxlczogaW5wdXRzLFxuICAgICAgICByZWZldGNoUXVlcmllczogW3txdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZfV1cbiAgICB9KTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3N0b3AgZm9ybSBmcm9tIHN1Ym1pdHRpbmcgZWFybHlcbiAgICAgICAgLy9zZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBncmFwaFFMIEFQSVxuICAgICAgICAvLyBhd2FpdCBzaWduaW4oKTtcbiAgICAgICAgLy9jb25zdCByZXMgZm9yIGxvZ2dpbmcgb25seVxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzaWduaW4oXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvcHJvZHVjdHNgLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICBjb25zb2xlLmxvZyh7cmVzfSk7XG4gICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgIH07XG4gICAgLy9lcnJvciBpcyB3ZWlyZCBoZXJlLiAgaWYgdGhlcmUgaXMgZXJyb3IgZGF0YSB0aGF0IG1hdGNoZXMgdGhlIHR5cGVuYW1lLCB0aGVuIGRpc3BsYXkgaXQuLi4gIGVsc2UsIHVuZGVmaW5lZFxuICAgIGNvbnN0IGVycm9yID0gZGF0YT8uYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZD8uX190eXBlbmFtZSA9PT0gXCJVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRGYWlsdXJlXCIgPyBkYXRhPy5hdXRoZW50aWNhdGVVc2VyV2l0aFBhc3N3b3JkIDogdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy9tZXRob2QgUE9TVCB0byBwcmV2ZW50IHBhc3N3b3JkIGZyb20gc2hvd2luZyBpbiBVUkwsIGhpc3RvcnksIGFuZCBsb2dzXG4gICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIHsvKiA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz4gKi99XG4gICAgICAgICAgICA8aDI+R28gQWhlYWQgQW5kIFNpZ24gT24gSW48L2gyPlxuICAgICAgICAgICAgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+XG5cbiAgICAgICAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17bG9hZGluZ30gYXJpYS1idXN5PXtsb2FkaW5nfT5cbiAgICAgICAgICAgIHsvKiA8ZmllbGRzZXQ+ICovfVxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICBFbWFpbFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGVhc2UgRW50ZXIgWW91ciBFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIuLi5BbmQgV2UgV2lsbCBLbm93IFlvdSBCeSBUaGUgUGFzc3dvcmQgWW91IEVudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBJbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9maWVsZHNldD5cblxuICAgICAgICAgICAgey8qIC8vRVhBTVBMRSBtZXRob2RzICovfVxuICAgICAgICAgICAgey8qIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtjbGVhckZvcm19PlxuICAgICAgICAgICAgICAgIENsZWFyIEZvcm1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e3Jlc2V0Rm9ybX0+XG4gICAgICAgICAgICAgICAgUmVzZXQgRm9ybVxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxuXG4gICAgICAgIDwvRm9ybT5cbiAgICApXG4gICAgXG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SignIn.js\n");

/***/ })

})