const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var bullet;
var wall;

function setup() {
    var canvas = createCanvas(1600,400);

    engine = Engine.create();
    world = engine.world;

    bullet = new Bullet(250,200,50,50);
    bullet.velocityX = 10;
    wall = new Wall(1200,200,80,380);
}

function draw() {
  background(0);  
  bounceOff(bullet,wall);                   
  Engine.update(engine);

  bullet.display();
  wall.display();

  drawSprites();
}
function bounceOff(object1,object2){

  if(object1.y - object2.x < object2.width/2 + object1.width/2
    && object2.y - object1.x < object2.width/2 + object2.width/2){
       object1.velocityY = object.velocityY * (-1);
       object2.velocityY = object2.velocityY * (-1);
    }
    if(object1.X - object2.X < object2.width/2 + object1.width/2
      && object2.X - object1.X < object2.width/2 + object2.width/2){
         object1.velocityX = object.velocityX * (-1);
         object2.velocityX = object2.velocitX * (-1);
    }
    
}