'use strict';

// ///***CLAIRE'S CODE***CLAIRE'S CODE***CLAIRE'S CODE***CLAIRE'S CODE***CLAIRE'S CODE
// function PlayerInfo(name) {
//   this.playerName = name;
//   this.gamesWon = 0;
//   this.gamesPlayed = 0;
//   this.percentWon = 0;
//   this.totalPoints = 0;
// };
// // Top player stats to display: ranking, player name, total points, and show top 5 players in list in order of total points.
// function calculatePercentWon () {
//   var numberWon = ((this.gamesWon / this.gamesPlayed) * 100);
//   this.percentWon = numberWon + '%';
// }
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




<<<<<<< HEAD

=======
  elLi = document.createElement('li');
  elLi.textContent = this.totalPoints;
  elOl.appendChild(elLi);
}
//I wrote the functions to calculate the percent won and the total points. I made an ordered list with an h2 header that states the player name. The first list item is the percent won and the second list item is the total points.

var canvas = document.getElementById('stage'),
  ctx = canvas.getContext('2d');

function drawLine(context , from, to) {
  ctx.beginPath();
  ctx.moveTo(from[0], from[1]);
  ctx.lineTo(to[0], to[1]);
  ctx.stroke();
}
drawLine(c, [0,0], [100,50]);
//Draw the canvas
//function drawCanvas()
var c = canvas.getContext('2d');
//reset the canvas and set the basic styles
canvas.width = canvas.width;
c.lineWidth = 10;
c.strokeStyle = 'green';
c.font = 'bold 24px Optimer, Arial, Helvetica, sans-serif';
c.fillStyle = 'red';
//draw the ground
drawLine(c, [20,190], [180,190]);
//start building the gallows if there's been a bad guess
//if (incorrectGuesses > 0) {
//create the upright
c.strokeStyle = '#A52A2A';
drawLine(c, [30,185], [30,10]);
//if (incorrectGuesses > 1) {
//create the arm gallows
c.lineTo(150,10);
c.stroke();
//}
//if (incorrectGuesses > 2) {
c.strokeStyle = 'black';
c.lineWidth = 3;
//draw rope
drawLine(c, [145,15], [145,30]);
//draw head
c.beginPath();
c.moveTo(160, 45);
c.arc(145, 45, 15, 0, (Math.PI / 180) * 360);
c.stroke();
//}
//if (incorrectGuesses > 3) {
//draw body
drawLine(c, [145,60], [145,130]);
//}
//if (incorrectGuesses > 4) {
//draw left arm
drawLine(c, [145,80], [110,90]);
//}
//if (incorrectGuesses > 5) {
//draw right arm
drawLine(c, [145,80], [180,90]);
//}
//if  (incorrectGuesses > 6) {
//draw left leg
drawLine(c, [145,130], [130,170]);
//}
//if (incorrectGuesses > 7) {
//draw right leg and end game
drawLine(c, [145,130], [160,170]);
//this is the code that makes the hangman image. The if statement is creating the added limb to the image each time they use up one of the guesses or 'lives'.
var playerForm = document.getElementById('form');
//var welcomeMessage = document.getElementById('welcome_message');
// - bank of letter options that can be clicked
var letterOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
>>>>>>> master
// - display of blank spaces puzzle
var playerAnswerArr = [];
// - display number of incorrect guess
var incorrectGuesses = 0;
// - store number of max guesses (stretch: for each difficulty)
var maxEasyGuesses = 5; // will correspond with number of easy difficulty body parts
// - generate bank of words to fill in puzzle
var easyWords = ['ebece'];//four', 'phone', 'mouse', 'bottle', 'notebook']; // subject to change
// a variable to store the game word
var gameWord;
// a variable to keep track of remaining letters
var remainingLetters;
var letterButton = document.getElementById('letter_buttons'); // get the element
letterButton.addEventListener('click', handleClick); // add the listener
var localStorageNameArr;
var localStorageObjArr;
var parsedLclStrgNameArr;
var parsedlclStrgObjArr;
// - generate a hanging man
// _______ADDRESS______________________
var endMessage = document.getElementById('end_of_game_msg');


// FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS //
function handleClick(event) { // create the handler
  event.preventDefault(); // prevent page refresh

///////ADDRESS - if first click in the letter bank, add one to the game played property

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
        // nothing happens to the hangman, nothing happens in the max guesses
      }
    }
  } else if (gameWord.includes(event.target.value) === false) {
    // if user selects a invalid letter, nothing changes in the playerAnswerArr
    displayPlayerArray(playerAnswerArr);

    //       - one body part gets added to the hangman
      // renderBodyPart()

    // incorrectGuesses increases by 1 OR max guesses display goes down one
    incorrectGuesses += 1;
    console.log('incorrectGuesses: ', incorrectGuesses);
    // disable the button to prevent the player from selecting it again
    event.target.disabled = true;
    checkForLoss();
  }
<<<<<<< HEAD
}

function checkForWin() {
  if (remainingLetters === 0) { // if the player has won
    // disable the buttons, display the solved gameWord, and inform the player that they won
    letterButton.removeEventListener('click', handleClick);
    displayPlayerArray(playerAnswerArr);
    endMessage.textContent = 'Congrats! You won and saved the hangman!';
    //   - log win and add points to total points on the user object and set to local storage
    //////////CHECK BELOW/////CHECK BELOW/////////////////
    //get the name array from local storage
    localStorageNameArr = localStorage.getItem('allPlayerNames')
    //parse the JSON to js
    parsedLclStrgNameArr = JSON.parse(localStorageNameArr)
    //pop off the last element (the current logged in user) and store it on variable
    
    //get the player object array from local storage
    //parse the JSON to js
    //compare the name variable to the player names in the object array
    //if there's a match update other properties
    PlayerInfo.gamesWon ++;
    PlayerInfo.totalPoints += 1;
=======
// } // END OF GAME LOOP
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
  function generateRandomNumber(object) {
    return Math.floor(Math.random() * object.length);

  }

  function checkForWin() {
    if (remainingLetters === 0) { // if the player has won
    // all puzzle spaces will be filled with the correct letters
      displayPlayerArray(playerAnswerArr);
    //   - inform user that they won
      endMessage.textContent = 'Congrats! You won and saved the hangman!';
      breakForWin = true;
    //   - log win and add points to total points on the user object and set to local storage
    //////////CHECK BELOW/////CHECK BELOW/////////////////
      PlayerInfo.gamesWon ++;
      PlayerInfo.totalPoints += 1;

>>>>>>> master
    //   - refresh page?
    }
  }

<<<<<<< HEAD
function checkForLoss() {
  if (remainingLetters > 0 && incorrectGuesses === maxEasyGuesses) { // if player has lost
=======
  function checkForLoss() {
    if (remainingLetters > 0) { // if player has lost
>>>>>>> master
    //   - hangman will have all parts
    //   - display correct letters in the puzzle as the answer

<<<<<<< HEAD
    // disable the buttons and inform the player that they lost
    letterButton.removeEventListener('click', handleClick);
    endMessage.textContent = 'You failed to guess \'' + gameWord + '.\' A man has been hanged today. You lose.';
    //   - refresh page?
  }
}

// pass in a word array to select a random word from it to assign to gameWord
function pickWord (wordArr) {
  gameWord = wordArr[generateRandomNumber(wordArr)];
  return gameWord;
=======
    //   - inform user that they lost
      endMessage.textContent = 'You failed to guess \'' + gameWord + '.\' A man has been hanged today. You lose.';

    //   - refresh page?
    }

  }

  function pickWord (wordArr) {
    gameWord = wordArr[generateRandomNumber(wordArr)];
    return gameWord;
>>>>>>> master

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

<<<<<<< HEAD
function runGame(){
  // assign the gameWord
  gameWord = pickWord(easyWords);
  // set the remainingLetters left to guess
  remainingLetters = gameWord.length;
  // generate a playerAnswerArr blank puzzle that is the length of the gameWord and display it
  generatePlayerAnswerArray(gameWord);
  displayPlayerArray(playerAnswerArr);
=======
  function runGame(){
  // choose a random word from easy/medium/hardWords by getting a random number between 0-arrWords.length
  // set gameWord to arrWords[random number]
    gameWord = pickWord(easyWords);

    remainingLetters = gameWord.length;
  // generate a playerAnswerArr blank puzzle that is the length of the gameWord
    generatePlayerAnswerArray(gameWord);
    displayPlayerArray(playerAnswerArr);

  // while there are guesses left or while the puzzle has empty spaces
    var testCount = 0;
    console.log('start while: incorrectGuesses, maxEasyGuesses, breakForWin: ', incorrectGuesses,' ', maxEasyGuesses,' ', breakForWin);
  // while (incorrectGuesses < maxEasyGuesses || breakForWin === true || testCount > 6) {  // START GAME LOOP
  //   ///////////ADDRESS - hanging man area to be blank
  //   checkForWin();
  //   testCount++;
  // } // END OF GAME LOOP
    do {
      checkForWin();
      testCount++;
      console.log('in the loop');
    } while (testCount < 6 || breakForWin === true);
    console.log('out of game loop');
    checkForLoss();
    console.log('end while: incorrectGuesses, maxEasyGuesses, breakForWin: ', incorrectGuesses,' ', maxEasyGuesses,' ', breakForWin);
  }
>>>>>>> master
}
//*****EXECUTE CODE*******************EXECUTE CODE**********************
runGame();
