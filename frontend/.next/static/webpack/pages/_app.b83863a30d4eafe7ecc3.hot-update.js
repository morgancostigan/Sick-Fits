/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! downshift */ \"./node_modules/downshift/dist/downshift.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/DropDown */ \"./components/styles/DropDown.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/Search.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = (0,_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)([\"\\n    query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {\\n        # renaming results from allProducts to searchTerms\\n        searchTerms: allProducts(\\n            where: {\\n                OR: [\\n                    { name_contains_i: $searchTerm },\\n                    { description_contains_i: $searchTerm}\\n                ]\\n            }\\n        ){\\n            id\\n            name\\n            description\\n            photo {\\n                image {\\n                    publicUrlTransformed\\n                }\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar SEARCH_PRODUCTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());\nfunction Search() {\n  _s();\n\n  var _useLazyQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useLazyQuery)(SEARCH_PRODUCTS_QUERY),\n      _useLazyQuery2 = (0,_Users_macbookpro_Documents_Tier_4_Advanced_React_master_redux_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useLazyQuery, 2),\n      findItems = _useLazyQuery2[0],\n      _useLazyQuery2$ = _useLazyQuery2[1],\n      loading = _useLazyQuery2$.loading,\n      data = _useLazyQuery2$.data,\n      error = _useLazyQuery2$.error;\n\n  (0,downshift__WEBPACK_IMPORTED_MODULE_7__.resetIdCounter)();\n\n  var _useCombobox = (0,downshift__WEBPACK_IMPORTED_MODULE_7__.useCombobox)({\n    items: [],\n    onInputValueChange: function onInputValueChange() {\n      console.log('Chngd');\n    },\n    onSelectedItemChange: function onSelectedItemChange() {\n      console.log('Slctd itm chngd');\n    }\n  }),\n      getMenuProps = _useCombobox.getMenuProps,\n      getInputProps = _useCombobox.getInputProps,\n      getComboboxProps = _useCombobox.getComboboxProps;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_4__.SearchStyles, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread({}, getInputProps({\n        type: 'search',\n        placeholder: 'Search for an item.',\n        id: 'search',\n        className: 'loading'\n      })), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_4__.DropDown, _objectSpread(_objectSpread({}, getMenuProps()), {}, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_4__.DropDownItem, {\n        children: \"Hey\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }, this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Search, \"PpNBPMLm2fcYTeababkvAAL4xtU=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useLazyQuery, downshift__WEBPACK_IMPORTED_MODULE_7__.useCombobox];\n});\n\n_c = Search;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanM/NjYxZSJdLCJuYW1lcyI6WyJTRUFSQ0hfUFJPRFVDVFNfUVVFUlkiLCJncWwiLCJTZWFyY2giLCJ1c2VMYXp5UXVlcnkiLCJmaW5kSXRlbXMiLCJsb2FkaW5nIiwiZGF0YSIsImVycm9yIiwicmVzZXRJZENvdW50ZXIiLCJ1c2VDb21ib2JveCIsIml0ZW1zIiwib25JbnB1dFZhbHVlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsIm9uU2VsZWN0ZWRJdGVtQ2hhbmdlIiwiZ2V0TWVudVByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImdldENvbWJvYm94UHJvcHMiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLGtEQUFILG1CQUEzQjtBQXVCZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEsc0JBQ2lCQyw0REFBWSxDQUN0REgscUJBRHNELENBRDdCO0FBQUE7QUFBQSxNQUN0QkksU0FEc0I7QUFBQTtBQUFBLE1BQ1RDLE9BRFMsbUJBQ1RBLE9BRFM7QUFBQSxNQUNBQyxJQURBLG1CQUNBQSxJQURBO0FBQUEsTUFDTUMsS0FETixtQkFDTUEsS0FETjs7QUFJN0JDLDJEQUFjOztBQUplLHFCQUs2QkMsc0RBQVcsQ0FBQztBQUNsRUMsU0FBSyxFQUFFLEVBRDJEO0FBRWxFQyxzQkFGa0UsZ0NBRTlDO0FBQ2hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0gsS0FKaUU7QUFLbEVDLHdCQUxrRSxrQ0FLNUM7QUFDbEJGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBRUg7QUFSaUUsR0FBRCxDQUx4QztBQUFBLE1BS3JCRSxZQUxxQixnQkFLckJBLFlBTHFCO0FBQUEsTUFLUEMsYUFMTyxnQkFLUEEsYUFMTztBQUFBLE1BS1FDLGdCQUxSLGdCQUtRQSxnQkFMUjs7QUFnQjdCLHNCQUNJLDhEQUFDLDBEQUFEO0FBQUEsNEJBQ0kscUdBQVNBLGdCQUFnQixFQUF6QjtBQUFBLDZCQUNJLHlGQUFXRCxhQUFhLENBQUM7QUFDckJFLFlBQUksRUFBRSxRQURlO0FBRXJCQyxtQkFBVyxFQUFFLHFCQUZRO0FBR3JCQyxVQUFFLEVBQUUsUUFIaUI7QUFJckJDLGlCQUFTLEVBQUU7QUFKVSxPQUFELENBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFTSSw4REFBQyxzREFBRCxrQ0FBY04sWUFBWSxFQUExQjtBQUFBLDZCQUNJLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUg7O0dBL0J1QmIsTTtVQUMwQkMsd0QsRUFJWU0sa0Q7OztLQUx0Q1AsTTtBQStCdkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IHJlc2V0SWRDb3VudGVyLCB1c2VDb21ib2JveCB9IGZyb20gJ2Rvd25zaGlmdCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IERyb3BEb3duSXRlbSwgRHJvcERvd24sIFNlYXJjaFN0eWxlcyB9IGZyb20gJy4vc3R5bGVzL0Ryb3BEb3duJztcblxuY29uc3QgU0VBUkNIX1BST0RVQ1RTX1FVRVJZID0gZ3FsYFxuICAgIHF1ZXJ5IFNFQVJDSF9QUk9EVUNUU19RVUVSWSgkc2VhcmNoVGVybTogU3RyaW5nISkge1xuICAgICAgICAjIHJlbmFtaW5nIHJlc3VsdHMgZnJvbSBhbGxQcm9kdWN0cyB0byBzZWFyY2hUZXJtc1xuICAgICAgICBzZWFyY2hUZXJtczogYWxsUHJvZHVjdHMoXG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZV9jb250YWluc19pOiAkc2VhcmNoVGVybSB9LFxuICAgICAgICAgICAgICAgICAgICB7IGRlc2NyaXB0aW9uX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKXtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgcGhvdG8ge1xuICAgICAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gICAgY29uc3QgW2ZpbmRJdGVtcywgeyBsb2FkaW5nLCBkYXRhLCBlcnJvciB9XSA9IHVzZUxhenlRdWVyeShcbiAgICAgICAgU0VBUkNIX1BST0RVQ1RTX1FVRVJZLFxuICAgICAgICApO1xuICAgIHJlc2V0SWRDb3VudGVyKCk7XG4gICAgY29uc3QgeyBnZXRNZW51UHJvcHMsIGdldElucHV0UHJvcHMsIGdldENvbWJvYm94UHJvcHMgfSA9IHVzZUNvbWJvYm94KHtcbiAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICBvbklucHV0VmFsdWVDaGFuZ2UoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDaG5nZCcpO1xuICAgICAgICB9LFxuICAgICAgICBvblNlbGVjdGVkSXRlbUNoYW5nZSgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NsY3RkIGl0bSBjaG5nZCcpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gXG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNlYXJjaFN0eWxlcz5cbiAgICAgICAgICAgIDxkaXYgey4uLmdldENvbWJvYm94UHJvcHMoKX0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NlYXJjaCcsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoIGZvciBhbiBpdGVtLicsXG4gICAgICAgICAgICAgICAgICAgIGlkOiAnc2VhcmNoJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbG9hZGluZycsXG4gICAgICAgICAgICAgICAgfSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxEcm9wRG93biB7Li4uZ2V0TWVudVByb3BzKCl9PlxuICAgICAgICAgICAgICAgIDxEcm9wRG93bkl0ZW0+SGV5PC9Ecm9wRG93bkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3BEb3duPlxuICAgICAgICA8L1NlYXJjaFN0eWxlcz5cbiAgICApO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Search.js\n");

/***/ })

});