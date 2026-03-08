// timeline.js
(function() {
  // Animate timeline cards on scroll
  function animateTimeline() {
    var events = document.querySelectorAll('.timeline-event');
    events.forEach(function(event) {
      var rect = event.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        event.classList.add('visible');
      } else {
        event.classList.remove('visible');
      }
    });
  }
  window.addEventListener('scroll', animateTimeline);
  animateTimeline();

  // Expand/collapse details on click
  var events = document.querySelectorAll('.timeline-event');
  events.forEach(function(event) {
    event.addEventListener('click', function() {
      events.forEach(function(e) { e.classList.remove('active'); });
      event.classList.add('active');
    });
  });
})();
