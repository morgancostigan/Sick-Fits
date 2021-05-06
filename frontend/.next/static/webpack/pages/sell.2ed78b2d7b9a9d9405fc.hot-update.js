webpackHotUpdate_N_E("pages/sell",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useForm; });\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nfunction useForm() {\n  _s();\n\n  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  //create a state object for our inputs\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(initial),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  function handleChange(e) {\n    var _e$target = e.target,\n        value = _e$target.value,\n        name = _e$target.name,\n        type = _e$target.type;\n\n    if (type === 'number') {\n      value = parseInt(value);\n    } //vvv this is for file uploads vvv\n\n\n    if (type === 'file') {\n      var _e$target$files = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.files, 1);\n\n      value = _e$target$files[0];\n    }\n\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, name, value)));\n  }\n\n  ;\n\n  function resetForm() {\n    setInputs(initial);\n  }\n\n  function clearForm() {\n    var blankState = Object.fromEntries(Object.entries(inputs).map(function (_ref) {\n      var _ref2 = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, 2),\n          key = _ref2[0],\n          value = _ref2[1];\n\n      return [key, ''];\n    }));\n    setInputs(blankState);\n  } //return the things we want surfaced \n\n\n  return {\n    inputs: inputs,\n    handleChange: handleChange,\n    resetForm: resetForm,\n    clearForm: clearForm\n  };\n}\n\n_s(useForm, \"0tjT+aoDVbAe0wsQZsq9AKLCE20=\");\n\n;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanM/ZjBlMiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiaW5pdGlhbCIsInVzZVN0YXRlIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInR5cGUiLCJwYXJzZUludCIsImZpbGVzIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwiYmxhbmtTdGF0ZSIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm1hcCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULEdBQStCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUMxQztBQUQwQyxrQkFFZEMsc0RBQVEsQ0FBQ0QsT0FBRCxDQUZNO0FBQUEsTUFFbkNFLE1BRm1DO0FBQUEsTUFFM0JDLFNBRjJCOztBQUkxQyxXQUFTQyxZQUFULENBQXNCQyxDQUF0QixFQUF5QjtBQUFBLG9CQUNPQSxDQUFDLENBQUNDLE1BRFQ7QUFBQSxRQUNmQyxLQURlLGFBQ2ZBLEtBRGU7QUFBQSxRQUNSQyxJQURRLGFBQ1JBLElBRFE7QUFBQSxRQUNGQyxJQURFLGFBQ0ZBLElBREU7O0FBRXJCLFFBQUdBLElBQUksS0FBSyxRQUFaLEVBQXFCO0FBQ2pCRixXQUFLLEdBQUdHLFFBQVEsQ0FBQ0gsS0FBRCxDQUFoQjtBQUNILEtBSm9CLENBS3JCOzs7QUFDQSxRQUFHRSxJQUFJLEtBQUssTUFBWixFQUFtQjtBQUFBLHFPQUNMSixDQUFDLENBQUNDLE1BQUYsQ0FBU0ssS0FESjs7QUFDZEosV0FEYztBQUVsQjs7QUFFREosYUFBUyxpQ0FFRkQsTUFGRSxxTkFHSk0sSUFISSxFQUdHRCxLQUhILEdBQVQ7QUFLSDs7QUFBQTs7QUFFRCxXQUFTSyxTQUFULEdBQW9CO0FBQ2hCVCxhQUFTLENBQUNILE9BQUQsQ0FBVDtBQUNIOztBQUVELFdBQVNhLFNBQVQsR0FBcUI7QUFDakIsUUFBTUMsVUFBVSxHQUFHQyxNQUFNLENBQUNDLFdBQVAsQ0FBbUJELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlZixNQUFmLEVBQ2pDZ0IsR0FEaUMsQ0FDN0I7QUFBQTtBQUFBLFVBQUVDLEdBQUY7QUFBQSxVQUFPWixLQUFQOztBQUFBLGFBQWtCLENBQUNZLEdBQUQsRUFBTSxFQUFOLENBQWxCO0FBQUEsS0FENkIsQ0FBbkIsQ0FBbkI7QUFFQWhCLGFBQVMsQ0FBQ1csVUFBRCxDQUFUO0FBQ0gsR0E3QnlDLENBK0IxQzs7O0FBQ0EsU0FBTztBQUNIWixVQUFNLEVBQU5BLE1BREc7QUFFSEUsZ0JBQVksRUFBWkEsWUFGRztBQUdIUSxhQUFTLEVBQVRBLFNBSEc7QUFJSEMsYUFBUyxFQUFUQTtBQUpHLEdBQVA7QUFPSDs7R0F2Q3VCZCxPOztBQXVDdkIiLCJmaWxlIjoiLi9saWIvdXNlRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm0oaW5pdGlhbCA9IHt9KSB7XG4gICAgLy9jcmVhdGUgYSBzdGF0ZSBvYmplY3QgZm9yIG91ciBpbnB1dHNcbiAgICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoaW5pdGlhbCk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBsZXQgeyB2YWx1ZSwgbmFtZSwgdHlwZSB9ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmKHR5cGUgPT09ICdudW1iZXInKXtcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vdnZ2IHRoaXMgaXMgZm9yIGZpbGUgdXBsb2FkcyB2dnZcbiAgICAgICAgaWYodHlwZSA9PT0gJ2ZpbGUnKXtcbiAgICAgICAgICAgIFt2YWx1ZV0gPSBlLnRhcmdldC5maWxlcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc2V0SW5wdXRzKHtcbiAgICAgICAgICAgIC8vY29weSBleGlzdGluZyBzdGF0ZVxuICAgICAgICAgICAgLi4uaW5wdXRzLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpe1xuICAgICAgICBzZXRJbnB1dHMoaW5pdGlhbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoaW5wdXRzKVxuICAgICAgICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCAnJ10pKTtcbiAgICAgICAgc2V0SW5wdXRzKGJsYW5rU3RhdGUpO1xuICAgIH1cblxuICAgIC8vcmV0dXJuIHRoZSB0aGluZ3Mgd2Ugd2FudCBzdXJmYWNlZCBcbiAgICByZXR1cm4ge1xuICAgICAgICBpbnB1dHMsXG4gICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgcmVzZXRGb3JtLFxuICAgICAgICBjbGVhckZvcm0sXG4gICAgfTtcblxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/useForm.js\n");

/***/ })

})