
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(400,750,800,100)
	dusbin = new Dustbin(650,650) 
	paper = new Paper(100,100)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dusbin.display()
  paper.display()
  ground.display()
  if (keyWentDown("up")){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:.4,y:-.4})
}

  drawSprites();
 
}



