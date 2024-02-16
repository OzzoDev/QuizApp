let allQ = document.getElementById("allQ-El");
let currentQ = document.getElementById("currentQ-El");
let option1 = document.getElementById("option1_El");
let option2 = document.getElementById("option2_El");
let option3 = document.getElementById("option3_El");
let option4 = document.getElementById("option4_El");
let options = [option1, option2, option3, option4];
let radio1 = document.getElementById("radio1_El");
let radio2 = document.getElementById("radio2_El");
let radio3 = document.getElementById("radio3_El");
let radio4 = document.getElementById("radio4_El");
let radioButtons = [radio1, radio2, radio3, radio4];
let radioButtonHolder = document.querySelectorAll(".radioButtonHolder");
let buttonHolder = document.querySelector(".buttonHolder");
let form = document.getElementById("form_El");
let endMessage = document.getElementById("endMessage_El");
let formHeader = document.querySelector(".formHeader");
let nextButton = document.getElementById("nextButton_El");
let lastButton = document.getElementById("lastButton_El");
let restartButton = document.getElementById("restartButton_El");
let qIndex = 0;
let qCounter = 0;
let points = 0;
let quizFinished = false;
let resetNextButtonText = false;
let qAnswered = [];
const questions = [
  {
    question: "Who is the author of the novel 'One Hundred Years of Solitude'?",
    options: [
      { text: "Gabriel García Márquez", isCorrect: true },
      { text: "Jorge Luis Borges", isCorrect: false },
      { text: "Isabel Allende", isCorrect: false },
      { text: "Pablo Neruda", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of France?",
    options: [
      { text: "Paris", isCorrect: true },
      { text: "Rome", isCorrect: false },
      { text: "Madrid", isCorrect: false },
      { text: "Berlin", isCorrect: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    options: [
      { text: "Jupiter", isCorrect: true },
      { text: "Saturn", isCorrect: false },
      { text: "Earth", isCorrect: false },
      { text: "Mars", isCorrect: false },
    ],
  },
  {
    question: "Who wrote 'The Catcher in the Rye'?",
    options: [
      { text: "J.D. Salinger", isCorrect: true },
      { text: "F. Scott Fitzgerald", isCorrect: false },
      { text: "Ernest Hemingway", isCorrect: false },
      { text: "John Steinbeck", isCorrect: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    options: [
      { text: "H2O", isCorrect: true },
      { text: "CO2", isCorrect: false },
      { text: "O2", isCorrect: false },
      { text: "H2O2", isCorrect: false },
    ],
  },
];

startQuiz();
nextButton.addEventListener("click", function () {
  if (!quizFinished) {
    newQuestion();
  }else{
    correctAnswer()
    allQ.textContent ="Question " + (qIndex + 1) + "/" + questions.length + " Points " + points;
    showEndMessage();
  }
  if (!checkedIfSelected()) {
    nextButton.textContent = "Select an answer";
    resetNextButtonText = true;
  }
});
lastButton.addEventListener("click", function () {
  lastQuestion();
});
restartButton.addEventListener("click",function(){
  restartQuiz();
});
for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("change", function (event) {
    if (event.target.checked && resetNextButtonText) {
      if (quizFinished) {
        nextButton.textContent = "Finish";
      } else {
        nextButton.textContent = "Next";
      }
      if(qAnswered[qIndex]){
        qAnswered[qIndex]=i;
      }
    }
  });
}
function startQuiz() {
  qIndex = 0;
  qCounter = 0; 
  points = 0; 
  qAnswered = []
  shuffleArray(questions);
  questions.forEach((question, index) => {
    question.options = shuffleArray(question.options);
  });
  setQuestion();
  allQ.textContent = "Question " + (qIndex + 1) + "/" + questions.length;
}
function newQuestion() {
  if (checkedIfSelected()) {
    correctAnswer();
    if (qIndex < questions.length - 1) {
      qIndex++;
    }
    setQuestion();
    resetAllRadioButtons();
    qCounter++;
    if (qCounter >= questions.length - 1) {
      nextButton.textContent = "Finish";
      quizFinished = true;
    }
  } else {
    nextButton.textContent = "Select an answer";
    resetNextButtonText = true;
  }
}
function lastQuestion() {
  if (qIndex > 0) {
    qIndex--;
  }
  setQuestion();
  if(qAnswered[qIndex]){
    radioButtons[qAnswered[qIndex]].checked=true;
  }
}
function restartQuiz(){
  quizFinished = false;
  allQ.style.fontSize="1.2em";
  form.style.display="block";
  endMessage.style.display="none";
  resetAllRadioButtons()
  startQuiz();
}
function setQuestion() {
  currentQ.textContent = questions[qIndex].question;
  for (let i = 0; i < options.length; i++) {
    options[i].textContent = questions[qIndex].options[i].text;
  }
  allQ.textContent ="Question " + (qIndex + 1) + "/" + questions.length + " Points " + points;
}
function resetAllRadioButtons() {
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
}
function correctAnswer() {
  let checkedRadio = -1;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      checkedRadio = i;
      break;
    }
  }
  if(!qAnswered[qIndex]){
    qAnswered.push(checkedRadio);
  }
  if (checkedRadio!=-1&&qIndex<=questions.length-1&&questions[qIndex].options[checkedRadio].isCorrect) {
    points++;
  }
}
function checkedIfSelected() {
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      return true;
    }
  }
}
function showEndMessage(){
  form.style.display="none";
  endMessage.style.display="block";
  currentQ.textContent="";
  allQ.style.fontSize="4rem";
  allQ.textContent="Well played you got "+points+"/"+questions.length+"points";
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
