const questions = [
    {
        question: "Chi ha scritto il racconto 'Canto di Natale'?",
        options: ["Charles Dickens", "Jane Austen", "Victor Hugo", "Mark Twain"],
        correct: 0
    },
    {
        question: "Quale paese ha iniziato la tradizione dell'albero di Natale?",
        options: ["Germania", "Francia", "Norvegia", "Stati Uniti"],
        correct: 0
    }
    // Puoi aggiungere altre domande qui seguendo il formato
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

const introPage = document.getElementById("intro-page");
const quizPage = document.getElementById("quiz-page");
const resultPage = document.getElementById("result-page");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextQuestionButton = document.getElementById("next-question");
const resultText = document.getElementById("result-text");
const startQuizButton = document.getElementById("start-quiz");
const restartQuizButton = document.getElementById("restart-quiz");

startQuizButton.addEventListener("click", startQuiz);
nextQuestionButton.addEventListener("click", showNextQuestion);
restartQuizButton.addEventListener("click", restartQuiz);

function startQuiz() {
    introPage.style.display = "none";
    quizPage.style.display = "block";
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-button");
        button.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });

    nextQuestionButton.style.display = "none";
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        correctAnswers++;
    }
    document.querySelectorAll(".option-button").forEach(button => {
        button.disabled = true;
    });
    nextQuestionButton.style.display = "block";
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizPage.style.display = "none";
    resultPage.style.display = "block";
    const passMark = Math.ceil(questions.length * 0.6);
    if (correctAnswers >= passMark) {
        resultText.textContent = "Complimenti! Hai aiutato Matilde a tornare a casa per Natale!";
    } else {
        resultText.textContent = "Oh no! Mati \u00E8 ancora dispersa!";
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    resultPage.style.display = "none";
    introPage.style.display = "block";
}



