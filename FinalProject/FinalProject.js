var mostrecentword = "";

var face;

var popModeOn = false;
var bounceModeOn = false;
var partyModeOn = false;

var wordBubbles;
var spriteSize = 80;

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

	var button = createButton('Pop!');
  	button.position(250, 30);
  	button.mousePressed(popMode);

  	var button = createButton('Bounce!');
  	button.position(250, 60);
  	button.mousePressed(bounceMode);

  	var button = createButton('Party!');
  	button.position(250, 90);
  	button.mousePressed(partyMode);
 
	myRec.onResult = parseResult; // recognition callback
	myRec.onError = handleError;
	myRec.onEnd = recognitionEnded;
	myRec.start();
	
}

function draw() {
	background('white');
	// wordBubbles.collide(wordBubbles);

	face.position.x = mouseX;
	face.position.y = mouseY;

	if (bounceModeOn) {
		wordBubbles.bounce(wordBubbles);
	} 

	if (partyModeOn) {
		if(mouseIsPressed) {
    		face.rotation -= 10;
		}
	}

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
	// wordBubbleSprite.mouseActive = true;
	wordBubbleSprite.setCollider("circle", 0, 0, spriteSize/2);
	wordBubbleSprite.draw = function () {
		// var startColor = color(0, 0, 255);
		// var endColor = color(255, 0, 0);
		// counter = 0;
		// wordBubbleSpriteColor = lerpColor(startColor, endColor, counter);

		fill(128, 224, 255, 90);
		stroke(128, 224, 255);
		ellipse(0, 0, spriteSize, spriteSize);

		fill('black');
		noStroke();
		textAlign(CENTER);
		text(this.word, 0, 0);

		if (partyModeOn) {
			//face.rotation -= 10;
    		wordBubbleSprite.rotation -= 10;
    		//wordBubbleSprite.wordBubbleSpriteColor = lerpColor(startColor, endColor, counter);
		}
	}

	wordBubbleSprite.lerpColor = function() {
		var startColor = color(0, 0, 255);
		var endColor = color(255, 0, 0);
		counter = 0;
		wordBubbleSpriteColor = lerpColor(startColor, endColor, counter);

		if (partyModeOn) {
			wordBubbleSprite = (wordBubbleSpriteColor);
			wordBubbleSprite.rotation -= 10;
			counter = counter + .01;
    		wordBubbleSprite.wordBubbleSpriteColor = lerpColor(startColor, endColor, counter);
		}
	}

	wordBubbleSprite.onMousePressed = function() {
		console.log("PRESSED SPRITE");
		if (popModeOn) {
			this.remove();
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






