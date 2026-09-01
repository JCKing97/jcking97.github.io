document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('portfolio-carousel');
  var prev = document.getElementById('portfolio-prev');
  var next = document.getElementById('portfolio-next');
  if (!container || !prev || !next) return;

  function scroll(amount) {
    container.scrollBy({ left: amount, behavior: 'smooth' });
  }

  next.addEventListener('click', function () {
    var amount = Math.round(container.clientWidth);
    scroll(amount);
  });

  prev.addEventListener('click', function () {
    var amount = Math.round(container.clientWidth);
    scroll(-amount);
  });

  // Optional: allow keyboard arrow navigation when focus inside carousel
  container.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') next.click();
    if (e.key === 'ArrowLeft') prev.click();
  });
});
