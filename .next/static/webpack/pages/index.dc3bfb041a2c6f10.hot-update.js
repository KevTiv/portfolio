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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"introAppear\": function() { return /* binding */ introAppear; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar introAppear = function(ImgRef, intro1Ref, intro2Ref, intro3Ref, intro4Ref) {\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();\n    tl.from(ImgRef.current.querySelector('span:nth-child(1)'), {\n        opacity: 0,\n        duration: 2,\n        ease: \"power3.inOut\"\n    }).from(ImgRef.current.querySelector('span:nth-child(2)'), {\n        opacity: 0,\n        x: 400,\n        y: 250,\n        duration: 1,\n        ease: \"power3.inOut\"\n    }, \"-=2.2\").from(intro1Ref.current, {\n        opacity: 0,\n        y: 100,\n        duration: 1\n    }, \"-=0.9\").from(intro2Ref.current, {\n        // position: 'absolute',\n        // y: 10,\n        // skewX: 30,\n        opacity: 0,\n        duration: 0.8,\n        ease: \"power3.inOut\"\n    }, \"-=1\").from(intro3Ref.current, {\n        opacity: 0,\n        x: 100,\n        duration: 1,\n        ease: \"power3.inOut\"\n    }).from(intro4Ref.current.querySelectorAll('span'), {\n        opacity: 0,\n        duration: 1,\n        stagger: 0.15,\n        ease: \"power3.inOut\"\n    });\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hbmltYXRpb24vaW50cm9TZWN0aW9uQW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUdsQixHQUFLLENBQUNDLFdBQVcsR0FBRSxRQUFRLENBQVBDLE1BQTRCLEVBQUVDLFNBQStCLEVBQUVDLFNBQStCLEVBQUVDLFNBQStCLEVBQUVDLFNBQStCLEVBQUcsQ0FBQztJQUMzTCxHQUFHLENBQUNDLEVBQUUsR0FBR1AsK0NBQWE7SUFDdEJPLEVBQUUsQ0FDREUsSUFBSSxDQUFDUCxNQUFNLENBQUNRLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDLENBQW1CLHFCQUFFLENBQUM7UUFDckRDLE9BQU8sRUFBRSxDQUFDO1FBQ1ZDLFFBQVEsRUFBRSxDQUFDO1FBQ1hDLElBQUksRUFBRSxDQUFjO0lBQ3hCLENBQUMsRUFDQUwsSUFBSSxDQUFDUCxNQUFNLENBQUNRLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDLENBQW1CLHFCQUFFLENBQUM7UUFDckRDLE9BQU8sRUFBRSxDQUFDO1FBQ1ZHLENBQUMsRUFBRSxHQUFHO1FBQ05DLENBQUMsRUFBRSxHQUFHO1FBQ05ILFFBQVEsRUFBRSxDQUFDO1FBQ1hDLElBQUksRUFBRSxDQUFjO0lBQ3hCLENBQUMsRUFBQyxDQUFPLFFBQ1JMLElBQUksQ0FBQ04sU0FBUyxDQUFDTyxPQUFPLEVBQUMsQ0FBQztRQUNyQkUsT0FBTyxFQUFFLENBQUM7UUFDVkksQ0FBQyxFQUFFLEdBQUc7UUFDTkgsUUFBUSxFQUFFLENBQUM7SUFDZixDQUFDLEVBQUMsQ0FBTyxRQUNSSixJQUFJLENBQUNMLFNBQVMsQ0FBQ00sT0FBTyxFQUFDLENBQUM7UUFDckIsRUFBd0I7UUFDeEIsRUFBUztRQUNULEVBQWE7UUFDYkUsT0FBTyxFQUFFLENBQUM7UUFDVkMsUUFBUSxFQUFFLEdBQUc7UUFDYkMsSUFBSSxFQUFFLENBQWM7SUFFeEIsQ0FBQyxFQUFFLENBQUssTUFDUEwsSUFBSSxDQUFDSixTQUFTLENBQUNLLE9BQU8sRUFBQyxDQUFDO1FBQ3JCRSxPQUFPLEVBQUUsQ0FBQztRQUNWRyxDQUFDLEVBQUUsR0FBRztRQUNORixRQUFRLEVBQUUsQ0FBQztRQUNYQyxJQUFJLEVBQUUsQ0FBYztJQUN4QixDQUFDLEVBQ0FMLElBQUksQ0FBQ0gsU0FBUyxDQUFDSSxPQUFPLENBQUNPLGdCQUFnQixDQUFDLENBQU0sUUFBRSxDQUFDO1FBQzlDTCxPQUFPLEVBQUUsQ0FBQztRQUNWQyxRQUFRLEVBQUUsQ0FBQztRQUNYSyxPQUFPLEVBQUUsSUFBSTtRQUNiSixJQUFJLEVBQUUsQ0FBYztJQUN4QixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hbmltYXRpb24vaW50cm9TZWN0aW9uQW5pbWF0aW9uLnRzPzVlYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnc2FwfSBmcm9tICdnc2FwJztcbmltcG9ydCB7IE11dGFibGVSZWZPYmplY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBpbnRyb0FwcGVhciA9KEltZ1JlZjpNdXRhYmxlUmVmT2JqZWN0PGFueT4sIGludHJvMVJlZjpNdXRhYmxlUmVmT2JqZWN0PGFueT4sIGludHJvMlJlZjpNdXRhYmxlUmVmT2JqZWN0PGFueT4sIGludHJvM1JlZjpNdXRhYmxlUmVmT2JqZWN0PGFueT4sIGludHJvNFJlZjpNdXRhYmxlUmVmT2JqZWN0PGFueT4pPT57XG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpO1xuICAgIHRsXG4gICAgLmZyb20oSW1nUmVmLmN1cnJlbnQucXVlcnlTZWxlY3Rvcignc3BhbjpudGgtY2hpbGQoMSknKSx7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgICBlYXNlOiBcInBvd2VyMy5pbk91dFwiXG4gICAgfSlcbiAgICAuZnJvbShJbWdSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCdzcGFuOm50aC1jaGlsZCgyKScpLHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgeDogNDAwLFxuICAgICAgICB5OiAyNTAsXG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICBlYXNlOiBcInBvd2VyMy5pbk91dFwiXG4gICAgfSxcIi09Mi4yXCIpXG4gICAgLmZyb20oaW50cm8xUmVmLmN1cnJlbnQse1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB5OiAxMDAsXG4gICAgICAgIGR1cmF0aW9uOiAxXG4gICAgfSxcIi09MC45XCIpXG4gICAgLmZyb20oaW50cm8yUmVmLmN1cnJlbnQse1xuICAgICAgICAvLyBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgLy8geTogMTAsXG4gICAgICAgIC8vIHNrZXdYOiAzMCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgZWFzZTogXCJwb3dlcjMuaW5PdXRcIixcbiAgICAgICAgLy8gc3RhZ2dlcjogMC4xNVxuICAgIH0sIFwiLT0xXCIpXG4gICAgLmZyb20oaW50cm8zUmVmLmN1cnJlbnQse1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB4OiAxMDAsXG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICBlYXNlOiBcInBvd2VyMy5pbk91dFwiXG4gICAgfSwpXG4gICAgLmZyb20oaW50cm80UmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpLHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIHN0YWdnZXI6IDAuMTUsXG4gICAgICAgIGVhc2U6IFwicG93ZXIzLmluT3V0XCJcbiAgICB9KTtcbn0iXSwibmFtZXMiOlsiZ3NhcCIsImludHJvQXBwZWFyIiwiSW1nUmVmIiwiaW50cm8xUmVmIiwiaW50cm8yUmVmIiwiaW50cm8zUmVmIiwiaW50cm80UmVmIiwidGwiLCJ0aW1lbGluZSIsImZyb20iLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvciIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsImVhc2UiLCJ4IiwieSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdGFnZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./animation/introSectionAnimation.ts\n");

/***/ })

});