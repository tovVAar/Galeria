import { setupCuadrado } from "./utils";

const maxX = 400;
const maxY = 400;

function setup() {
  setupCuadrado
}

function draw() {
  
}

function keyPressed() {
  if (key == 's' || key == 'S') {
    saveCanvas(gd.timestamp(), 'png');
  }
}