// Scroll from navigation to section
document
  .querySelector(".nav-item-about")
  .addEventListener("click", function (e) {
    smoothScroll({
      toElement: document.querySelector(".about-us"),
      duration: 400,
    });
  });

document
  .querySelector(".nav-item-history")
  .addEventListener("click", function (e) {
    smoothScroll({
      toElement: document.querySelector(".history"),
      duration: 500,
    });
  });

document
  .querySelector(".nav-item-products")
  .addEventListener("click", function (e) {
    smoothScroll({
      toElement: document.querySelector(".products"),
      duration: 600,
    });
  });

document
  .querySelector(".nav-item-reviews")
  .addEventListener("click", function (e) {
    smoothScroll({
      toElement: document.querySelector(".reviews"),
      duration: 700,
    });
  });

document
  .querySelector(".nav-item-contacts")
  .addEventListener("click", function (e) {
    smoothScroll({
      toElement: document.querySelector(".contacts"),
      duration: 800,
    });
  });

document.querySelector(".my_bttn").addEventListener("click", function (e) {
  e.preventDefault();
  smoothScroll({
    toElement: document.querySelector(".nav-item-about"),
    duration: 500,
  });
});

// @ts-ignore
// scroll button
window.addEventListener("scroll", function () {
  const scrollTopButton = document.querySelector(".my_bttn");
  const scrollThreshold = 400; //Hranica posunu v pixeloch
  if (window.pageYOffset > scrollThreshold) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const imageContainers = document.querySelectorAll(".image-container");

  imageContainers.forEach((container) => {
    const img = container.querySelector("img");
    const nutritionOverlay = container.querySelector(".nutrition-overlay");
    const info = img.getAttribute("data-info");
    const overlayTitle = img.getAttribute("data-overlay-title");
    const weight = img.getAttribute("data-weight");

    nutritionOverlay.innerHTML = `
      <h3 class="overlay-title">${overlayTitle}</h3>
      <br>
      <p>${info}</p>
      <p>${weight}</p>
    `;

    container.addEventListener("mouseover", function () {
      nutritionOverlay.style.opacity = 1;
      nutritionOverlay.style.visibility = "visible";
    });

    container.addEventListener("mouseout", function () {
      nutritionOverlay.style.opacity = 0;
      nutritionOverlay.style.visibility = "hidden";
    });
  });
});

const historiaSections = document.querySelectorAll(".roll");
let currentIndex = 0;

function showNextSection() {
  if (currentIndex < historiaSections.length) {
    historiaSections[currentIndex].classList.add("visible");
    currentIndex++;
    setTimeout(showNextSection, 500); // Zmena doby zobrazenia (ms)
  }
}

// Zisti, či sme na sekcií "História"
const historySection = document.querySelector(".history");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      showNextSection();
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(historySection);
