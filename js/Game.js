class Game {
    constructor() {
  
    }

    getState() {
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", function (data) {
        gameState = data.val();
      })
  
    }
  
    update(state) {
      database.ref('/').update({
        gameState: state
      });
    }
    async start() {
      if (gameState === 0) {
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if (playerCountRef.exists()) {
          playerCount = playerCountRef.val();
          player.getCount();
          
        }
        form = new Form();
        form.display();
      }

      player1 = createSprite(200, 500);
      player2 = createSprite(800, 500);
      players = [player1, player2];


      sheildobjLeft = createSprite(300,500);
      sheildobjLeft.addImage(shieldblockRight);
      sheildobjLeft.scale = 0.55;
      sheildobjLeft.visible = false;

      sheildobjRight = createSprite(750,500);
      sheildobjRight.addImage(shieldblockLeft);
      sheildobjRight.scale = 0.55;
      sheildobjRight.visible = false;  

    }
  
    play() {
      
        form.greeting.hide();
        form.button.hide();
        form.input.hide();
        form.title.hide();
        form.sel.hide();
        form.sbutton.show();
      Player.getPlayerInfo();     
      background(back_img);
      image(back_img, 0, 0, 1000, 800);

      if(player.health === 2){
        image(health3,30,50);
      }else if(player.health === 1){
        image(health2,30,50);
      }else if(player.health <= 0){
      image(health1,30,50);
      }else{
        image(health4,30,50);
      }

     var x = 100;
      var y = 200;
      var index = 0;
      drawSprites();
      textSize(32);
      for (var plr in allPlayers) {
        if (plr == "player1" || plr === "player2") {
  
          index = index + 1;
          x = displayWidth-allPlayers[plr].distance;
          y = 500;
  
         players[index - 1].x = x;
         players[index - 1].y = y;

          switch(allPlayers[plr].costume){
            case "basketball" : players[index-1].addImage(basketballRight);
              break;
            case "golf" : players[index-1].addImage(golfRight);
              break;
            case "rugby" : players[index-1].addImage(rugbyRight);
              break;
            case "soccer" : players[index-1].addImage(soccerRight);
              break;
            case "tennis" : players[index-1].addImage(tennisRight);
              break;
            case "volleyball" : players[index-1].addImage(volleyballRight);
              break;
            default : break;
          }
  
          if(sheildobjRight.visible === true){
            players[index-1].collide(sheildobjRight);
           }
   
           if(sheildobjLeft.visible === true){
             players[index-1].collide(sheildobjLeft);
           }

          }
      }
  
      
  
      if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
        if(player.orientation === "right"){}
        else {
          switch(player.costume){
            case "basketball" : players[index-1].addImage(basketballRight);
              break;
            case "golf" : players[index-1].addImage(golfRight);
              break;
            case "rugby" : players[index-1].addImage(rugbyRight);
              break;
            case "soccer" : players[index-1].addImage(soccerRight);
              break;
            case "tennis" : players[index-1].addImage(tennisRight);
              break;
            case "volleyball" : players[index-1].addImage(volleyballRight);
              break;
            default : break;
          }
          player.orientation = "right"
        }

        player.distance -= 5;
        player.update();
      }
      if (keyIsDown(LEFT_ARROW) && player.index !== null) {
        if(player.orientation === "left"){}
        else {
          switch(player.costume){
            case "basketball" : players[index-1].addImage(basketballLeft);
              break;
            case "golf" : players[index-1].addImage(golfLeft);
              break;
            case "rugby" : players[index-1].addImage(rugbyLeft);
              break;
            case "soccer" : players[index-1].addImage(soccerLeft);
              break;
            case "tennis" : players[index-1].addImage(tennisLeft);
              break;
            case "volleyball" : players[index-1].addImage(volleyballLeft);
              break;
            default : break;
          }
          player.orientation = "left"
        }
        player.distance += 5;
        player.update();
      }
  

   
      if(keyWentDown("v")){
        //delay(2);
        player.health -=1;
        player.update()
     }

      
  
  
  if (player.health <= 0){
    this.end();
  }
  
  
  }
  end(){
    var wda = createSprite(500,300,1000, 600);
    wda.shapeColor = "white"
    wda.display();
    form.sbutton.hide()
    push()
    fill("black")
    textSize(40)
    textFont("bold")
    text("You Loose! Other Team wins!", 250,300)
    pop()
  }
     
}
