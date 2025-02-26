document.querySelectorAll('.header__item a').forEach(link => {
    link.addEventListener('click', function() {
        // Закрываем меню
        document.querySelector('.menu_toggler').checked = false;
    });
});