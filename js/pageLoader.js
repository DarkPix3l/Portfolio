const loaderHTML = `
<div id="loaderPage">
<div class="loader"></div>
</div>
`;
document.body.insertAdjacentHTML('afterbegin', loaderHTML);
const loaderPage = document.getElementById("loaderPage");


window.addEventListener("load", () => {
  loaderPage.style.opacity = "0";
  loaderPage.style.pointerEvents = "none";

});

loaderPage.addEventListener("transitionend", () => {
  loaderPage.remove();
});