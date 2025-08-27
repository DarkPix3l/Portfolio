const goToProject = () => {
  document.querySelectorAll(".project, .img-container").forEach((item) => {
    item.addEventListener("click", () => {
      const projectId = item.dataset.projectId;
      window.location.href = `project_page.html?id=${projectId}`;
    });
  });
};
goToProject();

function getProjectIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function loadProjectContent() {
  const id = getProjectIdFromUrl();
  if (!id) return;
  const project = projects.find((p) => p.pageId === id);
  if (!project) return;

  /*   if (!project) {
    document.getElementById("project-details").innerHTML = "<p>Project not found.</p>";
    return;
  } */

  document.querySelectorAll(".titleB").forEach((el) => {
    el.textContent = project.title;
  });

  const mainImage = project.mainImage;
  const hero = document.getElementById("hero");
  hero.insertAdjacentHTML(
    "afterbegin", ` <img class="hero-bg" src="${mainImage.src}" srcset="${mainImage.srcset}" sizes="${mainImage.sizes}" alt="${mainImage.caption}" loading="lazy">`
  );
  document.getElementById("description").textContent = project.description;
  document.getElementById("summary").textContent = project.summary;

  const imagesContainer = document.getElementById("container");
  if (imagesContainer) {
    project.images.forEach((img) => {
      const figure = document.createElement("figure");
      figure.classList.add("project-image");
      figure.innerHTML = `
      <img src="${img.src}" srcset="${img.srcset}" sizes="${img.sizes}" alt="${img.caption}" loading="lazy">
      <figcaption>${img.caption}</figcaption>
    `;
      imagesContainer.appendChild(figure);
    });
  }

  const skills = project.skills;
  const skillListItems = document.querySelectorAll("#skills-list ul li");
  skillListItems.forEach((li, index) => {
    if (skills[index]) {
      // Get the span with the icon
      const iconSpan = li.querySelector("span.P-icon");

      // Remove everything after the icon span
      while (iconSpan.nextSibling) {
        li.removeChild(iconSpan.nextSibling);
      }

      // Add the skill text as a text node
      li.appendChild(document.createTextNode(skills[index]));
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadProjectContent();
});
