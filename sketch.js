var bullet;
var wall;
var speed;
var weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);
 
  speed = random(55,90);
  weight = random(400,1500);

  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
}

function draw() {
  background("black")
  
  bullet.velocityX = speed;

  if(bullet.isTouching(wall)) {
   damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
   bullet.velocityX = 0;
   
   if(damage>10) {
   wall.shapeColor = "red";
   }

   else if(damage<10) {
     wall.shapeColor = "green";
   }
 }
  drawSprites();
}