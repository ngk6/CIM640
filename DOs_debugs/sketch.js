var Ball = function(x, y) {
  this.x = x;
  this.y = y;
  this.diameter = 10;
  this.color = color(random(255), random(255), random(255));
}

Ball.prototype.show = function() {
  ellipse(this.x, this.y, this.diameter, this.diameter);
}

Ball.prototype.fall = function() {
  fill(this.color); 
  this.y = this.y + 1;
}

var balls = [];


function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {

  background(0);

  for (var i = 0; i < balls.length; i++) {
    balls[i].show();
    balls[i].fall();
  }
}

function mousePressed() {
  balls.push( new Ball(mouseX, mouseY) );
}