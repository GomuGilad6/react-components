"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  background: #7bb6ff;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: 10px 15px;\n  text-align: center;\n  width: max-content;\n  font-size: 16px;\n  transition: transform 0.1s;\n  &:before{\n    content: '';\n    display: block;\n    position: absolute;\n    background: rgba(255,255,255,0.5);\n    width: 60px;\n    height: 100%;\n    left: 0;\n    top: 0;\n    opacity: .5;\n    filter: blur(30px);\n    transform: translateX(-100px)  skewX(-15deg);\n  }\n  &:after{\n    content: '';\n    display: block;\n    position: absolute;\n    background: rgba(255,255,255,0.2);\n    width: 30px;\n    height: 100%;\n    left: 30px;\n    top: 0;\n    opacity: 0;\n    filter: blur(5px);\n    transform: translateX(-100px) skewX(-15deg);\n  }\n  &:hover {\n    transform: scale(1.05);\n    &:before{\n      transform: translateX(300px)  skewX(-15deg);  \n      opacity: 0.6;\n      transition: .7s;\n    }\n    &:after{\n      transform: translateX(300px) skewX(-15deg);  \n      opacity: 1;\n      transition: .7s;\n    }\n  }\n"], ["\n  background: #7bb6ff;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: 10px 15px;\n  text-align: center;\n  width: max-content;\n  font-size: 16px;\n  transition: transform 0.1s;\n  &:before{\n    content: '';\n    display: block;\n    position: absolute;\n    background: rgba(255,255,255,0.5);\n    width: 60px;\n    height: 100%;\n    left: 0;\n    top: 0;\n    opacity: .5;\n    filter: blur(30px);\n    transform: translateX(-100px)  skewX(-15deg);\n  }\n  &:after{\n    content: '';\n    display: block;\n    position: absolute;\n    background: rgba(255,255,255,0.2);\n    width: 30px;\n    height: 100%;\n    left: 30px;\n    top: 0;\n    opacity: 0;\n    filter: blur(5px);\n    transform: translateX(-100px) skewX(-15deg);\n  }\n  &:hover {\n    transform: scale(1.05);\n    &:before{\n      transform: translateX(300px)  skewX(-15deg);  \n      opacity: 0.6;\n      transition: .7s;\n    }\n    &:after{\n      transform: translateX(300px) skewX(-15deg);  \n      opacity: 1;\n      transition: .7s;\n    }\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = (0, _styledComponents2.default)("div")(_templateObject);

var Button = function Button() {
  return _react2.default.createElement(
    StyledButton,
    null,
    "Press Me"
  );
};

exports.Button = Button;