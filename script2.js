var time=document.querySelector("#time");
var startButton=document.querySelector("#start");
var count=localStorage.getItem("count");
var questions = document.getElementById("questions");
var answer1=document.querySelector("#answer1");
var q1=document.querySelector("#q1");
var q2=document.querySelector("#q2");
var q3=document.querySelector("#q3");
var wrong=document.querySelector(".wrong");

q2.style.display="none";
var secondsLeft = 60;


startButton.addEventListener("click", function () {
    setTime(); 
  time.textContent = count;
  localStorage.setItem("count", count);
});



function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      time.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);  
      }
  
    }, 1000);
};



//Questions
answer1.addEventListener("click", function (){
  var score = 0;
      score++;
      alert("Correct!");
      q1.style.display="none";
      q2.style.display="block";
    });

answer2.addEventListener("click", function (){
    var score = 0;
        score++;
        alert("Correct!");
        q2.style.display="none";
        q3.style.display="block";
        });

 