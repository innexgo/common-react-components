import { jsx as _jsx } from "react/jsx-runtime";
function Loader() {
    return (_jsx("div", Object.assign({ className: "d-flex justify-content-center" }, { children: _jsx("div", Object.assign({ className: "spinner-border", role: "status" }, { children: _jsx("span", { className: "sr-only" }) })) })));
}
export default Loader;
