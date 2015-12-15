// Wubbles! CIM 640 Final Project
// by Natalie Kaminsky

var mostrecentword = "";

var fish;

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
	// sound credit: Glaneur de sons, "bubbles (1)"
	// at http://www.freesound.org/people/Glaneur%20de%20sons/sounds/104949/
}

function popMode() {
	popModeOn = !popModeOn;

	if (popModeOn) {
		popButton.removeClass('normal');
		popButton.addClass('pressed');
		if (bounceModeOn) {
			bounceMode();
		}
	} else {
		popButton.removeClass('pressed');
		popButton.addClass('normal');
	}
}

function bounceMode() {
	bounceModeOn = !bounceModeOn;
	if (bounceModeOn) {
		bounceButton.removeClass('normal');
		bounceButton.addClass('pressed');
		if (popModeOn) {
			popMode();
		}
	} else {
		bounceButton.removeClass('pressed');
		bounceButton.addClass('normal');
	}
}

function partyMode() {
	partyModeOn = !partyModeOn;
	if (partyModeOn) {
		partyButton.removeClass('normal');
		partyButton.addClass('pressed');
	} else {
		partyButton.removeClass('pressed');
		partyButton.addClass('normal');
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	wordBubbles = new Group();

	fish = createSprite(random(0, width), random(0,height));
	fish.addAnimation("normal","assets/fish2.png");
	fish.mass = 1;
	fish.setCollider("circle", 0, 0, spriteSize/1.8);

	popButton = createButton('Pop');
  	popButton.position(windowWidth/2 - 140, windowHeight - 70);
	popButton.mousePressed(popMode);
  	popButton.addClass('normal');

  	bounceButton = createButton('Bounce');
  	bounceButton.position(windowWidth/2 - 40, windowHeight - 70);
	bounceButton.mousePressed(bounceMode);
  	bounceButton.addClass('normal');

  	partyButton = createButton('Party');
  	partyButton.position(windowWidth/2 + 80, windowHeight - 70);
	partyButton.mousePressed(partyMode);
  	partyButton.addClass('normal');
 
	myRec.onResult = parseResult; // recognition callback
	myRec.onError = handleError;
	myRec.onEnd = recognitionEnded;
	myRec.start();
	
}

function draw() {
	background(77, 148, 255);
	stroke(230, 172, 0); // brown
	strokeWeight(3);
	fill(255, 219, 102); // orangey 
	ellipse(windowWidth/2, windowHeight, width + 100, windowHeight/3);

	stroke("#de257e");
	textAlign(CENTER);
	textSize(windowWidth/8);
	textFont("Impact");
	text("WUBBLES!", windowWidth/2, windowHeight - 450);

	fish.position.x = mouseX;
	fish.position.y = mouseY;

	if (fish.position == fish.previousPosition) {
		}
	    else if (fish.position > fish.previousPosition) {
		fish.mirrorX(-1);
 		}
 	    else {
   		fish.mirrorX(1);
   		}

	if (bounceModeOn) {
		wordBubbles.bounce(wordBubbles);
		fish.mass = 1;
		fish.displace(wordBubbles);
	} 

	for (var i = 0; i < allSprites.length; i++) {
		var s = allSprites[i];
	 	if (s.position.x<0) {
	    s.position.x = 1;
	    s.velocity.x = abs(s.velocity.x);
	  	}
	  
	 	if (s.position.x > windowWidth) {
	    s.position.x = width-1;
	    s.velocity.x = -abs(s.velocity.x);
	    }
	  
	 	if (s.position.y < 0) {
	    s.position.y = 1;
	    s.velocity.y = abs(s.velocity.y);
	  	}
	  
	 	if (s.position.y > windowHeight) {
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

	mostrecentword = myRec.resultString.split(' ').pop();

	var wordBubbleSprite = createSprite(random(windowWidth/2),random(windowHeight/2), spriteSize, spriteSize);
	wordBubbleSprite.word = mostrecentword;
	wordBubbleSprite.addSpeed(random(2),random(50));
	wordBubbles.add(wordBubbleSprite);
	wordBubbleSprite.mass = 1;
	wordBubbleSprite.setCollider("circle", 0, 0, spriteSize/2);
	
	wordBubbleSprite.startColor = color(random(0, 255), random(0, 255), random(0, 255), 160);
  	wordBubbleSprite.endColor = color(random(0, 255), random(0, 255), random(0, 255), 160);
  	wordBubbleSprite.counter = 0;
  	wordBubbleSprite.restitution = 1;

	wordBubbleSprite.draw = function () {

		if (partyModeOn) {
    		this.counter += .01;
    		if (this.counter >= 1) {
    			var startColor = this.startColor;
    			this.startColor = this.endColor;
    			this.endColor = startColor;
    			this.counter = 0;
    			}
    			partyColor = (lerpColor(this.startColor, this.endColor, this.counter));
    			fill(partyColor);
		} else {
			fill(179, 255, 255, 90);
		}
		
		strokeWeight(1);
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
		}
	}

	{
	wordBubbleSprite.debug = false;
	console.log(mostrecentword);	
	}
}

function recognitionEnded () {
	mostrecentword = myRec.resultString;//.split(' ').pop();
	console.log("Recognition Ended:" + mostrecentword);
	myRec.start();
}

function handleError() {
	console.log("Recognition Error");
}
