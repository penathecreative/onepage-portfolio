//EmailJS Function
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    emailjs
      .sendForm(
        "service_aqt1yik",
        "template_hmxaisf",
        this,
        "BBQGlo5_ibBOaUQkV"
      )
      .then(function (response) {
        alert("Message sent successfully!");
        console.log("SUCCESS!", response);
        document.getElementById("contact-form").reset(); // Reset form
      })
      .catch(function (error) {
        alert("Failed to send message. Please try again.");
        console.log("FAILED...", error);
      });
  });

// Get the burger menu icon and the navbar list
const burgerMenu = document.querySelector(".burger-menu");
const navbarList = document.querySelector(".navbar-list");

// Toggle the 'active' class when the burger menu is clicked
burgerMenu.addEventListener("click", () => {
  navbarList.classList.toggle("active"); // Toggle the navbar visibility
});

// Close the menu when a link is clicked
const navbarLinks = document.querySelectorAll(".navbar-link");
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarList.classList.remove("active"); // Close the menu
  });
});
