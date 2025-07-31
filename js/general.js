/* Switch animation variables */

const switchA = document.querySelector(".switch");
const button = document.querySelector(".button");
let isMoved = false;
const body = document.body;
let invertMe = document.querySelectorAll(".special");
const transitionStyle = "all 0.8s ease-out";

/* HERO animation variable*/
const hero = document.getElementById("hero");

/* Switch animation */
switchA.addEventListener("click", () => {
  //all buddies here will transition smoothly: the text,paragraphs, the custom element with the .special class toggled
  body.style.transition = transitionStyle;
  button.style.transition = "all 0.3s ease-out";
  const filterValue = isMoved ? "invert(0)" : "invert(1)";

  //apply the invert filter and the transition value for each element that has the class .special iterating instead of repeating
  invertMe.forEach((element) => {
    element.style.transition = transitionStyle;
    element.style.filter = filterValue;
  });

  button.style.transform = isMoved ? "translateX(0px)" : "translateX(37px)";
  //fix for smaller devices
  if (window.innerWidth <= 768) {
    button.style.transform = isMoved ? "translateX(0px)" : "translateX(30px)";
  }
  body.classList.toggle("light-mode", !isMoved);
  isMoved = !isMoved;
});

/* HERO animation */

window.addEventListener("scroll", () => {
  // Get the amount scrolled relative to the window's height
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  // Calculate opacity based on scroll progress (0 to 1)
  const opacity = 1 - (scrollPosition) / windowHeight;
  const scale = 1 - scrollPosition / windowHeight;

  // Set the opacity dynamically (clamp between 0 and 1)
  hero.style.opacity = Math.max(opacity, 0);
  hero.style.scale = Math.max(scale, 0);
});

/* Burger menu animation */
const navSlide = () => {
  const burger = document.getElementById("burgerM");

  const nav = document.querySelector("#nav-link");
  const navLinks = document.querySelectorAll("#nav-link li a");
  document.getElementById("nav-link").style.transition = transitionStyle;

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    nav.classList.toggle("isClicked");

    //closing the menu if any of the links inside has been clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        //This is too fast
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
};

navSlide();

//GO TO PROJECT DESKTOP FUNCTION
const goToProject = () => {
  document.querySelectorAll(".project").forEach((item) => {
    item.addEventListener("click", () => {
      const pageUrl = item.dataset.page;
      window.location.href = pageUrl;
    });
  });
};
goToProject();
