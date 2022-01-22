"use strict";
const alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function getNewAlpha() {
  let i = Math.floor(Math.random() * alpha.length);
  return alpha[i];
}
let secretAlphabet = getNewAlpha();
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  // When there is no input
  if (guess == 0) {
    //  invoking displayMessage function
    displayMessage("⛔️ No Alphabet!");

    // When player wins
  } else if (guess == secretAlphabet) {
    displayMessage("🎉 Correct Alphabet!");
    document.querySelector(".text").textContent = secretAlphabet;
    document.querySelector("body").style.backgroundColor = "#EEE269";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  }
  // When guess is wrong
  else if (guess !== secretAlphabet) {
    if (score > 1) {
      displayMessage(guess > secretAlphabet ? "🥲 Too high!" : "🥺 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretAlphabet = getNewAlpha();
  displayMessage("Start guessing...🥸");
  document.querySelector(".score").textContent = score;
  document.querySelector(".text").textContent = "?";
  document.querySelector(".guess").value = "";
});
