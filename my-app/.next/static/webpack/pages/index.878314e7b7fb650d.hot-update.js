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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/components/header */ \"./pages/components/header.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Home = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            // Fetch products from Django backend\n            const fetchProducts = {\n                \"Home.useEffect.fetchProducts\": async ()=>{\n                    const response = await fetch('http://localhost:8000/accounts/products/'); // Replace with your actual backend URL\n                    const data = await response.json();\n                    setProducts(data); // Store fetched products in state\n                }\n            }[\"Home.useEffect.fetchProducts\"];\n            fetchProducts();\n        }\n    }[\"Home.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            background: 'linear-gradient(90deg, #e2e2e2, #c9d6ff)',\n            minHeight: '100vh'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: 'center',\n                    marginTop: '50px'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Welcome to the Home Page\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginTop: '50px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Our Products\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: 'flex',\n                                    flexWrap: 'wrap',\n                                    justifyContent: 'center'\n                                },\n                                children: products.length > 0 ? products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            border: '1px solid #ddd',\n                                            padding: '20px',\n                                            margin: '10px',\n                                            width: '200px',\n                                            textAlign: 'center'\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: product.image_url,\n                                                alt: product.name,\n                                                style: {\n                                                    width: '100%',\n                                                    height: 'auto'\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: product.name\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: product.description\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: [\n                                                        \"$\",\n                                                        product.price\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 22\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    product.stock,\n                                                    \" in stock\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/product/\".concat(product.id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    style: {\n                                                        marginTop: '10px',\n                                                        padding: '10px'\n                                                    },\n                                                    children: \"View Product\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, product.id, true, {\n                                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Loading products...\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDdEI7QUFDa0I7QUFFL0MsTUFBTUssT0FBTzs7SUFDWCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUUzQ0QsZ0RBQVNBOzBCQUFDO1lBQ1IscUNBQXFDO1lBQ3JDLE1BQU1PO2dEQUFnQjtvQkFDcEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDZDQUE4Qyx1Q0FBdUM7b0JBQ2xILE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtvQkFDaENMLFlBQVlJLE9BQVEsa0NBQWtDO2dCQUN4RDs7WUFFQUg7UUFDRjt5QkFBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNLO1FBQUlDLE9BQU87WUFDVkMsWUFBWTtZQUNaQyxXQUFXO1FBQ2I7OzBCQUNFLDhEQUFDWixnRUFBTUE7Ozs7OzBCQUNQLDhEQUFDUztnQkFBSUMsT0FBTztvQkFBRUcsV0FBVztvQkFBVUMsV0FBVztnQkFBTzs7a0NBQ25ELDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUtKLDhEQUFDTjt3QkFBSUMsT0FBTzs0QkFBRUksV0FBVzt3QkFBTzs7MENBQzlCLDhEQUFDRTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDUDtnQ0FBSUMsT0FBTztvQ0FBRU8sU0FBUztvQ0FBUUMsVUFBVTtvQ0FBUUMsZ0JBQWdCO2dDQUFTOzBDQUN2RWpCLFNBQVNrQixNQUFNLEdBQUcsSUFDakJsQixTQUFTbUIsR0FBRyxDQUFDLENBQUNDLHdCQUNaLDhEQUFDYjt3Q0FBcUJDLE9BQU87NENBQzNCYSxRQUFROzRDQUNSQyxTQUFTOzRDQUNUQyxRQUFROzRDQUNSQyxPQUFPOzRDQUNQYixXQUFXO3dDQUNiOzswREFDRSw4REFBQ2M7Z0RBQUlDLEtBQUtOLFFBQVFPLFNBQVM7Z0RBQUVDLEtBQUtSLFFBQVFTLElBQUk7Z0RBQUVyQixPQUFPO29EQUFFZ0IsT0FBTztvREFBUU0sUUFBUTtnREFBTzs7Ozs7OzBEQUN2Riw4REFBQ0M7MERBQUlYLFFBQVFTLElBQUk7Ozs7OzswREFDakIsOERBQUNHOzBEQUFHWixRQUFRYSxXQUFXOzs7Ozs7MERBQ3ZCLDhEQUFDRDswREFBRSw0RUFBQ0U7O3dEQUFPO3dEQUFFZCxRQUFRZSxLQUFLOzs7Ozs7Ozs7Ozs7MERBQzFCLDhEQUFDSDs7b0RBQUdaLFFBQVFnQixLQUFLO29EQUFDOzs7Ozs7OzBEQUNsQiw4REFBQ3ZDLGtEQUFJQTtnREFBQ3dDLE1BQU0sWUFBdUIsT0FBWGpCLFFBQVFrQixFQUFFOzBEQUNoQyw0RUFBQ0M7b0RBQU8vQixPQUFPO3dEQUFFSSxXQUFXO3dEQUFRVSxTQUFTO29EQUFPOzhEQUFHOzs7Ozs7Ozs7Ozs7dUNBYmpERixRQUFRa0IsRUFBRTs7OzttRUFrQnRCLDhEQUFDTjs4Q0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakI7R0F4RE1qQztLQUFBQTtBQTBETixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiRDpcXFdvcmtcXG9ubGluZVN0b3JlXFxteS1hcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdAL3BhZ2VzL2NvbXBvbmVudHMvaGVhZGVyJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBGZXRjaCBwcm9kdWN0cyBmcm9tIERqYW5nbyBiYWNrZW5kXHJcbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYWNjb3VudHMvcHJvZHVjdHMvJyk7ICAvLyBSZXBsYWNlIHdpdGggeW91ciBhY3R1YWwgYmFja2VuZCBVUkxcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0UHJvZHVjdHMoZGF0YSk7ICAvLyBTdG9yZSBmZXRjaGVkIHByb2R1Y3RzIGluIHN0YXRlXHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoUHJvZHVjdHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNlMmUyZTIsICNjOWQ2ZmYpJyxcclxuICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgfX0+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICc1MHB4JyB9fT5cclxuICAgICAgICA8aDE+V2VsY29tZSB0byB0aGUgSG9tZSBQYWdlPC9oMT5cclxuICAgICAgICB7Lyo8cD5UaGlzIGlzIHRoZSBtYWluIHBhZ2Ugb2YgeW91ciBhcHAuPC9wPiovfVxyXG5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNTBweCcgfX0+XHJcbiAgICAgICAgICA8aDI+T3VyIFByb2R1Y3RzPC9oMj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4V3JhcDogJ3dyYXAnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0cy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyxcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyMDBweCcsXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2VfdXJsfSBhbHQ9e3Byb2R1Y3QubmFtZX0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnYXV0bycgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPiR7cHJvZHVjdC5wcmljZX08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntwcm9kdWN0LnN0b2NrfSBpbiBzdG9jazwvcD5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpblRvcDogJzEwcHgnLCBwYWRkaW5nOiAnMTBweCcgfX0+VmlldyBQcm9kdWN0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPHA+TG9hZGluZyBwcm9kdWN0cy4uLjwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJIZWFkZXIiLCJIb21lIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImZldGNoUHJvZHVjdHMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmQiLCJtaW5IZWlnaHQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJoMSIsImgyIiwiZGlzcGxheSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJsZW5ndGgiLCJtYXAiLCJwcm9kdWN0IiwiYm9yZGVyIiwicGFkZGluZyIsIm1hcmdpbiIsIndpZHRoIiwiaW1nIiwic3JjIiwiaW1hZ2VfdXJsIiwiYWx0IiwibmFtZSIsImhlaWdodCIsImgzIiwicCIsImRlc2NyaXB0aW9uIiwic3Ryb25nIiwicHJpY2UiLCJzdG9jayIsImhyZWYiLCJpZCIsImJ1dHRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});