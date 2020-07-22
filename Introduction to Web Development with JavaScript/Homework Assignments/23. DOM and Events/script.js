let button = null;
let paragraph = null;
let missionAbort = null;

function init() {
    missionAbort = document.getElementById("abortMission");
    button = document.getElementById("liftoff");
    paragraph = document.querySelector("p");

    // Put your code for the exercises here.
    button.addEventListener("click", function() {
        document.getElementById("p1").innerHTML = 'Houston we have lift off!';

    });

    missionAbort.addEventListener("mouseover", function() {
        document.getElementById("abortMission").style.background = "red";
    });

    missionAbort.addEventListener("click", function() {
        window.confirm("Are you sure you want to abort the mission?");
    });
}

window.onload = init;