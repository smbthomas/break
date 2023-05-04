const width = 800;
const height = 800;
const col = ["red", "yellow", "royalblue", "magenta", "lawngreen", "cyan"];
const numWalls = 6;

let wall = [];
for(let i = 0; i < numWalls; i++) {
  wall[i] = new Wall(i, col[i]);
}

let ball = new Ball(100, 100, 26, true, true, 7, 5);

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(0);

  for(let i = 0; i < numWalls; i++) {
    wall[i].display();
  }
  ball.display();
  ball.move();
}