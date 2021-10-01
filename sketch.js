const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane;
var block1, block2;
var rotator1, rotator2, rotator3;
var angle1 = 60;
var angle2 = 100;
var angle3 = 150;
var p1, p2, p3, p4, p5;



function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var plane_options = {
		isStatic: true
	  
	  }

	  var particle_options={
        restitution: 0.4,
        friction: 0.02
	  }

	  p1 = Bodies.circle(340, 0, 20, particle_options);
	  World.add(world, p1);

	  p2 = Bodies.circle(360, 0, 20, particle_options);
	  World.add(world, p2);

	  p3 = Bodies.circle(310, 0, 20, particle_options);
	  World.add(world, p3);

	  p4 = Bodies.circle(370, 0, 20, particle_options);
	  World.add(world, p4);

	  p5 = Bodies.circle( 354, 0, 20, particle_options);
	  World.add(world, p5);

	  
	plane = Bodies.rectangle(400, 590, 800, 20, plane_options);
	World.add(world, plane);

 block1 = Bodies.rectangle(150, 400, 100, 20,  plane_options);
 World.add(world, block1);

block2 = Bodies.rectangle(600, 400, 100, 20,  plane_options);
 World.add(world, block2);

 rotator1 = Bodies.rectangle(380, 250, 100, 20,  plane_options);
 World.add(world, rotator1);

 rotator2 = Bodies.rectangle(380, 250, 100, 20,  plane_options);
 World.add(world, rotator2);

 rotator3 = Bodies.rectangle(380, 250, 100, 20,  plane_options);
 World.add(world, rotator3);

fill("brown");
ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  
  background("green");
  Engine.update(engine);
  


  rectMode(CENTER);
  rect(plane.position.x, plane.position.y, 800, 20);
  rect(block1.position.x, block1.position.y, 100, 20);
  rect(block2.position.x, block2.position.y, 100, 20);

  ellipse(p1.position.x, p1.position.y, 20);
  ellipse(p2.position.x, p2.position.y, 20);
  ellipse(p3.position.x, p3.position.y, 20);
  ellipse(p4.position.x, p4.position.y, 20);
  ellipse(p5.position.x, p5.position.y, 20);


  Matter.Body.rotate(rotator1,angle1)
   push();
   translate(rotator1.position.x,rotator1.position.y); 
   rotate(angle1); 
   rect(0,0,150,20);
    pop(); 
   angle1 +=8.0;

   Matter.Body.rotate(rotator2,angle2)
   push();
   translate(rotator2.position.x,rotator2.position.y); 
   rotate(angle2); 
   rect(0,0,150,20);
    pop(); 
   angle2 +=6.0;

   Matter.Body.rotate(rotator3,angle3)
   push();
   translate(rotator3.position.x,rotator3.position.y); 
   rotate(angle3); 
   rect(0,0,150,20);
    pop(); 
   angle3 +=6.0;


  drawSprites();

  
}



