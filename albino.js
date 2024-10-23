AOS.init();

// Background parallax effect for hero section
gsap.to(".hero-bg", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: "#home",
    scrub: true,
  },
});

// Language select
function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-en]");
  elements.forEach((el) => {
    const originalContent = el.innerHTML;

    el.innerHTML = el.getAttribute(`data-${lang}`);

    if (el.innerHTML.includes("<span id='current-year'></span>")) {
      el.innerHTML = el.innerHTML.replace(
        "<span id='current-year'></span>",
        "<span id='current-year'>" + new Date().getFullYear() + "</span>"
      );
    }
  });

  document.getElementById("current-year").textContent =
    new Date().getFullYear();
}

document
  .querySelector(".language-select")
  .addEventListener("change", (event) => {
    changeLanguage(event.target.value);
  });

  // end

// checks if the URL contains a hash. If it does, the code smoothly scrolls to the element with that ID when the page is loaded.

window.addEventListener("load", function () {
  if (window.location.hash) {
    const element = document.querySelector(window.location.hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
});
// end

// about Counter Animation
document.addEventListener("DOMContentLoaded", function () {
  var counters = document.querySelectorAll(".count");
  counters.forEach(function (counter) {
    var updateCount = function () {
      var target = +counter.getAttribute("data-target");
      var count = +counter.innerText;
      var increment = target / 200;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});
// end

// gallery owl carousel
$(".gallery-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  margin: 45,
  dots: false,
  loop: true,
  nav: true,
  navText: [
    '<i class="bi bi-arrow-left"></i>',
    '<i class="bi bi-arrow-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
// end

// contact Card flip 
const contactCard = document.querySelector(".contact-card-3d");
contactCard.addEventListener("mouseover", () => {
  const cardInner = document.querySelector(".card-inner");
  cardInner.style.transform = "rotateY(180deg)";
});

contactCard.addEventListener("mouseout", () => {
  const cardInner = document.querySelector(".card-inner");
  cardInner.style.transform = "rotateY(0deg)";
});
// end