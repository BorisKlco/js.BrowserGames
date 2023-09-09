const canvas = document.querySelector('#box');
const ctx = canvas.getContext('2d');

const CW = (canvas.width = 800);
const CH = (canvas.height = 480);
const enemies = [];

class EnemyThree {
  constructor(img) {
    this.image = new Image();
    this.image.src = img;
    this.sw = 218;
    this.sh = 177;
    this.ratio = Math.floor(Math.random() * 4 + 2);
    this.width = this.sw / this.ratio;
    this.height = this.sh / this.ratio;
    this.x = Math.random() * (CW - this.width);
    this.y = Math.random() * (CH - this.height);
    this.speed = Math.random() * 200;
    this.currentFrame = 0;
    this.gameSpeed = 0;
    this.animationSpeed = Math.floor(Math.random() * 8 + 4);
    this.angle = Math.random() * 2;
  }

  updateAnimation() {
    this.x =
      this.speed * Math.sin((this.angle * Math.PI) / 180) -
      (this.width - CW) / 2;
    this.y =
      this.speed * Math.cos((this.angle * Math.PI) / 180) -
      (this.height - CH) / 2;
    //this.y += Math.sin(this.angle) * Math.random() * 2;
    this.angle += Math.random() * 2;
    this.x + this.width < 0 ? (this.x = CW) : null;
    if (this.gameSpeed % this.animationSpeed === 0) {
      this.currentFrame > 4 ? (this.currentFrame = 0) : this.currentFrame++;
    }

    this.gameSpeed++;
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.currentFrame * this.sw,
      0,
      this.sw,
      this.sh,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

for (let i = 0; i < 50; i++) {
  enemies.push(new EnemyThree('enemy3.png'));
}

const render = () => {
  ctx.clearRect(0, 0, CW, CH);
  enemies.map((e) => {
    e.updateAnimation();
    e.draw();
  });
  requestAnimationFrame(render);
};

render();

// class EnemyTwo {
//   constructor(img) {
//     this.image = new Image();
//     this.image.src = img;
//     this.sw = 266;
//     this.sh = 155;
//     this.ratio = Math.floor(Math.random() * 4 + 2);
//     this.width = this.sw / this.ratio;
//     this.height = this.sh / this.ratio;
//     this.x = Math.random() * (CW - this.width);
//     this.y = Math.random() * (CH - this.height);
//     this.speed = Math.random() * 2 + 1;
//     this.currentFrame = 0;
//     this.gameSpeed = 0;
//     this.animationSpeed = Math.floor(Math.random() * 8 + 4);
//     this.angle = Math.random() * 2;
//   }

//   updateAnimation() {
//     this.x -= this.speed;
//     this.y += Math.sin(this.angle) * Math.random() * 2;
//     this.angle += Math.random() * 0.2;
//     this.x + this.width < 0 ? (this.x = CW) : null;
//     if (this.gameSpeed % this.animationSpeed === 0) {
//       this.currentFrame > 4 ? (this.currentFrame = 0) : this.currentFrame++;
//     }

//     this.gameSpeed++;
//   }

//   draw() {
//     ctx.drawImage(
//       this.image,
//       this.currentFrame * this.sw,
//       0,
//       this.sw,
//       this.sh,
//       this.x,
//       this.y,
//       this.width,
//       this.height
//     );
//   }
// }

// enemy1
// class EnemyTwo {
//   constructor(img) {
//     this.image = new Image();
//     this.image.src = img;
//     this.sw = 293;
//     this.sh = 155;
//     this.ratio = Math.floor(Math.random() * 3 + 2);
//     this.width = this.sw / this.ratio;
//     this.height = this.sh / this.ratio;
//     this.x = Math.random() * (CW - this.width);
//     this.y = Math.random() * (CH - this.height);
//     this.speed = Math.random() * 4 - 2;
//     this.currentFrame = 0;
//     this.gameSpeed = 0;
//     this.animationSpeed = Math.floor(Math.random() * 6 + 2);
//   }

//   updateAnimation() {
//     this.x += Math.random() * 2 - 1;
//     this.y += Math.random() * 2 - 1;
//     if (this.gameSpeed % this.animationSpeed === 0) {
//       this.currentFrame > 4 ? (this.currentFrame = 0) : this.currentFrame++;
//     }

//     this.gameSpeed++;
//   }

//   draw() {
//     ctx.drawImage(
//       this.image,
//       this.currentFrame * this.sw,
//       0,
//       this.sw,
//       this.sh,
//       this.x,
//       this.y,
//       this.width,
//       this.height
//     );
//   }
// }

// image1 , wiggle movement
// class Enemy {
//   constructor(image, slides) {
//     this.x = 0;
//     this.y = 0;
//     this.image = new Image();
//     this.image.src = image;
//     this.slides = slides;
//     this.frameCounter = 0;
//     this.gameSpeed = Math.floor(Math.random() * slides + 1);
//     this.w = 0;
//     this.h = 0;
//     this.positionX = 0;
//     this.positionY = 0;
//     this.size = Math.random() * 0.3 + 0.3;

//     this.image.onload = () => {
//       (this.w = Math.floor(this.image.width / this.slides)),
//         (this.h = this.image.height),
//         (this.positionX = Math.floor(
//           Math.random() * (CW - this.w * this.size)
//         )),
//         (this.positionY = Math.floor(
//           Math.random() * (CH - this.h * this.size)
//         ));
//     };
//   }

//   get stats() {
//     return `${this.w}; ${this.h}`;
//   }

//   updateAnimation() {
//     if (this.x < this.w * (this.slides - 1)) {
//       this.frameCounter > this.gameSpeed
//         ? (this.frameCounter = 0)
//         : this.frameCounter++;
//       this.frameCounter % this.slides == 0 ? (this.x += this.w) : null;
//       if (0 < this.positionX && this.positionX < CW) {
//         this.positionX += Math.floor(Math.random() * 4 - 1.5);
//         this.positionY += Math.floor(Math.random() * 3 - 1);
//       }
//     } else {
//       this.x = 0;
//     }
//   }

//   draw() {
//     ctx.drawImage(
//       this.image,
//       this.x,
//       this.y,
//       this.w,
//       this.h,
//       this.positionX,
//       this.positionY,
//       this.w * this.size,
//       this.h * this.size
//     );
//   }
// }
