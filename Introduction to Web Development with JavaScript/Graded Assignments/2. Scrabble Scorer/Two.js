// Here is the oldPointStructure object:
const oldPointStructure = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
};

// Code your transform function here:
function transform(obj) {
    let newPointStructure = {};
    for (let prop in obj) {
        for (let i = 0; i < obj[prop].length; i++) {
            newPointStructure[obj[prop][i]] = prop;
        }
    }
    newPointStructure[' '] = 0;
    return newPointStructure;
}

// Code your initialPrompt function here:
const input = require('readline-sync');

function initialPrompt() {
    console.log(`Welcome to the Scrabble score calculator. Enter 'stop' to quit.
   
 Which scoring algorithm would you like to use?
   0 - ${(scoringAlgorithms[0].name)}: ${(scoringAlgorithms[0].description)}
   1 - ${(scoringAlgorithms[1].name)}: ${(scoringAlgorithms[1].description)}
   2 - ${(scoringAlgorithms[2].name)}: ${(scoringAlgorithms[2].description)}
 `);

    let userInput = input.question('Enter 0, 1, or 2: ');
    while (userInput != 0 && userInput != 1 && userInput != 2) {
        console.log("Invalid input, please try again")
        userInput = input.question('Enter 0, 1, or 2: ');
    };

    if (userInput === '0') {
        console.log('Using algorithm: Scrabble');
    } else if (userInput === '1') {
        console.log('Using algorithm: Simple Score');
    } else if (userInput === '2') {
        console.log('Using algorithm: Bonus Vowels');
    } else {
        console.log('Invalid input, please try again');
    }
    return userInput;
}

// Code your runProgram function here:
function runProgram(arr) {
    let userInput = initialPrompt();
    console.log('');
    while (true) {
        let currentWord = input.question("Enter a word to be scored, or 'Stop' to quit:     ");
        if (currentWord.toUpperCase() == 'STOP') {
            return;
        }
        if (userInput === '0') {
            console.log(`Score for '${currentWord}': ${scoringAlgorithms[0].scoreFunction(currentWord)}`);
        } else if (userInput === '1') {
            console.log(`Score for '${currentWord}': ${scoringAlgorithms[1].scoreFunction(currentWord)}`);
        } else if (userInput === '2') {
            console.log(`Score for '${currentWord}': ${scoringAlgorithms[2].scoreFunction(currentWord)}`);
        }
        console.log('');
    }
}

// Use the transform function to create the newScoreKey object here:
let newPointStructure = transform(oldPointStructure);
newPointStructure[' '] = 0;

// Score Function Definitions

// Create your scoringAlgorithms array here:
const scoringAlgorithms = [
    scrabble = {
        name: 'Scrabble',
        description: 'The traditional scoring algorithm.',
        scoreFunction(string) {
            let workingString = string.toUpperCase();
            let score = 0;
            let wordArray = workingString.split('');
            for (let i = 0; i < wordArray.length; i++) {
                score += Number(newPointStructure[wordArray[i]]);
            }
            return score;
        }
    },
    simpleScore = {
        name: 'Simple Score',
        description: 'Each letter is worth 1 point.',
        scoreFunction(string) {
            let score = 0;
            score = (string.length);
            return score;
        }
    },
    bonusVowels = {
        name: 'Bonus Vowels',
        description: 'Vowels are 3 pts, consonants are 1pt.',
        scoreFunction(string) {
            let vowelRegex = /[aeiou]/ig;
            let result = string.match(vowelRegex);
            let score = (3 * (result.length));
            let consonantRegex = /[^aeiou]/ig;
            result = string.match(consonantRegex);
            score += (result.length);
            return score;
        }
    }
];

// Call the runProgram function here:
runProgram(scoringAlgorithms);

// Testing Program