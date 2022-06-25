import { 
  getMouseDown,
  getMouseUp,
  getMouseRight,
  getMouseLeft,
  getMousePosition
} from './mouseDrag';
import {
  getCircle,
  getRectangle,
  getSquare
} from './getFigure';
import { getScreen } from './getScreen';

interface IAction {
  mouse_up: Function,
  mouse_down: Function,
  mouse_left: Function,
  mouse_right: Function,
  mouse_position: Function,
  draw_circle: Function,
  draw_rectangle: Function,
  draw_square: Function,
  prnt_scrn: Function
};

const action: IAction = {
  mouse_down(ws: WebSocket, num: number[]) {
    ws.send(`mouse_down`);
    return getMouseDown(num[0]);
  },
  mouse_left(ws: WebSocket, num: number[]) {
    ws.send(`mouse_left`);
    return getMouseLeft(num[0]);
  },
  mouse_up(ws: WebSocket, num: number[]) {
    ws.send(`mouse_up`);
    return getMouseUp(num[0]);
  },
  mouse_right(ws: WebSocket, num: number[]) {
    ws.send(`mouse_right`);
    return getMouseRight(num[0]);
  },
  mouse_position(ws: WebSocket) {
    const x = getMousePosition().x;
    const y = getMousePosition().y;
    ws.send(`mouse_position ${x},${y}`)
  },
  draw_circle(ws: WebSocket, num: number[]) {
    getCircle(num[0]);
    ws.send(`draw_circle`);
  },
  draw_rectangle(ws: WebSocket, num: number[]) {
    getRectangle(num[0], num[1]);
    ws.send(`draw_rectangle`);
  },
  draw_square(ws: WebSocket, num: number[]) {
    getSquare(num[0]);
    ws.send(`draw_square`);
  },
  prnt_scrn(ws: WebSocket) {
    ws.send(`prnt_scrn ${getScreen()}`);
  },
};

export { action, IAction };