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
      questionDifficulty: 'DIFFICULTY LEVEL: EASY',
      question: "What is the name of the coffee shop where the friends go to hang out?",
      possibleAnswers: ['Central Park', 'Coffee 1', 'Costa', 'Central Perk'],
      correctAnswer: 'Central Perk',
    },

    {
      questionDifficulty: 'DIFFICULTY LEVEL: EASY',
      question: "Which two characters are brother and sister?",
      possibleAnswers: ['Monica and Ross', 'Ross and Rachel', 'Phoebe and Joey', 'Monica and Chandler'],
      correctAnswer: 'Monica and Ross',

    },

    {
       questionDifficulty: 'DIFFICULTY LEVEL: EASY',
      question: "How many sisters does Joey have?",
      possibleAnswers: ['2', '6', '7', 'None'],
      correctAnswer: '7',

    },

     {
      questionDifficulty: 'DIFFICULTY LEVEL: EASY',
      question: "Which friend had jobs at Central Perk, Bloomingdales and Ralph Lauren?",
      possibleAnswers: ['Monica', 'Chandler', 'Phoebe', 'Rachel'],
      correctAnswer: 'Rachel',

    },
  ]

    // Fisher Yates shuffle function used to shuffle questions
    // Code help from w3 schools 
    // https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_random2
    // https://www.w3schools.com/js/js_array_sort.asp

    // Parameter (array) tells the function it is going to be shuffling items that are held in an array 
  function shuffle(array) {
    // Start at end of list and move back one step at a time until the start of the list is reached
    for (let i = array.length - 1; i > 0; i--) {
     // pick a random question in the list 
      let j = Math.floor(Math.random() * (i + 1));
      // Swap current question (i) with the question randomly selected in the step above (j)
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // call the Fisher Yates shuffle function and apply it to the questions array so the questions all appear in a random order
   shuffle(questions);


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
    `<p>${questions[index].questionDifficulty}</p>
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

    // CODE FROM CHATGPT
    // Disable all buttons so the user can't click again
    answers.forEach(btn => btn.disabled = true);


        // STARTER CODE FROM CHATGPT - ADAPTED TO FIT PROJECT
         setTimeout(() => {
          // increment question by one in the first instance to move to the next question in the array
           currentQuestionIndex++;
          
          // Then check if there are still questions left to ask ie. if the current question is not the last in the array of questions
          if (currentQuestionIndex < questions.length) {
            /* If there are still questions there, continue cycling through the questions array in order to display them
            one by one */
            handleQuestion(currentQuestionIndex);
            // If not questions left, call the end quiz function
          } else {
            endQuiz()
          }
          /* 1000 sets a 1 milliseond delay between the user selecting an answer and the quiz moving on to the 
          next question. Without this, the question moves on so fast, the user cannot see the relevant background
          colours which indicate whether their answer is right or wrong */
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

    function endQuiz() {
    // Display alert when all the questions have been asked 
        alert("End of questions!")
        // Hide Q & A and progress spans once all the questions have been asked
        document.getElementById("question-text").innerHTML = "";
        document.getElementById("possible-answers").innerHTML = "";
        document.getElementById("quiz-progress").style.display = "none";

        // Call the finalScore function once all the questions have been asked
        finalScore()
    }  

    /** Function to display the user's final score */
    function finalScore() {
      // Get the user's final score from the DOM as a number by getting the number of correct answers and stores it as the variable 'finalScore'
      let finalScore = parseInt(document.getElementById("correct").innerText);
      // console.log to check function is working
      console.log(`Your final score is ${finalScore}`)

      // Gets the div with the id of final-score from the DOM and stores it as a new variable called finalScoreElement
      const finalScoreElement = document.getElementById("final-score");
      /* the endQuiz function has already been called so the q, a and progress spans are hidden. This line of code grabs the variable
      finalScoreElement which has the user's final score stored within it */
      if (finalScoreElement) {
      }
      /* If score is between 0-5 (greater than or equal to 0 and less than or equal to 4) display thie specified message 
      which includes the user's final score */
      if (finalScore >= 0 && finalScore < 4) {
      console.log("Oh dear")
      finalScoreElement.innerHTML = `<p>Your final score is: ${finalScore} <br> Oh dear!</p>` + 
      `<button onclick="location.href='trivia2.html'">Play again</button>`;
      // ******* ADD A CLASS TO STYLE THIS BUTTON IN THE CSS AND LINK IT HERE ****
      finalScoreElement.classList.add("");
    }
  }

  



  }); // Closing tag for load DOM content event listener