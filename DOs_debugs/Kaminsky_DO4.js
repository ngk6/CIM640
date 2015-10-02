var startColor;
var endColor;
var bgColor;
var counter;

function setup() {
  	createCanvas(windowWidth, windowHeight);
   	

   	startColor = color(255,0,0);
		endColor = color(127,30,200);
		counter = 0;
		bgColor = lerpColor(startColor, endColor, counter);
}

function draw() {
	  background(bgColor);
  	counter = counter + .01;
	 	bgColor = lerpColor(startColor, endColor, counter);

	 	fill(0, 200, 80);
   	noStroke();
   	rect(0, windowHeight/3*2, windowWidth, windowHeight/3);
   	
	 	growFlower(200, 200);

}

function mousePressed() {
	if (mouseY > windowHeight/3*2)
	{
		growFlower(mouseX,mouseY);
	}
}

function growFlower(x,y)
{
	  // stroke(0, 0, 0);
	  // bezier(85, 20, 10, 10, 90, 90, 15, 80);
	  
	  fill(255, 204, 0);
	  noStroke();
	  ellipse(x + 12, y + 12, 30, 30);
	  
	  fill(255, 204, 0);
	  noStroke();
	  ellipse(x + 12, y - 12, 30, 30);
	  
	  fill(255, 204, 0);
	  noStroke();
	  ellipse(x - 12, y + 12, 30, 30);
	  
	  fill(255, 204, 0);
	  noStroke();
	  ellipse(x - 12, y - 12, 30, 30);
	  
	  fill(255,255,255);
	  noStroke();
	  ellipse(x, y, 20, 20);

}

function keyPressed() {
	if (key == 'R'){
		fill(0, 0, 255);
		noStroke();
		ellipse(mouseX, mouseY, 10, 10);
		//rain
	} else if (key == 'S')
	{
		fill(255, 130, 0); 
		noStroke();
		ellipse(600, 100, 80, 80);
		//sun
	} 
}
