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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"revealPortfolioSection\": function() { return /* binding */ revealPortfolioSection; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar revealPortfolioSection = function(portfolioContentRef) {\n    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({\n        scrollTrigger: {\n            trigger: portfolioContentRef.current,\n            start: \"-=800\"\n        }\n    });\n    tl.from(portfolioContentRef.current.querySelector('h1'), {\n        opacity: 0,\n        y: -150,\n        skewX: 10,\n        duration: 1.5,\n        ease: \"power3.inOut\"\n    }).from(portfolioContentRef.current.querySelector('p'), {\n        opacity: 0,\n        x: -150,\n        duration: 1.5,\n        ease: \"power3.inOut\"\n    }, \"-=1\");\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hbmltYXRpb24vcG9ydGZvbGlvU2VjdGlvbkFuaW1hdGlvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUM4QjtBQUloRCxHQUFLLENBQUNFLHNCQUFzQixHQUFHLFFBQVEsQ0FBUEMsbUJBQXlDLEVBQUksQ0FBQztJQUNqRkgscURBQW1CLENBQUNDLGtFQUFhO0lBQ2pDLEdBQUcsQ0FBQ0ksRUFBRSxHQUFHTCwrQ0FBYSxDQUFDLENBQUM7UUFDcEJPLGFBQWEsRUFBRSxDQUFDO1lBQ1pDLE9BQU8sRUFBRUwsbUJBQW1CLENBQUNNLE9BQU87WUFDcENDLEtBQUssRUFBRSxDQUFPO1FBQ2xCLENBQUM7SUFDTCxDQUFDO0lBRURMLEVBQUUsQ0FDRE0sSUFBSSxDQUFDUixtQkFBbUIsQ0FBQ00sT0FBTyxDQUFDRyxhQUFhLENBQUMsQ0FBSSxNQUFFLENBQUM7UUFDbkRDLE9BQU8sRUFBRSxDQUFDO1FBQ1ZDLENBQUMsR0FBRyxHQUFHO1FBQ1BDLEtBQUssRUFBRSxFQUFFO1FBQ1RDLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRSxDQUFjO0lBQ3hCLENBQUMsRUFDQU4sSUFBSSxDQUFDUixtQkFBbUIsQ0FBQ00sT0FBTyxDQUFDRyxhQUFhLENBQUMsQ0FBRyxLQUFFLENBQUM7UUFDbERDLE9BQU8sRUFBRSxDQUFDO1FBQ1ZLLENBQUMsR0FBRyxHQUFHO1FBQ1BGLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRSxDQUFjO0lBQ3hCLENBQUMsRUFBRSxDQUFLO0FBQ1osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hbmltYXRpb24vcG9ydGZvbGlvU2VjdGlvbkFuaW1hdGlvbi50cz9mOTAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z3NhcH0gZnJvbSAnZ3NhcCc7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXInXG5pbXBvcnQgeyBNdXRhYmxlUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHBvcnRmb2xpbyBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8vcG9ydGZvbGlvJztcblxuZXhwb3J0IGNvbnN0IHJldmVhbFBvcnRmb2xpb1NlY3Rpb24gPSAocG9ydGZvbGlvQ29udGVudFJlZjpNdXRhYmxlUmVmT2JqZWN0PGFueT4pID0+e1xuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6IHBvcnRmb2xpb0NvbnRlbnRSZWYuY3VycmVudCxcbiAgICAgICAgICAgIHN0YXJ0OiBcIi09ODAwXCJcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGxcbiAgICAuZnJvbShwb3J0Zm9saW9Db250ZW50UmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcignaDEnKSx7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHk6IC0xNTAsXG4gICAgICAgIHNrZXdYOiAxMCxcbiAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgZWFzZTogXCJwb3dlcjMuaW5PdXRcIlxuICAgIH0pXG4gICAgLmZyb20ocG9ydGZvbGlvQ29udGVudFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJ3AnKSx7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHg6IC0xNTAsXG4gICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgIGVhc2U6IFwicG93ZXIzLmluT3V0XCJcbiAgICB9LCBcIi09MVwiKVxufSJdLCJuYW1lcyI6WyJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInJldmVhbFBvcnRmb2xpb1NlY3Rpb24iLCJwb3J0Zm9saW9Db250ZW50UmVmIiwicmVnaXN0ZXJQbHVnaW4iLCJ0bCIsInRpbWVsaW5lIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJjdXJyZW50Iiwic3RhcnQiLCJmcm9tIiwicXVlcnlTZWxlY3RvciIsIm9wYWNpdHkiLCJ5Iiwic2tld1giLCJkdXJhdGlvbiIsImVhc2UiLCJ4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./animation/portfolioSectionAnimation.ts\n");

/***/ })

});