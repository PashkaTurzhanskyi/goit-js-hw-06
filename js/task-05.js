const inputEl = document.querySelector("input#name-input");

const nameEl = document.querySelector("span#name-output");

const makeNameEl = (event) => {
  if (event.currentTarget.value === "" || event.currentTarget.value === " ") {
    nameEl.textContent = "Anonymous";
  } else {
    nameEl.textContent = event.currentTarget.value;
  }
};

inputEl.addEventListener("input", makeNameEl);
