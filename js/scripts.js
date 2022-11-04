//Bussiness Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.getCost = function() {
  let toppingsCost = toppingsTotal(this.toppings);
  if (toppingsCost === 0) {
    noToppingsError();
  }
  let totalCost = parseInt(this.size) + parseInt(toppingsCost)
  return totalCost;
}

function Cart() {
  this.pizzas = [];
}

Cart.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
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
    toppingsTotal += parseInt(pizzaTopingsArr[i].value);
  }
  return toppingsTotal;
}

function handleSubmit(e) {
  e.preventDefault();
  errorRemove();
  let sizeInput = getSize(document.querySelector('input[name=size]:checked'));
  let toppingInput = getToppings(document.querySelectorAll('input[type=checkbox]:checked'));
  let myPizza = new Pizza (sizeInput, toppingInput);
  let totalCost = myPizza.getCost();
  displayCost(totalCost);
}


//UI Logic

let cart = new Cart();

function displayCost(totalCost) {
  document.getElementById('price-output').innerText = '$' + totalCost;
}

function noToppingsError() {
    document.getElementById('no-toppings').removeAttribute('class');
}

function errorRemove() {
  document.getElementById('no-toppings').setAttribute('class', 'hidden');
}

window.addEventListener('load', function(){
  let form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
})