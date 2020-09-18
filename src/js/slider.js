// import '../../node_modules/swiper/dist/js/swiper.min.js';
import Swiper from 'swiper'

const mySwiper = new Swiper(document.querySelector('.swiper-container'), {
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
 
const sliderServicesInfo = document.querySelector('.swiper-container-services-info');
const mySwiperServicesInfo = new Swiper(sliderServicesInfo, {
    sliderPerView: 1,
    speed: 1000,
    spaceBetween: 100,
    direction: 'vertical',
    pagination: {
        el: 'swiper-paginations-services-info',
        clickable: true,
    }
});

// const sliderServicesImages = document.querySelector('.swiper-container-services-images');
// const mySwiperServicesImages = new Swiper(sliderServicesImages, {
//     sliderPerView: 1,
//     effect: fade,
// });
