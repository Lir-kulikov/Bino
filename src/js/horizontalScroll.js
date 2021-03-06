
const $navList = document.querySelector('.js-horizontal-scroll');
const $body = document.querySelector('body');
const $shadowStart = document.querySelector('.js-shadow-start');
const $shadowEnd = document.querySelector('.js-shadow-end');

function handleShadowVisibility() {
  const maxScrollStartReached = $navList.scrollLeft <= 0;
  const maxScrollEndReached = $navList.scrollLeft >= $navList.scrollWidth - $navList.offsetWidth;

  toggleShadow($shadowStart, maxScrollStartReached);
  toggleShadow($shadowEnd, maxScrollEndReached);
}

function toggleShadow($el, maxScrollReached) {
  const shadowIsVisible = $el.classList.contains('is-visible');
  const showShadow = !maxScrollReached && !shadowIsVisible;
  const hideShadow = maxScrollReached && shadowIsVisible;

  if (showShadow) {
    window.requestAnimationFrame(() => $el.classList.add('is-visible'));
  } else if (hideShadow) {
    window.requestAnimationFrame(() => $el.classList.remove('is-visible'));
  }
}

$navList.addEventListener('scroll', (e) => handleShadowVisibility(e));

document.addEventListener("DOMContentLoaded", () => {
  handleShadowVisibility();
});

addEventListener('resize', () => {
  handleShadowVisibility();
});

