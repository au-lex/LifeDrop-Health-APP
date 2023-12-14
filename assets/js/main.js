





  const login = document.querySelector('.login');
  const loginCon = document.querySelector('.loginModal');

  const signup = document.querySelector('.Sign-up');
  const signupCon = document.querySelector('.signUPModal');

  const closeButtons = document.querySelectorAll('.close');

  login.addEventListener('click', () => {
    loginCon.classList.add('log');
    signupCon.classList.remove('sig');
  });

  signup.addEventListener('click', () => {
    signupCon.classList.add('sig');
    loginCon.classList.remove('log');
  });

  {/* // Add event listeners for close buttons */}
  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
      loginCon.classList.remove('log');
      signupCon.classList.remove('sig');
    });
  });

// FAQ Starts
function faq() {
  let faqContainer = document.querySelector(".faq-container");
  faqContainer.addEventListener("click", (e) => {
    let target = e.target;
    let faqHeader = target.closest(".faq-header");
    if (!faqHeader) return;
    let faqBody = faqHeader.nextElementSibling;
    faqBody.classList.toggle("body-open");
    let faqIcon = faqHeader.querySelector("i");
    // Toggling the body when the header is clicked 
    faqHeader.classList.toggle("faq-open");
    faqIcon.classList.toggle("icon-open");
    // Toggle Other Faqs
    let faqHeaders = document.querySelectorAll(".faq-header");
    faqHeaders.forEach((header) => {
      if (header !== faqHeader) {
        let otherHeader = header;
        otherHeader.classList.remove("faq-open");
        let otherBody = otherHeader.nextElementSibling;
        otherBody.classList.remove("body-open");
        let icon = header.querySelector("i");
        icon.classList.remove("icon-open");
      }
    });
  });
}
faq();
// FAQ Ends

   