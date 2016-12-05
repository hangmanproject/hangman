# Javascript Structure

HOME PAGE:
Components
- username from input field, store as property in object
- object constructor, set to local storage
  - name
  - games won
  - games played
  - win percentage
  - total points
  (consider levels of difficulty in the future)
  - button to take you to game page

  Pseudocoding:
  Player name:
  - user to enter chosen name
    - set to uppercase/lowercase (check on if numbers/characteristics are ok)
    - loop through local storage to see if chosen name has been used before
      - if chosen doesn't exist, create new player object
      - if chosen name does exist, load previously stored information for that name
    - possibly add message to welcome new or old player
  Select game:
  - user to select game to play
    - if user has not entered player name
      - stay on page and alert them to log in
    - if user has entered name
      - user to move to the game page
Top player stats:
- to display
  - ranking
  - player name
  - total points
- show top 5 players in list in order of total points

GAME PAGE:
Components:
- bank of letter options that can be clicked
- display of blank spaces puzzle
- display number of incorrect guess
- generate a hanging man
- generate bank of words to fill in puzzle

Pseudocoding:
Game:
- randomly generated blank puzzle to display that is the length of the random words
- hanging man area to be blank
- letter bank to be refreshed
- guesses to maximum
- max guesses to equal hangman parts

- user to click letter from the letter bank, while there are guess left or while the puzzle has empty spaces
  - if first click in the letter bank, add one to the game played property
  - loop through puzzle word to match selected letter with any instance in that word and then replace the blank index with the selected letter
    - if user selects valid letter,
      - letter to display in puzzle
      - letter in the letter bank to display as a correct selection
      - nothing happens to the hangman
      - nothing happens in the max guesses
    - if user selects a invalid letter
      - nothing displays in the puzzle
      - letter in the letter bank to display as an incorrect selection
      - one body part gets added to the hangman
      - max guesses display goes down one
    - if user selects an already guessed letter
      - max guesses does not change, no hangman part is added
      - user's only option is to select an unselected letter

- whether guess is correct or incorrect, user needs be able to select another letter while guesses remain or puzzle has empty spaces

- if user loses game
  - hangman will have all parts
  - max guesses is full
  - display correct letters in the puzzle as the answer
  - inform user that they lost
  - refresh page?

- if user wins game
  - all puzzle spaces will be filled with the correct letters
  - max guesses is not full
  - hangman is not completer
  - inform user that they won
  - log win and add points to total points on the user object and set to local storage
  - refresh page?

Personal Stats:
- to display
  - player name
  - win total
  - games played total
  - win percentage
  - total points
- if user object already exists, display existing information
- updated stats every time page refreshes
- stretch goal - add graph



  ABOUT PAGE:
  Components:
  possible donate button
