webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return paginationField; });\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ \"./components/Pagination.js\");\n\nfunction paginationField() {\n  return {\n    keyArgs: false,\n    //tells Apollo we will deal with this\n    read: function read() {\n      var _data$_allProductsMet;\n\n      var existing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n      var _ref = arguments.length > 1 ? arguments[1] : undefined,\n          args = _ref.args,\n          cache = _ref.cache;\n\n      //Apollo asks read function for allProducts\n      console.log({\n        existing: existing,\n        args: args,\n        cache: cache\n      });\n      var skip = args.skip,\n          first = args.first; //read # of items on page from cache\n\n      var data = cache.readQuery({\n        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__[\"PAGINATION_QUERY\"]\n      });\n      var count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;\n      var page = skip / first + 1;\n      var pages = Math.ceil(count / first); // check if there are existing items in cache, and filter out undefined items\n\n      var items = existing.slice(skip, skip + first).filter(function (x) {\n        return x;\n      }); //if there are items, but not as many as the first value\n\n      if (items.length && items.length) //if no items...\n        if (items.length !== first) {\n          // tell Apollo we have nuthin and to fetch items from network\n          return false;\n        }\n      ; //if there are items in cache, skip the network request and return from cache\n\n      if (items.length) {\n        console.log(\"the cache already has \".concat(items.length, \" items\"));\n        return items;\n      }\n\n      ; // if both IFs don't work... fall back to network request\n\n      return false; //we can do 1 of 2 things...\n      // 1. return the items that are already in cache\n      // or 2. return 'false' triggering a network request for the items\n    },\n    merge: function merge(existing, incoming, _ref2) {\n      var args = _ref2.args;\n      //grab skip and first values\n      var skip = args.skip,\n          first = args.first; // this runs when Apollo brings data back from the network request\n\n      console.log(\"merging items from network \".concat(incoming.length)); // console.log({incoming});\n      //if anything in the cache, merged is the existing, otherwise it's an empty array\n\n      var merged = existing ? existing.slice(0) : []; //leave room for previous items, in case we are linked to a later page and the previous entries aren't in the cache\n\n      for (var i = skip; i < skip + incoming.length; ++i) {\n        merged[i] = incoming[i - skip];\n      }\n\n      ;\n      console.log({\n        merged: merged\n      }); //return merged itemd from cache, which automatically refires read fucntion\n\n      return merged;\n    }\n  };\n}\n;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcz85NDQwIl0sIm5hbWVzIjpbInBhZ2luYXRpb25GaWVsZCIsImtleUFyZ3MiLCJyZWFkIiwiZXhpc3RpbmciLCJhcmdzIiwiY2FjaGUiLCJjb25zb2xlIiwibG9nIiwic2tpcCIsImZpcnN0IiwiZGF0YSIsInJlYWRRdWVyeSIsInF1ZXJ5IiwiUEFHSU5BVElPTl9RVUVSWSIsImNvdW50IiwiX2FsbFByb2R1Y3RzTWV0YSIsInBhZ2UiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwiaXRlbXMiLCJzbGljZSIsImZpbHRlciIsIngiLCJsZW5ndGgiLCJtZXJnZSIsImluY29taW5nIiwibWVyZ2VkIiwiaSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxTQUFTQSxlQUFULEdBQTJCO0FBQ3RDLFNBQU87QUFDSEMsV0FBTyxFQUFFLEtBRE47QUFDYTtBQUNoQkMsUUFGRyxrQkFFaUM7QUFBQTs7QUFBQSxVQUEvQkMsUUFBK0IsdUVBQXJCLEVBQXFCOztBQUFBO0FBQUEsVUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQUEsVUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUNoQztBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDSixnQkFBUSxFQUFSQSxRQUFEO0FBQVdDLFlBQUksRUFBSkEsSUFBWDtBQUFpQkMsYUFBSyxFQUFMQTtBQUFqQixPQUFaO0FBRmdDLFVBR3hCRyxJQUh3QixHQUdSSixJQUhRLENBR3hCSSxJQUh3QjtBQUFBLFVBR2xCQyxLQUhrQixHQUdSTCxJQUhRLENBR2xCSyxLQUhrQixFQUloQzs7QUFDQSxVQUFNQyxJQUFJLEdBQUdMLEtBQUssQ0FBQ00sU0FBTixDQUFnQjtBQUFFQyxhQUFLLEVBQUVDLHVFQUFnQkE7QUFBekIsT0FBaEIsQ0FBYjtBQUNBLFVBQU1DLEtBQUssR0FBR0osSUFBSCxhQUFHQSxJQUFILGdEQUFHQSxJQUFJLENBQUVLLGdCQUFULDBEQUFHLHNCQUF3QkQsS0FBdEM7QUFDQSxVQUFNRSxJQUFJLEdBQUdSLElBQUksR0FBR0MsS0FBUCxHQUFlLENBQTVCO0FBQ0EsVUFBTVEsS0FBSyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUwsS0FBSyxHQUFHTCxLQUFsQixDQUFkLENBUmdDLENBU2hDOztBQUNBLFVBQU1XLEtBQUssR0FBR2pCLFFBQVEsQ0FBQ2tCLEtBQVQsQ0FBZWIsSUFBZixFQUFxQkEsSUFBSSxHQUFHQyxLQUE1QixFQUFtQ2EsTUFBbkMsQ0FBMEMsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQVA7QUFBQSxPQUExQyxDQUFkLENBVmdDLENBV2hDOztBQUNBLFVBQUdILEtBQUssQ0FBQ0ksTUFBTixJQUFnQkosS0FBSyxDQUFDSSxNQUF6QixFQUNBO0FBQ0EsWUFBR0osS0FBSyxDQUFDSSxNQUFOLEtBQWlCZixLQUFwQixFQUEyQjtBQUN2QjtBQUNBLGlCQUFPLEtBQVA7QUFDSDtBQUFBLE9BakIrQixDQWtCaEM7O0FBQ0EsVUFBR1csS0FBSyxDQUFDSSxNQUFULEVBQWlCO0FBQ2JsQixlQUFPLENBQUNDLEdBQVIsaUNBQXFDYSxLQUFLLENBQUNJLE1BQTNDO0FBQ0EsZUFBT0osS0FBUDtBQUNIOztBQUFBLE9BdEIrQixDQXVCaEM7O0FBQ0EsYUFBTyxLQUFQLENBeEJnQyxDQTJCaEM7QUFDQTtBQUNBO0FBQ0gsS0FoQ0U7QUFpQ0hLLFNBakNHLGlCQWlDR3RCLFFBakNILEVBaUNhdUIsUUFqQ2IsU0FpQytCO0FBQUEsVUFBUHRCLElBQU8sU0FBUEEsSUFBTztBQUM5QjtBQUQ4QixVQUV0QkksSUFGc0IsR0FFTkosSUFGTSxDQUV0QkksSUFGc0I7QUFBQSxVQUVoQkMsS0FGZ0IsR0FFTkwsSUFGTSxDQUVoQkssS0FGZ0IsRUFHOUI7O0FBQ0FILGFBQU8sQ0FBQ0MsR0FBUixzQ0FBMENtQixRQUFRLENBQUNGLE1BQW5ELEdBSjhCLENBSzlCO0FBQ0E7O0FBQ0EsVUFBTUcsTUFBTSxHQUFHeEIsUUFBUSxHQUFHQSxRQUFRLENBQUNrQixLQUFULENBQWUsQ0FBZixDQUFILEdBQXVCLEVBQTlDLENBUDhCLENBUTlCOztBQUNBLFdBQUssSUFBSU8sQ0FBQyxHQUFHcEIsSUFBYixFQUFtQm9CLENBQUMsR0FBSXBCLElBQUksR0FBR2tCLFFBQVEsQ0FBQ0YsTUFBeEMsRUFBZ0QsRUFBRUksQ0FBbEQsRUFBcUQ7QUFDakRELGNBQU0sQ0FBQ0MsQ0FBRCxDQUFOLEdBQVlGLFFBQVEsQ0FBRUUsQ0FBQyxHQUFHcEIsSUFBTixDQUFwQjtBQUNIOztBQUFBO0FBQ0RGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNvQixjQUFNLEVBQU5BO0FBQUQsT0FBWixFQVo4QixDQWE5Qjs7QUFDQSxhQUFPQSxNQUFQO0FBR0g7QUFsREUsR0FBUDtBQW9ESDtBQUFBIiwiZmlsZSI6Ii4vbGliL3BhZ2luYXRpb25GaWVsZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UEFHSU5BVElPTl9RVUVSWX0gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnaW5hdGlvbkZpZWxkKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGtleUFyZ3M6IGZhbHNlLCAvL3RlbGxzIEFwb2xsbyB3ZSB3aWxsIGRlYWwgd2l0aCB0aGlzXG4gICAgICAgIHJlYWQoZXhpc3RpbmcgPVtdLCB7IGFyZ3MsIGNhY2hlIH0pIHtcbiAgICAgICAgICAgIC8vQXBvbGxvIGFza3MgcmVhZCBmdW5jdGlvbiBmb3IgYWxsUHJvZHVjdHNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtleGlzdGluZywgYXJncywgY2FjaGV9KTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2tpcCwgZmlyc3QgfSA9IGFyZ3M7XG4gICAgICAgICAgICAvL3JlYWQgIyBvZiBpdGVtcyBvbiBwYWdlIGZyb20gY2FjaGVcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZWFkUXVlcnkoeyBxdWVyeTogUEFHSU5BVElPTl9RVUVSWSB9KTtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gZGF0YT8uX2FsbFByb2R1Y3RzTWV0YT8uY291bnQ7XG4gICAgICAgICAgICBjb25zdCBwYWdlID0gc2tpcCAvIGZpcnN0ICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VzID0gTWF0aC5jZWlsKGNvdW50IC8gZmlyc3QpO1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgYXJlIGV4aXN0aW5nIGl0ZW1zIGluIGNhY2hlLCBhbmQgZmlsdGVyIG91dCB1bmRlZmluZWQgaXRlbXNcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gZXhpc3Rpbmcuc2xpY2Uoc2tpcCwgc2tpcCArIGZpcnN0KS5maWx0ZXIoKHgpID0+IHgpO1xuICAgICAgICAgICAgLy9pZiB0aGVyZSBhcmUgaXRlbXMsIGJ1dCBub3QgYXMgbWFueSBhcyB0aGUgZmlyc3QgdmFsdWVcbiAgICAgICAgICAgIGlmKGl0ZW1zLmxlbmd0aCAmJiBpdGVtcy5sZW5ndGgpXG4gICAgICAgICAgICAvL2lmIG5vIGl0ZW1zLi4uXG4gICAgICAgICAgICBpZihpdGVtcy5sZW5ndGggIT09IGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgLy8gdGVsbCBBcG9sbG8gd2UgaGF2ZSBudXRoaW4gYW5kIHRvIGZldGNoIGl0ZW1zIGZyb20gbmV0d29ya1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvL2lmIHRoZXJlIGFyZSBpdGVtcyBpbiBjYWNoZSwgc2tpcCB0aGUgbmV0d29yayByZXF1ZXN0IGFuZCByZXR1cm4gZnJvbSBjYWNoZVxuICAgICAgICAgICAgaWYoaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHRoZSBjYWNoZSBhbHJlYWR5IGhhcyAke2l0ZW1zLmxlbmd0aH0gaXRlbXNgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXM7ICBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBpZiBib3RoIElGcyBkb24ndCB3b3JrLi4uIGZhbGwgYmFjayB0byBuZXR3b3JrIHJlcXVlc3RcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvL3dlIGNhbiBkbyAxIG9mIDIgdGhpbmdzLi4uXG4gICAgICAgICAgICAvLyAxLiByZXR1cm4gdGhlIGl0ZW1zIHRoYXQgYXJlIGFscmVhZHkgaW4gY2FjaGVcbiAgICAgICAgICAgIC8vIG9yIDIuIHJldHVybiAnZmFsc2UnIHRyaWdnZXJpbmcgYSBuZXR3b3JrIHJlcXVlc3QgZm9yIHRoZSBpdGVtc1xuICAgICAgICB9LFxuICAgICAgICBtZXJnZShleGlzdGluZywgaW5jb21pbmcsIHthcmdzfSkge1xuICAgICAgICAgICAgLy9ncmFiIHNraXAgYW5kIGZpcnN0IHZhbHVlc1xuICAgICAgICAgICAgY29uc3QgeyBza2lwLCBmaXJzdCB9ID0gYXJncztcbiAgICAgICAgICAgIC8vIHRoaXMgcnVucyB3aGVuIEFwb2xsbyBicmluZ3MgZGF0YSBiYWNrIGZyb20gdGhlIG5ldHdvcmsgcmVxdWVzdFxuICAgICAgICAgICAgY29uc29sZS5sb2coYG1lcmdpbmcgaXRlbXMgZnJvbSBuZXR3b3JrICR7aW5jb21pbmcubGVuZ3RofWApO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coe2luY29taW5nfSk7XG4gICAgICAgICAgICAvL2lmIGFueXRoaW5nIGluIHRoZSBjYWNoZSwgbWVyZ2VkIGlzIHRoZSBleGlzdGluZywgb3RoZXJ3aXNlIGl0J3MgYW4gZW1wdHkgYXJyYXlcbiAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IGV4aXN0aW5nID8gZXhpc3Rpbmcuc2xpY2UoMCkgOiBbXTtcbiAgICAgICAgICAgIC8vbGVhdmUgcm9vbSBmb3IgcHJldmlvdXMgaXRlbXMsIGluIGNhc2Ugd2UgYXJlIGxpbmtlZCB0byBhIGxhdGVyIHBhZ2UgYW5kIHRoZSBwcmV2aW91cyBlbnRyaWVzIGFyZW4ndCBpbiB0aGUgY2FjaGVcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBza2lwOyBpIDwgIHNraXAgKyBpbmNvbWluZy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIG1lcmdlZFtpXSA9IGluY29taW5nIFtpIC0gc2tpcF1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7bWVyZ2VkfSk7XG4gICAgICAgICAgICAvL3JldHVybiBtZXJnZWQgaXRlbWQgZnJvbSBjYWNoZSwgd2hpY2ggYXV0b21hdGljYWxseSByZWZpcmVzIHJlYWQgZnVjbnRpb25cbiAgICAgICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/paginationField.js\n");

/***/ })

})