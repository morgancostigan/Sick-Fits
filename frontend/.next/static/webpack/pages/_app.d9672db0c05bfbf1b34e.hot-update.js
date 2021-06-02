/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ paginationField; }\n/* harmony export */ });\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ \"./components/Pagination.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction paginationField() {\n  return {\n    keyArgs: false,\n    //tells Apollo we will deal with this\n    read: function read() {\n      var _data$_allProductsMet;\n\n      var existing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n      var _ref = arguments.length > 1 ? arguments[1] : undefined,\n          args = _ref.args,\n          cache = _ref.cache;\n\n      //Apollo asks read function for allProducts\n      // console.log({existing, args, cache});\n      var skip = args.skip,\n          first = args.first; //read # of items on page from cache\n\n      var data = cache.readQuery({\n        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__.PAGINATION_QUERY\n      });\n      var count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;\n      var page = skip / first + 1;\n      var pages = Math.ceil(count / first); // check if there are existing items in cache, and filter out undefined items\n\n      var items = existing.slice(skip, skip + first).filter(function (x) {\n        return x;\n      }); //if there are items, but not as many as the `first` value, and we are on the last page, send partial page anyway  \n\n      if (items.length && items.length !== first && page === pages) {\n        return items;\n      } //if no items...\n\n\n      if (items.length !== first) {\n        // tell Apollo we have nuthin and to fetch items from network\n        return false;\n      }\n\n      ; //if there are items in cache, skip the network request and return from cache\n\n      if (items.length) {\n        // console.log(`the cache already has ${items.length} items`);\n        return items;\n      }\n\n      ; // if both IFs don't work... fall back to network request\n\n      return false; //we can do 1 of 2 things...\n      // 1. return the items that are already in cache\n      // or 2. return 'false' triggering a network request for the items\n    },\n    merge: function merge(existing, incoming, _ref2) {\n      var args = _ref2.args;\n      //grab skip and first values\n      var skip = args.skip,\n          first = args.first; // this runs when Apollo brings data back from the network request\n      // console.log(`merging items from network ${incoming.length}`);\n      // console.log({incoming});\n      //if anything in the cache, merged is the existing, otherwise it's an empty array\n\n      var merged = existing ? existing.slice(0) : []; //leave room for previous items, in case we are linked to a later page and the previous entries aren't in the cache\n\n      for (var i = skip; i < skip + incoming.length; ++i) {\n        merged[i] = incoming[i - skip];\n      }\n\n      ; // console.log({merged});\n      //return merged itemd from cache, which automatically refires read fucntion\n\n      return merged;\n    }\n  };\n}\n;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcz85NDQwIl0sIm5hbWVzIjpbInBhZ2luYXRpb25GaWVsZCIsImtleUFyZ3MiLCJyZWFkIiwiZXhpc3RpbmciLCJhcmdzIiwiY2FjaGUiLCJza2lwIiwiZmlyc3QiLCJkYXRhIiwicmVhZFF1ZXJ5IiwicXVlcnkiLCJQQUdJTkFUSU9OX1FVRVJZIiwiY291bnQiLCJfYWxsUHJvZHVjdHNNZXRhIiwicGFnZSIsInBhZ2VzIiwiTWF0aCIsImNlaWwiLCJpdGVtcyIsInNsaWNlIiwiZmlsdGVyIiwieCIsImxlbmd0aCIsIm1lcmdlIiwiaW5jb21pbmciLCJtZXJnZWQiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVlLFNBQVNBLGVBQVQsR0FBMkI7QUFDdEMsU0FBTztBQUNIQyxXQUFPLEVBQUUsS0FETjtBQUNhO0FBQ2hCQyxRQUZHLGtCQUVpQztBQUFBOztBQUFBLFVBQS9CQyxRQUErQix1RUFBckIsRUFBcUI7O0FBQUE7QUFBQSxVQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxVQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQ2hDO0FBQ0E7QUFGZ0MsVUFHeEJDLElBSHdCLEdBR1JGLElBSFEsQ0FHeEJFLElBSHdCO0FBQUEsVUFHbEJDLEtBSGtCLEdBR1JILElBSFEsQ0FHbEJHLEtBSGtCLEVBSWhDOztBQUNBLFVBQU1DLElBQUksR0FBR0gsS0FBSyxDQUFDSSxTQUFOLENBQWdCO0FBQUVDLGFBQUssRUFBRUMsb0VBQWdCQTtBQUF6QixPQUFoQixDQUFiO0FBQ0EsVUFBTUMsS0FBSyxHQUFHSixJQUFILGFBQUdBLElBQUgsZ0RBQUdBLElBQUksQ0FBRUssZ0JBQVQsMERBQUcsc0JBQXdCRCxLQUF0QztBQUNBLFVBQU1FLElBQUksR0FBR1IsSUFBSSxHQUFHQyxLQUFQLEdBQWUsQ0FBNUI7QUFDQSxVQUFNUSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxLQUFLLEdBQUdMLEtBQWxCLENBQWQsQ0FSZ0MsQ0FTaEM7O0FBQ0EsVUFBTVcsS0FBSyxHQUFHZixRQUFRLENBQUNnQixLQUFULENBQWViLElBQWYsRUFBcUJBLElBQUksR0FBR0MsS0FBNUIsRUFBbUNhLE1BQW5DLENBQTBDLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFQO0FBQUEsT0FBMUMsQ0FBZCxDQVZnQyxDQVdoQzs7QUFDQSxVQUFHSCxLQUFLLENBQUNJLE1BQU4sSUFBZ0JKLEtBQUssQ0FBQ0ksTUFBTixLQUFpQmYsS0FBakMsSUFBMENPLElBQUksS0FBS0MsS0FBdEQsRUFBNkQ7QUFDekQsZUFBT0csS0FBUDtBQUNILE9BZCtCLENBZWhDOzs7QUFDQSxVQUFHQSxLQUFLLENBQUNJLE1BQU4sS0FBaUJmLEtBQXBCLEVBQTJCO0FBQ3ZCO0FBQ0EsZUFBTyxLQUFQO0FBQ0g7O0FBQUEsT0FuQitCLENBb0JoQzs7QUFDQSxVQUFHVyxLQUFLLENBQUNJLE1BQVQsRUFBaUI7QUFDYjtBQUNBLGVBQU9KLEtBQVA7QUFDSDs7QUFBQSxPQXhCK0IsQ0F5QmhDOztBQUNBLGFBQU8sS0FBUCxDQTFCZ0MsQ0E2QmhDO0FBQ0E7QUFDQTtBQUNILEtBbENFO0FBbUNISyxTQW5DRyxpQkFtQ0dwQixRQW5DSCxFQW1DYXFCLFFBbkNiLFNBbUMrQjtBQUFBLFVBQVBwQixJQUFPLFNBQVBBLElBQU87QUFDOUI7QUFEOEIsVUFFdEJFLElBRnNCLEdBRU5GLElBRk0sQ0FFdEJFLElBRnNCO0FBQUEsVUFFaEJDLEtBRmdCLEdBRU5ILElBRk0sQ0FFaEJHLEtBRmdCLEVBRzlCO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFVBQU1rQixNQUFNLEdBQUd0QixRQUFRLEdBQUdBLFFBQVEsQ0FBQ2dCLEtBQVQsQ0FBZSxDQUFmLENBQUgsR0FBdUIsRUFBOUMsQ0FQOEIsQ0FROUI7O0FBQ0EsV0FBSyxJQUFJTyxDQUFDLEdBQUdwQixJQUFiLEVBQW1Cb0IsQ0FBQyxHQUFJcEIsSUFBSSxHQUFHa0IsUUFBUSxDQUFDRixNQUF4QyxFQUFnRCxFQUFFSSxDQUFsRCxFQUFxRDtBQUNqREQsY0FBTSxDQUFDQyxDQUFELENBQU4sR0FBWUYsUUFBUSxDQUFFRSxDQUFDLEdBQUdwQixJQUFOLENBQXBCO0FBQ0g7O0FBQUEsT0FYNkIsQ0FZOUI7QUFDQTs7QUFDQSxhQUFPbUIsTUFBUDtBQUdIO0FBcERFLEdBQVA7QUFzREg7QUFBQSIsImZpbGUiOiIuL2xpYi9wYWdpbmF0aW9uRmllbGQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BBR0lOQVRJT05fUVVFUll9IGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2luYXRpb25GaWVsZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBrZXlBcmdzOiBmYWxzZSwgLy90ZWxscyBBcG9sbG8gd2Ugd2lsbCBkZWFsIHdpdGggdGhpc1xuICAgICAgICByZWFkKGV4aXN0aW5nID1bXSwgeyBhcmdzLCBjYWNoZSB9KSB7XG4gICAgICAgICAgICAvL0Fwb2xsbyBhc2tzIHJlYWQgZnVuY3Rpb24gZm9yIGFsbFByb2R1Y3RzXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7ZXhpc3RpbmcsIGFyZ3MsIGNhY2hlfSk7XG4gICAgICAgICAgICBjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xuICAgICAgICAgICAgLy9yZWFkICMgb2YgaXRlbXMgb24gcGFnZSBmcm9tIGNhY2hlXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVhZFF1ZXJ5KHsgcXVlcnk6IFBBR0lOQVRJT05fUVVFUlkgfSk7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IGRhdGE/Ll9hbGxQcm9kdWN0c01ldGE/LmNvdW50O1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IHNraXAgLyBmaXJzdCArIDE7XG4gICAgICAgICAgICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbChjb3VudCAvIGZpcnN0KTtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBleGlzdGluZyBpdGVtcyBpbiBjYWNoZSwgYW5kIGZpbHRlciBvdXQgdW5kZWZpbmVkIGl0ZW1zXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGV4aXN0aW5nLnNsaWNlKHNraXAsIHNraXAgKyBmaXJzdCkuZmlsdGVyKCh4KSA9PiB4KTtcbiAgICAgICAgICAgIC8vaWYgdGhlcmUgYXJlIGl0ZW1zLCBidXQgbm90IGFzIG1hbnkgYXMgdGhlIGBmaXJzdGAgdmFsdWUsIGFuZCB3ZSBhcmUgb24gdGhlIGxhc3QgcGFnZSwgc2VuZCBwYXJ0aWFsIHBhZ2UgYW55d2F5ICBcbiAgICAgICAgICAgIGlmKGl0ZW1zLmxlbmd0aCAmJiBpdGVtcy5sZW5ndGggIT09IGZpcnN0ICYmIHBhZ2UgPT09IHBhZ2VzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiBubyBpdGVtcy4uLlxuICAgICAgICAgICAgaWYoaXRlbXMubGVuZ3RoICE9PSBmaXJzdCkge1xuICAgICAgICAgICAgICAgIC8vIHRlbGwgQXBvbGxvIHdlIGhhdmUgbnV0aGluIGFuZCB0byBmZXRjaCBpdGVtcyBmcm9tIG5ldHdvcmtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy9pZiB0aGVyZSBhcmUgaXRlbXMgaW4gY2FjaGUsIHNraXAgdGhlIG5ldHdvcmsgcmVxdWVzdCBhbmQgcmV0dXJuIGZyb20gY2FjaGVcbiAgICAgICAgICAgIGlmKGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGB0aGUgY2FjaGUgYWxyZWFkeSBoYXMgJHtpdGVtcy5sZW5ndGh9IGl0ZW1zYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zOyAgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gaWYgYm90aCBJRnMgZG9uJ3Qgd29yay4uLiBmYWxsIGJhY2sgdG8gbmV0d29yayByZXF1ZXN0XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy93ZSBjYW4gZG8gMSBvZiAyIHRoaW5ncy4uLlxuICAgICAgICAgICAgLy8gMS4gcmV0dXJuIHRoZSBpdGVtcyB0aGF0IGFyZSBhbHJlYWR5IGluIGNhY2hlXG4gICAgICAgICAgICAvLyBvciAyLiByZXR1cm4gJ2ZhbHNlJyB0cmlnZ2VyaW5nIGEgbmV0d29yayByZXF1ZXN0IGZvciB0aGUgaXRlbXNcbiAgICAgICAgfSxcbiAgICAgICAgbWVyZ2UoZXhpc3RpbmcsIGluY29taW5nLCB7YXJnc30pIHtcbiAgICAgICAgICAgIC8vZ3JhYiBza2lwIGFuZCBmaXJzdCB2YWx1ZXNcbiAgICAgICAgICAgIGNvbnN0IHsgc2tpcCwgZmlyc3QgfSA9IGFyZ3M7XG4gICAgICAgICAgICAvLyB0aGlzIHJ1bnMgd2hlbiBBcG9sbG8gYnJpbmdzIGRhdGEgYmFjayBmcm9tIHRoZSBuZXR3b3JrIHJlcXVlc3RcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBtZXJnaW5nIGl0ZW1zIGZyb20gbmV0d29yayAke2luY29taW5nLmxlbmd0aH1gKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHtpbmNvbWluZ30pO1xuICAgICAgICAgICAgLy9pZiBhbnl0aGluZyBpbiB0aGUgY2FjaGUsIG1lcmdlZCBpcyB0aGUgZXhpc3RpbmcsIG90aGVyd2lzZSBpdCdzIGFuIGVtcHR5IGFycmF5XG4gICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBleGlzdGluZyA/IGV4aXN0aW5nLnNsaWNlKDApIDogW107XG4gICAgICAgICAgICAvL2xlYXZlIHJvb20gZm9yIHByZXZpb3VzIGl0ZW1zLCBpbiBjYXNlIHdlIGFyZSBsaW5rZWQgdG8gYSBsYXRlciBwYWdlIGFuZCB0aGUgcHJldmlvdXMgZW50cmllcyBhcmVuJ3QgaW4gdGhlIGNhY2hlXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc2tpcDsgaSA8ICBza2lwICsgaW5jb21pbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRbaV0gPSBpbmNvbWluZyBbaSAtIHNraXBdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coe21lcmdlZH0pO1xuICAgICAgICAgICAgLy9yZXR1cm4gbWVyZ2VkIGl0ZW1kIGZyb20gY2FjaGUsIHdoaWNoIGF1dG9tYXRpY2FsbHkgcmVmaXJlcyByZWFkIGZ1Y250aW9uXG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/paginationField.js\n");

/***/ })

});