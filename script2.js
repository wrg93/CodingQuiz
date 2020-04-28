var time=document.querySelector("#time");
var startButton=document.querySelector("#start");
var count=localStorage.getItem("count");
var questions = document.getElementById("questions");
var answer=document.querySelector(".answer");
var q1=document.querySelector("#q1");
var q2=document.querySelector("#q2");
var wrong=document.querySelector(".wrong");
/*var userAnswers = [];*/

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
}
answer.addEventListener("click", function (){
//answer.addEventListener("click", function(){
var questions = [
    {q1},
    {q2}
];
    
   /* { q: "1. At what minimum distance away from a railroad should you stop?", a: "q1a" },
    { q: "There are 365 days in a year.", a: "t" },
    { q: "There are 42 ounces in a pound.", a: "f" },
    { q: "The Declaration of Independence was created in 1745.", a: "f" },
    { q: "Bananas are vegetables.", a: "f" }
  ];

  var answers = [
      {a:"1", c:"q1a"},
      {a: "2", c:"t"},
      {a: "3", c:"f"},
      {a: "4", c: "f"},
      {a: "5", c: "f"},
  ];*/

  //console.log(answers[2].c)

  // We start the game with a score of 0.
  var score = 0;

  // Loop over every question object
  for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    //var answer = confirm(questions[i].q);

    // Compare answers
    //if (answer === (questions[i].a === answers[i].c)){
   // if ((answer === true && questions[i].a === "t") ||
   //   (answer === false && questions[i].a === "f")) {
      // Increase score
      score++;
      alert("Correct!");
      console.log(score);
      console.log(answer);
    //  document.q1.parentElement.replaceChild(q2,q1);
    }
   /* else {
      alert("Wrong!");
    }
  }*/

  // Show total at end
  alert("You got " + score + "/" + questions.length);
})
 /* var submitAnswer = function() {
    var answer = document.getElementById(submitq1);
    userAnswers.push[answer];
 };*/