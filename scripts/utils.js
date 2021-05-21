
export const coinToss = () => {
    const choices = [true, false];
    return random(choices);
}

export const setupCuadrado = (maxX, maxY) => {
    createCanvas(maxX, maxY);
    noCursor();
    rectMode(CENTER);
    background(220);
}