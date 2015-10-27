raindrops = [];
clouds = [];
flowers = [];
var frameCounter = 0;

var weatherState;
// 1 = sunny, 2 = rainy, 3 = cloudy

var theSun;
var theRain;
var theClouds;
var theSky;
var flowerColor;

var base_url = "http://api.openweathermap.org/data/2.5/forecast";
var city_url = "?q=miami";
var app_id = "&appid=cb46f7f4d9b620ca18c65ee7eaad868b";
var units = "&units=imperial";

var inp;

var Sunray = function (originX,originY) {
	this.x = originX;
	this.y = originY;
	this.radius = 65;
	this.angle = Math.random() * Math.PI * 2;
	this.x2 = Math.cos(this.angle) * this.radius;
	this.y2 = Math.sin(this.angle) * this.radius;
	this.display = function() {
			stroke(255, 230, 0);
			strokeWeight(7);
			line(this.x, this.y, this.x + this.x2 ,this.y + this.y2);
	}
}

var Sun = function(originX,originY) {
	this.x = originX;
	this.y = originY;
	this.sunrays = [];
	this.numberOfSunrays = 10;
	this.init = function() {
		for (var i = 0; i < this.numberOfSunrays; i++) {
			this.sunrays[i] = new Sunray(this.x, this.y);
		}
	}

	this.displaySunny = function() {
		fill(255, 230, 0); 
		noStroke();
		ellipse(this.x, this.y, 80, 80);

		this.sunrays[frameCounter%this.numberOfSunrays] = new Sunray(this.x, this.y);

		for (var i = 0; i < this.sunrays.length; i++) {
			this.sunrays[i].display();
		}
		frameCounter ++;

	}
	this.displayRainy = function() {
	}	
	this.displayCloudy = function() {
	}
	this.init();	

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
		for (var i = 0; i < 15; i++) {
			if (weatherState == 3) {
				fill(255);
			} 
			noStroke();
			ellipse(this.x, this.y, 50, 50);
			ellipse(this.x + 10, this.y + 20, 50, 50);
			ellipse(this.x - 20, this.y + 20, 40, 40);
			ellipse(this.x + 20, this.y - 10, 50, 50);
			ellipse(this.x - 20, this.y - 20, 50, 50);
			ellipse(this.x - 40, this.y - 20, 50, 50);				
		}
	}
	this.move = function() {
		this.x = this.x + this.speed;
		if (this.x > windowWidth +40) {
			this.x = -40;
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
	}
	this.displaySunny = function() {
		fill(255, 230, 0); 
		noStroke();
		ellipse(800, 100, 80, 80);
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

function changeCity(){

	city_url = "?q=" + inp.value();
	var url = base_url + city_url + app_id + units;
  	loadJSON(url, gotWeather);
  	console.log('you are typing: ',inp.value());
}

function setup() {
	inp = createInput('City');
	inp.position(100, 30);
	var button = createButton('submit');
  	button.position(250, 30);
  	button.mousePressed(changeCity);

	createCanvas(windowWidth, windowHeight);
	flowerColor = document.getElementById('colorSelector');
	cityName = document.getElementById('createButton');

	weatherState = 1;
	
	theSun = new Sun(800, 100);

	theRain = new Rain();

	theClouds = new Clouds(800, 100);

	var url = base_url + city_url + app_id + units;
  	loadJSON(url, gotWeather);
 }  	
  
function draw() {
	background(128, 204, 255);
	
	fill(51, 204, 51);
	noStroke();
	rect(0, windowHeight/3*2, width, windowHeight/3);

	fill(flowerColor.value);

	for (var i = 0; i < flowers.length; i++) {
  		flowers[i].display();
  	}

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
 }

function mousePressed() {
	if (mouseY > windowHeight/3*2) {
		flowers.push(new Flower (mouseX,mouseY));
	}
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

function gotWeather(weather) {
  var condition = weather.list[0].weather[0].main;
  print(condition);

  if (condition === "Clear") {
  	weatherState = 1;
  } else if (condition === "Rain") {
  	weatherState = 2;

  } else if (condition === "Clouds") {
  	weatherState = 3;
  } else {

  }

}



