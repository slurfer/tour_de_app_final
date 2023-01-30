(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6935);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8685);
/* harmony import */ var _src_store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5213);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_functions__WEBPACK_IMPORTED_MODULE_5__]);
_src_functions__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function App({ Component , pageProps  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const updateUsers = async ()=>{
            const serverData = await (0,_src_functions__WEBPACK_IMPORTED_MODULE_5__/* .getRequest */ .A_)("programmer");
            dispatch((0,_src_store_actions__WEBPACK_IMPORTED_MODULE_6__/* .setUsers */ .HM)(serverData));
        };
        updateUsers();
        const updateTags = async ()=>{
            const serverData = await (0,_src_functions__WEBPACK_IMPORTED_MODULE_5__/* .getRequest */ .A_)("tag");
            dispatch((0,_src_store_actions__WEBPACK_IMPORTED_MODULE_6__/* .setTags */ .mG)(serverData));
        };
        updateTags();
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
        store: _src_store_store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_store_store__WEBPACK_IMPORTED_MODULE_2__/* .wrapper.withRedux */ .Y.withRedux(App));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ store),
  "Y": () => (/* binding */ wrapper)
});

;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: ./src/store/reducers/records_reducer.ts
const recordsReducer = (state = [], action)=>{
    switch(action.type){
        case "SET_RECORDS":
            {
                return action.records ? action.records : [];
            }
        case "ADD_RECORD":
            {
                return [
                    action.newrecord,
                    ...state
                ];
            }
        case "REMOVE_RECORD":
            {
                return state.filter((record)=>record.id !== action.deletedrecord_id);
            }
        case "UPDATE_RECORD":
            {
                return state.map((record)=>record.id !== action.updatedrecord_id ? record : action.newrecord);
            }
        case "SORT_RECORDS_FROM_OLDEST":
            {
                return state.sort((a, b)=>new Date(a.datetime).toISOString().localeCompare(new Date(b.datetime).toISOString()));
            }
        case "SORT_RECORDS_FROM_NEWEST":
            {
                return state.sort((a, b)=>new Date(b.datetime).toISOString().localeCompare(new Date(a.datetime).toISOString()));
            }
        case "SORT_RECORDS_FROM_LOWEST_RATING":
            {
                return state.sort((a, b)=>a.rating - b.rating);
            }
        case "SORT_RECORDS_FROM_HIGHEST_RATING":
            {
                return state.sort((a, b)=>b.rating - a.rating);
            }
        case "SORT_RECORDS_FROM_SHORTEST":
            {
                return state.sort((a, b)=>a.minutes_spent - b.minutes_spent);
            }
        case "SORT_RECORDS_FROM_LONGEST":
            {
                return state.sort((a, b)=>b.minutes_spent - a.minutes_spent);
            }
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/store/reducers/sidebar_reducer.ts
const sidebarReducer = (state = false, action)=>{
    switch(action.type){
        case "TOGGLE_VISIBILITY":
            {
                return !state;
            }
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/store/reducers/users_reducer.ts
const usersReducer = (state = [], action)=>{
    switch(action.type){
        case "SET_USERS":
            {
                return action.users ? action.users : [];
            }
        case "ADD_USER":
            {
                return [
                    action.newuser,
                    ...state
                ];
            }
        case "REMOVE_USER":
            {
                return state.filter((user)=>user.id !== action.deleteduser_id);
            }
        case "UPDATE_USER":
            {
                return state.map((record)=>record.id !== action.updated_user_id ? record : action.newrecord);
            }
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/store/reducers/tags_reducer.ts
const tagsReducer = (state = [], action)=>{
    switch(action.type){
        case "SET_TAGS":
            {
                return action.tags ? action.tags : [];
            }
        case "ADD_TAG":
            {
                return [
                    action.newtag,
                    ...state
                ];
            }
        case "REMOVE_TAG":
            {
                return state.filter((tag)=>tag.id !== action.deleted_tag_id);
            }
        case "UPDATE_TAG":
            {
                return state.map((record)=>record.id !== action.updated_tag_id ? record : action.new_tag);
            }
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/store/reducers/page_reducer.ts
const pageReducer = (state = "home", action)=>{
    switch(action.type){
        case "SET_PAGE":
            {
                return action.page;
            }
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/store/reducers/dark_mode_reducer.ts
const darkModeReducer = (state = false, action)=>{
    switch(action.type){
        case "TOGGLE_DARK_MODE":
            {
                return !state;
            }
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/store/reducers/index.ts







/* harmony default export */ const reducers = ((0,external_redux_namespaceObject.combineReducers)({
    records: recordsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    tags: tagsReducer,
    page: pageReducer,
    mode: darkModeReducer
}));

;// CONCATENATED MODULE: ./src/store/store.ts





const initalState = {
    records: [],
    sidebar: false,
    users: [],
    tags: [],
    page: "home",
    mode: false
};
const middleware = [
    (external_redux_thunk_default())
];
const store = (0,external_redux_namespaceObject.createStore)(reducers, initalState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)(...middleware)));
const makeStore = ()=>store;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 1320:
/***/ ((module) => {

"use strict";
module.exports = require("dompurify");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [821], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();