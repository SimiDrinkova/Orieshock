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
  .querySelector(".nav-item-production")
  .addEventListener("click", function (e) {
    smoothScroll({
      toElement: document.querySelector(".production"),
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
    const value = img.getAttribute("data-nutritional-value");
    const calories = img.getAttribute("data-calories");
    const protein = img.getAttribute("data-protein");
    const fat = img.getAttribute("data-fat");
    const carbs = img.getAttribute("data-carbs");
    const fibre = img.getAttribute("data-fibre");
    const info = img.getAttribute("data-info");

    nutritionOverlay.innerHTML = `
      <h3 class="overlay-title">Orieshock Mandlový</h3>
      <br>
      <p>${info}</p>
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

document.addEventListener("DOMContentLoaded", function () {
  const showNutritionalValuesButton = document.querySelector(
    ".show-nutritional-values"
  );
  const nutritionalValues = document.querySelector(".nutritional-values");
  const product = document.querySelector(".rotate");
  const productImage = product.querySelector("img");

  productImage.addEventListener("mouseover", function () {
    productImage.style.transform = "scale(1.1)";
  });

  showNutritionalValuesButton.addEventListener("click", function (event) {
    event.preventDefault();
    nutritionalValues.style.transform = "rotateX(0)";
    nutritionalValues.style.visibility = "visible";
    nutritionalValues.style.opacity = "1";
    showNutritionalValuesButton.style.visibility = "hidden"; // Skryjeme tlačítko
    productImage.style.transform = "rotateY(180deg)"; // Přidáme rotaci obrázku po kliknutí
  });

  product.addEventListener("mouseleave", function () {
    // Po opuštění oblasti produktu obnovíme původní stav
    nutritionalValues.style.transform = "rotateX(-180deg)";
    nutritionalValues.style.visibility = "hidden";
    nutritionalValues.style.opacity = "0";
    showNutritionalValuesButton.style.visibility = "visible"; // Znovu zobrazíme tlačítko
    productImage.style.transform = "rotateY(0)"; // Vrátíme obrázek do původní polohy
  });
});
