//--------------------------------------------------
// start burger script
//--------------------------------------------------

const burger = document.querySelector('.burger');

function changeStateBurger(event) {
    const burgerLines = document.querySelector('.burger__container-lines');
    const burgerContainerContent = document.querySelector('.burger__container');
    const header = document.querySelector('.header');

    burgerLines.classList.toggle('burger__container-lines_open');
    burgerContainerContent.classList.toggle('burger__container_open');
    header.classList.toggle('header_blocking');
}

burger.addEventListener('click', changeStateBurger);
burger.addEventListener('touch', changeStateBurger);

//--------------------------------------------------
// end burger script
//--------------------------------------------------
