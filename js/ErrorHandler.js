document.addEventListener("DOMContentLoaded", () => {
  function handleError(img) {
    console.error("Error loading image");
    img.alt = "";
    const projectContainer = img.closest(".project");

    if (projectContainer) {
      const errorElement = document.createElement("p");
      errorElement.classList.add("load-error");
      errorElement.innerHTML = "The image could not be loaded, but you can still view the project. <br> <br>🖱️";

      projectContainer.appendChild(errorElement);
      const description = projectContainer.querySelector(".description");
      description.style.opacity = "0";
    }
  }

  function loadImageWithRetry(imgElement, maxRetries) {
    let retries = 0;

    function tryLoad(url) {
      const testImg = new Image();

      testImg.onerror = () => {
        if (retries < maxRetries) {
          retries++;
          console.warn(`Retrying ${url} (${retries}/${maxRetries})`);
          tryLoad(url);
        } else {
          handleError(imgElement);
        }
      };
      testImg.src = url;
    }

    tryLoad(imgElement.src);
  }

  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    loadImageWithRetry(img, 5);
  });
});