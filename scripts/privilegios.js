const maxStep = 10;
let x = 0;
let y = 0;
let lineColor = 0;
const maxX = 400;
const maxY = 400;

function setup() {
  createCanvas(maxX, maxY);
  noCursor();
  rectMode(CENTER);
  background(220);
}

coinToss = () => {
  const choices = [true, false];
  return random(choices);
}

function draw() {
  if(0 <= x && x <= width && 0 <= y && y <= height) {
    const nextX = random(x, x + random(-maxStep, maxStep));
    const nextY = random(y, y + random(-maxStep, maxStep));
    stroke(lineColor);
    lineColor = min(lineColor + 1, 255);
    line(x, y, nextX, nextY);
    x = nextX;
    y = nextY;
  }
  else {
    newOrigin();
  }
}

newOrigin = () => {
  lineColor = 0;
  //horizontal start
  if(coinToss()){
    x = random(0, maxX);
    y = random([0,maxY]);
  }
  //vertical start
  else {
    x = random([0, maxX]);
    y = random(0, maxY);
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') {
    saveCanvas(gd.timestamp(), 'png');
  }
}