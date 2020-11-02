const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ourEngine, ourWorld;

var box1 , box2,ground;

function setup(){
  createCanvas(800,400);

  ourEngine = Engine.create();
  
  ourWorld = ourEngine.world;

  box1= new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);
  console.log(box2.body.position.x);
  console.log(box2.body.position.y);
  
  console.log(box2.body.angle);
  

  ground=new Ground(400,390,800,20);

  

}

function draw(){
  background(220);
  Engine.update(ourEngine);
  box1.display();
  box2.display();
  ground.display();
  
}