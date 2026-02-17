// Interactive animations
document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card");
  const detailItems = document.querySelectorAll(".detail-item");
  const scopeItems = document.querySelectorAll(".scope-features li");
  const stats = document.querySelectorAll(".stat");

  // Add hover effects to project cards
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px)";
      this.style.boxShadow = "var(--shadow-hover)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "var(--shadow)";
    });
  });

  // Add hover effects to detail items
  detailItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(10px)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)";
    });
  });

  // Add hover effects to scope items
  scopeItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(5px)";
      this.style.background = "rgba(56, 178, 172, 0.1)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)";
      this.style.background = "rgba(56, 178, 172, 0.05)";
    });
  });

  // Add hover effects to stats
  stats.forEach((stat) => {
    stat.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
    });

    stat.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  }, observerOptions);

  projectCards.forEach((card) => observer.observe(card));
});
