//Bussiness Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.getCost = function(size, toppings) {
  let sizeCost = size;
  let toppingsCost = toppingsTotal(toppings);
  let totalCost = sizeCost + toppingsCost
  return totalCost;
}

function getSize(userInput) {
  let pizzaSize = userInput;
  return pizzaSize;
}

function getToppings(userCheckboxSelection) {
  let pizzaTopings = Array.from(userCheckboxSelection);
  return pizzaTopings;
}

function toppingsTotal(pizzaTopingsArr) {
  let toppingsTotal = 0;
  for (let i = 0; i < pizzaTopingsArr.length; i++) {
    toppingsTotal += pizzaTopingsArr[i];
  }
  return toppingsTotal;
}