function includeHTML() {
  // Load header
  fetch("db-btn.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("btnx").innerHTML = data;
    });
}

// Run on page load
window.onload = includeHTML;
