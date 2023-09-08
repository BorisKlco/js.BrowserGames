const canvas = document.querySelector('#box');
const ctx = canvas.getContext('2d');

const CW = (canvas.width = 800);
const CH = (canvas.height = 480);

class Enemy {
  constructor(image) {
    this.image = new Image();
    this.image.src = image;
    this.w = 0;
    this.h = 0;
    this.image.onload = () => {
      (this.w = this.image.width), (this.h = this.image.height);
    };
  }

  get stats() {
    return `${this.w}; ${this.h}`;
  }
}

const e = new Enemy('');

const render = () => {
  ctx.clearRect(0, 0, CW, CH);
  ctx.fillRect(0, 0, 50, 50);
  requestAnimationFrame(render);
};

render();
