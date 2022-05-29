'use strict';

const secNumber = Math.trunc(Math.random() * 100) + 1;
console.log(secNumber);

let score = 20;
let highScore = 0;
const mainFunction = (classs, messsage) => {
  document.querySelector(classs).textContent = messsage;
};
// const userName = prompt('input your name here');
document.querySelector('.check').addEventListener('click', function () {
  const checkk = Number(document.querySelector('.guess').value);
  if (!checkk) {
    mainFunction('.message', 'No Number Selected');
  } else if (checkk === secNumber) {
    mainFunction('.message', 'you won the game.....');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    mainFunction('.number', secNumber);
    if (score > highScore) {
      highScore = score;
      mainFunction('.highscore', highScore);
    }
  } else if (checkk !== secNumber) {
    if (score > 1) {
      mainFunction(
        '.message',
        checkk > secNumber ? 'too high.....' : 'too low.....'
      );
      score--;
      mainFunction('.score', score);
    } else {
      mainFunction('.score', 0);
      mainFunction('.message', 'you lost the game');
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  mainFunction('.message', 'start guessing');
  score = 20;
  mainFunction('.score', 20);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  mainFunction('.number', '?');
  document.querySelector('.guess').value = '';
});
