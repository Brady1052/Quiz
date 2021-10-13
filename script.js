var startPage = document.getElementById("startPage")
var quiz = document.getElementById("quiz")
var counter = 0;
var score = 0;

function timer(){
  var sec = 15;
  var timer = setInterval(function(){
      document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 1000);
}
function buildQuiz(){  
  startPage.style.display = "none"
    displayQuestion()
    timer()
}

// for(var i = 0; i < myQuestions.length; i++){
//   var response = (questions[i].prompt);
//   if(response == correctAnswer[i].answer){
//        score++;
//        alert("Correct!");
//   } else {
//        alert("WRONG!");
//   }
// }
// alert("you got " + score + "/" + questions.length);

function displayQuestion(){
    
    quiz.innerHTML = ("")
    var titleEl = document.createElement("h2")
    titleEl.innerHTML = myQuestions[counter].question
    
    
    var button  = document.createElement("button")
    var button1 = document.createElement("button")
    var button2 = document.createElement("button")  
    var choices = [button,button1,button2]
    
   
    button.innerHTML  = myQuestions[counter].answers.a
    button1.innerHTML = myQuestions[counter].answers.b
    button2.innerHTML = myQuestions[counter].answers.c
   
    button.addEventListener ("click", showNextQuestion);
   button1.addEventListener ("click", showNextQuestion);
   button2.addEventListener ("click", showNextQuestion);
    
    quiz.appendChild(titleEl)
    quiz.appendChild(button)
    quiz.appendChild(button1)
    quiz.appendChild(button2)
}

function showNextQuestion() {
counter ++;
displayQuestion()
}

  // function showResults(){
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

  
const myQuestions = [
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

// var questions = [
//   {
//         prompt: "What color are apples?\n(a) Red/Green\n\ (b) Purple\n(c) Orange",
//         answer: "a"
//   },
//   {
//        prompt: "What color are Bananas?\n(a) Teal\n\ (b) Magenta\n(c) Yellow",
//        answer: "c"
//   },
//   {
//        prompt: "What color are strawberries?\n(a) Yellow\n\ (b) Red\n(c) Blue",
//        answer: "a"
//   }
// ];
// var score = 0;

// for(var i = 0; i < questions.length; i++){
//   var response = window.prompt(questions[i].prompt);
//   if(response == questions[i].answer){
//        score++;
//        alert("Correct!");
//   } else {
//        alert("WRONG!");
//   }
// }
// alert("you got " + score + "/" + questions.length);