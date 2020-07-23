var kilometersToMarsPart4 = 225000000;
var kilometersToTheMoonPart4 = 384400;
// The variables that are commented out will be moved into the Spacecraft class
var spaceCraft = "Space Shuttle";
var speedMphPart4 = 17500;
var milesPerKilometerPart4 = 0.621;
// This function will also be moved into the Spacecraft class
// Define your Spacecraft class here:
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = spaceCraft;
        this.speedMph = speedMphPart4;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hours = milesAway / this.speedMph;
        return hours / 24;
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Print two outputs - one for the trip to Mars and one for the trip to the moon.
console.log("It will take " + spaceShuttle.name + " " + spaceShuttle.getDaysToLocation(kilometersToMarsPart4) + " to get to Mars.");
console.log("It will take " + spaceShuttle.name + " " + spaceShuttle.getDaysToLocation(kilometersToTheMoonPart4) + " to get to the Moon.");
