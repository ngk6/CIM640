flowers = [];
raindrops = [];
var input, button, nextColor;

var Flower = function (originX,originY) {
  this.originX = originX;
  this.originY = originY;
  this.color = color(255, 204, 0);

  this.display = function() {
    var x = this.originX;
    var y = this.originY;
    fill(this.color);
    noStroke();
    ellipse(x + 12, y + 12, 30, 30);
    ellipse(x + 12, y - 12, 30, 30);
    ellipse(x - 12, y + 12, 30, 30);
    ellipse(x - 12, y - 12, 30, 30);

    fill(255,255,255);
    noStroke();
    ellipse(x, y, 20, 20);
  }
}

var Raindrop = function (originX,originY) {
  this.x = originX;
  this.y = originY;

  this.display = function() {
    fill(0, 51, 204);
    noStroke();
    ellipse(this.x, this.y, 5, 5);
  }

  this.fall = function() {
    this.y = (this.y + random(1,10));
  }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    input = createInput();
    input.position(20, 65);


    button = createButton('submit');
    button.position(150, 65);
    button.mousePressed(setNextColor);

    greeting = createElement('h2', 'Which color do you want the next flower to be?');
    greeting.position(20, 5);
    nextColor = color(255, 204, 0);
    textAlign(CENTER)
    textSize(50);
 }    
  
function draw() {
  background(128, 204, 255);
  fill(255, 255, 0); 
  noStroke();
  ellipse(800, 100, 80, 80);
  
  fill(51, 204, 51);
  noStroke();
  rect(0, windowHeight/3*2, width, windowHeight/3);

    for (var i = 0; i < flowers.length; i++) {
      flowers[i].display();
    }

    for (var i = 0; i < raindrops.length; i++) {
      raindrops[i].display();
      raindrops[i].fall();
      if (raindrops[i].y > random(windowHeight/3*2, (windowHeight*1.5))) {
        raindrops.splice(i,1);
    }
    }
 }

function mousePressed() {
  if (mouseY > windowHeight/3*2) {
    var flower = new Flower (mouseX,mouseY);
    flower.color = nextColor;
    flowers.push(flower);
  }
}

function mouseMoved() {
  if (mouseY < windowHeight/3*2) {
    raindrops.push(new Raindrop (mouseX,mouseY));
  }
}
function setNextColor() {
    nextColor = color(input.value());
    if ((red(nextColor) == 255) &&
        (green(nextColor) == 255) &&
        (blue(nextColor) == 255)
        )
    {
      nextColor = color(255, 204, 0);
    } else {

      input.style("background-color", input.value());
    }
}
// function setup() {

//   // create canvas
//   createCanvas(710, 400);

//   input = createInput();
//   input.position(20, 65);

//   button = createButton('submit');
//   button.position(150, 65);
//   button.mousePressed(greet);

//   greeting = createElement('h2', 'what is your name?');
//   greeting.position(20, 5);

//   textAlign(CENTER)
//   textSize(50);
// }




