const maxStep = 10;
let x = 0;
let y = 0;
let red = 0;
let green = 0;
let blue = 0;
const lineColor = () => {return color(red, green, blue)};
const maxX = 600;
const maxY = 600;
const maxColor = 255;

produceNextColor = function(x, y) {
  if( x < 0 || y < 0 ) {
    blue = min(blue + 1, maxColor);
  }
  if( blue == maxColor && (x > 0 || y > 0) ){
    red = min(red + 1, maxColor);
  }
  if( red == maxColor ) {
    green = min(green + 1, maxColor);
  }
}

function setup() {
	createCanvas(maxX, maxY);
	console.log(windowWidth, windowHeight);	
	noCursor();
	rectMode(CENTER);
	background(0, 255, 0);
}

coinToss = () => {
  const choices = [true, false];
  return random(choices);
}

function draw() {
  if(0 <= x && x <= width && 0 <= y && y <= height) {
    const nextX = random(-maxStep, maxStep);
    const nextY = random(-maxStep, maxStep);
    stroke(lineColor());
    produceNextColor(nextX, nextY);
    line(x, y, x + nextX, y + nextY);
    x = x + nextX;
    y = y + nextY;
  }
  else {
    newOrigin();
  }
}

newOrigin = () => {
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
  red = 0;
  green = 0;
  blue = 0;
}

function keyPressed() {
  if (key == 's' || key == 'S') {
    saveCanvas(gd.timestamp(), 'png');
  }
}