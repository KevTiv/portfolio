/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Theme.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Theme.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Theme_light_mode__Z5Htd {\\n  color: #2d2527;\\n}\\n\\n.Theme_dark_mode__n6y_Y {\\n  color: #fffade;\\n}\\n\\n.Theme_navbar_light__wYnsQ {\\n  background: rgba(200, 200, 200, 0.95);\\n  color: #2d2527;\\n  -webkit-filter: blur(1rem);\\n          filter: blur(1rem);\\n}\\n\\n.Theme_navbar_dark__x1UVN {\\n  background: rgba(255, 255, 255, 0.35);\\n  color: #fffade;\\n}\\n\\n.Theme_container_bglight___asYM {\\n  background-image: -webkit-gradient(linear, right top, left bottom, from(#f7f5f2), color-stop(#e9e1dd), color-stop(#dccccd), color-stop(#c9b9c2), to(#b0a8b9));\\n  background-image: -webkit-linear-gradient(right top, #f7f5f2, #e9e1dd, #dccccd, #c9b9c2, #b0a8b9);\\n  background-image: -moz-linear-gradient(right top, #f7f5f2, #e9e1dd, #dccccd, #c9b9c2, #b0a8b9);\\n  background-image: linear-gradient(to left bottom, #f7f5f2, #e9e1dd, #dccccd, #c9b9c2, #b0a8b9);\\n}\\n\\n.Theme_container_bgdark__Yn6fH {\\n  background-image: -webkit-gradient(linear, left top, right bottom, from(#18181a), color-stop(#202022), color-stop(#29282b), color-stop(#323034), to(#3b383d));\\n  background-image: -webkit-linear-gradient(left top, #18181a, #202022, #29282b, #323034, #3b383d);\\n  background-image: -moz-linear-gradient(left top, #18181a, #202022, #29282b, #323034, #3b383d);\\n  background-image: linear-gradient(to right bottom, #18181a, #202022, #29282b, #323034, #3b383d);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Theme.module.scss\"],\"names\":[],\"mappings\":\"AAEA;EACI,cAHY;AAEhB;;AAIA;EACI,cANW;AAKf;;AAIA;EACI,qCAAA;EACA,cAZY;EAaZ,0BAAA;UAAA,kBAAA;AADJ;;AAIA;EACI,qCAAA;EACA,cAjBW;AAgBf;;AAIA;EAIK,6JAAA;EAAA,iGAAA;EAAA,8FAAA;EAAA,8FAAA;AAJL;;AAQA;EAIK,6JAAA;EAAA,gGAAA;EAAA,6FAAA;EAAA,+FAAA;AARL\",\"sourcesContent\":[\"$lightModeText: #2d2527;\\n$darkModeText: #fffade;\\n.light_mode {\\n    color: $lightModeText;\\n}\\n\\n.dark_mode {\\n    color: $darkModeText;\\n}\\n\\n.navbar_light{\\n    background: rgba(200, 200, 200, 0.95);\\n    color: $lightModeText;\\n    filter: blur(1rem);\\n}\\n\\n.navbar_dark {\\n    background: rgba(255, 255, 255, 0.35);\\n    color: $darkModeText;\\n}\\n\\n.container_bglight{\\n    // COLOR1 ->#b0a8b9 COLOR2 ->#f7f5f2 \\n    // GRADIENT GENERATOR -> https://mycolor.space/gradient?ori=to+left+bottom&hex=%23F7F5F2&hex2=%23B0A8B9&sub=1\\n\\n     background-image: linear-gradient(to left bottom, #f7f5f2, #e9e1dd, #dccccd, #c9b9c2, #b0a8b9);\\n    // text #2d2527\\n}\\n\\n.container_bgdark{\\n    // COLOR1 ->#18181A COLOR2 -> #3B383D\\n    // GRADIENT GENERATOR ->https: //mycolor.space/gradient?ori=to+left+bottom&hex=%23362159&hex2=%234B4453&sub=1\\n\\n     background-image: linear-gradient(to right bottom, #18181a, #202022, #29282b, #323034, #3b383d);\\n    // text #fffade\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"light_mode\": \"Theme_light_mode__Z5Htd\",\n\t\"dark_mode\": \"Theme_dark_mode__n6y_Y\",\n\t\"navbar_light\": \"Theme_navbar_light__wYnsQ\",\n\t\"navbar_dark\": \"Theme_navbar_dark__x1UVN\",\n\t\"container_bglight\": \"Theme_container_bglight___asYM\",\n\t\"container_bgdark\": \"Theme_container_bgdark__Yn6fH\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzNdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzRdIS4vc3R5bGVzL1RoZW1lLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSxvRUFBb0UsbUJBQW1CLEdBQUcsNkJBQTZCLG1CQUFtQixHQUFHLGdDQUFnQywwQ0FBMEMsbUJBQW1CLCtCQUErQiwrQkFBK0IsR0FBRywrQkFBK0IsMENBQTBDLG1CQUFtQixHQUFHLHFDQUFxQyxrS0FBa0ssc0dBQXNHLG1HQUFtRyxtR0FBbUcsR0FBRyxvQ0FBb0Msa0tBQWtLLHFHQUFxRyxrR0FBa0csb0dBQW9HLEdBQUcsT0FBTyxrRkFBa0YsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLGlEQUFpRCx5QkFBeUIsZUFBZSw0QkFBNEIsR0FBRyxnQkFBZ0IsMkJBQTJCLEdBQUcsa0JBQWtCLDRDQUE0Qyw0QkFBNEIseUJBQXlCLEdBQUcsa0JBQWtCLDRDQUE0QywyQkFBMkIsR0FBRyx1QkFBdUIsc1FBQXNRLHdCQUF3QixzQkFBc0IsdVFBQXVRLHdCQUF3QixxQkFBcUI7QUFDMXFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9UaGVtZS5tb2R1bGUuc2Nzcz8wYzcwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuVGhlbWVfbGlnaHRfbW9kZV9fWjVIdGQge1xcbiAgY29sb3I6ICMyZDI1Mjc7XFxufVxcblxcbi5UaGVtZV9kYXJrX21vZGVfX242eV9ZIHtcXG4gIGNvbG9yOiAjZmZmYWRlO1xcbn1cXG5cXG4uVGhlbWVfbmF2YmFyX2xpZ2h0X193WW5zUSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuOTUpO1xcbiAgY29sb3I6ICMyZDI1Mjc7XFxuICAtd2Via2l0LWZpbHRlcjogYmx1cigxcmVtKTtcXG4gICAgICAgICAgZmlsdGVyOiBibHVyKDFyZW0pO1xcbn1cXG5cXG4uVGhlbWVfbmF2YmFyX2RhcmtfX3gxVVZOIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XFxuICBjb2xvcjogI2ZmZmFkZTtcXG59XFxuXFxuLlRoZW1lX2NvbnRhaW5lcl9iZ2xpZ2h0X19fYXNZTSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZjdmNWYyKSwgY29sb3Itc3RvcCgjZTllMWRkKSwgY29sb3Itc3RvcCgjZGNjY2NkKSwgY29sb3Itc3RvcCgjYzliOWMyKSwgdG8oI2IwYThiOSkpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQgdG9wLCAjZjdmNWYyLCAjZTllMWRkLCAjZGNjY2NkLCAjYzliOWMyLCAjYjBhOGI5KTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHJpZ2h0IHRvcCwgI2Y3ZjVmMiwgI2U5ZTFkZCwgI2RjY2NjZCwgI2M5YjljMiwgI2IwYThiOSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCBib3R0b20sICNmN2Y1ZjIsICNlOWUxZGQsICNkY2NjY2QsICNjOWI5YzIsICNiMGE4YjkpO1xcbn1cXG5cXG4uVGhlbWVfY29udGFpbmVyX2JnZGFya19fWW42Zkgge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCBib3R0b20sIGZyb20oIzE4MTgxYSksIGNvbG9yLXN0b3AoIzIwMjAyMiksIGNvbG9yLXN0b3AoIzI5MjgyYiksIGNvbG9yLXN0b3AoIzMyMzAzNCksIHRvKCMzYjM4M2QpKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQgdG9wLCAjMTgxODFhLCAjMjAyMDIyLCAjMjkyODJiLCAjMzIzMDM0LCAjM2IzODNkKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQgdG9wLCAjMTgxODFhLCAjMjAyMDIyLCAjMjkyODJiLCAjMzIzMDM0LCAjM2IzODNkKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICMxODE4MWEsICMyMDIwMjIsICMyOTI4MmIsICMzMjMwMzQsICMzYjM4M2QpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vVGhlbWUubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxjQUhZO0FBRWhCOztBQUlBO0VBQ0ksY0FOVztBQUtmOztBQUlBO0VBQ0kscUNBQUE7RUFDQSxjQVpZO0VBYVosMEJBQUE7VUFBQSxrQkFBQTtBQURKOztBQUlBO0VBQ0kscUNBQUE7RUFDQSxjQWpCVztBQWdCZjs7QUFJQTtFQUlLLDZKQUFBO0VBQUEsaUdBQUE7RUFBQSw4RkFBQTtFQUFBLDhGQUFBO0FBSkw7O0FBUUE7RUFJSyw2SkFBQTtFQUFBLGdHQUFBO0VBQUEsNkZBQUE7RUFBQSwrRkFBQTtBQVJMXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRsaWdodE1vZGVUZXh0OiAjMmQyNTI3O1xcbiRkYXJrTW9kZVRleHQ6ICNmZmZhZGU7XFxuLmxpZ2h0X21vZGUge1xcbiAgICBjb2xvcjogJGxpZ2h0TW9kZVRleHQ7XFxufVxcblxcbi5kYXJrX21vZGUge1xcbiAgICBjb2xvcjogJGRhcmtNb2RlVGV4dDtcXG59XFxuXFxuLm5hdmJhcl9saWdodHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjk1KTtcXG4gICAgY29sb3I6ICRsaWdodE1vZGVUZXh0O1xcbiAgICBmaWx0ZXI6IGJsdXIoMXJlbSk7XFxufVxcblxcbi5uYXZiYXJfZGFyayB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XFxuICAgIGNvbG9yOiAkZGFya01vZGVUZXh0O1xcbn1cXG5cXG4uY29udGFpbmVyX2JnbGlnaHR7XFxuICAgIC8vIENPTE9SMSAtPiNiMGE4YjkgQ09MT1IyIC0+I2Y3ZjVmMiBcXG4gICAgLy8gR1JBRElFTlQgR0VORVJBVE9SIC0+IGh0dHBzOi8vbXljb2xvci5zcGFjZS9ncmFkaWVudD9vcmk9dG8rbGVmdCtib3R0b20maGV4PSUyM0Y3RjVGMiZoZXgyPSUyM0IwQThCOSZzdWI9MVxcblxcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQgYm90dG9tLCAjZjdmNWYyLCAjZTllMWRkLCAjZGNjY2NkLCAjYzliOWMyLCAjYjBhOGI5KTtcXG4gICAgLy8gdGV4dCAjMmQyNTI3XFxufVxcblxcbi5jb250YWluZXJfYmdkYXJre1xcbiAgICAvLyBDT0xPUjEgLT4jMTgxODFBIENPTE9SMiAtPiAjM0IzODNEXFxuICAgIC8vIEdSQURJRU5UIEdFTkVSQVRPUiAtPmh0dHBzOiAvL215Y29sb3Iuc3BhY2UvZ3JhZGllbnQ/b3JpPXRvK2xlZnQrYm90dG9tJmhleD0lMjMzNjIxNTkmaGV4Mj0lMjM0QjQ0NTMmc3ViPTFcXG5cXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICMxODE4MWEsICMyMDIwMjIsICMyOTI4MmIsICMzMjMwMzQsICMzYjM4M2QpO1xcbiAgICAvLyB0ZXh0ICNmZmZhZGVcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibGlnaHRfbW9kZVwiOiBcIlRoZW1lX2xpZ2h0X21vZGVfX1o1SHRkXCIsXG5cdFwiZGFya19tb2RlXCI6IFwiVGhlbWVfZGFya19tb2RlX19uNnlfWVwiLFxuXHRcIm5hdmJhcl9saWdodFwiOiBcIlRoZW1lX25hdmJhcl9saWdodF9fd1luc1FcIixcblx0XCJuYXZiYXJfZGFya1wiOiBcIlRoZW1lX25hdmJhcl9kYXJrX194MVVWTlwiLFxuXHRcImNvbnRhaW5lcl9iZ2xpZ2h0XCI6IFwiVGhlbWVfY29udGFpbmVyX2JnbGlnaHRfX19hc1lNXCIsXG5cdFwiY29udGFpbmVyX2JnZGFya1wiOiBcIlRoZW1lX2NvbnRhaW5lcl9iZ2RhcmtfX1luNmZIXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Theme.module.scss\n");

/***/ })

});