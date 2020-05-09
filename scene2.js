let bg;
var xT, yT, wT, hT;
let t;
let tg, td;
let con, con1, con2;
var xCon, yCon;
let HvBlEx;
let conValue = false;
let conDROW = false;
let friEx = 'In 1993, graphic designers Markus and Daniel Freitag were looking for a functional, water-repellent and robust bag to hold their creative work. Inspired by the multicolored heavy traffic that rumbled through the Zurich transit intersection in front of their flat, they developed a messenger bag from used truck tarpaulins, discarded bicycle inner tubes and car seat belts. This is how the first FREITAG bags took shape in the living room of their shared apartment – each one recycled, each one unique.';
let friEx2 = 'With their innovation, the brothers inadvertently triggered a seismic event in the world of bag making. Its tremors have since made themselves felt in Zurich and the cities of Europe and spread all the way to Asia, making FREITAG the unofficial outfitter of all urban, bike-riding individualists.';

function preload() {
  bg = loadImage('img/bg.png');
  // tgTexture = loadImage('data/tg_texture.jpg');
  tg = loadImage('img/truck_assemble.png');
  td = loadImage('img/truck_deapart.png');
  con1 = loadImage('img/container.png');

  HvBlEx = loadFont('img/font/HvBlEx.otf');
}

function setup() {
  createCanvas(1280, 800);
  textFont(HvBlEx);
  xT = width - 500;
  yT = 150;
  wT = 300;
  hT = 300;
  t = tg;
  con = con1;

}

// function windowResized() {
//   resizeCanvas(1, windowHeight);
// }

function draw() {
  image(bg, 0, 0, width, height);
  // background(200);
  image(t, xT, yT, wT, hT);
  if (mouseX >= xT && mouseX <= xT + wT && mouseY >= yT && mouseY <= yT + hT || conValue == true) {
    cursor('grab');
    if (mouseIsPressed) {
      t = td;
      conValue = true;
    }
  } else {
    cursor(ARROW);
  }
  if (conValue == true) {
    push();
    imageMode(CENTER);
    if (mouseIsPressed) {
      xCon = mouseX;
      yCon = mouseY;
    }
    image(con, xCon, yCon, wT, hT);
    pop();
    cursor('cell');
  }

  if (conDROW == true) {}
  print(conDROW);
  push();
  textAlign(LEFT);
  textSize(100);
  text("FREITAG", 35, 105);
  pop();

  push();
  textAlign(LEFT);
  textSize(24);
  fill(0, map(sin(frameCount * 0.06), -1, 1, 50, 255));
  text("PLEASE TAKE APART CONTAINER FROM TRUCK", 40, 150);
  pop();

  push();
  textAlign(RIGHT);
  textSize(59);
  text("CUTTING THE TARPS", width - 35, height - 35);
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
}