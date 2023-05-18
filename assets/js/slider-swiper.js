// https://github.com/Ahmed-Shatot
// Swiper settings for the Slider
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 1000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: true,
  },
});
