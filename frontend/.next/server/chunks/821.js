"use strict";
exports.id = 821;
exports.ids = [821];
exports.modules = {

/***/ 1880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FH": () => (/* binding */ baseUrl),
/* harmony export */   "Me": () => (/* binding */ programmingLanguages),
/* harmony export */   "WR": () => (/* binding */ colorsNames),
/* harmony export */   "uH": () => (/* binding */ inputSameProperties),
/* harmony export */   "wr": () => (/* binding */ sorting)
/* harmony export */ });
/* unused harmony export colorsCodes */
const baseUrl = "http://147.182.204.155:8888";
const inputSameProperties = "w-full my-[4px] rounded-md border border-black p-2 m-auto";
const programmingLanguages = [
    "Python",
    "Javascript",
    "C++"
];
const colorsNames = [
    "yellow",
    "orange",
    "red",
    "pink",
    "purple",
    "blue",
    "green",
    "brown"
];
const colorsCodes = (/* unused pure expression or super */ null && ([
    "bg-[#ffe100]",
    "bg-[#FFA500]",
    "bg-[#DC143C]",
    "bg-[#FF69B4]",
    "bg-[#9400D3]",
    "bg-[#0000FF]",
    "bg-[#32CD32]",
    "bg-[#8B4513]"
]));
const sorting = [
    "from newest",
    "from oldest",
    "from best rating",
    "from worst rating",
    "from shortest",
    "from longest",
    "no sorting"
];


/***/ }),

/***/ 9377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ deleteRequest)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1880);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const deleteRequest = async (path, id)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](`${_constants__WEBPACK_IMPORTED_MODULE_1__/* .baseUrl */ .FH}/${path}/${id}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4196:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ getRequest)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1880);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getRequest = async (path)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_constants__WEBPACK_IMPORTED_MODULE_1__/* .baseUrl */ .FH}/${path}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ postRequest)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1880);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const postRequest = async (data, path)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${_constants__WEBPACK_IMPORTED_MODULE_1__/* .baseUrl */ .FH}/${path}`, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7136:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ putRequest)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1880);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const putRequest = async (path, id, data)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${_constants__WEBPACK_IMPORTED_MODULE_1__/* .baseUrl */ .FH}/${path}/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ getEstheticDate)
/* harmony export */ });
//this function takes format "2022-12-29 14:16:37" and makes it format 26.12. 2022
function getEstheticDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}.${month}. ${year}`;
}


/***/ }),

/***/ 1680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ getPastDate)
/* harmony export */ });
//this function gives us date in format: "2022-12-29 14:16:37"
function getPastDate(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")} ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}


/***/ }),

/***/ 8685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A_": () => (/* reexport safe */ _api_get_ts__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   "GH": () => (/* reexport safe */ _api_put_ts__WEBPACK_IMPORTED_MODULE_2__.G),
/* harmony export */   "Jl": () => (/* reexport safe */ _api_delete_ts__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   "U3": () => (/* reexport safe */ _date_right_date_ts__WEBPACK_IMPORTED_MODULE_5__.U),
/* harmony export */   "_G": () => (/* reexport safe */ _others_index_ts__WEBPACK_IMPORTED_MODULE_6__._G),
/* harmony export */   "aG": () => (/* reexport safe */ _date_esthetic_date_ts__WEBPACK_IMPORTED_MODULE_4__.a),
/* harmony export */   "j0": () => (/* reexport safe */ _api_post_ts__WEBPACK_IMPORTED_MODULE_3__.j),
/* harmony export */   "kC": () => (/* reexport safe */ _others_index_ts__WEBPACK_IMPORTED_MODULE_6__.kC),
/* harmony export */   "yb": () => (/* reexport safe */ _others_index_ts__WEBPACK_IMPORTED_MODULE_6__.yb)
/* harmony export */ });
/* harmony import */ var _api_delete_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9377);
/* harmony import */ var _api_get_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4196);
/* harmony import */ var _api_put_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7136);
/* harmony import */ var _api_post_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1558);
/* harmony import */ var _date_esthetic_date_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5965);
/* harmony import */ var _date_right_date_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1680);
/* harmony import */ var _others_index_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9037);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_delete_ts__WEBPACK_IMPORTED_MODULE_0__, _api_get_ts__WEBPACK_IMPORTED_MODULE_1__, _api_put_ts__WEBPACK_IMPORTED_MODULE_2__, _api_post_ts__WEBPACK_IMPORTED_MODULE_3__]);
([_api_delete_ts__WEBPACK_IMPORTED_MODULE_0__, _api_get_ts__WEBPACK_IMPORTED_MODULE_1__, _api_put_ts__WEBPACK_IMPORTED_MODULE_2__, _api_post_ts__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_G": () => (/* binding */ sntz),
/* harmony export */   "kC": () => (/* binding */ capitalize),
/* harmony export */   "yb": () => (/* binding */ isOnlyLetters)
/* harmony export */ });
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1320);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);

const sntz = (thing)=>{
    return dompurify__WEBPACK_IMPORTED_MODULE_0___default().sanitize(thing);
};
const isOnlyLetters = (word)=>{
    return /^[a-zA-ZěŠšČčŘřŽžÝýÍíÁáÉéŮůÚú]+$/.test(word);
};
const capitalize = (word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};


/***/ }),

/***/ 5213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AE": () => (/* binding */ sortEntriesFromLongest),
/* harmony export */   "AV": () => (/* binding */ updateSingleRecord),
/* harmony export */   "ER": () => (/* binding */ sortEntriesFromNewest),
/* harmony export */   "HM": () => (/* binding */ setUsers),
/* harmony export */   "K0": () => (/* binding */ updateSingleUser),
/* harmony export */   "KL": () => (/* binding */ removeSingleUser),
/* harmony export */   "Nl": () => (/* binding */ sortEntriesFromHighestRating),
/* harmony export */   "RD": () => (/* binding */ sortEntriesFromLowestRating),
/* harmony export */   "RS": () => (/* binding */ addSingleTag),
/* harmony export */   "Re": () => (/* binding */ toggleSidebarVisbility),
/* harmony export */   "XX": () => (/* binding */ sortEntriesFromShortest),
/* harmony export */   "YA": () => (/* binding */ setPage),
/* harmony export */   "ZJ": () => (/* binding */ setRecords),
/* harmony export */   "bP": () => (/* binding */ toggleMode),
/* harmony export */   "cd": () => (/* binding */ removeSingleRecord),
/* harmony export */   "fv": () => (/* binding */ updateSingleTag),
/* harmony export */   "jP": () => (/* binding */ addSingleUser),
/* harmony export */   "kZ": () => (/* binding */ sortEntriesFromOldest),
/* harmony export */   "k_": () => (/* binding */ addSingleRecord),
/* harmony export */   "mG": () => (/* binding */ setTags),
/* harmony export */   "xQ": () => (/* binding */ removeSingleTag)
/* harmony export */ });
//RECORDS ACTIONS
const setRecords = (records)=>{
    return {
        type: "SET_RECORDS",
        records: records
    };
};
const addSingleRecord = (newrecord)=>{
    return {
        type: "ADD_RECORD",
        newrecord: newrecord
    };
};
const removeSingleRecord = (deletedrecord_id)=>{
    return {
        type: "REMOVE_RECORD",
        deletedrecord_id: deletedrecord_id
    };
};
const updateSingleRecord = (updatedrecord_id, newrecord)=>{
    return {
        type: "UPDATE_RECORD",
        updatedrecord_id: updatedrecord_id,
        newrecord: newrecord
    };
};
const sortEntriesFromOldest = ()=>{
    return {
        type: "SORT_RECORDS_FROM_OLDEST"
    };
};
const sortEntriesFromNewest = ()=>{
    return {
        type: "SORT_RECORDS_FROM_NEWEST"
    };
};
const sortEntriesFromLowestRating = ()=>{
    return {
        type: "SORT_RECORDS_FROM_LOWEST_RATING"
    };
};
const sortEntriesFromHighestRating = ()=>{
    return {
        type: "SORT_RECORDS_FROM_HIGHEST_RATING"
    };
};
const sortEntriesFromShortest = ()=>{
    return {
        type: "SORT_RECORDS_FROM_SHORTEST"
    };
};
const sortEntriesFromLongest = ()=>{
    return {
        type: "SORT_RECORDS_FROM_LONGEST"
    };
};
//SIDEBAR ACTIONS
const toggleSidebarVisbility = ()=>{
    return {
        type: "TOGGLE_VISIBILITY"
    };
};
//USERS ACTIONS
const setUsers = (users)=>{
    return {
        type: "SET_USERS",
        users: users
    };
};
const addSingleUser = (newuser)=>{
    return {
        type: "ADD_USER",
        newuser: newuser
    };
};
const removeSingleUser = (deleteduser_id)=>{
    return {
        type: "REMOVE_USER",
        deleteduser_id: deleteduser_id
    };
};
const updateSingleUser = (updated_user_id, newrecord)=>{
    return {
        type: "UPDATE_USER",
        updated_user_id: updated_user_id,
        newrecord: newrecord
    };
};
//TAGS ACTIONS
const setTags = (tags)=>{
    return {
        type: "SET_TAGS",
        tags: tags
    };
};
const addSingleTag = (newtag)=>{
    return {
        type: "ADD_TAG",
        newtag: newtag
    };
};
const removeSingleTag = (deleted_tag_id)=>{
    return {
        type: "REMOVE_TAG",
        deleted_tag_id: deleted_tag_id
    };
};
const updateSingleTag = (updated_tag_id, new_tag)=>{
    return {
        type: "UPDATE_TAG",
        updated_tag_id: updated_tag_id,
        new_tag: new_tag
    };
};
//PAGE ACTIONS
const setPage = (page)=>{
    return {
        type: "SET_PAGE",
        page: page
    };
};
//MODE ACTIONS
const toggleMode = ()=>{
    return {
        type: "TOGGLE_DARK_MODE"
    };
};


/***/ })

};
;