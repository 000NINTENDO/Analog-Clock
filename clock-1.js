// Getting a Hand elements of clock
var secondHand = document.getElementById("seconds");
var hourHand = document.getElementById("hours");
var minuteHand = document.getElementById("minutes");
var currentTime = new Date();
var currentSeconds = currentTime.getSeconds();
var currentMinutes = currentTime.getMinutes();
var currentHours = currentTime.getHours();

// Writing a time in a timer-container
var time =  setInterval(displayTime, 1000);
function displayTime() {
    var currentTime = new Date();
    var currentSeconds = currentTime.getSeconds();
    var currentMinutes = currentTime.getMinutes();
    var currentHours = currentTime.getHours();
    var current_Hours;
    document.getElementById("timeMinutes").innerHTML =  currentMinutes ;
    document.getElementById("timeSeconds").innerHTML =   currentSeconds ;
    //document.getElementById("timeHours").innerHTML =  currentHours;   
    var current_Hours;
    if(currentHours <= 12) {
        current_Hours = currentHours ;
        document.getElementById("timeHours").innerHTML =  current_Hours;   
    }
    else {
        current_Hours = currentHours - 12;
        document.getElementById("timeHours").innerHTML =  current_Hours;  
    }
}
// Calculation for angles for movement of clocks Hands
var rotationHourHand = Number((currentHours * 360) / 12) ;
var rotationMinuteHand = Number((currentMinutes * 360) / 60);
var rotationSecondHand = Number((currentSeconds * 360) / 60);

// Function for movement of each hand
var rotateSecondHand = setInterval(positionSecondHand, 1000);
var rotateSecondHand = setInterval(positionMinuteHand, 1000);
var rotateSecondHand = setInterval(positionHourHand, 1000);

 function positionSecondHand() {
    var currentTime = new Date();
    var currentSeconds = currentTime.getSeconds();
    var rotationSecondHand = Number((currentSeconds * 360) / 60);
    secondHand.style.transform = "translateY(-90px) rotate("+rotationSecondHand+"deg)";
}

function positionMinuteHand() {
    var currentTime = new Date();
    var currentMinutes = currentTime.getMinutes();
    var rotationMinuteHand = Number((currentMinutes * 360) / 60);
    minuteHand.style.transform = "translateY(-80px) rotate("+rotationMinuteHand+"deg)";
}
function positionHourHand() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var rotationHourHand = Number((current_Hours * 360) / 12) ;
    var current_Hours;
    if(currentHours <= 12) {
        current_Hours = currentHours ;
        var rotationHourHand = Number((current_Hours * 360) / 12) ;
        hourHand.style.transform = "translateY(-65px) rotate("+rotationHourHand+"deg)";
         
    }
    else {
        current_Hours = currentHours - 12;
        var rotationHourHand = Number((current_Hours * 360) / 12) ;
        hourHand.style.transform = "translateY(-65px) rotate("+rotationHourHand+"deg)";
    }
}

positionSecondHand();
positionMinuteHand();
positionHourHand(); 
