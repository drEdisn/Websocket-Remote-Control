"use strict";
exports.__esModule = true;
exports.getSquare = exports.getRectangle = exports.getCircle = void 0;
var robot = require("robotjs");
var getSquare = function (params) {
    var _a = robot.getMousePos(), x = _a.x, y = _a.y;
    robot.mouseToggle("down");
    for (var i = 0; i <= params; i++) {
        x = x + 1;
        robot.moveMouse(x, y);
    }
    for (var i = 0; i <= params; i++) {
        y = y - 1;
        robot.moveMouse(x, y);
    }
    for (var i = 0; i <= params; i++) {
        x = x - 1;
        robot.moveMouse(x, y);
    }
    for (var i = 0; i <= params; i++) {
        y = y + 1;
        robot.moveMouse(x, y);
    }
    robot.mouseToggle("up");
};
exports.getSquare = getSquare;
var getRectangle = function (num1, num2) {
    var _a = robot.getMousePos(), x = _a.x, y = _a.y;
    robot.mouseToggle("down");
    for (var i = 0; i <= num1; i++) {
        x = x + 1;
        robot.moveMouse(x, y);
    }
    for (var i = 0; i <= num2; i++) {
        y = y - 1;
        robot.moveMouse(x, y);
    }
    for (var i = 0; i <= num1; i++) {
        x = x - 1;
        robot.moveMouse(x, y);
    }
    for (var i = 0; i <= num2; i++) {
        y = y + 1;
        robot.moveMouse(x, y);
    }
    robot.mouseToggle("up");
};
exports.getRectangle = getRectangle;
var getCircle = function (params) {
    var _a = robot.getMousePos(), x = _a.x, y = _a.y;
    robot.mouseToggle("down");
    for (var i = 0; i <= params; i++) {
        var x0 = x + params * (1 - Math.cos((i * Math.PI * 2.0) / params));
        var y0 = y - params * Math.sin((i * Math.PI * 2.0) / params);
        robot.moveMouse(x0, y0);
    }
    robot.mouseToggle("up");
};
exports.getCircle = getCircle;
//# sourceMappingURL=getFigure.js.map