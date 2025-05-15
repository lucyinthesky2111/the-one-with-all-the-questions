// Variables 
const openIntroductionModal = document.getElementById("open-introduction-modal")
const introductionModal = document.getElementById("introduction-modal")
const close = document.getElementById("close")
const play = document.getElementById("play")
const helpArea = document.getElementById("help-area")

//MODALS
// Displays the introduction modal
openIntroductionModal.addEventListener('click', function () {
    introductionModal.style.display = "block";

})

// Closes the introduction modal when the user clicks the 'X' icon 
close.addEventListener('click', function () {
    introductionModal.style.display = "none";

})

// Prevent default anchor behaviour when the help button is clicked
document.getElementById('help-btn').addEventListener('click', function (e) {
  e.preventDefault();

// Instead of default behaviour - hides.closes Introduction modal when user clicks the 'help; button
  document.getElementById('introduction-modal').style.display = 'none';

 // And displays the help modal instead
  document.getElementById('help-area').style.display = "block";
})





function startGame() {

}

function setNextQuestion() {

}
function selectAnswer() {
    
}