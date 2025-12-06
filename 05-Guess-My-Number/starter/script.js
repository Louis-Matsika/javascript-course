'use strict';

let numberToGuess;
let score = 0;
let highScore = 0;

function getRandomInt() {
  const max = 3;
  return Math.trunc(Math.random() * max + 1);
}

numberToGuess = getRandomInt();
console.log(numberToGuess);

// document.querySelector('.guess').textContent = 1;
document.querySelector('.score').textContent = score;

function wrongGuess(guess, newNumberToGuess) {
  const message = guess > numberToGuess ? 'too high!' : 'too lowww';

  if (score > highScore) highScore = score;

  document.querySelector('.message').textContent = message;

  document.querySelector('body').style.backgroundColor = '#ff0000';
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.check').style.display = 'none';
  document.querySelector('.guess').value = '';

  numberToGuess = getRandomInt();
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  const scoreIncrement = 1;

  // if player wins
  if (guess == numberToGuess) {
    document.querySelector('.number').textContent = `${numberToGuess}`;
    numberToGuess = getRandomInt(3);
    score += scoreIncrement;
    document.querySelector('.message').textContent = 'correct!';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#14b745';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.guess').value = '';
    // if they didn't enter a guess
  } else if (!guess) {
    document.querySelector('.message').textContent = 'theres no number';

    // else if they did enter a number but it wasn't correct
  } else if (guess != numberToGuess) {
    wrongGuess(guess);
  }
  console.log(numberToGuess);
});

// reset game
document.querySelector('.again').addEventListener('click', function () {
  numberToGuess = getRandomInt();
  if (score > highScore) highScore = score;
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').style.display = 'block';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.number').textContent = '?';
  console.log(numberToGuess);
});
