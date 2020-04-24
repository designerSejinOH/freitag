let truck;
let ma;
let maxD;
let x = 0;
let y = 0;

function preload() {
  truck = loadModel('trruck_c4d.obj');

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  x = width / 2 - 150;
  ma = atan(1 / sqrt(2));

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  ortho(-300, 300, 300, -300, 0, 1000);
  rotateX(ma);
  rotateY(-QUARTER_PI);
  push();
  scale(2);
  translate(x, y, -20);
  fill(0, 255, 0);
  model(truck);
  pop();
  push();
  scale(2);
  translate(-x, y, 20);
  rotateY(PI);
  fill(255, 0, 0);
  model(truck);
  pop();
  x--;
  if (x < -width / 2 + 150) {
    x = width / 2 - 150;
  }
  print('The value of x is ' + x);

}