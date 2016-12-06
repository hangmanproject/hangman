'use strict';

var players = [];
var allPlayerNames  = [];

function PlayerInfo(name) {
  this.playerName = name;
  this.gamesWon = 0;
  this.gamesPlayed = 0;
  this.percentWon = 0;
  this.totalPoints = 0;
};
// Top player stats to display: ranking, player name, total points, and show top 5 players in list in order of total points.
calculatePercentWon: function () {
  var numberWon = ((this.gamesWon/this.gamesPlayed) * 100);
  this.percentWon = numberWon + '%';
}
calculateTotalPoints: function() {
  var total = (this.gamesWon * 5);
  this.totalPoints = total;
}
toHtml: function () {
  this.calculatePercentWon();
  var elMain = document.getElementById('player-stats');

  var elSection = document.createElement('section');
  elMain.appendChild(elSection);

  var elH2 = document.createElement('h2');
  elH2.textContent = this.playerName;
  elSection.appendChild(elH2);

  var elOl = document.createElement('ol');
  elSection.appendChild(elOl);

  var elLi = document.createElement('li');
  elLi.textContent = this.percentWon;
  elOl.appendChild(elLi);

  elLi = document.createElement('li');
  elLi.textContent = this.totalPoints;
  elOl.appendChild(elLi);
}
//I wrote the functions to calculate the percent won and the total points. I made an ordered list with an h2 header that states the player name. The first list item is the percent won and the second list item is the total points.
var playerForm = document.getElementById('form');
//var welcomeMessage = document.getElementById('welcome_message');

playerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();

  var playerName = event.target.player_name.value;
  var playerNameUpper = playerName.toUpperCase();

  checkName();

  function checkName() {
    if (players.length === 0) {
      var newPlayer = new PlayerInfo(playerNameUpper);
      players.push(newPlayer);
      allPlayerNames.push(playerNameUpper);
      return alert('Welcome, ' + playerName + '. You are the first player on the site!');
    } else {
      //for (var i = 0; i < allPlayerNames.length; i++) {
      if (allPlayerNames.indexOf(playerNameUpper) !== -1) {
        return alert('Welcome back, ' + playerName + '!');
      } else if (allPlayerNames.indexOf(playerNameUpper) === -1) {
        newPlayer = new PlayerInfo(playerNameUpper);
        players.push(newPlayer);
        allPlayerNames.push(playerNameUpper);
        return alert('Welcome, ' + playerName + '!');
      } else {
        return alert('Please try another name');
      }
      //}
    }
  };
};


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
