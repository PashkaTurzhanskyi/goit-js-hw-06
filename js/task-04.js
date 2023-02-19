let counterValue = 0;
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const counterValueEl = document.querySelector("span#value");

const onDecrementValue = () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
};

const onIncrementValue = () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
};

buttonDecrement.addEventListener("click", onDecrementValue);
buttonIncrement.addEventListener("click", onIncrementValue);
