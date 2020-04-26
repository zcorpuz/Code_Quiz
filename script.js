// Create 5 questions in an array utilizing objects

var questionsList = [
    {
        question: "What Element allows you to create text in HTML?",
        choices: ["<p> element", "<br> element", "<createText> element", "<t> element"],
        answer: "<p> element"
    },
    {
        question: "How do you create a single, horizontal line in HTML that goes across your whole page?",
        choices: ["<ln> element", "<dash> element", "<hr> element", "<line> element"],
        answer: "<hr> element"
    },
    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Script", "Cascading Style Sheet", "Cascading Selector Sheet", "None of these"],
        answer: "Cascading Style Sheet"
    },
    {
        question: "Which data type has only 2 values: 'True' or 'False'?",
        choices: ["String", "Symbol", "Null", "Boolean"],
        answer: "Boolean"
    },
    {
        question: "What method removes whitespace from both sides of a string but does not change the original string?",
        choices: [".splice()", ".remove()", ".trim()", ".reduce()"],
        answer: ".trim()"
    }
]; 

// Create variables

var userScore = 0;
var timeLeft = 30;
var i = 0;
var timer = document.getElementById("timer");
var startBtn = document.getElementById("quizBtn");
var welcomeDiv = document.getElementById("welcome-container");
var quizDiv = document.getElementById("quiz");
var choiceDiv = document.getElementById("choiceDiv");
var buttonA = document.getElementById("buttonA");
var buttonB = document.getElementById("buttonB");
var buttonC = document.getElementById("buttonC");
var buttonD = document.getElementById("buttonD");



startBtn.addEventListener("click", function() {
    setTimer();
    displayQuestions();
    welcomeDiv.className = "d-none";
    choiceDiv.className = "d-block center mt-10"

});

// Function for Timer at 30 seconds
function setTimer() {
    var timeRemaining = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeRemaining);
            endGame();
        }
    }, 1000);
}

// Function to display question
function displayQuestions() {
    quizDiv.textContent = questionsList[i].question;
    buttonA.textContent = questionsList[i].choices[0];
    buttonB.textContent = questionsList[i].choices[1];
    buttonC.textContent = questionsList[i].choices[2];
    buttonD.textContent = questionsList[i].choices[3];
}

buttonA.addEventListener("click", function(event) {
    event.stopPropagation();
    var emptyString = "";
    emptyString = questionsList[i].answer;
    if (i < questionsList.length - 1) {
        i++;
    }
    if (event.target.textContent === emptyString) {
        displayQuestions();
        userScore++;
    } else {
        displayQuestions();
        timeLeft -= 5;
    }
});

buttonB.addEventListener("click", function(event) {
    event.stopPropagation();
    var emptyString = "";
    emptyString = questionsList[i].answer;
    if (i < questionsList.length - 1) {
        i++;
    }
    if (event.target.textContent === emptyString) {
        displayQuestions();
        userScore++;
    } else {
        displayQuestions();
        timeLeft -= 5;
    }
});

buttonC.addEventListener("click", function(event) {
    event.stopPropagation();
    var emptyString = "";
    emptyString = questionsList[i].answer;
    if (i < questionsList.length - 1) {
        i++;
    }
    if (event.target.textContent === emptyString) {
        displayQuestions();
        userScore++;
    } else {
        displayQuestions();
        timeLeft -= 5;
    }
});

buttonD.addEventListener("click", function(event) {
    event.stopPropagation();
    var emptyString = "";
    emptyString = questionsList[i].answer;
    console.log(event.target.textContent);
    if (i < questionsList.length - 1) {
        i++;
    }
    if (event.target.textContent === emptyString) {
        displayQuestions();
        userScore++;
    } else {
        displayQuestions();
        timeLeft -= 5;
    }
});

var initials = "";

function endGame() {
    if (timeLeft === 0) {
        initials = alert("Good Game. Your score is " + userScore + ". Please head to High Score tab and enter your initials and score provided.");
    }
}

var quizScore = document.getElementById("#quizScore");
var scoreForm = document.getElementById("#score-form");
var scoreList = document.getElementById("#score-list");
var scoreArray = [];

function renderScores () {
    scoreList.innerHTML = "";

    for (var j = 0; j < scoreArray.length; j++) {
        var array = scoreArray[j];

        var li = document.createElement("li");
        li.textContent = array;
        li.setAttribute("data-index", j);

        scoreList.appendChild(li);
    }
}

scoreForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var scoreText = quizScore.nodeValue.trim();

    scoreArray.push(quizScore);
    quizScore.value = "";

    renderScores();
});
