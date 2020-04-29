//creating Question elements
var questions=document.createElement("ul");
var q1=document.createElement("li");
var q2=document.createElement("li");
var q3=document.createElement("li");
var q4=document.createElement("li");
var q5=document.createElement("li");

//Creating text content for questions
q1.textContent="Who?";
q2.textContent="What?";
q3.textContent="Where?";
q4.textContent="When?";
q5.textContent="Why?";

//Appending questions element
document.body.appendChild(questions);

//Appending questions
questions.appendChild(q1);
//questions.appendChild(q2);
//questions.appendChild(q3);
//questions.appendChild(q4);
//questions.appendChild(q5);

//create button
var q1a1=document.createElement("BUTTON");

//create button text
q1a1.textContent="Answer One";

//append button
q1.appendChild(q1a1);

//event for all buttons clicked
var bns = $("button");
bns.on("click", function() {
    nextChild();
});


//function nextChild return attempt
function nextChild(){ 
  for (i=0;i<1; i++)
   $(document.body).append(questions.children[i++].textContent);
   };










