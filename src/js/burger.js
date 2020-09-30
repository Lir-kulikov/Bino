const burger = document.querySelector('.mobile-menu');
const scrollFixed = document.querySelector('body');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
});

for(i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        burger.classList.remove('is-active');
        nav.classList.remove('is-active');
    });
}



