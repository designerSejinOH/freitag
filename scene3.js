let bg;

let HvBlEx;
var xT, yT, wT, hT;
let friEx = 'In 1993, graphic designers Markus and Daniel Freitag were looking for a functional, water-repellent and robust bag to hold their creative work. Inspired by the multicolored heavy traffic that rumbled through the Zurich transit intersection in front of their flat, they developed a messenger bag from used truck tarpaulins, discarded bicycle inner tubes and car seat belts. This is how the first FREITAG bags took shape in the living room of their shared apartment – each one recycled, each one unique.';
let friEx2 = 'With their innovation, the brothers inadvertently triggered a seismic event in the world of bag making. Its tremors have since made themselves felt in Zurich and the cities of Europe and spread all the way to Asia, making FREITAG the unofficial outfitter of all urban, bike-riding individualists.';

function preload() {
  bg = loadImage('img/bg.png');

  // tgTexture = loadImage('data/tg_texture.jpg');
  HvBlEx = loadFont('img/font/HvBlEx.otf');
}

function setup() {
  createCanvas(1280, 800);
  textFont(HvBlEx);
  xT = 200;
  yT = 200;
  wT = 300;
  hT = 300;
}

// function windowResized() {
//   resizeCanvas(1, windowHeight);
// }

function draw() {
  image(bg, 0, 0, width, height);
  // background(200);
    image(t, xT, yT, wT, hT);

  push();
  textAlign(LEFT);
  textSize(100);
  text("FREITAG", 35, 105);
  pop();

  push();
  textAlign(RIGHT);
  textSize(59);
  text("REMOVING THE SEAT BELT", width - 35, height - 35);
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