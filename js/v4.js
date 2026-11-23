/* AeroStrat v4 behaviour. One passive scroll listener (rAF), IntersectionObserver for the rest.
   Scroll-linked effects write only transform, opacity and clip-path (through custom properties). */
(function () {
  var W = window, D = document, H = D.documentElement;
  var reduce = W.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var motion = !reduce;
  if (motion) H.classList.add('v4-motion');
  var $ = function (s, r) { return Array.prototype.slice.call((r || D).querySelectorAll(s)); };
  var clamp = function (x) { return x < 0 ? 0 : x > 1 ? 1 : x; };
  var vh = W.innerHeight;

  /* ---- Header: mobile sheet ---- */
  var menuBtn = D.querySelector('.v4-menu'), sheet = D.getElementById('v4-sheet');
  if (menuBtn && sheet) {
    menuBtn.addEventListener('click', function () {
      var open = menuBtn.getAttribute('aria-expanded') !== 'true';
      menuBtn.setAttribute('aria-expanded', open); sheet.classList.toggle('open', open);
      D.body.style.overflow = open ? 'hidden' : '';
    });
    D.addEventListener('keydown', function (e) { if (e.key === 'Escape' && sheet.classList.contains('open')) menuBtn.click(); });
  }

  /* ---- Hero video: poster first, video after load, paused off-screen ---- */
  var vid = D.querySelector('[data-hero-video]');
  if (vid && motion && !(navigator.connection && navigator.connection.saveData)) {
    var startVid = function () {
      vid.src = W.innerWidth < 760 && vid.dataset.srcSm ? vid.dataset.srcSm : vid.dataset.src;
      var p = vid.play(); if (p && p.catch) p.catch(function () {});
      new IntersectionObserver(function (es) { es.forEach(function (e) { e.isIntersecting ? vid.play().catch(function () {}) : vid.pause(); }); }).observe(vid);
    };
    if (D.readyState === 'complete') startVid(); else W.addEventListener('load', startVid);
  }

  /* ---- Statements: words light up (screen readers read the plain copy) ---- */
  var statements = $('[data-statement]').map(function (el) {
    var t = el.querySelector('.v4-statement-t');
    var plain = D.createElement('span'); plain.className = 'v4-sr'; plain.textContent = t.textContent.replace(/\s+/g, ' ').trim();
    var vis = D.createElement('span'); vis.setAttribute('aria-hidden', 'true');
    // keep <strong> runs: walk child nodes
    Array.prototype.slice.call(t.childNodes).forEach(function (n) {
      var strong = n.nodeType === 1 && n.tagName === 'STRONG';
      (n.textContent || '').split(/(\s+)/).forEach(function (w) {
        if (!w) return;
        if (/^\s+$/.test(w)) { vis.appendChild(D.createTextNode(' ')); return; }
        var s = D.createElement(strong ? 'strong' : 'span'); s.className = 'w'; s.textContent = w; vis.appendChild(s);
      });
    });
    t.textContent = ''; t.appendChild(plain); t.appendChild(vis);
    return { el: el, words: $('.w', vis), last: -1 };
  });

  /* ---- Geometry cache (document offsets), refreshed on resize ---- */
  var items = [];
  function top(el) { var y = 0; while (el) { y += el.offsetTop; el = el.offsetParent; } return y; }
  function measure() {
    vh = W.innerHeight;
    items.forEach(function (it) { it.y = top(it.el); it.h = it.el.offsetHeight; });
  }
  function add(kind, el, extra) { var it = { kind: kind, el: el }; for (var k in extra) it[k] = extra[k]; items.push(it); return it; }

  var hero = D.querySelector('[data-hero]');
  if (hero && motion) add('hero', hero);
  $('[data-bridge]').forEach(function (el) { add('bridge', el, { to: el.dataset.to || 'dark', from: el.dataset.from || 'dark' }); });
  $('[data-zoom]').forEach(function (el) { add('zoom', el, { tile: el.querySelector('.v4-zoom-tile') }); });
  $('[data-story]').forEach(function (el) {
    add('story', el, { slides: $('[data-slide]', el), tabs: $('.v4-tab', el), k: -1 });
  });
  statements.forEach(function (s) { add('statement', s.el, { s: s }); });

  /* ---- Theme: switches only while full-screen media covers the viewport ---- */
  var theme = H.getAttribute('data-theme') || 'dark';
  function setTheme(t) { if (t !== theme) { theme = t; if (t === 'dark') H.removeAttribute('data-theme'); else H.setAttribute('data-theme', t); } }
  function wantedTheme(y) { // theme of the stretch the viewport centre is in
    var t = 'dark';
    items.forEach(function (it) { if (it.kind === 'bridge' && y + vh / 2 > it.y + it.h / 2) t = it.to; });
    return t;
  }

  /* ---- Frame ---- */
  var ticking = false;
  function frame() {
    ticking = false;
    var y = W.scrollY, covered = false, nearBridge = false;
    for (var i = 0; i < items.length; i++) {
      var it = items[i], rel = y - it.y; // px scrolled into the element
      if (rel < -vh * 1.2 || rel > it.h + vh * .2) { if (it.kind !== 'story') continue; }
      if (it.kind === 'hero') {
        it.el.style.setProperty('--p', clamp(y / (vh * .6)).toFixed(4));
      } else if (it.kind === 'bridge') {
        var run = it.h - vh;                         // sticky distance
        var pe = clamp((rel + vh * .35) / (run * .42)); // expand phase
        it.el.style.setProperty('--p', motion ? pe.toFixed(4) : 1);
        if (rel > -vh && rel < it.h) nearBridge = true;
        // covered: fully expanded and stage pinned
        var sw = run * .62, hold0 = run * .42 - vh * .35;
        it.el.style.setProperty('--ft', motion ? (1 - clamp((rel - hold0) / (sw - hold0))).toFixed(3) : 0);
        it.el.style.setProperty('--fb', motion ? clamp((rel - sw) / (run - sw)).toFixed(3) : 0);
        if (pe >= 1 && rel >= 0 && rel <= run) {
          covered = true;
          setTheme(rel > sw ? it.to : it.from);
        }
      } else if (it.kind === 'zoom') {
        var zr = clamp(rel / ((it.h - vh) * .85));
        var e = zr * zr * (3 - 2 * zr);              // smoothstep
        var big = Math.hypot(W.innerWidth, vh) * 1.08;
        var s = 96 + (big - 96) * e;
        it.el.style.setProperty('--s', s.toFixed(1) + 'px');
        it.el.style.setProperty('--a', (1 - clamp(zr * 3)).toFixed(3));
      } else if (it.kind === 'story') {
        if (W.innerWidth <= 860 || !motion) continue;
        var run2 = it.h - vh, sp = clamp(rel / run2);
        var k = Math.min(2, Math.floor(sp * 3));
        if (k !== it.k) {
          it.k = k;
          it.slides.forEach(function (sl) { sl.classList.toggle('on', +sl.dataset.slide === k); });
          it.tabs.forEach(function (tb, j) { tb.classList.toggle('on', j === k); tb.setAttribute('aria-selected', j === k); });
        }
        it.tabs.forEach(function (tb, j) { tb.style.setProperty('--f', clamp(sp * 3 - j).toFixed(3)); });
      } else if (it.kind === 'statement' && motion) {
        var sp2 = clamp((y + vh * .85 - it.y) / (it.h + vh * .15));
        var n = it.s.words.length, lit = Math.round(sp2 * n * 1.15);
        if (lit !== it.s.last) {
          it.s.last = lit;
          for (var w = 0; w < n; w++) it.s.words[w].style.setProperty('--o', w < lit ? 1 : .3);
        }
      }
    }
    if (!covered && !nearBridge) setTheme(wantedTheme(y)); // after a jump (anchor, reload mid-page)
    if (snavUpdate) snavUpdate(y);
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }

  /* story tabs: click jumps to that step */
  items.forEach(function (it) {
    if (it.kind !== 'story') return;
    it.tabs.forEach(function (tb, j) {
      tb.addEventListener('click', function () {
        W.scrollTo({ top: it.y + (it.h - vh) * (j + .5) / 3, behavior: reduce ? 'auto' : 'smooth' });
      });
    });
  });

  /* ---- Proof numbers: count once at 40 % in view, never above the final value ---- */
  function countSetup() {
    $('[data-count] data[value]').forEach(function (n) { n.style.minWidth = Math.ceil(n.getBoundingClientRect().width) + 'px'; });
    if (!motion || !('IntersectionObserver' in W)) return;
    $('[data-count]').forEach(function (g) {
      var ds = $('data[value]', g);
      if (g.getBoundingClientRect().top < vh) return; // already on screen: leave final values
      ds.forEach(function (d) { d.textContent = '0'; });
      var io = new IntersectionObserver(function (es) {
        if (!es[0].isIntersecting) return; io.disconnect();
        var t0 = performance.now();
        (function step(t) {
          var x = clamp((t - t0) / 1400), e = 1 - Math.pow(1 - x, 3);
          ds.forEach(function (d) { var to = +d.getAttribute('value'); d.textContent = Math.min(to, Math.round(to * e)).toLocaleString('en-GB'); });
          if (x < 1) requestAnimationFrame(step);
        })(t0);
      }, { threshold: .4 });
      io.observe(g);
    });
  }
  if (D.fonts && D.fonts.ready) D.fonts.ready.then(countSetup); else countSetup(); // measure with the final font

  /* ---- Reveals: only below the first screen ---- */
  if (motion && 'IntersectionObserver' in W) {
    var rio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); } }); }, { threshold: .2 });
    $('[data-r]').forEach(function (el) { if (el.getBoundingClientRect().top > vh) { el.classList.add('rv'); rio.observe(el); } });
  }

  /* ---- Section nav: active item, mobile select ---- */
  var snavUpdate = null;
  var snav = D.querySelector('.v4-snav');
  if (snav) {
    var links = $('a[href^="#"]', snav), sel = snav.querySelector('select');
    var targets = links.map(function (a) { return D.getElementById(a.getAttribute('href').slice(1)); });
    var mark = function (id) {
      links.forEach(function (a) { var on = a.getAttribute('href') === '#' + id; a.classList.toggle('on', on); if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
      if (sel) sel.value = id;
    };
    var cur = null;
    snavUpdate = function (y) {
      var id = null;
      targets.forEach(function (t) { if (t && top(t) <= y + vh * .5) id = t.id; });
      if (id !== cur) { cur = id; mark(id); }
    };
    var go = function (id) {
      var t = D.getElementById(id); if (!t) return;
      t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + id);
    };
    links.forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); go(a.getAttribute('href').slice(1)); }); });
    if (sel) sel.addEventListener('change', function () { go(sel.value); });
  }

  /* ---- Option toggles (dot + text) ---- */
  $('.v4-opt').forEach(function (b) {
    b.addEventListener('click', function () {
      var group = b.closest('[data-single]');
      if (group) $('.v4-opt', group).forEach(function (o) { o.setAttribute('aria-pressed', o === b); });
      else b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true');
    });
  });

  measure(); frame();
  W.addEventListener('scroll', onScroll, { passive: true });
  W.addEventListener('resize', function () { measure(); onScroll(); });
  if ('ResizeObserver' in W) new ResizeObserver(function () { measure(); onScroll(); }).observe(D.body);
  W.addEventListener('load', function () { measure(); onScroll(); });
})();
