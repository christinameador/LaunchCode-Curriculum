//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.
let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
let pantry = [protein, grain, vegetable, beverage, dessert];
let mealOne = [];
let mealTwo = [];
let mealThree = [];
let mealFour = [];
let mealFive = [];
let mealSix = [];
let meals = [mealOne, mealTwo, mealThree, mealFour, mealFive, mealSix];

for (let i = 0; i < protein.length; i++) {
    for (let j = 0; j < pantry.length; j++) {
        meals[i].push(pantry[j][i]);
    }
}
console.log(meals);

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.
const input = require('readline-sync');
let numMeals = input.question('How many meals to assemble?');
numMeals = Number(numMeals);

while ((numMeals <= 0) || (numMeals > 7) || !Number.isInteger(numMeals)) {
    numMeals = input.question('Invalid input. Please enter an integer between 1 and 6:');
    numMeals = Number(numMeals);
}

let niceMealOptions = [
    `Meal Option One includes ${meals[0][0]}, ${meals[0][1]}, ${meals[0][2]}, ${meals[0][3]}, and ${meals[0][4]}.`,
    `Meal Option Two includes ${meals[1][0]}, ${meals[1][1]}, ${meals[1][2]}, ${meals[1][3]}, and ${meals[1][4]}.`,
    `Meal Option Three includes ${meals[2][0]}, ${meals[2][1]}, ${meals[2][2]}, ${meals[2][3]}, and ${meals[2][4]}.`,
    `Meal Option Four includes ${meals[3][0]}, ${meals[3][1]}, ${meals[3][2]}, ${meals[3][3]}, and ${meals[3][4]}.`,
    `Meal Option Five includes ${meals[4][0]}, ${meals[4][1]}, ${meals[4][2]}, ${meals[4][3]}, and ${meals[4][4]}.`,
    `Meal Option Six includes ${meals[5][0]}, ${meals[5][1]}, ${meals[5][2]}, ${meals[5][3]}, and ${meals[5][4]}.`
];

for (let k = 0; k < numMeals; k++) {
    console.log(niceMealOptions[k]);
    if (niceMealOptions[k].includes('kale')) {
        console.log('   Don’t worry, you can have double chocolate tomorrow.');
    }
}

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”