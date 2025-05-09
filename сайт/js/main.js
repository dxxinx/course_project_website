document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenuButton = document.querySelector('.close-menu');

  burger.addEventListener('click', function () {
      burger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : ''; // Блокировка скролла
  });

  closeMenuButton.addEventListener('click', function () {
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
  });

  document.addEventListener('click', function (event) {
      if (!mobileMenu.contains(event.target) && !burger.contains(event.target) && mobileMenu.classList.contains('active')) {
          burger.classList.remove('active');
          mobileMenu.classList.remove('active');
          document.body.style.overflow = '';
      }
  });
});
