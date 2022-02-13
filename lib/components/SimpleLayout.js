import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowRight, House, PersonPlus, Gear, FileText } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
const gradText = {
    background: "linear-gradient(#B7C9D6, #E6D5B8)",
    color: "transparent",
    backgroundClip: "text",
    webkitBackgroundClip: "text",
    fontWeight: "bold",
    marginBottom: "50px"
};
const iconStyle = {
    color: "#E6D5B8",
    minHeight: "2rem",
    minWidth: "2rem",
    marginRight: "10px",
    marginLeft: "-20px"
};
const linkStyle = {
    color: "white",
    fontWeight: 550,
    display: "flex",
    marginTop: "15px",
    alignItems: "center"
};
const SimpleLayout = (props) => _jsx(Container, Object.assign({ fluid: true }, { children: _jsxs(Row, Object.assign({ style: { minHeight: "100vh" } }, { children: [_jsxs(Col, Object.assign({ xl: "2", className: "px-5 py-5", style: { backgroundColor: '#1C2B2D' } }, { children: [_jsx("a", Object.assign({ href: "/" }, { children: _jsx("img", { src: props.branding.darkAdaptedIcon, alt: "Application Icon" }, void 0) }), void 0), _jsx("h4", Object.assign({ style: gradText }, { children: props.branding.name }), void 0), _jsxs("a", Object.assign({ href: "/", style: linkStyle }, { children: [_jsx(House, { style: iconStyle }, void 0), " Home"] }), void 0), _jsx("br", {}, void 0), _jsxs("a", Object.assign({ href: "/dashboard", style: linkStyle }, { children: [_jsx(ArrowRight, { style: iconStyle }, void 0), " Log In"] }), void 0), _jsx("br", {}, void 0), _jsxs("a", Object.assign({ href: "/register", style: linkStyle }, { children: [_jsx(PersonPlus, { style: iconStyle }, void 0), " Register"] }), void 0), _jsx("br", {}, void 0), _jsxs("a", Object.assign({ href: "/instructions", style: linkStyle }, { children: [_jsx(FileText, { style: iconStyle }, void 0), " Instructions"] }), void 0), _jsx("br", {}, void 0), _jsxs("a", Object.assign({ href: "/terms_of_service", style: linkStyle }, { children: [_jsx(Gear, { style: iconStyle }, void 0), " Terms of Service"] }), void 0), _jsx("br", {}, void 0)] }), void 0), _jsx(Col, Object.assign({ className: "px-5 py-5" }, { children: props.children }), void 0)] }), void 0) }), void 0);
export default SimpleLayout;
