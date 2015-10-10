var Squoo = function(originX,originY) {
  this.originX = originX;
  this.originY = originY;
  var x = this.originX;
  var y = this.originY;
  this.x = x;
  this.y = y;
  // this.x = originX;
  // this.y = originY;
  this.width = random(3,15);
  this.height = this.width;
  this.fromColor = color(random(255), 0, 0);
  this.toColor = color(0, 0, random(255));
  this.colorAmount = 0;
  this.boxWidth = random(10,20);
  this.boxHeight = this.boxWidth;
  this.directionX = 0;
  this.directionY = 0;

  this.show = function() {
                var c = lerpColor(this.fromColor, this.toColor, this.colorAmount);
                fill(c);
                rect(this.x, this.y, this.width, this.height);
                this.colorAmount += .01;
                
                if (this.colorAmount > 1) {
                  this.colorAmount = 0;
                }

              }

  this.move = function() {
                this.x += this.directionX;
                this.y += this.directionY;
                if (x >= originX + this.boxWidth && y <= originY) {
                    directionX = 0;
                    directionY = 1;

                }
                else if (this.x >= this.originX + this.boxWidth && this.y >= this.originY + this.boxHeight) {
                    directionX = -1;
                    directionY = 0;
                }

                else if (this.x <= this.originX && this.y >= this.originY + this.boxHeight) {
                    directionX = 0;
                    directionY = -1;
                }

                else if (this.x <= this.originX && this.y <= this.originY) {
                    directionX = 1;
                    directonY  = 0;
                }

              }
}

var squees = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {
  background(0);
  noStroke();

  for (var i = 0; i < squees.length; i++) {
    squees[i].show();
    squees[i].move();
  }

  if (mouseIsPressed) {
    squees.push(new Squoo(mouseX, mouseY));
  }

  if (squees.length > 1000) {
    squees.shift();
  
  }
}