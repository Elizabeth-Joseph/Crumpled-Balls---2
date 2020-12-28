
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground, paper1;

function preload(){

dustImg=loadImage("dustbingreen.png")
 bgImg= loadImage("bg12.jpg")


}
function setup() {
	 createCanvas(1000,700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper1= new Paper(100,450,60,60);

	ground= new Ground(200,690,2000,10);

	bin = createSprite(835, 585,170,170);
    bin.addImage(dustImg);
    bin.scale = 0.60;

	dustbin2=new Dustbin(770,630,20,100);
	dustbin3=new Dustbin(900,630,20,100);

	Engine.run(engine);
  
}


function draw() {
  background(bgImg);

  Engine.update(engine);

  fill("white")

  paper1.display();
  ground.display();
  //dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:220,y:-245});
	}
}