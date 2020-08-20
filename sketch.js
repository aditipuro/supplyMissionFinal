var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var redBoxLeft, redBoxBottom, redBoxRight;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	redBoxLeft = createSprite(300, 590, 20, 100);
	redBoxBottom = createSprite(400, 640, 200, 20);
	redBoxRight = createSprite(500, 590, 20, 100);

	redBoxLeft.shapeColor = "red";
	redBoxBottom.shapeColor = "red"; 
   redBoxRight.shapeColor = "red";  

    


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:false});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:false} );
 	World.add(world, ground);

	 redBodyBottom = Bodies.rectangle(400, 640, 200, 20,{isStatic:true});
    redBodyLeft = Bodies.rectangle(300, 590, 20, 100,{isStatic:true});
    redBodyRight = Bodies.rectangle(500, 590, 20, 100,{isStatic:true});
    World.add(world, redBodyBottom);
    World.add(world, redBodyLeft);
    World.add(world, redBodyRight);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


 redBoxLeft.x = redBodyLeft.position.x;
  redBoxRight.x = redBodyRight.position.x;
  redBoxBottom.x = redBodyBottom.position.x;

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === 40) {
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:false});
	World.add(world, packageBody);
	packageSprite=createSprite(width/2, 80, 10,10);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
   
   }
}



