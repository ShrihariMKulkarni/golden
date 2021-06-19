class Game{

constructor(){

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

updateGameState(state){

    database.ref('/').update({gameState:state});
}


async start() {
    if (gameState === 0) {
        player = new Player();
        var playerCountRef = await database.ref('count').once("value");
        if (playerCountRef.exists()) {
            count = playerCountRef.val();
            player.getCount();
        }
        form = new Form()
        form.display();

        
        
    }
}
    

play1(){

    form.hide2();
    Player.getPlayerInfo();
    
    if(allPlayers!== undefined){

for(var i in allPlayers){
    code = new Code();
    code.Q1display();
    console.log(i);

}
  }


}



}