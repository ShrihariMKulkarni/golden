var gameState=0;
var count , allPlayers;
var form , game , player , code;


function preload()
{
	
  bg1 = loadImage("images/indiabg.jpg");
  bg2 = loadImage("images/mahabharathbg.jpg")
}

function setup() {
	createCanvas(displayWidth,displayHeight);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}


function draw() {  

  background(bg1);
  textSize(50)
  fill("red")
  text("INDIA : THE MAGNIFICANT" , displayWidth/2-250 , displayHeight/2-170)
  textSize(40)
  fill("orange")
  text("Indian Quiz" , displayWidth/2-80 , displayHeight/2-110)



  if (gameState === 1) {
    game.play1();
  }

  if (count === 3) {
    game.update(1);
  }

  drawSprites();


}



