var selectedBallIndex;
var xCoordinates;
var y;
var lineSpeed;
var fifth;
//use conditional statements
//use arrays

function setup() {
	createCanvas(windowWidth, windowHeight); 
	fifth = width/5;
	xCoordinates = [0 + 10, fifth, fifth*2, fifth*3, fifth*4, width - 10];
	selectedBallIndex = 0;
	lineSpeed = 1;
	y = 0;
}

function draw() {
	background(0);
	fill(255);
	ellipse(xCoordinates[0], y, 20, 20);
	ellipse(xCoordinates[1], y, 20, 20);
	ellipse(xCoordinates[2], y, 20, 20);
	ellipse(xCoordinates[3], y, 20, 20);
	ellipse(xCoordinates[4], y, 20, 20);
	ellipse(xCoordinates[5], y, 20, 20);

	stroke(255);
	//line(point1X, point1Y, point2X, point2Y);

	line(xCoordinates[selectedBallIndex], y, width/2, height/2);
	y += lineSpeed;
	if (y > height || y < 0) {
		lineSpeed = - lineSpeed;
	}
}

function mousePressed() {
	lineSpeed = lineSpeed * 1.5;
}

function keyPressed() {

	if (keyCode == RIGHT_ARROW) {
		selectedBallIndex++;
	} else if (keyCode == LEFT_ARROW) {
		selectedBallIndex--;
	}
	if (selectedBallIndex >= xCoordinates.length) 
	{
		selectedBallIndex = xCoordinates.length - 1;
	}
	if (selectedBallIndex < 0) {
		selectedBallIndex = 0;
	}

}