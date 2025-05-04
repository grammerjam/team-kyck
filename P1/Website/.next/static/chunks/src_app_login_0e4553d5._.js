(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/login/Login.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "centerer": "Login-module__noQWca__centerer",
  "inputError": "Login-module__noQWca__inputError",
  "loginButtonSubmit": "Login-module__noQWca__loginButtonSubmit",
  "loginImgCon": "Login-module__noQWca__loginImgCon",
  "loginInfoCon": "Login-module__noQWca__loginInfoCon",
  "loginInput": "Login-module__noQWca__loginInput",
  "loginSignUpCon": "Login-module__noQWca__loginSignUpCon",
  "loginSignUpLink": "Login-module__noQWca__loginSignUpLink",
  "loginTitle": "Login-module__noQWca__loginTitle",
  "noError": "Login-module__noQWca__noError",
  "relativePos": "Login-module__noQWca__relativePos",
});
}}),
"[project]/src/app/login/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/login/Login.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$browserify$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Home() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [eMessage, setEMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [pMessage, setPMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isEmailError, setIsEmailError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPasswordError, setIsPasswordError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const validate = ()=>{
        emailValidation();
        passwordValidation();
    };
    const emailValidation = ()=>{
        const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regEx.test(email)) {
            setEMessage("");
            setIsEmailError(false);
        } else if (!regEx.test(email) && email != "") {
            setEMessage("Can't be invalid");
            setIsEmailError(true);
        } else {
            setEMessage("Can't be empty");
            setIsEmailError(true);
        }
    };
    const passwordValidation = ()=>{
        if (password.length > 0) {
            setPMessage("");
            setIsPasswordError(false);
        } else {
            setPMessage("Can't be empty");
            setIsPasswordError(true);
        }
    };
    const handleOnEmailChange = (e)=>{
        setEmail(e.target.value);
    };
    const handleOnPasswordChange = (e)=>{
        setPassword(e.target.value);
    };
    // const getErrorState = () => {
    //   if(!isValid){
    //     return styles.noError
    //   }
    //   else{
    //     return styles.inputError
    //   }
    // }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginImgCon,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/assets/logo.svg",
                    alt: "KyckFlix logo."
                }, void 0, false, {
                    fileName: "[project]/src/app/login/page.jsx",
                    lineNumber: 69,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/login/page.jsx",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginInfoCon,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].relativePos,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginTitle,
                            children: [
                                "Login",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/login/page.jsx",
                                    lineNumber: 77,
                                    columnNumber: 22
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/login/page.jsx",
                            lineNumber: 76,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/login/page.jsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].relativePos,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: isEmailError ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputError : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noError,
                                children: eMessage
                            }, void 0, false, {
                                fileName: "[project]/src/app/login/page.jsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginInput,
                                type: "email",
                                placeholder: "Email address",
                                "aria-required": "true",
                                onChange: handleOnEmailChange,
                                value: email,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/login/page.jsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/login/page.jsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/login/page.jsx",
                        lineNumber: 88,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].relativePos,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: isPasswordError ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputError : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noError,
                                children: pMessage
                            }, void 0, false, {
                                fileName: "[project]/src/app/login/page.jsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginInput,
                                type: "password",
                                placeholder: "Password",
                                "aria-required": "true",
                                onChange: handleOnPasswordChange,
                                value: password,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/login/page.jsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/login/page.jsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/login/page.jsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: validate,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginButtonSubmit,
                        children: "Login to your account"
                    }, void 0, false, {
                        fileName: "[project]/src/app/login/page.jsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/login/page.jsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginSignUpCon,
                        children: [
                            "Don't have an account?",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/signup",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginSignUpLink,
                                children: " Sign Up"
                            }, void 0, false, {
                                fileName: "[project]/src/app/login/page.jsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/login/page.jsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/login/page.jsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/login/page.jsx",
                lineNumber: 73,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/login/page.jsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(Home, "DyUJLKXPVtwYtZWoq5zL+9iTEts=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_login_0e4553d5._.js.map