"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/header.js":
/*!************************************!*\
  !*** ./pages/components/header.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n// src/components/Header.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Header = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Header.useEffect\": ()=>{\n            // Dynamically add Bootstrap CSS and JS CDN links\n            const bootstrapCSS = document.createElement('link');\n            bootstrapCSS.rel = 'stylesheet';\n            bootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';\n            bootstrapCSS.integrity = 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH';\n            bootstrapCSS.crossOrigin = 'anonymous';\n            document.head.appendChild(bootstrapCSS);\n            const bootstrapJS = document.createElement('script');\n            bootstrapJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';\n            bootstrapJS.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';\n            bootstrapJS.crossOrigin = 'anonymous';\n            document.body.appendChild(bootstrapJS);\n            // Cleanup function to remove the added CDN links when the component unmounts\n            return ({\n                \"Header.useEffect\": ()=>{\n                    document.head.removeChild(bootstrapCSS);\n                    document.body.removeChild(bootstrapJS);\n                }\n            })[\"Header.useEffect\"];\n        }\n    }[\"Header.useEffect\"], []); // Empty dependency array ensures this runs only once when the component is mounted\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-expand-lg navbar-light bg-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"navbar-brand\",\n                    href: \"#\",\n                    children: \"Navbar\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"navbar-toggler\",\n                    type: \"button\",\n                    \"data-bs-toggle\": \"collapse\",\n                    \"data-bs-target\": \"#navbarSupportedContent\",\n                    \"aria-controls\": \"navbarSupportedContent\",\n                    \"aria-expanded\": \"false\",\n                    \"aria-label\": \"Toggle navigation\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"navbar-toggler-icon\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"collapse navbar-collapse\",\n                    id: \"navbarSupportedContent\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"navbar-nav me-auto mb-2 mb-lg-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"nav-item\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"nav-link active\",\n                                        \"aria-current\": \"page\",\n                                        href: \"#\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"nav-item\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/login\",\n                                        children: \"Go to Login\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"nav-item\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/register\",\n                                        children: \"Go to Register\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"d-flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"form-control me-2\",\n                                    type: \"search\",\n                                    placeholder: \"Search\",\n                                    \"aria-label\": \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-outline-success\",\n                                    type: \"submit\",\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Header;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkI7OztBQUVjO0FBQ1o7QUFFN0IsTUFBTUcsU0FBUzs7SUFDYkYsZ0RBQVNBOzRCQUFDO1lBQ1IsaURBQWlEO1lBQ2pELE1BQU1HLGVBQWVDLFNBQVNDLGFBQWEsQ0FBQztZQUM1Q0YsYUFBYUcsR0FBRyxHQUFHO1lBQ25CSCxhQUFhSSxJQUFJLEdBQUc7WUFDcEJKLGFBQWFLLFNBQVMsR0FBRztZQUN6QkwsYUFBYU0sV0FBVyxHQUFHO1lBQzNCTCxTQUFTTSxJQUFJLENBQUNDLFdBQVcsQ0FBQ1I7WUFFMUIsTUFBTVMsY0FBY1IsU0FBU0MsYUFBYSxDQUFDO1lBQzNDTyxZQUFZQyxHQUFHLEdBQUc7WUFDbEJELFlBQVlKLFNBQVMsR0FBRztZQUN4QkksWUFBWUgsV0FBVyxHQUFHO1lBQzFCTCxTQUFTVSxJQUFJLENBQUNILFdBQVcsQ0FBQ0M7WUFFMUIsNkVBQTZFO1lBQzdFO29DQUFPO29CQUNMUixTQUFTTSxJQUFJLENBQUNLLFdBQVcsQ0FBQ1o7b0JBQzFCQyxTQUFTVSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0g7Z0JBQzVCOztRQUNGOzJCQUFHLEVBQUUsR0FBRyxtRkFBbUY7SUFFM0YscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBRUYsV0FBVTtvQkFBZVYsTUFBSzs4QkFBSTs7Ozs7OzhCQUNyQyw4REFBQ2E7b0JBQ0NILFdBQVU7b0JBQ1ZJLE1BQUs7b0JBQ0xDLGtCQUFlO29CQUNmQyxrQkFBZTtvQkFDZkMsaUJBQWM7b0JBQ2RDLGlCQUFjO29CQUNkQyxjQUFXOzhCQUVYLDRFQUFDQzt3QkFBS1YsV0FBVTs7Ozs7Ozs7Ozs7OEJBR2xCLDhEQUFDQztvQkFBSUQsV0FBVTtvQkFBMkJXLElBQUc7O3NDQUMzQyw4REFBQ0M7NEJBQUdaLFdBQVU7OzhDQUNaLDhEQUFDYTtvQ0FBR2IsV0FBVTs4Q0FDWiw0RUFBQ0U7d0NBQUVGLFdBQVU7d0NBQWtCYyxnQkFBYTt3Q0FBT3hCLE1BQUs7a0RBQUk7Ozs7Ozs7Ozs7OzhDQUU5RCw4REFBQ3VCO29DQUFHYixXQUFVOzhDQUNaLDRFQUFDaEIsa0RBQUlBO3dDQUFDTSxNQUFLO2tEQUFTOzs7Ozs7Ozs7Ozs4Q0FFdEIsOERBQUN1QjtvQ0FBR2IsV0FBVTs4Q0FDWiw0RUFBQ2hCLGtEQUFJQTt3Q0FBQ00sTUFBSztrREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSTNCLDhEQUFDeUI7NEJBQUtmLFdBQVU7OzhDQUNkLDhEQUFDZ0I7b0NBQU1oQixXQUFVO29DQUFvQkksTUFBSztvQ0FBU2EsYUFBWTtvQ0FBU1IsY0FBVzs7Ozs7OzhDQUNuRiw4REFBQ047b0NBQU9ILFdBQVU7b0NBQTBCSSxNQUFLOzhDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10RTtHQTVETW5CO0tBQUFBO0FBOEROLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJEOlxcV29ya1xcb25saW5lU3RvcmVcXG15LWFwcFxccGFnZXNcXGNvbXBvbmVudHNcXGhlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvY29tcG9uZW50cy9IZWFkZXIuanNcclxuJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIER5bmFtaWNhbGx5IGFkZCBCb290c3RyYXAgQ1NTIGFuZCBKUyBDRE4gbGlua3NcclxuICAgIGNvbnN0IGJvb3RzdHJhcENTUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgIGJvb3RzdHJhcENTUy5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbiAgICBib290c3RyYXBDU1MuaHJlZiA9ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjMuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbiAgICBib290c3RyYXBDU1MuaW50ZWdyaXR5ID0gJ3NoYTM4NC1RV1RLWnlqcFBFaklTdjVXYVJVOU9GZVJwb2s2WWN0blltRHI1cE5seVQyYlJqWGgwSk1oalk2aFcrQUxFd0lIJztcclxuICAgIGJvb3RzdHJhcENTUy5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChib290c3RyYXBDU1MpO1xyXG5cclxuICAgIGNvbnN0IGJvb3RzdHJhcEpTID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICBib290c3RyYXBKUy5zcmMgPSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4zLjMvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qcyc7XHJcbiAgICBib290c3RyYXBKUy5pbnRlZ3JpdHkgPSAnc2hhMzg0LVl2cGNyWWYwdFkzbEhCNjBOTmttWGM1czlmRFZaTEVTYUFBNTVORHpPeGh5OUdrY0lkc2xLMWVON042akllSHonO1xyXG4gICAgYm9vdHN0cmFwSlMuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYm9vdHN0cmFwSlMpO1xyXG5cclxuICAgIC8vIENsZWFudXAgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBhZGRlZCBDRE4gbGlua3Mgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKGJvb3RzdHJhcENTUyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYm9vdHN0cmFwSlMpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7IC8vIEVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgZW5zdXJlcyB0aGlzIHJ1bnMgb25seSBvbmNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+TmF2YmFyPC9hPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcclxuICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcclxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtZS1hdXRvIG1iLTIgbWItbGctMFwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCIgaHJlZj1cIiNcIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+R28gdG8gTG9naW48L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5HbyB0byBSZWdpc3RlcjwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWUtMlwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGFyaWEtbGFiZWw9XCJTZWFyY2hcIiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkxpbmsiLCJIZWFkZXIiLCJib290c3RyYXBDU1MiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyZWwiLCJocmVmIiwiaW50ZWdyaXR5IiwiY3Jvc3NPcmlnaW4iLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJib290c3RyYXBKUyIsInNyYyIsImJvZHkiLCJyZW1vdmVDaGlsZCIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImEiLCJidXR0b24iLCJ0eXBlIiwiZGF0YS1icy10b2dnbGUiLCJkYXRhLWJzLXRhcmdldCIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwiYXJpYS1sYWJlbCIsInNwYW4iLCJpZCIsInVsIiwibGkiLCJhcmlhLWN1cnJlbnQiLCJmb3JtIiwiaW5wdXQiLCJwbGFjZWhvbGRlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/header.js\n"));

/***/ })

});