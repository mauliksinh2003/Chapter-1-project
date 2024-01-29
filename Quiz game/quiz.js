const questions = [{
    question: "Which is the largest animal from below ?",
    answers: [
        { text: "Shark", correct: false },
        { text: "Lion", correct: false },
        { text: "Tiger", correct: false },
        { text: "Elephant", correct: true },
    ]
},

{
    question: "Which one is a markup language ?",
    answers: [
        { text: "Javascript", correct: false },
        { text: "Python", correct: false },
        { text: "Html", correct: true },
        { text: "Php", correct: false },
    ]
},

{
    question: "What is a capital of india ?",
    answers: [
        { text: "Delhi", correct: true },
        { text: "Mumbai", correct: false },
        { text: "Ahemedabad", correct: false },
        { text: "Kolkata", correct: false },
    ]
},

{
    question: "how many years needed to get b.tech degree ?",
    answers: [
        { text: "6", correct: false },
        { text: "3", correct: false },
        { text: "2", correct: false },
        { text: "4", correct: true },
    ]
}]

const questionElement = document.getElementById("que");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");



let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    // currentQuestionIndex = 0;
    // score = 0;
    nextButton.innerText = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];

    if (currentQuestionIndex <= 3) {
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ") " + currentQuestion.question;
    }
    else {
        questionElement.innerText = "Thank you !! ";
    }


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);


        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });

}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        document.getElementById("scoreCount").innerHTML = "Your score is : " + score

    }
    else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";

}

nextButton.addEventListener("click", nextQuestion);

function nextQuestion() {
    currentQuestionIndex++;
    startQuiz();

}


startQuiz();


