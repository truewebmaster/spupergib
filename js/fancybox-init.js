document.addEventListener("DOMContentLoaded", () => {
  initFancybox();
});

function initFancybox() {
  const items = document.querySelectorAll("[data-fancybox]");

  if (!items.length) return;

  if (typeof Fancybox === "undefined") {
    console.warn("Fancybox is not loaded");
    return;
  }

  Fancybox.bind(".swiper-slide:not(.swiper-slide-duplicate) [data-fancybox]", {
    animated: false,
    dragToClose: false,
    hideScrollbar: false,
    placeFocusBack: false,
    autoFocus: false,
    trapFocus: false,
  });
}
