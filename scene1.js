let bg;
let tg;
let car;
let cy;
let fac;
let t, c, b;
// let tgTexture;
var xT, yT, xC, yC, xB, yB;
var wT, hT, wC, hC, wB, hB;
var sT, sC, sB;
let valueT = false;
let checkT = false;

let valueC = false;
let checkC = false;

let valueB = false;
let checkB = false;

let HvBlEx;

let friEx = 'In 1993, graphic designers Markus and Daniel Freitag were looking for a functional, water-repellent and robust bag to hold their creative work. Inspired by the multicolored heavy traffic that rumbled through the Zurich transit intersection in front of their flat, they developed a messenger bag from used truck tarpaulins, discarded bicycle inner tubes and car seat belts. This is how the first FREITAG bags took shape in the living room of their shared apartment – each one recycled, each one unique.';
let friEx2 = 'With their innovation, the brothers inadvertently triggered a seismic event in the world of bag making. Its tremors have since made themselves felt in Zurich and the cities of Europe and spread all the way to Asia, making FREITAG the unofficial outfitter of all urban, bike-riding individualists.';
let miniText = "TRUCK | CAR | BICYCLE";
let currentText;

function preload() {
  bg = loadImage('img/bg.png');
  t1 = loadImage('img/truck1.png');
  tg = loadImage('img/truck.png');
  car = loadImage('img/car.png');
  c2 = loadImage('img/car2.png');
  c3 = loadImage('img/car3.png');
  cy = loadImage('img/cycle.png');
  b2 = loadImage('img/cycle2.png');
  b3 = loadImage('img/cycle3.png');

  fac = loadImage('img/factory.png');
  // tgTexture = loadImage('data/tg_texture.jpg');
  HvBlEx = loadFont('img/font/HvBlEx.otf');
}

function setup() {
  createCanvas(1280, 800);
  textFont(HvBlEx);
  t = t1;
  c = car;
  b = cy;
  xT = width / 2 - 500;
  yT = height / 2 - 100;
  xC = width / 2 - 350;
  yC = height / 2 - 100;
  xB = width / 2 - 250;
  yB = height / 2 - 100;

  xSpeedT = 3;
  ySpeedT = 1.75;

  xSpeedC = 3;
  ySpeedC = 1.75;

  xSpeedB = 3;
  ySpeedB = 1.75;

  wT = 120;
  hT = 120;
  wC = 120;
  hC = 120;
  wB = 120;
  hB = 120;
}

// function windowResized() {
//   resizeCanvas(1, windowHeight);
// }

function draw() {
  image(bg, 0, 0, width, height);
  // background(200);
  image(fac, width / 2, -20);
  image(t, xT, yT, wT * sT, hT * sT);
  image(c, xC, yC, wC * sC, wT * sC);
  image(b, xB, yB, wB * sB, wB * sB);
  // ----------------------------------
  if (valueT == true) {
    xT += xSpeedT;
    yT += ySpeedT;
  }
  if (xT == 557 && yT == 543.25) {
    t = tg;
    ySpeedT *= -1;
  }
  if (xT == 683 && yT == 469.75) {
    xSpeedT = 0;
    ySpeedT = 0;
    checkT = true;
  }
  // ----------------------------------
  if (valueC == true) {
    xC += xSpeedC;
    yC += ySpeedC;
  }
  if (xC >= 877 && yC >= 685) {
    c = c2;
    ySpeedC *= -1;
  } else if (xC >= 1082 && yC <= 608) {
    c = c3;
    xSpeedC *= -1;
  }
  if (xC == 881 && yC == 490.75) {
    xSpeedC = 0;
    ySpeedC = 0;
    checkC = true;
  }
  // ----------------------------------
  if (valueB == true) {
    xB += xSpeedB;
    yB += ySpeedB;
  }
  if (xB == 882 && yB == 587) {
    b = b2;
    ySpeedB *= -1;
  } else if (xB == 1107 && yB == 455.75) {
    b = b3;
    xSpeedB *= -1;
  }
  if (xB == 951 && yB == 364.75) {
    xSpeedB = 0;
    ySpeedB = 0;
    checkB = true;
  }
  // ----------------------------------

  if ((mouseX >= xT && mouseX <= xT + wT && mouseY >= yT && mouseY <= yT + hT) || (mouseX >= xC && mouseX <= xC + wC && mouseY >= yC && mouseY <= yC + hC) || (mouseX >= xB && mouseX <= xB + wB && mouseY >= yB && mouseY <= yB + hB)) {
    cursor('grab');
    // image(tgTexture, width / 2, hieght / 3, 100, 60);
  } else {
    cursor(ARROW);
  }

  if (checkT == true && checkB == true && checkC == true) {
    location.href = "2.html";
  };
  push();
  textAlign(LEFT);
  textSize(100);
  text("FREITAG", 35, 105);
  pop();

  push();
  textAlign(LEFT);
  textSize(24);
  fill(0, map(sin(frameCount * 0.06), -1, 1, 50, 255));
  text("PLEASE SELECT 1 TRUCK, 1 CAR, 1 BICYCLE", 40, 150);
  pop();

  push();
  textAlign(RIGHT);
  textSize(59);
  text("RAW MATERIALS", width - 35, height - 35);
  pop();

  push();
  textAlign(LEFT);
  textSize(8);
  translate(35, height - 35);
  rotate(-HALF_PI);
  text(friEx, 0, 0, 350, 50);
  pop();

  push();
  textAlign(LEFT);
  textSize(8);
  translate(width - 35, 35);
  rotate(HALF_PI);
  text(friEx2, 0, 0, 350, 50);
  pop();

  push();
  textAlign(RIGHT);
  textSize(24);
  text(currentText, width - 35, height - 94);
  pop();
  if (mouseX >= xT && mouseX <= xT + wT && mouseY >= yT && mouseY <= yT + hT) {
    currentText = "TRUCK - TARPAULIN(FABRIC)";
    sT = 1.2;
  } else if (mouseX >= xC && mouseX <= xC + wC && mouseY >= yC && mouseY <= yC + hC) {
    currentText = "CAR - THE SEAT BELT(STRAP)";
    sC = 1.2;
  } else if (mouseX >= xB && mouseX <= xB + wB && mouseY >= yB && mouseY <= yB + hB) {
    currentText = "BICYCLE - WHEELS INNER TUBE(PIPING)";
    sB = 1.2;
  } else {
    currentText = miniText;
    sT = 1;
    sB = 1;
    sC = 1;
  }
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