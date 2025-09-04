//Header

let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};
// Nav Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach((a) => {
  a.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

//Swiper Slider
let heroSwiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3500,
  },
});

// Counter
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    const obj = document.getElementById(id);
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;

    const step = Math.max(1, Math.floor(Math.abs(duration / range)));

    const timer = setInterval(() => {
      current += increment;
      obj.textContent = current;

      if (current === end) {
        clearInterval(timer);
      }
    }, step);
  }

  counter("count1", 0, 1287, 3000);
  counter("count2", 100, 3999, 2500);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 4589, 3000);
});

// Back to Top Button
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollToBottom = document.querySelector(".scroll-to-bottom");

  if (scrollToBottom) {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 300) {
        scrollToBottom.classList.add("show");
      } else {
        scrollToBottom.classList.remove("show");
      }
    });
  }
});

// Our Partner
let partnerSwiper = new Swiper(".our-partner", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    991: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
  },
});
