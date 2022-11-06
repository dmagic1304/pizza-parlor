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
  let totalCost = parseInt(this.size) + parseInt(toppingsCost);
  return totalCost;
}

function Cart() {
  this.pizzas = [];
  this.id = 0;
  this.cartTotal = 0;
}

Cart.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
  this.cartTotal += pizza.getCost();
}

Cart.prototype.addId = function(pizza) {
  this.id += 1;
  pizza.id = this.id;
}

Cart.prototype.clearCart = function() {
  this.pizzas = [];
  this.id = 0;
  this.cartTotal = 0;
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
  let myPizza = new Pizza(sizeInput, toppingInput);
  cart.addPizza(myPizza);
  cartReset();
  cartDisplay();
  displayCost();
}


//UI Logic

let cart = new Cart();

function displayCost() {
  document.getElementById('price-output').innerText = '$' + cart.cartTotal;
}

function noToppingsError() {
  document.getElementById('no-toppings').removeAttribute('class');
}

function errorRemove() {
  document.getElementById('no-toppings').setAttribute('class', 'hidden');
}

function cartDisplay() {
  cart.pizzas.forEach(pizza => {
    let ul = document.getElementById('cart-list');
    let li = document.createElement('p');
    li.innerText = 'Pizza ' + (cart.pizzas.indexOf(pizza) + 1) + ' $' + pizza.getCost();
    ul.append(li);
  });
}

function cartReset() {
  let ul = document.getElementById('cart-list');
  ul.innerHTML = '';
}

function clearCart() {
  cart.clearCart();
  cartReset();
  displayCost();
  errorRemove();
}

window.addEventListener('load', function() {
  let form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
  document.getElementById('reset').addEventListener('click', clearCart);
});