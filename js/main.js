let scrollNav = document.querySelector(".navbar");
let ScrollToTop = document.querySelector(".Scroll-to-top");
window.addEventListener("scroll", (eo) => {
  if (window.scrollY >= 70) {
    scrollNav.classList.add("navbarScroll");
    ScrollToTop.classList.add("Scroll-to-topShow");
  } else {
    (window.scrollY <= 20)
    scrollNav.classList.remove("navbarScroll");
    ScrollToTop.classList.remove("Scroll-to-topShow");
  }
})
//  LightBox [VenoBox]
new VenoBox({
  selector: '.lightBoxVideo',
});
// Swiper
var swiper = new Swiper(".Choose-Us-Swiper", {
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",

  },
  pagination: {

    el: ".swiper-pagination",
  }
});