// Animated ball program using the p5.js library
// Copyright (c) Stephen Martin Beynon Thomas, April 2023

let x = 100;
let y = 200;
let xSpeed = 9;
let ySpeed = 6;
let down = true;
let right = true;
let dia = 26;
let rad = dia / 2;
let width = 800;
let height = 800;

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(0);
  fill(0, 255, 0);
  // rect(100, 100, 50, 20);
  bricks(60, 0, 0, 255);
  bricks(80, 0, 255, 255);
  bricks(100, 0, 255, 0);
  bricks(120, 255, 255, 0);
  bricks(140, 255, 0, 0);
  fill(200, 200, 200);
  circle(0 + x, 0 + y, dia, dia);
  if (right) 
    x += xSpeed;
  else
    x -= xSpeed;
  if (x > (width - rad)) right = false;
  if (x < (0 + rad)) right = true;
  if (down) 
    y += ySpeed;
  else
    y -= ySpeed;
  if (y > (height - rad)) down = false;
  if (y < (0 + rad)) down = true;
}

function bricks(ypos, rcol, gcol , bcol) {
  let xpos = 0;
  noStroke();
  fill(rcol, gcol, bcol);
  for (i = 0; i < 16; i++) {
    rect(xpos, ypos, 50, 20);
    xpos += 50;
  }
}
