 
 /* Wait for DOM to finish loading before doing anything, to prevent trying to target elements that technically do not
 exist yet as they have not been loaded */
 document.addEventListener("DOMContentLoaded",  function() {
  // Gets the introduction modal
  let introductionModal = document.getElementById("introduction-modal");

  // Only shows intro modal if user is on index.html/root - code from ChatGPT (see ReadMe credits section)
  const isIndexPage =
  /* Modal is hidden by default in css. This code checks the user is on index.html or root and if this is trues and (&&) the modal is called,
  modal will be displayed */
  window.location.pathname === '/' || window.location.pathname.endsWith("index.html");
  if (isIndexPage && introductionModal) {
    introductionModal.style.display = "block";
  }

  // 
  /* Closes the introduction modal when the user clicks on the 'X' icon - this line of code is from 
  https://github.com/Diane-4P/harry-potter-quiz/blob/main/assets/js/script.js  (see ReadMe credits section) */
  const close = document.getElementById("close"); 
    close.addEventListener("click", function () {
      introductionModal.style.display = "none";
    })

// Easy questions as objects within an array. Possible answers are an array within the object 
   const easyQuestions = [

    {
      questionNo: '1.',
      question: "What is the name of the coffee shop where the friends go to hang out?",
      possibleAnswers: ['Central Park', 'Coffee 1', 'Costa', 'Central Perk'],
      correctAnswer: 'Central Perk',
    },

    {
      questionNo: '2.',
      question: "Which two characters are brother and sister?",
      possibleAnswers: ['Monica and Ross', 'Ross and Rachel', 'Phoebe and Joey', 'Monica and Chandler'],
      correctAnswer: 'Monica and Ross',

    },

    {
      questionNo: '3.',
      question: "How many sisters does Joey have?",
      possibleAnswers: ['2', '6', '7', 'None'],
      correctAnswer: '7',

    },

     {
      questionNo: '4.',
      question: "Which friend had jobs at Central Perk, Bloomingdales and Ralph Lauren?",
      possibleAnswers: ['Monica', 'Chandler', 'Phoebe', 'Rachel'],
      correctAnswer: 'Rachel',

    },
  ]

  // variables needed for startGame function
  let currentQuestionIndex = 0;
  let currentDifficulty = [];
  let score = 0;

  // Code help from 'Love Maths' walkthrough project 
  function startGame() { 
    // Hides the container div with the questions and possible answers when the user selects their desired difficulty 
    document.getElementById("container").style.display = "none";
    // Selects all the buttons in the site - i.e. easy, medium and hard buttons
    let buttons = document.querySelectorAll("button[data-type]");

    /* Iterates through the easy, medium and hard buttons and displays a pop up alert for the user when each of 
    the difficulty buttons are clicked - 
    good luck message from Phoebe Buffay is the same for each difficulty level, but the loading questions part 
    is customised according to what level of difficulty the user has picked */
    for (let button of buttons) {
      button.addEventListener("click", function () {
        const type = this.getAttribute("data-type");
        if (type === "easy") {
          alert("Loading 'easy' questions! 'Good luck, good luck, we all wish you good luck!'");
          displayEasyQuestions();
        } else if (type === "medium") {
          alert("Loading 'medium' questions! 'Good luck, good luck, we all wish you good luck!'");
        } else if (type === "hard") {
          alert("Loading 'hard' questions! 'Good luck, good luck, we all wish you good luck!'");
        }
      });
    }
  }

  function displayEasyQuestions() {
    currentDifficulty = (easyQuestions);
    currentQuestionIndex = 0;
    score = 0;

    /* Unhides the container div with the questions and possible answers which was hidden at the start of the startGame function
    when the user selects their desired difficulty as we now need to see this content */
    document.getElementById("container").style.display = "block";
    /* Hides the question area, select difficulty text and easy, medium and hard buttons once the user has chosen their difficulty 
    and is viewing questions as we longer need to see difficulty options at this stage */
    document.getElementById("question-area").style.display = "none";
    document.getElementById("select-difficulty").style.display = "none"
    document.getElementById("easy").style.display = "none";
    document.getElementById("medium").style.display = "none";
    document.getElementById("hard").style.display = "none";
    
  }

  // Variables needed for handleQuestion function
  const quizProgress = document.getElementById("quiz-progress");
  const questionText = document.getElementById("question-text");
  const possibleAnswers = document.getElementById("possible-answers");

// Code for handleQuestion function adapted from https://www.youtube.com/watch?v=_FnFPmA87XU&t=1000s (see ReadMe credits section)
  function handleQuestion(index) {
    // Display question number and question
    questionText.innerHTML =
    `<p>${easyQuestions[index].questionNo}</p>
    <p>${easyQuestions[index].question}</p>
    `
    
    // Display answers
    // Clear existing answers
    possibleAnswers.innerHTML = "";
    // Adds a button containing each possible answer (which is styled with CSS) 
    easyQuestions[index].possibleAnswers.forEach(answer => {
      possibleAnswers.innerHTML += `<button>${answer}</button>`;
    });
  
    } //Closing tag for handleQuestion function

  handleQuestion(currentQuestionIndex); 


  startGame();


  }); // Closing tag for load DOM content event listener