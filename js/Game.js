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
        form = new Form()
        form.display();
      }

      player1 = createSprite(200, 500);
      player2 = createSprite(800, 500);
      players = [player1, player2];
  
    }
  
    play() {
  
      form.hide();
      Player.getPlayerInfo();
    
      background(back_img);
      image(back_img, 0, 0, 1000, 800);
     var x = 100;
      var y = 200;
      var index = 0;
      drawSprites();
      textSize(32);
      for (var plr in allPlayers) {
        if (plr == "player1" || plr === "player2") {
  
          index = index + 1;
          x = x + 600
          y = 500;
  
      //     players[index - 1].x = x;
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
  
          if (index === player.index) {
            // to display player name on the basket.
            stroke("black");
            textSize(25);
            fill("black");
            text(allPlayers[plr].name ,x-25,y+25);  
          }
  
          //text to display player score.
          stroke("white");
          textSize(25);
          fill("white");
          text(`Player${index}:${allPlayers[plr].score}`, 50, index * 50);
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
        player.update();
      }
  
  
     
  
  
  if (player.score >= 100){
    this.end()
  }
  
  
    }
  
    end() {
     // console.log("Game Ended");
     // game.update(2);
     // clear();
     // fill("blue")
     // textSize(40)
     // text("GAME OVER!", 350,300)
    }
  }