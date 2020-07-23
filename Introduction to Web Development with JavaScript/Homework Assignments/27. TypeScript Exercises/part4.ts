let kilometersToMarsPart4: number = 225000000;
let kilometersToTheMoonPart4: number = 384400;


// The variables that are commented out will be moved into the Spacecraft class
let spaceCraft: string = "Space Shuttle";
let speedMphPart4: number = 17500;
let milesPerKilometerPart4: number = 0.621;

// This function will also be moved into the Spacecraft class


// Define your Spacecraft class here:
class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;  
    constructor(name: string, speedMph: number){
        this.name = spaceCraft;
        this.speedMph = speedMphPart4;
    }

    getDaysToLocation(kilometersAway: number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hours: number = milesAway / this.speedMph;
        return hours / 24;
    }

}


// Create an instance of the class here:
let spaceShuttle = new Spacecraft ('Determination', 17500);

// Print two outputs - one for the trip to Mars and one for the trip to the moon.
console.log(`It will take ${spaceShuttle.name} ${spaceShuttle.getDaysToLocation(kilometersToMarsPart4)} to get to Mars.`);
console.log(`It will take ${spaceShuttle.name} ${spaceShuttle.getDaysToLocation(kilometersToTheMoonPart4)} to get to the Moon.`);
