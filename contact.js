// Form submission handling
document
  .getElementById("quickContactForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Show success message (you can replace with actual form submission)
    alert(
      "Thank you for your message! We will get back to you within 24 hours.",
    );
    this.reset();
  });

// Interactive hover effects
document.querySelectorAll(".sp-contact-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});
