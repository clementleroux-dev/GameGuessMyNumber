'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   NO IMPUT
  if (!guess) {
    displayMessage('🚫 Pas de nombre proposé');
    // WIN
  } else if (guess === secretNumber) {
    displayMessage('💪 Bravo !!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.left').style.display = 'none';
    document.querySelector('.right').style.textAlign = 'center';
    document.querySelector('.right').style.fontSize = '5em';
    document.querySelector('.number').style.width = '40rem';
    document.querySelector('.number').style.fontSize = '10em';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // TOO HIGH
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '👇 Trop haut !' : '👆 Trop bas !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😤 Vous avez perdu !');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  displayMessage('A vous de jouer');
  document.querySelector('.guess').value = null;
  document.querySelector('.left').style.display = 'unset';
  document.querySelector('.right').style.textAlign = 'unset';
  document.querySelector('.right').style.fontSize = '2rem';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.fontSize = '6rem';
});
