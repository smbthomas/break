/*
 Breakout game using JavaScript classes
 Copyright (c) Stephen Martin Beynon Thomas, May 2023

 */

const width = 800;
const height = 800;
const col = ["red", "yellow", "royalblue", "magenta", "lawngreen", "cyan"];
const numWalls = 6;
var floor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var ceiling = [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200];

let wall = [];
for(let i = 0; i < numWalls; i++) {
  wall[i] = new Wall(i, col[i]);
}

let ball = new Ball(100, 300, 26, true, true, 3, 4);
let bat = new Bat(350);

function setup() {
  let canvas = createCanvas(width, height);
  canvas.parent('grid-content');
}

function draw() {
  background(0);
  for(let i = 0; i < numWalls; i++) {
    wall[i].display();
  }
  ball.display();
  bat.display();
  ball.move();
}