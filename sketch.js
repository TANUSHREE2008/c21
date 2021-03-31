var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 400, 50, 80);
  fixedRect.shapeColor = "lightblue";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "lightblue";
  gameObject1 = createSprite(200,200,50,30);
  gameObject2 = createSprite(200,600,50,30);
  gameObject1.shapeColor = "pink";
  gameObject2.shapeColor = "orange";
  //movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
 gameObject1.x = World.mouseX;
 gameObject1.y = World.mouseY;
   if (isTouching(gameObject2,gameObject1)){
    gameObject2.shapeColor = "orange"; 
    gameObject1.shapeColor = "orange";
  }
  else{
    gameObject2.shapeColor = "orange"; 
    gameObject1.shapeColor = "pink";}
  drawSprites();
}

