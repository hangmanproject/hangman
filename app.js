'use strict';

// Variables/Components:

// - bank of letter options that can be clicked
var letterOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
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
var breakForWin = false;
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
        // checkForWin();
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
  }
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

    //   - refresh page?
  }
}

function checkForLoss() {
  if (remainingLetters > 0) { // if player has lost
    //   - hangman will have all parts
    //   - max guesses is full
    //   - display correct letters in the puzzle as the answer

    //   - inform user that they lost
    endMessage.textContent = 'You failed to guess \'' + gameWord + '.\' A man has been hanged today. You lose.';

    //   - refresh page?
  }
}

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

//*****EXECUTE CODE*******************EXECUTE CODE**********************
runGame();
