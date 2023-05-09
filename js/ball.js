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
    if (this.y > (height - rad)) {
      this.down = false;
    }
    let xpos = Math.floor(this.x / 50);
    let ypos = 0;
    switch(ceiling[xpos]) {
    case 200:
      ypos = 0;
    break;
    case 180:
      ypos = 1;
    break;
    case 160:
      ypos = 2;
    break;
    case 140:
      ypos = 3;
    break;
    case 120:
      ypos = 4;
    break;
    case 100:
      ypos = 5;
    break;
    default:
      ypos = 6;
    }
    if (this.y < (ceiling[xpos] + rad)) {
      this.down = true;
      wall[ypos].brick[xpos].exists = false;
      ceiling[xpos] -= 20;
    }
  }
  
  display() {
    fill(220);
    strokeWeight(0);
    circle(this.x, this.y, this.d);
  }
}