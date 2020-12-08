var fixedRect,movingRect;
var rect1,rect2

function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(300,200,50,100)
  rect1 = createSprite(100,200,30,20)
  rect2  = createSprite(300,200,30,20)
  rect1.velocityX=1;
  fixedRect.velocityX=-1
}

function draw() {
  background("black");  
  //This is collision detection
  movingRect.x =mouseX;
  movingRect.y = mouseY;
 if(isTouching(movingRect,rect2))
{
  movingRect.shapeColor="red"
  rect2.shapeColor="red"
}
else{
  movingRect.shapeColor="green"
  rect2.shapeColor="green"
}
Bounceoff(fixedRect,rect1)
  drawSprites();
}

