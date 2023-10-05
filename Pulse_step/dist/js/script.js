// tiny-slider
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    // nav: false,
    // responsive: {
    //     767: {

    //         edgePadding: 20,
    //         gutter: 20,
    //         items: 2
    //     },
    // },
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});





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


// Modals 

let consBtn = document.querySelectorAll("[data-modal='consultation']");
let miniBtn = document.querySelectorAll('.button_mini');
let overlay = document.querySelector('.overlay');
let consultModal = document.querySelector('#consultation');
let orderModal = document.querySelector('#order');
let thanksModal = document.querySelector('#thanks');
let closeModal = document.querySelectorAll('.modal__close');


// When the user clicks on the button (consBtn), open the modal
consBtn.forEach(openConsModal);

function openConsModal(item) {
    item.addEventListener('click', function () {
        overlay.style.display = 'block';
        consultModal.style.display = 'block';
    })
}

// When the user clicks on the button (miniBtn), open the modal
miniBtn.forEach(openOrdModal);

function openOrdModal(item) {
    item.addEventListener('click', function () {
        overlay.style.display = 'block';
        orderModal.style.display = 'block';
    })
}

// When the user clicks on the button (miniBtn), change desc width product name in the modal
miniBtn.forEach(function (item, index) {
    item.addEventListener('click', function () {
        let orderText = document.querySelector('#order .modal__desc');
        let itemText = document.querySelectorAll('.catalog-item__subtitle')[index].textContent
        orderText.textContent = itemText;
    })
});

// When the user clicks on closeModal (x), close the modal
closeModal.forEach(function closeMod(item) {
    item.addEventListener('click', function () {
        overlay.style.display = 'none';
        consultModal.style.display = 'none';
        orderModal.style.display = 'none';
        thanksModal.style.display = 'none';
    })
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
    if (event.target == overlay) {
        overlay.style.display = 'none';
        consultModal.style.display = 'none';
        orderModal.style.display = 'none';
        thanksModal.style.display = 'none';
    }
})


// Modal Validation
function validateForms(form) {

}

$(document).ready(function () {
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Please specify your name", // if user left input empty
                phone: "Please specify your phone number", // if user left input empty
                email: {
                    required: "We need your email address to contact you",     // if user left input empty
                    email: "Your email address must be in the format of name@domain.com"    // if user typed uncorrect email
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');



    //Masked input phone
    $('input[name=phone]').mask("+58 999-999-999");



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

    // WOW - Reveal Animations When Scrolling
    new WOW().init();
})

