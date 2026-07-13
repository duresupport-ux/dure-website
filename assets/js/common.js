document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", () => {
      const target = anchor.getAttribute("href");
      if (target && target.length > 1) {
        history.replaceState(null, "", target);
      }
    });
  });
});
