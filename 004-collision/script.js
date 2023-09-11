const canvas = document.querySelector('#box');
const ctx = canvas.getContext('2d');

const CW = (canvas.width = 500);
const CH = (canvas.height = 700);
const src = 'https://www.frankslaboratory.co.uk/downloads/boom.png';
const collisions = [];

class Explosions {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sw = 200;
    this.sh = 179;
    this.w = sw * 0.5;
    this.h = sw * 0.5;
    this.img = new Image();
    this.img.src = src;
    this.frame = 0;
  }

  update() {
    this.frame > 5 ? (this.frame = 0) : ++this.frame;
  }

  draw() {
    ctx.drawImage(
      this.img,
      this.sw * this.frame,
      0,
      this.sw,
      this.sh,
      x,
      y,
      this.w,
      this.h
    );
  }
}

// window.addEventListener('click', (e) => {
//   console.log(e);
//   ctx.fillRect(e.layerX - 25, e.layerY - 25, 50, 50);
// });
