// Code your orbitCircumference function here:
function orbitCircumference(orbitRadius = 2000) {
    return Math.round(2 * Math.PI * orbitRadius);
}

// Code your missionDuration function here:
function missionDuration(orbitsCompleted, orbitRadius = 2000, orbitalSpeed = 28000) {
    let result = orbitsCompleted * (orbitCircumference(orbitRadius) / orbitalSpeed);
    return result.toFixed(2);
}

let currentMissionDistance = 5 * orbitCircumference()
let currentMissionDuration = missionDuration(5)
console.log(`The mission will travel ${currentMissionDistance} km around the planet, and it will take ${currentMissionDuration} hours to complete.`);

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Code your oxygenExpended function here:
function oxygenExpended(obj, orbitalRadius = 2000, orbitalSpeed = 28000) {
    let spacewalkDuration = missionDuration(3, orbitalRadius, orbitalSpeed);
    let oxygenConsumption = obj['rate'](spacewalkDuration).toFixed(3);
    return `${obj['name']} will perform the spacewalk, which will last ${spacewalkDuration} hours and require ${oxygenConsumption} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
    'name': 'Gordon Shumway',
    'species': 'alf',
    'mass': 90,
    'rate': function(hrs) { return 0.035 * hrs },
    'astronautID': 414
};
let candidateB = {
    'name': 'Lassie',
    'species': 'dog',
    'mass': 19.1,
    'rate': function(hrs) { return 0.030 * hrs },
    'astronautID': 503
};
let candidateC = {
    'name': 'Jonsey',
    'species': 'cat',
    'mass': 3.6,
    'rate': function(hrs) { return 0.022 * hrs },
    'astronautID': 796
};
let candidateD = {
    'name': 'Paddington',
    'species': 'bear',
    'mass': 31.8,
    'rate': function(hrs) { return 0.047 * hrs },
    'astronautID': 291
};
let candidateE = {
    'name': 'Pete',
    'species': 'tortoise',
    'mass': 417,
    'rate': function(hrs) { return 0.010 * hrs },
    'astronautID': 599
};
let candidateF = {
    'name': 'Hugs',
    'species': 'ball python',
    'mass': 2.3,
    'rate': function(hrs) { return 0.018 * hrs },
    'astronautID': 890
};

let crew = [candidateA, candidateC, candidateE];

let randomCrewMember = selectRandomEntry(crew);
console.log(oxygenExpended(randomCrewMember));

// Bonus Missions: Conserve O2
let fittestCrewMember = {};
let lowestOxygenConsumption = 1000;
for (let i = 0; i < crew.length; i++) {
    let oxygenConsumption = crew[i]['rate'](1).toFixed(3);
    if (oxygenConsumption < lowestOxygenConsumption) {
        fittestCrewMember = crew[i];
    }
}
console.log(oxygenExpended(fittestCrewMember));