// Code part A here:
let shuttleName = 'Determination';
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
let milesPerKm = 0.621;

// Code part B here:
console.log(typeof(shuttleName));
console.log(typeof(shuttleSpeed));
console.log(typeof(distanceToMars));
console.log(typeof(distanceToMoon));
console.log(typeof(milesPerKm));

// Code parts C & D here:
let milesToMars = (distanceToMars * milesPerKm);
let hoursToMars = (milesToMars / shuttleSpeed);
let daysToMars = (hoursToMars / 24);

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");

// Code part E here:
let milesToMoon = (distanceToMoon * milesPerKm);
let hoursToMoon = (milesToMoon / shuttleSpeed);
let daysToMoon = (hoursToMoon / 24);

console.log(shuttleName + " will take " + daysToMoon + " days to reach the moon.");