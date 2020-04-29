//count variable
var count = localStorage.getItem("count");


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

//create button
var startQuiz=document.createElement("BUTTON");
var q1a=document.createElement("BUTTON");
var q1

//create button text
startQuiz.textContent="Start Quiz";
q1a.textContent="Answer One";


//append button
q0.appendChild(startQuiz);
q1.appendChild(q1a);

//event for all buttons clicked
var bns = $("button");
bns.on("click", function() {
    nextChild();
});




   //function nextChild attempt 2
   function nextChild(){   
    count++;
    //show next question
    var currentQuestion=questions.children[count];
    currentQuestion.style.display="block";
    //hide previous question
    var PrevQ=questions.children[(count-1)];
    PrevQ.style.display="none";
  
   };










