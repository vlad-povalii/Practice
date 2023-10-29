// menu section - close and open + overlay
const hamburgerEl = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeEl = document.querySelector('.menu__close');
const overlayEl = document.querySelector('.menu__overlay');

hamburgerEl.addEventListener('click', () => {
    menu.classList.add('active');
})
closeEl.addEventListener('click', () => {
    menu.classList.remove('active');
})
overlayEl.addEventListener('click', () => {
    menu.classList.remove('active');
})

// skills section - rating-line
const counters = document.querySelectorAll('.skills__rating-counter');
const lines = document.querySelectorAll('.skills__rating-line span');

counters.forEach((item, index) => {
    lines[index].style.width = item.innerText;
})


// Smooth scroll and pageup 
window.addEventListener('scroll', function () {
    // const scrollPosition = window.scrollY;
    // OR
    const scrollPosition = document.documentElement.scrollTop;
    const pageUpEl = document.querySelector('.pageup');
    if (scrollPosition > 685) {
        pageUpEl.style.display = 'block';
    } else {
        pageUpEl.style.display = 'none';
    }
});