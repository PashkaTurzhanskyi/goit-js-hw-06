const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("ul#ingredients");

const makeIngredientsList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    item.classList.add("item");
    return item;
  });
};
const ingredientsArray = makeIngredientsList(ingredients);
ingredientsEl.append(...ingredientsArray);
