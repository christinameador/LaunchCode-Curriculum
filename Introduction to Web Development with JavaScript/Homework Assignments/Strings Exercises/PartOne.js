const input = require('readline-sync');
let num = Number(input.question("Enter a number: "));

//Use type conversion to print the length (number of digits) of
//an integer.
let numLength = num.toString().length
console.log(numLength);


//Follow up: Print the number of digits in a DECIMAL value.
let decLength = num.toString().split('.').join('').length;
console.log(decLength);


//Experiment! What if num could be EITHER an integer or a decimal?
//Add an if/else statement so your code can handle both cases.
if (num.toString().includes('.')) {
    console.log(num.toString().split('.').join('').length);
} else {
    console.log(num.toString().length);
}