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
};

function Cart() {
  this.pizzas = [];
  this.cartTotal = 0;
}

Cart.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
  this.cartTotal += pizza.getCost();
};

Cart.prototype.clearCart = function() {
  this.pizzas = [];
  this.cartTotal = 0;
};

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
  let cart = new Cart();
  let sizeInput = getSize(document.querySelector('input[name=size]:checked'));
  let toppingInput = getToppings(document.querySelectorAll('input[type=checkbox]:checked'));
  if (toppingInput.length === 0) {
    noToppingsError();
  } else {
    let myPizza = new Pizza(sizeInput, toppingInput);
    cart.addPizza(myPizza);
    // cartReset();
    cartDisplay(cart);
    displayCost(cart);
  }
}


//UI Logic

function displayCost(cart) {
  let totalCost = parseInt(document.getElementById('price-output').innerText);
  document.getElementById('price-output').innerText = totalCost + cart.cartTotal;
}

function noToppingsError() {
  document.getElementById('no-toppings').removeAttribute('class');
}

function errorRemove() {
  document.getElementById('no-toppings').setAttribute('class', 'hidden');
}

function cartDisplay(cart) {
  cart.pizzas.forEach(pizza => {
    let ul = document.getElementById('cart-list');
    let li = document.createElement('p');
    li.innerText = 'Pizza  $' + pizza.getCost();
    ul.append(li);
  });
}

function cartReset() {
  let ul = document.getElementById('cart-list');
  ul.innerHTML = '';
  document.getElementById('price-output').innerText = 0;
}

function clearCart() {
  cartReset();
  errorRemove();
}

window.addEventListener('load', () => {  
  let form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
  document.getElementById('reset').addEventListener('click', clearCart);
});