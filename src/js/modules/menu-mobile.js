let options = {
    menuClass: "menu-mobile",
    menuBtnCloseClass: "menu-mobile__close",
    menuBtnOpenClass: "main-nav__hamburger-btn",
    menuOverlayClass: "menu-mobile__overlay",
    widthLimit: 900,
    hiddenClass: "hidden",
    noScrollClass: "no-scroll",
  },
  body,
  menu,
  menuBtnOpen,
  menuBtnClose,
  menuOverlay;

export function init(opt) {
  options = { ...options, ...opt };

  body = document.body;
  menu = document.querySelector("." + options.menuClass);
  menuBtnOpen = document.querySelector("." + options.menuBtnOpenClass);
  menuBtnClose = document.querySelector("." + options.menuBtnCloseClass);
  menuOverlay = document.querySelector("." + options.menuOverlayClass);

  menuBtnOpen.addEventListener("click", toggleMenu);
  menuBtnClose.addEventListener("click", menuClose);
  menuOverlay.addEventListener("click", menuClose);
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
  console.log("isMenuHidden: ", isMenuHidden);

  // opening menu only withing certain width range
  if (window.innerWidth <= options.widthLimit && isMenuHidden === true) {
    menuOpen();
  }

  if (isMenuHidden === false) {
    menuClose();
  }
}

window.addEventListener("resize", operateVisibility);
