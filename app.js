'use strict';

// Variables/Components:
function PlayerInfo(name) {
  this.playerName = name;
  this.gamesWon = 0;
  this.gamesPlayed = 0;
  this.percentWon = 0;
  this.totalPoints = 0;
};
// Top player stats to display: ranking, player name, total points, and show top 5 players in list in order of total points.
function calculatePercentWon () {
  var numberWon = ((this.gamesWon / this.gamesPlayed) * 100);
  this.percentWon = numberWon + '%';
}
function calculateTotalPoints() {
  var total = (this.gamesWon * 5);
  this.totalPoints = total;
}
function toHtml () {
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
var canvas = document.getElementById('stage'),
  c = canvas.getContext('2d');

function drawLine(context , from, to) {
  context.beingPath();
  context.moveTo(from[0], from[1]);
  context.lineTo(to[0], to[1]);
  context.stroke();
  drawLine(c, [0,0], [100,50]);
}
//Draw the canvas function drawCanvas()
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
//if (badGuesses > 0) {
  //create the upright
  c.strokeStyle = '#A52A2A';
  drawLine(c, [30,185], [30,10]);
  //if (badGuesses > 1) {
    //create the arm gallows
    c.lineTo(150,10);
    c.stroke();
  //}
  //if (badGuesses > 2) {
    c.strokeStyle = 'black';
    c.lineWidth = 3;
    //draw rope
    drawLine(c, [145,15], [145,30]);
    //draw head
    c.beginPath();
    c.moveTo(160, 45);
    c.arc(145, 45, 15, 0, (Math.PI/180)*360);
    c.stroke();
    //}
  //if (badGuesses > 3) {
    //draw body
    drawLine(c, [145,60], [145,130]);
  //}
  //if (badGuesses > 4) {
    //draw left arm
    drawLine(c, [145,80], [110,90]);
  //}
  //if (badGuesses > 5) {
    //draw right arm
    drawLine(c, [145,80], [180,90]);
  //}
  //if  (badGuesses > 6) {
    //draw left leg
    drawLine(c, [145,130], [130,170]);
  //}
  //if (badGuesses > 7) {
    //draw right leg and end game
    drawLine(c, [145,130], [160,170]);
//I wrote the functions to calculate the percent won and the total points. I made an ordered list with an h2 header that states the player name. The first list item is the percent won and the second list item is the total points.
var playerForm = document.getElementById('form');
//var welcomeMessage = document.getElementById('welcome_message');
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
