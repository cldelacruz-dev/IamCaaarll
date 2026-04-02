(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_Marquee_MarqueeWrapper_tsx_de945e._.js", {

"[project]/src/components/Marquee/MarqueeWrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
const marqueeAnimation = (element, elementWidth, windowWidth)=>{
    element.animate([
        {
            transform: 'translateX(0)'
        },
        {
            transform: `translateX(${windowWidth - elementWidth}px)`
        }
    ], {
        duration: 20000,
        easing: 'linear',
        direction: 'alternate',
        iterations: Infinity
    });
};
const MarqueeWrapper = ({ children, className = '' })=>{
    _s();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [windowWidth, setWindowWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarqueeWrapper.useEffect": ()=>{
            setWindowWidth(window.innerWidth);
            if (elementRef.current) {
                const elementWidth = elementRef.current.getBoundingClientRect().width;
                marqueeAnimation(elementRef.current, elementWidth, windowWidth);
            }
            const handleResize = {
                "MarqueeWrapper.useEffect.handleResize": ()=>setWindowWidth(window.innerWidth)
            }["MarqueeWrapper.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "MarqueeWrapper.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["MarqueeWrapper.useEffect"];
        }
    }["MarqueeWrapper.useEffect"], [
        windowWidth
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative overflow-x-hidden ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inter w-max whitespace-nowrap p-5 lg:p-7",
            ref: elementRef,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/Marquee/MarqueeWrapper.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Marquee/MarqueeWrapper.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
};
_s(MarqueeWrapper, "4+FSIAjyTHGEVSToSs1ugB1yA4E=");
_c = MarqueeWrapper;
const __TURBOPACK__default__export__ = MarqueeWrapper;
var _c;
__turbopack_refresh__.register(_c, "MarqueeWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_Marquee_MarqueeWrapper_tsx_de945e._.js.map