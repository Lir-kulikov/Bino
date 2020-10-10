//import smoothscroll from 'smoothscroll-polyfill';
// import smoothscrollPolyfill from 'smoothscroll-polyfill';
// import smoothscrollAnchorPolyfill from 'smoothscroll-anchor-polyfill';
// smoothscrollPolyfill.polyfill();
// обновление значений при ресайзе

// function smoothScroll (target, duration) {
//   let target = document.querySelector(target);
//   let targetPosition = target.getBoundingClientRect().top;
//   let startPosition = window.pageYOffset;
//   let distance = targetPosition - startPosition

//   function animation (currentTime) {
//     if (startTime === null) startTime = currentTime;
//     let timeElapsed = currentTime - startTime;
//     let run = ease(timeElapsed, startPosition, distance, duration);
//     window.scrollTo(0, run);
//     if (timeElapsed < duration) requestAnimationFrame(animation);
//     console.log('timeElapsed : ' + timeElapsed + 'duration: ' + duration);
//   }

//   function ease (t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t + b;
//     t--;
//     return -c / 2 * (t * (t - 2) -1) + b;
//   }

//   requestAnimationFrame(animation);
// }

import SmoothScroll from 'smooth-scroll';

var scroll = new SmoothScroll('a[href*="#"]');

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