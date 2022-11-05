# _Pizza Parlor_

#### By _**Dominik Magic**_

#### _A website that will let you know the price of the pizza you want_<p>&nbsp;</p>  

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Bootstrap_

## Description

_This website was created by for purpose of demonstrating the use of Object constructors and Object.prototype.methods. Based on the pizza size and toppings selection, the website will return the total cost of the pizza._

## Setup/Installation Requirements

* _Clone [this](https://github.com/dmagic1304/pizza-parlor) repositiory to your desktop_
* _Open the cloned portfolio folder located on your desktop_
* _Open the index.html file in your browser_

## Tests

```
Describe: Pizza()

Test1: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: getSize()

Test1: "It should take user pizza size input and return it as pizza size variable"
Code: getSize('small');
Expected Output: return let pizzaSize = 'small'

Describe: getToppings()

Test1: "It should take user pizza toppings input and return it as pizza topping variable"
Code: getToppings(pepperoni);
Expected Output: return let pizzaToppings = 'pepperoni'

Test2: "It should take multiple user toppings input and return a variable with selected items in an array"
Code: getToppings('pepperoni', 'cheese', 'onion');
Expected Output: return let pizzaToppings = ['pepperoni', 'cheese', 'onion']

Test3: "It will take in a NodeList element as input/argument, convert it into an array and return it"
Code: getToppings([0: pepperoni, 1: cheese, 2: onions]);
Expected Output: let pizzaToppings = ['pepperoni', 'cheese', 'onion']

Describe: toppingsTotal()

Test1: "It will add up all the values in the array and return the total sum"
Code: toppingsTotal(arr=[1, 2, 3]);
Expected Output: return toppingsTotal = 6;

Describe: Pizza.prototype.getCost()

Test1: "It will store pizza size value as a sizeCost variable"
Code: myPizza.prototype.getCost('small');
Expected Output: let sizeCost = 10 

Test2: "It will use toppingsTotal() to store pizza topings selection value as a toppingsCost variable and return it"
Code: myPizza.getCost(size, toppingsArray = [1, 2, 3]);
Expected Output: let toppingsCost = 6;

Test3: "it will return the total sum of the sizeCost and toppingsCost values"
Code: myPizza.getCost(size = 10, toppingsArray = [1, 2, 3]):
Expected Output: let totalCost = 16;

Describe: handleSubmit()

Test1: "It will store user inputed size value using getSize()"
Code: handleSubmit();
Expected Output: let sizeInput = 'small'

Test2: "It will store users toppings selection as array using getToppings()"
Code: handleSubmit();
Expected Output: let toppingsInput = [value1, value2, value3];

Test3: "It will create myPizza object using Pizza constructor and pass it size and toppings properties"
Code: handleSubmit();
Expected Output: myPizza = {'medium', [pepperoni, cheese, onions]}

Test4: "It will pass the totalCost to displayCost() that will handle display on UI"
Code: handleSubmit();
Expected Output: totalCost value displayed on UI

Describe: Cart()

Test1: "It should return a Cart object with one propertie that is set to empty array"
Code: const cart = new Cart();
Expected Output: Cart {pizzas: []}

Describe: Cart.prototype.addPizza()

Test1: "It will add input(pizza) to the pizzas property array"
Code: Cart.prototype.addPizza(pizza1);
Expected Output: Cart = {pizzas=[pizza1]};

Test2: "It will add the total price of added pizza to the cartTotal amount"
Code Cart.prototype.addPizza(pizza1 {totalPrice = 14});
Expected Output: Cart = {pizzas=[pizza1], cartTotal=14};

Describe: Cart.prototype.addId()

Test1: "It will create new id and assign it to the pizza object"
Code: Cart.prototype.addId();
Expected Output: Cart = {pizzas=[pizza.id]}

Describe: Cart.prototype.clearCart()

Test1: "It will reset the cart properties to empty/zero'
Code: Cart.prototype.clearCart();
Expected Output: Cart = {pizzas=[], id=0, cartTotal=0}
```

## Known Bugs

* _No known bugs at this time_

## GitHub Pages

[https://dmagic1304.github.io/pizza-parlor/](https://dmagic1304.github.io/pizza-parlor)

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) _2022_ _Dominik Magic_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.