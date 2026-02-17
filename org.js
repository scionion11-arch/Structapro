// Animation on scroll
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  },
);

faders.forEach((el) => observer.observe(el));

// Profile viewing functionality
function viewProfile(profileId) {
  alert(
    `Opening full profile for ${profileId}. In a real implementation, this would load the detailed profile card we created earlier.`,
  );
  // In actual implementation, this would load the corresponding profile card
  // Example: window.location.href = `profiles.html#${profileId}`;
}

// Add hover effects
document.querySelectorAll(".team-member-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-12px)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});
