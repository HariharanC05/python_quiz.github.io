const questions = [
    {
        question: "What is a variable?",
        answers: [
            {text: "Identifier", correct: true},
            {text: "keyword", correct: false},
            {text: "Data type", correct: false},
            {text: "function", correct: false},
        ]
    },
    //1
    {
        question: "What is an argument?",
        answers: [
            {text: "parameters", correct: false},
            {text: "Value", correct: true},
            {text: "function", correct: false},
            {text: "variable", correct: false},
        ]
    },
    //2
    {
        question: "What is a lambda function?",
        answers: [
            {text: "recursion function", correct: false},
            {text: "in-built function", correct: false},
            {text: "function", correct: false},
            {text: "Anonymous function", correct: true},
        ]
    },
    //3
    {
        question: "What is a tuple?",
        answers: [
            {text: "mutable", correct: false},
            {text: "data type", correct: false},
            {text: "Immutable", correct: true},
            {text: "function", correct: false},
        ]
    },
    //4
    {
        question: "What is a slice?",
        answers: [
            {text: "string", correct: false},
            {text: "Subset", correct: true},
            {text: "mutable", correct: false},
            {text: "immutable", correct: false},
        ]
    },
    //5 
    {
        question: "What is a boolean?",
        answers: [
            {text: "number", correct: false},
            {text: "float", correct: false},
            {text: "True or False", correct: true},
            {text: "string", correct: false},
        ]
    },
    //6  
    {
        question: "What is an if statement?",
        answers: [
            {text: "Conditional", correct: true},
            {text: "control", correct: false},
            {text: "repetition", correct: false},
            {text: "iteration", correct: false},
        ]
    },
    //7
    {
        question: "What is a for loop?",
        answers: [
            {text: "Conditional", correct: false},
            {text: "control", correct: false},
            {text: "repetition", correct: false},
            {text: "iteration", correct: true},
        ]
    },
    //8
    {
        question: "What is a while loop?",
        answers: [
            {text: "Conditional", correct: false},
            {text: "control", correct: false},
            {text: "repetition", correct: true},
            {text: "iteration", correct: false},
        ]
    },
    //9
    {
        question: "What is a try-except block?",
        answers: [
            {text: "reading file", correct: false},
            {text: "writing a file", correct: false},
            {text: "opening a file", correct: false},
            {text: "Exception handling", correct: true},
        ]
    },
    //10
    {
        question: "What is the keyword used to define a function in Python?",
        answers: [
            {text: "define", correct: false},
            {text: "def", correct: true},
            {text: "del", correct: false},
            {text: "function", correct: false},
        ]
    },
    //11
    {
        question: "What is the keyword used to define a conditional statement in Python?",
        answers: [
            {text: "range", correct: false},
            {text: "if", correct: true},
            {text: "bool", correct: false},
            {text: "def", correct: false},
        ]
    },
    //12
    {
        question: "What is the keyword used to define a loop in Python?",
        answers: [
            {text: "for and while", correct: true},
            {text: "for", correct: false},
            {text: "while", correct: false},
            {text: "none of the above", correct: false},
        ]
    },
    //13
    {
        question: "What is the keyword used to define a class in Python?",
        answers: [
            {text: "class", correct: true},
            {text: "except", correct: false},
            {text: "try", correct: false},
            {text: "eval", correct: false},
        ]
    },
    //14
    {
        question: "What is the keyword used to define a try-except block in Python?",
        answers: [
            {text: "class", correct: false},
            {text: "except", correct: false},
            {text: "try", correct: true},
            {text: "eval", correct: false},
        ]
    },
    //15
    {
        question: "What is the keyword used to define a variable in Python?",
        answers: [
            {text: "a=5", correct: false},
            {text: "x", correct: false},
            {text: "try", correct: false},
            {text: "variable (There is no specific keyword used to define a variable in Python.)", correct: true},
        ]
    },
    //16
    {
        question: "What is the keyword used to import modules in Python?",
        answers: [
            {text: "import", correct: true},
            {text: "def", correct: false},
            {text: "class", correct: false},
            {text: "function", correct: false},
        ]
    },
    //17
    {
        question: "What is the keyword used to exit a loop in Python?",
        answers: [
            {text: "continue", correct: false},
            {text: "and", correct: false},
            {text: "break", correct: true},
            {text: "pass", correct: false},
        ]
    },
    //18
    {
        question: "What is the keyword used to continue to the next iteration of a loop in Python?",
        answers: [
            {text: "continue", correct: true},
            {text: "and", correct: false},
            {text: "break", correct: false},
            {text: "pass", correct: false},
        ]
    },
    //19
    {
        question: "What is the keyword used to define an exception in Python?",
        answers: [
            {text: "continue", correct: false},
            {text: "raise", correct: true},
            {text: "break", correct: false},
            {text: "pass", correct: false},
        ]
    },
    //20
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!...`;
    nextButton.innerHTML = "Restart quiz";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();