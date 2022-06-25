"use strict";
exports.__esModule = true;
exports.getLine = void 0;
function getLine(data) {
    var _a = data.split(' '), name = _a[0], args = _a.slice(1);
    return {
        name: name,
        params: args.map(function (i) { return Number(i); })
    };
}
exports.getLine = getLine;
;
//# sourceMappingURL=getLine.js.map