/*
 Breakout game using JavaScript classes
 Copyright (c) Stephen Martin Beynon Thomas, May 2023

 */

class Brick {
  
  constructor(x, y, c) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 20;
    this.exists = true;
    this.c = c;
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(this.c);
    rect(this.x, this.y, this.width, this.height);
  }
}

