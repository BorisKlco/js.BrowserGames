const canvas = document.getElementById('box');
const ctx = canvas.getContext('2d');

// const S_WIDTH = 573;
// const S_HEIGHT = 523;

const animationFrames = new Image();
animationFrames.src = 'anim.png';

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

class Game {
  constructor(
    cWidth,
    cHeight,
    image,
    frameWidth,
    frameHeight,
    margin,
    animate
  ) {
    this.cWidth = canvas.width = cWidth;
    this.cHeight = canvas.height = cHeight;
    this.animationImage = new Image();
    this.animationImage.src = image;
    this.image = image;
    this.frameWidth = frameWidth + margin;
    this.frameHeight = frameHeight + margin;
    this.gameSpeed = 25;
    this.animate = animate;
    this.animation = [];

    this.animate.forEach((item, index) => {
      let animationFrame = {
        type: item.type,
        frames: item.frames,
        frame: [],
      };

      for (let i = 0; i < item.frames; i++) {
        let x = i * this.frameWidth;
        let y = index * this.frameHeight;
        animationFrame.frame.push({ x: x, y: y });
      }
      this.animation.push(animationFrame);
    });
  }

  getFrames() {
    return this.animation;
  }

  getStats() {
    console.log(`SourceImage: ${this.animationImage.src}
    \n ImageResolution: ${this.frameWidth} x ${this.frameHeight}
    \n CanvasResolution: ${this.cWidth} x ${this.cHeight}
    \n GameSpeed: ${this.gameSpeed}`);
  }

  setSpeed(speed) {
    this.gameSpeed = speed;
    return `Game speed changed to ${this.gameSpeed}fps`;
  }

  render(type) {
    let typeAnimation = this.animation.filter((item) => item.type === type);
    if (typeAnimation.length) {
      typeAnimation[0].frame.forEach((item) => {
        ctx.clearRect(0, 0, this.cWidth, this.cHeight);
        ctx.drawImage(
          this.animationImage,
          item.x,
          item.y,
          this.frameWidth,
          this.frameHeight,
          0,
          0,
          this.frameWidth,
          this.frameHeight
        );
      });
    }
  }
}

const g = new Game(600, 600, 'anim.png', 573, 523, 2, animate);

// function animate() {
//   ctx.clearRect(0, 0, C_WIDTH, C_HEIGHT);
//   ctx.drawImage(
//     animationFrames,
//     x * S_WIDTH,
//     y * S_HEIGHT,
//     S_WIDTH,
//     S_HEIGHT,
//     0,
//     0,
//     S_WIDTH,
//     S_HEIGHT
//   );
//   if (gameSpeed % gameSlowingRatio == 0) {
//     x++;
//     if (x > 6) {
//       x = 0;
//     }
//   }
//   gameSpeed++;
//   requestAnimationFrame(animate);
// }

// animate();

// function animate() {
//   ctx.clearRect(0, 0, C_WIDTH, C_HEIGHT);
//   ctx.drawImage(
//     animationFrames,
//     x * S_WIDTH,
//     y * S_HEIGHT,
//     S_WIDTH,
//     S_HEIGHT,
//     0,
//     0,
//     S_WIDTH,
//     S_HEIGHT
//   );
//   x++;
//   if (x > 6) {
//     x = 0;
//   }
// }

// setInterval(() => requestAnimationFrame(animate), 40);
