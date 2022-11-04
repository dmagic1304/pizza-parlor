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
  let pizzaSize = userInput.value;
  return pizzaSize;
}

function getToppings(userCheckboxSelection) {
  let pizzaTopingsArr = Array.from(userCheckboxSelection);
  return pizzaTopingsArr;
}

function toppingsTotal(pizzaTopingsArr) {
  let toppingsTotal = 0;
  for (let i = 0; i < pizzaTopingsArr.length; i++) {
    toppingsTotal += pizzaTopingsArr[i];
  }
  return toppingsTotal;
}

function handleSubmit() {
  e.preventDefault();
  let sizeInput = getSize(userInput);
  let toppingInput = getToppings(userSelection);
}

