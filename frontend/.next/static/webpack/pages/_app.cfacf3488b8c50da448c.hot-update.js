webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return paginationField; });\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ \"./components/Pagination.js\");\n\nfunction paginationField() {\n  return {\n    keyArgs: false,\n    //tells Apollo we will deal with this\n    read: function read() {\n      var _data$_allProductsMet;\n\n      var existing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n      var _ref = arguments.length > 1 ? arguments[1] : undefined,\n          args = _ref.args,\n          cache = _ref.cache;\n\n      //Apollo asks read function for allProducts\n      console.log({\n        existing: existing,\n        args: args,\n        cache: cache\n      });\n      var skip = args.skip,\n          first = args.first; //read # of items on page from cache\n\n      var data = cache.readQuery({\n        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__[\"PAGINATION_QUERY\"]\n      });\n      var count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;\n      var page = skip / first + 1;\n      var pages = Math.ceil(count / first); // check if there are existing items in cache, and filter out undefined items\n\n      var items = existing.slice(skip, skip + first).filter(function (x) {\n        return x;\n      }); //if no items...\n\n      if (items.length !== first) {//\n      } //we can do 1 of 2 things...\n      // 1. return the items that are already in cache\n      // or 2. return 'false' triggering a network request for the items\n\n    },\n    merge: function merge() {// this runs when Apollo brings data back from the network request\n    }\n  };\n}\n;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcz85NDQwIl0sIm5hbWVzIjpbInBhZ2luYXRpb25GaWVsZCIsImtleUFyZ3MiLCJyZWFkIiwiZXhpc3RpbmciLCJhcmdzIiwiY2FjaGUiLCJjb25zb2xlIiwibG9nIiwic2tpcCIsImZpcnN0IiwiZGF0YSIsInJlYWRRdWVyeSIsInF1ZXJ5IiwiUEFHSU5BVElPTl9RVUVSWSIsImNvdW50IiwiX2FsbFByb2R1Y3RzTWV0YSIsInBhZ2UiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwiaXRlbXMiLCJzbGljZSIsImZpbHRlciIsIngiLCJsZW5ndGgiLCJtZXJnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxTQUFTQSxlQUFULEdBQTJCO0FBQ3RDLFNBQU87QUFDSEMsV0FBTyxFQUFFLEtBRE47QUFDYTtBQUNoQkMsUUFGRyxrQkFFaUM7QUFBQTs7QUFBQSxVQUEvQkMsUUFBK0IsdUVBQXJCLEVBQXFCOztBQUFBO0FBQUEsVUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQUEsVUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUNoQztBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDSixnQkFBUSxFQUFSQSxRQUFEO0FBQVdDLFlBQUksRUFBSkEsSUFBWDtBQUFpQkMsYUFBSyxFQUFMQTtBQUFqQixPQUFaO0FBRmdDLFVBR3hCRyxJQUh3QixHQUdSSixJQUhRLENBR3hCSSxJQUh3QjtBQUFBLFVBR2xCQyxLQUhrQixHQUdSTCxJQUhRLENBR2xCSyxLQUhrQixFQUloQzs7QUFDQSxVQUFNQyxJQUFJLEdBQUdMLEtBQUssQ0FBQ00sU0FBTixDQUFnQjtBQUFFQyxhQUFLLEVBQUVDLHVFQUFnQkE7QUFBekIsT0FBaEIsQ0FBYjtBQUNBLFVBQU1DLEtBQUssR0FBR0osSUFBSCxhQUFHQSxJQUFILGdEQUFHQSxJQUFJLENBQUVLLGdCQUFULDBEQUFHLHNCQUF3QkQsS0FBdEM7QUFDQSxVQUFNRSxJQUFJLEdBQUdSLElBQUksR0FBR0MsS0FBUCxHQUFlLENBQTVCO0FBQ0EsVUFBTVEsS0FBSyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUwsS0FBSyxHQUFHTCxLQUFsQixDQUFkLENBUmdDLENBU2hDOztBQUNBLFVBQU1XLEtBQUssR0FBR2pCLFFBQVEsQ0FBQ2tCLEtBQVQsQ0FBZWIsSUFBZixFQUFxQkEsSUFBSSxHQUFHQyxLQUE1QixFQUFtQ2EsTUFBbkMsQ0FBMEMsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQVA7QUFBQSxPQUExQyxDQUFkLENBVmdDLENBV2hDOztBQUNBLFVBQUdILEtBQUssQ0FBQ0ksTUFBTixLQUFpQmYsS0FBcEIsRUFBMkIsQ0FDdkI7QUFDSCxPQWQrQixDQWlCaEM7QUFDQTtBQUNBOztBQUNILEtBdEJFO0FBdUJIZ0IsU0F2QkcsbUJBdUJLLENBQ0o7QUFFSDtBQTFCRSxHQUFQO0FBNEJIO0FBQUEiLCJmaWxlIjoiLi9saWIvcGFnaW5hdGlvbkZpZWxkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQQUdJTkFUSU9OX1FVRVJZfSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdpbmF0aW9uRmllbGQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5QXJnczogZmFsc2UsIC8vdGVsbHMgQXBvbGxvIHdlIHdpbGwgZGVhbCB3aXRoIHRoaXNcbiAgICAgICAgcmVhZChleGlzdGluZyA9W10sIHsgYXJncywgY2FjaGUgfSkge1xuICAgICAgICAgICAgLy9BcG9sbG8gYXNrcyByZWFkIGZ1bmN0aW9uIGZvciBhbGxQcm9kdWN0c1xuICAgICAgICAgICAgY29uc29sZS5sb2coe2V4aXN0aW5nLCBhcmdzLCBjYWNoZX0pO1xuICAgICAgICAgICAgY29uc3QgeyBza2lwLCBmaXJzdCB9ID0gYXJncztcbiAgICAgICAgICAgIC8vcmVhZCAjIG9mIGl0ZW1zIG9uIHBhZ2UgZnJvbSBjYWNoZVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlYWRRdWVyeSh7IHF1ZXJ5OiBQQUdJTkFUSU9OX1FVRVJZIH0pO1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSBkYXRhPy5fYWxsUHJvZHVjdHNNZXRhPy5jb3VudDtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBza2lwIC8gZmlyc3QgKyAxO1xuICAgICAgICAgICAgY29uc3QgcGFnZXMgPSBNYXRoLmNlaWwoY291bnQgLyBmaXJzdCk7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgZXhpc3RpbmcgaXRlbXMgaW4gY2FjaGUsIGFuZCBmaWx0ZXIgb3V0IHVuZGVmaW5lZCBpdGVtc1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBleGlzdGluZy5zbGljZShza2lwLCBza2lwICsgZmlyc3QpLmZpbHRlcigoeCkgPT4geCk7XG4gICAgICAgICAgICAvL2lmIG5vIGl0ZW1zLi4uXG4gICAgICAgICAgICBpZihpdGVtcy5sZW5ndGggIT09IGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvL3dlIGNhbiBkbyAxIG9mIDIgdGhpbmdzLi4uXG4gICAgICAgICAgICAvLyAxLiByZXR1cm4gdGhlIGl0ZW1zIHRoYXQgYXJlIGFscmVhZHkgaW4gY2FjaGVcbiAgICAgICAgICAgIC8vIG9yIDIuIHJldHVybiAnZmFsc2UnIHRyaWdnZXJpbmcgYSBuZXR3b3JrIHJlcXVlc3QgZm9yIHRoZSBpdGVtc1xuICAgICAgICB9LFxuICAgICAgICBtZXJnZSgpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgcnVucyB3aGVuIEFwb2xsbyBicmluZ3MgZGF0YSBiYWNrIGZyb20gdGhlIG5ldHdvcmsgcmVxdWVzdFxuXG4gICAgICAgIH1cbiAgICB9O1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/paginationField.js\n");

/***/ })

})