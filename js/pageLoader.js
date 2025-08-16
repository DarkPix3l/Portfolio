const loaderPage = document.getElementById("loaderPage");

/* window.addEventListener("DOMContentLoaded", () => {
  loaderPage.style.opacity = "1";
}); */

window.addEventListener("load", () => {
  loaderPage.style.opacity = "0";
  loaderPage.style.pointerEvents = "none";
}); 

loaderPage.addEventListener("transitionend", () => {
  loaderPage.style.display = "none";
  loaderPage.style.pointerEvents = "auto";
});