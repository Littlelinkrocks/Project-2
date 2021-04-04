var userScore = 0;
var computerScore = 0;

var computerChoice = Math.random();

var computerChoice = computerChoice < 0.34 ? "rock" : ( computerChoice > 0.67 ? "scissors" : "paper" ) ;

var mess = { 
  rock : { scissors : 'You Win', paper : 'You lose'} ,
  paper : { rock : 'You Win', scissors : 'You lose' },
  scissors : { paper : 'You Win', rock : 'You lose' }
}
for (let step = 0; step < x; step++) {
  var playerChoice = window.prompt("Do you choose rock, paper or scissors ?");

var computerChoice = Math.random();

var computerChoice = computerChoice < 0.34 ? "rock" : ( computerChoice > 0.67 ? "scissors" : "paper" ) ;

var mess = { 
  rock : { scissors : 'You Win', paper : 'You lose'} ,
  paper : { rock : 'You Win', scissors : 'You lose' },
  scissors : { paper : 'You Win', rock : 'You lose' }
}

if ( computerChoice === playerChoice)
  result = "It's a tie!" ; 


else
  result = mess[playerChoice][computerChoice] ;

console.log(  ' ( ' + result + ' ) ') ;
if ( userScore > computerScore) {
  

console.log(x);
}
}
