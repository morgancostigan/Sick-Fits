webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return paginationField; });\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ \"./components/Pagination.js\");\n\nfunction paginationField() {\n  return {\n    keyArgs: false,\n    //tells Apollo we will deal with this\n    read: function read() {\n      var _data$_allProductsMet;\n\n      var existing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n      var _ref = arguments.length > 1 ? arguments[1] : undefined,\n          args = _ref.args,\n          cache = _ref.cache;\n\n      //Apollo asks read function for allProducts\n      console.log({\n        existing: existing,\n        args: args,\n        cache: cache\n      });\n      var skip = args.skip,\n          first = args.first; //read # of items on page from cache\n\n      var data = cache.readQuery({\n        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__[\"PAGINATION_QUERY\"]\n      });\n      var count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;\n      var page = skip / first + 1;\n      var pages = Math.ceil(count / first); // check if there are existing items in cache, and filter out undefined items\n\n      var items = existing.slice(skip, skip + first).filter(function (x) {\n        return x;\n      }); //if no items...\n\n      if (items.length !== first) {\n        // tell Apollo we have nuthin and to fetch items from network\n        return false;\n      }\n\n      ; //if there are items in cache, skip the network request and return from cache\n\n      if (items.length) {\n        console.log(\"the cache already has \".concat(items.length, \" items\"));\n        return items;\n      }\n\n      ; // if both IFs don't work... fall back to network request\n\n      return false; //we can do 1 of 2 things...\n      // 1. return the items that are already in cache\n      // or 2. return 'false' triggering a network request for the items\n    },\n    merge: function merge(existing, incoming, _ref2) {\n      var args = _ref2.args;\n      // this runs when Apollo brings data back from the network request\n      console.log(\"merging items from network \".concat(incoming.length)); // console.log({incoming});\n\n      var merged = existing ? existing.slice(0) : [];\n    }\n  };\n}\n;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcz85NDQwIl0sIm5hbWVzIjpbInBhZ2luYXRpb25GaWVsZCIsImtleUFyZ3MiLCJyZWFkIiwiZXhpc3RpbmciLCJhcmdzIiwiY2FjaGUiLCJjb25zb2xlIiwibG9nIiwic2tpcCIsImZpcnN0IiwiZGF0YSIsInJlYWRRdWVyeSIsInF1ZXJ5IiwiUEFHSU5BVElPTl9RVUVSWSIsImNvdW50IiwiX2FsbFByb2R1Y3RzTWV0YSIsInBhZ2UiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwiaXRlbXMiLCJzbGljZSIsImZpbHRlciIsIngiLCJsZW5ndGgiLCJtZXJnZSIsImluY29taW5nIiwibWVyZ2VkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNBLGVBQVQsR0FBMkI7QUFDdEMsU0FBTztBQUNIQyxXQUFPLEVBQUUsS0FETjtBQUNhO0FBQ2hCQyxRQUZHLGtCQUVpQztBQUFBOztBQUFBLFVBQS9CQyxRQUErQix1RUFBckIsRUFBcUI7O0FBQUE7QUFBQSxVQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxVQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQ2hDO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNKLGdCQUFRLEVBQVJBLFFBQUQ7QUFBV0MsWUFBSSxFQUFKQSxJQUFYO0FBQWlCQyxhQUFLLEVBQUxBO0FBQWpCLE9BQVo7QUFGZ0MsVUFHeEJHLElBSHdCLEdBR1JKLElBSFEsQ0FHeEJJLElBSHdCO0FBQUEsVUFHbEJDLEtBSGtCLEdBR1JMLElBSFEsQ0FHbEJLLEtBSGtCLEVBSWhDOztBQUNBLFVBQU1DLElBQUksR0FBR0wsS0FBSyxDQUFDTSxTQUFOLENBQWdCO0FBQUVDLGFBQUssRUFBRUMsdUVBQWdCQTtBQUF6QixPQUFoQixDQUFiO0FBQ0EsVUFBTUMsS0FBSyxHQUFHSixJQUFILGFBQUdBLElBQUgsZ0RBQUdBLElBQUksQ0FBRUssZ0JBQVQsMERBQUcsc0JBQXdCRCxLQUF0QztBQUNBLFVBQU1FLElBQUksR0FBR1IsSUFBSSxHQUFHQyxLQUFQLEdBQWUsQ0FBNUI7QUFDQSxVQUFNUSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxLQUFLLEdBQUdMLEtBQWxCLENBQWQsQ0FSZ0MsQ0FTaEM7O0FBQ0EsVUFBTVcsS0FBSyxHQUFHakIsUUFBUSxDQUFDa0IsS0FBVCxDQUFlYixJQUFmLEVBQXFCQSxJQUFJLEdBQUdDLEtBQTVCLEVBQW1DYSxNQUFuQyxDQUEwQyxVQUFDQyxDQUFEO0FBQUEsZUFBT0EsQ0FBUDtBQUFBLE9BQTFDLENBQWQsQ0FWZ0MsQ0FXaEM7O0FBQ0EsVUFBR0gsS0FBSyxDQUFDSSxNQUFOLEtBQWlCZixLQUFwQixFQUEyQjtBQUN2QjtBQUNBLGVBQU8sS0FBUDtBQUNIOztBQUFBLE9BZitCLENBZ0JoQzs7QUFDQSxVQUFHVyxLQUFLLENBQUNJLE1BQVQsRUFBaUI7QUFDYmxCLGVBQU8sQ0FBQ0MsR0FBUixpQ0FBcUNhLEtBQUssQ0FBQ0ksTUFBM0M7QUFDQSxlQUFPSixLQUFQO0FBQ0g7O0FBQUEsT0FwQitCLENBcUJoQzs7QUFDQSxhQUFPLEtBQVAsQ0F0QmdDLENBeUJoQztBQUNBO0FBQ0E7QUFDSCxLQTlCRTtBQStCSEssU0EvQkcsaUJBK0JHdEIsUUEvQkgsRUErQmF1QixRQS9CYixTQStCK0I7QUFBQSxVQUFQdEIsSUFBTyxTQUFQQSxJQUFPO0FBQzlCO0FBQ0FFLGFBQU8sQ0FBQ0MsR0FBUixzQ0FBMENtQixRQUFRLENBQUNGLE1BQW5ELEdBRjhCLENBRzlCOztBQUNBLFVBQU1HLE1BQU0sR0FBR3hCLFFBQVEsR0FBR0EsUUFBUSxDQUFDa0IsS0FBVCxDQUFlLENBQWYsQ0FBSCxHQUF1QixFQUE5QztBQUdIO0FBdENFLEdBQVA7QUF3Q0g7QUFBQSIsImZpbGUiOiIuL2xpYi9wYWdpbmF0aW9uRmllbGQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BBR0lOQVRJT05fUVVFUll9IGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2luYXRpb25GaWVsZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBrZXlBcmdzOiBmYWxzZSwgLy90ZWxscyBBcG9sbG8gd2Ugd2lsbCBkZWFsIHdpdGggdGhpc1xuICAgICAgICByZWFkKGV4aXN0aW5nID1bXSwgeyBhcmdzLCBjYWNoZSB9KSB7XG4gICAgICAgICAgICAvL0Fwb2xsbyBhc2tzIHJlYWQgZnVuY3Rpb24gZm9yIGFsbFByb2R1Y3RzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7ZXhpc3RpbmcsIGFyZ3MsIGNhY2hlfSk7XG4gICAgICAgICAgICBjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xuICAgICAgICAgICAgLy9yZWFkICMgb2YgaXRlbXMgb24gcGFnZSBmcm9tIGNhY2hlXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVhZFF1ZXJ5KHsgcXVlcnk6IFBBR0lOQVRJT05fUVVFUlkgfSk7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IGRhdGE/Ll9hbGxQcm9kdWN0c01ldGE/LmNvdW50O1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IHNraXAgLyBmaXJzdCArIDE7XG4gICAgICAgICAgICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbChjb3VudCAvIGZpcnN0KTtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBleGlzdGluZyBpdGVtcyBpbiBjYWNoZSwgYW5kIGZpbHRlciBvdXQgdW5kZWZpbmVkIGl0ZW1zXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGV4aXN0aW5nLnNsaWNlKHNraXAsIHNraXAgKyBmaXJzdCkuZmlsdGVyKCh4KSA9PiB4KTtcbiAgICAgICAgICAgIC8vaWYgbm8gaXRlbXMuLi5cbiAgICAgICAgICAgIGlmKGl0ZW1zLmxlbmd0aCAhPT0gZmlyc3QpIHtcbiAgICAgICAgICAgICAgICAvLyB0ZWxsIEFwb2xsbyB3ZSBoYXZlIG51dGhpbiBhbmQgdG8gZmV0Y2ggaXRlbXMgZnJvbSBuZXR3b3JrXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vaWYgdGhlcmUgYXJlIGl0ZW1zIGluIGNhY2hlLCBza2lwIHRoZSBuZXR3b3JrIHJlcXVlc3QgYW5kIHJldHVybiBmcm9tIGNhY2hlXG4gICAgICAgICAgICBpZihpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgdGhlIGNhY2hlIGFscmVhZHkgaGFzICR7aXRlbXMubGVuZ3RofSBpdGVtc2ApO1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtczsgIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGlmIGJvdGggSUZzIGRvbid0IHdvcmsuLi4gZmFsbCBiYWNrIHRvIG5ldHdvcmsgcmVxdWVzdFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vd2UgY2FuIGRvIDEgb2YgMiB0aGluZ3MuLi5cbiAgICAgICAgICAgIC8vIDEuIHJldHVybiB0aGUgaXRlbXMgdGhhdCBhcmUgYWxyZWFkeSBpbiBjYWNoZVxuICAgICAgICAgICAgLy8gb3IgMi4gcmV0dXJuICdmYWxzZScgdHJpZ2dlcmluZyBhIG5ldHdvcmsgcmVxdWVzdCBmb3IgdGhlIGl0ZW1zXG4gICAgICAgIH0sXG4gICAgICAgIG1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZywge2FyZ3N9KSB7XG4gICAgICAgICAgICAvLyB0aGlzIHJ1bnMgd2hlbiBBcG9sbG8gYnJpbmdzIGRhdGEgYmFjayBmcm9tIHRoZSBuZXR3b3JrIHJlcXVlc3RcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBtZXJnaW5nIGl0ZW1zIGZyb20gbmV0d29yayAke2luY29taW5nLmxlbmd0aH1gKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHtpbmNvbWluZ30pO1xuICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gZXhpc3RpbmcgPyBleGlzdGluZy5zbGljZSgwKSA6IFtdXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/paginationField.js\n");

/***/ })

})