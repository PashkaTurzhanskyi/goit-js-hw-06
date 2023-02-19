const inputEl = document.querySelector("input#validation-input");

const addClasses = (event) => {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
};
inputEl.addEventListener("blur", addClasses);
