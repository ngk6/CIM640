var wordBubbles = [];
var mostrecentword = "";

// var WordBubble = function (word) {
// 	this.x = random(width);
// 	this.y = random(height);
// 	this.diameter = 80;
// 	this.xspeed = random(1, 1.5);
// 	this.yspeed = random(1, 1.5);
// 	this.word = word;
// 	this.backgroundColor = color(random(255),random(255));
// 	// this.bubbleSprite = createSprite(WordBubble);
// 	//see custom draw Sprite ex.

	
// 	this.move = function() {
// 		this.x = this.x + this.xspeed;
// 		this.y = this.y + this.yspeed;
// 		if (this.y > height || this.y < 0) {
// 			this.yspeed = - this.yspeed;
// 		}
// 		if (this.x > width || this.x < 0) {
// 			this.xspeed = - this.xspeed;
// 		}
// 	}

// 	this.display = function() {
// 		fill(this.backgroundColor);
// 		ellipse(this.x, this.y, this.diameter, this.diameter);

// 		fill('black');
// 		textAlign(CENTER);
// 		text(this.word, this.x, this.y);
// 	}
// }

// var BubblesCollide = function() {

// }

function popMode() {
	console.log('Popped');
}

function setup() {
	// inp = createInput('City');
	// inp.position(100, 30);


	var button = createButton('Pop!');
  	button.position(250, 30);
  	button.mousePressed(popMode);
  
   	createCanvas(windowWidth, windowHeight);
   	
	myRec.onResult = parseResult; // recognition callback
	myRec.onError = handleError;
	myRec.onEnd = recognitionEnded;
	myRec.start();
	
}

function draw() {
	background('white');

	// for (var i = 0; i < wordBubbles.length; i++) {
	// 	wordBubbles[i].move();
	// 	wordBubbles[i].display();
	// }

	for(var i=0; i<allSprites.length; i++) {
	  var s = allSprites[i];
	  if(s.position.x<0) {
	    s.position.x = 1;
	    s.velocity.x = abs(s.velocity.x);
	  }
	  
	  if(s.position.x>windowWidth) {
	    s.position.x = width-1;
	    s.velocity.x = -abs(s.velocity.x);
	    }
	  
	  if(s.position.y<0) {
	    s.position.y = 1;
	    s.velocity.y = abs(s.velocity.y);
	  }
	  
	  if(s.position.y>windowHeight) {
	    s.position.y = height-1;
	    s.velocity.y = -abs(s.velocity.y);
	    } 
	  }
	drawSprites();
}

var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
myRec.continuous = false; // do continuous recognition
myRec.interimResults = false; // allow partial recognition (faster, less accurate)

function parseResult() {
	mostrecentword = myRec.resultString.split(' ').pop();

	var wordBubbleSprite = createSprite(random(windowWidth),random(windowHeight), 80, 80);
	wordBubbleSprite.word = mostrecentword;
	wordBubbleSprite.draw = spriteDraw;
	wordBubbleSprite.addSpeed(random(5),random(360));
	wordBubbles.push(wordBubbleSprite);

	// wordBubbles.push(new WordBubble(mostrecentword));

	console.log(mostrecentword);	
}

function spriteDraw () {
	fill('Ivory');
	ellipse(this.position.x, this.position.y, this.height, this.width);

	fill('black');
	textAlign(CENTER);
	text(this.word, this.position.x, this.position.y);
}
				
  // draw stuff here

function recognitionEnded () {
	mostrecentword = myRec.resultString;//.split(' ').pop();
	console.log("Recognition Ended: " + mostrecentword);
	myRec.start();
}

function handleError() {
	console.log("Recognition Error");
}






