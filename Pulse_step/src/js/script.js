// // tiny-slider
// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     // nav: false,
//     // responsive: {
//     //     767: {

//     //         edgePadding: 20,
//     //         gutter: 20,
//     //         items: 2
//     //     },
//     // },
// });

// document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
// });

// document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
// });

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel__inner");
    var dots = document.getElementsByClassName("carousel__dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// tabs
let tabsBtn = document.querySelectorAll('.catalog__tab');
let tabsContent = document.querySelectorAll('.catalog__content');
let contentLinks = document.querySelectorAll('.catalog-item__link');
let contentBacks = document.querySelectorAll('.catalog-item__back');



tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentContent = document.querySelector(tabId);

        if (!currentBtn.classList.contains('catalog__tab_active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('catalog__tab_active');
            })
            tabsContent.forEach(function (item) {
                item.classList.remove('catalog__content_active');
            })

            currentBtn.classList.add('catalog__tab_active');
            currentContent.classList.add('catalog__content_active');
        }
    })
}
document.querySelector('.catalog__tab').click();



function toggleSlide(itemClass) {
    itemClass.forEach(function (item, index) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.catalog-item__content')[index].classList.toggle('catalog-item__content_active');
            document.querySelectorAll('.catalog-item__list')[index].classList.toggle('catalog-item__list_active');
        })
    })
}
toggleSlide(contentLinks);
toggleSlide(contentBacks);


