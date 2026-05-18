export const initModal = () => {
  const openButtons = document.querySelectorAll("[data-modal-open]");

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.dataset.modalOpen;
      const modal = document.getElementById(modalId);

      if (!modal) return;

      modal.classList.add("is-active");
      document.documentElement.classList.add("is-lock");

      modal.setAttribute("aria-hidden", "false");
    });
  });

  document.addEventListener("click", (event) => {
    const closeButton = event.target.closest("[data-modal-close]");

    if (!closeButton) return;

    const modal = closeButton.closest(".modal");

    if (!modal) return;

    closeModal(modal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    const activeModal = document.querySelector(".modal.is-active");

    if (!activeModal) return;

    closeModal(activeModal);
  });

  const closeModal = (modal) => {
    document.activeElement.blur();

    modal.classList.remove("is-active");

    document.documentElement.classList.remove("is-lock");

    modal.setAttribute("aria-hidden", "true");
  };
};
