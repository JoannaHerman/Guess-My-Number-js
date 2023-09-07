'use strict';

/////////////////////////////////////////////////////////////////////////////
///////////////THEORY/////////////////////////////

/*document.querySelector selectuje element
.textContent pokazuje zawartość elementu, w tym wypadku jest to
'Start guessing...', bo to jest zawartość klasy message w HTML */

//console.log(document.querySelector('.message').textContent);

/*seting content of the element */

//document.querySelector('.message').textContent = 'Correct Number';

/*selecting content of the class NUMBER and SCORE */

//document.querySelector('.number').textContent = 13;
//document.querySelector('.score').textContent = 10;

///* getting and setting data from the INPUT. The class is GUESS*///
/*using .value to SET a value (manipulate element) */

//document.querySelector('.guess').value = 23;

/* using .value (value property) to GET the value*/

//console.log(document.querySelector('.guess').value);

/////////////////////////////////////////////////////////////////////////////
////////////////APLICATION/////////////////

//defiying a secret number
//Math.trunck delates decimal numbers; +1 at the end to do a range of numbers between 1-20 (with Math.truck we only get at the highest 19.9999, and without decimals its just 19)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//making score counter
let score = 20;
let highScore = 0;
//////////DRY CODE///////
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
///*using EVENT LISTENER */// event is somthing that happens on the page
/* selecting the element where the event should happen (class CHECK - child of class GUESS)
type of event is CLICK*/
/*EVENT HANDLER -  FUNCTION telling event listener what to do. Specyfying reaction to CLICK */

document.querySelector('.check').addEventListener('click', function () {
  //input from the user is a string, we need to compare numbers so we transform input to a number by Number()
  const guess = Number(document.querySelector('.guess').value);
  //roboczo
  // console.log(guess, typeof guess);

  ///////////////INPUTING LOGIC INTO GAME//////////////////
  //checking whats the value from the user
  //
  if (!guess) {
    ///DRY CODE///
    //document.querySelector('.message').textContent = 'No number';
    displayMessage('No number');
  } else if (guess === secretNumber) {
    //WIN
    //DRY CODE
    //document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    //changing background color to green when player wins
    document.querySelector('body').style.backgroundColor = ' #60b347';
    //changing winning number style
    document.querySelector('.number').style.width = '30rem';
    //implementing highScore value
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  ////////////////////////////////////////////////////////////////////////
  //REFACTORING THE CODE//
  else if (guess !== secretNumber) {
    //TOO HIGH
    if (score > 1) {
      ///DRY CODE//
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high' : 'Too low';
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      //score counting
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //message when scores dropes to 0 that we lose
      ///DRY CODE//
      //document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
      score--;
      document.querySelector('.score').textContent = 0;
    }
  }
  //////////////////////////////////////////////
  //BEFORE REFACTORING THE CODE//
  // } else if (guess > secretNumber) {
  //   //TOO HIGH
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     //score counting
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     //message when scores dropes to 0 that we lose
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     score--;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   //TOO LOW
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low';
  //     //score counting
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     //message when scores dropes to 0 that we lose
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     score--;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
//1

//roboczo console.log
console.log(secretNumber);

document.querySelector('.again').addEventListener('click', function () {
  //4
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  //2 initial values
  //(CZEMU TAK NIE MOŻE BYĆ?) // is it becouse we are restoring not setting initial values in BOTH examples below? (commented ones); second one doesnt even work, why?
  /////////////////////////////////////////// document.querySelector('.score').textContent = 20; // albo// document.querySelector('.score').value = 20;//////////////////////////////////
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; //
  //3 initial conditions
  ///DRY CODE///
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ''; //.value not .textContent becouse its SETTING a NEW VALUE

  //roboczo console.log
  console.log(secretNumber);
});
