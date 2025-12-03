'use strict';

const numberToGuess = document.querySelector('.number').textContent = "11";

// document.querySelector('.guess').textContent = 1;

document.querySelector('.check').addEventListener('click', function ()
{
    const guess = document.querySelector('.guess').value;

    if(guess === numberToGuess){
        document.querySelector('.message').textContent = "correct!";
    } 
    else 
    {
        document.querySelector('.message').textContent = "try again...";
    }

});