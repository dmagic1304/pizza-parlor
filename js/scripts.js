//Bussiness Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.getCost = function(size) {
  let sizeCost = size;
  return sizeCost;
}

function getSize(userInput) {
  let pizzaSize = userInput;
  return pizzaSize;
}

function getToppings(userCheckboxSelection) {
  let pizzaTopings = Array.from(userCheckboxSelection);
  return pizzaTopings;
}