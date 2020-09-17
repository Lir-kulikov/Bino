// import '../../node_modules/swiper/dist/js/swiper.min.js';
import Swiper from 'swiper'

var mySwiper = new Swiper(document.querySelector('.swiper-container'), {
    slidesPerView: 1,
    speed: 1000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
      },
});

