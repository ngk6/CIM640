var umiamiWord = [];
var wordIndex = [];

function setup() {
	createCanvas(windowWidth, windowHeight); 
	umiamiWord = ["Canes!", "Orange!", "Green!", "Sebastian!", "UM!"];
	wordIndex = 0;
}

function draw() {
	background(25, 117, 25);
	textSize(40);
	textAlign(CENTER);
	fill(2255, 131, 48);
	text(umiamiWord[wordIndex], width/2, height/2);
}

function mousePressed() {
	wordIndex = floor(random(umiamiWord.length));
	
	}
