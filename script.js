var startPage = document.getElementById("startPage")
var quiz = document.getElementById("quiz")
var body = document.getElementById("body")
var counter = 0;
var score = 0;
var choResponseArray = []

function displayHome (){
  startPage.style.display ="initial"
  document.getElementById('timer').style.display ="none"
}

function buildQuiz(){  
  startPage.style.display ="none"
  displayQuestion()
  timer()
}

function displayQuestion(){
    quiz.innerHTML = ("")
    var titleEl = document.createElement("h2")
    titleEl.textContent = myQuestions[counter].question
    var aBtn = document.createElement("button")
    var bBtn = document.createElement("button")
    var cBtn = document.createElement("button")  
  
    aBtn.innerHTML = myQuestions[counter].answers.a
    bBtn.innerHTML = myQuestions[counter].answers.b
    cBtn.innerHTML = myQuestions[counter].answers.c
   
    aBtn.addEventListener ("click", showNextQuestion);
    bBtn.addEventListener ("click", showNextQuestion);
    cBtn.addEventListener ("click", showNextQuestion);

    aBtn.addEventListener("click", aAnswer)
    bBtn.addEventListener("click", bAnswer)
    cBtn.addEventListener("click", cAnswer)

    aBtn.addEventListener ("click", scoreTracker);
    bBtn.addEventListener ("click", scoreTracker);
    cBtn.addEventListener ("click", scoreTracker);
    
    quiz.appendChild(titleEl)
    quiz.appendChild(aBtn)
    quiz.appendChild(bBtn)
    quiz.appendChild(cBtn)
}
function aAnswer (){
choResponseArray.pop()
choResponseArray.push('a')

}
function bAnswer (){
 choResponseArray.pop()
 choResponseArray.push('b')
}
function cAnswer (){
choResponseArray.pop();
choResponseArray.push('c')
}

function timer(){
  var sec = 15;
  var timer = setInterval(function(){
      document.getElementById('timer').innerHTML='00:'+sec;
      sec--;
      if (sec <= -1) {
         clearInterval(timer);
         alert("You ran out of time!")
         document.getElementById('timer').innerHTML=''
         showResults()
         return;
      }
      if (counter === myQuestions.length){
        clearInterval(timer)
        
        showResults()
        return;
      }
  }, 1000);
  
}

function showNextQuestion() {
counter ++;
if (counter >= myQuestions.length){
 showResults()
} else {
displayQuestion()
  }
}

function scoreTracker(){
for (i=0; i < myQuestions[i].correctAnswer.length; i++){
var correctAnswer = myQuestions[i].correctAnswer;
console.log(correctAnswer)
var string = choResponseArray.join('')
console.log(string)
if(string === correctAnswer){
  score++;
}

}
}

  function showResults(){
    console.log(score)
    body.innerHTML=""
  }
  
var myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
     },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "ESLint",
    },
    correctAnswer: "c"
  }
]

// Kick things off
  var startButton = document.getElementById('startButton')
  startButton.addEventListener('click', buildQuiz)
