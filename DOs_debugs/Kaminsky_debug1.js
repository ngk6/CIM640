
var backgroundColor;
var crossColor;
var crossShadowColor;

function setup() {
   	createCanvas(windowWidth, windowHeight);
   	backgroundColor = color(random(255), random(255), random(255));
   	crossShadowColor = color(0,0,0);
   	crossColor = color(random(255), random(255), random(255));
}

function draw() {
	cross(mouseX, mouseY, crossColor, crossShadowColor);
}


function keyReleased() {
	background(backgroundColor);
}

function mousePressed() {
	crossColor = color(random(255), random(255), random(255));
}

function cross(xPos,yPos,foreground,shadow) {
	//background cross
	fill(crossShadowColor);
	rect(xPos - 1, yPos - 1, 50, 10);
	rect(xPos + 20 - 1, yPos - 20 - 1, 10, 50);

	//foreground cross
	noStroke();
	fill(foreground);
	rect(xPos, yPos, 50, 10);
	rect(xPos + 20, yPos - 20, 10, 50);
}

function draw() {
	cross(mouseX, mouseY, crossColor, crossShadowColor);
}

