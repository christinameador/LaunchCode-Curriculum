//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
class CrewCandidate {
    constructor(name, mass, scores) {
        this._name = name;
        this._mass = mass;
        this._scores = scores;
    }

    get name() {
        return this._name;
    }

    get mass() {
        return this._mass;
    }

    get scores() {
        return this._scores;
    }

    addScores(newScore) {
        let newScores = this._scores;
        newScores.push(newScore);
        this._scores = newScores;
    }

    avgScores() {
        let avgScores = 0;
        let scoresTotal = 0;
        for (let i = 0; i < this._scores.length; i++) {
            scoresTotal += this._scores[i];
        }
        avgScores = scoresTotal / this._scores.length;
        avgScores = avgScores.toFixed(1);
        return avgScores;
    }

    status() {
        let averageScores = this.avgScores();
        if (averageScores >= 90) {
            return 'Accepted';
        } else if (averageScores >= 80) {
            return 'Reserve';
        } else if (averageScores >= 70) {
            return 'Probationary';
        } else {
            return 'Rejected';
        }
    }

}

let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

console.log(`${bubbaBear._name} earned an average test score of ${bubbaBear.avgScores()}% and has a status of ${bubbaBear.status()}.`);
console.log(`${merryMaltese._name} earned an average test score of ${merryMaltese.avgScores()}% and has a status of ${merryMaltese.status()}.`);
console.log(`${gladGator._name} earned an average test score of ${gladGator.avgScores()}% and has a status of ${gladGator.status()}.`);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let ggScore = gladGator.avgScores();
let counter = 0;
while (ggScore < 80) {
    gladGator.addScores(100);
    ggScore = gladGator.avgScores();
    counter++;
}
console.log(`Glad Gator needs ${counter} 100% tests to reach 'Reserve' status.`);

let ggScore2 = gladGator.avgScores();
let counter2 = 0;
while (ggScore2 < 90) {
    gladGator.addScores(100);
    ggScore2 = gladGator.avgScores();
    counter2++;
}
console.log(`Glad Gator needs ${counter2} 100% tests to reach 'Accepted' status.`);