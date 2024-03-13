function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  //this is a call to myShape()
  myShape(width / 2, height / 2, 1);
  myShape(width / 4, height / 4, 2);
  myShape(width / 2, height / 4, 0.5);
}

function myShape(x, y, scale) {
  // Draw a rectangle at the given location with the given scale
  fill(255, 0, 0);
  rectMode(CENTER);
  rect(x, y, 50 * scale, 50 * scale);
}
