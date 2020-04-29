var time=document.querySelector("#time");
var startButton=document.querySelector("#start");
var count=localStorage.getItem("count");
var questions = document.getElementById("questions");
var answer1=document.querySelector("#answer1");
var answer2=document.querySelector("#answer2");
var answer3=document.querySelector("#answer3");
var answer4=document.querySelector("#answer4");
var answer5=document.querySelector("#answer5");
var q1=document.querySelector("#q1");
var q2=document.querySelector("#q2");
var q3=document.querySelector("#q3");
var q4=document.querySelector("#q4");
var q5=document.querySelector("#q5");
var wrong1=document.querySelector("#wrong1");
var wrong11=document.querySelector("#wrong11");
var wrong2=document.querySelector("#wrong2");
var wrong22=document.querySelector("#wrong22");
var wrong3=document.querySelector("#wrong3");
var wrong33=document.querySelector("#wrong33");
var wrong4=document.querySelector("#wrong4");
var wrong44=document.querySelector("#wrong44");
var wrong5=document.querySelector("#wrong5");
var wrong55=document.querySelector("#wrong55");
var final=document.body.querySelector("#final");
var highScore=document.body.querySelector("#highscore");
var goBackButton=document.body.querySelector("#go-back");
var clearButton=document.body.querySelector("#clear");
q1.style.display="none";
q2.style.display="none";
q3.style.display="none";
q4.style.display="none";
q5.style.display="none";
final.style.display="none";
goBackButton.style.display="none";
clearButton.style.display="none";
var score = 0;
var secondsLeft = 60;
var q5complete=false;


startButton.addEventListener("click", function () {
    setTime(); 
  time.textContent = count;
  localStorage.setItem("count", count);
  q1.style.display="block";
  startButton.style.display="none";
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



//Question 1
answer1.addEventListener("click", function (){
      score++;
      alert("Correct! " + score + " out of 1.");
      q1.style.display="none";
      q2.style.display="block";
    });


wrong1.addEventListener("click", function(){
    alert("Incorrect!");
    q1.style.display="none";
    q2.style.display="block";
});

wrong11.addEventListener("click", function(){
    alert("Incorrect!");
    q1.style.display="none";
    q2.style.display="block";
});

//Question 2
answer2.addEventListener("click", function (){
        score++;
        alert("Correct! " + score + " out of 2.");
        q2.style.display="none";
        q3.style.display="block";
});

wrong2.addEventListener("click", function(){
    alert("Incorrect!");
    q2.style.display="none";
    q3.style.display="block";
});

wrong22.addEventListener("click", function(){
    alert("Incorrect!");
    q2.style.display="none";
    q3.style.display="block";
});

//Question 3
answer3.addEventListener("click", function (){
        score++;
        alert("Correct! " + score + " out of 3.");
        q3.style.display="none";
        q4.style.display="block";
});

wrong3.addEventListener("click", function(){
    alert("Incorrect!");
    q3.style.display="none";
    q4.style.display="block";
});

wrong33.addEventListener("click", function(){
    alert("Incorrect!");
    q3.style.display="none";
    q4.style.display="block";
});

//Question 4
answer4.addEventListener("click", function (){
        score++;
        alert("Correct! " + score + " out of 4.");
        q4.style.display="none";
        q5.style.display="block";
});

wrong4.addEventListener("click", function(){
    alert("Incorrect!");
    q4.style.display="none";
    q5.style.display="block";
});

wrong44.addEventListener("click", function(){
    alert("Incorrect!");
    q4.style.display="none";
    q5.style.display="block";
});
q5complete=false;
//Question 5
answer5.addEventListener("click", function (){
        score++;
        alert("Correct! " + score + " out of 5.");
        q5.style.display="none";
        final.style.display="block";
        q5complete=true;
});

wrong5.addEventListener("click", function(){
    alert("Incorrect!");
    q5.style.display="none";
    final.style.display="block";
    q5complete=true;
});

wrong55.addEventListener("click", function(){
    alert("Incorrect!");
    q5.style.display="none";
    final.style.display="block";
    q5complete=true;
});


//final screen
if (secondsLeft===0){
    
    final.style.display="block";
    time.style.display="none";
    h2El=document.createElement("h2");
    h2El.textContent=score.value;
    final.appendChild(h2El);
    clearButton.style.display="block";
    goBackButton.style.display="block";
}


function getHighscore(){
var savedHighScore=JSON.parse(localStorage.getItem("highscore"));
console.log(storedhighscore)
for (var i=0;i<storedhighscore.length; i++){

    results1=storedhighscore[i];
console.log(result1);
h3El=document.createElement("h3");
h3El.textContent=result1
highScoreContainer.appendChild(h3El);
}
}
goBackButton.addEventListener("click", function(){
    window.location.href = "index.html"
});

clearButton.addEventListener("click",function(){
    localStorage.removeItem("highscore");
    h3El.textContent="";
});

 