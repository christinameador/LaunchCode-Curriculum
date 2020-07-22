// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
  let takeoffButton = document.getElementById("takeoff");
  let landButton = document.getElementById("landing");
  let abortButton = document.getElementById("missionAbort");
  let upButton = document.getElementById("up");
  let downButton = document.getElementById("down");
  let leftButton = document.getElementById("left");
  let rightButton = document.getElementById("right");

  takeoffButton.addEventListener("click", function () {
    let liftoffTrue = window.confirm("Confirm the shuttle is ready for liftoff");
    if (liftoffTrue) {
      document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
      document.getElementById("shuttleBackground").style.background = "blue";
      document.getElementById("spaceShuttleHeight").innerHTML = 10000;
      }
    });

    landButton.addEventListener("click", function () {
      window.alert("Landing gear engaged.");
      document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
      document.getElementById("shuttleBackground").style.background = "green";
      document.getElementById("spaceShuttleHeight").innerHTML = 0;
    });

    abortButton.addEventListener("click", function () {
      let abortTrue = window.confirm("Confirm that you want to abort the mission.");
      if (abortTrue) {
        document.getElementById("flightStatus").innerHTML = "Mission aborted";
        document.getElementById("shuttleBackground").style.background = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
      }
    });

    upButton.addEventListener("click", function () {
      document.getElementById("rocket").style.top = -10 + 'px';
      document.getElementById("spaceShuttleHeight").innerHTML += 10;
    });

    downButton.addEventListener("click", function () {
      document.getElementById("rocket").style.bottom = 10 + 'px';
      document.getElementById("spaceShuttleHeight").innerHTML -= 10;
    });

    leftButton.addEventListener("click", function () {
      document.getElementById("rocket").style.left = -10 + 'px';
    });

    rightButton.addEventListener("click", function () {
      document.getElementById("rocket").style.right = 10 + 'px';
    });
};

window.onload = init;
