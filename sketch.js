var fixedRect, movingRect;
var gameobject1,gameobject2,gameobject3,gameobject4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1=createSprite(100,100,50,50)
  gameobject2=createSprite(200,100,50,50)
  gameobject3=createSprite(300,100,50,50)
  gameobject4=createSprite(400,100,50,50)
  gameobject1.shapeColor="blue";
  gameobject2.shapeColor="blue";
  gameobject3.shapeColor="yellow";
  gameobject4.shapeColor="yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(gameobject2,movingRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}
function isTouching(object1,object2) {
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    &&object2.x - object1.x < object2.width/2 + object1.width/2
    &&object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) { 
    return true 
    }
    else {
      return false 
    } 
  }
