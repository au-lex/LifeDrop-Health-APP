








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

   