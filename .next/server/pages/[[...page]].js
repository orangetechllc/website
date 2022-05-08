"use strict";
(() => {
var exports = {};
exports.id = 186;
exports.ids = [186];
exports.modules = {

/***/ 460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "@builder.io/react"
const react_namespaceObject = require("@builder.io/react");
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/[[...page]].tsx





const BUILDER_API_KEY = "afaf1ef61f894b309bfb96eb28c9e9c8";
react_namespaceObject.builder.init(BUILDER_API_KEY);
async function getStaticProps({ params  }) {
    const page = await react_namespaceObject.builder.get("page", {
        userAttributes: {
            urlPath: "/" + (params?.page?.join("/") || "")
        }
    }).toPromise() || null;
    return {
        props: {
            page
        },
        revalidate: 5
    };
}
async function getStaticPaths() {
    const pages = await react_namespaceObject.builder.getAll("page", {
        options: {
            noTargeting: true
        }
    });
    return {
        paths: pages.map((page)=>`${page.data?.url}`
        ),
        fallback: true
    };
}
function Page({ page  }) {
    const router = (0,router_namespaceObject.useRouter)();
    if (router.isFallback) {
        return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: "Loading..."
        });
    }
    const isLive = !react_namespaceObject.Builder.isEditing && !react_namespaceObject.Builder.isPreviewing;
    if (!page && isLive) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "robots",
                            content: "noindex"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "title"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
                    statusCode: 404
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.BuilderComponent, {
                model: "page",
                content: page
            })
        ]
    });
};


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(460));
module.exports = __webpack_exports__;

})();