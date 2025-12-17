// Initialize Partners Swiper
const partnersSwiper = new Swiper('.partnersSwiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    speed: 5000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});

const partnersSwiper2 = new Swiper(".partnersSwiper2", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  speed: 6000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

// Initialize Gallery Swiper
const gallerySwiper = new Swiper('.gallerySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});
