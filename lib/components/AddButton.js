import { jsx as _jsx } from "react/jsx-runtime";
import { Plus as Add } from 'react-bootstrap-icons';
export default function AddButton(props) {
    return _jsx("button", Object.assign({ className: "h-100 w-100 m-0 p-1", style: { borderStyle: 'dashed', borderWidth: "medium" }, onClick: props.onClick }, { children: _jsx(Add, { className: "mx-auto my-auto text-muted", style: { height: "2rem", width: "2rem" } }, void 0) }), void 0);
}
