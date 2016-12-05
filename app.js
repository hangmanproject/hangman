'use strict';

var players = [];

function playerInfo(name) {
  this.playerName = name;
  this.gamesWon = 0;
  this.gamesPlayed = 0;
  this.percentWon = 0;
  this.totalPoints = 0;
};

var playerForm = document.getElementById('form');
var welcomeMessage = document.getElementById

playerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  var playerName = event.target.player_name.value;

  for (var i = 0; i < players.length; i++) {
    var
    if ()
  }
  var newPlayer = new playerInfo(playerName);
  players.push(newPlayer);
}



//   Pseudocoding:
//   Player name:
//   - user to enter chosen name
//     - set to uppercase/lowercase (check on if numbers/characteristics are ok)
//     - loop through local storage to see if chosen name has been used before
//       - if chosen doesn't exist, create new player object
//       - if chosen name does exist, load previously stored information for that name
//     - possibly add message to welcome new or old player
//   Select game:
//   - user to select game to play
//     - if user has not entered player name
//       - stay on page and alert them to log in
//     - if user has entered name
//       - user to move to the game page
// Top player stats:
// - to display
//   - ranking
//   - player name
//   - total points
// - show top 5 players in list in order of total points
