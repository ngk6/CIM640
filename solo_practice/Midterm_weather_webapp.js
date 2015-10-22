flowers = [];
raindrops = [];
sunrays = [];
var flowerColor;

// var sunny;
// var rainy;
// var cloudy;
// var temperature;

var Sunshine = function() {
	this.display = function() {
		fill(255, 230, 0); 
		noStroke();
		ellipse(800, 100, 80, 80);

		stroke(255, 230, 0);
		strokeWeight(10);
		line(800, 100, random(0,1000), random(0,1000));
		//line(800, 100, 700, 200);
	}

	// this.radiate = function() {
	// 	line(800, 100, 700 + random(100,1000), 100);
	// }
}

var Flower = function (originX,originY) {
	this.originX = originX;
	this.originY = originY;
	this.color = color(flowerColor.value); 

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
   flowerColor = document.getElementById('colorSelector');

 }  	
  
function draw() {
	background(128, 204, 255);
	// fill(255, 230, 0); 
	// noStroke();
	// ellipse(800, 100, 80, 80);
	
	fill(51, 204, 51);
	noStroke();
	rect(0, windowHeight/3*2, width, windowHeight/3);

	fill(flowerColor.value);

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
 
  	for (var i = 0; i < sunrays.length; i++) {
		sunrays[i].display();
	}	

 }


function mousePressed() {
	if (mouseY > windowHeight/3*2) {
		flowers.push(new Flower (mouseX,mouseY));
	}
}

function mouseDragged() {
	if (mouseY < windowHeight/3*2) {
		raindrops.push(new Raindrop (mouseX,mouseY));
	}
}

function keyTyped() {
	if (key === "s") {
		sunrays.push(new Sunshine () );
	}
}



