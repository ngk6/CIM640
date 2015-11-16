squares = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
  for(var i = 0; i < 100; i++){
    squares[i] = new Square ();
  }

}

function draw() {
  background(0);
  for(var i = 0; i < squares.length; i++) {
    var aSquare = squares[i];
    aSquare.display();
  }
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    for(var i = 0; i < squares.length; i++) {
      var aSquare = squares[i];
      aSquare.moveRight();
    }
  }
  else if (keyCode == LEFT_ARROW) {
    print("pressed left");
    for(var i = 0; i < squares.length; i++) {
      var aSquare = squares[i];
      aSquare.moveLeft();
    }
  }
}


function Square () 
{
  this.color = color('white');
  this.size = 40;
  this.originX = random(width);
  this.originY = random(height);
  this.speed = 10;

  this.moveRight = function() {
    var x = this.originX;
    if (x > width) {
      x = x - width;
    }
    this.originX = x + this.speed;
  };
  this.moveLeft = function() {
    var x = this.originX;
    if (x < 0) {
      x = x + width;
    }
    this.originX = x - this.speed;
  };

  this.display = function() {
    rect(this.originX, this.originY, this.size, this.size);
  };
}


//Make 100 squares appear at random coordinates on the canvas.
//When the left arrow is pressed, the squares move left
//and right arrow makes them move right.
