var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var startback;

var player_img;
var basketballLeft;
var golfLeft;
var rugbyLeft;
var soccerLeft;
var tennisLeft;
var volleyballLeft;
var basketballRight;
var golfRight;
var rugbyRight;
var soccerRight;
var tennisRight;
var volleyballRight;
var shield, shieldblockRight, shieldblockLeft
var health1, health2, health3, health4

function preload(){
  shield = loadImage("images/SHIELD.png");
  health1 = loadImage("images/0h.png")
  health2 = loadImage("images/1h.png")
  health3 = loadImage("images/2h.png")
  health4 = loadImage("images/3h.png")
  

  //right oriented player images
  basketballRight = loadImage("images/Basketball_BrianRight.png");
  golfRight = loadImage("images/Golf_GabeRight.png");
  rugbyRight = loadImage("images/Rugby_RuthRight.png");
  soccerRight = loadImage("images/Soccer_SamRight.png");
  tennisRight = loadImage("images/Tennis_TomRight.png");
  volleyballRight = loadImage("images/Volleyball_VictorRight.png");
  shieldblockRight = loadImage("images/shieldblockRight.png");

  //Left oriented player images
  basketballLeft = loadImage("images/Basketball_BrianLeft.png");
  golfLeft = loadImage("images/Golf_GabeLeft.png");
  rugbyLeft = loadImage("images/Rugby_RuthLeft.png");
  soccerLeft = loadImage("images/Soccer_SamLeft.png");
  tennisLeft = loadImage("images/Tennis_TomLeft.png");
  volleyballLeft = loadImage("images/Volleyball_VictorLeft.png");
  shieldblockLeft = loadImage("images/shieldblockLeft.png");

  startback = loadImage("images/starterimage.png")
  back_img = loadImage("images/backwall.jpg");

  
  
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  background(startback);
  game = new Game();
  game.getState();
  game.start();

 
}

function draw() {
  
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }

}
