raindrops = [];
clouds = [];
flowers = [];

var weatherState;
// 1 = sunny, 2 = rainy, 3 = cloudy

var theSun
var theRain;
var theClouds;
var theSkyGround;
var flowerColor;

var Sun = function() {
	this.displaySunny = function() {
		fill(255, 230, 0); 
		noStroke();
		ellipse(800, 100, 80, 80);

		stroke(255, 230, 0);
		strokeWeight(8);

		var sunrays = [];

		//make it a for loop? line(800, 100, random(windowWidth), random(windowHeight));
		for (var i = 0; i < 10; i++) {
			sunrays[i] = line(800, 100, random(600, 1000), random(50, 150));
		}

		// for (var i = 0; i < sunrays.length; i++) {
		// 	sunrays[i].display();
		// }
	}
	this.displayRainy = function() {
	}	
	this.displayCloudy = function() {
	}
}
	
var Rain = function() {
	this.displaySunny = function() {
	}
	this.displayRainy = function() {
	
		var raindrops = [];
	
		for (var i = 0; i < 100; i++) {
			raindrops[i] =  fill(0, 51, 204);
							noStroke();
							ellipse(this.x, this.y, 5, 5);
		}
		
// 		for (var i = 0; i < raindrops.length; i++) {
// 		}
// 		this.fall = function() {
// 		this.y = (this.y + random(1,10));
// 	}

		var Raindrop = function (originX,originY) {
		this.x = originX;
		this.y = originY;

		for (var i = 0; i < raindrops.length; i++) {
  			raindrops[i].display();
  		}
  		}
//   			raindrops[i].fall();
//   		}
//   		if (raindrops[i].y > random(windowHeight/3*2, (windowHeight*1.5))) {
//   			raindrops.splice(i,1);
// 		}
// 	}	
}
}

// var Cloud = function() {
// 	this.displayCloud = function () {
// 		fill(255);
// 		noStroke();
// 		ellipse(random(windowWidth), random(windowHeight/3*2), 30, 30);
// 	}
// }

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


function setup() {
   createCanvas(windowWidth, windowHeight);
   flowerColor = document.getElementById('colorSelector');
   weatherState = 1;

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

	theSun = new Sun();

	theRain = new Rain();

	if (weatherState === 1) {
		theSun.displaySunny();
	}  else if (weatherState === 2) {
		theSun.displayRainy();
		theClouds.displayRainy();
	}  else if (weatherState === 3) {
		theSun.displaySunny();
		theClouds.displayCloudy();
	}

  	for (var i = 0; i < flowers.length; i++) {
  		flowers[i].display();
  	}
 
	for (var i = 0; i < clouds.length; i++) {
		clouds[i].display();
	}	
 }


function mousePressed() {
	if (mouseY > windowHeight/3*2) {
		flowers.push(new Flower (mouseX,mouseY));
	}
}

// function mouseDragged() {
// 		raindrops.push(new Raindrop (width/2, height/2));
// 	}

function keyTyped() {
	if (key === "s") {
		new Sunshine ();
	} else if (key === "1") {
		weatherState = 1; //sunny
	} else if (key === "2") {
		weatherState = 2; //rainy
	} else if (key === "3") {
		weatherState = 3; //cloudy
	}

}

// function keyTyped() {
// 	if (key === "c") {
// 		clouds.push(new Cloud () );
// 	}
// }



