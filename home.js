'use strict';

var players = [];
var allPlayerNames  = [];
var storedPlayersString = localStorage.getItem('players');
var storedNamesString = localStorage.getItem('allPlayerNames');
var playerName;

function PlayerInfo(name) {
  this.playerName = name;
  this.gamesWon = 0;
  this.gamesPlayed = 0;
  this.percentWon = 0;
  this.percentDisplay = 0;
  this.totalPoints = 0;
  this.ranking = 0;
  this.previousWords = [];
};

retrieveLocal();
sortPlayers();
renderTable();

var playerForm = document.getElementById('form');
playerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();

  playerName = event.target.player_name.value;
  var playerNameUpper = playerName.toUpperCase();

  checkName();

  function checkName() {
    if (players.length === 0) {
      var newPlayer = new PlayerInfo(playerNameUpper);
      newPlayer.ranking = 1;
      players.push(newPlayer);
      allPlayerNames.push(playerNameUpper);
      renderTopPlayerRow(newPlayer);
      storeLocal();
      return writeWelcomeMessage('Welcome ' + playerName + '. Play at your own risk. A man\'s life is at stake.');
    } else {
      var playerIndex = allPlayerNames.indexOf(playerNameUpper);
      if (playerIndex !== -1) {
        allPlayerNames.push(playerNameUpper);
        sortPlayers();
        renderTable();
        storeLocal();
        return writeWelcomeMessage('Welcome back, ' + playerName + '. You know the stakes.');
      } else if (playerIndex === -1) {
        newPlayer = new PlayerInfo(playerNameUpper);
        players.push(newPlayer);
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
  clearForm();
};

function writeWelcomeMessage(message) {
  var welcomeMessage = document.getElementById('welcome_message');
  welcomeMessage.textContent = message;//update content
  player_input.appendChild(welcomeMessage);
};

function clearForm() {
  if(playerForm) {
    document.player_form.reset();
  }
};

function sortPlayers(){
  players.sort(function(a, b) {
    if (a.totalPoints === b.totalPoints) {
      return (b.percentWon) - (a.percentWon);
    } else {
      return (b.totalPoints) - (a.totalPoints);
    }
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

  percentageWonTop.textContent = newPlayer.percentDisplay;
  tableRow.appendChild(percentageWonTop);

  totalPointsTop.textContent = newPlayer.totalPoints;
  tableRow.appendChild(totalPointsTop);

  topPlayersTable.appendChild(tableRow);
};

function clearTable(){
  var topPlayersTable = document.getElementById('table_body');
  topPlayersTable.textContent = '';
};

var gameForm = document.getElementById('button');
gameForm.addEventListener('submit', handleGameSubmit);

function handleGameSubmit(event){
  if (playerName){
  } else {
    event.preventDefault();
    alert('You must identify yourself to continue. Own it.');
  }
};
