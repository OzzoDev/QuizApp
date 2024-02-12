let allQ = document.getElementById("allQ-El")
let currentQ = document.getElementById("currentQ-El")
let option1 = document.getElementById("option1_El")
let option2 = document.getElementById("option2_El")
let option3 = document.getElementById("option3_El")
let option4 = document.getElementById("option4_El")
let nextButton = document.getElementById("nextButton_El")
let lastButton = document.getElementById("lastButton_El")
let qIndex = 0
const questions = [
    {
        question: "Who is the author of the novel 'One Hundred Years of Solitude'?",
        options: [
            { text: "Gabriel García Márquez", isCorrect: true },
            { text: "Jorge Luis Borges", isCorrect: false },
            { text: "Isabel Allende", isCorrect: false },
            { text: "Pablo Neruda", isCorrect: false }
        ]
    },
    {
        question: "What is the capital of France?",
        options: [
            { text: "Paris", isCorrect: true },
            { text: "Rome", isCorrect: false },
            { text: "Madrid", isCorrect: false },
            { text: "Berlin", isCorrect: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        options: [
            { text: "Jupiter", isCorrect: true },
            { text: "Saturn", isCorrect: false },
            { text: "Earth", isCorrect: false },
            { text: "Mars", isCorrect: false }
        ]
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        options: [
            { text: "J.D. Salinger", isCorrect: true },
            { text: "F. Scott Fitzgerald", isCorrect: false },
            { text: "Ernest Hemingway", isCorrect: false },
            { text: "John Steinbeck", isCorrect: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        options: [
            { text: "H2O", isCorrect: true },
            { text: "CO2", isCorrect: false },
            { text: "O2", isCorrect: false },
            { text: "H2O2", isCorrect: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: [
            { text: "Japan", isCorrect: true },
            { text: "China", isCorrect: false },
            { text: "India", isCorrect: false },
            { text: "Korea", isCorrect: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        options: [
            { text: "Leonardo da Vinci", isCorrect: true },
            { text: "Pablo Picasso", isCorrect: false },
            { text: "Vincent van Gogh", isCorrect: false },
            { text: "Michelangelo", isCorrect: false }
        ]
    },
    {
        question: "What is the currency of Brazil?",
        options: [
            { text: "Brazilian Real", isCorrect: true },
            { text: "Peso", isCorrect: false },
            { text: "Dollar", isCorrect: false },
            { text: "Euro", isCorrect: false }
        ]
    },
    {
        question: "Who is known as the 'Father of Computers'?",
        options: [
            { text: "Charles Babbage", isCorrect: true },
            { text: "Alan Turing", isCorrect: false },
            { text: "Tim Berners-Lee", isCorrect: false },
            { text: "Ada Lovelace", isCorrect: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        options: [
            { text: "Au", isCorrect: true },
            { text: "Ag", isCorrect: false },
            { text: "Pt", isCorrect: false },
            { text: "Hg", isCorrect: false }
        ]
    },
    {
        question: "Which of the following is the longest river in the world?",
        options: [
            { text: "Amazon", isCorrect: true },
            { text: "Nile", isCorrect: false },
            { text: "Yangtze", isCorrect: false },
            { text: "Mississippi", isCorrect: false }
        ]
    },
    {
        question: "In what year did the French Revolution begin?",
        options: [
            { text: "1789", isCorrect: true },
            { text: "1804", isCorrect: false },
            { text: "1832", isCorrect: false },
            { text: "1901", isCorrect: false }
        ]
    },
    {
        question: "Who discovered penicillin?",
        options: [
            { text: "Alexander Fleming", isCorrect: true },
            { text: "Marie Curie", isCorrect: false },
            { text: "Louis Pasteur", isCorrect: false },
            { text: "Albert Einstein", isCorrect: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: [
            { text: "Mars", isCorrect: true },
            { text: "Venus", isCorrect: false },
            { text: "Mercury", isCorrect: false },
            { text: "Saturn", isCorrect: false }
        ]
    },
    {
        question: "Who composed the 'Ride of the Valkyries'?",
        options: [
            { text: "Richard Wagner", isCorrect: true },
            { text: "Ludwig van Beethoven", isCorrect: false },
            { text: "Wolfgang Amadeus Mozart", isCorrect: false },
            { text: "Johann Sebastian Bach", isCorrect: false }
        ]
    },
    {
        question: "What is the chemical formula for ozone?",
        options: [
            { text: "O3", isCorrect: true },
            { text: "CO2", isCorrect: false },
            { text: "NO2", isCorrect: false },
            { text: "H2O", isCorrect: false }
        ]
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: [
            { text: "Marie Curie", isCorrect: true },
            { text: "Rosalind Franklin", isCorrect: false },
            { text: "Jane Goodall", isCorrect: false },
            { text: "Mother Teresa", isCorrect: false }
        ]
    },
    {
        question: "Which of these cities is the southernmost?",
        options: [
            { text: "Cape Town", isCorrect: true },
            { text: "Sydney", isCorrect: false },
            { text: "Buenos Aires", isCorrect: false },
            { text: "Wellington", isCorrect: false }
        ]
    },
    {
        question: "Who wrote 'War and Peace'?",
        options: [
            { text: "Leo Tolstoy", isCorrect: true },
            { text: "Fyodor Dostoevsky", isCorrect: false },
            { text: "Anton Chekhov", isCorrect: false },
            { text: "Nikolai Gogol", isCorrect: false }
        ]
    },
    {
        question: "What is the smallest bone in the human body?",
        options: [
            { text: "Stapes", isCorrect: true },
            { text: "Femur", isCorrect: false },
            { text: "Tibia", isCorrect: false },
            { text: "Radius", isCorrect: false }
        ]
    }
];

startQuiz()
nextButton.addEventListener("click", function(){
    newQuestion()
});
lastButton.addEventListener("click", function(){
    lastQuestion()
});
function startQuiz() {
    currentQ.textContent = questions[qIndex].question;
    option1.textContent = questions[qIndex].options[0].text
    option2.textContent = questions[qIndex].options[1].text
    option3.textContent = questions[qIndex].options[2].text
    option4.textContent = questions[qIndex].options[3].text
    allQ.textContent = "Question " +(qIndex+1)+"/"+questions.length
}
function newQuestion(){
    if(qIndex < questions.length-1){
        qIndex++;
    }
    currentQ.textContent = questions[qIndex].question;
    option1.textContent = questions[qIndex].options[0].text
    option2.textContent = questions[qIndex].options[1].text
    option3.textContent = questions[qIndex].options[2].text
    option4.textContent = questions[qIndex].options[3].text
    allQ.textContent = "Question " +(qIndex+1)+"/"+questions.length
}
function lastQuestion(){
    if(qIndex > 0){
        qIndex--
    }
    currentQ.textContent = questions[qIndex].question;
    option1.textContent = questions[qIndex].options[0].text
    option2.textContent = questions[qIndex].options[1].text
    option3.textContent = questions[qIndex].options[2].text
    option4.textContent = questions[qIndex].options[3].text
    allQ.textContent = "Question " +(qIndex+1)+"/"+questions.length
}



