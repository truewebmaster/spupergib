document.addEventListener("DOMContentLoaded", () => {
  initSlider();
});

function initSlider() {
  const sliderBlocks = document.querySelectorAll("[data-js-slider]");

  if (!sliderBlocks.length) return;

  const options = {
    gallery: {
      slidesPerView: 1.2,
      spaceBetween: 20,
      autoHeight: true,
      speed: 600,

      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 12,
        },

        576: {
          slidesPerView: 2,
          spaceBetween: 16,
        },

        768: {
          slidesPerView: 2.3,
          spaceBetween: 20,
        },

        1160: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1440: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    },

    reviews: {
      slidesPerView: 1,
      speed: 500,
      autoHeight: true,
      spaceBetween: 30,
    },

    productThumbs: {
      slidesPerView: "auto",
      spaceBetween: 20,

      watchSlidesProgress: true,
      slideToClickedSlide: true,

      breakpoints: {
        320: {
          spaceBetween: 12,
        },

        768: {
          spaceBetween: 16,
        },

        1160: {
          spaceBetween: 20,
        },
      },
    },

    productMain: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      speed: 500,
    },
  };

  sliderBlocks.forEach((block) => {
    // ===== PRODUCT GALLERY =====

    if (block.classList.contains("product-gallery")) {
      const thumbsEl = block.querySelector(".js-slider-product-thumbs");

      const mainEl = block.querySelector(".js-slider-product-main");

      if (!thumbsEl || !mainEl) return;

      if (thumbsEl.swiper || mainEl.swiper) return;

      const thumbsSwiper = new Swiper(thumbsEl, {
        ...options.productThumbs,
      });

      const mainSwiper = new Swiper(mainEl, {
        ...options.productMain,

        thumbs: {
          swiper: thumbsSwiper,
        },

        on: {
          slideChange(swiper) {
            thumbsSwiper.slideTo(swiper.activeIndex);
          },
        },
      });

      return;
    }

    // ===== COMMON SLIDERS =====

    const swiperEl = block.querySelector(".js-slider");

    if (!swiperEl || swiperEl.swiper) return;

    const nextBtn = block.querySelector(".icon--right");
    const prevBtn = block.querySelector(".icon--left");

    // ===== GALLERY =====

    if (swiperEl.classList.contains("js-slider--gallery")) {
      new Swiper(swiperEl, {
        ...options.gallery,

        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
      });

      return;
    }

    // ===== REVIEWS =====

    if (swiperEl.classList.contains("js-slider--reviews")) {
      new Swiper(swiperEl, {
        ...options.reviews,

        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
      });

      return;
    }
  });
}
