document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('portfolio-carousel');
  if (!container) return;

  var prevButtons = document.querySelectorAll('.portfolio-prev');
  var nextButtons = document.querySelectorAll('.portfolio-next');

  function scroll(amount) {
    container.scrollBy({ left: amount, behavior: 'smooth' });
  }

  function onNext() {
    var amount = Math.round(container.clientWidth * 0.85);
    scroll(amount);
  }

  function onPrev() {
    var amount = Math.round(container.clientWidth * 0.85);
    scroll(-amount);
  }

  prevButtons.forEach(function (b) { b.addEventListener('click', onPrev); });
  nextButtons.forEach(function (b) { b.addEventListener('click', onNext); });

  // Optional: allow keyboard arrow navigation when focus inside carousel
  container.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  });
});
