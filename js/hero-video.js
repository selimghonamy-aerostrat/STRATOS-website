// Keeps background videos (<video data-bg-video>) playing on every browser,
// including Safari/iOS, which can block or pause muted autoplay, unless the visitor
// paused it (button [data-video-toggle]) or prefers reduced motion. The shared flag
// window.__aerostratVideoPaused is also read by the home page's own play loop.
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.__aerostratVideoPaused = !!reduce;
  function label() {
    var paused = window.__aerostratVideoPaused;
    document.querySelectorAll('[data-video-toggle]').forEach(function (b) {
      var t = paused ? 'Play video' : 'Pause video', pr = paused ? 'true' : 'false';
      // write only on change: the MutationObserver below would otherwise loop
      if (b.textContent !== t) b.textContent = t;
      if (b.getAttribute('aria-pressed') !== pr) b.setAttribute('aria-pressed', pr);
    });
  }
  function kick(v) {
    if (window.__aerostratVideoPaused) { if (!v.paused) v.pause(); return; }
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute('muted', '');
    v.playsInline = true;
    v.loop = true;
    if (v.paused) {
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    }
  }
  function wire(v) {
    if (v.__bgWired) return;
    v.__bgWired = true;
    v.addEventListener('pause', function () { setTimeout(function () { kick(v); }, 300); });
    v.addEventListener('ended', function () { v.currentTime = 0; kick(v); });
    v.addEventListener('canplay', function () { kick(v); });
    kick(v);
  }
  function scan() {
    var vs = document.querySelectorAll('video[data-bg-video]');
    for (var i = 0; i < vs.length; i++) wire(vs[i]);
    label();
    return vs;
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-video-toggle]');
    if (!b) return;
    window.__aerostratVideoPaused = !window.__aerostratVideoPaused;
    var vs = document.querySelectorAll('video[data-bg-video]');
    for (var i = 0; i < vs.length; i++) { if (window.__aerostratVideoPaused) vs[i].pause(); else kick(vs[i]); }
    label();
  });
  function kickAll() {
    var vs = scan();
    for (var i = 0; i < vs.length; i++) kick(vs[i]);
  }
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('visibilitychange', function () { if (!document.hidden) kickAll(); });
  window.addEventListener('pageshow', kickAll);
  ['touchstart', 'click', 'scroll', 'keydown'].forEach(function (e) {
    window.addEventListener(e, kickAll, { passive: true });
  });
  setInterval(kickAll, 4000);
})();
