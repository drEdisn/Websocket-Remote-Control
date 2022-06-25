import * as Jimp from 'jimp';
import * as robot from 'robotjs';

const getScreen = () => {
  const {x, y} = robot.getMousePos();
  const screen = robot.screen.capture(x, y, 200, 200);
  const img = new Jimp(200, 200);
  let res: string;

  for (let i = 0; i < 200; i++) {
    for (let j = 0; j < 200; j++) {
      img.setPixelColor(parseInt(`${screen.colorAt(i, j)}ff`, 16), i, j);
    }
  }

  img.getBase64(Jimp.MIME_PNG, (err, data) => {res = data.replace('data:image/png;base64,', '')});

  return res; 
};

export { getScreen };