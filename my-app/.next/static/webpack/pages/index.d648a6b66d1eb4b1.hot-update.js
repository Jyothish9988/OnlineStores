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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ \"./pages/components/header.js\");\n/* harmony import */ var _styles_product_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/product_style.css */ \"./pages/styles/product_style.css\");\n/* harmony import */ var _styles_product_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_product_style_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n // Adjusted path\n // Adjusted path\nconst Home = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            const fetchProducts = {\n                \"Home.useEffect.fetchProducts\": async ()=>{\n                    const response = await fetch('http://localhost:8000/accounts/products/');\n                    const data = await response.json();\n                    setProducts(data);\n                }\n            }[\"Home.useEffect.fetchProducts\"];\n            fetchProducts();\n            const checkLoginStatus = {\n                \"Home.useEffect.checkLoginStatus\": ()=>{\n                    setIsLoggedIn(!!localStorage.getItem('token'));\n                }\n            }[\"Home.useEffect.checkLoginStatus\"];\n            checkLoginStatus();\n        }\n    }[\"Home.useEffect\"], []);\n    const handleBuyNowClick = (productId)=>{\n        if (!isLoggedIn) {\n            alert('Not logged in. Please log in to continue.');\n            window.location.href = '/login'; // Redirect to login page\n        } else {\n            window.location.href = \"/product/\".concat(productId);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            minHeight: '100vh'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: 'center',\n                    marginTop: '50px'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Welcome to the Home Page\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cont\",\n                        children: products.length > 0 ? products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"product-card\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"product-card__image\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: product.image_url,\n                                            alt: product.name\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"product-card__info\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"product-card__title\",\n                                                children: product.name\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"product-card__description\",\n                                                children: product.description\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"product-card__price-row\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"product-card__price\",\n                                                        children: [\n                                                            \"$\",\n                                                            product.price\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"product-card__btn\",\n                                                        onClick: ()=>handleBuyNowClick(product.id),\n                                                        children: \"Buy Now\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, product.id, true, {\n                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Loading products...\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\index.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"Yo5b8kwQVMG1j33DJFmfj3veCL0=\");\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUNZLENBQUMsZ0JBQWdCO0FBQ3RCLENBQUMsZ0JBQWdCO0FBRXJELE1BQU1LLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO0lBRTdDRCxnREFBU0E7MEJBQUM7WUFDUixNQUFNUztnREFBZ0I7b0JBQ3BCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtvQkFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO29CQUNoQ1AsWUFBWU07Z0JBQ2Q7O1lBRUFIO1lBRUEsTUFBTUs7bURBQW1CO29CQUN2Qk4sY0FBYyxDQUFDLENBQUNPLGFBQWFDLE9BQU8sQ0FBQztnQkFDdkM7O1lBRUFGO1FBQ0Y7eUJBQUcsRUFBRTtJQUVMLE1BQU1HLG9CQUFvQixDQUFDQztRQUN6QixJQUFJLENBQUNYLFlBQVk7WUFDZlksTUFBTTtZQUNOQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRyxVQUFVLHlCQUF5QjtRQUM1RCxPQUFPO1lBQ0xGLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLFlBQXNCLE9BQVZKO1FBQ3JDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0s7UUFBSUMsT0FBTztZQUFFQyxXQUFXO1FBQVE7OzBCQUMvQiw4REFBQ3RCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNvQjtnQkFBSUMsT0FBTztvQkFBRUUsV0FBVztvQkFBVUMsV0FBVztnQkFBTzs7a0NBQ25ELDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUVKLDhEQUFDTDt3QkFBSU0sV0FBVTtrQ0FDWnhCLFNBQVN5QixNQUFNLEdBQUcsSUFDakJ6QixTQUFTMEIsR0FBRyxDQUFDLENBQUNDLHdCQUNaLDhEQUFDVDtnQ0FBcUJNLFdBQVU7O2tEQUM5Qiw4REFBQ047d0NBQUlNLFdBQVU7a0RBQ2IsNEVBQUNJOzRDQUFJQyxLQUFLRixRQUFRRyxTQUFTOzRDQUFFQyxLQUFLSixRQUFRSyxJQUFJOzs7Ozs7Ozs7OztrREFFaEQsOERBQUNkO3dDQUFJTSxXQUFVOzswREFDYiw4REFBQ1M7Z0RBQUdULFdBQVU7MERBQXVCRyxRQUFRSyxJQUFJOzs7Ozs7MERBQ2pELDhEQUFDRTtnREFBRVYsV0FBVTswREFBNkJHLFFBQVFRLFdBQVc7Ozs7OzswREFDN0QsOERBQUNqQjtnREFBSU0sV0FBVTs7a0VBQ2IsOERBQUNZO3dEQUFLWixXQUFVOzs0REFBc0I7NERBQUVHLFFBQVFVLEtBQUs7Ozs7Ozs7a0VBQ3JELDhEQUFDQzt3REFDQ2QsV0FBVTt3REFDVmUsU0FBUyxJQUFNM0Isa0JBQWtCZSxRQUFRYSxFQUFFO2tFQUM1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFaR2IsUUFBUWEsRUFBRTs7OzsyREFvQnRCLDhEQUFDTjtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNZjtHQWhFTW5DO0tBQUFBO0FBa0VOLGlFQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJEOlxcV29ya1xcb25saW5lU3RvcmVcXG15LWFwcFxccGFnZXNcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInOyAvLyBBZGp1c3RlZCBwYXRoXHJcbmltcG9ydCAnLi9zdHlsZXMvcHJvZHVjdF9zdHlsZS5jc3MnOyAvLyBBZGp1c3RlZCBwYXRoXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hY2NvdW50cy9wcm9kdWN0cy8nKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0UHJvZHVjdHMoZGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoUHJvZHVjdHMoKTtcclxuXHJcbiAgICBjb25zdCBjaGVja0xvZ2luU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICBzZXRJc0xvZ2dlZEluKCEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjaGVja0xvZ2luU3RhdHVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVCdXlOb3dDbGljayA9IChwcm9kdWN0SWQpID0+IHtcclxuICAgIGlmICghaXNMb2dnZWRJbikge1xyXG4gICAgICBhbGVydCgnTm90IGxvZ2dlZCBpbi4gUGxlYXNlIGxvZyBpbiB0byBjb250aW51ZS4nKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2xvZ2luJzsgLy8gUmVkaXJlY3QgdG8gbG9naW4gcGFnZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL3Byb2R1Y3QvJHtwcm9kdWN0SWR9YDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBtaW5IZWlnaHQ6ICcxMDB2aCcgfX0+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICc1MHB4JyB9fT5cclxuICAgICAgICA8aDE+V2VsY29tZSB0byB0aGUgSG9tZSBQYWdlPC9oMT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250XCI+XHJcbiAgICAgICAgICB7cHJvZHVjdHMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRfX2ltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlX3VybH0gYWx0PXtwcm9kdWN0Lm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkX19pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRfX3RpdGxlXCI+e3Byb2R1Y3QubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRfX2Rlc2NyaXB0aW9uXCI+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZF9fcHJpY2Utcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkX19wcmljZVwiPiR7cHJvZHVjdC5wcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkX19idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQnV5Tm93Q2xpY2socHJvZHVjdC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQnV5IE5vd1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPHA+TG9hZGluZyBwcm9kdWN0cy4uLjwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkhlYWRlciIsIkhvbWUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJmZXRjaFByb2R1Y3RzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY2hlY2tMb2dpblN0YXR1cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoYW5kbGVCdXlOb3dDbGljayIsInByb2R1Y3RJZCIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGl2Iiwic3R5bGUiLCJtaW5IZWlnaHQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJoMSIsImNsYXNzTmFtZSIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3QiLCJpbWciLCJzcmMiLCJpbWFnZV91cmwiLCJhbHQiLCJuYW1lIiwiaDIiLCJwIiwiZGVzY3JpcHRpb24iLCJzcGFuIiwicHJpY2UiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});