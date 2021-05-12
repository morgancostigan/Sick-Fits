webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return paginationField; });\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ \"./components/Pagination.js\");\n\nfunction paginationField() {\n  return {\n    keyArgs: false,\n    // tells apollo we will take care of everything\n    read: function read() {\n      var _data$_allProductsMet;\n\n      var existing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n      var _ref = arguments.length > 1 ? arguments[1] : undefined,\n          args = _ref.args,\n          cache = _ref.cache;\n\n      // console.log({ existing, args, cache });\n      var skip = args.skip,\n          first = args.first; // Read the number of items on the page from the cache\n\n      var data = cache.readQuery({\n        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__[\"PAGINATION_QUERY\"]\n      });\n      var count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;\n      var page = skip / first + 1;\n      var pages = Math.ceil(count / first); // Check if we have existing items\n\n      var items = existing.slice(skip, skip + first).filter(function (x) {\n        return x;\n      }); // If\n      // There are items\n      // AND there aren't enough items to satisfy how many were requested\n      // AND we are on the last page\n      // THEN JUST SEND IT\n\n      if (items.length && items.length !== first && page === pages) {\n        return items;\n      }\n\n      if (items.length !== first) {\n        // We don't have any items, we must go to the network to fetch them\n        return false;\n      } // If there are items, just reutrn them from the cache, and we don't need to go to the network\n\n\n      if (items.length) {\n        // console.log(\n        //   `There are ${items.length} items in the cache! Gonna send them to apollo`\n        // );\n        return items;\n      }\n\n      return false; // fallback to network\n      // First thing it does it asks the read function for those items.\n      // We can either do one of two things:\n      // First things we can do is return the items because they are already in the cache\n      // The other thing we can do is to return false from here, (network request)\n    },\n    merge: function merge(existing, incoming, _ref2) {\n      var args = _ref2.args;\n      //grab skip and first values\n      var skip = args.skip,\n          first = args.first; // this runs when Apollo brings data back from the network request\n\n      console.log(\"merging items from network \".concat(incoming.length)); // console.log({incoming});\n      //if anything in the cache, merged is the existing, otherwise it's an empty array\n\n      var merged = existing ? existing.slice(0) : []; //leave room for previous items, in case we are linked to a later page and the previous entries aren't in the cache\n\n      for (var i = skip; i > skip + incoming.length; ++i) {\n        merged[i] = incoming[i - skip];\n      }\n\n      ;\n      console.log({\n        merged: merged\n      }); //return merged itemd from cache, which automatically refires read fucntion\n\n      return merged;\n    }\n  };\n}\n;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcz85NDQwIl0sIm5hbWVzIjpbInBhZ2luYXRpb25GaWVsZCIsImtleUFyZ3MiLCJyZWFkIiwiZXhpc3RpbmciLCJhcmdzIiwiY2FjaGUiLCJza2lwIiwiZmlyc3QiLCJkYXRhIiwicmVhZFF1ZXJ5IiwicXVlcnkiLCJQQUdJTkFUSU9OX1FVRVJZIiwiY291bnQiLCJfYWxsUHJvZHVjdHNNZXRhIiwicGFnZSIsInBhZ2VzIiwiTWF0aCIsImNlaWwiLCJpdGVtcyIsInNsaWNlIiwiZmlsdGVyIiwieCIsImxlbmd0aCIsIm1lcmdlIiwiaW5jb21pbmciLCJjb25zb2xlIiwibG9nIiwibWVyZ2VkIiwiaSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxTQUFTQSxlQUFULEdBQTJCO0FBQ3RDLFNBQU87QUFDSEMsV0FBTyxFQUFFLEtBRE47QUFDYTtBQUNoQkMsUUFGRyxrQkFFa0M7QUFBQTs7QUFBQSxVQUFoQ0MsUUFBZ0MsdUVBQXJCLEVBQXFCOztBQUFBO0FBQUEsVUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQUEsVUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUNqQztBQURpQyxVQUV6QkMsSUFGeUIsR0FFVEYsSUFGUyxDQUV6QkUsSUFGeUI7QUFBQSxVQUVuQkMsS0FGbUIsR0FFVEgsSUFGUyxDQUVuQkcsS0FGbUIsRUFJakM7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHSCxLQUFLLENBQUNJLFNBQU4sQ0FBZ0I7QUFBRUMsYUFBSyxFQUFFQyx1RUFBZ0JBO0FBQXpCLE9BQWhCLENBQWI7QUFDQSxVQUFNQyxLQUFLLEdBQUdKLElBQUgsYUFBR0EsSUFBSCxnREFBR0EsSUFBSSxDQUFFSyxnQkFBVCwwREFBRyxzQkFBd0JELEtBQXRDO0FBQ0EsVUFBTUUsSUFBSSxHQUFHUixJQUFJLEdBQUdDLEtBQVAsR0FBZSxDQUE1QjtBQUNBLFVBQU1RLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVMLEtBQUssR0FBR0wsS0FBbEIsQ0FBZCxDQVJpQyxDQVVqQzs7QUFDQSxVQUFNVyxLQUFLLEdBQUdmLFFBQVEsQ0FBQ2dCLEtBQVQsQ0FBZWIsSUFBZixFQUFxQkEsSUFBSSxHQUFHQyxLQUE1QixFQUFtQ2EsTUFBbkMsQ0FBMEMsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQVA7QUFBQSxPQUExQyxDQUFkLENBWGlDLENBWWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBSUgsS0FBSyxDQUFDSSxNQUFOLElBQWdCSixLQUFLLENBQUNJLE1BQU4sS0FBaUJmLEtBQWpDLElBQTBDTyxJQUFJLEtBQUtDLEtBQXZELEVBQThEO0FBQzFELGVBQU9HLEtBQVA7QUFDSDs7QUFDRCxVQUFJQSxLQUFLLENBQUNJLE1BQU4sS0FBaUJmLEtBQXJCLEVBQTRCO0FBQ3hCO0FBQ0EsZUFBTyxLQUFQO0FBQ0gsT0F4QmdDLENBMEJqQzs7O0FBQ0EsVUFBSVcsS0FBSyxDQUFDSSxNQUFWLEVBQWtCO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsZUFBT0osS0FBUDtBQUNIOztBQUVELGFBQU8sS0FBUCxDQWxDaUMsQ0FrQ25CO0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDSCxLQTFDRTtBQTJDSEssU0EzQ0csaUJBMkNHcEIsUUEzQ0gsRUEyQ2FxQixRQTNDYixTQTJDK0I7QUFBQSxVQUFQcEIsSUFBTyxTQUFQQSxJQUFPO0FBQzlCO0FBRDhCLFVBRXRCRSxJQUZzQixHQUVORixJQUZNLENBRXRCRSxJQUZzQjtBQUFBLFVBRWhCQyxLQUZnQixHQUVOSCxJQUZNLENBRWhCRyxLQUZnQixFQUc5Qjs7QUFDQWtCLGFBQU8sQ0FBQ0MsR0FBUixzQ0FBMENGLFFBQVEsQ0FBQ0YsTUFBbkQsR0FKOEIsQ0FLOUI7QUFDQTs7QUFDQSxVQUFNSyxNQUFNLEdBQUd4QixRQUFRLEdBQUdBLFFBQVEsQ0FBQ2dCLEtBQVQsQ0FBZSxDQUFmLENBQUgsR0FBdUIsRUFBOUMsQ0FQOEIsQ0FROUI7O0FBQ0EsV0FBSyxJQUFJUyxDQUFDLEdBQUd0QixJQUFiLEVBQW1Cc0IsQ0FBQyxHQUFHdEIsSUFBSSxHQUFHa0IsUUFBUSxDQUFDRixNQUF2QyxFQUErQyxFQUFFTSxDQUFqRCxFQUFvRDtBQUNoREQsY0FBTSxDQUFDQyxDQUFELENBQU4sR0FBWUosUUFBUSxDQUFFSSxDQUFDLEdBQUd0QixJQUFOLENBQXBCO0FBQ0g7O0FBQUE7QUFDRG1CLGFBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNDLGNBQU0sRUFBTkE7QUFBRCxPQUFaLEVBWjhCLENBYTlCOztBQUNBLGFBQU9BLE1BQVA7QUFHSDtBQTVERSxHQUFQO0FBOERIO0FBQUEiLCJmaWxlIjoiLi9saWIvcGFnaW5hdGlvbkZpZWxkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUEFHSU5BVElPTl9RVUVSWSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2luYXRpb25GaWVsZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBrZXlBcmdzOiBmYWxzZSwgLy8gdGVsbHMgYXBvbGxvIHdlIHdpbGwgdGFrZSBjYXJlIG9mIGV2ZXJ5dGhpbmdcbiAgICAgICAgcmVhZChleGlzdGluZyA9IFtdLCB7IGFyZ3MsIGNhY2hlIH0pIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHsgZXhpc3RpbmcsIGFyZ3MsIGNhY2hlIH0pO1xuICAgICAgICAgICAgY29uc3QgeyBza2lwLCBmaXJzdCB9ID0gYXJncztcblxuICAgICAgICAgICAgLy8gUmVhZCB0aGUgbnVtYmVyIG9mIGl0ZW1zIG9uIHRoZSBwYWdlIGZyb20gdGhlIGNhY2hlXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVhZFF1ZXJ5KHsgcXVlcnk6IFBBR0lOQVRJT05fUVVFUlkgfSk7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IGRhdGE/Ll9hbGxQcm9kdWN0c01ldGE/LmNvdW50O1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IHNraXAgLyBmaXJzdCArIDE7XG4gICAgICAgICAgICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbChjb3VudCAvIGZpcnN0KTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBleGlzdGluZyBpdGVtc1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBleGlzdGluZy5zbGljZShza2lwLCBza2lwICsgZmlyc3QpLmZpbHRlcigoeCkgPT4geCk7XG4gICAgICAgICAgICAvLyBJZlxuICAgICAgICAgICAgLy8gVGhlcmUgYXJlIGl0ZW1zXG4gICAgICAgICAgICAvLyBBTkQgdGhlcmUgYXJlbid0IGVub3VnaCBpdGVtcyB0byBzYXRpc2Z5IGhvdyBtYW55IHdlcmUgcmVxdWVzdGVkXG4gICAgICAgICAgICAvLyBBTkQgd2UgYXJlIG9uIHRoZSBsYXN0IHBhZ2VcbiAgICAgICAgICAgIC8vIFRIRU4gSlVTVCBTRU5EIElUXG5cbiAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggJiYgaXRlbXMubGVuZ3RoICE9PSBmaXJzdCAmJiBwYWdlID09PSBwYWdlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggIT09IGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgaGF2ZSBhbnkgaXRlbXMsIHdlIG11c3QgZ28gdG8gdGhlIG5ldHdvcmsgdG8gZmV0Y2ggdGhlbVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIGl0ZW1zLCBqdXN0IHJldXRybiB0aGVtIGZyb20gdGhlIGNhY2hlLCBhbmQgd2UgZG9uJ3QgbmVlZCB0byBnbyB0byB0aGUgbmV0d29ya1xuICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIC8vICAgYFRoZXJlIGFyZSAke2l0ZW1zLmxlbmd0aH0gaXRlbXMgaW4gdGhlIGNhY2hlISBHb25uYSBzZW5kIHRoZW0gdG8gYXBvbGxvYFxuICAgICAgICAgICAgICAgIC8vICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGZhbGxiYWNrIHRvIG5ldHdvcmtcblxuICAgICAgICAgICAgLy8gRmlyc3QgdGhpbmcgaXQgZG9lcyBpdCBhc2tzIHRoZSByZWFkIGZ1bmN0aW9uIGZvciB0aG9zZSBpdGVtcy5cbiAgICAgICAgICAgIC8vIFdlIGNhbiBlaXRoZXIgZG8gb25lIG9mIHR3byB0aGluZ3M6XG4gICAgICAgICAgICAvLyBGaXJzdCB0aGluZ3Mgd2UgY2FuIGRvIGlzIHJldHVybiB0aGUgaXRlbXMgYmVjYXVzZSB0aGV5IGFyZSBhbHJlYWR5IGluIHRoZSBjYWNoZVxuICAgICAgICAgICAgLy8gVGhlIG90aGVyIHRoaW5nIHdlIGNhbiBkbyBpcyB0byByZXR1cm4gZmFsc2UgZnJvbSBoZXJlLCAobmV0d29yayByZXF1ZXN0KVxuICAgICAgICB9LFxuICAgICAgICBtZXJnZShleGlzdGluZywgaW5jb21pbmcsIHthcmdzfSkge1xuICAgICAgICAgICAgLy9ncmFiIHNraXAgYW5kIGZpcnN0IHZhbHVlc1xuICAgICAgICAgICAgY29uc3QgeyBza2lwLCBmaXJzdCB9ID0gYXJncztcbiAgICAgICAgICAgIC8vIHRoaXMgcnVucyB3aGVuIEFwb2xsbyBicmluZ3MgZGF0YSBiYWNrIGZyb20gdGhlIG5ldHdvcmsgcmVxdWVzdFxuICAgICAgICAgICAgY29uc29sZS5sb2coYG1lcmdpbmcgaXRlbXMgZnJvbSBuZXR3b3JrICR7aW5jb21pbmcubGVuZ3RofWApO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coe2luY29taW5nfSk7XG4gICAgICAgICAgICAvL2lmIGFueXRoaW5nIGluIHRoZSBjYWNoZSwgbWVyZ2VkIGlzIHRoZSBleGlzdGluZywgb3RoZXJ3aXNlIGl0J3MgYW4gZW1wdHkgYXJyYXlcbiAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IGV4aXN0aW5nID8gZXhpc3Rpbmcuc2xpY2UoMCkgOiBbXTtcbiAgICAgICAgICAgIC8vbGVhdmUgcm9vbSBmb3IgcHJldmlvdXMgaXRlbXMsIGluIGNhc2Ugd2UgYXJlIGxpbmtlZCB0byBhIGxhdGVyIHBhZ2UgYW5kIHRoZSBwcmV2aW91cyBlbnRyaWVzIGFyZW4ndCBpbiB0aGUgY2FjaGVcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBza2lwOyBpID4gc2tpcCArIGluY29taW5nLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkW2ldID0gaW5jb21pbmcgW2kgLSBza2lwXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHttZXJnZWR9KTtcbiAgICAgICAgICAgIC8vcmV0dXJuIG1lcmdlZCBpdGVtZCBmcm9tIGNhY2hlLCB3aGljaCBhdXRvbWF0aWNhbGx5IHJlZmlyZXMgcmVhZCBmdWNudGlvblxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9O1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/paginationField.js\n");

/***/ })

})