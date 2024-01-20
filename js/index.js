let translate = 0;

const onNext = () => {
  const items = document.querySelectorAll("[data-carousel-item]");
  if (translate < items.length - 1) {
    translate = translate + 1;

    percentage = -100 * translate;
    items.forEach((item) => {
      item.style.transform = `translateY(${percentage}%)`;
    });
  }
};

const onBack = () => {
  const items = document.querySelectorAll("[data-carousel-item]");
  if (translate > 0) {
    translate = translate - 1;

    percentage = -100 * translate;
    items.forEach((item) => {
      item.style.transform = `translateY(${percentage}%)`;
    });
  }
};

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();