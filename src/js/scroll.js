import SmoothScroll from '../../node_modules/smooth-scroll/dist/smooth-scroll.min.js';

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true
});

const topBtn = document.querySelector('.scroll-to-top');
const top = document.querySelector('.header');

// обновление значений при ресайзе

window.addEventListener('resize', () => {
  showScroll();
});
window.addEventListener('scroll', () => {
  showScroll();
});

// показ и скрытие кнопки скролла наверх

function showScroll() {
  let heroHeight = document.querySelector('.hero').offsetHeight;
  if (window.scrollY > heroHeight) {
    document.querySelector('.scroll-to-top').classList.add('is-show');
  } else {
    document.querySelector('.scroll-to-top').classList.remove('is-show');
  }
}