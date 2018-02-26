//1 for small angle
//2 for no appox

let r1 = 400;
let r2 = 400;

let m = 1;

let a1,a2; 
let a1_v = 0;
let a2_v = 0;
let g = 1;

let cx, cy; //centre of pivot

let slowmo = 0.01;

function setup() {
  createCanvas(500, 500);
  a1 = PI / 5;
  a2 = PI / 5;
  cx = width / 2;
  cy = 50;
  buffer = createGraphics(width, height);
  buffer.background(175);
  buffer.translate(cx, cy);
}

function draw() {
  background(175);
  imageMode(CORNER);
  image(buffer, 0, 0, width, height);

  //determining the acceleration of pendulum
  a1_a = -g * a1 / r1;
  a2_a = -g * sin(a2) / r2;
	
  
  a1_v += a1_a;
  a2_v += a2_a;
  a1 += a1_v*slowmo;
  a2 += a2_v*slowmo;
  
  translate(cx, cy);
  
  line(0, 0, r1 * sin(a1), r1 * cos(a1));
  fill(255);
  ellipse(r1 * sin(a1), r1 * cos(a1), 7, 7);

  line(0, 0, r2 * sin(a2), r2 * cos(a2));
  fill(0);
  ellipse(r2 * sin(a2), r2 * cos(a2), 7, 7);

  // a1_v *= 0.99;
  // a2_v *= 0.99;

 
}