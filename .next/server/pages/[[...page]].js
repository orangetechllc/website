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
exports.id = "pages/[[...page]]";
exports.ids = ["pages/[[...page]]"];
exports.modules = {

/***/ "./pages/[[...page]].tsx":
/*!*******************************!*\
  !*** ./pages/[[...page]].tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @builder.io/react */ \"@builder.io/react\");\n/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_builder_io_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/error */ \"next/error\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst BUILDER_API_KEY = \"afaf1ef61f894b309bfb96eb28c9e9c8\";\n_builder_io_react__WEBPACK_IMPORTED_MODULE_2__.builder.init(BUILDER_API_KEY);\nasync function getStaticProps({ params  }) {\n    const page = await _builder_io_react__WEBPACK_IMPORTED_MODULE_2__.builder.get(\"page\", {\n        userAttributes: {\n            urlPath: \"/\" + (params?.page?.join(\"/\") || \"\")\n        }\n    }).toPromise() || null;\n    return {\n        props: {\n            page\n        },\n        revalidate: 5\n    };\n}\nasync function getStaticPaths() {\n    const pages = await _builder_io_react__WEBPACK_IMPORTED_MODULE_2__.builder.getAll(\"page\", {\n        options: {\n            noTargeting: true\n        }\n    });\n    return {\n        paths: pages.map((page)=>`${page.data?.url}`\n        ),\n        fallback: true\n    };\n}\nfunction Page({ page  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    if (router.isFallback) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/opt/home/dockerapps/website/orangetech/pages/[[...page]].tsx\",\n            lineNumber: 44,\n            columnNumber: 12\n        }, this);\n    }\n    const isLive = !_builder_io_react__WEBPACK_IMPORTED_MODULE_2__.Builder.isEditing && !_builder_io_react__WEBPACK_IMPORTED_MODULE_2__.Builder.isPreviewing;\n    if (!page && isLive) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"robots\",\n                            content: \"noindex\"\n                        }, void 0, false, {\n                            fileName: \"/opt/home/dockerapps/website/orangetech/pages/[[...page]].tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"title\"\n                        }, void 0, false, {\n                            fileName: \"/opt/home/dockerapps/website/orangetech/pages/[[...page]].tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/opt/home/dockerapps/website/orangetech/pages/[[...page]].tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    statusCode: 404\n                }, void 0, false, {\n                    fileName: \"/opt/home/dockerapps/website/orangetech/pages/[[...page]].tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"width=device-width, initial-scale=1\"\n                }, void 0, false, {\n                    fileName: \"/opt/home/dockerapps/website/orangetech/pages/[[...page]].tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/opt/home/dockerapps/website/orangetech/pages/[[...page]].tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_builder_io_react__WEBPACK_IMPORTED_MODULE_2__.BuilderComponent, {\n                model: \"page\",\n                content: page\n            }, void 0, false, {\n                fileName: \"/opt/home/dockerapps/website/orangetech/pages/[[...page]].tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bWy4uLnBhZ2VdXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3VDO0FBQytCO0FBQzdCO0FBQ2I7QUFFNUIsTUFBTU0sZUFBZSxHQUFHLGtDQUFrQztBQUMxREgsMkRBQVksQ0FBQ0csZUFBZSxDQUFDO0FBRXRCLGVBQWVFLGNBQWMsQ0FBQyxFQUNuQ0MsTUFBTSxHQUNvQyxFQUFFO0lBQzVDLE1BQU1DLElBQUksR0FBRyxNQUFNUCwwREFBVyxDQUFDLE1BQU0sRUFBRTtRQUNyQ1MsY0FBYyxFQUFFO1lBQ2RDLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQ0osTUFBTSxFQUFFQyxJQUFJLEVBQUVJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDL0M7S0FDRixDQUFDLENBQ0RDLFNBQVMsRUFBRSxJQUFJLElBQUk7SUFFcEIsT0FBTztRQUNMQyxLQUFLLEVBQUU7WUFDTE4sSUFBSTtTQUNMO1FBQ0RPLFVBQVUsRUFBRSxDQUFDO0tBQ2Q7Q0FDRjtBQUVNLGVBQWVDLGNBQWMsR0FBRztJQUNyQyxNQUFNQyxLQUFLLEdBQUcsTUFBTWhCLDZEQUFjLENBQUMsTUFBTSxFQUFFO1FBQ3pDa0IsT0FBTyxFQUFFO1lBQUVDLFdBQVcsRUFBRSxJQUFJO1NBQUU7S0FDL0IsQ0FBQztJQUVGLE9BQU87UUFDTEMsS0FBSyxFQUFFSixLQUFLLENBQUNLLEdBQUcsQ0FBQyxDQUFDZCxJQUFJLEdBQUssQ0FBQyxFQUFFQSxJQUFJLENBQUNlLElBQUksRUFBRUMsR0FBRyxDQUFDLENBQUM7UUFBQSxDQUFDO1FBQy9DQyxRQUFRLEVBQUUsSUFBSTtLQUNmO0NBQ0Y7QUFFYyxTQUFTQyxJQUFJLENBQUMsRUFDM0JsQixJQUFJLEdBQzJDLEVBQUU7SUFDakQsTUFBTW1CLE1BQU0sR0FBRzdCLHNEQUFTLEVBQUU7SUFDMUIsSUFBSTZCLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFO1FBQ3JCLHFCQUFPLDhEQUFDQyxJQUFFO3NCQUFDLFlBQVU7Ozs7O2dCQUFLO0tBQzNCO0lBQ0QsTUFBTUMsTUFBTSxHQUFHLENBQUM5QixnRUFBaUIsSUFBSSxDQUFDQSxtRUFBb0I7SUFDMUQsSUFBSSxDQUFDUSxJQUFJLElBQUlzQixNQUFNLEVBQUU7UUFDbkIscUJBQ0U7OzhCQUNFLDhEQUFDM0Isa0RBQUk7O3NDQUNILDhEQUFDOEIsTUFBSTs0QkFBQ0MsSUFBSSxFQUFDLFFBQVE7NEJBQUNDLE9BQU8sRUFBQyxTQUFTOzs7OztnQ0FBRztzQ0FDeEMsOERBQUNGLE1BQUk7NEJBQUNDLElBQUksRUFBQyxPQUFPOzs7OztnQ0FBUTs7Ozs7O3dCQUNyQjs4QkFDUCw4REFBQ2hDLG1EQUFnQjtvQkFBQ2tDLFVBQVUsRUFBRSxHQUFHOzs7Ozt3QkFBSTs7d0JBQ3BDLENBQ0o7S0FDRjtJQUVELHFCQUNFOzswQkFDRSw4REFBQ2pDLGtEQUFJOzBCQUNILDRFQUFDOEIsTUFBSTtvQkFBQ0MsSUFBSSxFQUFDLFVBQVU7b0JBQUNDLE9BQU8sRUFBQyxxQ0FBcUM7Ozs7O3dCQUFHOzs7OztvQkFDakU7MEJBRVAsOERBQUNwQywrREFBZ0I7Z0JBQUNzQyxLQUFLLEVBQUMsTUFBTTtnQkFBQ0YsT0FBTyxFQUFFM0IsSUFBSTs7Ozs7b0JBQUk7O29CQUMvQyxDQUNKO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcmFuZ2V0ZWNoLy4vcGFnZXMvW1suLi5wYWdlXV0udHN4PzAyNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBHZXRTdGF0aWNQcm9wc0NvbnRleHQsIEluZmVyR2V0U3RhdGljUHJvcHNUeXBlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgQnVpbGRlckNvbXBvbmVudCwgQnVpbGRlciwgYnVpbGRlciB9IGZyb20gJ0BidWlsZGVyLmlvL3JlYWN0J1xuaW1wb3J0IERlZmF1bHRFcnJvclBhZ2UgZnJvbSAnbmV4dC9lcnJvcidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgQlVJTERFUl9BUElfS0VZID0gJ2FmYWYxZWY2MWY4OTRiMzA5YmZiOTZlYjI4YzllOWM4J1xuYnVpbGRlci5pbml0KEJVSUxERVJfQVBJX0tFWSlcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtcbiAgcGFyYW1zLFxufTogR2V0U3RhdGljUHJvcHNDb250ZXh0PHsgcGFnZTogc3RyaW5nW10gfT4pIHtcbiAgY29uc3QgcGFnZSA9IGF3YWl0IGJ1aWxkZXIuZ2V0KCdwYWdlJywge1xuICAgIHVzZXJBdHRyaWJ1dGVzOiB7XG4gICAgICB1cmxQYXRoOiAnLycgKyAocGFyYW1zPy5wYWdlPy5qb2luKCcvJykgfHwgJycpLFxuICAgIH1cbiAgfSlcbiAgLnRvUHJvbWlzZSgpIHx8IG51bGxcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwYWdlLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogNSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhZ2VzID0gYXdhaXQgYnVpbGRlci5nZXRBbGwoJ3BhZ2UnLCB7XG4gICAgb3B0aW9uczogeyBub1RhcmdldGluZzogdHJ1ZSB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGFnZXMubWFwKChwYWdlKSA9PiBgJHtwYWdlLmRhdGE/LnVybH1gKSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHtcbiAgcGFnZSxcbn06IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlPHR5cGVvZiBnZXRTdGF0aWNQcm9wcz4pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XG4gICAgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgfVxuICBjb25zdCBpc0xpdmUgPSAhQnVpbGRlci5pc0VkaXRpbmcgJiYgIUJ1aWxkZXIuaXNQcmV2aWV3aW5nXG4gIGlmICghcGFnZSAmJiBpc0xpdmUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4XCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGl0bGVcIj48L21ldGE+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPERlZmF1bHRFcnJvclBhZ2Ugc3RhdHVzQ29kZT17NDA0fSAvPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICBcbiAgICAgIDxCdWlsZGVyQ29tcG9uZW50IG1vZGVsPVwicGFnZVwiIGNvbnRlbnQ9e3BhZ2V9IC8+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJCdWlsZGVyQ29tcG9uZW50IiwiQnVpbGRlciIsImJ1aWxkZXIiLCJEZWZhdWx0RXJyb3JQYWdlIiwiSGVhZCIsIkJVSUxERVJfQVBJX0tFWSIsImluaXQiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInBhZ2UiLCJnZXQiLCJ1c2VyQXR0cmlidXRlcyIsInVybFBhdGgiLCJqb2luIiwidG9Qcm9taXNlIiwicHJvcHMiLCJyZXZhbGlkYXRlIiwiZ2V0U3RhdGljUGF0aHMiLCJwYWdlcyIsImdldEFsbCIsIm9wdGlvbnMiLCJub1RhcmdldGluZyIsInBhdGhzIiwibWFwIiwiZGF0YSIsInVybCIsImZhbGxiYWNrIiwiUGFnZSIsInJvdXRlciIsImlzRmFsbGJhY2siLCJoMSIsImlzTGl2ZSIsImlzRWRpdGluZyIsImlzUHJldmlld2luZyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInN0YXR1c0NvZGUiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[[...page]].tsx\n");

/***/ }),

/***/ "@builder.io/react":
/*!************************************!*\
  !*** external "@builder.io/react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@builder.io/react");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("next/error");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[[...page]].tsx"));
module.exports = __webpack_exports__;

})();