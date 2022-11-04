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