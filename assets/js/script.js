/* Full details of sources used for help in constructing this JS file can be found in the Credits (Code) section of the ReadMe. */

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
    question: "Frank Jr  and Alice’s triplets are named Frank Jr Jr, Chandler and ...? ",
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
    possibleAnswers: ['Reese Witherspoon', 'Christina Applegate', 'Winona Ryder', 'Drew Barrymore'],
    correctAnswer: 'Reese Witherspoon',

  },

  {
    question: "How may pages long (front and back!) was Rachel’s letter to Ross?",
    possibleAnswers: ['5', '18', '7', '12'],
    correctAnswer: '18',
  },

  {
    question: "The ‘moist-maker’ in Ross’s sandwich is an extra slice of bread soaked in what?",
    possibleAnswers: ['Gravy', 'Butter', 'Cranberry Sauce', 'Mustard'],
    correctAnswer: 'Gravy',
  },

   {
    question: "Which game did Joey and Chandler create in <em>‘The One with the Inappropriate Sister’</em>?",
    possibleAnswers: ['Waterball', 'Crazy Lawsuit Game', 'Fireball', 'Gonna Need Stitches Ball'],
    correctAnswer: 'Fireball',
  },

  {
    question: "In <em>'The One with the Embryos'</em>, which of these is not a category in Ross's quiz?",
    possibleAnswers: ['Fears and pet peeves', 'Music', 'Ancient history', 'Literature'],
    correctAnswer: 'Music',
  },

  {
    question: "In <em>‘The One in Vegas’</em>, Phoebe reminds Joey of his PIN for his bank card. What is it?",
    possibleAnswers: ['5639', '1234', '0278', '0909'],
    correctAnswer: '5639',
  },

   {
    question: "In which hospital did Phoebe give birth to the triplets?",
    possibleAnswers: ['NYC Health + Hospitals', 'Beth Israel Medical Center', 'Queens Hospital Center', 'Central Infirmary'],
    correctAnswer: 'Beth Israel Medical Center',
  },

  {
    question: "When Phoebe becomes Princess Consuela, what does she says her friends can call her?",
    possibleAnswers: ['Dorothy', 'June', 'Valerie', 'Marjorie'],
    correctAnswer: 'Valerie',
  },

  {
    question: "Which of these is not a name that Rachel proposes calling her and Ross’s baby?",
    possibleAnswers: ['James (but only if it’s a girl)', 'Betty', 'Sandrine', 'Rain'],
    correctAnswer: 'Betty',
  },

  {
    question: "What is the name of Dr Drake Ramoray’s evil twin?",
    possibleAnswers: ['Stryker Ramoray', 'Hans Ramoray', 'Ramirez Ramoray', 'Dean Ramoray'],
    correctAnswer: 'Hans Ramoray',
  },

   {
    question: "What is the name of the movie that Joey goes to Las Vegas to star in?",
    possibleAnswers: ['Light Force', 'Slow Motion', 'Shutter Speed', 'At the Speed of Light'],
    correctAnswer: 'Shutter Speed',
  },

  {
    question: "The character of Russ is played by David Schwimmer but credited under what pseudonym?",
    possibleAnswers: ['Snape', 'Snaro', 'Snake', 'Stake'],
    correctAnswer: 'Snaro',
  },

  {
    question: "What is the date of Monica and Chandler’s wedding?",
    possibleAnswers: ['16th June', '15th May', '23rd December', '21st November'],
    correctAnswer: '15th May',
  },

    {
    question: "In <em>‘The One with all the Thanksgivings’</em>, which song does Ross tell Chandler he is thinking of playing for Rachel?",
    possibleAnswers: ['Betrayal in the Common Room', 'Interplanetary Courtship Ritual', 'Shut up and Go Home', 'Emotional Knapsack'],
    correctAnswer: 'Emotional Knapsack',
  },

]

/* Wait for DOM to finish loading before doing anything, to prevent trying to target elements that technically do not
exist yet as they have not been loaded */
document.addEventListener('DOMContentLoaded', function () {
  // Gets the introduction modal
  let introductionModal = document.getElementById("introduction-modal");

  // Only show intro modal if user is on index.html/root
  const isIndexPage =
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

  /**
   * Shuffle the questions
   */
  // Fisher Yates shuffle function used to shuffle questions
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
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
    timeLeft = 30;
    document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;
    timerInterval = setInterval(() => {
      timeLeft--;
      document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;
      if (timeLeft <= 0) {
        // Stop timer 
        clearInterval(timerInterval);
        alert("Time's up!");
        // call timerEnded function
        timerEnded()
      }
    }, 1000);
  }

  /**
   * Display questions, possible answers and timer 
   */
  // Code for handleQuestion function adapted from Treehouse - 'Beginner JavaScript project: build a quiz app' YouTube video
  function handleQuestion(index) {
    /* Call startTimer function at the start of the HandleQuestion function so that the time starts as soon as the questions
     and possible answers are displayed */
    startTimer();
    //  Quiz progress bar which appears above questions and possible answers
    quizProgress.innerHTML = "";
    questions.forEach((question) => {
      const span = document.createElement("span");
      quizProgress.appendChild(span);
    });
    let spans = document.querySelectorAll("#quiz-progress span");
    for (let i = 0; i <= index; i++) {
      spans[i].classList.add("seen");
    };

    // Display question
    questionText.innerHTML =
    `<p>${questions[index].question}</p>`

    // Shuffle the answer options
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


        setTimeout(() => {
          currentQuestionIndex++;
          if (currentQuestionIndex < questions.length) {
            handleQuestion(currentQuestionIndex);
          } else {
            endQuiz()
          }
          /* 1000 sets a 1 second (1000 millisecond) delay between the user selecting an answer and the quiz moving on to the 
          next question so user cannot see the relevant background
          colours which indicate whether their answer is right or wrong */
        }, 1000);
      });
    });


  } // Closing tag for handleQuestion function

  handleQuestion(currentQuestionIndex);

  /**
   * Moves quiz on to next question if user fails to answer before timer hits zero
   */
  function timerEnded() {
    let answers = document.querySelectorAll("button");
    answers.forEach(button => {
      button.disabled = true;
    });

    // If timer is allowed to run out, question is unanswered and therefore treated as wrong
    // incrementIncorrectAnswer records an incorrect response and counts that in the tally of incorrect answers
    incrementIncorrectAnswer();

    // Sets a short pause of 1 second between either showing next question or ending the quiz if questions have run out
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

  /**
   * Stop timer and hide elements that are no longer needed when quiz ends
   */
  function endQuiz() {
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

  /** 
   * Function to display the user's final score with a custom message
   */
  function finalScore() {
    let finalScore = parseInt(document.getElementById("correct").innerText);
    const finalScoreElement = document.getElementById("final-score");
    if (finalScoreElement) {
    }
    /* Custom messages to user depending on their score */
    if (finalScore >= 0 && finalScore <= 7) {
      finalScoreElement.innerHTML = `<p>"OH. MY. GOD!"<br> <strong>Your final score is: ${finalScore} / 30.</strong> <br> Oh dear! It hasn't been your day, your week, your
      month, or even your year has it?!</p>` +
        `<img src="assets/images/umbrella.png" alt="Umbrella image" style="width:120px;">` +
        `<button onclick="location.href='trivia.html'">Play again</button>` +
        `<button onclick="location.href='index.html'">Home</button>`;
    } else if (finalScore >= 8 && finalScore <= 15) {
      finalScoreElement.innerHTML = `<p>"OH. MY. GOD!"<br> <strong>Your final score is: ${finalScore} / 30.</strong> <br> “Don’t feel bad, we all have our strengths. <br> You’re better with numbers and stuff.”</p>` +
      `<img src="assets/images/fountain.png" alt="Fountain image" style="width:120px;">` +
      `<button onclick="location.href='trivia.html'">Play again</button>` +
      `<button onclick="location.href='index.html'">Home</button>`;
    } else if (finalScore >= 16 && finalScore <= 23) { 
     finalScoreElement.innerHTML = `<p>"OH. MY. GOD!"<br> <strong>Your final score is: ${finalScore} / 30.</strong> <br> “Well, it was a stupid, unfair question!” <br> “Don’t blame the questions!”</p>` +
        `<img src="assets/images/sofa.png" alt="Sofa image" style="width:120px;">` +
        `<button onclick="location.href='trivia.html'">Play again</button>` +
        `<button onclick="location.href='index.html'">Home</button>`;
    } else if (finalScore >= 24 && finalScore <= 29) { 
     finalScoreElement.innerHTML = `<p>"OH. MY. GOD!" <br> <strong>Your final score is: ${finalScore} / 30.</strong> <br> “Congratulations Ross, because Chandler, you’ve been bamboozled!” <br> "This is the best game ever!” </p>` +
        `<img src="assets/images/magna-doodle.png" alt="Magna Doodle image" style="width:120px;">` +
        `<button onclick="location.href='trivia.html'">Play again</button>` +
        `<button onclick="location.href='index.html'">Home</button>`;
    } else if (finalScore === 30) { 
    finalScoreElement.innerHTML = `<p>"OH. MY. GOD!" <br> <strong>Your final score is: ${finalScore} / 30.</strong> <br> YOU GOT EVERY ANSWER CORRECT! <br> Okay, you watch too much TV! <br> But could you BE a bigger Friends fan?!</p>` +
        `<img src="assets/images/central-perk.png" alt="Central Perk image" style="width:120px;">` +
        `<button onclick="location.href='trivia.html'">Play again</button>` +
        `<button onclick="location.href='index.html'">Home</button>`;
    }

    // style the added play again and home buttons with CSS
    const buttons = finalScoreElement.querySelectorAll("button");
    buttons.forEach(btn => btn.classList.add("end-of-game-btns"));
  }



}); // Closing tag for load DOM content event listener