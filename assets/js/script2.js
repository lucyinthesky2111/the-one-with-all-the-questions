 
 /* Wait for DOM to finish loading before doing anything, to prevent trying to target elements that technically do not
 exist yet as they have not been loaded */
 document.addEventListener("DOMContentLoaded",  function() {
  // Gets the introduction modal
  let introductionModal = document.getElementById("introduction-modal");

  // Only show intro modal if user is on index.html/root - code from ChatGPT (see Readme credits)
  const isIndexPage =
  /* Modal is hidden by default in css. This code checks the user is on index.html or root and if this is trues and (&&) the modal is called,
  modal will be displayed */
  window.location.pathname === '/' || window.location.pathname.endsWith("index.html");
  if (isIndexPage && introductionModal) {
    introductionModal.style.display = "block";
  }

  // 
  /* Closes the introduction modal when the user clicks on the 'X' icon - this line of code is from 
  https://github.com/Diane-4P/harry-potter-quiz/blob/main/assets/js/script.js */
  const close = document.getElementById("close"); {
    close.addEventListener("click", function () {
      introductionModal.style.display = "none";
    })
  }

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

 let currentQuestionIndex = 0;
  let currentDifficulty = [];
  let score = 0;

  // Code help from 'Love Maths' walkthrough project 
  function startGame() { 
    document.getElementById("container").style.display = "none";
    let buttons = document.querySelectorAll("button[data-type]");

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
    currentDifficulty =(easyQuestions);
    currentQuestionIndex = 0;
    score = 0;
    
    document.getElementById("container").style.display = "block";
    document.getElementById("question-area").style.display = "none";
    document.getElementById("select-difficulty").style.display = "none"
    document.getElementById("easy").style.display = "none";
    document.getElementById("medium").style.display = "none";
    document.getElementById("hard").style.display = "none";

    displayEasyQuestions();
  }

  // Variables
  const quizProgress = document.getElementById("quiz-progress");
  const questionText = document.getElementById("question-text");
  const possibleAnswers = document.getElementById("possible-answers");


  function handleQuestion(index) {
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
    for (let i = 0; i <= index; i++) {
      // Everytime the count is increased, the 'seen' class is added to the corresponding span
      spans[i].classList.add("seen");
    };

    // Display question number and question
    questionText.innerHTML =
    `<p>${easyQuestions[index].questionNo}</p>
    <p>${easyQuestions[index].question}</p>
    `
    
    // Display answers
    // Adds a button containing each possible answer (which is styled with CSS) 
    easyQuestions[index].possibleAnswers.forEach(answer => {
      possibleAnswers.innerHTML += `<button>${answer}</button>`;
    });
  
    } //Closing tag for handleQuestion function

  handleQuestion(currentQuestionIndex);


  startGame();


  }); // Closing tag for load DOM content event listener