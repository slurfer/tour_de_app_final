"use strict";
exports.id = 358;
exports.ids = [358];
exports.modules = {

/***/ 2834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ ProgrammingLanguageLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable jsx-a11y/alt-text */ /* eslint-disable @next/next/no-img-element */ 
const ProgrammingLanguageLogo = ({ programming_language  })=>{
    const returnPictureSource = ()=>{
        switch(programming_language){
            case "Python":
                return "python_logo.png";
            case "Javascript":
                return "javascript_logo.png";
            default:
                return "C++_logo.png";
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        className: "w-[50px] h-[50px] mt-2 mb-[-10px] m-auto",
        src: returnPictureSource()
    });
};


/***/ }),

/***/ 9669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ RatingLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable jsx-a11y/alt-text */ /* eslint-disable @next/next/no-img-element */ 
const RatingLogo = ({ rating  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-[40px] flex mt-[5px] mb-[-25px] w-fit m-auto",
        children: [
            ...Array(rating)
        ].map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: "max-h-[25px] w-[25px]",
                src: "star.png"
            }, i))
    });
};


/***/ }),

/***/ 6608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ MiniTag)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MiniTagIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3076);



const MiniTag = ({ id  })=>{
    const tags = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.tags);
    const foundTag = tags.find((tag)=>tag.id === id);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `text-white rounded-sm font-bold w-[100px] p-2 ${(0,_MiniTagIcon__WEBPACK_IMPORTED_MODULE_2__/* .returnTagColor */ .v)(foundTag.color)}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: foundTag.name
        })
    });
};


/***/ }),

/***/ 8639:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng": () => (/* reexport safe */ _MiniTag__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   "su": () => (/* reexport safe */ _MiniTagIcon__WEBPACK_IMPORTED_MODULE_2__.s)
/* harmony export */ });
/* harmony import */ var _MiniTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6608);
/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2946);
/* harmony import */ var _MiniTagIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3076);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Tag__WEBPACK_IMPORTED_MODULE_1__]);
_Tag__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;