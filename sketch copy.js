var movingRect, gameObject1, gameObject2, gameObject3, gameObject4;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,400,80,30);
  gameObject1= createSprite(400,100,30,50);
  // gameObject2= createSprite(160,50,30,50);
  // gameObject3= createSprite(220,50,30,50);
  // gameObject4= createSprite(280,50,30,50);

  

  movingRect.shapeColor= "green";
  gameObject1.shapeColor="green";

  movingRect.debug=true;
  gameObject1.debug= true;
  // gameObject2.debug= true;
  // gameObject3.debug= true;
  // gameObject4.debug= true;

  movingRect.velocityY=-2;
  gameObject1.velocityY=2;


  
}

function draw() {
  background(255,255,255); 
  bounceOff(movingRect,gameObject1)


  drawSprites();
}

