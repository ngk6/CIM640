raindrops = [];
clouds = [];
flowers = [];

var weatherState;
// 1 = sunny, 2 = rainy, 3 = cloudy

var theSun;
var theRain;
var theClouds;
var theSky;
var flowerColor;

var Sun = function() {
	this.displaySunny = function() {
		fill(255, 230, 0); 
		noStroke();
		ellipse(800, 100, 80, 80);

		stroke(255, 230, 0);
		strokeWeight(8);

		var sunrays = [];

		for (var i = 0; i < 4; i++) {
			sunrays[i] = line(800, 100, random(600, 1000), random(50, 150));
			//modulo
		}
	}
	this.displayRainy = function() {
	}	
	this.displayCloudy = function() {
	}
}

var Raindrop = function (originX,originY) {
	this.x = originX;
	this.y = originY;
	this.speed = random(3, 9);

	this.display = function() {
		fill("darkBlue");
		noStroke();
		ellipse(this.x, this.y, 5, 5);
	}

	this.fall = function() {
		this.y = this.y + this.speed;
		if (this.y > windowHeight) {
			this.y = 0;
			this.speed = random(3, 9);
		}	
	}
}

var Rain = function() {
	this.raindrops = [];
	this.init = function() {
		for (var i = 0; i < 200; i++) {
			this.raindrops.push(new Raindrop (random(windowWidth), random(windowHeight)));
		}
		if (raindrops[i] > random(windowHeight/3*2, (windowHeight*1.5))) {
			raindrops.splice(i,1);
		}	
	}
	this.displaySunny = function() {
	}
	this.displayCloudy = function() {
	}
	this.displaySky = function() {
		background = color("gray");
	}
	this.displayRainy = function() {
		for (var i = 0; i < 200; i++) {
			var aRaindrop = this.raindrops[i];
			aRaindrop.fall();
			aRaindrop.display();
		}
	}
	this.init();	

}	

var Cloudpuff = function (originX,originY) {
	this.x = originX;
	this.y = originY;
	this.speed = .5;

	this.display = function() {
		var puffs = [];
		for (var i = 0; i < 15; i++) {
			puffs[i] = fill(255);
						noStroke();
						ellipse(this.x, this.y, 50, 50);
						ellipse(this.x + 10, this.y + 20, 50, 50);
						ellipse(this.x - 20, this.y + 20, 40, 40);
						ellipse(this.x + 20, this.y - 10, 50, 50);
						ellipse(this.x - 20, this.y - 20, 50, 50);
						ellipse(this.x - 40, this.y - 20, 50, 50);
						//how to randomize the cloud formation each time?				
		}
	}
	this.move = function() {
		this.x = this.x + this.speed;
		if (this.x > windowWidth) {
			this.x = 0;
			this.speed = .5;
		}
	}	
}

var Clouds = function() {
	this.clouds = [];
	this.init = function() {
		for (var i = 0; i < 15; i++) {
			this.clouds.push(new Cloudpuff (random(windowWidth), random(windowHeight/3)));
		}
		// if (clouds[i] > windowWidth) {
		// 	clouds.splice(i,1);
		// 	clouds[i] = 0;
		// }
	}
	this.displaySunny = function() {
		fill(255, 230, 0); 
		noStroke();
		ellipse(800, 100, 80, 80);
		//why doesn't the sun show up in var Clouds?
	}
	this.displayRainy = function() {
	}
	this.displayCloudy = function() {
		for (var i = 0; i < 15; i++) {
			var aCloud = this.clouds[i];
			aCloud.move();
			aCloud.display();
		}
	}
	this.init();
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
		ellipse(x, y, 15, 15);
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	flowerColor = document.getElementById('colorSelector');
	weatherState = 1;
	
	theSun = new Sun();

	theRain = new Rain();

	theClouds = new Clouds();
 }  	
  
function draw() {
	background(128, 204, 255);
	
	fill(51, 204, 51);
	noStroke();
	rect(0, windowHeight/3*2, width, windowHeight/3);

	fill(flowerColor.value);

	if (weatherState === 1) {
		theSun.displaySunny();
		// theRain.displaySunny();
		// theClouds.displaySunny();
	}  else if (weatherState === 2) {
		// theSun.displayRainy();
		theRain.displayRainy();
		// theClouds.displayRainy();
		// theSky.displayRainy();
	}  else if (weatherState === 3) {
		theSun.displayCloudy();
		// theRain.displayCloudy();
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

function mouseDragged() {
		raindrops.push(new Raindrop (mouseX, mouseY));
	}

function keyTyped() {
	if (key === "1") {
		weatherState = 1; //sunny
	} else if (key === "2") {
		weatherState = 2; //rainy
	} else if (key === "3") {
		weatherState = 3; //cloudy
	}

}



