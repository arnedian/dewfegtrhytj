








function setup(){
  createCanvas(1200, 650)
  aiden = createSprite(300, 200, 300, 300);
  button = createButton('Race');
  button.position(displayWidth/2 + 30, displayHeight/2);
  button = createButton('Shop cars');
  button.position(displayWidth/2 + 120, displayHeight/2);
}

function draw(){
  background("green");
  drawSprites();
}