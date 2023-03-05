let selected;
let score = 0;
const dropzones = document.querySelectorAll(".drop");
document.querySelector("#score").innerText = score;
const startGameBtn = document.querySelector("button");
startGameBtn.style.display = "none";
startGameBtn.addEventListener("click", startGame);

function endGame() {
  startGameBtn.style.display = "inline";
  document.querySelector(".drag-section").style.border = "none";
}
function startGame() {
  window.location.reload();
}

function handleDrop(e) {
  if (document.querySelector(".drag-section").childElementCount === 1) {
    endGame();
  }
  if (e.target.classList.contains(selected.className)) {
    e.target.classList.remove("drop");
    selected.remove();
    score++;
    document.querySelector("#score").innerText = score;
    return;
  }
  score--;
  document.querySelector("#score").innerText = score;
}

dropzones.forEach(function (element) {
  element.addEventListener("drop", handleDrop);
});

function handleDragStart(e) {
  selected = e.target;
  e.target.style.opacity = 0.5;
}

document.addEventListener("dragstart", handleDragStart);

function handleDragEnd(e) {
  e.target.style.opacity = 1;
}

document.addEventListener("dragend", handleDragEnd);

function allowDrop(e) {
  e.preventDefault();
}

dropzones.forEach(function (value) {
  value.addEventListener("dragover", allowDrop);
});
