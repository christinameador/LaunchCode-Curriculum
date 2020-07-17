// 1. Declare and initialize the following variables for our space shuttle:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = (spaceSuitsOn && shuttleCabinReady);
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// 2. Examine the code below. What will be printed to the console?
if (engineIndicatorLight === "green") {
    console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
} else {
    console.log("engines are off");
}

// 3. Write conditional expressions to satisfy the safety rules below, using the variables defined from the table above.
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
if (crewStatus === true) {
    console.log("Crew Ready");
} else {
    console.log("Crew Not Ready");
}

// b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
if (computerStatusCode === 200) {
    console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400) {
    conosle.log("Success! Computer online.");
} else {
    console.log("ALERT: Computer offline!");
}

// c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
if (shuttleSpeed > 17500) {
    console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
    console.log("ALERT: Cannot maintain orbit!");
} else {
    console.log("Stable speed");
}

// 4. PREDICT: Do the code blocks shown in the 'predict.txt' file produce the same result?
console.log("No");

/* 5. Implement the following checks using if/else if/else statements:
a) If fuelLevel is above 20000 AND engineTemperature is at or below 2500, print "Full tank. Engines good."
b) If fuelLevel is above 10000 AND engineTemperature is at or below 2500, print "Fuel level above 50%.  Engines good."
c) If fuelLevel is above 5000 AND engineTemperature is at or below 2500, print "Fuel level above 25%. Engines good."
d) If fuelLevel is at or below 5000 OR engineTemperature is above 2500, print "Check fuel level. Engines running hot."
e) If fuelLevel is below 1000 OR engineTemperature is above 3500 OR engineIndicatorLight is red blinking print "ENGINE FAILURE IMMINENT!" 
f) Otherwise, print "Fuel and engine status pending..." */

let engineIndicatorLight = 'red blinking';
let fuelLevel = 21000;
let engineTemperature = 1200;

// Code 5a - 5f here:
if ((fuelLevel > 20000) && (engineTemperature <= 2500)) {
    console.log("Full tank. Engines good.");
} else if ((fuelLevel > 10000) && (engineTemperature <= 2500)) {
    console.log("Fuel level above 50%. Engines good.");
} else if ((fuelLevel >= 5000) && (engineTemperature <= 2500)) {
    console.log("Fuel level above 25%. Engines good.");
} else if ((fuelLevel >= 5000) || (engineTemperature > 2500)) {
    console.log("Check fuel level. Engines running hot.");
} else if ((fuelLevel < 1000) || (engineTemperature > 3500) || (engineIndicatorLight === "red blinking")) {
    console.log("ENGINE FAILURE IMMINENT!");
} else {
    console.log("Fuel and engine status pending...");
}

// 6. a) Create the variable commandOverride, and set it to be true or false. If commandOverride is false, then the shuttle should only launch if the fuel and engine check are OK. If commandOverride is true, then the shuttle will launch regardless of the fuel and engine status.
let commandOverride = true;

/* 6. b) Code the following if/else check:
If fuelLevel is above 20000 AND engineIndicatorLight is NOT red blinking OR commandOverride is true print "Cleared to launch!" Else print "Launch scrubbed!" */
if ((fuelLevel > 2000) && ((engineIndicatorLight != "red blinking") || (commandOverride === true))) {
    console.log("Cleared to launch!");
} else {
    console.log("Launch scrubbed!");
}