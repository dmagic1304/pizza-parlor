//Bussiness Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
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
    toppingsTotal += pizzaTopingsArr[i].value;
  }
  return toppingsTotal;
}

function handleSubmit(e) {
  e.preventDefault();
  let sizeInput = getSize(document.querySelector('input[name=size]:checked'));
  let toppingInput = getToppings(document.querySelectorAll('input[type=checkbox]:checked'));
  let myPizza = new Pizza (sizeInput, toppingInput);
  let totalCost = myPizza.getCost(sizeInput, toppingInput);
  console.log('total cost' + totalCost);
  displayCost(totalCost);
}


//UI Logic

function displayCost(totalCost) {
  document.getElementById('price-output').innerText = totalCost;
}

window.addEventListener('load', function(){
  let form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
})
