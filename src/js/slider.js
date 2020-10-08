
//import Swiper, { Navigation, Pagination } from 'swiper';
import Swiper from '../js/vendor/swiper.min.js';

//HERO SLIDER

const mySwiper = new Swiper(document.querySelector('.swiper-container'), {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
      },
});

//SERVICES INFO SLIDER
 
const sliderServicesInfo = document.querySelector('.swiper-container-services-info');
const mySwiperServicesInfo = new Swiper(sliderServicesInfo, {
    speed: 1000,
    updateOnWindowResize: true,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 100,
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination-services',
        type: "bullets",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        768: {
            speed: 500,
            grabCursor: false,
            longSwipes: true,
            allowTouchMove: false,
        }
    }
});

// SERVICES IMAGES SLIDER

const sliderServicesImages = document.querySelector('.swiper-container-services-images');
const mySwiperServicesImages = new Swiper(sliderServicesImages, {
    sliderPerView: 1,
    effect: "fade",
    fadeEffect: {
        crossFade: true
      },
    pagination: {
        type: "bullets",
        clickable: true,
    }
});

mySwiperServicesImages.controller.control = mySwiperServicesInfo;
mySwiperServicesInfo.controller.control = mySwiperServicesImages;

const sliderStudyInfo = document.querySelector('.swiper-container-study-info');
const sliderStudyImages = document.querySelector('.swiper-container-study-images');

//SWIPER STUDY INFO SLIDER

const mySwiperStudyInfo = new Swiper(sliderStudyInfo, {
    sliderPerView: 1,
    speed: 700,
    spaceBetween: 50,
    pagination: {
        el: '.swiper-pagination-study',
        type: "bullets",
        clickable: true,
    },
})

// SWIPER STUDY IMAGES SLIDER

const mySwiperStudyImages = new Swiper(sliderStudyImages, {
    sliderPerView: 1,
    effect: "fade",
    pagination: {
        type: "bullets",
        clickable: true,
    }
});

mySwiperStudyImages.controller.control = mySwiperStudyInfo;
mySwiperStudyInfo.controller.control = mySwiperStudyImages;

// находит высоту элемента слайда с учетом внешних отступов
function getAbsoluteHeight(el) {
    el = (typeof el === 'string') ? document.querySelector(el) : el; 
  
    let styles = window.getComputedStyle(el);
    let margin = parseFloat(styles['marginTop']) +
                 parseFloat(styles['marginBottom']);
  
    return Math.ceil(el.offsetHeight + margin);
  }

// находит высоту самого высокого элемента, умножает на их количество и присваивает значение контейнеру слайдера

let serviceItem = document.querySelectorAll('.service-item');
function getServiceItemHeight () {
    let h = 0;
    let serviceItemHeight;
    for (let i = 0; i < serviceItem.length; i++) {
        serviceItemHeight = getAbsoluteHeight(serviceItem[i]);
        if (serviceItemHeight > h) {
            h = serviceItemHeight;
        };
    }
    sliderServicesInfo.style.height = (h * mySwiperServicesInfo.slides[0].children.length + 'px');
    mySwiperServicesInfo.updateSlides ();
    mySwiperServicesInfo.updateSize () ;
};

// выполняет функцию при ресайзе и загрузки страницы

document.addEventListener("DOMContentLoaded", () => {
    getServiceItemHeight();
});

window.addEventListener('resize', () => {
    getServiceItemHeight();
});

setTimeout(getServiceItemHeight, 500);
