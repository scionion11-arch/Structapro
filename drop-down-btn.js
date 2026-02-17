document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const getMoreButton = document.getElementById("getMoreButton");
  const getMoreButtonMobile = document.getElementById("getMoreButtonMobile");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const dropdownOverlay = document.getElementById("dropdownOverlay");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  // Function to open dropdown
  function openDropdown() {
    dropdownMenu.classList.add("active");
    dropdownOverlay.classList.add("active");
    getMoreButton.classList.add("active");
    if (getMoreButtonMobile) {
      getMoreButtonMobile.classList.add("active");
    }
  }

  // Function to close dropdown
  function closeDropdown() {
    dropdownMenu.classList.remove("active");
    dropdownOverlay.classList.remove("active");
    getMoreButton.classList.remove("active");
    if (getMoreButtonMobile) {
      getMoreButtonMobile.classList.remove("active");
    }
  }

  // Toggle dropdown when desktop button is clicked
  getMoreButton.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const isActive = dropdownMenu.classList.contains("active");

    if (!isActive) {
      openDropdown();
    } else {
      closeDropdown();
    }
  });

  // Toggle dropdown when mobile button is clicked
  if (getMoreButtonMobile) {
    getMoreButtonMobile.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const isActive = dropdownMenu.classList.contains("active");

      if (!isActive) {
        openDropdown();
        // Close mobile menu when opening dropdown
        mobileMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      } else {
        closeDropdown();
      }
    });
  }

  // Close dropdown when clicking outside
  dropdownOverlay.addEventListener("click", function () {
    closeDropdown();
  });

  // Close dropdown when clicking on a dropdown item
  dropdownMenu.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", function () {
      setTimeout(() => {
        closeDropdown();
      }, 300);
    });
  });

  // Close dropdown when pressing Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeDropdown();
    }
  });

  // Mobile menu toggle
  hamburger.addEventListener("click", function () {
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.classList.toggle("active");

    // Close dropdown if open
    if (dropdownMenu.classList.contains("active")) {
      closeDropdown();
    }
  });

  // Close mobile menu when clicking outside on mobile
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.setAttribute("aria-expanded", "false");
      mobileMenu.classList.remove("active");
    }
  });
});
