document.addEventListener('DOMContentLoaded', () => {
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const closeModalBtns = document.querySelectorAll('.close-modal-btn');
  const body = document.body;

  // Enable scrolling when the page loads
  body.style.overflow = 'auto';

  function openModal(modal, backdrop) {
    backdrop.classList.add('show');
    modal.classList.add('show');
    body.style.overflow = 'hidden';
  }

  function closeModal(modal, backdrop) {
    backdrop.classList.remove('show');
    modal.classList.remove('show');
    body.style.overflow = 'auto';
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
      event.stopPropagation();
      const modalSelector = this.getAttribute('data-target');
      const modal = document.querySelector(modalSelector);
      const backdrop = document.querySelector('.modal-backdrop');
      openModal(modal, backdrop);
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      const backdrop = document.querySelector('.modal-backdrop');
      closeModal(modal, backdrop);
    });
  });
});