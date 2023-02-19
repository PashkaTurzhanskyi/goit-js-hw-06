const inputEl = document.querySelector("input#font-size-control");

const spanEl = document.querySelector("span#text");

const changeFontSize = () => {
  spanEl.style.fontSize = `${inputEl.value}px`;
};
inputEl.addEventListener("input", changeFontSize);
