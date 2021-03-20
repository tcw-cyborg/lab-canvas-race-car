let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
  //


  //
  // Iteration 1: road drawing
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 1000, 1600);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "gray";
  ctx.fillRect(100, 0, 800, 1600);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(120, 0, 30, 1600);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(850, 0, 30, 1600);
  ctx.closePath();

  let y = 0;
  for (let i = 0; i < 15; i++) {
    y += 120;
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(495, y, 10, 60);
    ctx.closePath();
  }

  //
  // Iteration 2: car drawing
  //
  car.draw()

  //
  // Iteration #4: obstacles
  //

  // TODO

  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

document.onkeydown = function (e) {
  if (!car) return;

  switch (e.key) {

    case 'ArrowLeft':

      car.moveLeft();
      break;

    case 'ArrowRight':
      car.moveRight();
      break;
  }


}

let raf;
let frames = 0;

function animLoop() {
  frames++;

  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }

  car = new Car()

  animLoop();
}

document.getElementById("start-button").onclick = function () {
  startGame();
};

// auto-start
startGame();