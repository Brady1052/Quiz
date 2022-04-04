var startPage = document.getElementById("startPage")
var quiz = document.getElementById("quiz")
var counter = 0;
var score = 0;
var correctAnswerArray = myQuestions
var choResponseArray = ['','','']

function displayHome (){
  startPage.style.display ="initial"
  document.getElementById('timer').style.display ="none"
}

function buildQuiz(){  
  startPage.style.display ="none"
  displayQuestion()
  timer()
}
function aBt(){
  console.log("a");
  choResponseArray = "a";
  console.log(choResponseArray);
}
function bBt(){
  console.log("b");
  choResponseArray = "b";
  console.log(choResponseArray);
}
function cBt(){
  console.log("c");
  choResponseArray = "c";
  console.log(choResponseArray);
}
if (choResponseArray == correctAnswerArray){
  alert("you got it right!")
}
function displayQuestion(){
    console.log(myQuestions.length)
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
    
    aBtn.addEventListener ("click", aBt)
    bBtn.addEventListener ("click", bBt)
    cBtn.addEventListener ("click", cBt)

    quiz.appendChild(titleEl)
    quiz.appendChild(aBtn)
    quiz.appendChild(bBtn)
    quiz.appendChild(cBtn)
}
function endQuiz(){
  
}
function timer(){
  var sec = 15;
  var timer = setInterval(function(){
      document.getElementById('timer').innerHTML='00:'+sec;
      sec--;
      if (sec <= -1) {
         clearInterval(timer);
         alert("You ran out of time!")
         showResults()
      }
      if (counter === myQuestions.length){
        clearInterval(timer)
      }
  }, 1000);
  
}

function showNextQuestion() {
counter ++;
console.log(counter)
if (counter === myQuestions.length){
 displayHome()
 
}
displayQuestion()
}
function scoreTracker(){
choResponseArray.push('Hello')
console.log(choResponseArray)
}

  function showResults(){
    console.log('showResults')
  }
//     // gather answer containers from our quiz
//     const answerContainers = quizContainer.querySelectorAll('.answers');
  
//     // keep track of user's answers
//     let numCorrect = 0;
  
//     // for each question...
//     myQuestions.forEach( (currentQuestion, questionNumber) => {
  
//       // find selected answer
//       const answerContainer = answerContainers[questionNumber];
//       const selector = `input[name=question${questionNumber}]:checked`;
//       const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
//       // if answer is correct
//       if(userAnswer === currentQuestion.correctAnswer){
//         // add to the number of correct answers
//         numCorrect++;
  
//         // color the answers green
//         answerContainers[questionNumber].style.color = 'lightgreen';
//       }
//       // if answer is wrong or blank
//       else{
//         // color the answers red
//         answerContainers[questionNumber].style.color = 'red';
//       }
//     });
  
  //   // show number of correct answers out of total
  //   resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  // }

  
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
