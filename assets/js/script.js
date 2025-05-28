
/* I used a variety of sources to help me construct this JS code.
 Each source is briefly mentioned next to the corresponding code in the relevant section of this JS file. 
Full details of each source can be found in the Credits (Code) section of the ReadMe. */

// All questions as objects within an array. Possible answers are an array within the object 
const questions = [

  {
    question: "What is the name of the coffee shop where the friends go to hang out?",
    possibleAnswers: ['Central Park', 'Coffee 1', 'Costa', 'Central Perk'],
    correctAnswer: 'Central Perk',
  },

  {
    question: "Which two characters are brother and sister?",
    possibleAnswers: ['Monica and Ross', 'Ross and Rachel', 'Phoebe and Joey', 'Monica and Chandler'],
    correctAnswer: 'Monica and Ross',

  },

  {
    question: "How many sisters does Joey have?",
    possibleAnswers: ['2', '6', '7', 'None'],
    correctAnswer: '7',

  },

  {
    question: "Which friend had jobs at Central Perk, Bloomingdales and Ralph Lauren?",
    possibleAnswers: ['Monica', 'Chandler', 'Phoebe', 'Rachel'],
    correctAnswer: 'Rachel',

  },

  {
    question: "Which of these is a song by Phoebe Buffay?",
    possibleAnswers: ['Stinky Dog', 'Smelly Cat', 'Putrid Parrot', 'Funky Fish'],
    correctAnswer: 'Smelly Cat',

  },

  {
    question: 'Finish this iconic Friends line. "We were on a...”',
    possibleAnswers: ['Trip', 'Night out with Gandolf', 'Break', 'Ferry to Staten Island'],
    correctAnswer: 'Break',

  },

  {
    question: 'Whose name does Ross mistakenly say at the alter?',
    possibleAnswers: ['Rachel', 'Emily', 'Julie', 'Mona'],
    correctAnswer: 'Rachel',

  },

  {
    question: 'What do the friends nickname the man who lives across the street from Monica and Rachel?',
    possibleAnswers: ['Unattractive Nude Man', 'Unsightly Unclothed Dude', 'Unusual Nudist Fella', 'Ugly Naked Guy'],
    correctAnswer: 'Ugly Naked Guy',

  },

  {
    question: 'Complete Joey’s catchphrase. “How you ...”',
    possibleAnswers: ['Feeling?', 'Doing?', 'Today?', 'Getting on?'],
    correctAnswer: 'Doing?',

  },

  {
    question: "What colour is Monica's living room?",
    possibleAnswers: ['Pink', 'Purple', 'Black', 'Orange'],
    correctAnswer: 'Purple',

  },


  {
    question: "Which friend has the middle name <em>Muriel?</em>",
    possibleAnswers: ['Ross', 'Rachel', 'Phoebe', 'Chandler'],
    correctAnswer: 'Chandler',

  },

  {
    question: "What is the ‘Joey special’ takeaway order?",
    possibleAnswers: ['Two pizzas', 'Burger and chips', 'Curry and rice', 'Sushi and soy sauce'],
    correctAnswer: 'Two pizzas',

  },

   {
    question: "Which of these actors was not a guest star on Friends?",
    possibleAnswers: ['Robin Williams', 'Brad Pitt', 'Bruce Willis', 'Leonardo DiCaprio'],
    correctAnswer: 'Leonardo DiCaprio',

  },

   {
    question: "Frank Jr  and Alice’s triplets are named Frank Jr Jr, Chandler and ... ",
    possibleAnswers: ['Lesley', 'Sophia', 'Jennifer', 'Hannah'],
    correctAnswer: 'Lesley',

  },

  {
    question: "What is the name of the family newsletter written by Ross?",
    possibleAnswers: ['Red Ross', 'The Rossatron', 'The Geller Yeller', 'The Geller Teller'],
    correctAnswer: 'The Geller Yeller',

  },

 {
    question: "Ross’s son Ben goes to school with the son of which famous musician?",
    possibleAnswers: ['Drake', 'Bono', 'Sting', 'Slash'],
    correctAnswer: 'Sting',

  },

  {
    question: "Rachel’s sister Jill is played by which actress?",
    possibleAnswers: ['Reese Witherspoon', 'Christina Applegate', 'Winona Ryder ', 'Drew Barrymore'],
    correctAnswer: 'Reese Witherspoon ',

  },

  {
    question: "In <em>'‘The One with all the Thanksgivings’</em>', which song is Ross thinking of playing for Rachel?",
    possibleAnswers: ['Betrayal in the Common Room', 'Interplanetary Courtship Ritual', 'Shut up and Go Home', 'Emotional Knapsack'],
    correctAnswer: 'Emotional Knapsack',
  },

    {
    question: "In <em>'The One with the Embryos'</em>, which of these is not a category in Ross's quiz?",
    possibleAnswers: ['Fears and pet peeves', 'Music', 'Ancient history', 'Literature'],
    correctAnswer: 'Music',

  },

]



/* Wait for DOM to finish loading before doing anything, to prevent trying to target elements that technically do not
exist yet as they have not been loaded */
document.addEventListener('DOMContentLoaded', function () {
  // Gets the introduction modal
  let introductionModal = document.getElementById("introduction-modal");

  // Only show intro modal if user is on index.html/root
  const isIndexPage =
    /* Modal is hidden by default in css. This code checks the user is on index.html or root and if this is true and (&&) the modal is called,
    modal will be displayed */
    // Help with code from W3Schools and Stack Overflow
    window.location.pathname === '/' || window.location.pathname.endsWith("index.html");
  if (isIndexPage && introductionModal) {
    introductionModal.style.display = "block";
  }

  // Closes the introduction modal when the user clicks on the 'X' icon
  const close = document.getElementById("close"); {
    close.addEventListener('click', function () {
      introductionModal.style.display = "none";
    })
  }

  // Fisher Yates shuffle function used to shuffle questions
  // Code help from FreeCodeCamp
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

  // Variables for timer function
  let timeLeft;
  let timerInterval;

  /**
   * Sets a 30 timer on each question
   */
  function startTimer() {
    // Start with clear timer
    clearInterval(timerInterval);
    // Set the timer to 30 seconds allowed per question
    timeLeft = 30;
    // Grab the div with ID of time from the DOM and display the timer counting down with the prefixing text of 'Time left'
    document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;
    // Sets timer running
    timerInterval = setInterval(() => {
      // takes 1 second away form the timer incrementally e.g. 30 seconds, then 29, then 28 etc
      timeLeft--;
      // Grab the div with ID of time from the DOM and display the timer counting down with the prefixing text of 'Time left'
      document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;
      // Once the timer reaches 0
      if (timeLeft <= 0) {
        // Stop timer 
        clearInterval(timerInterval);
        // Tells user their time is up
        alert("Time's up!");
        // call timerEnded function
        timerEnded()
      }
      // Repeat all steps inside timer every 1 second (1000 milliseconds)
    }, 1000);
  }

  // Code for handleQuestion function adapted from Treehouse - 'Beginner JavaScript project: build a quiz app' YouTube video
  function handleQuestion(index) {
    /* Call startTimer function at the start of the HandleQuestion function so that the time starts as soon as the handleQuestion function 
    starts working i.e. as soon as the questions and possible answers are displayed */
    startTimer();
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

    // Display question difficulty and question
    questionText.innerHTML =
    `<p>${questions[index].question}</p>`

    // Shuffle the answer options
    // Code from freeCodeCamp
    const shuffleTheAnswers = () => 0.5 - Math.random();
    const shuffledAnswers = questions.map(q => ({
      ...q,
      possibleAnswers: q.possibleAnswers.sort(shuffleTheAnswers)
    }));


    // Display answers
    // Adds a button containing each possible answer (which is styled with CSS using .possible-answers button) 
    possibleAnswers.innerHTML = "";
    questions[index].possibleAnswers.forEach(answer => {
      possibleAnswers.innerHTML += `<button>${answer}</button>`;
    });

    let answers = document.querySelectorAll("button");
    answers.forEach(possibleAnswers => {
      possibleAnswers.addEventListener("click", e => {
        if (e.target.textContent === questions[index].correctAnswer) {
          possibleAnswers.style.backgroundColor = "lime";
          incrementCorrectAnswer();
        } else {
          possibleAnswers.style.backgroundColor = "red";
          incrementIncorrectAnswer();
        }

        // highlight correct answer for user if they get answer wrong
        answers.forEach(button => {
          if (button.textContent === questions[index].correctAnswer) {
            button.style.backgroundColor = "lime";
          }
        })


        // Disable all buttons so the user can't click again
        answers.forEach(btn => btn.disabled = true);


        // Code help from W3Schools and FreeCodeCamp
        setTimeout(() => {
          // increment question by one in the first instance to move to the next question in the array
          currentQuestionIndex++;
          // Then check if there are still questions left to ask ie. if the current question is not the last in the array of questions
          if (currentQuestionIndex < questions.length) {
            /* If there are still questions there, continue cycling through the questions array in order to display them
            one by one */
            handleQuestion(currentQuestionIndex);
            // If no questions left, call the end quiz function
          } else {
            endQuiz()
          }
          /* 1000 sets a 1 second (1000 millisecond) delay between the user selecting an answer and the quiz moving on to the 
          next question. Without this, the question moves on so fast, the user cannot see the relevant background
          colours which indicate whether their answer is right or wrong */
        }, 1000);
      });
    });


  } // Closing tag for handleQuestion function

  handleQuestion(currentQuestionIndex);

  // Runs when the timer has stopped
  function timerEnded() {
    // Select all the answer buttons
    let answers = document.querySelectorAll("button");
    // for each button
    answers.forEach(button => {
      //  disable them so they can't be clicked anymore - the quiz will just move on to the next question instead once user has clicked pop up alert away 
      button.disabled = true;
    });

    // If timer is allowed to run out, question is unanswered and therefore treated as wrong
    // incrementIncorrectAnswer records an incorrect response and counts that in the tally of incorrect answers
    incrementIncorrectAnswer();

    // Sets a short pause of 1 second between either showing next question or ending the quiz
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        handleQuestion(currentQuestionIndex);
      } else {
        endQuiz();
      }
    }, 1000);
  }

  // Code help from Love Maths Walkthrough project
  /** 
   * Get current score from the DOM and increment correct answers when user gets answer right
   */
  function incrementCorrectAnswer() {
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
  };

  /** 
   * Get current score from the DOM and increment incorrect answers when user gets answer wrong
   */
  function incrementIncorrectAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
  };

  function endQuiz() {
    // Display alert when all the questions have been asked 
    alert("End of questions!")
    // Stops the timer when all questions have been asked.
    clearInterval(timerInterval);
    // Hides timer once it has been stopped (without this paused timer shows on the results page)
    document.getElementById("timer").style.display = "none";
    // Hide Q & A, progress spans, good luck message from Phoebe and scores under the purple box once all the questions have been asked
    document.getElementById("question-text").innerHTML = "";
    document.getElementById("possible-answers").innerHTML = "";
    document.getElementById("quiz-progress").style.display = "none";
    document.getElementById("good-luck-message").style.display = "none";
    document.getElementById("correct").style.display = "none";
    document.getElementById("incorrect").style.display = "none";
    document.getElementById("incorrect-text").style.display = "none";
    document.getElementById("correct-text").style.display = "none";


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
      finalScoreElement.innerHTML = `<p>Your final score is: ${finalScore} / 30. <br> Oh dear! It hasn't been your day, your week, your
      month, or even your year has it?!</p>` +
        `<button onclick="location.href='trivia.html'">Play again</button>` +
        `<button onclick="location.href='index.html'">Home</button>`;
    } else if (finalScore >= 4 && finalScore < 7) {
      console.log("That's not great")
      finalScoreElement.innerHTML = `<p>Your final score is: ${finalScore} / 30. <br> that's not great!</p>` +
        `<button onclick="location.href='trivia.html'">Play again</button>` +
        `<button onclick="location.href='index.html'">Home</button>`;
    } else if (finalScore >= 7 && finalScore < 10) { 
      console.log("It's getting better")
     finalScoreElement.innerHTML = `<p>Your final score is: ${finalScore} / 30. <br> it's getting better</p>` +
        `<img src="assets/images/lobster.png" alt="Lobster image" style="width:120px; margin-top:15px;">` +
        `<button onclick="location.href='trivia.html'">Play again</button>` +
        `<button onclick="location.href='index.html'">Home</button>`;
    }

    // style the added play again and home buttons with CSS
    const buttons = finalScoreElement.querySelectorAll("button");
    buttons.forEach(btn => btn.classList.add("end-of-game-btns"));
  }



}); // Closing tag for load DOM content event listener