// inspirado en https://www.youtube.com/watch?v=W2Xb2GFK2yc

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {

}

function keyPressed() {
    if (key == 's' || key == 'S') {
        saveCanvas(gd.timestamp(), 'png');
    }
}