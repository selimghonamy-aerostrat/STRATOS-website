/* AeroStrat walkthrough booking (Google Calendar appointment schedule).
   The only place the booking URLs live. Loaded on /contact before the page script. */
window.AEROSTRAT_BOOKING = {
  url: 'https://calendar.app.google/ie7trdYW8LCVbNtG6',
  embedUrl: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2SCpVNEUtlr0wX-SaSmm0k9F6W5o3NoJrB2YQX731jGOCXXjHyFJwmUdGoUs0WD-IB350MH3fB?gv=true'
};

/* Arriving on /contact#book: the live page replaces the pre-rendered copy after load,
   so line the #book section up again once the live version is drawn. */
(function () {
  if (location.hash !== '#book') return;
  var tries = 0;
  var t = setInterval(function () {
    var el = document.querySelector('#dc-root #book');
    if (el || ++tries > 50) {
      clearInterval(t);
      if (el && location.hash === '#book') {
        el.scrollIntoView({ block: 'start' });
      }
    }
  }, 100);
})();
