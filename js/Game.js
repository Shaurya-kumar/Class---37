class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
   
  play(){

  form.hide()
  text("Game start",100,100)
  Player.getPlayerInfo()

  
  if(allPlayers !== undefined){
    var Position = 130 
for(var plr in allPlayers){

if(plr === "player"+player.index){

  fill("red")

}
else{

 fill("black")

}
    
    Position = Position + 30
    text(allPlayers[plr].name+":" + allPlayers[plr].distance,100,Position)
}
  } 
if(keyIsDown(UP_ARROW) && player.Index !== null){

player.distance = player.distance + 1
player.update()

}
  }



}
