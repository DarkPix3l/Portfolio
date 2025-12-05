const transitionStyle = "all 0.4s ease-out";
const THEME_STORAGE_KEY = "user-theme";
const DEFAULT_THEME = "dark";

const applyThemeOnLoad = (body) => {
  // Load the stored theme or use the default
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME;

  // Set the theme attribute directly.
  body.setAttribute("data-theme", storedTheme);
};
/* Switch animation */
const initSwitch = () => {
  const switchA = document.querySelector(".switch");
  const body = document.body;

  // Apply the stored theme immediately on load.
  applyThemeOnLoad(body);

  switchA.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      switchA.click();
    }
  });

  switchA.addEventListener("click", () => {
    //saving the current theme from the body attribute
    const currentTheme = body.getAttribute("data-theme");

    //Calculate the new theme
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    //Apply new theme to the body
    body.setAttribute("data-theme", newTheme);

    //Save the new state
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
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
