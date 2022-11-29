const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext("2d");
console.log(ctx);

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image(); // same as <img> tag in HTML
playerImage.src = "img/carrot/skeleton-animation_00.png";
let x = 0;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillRect(x, 50, 100, 100);
  x++;
  ctx.drawImage(playerImage, 0, 0);
  requestAnimationFrame(animate); // **** It will run over and over to create an animation loop
}

animate();
