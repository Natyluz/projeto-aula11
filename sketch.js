var mar,navio;
var seaImg,shipImg1;

function preload() {
  seaImg=loadImage("sea.png");
  shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
}

function setup() {
  createCanvas(400,400); 
  background("blue");

  mar=createSprite(400,200);
  mar.addImage(seaImg);
  mar.scale = 0.3;
  mar.velocityX= -5;

  navio=createSprite(130,200,30,30);
  navio.addAnimation("movingShip",shipImg1);
  navio.scale=0.25;
}

function draw() {
  background(0);
   
mar.velocityX=-3;

if (mar.x<0){
  mar.x=mar.width/2;
}
  drawSprites();  
}

