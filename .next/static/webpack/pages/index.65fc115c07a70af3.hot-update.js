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

/***/ "./animation/portfolioSectionAnimation.ts":
/*!************************************************!*\
  !*** ./animation/portfolioSectionAnimation.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"revealPortfolioSection\": function() { return /* binding */ revealPortfolioSection; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar revealPortfolioSection = function(portfolioContentRef) {\n    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({\n        scrollTrigger: {\n            trigger: portfolioContentRef.current,\n            start: \"-=800\"\n        }\n    });\n    tl.from(portfolioContentRef.current.querySelector('h1'), {\n        opacity: 0,\n        y: -150,\n        skewX: 10,\n        duration: 1.5,\n        ease: \"power3.inOut\"\n    });\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hbmltYXRpb24vcG9ydGZvbGlvU2VjdGlvbkFuaW1hdGlvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUM4QjtBQUloRCxHQUFLLENBQUNFLHNCQUFzQixHQUFHLFFBQVEsQ0FBUEMsbUJBQXlDLEVBQUksQ0FBQztJQUNqRkgscURBQW1CLENBQUNDLGtFQUFhO0lBQ2pDLEdBQUcsQ0FBQ0ksRUFBRSxHQUFHTCwrQ0FBYSxDQUFDLENBQUM7UUFDcEJPLGFBQWEsRUFBRSxDQUFDO1lBQ1pDLE9BQU8sRUFBRUwsbUJBQW1CLENBQUNNLE9BQU87WUFDcENDLEtBQUssRUFBRSxDQUFPO1FBQ2xCLENBQUM7SUFDTCxDQUFDO0lBRURMLEVBQUUsQ0FDRE0sSUFBSSxDQUFDUixtQkFBbUIsQ0FBQ00sT0FBTyxDQUFDRyxhQUFhLENBQUMsQ0FBSSxNQUFFLENBQUM7UUFDbkRDLE9BQU8sRUFBRSxDQUFDO1FBQ1ZDLENBQUMsR0FBRyxHQUFHO1FBQ1BDLEtBQUssRUFBRSxFQUFFO1FBQ1RDLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRSxDQUFjO0lBQ3hCLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FuaW1hdGlvbi9wb3J0Zm9saW9TZWN0aW9uQW5pbWF0aW9uLnRzP2Y5MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnc2FwfSBmcm9tICdnc2FwJztcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tICdnc2FwL2Rpc3QvU2Nyb2xsVHJpZ2dlcidcbmltcG9ydCB7IE11dGFibGVSZWZPYmplY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcG9ydGZvbGlvIGZyb20gJy4uL2NvbXBvbmVudHMvaGVyby9wb3J0Zm9saW8nO1xuXG5leHBvcnQgY29uc3QgcmV2ZWFsUG9ydGZvbGlvU2VjdGlvbiA9IChwb3J0Zm9saW9Db250ZW50UmVmOk11dGFibGVSZWZPYmplY3Q8YW55PikgPT57XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgdHJpZ2dlcjogcG9ydGZvbGlvQ29udGVudFJlZi5jdXJyZW50LFxuICAgICAgICAgICAgc3RhcnQ6IFwiLT04MDBcIlxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB0bFxuICAgIC5mcm9tKHBvcnRmb2xpb0NvbnRlbnRSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCdoMScpLHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgeTogLTE1MCxcbiAgICAgICAgc2tld1g6IDEwLFxuICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICBlYXNlOiBcInBvd2VyMy5pbk91dFwiXG4gICAgfSlcbn0iXSwibmFtZXMiOlsiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJyZXZlYWxQb3J0Zm9saW9TZWN0aW9uIiwicG9ydGZvbGlvQ29udGVudFJlZiIsInJlZ2lzdGVyUGx1Z2luIiwidGwiLCJ0aW1lbGluZSIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwiY3VycmVudCIsInN0YXJ0IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3IiLCJvcGFjaXR5IiwieSIsInNrZXdYIiwiZHVyYXRpb24iLCJlYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./animation/portfolioSectionAnimation.ts\n");

/***/ }),

/***/ "./components/hero/portfolio.tsx":
/*!***************************************!*\
  !*** ./components/hero/portfolio.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_Fonts_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/Fonts.module.scss */ \"./styles/Fonts.module.scss\");\n/* harmony import */ var _styles_Fonts_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Fonts_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/Theme.module.scss */ \"./styles/Theme.module.scss\");\n/* harmony import */ var _styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Portfolio.module.scss */ \"./styles/Portfolio.module.scss\");\n/* harmony import */ var _styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_resources_portfolio_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/resources/portfolio.json */ \"./public/resources/portfolio.json\");\n/* harmony import */ var _public_resources_skills_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/resources/skills.json */ \"./public/resources/skills.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _animation_portfolioSectionAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animation/portfolioSectionAnimation */ \"./animation/portfolioSectionAnimation.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Portfolio = function(param) {\n    var isdarkMode = param.isdarkMode;\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var githubLogo = _public_resources_skills_json__WEBPACK_IMPORTED_MODULE_4__.skills[19].img;\n    var githubName = _public_resources_skills_json__WEBPACK_IMPORTED_MODULE_4__.skills[19].name;\n    var imgWidth = 30;\n    var imgHeight = 30;\n    var portfolioContentRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    var redirectToProject = function(index) {\n        router.push({\n            pathname: \"/portfolio/\".concat(index),\n            query: {\n                isDarkMode: JSON.stringify(isdarkMode),\n                id: JSON.stringify(index)\n            }\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        (0,_animation_portfolioSectionAnimation__WEBPACK_IMPORTED_MODULE_6__.revealPortfolioSection)(portfolioContentRef);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n            id: \"portfolioSection\",\n            __source: {\n                fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                ref: portfolioContentRef,\n                className: \"\".concat((_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().portfolioWrapper), \" \").concat((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container), \" \").concat((_styles_Fonts_module_scss__WEBPACK_IMPORTED_MODULE_9___default().font), \" \\n                    \").concat(isdarkMode ? (_styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_10___default().dark_mode) : (_styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_10___default().light_mode)),\n                __source: {\n                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        __source: {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: \"Portfolio\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: \"I listed below a selection of the last projects I have worked on.\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                        className: (_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().panel),\n                        __source: {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: _public_resources_portfolio_json__WEBPACK_IMPORTED_MODULE_3__.portfolioList.map(function(portfolio, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                                className: (_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().portfolioListEntry),\n                                onClick: function(e) {\n                                    e.preventDefault();\n                                    redirectToProject(index);\n                                },\n                                __source: {\n                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 33\n                                },\n                                __self: _this1,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: (_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                        __source: {\n                                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 37\n                                        },\n                                        __self: _this1,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                                                __source: {\n                                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 41\n                                                },\n                                                __self: _this1,\n                                                children: portfolio.title\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                href: portfolio.link.github,\n                                                target: \"_blank\",\n                                                className: \"\".concat(isdarkMode ? (_styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_10___default().githubLinkBgDark) : (_styles_Theme_module_scss__WEBPACK_IMPORTED_MODULE_10___default().githubLinkBgLight)),\n                                                rel: \"noreferrer\",\n                                                __source: {\n                                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 41\n                                                },\n                                                __self: _this1,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                    src: githubLogo,\n                                                    alt: githubName,\n                                                    width: imgWidth,\n                                                    height: imgHeight,\n                                                    layout: \"fixed\",\n                                                    __source: {\n                                                        fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 45\n                                                    },\n                                                    __self: _this1\n                                                })\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"\",\n                                        __source: {\n                                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 37\n                                        },\n                                        __self: _this1,\n                                        children: portfolio.description\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: (_styles_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_7___default().moreInfo),\n                                        __source: {\n                                            fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 37\n                                        },\n                                        __self: _this1,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                                __source: {\n                                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 40\n                                                },\n                                                __self: _this1,\n                                                children: \"More details\"\n                                            }),\n                                            \"  \",\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                __source: {\n                                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/portfolio/components/hero/portfolio.tsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 61\n                                                },\n                                                __self: _this1,\n                                                children: \"›\"\n                                            })\n                                        ]\n                                    })\n                                ]\n                            }, index));\n                        })\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(Portfolio, \"y1569VWrubMoNpHEucY84bypdlM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEIsQ0FBQzt3Q0FBQ1AsU0FBUyxFQUFDLENBQUU7Ozs7Ozs7a0RBQ1ZXLFNBQVMsQ0FBQ3FCLFdBQVc7OzBHQUV6QmxDLENBQUc7d0NBQUNFLFNBQVMsRUFBRTVCLCtFQUF1Qjs7Ozs7Ozs7aUhBTW5DbUMsQ0FBQzs7Ozs7OzswREFBQyxDQUFZOzs0Q0FBSSxDQUFFO2lIQUFDMkIsQ0FBSTs7Ozs7OzswREFBQyxDQUFROzs7OzsrQkF2QmpDN0MsS0FBSzt3QkE0QnRCLENBQUM7Ozs7OztBQU16QixDQUFDO0dBbkVLWCxTQUFTOztRQUNJVixrREFBUzs7O0tBRHRCVSxTQUFTO0FBcUVmLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby9wb3J0Zm9saW8udHN4Pzg1ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IGZvbnRTdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvRm9udHMubW9kdWxlLnNjc3MnXG5pbXBvcnQgdGhlbWVTdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvVGhlbWUubW9kdWxlLnNjc3MnXG5pbXBvcnQgcG9ydGZvbGlvU3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL1BvcnRmb2xpby5tb2R1bGUuc2NzcydcblxuaW1wb3J0IHBvcnRmb2xpb0xpc3QgZnJvbSAnLi4vLi4vcHVibGljL3Jlc291cmNlcy9wb3J0Zm9saW8uanNvbidcbmltcG9ydCBza2lsbHNMaXN0IGZyb20gJy4uLy4uL3B1YmxpYy9yZXNvdXJjZXMvc2tpbGxzLmpzb24nXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmV2ZWFsUG9ydGZvbGlvU2VjdGlvbiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbi9wb3J0Zm9saW9TZWN0aW9uQW5pbWF0aW9uJ1xuXG50eXBlIHBvcnRmb2xpb1Byb3BzPXtcbiAgICBpc2RhcmtNb2RlPzogYm9vbGVhbixcbn1cbmV4cG9ydCB0eXBlIHByb2plY3RQcm9wcz17XG5cbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZyxcbiAgICBjaGFsbGVuZ2U/OiBzdHJpbmcsXG4gICAgbGVzc29uPzogc3RyaW5nLFxuICAgIHRlY2g/OntcbiAgICAgICAgRnJvbnRlbmQ/OltzdHJpbmddLFxuICAgICAgICBCYWNrZW5kPzpbc3RyaW5nXSxcbiAgICB9LFxuICAgIGltZz86IFtzdHJpbmddLFxuICAgIGxpbms/OiB7XG4gICAgICAgIGdpdGh1Yjogc3RyaW5nXG4gICAgfSxcblxufVxuY29uc3QgUG9ydGZvbGlvID0gKHtpc2RhcmtNb2RlfSA6IHBvcnRmb2xpb1Byb3BzKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBnaXRodWJMb2dvID0gc2tpbGxzTGlzdFtcInNraWxsc1wiXVsxOV0uaW1nO1xuICAgIGNvbnN0IGdpdGh1Yk5hbWUgPSBza2lsbHNMaXN0W1wic2tpbGxzXCJdWzE5XS5uYW1lO1xuXG4gICAgY29uc3QgaW1nV2lkdGggPSAzMDtcbiAgICBjb25zdCBpbWdIZWlnaHQgPSAzMDtcblxuICAgIGNvbnN0IHBvcnRmb2xpb0NvbnRlbnRSZWY9IHVzZVJlZjxhbnk+KG51bGwpO1xuXG4gICAgY29uc3QgcmVkaXJlY3RUb1Byb2plY3QgPSAoaW5kZXggOiBudW1iZXIpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGAvcG9ydGZvbGlvLyR7aW5kZXh9YCxcbiAgICAgICAgICAgIHF1ZXJ5OiB7IFxuICAgICAgICAgICAgICAgIGlzRGFya01vZGU6IEpTT04uc3RyaW5naWZ5KGlzZGFya01vZGUpLFxuICAgICAgICAgICAgICAgIGlkOiBKU09OLnN0cmluZ2lmeShpbmRleCksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldmVhbFBvcnRmb2xpb1NlY3Rpb24ocG9ydGZvbGlvQ29udGVudFJlZik7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cInBvcnRmb2xpb1NlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17cG9ydGZvbGlvQ29udGVudFJlZn0gY2xhc3NOYW1lPXtgJHtwb3J0Zm9saW9TdHlsZS5wb3J0Zm9saW9XcmFwcGVyfSAke3N0eWxlLmNvbnRhaW5lcn0gJHtmb250U3R5bGUuZm9udH0gXG4gICAgICAgICAgICAgICAgICAgICR7aXNkYXJrTW9kZSA/IHRoZW1lU3R5bGUuZGFya19tb2RlIDogdGhlbWVTdHlsZS5saWdodF9tb2RlfWB9PlxuICAgICAgICAgICAgICAgICAgICA8aDE+UG9ydGZvbGlvPC9oMT4gXG4gICAgICAgICAgICAgICAgICAgIDxwPkkgbGlzdGVkIGJlbG93IGEgc2VsZWN0aW9uIG9mIHRoZSBsYXN0IHByb2plY3RzIEkgaGF2ZSB3b3JrZWQgb24uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtwb3J0Zm9saW9TdHlsZS5wYW5lbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9ydGZvbGlvTGlzdFtcInBvcnRmb2xpb0xpc3RcIl0ubWFwKChwb3J0Zm9saW8sIGluZGV4KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17cG9ydGZvbGlvU3R5bGUucG9ydGZvbGlvTGlzdEVudHJ5fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG9Qcm9qZWN0KGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BvcnRmb2xpb1N0eWxlLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3J0Zm9saW8udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3J0Zm9saW8ubGluay5naXRodWJ9IHRhcmdldD1cIl9ibGFua1wiICBjbGFzc05hbWU9e2Ake2lzZGFya01vZGUgPyB0aGVtZVN0eWxlLmdpdGh1YkxpbmtCZ0RhcmsgOiB0aGVtZVN0eWxlLmdpdGh1YkxpbmtCZ0xpZ2h0fWB9IHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Z2l0aHViTG9nb30gYWx0PXtnaXRodWJOYW1lfSB3aWR0aD17aW1nV2lkdGh9IGhlaWdodD17aW1nSGVpZ2h0fSBsYXlvdXQ9XCJmaXhlZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BvcnRmb2xpby5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3J0Zm9saW9TdHlsZS5tb3JlSW5mb30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17KGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmVkaXJlY3RUb1Byb2plY3QoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TW9yZSBkZXRhaWxzPC9wPiAgPHNwYW4+JnJzYXF1bzs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW9cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVJvdXRlciIsInN0eWxlIiwiZm9udFN0eWxlIiwidGhlbWVTdHlsZSIsInBvcnRmb2xpb1N0eWxlIiwicG9ydGZvbGlvTGlzdCIsInNraWxsc0xpc3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJyZXZlYWxQb3J0Zm9saW9TZWN0aW9uIiwiUG9ydGZvbGlvIiwiaXNkYXJrTW9kZSIsInJvdXRlciIsImdpdGh1YkxvZ28iLCJpbWciLCJnaXRodWJOYW1lIiwibmFtZSIsImltZ1dpZHRoIiwiaW1nSGVpZ2h0IiwicG9ydGZvbGlvQ29udGVudFJlZiIsInJlZGlyZWN0VG9Qcm9qZWN0IiwiaW5kZXgiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImlzRGFya01vZGUiLCJKU09OIiwic3RyaW5naWZ5IiwiaWQiLCJzZWN0aW9uIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwicG9ydGZvbGlvV3JhcHBlciIsImNvbnRhaW5lciIsImZvbnQiLCJkYXJrX21vZGUiLCJsaWdodF9tb2RlIiwiaDEiLCJwIiwidWwiLCJwYW5lbCIsIm1hcCIsInBvcnRmb2xpbyIsImxpIiwicG9ydGZvbGlvTGlzdEVudHJ5Iiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlIiwiaDIiLCJhIiwiaHJlZiIsImxpbmsiLCJnaXRodWIiLCJ0YXJnZXQiLCJnaXRodWJMaW5rQmdEYXJrIiwiZ2l0aHViTGlua0JnTGlnaHQiLCJyZWwiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImxheW91dCIsImRlc2NyaXB0aW9uIiwibW9yZUluZm8iLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hero/portfolio.tsx\n");

/***/ })

});