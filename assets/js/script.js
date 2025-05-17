
// Variables 
const introductionModal = document.getElementById("introduction-modal") 
const close = document.getElementById("close")
const play = document.getElementById("play")

//MODALS
 /*  Displays the introduction modal
openIntroductionModal.addEventListener('click', function () {
    introductionModal.style.display = "block";

}) */

// Closes the introduction modal when the user clicks the 'X' icon 
close.addEventListener('click', function () {
    introductionModal.style.display = "none";

})



// Questions contained in a nested object

const questions = {
  easy: {
    question1: {
  question: "1. What is the name of the coffee shop where the friends go to hang out?",
  answerA: "Central Park", correct: false,
  answerB: "Coffe 1", correct: false,
  answerC: "Costa", correct: false,
  answerD: "Central Perk", correct: true,
},
   question2: {
    question: "Which two characters are brother and sister?",
    answerA: "Monica and Ross", correct: true,
    answerB: "Ross and Rachel", correct: false,
    answerC: "Phoebe and Joey", correct: false,
    answerD: "Monica and Chandler", correct: false,
},
  question3: {
    question: "How many sisters does Joey have?",
    answerA: "2",
    answerB: "6",
    answerC: "7",
    answerD: "None",
},
}
}

console.log(questions)
console.log(questions.easy.question1.question)
console.log(questions.easy.question1.answerD)
console.log(questions.easy.question2.question)
console.log(questions.easy.question2.answerA)
console.log(questions.easy.question3.question)
console.log(questions.easy.question3.answerC)
console.log(questions.easy.question1.answerA)




/*  Potential function names
function startGame()

 

function displayEasyQuestions() 

 

function displayMediumQuestions() 

 

function displayHardQuestions() 

 

function checkAnswer() // Turn box green if correct and red if incorrect 

 

function incrementCorrectScoreTally() // Adds to correct answer tally if user gets question right 

 

function incrementIncorrectScoreTally() // Adds to incorrect answer tally if user gets question right 

 

function setNextQuestion() 

 

function displayFinalScore() 

 */