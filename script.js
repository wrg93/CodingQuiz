//WHEN I click the start button
//THEN a timer starts and I am presented with a question
var startButton = document.querySelector ("#start");
var secondsDisplay = document.querySelector("#seconds");
var totalSeconds=60
var secondsLeft = totalSeconds - secondsElapsed;
var secondsElapsed = 0;
var interval;


/*function getFormattedSeconds() {
    var formattedSeconds;
   
  
    if (secondsLeft < 10) {
      formattedSeconds = "0" + secondsLeft;
    } else {
      formattedSeconds = secondsLeft;
    }
    
    return formattedSeconds;
  }
  */


function startClock (){
    if (secondsLeft > 0) {    
        interval = setInterval(function() {
            secondsElapsed++;
            renderTime();
      }, 1000);
  } else {
    alert("Time is up!")
  }
}
console.log(secondsLeft);

/*function renderTime() {
    //secondsDisplay.textContent = getFormattedSeconds();
    if (secondsElapsed >= secondsLeft) {
        stopTimer();
    }
}
console.log(secondsLeft);*/

function stopTimer() {
    secondsElapsed = 0;
   // setTime();
    renderTime();
}

console.log(secondsLeft);

/*function setTime() {
    var seconds= "";
    
      seconds = secondsDisplay.TextContent.trim();

  
    clearInterval(seconds);
    
}*/


/*function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      secondsDisplay.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }
*/
  console.log(secondsLeft);


startButton.addEventListener("click", startClock);







//WHEN I answer a question
//THEN I am presented with another question


//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock


//WHEN all questions are answered or the timer reaches 0
//THEN the game is over

//WHEN the game is over
//THEN I can save my initials and score