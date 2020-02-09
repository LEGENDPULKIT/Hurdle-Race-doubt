class Game
{
    constructor()
    {

    }
    getState()
    {
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data)
        {
           gameState = data.val();
        })
       
      }
      update(state)
      {
        database.ref('/').update({
          gameState: state
        });
      }
    
      async start()
      {
      
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
    
        
        
        athelet2 = createSprite(200,300);
        athelet2.addImage("runner",run1);
        athelet2.scale=0.5;
        athelet3 = createSprite(200,700);
        athelet3.addImage("runner",run1);
        athelet3.scale=0.5;
        
       
       
        
        athelets.push(athelet2);
        athelets.push(athelet3);
      }
      play(){
        form.hide();
        
        drawSprites();
        Player.getPlayerInfo();
        
        if(allPlayers !== undefined){
           // background(rgb(55,205,125));
            //image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
          
          
          
          //index of the array
          var index = 0;
    
         
          var x = 200 ;
          var y;
    
          for(var plr in allPlayers){
            //add 1 to the index for every loop
            index = index + 1 ;
    
            //position the cars a little away from each other in x direction
            y = y + 200;
            //use data form the database to display the cars in y direction
            x = displayWidth - allPlayers[plr].distance;
            console.log(allPlayers[plr].distance);
            athelets[index-1].x = x;
            athelets[index-1].y = y;
    
            if (index === player.index){
              stroke(10);
              fill("red");
              ellipse(x,y,60,60);
              athelets[index - 1].shapeColor = "red";
              camera.position.x = displayHeight/2;
              camera.position.y = athelets[index-1].x;
            }
           
            
          }
    
        }
    
        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance=player.distance+10
          player.update();
        }
       
      }
    

    
}