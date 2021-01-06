var fixedRect, movingRect;

var obj1,obj2,obj3,obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(150,100,50,50);
  obj2 = createSprite(350,100,50,50);
  obj3 = createSprite(550,100,50,50);
  obj4 = createSprite(750,100,50,50);

  obj1.shapeColor = "yellow";
  obj2.shapeColor = "yellow";
  obj3.shapeColor = "yellow";
  obj4.shapeColor = "yellow";

  obj1.velocityX=1;
 // obj2.velocityX=1;
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;




if(isTouching(movingRect,obj1)){

  movingRect.shapeColor = "pink";
  obj1.shapeColor = "pink";

}
else
{
  movingRect.shapeColor = "green";
  obj1.shapeColor = "yellow";

}

bounceOff(obj1,obj2)
  
  drawSprites();
}
