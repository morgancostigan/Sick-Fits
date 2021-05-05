webpackHotUpdate_N_E("pages/sell",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useForm; });\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nfunction useForm() {\n  _s();\n\n  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  //create a state object for our inputs\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(initial),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  function handleChange(e) {\n    var _e$target = e.target,\n        value = _e$target.value,\n        name = _e$target.name,\n        type = _e$target.type;\n\n    if (type === 'number') {\n      value = parseInt(value);\n    }\n\n    ;\n    if (type === 'file') setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, name, value)));\n  }\n\n  ; //return the things we want surfaced \n\n  return {\n    inputs: inputs,\n    handleChange: handleChange\n  };\n}\n\n_s(useForm, \"0tjT+aoDVbAe0wsQZsq9AKLCE20=\");\n\n;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanM/ZjBlMiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiaW5pdGlhbCIsInVzZVN0YXRlIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInR5cGUiLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxHQUErQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDMUM7QUFEMEMsa0JBRWRDLHNEQUFRLENBQUNELE9BQUQsQ0FGTTtBQUFBLE1BRW5DRSxNQUZtQztBQUFBLE1BRTNCQyxTQUYyQjs7QUFJMUMsV0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFBQSxvQkFDT0EsQ0FBQyxDQUFDQyxNQURUO0FBQUEsUUFDZkMsS0FEZSxhQUNmQSxLQURlO0FBQUEsUUFDUkMsSUFEUSxhQUNSQSxJQURRO0FBQUEsUUFDRkMsSUFERSxhQUNGQSxJQURFOztBQUVyQixRQUFHQSxJQUFJLEtBQUssUUFBWixFQUFxQjtBQUNqQkYsV0FBSyxHQUFHRyxRQUFRLENBQUNILEtBQUQsQ0FBaEI7QUFDSDs7QUFBQTtBQUNELFFBQUdFLElBQUksS0FBSyxNQUFaLEVBQ0FOLFNBQVMsaUNBRUZELE1BRkUscU5BR0pNLElBSEksRUFHR0QsS0FISCxHQUFUO0FBS0g7O0FBQUEsR0FmeUMsQ0FpQjFDOztBQUNBLFNBQU87QUFDSEwsVUFBTSxFQUFOQSxNQURHO0FBRUhFLGdCQUFZLEVBQVpBO0FBRkcsR0FBUDtBQUtIOztHQXZCdUJMLE87O0FBdUJ2QiIsImZpbGUiOiIuL2xpYi91c2VGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9ybShpbml0aWFsID0ge30pIHtcbiAgICAvL2NyZWF0ZSBhIHN0YXRlIG9iamVjdCBmb3Igb3VyIGlucHV0c1xuICAgIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZShpbml0aWFsKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGxldCB7IHZhbHVlLCBuYW1lLCB0eXBlIH0gPSBlLnRhcmdldDtcbiAgICAgICAgaWYodHlwZSA9PT0gJ251bWJlcicpe1xuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmKHR5cGUgPT09ICdmaWxlJylcbiAgICAgICAgc2V0SW5wdXRzKHtcbiAgICAgICAgICAgIC8vY29weSBleGlzdGluZyBzdGF0ZVxuICAgICAgICAgICAgLi4uaW5wdXRzLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vcmV0dXJuIHRoZSB0aGluZ3Mgd2Ugd2FudCBzdXJmYWNlZCBcbiAgICByZXR1cm4ge1xuICAgICAgICBpbnB1dHMsXG4gICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICB9O1xuXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/useForm.js\n");

/***/ })

})