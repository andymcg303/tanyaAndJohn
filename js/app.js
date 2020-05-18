const buttonJohnPrev = document.querySelector('.button-john.button-prev');
const buttonJohnNext = document.querySelector('.button-john.button-next');
const buttonTanyaPrev = document.querySelector('.button-tanya.button-prev');
const buttonTanyaNext = document.querySelector('.button-tanya.button-next');
const slideTanya = document.querySelector('#slide-tanya');
const slideJohn = document.querySelector('#slide-john');

function animateSlide (slideOut, slideIn, animateClass){
    if (slideOut.classList.length > 1) {
        slideOut.classList.remove(slideOut.classList.item(1));
    }
    slideOut.style.display = "none";
    slideIn.style.display = "flex";
    slideIn.classList.add(animateClass);
}

buttonTanyaPrev.addEventListener('click', () => {
    animateSlide(slideTanya, slideJohn, 'animate-right-in');
}); 

buttonTanyaNext.addEventListener('click', () => {
    animateSlide(slideTanya, slideJohn, 'animate-left-in');
});

buttonJohnPrev.addEventListener('click',  () => {
    animateSlide(slideJohn, slideTanya, 'animate-right-in');
}); 

buttonJohnNext.addEventListener('click', () => {
    animateSlide(slideJohn, slideTanya, 'animate-left-in');
}); 
