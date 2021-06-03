/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/product/[id]";
exports.ids = ["pages/product/[id]"];
exports.modules = {

/***/ "./components/SingleProduct.js":
/*!*************************************!*\
  !*** ./components/SingleProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/components/SingleProduct.js\";\n\n\n\n\n\nconst SingleProductStyles = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({\n  displayName: \"SingleProduct__SingleProductStyles\",\n  componentId: \"sc-1kapz8w-0\"\n})([\"display:grid;grid-auto-columns:1fr;grid-auto-flow:column;min-height:800px;max-width:var(--maxWidth);justify-content:center;align-items:top;gap:2rem;img{width:100%;object-fit:contain;}\"]);\nconst SINGLE_ITEM_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`\n    query SINGLE_ITEM_QUERY($id: ID!) {\n        Product (where: {\n            id: $id\n        }) \n        {\n            id\n            name\n            price\n            description\n            photo {\n                id\n                altText\n                image {\n                    publicUrlTransformed\n                }\n            }\n        }\n    }\n`;\nfunction SingleProduct({\n  id\n}) {\n  const {\n    data,\n    loading,\n    error\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(SINGLE_ITEM_QUERY, {\n    variables: {\n      id\n    }\n  });\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Wait for it... Wait for it...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 24\n  }, this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__.default, {\n    error: error\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 22\n  }, this);\n  const {\n    Product\n  } = data; // console.log({ data, loading, error });\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SingleProductStyles, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [\"Sick Fits | \", Product.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: Product.photo.image.publicUrlTransformed,\n      alt: Product.photo.altText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"details\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: Product.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: Product.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1NpbmdsZVByb2R1Y3QuanM/ZDkxZCJdLCJuYW1lcyI6WyJTaW5nbGVQcm9kdWN0U3R5bGVzIiwic3R5bGVkIiwiU0lOR0xFX0lURU1fUVVFUlkiLCJncWwiLCJTaW5nbGVQcm9kdWN0IiwiaWQiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJQcm9kdWN0IiwibmFtZSIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsImFsdFRleHQiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsbUJBQW1CLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLCtMQUF6QjtBQWlCQSxNQUFNQyxpQkFBaUIsR0FBR0Msb0RBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FuQkE7QUFxQmUsU0FBU0MsYUFBVCxDQUF1QjtBQUFFQztBQUFGLENBQXZCLEVBQStCO0FBQzFDLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxXQUFSO0FBQWlCQztBQUFqQixNQUEyQkMsd0RBQVEsQ0FBQ1AsaUJBQUQsRUFBb0I7QUFDekRRLGFBQVMsRUFBRTtBQUFFTDtBQUFGO0FBRDhDLEdBQXBCLENBQXpDO0FBR0EsTUFBR0UsT0FBSCxFQUFZLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDWixNQUFHQyxLQUFILEVBQVUsb0JBQU8sOERBQUMsNkRBQUQ7QUFBYyxTQUFLLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNWLFFBQU07QUFBRUc7QUFBRixNQUFjTCxJQUFwQixDQU4wQyxDQU8xQzs7QUFDQSxzQkFDSSw4REFBQyxtQkFBRDtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0k7QUFBQSxtQ0FBb0JLLE9BQU8sQ0FBQ0MsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFDSSxTQUFHLEVBQUVELE9BQU8sQ0FBQ0UsS0FBUixDQUFjQyxLQUFkLENBQW9CQyxvQkFEN0I7QUFFSSxTQUFHLEVBQUVKLE9BQU8sQ0FBQ0UsS0FBUixDQUFjRztBQUZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFRSTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUEsOEJBQ0k7QUFBQSxrQkFBS0wsT0FBTyxDQUFDQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsa0JBQUlELE9BQU8sQ0FBQ007QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2luZ2xlUHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IFNpbmdsZVByb2R1Y3RTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICAgIG1heC13aWR0aDogdmFyKC0tbWF4V2lkdGgpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiB0b3A7XG4gICAgZ2FwOiAycmVtO1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cblxuXG5gO1xuXG5jb25zdCBTSU5HTEVfSVRFTV9RVUVSWSA9IGdxbGBcbiAgICBxdWVyeSBTSU5HTEVfSVRFTV9RVUVSWSgkaWQ6IElEISkge1xuICAgICAgICBQcm9kdWN0ICh3aGVyZToge1xuICAgICAgICAgICAgaWQ6ICRpZFxuICAgICAgICB9KSBcbiAgICAgICAge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgcGhvdG8ge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nbGVQcm9kdWN0KHsgaWQgfSkge1xuICAgIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9JVEVNX1FVRVJZLCB7XG4gICAgICAgIHZhcmlhYmxlczogeyBpZCB9XG4gICAgfSk7XG4gICAgaWYobG9hZGluZykgcmV0dXJuIDxwPldhaXQgZm9yIGl0Li4uIFdhaXQgZm9yIGl0Li4uPC9wPjtcbiAgICBpZihlcnJvcikgcmV0dXJuIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfS8+O1xuICAgIGNvbnN0IHsgUHJvZHVjdCB9ID0gZGF0YTtcbiAgICAvLyBjb25zb2xlLmxvZyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTaW5nbGVQcm9kdWN0U3R5bGVzPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlNpY2sgRml0cyB8IHtQcm9kdWN0Lm5hbWV9PC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgc3JjPXtQcm9kdWN0LnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfSBcbiAgICAgICAgICAgICAgICBhbHQ9e1Byb2R1Y3QucGhvdG8uYWx0VGV4dH0gXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGgyPntQcm9kdWN0Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cD57UHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TaW5nbGVQcm9kdWN0U3R5bGVzPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SingleProduct.js\n");

/***/ }),

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleProductPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SingleProduct */ \"./components/SingleProduct.js\");\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master redux/sick-fits/frontend/pages/product/[id].js\";\n\nfunction SingleProductPage({\n  query\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SingleProduct__WEBPACK_IMPORTED_MODULE_1__.default, {\n      id: query.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9wcm9kdWN0L1tpZF0uanM/M2Q5NiJdLCJuYW1lcyI6WyJTaW5nbGVQcm9kdWN0UGFnZSIsInF1ZXJ5IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsaUJBQVQsQ0FBMkI7QUFBRUM7QUFBRixDQUEzQixFQUFzQztBQUVqRCxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLDhEQUFEO0FBQWUsUUFBRSxFQUFFQSxLQUFLLENBQUNDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDtBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZHVjdC9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaW5nbGVQcm9kdWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ2xlUHJvZHVjdFBhZ2UoeyBxdWVyeSB9KSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFNpbmdsZVByb2R1Y3QgaWQ9e3F1ZXJ5LmlkfS8+XG4gICAgICAgIDwvZGl2PlxuICAgIFxuICAgIClcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[id].js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_ErrorMessage_js"], function() { return __webpack_exec__("./pages/product/[id].js"); });
module.exports = __webpack_exports__;

})();