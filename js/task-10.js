function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const div = document.querySelector("div#boxes");

let amount = 0;

buttonCreate.addEventListener("click", createInputValue);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let x = 20;
  for (let i = 0; i < amount; i += 1) {
    x += 10;
    const divMarkup = `<div style="background-color:${getRandomHexColor()}; width:${x}px; height:${x}px; border:1px solid black"></div>`;
    div.insertAdjacentHTML("beforeend", divMarkup);
  }
}
function createInputValue() {
  amount = input.value;
  createBoxes(amount);
}
function destroyBoxes() {
  input.value = "";
  div.innerHTML = "";
}
