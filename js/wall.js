class Wall {
  
  brick = [];
  ypos = [180, 160, 140, 120, 100, 80, 60];
  
  constructor(n, c) {
    this.n = n;
    this.c = c;

    for(let i = 0; i < 16; i++) {
      this.brick[i] = new Brick(i * 50, this.ypos[n], this.c);
    }
  }
  
  display() {
    for(let i = 0; i < 16; i++) {
      this.brick[i].display();
    }
  }
}
