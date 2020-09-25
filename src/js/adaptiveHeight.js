// function getMaxHeight(className) {
//   let max = 0;
//   document.querySelectorAll(className).forEach(
//     function(el) {
//       console.info(Math.max(el.scrollHeight, max));
//       if (el.scrollHeight > max) {
//         max = el.scrollHeight;
//       }
//     }
//   );
//   return max;
// }

// function setHeight(className, height) {
//   document.querySelectorAll(className).forEach(
//     function(el) {
//       el.style.height = height+'px';
//     }
//   );
// }
// let max = getMaxHeight('.feature-card__title');
// setHeight('.feature-card__title', max);
// window.addEventListener('resize', () => { getMaxHeight('.feature-card__title')});
// window.addEventListener('resize', () => { setHeight('.feature-card__title', max) });

// let maxHeight = -1;
// $('.slick-slide').each(function() {
//   if ($(this).height() > maxHeight) {
//     maxHeight = $(this).height();
//   }
// });
// $('.slick-slide').each(function() {
//   if ($(this).height() < maxHeight) {
//     $(this).css('margin', Math.ceil((maxHeight-$(this).height())/2) + 'px 0');
//   }
// });

// let maxHeight = -1;

// let slideHeight = document.querySelectorAll('.swiper-slide');

// console.log(slideHeight);

// slideHeight.forEach(function() {
//   console.log(slideHeight.offsetHeight);
// })
