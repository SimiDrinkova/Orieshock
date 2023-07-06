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
window.addEventListener("scroll", function () {
  const scrollTopButton = document.querySelector(".my_bttn");
  const scrollThreshold = 400; //Hranica posunu v pixeloch
  if (window.pageYOffset > scrollThreshold) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});
