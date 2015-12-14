var mostrecentword = "";

var fish;
var foshy;

var popModeOn = false;
var bounceModeOn = false;
var partyModeOn = false;

var wordBubbles;
var spriteSize = 80;

var startColor;
var endColor;
var partyColor;
var counter;

var bubbleSound;

var popButton;
var bounceButton;
var partyButton;

function preload() {
	bubbleSound = loadSound('assets/bubbles.mp3');
}

function popMode() {
	popModeOn = !popModeOn;
}

function bounceMode() {
	bounceModeOn = !bounceModeOn;
}

function partyMode() {
	partyModeOn = !partyModeOn;
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	wordBubbles = new Group();

	var startColor = color(random(0, 255),random(0, 255),random(0, 255));
	var endColor = color(random(0, 255),random(0, 255),random(0, 255));
	counter = 0;

	fish = createSprite(random(0, width), random(0,height));
	fish.addAnimation("normal","assets/fish.png");

	var button = createButton('Pop');
  	button.position(windowWidth/2 - 140, windowHeight - 70);
  	button.mousePressed(popMode);
  	
	var button = createButton('Bounce');
  	button.position(windowWidth/2 - 40, windowHeight - 70);
  	button.mousePressed(bounceMode);

	var button = createButton('Party');
  	button.position(windowWidth/2 + 88, windowHeight - 70);
  	button.mousePressed(partyMode);
 
	myRec.onResult = parseResult; // recognition callback
	myRec.onError = handleError;
	myRec.onEnd = recognitionEnded;
	myRec.start();
	
}

function draw() {
	//background(26, 211, 255); // medium turquise
	background(77, 148, 255); // darker

	stroke(230, 172, 0); // brown
	strokeWeight(3);
	fill(255, 219, 102); // orangey 
	ellipse(windowWidth/2, windowHeight, width + 100, windowHeight/3);

	fish.position.x = mouseX;
	fish.position.y = mouseY;
	fish.mass = 1;
	fish.setCollider("circle", 0, 0, spriteSize/1.8);

	if (bounceModeOn) {
		wordBubbles.bounce(wordBubbles);
		fish.bounce(wordBubbles);
	} 

	for (var i = 0; i < allSprites.length; i++) {
	  var s = allSprites[i];
	  if(s.position.x<0) {
	    s.position.x = 1;
	    s.velocity.x = abs(s.velocity.x);
	  }
	  
	  if(s.position.x > windowWidth) {
	    s.position.x = width-1;
	    s.velocity.x = -abs(s.velocity.x);
	    }
	  
	  if(s.position.y < 0) {
	    s.position.y = 1;
	    s.velocity.y = abs(s.velocity.y);
	  }
	  
	  if(s.position.y > windowHeight) {
	    s.position.y = height-1;
	    s.velocity.y = -abs(s.velocity.y);
	    } 
	  }
	drawSprites();
	drawSprite(fish);
}

var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
myRec.continuous = false; // do continuous recognition
myRec.interimResults = false; // allow partial recognition (faster, less accurate)

function parseResult() {

	// foshy.draw = function() {
	// 	rotate(radians(fish.getDirection()));
	// 	fish.rotateToDirection = true;
	// 	//image(fish, this.deltaX*2,this.deltaY*2);
	// }

	mostrecentword = myRec.resultString.split(' ').pop();

	var wordBubbleSprite = createSprite(random(windowWidth/2),random(windowHeight/2), spriteSize, spriteSize);
	wordBubbleSprite.word = mostrecentword;
	wordBubbleSprite.addSpeed(random(2),random(50));
	wordBubbles.add(wordBubbleSprite);
	wordBubbleSprite.mass = 1;
	
	wordBubbleSprite.setCollider("circle", 0, 0, spriteSize/2);
	
	wordBubbleSprite.draw = function () {

		if (partyModeOn) {
    		// fish.attractionPoint(1, mouseX, mouseY);
    		// this.color(partyColor);
    		fill(color(random(0, 255),random(0, 255),random(0, 255)));
    		// startColor = color(random(0, 255),random(0, 255),random(0, 255)));
    		// endColor = color(random(0, 255),random(0, 255),random(0, 255)));
    		// counter = .01;
    		// partyColor = (lerpColor(startColor, endColor, counter));
		} else {
			fill(179, 255, 255, 90);
		}
		
		strokeWeight(2);
		stroke(255);
		ellipse(0, 0, spriteSize, spriteSize);

		fill(0, 50, 102);
		noStroke();
		textAlign(CENTER);
		textSize(13);
		textFont("Verdana");
		text(this.word, 0, 0);

	}

	wordBubbleSprite.onMousePressed = function() {
		console.log("PRESSED SPRITE");
		if (popModeOn) {
			this.remove();
			bubbleSound.play();
	// 		popButton.removeClass('normal');
	// 		popButton.addClass('pressed');
	// 	} else {
	// 		popButton.removeClass('pressed');
	// 		popButton.addClass('normal');
		}
	}

	{
	wordBubbleSprite.debug = false;
	console.log(mostrecentword);	
	}
}


function recognitionEnded () {
	mostrecentword = myRec.resultString;//.split(' ').pop();
	console.log("Recognition Ended: " + mostrecentword);
	myRec.start();
}

function handleError() {
	console.log("Recognition Error");
}
