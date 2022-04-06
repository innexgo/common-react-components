import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Section = props => {
    return _jsxs("section", Object.assign({ style: {
            overflow: "hidden",
            position: "relative",
        } }, { children: [_jsx("span", { id: props.id, style: {
                    position: "absolute",
                    top: "-100px",
                    visibility: "hidden",
                } }), _jsxs("div", Object.assign({ className: "clearfix" }, { children: [_jsx("h2", Object.assign({ style: { display: "inline" }, className: "float-start" }, { children: props.name })), _jsx("a", Object.assign({ href: `#${props.id}`, className: "float-end text-muted" }, { children: _jsx("h3", { children: "#" }) }))] })), props.children] }));
};
export default Section;
