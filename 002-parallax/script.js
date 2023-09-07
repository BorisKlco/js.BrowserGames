const canvas = document.querySelector('#box');
const ctx = canvas.getContext('2d');

const C_W = (canvas.width = 800);
const C_H = (canvas.height = 700);
const gameSpeed = 10;

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

let test = {};
bg5_ground.onload = () => {
  test.x = bg5_ground.width;
  test.y = bg5_ground.height;
};
console.log(test);

class Layer {
  constructor(image, speedRatio) {
    this.x = 0;
    this.y = 0;
    this.x2 = 1600;
    this.width = 1600;
    this.height = 480;
    this.image = image;
    this.speed = gameSpeed * speedRatio;

    image.onload = () => {
      this.x2 = image.width;
      this.width = image.width;
      this.height = image.height;
    };
  }

  getStats() {
    return `Image: ${this.image.src}; Dimensions: x2-${this.x2}, x-${this.width}, y-${this.height}; Speed: ${this.speed}`;
  }
}

const l = new Layer(bg1_color, 5);

// function render() {
//   ctx.clearRect(0, 0, C_W, C_H);
//   requestAnimationFrame(render);
// }

// render();
