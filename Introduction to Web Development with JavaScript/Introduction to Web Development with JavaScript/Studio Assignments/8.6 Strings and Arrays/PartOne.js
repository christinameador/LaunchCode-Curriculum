const input = require('readline-sync');
let str = "LaunchCode";
let pigLatin;

let numLetters = input.question('How many letters to shift? ');
numLetters = Number(numLetters);

if (numLetters > str.length) {
    console.log(`OOPS! Not enough characters in '${str}' to move ${numLetters}.`)
} else {
    let modifiedStr = str.split('').splice(numLetters, str.length).join('');
    let letterShift = str.split('').splice(0, numLetters).join('');
    pigLatin = modifiedStr.concat(letterShift);
    console.log(`'${str}' converts to '${pigLatin}'.`)
}