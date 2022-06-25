"use strict";
exports.__esModule = true;
exports.action = void 0;
var mouseDrag_1 = require("./mouseDrag");
var getFigure_1 = require("./getFigure");
var getScreen_1 = require("./getScreen");
;
var action = {
    mouse_down: function (ws, num) {
        ws.send("mouse_down");
        return (0, mouseDrag_1.getMouseDown)(num[0]);
    },
    mouse_left: function (ws, num) {
        ws.send("mouse_left");
        return (0, mouseDrag_1.getMouseLeft)(num[0]);
    },
    mouse_up: function (ws, num) {
        ws.send("mouse_up");
        return (0, mouseDrag_1.getMouseUp)(num[0]);
    },
    mouse_right: function (ws, num) {
        ws.send("mouse_right");
        return (0, mouseDrag_1.getMouseRight)(num[0]);
    },
    mouse_position: function (ws) {
        var x = (0, mouseDrag_1.getMousePosition)().x;
        var y = (0, mouseDrag_1.getMousePosition)().y;
        ws.send("mouse_position ".concat(x, ",").concat(y));
    },
    draw_circle: function (ws, num) {
        (0, getFigure_1.getCircle)(num[0]);
        ws.send("draw_circle");
    },
    draw_rectangle: function (ws, num) {
        (0, getFigure_1.getRectangle)(num[0], num[1]);
        ws.send("draw_rectangle");
    },
    draw_square: function (ws, num) {
        (0, getFigure_1.getSquare)(num[0]);
        ws.send("draw_square");
    },
    prnt_scrn: function (ws) {
        ws.send("prnt_scrn ".concat((0, getScreen_1.getScreen)()));
    }
};
exports.action = action;
//# sourceMappingURL=actionObj.js.map