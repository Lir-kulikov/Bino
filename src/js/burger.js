const burger = document.querySelector('.mobile-menu');
const scrollFixed = document.querySelector('body');
const nav = document.querySelector('.nav');

burger.onclick = () => {
    burger.classList.toggle("is-active");
    nav.classList.toggle("is-active");
}