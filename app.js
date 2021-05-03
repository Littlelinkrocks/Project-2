
var choices = ["Rock", "Paper", "Scissors"];


var playerScore = 0;
var computerScore = 0;


onEvent("rockButton","click",function(){
  updateScreen("Rock");
});


onEvent("paperButton","click",function(){
  updateScreen("Paper");
});

onEvent("scissorsButton","click",function(){
  updateScreen("Scissors");
});


function updateScreen(playerChoice){
  

  var computerChoice = randomChoose(choices);
  var winner = decideWinner(playerChoice, computerChoice);

  

  if(winner == "Draw"){
    setProperty("gameText","text","Draw!");
  } else if (winner == "Player") {
    setProperty("gameText","text","You win!");
    playerScore++;
    setProperty("playerScoreOutput","text",playerScore);
  } else if (winner == "Computer") {
    setProperty("gameText","text","Computer wins!");
    computerScore++;
    setProperty("computerScoreOutput","text",computerScore);    
  }
}


function findIcon(iconName){
    var currentIcon = "";
    if (iconName == "Rock"){
      currentIcon == icons[0];
    } else if (iconName == "Paper"){
      currentIcon == icons[1];
} else if (iconName == "Scissors"){
      currentIcon == icons[2];
}
return currentIcon;
}


function randomChoose(list){
    var randomItem = list[(randomNumber(0, list.length - 1))];
    return randomItem;
}


function decideWinner(playerChoice, computerChoice){
  var result = "draw";
  if (playerChoice == "Rock"){
  if (computerChoice == "Scissors"){
    result = "Player";
  } else if(computerChoice == "Paper"){
    result = "Computer";
}
  } else if (playerChoice == "Paper"  ){
  
  } else if (playerChoice == "Scissors"  ){
}
  
  return "Player";
}
