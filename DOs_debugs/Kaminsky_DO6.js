var xPoints = [];
var yPoints = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
  for (var i = 0; i < 100; i++) {
    xPoints.push(random(width));
    yPoints.push(random(height));

  }

}

function draw() {

  background(0);

  for (var i = 0; i < xPoints.length; i++) {
    ellipse(xPoints[i], yPoints[i], 5, 5);
  }
}

function mousePressed() {
  for (var i = 0; i < xPoints.length; i++) {
    xPoints[i] = xPoints[i]+5;
    if (xPoints[i] > width) {
      xPoints[i] = 0;
    }
}
}

//function keyPressed RIGHT_ARROW() {
//all stars shift to the right

//function keyPressed LEFT_ARROW() {
//all stars shift to the left