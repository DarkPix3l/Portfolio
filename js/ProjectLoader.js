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

  document.querySelectorAll(".titleB").forEach((el) => {
    el.textContent = project.title;
  });

  const mainImage = project.mainImage;
  const hero = document.getElementById("hero");

  if (hero) {
    const img = document.createElement("img");
    img.classList.add("hero-bg");

    img.setAttribute("src", mainImage.src);
    img.setAttribute("srcset", mainImage.srcset);
    img.setAttribute("sizes", mainImage.sizes);
    img.setAttribute("alt", `${project.title} showcase image`);
    img.setAttribute("loading", "lazy");
    hero.appendChild(img);
  }

  document.getElementById("description").textContent = project.description;
  document.getElementById("summary").textContent = project.summary;
  const skills = project.skills;
  const skillListItems = document.querySelectorAll("#skills-list ul li");
  skillListItems.forEach((li, index) => {
    if (skills[index]) {
      const iconSpan = li.querySelector("span.P-icon");

      // Remove everything after the icon span
      while (iconSpan.nextSibling) {
        li.removeChild(iconSpan.nextSibling);
      }

      // Add the skill text as a text node
      li.appendChild(document.createTextNode(skills[index]));
    }
  });

  const imagesContainer = document.getElementById("container");
  if (imagesContainer) {
    project.images.forEach((img) => {
      const figure = document.createElement("figure");
      figure.classList.add("project-image");

      const imageElement = document.createElement("img");
      imageElement.setAttribute("src", img.src);
      imageElement.setAttribute("srcset", img.srcset);
      imageElement.setAttribute("sizes", img.sizes);
      imageElement.setAttribute("alt", img.caption);
      imageElement.setAttribute("loading", "lazy");

      const captionElement = document.createElement("figcaption");
      captionElement.textContent = img.caption;

      figure.appendChild(imageElement);
      figure.appendChild(captionElement);

      imagesContainer.appendChild(figure);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadProjectContent();
});
