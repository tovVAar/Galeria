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