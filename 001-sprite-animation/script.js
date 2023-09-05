const canvas = document.getElementById('box');
const ctx = canvas.getContext('2d');

const C_WIDTH = (canvas.width = 600);
const C_HEIGHT = (canvas.height = 600);
const S_WIDTH = 6876 / 12 + 2;
const S_HEIGHT = 5230 / 10 + 2;

const animationFrames = new Image();
animationFrames.src = 'anim.png';
let x = 0;
let y = 0;
let gameSpeed = 0;
const gameSlowingRatio = 3;

function animate() {
  ctx.clearRect(0, 0, C_WIDTH, C_HEIGHT);
  ctx.drawImage(
    animationFrames,
    x * S_WIDTH,
    y * S_HEIGHT,
    S_WIDTH,
    S_HEIGHT,
    0,
    0,
    S_WIDTH,
    S_HEIGHT
  );
  if (gameSpeed % gameSlowingRatio == 0) {
    x++;
    if (x > 6) {
      x = 0;
    }
  }
  gameSpeed++;
  requestAnimationFrame(animate);
}

animate();
