var player , wormGroup , score = 0 , frogimg , swampimg , wormimg , swamp;


function preload() {

  //load game assets
  frogimg = loadImage("Images/frog.png")
  swampimg = loadImage("Images/swampImg.png")
  wormimg = loadImage("Images/worm.png")
  
}


function setup() {
  createCanvas(600,600);

  swamp = createSprite(300,300)
  swamp.addImage(swampimg)
  swamp.scale = 2.5

  player = createSprite(40,550,30,30);
  player.addImage(frogimg)
  player.scale = 0.4
  wormGroup = new Group();
}

function draw() {
  background("black");
  stroke("red")
  noFill();
  ellipse(100,350,40,30)
  
  player.x = mouseX
  player.y = mouseY

  if(player.x<150 && player.x>90 && player.y>340 && player.y<380){
    text("No Cheating" , 200,200)
    player.x = 30;
    player.y = 30;
  }
  generateWorms();

  for(var i = 0; i<wormGroup.length; i++){
    var temp = wormGroup.get(i)
    if(player.isTouching(temp)){
      score++
      temp.destroy()

    }
  }

  drawSprites();
  textSize(20)
  text("worms destroyed : " +score,350,50)

}

function generateWorms() {
  if(frameCount%20==0){
    var worm = createSprite(random(40,380),random(290,380),40,5)
  worm.shapeColor = "green"
  worm.addImage(wormimg)
  worm.scale = random(0.1,0.3)
  worm.velocityX = random(-6,6);
  worm.velocityY = random(-6,6);
  console.log(frameCount);
  wormGroup.add(worm);
  }
  
}


