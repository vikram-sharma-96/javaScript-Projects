const questions = [
    {
   question: "Which planet is known as the Red Planet?",
   answers: [
    {Text:"Earth",correct:"false"},
    {Text:"Mars",correct:"True"},
    {Text:"Jupiter",correct:"false"},
    {Text:"venus",correct:"false"},
   ]
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
   answers: [
    {Text:"<img>",correct:"false"},
    {Text:"<a>",correct:"True"},
    {Text:"<link>",correct:"false"},
    {Text:"<h1>",correct:"false"},
   ] 
    },
    {
        question: "Which CSS property is used to change the text color?",
         answers: [
            {text:"background-color",correct:"false"},
            {text:"font-color",correct:"false"},
            {text:"color",correct:"true"},
            {text:"text-color",correct:"false"},
         ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("ans-button");
const nextButton = document.getElementById("next");