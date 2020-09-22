import Rellax from '../../node_modules/rellax/rellax.min.js';

const wrapper = document.querySelector('.amount');
const wrapperStart = document.querySelector('.start')

const rellax = new Rellax('.js-parallax', {
  wrapper: wrapper,
  // speed: -2,
  relativeToWrapper: true,
});

const rellaxStart = new Rellax('.js-parallax-start', {
  wrapper: wrapperStart,
  relativeToWrapper: true,
});

window.addEventListener('scroll', function () {
  rellax.refresh()
  rellaxStart.refresh()
});

// window.addEventListener('scroll', function () {
//   rellaxStart.refresh()
// });


