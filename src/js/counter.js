import { CountUp } from '../js/vendor/countUp.withPolyfill.min.js';

const count1 = document.querySelector('.js-count-1');
const count2 = document.querySelector('.js-count-2');
const count3 = document.querySelector('.js-count-3');
const count4 = document.querySelector('.js-count-4');
const count5 = document.querySelector('.js-count-5');
const section = document.querySelector('.amount');

const countUp = new CountUp(count1, 3891, {
  duration: 3,
  smartEasingThreshold: 3891,
  useGrouping: false,
});
const countUp2 = new CountUp(count2, 281, {
  duration: 3,
});
const countUp3 = new CountUp(count3, 618, {
  duration: 3,
});
const countUp4 = new CountUp(count4, 178, {
  duration: 3,
});
const countUp5 = new CountUp(count5, 285, {
  duration: 3,
});

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;

  let amountOffset = section.offsetTop;

  if (scrollY >= amountOffset - 600) {
    countUp.start();
    countUp2.start();
    countUp3.start();
    countUp4.start();
    countUp5.start();
  }
});

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");

if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
  count1.innerHTML = '3891'
  count2.innerHTML = '281'
  count3.innerHTML = '618'
  count4.innerHTML = '178'
  count5.innerHTML = '285'
}