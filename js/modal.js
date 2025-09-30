const modal = document.querySelector(".modal");
const closeIcon = document.querySelector(".closeIcon");
const openModal = document.querySelector(".frame");
const grid = document.querySelector(".grid");

modal.style.transition = "all 0.3s ease-in";

function openModalFunc() {
  modal.classList.add("opening");
  body.style.overflowY = "hidden";
  grid.style.transform = "translateY(0px)";
}

function closeModalFunc() {
  modal.classList.remove("opening");
  body.style.overflowY = "auto";
  grid.style.transform = "translateY(-109px)";
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
