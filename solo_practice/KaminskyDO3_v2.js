
function setup() {
  //createCanvas(windowWidth, windowHeight);
   	createCanvas(1000,800);
   	background(0,255,0)
    angle = PI;
}

function draw() {
  centerX = 400;
  centerY = 400;
    growFlower();
}

function mousePressed() {

  centerX = mouseX;
  centerY = mouseY;
  growFlower();
}

function growFlower(){

	// line(300,200,300,400);
  
 //  fill(255, 204, 0);
 //  noStroke();
 //  ellipse(270,200,50,50);
  
 //  fill(255, 204, 0);
 //  noStroke();
 //  ellipse(330,200,50,50);
  
 //  fill(255, 204, 0);
 //  noStroke();
 //  ellipse(300,240,50,50);
  
 //  fill(255, 204, 0);
 //  noStroke();
 //  ellipse(300,160,50,50);
  
 //  fill(255,255,255);
 //  noStroke();
 //  ellipse(300,200,30,30);

   drawPetal(centerX, centerY, 50, angle);
   angle = angle + PI/8;
   // drawPetal(centerX, centerY, 50, HALF_PI);
   // drawPetal(centerX, centerY, 50, TWO_PI);
   // drawPetal(centerX, centerY, 50, HALF_PI*3);




}

function drawPetal(flowerCenterX,flowerCenterY, distance, angle)
{
  // x = Cos(a) * r
  x = cos(angle) * distance;

  // y = Sin(a) * r
  y = sin(angle) * distance;

  size = 50

  ellipse(x + flowerCenterX, y + flowerCenterY,size,size);
}


function keyPressed() {
//	return makeRain;
}
