let bg;
let tg;
let car;
let cy;
// let tgTexture;
var xT, yT, xC, yC, xB, yB;
var xSpeed, ySpeed;
var wT, hT, wC, hC, wB, hB;
let valueT = false;
let valueC = false;
let valueB = false;
let HvBlEx;

function preload() {
   bg = loadImage('img/bg.png');
   tg = loadImage('img/truck.png');
   car = loadImage('img/car.png');
   cy = loadImage('img/cycle.png');
   // tgTexture = loadImage('data/tg_texture.jpg');
   HvBlEx = loadFont('img/font/HvBlEx.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);

  xT = width / 2 - 200 - 50;
  yT = height / 2 - 100;
  xC = width / 2 - 50;
  yC = height / 2 - 100;
  xB = width / 2 + 150 - 50;
  yB = height / 2 - 100;

  xSpeed = 3;
  ySpeed = 2;

  wT = 200;
  hT = 200;
  wC = 200;
  hC = 200;
  wB = 200;
  hB = 200;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  image(bg, 0, 0);
  // background(200);

  image(tg, xT, yT, wT, hT);
  image(car, xC, yC, wC, wT);
  image(cy, xB, yB, wB, wB);
  if (valueT == true) {
    xT -= xSpeed;
    yT -= ySpeed;
  }
  if (valueC == true) {
    xC -= xSpeed;
    yC += ySpeed;
  }
  if (valueB == true) {
    xB += xSpeed;
    yB += ySpeed;
  }
  if ((mouseX >= xT && mouseX <= xT + wT && mouseY >= yT && mouseY <= yT + hT) || (mouseX >= xC && mouseX <= xC + wC && mouseY >= yC && mouseY <= yC + hC) || (mouseX >= xB && mouseX <= xB + wB && mouseY >= yB && mouseY <= yB + hB)) {
    cursor(HAND);
    // image(tgTexture, width / 2, hieght / 3, 100, 60);
  } else {
    cursor(ARROW);
  }

  textFont(HvBlEx);
  textSize(80);
  text("FREITAG", width / 2, 150);
  textSize(50);
  text("RAW MATERIALS", width / 2, height - 100);
  
}

function mouseReleased() {
  if (mouseX >= xT && mouseX <= xT + wT && mouseY >= yT && mouseY <= yT + hT) {
    if (valueT == false) {
      valueT = true;
    } else {
      valueT = false;
    }
  }
  if (mouseX >= xC && mouseX <= xC + wC && mouseY >= yC && mouseY <= yC + hC) {
    if (valueC == false) {
      valueC = true;
    } else {
      valueC = false;
    }
  }
  if (mouseX >= xB && mouseX <= xB + wB && mouseY >= yB && mouseY <= yB + hB) {
    if (valueB == false) {
      valueB = true;
    } else {
      valueB = false;
    }
  }
}

function de() {
  redraw();
}