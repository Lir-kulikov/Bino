import { CountUp } from '../js/vendor/countUp.withPolyfill.min.js';

const count1 = document.querySelector('.js-count-1');
const count2 = document.querySelector('.js-count-2');
const count3 = document.querySelector('.js-count-3');
const count4 = document.querySelector('.js-count-4');
const count5 = document.querySelector('.js-count-5');
const section = document.querySelector('.amount');
const numbers = document.querySelectorAll('.item-amount__number');

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

var fired = false;
window.addEventListener('scroll', () => {
  let pageYOffset = window.pageYOffset;

  let amountOffset = section.offsetTop;

  if (pageYOffset >= amountOffset - 400 && fired === false) {
    countUp.start();
    countUp2.start();
    countUp3.start();
    countUp4.start();
    countUp5.start();
    for (let number of numbers) {
      number.classList.add('is-view')
    }
    fired = true;
  }
}, true);

