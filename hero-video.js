// Keeps background videos (<video data-bg-video>) playing on every browser,
// including Safari/iOS, which can block or pause muted autoplay.
(function () {
  function kick(v) {
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
    return vs;
  }
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
