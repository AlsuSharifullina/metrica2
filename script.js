document.querySelectorAll('.header__item a').forEach(link => {
    link.addEventListener('click', function() {
        // Закрываем меню
        document.querySelector('.menu_toggler').checked = false;
    });
});


// для галереии 


const images = document.querySelectorAll('.gallery__img');
const btnLeft = document.querySelector('.gallery__btn-left');
const btnRight = document.querySelector('.gallery__btn-right');

let currentSlide = 0; // Текущий слайд

// Функция обновления слайдера
function updateSlider() {
    images.forEach((img, index) => {
        img.style.opacity = index === currentSlide ? "1" : "0";
        img.style.position = index === currentSlide ? "relative" : "absolute";
    });
}

// Обработчик кнопки "влево"
btnLeft.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : images.length - 1;
    updateSlider();
});

// Обработчик кнопки "вправо"
btnRight.addEventListener('click', () => {
    currentSlide = (currentSlide < images.length - 1) ? currentSlide + 1 : 0;
    updateSlider();
});

// Показываем первый слайд при загрузке
updateSlider();
