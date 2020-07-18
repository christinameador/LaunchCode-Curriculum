// 11.11.1.1. Part A: Find the Minimum Value
let firstFunction = function(arr) {
    let arrMin = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arrMin) {
            arrMin = arr[i];
        }
    }
    return arrMin;
}

console.log(firstFunction([5, 10, 2, 42]));
console.log(firstFunction([-2, 0, -10, -44, 5, 3, 0, 3]));
console.log(firstFunction([200, 5, 4, 10, 8, 5, -3.3, 4.4, 0]));

// 11.11.1.2. Part B: Create a New Sorted Array
let secondFunction = function(arr) {
    let finalSortedNumbers = [];
    let arrayLength = arr.length;
    for (let i = 0; i < arrayLength; i++) {
        let minimumValue = firstFunction(arr);
        finalSortedNumbers.push(minimumValue);
        let index = arr.indexOf(minimumValue);
        if (index > -1) {
            arr.splice(index, 1);
        }
    }
    return finalSortedNumbers;
}

console.log(secondFunction([5, 10, 2, 42]));
console.log(secondFunction([-2, 0, -10, -44, 5, 3, 0, 3]));
console.log(secondFunction([200, 5, 4, 10, 8, 5, -3.3, 4.4, 0]));

// 11.11.3. Part C: Number Sorting the Easy Way
// A. Sort each sample array in increasing order.
let arrayOne = [5, 10, 2, 42];
let arrayTwo = [-2, 0, -10, -44, 5, 3, 0, 3];
let arrayThree = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
console.log(arrayOne.sort(function(a, b) { return a - b }));
console.log(arrayTwo.sort(function(a, b) { return a - b }));
console.log(arrayThree.sort(function(a, b) { return a - b }));

// B. Sort each sample array in decreasing order.
console.log(arrayOne.sort(function(a, b) { return b - a }));
console.log(arrayTwo.sort(function(a, b) { return b - a }));
console.log(arrayThree.sort(function(a, b) { return b - a }));

// C. Does the function alter arrayName? No
// D. Did your sorting function from part B alter arrayName? No

// 11.11.5. Bonus Mission
// Refactor your sorting function from Part B to use recursion.