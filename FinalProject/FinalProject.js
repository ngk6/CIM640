var mostrecentword = "";

var face;

var popModeOn = false;
var bounceModeOn = false;
var partyModeOn = false;

var wordBubbles;
var spriteSize = 80;

var bubbleSound;

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

	face = createSprite(random(0, width), random(0,height));
	face.addAnimation("normal","assets/face.png");

	var button = createButton('Pop');
  	button.position(windowWidth/2 - 140, windowHeight - 80);
  	button.mousePressed(popMode);
  	
  	var button = createButton('Bounce');
  	button.position(windowWidth/2 - 40, windowHeight - 80);
  	button.mousePressed(bounceMode);

  	var button = createButton('Party');
  	button.position(windowWidth/2 + 88, windowHeight - 80);
  	button.mousePressed(partyMode);
 
	myRec.onResult = parseResult; // recognition callback
	myRec.onError = handleError;
	myRec.onEnd = recognitionEnded;
	myRec.start();
	
}

function draw() {
	//background(179, 240, 255);
	background(26, 211, 255);

	fill(255, 219, 102);
	noStroke();
	//rect(0, windowHeight/3*2, width, windowHeight/3);
	ellipse(windowWidth/2, windowHeight, width + 100, windowHeight/3);

	face.position.x = mouseX;
	face.position.y = mouseY;

	if (bounceModeOn) {
		wordBubbles.bounce(wordBubbles);
	} 

	for (var i = 0; i < allSprites.length; i++) {
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
	drawSprite(face);
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
	
	wordBubbleSprite.draw = function () {

		if (partyModeOn) {
			face.rotation -= 10;
    		this.rotation -= 10;
    		fill(color(random(0, 255),random(0, 255),random(0, 255)));
		} else {
			//fill(128, 224, 255, 90);
			//fill(229, 250, 255, 98);
			fill(179, 255, 255, 90);

		}
		
		strokeWeight(2);
		//stroke(128, 224, 255);
		//stroke(0, 184, 230);
		//stroke(0, 50, 102);
		stroke(255);
		ellipse(0, 0, spriteSize, spriteSize);

		//fill(0, 76, 128);
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
