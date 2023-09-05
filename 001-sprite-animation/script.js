const canvas = document.getElementById('box');
const ctx = canvas.getContext('2d');

const C_WIDTH = (canvas.width = 600);
const C_HEIGHT = (canvas.height = 600);

const animationFrames = new Image();
animationFrames.src = 'anim.png';

function exampleBox() {
  ctx.clearRect(0, 0, C_WIDTH, C_HEIGHT);
  ctx.fillRect(50, 50, 100, 100);
  requestAnimationFrame(exampleBox);
}

exampleBox();
