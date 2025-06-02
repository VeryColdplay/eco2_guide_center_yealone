document.addEventListener("DOMContentLoaded", function () {
  const stickyTitle = document.querySelector(".md-content h1");
  if (stickyTitle) {
    stickyTitle.style.cursor = "pointer";
    stickyTitle.title = "Click to scroll to top";
    stickyTitle.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
