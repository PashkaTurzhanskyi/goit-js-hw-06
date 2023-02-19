const inputEl = document.querySelector("input#validation-input");

const addClasses = (event) => {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
};
inputEl.addEventListener("blur", addClasses);
