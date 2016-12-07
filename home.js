'use strict';

var players = [];
var allPlayerNames  = [];
var storedPlayersString = localStorage.getItem('players');
var storedNamesString = localStorage.getItem('allPlayerNames');

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
  var totalPoints = event.target.total_points.value;

  checkName();

  function checkName() {
    if (players.length === 0) {
      var newPlayer = new PlayerInfo(playerNameUpper);
      newPlayer.ranking = 1;
      newPlayer.totalPoints = totalPoints;
      players.push(newPlayer);
      allPlayerNames.push(playerNameUpper);
      renderTopPlayerRow(newPlayer);
      storeLocal();
      return writeWelcomeMessage('Welcome ' + playerName + '. Play at your own risk. A man\'s life is at stake.');
    } else {
      var playerIndex = allPlayerNames.indexOf(playerNameUpper);
      if (playerIndex !== -1) {
        players[playerIndex].totalPoints = totalPoints;
        allPlayerNames.push(playerNameUpper);
        sortPlayers();
        renderTable();
        return writeWelcomeMessage('Welcome back, ' + playerName + '. You know the stakes.');
      } else if (playerIndex === -1) {
        newPlayer = new PlayerInfo(playerNameUpper);
        players.push(newPlayer);
        newPlayer.totalPoints = totalPoints;
        allPlayerNames.push(playerNameUpper);
        sortPlayers();
        renderTable();
        storeLocal();
        return writeWelcomeMessage('Welcome, ' + playerName + '. Play at your own risk. A man\'s life is at stake.');
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

// function clearForm() {
//   if(playerForm) {
//     document.player_form.reset();
//   }
// };

function sortPlayers(){
  players.sort(function(a, b) {
    return (b.totalPoints) - (a.totalPoints);
  });
};

function storeLocal() {
  var playersJSON = JSON.stringify(players);
  var namesJSON = JSON.stringify(allPlayerNames);
  localStorage.setItem('players', playersJSON);
  localStorage.setItem('allPlayerNames', namesJSON);
};

function retrieveLocal() {
  if (storedPlayersString) {
    players = JSON.parse(storedPlayersString);
    allPlayerNames = JSON.parse(storedNamesString);
    renderTable();
  }
};

function renderTable(){
  clearTable();
  var rank = 0;
  var playersLength = players.length;
  if (playersLength > 5) {
    playersLength = 5;
  }
  for (var i = 0; i < playersLength; i++) {
    rank = rank + 1;
    players[i].ranking = rank;
    console.log(players[i]);
    renderTopPlayerRow(players[i]);
  }
};

function renderTopPlayerRow(newPlayer) {
  var topPlayersTable = document.getElementById('table_body');
  var tableRow = document.createElement('tr');
  var rankingTop = document.createElement('td');
  var playerNameTop = document.createElement('td');
  var gamesPlayedTop = document.createElement('td');
  var gamesWonTop = document.createElement('td');
  var percentageWonTop = document.createElement('td');
  var totalPointsTop = document.createElement('td');

  rankingTop.textContent = newPlayer.ranking;
  tableRow.appendChild(rankingTop);

  playerNameTop.textContent = newPlayer.playerName;
  tableRow.appendChild(playerNameTop);

  gamesPlayedTop.textContent = newPlayer.gamesPlayed;
  tableRow.appendChild(gamesPlayedTop);

  gamesWonTop.textContent = newPlayer.gamesWon;
  tableRow.appendChild(gamesWonTop);

  percentageWonTop.textContent = newPlayer.percentWon;
  tableRow.appendChild(percentageWonTop);

  totalPointsTop.textContent = newPlayer.totalPoints;
  tableRow.appendChild(totalPointsTop);

  topPlayersTable.appendChild(tableRow);
}

function clearTable(){
  var topPlayersTable = document.getElementById('table_body');
  topPlayersTable.textContent = '';
}
//=========================================

//HARDCODED TEST PLAYERS
// function PlayerInfo(name, won, played, percent, total) {
//   this.playerName = name;
//   this.gamesWon = won;
//   this.gamesPlayed = played;
//   this.percentWon = percent;
//   this.totalPoints = total;
//   this.ranking = 0;
// };

//HARDCODED TEST PLAYERS
// var playerOne = new PlayerInfo('Brigitte', 5, 10, '50%', 25);
// players.push(playerOne);
//
// var playerTwo = new PlayerInfo('Nicole', 7, 7, '100%', 35);
// players.push(playerTwo);
// sortPlayers();
//
// var playerThree = new PlayerInfo('Gretchen', 8, 10, '80%', 40);
// players.push(playerThree);
// sortPlayers();
//
// var playerFour = new PlayerInfo('Anne', 12, 16, '75%', 60);
// players.push(playerFour);
// sortPlayers();
//
// var playerFive = new PlayerInfo('Eric', 6, 6, '100%', 30);
// players.push(playerFive);
// sortPlayers();
//
// var playerSix = new PlayerInfo('August', 7, 21, '33%', 35);
// players.push(playerSix);
// sortPlayers();

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
