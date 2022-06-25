import {httpServer} from './src/http_server/index.js';
import { WebSocketServer } from 'ws';
import { getLine } from './src/modules/getLine.js';
import { action, IAction } from './src/modules/actionObj.js';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({port: 8080});

wss.on('connection', ws => {
  ws.on('message', data => {
    const name = getLine(data.toString()).name;
    const params =  getLine(data.toString()).params;
    action[name as keyof IAction](ws, params);
  })
})