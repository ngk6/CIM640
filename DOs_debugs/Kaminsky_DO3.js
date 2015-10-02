
function setup() {
  //createCanvas(windowWidth, windowHeight);
   	createCanvas(1000,800);
   	background(0,255,0)
   	
}

function draw() {
}

function mousePressed() {
	growFlower();
}

function growFlower(){
	line(300,200,300,400);
  
  fill(255, 204, 0);
  noStroke();
  ellipse(270,200,50,50);
  
  fill(255, 204, 0);
  noStroke();
  ellipse(330,200,50,50);
  
  fill(255, 204, 0);
  noStroke();
  ellipse(300,240,50,50);
  
  fill(255, 204, 0);
  noStroke();
  ellipse(300,160,50,50);
  
  fill(255,255,255);
  noStroke();
  ellipse(300,200,30,30);
	

}


function keyPressed() {
//	return makeRain;
}
