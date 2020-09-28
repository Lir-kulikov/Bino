(function () {
  equalHeight(false);
})();

window.onresize = function() {
  equalHeight(true);
}

function equalHeight(resize) {
  let elements = document.querySelectorAll('.js-equal-height'),
  allHeight = [],
  i = 0;

  if (resize == true) {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.height = 'auto';
    }
  }

  for (i = 0; i < elements.length; i++) {
    let elementHeight = elements[i].clientHeight;
    allHeight.push(elementHeight);
  }

  for (i = 0; i < elements.length; i++) {
    elements[i].style.height = Math.max.apply(Math, allHeight) + 'px';
  }
}