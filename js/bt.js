const width = 800;
const height = 800;

let brick = [];

for(let i = 0; i < 16; i++) {
  brick[i] = new Brick(i * 50, 180, 255, 0, 0);
}
let ball = new Ball(100, 100, 26, true, true, 5, 3);

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(0);
  for(let i = 0; i < 16; i++) {
    brick[i].display();
  }
  ball.display();
  ball.move();
  // console.log(ball.getPos());
}