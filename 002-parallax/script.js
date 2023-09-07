const canvas = document.querySelector('#box');
const ctx = canvas.getContext('2d');

const C_W = (canvas.width = 800);
const C_H = (canvas.height = 700);

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

function render() {
  ctx.clearRect(0, 0, C_W, C_H);
  requestAnimationFrame(render);
}

render();
