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
    this.slides = slides;
    this.frameCounter = 0;
    this.gameSpeed = Math.floor(Math.random() * slides);
    this.w = 0;
    this.h = 0;
    this.positionX = 0;
    this.positionY = 0;
    this.size = Math.random() * 0.5 + 0.5;

    this.image.onload = () => {
      (this.w = Math.floor(this.image.width / this.slides)),
        (this.h = this.image.height),
        (this.positionX = Math.floor(
          Math.random() * (CW - this.w * this.size)
        )),
        (this.positionY = Math.floor(
          Math.random() * (CH - this.h * this.size)
        ));
    };
  }

  get stats() {
    return `${this.w}; ${this.h}`;
  }

  updateAnimation() {
    console.log(this.positionX, this.positionY);
    if (this.x < this.w * (this.slides - 1)) {
      this.frameCounter > this.gameSpeed
        ? (this.frameCounter = 0)
        : this.frameCounter++;
      this.frameCounter % this.slides == 0 ? (this.x += this.w) : null;
    } else {
      this.x = 0;
    }
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.w,
      this.h,
      this.positionX,
      this.positionY,
      this.w * this.size,
      this.h * this.size
    );
  }
}

const e = new Enemy('enemy1.png', 6);

const render = () => {
  ctx.clearRect(0, 0, CW, CH);
  e.updateAnimation();
  e.draw();
  requestAnimationFrame(render);
};

render();
