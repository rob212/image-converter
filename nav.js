// nav.js
document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("nav-placeholder");

  if (placeholder) {
    fetch("nav.html")
      .then(res => res.text())
      .then(html => {
        placeholder.innerHTML = html;

        // Now highlight the active tab
        const currentPage = window.location.pathname.split("/").pop();
        document.querySelectorAll(".tab-link").forEach(link => {
          if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
          }
        });
      })
      .catch(err => console.error("Error loading nav:", err));
  }
});
