// Animated ball program using the p5.js library
// Copyright (c) Stephen Martin Beynon Thomas, April 2023

let x = 100;
let y = 200;
let xSpeed = 9;
let ySpeed = 6;
let down = true;
let right = true;
let dia = 20;
let rad = dia / 2;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  circle(0 + x, 0 + y, dia, dia);
  if (right) 
    x += xSpeed;
  else
    x -= xSpeed;
  if (x > (800 - rad)) right = false;
  if (x < (0 + rad)) right = true;
  
    if (down) 
    y += ySpeed;
  else
    y -= ySpeed;
  if (y > (800 - rad)) down = false;
  if (y < (0 + rad)) down = true;
}
