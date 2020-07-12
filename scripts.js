// Write your JavaScript code here.
// Remember to pay attention to page loading!
let landButton = null;
let abortButton = null;

window.addEventListener("load", function() {
    let takeOff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    landButton = document.getElementById("landing");
    abortButton = document.getElementById("missionAbort");
    let upButton = document.getElementById("up");
    let rocket = document.getElementById("rocket");
    let downButton = document.getElementById("down");
    let rightButton = document.getElementById("right");
    let leftButton = document.getElementById("left");
    rocket.style.position = "absolute";

    takeOff.addEventListener("click", function() {
        let response = window.confirm("Confirm that the suttle is ready for takeoff.");
        if(response) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.background = "blue";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        }
    })

    landButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.background = "green";
        spaceShuttleHeight.innerHTML = 0;
    })

    abortButton.addEventListener("click", function () {
        let responses = window.alert("Confirm that you want to abort the mission");
        if(responses) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.background = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    })

    upButton.addEventListener("click", function() {
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        let positionString = rocket.style.top;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.top = Number(position) - 10 + "px";
        console.log("testing", rocket.style.top);
    })

    downButton.addEventListener("click", function() {
        let positionString = rocket.style.top;
        let position = positionString.slice(0, positionString.length - 2);
        rocket.style.top = Number(position) + 10 + "px";
    })

    leftButton.addEventListener("click", function() {
        rocket.style.left = updatePosition(rocket.style.left, false);
    })

    rightButton.addEventListener("click", function() {
        rocket.style.left = updatePosition(rocket.style.left, true);
    })
    
function updatePosition(positionString, positive) {
    let position = positionString.slice(0, positionString.length - 2);
    if(positive) {
        return Number(position) + 10 + "px";
    }   else {
        return Number(position) - 10 + "px";
    }
}


})

