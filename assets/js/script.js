document.addEventListener('DOMContentLoaded',  function() {
  // Gets the introduction modal
  let introductionModal = document.getElementById("introduction-modal");

  // Only show intro modal if user is on index.html/root
  const isIndexPage =
  window.location.pathname === '/' || window.location.pathname.endsWith("index.html");
  if (isIndexPage && introductionModal) {
    introductionModal.style.display = "block";
  }

  // Closes the introduction modal when the user clicks on the 'X' icon
  const close = document.getElementById("close");
  if (close) {
    close.addEventListener('click', function () {
      introductionModal.style.display = "none";
    })
  }


  /*
  let play = document.getElementById("play")
  let buttonContainer = document.getElementById("button-container") */

  //MODALS
  /*  Displays the introduction modal
 openIntroductionModal.addEventListener('click', function () {
     introductionModal.style.display = "block";
 
 }) */

  // MODAL

  // Closes the introduction modal when the user clicks the 'X' icon 
  /* DOES NOT WORK WITH WHEN THE JS BELOW THE QUESTIONS IS APPLIED
  close.addEventListener('click', function () {
      introductionModal.style.display = "none"; 
  
  }); */

  // Easy questions as objects within an array. Possible answers are an array within the object 
   const easyQuestions = [

    {
      questionNo: '1',
      question: "1. What is the name of the coffee shop where the friends go to hang out?",
      possibleAnswers: ['Central Park', 'Coffee 1', 'Costa', 'Central Perk'],
      correctAnswer: 'Central Perk',

    },

    {
      questionNo: '2',
      question: "2. Which two characters are brother and sister?",
      possibleAnswers: ['Monica and Ross', 'Ross and Rachel', 'Phoebe and Joey', 'Monica and Chandler'],
      correctAnswer: 'Monica and Ross',

    },

    {
      questionNo: '3',
      question: "3. How many sisters does Joey have?",
      possibleAnswers: ['2', '6', '7', 'None'],
      correctAnswer: '7',

    },
  ]
  // Variables
  const quizProgress = document.getElementById("quiz-progress");
  const questionText = document.getElementById("question-text");
  const possibleAnswers = document.getElementById("possible-answers");

  // this variable keeps track of what question the user is on
  let currentQuestionIndex = 0;


  function handleQuestion() {

    // Quiz progress bar which appears above questions and possible answers
    /* for each easy question, within the quiz progress div, add a span which is styled as a grey progress bar using a CSS class, each bar will later
    turn yellow one by one, as the user clears each question. */
    easyQuestions.forEach((question) => {
      // this line creates the span
      const span = document.createElement("span");
      // this line adds the span to the correct place i.e. the div with the id of quiz-progress 
      quizProgress.appendChild(span);
    });
    /* Loops through each span tag (which corresponds with each question) and adds my 'seen' class to each span incremently to change the colour 
    of the bar to yellow */ 
    // Sets a variable called spans and selects all the spans in the div with id of quiz-progress 
    let spans = document.querySelectorAll("#quiz-progress span");
    // Starts the count at zero and continues until it reaches the end of the questions. Increases the count by one each time 
    for (let i = 0; i <= currentQuestionIndex; i++) {
      // Everytime the count is increased, the 'seen' class is added to the corresponding span
      spans[i].classList.add("seen");
    };



  }; //Closing tag for handleQuestion function


  handleQuestion();


  }); // Closing tag for load DOM content event listener 




