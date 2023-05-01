function setup() {
  createCanvas(800, 800, WEBGL);
  describe('a rotating white torus');
}

function draw() {
  background(205, 102, 94);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.01);
  torus(180, 80);
}
