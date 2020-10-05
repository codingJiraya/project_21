
var car,wall,thickness;
var speed,weight,deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500) ;
  thickness = random(22,83);
  deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500,200,thickness,height/2);

  
}

function draw() {
  background(255,255,255);  

if(wall.x-car.x<(car.width+wall.width)){
car.velocityX = 0;


if(deformation<10){
wall.shapeColor = color("green");
}

if(deformation>10){
  wall.shapeColor = color("red");
}

  
  
  }
  drawSprites();
}