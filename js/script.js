//--------------------------------------------------
// start burger script
//--------------------------------------------------

const burger = document.querySelector('.burger');

function changeStateBurger() {
    const sliderController = document.querySelector('.slider-controler');
    const burgerLines = document.querySelector('.burger__container-lines');
    const burgerContainerContent = document.querySelector('.burger__container');
    const header = document.querySelector('.header');

    burgerLines.classList.toggle('burger__container-lines_open');
    burgerContainerContent.classList.toggle('burger__container_open');
    header.classList.toggle('header_blocking');
    sliderController.classList.toggle('slider-controler_hidden');
}

burger.addEventListener('click', changeStateBurger);
burger.addEventListener('touch', changeStateBurger);

//--------------------------------------------------
// end burger script
//--------------------------------------------------


//--------------------------------------------------
// start slider script
//--------------------------------------------------

var slider = new Swiper ('.slider', {
    navigation: {
        nextEl: '.slider-controler__container-arrow_next',
        prevEl: '.slider-controler__container-arrow_prev',
    },
    pagination: {
        el: '.progress-bar__line',
        type: 'progressbar',
    },
    followFinger: false,
});

slider.on('slideChange', () => {
    const numberSlide = document.querySelectorAll('.progress-bar__number-slide');
    const prevNumberActiveSlide = document.querySelector('.progress-bar__number-slide_acitve');
    const activeSlideIndex = slider.realIndex;

    const numberActiveSlide = numberSlide[activeSlideIndex];
    prevNumberActiveSlide.classList.remove('progress-bar__number-slide_acitve');
    prevNumberActiveSlide.classList.remove()
    numberActiveSlide.classList.add('progress-bar__number-slide_acitve');
});

//--------------------------------------------------
// end slider script
//--------------------------------------------------