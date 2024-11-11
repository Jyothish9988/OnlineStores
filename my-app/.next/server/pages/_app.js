/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/globals.css */ \"./pages/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"../node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n // Import global styles\n\n\n\n// Retrieve the token dynamically from localStorage (or sessionStorage, cookies) only on the client side\nconst getAccessToken = ()=>{\n    if (false) {}\n    return null; // Return null during SSR\n};\nfunction MyApp({ Component, pageProps }) {\n    const [accessToken, setAccessToken] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            // Set the token after the component mounts on the client side\n            const token = getAccessToken();\n            setAccessToken(token);\n        }\n    }[\"MyApp.useEffect\"], []);\n    // Create Apollo Client instance\n    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloClient({\n        uri: 'http://localhost:4000/graphql',\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.InMemoryCache(),\n        headers: {\n            Authorization: accessToken ? `Bearer ${accessToken}` : ''\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloProvider, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\_app.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\_app.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE4QixDQUFDLHVCQUF1QjtBQUNSO0FBQytCO0FBQ2pDO0FBRTVDLHdHQUF3RztBQUN4RyxNQUFNSyxpQkFBaUI7SUFDckIsSUFBSSxLQUE2QixFQUFFLEVBRWxDO0lBQ0QsT0FBTyxNQUFNLHlCQUF5QjtBQUN4QztBQUVlLFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDcEQsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBRS9DRCxnREFBU0E7MkJBQUM7WUFDUiw4REFBOEQ7WUFDOUQsTUFBTVUsUUFBUVI7WUFDZE8sZUFBZUM7UUFDakI7MEJBQUcsRUFBRTtJQUVMLGdDQUFnQztJQUNoQyxNQUFNQyxTQUFTLElBQUlaLHdEQUFZQSxDQUFDO1FBQzlCYSxLQUFLO1FBQ0xDLE9BQU8sSUFBSWYseURBQWFBO1FBQ3hCZ0IsU0FBUztZQUNQQyxlQUFlUCxjQUFjLENBQUMsT0FBTyxFQUFFQSxhQUFhLEdBQUc7UUFDekQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDWCwwREFBY0E7UUFBQ2MsUUFBUUE7a0JBQ3RCLDRFQUFDTDtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJEOlxcV29ya1xcb25saW5lU3RvcmVcXG15LWFwcFxccGFnZXNcXF9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWxzLmNzcyc7IC8vIEltcG9ydCBnbG9iYWwgc3R5bGVzXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIsIEluTWVtb3J5Q2FjaGUsIEFwb2xsb0NsaWVudCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIFJldHJpZXZlIHRoZSB0b2tlbiBkeW5hbWljYWxseSBmcm9tIGxvY2FsU3RvcmFnZSAob3Igc2Vzc2lvblN0b3JhZ2UsIGNvb2tpZXMpIG9ubHkgb24gdGhlIGNsaWVudCBzaWRlXHJcbmNvbnN0IGdldEFjY2Vzc1Rva2VuID0gKCkgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKTsgLy8gQWNjZXNzIGxvY2FsU3RvcmFnZSBvbmx5IG9uIGNsaWVudC1zaWRlXHJcbiAgfVxyXG4gIHJldHVybiBudWxsOyAvLyBSZXR1cm4gbnVsbCBkdXJpbmcgU1NSXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBbYWNjZXNzVG9rZW4sIHNldEFjY2Vzc1Rva2VuXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gU2V0IHRoZSB0b2tlbiBhZnRlciB0aGUgY29tcG9uZW50IG1vdW50cyBvbiB0aGUgY2xpZW50IHNpZGVcclxuICAgIGNvbnN0IHRva2VuID0gZ2V0QWNjZXNzVG9rZW4oKTtcclxuICAgIHNldEFjY2Vzc1Rva2VuKHRva2VuKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIENyZWF0ZSBBcG9sbG8gQ2xpZW50IGluc3RhbmNlXHJcbiAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbCcsICAvLyBHcmFwaFFMIHNlcnZlciBVUklcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbiA/IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gIDogJycsICAvLyBEeW5hbWljYWxseSBnZXQgdGhlIHRva2VuXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJBcG9sbG9Qcm92aWRlciIsIkluTWVtb3J5Q2FjaGUiLCJBcG9sbG9DbGllbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldEFjY2Vzc1Rva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYWNjZXNzVG9rZW4iLCJzZXRBY2Nlc3NUb2tlbiIsInRva2VuIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/styles/globals.css":
/*!**********************************!*\
  !*** ./pages/styles/globals.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();