const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menuLinks = document.querySelectorAll('.mobile-menu__list-text'); // Выбираем все ссылки

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

// Закрытие меню при клике на ссылку
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open'); // Убираем класс is-open
  });
});