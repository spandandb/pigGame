"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const dice = document.querySelector(".dice");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const player0Title = document.querySelector("#name--0");
const player1Title = document.querySelector("#name--1");

dice.classList.add("hidden");
let score0 = Number(score0El.textContent);
let score1 = Number(score1El.textContent);
let currScore0 = Number(current0El.textContent);
let currScore1 = Number(current1El.textContent);

rollBtn.addEventListener("click", function () {
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  dice.setAttribute("src", `./images/dice-${randomNumber}.png`);
  dice.classList.remove("hidden");

  if (randomNumber === 1) {
    currScore0 = 0;
    currScore1 = 0;
    switchPlayer();
    return;
  }

  addCurrentScore(randomNumber);
});

holdBtn.addEventListener("click", function () {
  if (player0.classList.contains("player--active")) {
    score0 += currScore0;
    score0El.textContent = score0;
    if (score0 > 30) {
      player0Title.textContent = "✅ You Win";
      buttonDisabler();
      return;
    }
  } else {
    score1 += currScore1;
    score1El.textContent = score1;
    if (score1 > 30) {
      player1Title.textContent = "✅ You Win";
      buttonDisabler();
      return;
    }
  }
  currScore0 = 0;
  currScore1 = 0;
  switchPlayer();
});

function switchPlayer() {
  if (player0.classList.contains("player--active")) {
    player0.classList.remove("player--active");
    player1.classList.add("player--active");
    current0El.textContent = 0;
  } else {
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
    current1El.textContent = 0;
  }
}

function addCurrentScore(number) {
  if (player0.classList.contains("player--active")) {
    currScore0 += number;
    current0El.textContent = currScore0;
  } else {
    currScore1 += number;
    current1El.textContent = currScore1;
  }
}

function buttonDisabler() {
  rollBtn.classList.add("disabled");
  holdBtn.classList.add("disabled");
  rollBtn.setAttribute("disabled", "disabled");
  holdBtn.setAttribute("disabled", "disabled");
}
