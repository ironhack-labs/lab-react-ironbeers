document.addEventListener("DOMContentLoaded", () => {
  // Toggle main menu on mobile
  const menu = document.querySelector(".navbar-toggler");
  if (menu) {
    menu.addEventListener("click", () => {
      const target = menu.dataset.target;
      const $target = document.getElementById(target);
      menu.classList.toggle("collapsed");
      $target.classList.toggle("show");
    });
  }
});
