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

/***/ "./animation/introSectionAnimation.ts":
/*!********************************************!*\
  !*** ./animation/introSectionAnimation.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"introAppear\": function() { return /* binding */ introAppear; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar introAppear = function(ImgRef, intro1Ref, intro2Ref, intro3Ref, intro4Ref) {\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();\n    tl.from(ImgRef.current.querySelector('span:nth-child(1)'), {\n        opacity: 0,\n        duration: 2,\n        ease: \"power3.inOut\"\n    }).from(ImgRef.current.querySelector('span:nth-child(2)'), {\n        opacity: 0,\n        x: 400,\n        y: 250,\n        duration: 1,\n        ease: \"power3.inOut\"\n    }, \"-=2.2\").from(intro1Ref.current, {\n        opacity: 0,\n        y: 100,\n        duration: 1\n    }, \"-=0.9\").from(intro2Ref.current, {\n        // position: 'absolute',\n        // y: 10,\n        // skewX: 30,\n        opacity: 0,\n        duration: 2.5,\n        ease: \"power3.inOut\"\n    }, \"-=1\").from(intro3Ref.current, {\n        opacity: 0,\n        x: 100,\n        duration: 1,\n        ease: \"power3.inOut\"\n    }, \"-=1\").from(intro4Ref.current.querySelectorAll('span'), {\n        opacity: 0,\n        duration: 0.6,\n        stagger: 0.15,\n        ease: \"power3.inOut\"\n    });\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hbmltYXRpb24vaW50cm9TZWN0aW9uQW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUdsQixHQUFLLENBQUNDLFdBQVcsR0FBRSxRQUFRLENBQVBDLE1BQTRCLEVBQUVDLFNBQStCLEVBQUVDLFNBQStCLEVBQUVDLFNBQStCLEVBQUVDLFNBQStCLEVBQUcsQ0FBQztJQUMzTCxHQUFHLENBQUNDLEVBQUUsR0FBR1AsK0NBQWE7SUFDdEJPLEVBQUUsQ0FDREUsSUFBSSxDQUFDUCxNQUFNLENBQUNRLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDLENBQW1CLHFCQUFFLENBQUM7UUFDckRDLE9BQU8sRUFBRSxDQUFDO1FBQ1ZDLFFBQVEsRUFBRSxDQUFDO1FBQ1hDLElBQUksRUFBRSxDQUFjO0lBQ3hCLENBQUMsRUFDQUwsSUFBSSxDQUFDUCxNQUFNLENBQUNRLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDLENBQW1CLHFCQUFFLENBQUM7UUFDckRDLE9BQU8sRUFBRSxDQUFDO1FBQ1ZHLENBQUMsRUFBRSxHQUFHO1FBQ05DLENBQUMsRUFBRSxHQUFHO1FBQ05ILFFBQVEsRUFBRSxDQUFDO1FBQ1hDLElBQUksRUFBRSxDQUFjO0lBQ3hCLENBQUMsRUFBQyxDQUFPLFFBQ1JMLElBQUksQ0FBQ04sU0FBUyxDQUFDTyxPQUFPLEVBQUMsQ0FBQztRQUNyQkUsT0FBTyxFQUFFLENBQUM7UUFDVkksQ0FBQyxFQUFFLEdBQUc7UUFDTkgsUUFBUSxFQUFFLENBQUM7SUFDZixDQUFDLEVBQUMsQ0FBTyxRQUNSSixJQUFJLENBQUNMLFNBQVMsQ0FBQ00sT0FBTyxFQUFDLENBQUM7UUFDckIsRUFBd0I7UUFDeEIsRUFBUztRQUNULEVBQWE7UUFDYkUsT0FBTyxFQUFFLENBQUM7UUFDVkMsUUFBUSxFQUFFLEdBQUc7UUFDYkMsSUFBSSxFQUFFLENBQWM7SUFFeEIsQ0FBQyxFQUFFLENBQUssTUFDUEwsSUFBSSxDQUFDSixTQUFTLENBQUNLLE9BQU8sRUFBQyxDQUFDO1FBQ3JCRSxPQUFPLEVBQUUsQ0FBQztRQUNWRyxDQUFDLEVBQUUsR0FBRztRQUNORixRQUFRLEVBQUUsQ0FBQztRQUNYQyxJQUFJLEVBQUUsQ0FBYztJQUN4QixDQUFDLEVBQUMsQ0FBSyxNQUNOTCxJQUFJLENBQUNILFNBQVMsQ0FBQ0ksT0FBTyxDQUFDTyxnQkFBZ0IsQ0FBQyxDQUFNLFFBQUUsQ0FBQztRQUM5Q0wsT0FBTyxFQUFFLENBQUM7UUFDVkMsUUFBUSxFQUFFLEdBQUc7UUFDYkssT0FBTyxFQUFFLElBQUk7UUFDYkosSUFBSSxFQUFFLENBQWM7SUFDeEIsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYW5pbWF0aW9uL2ludHJvU2VjdGlvbkFuaW1hdGlvbi50cz81ZWM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z3NhcH0gZnJvbSAnZ3NhcCc7XG5pbXBvcnQgeyBNdXRhYmxlUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgaW50cm9BcHBlYXIgPShJbWdSZWY6TXV0YWJsZVJlZk9iamVjdDxhbnk+LCBpbnRybzFSZWY6TXV0YWJsZVJlZk9iamVjdDxhbnk+LCBpbnRybzJSZWY6TXV0YWJsZVJlZk9iamVjdDxhbnk+LCBpbnRybzNSZWY6TXV0YWJsZVJlZk9iamVjdDxhbnk+LCBpbnRybzRSZWY6TXV0YWJsZVJlZk9iamVjdDxhbnk+KT0+e1xuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKTtcbiAgICB0bFxuICAgIC5mcm9tKEltZ1JlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW46bnRoLWNoaWxkKDEpJykse1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgZWFzZTogXCJwb3dlcjMuaW5PdXRcIlxuICAgIH0pXG4gICAgLmZyb20oSW1nUmVmLmN1cnJlbnQucXVlcnlTZWxlY3Rvcignc3BhbjpudGgtY2hpbGQoMiknKSx7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHg6IDQwMCxcbiAgICAgICAgeTogMjUwLFxuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgZWFzZTogXCJwb3dlcjMuaW5PdXRcIlxuICAgIH0sXCItPTIuMlwiKVxuICAgIC5mcm9tKGludHJvMVJlZi5jdXJyZW50LHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgeTogMTAwLFxuICAgICAgICBkdXJhdGlvbjogMVxuICAgIH0sXCItPTAuOVwiKVxuICAgIC5mcm9tKGludHJvMlJlZi5jdXJyZW50LHtcbiAgICAgICAgLy8gcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIC8vIHk6IDEwLFxuICAgICAgICAvLyBza2V3WDogMzAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAyLjUsXG4gICAgICAgIGVhc2U6IFwicG93ZXIzLmluT3V0XCIsXG4gICAgICAgIC8vIHN0YWdnZXI6IDAuMTVcbiAgICB9LCBcIi09MVwiKVxuICAgIC5mcm9tKGludHJvM1JlZi5jdXJyZW50LHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgeDogMTAwLFxuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgZWFzZTogXCJwb3dlcjMuaW5PdXRcIlxuICAgIH0sXCItPTFcIilcbiAgICAuZnJvbShpbnRybzRSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJykse1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgICBzdGFnZ2VyOiAwLjE1LFxuICAgICAgICBlYXNlOiBcInBvd2VyMy5pbk91dFwiXG4gICAgfSk7XG59Il0sIm5hbWVzIjpbImdzYXAiLCJpbnRyb0FwcGVhciIsIkltZ1JlZiIsImludHJvMVJlZiIsImludHJvMlJlZiIsImludHJvM1JlZiIsImludHJvNFJlZiIsInRsIiwidGltZWxpbmUiLCJmcm9tIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJlYXNlIiwieCIsInkiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RhZ2dlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./animation/introSectionAnimation.ts\n");

/***/ })

});