let options = {
    menuClass: "menu-mobile",
    menuBtnCloseClass: "menu-mobile__close",
    menuBtnOpenClass: "main-nav__hamburger-btn",
    menuContainerClass: "menu-mobile__container",
    menuOverlayClass: "menu-mobile__overlay",
    menuOpenFocusClass: "menu-mobile__logo",
    widthLimit: 900,
    hiddenClass: "hidden",
    noScrollClass: "no-scroll",
  },
  body,
  menu,
  isMenuHidden,
  menuBtnOpen,
  menuBtnClose,
  menuOverlay,
  menuContainer,
  menuOpenFocusEl;

export function init(opt) {
  options = { ...options, ...opt };

  body = document.body;
  isMenuHidden = true;
  menu = document.querySelector("." + options.menuClass);
  menuBtnOpen = document.querySelector("." + options.menuBtnOpenClass);
  menuBtnClose = document.querySelector("." + options.menuBtnCloseClass);
  menuOverlay = document.querySelector("." + options.menuOverlayClass);
  menuContainer = document.querySelector("." + options.menuContainerClass);
  menuOpenFocusEl = document.querySelector("." + options.menuOpenFocusClass);

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
  setTimeout(()=> {
    menuOpenFocusEl.focus();
  }, 200);
  console.log(menuOpenFocusEl);
}

function menuClose() {
  menu.setAttribute("aria-hidden", "true");
  body.classList.remove(options.noScrollClass);
  menuBtnOpen.focus();
}

function toggleMenu() {
  let isMenuHidden = bMenuHidden();

  // opening menu only withing certain width range
  if (window.innerWidth <= options.widthLimit && isMenuHidden === true) {
    menuOpen();
  }

  if (isMenuHidden === false) {
    menuClose();
  }

  console.log("isMenuHidden: ", isMenuHidden);
}

function bMenuHidden() {
  return menu.getAttribute("aria-hidden").toLowerCase() === "true";
}
