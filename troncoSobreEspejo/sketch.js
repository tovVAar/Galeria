//Si deseas correr este program: 
//  - Copia todo este texto
//  - Abre https://editor.p5js.org/
//  - Pega el texto en el editor y presiona "Play" (>)

const canvasX = 800;
const canvasY = 500;

function preload() {}

function setup() {
  createCanvas(canvasX, canvasY, P2D);
  //createCanvas(800, 800, WEBGL);
  noFill();
  frameRate(3);
}

function draw() {
  //console.log(frameCount);
  fill(128);
  
  //rotate(1);
  //translate(50, 50);
  //scale(1);
  
  myCursor();
  stampFlower(getRandPointInSpace());
  //logCursorEvents();
}

function stampFlower({x, y}) {
  const color = random(0, 255);
  const leafSize = random(10, 20);
  strokeWeight(1);
  fill(color);
  ellipse(x, y-leafSize, leafSize, leafSize);
  ellipse(x-leafSize, y, leafSize, leafSize);
  ellipse(x+leafSize, y, leafSize, leafSize);
  ellipse(x, y+leafSize, leafSize, leafSize);
  
}

logCursorEvents = () => {
  console.log('Mouse pressed: ' + mouseIsPressed);
  console.log('Key pressed: ' + keyIsPressed);
  console.log('Last key: ' + key);
}

function getRandPointInSpace(maxX=canvasX, maxY=canvasY){
  const x = random(0, maxX);
  const y = random(0, maxY);
  return {x, y};
}

function mouseReleased(){
  console.log('No more mouse');
}

function mousePressed(){
  console.log('Mouse press');
}

function keyPressed(){
  console.log('Se apachurró a ' + key);
}

function keyReleased(){
  console.log('Se soltó a ' + key);
}

function myCursor() {
  if(mouseX == 0 && mouseY == 0) return;

  strokeWeight(1);
  ellipse(mouseX, mouseY-16, 16, 16);
  ellipse(mouseX-16, mouseY, 16, 16);
  ellipse(mouseX+16, mouseY, 16, 16);
  ellipse(mouseX, mouseY+16, 16, 16);
  
  fill(200);
  rect(mouseX-5, mouseY-5, 10, 10);
  
  fill(100);
  strokeWeight(5);
  point(mouseX, mouseY);
}
