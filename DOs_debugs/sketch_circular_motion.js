var x;
var y;
var adjustedX;
var adjustedY;
var angle = 0;
var diameter;

function setup() {
  createCanvas(windowWidth,windowHeight);
  x = width/2;
  y = height/2;
  diameter = 30;
}

function draw() {
 // background(255,255,255); 
     // origin + cosine of the angle times half the diameter
    adjustedX = x + cos( radians(angle) )* (diameter/2);
    // origin + sin of the angle times half of the diameter
    adjustedY = y + sin(radians(angle))*(diameter/2);
    //this draws a circular motion in red
    fill(255,0,0);
    ellipse(adjustedX, adjustedY, 10, 10);
    // //this is just the cosine in green
    // fill(0,255,0);
    // ellipse(adjustedX, y, 10, 10);
    // //this is just the sin in blue
    // fill(0,0,255);
    // ellipse(x, adjustedY, 10, 10);
    angle++; 
    diameter = map(mouseX, 0, width, 0, 400);
   // diameter++;
}