webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return paginationField; });\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ \"./components/Pagination.js\");\n\nfunction paginationField() {\n  return {\n    keyArgs: false,\n    //tells Apollo we will deal with this\n    read: function read() {\n      var _data$_allProductsMet;\n\n      var existing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n      var _ref = arguments.length > 1 ? arguments[1] : undefined,\n          args = _ref.args,\n          cache = _ref.cache;\n\n      //Apollo asks read function for allProducts\n      console.log({\n        existing: existing,\n        args: args,\n        cache: cache\n      });\n      var skip = args.skip,\n          first = args.first; //read # of items on page from cache\n\n      var data = cache.readQuery({\n        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__[\"PAGINATION_QUERY\"]\n      });\n      var count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;\n      var page = skip / first + 1;\n      var pages = Math.ceil(count / first); // check if there are existing items in cache, and filter out undefined items\n\n      var items = existing.slice(skip, skip + first).filter(function (x) {\n        return x;\n      }); //if no items...\n\n      if (items.length !== first) {\n        // tell Apollo we have nuthin and to fetch items from network\n        return false;\n      }\n\n      ; //if there are items in cache, skip the network request and return from cache\n\n      if (items.length) {\n        console.log(\"the cache already has \".concat(items.length, \" items\"));\n        return items;\n      }\n\n      ; // if both IFs don't work... fall back to network request\n\n      return false; //we can do 1 of 2 things...\n      // 1. return the items that are already in cache\n      // or 2. return 'false' triggering a network request for the items\n    },\n    merge: function merge(existing, incoming, _ref2) {\n      var args = _ref2.args;\n      // this runs when Apollo brings data back from the network request\n      console.log(\"merging items from network \".concat(incoming.length));\n      log;\n    }\n  };\n}\n;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcz85NDQwIl0sIm5hbWVzIjpbInBhZ2luYXRpb25GaWVsZCIsImtleUFyZ3MiLCJyZWFkIiwiZXhpc3RpbmciLCJhcmdzIiwiY2FjaGUiLCJjb25zb2xlIiwibG9nIiwic2tpcCIsImZpcnN0IiwiZGF0YSIsInJlYWRRdWVyeSIsInF1ZXJ5IiwiUEFHSU5BVElPTl9RVUVSWSIsImNvdW50IiwiX2FsbFByb2R1Y3RzTWV0YSIsInBhZ2UiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwiaXRlbXMiLCJzbGljZSIsImZpbHRlciIsIngiLCJsZW5ndGgiLCJtZXJnZSIsImluY29taW5nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNBLGVBQVQsR0FBMkI7QUFDdEMsU0FBTztBQUNIQyxXQUFPLEVBQUUsS0FETjtBQUNhO0FBQ2hCQyxRQUZHLGtCQUVpQztBQUFBOztBQUFBLFVBQS9CQyxRQUErQix1RUFBckIsRUFBcUI7O0FBQUE7QUFBQSxVQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxVQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQ2hDO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNKLGdCQUFRLEVBQVJBLFFBQUQ7QUFBV0MsWUFBSSxFQUFKQSxJQUFYO0FBQWlCQyxhQUFLLEVBQUxBO0FBQWpCLE9BQVo7QUFGZ0MsVUFHeEJHLElBSHdCLEdBR1JKLElBSFEsQ0FHeEJJLElBSHdCO0FBQUEsVUFHbEJDLEtBSGtCLEdBR1JMLElBSFEsQ0FHbEJLLEtBSGtCLEVBSWhDOztBQUNBLFVBQU1DLElBQUksR0FBR0wsS0FBSyxDQUFDTSxTQUFOLENBQWdCO0FBQUVDLGFBQUssRUFBRUMsdUVBQWdCQTtBQUF6QixPQUFoQixDQUFiO0FBQ0EsVUFBTUMsS0FBSyxHQUFHSixJQUFILGFBQUdBLElBQUgsZ0RBQUdBLElBQUksQ0FBRUssZ0JBQVQsMERBQUcsc0JBQXdCRCxLQUF0QztBQUNBLFVBQU1FLElBQUksR0FBR1IsSUFBSSxHQUFHQyxLQUFQLEdBQWUsQ0FBNUI7QUFDQSxVQUFNUSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxLQUFLLEdBQUdMLEtBQWxCLENBQWQsQ0FSZ0MsQ0FTaEM7O0FBQ0EsVUFBTVcsS0FBSyxHQUFHakIsUUFBUSxDQUFDa0IsS0FBVCxDQUFlYixJQUFmLEVBQXFCQSxJQUFJLEdBQUdDLEtBQTVCLEVBQW1DYSxNQUFuQyxDQUEwQyxVQUFDQyxDQUFEO0FBQUEsZUFBT0EsQ0FBUDtBQUFBLE9BQTFDLENBQWQsQ0FWZ0MsQ0FXaEM7O0FBQ0EsVUFBR0gsS0FBSyxDQUFDSSxNQUFOLEtBQWlCZixLQUFwQixFQUEyQjtBQUN2QjtBQUNBLGVBQU8sS0FBUDtBQUNIOztBQUFBLE9BZitCLENBZ0JoQzs7QUFDQSxVQUFHVyxLQUFLLENBQUNJLE1BQVQsRUFBaUI7QUFDYmxCLGVBQU8sQ0FBQ0MsR0FBUixpQ0FBcUNhLEtBQUssQ0FBQ0ksTUFBM0M7QUFDQSxlQUFPSixLQUFQO0FBQ0g7O0FBQUEsT0FwQitCLENBcUJoQzs7QUFDQSxhQUFPLEtBQVAsQ0F0QmdDLENBeUJoQztBQUNBO0FBQ0E7QUFDSCxLQTlCRTtBQStCSEssU0EvQkcsaUJBK0JHdEIsUUEvQkgsRUErQmF1QixRQS9CYixTQStCK0I7QUFBQSxVQUFQdEIsSUFBTyxTQUFQQSxJQUFPO0FBQzlCO0FBQ0FFLGFBQU8sQ0FBQ0MsR0FBUixzQ0FBMENtQixRQUFRLENBQUNGLE1BQW5EO0FBQ0FqQixTQUFHO0FBRU47QUFwQ0UsR0FBUDtBQXNDSDtBQUFBIiwiZmlsZSI6Ii4vbGliL3BhZ2luYXRpb25GaWVsZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UEFHSU5BVElPTl9RVUVSWX0gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnaW5hdGlvbkZpZWxkKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGtleUFyZ3M6IGZhbHNlLCAvL3RlbGxzIEFwb2xsbyB3ZSB3aWxsIGRlYWwgd2l0aCB0aGlzXG4gICAgICAgIHJlYWQoZXhpc3RpbmcgPVtdLCB7IGFyZ3MsIGNhY2hlIH0pIHtcbiAgICAgICAgICAgIC8vQXBvbGxvIGFza3MgcmVhZCBmdW5jdGlvbiBmb3IgYWxsUHJvZHVjdHNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtleGlzdGluZywgYXJncywgY2FjaGV9KTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2tpcCwgZmlyc3QgfSA9IGFyZ3M7XG4gICAgICAgICAgICAvL3JlYWQgIyBvZiBpdGVtcyBvbiBwYWdlIGZyb20gY2FjaGVcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZWFkUXVlcnkoeyBxdWVyeTogUEFHSU5BVElPTl9RVUVSWSB9KTtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gZGF0YT8uX2FsbFByb2R1Y3RzTWV0YT8uY291bnQ7XG4gICAgICAgICAgICBjb25zdCBwYWdlID0gc2tpcCAvIGZpcnN0ICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VzID0gTWF0aC5jZWlsKGNvdW50IC8gZmlyc3QpO1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgYXJlIGV4aXN0aW5nIGl0ZW1zIGluIGNhY2hlLCBhbmQgZmlsdGVyIG91dCB1bmRlZmluZWQgaXRlbXNcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gZXhpc3Rpbmcuc2xpY2Uoc2tpcCwgc2tpcCArIGZpcnN0KS5maWx0ZXIoKHgpID0+IHgpO1xuICAgICAgICAgICAgLy9pZiBubyBpdGVtcy4uLlxuICAgICAgICAgICAgaWYoaXRlbXMubGVuZ3RoICE9PSBmaXJzdCkge1xuICAgICAgICAgICAgICAgIC8vIHRlbGwgQXBvbGxvIHdlIGhhdmUgbnV0aGluIGFuZCB0byBmZXRjaCBpdGVtcyBmcm9tIG5ldHdvcmtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy9pZiB0aGVyZSBhcmUgaXRlbXMgaW4gY2FjaGUsIHNraXAgdGhlIG5ldHdvcmsgcmVxdWVzdCBhbmQgcmV0dXJuIGZyb20gY2FjaGVcbiAgICAgICAgICAgIGlmKGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0aGUgY2FjaGUgYWxyZWFkeSBoYXMgJHtpdGVtcy5sZW5ndGh9IGl0ZW1zYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zOyAgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gaWYgYm90aCBJRnMgZG9uJ3Qgd29yay4uLiBmYWxsIGJhY2sgdG8gbmV0d29yayByZXF1ZXN0XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy93ZSBjYW4gZG8gMSBvZiAyIHRoaW5ncy4uLlxuICAgICAgICAgICAgLy8gMS4gcmV0dXJuIHRoZSBpdGVtcyB0aGF0IGFyZSBhbHJlYWR5IGluIGNhY2hlXG4gICAgICAgICAgICAvLyBvciAyLiByZXR1cm4gJ2ZhbHNlJyB0cmlnZ2VyaW5nIGEgbmV0d29yayByZXF1ZXN0IGZvciB0aGUgaXRlbXNcbiAgICAgICAgfSxcbiAgICAgICAgbWVyZ2UoZXhpc3RpbmcsIGluY29taW5nLCB7YXJnc30pIHtcbiAgICAgICAgICAgIC8vIHRoaXMgcnVucyB3aGVuIEFwb2xsbyBicmluZ3MgZGF0YSBiYWNrIGZyb20gdGhlIG5ldHdvcmsgcmVxdWVzdFxuICAgICAgICAgICAgY29uc29sZS5sb2coYG1lcmdpbmcgaXRlbXMgZnJvbSBuZXR3b3JrICR7aW5jb21pbmcubGVuZ3RofWApO1xuICAgICAgICAgICAgbG9nXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/paginationField.js\n");

/***/ })

})