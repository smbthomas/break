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

