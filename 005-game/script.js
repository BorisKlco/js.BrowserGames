const canvas = document.querySelector('#box');
const ctx = canvas.getContext('2d');

const ravenSrc = 'https://www.frankslaboratory.co.uk/downloads/raven.png';
const clickSrc = 'https://www.frankslaboratory.co.uk/downloads/boom.png';

const CW = (canvas.width = 800);
const CH = (canvas.height = 600);

let timeNextEnemy = 0;
let enemyInterval = 500;
let lastTime = 0;

const enemies = [];

class Enemy {
  constructor() {
    this.w = 100;
    this.h = 50;
    this.x = CW;
    this.y = Math.random() * (CH - this.h);
    this.dirx = Math.random() * 5 + 3;
    this.diry = Math.random() * 5 - 2.5;
  }

  update() {
    this.x -= this.dirx;
  }

  draw() {
    ctx.fillRect(this.x, this.y, this.w, this.h);
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
  [...enemies].map(enemy => enemy.update());
  [...enemies].map(enemy => enemy.draw())
  requestAnimationFrame(render);
}

render(0);
