'use strict';

var players = [];
var allPlayerNames  = [];
var storedPlayersString = localStorage.getItem('players');

// function PlayerInfo(name, won, played, percent, total) {
//   this.playerName = name;
//   this.gamesWon = won;
//   this.gamesPlayed = played;
//   this.percentWon = percent;
//   this.totalPoints = total;
//   this.ranking = 0;
// };

function PlayerInfo(name) {
  this.playerName = name;
  this.gamesWon = 0;
  this.gamesPlayed = 0;
  this.percentWon = 0;
  this.totalPoints = 0;
  this.ranking = 0;
};

retrieveLocal();

var playerForm = document.getElementById('form');

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
      storeLocal();
      return writeWelcomeMessage('Welcome ' + playerName + '!');
    } else {
      if (allPlayerNames.indexOf(playerNameUpper) !== -1) {
        return writeWelcomeMessage('Welcome back, ' + playerName + '!');
      } else if (allPlayerNames.indexOf(playerNameUpper) === -1) {
        newPlayer = new PlayerInfo(playerNameUpper);
        players.push(newPlayer);
        allPlayerNames.push(playerNameUpper);
        storeLocal();
        return writeWelcomeMessage('Welcome, ' + playerName + '!');
      } else {
        return writeWelcomeMessage('Please try another name');
      }
    }
  };
};

function writeWelcomeMessage(message) {
  var welcomeMessage = document.getElementById('welcome_message');
  welcomeMessage.textContent = message;//update content
  player_input.appendChild(welcomeMessage);
};

function storeLocal() {
  var playersJSON = JSON.stringify(players);
  localStorage.setItem('players', playersJSON);
}

function retrieveLocal() {
  if (storedPlayersString) {
    players = JSON.parse(storedPlayersString);
  }
}
//loop through players array to find highest total points
//if highest total points, render table row
//loop back

// function rankTopPlayers() {
//   var topPlayersIndex = [];
//   for (var i = 0; i < players.length; i++) {
//     topPlayersIndex.push(players[i].totalPoints);
//   }
//   var max = Math.max(topPlayersIndex);
// }


function renderTopPlayerRow() {
  var topPlayersTable = document.getElementById('table_body');
  var tableRow = document.createElement('tr');
  var playerNameTop = document.createElement('td');
  var gamesPlayedTop = document.createElement('td');
  var gamesWonTop = document.createElement('td');
  var percentageWonTop = document.createElement('td');
  var totalPointsTop = document.createElement('td');

  playerNameTop.textContent = players[0].playerName;
  tableRow.appendChild(playerNameTop);

  gamesPlayedTop.textContent = players[0].gamesPlayed;
  tableRow.appendChild(gamesPlayedTop);

  gamesWonTop.textContent = players[0].gamesWon;
  tableRow.appendChild(gamesWonTop);

  percentageWonTop.textContent = players[0].percentWon;
  tableRow.appendChild(percentageWonTop);

  totalPointsTop.textContent = players[0].totalPoints;
  tableRow.appendChild(totalPointsTop);

  topPlayersTable.appendChild(tableRow);
}

renderTopPlayerRow();

// var playerOne = new PlayerInfo(Brigitte, 5, 10, '50%', 25);
// players.push(playerOne);
//
// var playerTwo = new PlayerInfo(Nicole, 7, 7, '100%', 35);
// players.push(playerTwo);
//
// var playerTThree = new PlayerInfo(Nicole, 7, 7, '100%', 35);
// players.push(playerTThree);
//
// var playerFour = new PlayerInfo(Nicole, 7, 7, '100%', 35);
// players.push(playerFour);
//
// var playerFive = new PlayerInfo(Nicole, 7, 7, '100%', 35);
// players.push(playerFive);
//
// var playerSix = new PlayerInfo(Nicole, 7, 7, '100%', 35);
// players.push(playerSix);

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
