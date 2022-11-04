function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

function getSize(userInput) {
  let pizzaSize = userInput;
  return pizzaSize;
}

function getToppings(userCheckboxSelection) {
  let pizzaTopings = Array.from(userCheckboxSelection);
  return pizzaTopings;
}