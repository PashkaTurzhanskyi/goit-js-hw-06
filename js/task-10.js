function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const div = document.querySelector("div#boxes");

let amount = 0;

buttonCreate.addEventListener("click", createInputValue);

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    // const createDiv = document.createElement("div");
    // div.append(createDiv);
    const divMarkup = `<div style="background-color:${getRandomHexColor()}; width:30px; height:30px;"></div>`;
    console.log(divMarkup);
    div.insertAdjacentHTML("beforeend", divMarkup);
  }
}
function createInputValue() {
  amount = input.value;
  createBoxes(amount);
}
