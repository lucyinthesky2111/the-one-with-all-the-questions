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




  }); // Closing tag for load DOM content event listener