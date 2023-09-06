// class Character {
//   constructor(
//     cWidth,
//     cHeight,
//     image,
//     frameWidth,
//     frameHeight,
//     margin,
//     animate
//   ) {
//     this.cWidth = canvas.width = cWidth;
//     this.cHeight = canvas.height = cHeight;
//     this.animationImage = new Image();
//     this.animationImage.src = image;
//     this.image = image;
//     this.frameWidth = frameWidth + margin;
//     this.frameHeight = frameHeight + margin;
//     this.gameSpeed = 25;
//     this.animate = animate;
//     this.animation = [];

//     this.animate.forEach((item, index) => {
//       let animationFrame = {
//         type: item.type,
//         frames: item.frames,
//         frame: [],
//       };

//       for (let i = 0; i < item.frames; i++) {
//         let x = i * this.frameWidth;
//         let y = index * this.frameHeight;
//         animationFrame.frame.push({ x: x, y: y });
//       }
//       this.animation.push(animationFrame);
//     });
//   }

//   getFrames() {
//     return this.animation;
//   }

//   getStats() {
//     console.log(`SourceImage: ${this.animationImage.src}
//     \n ImageResolution: ${this.frameWidth} x ${this.frameHeight}
//     \n CanvasResolution: ${this.cWidth} x ${this.cHeight}
//     \n GameSpeed: ${this.gameSpeed}`);
//   }

//   setSpeed(speed) {
//     this.gameSpeed = speed;
//     return `Game speed changed to ${this.gameSpeed}fps`;
//   }

// render(type) {
//   let [typeAnimation] = this.animation.filter((item) => item.type === type);
//   console.log(typeAnimation);
//   let x = 0;
//   if (typeAnimation) {
//     while (x < typeAnimation.frames - 1) {
//       ctx.clearRect(0, 0, this.cWidth, this.cHeight);
//       ctx.drawImage(
//         this.animationImage,
//         typeAnimation.frame[x].x,
//         typeAnimation.frame[0].y,
//         this.frameWidth,
//         this.frameHeight,
//         0,
//         0,
//         this.frameWidth,
//         this.frameHeight
//       );
//       x++;
//     }
//   }
// }
//}

// const g = new Character(600, 600, 'anim.png', 573, 523, 2, animate);

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
