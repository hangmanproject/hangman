'use strict';

// Global variables
var playerAnswerArr = []; // blank spaces puzzle
var incorrectGuesses = 0;
var maxEasyGuesses = 7; // will correspond with number of easy difficulty body parts
var easyWords = ['four', 'phone', 'mouse', 'bottle', 'notebook',
  'canteen', 'sliver', 'shampoo', 'errand', 'beekeeper',
  'honey', 'pepper', 'casino', 'eucalyptus']; // subject to change

var gameWord; // word chosen from word array
var remainingLetters; // remaining letters left to guess in the gameWord
var wonGame = false; // used in checkForWin/Loss and updatePlayerStats
var letterButton = document.getElementById('letter_buttons');
letterButton.addEventListener('click', handleClick); // listens for a button click
var display = document.getElementById('display_player_array');
var displayGuessesRemaining = document.getElementById('display_guesses_remaining');
var playAgainButton = document.getElementById('play_again_btn');
playAgainButton.addEventListener('click', handlePlayAgain); // responds to click on play again button
var endMessage = document.getElementById('end_of_game_msg');
//JSON VARIABLES
var localStorageNameArr = localStorage.getItem('allPlayerNames');
var localStorageObjArr  = localStorage.getItem('players');
var localPreviousPlayerObj = localStorage.getItem('previousPlayer');
var parsedLclStrgNameArr = JSON.parse(localStorageNameArr);   // get the name array from local storage and parse from JSON to js
var parsedlclStrgObjArr  = JSON.parse(localStorageObjArr);   // get the player object array from local storage and parse from JSON to js
var parsedPrevPlayerObj = JSON.parse(localPreviousPlayerObj);
var currentPlayer = parsedlclStrgObjArr[0];
var canvas = document.getElementById('stage'), //these are global variables, please do not move them.
  ctx = canvas.getContext('2d'); //these are global variables, please do not move them.

// EXECUTE // EXECUTE // EXECUTE // EXECUTE // EXECUTE // EXECUTE // EXECUTE // EXECUTE // EXECUTE
retrieveLocal();
findCurrentPlayer();
resetPreviousWords();
renderPlayerStatsRow(currentPlayer);
writePlayerMessage();
runGame();
writePlayerMessage();
// FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS //
// retrieve JSON player information from local storage and prepare it for js usage
function retrieveLocal() {
  if (localStorageObjArr) {
    parsedLclStrgNameArr = JSON.parse(localStorageNameArr);
    parsedlclStrgObjArr = JSON.parse(localStorageObjArr);
  }
  if (localPreviousPlayerObj) {
    parsedPrevPlayerObj = JSON.parse(localPreviousPlayerObj);
  }
};

// find the current player profile from the local storage
function findCurrentPlayer() {
  var playerToCheck = parsedLclStrgNameArr.pop(); // pop off the last element (the current logged in user) and store it on a variable
  for (var i = 0; i < parsedlclStrgObjArr.length; i++) {  // compare the playerToCheck to the player names in the object array
    if (playerToCheck === parsedlclStrgObjArr[i].playerName) { // if there's a name match, update other object properties
      currentPlayer = parsedlclStrgObjArr[i];
    }
  }
};

// allow new players to have play access to all words, previous players play new words
function resetPreviousWords() {
  if (parsedPrevPlayerObj && currentPlayer.playerName !== parsedPrevPlayerObj.playerName) {
    currentPlayer.previousWords = [];
  }
};

function writePlayerMessage() {
  var playerMessage = document.getElementById('player_message');
  playerMessage.textContent = (currentPlayer.playerName + ', the hangman\'s fate is in your hands.');
  message_top.appendChild(playerMessage);
};

// acknowledge player on the game page above the game elements
function writePlayerMessage() {
  var playerMessage = document.getElementById('player_message');
  playerMessage.textContent = (currentPlayer.playerName + ', the hangman\'s fate is in your hands.');
  message_top.appendChild(playerMessage);
};

// render a table to display the player's current stats
function renderPlayerStatsRow(currentPlayer) {
  var playerStatsTable = document.getElementById('stats_table_body');
  var playerTableRow = document.createElement('tr');
  var rankingPlayer = document.createElement('td');
  var playerNamePlayer = document.createElement('td');
  var gamesPlayedPlayer = document.createElement('td');
  var gamesWonPlayer = document.createElement('td');
  var percentageWonPlayer = document.createElement('td');
  var totalPointsPlayer = document.createElement('td');

  playerTableRow.appendChild(rankingPlayer);
  //even though these are property names you could still loop through them
  //with a for loop. Something like:
  //for (var key in currentPlayer) {
  //td = document.createElement('td')
  //td.textContent = currentPlayer[key]
  //
  //}

  playerNamePlayer.textContent = currentPlayer.playerName;
  playerTableRow.appendChild(playerNamePlayer);

  gamesPlayedPlayer.textContent = currentPlayer.gamesPlayed;
  playerTableRow.appendChild(gamesPlayedPlayer);

  gamesWonPlayer.textContent = currentPlayer.gamesWon;
  playerTableRow.appendChild(gamesWonPlayer);

  percentageWonPlayer.textContent = currentPlayer.percentDisplay;
  playerTableRow.appendChild(percentageWonPlayer);

  totalPointsPlayer.textContent = currentPlayer.totalPoints;
  playerTableRow.appendChild(totalPointsPlayer);

  if (currentPlayer.ranking <= 5) {
    rankingPlayer.textContent = currentPlayer.ranking;
  } else {
    rankingPlayer.textContent = 'Not Ranked';
  }
  playerStatsTable.appendChild(playerTableRow);
};

// set up for the game
function runGame() {
  playerAnswerArr = [];
  // assign the gameWord
  gameWord = pickWord(easyWords);
  // set the remainingLetters left to guess
  remainingLetters = gameWord.length;
  // generate a playerAnswerArr blank puzzle that is the length of the gameWord and display it
  generatePlayerAnswerArray(gameWord);
  displayPlayerArray(playerAnswerArr);
  updateGuessesRemaining();
}

// selects a random gameWord from the word array and
// prevents words from being played multiple times by the same player
function pickWord (wordArr) {
  var randomNumber = generateRandomNumber(wordArr);
  gameWord = wordArr[randomNumber];
  var currentWords = currentPlayer.previousWords;
  if (currentWords.length === 0) {
    currentWords.push(gameWord);
  } else if (currentWords.length === easyWords.length){
    currentWords = [];
    currentWords.push(gameWord);
  } else {
    while (currentWords.indexOf(gameWord) !== -1) {
      randomNumber = generateRandomNumber(wordArr);
      gameWord = wordArr[randomNumber];
    }
    currentWords.push(gameWord);
  }
  storeLocal();
  return gameWord;
};

function generateRandomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
};

// initiate the playerAnswerArr to '_' characters, the length of the gameWord
function generatePlayerAnswerArray (gameWord) {
  //careful using push here. If you don't reset the array you could keep tacking
  //things on. Defensively you could reset it here (playerAnswerArr = [])
  for (var i = 0; i < gameWord.length; i++) {
    playerAnswerArr.push('_');
  };
}

// display the playerAnswerArr in html
function displayPlayerArray(playerAnswerArr) {
  display.textContent = playerAnswerArr.join(' ');
}

// update and show the player how many guesses they have remaining
function updateGuessesRemaining() {
  var guessesRemaining = maxEasyGuesses - incorrectGuesses;
  displayGuessesRemaining.textContent = 'Remaining guesses: ' + guessesRemaining;
};

// game logic: handles the event of a letter button click
function handleClick(event) {
  event.preventDefault(); // prevent page refresh

  // determine if the event.target.value is in the gameWord array
  //includes! nice.  Includes returns a boolean. So comparing it to true is
  //the same as just calling it.
  if (gameWord.includes(event.target.value) === true) {
    // loop through the gameWord to match target value (letter) with any same letter in the gameword
    for (var i = 0; i < gameWord.length; i++) {
      if (event.target.value === gameWord[i]) {

        playerAnswerArr[i] = gameWord[i]; // replace the blank index with the matching letter

        displayPlayerArray(playerAnswerArr); // update the display for the player
        updateGuessesRemaining();
        remainingLetters--;
        // disable the button to prevent the player from selecting it again
        event.target.disabled = true;
        checkForWin();
      }
    }
    //since there are only two cases this could just be an else
  } else if (gameWord.includes(event.target.value) === false) {
    // if user selects a invalid letter, nothing changes in the playerAnswerArr
    displayPlayerArray(playerAnswerArr);
    incorrectGuesses += 1;
    updateGuessesRemaining();
    // disable the button to prevent the player from selecting it again
    event.target.disabled = true;
    checkForLoss();
  }
  drawCanvas(); // draw the appropriate parts of the hangman
}

function checkForWin() {
  if (remainingLetters === 0) { // if the player has guessed all the letters
    wonGame = true;
    // disable the letter buttons, display the solved gameWord,
    // inform the player that they won, change appearance of the play again button
    // and updatePlayerStats
    letterButton.removeEventListener('click', handleClick);
    displayPlayerArray(playerAnswerArr);
    endMessage.textContent = 'Congrats! You won and saved the hangman!';
    highlightPlayAgainBtn();
    updatePlayerStats();
  }
}

function checkForLoss() {
  if (remainingLetters > 0 && incorrectGuesses === maxEasyGuesses) {
    wonGame = false;
    drawCanvas(); // hangman will have all parts
    // disable the buttons, inform the player that they lost,
    // change appearance of the play again button and updatePlayerStats
    letterButton.removeEventListener('click', handleClick);
    endMessage.textContent = 'You failed to guess \'' + gameWord + '.\' A man has been hanged today. You lose.';
    highlightPlayAgainBtn();
    updatePlayerStats();
  }
}

// change text color and background-color of the play again button
function highlightPlayAgainBtn() {
  playAgainButton.style.color = 'white';
  playAgainButton.style.backgroundColor = '#8c1717';
}

// updates, displays, and localStores the current player's stats
function updatePlayerStats() {
  currentPlayer.gamesPlayed ++;
  if (wonGame === true) {
    currentPlayer.totalPoints += 23;
    currentPlayer.gamesWon ++;
  }
  var numberWon = Math.round((currentPlayer.gamesWon / currentPlayer.gamesPlayed) * 100);
  currentPlayer.percentWon = numberWon;
  currentPlayer.percentDisplay = numberWon + '%';
  clearRow();
  sortPlayers();
  setRank();
  renderPlayerStatsRow(currentPlayer);
  storeLocal();
  setPreviousPlayer();
};

function clearRow() {
  var playerStatsTable = document.getElementById('stats_table_body');
  playerStatsTable.textContent = '';
}

// sorts the players by their total points value
// with a percent won value as a tiebreaker
function sortPlayers(){
  parsedlclStrgObjArr.sort(function(a, b) {
    if (a.totalPoints === b.totalPoints) {
      return (b.percentWon) - (a.percentWon);
    } else {
      return (b.totalPoints) - (a.totalPoints);
    }
  });
};

// ranks the top 5 players after they've been sorted
function setRank(){
  clearRow();
  var rank = 0;
  var playersLength = parsedlclStrgObjArr.length;
  if (playersLength > 5) {
    playersLength = 5;
  }
  for (var i = 0; i < playersLength; i++) {
    rank = rank + 1;
    //you could also just use i here
    parsedlclStrgObjArr[i].ranking = rank;
  }
};

// stores the array of player objects in local storage
function storeLocal() {
  var playersJSON = JSON.stringify(parsedlclStrgObjArr);
  localStorage.setItem('players', playersJSON);
};

function setPreviousPlayer() {
  parsedPrevPlayerObj = currentPlayer;
  storePreviousPlayer();
};

function storePreviousPlayer() {
  var previousPlayerJSON = JSON.stringify(parsedPrevPlayerObj);
  localStorage.setItem('previousPlayer', previousPlayerJSON);
};

// handles the event when 'play again' button is clicked
function handlePlayAgain(event) {
  // reloads the page and starts it at the top
  //neat!
  window.location.reload();
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

//HANGMAN DRAWING DOWN BELOW:

ctx.lineWidth = 10;
ctx.strokeStyle = 'black';
drawLine(ctx, [30,285], [270,285]);
ctx.stroke();

//HANGMAN DRAWING DOWN BELOW:
function drawLine(ctx , from, to) {
  ctx.beginPath();
  ctx.moveTo(from[0], from[1]);
  ctx.lineTo(to[0], to[1]);
  ctx.stroke();
}

function drawCanvas() {
  //canvas.width = canvas.width; //resetting the canvas everytime
  ctx.lineWidth = 10; //setting the basic styles
  ctx.strokeStyle = 'black'; //setting the basic styles
  ctx.fillStyle = 'black'; //setting the basic styles
  if (incorrectGuesses >= 1) {
    ctx.strokeStyle = 'black';
    drawLine(ctx, [30,285], [270,285]); //draws the ground
  }
  if (incorrectGuesses >= 1) { //creates the upright gallows:
    ctx.strokeStyle = 'black';
    drawLine(ctx, [45,277.5], [45,15]);
  }
  if (incorrectGuesses >= 1) { //creates the arm gallows:
    ctx.lineTo(225,15);
    ctx.stroke();
  }
  if (incorrectGuesses >= 2) { //creates the noose:
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    drawLine(ctx, [217.5,22.5], [217.5,45]);

    ctx.beginPath(); //creates the head:
    ctx.moveTo(240, 67.5);
    ctx.arc(217.5, 67.5, 22.5, 0, (Math.PI / 180) * 360);
    ctx.stroke();
  }
  if (incorrectGuesses >= 3) { //creates the body:
    drawLine(ctx, [217.5,90], [217.5,195]);
  }
  if (incorrectGuesses >= 4) { //creates the left arm:
    drawLine(ctx, [217.5,120], [165,135]);
  }
  if (incorrectGuesses >= 5) { //creates the right arm:
    drawLine(ctx, [217.5,120], [270,135]);
  }
  if (incorrectGuesses >= 6) { //creates the left leg:
    drawLine(ctx, [217.5,195], [195,255]);
  }
  if (incorrectGuesses >= 7) { //creates the right leg and ends game
    drawLine(ctx, [217.5,195], [240,255]);
  }
}
