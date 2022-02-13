import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Modal from 'react-bootstrap/Modal';
export default function DisplayModal(props) {
    return _jsxs(Modal, Object.assign({ show: props.show, onHide: props.onClose, keyboard: false, backdrop: "static", size: "xl", centered: true }, { children: [_jsx(Modal.Header, Object.assign({ closeButton: true }, { children: _jsx(Modal.Title, { children: props.title }, void 0) }), void 0), _jsx(Modal.Body, { children: props.children }, void 0)] }), void 0);
}
