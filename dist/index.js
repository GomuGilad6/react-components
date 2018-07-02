"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = undefined;

var _templateObject = _taggedTemplateLiteral(["\n    background: blue;\n"], ["\n    background: blue;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = stlyed("button")(_templateObject);

var Button = function Button() {
    return _react2.default.createElement(
        StyledButton,
        null,
        "Click Me!"
    );
};

exports.Button = Button;