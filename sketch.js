var fixedRect, movingRect
function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 50);
 fixedRect.shapeColor = "blue";
 fixedRect.debug = true;
 movingRect = createSprite(100,100,50,50);
 movingRect.shapeColor = "blue";
 movingRect.debug = true;
job = createSprite(120, 200,15,10);
cow = createSprite(40,10,50,60);
school = createSprite(150,300,50,23);
job.shapeColor = "blue";
cow.shapeColor = "blue";
school.shapeColor = "blue";
}

function draw() {
  background(56,76,89); 

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(isTouching(movingRect, job)){
  movingRect.shapeColor = "red";
  job.shapeColor = "red";
}else{
  movingRect.shapeColor = "blue";
  job.shapeColor = "blue";
}

  drawSprites();
}

function isTouching(object1, object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.width/2 + object2.width/2){
  return true;
  }else{
   return false;
  }
}