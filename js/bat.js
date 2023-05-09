class Bat {
  
  constructor(x) {
    this.x = x;
    this.width = 100;
    this.height = 10;
  }

  display() {
    stroke(0);
    strokeWeight(0);
    fill("white");
    rect(this.x, 775, this.width, this.height);
  }
}

