const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
menuButton.addEventListener("click", function() {
  menu.classList.toggle("open");
  const isOpen = menu.classList.contains("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});
const links = menu.querySelectorAll("a");
for (const link of links) {
  link.addEventListener("click", function() {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
  });
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && menu.classList.contains("open")) {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    menuButton.focus();
  }
});
