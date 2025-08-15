"use strict";
/// <reference types="../node_modules/.vue-global-types/vue_3.5_0.d.ts" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorld_vue_1 = require("./components/HelloWorld.vue");
var jzx_sdk_1 = require("jzx-sdk");
console.log(123, jzx_sdk_1.add);
console.log(123, (0, jzx_sdk_1.add)('1', '2'));
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_elements;
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "https://vite.dev",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_elements.img)(__assign(__assign({ src: "/vite.svg" }, { class: "logo" }), { alt: "Vite logo" }));
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "https://vuejs.org/",
    target: "_blank",
});
__VLS_asFunctionalElement(__VLS_elements.img)(__assign(__assign({ src: "./assets/vue.svg" }, { class: "logo vue" }), { alt: "Vue logo" }));
/** @type {[typeof HelloWorld, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(HelloWorld_vue_1.default, new HelloWorld_vue_1.default({
    msg: "Vite + Vue",
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        msg: "Vite + Vue",
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['vue']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            HelloWorld: HelloWorld_vue_1.default,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
    },
});
; /* PartiallyEnd: #4569/main.vue */
