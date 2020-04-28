//WHEN I click the start button
//THEN a timer starts and I am presented with a question
var startButton = document.querySelector("#start");
var secondsDisplay = document.querySelector("#seconds");

var totalSeconds = 60;
var secondsElapsed = 0;
var interval;


function getFormattedSeconds() {
    var secondsLeft = totalSeconds - secondsElapsed;
  
    var formattedSeconds;
  
    if (secondsLeft < 10) {
      formattedSeconds = "0" + secondsLeft;
    } else {
      formattedSeconds = secondsLeft;
    }
    console.log(formattedSeconds);
    return formattedSeconds;
    
}



function startClock (){
    setTime();
    if (totalSeconds > 0) {    
        interval = setInterval(function() {
            secondsElapsed++;
            renderTime();
      }, 1000);
  } else {
    alert("Time is up!")
  }
}


function renderTime() {
    secondsDisplay.textContent = getFormattedSeconds();
    if (secondsElapsed >= totalSeconds) {
        stopTimer();
    }
}

function stopTimer() {
    secondsElapsed = 0;
    setTime();
    renderTime();
}

function setTime() {
    var seconds;
  
      seconds = SecondsDisplay.value.trim();

  
    clearInterval(interval);
    
}


startButton.addEventListener("click", startClock);


/*var timeEl = document.querySelector("#time");
var mainEl = document.getElementById("#main");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime(); */



//WHEN I answer a question
//THEN I am presented with another question


//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock


//WHEN all questions are answered or the timer reaches 0
//THEN the game is over

//WHEN the game is over
//THEN I can save my initials and score