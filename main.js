var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    loop: true,
    centerSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },

    },

});