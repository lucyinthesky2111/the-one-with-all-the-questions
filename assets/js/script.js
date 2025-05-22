  /* Wait for DOM to finish loading before doing anything, to prevent trying to target elements that technically do not
 exist yet as they have not been loaded */
  document.addEventListener('DOMContentLoaded',  function() {
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
    close.addEventListener('click', function () {
      introductionModal.style.display = "none";
    })
  }

  // All questions as objects within an array. Possible answers are an array within the object 
   const questions = [

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

  // Variables
  let quizProgress = document.getElementById("quiz-progress");
  let questionText = document.getElementById("question-text");
  let possibleAnswers = document.getElementById("possible-answers");

  // this variable keeps track of what question the user is on
  let currentQuestionIndex = 0;

// Code for handleQuestion function adapted from https://www.youtube.com/watch?v=_FnFPmA87XU&t=1000s (see ReadMe credits section)
  function handleQuestion(index) {

     //  Quiz progress bar which appears above questions and possible answers
    /* for each easy question, within the quiz progress div, add a span which is styled as a grey progress bar using a CSS class, each bar will later
    turn yellow one by one, as the user clears each question. */
    quizProgress.innerHTML = "";
    questions.forEach((question) => {
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
    `<p>${questions[index].questionNo}</p>
    <p>${questions[index].question}</p>
    `
    
    // Display answers
    // Adds a button containing each possible answer (which is styled with CSS) 
    possibleAnswers.innerHTML = "";
    questions[index].possibleAnswers.forEach(answer => {
      possibleAnswers.innerHTML += `<button>${answer}</button>`;
    });

    let answers = document.querySelectorAll("button");
    answers.forEach(possibleAnswers => {
      possibleAnswers.addEventListener("click", e => {
        if  (e.target.textContent === questions[index].correctAnswer) { 
          possibleAnswers.style.backgroundColor = "lime";
          incrementCorrectAnswer();
        } else {
          possibleAnswers.style.backgroundColor = "red";
          incrementIncorrectAnswer();
        }

    // Disable all buttons so the user can't click again
    answers.forEach(btn => btn.disabled = true);

    setTimeout(() => {
        if (currentQuestionIndex === questions.length - 1) {
          alert("End of questions!")
        currentQuestionIndex = 0; 
      } else {
        currentQuestionIndex ++;
      }
       handleQuestion(currentQuestionIndex);
    }, 1000);
  });
});

  } // Closing tag for handleQuestion function

  handleQuestion(currentQuestionIndex);

  // Code help from Love Maths Walkthrough project
  /** 
   * Get current score from the DOM and increment correct answers when user gets answer right
   */
  function incrementCorrectAnswer () {
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
  };

  /** 
   * Get current score from the DOM and increment incorrect answers when user gets answer wrong
   */
  function incrementIncorrectAnswer () {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
  };



  }); // Closing tag for load DOM content event listener