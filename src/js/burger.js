const burger = document.querySelector('.mobile-menu');
const body = document.querySelector('body');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
    
    if (overlay.classList.contains('is-show')) {
        overlay.classList.remove('is-show');
    } else {
        overlay.classList.add('is-show');
    }

    body.classList.toggle('is-fixed');

    if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        if(nav.classList.contains('is-active')) {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
      }
});

for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        burger.classList.remove('is-active');
        nav.classList.remove('is-active');
        overlay.classList.remove('is-show');
    });
}
//отключение overflow hidden на body при нажатии на навигацию
navLinks.forEach(function(elem) {
    elem.addEventListener('click', () => body.classList.remove('is-fixed'));
})

overlay.addEventListener('click', () => {
    burger.classList.remove('is-active');
    nav.classList.remove('is-active');
    overlay.classList.remove('is-show');
    body.classList.toggle('is-fixed');
})



