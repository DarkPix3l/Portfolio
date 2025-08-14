const iconGroup = document.querySelector('#skills-list .iconGroup');
const speed = 0.5; // pixels per frame
let pos = 0;

// Duplicate all icons for seamless loop
iconGroup.innerHTML += iconGroup.innerHTML;

// Width of one full set of icons
const totalWidth = iconGroup.scrollWidth / 2;

function scrollIcons() {
  pos += speed;
  if (pos >= totalWidth) pos = 0; // reset to start
  iconGroup.style.transform = `translateX(-${pos}px)`;
  requestAnimationFrame(scrollIcons);
}

requestAnimationFrame(scrollIcons);

// Optional: pause on hover
/* iconGroup.addEventListener('mouseenter', () => cancelAnimationFrame(scrollIcons));
iconGroup.addEventListener('mouseleave', () => requestAnimationFrame(scrollIcons)); */
