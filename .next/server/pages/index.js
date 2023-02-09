"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./core/apis/pokemon.js":
/*!******************************!*\
  !*** ./core/apis/pokemon.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPokemon\": () => (/* binding */ getPokemon),\n/* harmony export */   \"getPokemonList\": () => (/* binding */ getPokemonList)\n/* harmony export */ });\n/* harmony import */ var _pages_api_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/api/axios */ \"./pages/api/axios.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_axios__WEBPACK_IMPORTED_MODULE_0__]);\n_pages_api_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst getPokemon = async ()=>{\n    let { data  } = await (0,_pages_api_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        method: \"get\",\n        url: \"https://pokeapi.co/api/v2/pokemon/\"\n    });\n    console.log(\"포켓몬\", data);\n};\nconst getPokemonList = ()=>{\n    const data = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(\"pokemon\", getPokemon);\n    return data;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb3JlL2FwaXMvcG9rZW1vbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQztBQUNIO0FBRWhDLE1BQU1FLGFBQWEsVUFBWTtJQUNwQyxJQUFJLEVBQUVDLEtBQUksRUFBRSxHQUFHLE1BQU1ILDREQUFLQSxDQUFDO1FBQ3pCSSxRQUFRO1FBQ1JDLEtBQUs7SUFDUDtJQUNBQyxRQUFRQyxHQUFHLENBQUMsT0FBT0o7QUFDckIsRUFBRTtBQUVLLE1BQU1LLGlCQUFpQixJQUFNO0lBQ2xDLE1BQU1MLE9BQU9GLHFEQUFRQSxDQUFDLFdBQVdDO0lBQ2pDLE9BQU9DO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpa2UtbW9pdmUvLi9jb3JlL2FwaXMvcG9rZW1vbi5qcz9lZjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiLi4vLi4vcGFnZXMvYXBpL2F4aW9zXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9rZW1vbiA9IGFzeW5jICgpID0+IHtcbiAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3Moe1xuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uL1wiLFxuICB9KTtcbiAgY29uc29sZS5sb2coXCLtj6zsvJPrqqxcIiwgZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UG9rZW1vbkxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB1c2VRdWVyeShcInBva2Vtb25cIiwgZ2V0UG9rZW1vbik7XG4gIHJldHVybiBkYXRhO1xufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVF1ZXJ5IiwiZ2V0UG9rZW1vbiIsImRhdGEiLCJtZXRob2QiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiZ2V0UG9rZW1vbkxpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./core/apis/pokemon.js\n");

/***/ }),

/***/ "./pages/api/axios.js":
/*!****************************!*\
  !*** ./pages/api/axios.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst instanse = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"\",\n    headers: {\n        Authorization: \"\"\n    }\n});\n// 요청 인터셉터\ninstanse.interceptors.request.use((config)=>{\n    //내용\n    return config;\n}, (error)=>{\n    Promise.reject(error);\n    return;\n});\n// 응답 인터셉터\ninstanse.interceptors.response.use((response)=>{\n    //내용\n    return response;\n}, (error)=>{\n    Promise.reject(error);\n    return;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instanse);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXhpb3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsV0FBV0Qsb0RBQVksQ0FBQztJQUM1QkcsU0FBUztJQUNUQyxTQUFTO1FBQ1BDLGVBQWU7SUFDakI7QUFDRjtBQUVBLFVBQVU7QUFDVkosU0FBU0ssWUFBWSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FDL0IsQ0FBQ0MsU0FBVztJQUNWLElBQUk7SUFDSixPQUFPQTtBQUNULEdBQ0EsQ0FBQ0MsUUFBVTtJQUNUQyxRQUFRQyxNQUFNLENBQUNGO0lBQ2Y7QUFDRjtBQUdGLFVBQVU7QUFDVlQsU0FBU0ssWUFBWSxDQUFDTyxRQUFRLENBQUNMLEdBQUcsQ0FDaEMsQ0FBQ0ssV0FBYTtJQUNaLElBQUk7SUFDSixPQUFPQTtBQUNULEdBQ0EsQ0FBQ0gsUUFBVTtJQUNUQyxRQUFRQyxNQUFNLENBQUNGO0lBQ2Y7QUFDRjtBQUdGLGlFQUFlVCxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlrZS1tb2l2ZS8uL3BhZ2VzL2FwaS9heGlvcy5qcz85YjcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgaW5zdGFuc2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBcIlwiLFxuICBoZWFkZXJzOiB7XG4gICAgQXV0aG9yaXphdGlvbjogXCJcIixcbiAgfSxcbn0pO1xuXG4vLyDsmpTssq0g7J247YSw7IWJ7YSwXG5pbnN0YW5zZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXG4gIChjb25maWcpID0+IHtcbiAgICAvL+uCtOyaqVxuICAgIHJldHVybiBjb25maWc7XG4gIH0sXG4gIChlcnJvcikgPT4ge1xuICAgIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cbik7XG5cbi8vIOydkeuLtSDsnbjthLDshYnthLBcbmluc3RhbnNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gIChyZXNwb25zZSkgPT4ge1xuICAgIC8v64K07JqpXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LFxuICAoZXJyb3IpID0+IHtcbiAgICBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5zZTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImluc3RhbnNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/axios.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_apis_pokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/apis/pokemon */ \"./core/apis/pokemon.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([core_apis_pokemon__WEBPACK_IMPORTED_MODULE_1__]);\ncore_apis_pokemon__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Home() {\n    const data = (0,core_apis_pokemon__WEBPACK_IMPORTED_MODULE_1__.getPokemonList)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"포켓몬\"\n        }, void 0, false, {\n            fileName: \"/Users/suhwa/Documents/GitHub/like-movie/pages/index.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/suhwa/Documents/GitHub/like-movie/pages/index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUVwQyxTQUFTQyxPQUFPO0lBQzdCLE1BQU1DLE9BQU9GLGlFQUFjQTtJQUUzQixxQkFDRSw4REFBQ0c7a0JBQ0MsNEVBQUNDO3NCQUFFOzs7Ozs7Ozs7OztBQUdULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWtlLW1vaXZlLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQb2tlbW9uTGlzdCB9IGZyb20gXCJjb3JlL2FwaXMvcG9rZW1vblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBkYXRhID0gZ2V0UG9rZW1vbkxpc3QoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD7tj6zsvJPrqqw8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZ2V0UG9rZW1vbkxpc3QiLCJIb21lIiwiZGF0YSIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();