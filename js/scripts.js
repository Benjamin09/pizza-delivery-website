//Bussiness Logic

    //Random Number Generator
function Dice () {
  this.die = 1;
  this.dieValue = 0;
};

Dice.prototype.roll = function() {
  this.die = Math.floor((Math.random()* 6) +1);
  if (this.die === 1){
    this.dieValue = 0;
  } else {
  this.dieValue = this.die;
  }
};

function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.totalScore = 0;
  this.currentTurn = false;
  this.dice = new Dice;
};
Player.prototype.scoreCard = function() {
  if (this.dice.dieValue === 0) {
    this.turnScore = 0;
    this.currentTurn = false;
  } else {
    this.turnScore += this.dice.dieValue;
  }
};
Player.prototype.chooseHold = function () {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
};
function Game () {
  this.playerArray = [];
  this.winningScore = 100;
  this.playerIndex = 0;
}

Game.prototype.scoreToWin = function (newScore){
  this.winningScore = newScore;
}

Game.prototype.checkForWinner =function (){
  for (var i=0;i< this.playerArray.length; i++){
    if (this.playerArray[i].totalScore >= this.winningScore){
      return this. playerArray[i].name;

    }
  }
  return false;
}
Game.prototype.nextPlayer = function (){
  var lastPlayer = this.playerIndex;
  if (this.playerIndex === this.playerArray.length-1) {
    this.playerIndex = 0;
    this.playerArray[lastPlayer].currentTurn = false;
    this.playerArray[0].currentTurn = true;
    return;
  }
  this.playerArray[lastPlayer].currentTurn = false;
  this.playerIndex++;
  this.playerArray[this.playerIndex].currentTurn = true;
  return;
}
Game.prototype.roll = function () {
  var activePlayer = this.playerArray[this.playerIndex];
  activePlayer.dice.roll();
  activePlayer.reactToValue();

  var displayScore = '#' + activePlayer.playerID;
  $(displayScore + "p#roll-score").text("Current Roll: " + activePlayer.dice.diceValue);
  $(displayScore + ".current-score").text("Score This Turn: " + activePlayer.turnScore);

  if (activePlayer.dice.diceValue === 0){
    this.nextPlayer();
    $(displayScore + " p#score").text("Player Score:" + active.totalScore);
    this.toggleActiveButtons();
  }
}
Game.prototype.toggleActiveButtons = function() {
  var playerIndex = this.playerIndex;

  $('#'+ this.playerArray[0].playerID + 'button').prop('disabled', true):
  $('#'+ this.playerArray[1].playerID + 'button').prop('disabled', true):
  $('#'+ this.playerArray[activePlayerIndex].playerID + 'button').prop('disabled',false);
  $('#'+ this.playerArray[activePlayerIndex].playerId + 'button.roll')
}

//User Interface Logic
$(function () {
  var currentGame = new Game();
  $("#roll").submit(function(event){
    event.preventDefault();

    var roll = $("#roll");
    var mathRoll = roll;
    var result = mathRoll;
    // var mathRoll = $(".current-score");
    $(".current-score").text(result);
  });
});
