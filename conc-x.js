// Add interactive animations
document.addEventListener("DOMContentLoaded", function () {
  // Client item hover effects
  const clientItems = document.querySelectorAll(".sp-client-item");
  clientItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(10px)";
      this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)";
      this.style.boxShadow = "none";
    });
  });

  // Equipment item hover effects
  const equipItems = document.querySelectorAll(".sp-equip-item");
  equipItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px)";
      this.style.borderColor = "var(--sp-accent)";
      this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.05)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.borderColor = "var(--sp-border)";
      this.style.boxShadow = "none";
    });
  });

  // Client category hover effects
  const clientCats = document.querySelectorAll(".sp-client-cat");
  clientCats.forEach((cat) => {
    cat.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.borderColor = "var(--sp-accent)";
      this.style.boxShadow = "var(--sp-shadow)";
    });

    cat.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.borderColor = "var(--sp-border)";
      this.style.boxShadow = "none";
    });
  });

  // Highlight box hover effects
  const highlightBoxes = document.querySelectorAll(".sp-highlight");
  highlightBoxes.forEach((box) => {
    box.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.1)";
    });

    box.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.05)";
    });
  });
});
