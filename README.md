# hangman

## User Stories
#### Developer
- As a developer, I want to make a hangman project with three pages so I can separate functionality.
1. Linking the html page to the game page and about me page and doing the same on the other pages.
- As a developer, I want to create a visually interesting game so the player is compelled to keep playing.
1. Work on the styling in CSS. Making sure the functionality works on all three pages and that the CSS is visually appealing.
2. Adding some alerts to the JS file so we can interact with the user. For example, giving them an alert after they have completed a game letting them know if they have won or lost.
3. The user inputs on the home page and the game page. On the home page, we have a form event for the user to enter their name in order to create a profile. On the game page, having a button for each letter in the alphabet that the user can click on which returns either a correct or incorrect statement. If it is correct, the letter needs to be added to the word that they are trying to guess. If it is incorrect, displaying it as a wrong letter and crossing that letter or turning it red to signify that it is incorrect.
4. Making sure the functionality works on all three pages. Applying DRY so that we aren't repeating the same code and making it as condensed as we can. Applying console.logs to our JS page to help with debugging and making sure our code is working. Testing the game out multiple times. Working on a new branch for everyday and making commits throughout that day.
5. Keeping user's profiles and keeping track of how many times they have played at each level and how many games they have won. This is it's own developer goal for the user story so that is where it will be explained in detail.
- As a developer, I want to have a good workflow between collaborators so the individual contributions aren't conflicting.
1. Dividing tasks evenly and communicating with each other.
2. Giving constructive and helpful feedback. Also sharing ideas in a productive way.
3. Checking somebody's progress and making sure the code works.
4. Planning certain tasks out for each individual so two people are not working on the same thing.
5. Being patient with one another and letting everybody contribute.
6. Meeting each day and going over the previous day's progress and work and talking about what we want to accomplish for that certain day.
7. Making sure everybody is contributing in their own way and checking in with one another throughout the day.
8. Communicating between team mates in an efficient way so we can avoid merge conflicts as best as possible.
9. If a merge conflict does arise, asking for help from the instructors or researching the solution for the merge conflict.
- As a developer, I want to create and store user profiles so their information can be preserved upon revisiting.
1. Setting a constructor function for a new player.
2. Adding properties to that constructor function such as the user's name, how many times they have played, how many times they have won, and showing that for each level of difficulty.
- As a developer, I want two of my pages to be interactive with the user so it's an interactive experience.
  // include on the index page an input field to record and store the player's name
  // include on the game page buttons representing each alphabetical character that responds to a click by changing presentation (font/color/etc) to show the letter was used
  // include on the game page an icon with a hover property to display game instructions
  // include on the game page a 'play again' button that starts a new game for the same player profile
- As a developer, I want to have a scoreboard so I can present information of top users.
  // access the player objects
  // sort players by the number of wins property and difficulty, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort  
  // push the top players into a top players array
  // use the top players array to display on the scoreboard. Maybe as a list?
- As a developer, I want a canvas element so I can implement a hangman drawing.
  // if the player uses the wrong letter, render a body part to the canvas
  // if the player hits the MAX GUESSES limit, the whole hangman will be rendered

- As a developer, I want two of my pages to be interactive with the user so it's an interactive experience.
- As a developer, I want to have a scoreboard so I can present information of top users.
- As a developer, I want a canvas element so I can implement a hangman drawing.

#### Designer
- As a designer, I want to have a consistent style across the pages so the player knows they're in the same environment.
- As a designer, I want to establish a hierarchy of display elements so the user will only have to minimally scroll.
- As a designer, I want to style the elements in a playful fashion so the player feels like they're in a fun environment.
- As a designer, I want to organize the personal stats and the scoreboard so they can be easily interpreted.

#### Player
- As a player, I want to play a hangman game so I can have fun.
- As a player, I want to track my stats so I can see my performance.
- As a player, I want to compare my performance to other players so I can validate my ranking.
- As a player, I want to learn about the game developers so I can donate to their cause.
- As a player, I want clear instructions and a user experience so I can effortlessly play the game.
- As a player, I want to be able to play the game multiple times so I can update my personal stats.
- As a player, I want to stylistically choose my game interface so I can view the game in an enjoyable format (stretch-goal).
- As a player, I want to be able to choose the game difficulty so I can challenge myself (stretch-goal).
