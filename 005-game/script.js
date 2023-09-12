const canvas = document.querySelector('#box');
const ctx = canvas.getContext('2d');

const ravenSrc = 'https://www.frankslaboratory.co.uk/downloads/raven.png';
const clickSrc = 'https://www.frankslaboratory.co.uk/downloads/boom.png';

const CW = (canvas.width = 800);
const CH = (canvas.height = 600);

let timeNextEnemy = 0;
let enemyInterval = 1000;
let lastTime = 0;

let enemies = [];

class Enemy {
  constructor() {
    this.img = new Image();
    this.img.src = ravenSrc;
    this.imgw = 271;
    this.imgh = 194;
    this.sizeMod = Math.random() * 0.4 + 0.2;
    this.w = this.imgw * this.sizeMod;
    this.h = this.imgh * this.sizeMod;
    this.x = CW;
    this.y = Math.random() * (CH - this.h);
    this.dirx = Math.random() * 5 + 3;
    this.diry = Math.random() * 5 - 2.5;
    this.delete = false;
    this.imgFrame = 0;
    this.timer = 0;
    this.timerInterval = 120;
  }

  update(deltatime) {
    this.x -= this.dirx;
    this.x < -this.w ? (this.delete = true) : null;
    this.timer += deltatime;
    if (this.timer > this.timerInterval) {
      ++this.imgFrame;
      this.timer = 0;
    }
    this.imgFrame > 5 && (this.imgFrame = 0);
  }

  draw() {
    ctx.drawImage(
      this.img,
      this.imgw * this.imgFrame,
      0,
      this.imgw,
      this.imgh,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
}

function render(timestamp) {
  ctx.clearRect(0, 0, CW, CH);
  let deltatime = timestamp - lastTime;
  lastTime = timestamp;
  timeNextEnemy += deltatime;
  if (timeNextEnemy > enemyInterval) {
    enemies.push(new Enemy());
    timeNextEnemy = 0;
  }
  [...enemies].map((enemy) => enemy.update(deltatime));
  [...enemies].map((enemy) => enemy.draw());
  enemies = enemies.filter((enemy) => !enemy.delete);
  requestAnimationFrame(render);
}

render(0);
