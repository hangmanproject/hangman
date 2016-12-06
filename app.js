'use strict';

// Variables/Components:
var players = [];
var allPlayerNames  = [];
// - bank of letter options that can be clicked
var letterOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// - display of blank spaces puzzle
var userString = [];
// - display number of incorrect guess
var incorrectGuesses = 0;
// - store number of max guesses (stretch: for each difficulty)
var maxEasyGuesses = 11; // will correspond with number of easy difficulty body parts
// - generate bank of words to fill in puzzle
var easyWords = ['ebece'];//four', 'phone', 'mouse', 'bottle', 'notebook']; // subject to change
// a variable to store the game word
var gameWord;
// - generate a hanging man
// _______ADDRESS______________________

// while there are guesses left or while the puzzle has empty spaces
// while (incorrectGuesses < maxEasyGuesses) { // START GAME LOOP
  // choose a random word from easy/medium/hardWords by getting a random number between 0-arrWords.length
  // set gameWord to arrWords[random number]
  gameWord = easyWords[generateRandomNumber(easyWords)];

  // generate a userString blank puzzle that is the length of the gameWord
  for (var i = 0; i < gameWord.length; i++) {
    userString.push('_');
  };

  ///////////ADDRESS - hanging man area to be blank

  // - user to click letter from the letter bank,
  var letterButton = document.getElementById('letter_buttons'); //get the element
  letter_buttons.addEventListener('click', handleClick); // add the listener
  function handleClick(event) { // create the handler
    event.preventDefault(); // prevent page refresh

  ///////ADDRESS - if first click in the letter bank, add one to the game played property

    // determine if the event.target.value is in the gameWord array
    if (gameWord.includes(event.target.value) === true) {
      // loop through the gameWord to match target value (letter) with any same letter in the gameword
      for (var i = 0; i < gameWord.length; i++) {
        if (event.target.value === gameWord[i]) {
          // replace the blank index with the matching letter
          userString[i] = gameWord[i];
          console.log('if true, userString: ', userString.join(' '));
          // change the letter in the letter bank (buttons) to display as a correct selection
          event.target.disabled = true;
          // nothing happens to the hangman, nothing happens in the max guesses
        }
      }
    } else if (gameWord.includes(event.target.value) === false) {
      // if user selects a invalid letter, nothing changes in the userString
      console.log('if wrong, userString: ', userString);

      //       - one body part gets added to the hangman
        // renderBodyPart()

      // incorrectGuesses increases by 1 OR max guesses display goes down one
      incorrectGuesses += 1;
      console.log('false, incorrectGuesses: ', incorrectGuesses);
      // disable the button to prevent the player from selecting it again
      event.target.disabled = true;
    }
  }
// } // END OF GAME LOOP

function generateRandomNumber(object) {
  return Math.floor(Math.random() * object.length);
}

function PlayerInfo(name) {
  this.playerName = name;
  this.gamesWon = 0;
  this.gamesPlayed = 0;
  this.percentWon = 0;
  this.totalPoints = 0;
};

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
// Top player stats:
// - to display
//   - ranking
//   - player name
//   - total points
// - show top 5 players in list in order of total points
