class Brick {
  
  constructor(x, y, r, g, b) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 20;
    this.visible = true;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.width, this.height);
  }
}

