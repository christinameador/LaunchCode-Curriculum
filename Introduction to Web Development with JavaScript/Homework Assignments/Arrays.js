// Question One
//Create an array with the following entry: 273.15.
let array = [273.15];

//Use the push method to add the number 42 and the string "hello" to the array. Add these new items one at a time.  Print the array after each step to confirm the changes.
array.push(42);
console.log(array);
array.push("hello");
console.log(array);

//Use a single push to add the items false, -4.6, and “87” to the array.  Print the array to confirm the changes.
array.push(false, -4.6, "87");
console.log(array);

// Question Two
let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//a) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.
cargoHold[5] = "space tether";
console.log(cargoHold);

//b) Remove the last item from the array with pop. Print the element removed and the updated array.
let removedItem = cargoHold.pop();
console.log(removedItem);
console.log(cargoHold);

//c) Remove the first item from the array with shift. Print the element removed and the updated array.
let nextRemovedItem = cargoHold.shift();
console.log(nextRemovedItem);
console.log(cargoHold);

//d) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.
cargoHold.unshift(1138);
cargoHold.push('20 meters');
console.log(cargoHold);

//e) Use a template literal to print the final array and its length.
console.log(`The cargo hold contains ${cargoHold.length} items, including ${cargoHold}.`);

// Question Three
let cargoHold = [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters'];

//Use splice to make the following changes to the cargoHold array. Be sure to print the array after each step to confirm your updates.

//a) Insert the string 'keys' at index 3 without replacing any other entries.
cargoHold.splice(3, 0, 'keys');
console.log(cargoHold);

//b) Remove ‘instruction manual’ from the array. (Hint: indexOf is helpful to avoid manually counting an index).
cargoHold.splice(cargoHold.indexOf('instruction manual'), 1);
console.log(cargoHold);

//c) Replace the elements at indexes 2 - 4 with the items ‘cat’, ‘fob’, and ‘string cheese’.
cargoHold.splice(2, 2, "cat", "fob", "string cheese");
console.log(cargoHold);

// Question Four
let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//a) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);

//b) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log(holdCabinet1.slice(0, 2));
console.log(holdCabinet2.slice(0, 2));
console.log(holdCabinet1);

//c) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
console.log(holdCabinet1.reverse());
console.log(holdCabinet2.sort());
console.log(holdCabinet1);
console.log(holdCabinet2);

// Question Five
let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//a) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split(' '));
console.log(str.split(''));
console.log(str.split('e'));
console.log(str.split());
console.log(str);

//b) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join(' '));
console.log(arr.join(''));
console.log(arr.join('a'));
console.log(arr.join());
console.log(arr);

//c) Do split or join change the original string/array? No

//d) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let newCargoHold = cargoHold.split(',').sort().join(',');
console.log(newCargoHold);

// Question Six
//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//a) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008]
let element2 = ['helium', 'He', 4.003]
let element26 = ['iron', 'Fe', 55.85]

//b) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table = [];
table.push(element1, element2, element26);
console.log(table);

//c) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[0]);
console.log(table[0][0]);

//d) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[2][1]);

//e) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
let person1 = ["Christina", 28, ["Ice Cream", "Pizza"]];
let person2 = ["Scott", 28, ["Tacos", "Chicken Nuggets"]];
let person3 = ["Tim", 35, ["Steak", "Potatoes"]];
let neighborhood = [person1, person2, person3];

console.log(neighborhood[0]);
console.log(neighborhood[0][0]);
console.log(neighborhood[0][2][0]);