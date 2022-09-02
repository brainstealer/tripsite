/* Carousel */

const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop:  true,
    margin: 30,
    startPosition: 0,
    items: 1,
    responsive: {
        540: {
            items: 3,
            startPosition: 1,
        },
        1200: {
            items: 3,
            margin: 30,
        }
    },
});





$('.slider__btn--prev').click(function() {

    owl.trigger('prev.owl.carousel', [300]);
})

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

/* Nac icon */

const navBtn = document.querySelector('.menu_icon_wrapper');
const menuIcon = document.querySelector('.menu_icon')
const nav = document.querySelector('.nav')


navBtn.onclick = function(){
    nav.classList.toggle('nav__mobile');
    menuIcon.classList.toggle('menu_icon_active');
    document.body.classList.toggle('no_scroll')
}

