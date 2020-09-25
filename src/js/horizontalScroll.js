const $navList = document.querySelector('.works-nav__list');
const $body = document.querySelector('body');
const $shadowStart = document.querySelector('.works-nav__shadow--start');
const $shadowEnd = document.querySelector('.works-nav__shadow--end');

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

$body.addEventListener('click', (e) => {
  const $target = e.target;
  const isLink = $target.getAttribute('href').indexOf('#') === 0;
  
  if (isLink) {
    e.preventDefault();
    activateItem($target, $navList);
  }
});

handleShadowVisibility();