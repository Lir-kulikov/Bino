//import smoothscroll from 'smoothscroll-polyfill';
// import smoothscrollPolyfill from 'smoothscroll-polyfill';
// import smoothscrollAnchorPolyfill from 'smoothscroll-anchor-polyfill';
// smoothscrollPolyfill.polyfill();

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