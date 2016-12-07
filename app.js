'use strict';

// ///***CLAIRE'S CODE***CLAIRE'S CODE***CLAIRE'S CODE***CLAIRE'S CODE***CLAIRE'S CODE
// function PlayerInfo(name) {
//   this.playerName = name;
//   this.gamesWon = 0;
//   this.gamesPlayed = 0;
//   this.percentWon = 0;
//   this.totalPoints = 0;
// };
// Top player stats to display: ranking, player name, total points, and show top 5 players in list in order of total points.
// function calculateTotalPoints() {
//   var total = (this.gamesWon * 5);
//   this.totalPoints = total;
// }
// function toHtml () {
//   this.calculatePercentWon();
//   var elMain = document.getElementById('player-stats');
//
//   var elSection = document.createElement('section');
//   elMain.appendChild(elSection);
//
//   var elH2 = document.createElement('h2');
//   elH2.textContent = this.playerName;
//   elSection.appendChild(elH2);
//
//   var elOl = document.createElement('ol');
//   elSection.appendChild(elOl);
//
//   var elLi = document.createElement('li');
//   elLi.textContent = this.percentWon;
//   elOl.appendChild(elLi);
//
//   elLi = document.createElement('li');
//   elLi.textContent = this.totalPoints;
//   elOl.appendChild(elLi);
// }
// var canvas = document.getElementById('stage'),
//   c = canvas.getContext('2d');
//
// function drawLine(context , from, to) {
//   context.beingPath();
//   context.moveTo(from[0], from[1]);
//   context.lineTo(to[0], to[1]);
//   context.stroke();
//   drawLine(c, [0,0], [100,50]);
// }
// //Draw the canvas function drawCanvas()
// var c = canvas.getContext('2d');
// //reset the canvas and set the basic styles
// canvas.width = canvas.width;
// c.lineWidth = 10;
// c.strokeStyle = 'green';
// c.font = 'bold 24px Optimer, Arial, Helvetica, sans-serif';
// c.fillStyle = 'red';
// //draw the ground
// drawLine(c, [20,190], [180,190]);
// //start building the gallows if there's been a bad guess
// //if (badGuesses > 0) {
//   //create the upright
//   c.strokeStyle = '#A52A2A';
//   drawLine(c, [30,185], [30,10]);
//   //if (badGuesses > 1) {
//     //create the arm gallows
//     c.lineTo(150,10);
//     c.stroke();
//   //}
//   //if (badGuesses > 2) {
//     c.strokeStyle = 'black';
//     c.lineWidth = 3;
//     //draw rope
//     drawLine(c, [145,15], [145,30]);
//     //draw head
//     c.beginPath();
//     c.moveTo(160, 45);
//     c.arc(145, 45, 15, 0, (Math.PI/180)*360);
//     c.stroke();
//     //}
//   //if (badGuesses > 3) {
//     //draw body
//     drawLine(c, [145,60], [145,130]);
//   //}
//   //if (badGuesses > 4) {
//     //draw left arm
//     drawLine(c, [145,80], [110,90]);
//   //}
//   //if (badGuesses > 5) {
//     //draw right arm
//     drawLine(c, [145,80], [180,90]);
//   //}
//   //if  (badGuesses > 6) {
//     //draw left leg
//     drawLine(c, [145,130], [130,170]);
//   //}
//   //if (badGuesses > 7) {
//     //draw right leg and end game
//     drawLine(c, [145,130], [160,170]);
// //I wrote the functions to calculate the percent won and the total points. I made an ordered list with an h2 header that states the player name. The first list item is the percent won and the second list item is the total points.
// var playerForm = document.getElementById('form');
// //var welcomeMessage = document.getElementById('welcome_message');
// //***CLAIRE'S CODE***CLAIRE'S CODE***CLAIRE'S CODE***CLAIRE'S CODE***CLAIRE'S CODE***CLAIRE'S CODE




// Global variables
var playerAnswerArr = []; // blank spaces puzzle
var incorrectGuesses = 0;
var maxEasyGuesses = 5; // will correspond with number of easy difficulty body parts
var easyWords = ['four', 'phone', 'mouse', 'bottle', 'notebook']; // subject to change
var gameWord; // word chosen from word array
var remainingLetters; // remaining letters left to guess in the gameWord
var wonGame = false; // used in checkForWin/Loss and updatePlayerStats
var letterButton = document.getElementById('letter_buttons');
letterButton.addEventListener('click', handleClick); // listens for a button click
var endMessage = document.getElementById('end_of_game_msg');

// - generate a hanging man
// _______ADDRESS______________________

// FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS //
// handles the event of a button click
function handleClick(event) {
  event.preventDefault(); // prevent page refresh

  // determine if the event.target.value is in the gameWord array
  if (gameWord.includes(event.target.value) === true) {
    // loop through the gameWord to match target value (letter) with any same letter in the gameword
    for (var i = 0; i < gameWord.length; i++) {
      if (event.target.value === gameWord[i]) {

        playerAnswerArr[i] = gameWord[i]; // replace the blank index with the matching letter

        displayPlayerArray(playerAnswerArr); // update the display for the player
        remainingLetters--;
        // disable the button to prevent the player from selecting it again
        event.target.disabled = true;
        checkForWin();
      }
    }
  } else if (gameWord.includes(event.target.value) === false) {
    // if user selects a invalid letter, nothing changes in the playerAnswerArr
    displayPlayerArray(playerAnswerArr);

    //       - one body part gets added to the hangman

    incorrectGuesses += 1; // incorrectGuesses increases by 1
    // disable the button to prevent the player from selecting it again
    event.target.disabled = true;
    checkForLoss();
  }
}

function checkForWin() {
  if (remainingLetters === 0) { // if the player has guessed all the letters
    wonGame = true;
    // disable the buttons, display the solved gameWord, inform the player that they won, and updatePlayerStats
    letterButton.removeEventListener('click', handleClick);
    displayPlayerArray(playerAnswerArr);
    endMessage.textContent = 'Congrats! You won and saved the hangman!';
    updatePlayerStats();
    //   - refresh page?
  }
}

function checkForLoss() {
  if (remainingLetters > 0 && incorrectGuesses === maxEasyGuesses) {
    wonGame = false;
    //   - hangman will have all parts
    //   - display correct letters in the puzzle as the answer

    // disable the buttons, inform the player that they lost, and updatePlayerStats
    letterButton.removeEventListener('click', handleClick);
    endMessage.textContent = 'You failed to guess \'' + gameWord + '.\' A man has been hanged today. You lose.';
    updatePlayerStats();
    //   - refresh page?
  }
}

function updatePlayerStats() {
  var localStorageNameArr;
  var localStorageObjArr;
  var parsedLclStrgNameArr;
  var parsedlclStrgObjArr;
  // get the name array from local storage and parse from JSON to js
  localStorageNameArr = localStorage.getItem('allPlayerNames');
  parsedLclStrgNameArr = JSON.parse(localStorageNameArr);
  // pop off the last element (the current logged in user) and store it on a variable
  var playerToCheck = parsedLclStrgNameArr.pop();
  // get the player object array from local storage and parse from JSON to js
  localStorageObjArr = localStorage.getItem('players');
  parsedlclStrgObjArr = JSON.parse(localStorageObjArr);
  // compare the playerToCheck to the player names in the object array
  for (var i = 0; i < parsedlclStrgObjArr.length; i++) {
    // if there's a name match, update other object properties
    if (playerToCheck === parsedlclStrgObjArr[i].playerName) {
      parsedlclStrgObjArr[i].gamesPlayed ++;
      if (wonGame === true) {
        parsedlclStrgObjArr[i].totalPoints += 23; ////////THIS WILL PROBABLY CHANGE///////////////
        parsedlclStrgObjArr[i].gamesWon ++;
      }
      var numberWon = Math.round((parsedlclStrgObjArr[i].gamesWon / parsedlclStrgObjArr[i].gamesPlayed) * 100);
      parsedlclStrgObjArr[i].percentWon = numberWon;
      parsedlclStrgObjArr[i].percentDisplay = numberWon + '%';
    }
  }
  // stringify the updated array and set it back to local storage
  var playersJSON = JSON.stringify(parsedlclStrgObjArr);
  localStorage.setItem('players', playersJSON);
}

// pass in a word array to select a random word from it to assign to gameWord
function pickWord (wordArr) {
  gameWord = wordArr[generateRandomNumber(wordArr)];
  return gameWord;

  function generateRandomNumber(arr) {
    return Math.floor(Math.random() * arr.length);
  }
}

// initiate the playerAnswerArr to '_' characters, the length of the gameWord
function generatePlayerAnswerArray (gameWord) {
  for (var i = 0; i < gameWord.length; i++) {
    playerAnswerArr.push('_');
  };
}

// display the playerAnswerArr in html
function displayPlayerArray(playerAnswerArr) {
  var display = document.getElementById('display_player_array');
  display.textContent = playerAnswerArr.join(' ');
}

function runGame(){
  // assign the gameWord
  gameWord = pickWord(easyWords);
  // set the remainingLetters left to guess
  remainingLetters = gameWord.length;
  // generate a playerAnswerArr blank puzzle that is the length of the gameWord and display it
  generatePlayerAnswerArray(gameWord);
  displayPlayerArray(playerAnswerArr);
}

//*****EXECUTE CODE*******************EXECUTE CODE**********************
runGame();
