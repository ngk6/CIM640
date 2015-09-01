function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(random(254));
  } else {
    fill(random(254),random(254),random(254));
  }
  ellipse(mouseX, mouseY, 80, 80);
  
}