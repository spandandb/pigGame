"use strict";

// selecting the elements
const diceImg = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

// declaring the variables
let scores, currScore, isPlaying, activePlayer;

const init = function () {
  diceImg.classList.add("hidden");
  scores = [0, 0];
  currScore = 0;
  isPlaying = true;
  activePlayer = 0;
};

const switchPlayer = function () {
  currScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = currScore;
  activePlayer = activePlayer ? 0 : 1;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

init();

btnRoll.addEventListener("click", function () {
  if (isPlaying) {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceImg.classList.remove("hidden");
    diceImg.src = `./images/dice-${randomNumber}.png`;

    if (randomNumber === 1) {
      switchPlayer();
      return;
    }

    currScore += randomNumber;
    document.querySelector(`#current--${activePlayer}`).textContent = currScore;
  }
});