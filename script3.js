//click count set
clickCount=0;

//global time
var timeDisplay = document.createElement("div");
document.body.appendChild(timeDisplay);
var secondsLeft=60;

//creating Question elements
var questions=document.createElement("ul");
var q0=document.createElement("li");
var q1=document.createElement("li");
var q2=document.createElement("li");
var q3=document.createElement("li");
var q4=document.createElement("li");
var q5=document.createElement("li");

//make Questions invisible
q1.style.display="none";
q2.style.display="none";
q3.style.display="none";
q4.style.display="none";
q5.style.display="none";

//Creating text content for questions
q1.textContent="Who?";
q2.textContent="What?";
q3.textContent="Where?";
q4.textContent="When?";
q5.textContent="Why?";

//Appending questions element
document.body.appendChild(questions);


//Appending questions
questions.appendChild(q0);
questions.appendChild(q1);
questions.appendChild(q2);
questions.appendChild(q3);
questions.appendChild(q4);
questions.appendChild(q5);

//create and append start button
var startQuiz=document.createElement("BUTTON");
startQuiz.textContent="Start Quiz";
q0.appendChild(startQuiz);


//create Question 1 answers
var q1a=document.createElement("BUTTON");
var q1b=document.createElement("BUTTON");
var q1c=document.createElement("BUTTON");
var q1d=document.createElement("BUTTON");

//create Question 1 answer text
q1a.textContent="A. Option 1";
q1b.textContent="B. Option 2";
q1c.textContent="C. Option 3";
q1d.textContent="D. Option 4";


//append Question 1 answers
q1.appendChild(q1a);
q1.appendChild(q1b);
q1.appendChild(q1c);
q1.appendChild(q1d);

//create Question 2 answers
var q2a=document.createElement("BUTTON");
var q2b=document.createElement("BUTTON");
var q2c=document.createElement("BUTTON");
var q2d=document.createElement("BUTTON");

//create Question 2 answer text
q2a.textContent="A. Option 1";
q2b.textContent="B. Option 2";
q2c.textContent="C. Option 3";
q2d.textContent="D. Option 4";


//append Question 2 answers
q2.appendChild(q2a);
q2.appendChild(q2b);
q2.appendChild(q2c);
q2.appendChild(q2d);


//create Question 3 answers
var q3a=document.createElement("BUTTON");
var q3b=document.createElement("BUTTON");
var q3c=document.createElement("BUTTON");
var q3d=document.createElement("BUTTON");

//create Question 3 answer text
q3a.textContent="A. Option 1";
q3b.textContent="B. Option 2";
q3c.textContent="C. Option 3";
q3d.textContent="D. Option 4";


//append Question 3 answers
q3.appendChild(q3a);
q3.appendChild(q3b);
q3.appendChild(q3c);
q3.appendChild(q3d);

//create Question 4 answers
var q4a=document.createElement("BUTTON");
var q4b=document.createElement("BUTTON");
var q4c=document.createElement("BUTTON");
var q4d=document.createElement("BUTTON");

//create Question 4 answer text
q4a.textContent="A. Option 1";
q4b.textContent="B. Option 2";
q4c.textContent="C. Option 3";
q4d.textContent="D. Option 4";


//append Question 4 answers
q4.appendChild(q4a);
q4.appendChild(q4b);
q4.appendChild(q4c);
q4.appendChild(q4d);

//create Question 5 answers
var q5a=document.createElement("BUTTON");
var q5b=document.createElement("BUTTON");
var q5c=document.createElement("BUTTON");
var q5d=document.createElement("BUTTON");

//create Question 5 answer text
q5a.textContent="A. Option 1";
q5b.textContent="B. Option 2";
q5c.textContent="C. Option 3";
q5d.textContent="D. Option 4";


//append Question 3 answers
q5.appendChild(q5a);
q5.appendChild(q5b);
q5.appendChild(q5c);
q5.appendChild(q5d);


//event for all buttons clicked
var bns = $("button");
bns.on("click", function() {
    clickCount++;
    console.log(clickCount);
    if (clickCount<6){
    nextChild();
    }
});


   //function nextChild
   function nextChild(){ 
    
    //show next question
    var currentQuestion=questions.children[clickCount];
    currentQuestion.style.display="block";
    //hide previous question
    var PrevQ=questions.children[(clickCount-1)];
    PrevQ.style.display="none";
   
   };

//Setting Correct Class
q1a.setAttribute("class","correct");
q2b.setAttribute("class","correct");
q3c.setAttribute("class","correct");
q4d.setAttribute("class","correct");
q5a.setAttribute("class","correct");

//Setting Incorrect Class
q1b.setAttribute("class","incorrect");
q1c.setAttribute("class","incorrect");
q1d.setAttribute("class","incorrect");
q2a.setAttribute("class","incorrect");
q2c.setAttribute("class","incorrect");
q2d.setAttribute("class","incorrect");
q3a.setAttribute("class","incorrect");
q3b.setAttribute("class","incorrect");
q3d.setAttribute("class","incorrect");
q4a.setAttribute("class","incorrect");
q4b.setAttribute("class","incorrect");
q4c.setAttribute("class","incorrect");
q5b.setAttribute("class","incorrect");
q5c.setAttribute("class","incorrect");
q5d.setAttribute("class","incorrect");

//On Click Correct
$(".correct").on("click", function(){   
    alert("Correct!")   
});

//On Click Incorrect
$(".incorrect").on("click", function(){   
    alert("incorrect")  
    secondsLeft-=10;
    //console.log(secondsLeft);
    
});

//start time
startQuiz.addEventListener("click", function setTime() {
  var timerInterval = setInterval(function() {
   secondsLeft--;
    timeDisplay.textContent = secondsLeft;
    if((secondsLeft === 0) || (clickCount===(6))) {
        clearInterval(timerInterval);
        finalPage();
        
      }
    

  }, 1000);
})


//final page
function finalPage(){

    //hide quetions
    questions.style.display="none";
    var final=document.createElement("div");

    //display final screen
       final.textContent="Game Over";
       document.body.appendChild(final);
    

    //create and append intitials input
    var input=document.createElement("input");
    input.setAttribute("type","text");
    final.appendChild(input);

 

    //create keydown for initials input
    input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
            var initials = input.value;
            input.style.display="none";
            timeDisplay.style.display="none";

            // create scoreEntry
            var scoreEntry = initials + " " + secondsLeft;
        
            //Highscore submission and rertieval
            localStorage.setItem("Stored Scores", JSON.stringify(scoreEntry));
            var showedScores=document.createElement("div");
            showedScores.textContent=JSON.parse(localStorage.getItem("Stored Scores"));
            final.appendChild(showedScores);
            
            //goback button
            var goBackButton=document.createElement("BUTTON");
            goBackButton.textContent="Try It Again!"
            final.appendChild(goBackButton);
            goBackButton.addEventListener("click", function(){
            window.location.href="index2.html"
            });
            
            //stored Scores
            showedScores.textContent=JSON.parse(localStorage.getItem("Stored Scores"));
            var clearButton=document.createElement("BUTTON");
            clearButton.textContent="Clear Score";
            final.appendChild(clearButton);
            clearButton.addEventListener("click",function(){
                localStorage.removeItem("Stored Scores");
                showedScores.style.display="none";
                clearButton.style.display="none";
            });
        }
    });
}


