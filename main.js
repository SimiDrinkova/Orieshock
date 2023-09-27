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
      duration: 1000,
    });
  });

document.querySelector(".nav-item-buy").addEventListener("click", function (e) {
  smoothScroll({
    toElement: document.querySelector(".where-to-buy"),
    duration: 1100,
  });
});

document
  .querySelector(".nav-item-contacts")
  .addEventListener("click", function (e) {
    smoothScroll({
      toElement: document.querySelector(".contacts"),
      duration: 1100,
    });
  });

document.querySelector(".my_bttn").addEventListener("click", function (e) {
  e.preventDefault();
  smoothScroll({
    toElement: document.querySelector(".main-header"),
    duration: 500,
  });
});

// @ts-ignore
// scroll button
window.addEventListener("scroll", function () {
  const scrollTopButton = document.querySelector(".my_bttn");
  const scrollArrow = document.querySelector(".animated-arrows");
  const scrollThreshold = 400; //Hranica posunu v pixeloch
  if (window.pageYOffset > scrollThreshold) {
    scrollTopButton.style.display = "block";
    scrollArrow.style.display = "none";
  } else {
    scrollTopButton.style.display = "none";
    scrollArrow.style.display = "block";
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

// Roll v history
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

//Slider for banners
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  let currentSlideIndex = 0;

  function startAutoSlide() {
    setInterval(nextSlide, 8000); // Přepínání každých 8 sekund
  }

  startAutoSlide(); // Spustit automatické přepínání po načtení stránky

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.left = (i - index) * 100 + "%";
    });

    dots.forEach((dot, i) => {
      dot.classList.remove("active");
    });

    dots[index].classList.add("active");
  }

  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  }

  function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      currentSlideIndex = index;
    });
  });

  document.querySelector(".prev-button").addEventListener("click", prevSlide);
  document.querySelector(".next-button").addEventListener("click", nextSlide);

  showSlide(currentSlideIndex);
});

// Change background of locality
const buttonTT = document.querySelector("#btn-trnava");
const buttonEshop = document.querySelector("#btn-eshop");
const buttonBA = document.querySelector("#btn-bratislava");

const backgroundLocality = document.querySelector(".where-to-buy");

buttonTT.addEventListener("click", function () {
  backgroundLocality.style.backgroundImage = "url('img/TT.png')";
});

buttonEshop.addEventListener("click", function () {
  backgroundLocality.style.backgroundImage = "url('img/eshop.png')";
});

buttonBA.addEventListener("click", function () {
  backgroundLocality.style.backgroundImage = "url('img/bratislava.png')";
});

// JavaScript pro otevření/zavření mobilního menu

const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const navbarList = document.getElementById("navbar_list");
const bar1 = document.querySelector(".mobile-menu-icon .bar:first-child");
const bar2 = document.querySelector(".mobile-menu-icon .bar:nth-child(2)");
const bar3 = document.querySelector(".mobile-menu-icon .bar:last-child");

mobileMenuIcon.addEventListener("click", function () {
  navbarList.classList.toggle("mobile-menu-open"); // Přepnout třídu 'mobile-menu-open'

  // Zkontrolujte, zda má menu třídu 'mobile-menu-open' a podle toho nastavte zobrazení
  if (navbarList.classList.contains("mobile-menu-open")) {
    navbarList.style.display = "block";
    bar1.style.transform = "rotate(-45deg) translate(-5px, 6px)";
    bar2.style.opacity = 0;
    bar3.style.transform = "rotate(45deg) translate(-5px, -6px)";
  } else {
    navbarList.style.display = "none";
    // Pokud je mobilní menu zavřené, vrátit hamburger ikonu
    bar1.style.transform = "none";
    bar2.style.opacity = 1;
    bar3.style.transform = "none";
  }
});

// Lightbox na mobil
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxInfo = document.getElementById("lightbox-info");
  const lightboxTitle = document.getElementById("lightbox-title");

  if (window.innerWidth <= 768) {
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

      container.addEventListener("click", function () {
        lightboxInfo.innerHTML = info;
        lightboxTitle.innerHTML = `<img src="${img.src}" alt="${overlayTitle}"> <br> <p>${weight}`;
        lightbox.style.display = "block";
      });
    });
  }
});

//Zatvorenie ligthboxu Xkom
document.addEventListener("DOMContentLoaded", function () {
  const closeLightbox = document.getElementById("close-lightbox");
  const lightbox = document.getElementById("lightbox");

  closeLightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
  });
});

// Meni background v reviews
document.addEventListener("DOMContentLoaded", function () {
  const backgrounds = [
    "img/feedback1.png",
    "img/feedback2.png",
    "img/feedback4.png",
  ];
  const backgroundContainer = document.querySelector(".background-image");
  const dots = document.querySelectorAll(".dot");

  let currentIndexReview = 0;
  let isMobile = false;

  function changeBackground(index) {
    const newBackground = backgrounds[index];
    backgroundContainer.style.backgroundImage = `url(${newBackground})`;
  }

  function checkIsMobile() {
    isMobile = window.innerWidth <= 768; // Zmeniť tento limit podľa potreby
  }

  // Zmena pozadia na základě kliknutí na kruhy
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      changeBackground(index);
      currentIndexReview = index;

      // Aktualizovat třídu "active" pro kruhy
      dots.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });

  // Zmena pozadia iba pro mobilní zařízení
  function startBackgroundChangeForMobile() {
    if (isMobile) {
      setInterval(() => {
        currentIndexReview = (currentIndexReview + 1) % backgrounds.length;
        changeBackground(currentIndexReview);

        // Aktualizovat třídu "active" pro kruhy
        dots.forEach((dot) => dot.classList.remove("active"));
        dots[currentIndexReview].classList.add("active");
      }, 4000); // Zmeniť časový interval podľa potreby
    }
  }

  // Spustit kontrolu na detekci mobilních zařízení až po načtení stránky
  checkIsMobile();
  startBackgroundChangeForMobile();

  // Aktualizovat detekci mobilních zařízení při změně velikosti okna
  window.addEventListener("resize", checkIsMobile);
});
