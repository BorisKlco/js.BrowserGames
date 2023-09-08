const canvas = document.querySelector('#box');
const ctx = canvas.getContext('2d');

const C_W = (canvas.width = 800);
const C_H = (canvas.height = 480);
const gameSpeed = 5;
let currentFrame = 0;

const bg1_color = new Image();
bg1_color.src = 'img/layer-1.png';
const bg2_blur = new Image();
bg2_blur.src = 'img/layer-2.png';
const bg3_sky = new Image();
bg3_sky.src = 'img/layer-3.png';
const bg4_city = new Image();
bg4_city.src = 'img/layer-4.png';
const bg5_ground = new Image();
bg5_ground.src = 'img/layer-5.png';

class Layer {
  constructor(image, speedRatio) {
    this.x = 0;
    this.y = 0;
    this.width = 1600;
    this.height = 480;
    this.image = image;
    this.speed = gameSpeed * speedRatio;
  }

  getStats() {
    return `Image: ${this.image.src}; Dimensions: x2-${this.x2}, x-${this.width}, y-${this.height}; Speed: ${this.speed}`;
  }

  update() {
    this.x = (currentFrame * this.speed) % this.width;
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
}

const l1 = new Layer(bg1_color, 0.1);
const l2 = new Layer(bg2_blur, 0.25);
const l3 = new Layer(bg3_sky, 0.33);
const l4 = new Layer(bg4_city, 0.5);
const l5 = new Layer(bg5_ground, 1);

const gameObject = [l1, l2, l3, l4, l5];

function render() {
  ctx.clearRect(0, 0, C_W, C_H);
  gameObject.forEach((object) => {
    object.update();
    object.draw();
  });
  currentFrame--;
  requestAnimationFrame(render);
}

render();
