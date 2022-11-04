TESTS

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

<!-- Test2: "It will store pizza topings selection value as a toppingsCost variable"
Code: myPizza.getCost([2, 3, 4]) -->

