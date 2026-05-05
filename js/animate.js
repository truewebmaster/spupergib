export function initAnimations() {
  const elements = document.querySelectorAll("[data-animate]");
  if (!elements.length) return;

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const delay = Number(el.dataset.delay || 0);

        obs.unobserve(el);

        requestAnimationFrame(() => {
          setTimeout(() => {
            el.classList.add("is-animated");
          }, delay);
        });
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  requestAnimationFrame(() => {
    elements.forEach((el) => observer.observe(el));
  });
}
