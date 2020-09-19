// import '../../node_modules/swiper/dist/js/swiper.min.js';
// import Swiper from 'swiper'
import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);

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
    grabCursor: true,
    spaceBetween: 100,
    direction: 'vertical',
    navigation: {
        nextEl: '.swiper-button-next-service',
        prevEl: '.swiper-button-prev-service',
      },
    pagination: {
        el: '.swiper-pagination-services',
        type: "bullets",
        clickable: true,
        progressbarOpposite: true
    },
});

const sliderServicesImages = document.querySelector('.swiper-container-services-images');
const mySwiperServicesImages = new Swiper(sliderServicesImages, {
    sliderPerView: 1,
    effect: "fade",
    fadeEffect: {
        crossFade: true
      },
    pagination: {
        el: '.swiper-pagination-services',
        type: "bullets",
        clickable: true,
    },
});

mySwiperServicesImages.controller.control = mySwiperServicesInfo;
mySwiperServicesInfo.controller.control = mySwiperServicesImages;

const sliderStudyInfo = document.querySelector('.swiper-container-study-info');

const mySwiperStudyInfo = new Swiper(sliderStudyInfo, {
    sliderPerView: 1,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination-study',
        type: "bullets",
        clickable: true,
    },
})
