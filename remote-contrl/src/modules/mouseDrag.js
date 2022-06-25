"use strict";
exports.__esModule = true;
exports.getMousePosition = exports.getMouseRight = exports.getMouseLeft = exports.getMouseUp = exports.getMouseDown = void 0;
var robot = require("robotjs");
var getMouseDown = function (params) {
    var _a = robot.getMousePos(), x = _a.x, y = _a.y;
    robot.moveMouse(x, y + params);
};
exports.getMouseDown = getMouseDown;
var getMouseUp = function (params) {
    var _a = robot.getMousePos(), x = _a.x, y = _a.y;
    robot.moveMouse(x, y - params);
};
exports.getMouseUp = getMouseUp;
var getMouseLeft = function (params) {
    var _a = robot.getMousePos(), x = _a.x, y = _a.y;
    robot.moveMouse(x - params, y);
};
exports.getMouseLeft = getMouseLeft;
var getMouseRight = function (params) {
    var _a = robot.getMousePos(), x = _a.x, y = _a.y;
    robot.moveMouse(x + params, y);
};
exports.getMouseRight = getMouseRight;
var getMousePosition = function () {
    var _a = robot.getMousePos(), x = _a.x, y = _a.y;
    return { x: x, y: y };
};
exports.getMousePosition = getMousePosition;
//# sourceMappingURL=mouseDrag.js.map