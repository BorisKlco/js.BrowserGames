const canvas = document.querySelector('#box');
const ctx = canvas.getContext('2d');

const ravenSrc = 'https://www.frankslaboratory.co.uk/downloads/raven.png';
const clickSrc = 'https://www.frankslaboratory.co.uk/downloads/boom.png';
const soundSrc =
  'https://opengameart.org/sites/default/files/audio_preview/Jump%201.mp3.ogg';

const CW = (canvas.width = 800);
const CH = (canvas.height = 600);

let timeNextEnemy = 0;
let enemyInterval = 1000;
let lastTime = 0;

let enemies = [];
let explosion = [];

class Explosion {
  constructor(x, y) {
    this.sw = 200;
    this.sh = 179;
    this.w = this.sw * 0.5;
    this.h = this.sw * 0.5;
    this.x = x - this.w * 0.5;
    this.y = y - this.h * 0.5;
    this.img = new Image();
    this.img.src = clickSrc;
    this.sound = new Audio();
    this.sound.src = soundSrc;
    this.imgFrame = 0;
    this.timer = 0;
    this.timerInterval = 120;
  }

  update(deltatime) {
    this.timer += deltatime;
    if (this.timer > this.timerInterval) {
      this.imgFrame == 0 ? this.sound.play() : null;
      ++this.imgFrame;
      this.timer = 0;
    }
    this.imgFrame > 5 && explosion.shift();
  }

  draw() {
    ctx.drawImage(
      this.img,
      this.sw * this.imgFrame,
      0,
      this.sw,
      this.sh,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
}

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
    this.dirx = Math.random() * 3 + 1;
    this.diry = Math.random() * 10 - 5;
    this.delete = false;
    this.imgFrame = 0;
    this.timer = 0;
    this.timerInterval = 120;
  }

  update(deltatime) {
    this.x -= this.dirx;
    this.y -=
      this.imgFrame * Math.sin((this.diry * this.imgFrame * Math.PI) / 180);
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

canvas.addEventListener('click', (e) => {
  enemies.filter((enemy) => {
    if (e.layerX > enemy.x && e.layerX < enemy.x + enemy.w) {
      if (e.layerY > enemy.y && e.layerY < enemy.y + enemy.h) {
        explosion.push(new Explosion(e.layerX, e.layerY));
        enemy.delete = true;
      }
    }
  });
});

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
  [...explosion].map((item) => item.update(deltatime));
  [...explosion].map((item) => item.draw());
  enemies = enemies.filter((enemy) => !enemy.delete);
  requestAnimationFrame(render);
}

render(0);
