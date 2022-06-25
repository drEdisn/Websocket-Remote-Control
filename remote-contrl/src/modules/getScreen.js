"use strict";
exports.__esModule = true;
exports.getScreen = void 0;
var Jimp = require("jimp");
var robot = require("robotjs");
var getScreen = function () {
    var _a = robot.getMousePos(), x = _a.x, y = _a.y;
    var screen = robot.screen.capture(x, y, 200, 200);
    var img = new Jimp(200, 200);
    var res;
    for (var i = 0; i < 200; i++) {
        for (var j = 0; j < 200; j++) {
            img.setPixelColor(parseInt("".concat(screen.colorAt(i, j), "ff"), 16), i, j);
        }
    }
    img.getBase64(Jimp.MIME_PNG, function (err, data) { res = data.replace('data:image/png;base64,', ''); });
    return res;
};
exports.getScreen = getScreen;
//# sourceMappingURL=getScreen.js.map