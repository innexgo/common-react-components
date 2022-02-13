import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Link(props) {
    var _a;
    return _jsxs("a", Object.assign({ className: "text-start", href: props.href, hidden: props.hidden }, { children: [_jsx(props.icon, { className: `me-2 border rounded text-${(_a = props.variant) !== null && _a !== void 0 ? _a : 'dark'}`, style: { width: "1.5rem", height: "1.5rem" } }, void 0), _jsx("b", { children: props.title }, void 0)] }), void 0);
}
export default Link;
