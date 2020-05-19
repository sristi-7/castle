var castle;
var castle2;
var castle3;
var castle4;
var castle5;
var castle6;
var castle7;
var castle8;
var castleTop1;
function setup() {
  createCanvas(1600,400);
  
}

function draw() {
  background("blue"); 
  castle=createSprite(450,300,43,300) ;
  
  castle2=createSprite(400,350,43,500);
  castle3=createSprite(500,350,43,300);
  castle4=createSprite(510,350,45,300);
  castle5=createSprite(560,350,43,400);
  castle6=createSprite(610,350,43,500);
  castle7=createSprite(660,350,43,200);
  castle8=createSprite(349,350,43,200);
  castleTop1=createSprite(505,157,50,50);

  drawSprites();
}