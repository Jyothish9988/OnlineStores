"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/components/header.js":
/*!************************************!*\
  !*** ./pages/components/header.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// src/components/Header.js\n\nvar _s = $RefreshSig$();\n\nconst Header = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Header.useEffect\": ()=>{\n            // Dynamically add Bootstrap CSS and JS CDN links\n            const bootstrapCSS = document.createElement('link');\n            bootstrapCSS.rel = 'stylesheet';\n            bootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';\n            bootstrapCSS.integrity = 'ssha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH';\n            bootstrapCSS.crossOrigin = 'anonymous';\n            document.head.appendChild(bootstrapCSS);\n            const bootstrapJS = document.createElement('script');\n            bootstrapJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';\n            bootstrapJS.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';\n            bootstrapJS.crossOrigin = 'anonymous';\n            document.body.appendChild(bootstrapJS);\n            // Cleanup function to remove the added CDN links when the component unmounts\n            return ({\n                \"Header.useEffect\": ()=>{\n                    document.head.removeChild(bootstrapCSS);\n                    document.body.removeChild(bootstrapJS);\n                }\n            })[\"Header.useEffect\"];\n        }\n    }[\"Header.useEffect\"], []); // Empty dependency array ensures this runs only once when the component is mounted\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-expand-lg navbar-light bg-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"navbar-brand\",\n                href: \"#\",\n                children: \"Navbar\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"navbar-toggler\",\n                type: \"button\",\n                \"data-toggle\": \"collapse\",\n                \"data-target\": \"#navbarSupportedContent\",\n                \"aria-controls\": \"navbarSupportedContent\",\n                \"aria-expanded\": \"false\",\n                \"aria-label\": \"Toggle navigation\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"navbar-toggler-icon\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"collapse navbar-collapse\",\n                id: \"navbarSupportedContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"navbar-nav mr-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item active\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"#\",\n                                    children: [\n                                        \"Home \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"sr-only\",\n                                            children: \"(current)\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 53\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\",\n                                    href: \"#\",\n                                    children: \"Link\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item dropdown\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"nav-link dropdown-toggle\",\n                                        href: \"#\",\n                                        id: \"navbarDropdown\",\n                                        role: \"button\",\n                                        \"data-toggle\": \"dropdown\",\n                                        \"aria-haspopup\": \"true\",\n                                        \"aria-expanded\": \"false\",\n                                        children: \"Dropdown\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"dropdown-menu\",\n                                        \"aria-labelledby\": \"navbarDropdown\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"dropdown-item\",\n                                                href: \"#\",\n                                                children: \"Action\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"dropdown-item\",\n                                                href: \"#\",\n                                                children: \"Another action\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"dropdown-divider\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"dropdown-item\",\n                                                href: \"#\",\n                                                children: \"Something else here\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"form-inline my-2 my-lg-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"form-control mr-sm-2\",\n                                type: \"search\",\n                                placeholder: \"Search\",\n                                \"aria-label\": \"Search\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-outline-success my-2 my-sm-0\",\n                                type: \"submit\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\components\\\\header.js\",\n        lineNumber: 29,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Header, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Header;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsMkJBQTJCOzs7QUFFWTtBQUV2QyxNQUFNRSxTQUFTOztJQUNiRCxnREFBU0E7NEJBQUM7WUFDUixpREFBaUQ7WUFDakQsTUFBTUUsZUFBZUMsU0FBU0MsYUFBYSxDQUFDO1lBQzVDRixhQUFhRyxHQUFHLEdBQUc7WUFDbkJILGFBQWFJLElBQUksR0FBRztZQUNwQkosYUFBYUssU0FBUyxHQUFHO1lBQ3pCTCxhQUFhTSxXQUFXLEdBQUc7WUFDM0JMLFNBQVNNLElBQUksQ0FBQ0MsV0FBVyxDQUFDUjtZQUUxQixNQUFNUyxjQUFjUixTQUFTQyxhQUFhLENBQUM7WUFDM0NPLFlBQVlDLEdBQUcsR0FBRztZQUNsQkQsWUFBWUosU0FBUyxHQUFHO1lBQ3hCSSxZQUFZSCxXQUFXLEdBQUc7WUFDMUJMLFNBQVNVLElBQUksQ0FBQ0gsV0FBVyxDQUFDQztZQUUxQiw2RUFBNkU7WUFDN0U7b0NBQU87b0JBQ0xSLFNBQVNNLElBQUksQ0FBQ0ssV0FBVyxDQUFDWjtvQkFDMUJDLFNBQVNVLElBQUksQ0FBQ0MsV0FBVyxDQUFDSDtnQkFDNUI7O1FBQ0Y7MkJBQUcsRUFBRSxHQUFHLG1GQUFtRjtJQUUzRixxQkFDSSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFFRCxXQUFVO2dCQUFlVixNQUFLOzBCQUFJOzs7Ozs7MEJBQ3JDLDhEQUFDWTtnQkFDR0YsV0FBVTtnQkFDVkcsTUFBSztnQkFDTEMsZUFBWTtnQkFDWkMsZUFBWTtnQkFDWkMsaUJBQWM7Z0JBQ2RDLGlCQUFjO2dCQUNkQyxjQUFXOzBCQUViLDRFQUFDQztvQkFBS1QsV0FBVTs7Ozs7Ozs7Ozs7MEJBR2xCLDhEQUFDVTtnQkFBSVYsV0FBVTtnQkFBMkJXLElBQUc7O2tDQUMzQyw4REFBQ0M7d0JBQUdaLFdBQVU7OzBDQUNaLDhEQUFDYTtnQ0FBR2IsV0FBVTswQ0FDWiw0RUFBQ0M7b0NBQUVELFdBQVU7b0NBQVdWLE1BQUs7O3dDQUFJO3NEQUFLLDhEQUFDbUI7NENBQUtULFdBQVU7c0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUVsRSw4REFBQ2E7Z0NBQUdiLFdBQVU7MENBQ1osNEVBQUNDO29DQUFFRCxXQUFVO29DQUFXVixNQUFLOzhDQUFJOzs7Ozs7Ozs7OzswQ0FFbkMsOERBQUN1QjtnQ0FBR2IsV0FBVTs7a0RBQ1osOERBQUNDO3dDQUNHRCxXQUFVO3dDQUNWVixNQUFLO3dDQUNMcUIsSUFBRzt3Q0FDSEcsTUFBSzt3Q0FDTFYsZUFBWTt3Q0FDWlcsaUJBQWM7d0NBQ2RSLGlCQUFjO2tEQUNqQjs7Ozs7O2tEQUdELDhEQUFDRzt3Q0FBSVYsV0FBVTt3Q0FBZ0JnQixtQkFBZ0I7OzBEQUM3Qyw4REFBQ2Y7Z0RBQUVELFdBQVU7Z0RBQWdCVixNQUFLOzBEQUFJOzs7Ozs7MERBQ3RDLDhEQUFDVztnREFBRUQsV0FBVTtnREFBZ0JWLE1BQUs7MERBQUk7Ozs7OzswREFDdEMsOERBQUNvQjtnREFBSVYsV0FBVTs7Ozs7OzBEQUNmLDhEQUFDQztnREFBRUQsV0FBVTtnREFBZ0JWLE1BQUs7MERBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJNUMsOERBQUMyQjt3QkFBS2pCLFdBQVU7OzBDQUNkLDhEQUFDa0I7Z0NBQU1sQixXQUFVO2dDQUF1QkcsTUFBSztnQ0FBU2dCLGFBQVk7Z0NBQVNYLGNBQVc7Ozs7OzswQ0FDdEYsOERBQUNOO2dDQUFPRixXQUFVO2dDQUF1Q0csTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25GO0dBekVNbEI7S0FBQUE7QUEyRU4saUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxXb3JrXFxvbmxpbmVTdG9yZVxcbXktYXBwXFxwYWdlc1xcY29tcG9uZW50c1xcaGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9jb21wb25lbnRzL0hlYWRlci5qc1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIER5bmFtaWNhbGx5IGFkZCBCb290c3RyYXAgQ1NTIGFuZCBKUyBDRE4gbGlua3NcclxuICAgIGNvbnN0IGJvb3RzdHJhcENTUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgIGJvb3RzdHJhcENTUy5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbiAgICBib290c3RyYXBDU1MuaHJlZiA9ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjMuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbiAgICBib290c3RyYXBDU1MuaW50ZWdyaXR5ID0gJ3NzaGEzODQtUVdUS1p5anBQRWpJU3Y1V2FSVTlPRmVScG9rNlljdG5ZbURyNXBObHlUMmJSalhoMEpNaGpZNmhXK0FMRXdJSCc7XHJcbiAgICBib290c3RyYXBDU1MuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcclxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoYm9vdHN0cmFwQ1NTKTtcclxuXHJcbiAgICBjb25zdCBib290c3RyYXBKUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgYm9vdHN0cmFwSlMuc3JjID0gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMy4zL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanMnO1xyXG4gICAgYm9vdHN0cmFwSlMuaW50ZWdyaXR5ID0gJ3NoYTM4NC1ZdnBjcllmMHRZM2xIQjYwTk5rbVhjNXM5ZkRWWkxFU2FBQTU1TkR6T3hoeTlHa2NJZHNsSzFlTjdONmpJZUh6JztcclxuICAgIGJvb3RzdHJhcEpTLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJvb3RzdHJhcEpTKTtcclxuXHJcbiAgICAvLyBDbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgYWRkZWQgQ0ROIGxpbmtzIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50c1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChib290c3RyYXBDU1MpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGJvb3RzdHJhcEpTKTtcclxuICAgIH07XHJcbiAgfSwgW10pOyAvLyBFbXB0eSBkZXBlbmRlbmN5IGFycmF5IGVuc3VyZXMgdGhpcyBydW5zIG9ubHkgb25jZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+TmF2YmFyPC9hPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxyXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXHJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5Ib21lIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+TGluazwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIm5hdmJhckRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRHJvcGRvd25cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFjdGlvbjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lIG15LTIgbXktbGctMFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1yLXNtLTJcIiB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBhcmlhLWxhYmVsPVwiU2VhcmNoXCIvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIG15LTIgbXktc20tMFwiIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiSGVhZGVyIiwiYm9vdHN0cmFwQ1NTIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicmVsIiwiaHJlZiIsImludGVncml0eSIsImNyb3NzT3JpZ2luIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiYm9vdHN0cmFwSlMiLCJzcmMiLCJib2R5IiwicmVtb3ZlQ2hpbGQiLCJuYXYiLCJjbGFzc05hbWUiLCJhIiwiYnV0dG9uIiwidHlwZSIsImRhdGEtdG9nZ2xlIiwiZGF0YS10YXJnZXQiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1leHBhbmRlZCIsImFyaWEtbGFiZWwiLCJzcGFuIiwiZGl2IiwiaWQiLCJ1bCIsImxpIiwicm9sZSIsImFyaWEtaGFzcG9wdXAiLCJhcmlhLWxhYmVsbGVkYnkiLCJmb3JtIiwiaW5wdXQiLCJwbGFjZWhvbGRlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/header.js\n"));

/***/ })

});