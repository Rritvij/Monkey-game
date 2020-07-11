var monkey,monkey_running;
var ground;
var banana,banana_spawn;
var score ;


function preload(){
  
  monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png")
  
  bananaImage=loadImage("Banana.png");
  obstacleImage=loadImage("stone.png");
  
 
  
}


function setup() {
  createCanvas(600,300);
  
  monkey=createSprite(100,250,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  bananaGroup = new Group();
  obstacleGroup= new Group();
  
  score = 0;
  
  
  
 
  
ground=createSprite(100,280,1000,2);
  
}


function draw(){
 background(255); 
  
  monkey.collide(ground);
  
  
   if(keyDown("space") && monkey.y>=250){
      monkey.velocityY = -10 ;
     
     

    }
  
   // console.log(monkey.y);
  
  stroke("black");
  textSize(20);
  fill("black"); 
  text("score"+score,500,50);
  
  monkey.velocityY=monkey.velocityY+0.5;
  
  if (bananaGroup.isTouching(monkey)){
      score=score+2;
      
}
  
  if (monkey.isTouching(obstacleGroup)){
     
}
  drawSprites ();
 drawbanana();
 drawobstacles();

  
}


function drawbanana (){
  
if (frameCount%100===0) { 
 banana = createSprite(600, 150,10,10);
banana.addImage(bananaImage);
banana .scale=0.06;
banana.velocityX=-4;
  bananaGroup.add(banana);
  
  switch(score){
    
    case 10: monkey.scale=0.12;
      break;
      case 20: monkey.scale=0.14;
      break;
      case 30: monkey.scale=0.16;
      break;
      case 40: monkey.scale=0.18;
      break;
      default:break;
      
      
  }

  
 }
  
}

function drawobstacles (){
  
if (frameCount%100===0) { 
 rock = createSprite(600, 250,10,10);
rock.addImage(  obstacleImage);
rock .scale=0.2;
rock.velocityX=-4;
  obstacleGroup.add(rock);
  
  

  
 }
  
}