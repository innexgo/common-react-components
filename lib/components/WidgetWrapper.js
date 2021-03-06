import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Popover, PopoverBody, PopoverHeader, OverlayTrigger, Card } from 'react-bootstrap';
import { InfoCircle } from 'react-bootstrap-icons';
function WidgetWrapper(props) {
    return _jsx(Card, Object.assign({}, props, { children: _jsxs(Card.Body, { children: [_jsxs("div", Object.assign({ className: "d-flex justify-content-between" }, { children: [_jsx(Card.Title, { children: props.title }), _jsx(OverlayTrigger, Object.assign({ trigger: "click", placement: "auto", overlay: _jsxs(Popover, Object.assign({ id: "information-tooltip" }, { children: [_jsx(PopoverHeader, Object.assign({ as: "h3" }, { children: "Help" })), _jsx(PopoverBody, { children: props.children[0] })] })) }, { children: _jsx("button", Object.assign({ type: "button", className: "btn btn-sm" }, { children: _jsx(InfoCircle, {}) })) }))] })), props.children[1]] }) }));
}
export default WidgetWrapper;
