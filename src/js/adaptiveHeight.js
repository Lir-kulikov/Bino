function getMaxHeight(className) {
  var max = 0;
  document.querySelectorAll(className).forEach(
    function(el) {
      console.info(Math.max(el.scrollHeight, max));
      if (el.scrollHeight > max) {
        max = el.scrollHeight;
      }
    }
  );
  return max;
}

function setHeight(className, height) {
  document.querySelectorAll(className).forEach(
    function(el) {
      el.style.height = height+'px';
    }
  );
}
var max = getMaxHeight('.feature-card__title');
setHeight('.feature-card__title', max);
setTimeout(window.onresize = getMaxHeight('.feature-card__title'), 500);
setTimeout(window.onresize = setHeight('.feature-card__title', max), 500);