const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a & b) Convert the strings into four alphabetized cabinet arrays.
cabinet1 = food.split(',').sort();
cabinet2 = equipment.split(',').sort();
cabinet3 = pets.split(',').sort();
cabinet4 = sleepAids.split(',').sort();

//c) Initialize, fill, and print cargoHold.
let cargoHold = [cabinet1, cabinet2, cabinet3, cabinet4];
console.log(cargoHold);

//d) Query the user.
let cabinetNumber = input.question("Select a cabinet:");

//e) Display the contents of the selected cabinet, or print the
// error message.
if (cabinetNumber === '0') {
    console.log(`The cabinet contains: ${cargoHold[0]}`);
} else if (cabinetNumber === '1') {
    console.log(`The cabinet contains: ${cargoHold[1]}`);
} else if (cabinetNumber === '2') {
    console.log(`The cabinet contains: ${cargoHold[2]}`);
} else if (cabinetNumber === '3') {
    console.log(`The cabinet contains: ${cargoHold[3]}`);
} else {
    console.log('Invalid entry.')
}

// // Double-bonus!
// let bonusCabinetNumber = input.question("Select a cabinet:");
// let bonusCargoItem = input.question("Select an item:");

// if (cabinetNumber === '0') {
//   if (cargoHold[0].includes(bonusCargoItem)){
//     console.log(`Cabinet ${bonusCabinetNumber} DOES contain ${bonusCargoItem}.`)
//   } else {
//     console.log(`Cabinet ${bonusCabinetNumber} DOES NOT contain ${bonusCargoItem}.`)
//   }
// } else if (cabinetNumber === '1') {
//     if (cargoHold[1].includes(bonusCargoItem)){
//     console.log(`Cabinet ${bonusCabinetNumber} DOES contain ${bonusCargoItem}.`)
//   } else {
//     console.log(`Cabinet ${bonusCabinetNumber} DOES NOT contain ${bonusCargoItem}.`)
//   }
// } else if (cabinetNumber === '2') {
//   if (cargoHold[2].includes(bonusCargoItem)){
//     console.log(`Cabinet ${bonusCabinetNumber} DOES contain ${bonusCargoItem}.`)
//   } else {
//     console.log(`Cabinet ${bonusCabinetNumber} DOES NOT contain ${bonusCargoItem}.`)
//   }
// } else if (cabinetNumber === '3') {
//   if (cargoHold[3].includes(bonusCargoItem)){
//     console.log(`Cabinet ${bonusCabinetNumber} DOES contain ${bonusCargoItem}.`)
//   } else {
//     console.log(`Cabinet ${bonusCabinetNumber} DOES NOT contain ${bonusCargoItem}.`)
//   }
// } else {
//   console.log('Invalid entry.')
// }