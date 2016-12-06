'use strict';
var players = [];
var allPlayerNames  = [];

function PlayerInfo(name) {
  this.playerName = name;
  this.gamesWon = 0;
  this.gamesPlayed = 0;
  this.percentWon = 0;
  this.totalPoints = 0;
}
//Personal Stats to display: player name, win total, games played total, win percentage, total points
function listStats () {
  
}
//If user object already exists, display existing information
//Updated stats every time page refreshes
//Stretch goal is adding a graph
