let r1 = 125; //radius of first pendulum
let r2 = 125; //radius of second pendulum
let m1 = 10; //mass of first pendulum
let m2 = 10; //mass of second pendulum

//angles
let a1 = 0;
let a2 = 0;
//angular velocity
let a1_v = 0;
let a2_v = 0;
//angular acceleration
let a1_a, a2_a;

let g = 1;

let px2 = -1;
let py2 = -1;
let cx, cy;

let buffer;

let slowmo = 0.5;

function setup() {
  createCanvas(500, 300);
  a1 = PI / 2;
  a2 = PI / 4;
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

  //equations of motions
  a1_a = (-m2*r1*a1_v*a1_v*sin(a1-a2)*cos(a1-a2)+g*m2*sin(a2)*cos(a1-a2)-m2*r2*a2_v*a2_v*sin(a1-a2)-(m1+m2)*g*sin(a1))/(r1*(m1+m2)-m2*r1*cos(a1-a2)*cos(a1-a2));	 
  a2_a = (m2*r2*a2_v*a2_v*sin(a1-a2)*cos(a1-a2)+g*sin(a1)*cos(a1-a2)*(m1+m2)+r1*a1_v*a1_v*sin(a1-a2)*(m1+m2)-(m1+m2)*g*sin(a2))/(r2*(m1+m2)-m2*r2*cos(a1-a2)*cos(a1-a2));
  
  //increment vel
  a1_v += a1_a;
  a2_v += a2_a;
  //increment angle
  a1 += a1_v;
  a2 += a2_v;
  
  translate(cx, cy);
  stroke(0);
  strokeWeight(2);

  let x1 = r1 * sin(a1);
  let y1 = r1 * cos(a1);

  let x2 = x1 + r2 * sin(a2);
  let y2 = y1 + r2 * cos(a2);

  line(0, 0, x1, y1);
  fill(0);
  ellipse(x1, y1, m1, m1);

  line(x1, y1, x2, y2);
  fill(0);
  ellipse(x2, y2, m2, m2);

  a1_v += a1_a;
  a2_v += a2_a;
  a1 += a1_v*slowmo;
  a2 += a2_v*slowmo;

  // a1_v *= 0.99;
  // a2_v *= 0.99;

  buffer.stroke(0);
  if (frameCount > 1) {
    buffer.line(px2, py2, x2, y2);
  }

  px2 = x2;
  py2 = y2;
}