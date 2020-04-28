var time=document.querySelector("#time");
var startButton=document.querySelector("#start");
var count=localStorage.getItem("count");
var question = document.getElementById("question");

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

    // The array of questions for our quiz game.
    /*var questions = [
        { q: "The sky is blue." a: "t" },
        { q: "There are 365 days in a year.", a: "t" },
        { q: "There are 42 ounces in a pound.", a: "f" },
        { q: "The Declaration of Independence was created in 1745.", a: "f" },
        { q: "Bananas are vegetables.", a: "f" }
      ];*/

      var questions = [


            {
        
                q : "What does HTML stand for?",
        
                choiceA : "Correct",
        
                choiceB : "Wrong",
        
                choiceC : "Wrong",
        
                correct : "A"
        
            },{
        
                q : "What does CSS stand for?",
        
                choiceA : "Wrong",
        
                choiceB : "Correct",
        
                choiceC : "Wrong",
        
                correct : "B"
        
            },{
        
                q : "What does JS stand for?",
        
                choiceA : "Wrong",
        
                choiceB : "Wrong",
        
                choiceC : "Correct",
        
                correct : "C"
        
            }
        
        ];

        function renderQuestion(){

            let q = questions[runningQuestion];
        
           
        
            question.innerHTML = "<p>"+ q.question +"</p>";
        
            
        
            choiceA.innerHTML = q.choiceA;
        
            choiceB.innerHTML = q.choiceB;
        
            choiceC.innerHTML = q.choiceC;
        
        }

        
  
      // We start the game with a score of 0.
      var score = 0;
  
      // Loop over every question object
      for (var i = 0; i < questions.length; i++) {
        // Display current question to user and ask OK/Cancel
       // var answer = confirm(questions[i].q);
  
        // Compare answers
        if ((answer === true && questions[i].a === "t") ||
          (answer === false && questions[i].a === "f")) {
          // Increase score
          score++;
          alert("Correct!");
        }
        else {
          alert("Wrong!");
        }
      }
  
      // Show total at end
      alert("You got " + score + "/" + questions.length);
  