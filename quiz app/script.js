const questions = [
    {
   question: "Which planet is known as the Red Planet?",
   answers: [
    {Text:"Earth",correct:"false"},
    {Text:"Mars",correct:"true"},
    {Text:"Jupiter",correct:"false"},
    {Text:"venus",correct:"false"},
   ]
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
   answers: [
    {Text:"<img>",correct:"false"},
    {Text:"<a>",correct:"true"},
    {Text:"<link>",correct:"false"},
    {Text:"<h1>",correct:"false"},
   ] 
    },
    {
        question: "Which CSS property is used to change the text color?",
         answers: [
            {Text:"background-color",correct:"false"},
            {Text:"font-color",correct:"false"},
            {Text:"color",correct:"true"},
            {Text:"text-color",correct:"false"},
         ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("ans-button");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
nextButton.innerHTML = "Next";
showQuestion();
}
 function showQuestion(){ 
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "."+ currentQuestion.question;

       currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
       });
       
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
       if(button.dataset.correct === "true"){
        button.classList.add("correct");
       }
       button.disabled = "true";
    });
    nextButton.style.display = "block";
 
function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "Block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
}
)    
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

startQuiz();