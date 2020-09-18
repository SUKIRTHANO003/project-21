var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 25, 5);
  bullet.shapeColor = color("white");
  speed = random(55,90);
  bullet.velocityX = speed;
  weight = random(400,1500);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0); 
  
  if (wall.x - bullet.x < bullet.width/2 + wall.width/2
    && bullet.x - wall.x < bullet.width/2 + wall.width/2
    && wall.y - bullet.y < bullet.height/2 + wall.height/2
    && bullet.y - wall.y < bullet.height/2 + wall.height/2){
    bullet.velocityX = 0;

    var deformation = 0.5*weight*speed*speed/22509;

    if(deformation < 180){
      wall.shapeColor = color("red");
    }

    if(deformation < 180 && deformation > 100){
      wall.shapeColor = color("yellow");
    }

    if(deformation > 100){
      wall.shapeColor = color("green");
    }
  }

  drawSprites();
}