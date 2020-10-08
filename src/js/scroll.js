//import '../../node_modules/zenscroll/zenscroll-min.js';
//import zenscroll from 'zenscroll'
import smoothscroll from 'smoothscroll-polyfill';
import '../../node_modules/smoothscroll-anchor-polyfill';
smoothscroll.polyfill();


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