var myNumber = 0;
var newEquation = 7*7;
var myString = "Hello";
console.log(myNumber);
console.log(newEquation);
console.log(myString)
var a = 20;
var b = 10;
var c = 2;
console.log(a*b/c);
var equation = (a*b/c);
console.log(equation);
//Challenge #2 - Make a var called myNumber
//Set it to 0.
//Use shorthand to add 10 to it.
//Then use shorthand to subtract 1.
//Use shorthand to multiple by 9.
//Use shorthand to divide by 7.
//Just for practice, print myNumber to the console between each operation.
console.log(myNumber + 10);
console.log(myNumber - 1);
console.log(myNumber * 9);
console.log(myNumber / 7);
//Challenge #3 - Lifetime Supply
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var myAge = 39;
var maxAge = 80;
var favSnackPerDay = 2;
var totalTilliDie =((favSnackPerDay*365) * (maxAge - myAge));
var message = "You will need " + totalTilliDie + " to last you until you the ripe old age of" + maxAge + ".";
console.log (message);