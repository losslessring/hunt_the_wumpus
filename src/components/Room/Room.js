"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var style = {
    height: 300,
    width: 300,
    border: 'solid',
    borderWidth: '2px',
    borderColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};
var Room = function (props) {
    return (react_1.default.createElement("div", { style: style, onClick: function () { return props.goToRoom(props.number); } }, props.number));
};
exports.default = Room;
//# sourceMappingURL=Room.js.map