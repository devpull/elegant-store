const taglineCloseBtn = document.querySelector(".tagline__close");
const taglineBlock = document.querySelector(".tagline");

taglineCloseBtn.addEventListener("click", (event) => {
  taglineBlock.classList.toggle("hidden");
})