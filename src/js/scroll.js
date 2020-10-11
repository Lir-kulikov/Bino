import SmoothScroll from 'smooth-scroll';

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 600,
	speedAsDuration: true
});

window.addEventListener('resize', () => {
  showScroll();
});
window.addEventListener('scroll', () => {
  showScroll();
});

// показ и скрытие кнопки скролла наверх

function showScroll() {
  let heroHeight = document.querySelector('.hero').offsetHeight;
  if (window.pageYOffset > heroHeight) {
    document.querySelector('.scroll-to-top').classList.add('is-show');
  } else {
    document.querySelector('.scroll-to-top').classList.remove('is-show');
  }
}

