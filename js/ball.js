class Ball {
  
  constructor(x, y, d, right, down, xs, ys) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.right = right;
    this.down = down;
    this.xs = xs;
    this.ys = ys;
    this.xpos = 0;
    this.ypos = 0;
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
    this.xpos = Math.floor(this.x / 50);
    this.ypos = 0;
    switch(ceiling[this.xpos]) {
    case 200:
      this.ypos = 0;
    break;
    case 180:
      this.ypos = 1;
    break;
    case 160:
      this.ypos = 2;
    break;
    case 140:
      this.ypos = 3;
    break;
    case 120:
      this.ypos = 4;
    break;
    case 100:
      this.ypos = 5;
    break;
    default:
      this.ypos = 6;
    }
    if (this.y < (ceiling[this.xpos] + rad)) {
      this.down = true;
      wall[this.ypos].brick[this.xpos].exists = false;
      ceiling[this.xpos] -= 20;
    }
  }
  
  report() {
    document.getElementById('x').innerHTML = 'x = ' + this.x;
    document.getElementById('y').innerHTML = 'y = ' + this.y;
    document.getElementById('xs').innerHTML = 'xs = ' + this.xs;
    document.getElementById('ys').innerHTML = 'ys = ' + this.ys;
    document.getElementById('xpos').innerHTML = 'xpos = ' + this.xpos;
    document.getElementById('ypos').innerHTML = 'ypos = ' + this.ypos;
  }
  
  
  findLeftWall() {
    
  }
  
  findRightWall() {
    
  }
  
  display() {
    fill(220);
    strokeWeight(0);
    circle(this.x, this.y, this.d);
  }
}