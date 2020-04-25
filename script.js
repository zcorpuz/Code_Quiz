// Create 5 questions in an array utilizing objects

var questionsList = [
    {
        question: "What Element allows you to create text in HTML?",
        choices: ["<p> element", "<br> element", "<createText> element", "<t> element"],
        answer: 0
    },
    {
        question: "How do you create a single, horizontal line in HTML that goes across your whole page?",
        choices: ["<ln> element", "<dash> element", "<hr> element", "<line> element"],
        answer: 2
    },
    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Script", "Cascading Style Sheet", "Cascading Selector Sheet", "None of these"],
        answer: 1
    },
    {
        question: "Which data type has only 2 values: 'True' or 'False'?",
        choices: ["String", "Symbol", "Null", "Boolean"],
        answer: 3
    },
    {
        question: "What method removes whitespace from both sides of a string but does not change the original string?",
        choices: [".splice()", ".remove()", ".trim()", ".reduce()"],
        answer: 2
    }
]; 

// Create variables

var userScore = 0;
var timeLeft = 60;
var timer = document.getElementById("timer");
var startBtn = document.getElementById("quizBtn");
var answer;
var welcomeDiv = document.getElementById("welcome-container");
var quizDiv = document.getElementById("quiz");



startBtn.addEventListener("click", function() {
    setTimer();
    displayQuestions();
    welcomeDiv.className = "d-none";
})

function setTimer() {
    var timeRemaining = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeRemaining);
        }
    }, 1000);
}

function displayQuestions() {
    for (var i = 0; i < questionsList.length; i++) {
        quizDiv.textContent = questionsList[i].question;
    }
}



