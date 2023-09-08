const canvas = document.querySelector('#box');
const ctx = canvas.getContext('2d');

const CW = (canvas.width = 800);
const CH = (canvas.height = 480);

class Enemy {
  constructor(image, slides) {
    this.x = 0;
    this.y = 0;
    this.image = new Image();
    this.image.src = image;
    this.w = 0;
    this.h = 0;
    this.image.onload = () => {
      (this.w = Math.floor(this.image.width / slides)),
        (this.h = this.image.height);
    };
  }

  get stats() {
    return `${this.w}; ${this.h}`;
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.w,
      this.h,
      150,
      150,
      this.w / 2,
      this.h / 2
    );
  }
}

const e = new Enemy('enemy1.png', 6);

const render = () => {
  ctx.clearRect(0, 0, CW, CH);
  e.draw();
  requestAnimationFrame(render);
};

render();
