var wordBubbles = [];
var mostrecentword = "";

var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
myRec.continuous = false; // do continuous recognition
myRec.interimResults = false; // allow partial recognition (faster, less accurate)

function parseResult() {
	mostrecentword = myRec.resultString.split(' ').pop();
	wordBubbles.push(new WordBubble(mostrecentword));

	console.log(mostrecentword);	
}

var WordBubble = function (word) {
	this.x = random(width);
	this.y = random(height);
	this.diameter = 80;
	this.xspeed = random(1, 2);
	this.yspeed = random(1, 2);
	this.word = word;
	
	this.move = function() {
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
		if (this.y > height || this.y < 0) {
			this.yspeed = - this.yspeed;
		}
		if (this.x > width || this.x < 0) {
			this.xspeed = - this.xspeed;
		}
	}

	this.display = function() {
		ellipse(this.x, this.y, this.diameter, this.diameter);
		textAlign(CENTER);
		text(this.word, this.x, this.y);
	}
}


function setup() {
   	createCanvas(windowWidth, windowHeight);
   	
	myRec.onResult = parseResult; // recognition callback
	myRec.onError = handleError;
	myRec.onEnd = recognitionEnded;
	myRec.start(); // start engine
	
}

function draw() {
	background('white');
	// textSize(20);
	// textAlign(LEFT);
	// text(word, 20, 20);

	for (var i = 0; i < wordBubbles.length; i++) {
		wordBubbles[i].move();
		wordBubbles[i].display();

	}
}
				
  // draw stuff here

function recognitionEnded () {
	mostrecentword = myRec.resultString.split(' ').pop();
	console.log("Recognition Ended: " + mostrecentword);
	myRec.start();
}

function handleError() {
	console.log("Recognition Error");
}






