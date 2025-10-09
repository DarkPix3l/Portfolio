const modal = document.querySelector(".modal");
const closeIcon = document.querySelector(".closeIcon");
const openModal = document.querySelector(".frame");
const grid = document.querySelector(".grid");

function openModalFunc() {
  modal.classList.add("bg-ani");
  grid.classList.add("grid-ani");
  body.style.overflowY = "hidden";
}

function closeModalFunc() {
  modal.classList.remove("bg-ani");
  grid.classList.remove("grid-ani");
  body.style.overflowY = "auto";
}

// Attach listeners
openModal.addEventListener("click", openModalFunc);
closeIcon.addEventListener("click", closeModalFunc);

window.addEventListener("click", function (event) {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (!isMobile && event.target === modal) {
    closeModalFunc();
  }
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModalFunc();
  }
});
