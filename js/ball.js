class Ball {
  
  constructor(x, y, d, right, down, xs, ys) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.right = right;
    this.down = down;
    this.xs = xs;
    this.ys = ys;
  }
  
  move() {
    let rad = this.d / 2;
    if (this.right) 
      this.x += this.xs;
    else
      this.x -= this.xs;
    if (this.x > (width - rad)) this.right = false;
    if (this.x < (0 + rad)) this.right = true;
    if (this.down) 
      this.y += this.ys;
    else
      this.y -= this.ys;
    if (this.y > (height - rad)) this.down = false;
    if (this.y < (200 + rad)) {
      this.down = true;
    }
  }
  
  getPos() {
    return Math.floor(this.x / 50);
  }
  
  display() {
    fill(200, 200, 200);
    strokeWeight(0);
    circle(this.x, this.y, this.d);
  }
}