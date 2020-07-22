// Code your selectRandomEntry function here:
let selectRandomEntry = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Code your buildCrewArray function here:
let buildCrewArray = function(arr) {
    let finalArray = [];
    let currentAstro;
    while (finalArray.length < 3) {
        currentAstro = selectRandomEntry(arr);
        if (!finalArray.includes(currentAstro)) {
            finalArray.push(currentAstro);
        }
    }
    return finalArray;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

// Code your template literal and console.log statements:
let crewIds = buildCrewArray(idNumbers);
let astroArray = [];
for (let i = 0; i < animals.length; i++) {
    if (crewIds.includes(animals[i]['astronautID'])) {
        astroArray.push(animals[i]['name']);
    }
}

console.log(`${astroArray[0]}, ${astroArray[1]}, and ${astroArray[2]} are going to space!`);