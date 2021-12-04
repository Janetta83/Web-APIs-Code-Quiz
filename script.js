// Elements
const quizBody = document.getElementById("quiz");
const resultsE1 = document.getElementById("result");
const finalScoreE1 = document.getElementById("finalScore");
const gameoverDiv = document.getElementById("gameover");
const questionE1 = document.getElementById("questions");
const quizTimer = document.getElementById("timer");
const startQuizButton = document.getElementById("startBtn");
const startQuizDiv = document.getElementById("startpage");
const highscoreContainer = document.getElementById("highscoreContainer");
const highscoreDiv = document.getElementById("highscorePage");
const highscoreInputName = document.getElementById("initials");
const highscoreDisplayName = document.getElementById("highscoreInitials");
const endGameBtns = document.getElementById("endGameBtns");
const submitScoreBtn = document.getElementById("submitScore");
const highscoreDisplayScore = document.getElementById("highscore-score");
const buttonA = document.getElementById("a");
const buttonB = document.getElementById("b");
const buttonC = document.getElementById("c");
const buttonD = document.getElementById("d");

// Quiz Questions
const quizQuestions = [{
    question: "What is an MVP?",
    choiceA: "Most valuable player",
    choiceB: "Aaron Rodgers",
    choiceC: "Minimal viable product",
    choiceD: "YOU!",
    correctAnswer: "c"
},
{
    question: "What does the alert() function do?",
    choiceA: "Displays a message to the user",
    choiceB: "does nothing",
    choiceC: "a warning",
    choiceD: "all of the above",
    correctAnswer: "a"
},
{
    question: "In programming, a semicolon is often referred to as what?",
    choiceA: "terminator",
    choiceB: "winking eye",
    choiceC: "thumbs up",
    choiceD: "Arnold Schwarzenegger"
},
{
    question: "How do you check your code while on the active web page?",
    choiceA: "you can't",
    choiceB: "code can only be viewed on Visual Studio",
    choiceC: "Only the player can view it",
    choiceD: "right click on active web page, select inspect, then select console",
    correctAnswer: "d" 
},
{
    question: "What is code seperated by semicolons called?",
    choiceA: "Argument",
    choiceB: "Expression",
    choiceC: "Question",
    choiceD: "Answer",
    correctAnswer: "b"
},
];


// Controlled variables
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var score = 0;
var correct;

// Generate Questions
function generateQuizQuestion() {
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex) {
        return showScore();
    }
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionE1.innerHTML = "<p>" + currentQuestion + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

//Start Quiz
function startQuiz() {
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval (function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
    quizBody.style.display = "block";
}

// Display quiz score
function showScore() {
    quizBody.style.display = "none";
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreE1.innerHTML = "You received " + score + " out of " + quizQuestions.length + " correct! ";
}

// Record score with initails
submitScoreBtn.addEventListener("click", function highscore() {


    if (highscoreInputName.value === "") {
        alert("Initials cannot be blank");
        return false;
        

    }
})


