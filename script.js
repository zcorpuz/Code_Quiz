// Create variables for elements that we will use in the HTML

var startBtn = document.querySelector(".btn");
var quizDiv = document.getElementById("quiz");

// Create 5 questions in an array utilizing objects

var questions = [
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

// Create variable for User Score

var userScore = 0;

// Click Event Listener that starts a 60 second timer and displays first message

// If user gets correct answer, add 1 to the User Score and display next question. If user gets wrong answer, subtract 10 seconds from time and display next question

// When the user answers all questions || time runs out, then show score to user with a space to input their initials.

// Log user input of initials and score to highScores.html page and local storage

// userScores should be brought up everytime user accesses website