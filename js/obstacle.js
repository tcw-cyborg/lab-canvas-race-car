function random(minWidth, maxWidth) {


  Math.floor(Math.random * (maxWidth - minWidth + 1) + minWidth)

  var minGap = 50;
  var maxGap = 200;
  // tirer au hasard entre 50 et 200
  var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

}

class Obstacle {
  constructor(width, height, x, y) {

    this.w = width;
    this.h = height;
    this.x = x;
    this.y = y;

  }

  draw() {
    var W = canvas.width; // 480
    var H = canvas.height; // 270

    const myObstacles = [];

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, this.w, this.height);
    ctx.closePath();

    myObstacles.push(new Obstacle(width, 10, W, 0);

    }

    hits(car) {
      // TODO
    }
  }