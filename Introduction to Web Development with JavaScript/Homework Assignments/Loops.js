// For Practice
/*Exercise #1: Construct for loops that accomplish the following tasks:
  a. Print the numbers 0 - 20, one number per line.
  b. Print only the ODD values from 3 - 29, one number per line.
  c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
  d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

for (let i = 0; i <= 20; i++) {
    console.log(i);
}

for (let j = 3; j <= 29; j += 2) {
    console.log(j);
}

for (let k = 12; k >= -14; k -= 2) {
    console.log(k);
}

for (l = 50; l >= 20; l--) {
    if (l % 3 == 0) {
        console.log(l);
    }
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */
let string = 'LaunchCode';
let array = [1, 5, 'LC101', 'blue', 42];

for (let a = 0; a < array.length; a++) {
    console.log(array[a]);
}

for (let b = 0; b < string.length; b++) {
    console.log(string.charAt(b));
}

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
let finalArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evenArray = [];
let oddArray = [];

for (let x = 0; x < finalArray.length; x++) {
    if (finalArray[x] % 2 == 0) {
        evenArray.push(finalArray[x]);
    } else {
        oddArray.push(finalArray[x]);
    }
}

console.log(evenArray);
console.log(oddArray);

// While Practice
//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');
let startingFuelLevel = 0,
    numOfAstronauts = 0,
    altitudeReached = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
while (startingFuelLevel < 5000 || startingFuelLevel > 30000) {
    let userInput = input.question("What is the starting fuel level? ");
    startingFuelLevel = userInput;
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (numOfAstronauts <= 0 || numOfAstronauts > 7) {
    let userInput = input.question("How many astronauts are on this mission? ");
    numOfAstronauts = userInput;
}

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
let currentFuelLevel = startingFuelLevel

while (currentFuelLevel > 0) {
    currentFuelLevel = (currentFuelLevel - (100 * numOfAstronauts));
    altitudeReached = altitudeReached + 50;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if (altitudeReached >= 2000) {
    console.log(`The shuttle gained an altitude of ${altitudeReached}km. Orbit achieved!`);
} else {
    console.log(`The shuttle gained an altitude of ${altitudeReached}km. Failed to reach orbit.`);
}