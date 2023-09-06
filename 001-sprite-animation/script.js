const canvas = document.getElementById('box');
const ctx = canvas.getContext('2d');

const C_WIDTH = (canvas.width = 600);
const C_HEIGHT = (canvas.height = 600);
const S_WIDTH = 575;
const S_HEIGHT = 525;

const animationFramesImg = new Image();
animationFramesImg.src = 'anim.png';

let currentFrame = 0;
const straggerFrame = 6;
let playerState = 'idle';
let dropdown = document.getElementById('dropdown');

dropdown.addEventListener('change', (e) => {
  playerState = e.target.value;
});

//last img in file is same as first ?!
const animateAdjustmentFix = 1;

const animate = [
  {
    type: 'idle',
    frames: 7,
  },
  {
    type: 'jump',
    frames: 7,
  },
  {
    type: 'fall',
    frames: 7,
  },
  {
    type: 'run',
    frames: 9,
  },
  {
    type: 'dizzy',
    frames: 9,
  },
  {
    type: 'sit',
    frames: 5,
  },
  {
    type: 'roll',
    frames: 7,
  },
  {
    type: 'bite',
    frames: 7,
  },
  {
    type: 'ko',
    frames: 12,
  },
  {
    type: 'gethit',
    frames: 4,
  },
];

let animationFrames = [];

animate.forEach((item, index) => {
  let frame = {
    type: item.type,
    frames: item.frames - animateAdjustmentFix,
    frame: [],
  };

  for (let i = 0; i < item.frames - animateAdjustmentFix; i++) {
    let x = i * S_WIDTH;
    let y = index * S_HEIGHT;
    frame.frame.push({ x: x, y: y });
  }
  animationFrames.push(frame);
  document
    .querySelector('#dropdown')
    .insertAdjacentHTML(
      'beforeend',
      `<option value=${item.type}>${item.type}</option>`
    );
});

function render() {
  ctx.clearRect(0, 0, C_WIDTH, C_HEIGHT);
  let [filter] = animationFrames.filter((item) => item.type === playerState);
  let position = Math.floor(currentFrame / straggerFrame) % filter.frames;
  ctx.drawImage(
    animationFramesImg,
    filter.frame[position].x,
    filter.frame[0].y,
    S_WIDTH,
    S_HEIGHT,
    0,
    0,
    S_WIDTH,
    S_HEIGHT
  );
  currentFrame++;
  requestAnimationFrame(render);
}

render();
