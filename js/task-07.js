const inputEl = document.querySelector("input#font-size-control");

const spanEl = document.querySelector("span#text");
spanEl.style.fontSize = "56px";

const changeFontSize = () => {
  spanEl.style.fontSize = `${inputEl.value}px`;
};
inputEl.addEventListener("input", changeFontSize);
