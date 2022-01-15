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

/***/ "./components/hero/portfolio.tsx":
/*!***************************************!*\
  !*** ./components/hero/portfolio.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_Fonts_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Fonts.module.scss */ \"./styles/Fonts.module.scss\");\n/* harmony import */ var _styles_Fonts_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Fonts_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Theme.module.scss */ \"./styles/Theme.module.scss\");\n/* harmony import */ var _styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Portfolio.module.scss */ \"./styles/Portfolio.module.scss\");\n/* harmony import */ var _styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_resources_portfolio_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/resources/portfolio.json */ \"./public/resources/portfolio.json\");\n/* harmony import */ var _public_resources_skills_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/resources/skills.json */ \"./public/resources/skills.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Portfolio = function(param) {\n    var isdarkMode = param.isdarkMode;\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var githubLogo = _public_resources_skills_json__WEBPACK_IMPORTED_MODULE_4__.skills[19].img;\n    var githubName = _public_resources_skills_json__WEBPACK_IMPORTED_MODULE_4__.skills[19].name;\n    var imgWidth = 30;\n    var imgHeight = 30;\n    var redirectToProject = function(index, portfolio) {\n        router.push({\n            pathname: \"/portfolio/\".concat(index),\n            query: {\n                isDarkMode: JSON.stringify(isdarkMode),\n                index: JSON.stringify(index)\n            }\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n            id: \"portfolioSection\",\n            __source: {\n                fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"\".concat((_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_5___default().portfolioWrapper), \" \").concat((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container), \" \").concat((_styles_Fonts_module_scss__WEBPACK_IMPORTED_MODULE_7___default().font), \" \\n                    \").concat(isdarkMode ? (_styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_8___default().dark_mode) : (_styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_8___default().light_mode)),\n                __source: {\n                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        __source: {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: \"Portfolio\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: \"I listed below a selection of the last projects I have worked on.\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                        className: (_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_5___default().panel),\n                        __source: {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: _public_resources_portfolio_json__WEBPACK_IMPORTED_MODULE_3__.portfolioList.map(function(portfolio, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                                className: (_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_5___default().portfolioListEntry),\n                                onClick: function(e) {\n                                    e.preventDefault();\n                                    redirectToProject(index, portfolio);\n                                },\n                                __source: {\n                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 33\n                                },\n                                __self: _this1,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: (_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),\n                                        __source: {\n                                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 37\n                                        },\n                                        __self: _this1,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                                                __source: {\n                                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 41\n                                                },\n                                                __self: _this1,\n                                                children: portfolio.title\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                href: portfolio.link.github,\n                                                target: \"_blank\",\n                                                className: \"\".concat(isdarkMode ? (_styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_8___default().githubLinkBgDark) : (_styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_8___default().githubLinkBgLight)),\n                                                rel: \"noreferrer\",\n                                                __source: {\n                                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 41\n                                                },\n                                                __self: _this1,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                    src: githubLogo,\n                                                    alt: githubName,\n                                                    width: imgWidth,\n                                                    height: imgHeight,\n                                                    layout: \"fixed\",\n                                                    __source: {\n                                                        fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 45\n                                                    },\n                                                    __self: _this1\n                                                })\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"\",\n                                        __source: {\n                                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 37\n                                        },\n                                        __self: _this1,\n                                        children: portfolio.description\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: (_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_5___default().moreInfo),\n                                        onClick: function(e) {\n                                            e.preventDefault();\n                                            redirectToProject(index, portfolio);\n                                        },\n                                        __source: {\n                                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 37\n                                        },\n                                        __self: _this1,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                                __source: {\n                                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 40\n                                                },\n                                                __self: _this1,\n                                                children: \"More details\"\n                                            }),\n                                            \"  \",\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                __source: {\n                                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 61\n                                                },\n                                                __self: _this1,\n                                                children: \"›\"\n                                            })\n                                        ]\n                                    })\n                                ]\n                            }, index));\n                        })\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(Portfolio, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDWEEsQ0FBQyxDQUFDQyxjQUFjOzRDQUNoQjNCLGlCQUFpQixDQUFDQyxLQUFLLEVBQUVDLFNBQVM7d0NBQ3RDLENBQUM7Ozs7Ozs7O2lIQUNEaUIsQ0FBQzs7Ozs7OzswREFBQyxDQUFZOzs0Q0FBSSxDQUFFO2lIQUFDMEIsQ0FBSTs7Ozs7OzswREFBQyxDQUFROzs7OzsrQkF0QmpDNUMsS0FBSzt3QkEyQnRCLENBQUM7Ozs7OztBQU16QixDQUFDO0dBOURLVixTQUFTOztRQUNJUCxrREFBUzs7O0tBRHRCTyxTQUFTO0FBZ0VmLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby9wb3J0Zm9saW8udHN4Pzg1ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IGZvbnRTdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvRm9udHMubW9kdWxlLnNjc3MnXG5pbXBvcnQgdGhlbWVTdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvVGhlbWUubW9kdWxlLnNjc3MnXG5pbXBvcnQgcG9ydGZvbGlvU3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL1BvcnRmb2xpby5tb2R1bGUuc2NzcydcblxuaW1wb3J0IHBvcnRmb2xpb0xpc3QgZnJvbSAnLi4vLi4vcHVibGljL3Jlc291cmNlcy9wb3J0Zm9saW8uanNvbidcbmltcG9ydCBza2lsbHNMaXN0IGZyb20gJy4uLy4uL3B1YmxpYy9yZXNvdXJjZXMvc2tpbGxzLmpzb24nXG5cbnR5cGUgcG9ydGZvbGlvUHJvcHM9e1xuICAgIGlzZGFya01vZGU/OiBib29sZWFuLFxufVxuZXhwb3J0IHR5cGUgcHJvamVjdFByb3BzPXtcblxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nLFxuICAgIGNoYWxsZW5nZT86IHN0cmluZyxcbiAgICBsZXNzb24/OiBzdHJpbmcsXG4gICAgdGVjaD86e1xuICAgICAgICBGcm9udGVuZD86W3N0cmluZ10sXG4gICAgICAgIEJhY2tlbmQ/OltzdHJpbmddLFxuICAgIH0sXG4gICAgaW1nPzogW3N0cmluZ10sXG4gICAgbGluaz86IHtcbiAgICAgICAgZ2l0aHViOiBzdHJpbmdcbiAgICB9LFxuXG59XG5jb25zdCBQb3J0Zm9saW8gPSAoe2lzZGFya01vZGV9IDogcG9ydGZvbGlvUHJvcHMpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGdpdGh1YkxvZ28gPSBza2lsbHNMaXN0W1wic2tpbGxzXCJdWzE5XS5pbWc7XG4gICAgY29uc3QgZ2l0aHViTmFtZSA9IHNraWxsc0xpc3RbXCJza2lsbHNcIl1bMTldLm5hbWU7XG5cbiAgICBjb25zdCBpbWdXaWR0aCA9IDMwO1xuICAgIGNvbnN0IGltZ0hlaWdodCA9IDMwO1xuXG4gICAgY29uc3QgcmVkaXJlY3RUb1Byb2plY3QgPSAoaW5kZXggOiBudW1iZXIsIHBvcnRmb2xpbzogYW55KSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBgL3BvcnRmb2xpby8ke2luZGV4fWAsXG4gICAgICAgICAgICBxdWVyeTogeyBcbiAgICAgICAgICAgICAgICBpc0RhcmtNb2RlOiBKU09OLnN0cmluZ2lmeShpc2RhcmtNb2RlKSxcbiAgICAgICAgICAgICAgICBpbmRleDogSlNPTi5zdHJpbmdpZnkoaW5kZXgpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cInBvcnRmb2xpb1NlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cG9ydGZvbGlvU3R5bGUucG9ydGZvbGlvV3JhcHBlcn0gJHtzdHlsZS5jb250YWluZXJ9ICR7Zm9udFN0eWxlLmZvbnR9IFxuICAgICAgICAgICAgICAgICAgICAke2lzZGFya01vZGUgPyB0aGVtZVN0eWxlLmRhcmtfbW9kZSA6IHRoZW1lU3R5bGUubGlnaHRfbW9kZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlBvcnRmb2xpbzwvaDE+IFxuICAgICAgICAgICAgICAgICAgICA8cD5JIGxpc3RlZCBiZWxvdyBhIHNlbGVjdGlvbiBvZiB0aGUgbGFzdCBwcm9qZWN0cyBJIGhhdmUgd29ya2VkIG9uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17cG9ydGZvbGlvU3R5bGUucGFuZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3BvcnRmb2xpb0xpc3RbXCJwb3J0Zm9saW9MaXN0XCJdLm1hcCgocG9ydGZvbGlvLCBpbmRleCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3BvcnRmb2xpb1N0eWxlLnBvcnRmb2xpb0xpc3RFbnRyeX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvUHJvamVjdChpbmRleCwgcG9ydGZvbGlvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BvcnRmb2xpb1N0eWxlLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3J0Zm9saW8udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3J0Zm9saW8ubGluay5naXRodWJ9IHRhcmdldD1cIl9ibGFua1wiICBjbGFzc05hbWU9e2Ake2lzZGFya01vZGUgPyB0aGVtZVN0eWxlLmdpdGh1YkxpbmtCZ0RhcmsgOiB0aGVtZVN0eWxlLmdpdGh1YkxpbmtCZ0xpZ2h0fWB9IHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Z2l0aHViTG9nb30gYWx0PXtnaXRodWJOYW1lfSB3aWR0aD17aW1nV2lkdGh9IGhlaWdodD17aW1nSGVpZ2h0fSBsYXlvdXQ9XCJmaXhlZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BvcnRmb2xpby5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3J0Zm9saW9TdHlsZS5tb3JlSW5mb30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RUb1Byb2plY3QoaW5kZXgsIHBvcnRmb2xpbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Nb3JlIGRldGFpbHM8L3A+ICA8c3Bhbj4mcnNhcXVvOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpb1xuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlUm91dGVyIiwic3R5bGUiLCJmb250U3R5bGUiLCJ0aGVtZVN0eWxlIiwicG9ydGZvbGlvU3R5bGUiLCJwb3J0Zm9saW9MaXN0Iiwic2tpbGxzTGlzdCIsIlBvcnRmb2xpbyIsImlzZGFya01vZGUiLCJyb3V0ZXIiLCJnaXRodWJMb2dvIiwiaW1nIiwiZ2l0aHViTmFtZSIsIm5hbWUiLCJpbWdXaWR0aCIsImltZ0hlaWdodCIsInJlZGlyZWN0VG9Qcm9qZWN0IiwiaW5kZXgiLCJwb3J0Zm9saW8iLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImlzRGFya01vZGUiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VjdGlvbiIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwicG9ydGZvbGlvV3JhcHBlciIsImNvbnRhaW5lciIsImZvbnQiLCJkYXJrX21vZGUiLCJsaWdodF9tb2RlIiwiaDEiLCJwIiwidWwiLCJwYW5lbCIsIm1hcCIsImxpIiwicG9ydGZvbGlvTGlzdEVudHJ5Iiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlIiwiaDIiLCJhIiwiaHJlZiIsImxpbmsiLCJnaXRodWIiLCJ0YXJnZXQiLCJnaXRodWJMaW5rQmdEYXJrIiwiZ2l0aHViTGlua0JnTGlnaHQiLCJyZWwiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImxheW91dCIsImRlc2NyaXB0aW9uIiwibW9yZUluZm8iLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hero/portfolio.tsx\n");

/***/ })

});