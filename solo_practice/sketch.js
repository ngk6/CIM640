function setup() {
   createCanvas(windowWidth, windowHeight);
}

function draw() {
	noFill();
	x1 = 85, x2 = 10, x3 = 90, x4 = 15;
	y1 = 20, y2 = 10, y3 = 90, y4 = 80;
	bezier(x1, y1, x2, y2, x3, y3, x4, y4);
	fill(255);
	steps = 10;
	for (i = 0; i <= steps; i++) {
  		t = i / steps;
  		x = bezierPoint(x1, x2, x3, x4, t);
 		y = bezierPoint(y1, y2, y3, y4, t);
  		ellipse(x, y, 5, 5);
}
  // draw stuff here
 
}

// function mousePressed() {
// 	// fill(0);
// 	// ellipse(mouseX, mouseY, 20, 20);
// }


