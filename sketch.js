var rect1, rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(250, 200, 40, 80);
  rect1.shapeColor = "blue";

  rect2 = createSprite(550, 200, 80, 40);
  rect2.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);  

  rect2.x = mouseX;
  rect2.y = mouseY;
  console.log(rect2.x);
  console.log(rect1.x);
  console.log(rect2.x-rect1.x);
  console.log(rect1.width/2+rect2.width/2);

  if(rect2.x-rect1.x <  rect1.width/2+rect2.width/2
    && rect1.x-rect2.x < rect1.width/2+rect2.width/2
    && rect2.y-rect1.y <  rect1.height/2+rect2.height/2
    && rect1.y-rect2.y < rect1.height/2+rect2.height/2){
    
    rect1.shapeColor = "red";
    rect2.shapeColor = "green";
  }
  else {
    rect1.shapeColor = "blue";
    rect2.shapeColor = "blue";
  }

  drawSprites();
}