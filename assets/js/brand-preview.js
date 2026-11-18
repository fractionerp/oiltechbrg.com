const header = document.querySelector(".brand-header");
const menu = header.querySelector(".brand-menu-toggle");
const groups = header.querySelectorAll(".brand-nav details");

header.dataset.menuReady = "";
menu.hidden = false;

menu.addEventListener("click", () => {
  const isOpen = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!isOpen));
});

document.addEventListener("click", (event) => {
  groups.forEach((group) => {
    if (!group.contains(event.target)) group.open = false;
  });
});

header.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const activeGroup = event.target.closest("details[open]");
  if (activeGroup) {
    activeGroup.open = false;
    activeGroup.querySelector("summary").focus();
  } else if (menu.getAttribute("aria-expanded") === "true") {
    menu.setAttribute("aria-expanded", "false");
    menu.focus();
  }
});
