webpackHotUpdate_N_E("pages/update",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useForm; });\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction useForm() {\n  _s();\n\n  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  //create a state object for our inputs\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(initial),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  useEffect;\n\n  function handleChange(e) {\n    var _e$target = e.target,\n        value = _e$target.value,\n        name = _e$target.name,\n        type = _e$target.type;\n\n    if (type === 'number') {\n      value = parseInt(value);\n    } //vvv this is for file uploads vvv\n\n\n    if (type === 'file') {\n      var _e$target$files = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.files, 1);\n\n      value = _e$target$files[0];\n    }\n\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, name, value)));\n  }\n\n  ;\n\n  function resetForm() {\n    setInputs(initial);\n  }\n\n  function clearForm() {\n    var blankState = Object.fromEntries(Object.entries(inputs).map(function (_ref) {\n      var _ref2 = Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, 2),\n          key = _ref2[0],\n          value = _ref2[1];\n\n      return [key, ''];\n    }));\n    setInputs(blankState);\n  } //return the things we want surfaced \n\n\n  return {\n    inputs: inputs,\n    handleChange: handleChange,\n    resetForm: resetForm,\n    clearForm: clearForm\n  };\n}\n\n_s(useForm, \"0tjT+aoDVbAe0wsQZsq9AKLCE20=\");\n\n;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanM/ZjBlMiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiaW5pdGlhbCIsInVzZVN0YXRlIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInR5cGUiLCJwYXJzZUludCIsImZpbGVzIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwiYmxhbmtTdGF0ZSIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm1hcCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBK0I7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQzFDO0FBRDBDLGtCQUVkQyxzREFBUSxDQUFDRCxPQUFELENBRk07QUFBQSxNQUVuQ0UsTUFGbUM7QUFBQSxNQUUzQkMsU0FGMkI7O0FBSTFDQyxXQUFTOztBQUVULFdBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQUEsb0JBQ09BLENBQUMsQ0FBQ0MsTUFEVDtBQUFBLFFBQ2ZDLEtBRGUsYUFDZkEsS0FEZTtBQUFBLFFBQ1JDLElBRFEsYUFDUkEsSUFEUTtBQUFBLFFBQ0ZDLElBREUsYUFDRkEsSUFERTs7QUFFckIsUUFBR0EsSUFBSSxLQUFLLFFBQVosRUFBcUI7QUFDakJGLFdBQUssR0FBR0csUUFBUSxDQUFDSCxLQUFELENBQWhCO0FBQ0gsS0FKb0IsQ0FLckI7OztBQUNBLFFBQUdFLElBQUksS0FBSyxNQUFaLEVBQW1CO0FBQUEscU9BQ0xKLENBQUMsQ0FBQ0MsTUFBRixDQUFTSyxLQURKOztBQUNkSixXQURjO0FBRWxCOztBQUVETCxhQUFTLGlDQUVGRCxNQUZFLHFOQUdKTyxJQUhJLEVBR0dELEtBSEgsR0FBVDtBQUtIOztBQUFBOztBQUVELFdBQVNLLFNBQVQsR0FBb0I7QUFDaEJWLGFBQVMsQ0FBQ0gsT0FBRCxDQUFUO0FBQ0g7O0FBRUQsV0FBU2MsU0FBVCxHQUFxQjtBQUNqQixRQUFNQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQkQsTUFBTSxDQUFDRSxPQUFQLENBQWVoQixNQUFmLEVBQ2pDaUIsR0FEaUMsQ0FDN0I7QUFBQTtBQUFBLFVBQUVDLEdBQUY7QUFBQSxVQUFPWixLQUFQOztBQUFBLGFBQWtCLENBQUNZLEdBQUQsRUFBTSxFQUFOLENBQWxCO0FBQUEsS0FENkIsQ0FBbkIsQ0FBbkI7QUFFQWpCLGFBQVMsQ0FBQ1ksVUFBRCxDQUFUO0FBQ0gsR0EvQnlDLENBaUMxQzs7O0FBQ0EsU0FBTztBQUNIYixVQUFNLEVBQU5BLE1BREc7QUFFSEcsZ0JBQVksRUFBWkEsWUFGRztBQUdIUSxhQUFTLEVBQVRBLFNBSEc7QUFJSEMsYUFBUyxFQUFUQTtBQUpHLEdBQVA7QUFPSDs7R0F6Q3VCZixPOztBQXlDdkIiLCJmaWxlIjoiLi9saWIvdXNlRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9ybShpbml0aWFsID0ge30pIHtcbiAgICAvL2NyZWF0ZSBhIHN0YXRlIG9iamVjdCBmb3Igb3VyIGlucHV0c1xuICAgIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZShpbml0aWFsKTtcblxuICAgIHVzZUVmZmVjdFxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgbGV0IHsgdmFsdWUsIG5hbWUsIHR5cGUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBpZih0eXBlID09PSAnbnVtYmVyJyl7XG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvL3Z2diB0aGlzIGlzIGZvciBmaWxlIHVwbG9hZHMgdnZ2XG4gICAgICAgIGlmKHR5cGUgPT09ICdmaWxlJyl7XG4gICAgICAgICAgICBbdmFsdWVdID0gZS50YXJnZXQuZmlsZXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHNldElucHV0cyh7XG4gICAgICAgICAgICAvL2NvcHkgZXhpc3Rpbmcgc3RhdGVcbiAgICAgICAgICAgIC4uLmlucHV0cyxcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZXNldEZvcm0oKXtcbiAgICAgICAgc2V0SW5wdXRzKGluaXRpYWwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xuICAgICAgICBjb25zdCBibGFua1N0YXRlID0gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGlucHV0cylcbiAgICAgICAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleSwgJyddKSk7XG4gICAgICAgIHNldElucHV0cyhibGFua1N0YXRlKTtcbiAgICB9XG5cbiAgICAvL3JldHVybiB0aGUgdGhpbmdzIHdlIHdhbnQgc3VyZmFjZWQgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5wdXRzLFxuICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgIHJlc2V0Rm9ybSxcbiAgICAgICAgY2xlYXJGb3JtLFxuICAgIH07XG5cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/useForm.js\n");

/***/ })

})