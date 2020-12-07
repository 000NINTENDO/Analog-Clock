var secondHand = document.getElementById("seconds");
var hourHand = document.getElementById("hours");
var minuteHand = document.getElementById("minutes");
var currentTime = new Date();
var currentSeconds = currentTime.getSeconds();
var currentMinutes = currentTime.getMinutes();
var currentHours = currentTime.getHours();

document.getElementById("timeHours").innerHTML = "Hours : " + currentHours  ;
document.getElementById("timeMinutes").innerHTML = "Minutes : " + currentMinutes ;
document.getElementById("timeSeconds").innerHTML = "Seconds : " + currentSeconds ;

var rotationHourHand = Number((currentHours * 360) / 12) ;
var rotationMinuteHand = Number((currentMinutes * 360) / 60);
var rotationSecondHand = Number((currentSeconds * 360) / 60);

//secondHand.style.transform = "translateY(-90px) rotate("+rotationSecondHand+"deg)" ;
minuteHand.style.transform = "translateY(-80px) rotate("+rotationMinuteHand+"deg)" ;
//hourHand.style.transform = "translateY(-65px) rotate("+rotationHourHand+"0deg)" ;

//console.log(window.getComputedStyle(minuteHand, null).getPropertyValue(transform));
