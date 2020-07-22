function checkFuel(level) {
    if (level > 100000) {
        return 'green';
    } else if (level > 50000) {
        return 'yellow';
    } else {
        return 'red';
    }
}

function holdStatus(arr) {
    if (arr.length < 7) {
        return `Spaces available: ${7-arr.length}.`;
    } else if (arr.length > 7) {
        return `Over capacity by ${arr.length-7} items.`;
    } else {
        return "Full";
    }
}

let fuelLevel = 70000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

let siphonedFuel = 0;
let nothingToSee = function(num) {
    if (num > 100000) {
        siphonedFuel = num - 100001;
        fuelLevel = 100001;
        return siphonedFuel;
    } else if (num > 50000) {
        siphonedFuel = num - 50001;
        fuelLevel = 50001;
        return siphonedFuel;
    } else {
        siphonedFuel = num;
        fuelLevel = 0;
        return siphonedFuel;
    }
}

let garbageArray = ["banana peels", "coffee grounds"];
let valuableBooty = [];
let notSuspicious = function(arr) {
    valuableBooty[0] = arr[4];
    arr[4] = garbageArray[0];

    valuableBooty[1] = arr[6];
    arr[6] = garbageArray[1];
    return arr;
}

function irs(fuelLevel, cargoHold) {
    nothingToSee(fuelLevel);
    notSuspicious(cargoHold);
    return `Raided ${siphonedFuel}kg of fuel from the tanks, and stole ${valuableBooty[0]} and ${valuableBooty[1]} from the cargo hold.`;
}

console.log(irs(fuelLevel, cargoHold));