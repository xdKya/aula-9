var sprite;

function setup() {
  createCanvas(400, 400);

  sprite = createSprite(200,200,30,30);
  
}

function draw() {
  background("blue");
  drawSprites();
}