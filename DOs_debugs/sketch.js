var mic;
var micOn;

function setup() {
  // uncomment this line to make the canvas the full size of the window
   createCanvas(windowWidth, windowHeight);
   // the volume is a number between 0 and 1
   mic = new p5.AudioIn();
   micOn = false;
}

function draw() {
  // draw stuff here
  background(255);
  if (micOn) {
    var micLevel = mic.getLevel();
    var circleSize = map(micLevel, 0, 1, 0, width);
    fill(0);
    ellipse(width/2, height/2, circleSize, circleSize);
  }
}

function mousePressed() {
  micOn = !micOn;
  if (micOn) {
    mic.start();
  }
  else {
    mic.stop();
  }
}