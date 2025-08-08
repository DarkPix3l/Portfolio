const goToProject = () => {
  document.querySelectorAll(".project").forEach((item) => {
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
  const project = projects.find((p) => p.pageId === id);

  /*   if (!project) {
    document.getElementById("project-details").innerHTML = "<p>Project not found.</p>";
    return;
  } */

  document.querySelectorAll(".titleB").forEach((el) => {
    el.textContent = project.title;
  });
  const mainImage = project.mainImage;

  document.getElementById("hero").style.backgroundImage = `url(${mainImage})`;
  document.getElementById("description").textContent = project.description;
  document.getElementById("summary").textContent = project.summary;

  const imagesContainer = document.getElementById("container");
  if (imagesContainer) {
    project.images.forEach((img) => {
      const figure = document.createElement("figure");
      figure.classList.add("project-image");
      figure.innerHTML = `
      <img src="${img.src}" alt="">
      <figurecaption>${img.caption}</figurecaption>
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
loadProjectContent();
