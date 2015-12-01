var sprite;
var angle;
var speed;

function setup() {
  createCanvas(windowWidth,windowHeight);
  sprite = createSprite(width/2, height/2, 50, 50);
  speed = 1;
  angle = 270;
}

function draw() {
  background(255,255,255);  
  sprite.setSpeed(speed, angle);
  drawSprites();
  checkForWallCollisions();

}

function checkForWallCollisions() {
  if (sprite.position.x > width) {
    angle = 180;
  }

  if (sprite.position.x < 0) {
    angle = 0;
  }

  if (sprite.position.y > height) {
    angle = 270;
  }

  if (sprite.position.y < 0) {
    angle = 90;
  }

}