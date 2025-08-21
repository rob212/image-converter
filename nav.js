// nav.js
document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("nav-placeholder");

  if (placeholder) {
    fetch("nav.html")
      .then(res => res.text())
      .then(html => {
        placeholder.innerHTML = html;

        // Now highlight the active tab
        let currentPage = window.location.pathname;
        if (currentPage === "/" || currentPage.endsWith("index.html")) {
          document.querySelector('.tab-link[href="/"]').classList.add("active");
        } else {
          document.querySelectorAll(".tab-link").forEach(link => {
          if (link.getAttribute("href") === currentPage.split("/").pop()) {
          link.classList.add("active");
          }
        });
      }
       })
       .catch(err => console.error("Error loading nav:", err));
  }
});
