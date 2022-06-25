import * as robot from 'robotjs';

const getMouseDown = (params: number) => {
  let {x, y} = robot.getMousePos();
  robot.moveMouse(x, y+params);
};

const getMouseUp = (params: number) => {
  let {x, y} = robot.getMousePos();
  robot.moveMouse(x, y-params);
};

const getMouseLeft = (params: number) => {
  let {x, y} = robot.getMousePos();
  robot.moveMouse(x-params, y);
};

const getMouseRight = (params: number) => {
  let {x, y} = robot.getMousePos();
  robot.moveMouse(x+params, y);
};

const getMousePosition = () => {
  let {x, y} = robot.getMousePos();
  return {x:x, y:y};
};


export { getMouseDown, getMouseUp, getMouseLeft, getMouseRight, getMousePosition };