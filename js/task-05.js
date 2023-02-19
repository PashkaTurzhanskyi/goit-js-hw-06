const inputEl = document.querySelector("input#name-input");

const nameEl = document.querySelector("span#name-output");

const makeNameEl = (event) => {
  nameEl.textContent = event.currentTarget.value;
};

inputEl.addEventListener("input", makeNameEl);
