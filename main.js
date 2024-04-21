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

// Overlay pre produkty
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

// filter for products

const maslo = document.querySelectorAll("#maslo");
const orechy = document.querySelectorAll("#orechy");
const cokolada = document.querySelectorAll("#cokolada");
const ovocie = document.querySelectorAll("#ovocie");
const granola = document.querySelectorAll("#granola");

document.querySelector("#btn-maslo").addEventListener("click", function () {
  orechy.forEach(function (orechy) {
    orechy.style.display = "none";
  });
  cokolada.forEach(function (cokolada) {
    cokolada.style.display = "none";
  });
  ovocie.forEach(function (ovocie) {
    ovocie.style.display = "none";
  });
  granola.forEach(function (granola) {
    granola.style.display = "none";
  });
  maslo.forEach(function (maslo) {
    maslo.style.display = "block";
  });
});

document.querySelector("#btn-ovocie").addEventListener("click", function () {
  orechy.forEach(function (orechy) {
    orechy.style.display = "block";
  });
  maslo.forEach(function (maslo) {
    maslo.style.display = "none";
  });
  granola.forEach(function (granola) {
    granola.style.display = "none";
  });
  cokolada.forEach(function (cokolada) {
    cokolada.style.display = "block";
  });
  ovocie.forEach(function (ovocie) {
    ovocie.style.display = "block";
  });
});

document.querySelector("#btn-granola").addEventListener("click", function () {
  orechy.forEach(function (orechy) {
    orechy.style.display = "none";
  });
  cokolada.forEach(function (cokolada) {
    cokolada.style.display = "none";
  });
  ovocie.forEach(function (ovocie) {
    ovocie.style.display = "none";
  });
  maslo.forEach(function (maslo) {
    maslo.style.display = "none";
  });
  granola.forEach(function (granola) {
    granola.style.display = "block";
  });
});

// Funkce pro skrytí všech prvků kromě masel
function showOnlyButters() {
  orechy.forEach(function (orechy) {
    orechy.style.display = "none";
  });
  cokolada.forEach(function (cokolada) {
    cokolada.style.display = "none";
  });
  ovocie.forEach(function (ovocie) {
    ovocie.style.display = "none";
  });
  granola.forEach(function (granola) {
    granola.style.display = "none";
  });
  maslo.forEach(function (maslo) {
    maslo.style.display = "block";
  });
}

// Událost DOMContentLoaded spustí kód, když je stránka plně načtena
document.addEventListener("DOMContentLoaded", function () {
  showOnlyButters(); // Zavolání funkce pro zobrazení pouze masel po načtení stránky
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

  const mobileImages = [
    "img/banner_kavovy_mobile.png",
    "img/Untitled1_mobile.jpg",
    "img/Untitled2_mobile.jpg",
    "img/Untitled4_mobile.jpg",
    "img/Untitled5_mobile.jpg",
    "img/Untitled8_mobile.jpg",
  ];

  const desktopImages = [
    "img/banner_kavovy_desktop.png",
    "img/Untitled-12.jpg",
    "img/Untitled-4.jpg",
    "img/Untitled-7.jpg",
    "img/Untitled-8.jpg",
    "img/Untitled-9.jpg",
  ];

  let currentSlideIndex = 0;
  let isMobile = false;

  function startAutoSlide() {
    setInterval(nextSlide, 8000); // Přepínání každých 8 sekund
  }

  startAutoSlide();

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

  function checkIsMobile() {
    isMobile = window.innerWidth <= 768; // Nastavenie sirky ktora určuje, čo je považované za mobil
  }

  checkIsMobile();

  window.addEventListener("resize", checkIsMobile);

  function updateImages() {
    const images = isMobile ? mobileImages : desktopImages;

    slides.forEach((slide, index) => {
      const img = slide.querySelector("img");
      if (index < images.length) {
        img.src = images[index];
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  }

  updateImages();

  window.addEventListener("resize", updateImages);
});

// Change background of locality
const buttonTT = document.querySelector("#btn-trnava");
const buttonEshop = document.querySelector("#btn-eshop");
const buttonBA = document.querySelector("#btn-bratislava");
const textBA = document.querySelector(".text-bratislava");
const textTT = document.querySelector(".text-tt");
const textEshop = document.querySelector(".text-eshop");

const backgroundLocality = document.querySelector(".where-to-buy");

buttonTT.addEventListener("click", function () {
  if (window.innerHeight <= 768) {
    backgroundLocality.style.height = "750px";
    textTT.style.display = "block";
    textBA.style.display = "none";
    textEshop.style.display = "none";
  } else {
    textTT.style.display = "block";
    textBA.style.display = "none";
    textEshop.style.display = "none";
    backgroundLocality.style.height = "500px";
  }
});

buttonEshop.addEventListener("click", function () {
  if (window.innerHeight <= 768) {
    textEshop.style.display = "block";
    textBA.style.display = "none";
    textTT.style.display = "none";
    backgroundLocality.style.height = "450px";
  } else {
    textEshop.style.display = "block";
    textBA.style.display = "none";
    textTT.style.display = "none";
    backgroundLocality.style.height = "320px";
  }
});

buttonBA.addEventListener("click", function () {
  if (window.innerHeight <= 768) {
    textBA.style.display = "block";
    textTT.style.display = "none";
    textEshop.style.display = "none";
    backgroundLocality.style.height = "450px";
  } else {
    textBA.style.display = "block";
    textTT.style.display = "none";
    textEshop.style.display = "none";
    backgroundLocality.style.height = "320px";
  }
});

// Otvorenie a zatvorenie hamburger menu
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const navbarList = document.getElementById("navbar_list");
const bar1 = document.querySelector(".mobile-menu-icon .bar:first-child");
const bar2 = document.querySelector(".mobile-menu-icon .bar:nth-child(2)");
const bar3 = document.querySelector(".mobile-menu-icon .bar:last-child");

navbarList.addEventListener("click", function () {
  if (window.innerWidth <= 768) {
    navbarList.style.display = "none";
    bar1.style.transform = "none";
    bar2.style.opacity = 1;
    bar3.style.transform = "none";
  } else {
    navbarList.style.display = "flex";
  }
});

mobileMenuIcon.addEventListener("click", function () {
  navbarList.classList.toggle("mobile-menu-open"); // Prepnutie triedy  'mobile-menu-open'

  // Kontrola, či má menu classu  'mobile-menu-open' a podle toho nastavíme zobrazenie
  if (navbarList.classList.contains("mobile-menu-open")) {
    navbarList.style.display = "block";
    bar1.style.transform = "rotate(-45deg) translate(-5px, 6px)";
    bar2.style.opacity = 0;
    bar3.style.transform = "rotate(45deg) translate(-5px, -6px)";
  } else {
    navbarList.style.display = "none";
    // Ak je mobilné menu zatvorené, vrátit hamburger ikonu
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
  const mobileBackgrounds = [
    "img/mobile_verzia_recenzia1.png",
    "img/mobile_verzia_recenzia2.png",
    "img/mobile_verzia_recenzie3.png",
    "img/mobile_verzia_recenzia4.png",
  ];

  const desktopBackgrounds = [
    "img/desktop_new_rew1.png",
    "img/desktop_new_rew2.png",
    "img/desktop_new_rew3.png",
    "img/desktop_new_rew4.png",
  ];

  const backgroundContainer = document.querySelector(".background-image");
  const dots = document.querySelectorAll(".dot");

  let currentIndexReview = 0;
  let isMobile = false;

  function changeBackground(index, isMobile) {
    const newBackgrounds = isMobile ? mobileBackgrounds : desktopBackgrounds;
    const newBackground = newBackgrounds[index];
    backgroundContainer.style.backgroundImage = `url(${newBackground})`;
  }

  function checkIsMobile() {
    isMobile = window.innerWidth <= 768; // Zmeniť tento limit podľa potreby
  }

  // Zmena pozadia na základe kliknutia na kruhy
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      changeBackground(index, isMobile);
      currentIndexReview = index;

      // Aktualizovat triedu "active" pre kruhy
      dots.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });

  // Zmena pozadia iba pre mobilné zariadenia
  function startBackgroundChangeForMobile() {
    if (isMobile) {
      setInterval(() => {
        currentIndexReview =
          (currentIndexReview + 1) % mobileBackgrounds.length;
        changeBackground(currentIndexReview, isMobile);

        // Aktualizovat classu "active" pre kruhy
        dots.forEach((dot) => dot.classList.remove("active"));
        dots[currentIndexReview].classList.add("active");
      }, 4000); // Zmeniť časový interval podľa potreby
    }
  }

  // Zmena pozadia iba pre desktop
  function startBackgroundChangeForDesktop() {
    if (!isMobile) {
      setInterval(() => {
        currentIndexReview =
          (currentIndexReview + 1) % desktopBackgrounds.length;
        changeBackground(currentIndexReview, isMobile);

        // Aktualizovat classu "active" pre kruhy
        dots.forEach((dot) => dot.classList.remove("active"));
        dots[currentIndexReview].classList.add("active");
      }, 6000); // Zmeniť časový interval podľa potreby
    }
  }

  // Spustit kontrolu na detekciu mobilních zařízení až po načtení stránky
  checkIsMobile();
  startBackgroundChangeForMobile();
  startBackgroundChangeForDesktop(); // Spustit zmenu pozadia pre desktop
});

//cookies
document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookiesButton = document.getElementById("accept-cookies");
  const declineCookiesButton = document.getElementById("decline-cookies");

  // Skontrolujeme, či užívateľ už prijal súbory cookie
  const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");

  if (!hasAcceptedCookies) {
    // Ak užívateľ neprijal súbory cookie, zobrazíme banner
    cookieBanner.style.display = "block";
  }

  // Obsluha kliknutia na tlačidlo Súhlasím
  acceptCookiesButton.addEventListener("click", function () {
    // Uložíme informáciu o tom, že užívateľ prijal súbory cookie
    localStorage.setItem("cookiesAccepted", "true");
    // Skryjeme banner
    cookieBanner.style.display = "none";
  });

  declineCookiesButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "declined");
    deleteAllCookies();
    cookieBanner.style.display = "none";
  });
});

function deleteAllCookies() {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
}
