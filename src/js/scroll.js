const topBtn = document.querySelector('.scroll-to-top');
const heroHeight = document.querySelector('.hero').offsetHeight;
const top = document.querySelector('.header');
const links = document.querySelectorAll('.scroll');

// обновление значений при ресайзе

// window.onresize = () => {heroHeight = document.querySelector('.hero').offsetHeight}

// показ и скрытие кнопки скролла наверх

window.onscroll = (e) => {
  if (window.scrollY > heroHeight) {
    document.querySelector('.scroll-to-top').classList.add('is-show');
  } else {
    document.querySelector('.scroll-to-top').classList.remove('is-show');
  }
}

// плавный скролл наверх

// for (const link of links) {
//   link.addEventListener('click', clickHandler);
// }

// topBtn.addEventListener('click', clickHandler);

// function clickHandler(e) {
//   e.preventDefault();
//   const href = this.getAttribute('href');
//   const offsetTop = document.querySelector(href).offsetTop;
 
//   scroll({
//     top: offsetTop - 100,
//     behavior: 'smooth'
//   });
// }

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
