"use strict";
exports.__esModule = true;
var index_js_1 = require("./src/http_server/index.js");
var ws_1 = require("ws");
var getLine_js_1 = require("./src/modules/getLine.js");
var actionObj_js_1 = require("./src/modules/actionObj.js");
var HTTP_PORT = 3000;
console.log("Start static http server on the ".concat(HTTP_PORT, " port!"));
index_js_1.httpServer.listen(HTTP_PORT);
var wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on('connection', function (ws) {
    ws.on('message', function (data) {
        var name = (0, getLine_js_1.getLine)(data.toString()).name;
        var params = (0, getLine_js_1.getLine)(data.toString()).params;
        actionObj_js_1.action[name](ws, params);
    });
});
//# sourceMappingURL=index.js.map