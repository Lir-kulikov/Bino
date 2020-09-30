import { CountUp } from 'countup.js';

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




// if (!countUp.error) {
//   countUp.start();
// } else {
//   console.error(countUp.error);
// }


// if (!countUp2.error) {
  
// } else {
//   console.error(countUp2.error);
// }


// if (!countUp3.error) {
//   countUp3.start();
// } else {
//   console.error(countUp3.error);
// }

// if (!countUp4.error) {
//   countUp4.start();
// } else {
//   console.error(countUp4.error);
// }


// if (!countUp5.error) {
//   countUp5.start();
// } else {
//   console.error(countUp5.error);
// }