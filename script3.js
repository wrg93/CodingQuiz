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
q4.textContent="when?";
q5.textContent="Why?";

//Appending questions element
document.body.appendChild(questions);

//Appending questions
questions.appendChild(q1);
questions.appendChild(q2);
questions.appendChild(q3);
questions.appendChild(q4);
questions.appendChild(q5);

console.log(questions.children[0]);

return(question.children[0]);


