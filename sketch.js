let truck;
let ma;
let maxD;
let x = 0;
let y =0;
function preload() {
  truck = loadModel('trruck_c4d.obj');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  x = width/2-100;
  ma = atan(1 / sqrt(2));

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background(200);
  ortho(-300, 300, 300,- 300, 0, 1000);
  rotateX(ma);
  rotateY(-QUARTER_PI);
  push();
  scale(2);
  translate(x, y, 0);
  normalMaterial(); // For effect
  model(truck);
  pop();
   push();
   scale(2);
   translate(x, y, 50);
   normalMaterial(); // For effect
   model(truck);
   pop();
  x--;
  if (x < - width / 2+100) {
    x = width / 2-100;
  }
  print('The value of x is ' + x);

}