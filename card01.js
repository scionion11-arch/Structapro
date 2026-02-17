// Interactive hover effects
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".sp-project-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px)";
      this.style.boxShadow = "var(--sp-shadow-hover)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "var(--sp-shadow)";
    });
  });
});
