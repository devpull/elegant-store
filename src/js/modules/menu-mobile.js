let options = {
    menuClass: "menu-mobile",
    menuBtnCloseClass: "menu-mobile__close",
    menuBtnOpenClass: "main-nav__hamburger-btn",
    menuContainerClass: "menu-mobile__container",
    menuOverlayClass: "menu-mobile__overlay",
    widthLimit: 900,
    hiddenClass: "hidden",
    noScrollClass: "no-scroll",
  },
  body,
  menu,
  menuBtnOpen,
  menuBtnClose,
  menuOverlay,
  menuContainer;

export function init(opt) {
  options = { ...options, ...opt };

  body = document.body;
  menu = document.querySelector("." + options.menuClass);
  menuBtnOpen = document.querySelector("." + options.menuBtnOpenClass);
  menuBtnClose = document.querySelector("." + options.menuBtnCloseClass);
  menuOverlay = document.querySelector("." + options.menuOverlayClass);
  menuContainer = document.querySelector("." + options.menuContainerClass);

  menuBtnOpen.addEventListener("click", toggleMenu);
  menuBtnClose.addEventListener("click", menuClose);
  menuOverlay.addEventListener("click", menuClose);
  menuContainer.addEventListener("click", (e) => {
    e.stopPropagation(); // Stop bubbling to overlay. Prevents closing.
  });
  window.addEventListener("resize", operateVisibility);
}

function operateVisibility() {
  let display = menuBtnOpen.checkVisibility();

  if (window.innerWidth > options.widthLimit) {
    menuClose();
  }
  console.log("hamburger", display);
  console.log("window width: ", window.innerWidth);
}

function menuOpen() {
  menu.setAttribute("aria-hidden", "false");
  body.classList.add(options.noScrollClass);
}

function menuClose() {
  menu.setAttribute("aria-hidden", "true");
  body.classList.remove(options.noScrollClass);
}

function toggleMenu() {
  let isMenuHidden = menu.getAttribute("aria-hidden").toLowerCase() === "true";

  // opening menu only withing certain width range
  if (window.innerWidth <= options.widthLimit && isMenuHidden === true) {
    menuOpen();
  }

  if (isMenuHidden === false) {
    menuClose();
  }

  console.log("isMenuHidden: ", isMenuHidden);
}
