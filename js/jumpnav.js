// Sticky "On this page" bar: sits under the fixed header, highlights the section in
// view and scrolls to a section on click. Works on the live page only (#dc-root).
(function () {
  'use strict';
  var css = '.aerostrat-jumpnav a:hover{color:#fff !important}' +
    '.aerostrat-jumpnav a[aria-current="true"]{color:#fff !important;box-shadow:inset 0 -2px 0 #3F9EE8}' +
    '.aerostrat-jumpnav a:focus-visible{outline:2px solid #3F9EE8;outline-offset:-2px}' +
    '.aerostrat-jumpnav>div::-webkit-scrollbar{display:none}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ticking = false, current = null;

  function parts() {
    var nav = document.querySelector('#dc-root .aerostrat-jumpnav');
    if (!nav) return null;
    var header = document.querySelector('#dc-root header');
    var hb = header ? Math.max(0, header.getBoundingClientRect().bottom) : 0;
    return { nav: nav, hb: hb, links: [].slice.call(nav.querySelectorAll('a[data-jump]')) };
  }
  function update() {
    ticking = false;
    var p = parts(); if (!p) return;
    document.documentElement.style.setProperty('--aerostrat-hdr', Math.round(p.hb) + 'px');
    var line = p.hb + p.nav.offsetHeight + 24, active = null;
    p.links.forEach(function (a) {
      var t = document.getElementById(a.getAttribute('data-jump'));
      if (t && t.getBoundingClientRect().top <= line) active = a;
    });
    if (active === current) return;
    current = active;
    p.links.forEach(function (a) { if (a === active) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
    if (active) {
      var strip = active.parentElement, l = active.offsetLeft, r = l + active.offsetWidth;
      if (l < strip.scrollLeft || r > strip.scrollLeft + strip.clientWidth) strip.scrollLeft = l - 16;
    }
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('#dc-root .aerostrat-jumpnav a[data-jump]');
    if (!a) return;
    var t = document.getElementById(a.getAttribute('data-jump')), p = parts();
    if (!t || !p) return;
    e.preventDefault();
    var y = t.getBoundingClientRect().top + window.scrollY - p.hb - p.nav.offsetHeight - 8;
    window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
    if (history.replaceState) history.replaceState(null, '', '#' + t.id);
  });
  var tries = 0, iv = setInterval(function () { update(); if (++tries > 20 || document.querySelector('#dc-root .aerostrat-jumpnav')) clearInterval(iv); }, 250);
})();
