xPoints = [];
yPoints = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 

  for(var i = 0; i < 100; i++){
    xPoints.push(random(width));
    yPoints.push(random(height));
  }

}

function draw() {
  background(0);

  for(var i = 0; i < xPoints.length; i++) {  
    rect(xPoints[i], yPoints[i], 40, 40);
  }

}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    for(var i = 0; i < xPoints.length; i++) {
      xPoints[i] = xPoints[i] + 40;
    }
  }
  else if (keyCode == LEFT_ARROW) {
    for(var i = 0; i < xPoints.length; i++) {
      xPoints[i] = xPoints[i] - 40;
      if (xPoints[i] > width) {
        xPoints[i] = random(width);
      }
    }
  }
}


//Make 100 squares appear at random coordinates on the canvas.
//When the left arrow is pressed, the squares move left
//and right arrow makes them move right.
