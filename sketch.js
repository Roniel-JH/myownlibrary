
var movrect, fixrect;
var r1,r2,r3,r4;
var ob1,ob2;

function setup() {
  createCanvas(400,400);
  movrect=createSprite(200,200,10,50)
  fixrect=createSprite(100,200,10,10)
  r1=createSprite(50,200,10,10)
  r2=createSprite(150,10,10,10)
  r3=createSprite(150,300,10,10)
  r4=createSprite(300,200,10,10)
  r1.velocityX=3;
  r4.velocityX=-3;

  r3.velocityY=-3;
  r2.velocityY=3;
  
}




function draw() {
  background("blue"); 
  movrect.x=mouseX;
  movrect.y=mouseY;
if(isTouching(movrect,r4)){
  movrect.shapeColor="green";
  r4.shapeColor="green";
}else
{
  movrect.shapeColor="red";
  r4.shapeColor="red"}


drawSprites();
}
