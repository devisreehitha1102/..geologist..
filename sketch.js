const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ground;

var hammer;

var stone;

var rubber;

var sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand9, sand10;

var iron;

function setup(){
	createCanvas(1000, 600);

   engine = Engine.create();
   world = engine.world;

	ground = new Ground(500, 592, 1000, 15);
	
	hammer = new Hammer(200, 300, 100, 25);

	stone = new Stone(700, 300, 90, 90);

	rubber = new Rubber(100, 400, 60, 70);

	sand1 = new Sand(350, 440, 5, 5);

	sand2 = new Sand(410, 400, 5, 5);

	sand3 = new Sand(450, 450, 5, 5);

	sand4 = new Sand(490, 480, 5, 5);

	sand5 = new Sand(390, 500, 5, 5);

	sand6 = new Sand(500, 380, 5, 5);

	sand7 = new Sand(550, 470, 5, 5);

	sand8 = new Sand(600, 550, 5, 5);

	sand9 = new Sand(530, 430, 5, 5);

	sand10 = new Sand(400, 340, 5, 5);

  iron = new Iron(870, 200, 80, 50);

	Engine.run(engine);
  
}

function draw(){
  rectMode(CENTER);

  background("rgb(50, 180, 225)");

  Matter.Engine.update(engine);

  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  iron.display();

  drawSprites();
 
}
