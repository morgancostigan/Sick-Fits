webpackHotUpdate_N_E("pages/signout",{

/***/ "./components/SignOut.js":
/*!*******************************!*\
  !*** ./components/SignOut.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignOut; });\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/SignOut.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([\"\\n    mutation SIGN_OUT_MUTATION() {\\n\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar SIGN_OUT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());\nfunction SignOut() {\n  _s();\n\n  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    email: '',\n    password: ''\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      clearForm = _useForm.clearForm,\n      resetForm = _useForm.resetForm;\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useMutation\"])(SIGN_IN_MUTATION, {\n    variables: inputs,\n    refetchQueries: [{\n      query: _User__WEBPACK_IMPORTED_MODULE_10__[\"CURRENT_USER_QUERY\"]\n    }]\n  }),\n      _useMutation2 = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation, 2),\n      signout = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      data = _useMutation2$.data,\n      loading = _useMutation2$.loading;\n\n  function handleSubmit(_x) {\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  function _handleSubmit() {\n    _handleSubmit = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var res;\n      return _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault(); //stop form from submitting early\n              //send email and password to graphQL API\n              // await signin();\n              //const res for logging only\n\n              _context.next = 3;\n              return signout();\n\n            case 3:\n              res = _context.sent;\n              console.log({\n                res: res\n              });\n              resetForm();\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  ;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h2\", {\n      children: \"Sign Out\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      error: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"fieldset\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \"Sign Out\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, this);\n}\n\n_s(SignOut, \"R+GvVyoNMJa0wALzj7DE6dVRpT4=\", false, function () {\n  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useMutation\"]];\n});\n\n_c = SignOut;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignOut\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduT3V0LmpzP2NkNDIiXSwibmFtZXMiOlsiU0lHTl9PVVRfTVVUQVRJT04iLCJncWwiLCJTaWduT3V0IiwidXNlRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJ1c2VNdXRhdGlvbiIsIlNJR05fSU5fTVVUQVRJT04iLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwic2lnbm91dCIsImRhdGEiLCJsb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHQyxrREFBSCxtQkFBdkI7QUFNZSxTQUFTQyxPQUFULEdBQWtCO0FBQUE7O0FBQUEsaUJBQzBCQyw0REFBTyxDQUFDO0FBQzNEQyxTQUFLLEVBQUUsRUFEb0Q7QUFFM0RDLFlBQVEsRUFBRTtBQUZpRCxHQUFELENBRGpDO0FBQUEsTUFDckJDLE1BRHFCLFlBQ3JCQSxNQURxQjtBQUFBLE1BQ2JDLFlBRGEsWUFDYkEsWUFEYTtBQUFBLE1BQ0NDLFNBREQsWUFDQ0EsU0FERDtBQUFBLE1BQ1lDLFNBRFosWUFDWUEsU0FEWjs7QUFBQSxxQkFLUUMsa0VBQVcsQ0FBQ0MsZ0JBQUQsRUFBbUI7QUFDL0RDLGFBQVMsRUFBRU4sTUFEb0Q7QUFFL0RPLGtCQUFjLEVBQUUsQ0FBQztBQUFFQyxXQUFLLEVBQUVDLHlEQUFrQkE7QUFBM0IsS0FBRDtBQUYrQyxHQUFuQixDQUxuQjtBQUFBO0FBQUEsTUFLdEJDLE9BTHNCO0FBQUE7QUFBQSxNQUtYQyxJQUxXLGtCQUtYQSxJQUxXO0FBQUEsTUFLTEMsT0FMSyxrQkFLTEEsT0FMSzs7QUFBQSxXQVVkQyxZQVZjO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFhQVU3QixpQkFBNEJDLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJQSxlQUFDLENBQUNDLGNBQUYsR0FESixDQUN3QjtBQUNwQjtBQUNBO0FBQ0E7O0FBSko7QUFBQSxxQkFLc0JMLE9BQU8sRUFMN0I7O0FBQUE7QUFLVU0saUJBTFY7QUFNSUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVGLG1CQUFHLEVBQUhBO0FBQUYsZUFBWjtBQUNBYix1QkFBUzs7QUFQYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVY2QjtBQUFBO0FBQUE7O0FBa0I1QjtBQUdELHNCQUNJLHFFQUFDLG9EQUFEO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLHFEQUFEO0FBQWMsV0FBSyxFQUFFZ0I7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSw2QkFDSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0JIOztHQXZDdUJ2QixPO1VBQ21DQyxvRCxFQUlsQk8sMEQ7OztLQUxqQlIsTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2lnbk91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSAnLi9Vc2VyJztcblxuY29uc3QgU0lHTl9PVVRfTVVUQVRJT04gPSBncWxgXG4gICAgbXV0YXRpb24gU0lHTl9PVVRfTVVUQVRJT04oKSB7XG5cbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduT3V0KCl7XG4gICAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgY2xlYXJGb3JtLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICB9KTtcbiAgICBjb25zdCBbc2lnbm91dCwgeyBkYXRhLCBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oU0lHTl9JTl9NVVRBVElPTiwge1xuICAgICAgICB2YXJpYWJsZXM6IGlucHV0cyxcbiAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV1cbiAgICB9KTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9zdG9wIGZvcm0gZnJvbSBzdWJtaXR0aW5nIGVhcmx5XG4gICAgICAgIC8vc2VuZCBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gZ3JhcGhRTCBBUElcbiAgICAgICAgLy8gYXdhaXQgc2lnbmluKCk7XG4gICAgICAgIC8vY29uc3QgcmVzIGZvciBsb2dnaW5nIG9ubHlcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2lnbm91dCgpXG4gICAgICAgIGNvbnNvbGUubG9nKHsgcmVzIH0pO1xuICAgICAgICByZXNldEZvcm0oKTtcbiAgICB9O1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgIDxoMj5TaWduIE91dDwvaDI+XG4gICAgICAgICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz5cbiAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIE91dDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuXG5cbiAgICAgICAgPC9Gb3JtPlxuICAgIClcblxuXG5cblxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SignOut.js\n");

/***/ })

})