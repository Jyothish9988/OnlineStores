"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./pages/components/header.js\");\n/* harmony import */ var _styles_product_details_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/product_details.css */ \"./pages/styles/product_details.css\");\n/* harmony import */ var _styles_product_details_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_product_details_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ProductDetails = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ProductDetails.useEffect\": ()=>{\n            if (id) {\n                const fetchProductDetails = {\n                    \"ProductDetails.useEffect.fetchProductDetails\": async ()=>{\n                        try {\n                            const response = await fetch(\"http://localhost:8000/accounts/products/\".concat(id, \"/\"));\n                            if (!response.ok) {\n                                throw new Error('Network response was not ok');\n                            }\n                            const data = await response.json();\n                            setProduct(data);\n                            setLoading(false);\n                        } catch (error) {\n                            setError('Failed to fetch product details.');\n                            setLoading(false);\n                        }\n                    }\n                }[\"ProductDetails.useEffect.fetchProductDetails\"];\n                fetchProductDetails();\n            }\n        }\n    }[\"ProductDetails.useEffect\"], [\n        id\n    ]);\n    if (!id) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Product ID is missing. Please check the URL.\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n            lineNumber: 35,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading product details...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n            lineNumber: 39,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: error\n        }, void 0, false, {\n            fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n            lineNumber: 43,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Product not found.\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n            lineNumber: 47,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            minHeight: '100vh'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"product-info\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"item-image-parent\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"item-list-vertical\",\n                                        children: product.image_thumbnails && product.image_thumbnails.map((thumb, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"thumb-box\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: thumb,\n                                                    alt: \"thumbnail \".concat(index + 1)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, index, false, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                                lineNumber: 59,\n                                                columnNumber: 19\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"item-image-main\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: product.image_url || '/images/placeholder.png',\n                                            alt: product.name,\n                                            onError: (e)=>e.target.src = '/images/placeholder.png'\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"item-info-parent\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"main-info\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                children: product.name\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                                lineNumber: 75,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"star-rating\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: \"★★★★\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    \"★\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                                lineNumber: 76,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    \"Price: \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        id: \"price\",\n                                                        children: [\n                                                            \"₹ \",\n                                                            product.price\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                                lineNumber: 79,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"select-items\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"change-color\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"thumb-box\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: product.image_url || '/images/placeholder.png',\n                                                        alt: \"Color\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                                lineNumber: 83,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"description\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                className: \"buy-now-btn\",\n                                                                children: \"Buy Now\"\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                                                lineNumber: 92,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                                            lineNumber: 91,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                className: \"add-to-cart-btn\",\n                                                                children: \"Add to Cart\"\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                                                lineNumber: 95,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                                            lineNumber: 94,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                                lineNumber: 89,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Work\\\\onlineStore\\\\my-app\\\\pages\\\\product\\\\[id].js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductDetails, \"/lZlanm7Fr2h1G8k06Tw2SY87LQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProductDetails;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlsRSw4REFBQ1g7Z0RBQUlJLFdBQVU7MERBQ2IsNEVBQUNnQjs7c0VBQ0MsOERBQUNDO3NFQUNDLDRFQUFDQztnRUFBT2xCLFdBQVU7MEVBQWM7Ozs7Ozs7Ozs7O3NFQUVsQyw4REFBQ2lCO3NFQUNDLDRFQUFDQztnRUFBT2xCLFdBQVU7MEVBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVcxRDtHQXBHTXRCOztRQUNXRixrREFBU0E7OztLQURwQkU7QUFzR04saUVBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxXb3JrXFxvbmxpbmVTdG9yZVxcbXktYXBwXFxwYWdlc1xccHJvZHVjdFxcW2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvcHJvZHVjdF9kZXRhaWxzLmNzcyc7XHJcblxyXG5jb25zdCBQcm9kdWN0RGV0YWlscyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICBjb25zdCBmZXRjaFByb2R1Y3REZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYWNjb3VudHMvcHJvZHVjdHMvJHtpZH0vYCk7XHJcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIHNldFByb2R1Y3QoZGF0YSk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBwcm9kdWN0IGRldGFpbHMuJyk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGZldGNoUHJvZHVjdERldGFpbHMoKTtcclxuICAgIH1cclxuICB9LCBbaWRdKTtcclxuXHJcbiAgaWYgKCFpZCkge1xyXG4gICAgcmV0dXJuIDxwPlByb2R1Y3QgSUQgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHRoZSBVUkwuPC9wPjtcclxuICB9XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPHA+TG9hZGluZyBwcm9kdWN0IGRldGFpbHMuLi48L3A+O1xyXG4gIH1cclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPHA+e2Vycm9yfTwvcD47XHJcbiAgfVxyXG5cclxuICBpZiAoIXByb2R1Y3QpIHtcclxuICAgIHJldHVybiA8cD5Qcm9kdWN0IG5vdCBmb3VuZC48L3A+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgbWluSGVpZ2h0OiAnMTAwdmgnIH19PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwicHJvZHVjdC1pbmZvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0taW1hZ2UtcGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWxpc3QtdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0LmltYWdlX3RodW1ibmFpbHMgJiYgcHJvZHVjdC5pbWFnZV90aHVtYm5haWxzLm1hcCgodGh1bWIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGh1bWItYm94XCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RodW1ifSBhbHQ9e2B0aHVtYm5haWwgJHtpbmRleCArIDF9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0taW1hZ2UtbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2VfdXJsIHx8ICcvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZyd9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4gZS50YXJnZXQuc3JjID0gJy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWluZm8tcGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxoND57cHJvZHVjdC5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXItcmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPuKYheKYheKYheKYhTwvc3Bhbj7imIVcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+UHJpY2U6IDxzcGFuIGlkPVwicHJpY2VcIj7igrkge3Byb2R1Y3QucHJpY2V9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbmdlLWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGh1bWItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2VfdXJsIHx8ICcvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZyd9IGFsdD1cIkNvbG9yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1eS1ub3ctYnRuXCI+QnV5IE5vdzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtdG8tY2FydC1idG5cIj5BZGQgdG8gQ2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkhlYWRlciIsIlByb2R1Y3REZXRhaWxzIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hQcm9kdWN0RGV0YWlscyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJwIiwiZGl2Iiwic3R5bGUiLCJtaW5IZWlnaHQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaW1hZ2VfdGh1bWJuYWlscyIsIm1hcCIsInRodW1iIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJhbHQiLCJpbWFnZV91cmwiLCJuYW1lIiwib25FcnJvciIsImUiLCJ0YXJnZXQiLCJoNCIsInNwYW4iLCJwcmljZSIsInVsIiwibGkiLCJidXR0b24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[id].js\n"));

/***/ })

});