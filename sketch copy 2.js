const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ourEngine, ourWorld;

var ground, bouncing_ball;

function setup(){
  createCanvas(800,400);

  ourEngine = Engine.create();
  
  ourWorld = ourEngine.world;

  var options = {
    isStatic : true
    
  }

  ground = Bodies.rectangle(400,390,800,20,options);
  
  World.add(ourWorld,ground);
  console.log(ground);
   var ball_options={
     restitution:1.0
   }

  bouncing_ball=Bodies.circle(400,100,20,ball_options);
  World.add(ourWorld,bouncing_ball);
  console.log(bouncing_ball);

}

function draw(){
  background(220);
  Engine.update(ourEngine);
  rectMode(CENTER);
  fill("brown");
  stroke("green");
  rect(ground.position.x,ground.position.y,800,20);

  fill(255);
  ellipseMode(RADIUS);
  ellipse(bouncing_ball.position.x,bouncing_ball.position.y,20,20);
}