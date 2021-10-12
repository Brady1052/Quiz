var startPage = document.getElementById("startPage")
var quiz = document.getElementById("quiz")
var counter = 0;

function buildQuiz(){
    startPage.style.display = "none"
    displayQuestion()
}
function displayQuestion(){
    quiz.innerHTML = ("")
    var titleEl = document.createElement("h2")
    titleEl.innerHTML = myQuestions[counter].question
    
    var button  = document.createElement("button")
    var button1 = document.createElement("button")
    var button2 = document.createElement("button")   
   
    button.innerHTML  = myQuestions[counter].answers.a
    button1.innerHTML = myQuestions[counter].answers.b
    button2.innerHTML = myQuestions[counter].answers.c
   
   button.addEventListener("click", showNextQuestion);
   button1.addEventListener ("click", showNextQuestion);
   button2.addEventListener ("click", showNextQuestion);
    
    quiz.appendChild(titleEl)
    quiz.appendChild(button)
    quiz.appendChild(button1)
    quiz.appendChild(button2)
}

  function showNextQuestion() {
console.log("Hello")
counter ++;
displayQuestion()
}

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  
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
        c: "ESLint"
      },
      correctAnswer: "c"
    }
  ];

  // Kick things off
  var startButton = document.getElementById('startButton')
  startButton.addEventListener('click',buildQuiz);
//   buildQuiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;


// showSlide(currentSlide);

// Event listeners
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

