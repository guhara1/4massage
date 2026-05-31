const menuButton = document.querySelector(".menu-button");
const drawer = document.querySelector(".mobile-drawer");

if (menuButton && drawer) {
  const setOpen = (open) => {
    drawer.classList.toggle("open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    menuButton.setAttribute("aria-expanded", String(open));
  };

  menuButton.addEventListener("click", () => {
    setOpen(!drawer.classList.contains("open"));
  });

  drawer.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      setOpen(false);
    }
  });
}
