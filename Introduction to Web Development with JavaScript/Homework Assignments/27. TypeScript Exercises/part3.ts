// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

let spacecraftNamePart3: string = "Space Shuttle";
let speedMphPart3: number = 17500;
let kilometersToMarsPart3: number = 225000000;
let kilometersToTheMoonPart3: number = 384400;
let milesPerKilometerPart3: number = 0.621;

// Code the "getDaysToLocation" function here:
function getDaysToLoctaion(kilometersAway: number): number{
    let milesAway: number = kilometersAway * milesPerKilometerPart3;
    let hours: number = milesAway / speedMphPart3;
    return hours / 24;
}




// Call the function and print the outputs for the Mars trip and the moon trip:
console.log(`It will take ${spacecraftNamePart3} ${getDaysToLoctaion(kilometersToMarsPart3)} days to get to Mars.`);
console.log(`It will take ${spacecraftNamePart3} ${getDaysToLoctaion(kilometersToTheMoonPart3)} days to get to the Moon.`);