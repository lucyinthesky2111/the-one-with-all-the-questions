
const openIntroductionModal = document.getElementById("open-introduction-modal")
const introductionModal = document.getElementById("introduction-modal")
const close = document.getElementById("close")
const play = document.getElementById("play")
const howToPlay = document.getElementById("how-to-play")


openIntroductionModal.addEventListener('click', function () {
    introductionModal.style.display = "block";

})

close.addEventListener('click', function () {
    introductionModal.style.display = "none";

})

// When the user clicks anywhere outside of the modal, close the instructions
window.addEventListener("click", function(event) {
  if (event.target === introductionModal) {
    introductionModal.style.display = "none";
  }
});



function startGame() {

}

function setNextQuestion() {

}
function selectAnswer() {
    
}