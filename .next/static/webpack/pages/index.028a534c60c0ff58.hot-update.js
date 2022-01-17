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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_Fonts_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Fonts.module.scss */ \"./styles/Fonts.module.scss\");\n/* harmony import */ var _styles_Fonts_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Fonts_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/Theme.module.scss */ \"./styles/Theme.module.scss\");\n/* harmony import */ var _styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Portfolio.module.scss */ \"./styles/Portfolio.module.scss\");\n/* harmony import */ var _styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_resources_portfolio_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/resources/portfolio.json */ \"./public/resources/portfolio.json\");\n/* harmony import */ var _public_resources_skills_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/resources/skills.json */ \"./public/resources/skills.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Portfolio = function(param) {\n    var isdarkMode = param.isdarkMode;\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var githubLogo = _public_resources_skills_json__WEBPACK_IMPORTED_MODULE_4__.skills[19].img;\n    var githubName = _public_resources_skills_json__WEBPACK_IMPORTED_MODULE_4__.skills[19].name;\n    var imgWidth = 30;\n    var imgHeight = 30;\n    var portfolioContentRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    var redirectToProject = function(index) {\n        router.push({\n            pathname: \"/portfolio/\".concat(index),\n            query: {\n                isDarkMode: JSON.stringify(isdarkMode),\n                id: JSON.stringify(index)\n            }\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n            id: \"portfolioSection\",\n            __source: {\n                fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                ref: portfolioContentRef,\n                className: \"\".concat((_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default().portfolioWrapper), \" \").concat((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container), \" \").concat((_styles_Fonts_module_scss__WEBPACK_IMPORTED_MODULE_8___default().font), \" \\n                    \").concat(isdarkMode ? (_styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_9___default().dark_mode) : (_styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_9___default().light_mode)),\n                __source: {\n                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        __source: {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: \"Portfolio\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: \"I listed below a selection of the last projects I have worked on.\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                        className: (_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default().panel),\n                        __source: {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: _public_resources_portfolio_json__WEBPACK_IMPORTED_MODULE_3__.portfolioList.map(function(portfolio, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                                className: (_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default().portfolioListEntry),\n                                onClick: function(e) {\n                                    e.preventDefault();\n                                    redirectToProject(index);\n                                },\n                                __source: {\n                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 33\n                                },\n                                __self: _this1,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: (_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),\n                                        __source: {\n                                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 37\n                                        },\n                                        __self: _this1,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                                                __source: {\n                                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 41\n                                                },\n                                                __self: _this1,\n                                                children: portfolio.title\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                href: portfolio.link.github,\n                                                target: \"_blank\",\n                                                className: \"\".concat(isdarkMode ? (_styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_9___default().githubLinkBgDark) : (_styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_9___default().githubLinkBgLight)),\n                                                rel: \"noreferrer\",\n                                                __source: {\n                                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 41\n                                                },\n                                                __self: _this1,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                    src: githubLogo,\n                                                    alt: githubName,\n                                                    width: imgWidth,\n                                                    height: imgHeight,\n                                                    layout: \"fixed\",\n                                                    __source: {\n                                                        fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 45\n                                                    },\n                                                    __self: _this1\n                                                })\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"\",\n                                        __source: {\n                                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 37\n                                        },\n                                        __self: _this1,\n                                        children: portfolio.description\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: (_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default().moreInfo),\n                                        __source: {\n                                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 37\n                                        },\n                                        __self: _this1,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                                __source: {\n                                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 40\n                                                },\n                                                __self: _this1,\n                                                children: \"More details\"\n                                            }),\n                                            \"  \",\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                __source: {\n                                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 61\n                                                },\n                                                __self: _this1,\n                                                children: \"›\"\n                                            })\n                                        ]\n                                    })\n                                ]\n                            }, index));\n                        })\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(Portfolio, \"bCrMdli9J3z+bb8YURSROPk2tR0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QiwrRUFBdUI7Ozs7Ozs7O2lIQU1uQ2lDLENBQUM7Ozs7Ozs7MERBQUMsQ0FBWTs7NENBQUksQ0FBRTtpSEFBQzJCLENBQUk7Ozs7Ozs7MERBQUMsQ0FBUTs7Ozs7K0JBdkJqQzdDLEtBQUs7d0JBNEJ0QixDQUFDOzs7Ozs7QUFNekIsQ0FBQztHQWpFS1gsU0FBUzs7UUFDSVIsa0RBQVM7OztLQUR0QlEsU0FBUztBQW1FZiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlcm8vcG9ydGZvbGlvLnRzeD84NWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcbmltcG9ydCBmb250U3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL0ZvbnRzLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHRoZW1lU3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL1RoZW1lLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHBvcnRmb2xpb1N0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy9Qb3J0Zm9saW8ubW9kdWxlLnNjc3MnXG5cbmltcG9ydCBwb3J0Zm9saW9MaXN0IGZyb20gJy4uLy4uL3B1YmxpYy9yZXNvdXJjZXMvcG9ydGZvbGlvLmpzb24nXG5pbXBvcnQgc2tpbGxzTGlzdCBmcm9tICcuLi8uLi9wdWJsaWMvcmVzb3VyY2VzL3NraWxscy5qc29uJ1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5cbnR5cGUgcG9ydGZvbGlvUHJvcHM9e1xuICAgIGlzZGFya01vZGU/OiBib29sZWFuLFxufVxuZXhwb3J0IHR5cGUgcHJvamVjdFByb3BzPXtcblxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nLFxuICAgIGNoYWxsZW5nZT86IHN0cmluZyxcbiAgICBsZXNzb24/OiBzdHJpbmcsXG4gICAgdGVjaD86e1xuICAgICAgICBGcm9udGVuZD86W3N0cmluZ10sXG4gICAgICAgIEJhY2tlbmQ/OltzdHJpbmddLFxuICAgIH0sXG4gICAgaW1nPzogW3N0cmluZ10sXG4gICAgbGluaz86IHtcbiAgICAgICAgZ2l0aHViOiBzdHJpbmdcbiAgICB9LFxuXG59XG5jb25zdCBQb3J0Zm9saW8gPSAoe2lzZGFya01vZGV9IDogcG9ydGZvbGlvUHJvcHMpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGdpdGh1YkxvZ28gPSBza2lsbHNMaXN0W1wic2tpbGxzXCJdWzE5XS5pbWc7XG4gICAgY29uc3QgZ2l0aHViTmFtZSA9IHNraWxsc0xpc3RbXCJza2lsbHNcIl1bMTldLm5hbWU7XG5cbiAgICBjb25zdCBpbWdXaWR0aCA9IDMwO1xuICAgIGNvbnN0IGltZ0hlaWdodCA9IDMwO1xuXG4gICAgY29uc3QgcG9ydGZvbGlvQ29udGVudFJlZj0gdXNlUmVmPGFueT4obnVsbCk7XG5cbiAgICBjb25zdCByZWRpcmVjdFRvUHJvamVjdCA9IChpbmRleCA6IG51bWJlcikgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogYC9wb3J0Zm9saW8vJHtpbmRleH1gLFxuICAgICAgICAgICAgcXVlcnk6IHsgXG4gICAgICAgICAgICAgICAgaXNEYXJrTW9kZTogSlNPTi5zdHJpbmdpZnkoaXNkYXJrTW9kZSksXG4gICAgICAgICAgICAgICAgaWQ6IEpTT04uc3RyaW5naWZ5KGluZGV4KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJwb3J0Zm9saW9TZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e3BvcnRmb2xpb0NvbnRlbnRSZWZ9IGNsYXNzTmFtZT17YCR7cG9ydGZvbGlvU3R5bGUucG9ydGZvbGlvV3JhcHBlcn0gJHtzdHlsZS5jb250YWluZXJ9ICR7Zm9udFN0eWxlLmZvbnR9IFxuICAgICAgICAgICAgICAgICAgICAke2lzZGFya01vZGUgPyB0aGVtZVN0eWxlLmRhcmtfbW9kZSA6IHRoZW1lU3R5bGUubGlnaHRfbW9kZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlBvcnRmb2xpbzwvaDE+IFxuICAgICAgICAgICAgICAgICAgICA8cD5JIGxpc3RlZCBiZWxvdyBhIHNlbGVjdGlvbiBvZiB0aGUgbGFzdCBwcm9qZWN0cyBJIGhhdmUgd29ya2VkIG9uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17cG9ydGZvbGlvU3R5bGUucGFuZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3BvcnRmb2xpb0xpc3RbXCJwb3J0Zm9saW9MaXN0XCJdLm1hcCgocG9ydGZvbGlvLCBpbmRleCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3BvcnRmb2xpb1N0eWxlLnBvcnRmb2xpb0xpc3RFbnRyeX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFRvUHJvamVjdChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3J0Zm9saW9TdHlsZS50aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9ydGZvbGlvLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cG9ydGZvbGlvLmxpbmsuZ2l0aHVifSB0YXJnZXQ9XCJfYmxhbmtcIiAgY2xhc3NOYW1lPXtgJHtpc2RhcmtNb2RlID8gdGhlbWVTdHlsZS5naXRodWJMaW5rQmdEYXJrIDogdGhlbWVTdHlsZS5naXRodWJMaW5rQmdMaWdodH1gfSByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2dpdGh1YkxvZ299IGFsdD17Z2l0aHViTmFtZX0gd2lkdGg9e2ltZ1dpZHRofSBoZWlnaHQ9e2ltZ0hlaWdodH0gbGF5b3V0PVwiZml4ZWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3J0Zm9saW8uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cG9ydGZvbGlvU3R5bGUubW9yZUluZm99IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eyhlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJlZGlyZWN0VG9Qcm9qZWN0KGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1vcmUgZGV0YWlsczwvcD4gIDxzcGFuPiZyc2FxdW87PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJzdHlsZSIsImZvbnRTdHlsZSIsInRoZW1lU3R5bGUiLCJwb3J0Zm9saW9TdHlsZSIsInBvcnRmb2xpb0xpc3QiLCJza2lsbHNMaXN0IiwidXNlUmVmIiwiUG9ydGZvbGlvIiwiaXNkYXJrTW9kZSIsInJvdXRlciIsImdpdGh1YkxvZ28iLCJpbWciLCJnaXRodWJOYW1lIiwibmFtZSIsImltZ1dpZHRoIiwiaW1nSGVpZ2h0IiwicG9ydGZvbGlvQ29udGVudFJlZiIsInJlZGlyZWN0VG9Qcm9qZWN0IiwiaW5kZXgiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImlzRGFya01vZGUiLCJKU09OIiwic3RyaW5naWZ5IiwiaWQiLCJzZWN0aW9uIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwicG9ydGZvbGlvV3JhcHBlciIsImNvbnRhaW5lciIsImZvbnQiLCJkYXJrX21vZGUiLCJsaWdodF9tb2RlIiwiaDEiLCJwIiwidWwiLCJwYW5lbCIsIm1hcCIsInBvcnRmb2xpbyIsImxpIiwicG9ydGZvbGlvTGlzdEVudHJ5Iiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlIiwiaDIiLCJhIiwiaHJlZiIsImxpbmsiLCJnaXRodWIiLCJ0YXJnZXQiLCJnaXRodWJMaW5rQmdEYXJrIiwiZ2l0aHViTGlua0JnTGlnaHQiLCJyZWwiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImxheW91dCIsImRlc2NyaXB0aW9uIiwibW9yZUluZm8iLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hero/portfolio.tsx\n");

/***/ })

});