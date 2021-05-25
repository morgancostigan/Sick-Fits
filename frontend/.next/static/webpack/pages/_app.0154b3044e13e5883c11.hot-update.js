webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/CartCount.js":
/*!*********************************!*\
  !*** ./components/CartCount.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CartCount; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/CartCount.js\";\n\n\nvar Dot = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"CartCount__Dot\",\n  componentId: \"xxvp4g-0\"\n})([\"background:var(--red);color:white;border-radius:50%;padding:0.5rem;line-height:2rem;min-width:3rem;margin-left:1rem;font-feature-settings:\\\"tnum\\\";font-variant-numeric:tabular-nums;\"]);\n_c = Dot;\nvar AnimationStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span.withConfig({\n  displayName: \"CartCount__AnimationStyles\",\n  componentId: \"xxvp4g-1\"\n})([\"position:relative;.count{display:block;position:relative;transition:transition}.count-enter{background:green}.count-enter-active{background:yellow;}.count-exit{background:blue;}.count-exit.active{background:paleturquoise;}\"]);\n_c2 = AnimationStyles;\nfunction CartCount(_ref) {\n  var count = _ref.count;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AnimationStyles, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"TransitionGroup\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_transition_group__WEBPACK_IMPORTED_MODULE_2__[\"CSSTransition\"], {\n        unmountOnExit: true,\n        className: \"count\",\n        classNames: \"count\",\n        timeout: {\n          enter: 400,\n          exit: 400\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Dot, {\n          children: count\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 21\n        }, this)\n      }, count, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 9\n  }, this);\n}\n_c3 = CartCount;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Dot\");\n$RefreshReg$(_c2, \"AnimationStyles\");\n$RefreshReg$(_c3, \"CartCount\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0Q291bnQuanM/NmE4ZiJdLCJuYW1lcyI6WyJEb3QiLCJzdHlsZWQiLCJkaXYiLCJBbmltYXRpb25TdHlsZXMiLCJzcGFuIiwiQ2FydENvdW50IiwiY291bnQiLCJlbnRlciIsImV4aXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2TEFBVDtLQUFNRixHO0FBWU4sSUFBTUcsZUFBZSxHQUFHRix5REFBTSxDQUFDRyxJQUFWO0FBQUE7QUFBQTtBQUFBLHNPQUFyQjtNQUFNRCxlO0FBcUJTLFNBQVNFLFNBQVQsT0FBMkI7QUFBQSxNQUFQQyxLQUFPLFFBQVBBLEtBQU87QUFDdEMsc0JBQ0kscUVBQUMsZUFBRDtBQUFBLDJCQUNJLHFFQUFDLHNFQUFEO0FBQUEsNkJBQ0kscUVBQUMsb0VBQUQ7QUFDSSxxQkFBYSxNQURqQjtBQUVJLGlCQUFTLEVBQUMsT0FGZDtBQUdJLGtCQUFVLEVBQUMsT0FIZjtBQUtJLGVBQU8sRUFBRTtBQUFFQyxlQUFLLEVBQUUsR0FBVDtBQUFjQyxjQUFJLEVBQUU7QUFBcEIsU0FMYjtBQUFBLCtCQU9JLHFFQUFDLEdBQUQ7QUFBQSxvQkFBTUY7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEosU0FJU0EsS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdCSDtNQWpCdUJELFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRDb3VudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcbmltcG9ydCB7IENTU1RyYW5zaXRpb24sIFRyYW5zaXRpb25Hcm91cCB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuXG5jb25zdCBEb3QgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgbWluLXdpZHRoOiAzcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gICAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbmA7XG5cbmNvbnN0IEFuaW1hdGlvblN0eWxlcyA9IHN0eWxlZC5zcGFuYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuY291bnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uXG4gICAgfVxuICAgIC5jb3VudC1lbnRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGdyZWVuXG4gICAgfVxuICAgIC5jb3VudC1lbnRlci1hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICAgfVxuICAgIC5jb3VudC1leGl0IHtcbiAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICB9XG4gICAgLmNvdW50LWV4aXQuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcGFsZXR1cnF1b2lzZTtcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0Q291bnQoe2NvdW50fSl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFuaW1hdGlvblN0eWxlcz5cbiAgICAgICAgICAgIDxUcmFuc2l0aW9uR3JvdXA+XG4gICAgICAgICAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM9XCJjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgIGtleT17Y291bnR9XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ9e3sgZW50ZXI6IDQwMCwgZXhpdDogNDAwIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RG90Pntjb3VudH08L0RvdD5cbiAgICAgICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICAgICA8L1RyYW5zaXRpb25Hcm91cD5cbiAgICAgICAgPC9BbmltYXRpb25TdHlsZXM+XG5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CartCount.js\n");

/***/ })

})