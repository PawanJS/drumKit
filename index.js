"use strict";
const btn = document.querySelectorAll(".js-btn");

const handleClick = function (button) {
  const audio = new Audio(`sounds/${button}.mp3`);
  audio.play();
};

const btnAnimation = function (buttonClicked) {
  const activeButton = document.querySelector(`.${buttonClicked}`);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
};

btn.forEach((btn) =>
  btn.addEventListener("click", function () {
    const button = this.textContent;
    handleClick(button);
    btnAnimation(button);
  })
);

document.addEventListener("keydown", function (event) {
  if (
    event.key === "w" ||
    event.key === "s" ||
    event.key === "a" ||
    event.key === "d" ||
    event.key === "j" ||
    event.key === "k" ||
    event.key === "l"
  ) {
    const button = event.key;
    handleClick(button);
    btnAnimation(button);
  }
});
