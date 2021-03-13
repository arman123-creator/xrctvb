var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bottombox,leftbox,rightbox;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.8;          

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 630, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 bottombox = createSprite(400,650,200,20);
	 World.add(world,bottombox);
	 bottombox.shapeColor = "red";
	 
	 leftbox = createSprite(300,585,20,150);
	 World.add(world,leftbox);
	 leftbox.shapeColor = "red";
	 
	 rightbox = createSprite(500,585,20,150);
	 World.add(world,rightbox);
	 rightbox.shapeColor = "red";
	 


	Engine.run(engine);
  



}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
   Matter.Body.setStatic(packageBody,false);
     
  }
}




