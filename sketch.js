function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
  
  fill(255, 0, 0, 150); 

  drawRectangle(windowWidth / 2 - 100, windowHeight / 2 - 150, 120, 60, radians(-10));
  drawRectangle(windowWidth / 2 - 50, windowHeight / 2 - 100, 140, 70, radians(15));
  drawRectangle(windowWidth / 2, windowHeight / 2 - 50, 130, 80, radians(-5));
  drawRectangle(windowWidth / 2 + 20, windowHeight / 2, 110, 60, radians(20));
  drawRectangle(windowWidth / 2 - 30, windowHeight / 2 + 50, 150, 80, radians(-15));
  drawRectangle(windowWidth / 2 - 80, windowHeight / 2 + 100, 100, 50, radians(10));
  drawRectangle(windowWidth / 2 + 30, windowHeight / 2 + 150, 120, 60, radians(-8));
  drawRectangle(windowWidth / 2, windowHeight / 2 + 200, 140, 70, radians(5));
  drawRectangle(windowWidth / 2 - 60, windowHeight / 2 + 250, 110, 50, radians(-12));
  drawRectangle(windowWidth / 2 + 50, windowHeight / 2 + 300, 130, 60, radians(8));
}

function drawRectangle(x, y, w, h, angle) {
  translate(x, y);
  rotate(angle);
  rectMode(CENTER);
  rect(0, 0, w, h);
  resetMatrix();
}
