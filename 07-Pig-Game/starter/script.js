'use strict';

const player0 = document.querySelector('.player--0');
const player0Score = document.getElementById('score--0');

const player1 = document.querySelector('.player--1');
const player1Score = document.getElementById('score--1');

const startButton = document.querySelector('.btn--start');
const newGameButton = document.querySelector('.btn--new');
const cashOutButton = document.querySelector('.btn--hold');

const dice = document.querySelector('.dice');
const diceButton = document.querySelector('.btn--roll');

let scores, currentScore, activePlayer;

function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  newGameButton.classList.remove('hidden');
  startButton.classList.add('hidden');
  diceButton.classList.remove('hidden');
  cashOutButton.classList.remove('hidden');
  dice.classList.remove('hidden');
  player0.classList.add('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner', 'player--active');
  player0Score.textContent = 0;
  player1Score.textContent = 0;
}

function switchPlayer() {
  document.getElementById([`current--${activePlayer}`]).textContent = 0;

  function togglePlayers() {
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    currentScore = 0;
  }

  switch (activePlayer) {
    case 0:
      activePlayer = 1;
      togglePlayers();
      break;
    case 1:
      activePlayer = 0;
      togglePlayers();
      break;
  }
}

function diceRoll() {
  const roll = Math.trunc(Math.random() * 6 + 1);
  dice.src = `dice-${roll}.png`;
  console.log(roll);

  function updateCurrentScore() {
    currentScore += roll;
    document.getElementById([`current--${activePlayer}`]).textContent =
      currentScore;
  }

  switch (roll) {
    default:
      updateCurrentScore();
      break;
    case 1:
      switchPlayer();
      break;
  }
}

function cashOut() {
  switch (activePlayer) {
    case 0:
      scores[0] += currentScore;
      checkIfGameOver();
      player0Score.textContent = scores[0];
      switchPlayer();
      break;
    case 1:
      scores[1] += currentScore;
      checkIfGameOver();
      player1Score.textContent = scores[1];
      switchPlayer();
      break;
  }
}

function checkIfGameOver() {
  let goal = 100;
  if (scores[0] >= goal) {
    document
      .querySelector([`.player--${activePlayer}`])
      .classList.add('player--winner');
    cashOutButton.classList.add('hidden');
    cashOutButton.classList.add('hidden');
  } else if (scores[1] >= goal) {
    document
      .querySelector([`.player--${activePlayer}`])
      .classList.add('player--winner');
    cashOutButton.classList.add('hidden');
    diceButton.classList.add('hidden');
  } else return;
}

startButton.addEventListener('click', init);
newGameButton.addEventListener('click', init);
diceButton.addEventListener('click', diceRoll);
cashOutButton.addEventListener('click', cashOut);