const canvas = document.querySelector('#box');
const ctx = canvas.getContext('2d');

const CW = (canvas.width = 500);
const CH = (canvas.height = 700);
const src = 'https://www.frankslaboratory.co.uk/downloads/boom.png';
const soundSrc =
  'https://opengameart.org/sites/default/files/audio_preview/Jump%201.mp3.ogg';
const models = [];

class Explosion {
  constructor(x, y) {
    this.sw = 200;
    this.sh = 179;
    this.w = this.sw * 0.5;
    this.h = this.sw * 0.5;
    this.x = x - this.w * 0.5;
    this.y = y - this.h * 0.5;
    this.img = new Image();
    this.img.src = src;
    this.sound = new Audio();
    this.sound.src = soundSrc;
    this.frame = 0;
    this.timer = 0;
  }

  update() {
    this.frame == 0 ? this.sound.play() : null;
    this.frame > 5 ? models.shift() : null;
    ++this.timer;
    this.timer % 8 === 0 ? ++this.frame : null;
  }

  draw() {
    ctx.drawImage(
      this.img,
      this.sw * this.frame,
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

canvas.addEventListener('click', (e) => {
  models.push(new Explosion(e.layerX, e.layerY));
});

function render() {
  ctx.clearRect(0, 0, CW, CH);
  models.map((explosion) => {
    explosion.update();
    explosion.draw();
  });
  requestAnimationFrame(render);
}

render();
