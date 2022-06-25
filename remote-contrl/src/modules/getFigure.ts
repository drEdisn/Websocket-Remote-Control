import * as robot from 'robotjs';

const getSquare = (params: number) => {
  let {x, y} = robot.getMousePos();
  robot.mouseToggle("down");
  for (let i = 0; i <= params; i++) {
    x = x + 1;
    robot.moveMouse(x, y);
  }
  for (let i = 0; i <= params; i++) {
    y = y - 1;
    robot.moveMouse(x, y);
  }
  for (let i = 0; i <= params; i++) {
    x = x - 1;
    robot.moveMouse(x, y);
  }
  for (let i = 0; i <= params; i++) {
    y = y + 1;
    robot.moveMouse(x, y);
  }
  robot.mouseToggle("up");
};

const getRectangle = (num1: number, num2: number) => {
  let {x, y} = robot.getMousePos();

  robot.mouseToggle("down");
  for (let i = 0; i <= num1; i++) {
    x = x + 1;
    robot.moveMouse(x, y);
  }
  for (let i = 0; i <= num2; i++) {
    y = y - 1;
    robot.moveMouse(x, y);
  }
  for (let i = 0; i <= num1; i++) {
    x = x - 1;
    robot.moveMouse(x, y);
  }
  for (let i = 0; i <= num2; i++) {
    y = y + 1;
    robot.moveMouse(x, y);
  }
  robot.mouseToggle("up");
};

const getCircle = (params: number) => {
  let {x, y} = robot.getMousePos();
  robot.mouseToggle("down");
  for (let i = 0; i <= params; i++) {
    let x0 = x + params * (1 - Math.cos((i * Math.PI * 2.0) / params));
    let y0 = y - params * Math.sin((i * Math.PI * 2.0) / params);
    robot.moveMouse(x0, y0);
  }
  robot.mouseToggle("up");
};

export { getCircle, getRectangle, getSquare };