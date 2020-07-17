//Part 1 - Ask candidate for their name
const input = require('readline-sync');
let candidateName = input.question('Candidate Name:');

//Part 2 - Use a loop to ask five questions
let questionArray = [
    'True or false: 5000 meters = 5 kilometers.',
    '(5 + 3)/2 * 10 = ?',
    'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?',
    'Who was the first American woman in space?',
    'What is the minimum crew size for the International Space Station (ISS)?'
];

//Part 3 - Collect candidate's answers
let candidateAnswers = [];
for (let i = 0; i < questionArray.length; i++) {
    candidateAnswers.push(input.question(questionArray[i]));
}

//Part 4 - Check answers for accuracy
let accuracy = 0;
((candidateAnswers[0].toLowerCase()) === 'true') ? accuracy += 1: accuracy += 0;
(candidateAnswers[1] === '40') ? accuracy += 1: accuracy += 0;
((candidateAnswers[2].toLowerCase()) === 'trajectory') ? accuracy += 1: accuracy += 0;
((candidateAnswers[3].toLowerCase()) === 'sally ride') ? accuracy += 1: accuracy += 0;
(candidateAnswers[4] === '3') ? accuracy += 1: accuracy += 0;

//Part 5 - Calculate overall percentage
let overallPercentage = ((accuracy / 5) * 100);

//Part 6 - Determine if candidate passed (need >= 80%)
let passOrFail;
(overallPercentage >= 80) ? passOrFail = 'PASSED': passOrFail = 'FAILED';

//Part 7 - Display the results
console.log(`
Candidate Name: ${candidateName}
1) True or false: 5000 meters = 5 kilometers.
Your Answer: ${candidateAnswers[0]}
Correct Answer: true
  
2) (5 + 3)/2 * 10 = ?)
Your Answer: ${candidateAnswers[1]}
Correct Answer: 40
  
3) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?
Your Answer: ${candidateAnswers[2]}
Correct Answer: trajectory
  
4) Who was the first American woman in space?
Your Answer: ${candidateAnswers[3]}
Correct Answer: sally ride
  
5) What is the minimum crew size for the International Space Station (ISS)?
Correct Answer: 3
Your Answer: ${candidateAnswers[4]}
  
>>> Overall Grade: ${overallPercentage}% (${accuracy} of 5 responses correct) <<<
>>> Status: ${passOrFail} <<<
`);