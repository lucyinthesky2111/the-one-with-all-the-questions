 
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
    let buttons = document.querySelectorAll("button[data-type]");

    for (let button of buttons) {
      button.addEventListener("click", function () {
        const type = this.getAttribute("data-type");
        if (type === "easy") {
          alert("Loading 'easy' questions! 'Good luck, good luck, we all wish you good luck!'");
          displayEasyQuestions();
        } else {
          alert(`"${type}" difficulty not available yet.`);
        }
      });
    }
  }

  function displayEasyQuestions() {
    currentDifficulty =(easyQuestions);
    currentQuestionIndex = 0;
    score = 0;


    document.getElementById("select-difficulty").style.display = "none"
    document.getElementById("easy").style.display = "none";
    document.getElementById("medium").style.display = "none";
    document.getElementById("hard").style.display = "none";

    showEasyQuestion();
  }



  startGame();


  }); // Closing tag for load DOM content event listener