// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var spacecraftNamePart3 = "Space Shuttle";
var speedMphPart3 = 17500;
var kilometersToMarsPart3 = 225000000;
var kilometersToTheMoonPart3 = 384400;
var milesPerKilometerPart3 = 0.621;
// Code the "getDaysToLocation" function here:
function getDaysToLoctaion(kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometerPart3;
    var hours = milesAway / speedMphPart3;
    return hours / 24;
}
// Call the function and print the outputs for the Mars trip and the moon trip:
console.log("It will take " + spacecraftNamePart3 + " " + getDaysToLoctaion(kilometersToMarsPart3) + " days to get to Mars.");
console.log("It will take " + spacecraftNamePart3 + " " + getDaysToLoctaion(kilometersToTheMoonPart3) + " days to get to the Moon.");
