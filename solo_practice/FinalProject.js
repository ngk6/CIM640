var bubbles = [];
var word;

var Bubble = function () {

}

var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)


function setup() {
   	createCanvas(windowWidth, windowHeight);
   	
	myRec.onResult = parseResult; // recognition callback
	myRec.start(); // start engine

}

function draw() {
		textSize(20);
		textAlign(LEFT);
		text(word, 20, 20);
}
  // draw stuff here
 

function parseResult()
{
	// recognition system will often append words into phrases.
	// so hack here is to only use the last word:
	var mostrecentword = myRec.resultString.split(' ').pop();
	// if(mostrecentword.indexOf("left")!==-1) { dx=-1;dy=0; }
	// else if(mostrecentword.indexOf("right")!==-1) { dx=1;dy=0; }
	// else if(mostrecentword.indexOf("up")!==-1) { dx=0;dy=-1; }
	// else if(mostrecentword.indexOf("down")!==-1) { dx=0;dy=1; }
	// else if(mostrecentword.indexOf("clear")!==-1) { background(255); }
	console.log(mostrecentword);
	word = mostrecentword;
}






