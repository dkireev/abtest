"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Cookies = require("js-cookie");
const useAbTest = (testName) => {
    const [variant, setVariant] = react_1.useState(Cookies.getJSON(testName) || null);
    react_1.useEffect(() => {
        window.addEventListener(testName, (e) => {
            setVariant(e.detail);
            Cookies.set(testName, e.detail);
        });
    }, [testName]);
    return { variant };
};
exports.default = useAbTest;
