'use strict';

// document.querySelector('.message').textContent = 'Correct Number!'; 

// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 10;

// document.querySelector('.guess').value = 90;

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;

let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    // No input
    if(!guess) {
        displayMessage('No value passed');
    }

    // Correct guess
    else if(guess === secretNumber) {
        displayMessage('Correct Number!🎊');
        document.querySelector('.number').textContent = secretNumber;
        // changing css
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // highscore calc
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    // Wrong guess
    else if(guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? 'Too High! 📈' : 'Too low! 📉');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = 'You Lost! 👎';
        }
    }
    
});

// functioning of again button
document.querySelector('.again').addEventListener('click', function() {

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';
    score = 20;
    console.log(secretNumber = Math.trunc(Math.random()*19) + 1);
});