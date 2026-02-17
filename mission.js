document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".sp-card");
  const seeMoreBtn = document.getElementById("seeMoreBtn");
  const expandedValues = document.getElementById("expandedValues");

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  cards.forEach((card) => {
    card.style.animationPlayState = "paused";
    observer.observe(card);
  });

  // Hover effects enhancement
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.zIndex = "10";

      const icon = this.querySelector(".sp-card-icon");
      if (icon) {
        icon.style.transform = "rotate(15deg) scale(1.2)";
      }
    });

    card.addEventListener("mouseleave", function () {
      this.style.zIndex = "1";

      const icon = this.querySelector(".sp-card-icon");
      if (icon) {
        icon.style.transform = "rotate(0deg) scale(1)";
      }
    });
  });

  // See More functionality
  if (seeMoreBtn && expandedValues) {
    seeMoreBtn.addEventListener("click", function () {
      const isExpanded = expandedValues.classList.contains("show");

      if (!isExpanded) {
        expandedValues.classList.add("show");
        this.classList.add("active");
        this.innerHTML =
          '<span><i class="fas fa-chevron-up"></i> Show Less</span><i class="fas fa-chevron-up"></i>';

        // Animate value items when expanded
        const valueItems = document.querySelectorAll(".sp-value-item");
        valueItems.forEach((item, index) => {
          item.style.opacity = "0";
          item.style.transform = "translateX(-20px)";
          setTimeout(
            () => {
              item.style.transition = "all 0.4s ease";
              item.style.opacity = "1";
              item.style.transform = "translateX(0)";
            },
            100 + index * 100,
          );
        });
      } else {
        expandedValues.classList.remove("show");
        this.classList.remove("active");
        this.innerHTML =
          '<span><i class="fas fa-chevron-down"></i> See All 4 Values</span><i class="fas fa-chevron-down"></i>';
      }
    });
  }

  // Value items hover effects
  const valueItems = document.querySelectorAll(".sp-value-item");
  valueItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".sp-value-icon");
      if (icon) {
        icon.style.transform = "scale(1.1) rotate(5deg)";
        icon.style.transition = "all 0.3s ease";
      }
    });

    item.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".sp-value-icon");
      if (icon) {
        icon.style.transform = "scale(1) rotate(0)";
      }
    });
  });
});
