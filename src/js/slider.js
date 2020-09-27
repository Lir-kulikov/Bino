// import '../../node_modules/swiper/dist/js/swiper.min.js';
// import Swiper from 'swiper'
import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);

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
 
const sliderServicesInfo = document.querySelector('.swiper-container-services-info');
const mySwiperServicesInfo = new Swiper(sliderServicesInfo, {
    //sliderPerView: 1,
    speed: 1000,
    slidesPerView: 1,
    //autoHeight: true,
    grabCursor: true,
    //spaceBetween: 100,
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
    }
});

mySwiperServicesImages.controller.control = mySwiperServicesInfo;
mySwiperServicesInfo.controller.control = mySwiperServicesImages;

const sliderStudyInfo = document.querySelector('.swiper-container-study-info');

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


let serviceItem = document.querySelectorAll('.service-item');
function getServiceItemHeight () {
    let h = 0;
    let serviceItemHeight;
    for (let i = 0; i < serviceItem.length; i++) {
        serviceItemHeight = serviceItem[i].offsetHeight;
        if (serviceItemHeight > h) {
            h = serviceItemHeight;
        };
    }
    sliderServicesInfo.style.height = ((h + 55) * 3 - 55 + 'px');
};

document.addEventListener("DOMContentLoaded", getServiceItemHeight);

window.addEventListener('resize', () => {
    getServiceItemHeight()
});

// const wrapper = sliderServicesInfo.children[0];
// const slide = wrapper.children;
// console.log(slide)
// function getServiceItemHeight () {
//     let h = 0;
//     let slideHeight;
//     for (let i = 0; i < slide.length; i++) {
//         slideHeight = slide[i].offsetHeight;
//         console.log(slideHeight);
//         if (slideHeight > h) {
//             h = slideHeight;
//         };
//     }
//     sliderServicesInfo.style.height = h / 3 + 'px';
// };

// document.addEventListener("DOMContentLoaded", getServiceItemHeight);

// window.addEventListener('resize', () => {
//     getServiceItemHeight()
// });


/* 
1. свайпер контейнер
2. свайпер слайд
3 сервис итем

1. найти сумму высот сервис итемов слайда с учтом отступов
2. дать эту сумму родителю (слайду)
3. передать высоту контейнеру

*/
// const wrapper = sliderServicesInfo.children[0];
// const slide = wrapper.children;
// function adaptiveSlide () {
    
//     let slideHeight = 0;
//     for(let i = 0; i < slide.length; i++) {
//         slideHeight = slide[i].offsetHeight;
//         console.log(slideHeight);
//         sliderServicesInfo.style.height = slideHeight + 100 + 'px';
//         // if (slide[i].classList.contains('swiper-slide-active')) {
//         //     sliderServicesInfo.style.height = slideHeight + 100 + 'px';
//         // }
//         //sliderHeight += slideHeight;
//     }
//     //console.log(slideHeight);
// }

// document.addEventListener("DOMContentLoaded", adaptiveSlide());
// window.addEventListener("resize", adaptiveSlide());
//sliderServicesInfo.style.height = 1000 + 'px';

// mySwiperServicesInfo.on('slideChange', function () {
//     console.log('slide changed');
//   });

