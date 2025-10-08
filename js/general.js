const transitionStyle = "all 0.4s ease-out";

/* Switch animation */
const initSwitch = () => {
  const switchA = document.querySelector(".switch");
  const button = document.querySelector(".button");
  let invertMe = document.querySelectorAll(".special");
  let isMoved = false;
  const body = document.body;

  switchA.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      switchA.click();
    }
  });

  switchA.addEventListener("click", () => {
    button.style.transition = transitionStyle;
    button.style.transform = isMoved ? "translateX(0)" : "translateX(100%)";

    invertMe.forEach((el) => {
      el.style.filter = isMoved ? "invert(0)" : "invert(1)";
    });

    body.setAttribute("data-theme", isMoved ? "dark" : "light");
    isMoved = !isMoved;
  });
};

/* HERO animation */
const HeroScroll = () => {
  const hero = document.getElementById("hero");

  window.addEventListener("scroll", () => {
    // Get the amount scrolled relative to the window's height
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calculate opacity based on scroll progress (0 to 1)
    const opacity = 1 - (scrollPosition * 2) / windowHeight;
    const scale = 1 - scrollPosition / windowHeight;

    // Set the opacity dynamically (clamp between 0 and 1)
    hero.style.opacity = Math.max(opacity, 0);
    hero.style.scale = Math.max(scale, 0);
  });
};
/* Burger menu animation */
const navSlide = () => {
  const burger = document.getElementById("burgerM");

  const nav = document.querySelector("#nav-link");
  const navLinks = document.querySelectorAll("#nav-link li a");
  document.getElementById("nav-link").style.transition = transitionStyle;

  burger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      burger.click();
    }
  });

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    nav.classList.toggle("isClicked");

    const expanded = nav.getAttribute("aria-expanded") === "true";
    nav.setAttribute("aria-expanded", !expanded);
  });

  //closing the menu if any of the links inside has been clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      targetSection.scrollIntoView({ behavior: "smooth" });
      burger.classList.remove("open");
      nav.classList.remove("isClicked");
    });
  });
};

HeroScroll();
initSwitch();
navSlide();
