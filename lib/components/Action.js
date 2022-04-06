import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from 'react-bootstrap';
function Action(props) {
    var _a;
    return _jsxs(Button, Object.assign({ variant: "link", className: "text-start", onClick: props.onClick, hidden: props.hidden, disabled: props.disabled }, { children: [_jsx(props.icon, { className: `me-2 border rounded text-${(_a = props.variant) !== null && _a !== void 0 ? _a : 'dark'}`, style: { width: "1.5rem", height: "1.5rem" } }), _jsx("b", { children: props.title })] }));
}
export default Action;
