'use strict';

// Element in Variable
const dice = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
let totalScore, currentScore, activePlayer;

// Starting Condition
totalScore = [0, 0];
currentScore = 0;
activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;

// Generate Roll Dice
btnRollDice.addEventListener('click', function () {
  const rollDice = Math.trunc(Math.random() * 6) + 1;

  // Display Dice
  dice.src = `dice-${rollDice}.png`;

  // Display Score
  if (rollDice !== 1) {
    currentScore += rollDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch Player
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
