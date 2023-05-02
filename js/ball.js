// Animated ball program using the p5.js library
// Copyright (c) Stephen Martin Beynon Thomas, April 2023

let x = 100;
let y = 300;
let xSpeed = 7;
let ySpeed = 5;
let down = true;
let right = true;
let dia = 26;
let rad = dia / 2;
let width = 800;
let height = 800;

let count = 0;
let coords = [];
for(i = 0; i < 16; i++) {
  for(j = 0; j < 50; j++) {
    coords[count] = i;
    count++;
  }
}

let rows = [[true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
            [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
            [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
            [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
            [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
            [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
            [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]];

console.log(coords);

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(0);
  strokeWeight(2);
  bricks(60, 0, 0, 255);
  bricks(80, 0, 255, 255);
  bricks(100, 0, 255, 0);
  bricks(120, 255, 255, 0);
  bricks(140, 255, 0, 0);
  bricks(160, 255, 165, 0);
  bricks(180, 150, 0, 150);
  fill(200, 200, 200);
  circle(0 + x, 0 + y, dia, dia);
  if (right) 
    x += xSpeed;
  else
    x -= xSpeed;
  if (x > (width - rad)) right = false;
  if (x < (0 + rad)) right = true;
  // console.log(x);
  if (down) 
    y += ySpeed;
  else
    y -= ySpeed;
  if (y > (height - rad)) down = false;
  if (y < (200 + rad)) {
    down = true;
    console.log("x = ", x);
    console.log("b = ", getBrickNum(x));
    rows[0][getBrickNum(x)] = false;
  }
}

function bricks(ypos, rcol, gcol , bcol) {
  let xpos = 0;
  // noStroke();
  fill(rcol, gcol, bcol);
  for (i = 0; i < 16; i++) {
    if (rows[0][i])
      rect(xpos, ypos, 50, 20);
    xpos += 50;
  }
}

function getBrickNum(x) {
  return coords[x];
}