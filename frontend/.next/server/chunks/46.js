"use strict";
exports.id = 46;
exports.ids = [46];
exports.modules = {

/***/ 6271:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ AddEntryForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5213);
/* harmony import */ var _src_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8685);
/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2566);
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1880);
/* harmony import */ var _UniversalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1893);
/* harmony import */ var _formParts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3272);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_functions__WEBPACK_IMPORTED_MODULE_3__]);
_src_functions__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const AddEntryForm = ({ datetime  })=>{
    const mode = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.mode);
    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [programming_language, setProgrammingLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Python");
    const [minutes_spent, setMinutesSpent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [rating, setRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [picked, setPicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const users = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.users);
    const tags = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.tags);
    const addPostButtonProps = "w-full text-center border-x-2 border-b-2 text-white font-bold bg-main_color";
    const handleTags = (tag)=>{
        if (picked.includes(tag)) {
            setPicked(picked.filter((thing)=>thing.name !== tag.name));
        } else {
            setPicked([
                ...picked,
                tag
            ]);
        }
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const tag_ids = picked.length !== 0 ? picked.map((obj)=>obj.id) : null;
        const programmer_id = user === "" || user === "No user" || user === null ? null : users.find((person)=>person.name === user.substr(0, user.indexOf(" "))).id;
        const data = {
            datetime,
            description,
            programming_language,
            programmer_id,
            minutes_spent,
            rating,
            id: 100,
            tag_ids
        };
        setShowForm(false);
        const toCoPrislo = await (0,_src_functions__WEBPACK_IMPORTED_MODULE_3__/* .postRequest */ .j0)(data, "record");
        dispatch((0,_src_store_actions__WEBPACK_IMPORTED_MODULE_8__/* .addSingleRecord */ .k_)(toCoPrislo));
        setProgrammingLanguage("Python"), setMinutesSpent(1), setRating(1), setDescription("");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            new Date() > new Date(datetime) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: clsx__WEBPACK_IMPORTED_MODULE_7___default()(addPostButtonProps, "hover:opacity-80", mode ? "bg-white text-main_color border-white" : "border-black text-white"),
                onClick: ()=>setShowForm(!showForm),
                children: "+"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_7___default()(addPostButtonProps, mode ? "bg-white text-main_color border-white" : "border-black"),
                children: "+"
            }),
            showForm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UniversalForm__WEBPACK_IMPORTED_MODULE_5__/* .UniversalForm */ .m, {
                closeForm: ()=>{
                    setShowForm(false);
                },
                header: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        "Create a new entry on day ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: (0,_src_functions__WEBPACK_IMPORTED_MODULE_3__/* .getEstheticDate */ .aG)(datetime)
                        })
                    ]
                }),
                onSubmit: handleSubmit,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_6__/* .SelectProgrammingLanguage */ .zY, {
                            text: "programming language",
                            value: programming_language,
                            onChange: (event)=>setProgrammingLanguage((0,_src_functions__WEBPACK_IMPORTED_MODULE_3__/* .sntz */ ._G)(event.target.value))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_6__/* .SelectUser */ .sq, {
                            text: "Choose the user",
                            value: user,
                            onChange: (event)=>setUser((0,_src_functions__WEBPACK_IMPORTED_MODULE_3__/* .sntz */ ._G)(event.target.value))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_6__/* .UniversalInput */ .Sp, {
                            required: true,
                            type: "number",
                            text: "Time spent in minutes",
                            extrastyle: "h-10",
                            min: true,
                            value: minutes_spent,
                            onChange: (event)=>setMinutesSpent((0,_src_functions__WEBPACK_IMPORTED_MODULE_3__/* .sntz */ ._G)(Number(event.target.value)))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_6__/* .SelectRating */ .jv, {
                            text: "Rating",
                            value: rating,
                            onChange: (event)=>setRating((0,_src_functions__WEBPACK_IMPORTED_MODULE_3__/* .sntz */ ._G)(parseInt(event.target.value)))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Description__WEBPACK_IMPORTED_MODULE_4__/* .Description */ .d, {
                            text: "Pick the tags for your entry"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: _src_constants__WEBPACK_IMPORTED_MODULE_9__/* .inputSameProperties */ .uH,
                            children: tags.map((tag)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "checkbox",
                                            value: tag.name,
                                            checked: picked.includes(tag),
                                            onChange: ()=>handleTags(tag)
                                        }),
                                        tag.name
                                    ]
                                }, tag.id))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Description__WEBPACK_IMPORTED_MODULE_4__/* .Description */ .d, {
                            text: "Your comment"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            required: true,
                            className: _src_constants__WEBPACK_IMPORTED_MODULE_9__/* .inputSameProperties */ .uH,
                            value: description,
                            onChange: (event)=>setDescription((0,_src_functions__WEBPACK_IMPORTED_MODULE_3__/* .sntz */ ._G)(event.target.value))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex mt-8",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_6__/* .FormButton */ .OL, {
                                className: "bg-button_green",
                                type: "submit",
                                text: "Send"
                            })
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4031:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ AddTagForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UniversalForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1893);
/* harmony import */ var _src_store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5213);
/* harmony import */ var _src_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8685);
/* harmony import */ var _formParts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3272);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_functions__WEBPACK_IMPORTED_MODULE_4__]);
_src_functions__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const AddTagForm = ()=>{
    const [showForm, setFormShown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("red");
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const mode = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.mode);
    const handleAddingTags = async (event)=>{
        event?.preventDefault();
        setFormShown(false);
        const toCoPrislo = await (0,_src_functions__WEBPACK_IMPORTED_MODULE_4__/* .postRequest */ .j0)({
            name,
            description,
            color,
            id: 1
        }, "tag");
        dispatch((0,_src_store_actions__WEBPACK_IMPORTED_MODULE_6__/* .addSingleTag */ .RS)(toCoPrislo));
        setName(""), setDescription("");
    };
    const handleName = (event)=>{
        setName((0,_src_functions__WEBPACK_IMPORTED_MODULE_4__/* .sntz */ ._G)((0,_src_functions__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(event.target.value)));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex mb-10",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_5__/* .FormButton */ .OL, {
                    className: ` w-[151px] m-auto ${mode ? "text-main_color bg-white" : "text-white bg-main_color"}`,
                    onClick: ()=>setFormShown(true),
                    text: "Add tags"
                })
            }),
            showForm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UniversalForm__WEBPACK_IMPORTED_MODULE_3__/* .UniversalForm */ .m, {
                className: "pt-[150px]",
                header: "Add new tag",
                closeForm: ()=>setFormShown(false),
                onSubmit: handleAddingTags,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_5__/* .UniversalInput */ .Sp, {
                        required: true,
                        max: true,
                        text: "Fill in the name of the tag",
                        value: name,
                        onChange: handleName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_5__/* .UniversalInput */ .Sp, {
                        required: true,
                        text: "Fill in the description of the tag",
                        value: description,
                        onChange: (event)=>{
                            setDescription((0,_src_functions__WEBPACK_IMPORTED_MODULE_4__/* .sntz */ ._G)(event.target.value));
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_5__/* .SelectColor */ .pu, {
                        text: "Choose from eight different colors",
                        value: color,
                        onChange: (event)=>{
                            setColor((0,_src_functions__WEBPACK_IMPORTED_MODULE_4__/* .sntz */ ._G)(event.target.value));
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex mt-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_5__/* .FormButton */ .OL, {
                            className: "bg-button_green",
                            type: "submit",
                            text: "Add the tag"
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5286:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ EditEntryForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5213);
/* harmony import */ var _src_functions_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8685);
/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2566);
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1880);
/* harmony import */ var _UniversalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1893);
/* harmony import */ var _formParts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3272);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_functions_index_js__WEBPACK_IMPORTED_MODULE_3__]);
_src_functions_index_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable @next/next/no-img-element */ /* eslint-disable jsx-a11y/alt-text */ 








const EditEntryForm = ({ postId , datetime , postProgrammingLanguage , postMinutesSpent , postRating , postComment , postProgrammerId , postTagIds  })=>{
    const mode = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.mode);
    const tags = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.tags);
    const users = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.users);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [programming_language, setProgrammingLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(postProgrammingLanguage);
    const [minutes_spent, setMinutesSpent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(postMinutesSpent);
    const [rating, setRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(postRating);
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(postComment);
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("No user");
    const [picked, setPicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const setInitialPicked = ()=>setTimeout(()=>{
                if (tags) {
                    const filteredTags = postTagIds ? tags.filter((tag)=>postTagIds.includes(tag.id)) : [];
                    setPicked(filteredTags);
                }
            }, 5);
        const setInitialUser = ()=>setTimeout(()=>{
                if (postProgrammerId) {
                    const filteredUser = users.find((user)=>user.id === postProgrammerId);
                    if (filteredUser) {
                        setUser(filteredUser.name + " " + filteredUser.surname);
                    } else {
                        console.log("User not found");
                    }
                }
            }, 5);
        setInitialPicked();
        setInitialUser();
    }, [
        postProgrammerId,
        postTagIds,
        tags,
        users
    ]);
    const handleTags = (tag)=>{
        if (picked.includes(tag)) {
            setPicked(picked.filter((thing)=>thing.name !== tag.name));
        } else {
            setPicked([
                ...picked,
                tag
            ]);
        }
    };
    const handleEditingEntry = (event1)=>{
        event1.preventDefault();
        const id = postId;
        const tag_ids = picked.map((obj)=>obj.id);
        const programmer_id = user === "No user" ? null : users.find((person)=>person.name === user.substr(0, user.indexOf(" "))).id ? users.find((person)=>person.name === user.substr(0, user.indexOf(" "))).id : null;
        const data = {
            datetime,
            description,
            programming_language,
            minutes_spent,
            rating,
            id,
            programmer_id,
            tag_ids
        };
        (0,_src_functions_index_js__WEBPACK_IMPORTED_MODULE_3__/* .putRequest */ .GH)("record", postId, data);
        dispatch((0,_src_store_actions__WEBPACK_IMPORTED_MODULE_7__/* .updateSingleRecord */ .AV)(postId, data));
        setShowForm(false);
    };
    const handleDeletingEntry = ()=>{
        event?.preventDefault();
        (0,_src_functions_index_js__WEBPACK_IMPORTED_MODULE_3__/* .deleteRequest */ .Jl)("record", postId);
        dispatch((0,_src_store_actions__WEBPACK_IMPORTED_MODULE_7__/* .removeSingleRecord */ .cd)(postId));
        setShowForm(false);
    };
    const handleOpeningForm = (event1)=>{
        event1.stopPropagation();
        setShowForm(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: (event1)=>{
            event1.stopPropagation();
        },
        children: [
            showForm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UniversalForm__WEBPACK_IMPORTED_MODULE_5__/* .UniversalForm */ .m, {
                closeForm: ()=>setShowForm(!showForm),
                header: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        "Edit your entry from ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: (0,_src_functions_index_js__WEBPACK_IMPORTED_MODULE_3__/* .getEstheticDate */ .aG)(datetime)
                        })
                    ]
                }),
                onSubmit: handleEditingEntry,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full text-left",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_6__/* .SelectProgrammingLanguage */ .zY, {
                            text: "Programming language",
                            value: programming_language,
                            onChange: (event1)=>setProgrammingLanguage((0,_src_functions_index_js__WEBPACK_IMPORTED_MODULE_3__/* .sntz */ ._G)(event1.target.value))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_6__/* .SelectUser */ .sq, {
                            actualUserValue: user,
                            actualUser: true,
                            text: "Choose the user",
                            value: user,
                            onChange: (event1)=>setUser(event1.target.value)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_6__/* .UniversalInput */ .Sp, {
                            required: true,
                            type: "number",
                            text: "Time spent in minutes",
                            min: true,
                            value: minutes_spent,
                            onChange: (event1)=>setMinutesSpent((0,_src_functions_index_js__WEBPACK_IMPORTED_MODULE_3__/* .sntz */ ._G)(Number(event1.target.value))),
                            extrastyle: "h-10"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_6__/* .SelectRating */ .jv, {
                            value: rating,
                            onChange: (event1)=>setRating((0,_src_functions_index_js__WEBPACK_IMPORTED_MODULE_3__/* .sntz */ ._G)(parseInt(event1.target.value))),
                            text: "Rating"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Description__WEBPACK_IMPORTED_MODULE_4__/* .Description */ .d, {
                            text: "Pick the tags for your entry"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: _src_constants__WEBPACK_IMPORTED_MODULE_8__/* .inputSameProperties */ .uH,
                            children: tags.map((tag)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "checkbox",
                                            value: tag.name,
                                            checked: picked.includes(tag),
                                            onChange: ()=>handleTags(tag)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "ml-4",
                                            children: tag.name
                                        })
                                    ]
                                }, tag.id))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Description__WEBPACK_IMPORTED_MODULE_4__/* .Description */ .d, {
                            text: "Your comment"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            required: true,
                            className: _src_constants__WEBPACK_IMPORTED_MODULE_8__/* .inputSameProperties */ .uH,
                            value: description,
                            onChange: (event1)=>setDescription((0,_src_functions_index_js__WEBPACK_IMPORTED_MODULE_3__/* .sntz */ ._G)(event1.target.value))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex mt-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_6__/* .FormButton */ .OL, {
                                    type: "submit",
                                    text: "Edit form",
                                    className: "mr-2 bg-button_green"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_6__/* .FormButton */ .OL, {
                                    onClick: handleDeletingEntry,
                                    className: "bg-button_red",
                                    text: "Delete entry"
                                })
                            ]
                        })
                    ]
                })
            }),
            mode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "upravit_zaznam_bily.png",
                className: "h-[30px] m-auto",
                onClick: handleOpeningForm
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "upravit_zaznam.png",
                className: "h-[30px] m-auto",
                onClick: handleOpeningForm
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 915:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ EditTagForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UniversalForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1893);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5213);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8685);
/* harmony import */ var _formParts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3272);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_functions__WEBPACK_IMPORTED_MODULE_4__]);
_src_functions__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const EditTagForm = ({ name , description , color , id , closeForm  })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const [tagName, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(name);
    const [tagDescription, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(description);
    const [tagColor, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(color);
    const handleEditingTag = (event)=>{
        event?.preventDefault();
        const updatedTag = {
            name: tagName,
            description: tagDescription,
            color: tagColor,
            id: id
        };
        console.log("Upraveno", updatedTag);
        (0,_src_functions__WEBPACK_IMPORTED_MODULE_4__/* .putRequest */ .GH)("tag", id, updatedTag);
        console.log(updatedTag, id);
        dispatch((0,_src_store_actions__WEBPACK_IMPORTED_MODULE_6__/* .updateSingleTag */ .fv)(id, updatedTag));
        closeForm();
    };
    const handleDeletingTag = (event)=>{
        event?.preventDefault();
        (0,_src_functions__WEBPACK_IMPORTED_MODULE_4__/* .deleteRequest */ .Jl)("tag", id);
        console.log("Tag smaz\xe1n");
        dispatch((0,_src_store_actions__WEBPACK_IMPORTED_MODULE_6__/* .removeSingleTag */ .xQ)(id));
        closeForm();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UniversalForm__WEBPACK_IMPORTED_MODULE_1__/* .UniversalForm */ .m, {
        className: "pt-[150px]",
        header: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Edit tag ",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                    children: [
                        " ",
                        name
                    ]
                })
            ]
        }),
        onSubmit: handleEditingTag,
        closeForm: closeForm,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_5__/* .UniversalInput */ .Sp, {
                required: true,
                max: true,
                text: "Edit the name of the tag",
                value: tagName,
                onChange: (event)=>{
                    setName((0,_src_functions__WEBPACK_IMPORTED_MODULE_4__/* .sntz */ ._G)(event.target.value));
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_5__/* .UniversalInput */ .Sp, {
                required: true,
                text: "Edit the description of the tag",
                value: tagDescription,
                onChange: (event)=>{
                    setDescription((0,_src_functions__WEBPACK_IMPORTED_MODULE_4__/* .sntz */ ._G)(event.target.value));
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_5__/* .SelectColor */ .pu, {
                color: color,
                value: tagColor,
                onChange: (event)=>{
                    setColor(event.target.value);
                },
                text: "Edit the color of your tag"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex mt-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_5__/* .FormButton */ .OL, {
                        type: "submit",
                        text: "Edit form",
                        className: "mr-2 bg-button_green"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_5__/* .FormButton */ .OL, {
                        onClick: handleDeletingTag,
                        className: "bg-button_red",
                        text: "Delete entry"
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ SortEntriesForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UniversalForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1893);
/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2566);
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1880);
/* harmony import */ var _formParts_FormButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8086);
/* harmony import */ var _src_store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5213);








const SortEntriesForm = ({ onClick  })=>{
    const [sortType, setSortType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("no sorting");
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const handleSorting = ()=>{
        event?.preventDefault();
        onClick();
        switch(sortType){
            case "from oldest":
                dispatch((0,_src_store_actions__WEBPACK_IMPORTED_MODULE_6__/* .sortEntriesFromOldest */ .kZ)());
                break;
            case "from newest":
                dispatch((0,_src_store_actions__WEBPACK_IMPORTED_MODULE_6__/* .sortEntriesFromNewest */ .ER)());
                break;
            case "from worst rating":
                dispatch((0,_src_store_actions__WEBPACK_IMPORTED_MODULE_6__/* .sortEntriesFromLowestRating */ .RD)());
                break;
            case "from best rating":
                dispatch((0,_src_store_actions__WEBPACK_IMPORTED_MODULE_6__/* .sortEntriesFromHighestRating */ .Nl)());
                break;
            case "from shortest":
                dispatch((0,_src_store_actions__WEBPACK_IMPORTED_MODULE_6__/* .sortEntriesFromShortest */ .XX)());
                break;
            case "from longest":
                dispatch((0,_src_store_actions__WEBPACK_IMPORTED_MODULE_6__/* .sortEntriesFromLongest */ .AE)());
                break;
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UniversalForm__WEBPACK_IMPORTED_MODULE_3__/* .UniversalForm */ .m, {
        className: "pt-[150px]",
        header: "Sort entries",
        closeForm: onClick,
        onSubmit: handleSorting,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Description__WEBPACK_IMPORTED_MODULE_4__/* .Description */ .d, {
                text: "Pick how you want to sort your entries"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                className: _src_constants__WEBPACK_IMPORTED_MODULE_7__/* .inputSameProperties */ .uH,
                value: sortType,
                onChange: (event1)=>{
                    setSortType(event1.target.value);
                },
                children: _src_constants__WEBPACK_IMPORTED_MODULE_7__/* .sorting.map */ .wr.map((type)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: type,
                        children: type
                    }, type);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex mt-10",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts_FormButton__WEBPACK_IMPORTED_MODULE_5__/* .FormButton */ .O, {
                    className: "bg-button_green m-auto",
                    type: "submit",
                    text: "Sort the entries"
                })
            })
        ]
    });
};


/***/ }),

/***/ 6205:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Oi": () => (/* reexport safe */ _EditEntryForm__WEBPACK_IMPORTED_MODULE_3__.O),
/* harmony export */   "R5": () => (/* reexport safe */ _AddEntryForm__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   "cE": () => (/* reexport safe */ _SortEntriesForm__WEBPACK_IMPORTED_MODULE_6__.c),
/* harmony export */   "mi": () => (/* reexport safe */ _UniversalForm__WEBPACK_IMPORTED_MODULE_7__.m),
/* harmony export */   "xW": () => (/* reexport safe */ _AddTagForm__WEBPACK_IMPORTED_MODULE_1__.x)
/* harmony export */ });
/* harmony import */ var _AddEntryForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6271);
/* harmony import */ var _AddTagForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4031);
/* harmony import */ var _AddUserForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4438);
/* harmony import */ var _EditEntryForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5286);
/* harmony import */ var _EditTagForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(915);
/* harmony import */ var _EditUserForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2962);
/* harmony import */ var _SortEntriesForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2412);
/* harmony import */ var _UniversalForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AddEntryForm__WEBPACK_IMPORTED_MODULE_0__, _AddTagForm__WEBPACK_IMPORTED_MODULE_1__, _AddUserForm__WEBPACK_IMPORTED_MODULE_2__, _EditEntryForm__WEBPACK_IMPORTED_MODULE_3__, _EditTagForm__WEBPACK_IMPORTED_MODULE_4__, _EditUserForm__WEBPACK_IMPORTED_MODULE_5__]);
([_AddEntryForm__WEBPACK_IMPORTED_MODULE_0__, _AddTagForm__WEBPACK_IMPORTED_MODULE_1__, _AddUserForm__WEBPACK_IMPORTED_MODULE_2__, _EditEntryForm__WEBPACK_IMPORTED_MODULE_3__, _EditTagForm__WEBPACK_IMPORTED_MODULE_4__, _EditUserForm__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ MiniTagIcon),
/* harmony export */   "v": () => (/* binding */ returnTagColor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);


const colorsCodes = [
    "bg-[#ffe100]",
    "bg-[#FFA500]",
    "bg-[#DC143C]",
    "bg-[#FF69B4]",
    "bg-[#9400D3]",
    "bg-[#0000FF]",
    "bg-[#32CD32]",
    "bg-[#8B4513]"
];
const returnTagColor = (color)=>{
    switch(color){
        case "yellow":
            return colorsCodes[0];
        case "orange":
            return colorsCodes[1];
        case "red":
            return colorsCodes[2];
        case "pink":
            return colorsCodes[3];
        case "purple":
            return colorsCodes[4];
        case "blue":
            return colorsCodes[5];
        case "green":
            return colorsCodes[6];
        case "brown":
            return colorsCodes[7];
    }
};
const MiniTagIcon = ({ id  })=>{
    const tags = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.tags);
    const mode = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.mode);
    const foundTag = tags.find((tag)=>tag.id === id);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `text-whites rounded-sm sborder-black h-[30px] w-[40px] p-2 ${mode && "border border-white"} ${foundTag && returnTagColor(foundTag.color)}`
    });
};


/***/ }),

/***/ 2946:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Tag)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _forms_EditTagForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(915);
/* harmony import */ var _MiniTagIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3076);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_forms_EditTagForm__WEBPACK_IMPORTED_MODULE_3__]);
_forms_EditTagForm__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable @next/next/no-img-element */ /* eslint-disable jsx-a11y/alt-text */ 





const Tag = ({ name , color , description , id  })=>{
    const [showForm, setFormShown] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const mode = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.mode);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(`m-auto sm:m-0 my-1 sm:my-0 rounded-sm w-min lg:ms-1 px-2 py-5 w-[150px] h-[300px] ${mode ? "border border-white" : ""}`, (0,_MiniTagIcon__WEBPACK_IMPORTED_MODULE_4__/* .returnTagColor */ .v)(color)),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xl text-center font-bold text-white w-full",
                children: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xl text-center h-[200px] text-white",
                children: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-fit w-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    onClick: ()=>setFormShown(true),
                    src: "upravit_zaznam_bily.png",
                    className: "m-auto mt-2 h-7 cursor-pointer"
                })
            }),
            showForm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_forms_EditTagForm__WEBPACK_IMPORTED_MODULE_3__/* .EditTagForm */ .p, {
                name: name,
                color: color,
                description: description,
                id: id,
                closeForm: ()=>{
                    setFormShown(false);
                }
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;