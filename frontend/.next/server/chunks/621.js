"use strict";
exports.id = 621;
exports.ids = [621];
exports.modules = {

/***/ 2566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ Description)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Description = ({ text  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "font-bold text-sm",
        children: text
    });
};


/***/ }),

/***/ 2302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/store/actions/index.ts
var actions = __webpack_require__(5213);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/sidebar/SideBarLink.tsx




const SideBarLink = ({ text , href  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const page = (0,external_react_redux_.useSelector)((state)=>state.page);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        className: `hover:font-bold 
      ${page === "home" && text === "Calendar" ? "font-bold" : ""}
      ${page === "all_entries" && text === "All Entries" ? "font-bold" : ""}
      ${page === "tags" && text === "Tags" ? "font-bold" : ""}
      ${page === "users" && text === "Users" ? "font-bold" : ""}

      `,
        onClick: ()=>dispatch((0,actions/* toggleSidebarVisbility */.Re)()),
        href: href,
        children: [
            text,
            " "
        ]
    });
};

;// CONCATENATED MODULE: ./components/sidebar/Sidebar.tsx
/* eslint-disable jsx-a11y/alt-text */ /* eslint-disable @next/next/no-img-element */ 




const Sidebar = ()=>{
    const isOpen = (0,external_react_redux_.useSelector)((state)=>state.sidebar);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const mode = (0,external_react_redux_.useSelector)((state)=>state.mode);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `
      ${isOpen ? "w-[350px] p-20" : "w-0"}
      ${mode ? "bg-white text-main_color" : external_clsx_default()("text-white", "bg-main_color")}
      h-full fixed top-0 left-0 z-10 duration-300 text-white`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: ` ${isOpen ? "block" : "hidden"} text-2xl`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "fixed top-[20px] cursor-pointer left-[280px] w-[50px]",
                    src: mode ? "zavrit_stranku_fialove.png" : "zavrit_stranku.png",
                    onClick: ()=>dispatch((0,actions/* toggleSidebarVisbility */.Re)())
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SideBarLink, {
                    text: "Calendar",
                    href: "/"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx(SideBarLink, {
                    text: "All Entries",
                    href: "/all_entries"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx(SideBarLink, {
                    text: "Users",
                    href: "/users"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx(SideBarLink, {
                    text: "Tags",
                    href: "/tags"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Header.tsx





/* eslint-disable jsx-a11y/alt-text */ /* eslint-disable @next/next/no-img-element */ const Header = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const mode = (0,external_react_redux_.useSelector)((state)=>state.mode);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                onClick: ()=>dispatch((0,actions/* toggleSidebarVisbility */.Re)()),
                className: external_clsx_default()("my-5 text-5xl text-center font-bold", !mode ? "" : "text-white"),
                children: [
                    "Programming. ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: !mode ? "text-main_color" : "text-white",
                        children: "Daily."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "md:relative mb-10 md:mb-0 left-[100px] top-[-35px] m-auto md:m-0 md:mt-[-30px] cursor-pointer w-[40px]",
                src: mode ? "otevrit_stranku_bila.png" : "otevrit_stranku.png",
                onClick: ()=>dispatch((0,actions/* toggleSidebarVisbility */.Re)())
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "md:relative mb-10 md:mb-0 left-[1300px] top-[-35px] m-auto md:m-0 md:mt-[-30px] cursor-pointer w-[40px]",
                src: mode ? "zmena_modu_bila.png" : "zmena_modu.png",
                onClick: ()=>dispatch((0,actions/* toggleMode */.bP)())
            })
        ]
    });
};


/***/ }),

/***/ 3425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);


const Page = ({ children  })=>{
    const mode = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.mode);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `duration-300 min-h-screen ${mode ? "bg-main_color" : ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-page_max m-auto overflow-hidden w-full p-5",
            children: children
        })
    });
};


/***/ }),

/***/ 8086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ FormButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


const FormButton = ({ className , text , onClick , type  })=>{
    const tip = type ? type : undefined;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("hover:opacity-80 m-auto w-[50%] px-5 py-2 rounded-md text-white font-bold", className),
        onClick: onClick,
        type: tip,
        children: text
    });
};


/***/ }),

/***/ 3272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "OL": () => (/* reexport */ FormButton/* FormButton */.O),
  "pu": () => (/* reexport */ SelectColor),
  "zY": () => (/* reexport */ SelectProgrammingLanguage),
  "jv": () => (/* reexport */ SelectRating),
  "sq": () => (/* reexport */ SelectUser),
  "Sp": () => (/* reexport */ UniversalInput)
});

// UNUSED EXPORTS: SelectTags

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Description.tsx
var components_Description = __webpack_require__(2566);
// EXTERNAL MODULE: ./src/constants/index.ts
var constants = __webpack_require__(1880);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./components/formParts/UniversalInput.tsx




const UniversalInput = ({ text , min , value , onChange , extrastyle , type , max , required  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Description/* Description */.d, {
                text: text
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: external_clsx_default()(constants/* inputSameProperties */.uH, extrastyle),
                type: type ? type : "string",
                min: min ? "1" : "",
                maxLength: max ? 12 : undefined,
                value: value,
                onChange: onChange,
                required: required ? true : false
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/formParts/SelectProgrammingLanguage.tsx



const SelectProgrammingLanguage = ({ text , value , onChange , bonusOption  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Description/* Description */.d, {
                text: text
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                className: constants/* inputSameProperties */.uH,
                value: value,
                onChange: onChange,
                children: [
                    bonusOption && /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: undefined,
                        children: "No language filter"
                    }),
                    constants/* programmingLanguages.map */.Me.map((pLanguage)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: pLanguage,
                            children: pLanguage
                        }, pLanguage);
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/formParts/SelectColor.tsx



const SelectColor = ({ text , value , onChange , color  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Description/* Description */.d, {
                text: text
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                className: constants/* inputSameProperties */.uH,
                value: value,
                onChange: onChange,
                children: [
                    color && /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: color,
                        children: color
                    }, 0),
                    constants/* colorsNames.map */.WR.map((color)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: color,
                            children: color
                        }, color);
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/formParts/SelectRating.tsx



const SelectRating = ({ text , value , onChange  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Description/* Description */.d, {
                text: text
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                className: constants/* inputSameProperties */.uH,
                value: value,
                onChange: onChange,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: 1,
                        children: "1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: 2,
                        children: "2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: 3,
                        children: "3"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: 4,
                        children: "4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: 5,
                        children: "5"
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./components/formParts/SelectUser.tsx




const SelectUser = ({ text , value , onChange , actualUser , actualUserValue  })=>{
    const users = (0,external_react_redux_.useSelector)((state)=>state.users);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Description/* Description */.d, {
                text: text
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                value: value,
                onChange: onChange,
                className: constants/* inputSameProperties */.uH,
                children: [
                    actualUser && /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: actualUserValue,
                        children: actualUserValue
                    }, 1),
                    actualUserValue !== "No user" && /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "No user",
                        children: "No user"
                    }, 2),
                    users.map((user)=>{
                        const userFullName = user.name + " " + user.surname;
                        {
                            if (actualUserValue !== userFullName) {
                                return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: userFullName,
                                    children: userFullName
                                }, user.id);
                            }
                        }
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/formParts/FormButton.tsx
var FormButton = __webpack_require__(8086);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/formParts/SelectTags.tsx





const SelectTags = ()=>{
    const [picked, setPicked] = useState([]);
    const tags = useSelector((state)=>state.tags);
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
    return /*#__PURE__*/ _jsxs("div", {
        className: inputSameProperties,
        children: [
            /*#__PURE__*/ _jsx(Description, {
                text: "Pick the tag for your entry"
            }),
            tags.map((tag)=>/*#__PURE__*/ _jsxs("div", {
                    children: [
                        /*#__PURE__*/ _jsx("input", {
                            type: "checkbox",
                            value: tag.name,
                            checked: picked.includes(tag),
                            onChange: ()=>handleTags(tag)
                        }),
                        tag.name
                    ]
                }, tag.id))
        ]
    });
};

;// CONCATENATED MODULE: ./components/formParts/index.js









/***/ }),

/***/ 4438:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ AddUserForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _formParts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3272);
/* harmony import */ var _UniversalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1893);
/* harmony import */ var _src_store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5213);
/* harmony import */ var _src_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8685);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_functions__WEBPACK_IMPORTED_MODULE_5__]);
_src_functions__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const AddUserForm = ()=>{
    const mode = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.mode);
    const [showForm, setFormShown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [name, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [surname, setSurname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const handleAddingUsers = async (event)=>{
        event?.preventDefault();
        setFormShown(false);
        const toCoPrislo = await (0,_src_functions__WEBPACK_IMPORTED_MODULE_5__/* .postRequest */ .j0)({
            name,
            surname,
            id: 1
        }, "programmer");
        dispatch((0,_src_store_actions__WEBPACK_IMPORTED_MODULE_6__/* .addSingleUser */ .jP)(toCoPrislo));
        setFirstName(""), setSurname("");
    };
    const handleFirstName = (event)=>{
        const word = event.target.value;
        if ((0,_src_functions__WEBPACK_IMPORTED_MODULE_5__/* .isOnlyLetters */ .yb)(word)) {
            setFirstName((0,_src_functions__WEBPACK_IMPORTED_MODULE_5__/* .sntz */ ._G)((0,_src_functions__WEBPACK_IMPORTED_MODULE_5__/* .capitalize */ .kC)(word)));
        }
    };
    const handleSurname = (event)=>{
        const word = event.target.value;
        if ((0,_src_functions__WEBPACK_IMPORTED_MODULE_5__/* .isOnlyLetters */ .yb)(word)) {
            setSurname((0,_src_functions__WEBPACK_IMPORTED_MODULE_5__/* .sntz */ ._G)((0,_src_functions__WEBPACK_IMPORTED_MODULE_5__/* .capitalize */ .kC)(word)));
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex m-auto w-[300px] mb-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_3__/* .FormButton */ .OL, {
                    className: `${mode ? "text-main_color bg-white" : "text-white bg-main_color"} m-auto`,
                    onClick: ()=>setFormShown(true),
                    text: "Add users"
                })
            }),
            showForm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UniversalForm__WEBPACK_IMPORTED_MODULE_4__/* .UniversalForm */ .m, {
                className: "pt-[150px]",
                header: "Add new user",
                closeForm: ()=>setFormShown(false),
                onSubmit: handleAddingUsers,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_3__/* .UniversalInput */ .Sp, {
                        required: true,
                        text: "Fill in the first name with only one word",
                        value: name,
                        onChange: handleFirstName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_3__/* .UniversalInput */ .Sp, {
                        required: true,
                        text: "Fill in the surname with only one word",
                        value: surname,
                        onChange: handleSurname
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex mt-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_3__/* .FormButton */ .OL, {
                            className: "bg-button_green",
                            type: "submit",
                            text: "Add the user"
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

/***/ 2962:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ EditUserForm)
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







const EditUserForm = ({ closeForm , id , name , surname  })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const [firstNameState, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(name);
    const [surnameState, setSurname] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(surname);
    const handleFirstName = (event)=>{
        const word = event.target.value;
        if ((0,_src_functions__WEBPACK_IMPORTED_MODULE_4__/* .isOnlyLetters */ .yb)(word)) {
            setFirstName((0,_src_functions__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(word));
        }
    };
    const handleSurname = (event)=>{
        const word = event.target.value;
        if ((0,_src_functions__WEBPACK_IMPORTED_MODULE_4__/* .isOnlyLetters */ .yb)(word)) {
            setSurname((0,_src_functions__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(word));
        }
    };
    const handleEditingUser = (event)=>{
        event?.preventDefault();
        const updatedProgrammer = {
            name: firstNameState,
            surname: surnameState,
            id: id
        };
        console.log("Upraveno", updatedProgrammer);
        (0,_src_functions__WEBPACK_IMPORTED_MODULE_4__/* .putRequest */ .GH)("programmer", id, updatedProgrammer);
        dispatch((0,_src_store_actions__WEBPACK_IMPORTED_MODULE_6__/* .updateSingleUser */ .K0)(id, updatedProgrammer));
        closeForm();
    };
    const handleDeletingUser = (event)=>{
        event?.preventDefault();
        (0,_src_functions__WEBPACK_IMPORTED_MODULE_4__/* .deleteRequest */ .Jl)("programmer", id);
        console.log("ahoj");
        dispatch((0,_src_store_actions__WEBPACK_IMPORTED_MODULE_6__/* .removeSingleUser */ .KL)(id));
        closeForm();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UniversalForm__WEBPACK_IMPORTED_MODULE_1__/* .UniversalForm */ .m, {
        className: "pt-[150px]",
        header: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Edit user ",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                    children: [
                        " ",
                        name,
                        " ",
                        surname
                    ]
                })
            ]
        }),
        onSubmit: handleEditingUser,
        closeForm: closeForm,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_5__/* .UniversalInput */ .Sp, {
                text: "Edit the first name of the user",
                value: firstNameState,
                onChange: handleFirstName
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formParts__WEBPACK_IMPORTED_MODULE_5__/* .UniversalInput */ .Sp, {
                text: "Edit the surname of the user",
                value: surnameState,
                onChange: handleSurname
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
                        onClick: handleDeletingUser,
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

/***/ 1893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ UniversalForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable @next/next/no-img-element */ /* eslint-disable jsx-a11y/alt-text */ 

const UniversalForm = ({ header , onSubmit , children , closeForm , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("overflow-hidden h-screen overflow-y-scroll w-screen py-[10px] left-0 fixed top-0 h-screen bg-black/80", className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            className: "p-10 m-auto rounded-xl relative bg-white w-[500px] border border-black",
            onSubmit: onSubmit,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "relative cursor-pointer mb-[-20px] top-[10px] left-[390px]",
                    src: "zavrit_formular.png",
                    onClick: closeForm
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-2xl text-center mb-5",
                    children: header
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "overflow-hidden",
                    children: children
                })
            ]
        })
    });
};


/***/ })

};
;