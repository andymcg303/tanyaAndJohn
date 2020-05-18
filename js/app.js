const buttonJohnPrev = document.querySelector('.button-john.button-prev');
const buttonJohnNext = document.querySelector('.button-john.button-next');
const buttonTanyaPrev = document.querySelector('.button-tanya.button-prev');
const buttonTanyaNext = document.querySelector('.button-tanya.button-next');
const slideTanya = document.querySelector('#slide-tanya');
const slideJohn = document.querySelector('#slide-john');


buttonTanyaPrev.addEventListener('click', () => {
    if (slideTanya.classList.length > 1) {
        slideTanya.classList.remove(slideTanya.classList.item(1));
    }
    slideTanya.classList.add('animate-slide-right-out');
    setTimeout(() => {slideTanya.style.display = "none"}, 500 );

    setTimeout(() => {slideJohn.style.display = "flex"}, 500 );
    slideJohn.classList.add('animate-slide-right-in');
});