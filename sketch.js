const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var groundOptions = {
    isStatic: true
  }
  var ballOptions = {
    restitution: 1
  }
  ground = Bodies.rectangle(200,380,400,10,groundOptions);
  World.add(world,ground);

  ball = Bodies.circle(200,200,20,ballOptions);
  World.add(world,ball);

}

function draw() {
  background('gray');  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}