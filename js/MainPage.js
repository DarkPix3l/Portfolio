const modal = document.querySelector(".modal");
const closeIcon = document.querySelector(".closeIcon");
const openModal = document.querySelector(".frame");
const grid = document.querySelector(".grid");

modal.style.transition = "all 0.5s ease-out";

function openModalFunc() {
  modal.style.visibility = "visible";
  modal.classList.add("opening");
  body.style.overflowY = "hidden";
  grid.style.transform = "translateY(0px)";
}

function closeModalFunc() {
  modal.style.visibility = "hidden";
  modal.classList.remove("opening");
  body.style.overflowY = "auto";
  grid.style.transform = "translateY(-109px)";
}

// Attach listeners
openModal.addEventListener("click", openModalFunc);
closeIcon.addEventListener("click", closeModalFunc);

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModalFunc();
  }
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModalFunc();
  }
});

const goToProject2 = () => {
  document.querySelectorAll(".img-container").forEach((item) => {
    item.addEventListener("click", () => {
      const pageUrl = item.dataset.page;
      window.location.href = pageUrl;
    });
  });
};
goToProject2();
