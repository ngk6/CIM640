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
    rect(xPoints[i], yPoints[i], random(10, 40), random(10, 40);
  }

}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    for(var i = 0; i < xPoints.length; i++) {
      var x = xPoints[i];
      if (x > width) {
        x = x - width;
      }
      xPoints[i] = x + 10;
    }
  }
  else if (keyCode == LEFT_ARROW) {
    for(var i = 0; i < xPoints.length; i++) {
      var x = xPoints[i];
      if (x < 0) {
        x = x + width;
      }
      xPoints[i] = x - 10;

    }
  }
}


//Make 100 squares appear at random coordinates on the canvas.
//When the left arrow is pressed, the squares move left
//and right arrow makes them move right.
