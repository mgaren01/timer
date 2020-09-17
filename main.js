//INIT

//Create object variables
var btn = document.getElementById('button');
var formsLink = document.getElementById('userInput');
var timer = document.getElementById('countdown');
var layout = document.getElementById('layout');

//add input to activate function
btn.addEventListener("click", function(){

//set time elements = to respective inputs
let timerHours = document.getElementById("hoursInput").value;
let timerMinutes = document.getElementById("minutesInput").value;
let timerSeconds = document.getElementById("secondsInput").value;

//get target time/date
var target = new Date().getTime();

//take inputs from form, add to target
target = target + (1000 * timerSeconds) + (1000 * 60 * timerMinutes) + (1000 * 60 * 60 * timerHours);


//set interval to count down every one second
var secCounter = setInterval(countdownToDoom, 1000);

//begin countdown function
function countdownToDoom() {

    //get current time, subtract from target; outputs timer countdown
    let current = new Date().getTime();
    countTime = target - current;

    //change countTime to hours, minutes, seconds
    let hours = Math.floor((countTime/(1000 * 60 * 60)));
    let minutes = Math.floor((countTime % (1000 * 60 * 60))/ (1000 * 60));
    let seconds = Math.floor((countTime % (1000 * 60))/ 1000);

    //if values less than ten, add extra 0
    if (hours < 10){
        hours = "0" + hours;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (seconds < 10){
        seconds = "0" + seconds;
    }

    //format timer
    let timerDisplay = hours + ":" + minutes + ":" + seconds;
    document.getElementById("countdown").innerHTML = timerDisplay;

    //at conclusion of countdown, stop interval, insert alert text
    if (countTime < 0){
        clearInterval(countdownToDoom);
        document.getElementById("countdown").innerHTML = "The Doomed Hour is Upon You";
    }
}

countdownToDoom();

});


